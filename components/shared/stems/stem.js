import { useRef, useEffect, useState } from "react";
import { BlackPlayButton, BlackPauseButton } from "../icons";

const Stem = ({ ...props }) => {

  const {stem, onStemFinish, onStemPlay, isPlaying} = props;
  const {wav, title, id} = stem;


  const [waveSurfer, setWaveSurfer] = useState({});
  const [waveReady,setWaveReady] = useState(false);
  const waveFormRef = useRef();

  useEffect(() => {
    const init = async () => {
      if (waveFormRef.current) {

        const WaveSurfer = await require("wavesurfer.js");
        const waveSurfer = WaveSurfer.create({
          container: waveFormRef.current,
          waveColor: "#cccccc",
          progressColor: "#000",
          cursorColor: "transparent",
          barWidth: 2,
          barRadius: 2,
          cursorWidth: 1,
          height: 200,
          barGap: 2,
          responsive: true
        });

        setWaveSurfer(waveSurfer);
        waveSurfer.load(wav);

        waveSurfer.on("ready", function () {
          setWaveReady(true);
        });

        waveSurfer.on("finish", function () {
          waveSurfer.seekTo(0);
          onStemFinish(id);
        });

      }
    };

    init();
  }, []);

  return (
    <div className="mb-12">
      <div ref={waveFormRef} className="md:max-w-[300px]" />
      <div className="flex items-center">
        <button 
          className="mr-6" 
          disabled={!waveReady}
          onClick={() => onStemPlay(waveSurfer, id)} 
          >
          {isPlaying ? <BlackPauseButton /> : <BlackPlayButton />}
        </button>
        <p className="font-mono text-sm">{title}</p>
      </div>
    </div>
  );
};

export default Stem;
