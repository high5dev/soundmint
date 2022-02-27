import Image from "next/image";
import SoundArtsDrop from "./soundarts-drop";

const IntersectionOfArtAndAudio = ({}) => {
  const whatIsItems = [
    {
      text: "SoundMint is a generative platform for music NFTs.",
      image: "/img/home/what-is-icon-1.svg",
    },
    {
      text: "Each Piece is a unique musical art piece.",
      image: "/img/home/what-is-soundmint-icon-2.svg",
    },
    {
      text: "Infinite Possibilities",
      image: "/img/home/what-is-icon-3.svg",
    },
  ];
  const artists = [
    {
      title: "DJ & Producer",
      image: "/img/about/about-dj-producer.png",
    },
    {
      title: "Visual Artist",
      image: "/img/about/about-visual-artist.png",
    },
  ];
  return (
    <section className="bg-black text-white pb-16">
      <div className="wrapper">
        <h3 className="text-[35px] md:text-[50px] mx-auto max-w-[350px] md:max-w-[400px] lg:max-w-full lg:mb-12 py-14 text-center">
          A new medium of music creation
        </h3>

        <div className="xl:grid xl:grid-cols-2 xl:gap-20">
          <div>
            <div className="text-center md:text-left">
              {whatIsItems.map((item, i) => (
                <div key={i} className="mb-20 md:mb-12 md:flex md:items-center">
                  <div className="mx-auto mb-4 md:mb-0 md:mr-8">
                    <Image
                      src={item.image}
                      className="mx-auto"
                      alt={item.text}
                      width="105"
                      height="105"
                    />
                  </div>
                  <p className="w-[230px] mx-auto font-mono md:w-full text-base lg:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="font-mono xl:max-w-[580px] text-base lg:text-sm"
              style={{ lineHeight: "22px" }}
            >
              SoundMint{"'"}s NFT drops are musical compositions derived from
              stems, with varying acoustic properties, algorithmically combined
              to create a set of unique 30 second musical art pieces. As a new
              form of generative music, the NFTs are paired with visual
              elements, each as variant as the music itself. SoundMint’s
              platform reimagines the process of creating a new form of art
              music.
            </p>
          </div>

          <div className="text-center my-16 md:grid md:grid-cols-2 xl:grid-cols-1 space-y-16 md:space-y-0 xl:hidden">
            {artists.map((artist, i) => {
              return (
                <div className="xl:last:flex-row-reverse" key={i}>
                  <div className="xl:flex xl:items-center ">
                    <div className="mb-4 lg:hidden">
                      <Image
                        src={artist.image}
                        alt={artist.title}
                        width="200"
                        height="200"
                      />
                    </div>
                    <div className="hidden lg:block">
                      <Image
                        src={artist.image}
                        alt={artist.title}
                        width="250"
                        height="250"
                      />
                    </div>
                    <h4 className="font-mono text-lg flex-1">{artist.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden xl:flex flex-col justify-between">
            {artists.map((artist, i) => {
              if (i === 0) {
                return (
                  <div className="flex justify-between items-center" key={i}>
                    <div>
                      <Image
                        src={artist.image}
                        alt={artist.title}
                        width="250"
                        height="250"
                      />
                    </div>
                    <h4 className="text-lg font-mono">{artist.title}</h4>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex flex-row-reverse justify-between items-center"
                    key={i}
                  >
                    <div>
                      <Image
                        src={artist.image}
                        alt={artist.title}
                        width="250"
                        height="250"
                      />
                    </div>
                    <h4 className="text-lg font-mono">{artist.title}</h4>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntersectionOfArtAndAudio;
