import { useRef, useEffect, useState } from "react";

const PreviewTrack = ({ ...props }) => {

  const { track, onTrackPlay, isPlaying, onTrackFinish } = props;
  const { id } = track;
  const [waveSurfer, setWaveSurfer] = useState({});
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
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
          responsive: true,
        });

        waveSurfer.on("audioprocess", function (time) {
          if (waveSurfer.isPlaying()) {
            setDuration(waveSurfer.getDuration());
            setCurrentTime(waveSurfer.getCurrentTime());
          }
        });

        waveSurfer.on("ready", function () {
          setWaveReady(true);
        });

        waveSurfer.on("finish", function () {
          waveSurfer.seekTo(0);
          setCurrentTime(0);
          onTrackFinish(id);
        });

        setWaveSurfer(waveSurfer);

        waveSurfer.load(track.wav);
      }
    };

    init();
  }, []);

  return (
    <div className="mb-16 lg:mb-0">
      <div ref={waveFormRef} />
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={!waveReady}
          className={`bg-brightGreen text-black p-2 text-sm font-bold border border-brightGreen hover:bg-brightBlue hover:border-brightBlue w-full max-w-[200px]`}
          onClick={() => onTrackPlay(waveSurfer, id)}
        >
          {isPlaying ? `Pause` : `Play`} Preview Track
        </button>
        <div className="font-sans text-xs font-bold">
          <p>
            <span>{`${currentTime ? currentTime.toFixed(2) : `00:00`}`}</span>{" "}
            {"//"} {`${duration ? duration.toFixed(2) : `00:00`}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewTrack;
