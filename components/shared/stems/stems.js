import Stem from "./stem";
import PreviewTracks from "../preview-tracks/preview-tracks";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../../layout/page";
import { InView } from "react-intersection-observer";
import Router from 'next/router';

const Stems = ({ title, text, pillText }) => {

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );
  const { stemsRef } = useContext(ScrollContext);
  const [isMintActive, setIsMintActive] = useState(false);
  const { minter } = useContext(ContractContext);

  const [stems, setStems] = useState([
    {
      isPlaying: false,
      title: "Bass Trait Preview",
      wav: "/wav/stems/bassline.wav",
      id: 1,
    },
    {
      isPlaying: false,
      title: "Lead Trait Preview",
      wav: "/wav/stems/lead.wav",
      id: 2,
    },
    {
      isPlaying: false,
      title: "Drum Trait Preview",
      wav: "/wav/stems/drum.wav",
      id: 3,
    },
    {
      isPlaying: false,
      title: "Precussion Trait Preview",
      wav: "/wav/stems/percussion.wav",
      id: 4,
    },
    {
      isPlaying: false,
      title: "Vocal Traits Preview",
      wav: "/wav/stems/vocal.wav",
      id: 5,
    },
  ]);

  const [tracks, setTracks] = useState([
    {
      isPlaying: false,
      title: "Preview Track 1",
      wav: "/wav/preview-tracks/preview-track-1.wav",
      id: 1,
    },
    {
      isPlaying: false,
      title: "Preview Track 2",
      wav: "/wav/preview-tracks/preview-track-2.wav",
      id: 2,
    },
    {
      isPlaying: false,
      title: "Preview Track 3",
      wav: "/wav/preview-tracks/preview-track-3.wav",
      id: 3,
    },
    {
      isPlaying: false,
      title: "Preview Track 4",
      wav: "/wav/preview-tracks/preview-track-4.wav",
      id: 4,
    },
    {
      isPlaying: false,
      title: "Preview Track 5",
      wav: "/wav/preview-tracks/preview-track-5.wav",
      id: 5,
    },
  ]);

  const [playingStems, setPlayingStems] = useState(new Map());
  const [playingTracks, setPlayingTracks] = useState(new Map());
  const [selectedTrack, setSelectedTrack] = useState(tracks[0].title);

  useEffect(() => {

    const routeChangeStart = () => {

      for (const [, value] of playingStems.entries()) {
        value.pause();
      }

      for (const [, value] of playingTracks.entries()) {
        value.pause();
      }   

    };


    const init = async () => {
      if (minter) {
        const isSaleActive = await minter.methods.saleIsActive().call();
        const isSignedMintIsActive = await minter.methods
          .signedMintIsActive()
          .call();
        setIsMintActive(isSaleActive || isSignedMintIsActive);
      }
    };

    init();

    Router.events.on('routeChangeStart', routeChangeStart);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
    };

  }, [stems, tracks]);

  const onStemPlay = (waveSurfer, id) => {
    const updatedStems = [...stems];

    for (const [, value] of playingStems.entries()) {
      value.pause();
    }

    for (let stem of updatedStems) {
      const index = updatedStems.indexOf(stem);

      if (stem.id === id) {
        updatedStems[index].isPlaying = !updatedStems[index].isPlaying;
      } else {
        updatedStems[index].isPlaying = false;
      }
    }

    if (updatedStems.find((s) => s.id === id).isPlaying) {
      waveSurfer.play();
      setPlayingStems(playingStems.set(id, waveSurfer));
    } else {
      waveSurfer.pause();
    }

    setStems(updatedStems);
  };

  const onTrackPlay = (waveSurfer, id) => {
    const updatedTracks = [...tracks];
    const track = updatedTracks.find((t) => t.id === id);
    const index = updatedTracks.indexOf(track);
    updatedTracks[index].isPlaying = !updatedTracks[index].isPlaying;

    if (updatedTracks[index].isPlaying) {
      waveSurfer.play();
      setPlayingTracks(playingTracks.set(id, waveSurfer));
    } else {
      waveSurfer.pause();
    }

    setTracks(updatedTracks);
  };

  const onStemFinish = (id) => {
    const updatedStems = [...stems];
    const stem = updatedStems.find((s) => s.id === id);
    const index = updatedStems.indexOf(stem);

    updatedStems[index] = {
      ...updatedStems[index],
      isPlaying: false,
    };

    setStems(updatedStems);
  };

  const onTrackFinish = (id) => {
    const updateTracks = [...tracks];
    const track = updateTracks.find((t) => t.id === id);
    const index = updateTracks.indexOf(track);

    updateTracks[index] = {
      ...updateTracks[index],
      isPlaying: false,
    };

    setTracks(updateTracks);
  };

  const onTabClick = (track) => {
    const updatedTracks = [...tracks];
    for (const [, value] of playingTracks.entries()) {
      value.pause();
    }

    for (let track of updatedTracks) {
      const index = updatedTracks.indexOf(track);
      updatedTracks[index].isPlaying = false;
    }

    setTracks(updatedTracks);
    setSelectedTrack(track.title);
  };

  const onSelectedTrack = (track) => {
    setSelectedTrack(track.title);
  };

  return (
    <InView
      onChange={(inView) => onComponentVisible(inView, componentNames.stems)}
    >
      <section className="py-10 lg:py-20" ref={stemsRef} id="stems">
        <div className="wrapper">
          <div className="flex lg:mb-10">
            <div className="flex-shrink-0 border-0 lg:border-b-[3px] lg:border-black">
              <h3
                className={`text-[40px] lg:text-[50px] mb-4 font-bold ${
                  pillText ? `flex` : ``
                }`}
              >
                <span>{title}</span>
                {pillText && (
                  <p className="ml-4 text-sm bg-black text-white h-[35px] lg:h-[40px] relative top-3 lg:top-4 px-4">
                    <span className="relative top-2 lg:top-2.5">
                      {pillText}
                    </span>
                  </p>
                )}
              </h3>
            </div>
            <div className="flex-2 border-b border-gray-400 w-full hidden lg:block">
              <p className="font-mono flex-2 text-sm pl-16 xl:pl-40 relative top-[20px] hidden lg:block">
                {text}
              </p>
            </div>
          </div>

          <p className="block lg:hidden font-mono mb-10">{text}</p>
          <div className="flex lg:hidden mb-10">
            <div className="border-b-[3px] border-black flex-1" />
            <div className="border-b border-gray-400 flex-1" />
          </div>
          <div className="md:hidden">
            {stems.map((stem, i) => (
              <Stem
                key={i}
                stem={stem}
                isPlaying={stem.isPlaying}
                onStemPlay={onStemPlay}
                onStemFinish={onStemFinish}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-20">
              {stems.slice(0, 3).map((stem, i) => (
                <Stem
                  key={i}
                  stem={stem}
                  isPlaying={stem.isPlaying}
                  onStemPlay={onStemPlay}
                  onStemFinish={onStemFinish}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-20 max-w-[800px] mx-auto">
              {stems.slice(3).map((stem, i) => (
                <Stem
                  key={i}
                  stem={stem}
                  isPlaying={stem.isPlaying}
                  onStemPlay={onStemPlay}
                  onStemFinish={onStemFinish}
                />
              ))}
            </div>
          </div>
          <PreviewTracks
            tracks={tracks}
            onTrackPlay={onTrackPlay}
            onTrackFinish={onTrackFinish}
            selectedTrack={selectedTrack}
            onTabClick={onTabClick}
            onSelectedTrack={onSelectedTrack}
          />
          <div className="text-center">
            <div className="text-[24px] font-bold mb-4">
              1 Bass + 1 Chord + 1 Drum + 1 Percussion + 1 Vocal{" "}
              <span className="inline-block md:hidden">=</span>
            </div>
            <div className="text-[40px] lg:text-[50px] font-bold">
              <p>
                <span className="hidden md:inline-block">=</span> 1 Unique Track
              </p>
            </div>
            <div className="my-10">
              {isMintActive && (
                <Link href="/we-are-kloud">
                  <a
                    title="Mint Now"
                    className="bg-black text-white py-2 px-10 w-full md:w-auto border border-white text-md font-bold hover:bg-white hover:text-black hover:border-black mb-10"
                  >
                    Mint Now
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default Stems;
