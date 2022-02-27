import PreviewTrack from "./preview-track";
import { useState, useEffect } from "react";

const PreviewTracks = ({
  tracks,
  onTrackPlay,
  onTrackFinish,
  selectedTrack,
  onTabClick,
}) => {
  return (
    <div className="py-10 lg:py-20">
      <div className="md:flex mb-6">
        <div className="grid grid-cols-5 gap-8 lg:gap-14 border-b border-gray-400 flex-shrink-0">
          {tracks.map((track, i) => {
            return (
              <div
                key={i}
                onClick={() => onTabClick(track)}
                className={`col-span-1 text-sm pb-4 hover:cursor-pointer font-bold text-center ${
                  selectedTrack === track.title
                    ? `border-b-[3px] border-black`
                    : `text-gray-400`
                }`}
              >
                <span className="hidden md:block">{track.title}</span>
                <p className="md:hidden block text-center text-2xl">{i + 1}</p>
              </div>
            );
          })}
        </div>
        <div className="hidden md:block border-b border-gray-400 w-full" />
      </div>
      <div className="">
        {tracks.map((track, i) => {
          if (track.title === selectedTrack) {
            return (
              <PreviewTrack
                key={i}
                track={track}
                onTrackPlay={onTrackPlay}
                isPlaying={track.isPlaying}
                onTrackFinish={onTrackFinish}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default PreviewTracks;
