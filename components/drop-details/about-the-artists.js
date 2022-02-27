import Image from "next/image";
import { useContext } from "react";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";

const AboutTheArtists = () => {
  const { aboutTheArtistsRef } = useContext(ScrollContext);

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );
  const artists = [
    {
      name: "KLOUD",
      bio: "KLOUD is an electronic producer & artist that merges timeless electronic sounds with modern production elements; sonically inspired by darker techno/house, electro & analog synthesizers.",
      img: "/img/drop-details/kloud.jpg",
      imgLg: "/img/drop-details/kloud-lg.jpg",
      caption: {
        name: "KLOUD",
        title: "DJ & Producer",
      },
    },
    {
      name: "Alex Hooker",
      bio: "3D artist and freelance motion designer. Alex's work spans NFTs, concert visuals, music videos, and commercials, crafted with a cyberpunk aesthetic. Alex is a member of pleasrDAO.",
      img: "/img/drop-details/hooker.jpg",
      imgLg: "/img/drop-details/hooker-lg.jpg",
      caption: {
        name: "Alex Hooker",
        title: "Visual Artist",
      },
    },
  ];
  return (
    <InView
      onChange={(inView) =>
        onComponentVisible(inView, componentNames.aboutTheArtists)
      }
    >
      <section
        className="bg-black text-white py-28 lg:py-26"
        ref={aboutTheArtistsRef}
      >
        <div className="wrapper">
          <div className="sm:hidden">
            <h3 className="text-[45px] leading-tight mb-2 font-bold">
              Meet the <br className="md:hidden" /> artists.
            </h3>
            {artists.map((artist, i) => (
              <div key={i} className="py-8">
                <h5 className="text-2xl mb-2 font-bold">{artist.name}</h5>
                <p className="text-mono mb-8">{artist.bio}</p>
                <div className="relative">
                  <Image
                    src={artist.img}
                    alt={artist.name}
                    width="350"
                    height="350"
                  />
                  <div className="absolute bottom-0 left-0 bg-black text-white py-2 px-6">
                    <p className="text-sm">
                      <span className="font-bold">{artist.caption.name}</span>
                      {"//"}{" "}
                      <span className="text-mono">{artist.caption.title}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:block lg:hidden">
            <h3 className="text-[55px] leading-tight mb-12 font-bold">
              Meet the artists.
            </h3>
            <div className="grid grid-cols-2 gap-20">
              {artists.map((artist, i) => (
                <div key={i}>
                  <h5 className="text-2xl mb-2 font-bold">{artist.name}</h5>
                  <div className="mb-4 relative">
                    <Image
                      src={artist.img}
                      alt={artist.name}
                      width="400"
                      height="400"
                    />
                    <div className="absolute bottom-0 left-0 bg-black text-white py-2 pr-6">
                      <p className="text-sm">
                        <span className="font-bold">{artist.caption.name}</span>
                        {"//"}{" "}
                        <span className="text-mono">
                          {artist.caption.title}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-mono">{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-10 min-h-[500px]">
            <div className="flex flex-col justify-between items-stretch pr-8">
              <h3 className="text-[55px] leading-tight font-bold">
                Meet the <br className="md:hidden" /> artists.
              </h3>
              {artists.map((artist, i) => (
                <div key={i} className="mt-8">
                  <h5 className="text-xl mb-2 font-bold">{artist.name}</h5>
                  <p className="text-mono mb-8 last:mb-0">{artist.bio}</p>
                </div>
              ))}
            </div>
            {artists.map((artist, i) => (
              <div className="relative" key={i}>
                <div
                  style={{
                    backgroundImage: `url(${artist.imgLg})`,
                    width: "100%",
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <div className="absolute bottom-0 left-0 bg-black text-white py-2 pr-6">
                  <p className="text-sm">
                    <span className="font-bold">{artist.caption.name}</span>
                    {"//"}{" "}
                    <span className="text-mono">{artist.caption.title}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InView>
  );
};

export default AboutTheArtists;
