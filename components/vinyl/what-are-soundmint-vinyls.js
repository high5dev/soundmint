import Image from "next/image";
import Link from "next/dist/client/link";


const SoundmintVinyls = ({}) => {
  const mintVinyl = [
    {
      image: <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0ZM27.9996 15.9474C21.3433 15.9474 15.9472 21.3434 15.9472 27.9998C15.9472 34.6562 21.3433 40.0522 27.9996 40.0522C34.656 40.0522 40.052 34.6562 40.052 27.9998C40.052 21.3434 34.656 15.9474 27.9996 15.9474Z" fill="#5FFECD"/>
      <rect x="25.6777" y="25.6812" width="4.64157" height="4.64157" rx="2.32078" fill="#5FFECD"/>
      </svg>
    },
  ];
    const goldVinyl = [
      {
        image: <svg width="32" height="32" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0ZM27.9996 15.9474C21.3433 15.9474 15.9472 21.3434 15.9472 27.9998C15.9472 34.6562 21.3433 40.0522 27.9996 40.0522C34.656 40.0522 40.052 34.6562 40.052 27.9998C40.052 21.3434 34.656 15.9474 27.9996 15.9474Z" fill="#BA9761"/>
        <rect x="25.6777" y="25.6812" width="4.64157" height="4.64157" rx="2.32078" fill="#BA9761"/>
        </svg>
        
      },
  ];
  return (
    <section className="mt-10 bg-white text-black pb-16">
      <div className="wrapper">
        <h3 className="text-[35px] md:text-[40px] w-full lg:max-w-full pt-14 pb-5 text-left font-bold">
          What are the SoundMint&nbsp;Vinyls?
        </h3>
        <p className="mb-5 font-mono">The SoundMint Vinyls are digital notes that allow the holders / owners of the vinyls to receive direct exposure to SoundMint’s value as a platform through future token&nbsp;redemption.</p>
        <p className="font-mono">The SoundMint Vinyls are our way as a team in rewarding early supporters of our first curated drop, the <Link href="/we-are-kloud" className="underline">WE ARE KLOUD NFT collection</Link>, and transitioning them into stakeholders that have the ability to redeem their vinyls for tokens in the&nbsp;future.</p>
        <h3 className="text-[35px] md:text-[40px] w-full lg:max-w-full pt-14 pb-5 text-left font-bold">
          What’s the difference between the Mint and the Gold&nbsp;Vinyl?
        </h3>
        <p className="mb-5 font-mono">The two colors are meant to represent different weighted holdings of tokens. Mint vinyls are to be more common, as gold vinyls are more&nbsp;rare.</p>
        <p className="font-mono">Holders can earn gold vinyls by holding 10 WE ARE KLOUD NFTs, and earn an additional gold vinyl for another 10 more they hold. Whereas mint vinyls are to be earned for holding 1 NFT, 5 NFTs, 10 NFTs, and 20&nbsp;NFTs. </p>
        <div className="column-1">
          <div className="mt-20 text-left">
            <div className=" mb-5 w-full flex md:items-center gap-3">
              <p className="min-w-[182px] font-mono text-base lg:text-sm uppercase">
                1 nft = 1 Mint&nbsp;Vinyl
              </p>
              <div className="grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4">
                {mintVinyl.map((item, i) => (
                  <div key={i} className="w-[32px] mb-4 md:mb-0 md:mr-8">
                    {item.image}
                  </div>
                ))}
              </div>
          </div>
          <div className="text-left">
            <div className="mb-5 w-full flex md:items-center gap-3">
                <p className="min-w-[182px] font-mono text-base lg:text-sm uppercase">
                  5 nft = 2 Mint&nbsp;Vinyl
                </p>
                <div className="grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4">
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" text-left">
            <div className="mb-5 w-full flex md:items-center gap-3">
                <p className="min-w-[182px] font-mono text-base lg:text-sm uppercase">
                  10 nft = 2 Mint Vinyl ± 1 Gold&nbsp;Vinyl
                </p>
                <div className="grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4 ">
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <div className=" text-left">
            <div className="mb-20 md:mb-12 w-full flex md:items-center gap-3">
                <p className="font-mono text-base lg:text-sm uppercase">
                  20 nft = 2 Mint Vinyl ± 2 Gold&nbsp;Vinyl
                </p>
                <div className="grid gap-x-7 gap-y-4 sm:gap-x-4 grid-cols-2 sm:grid-cols-4 ">
                  {mintVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {mintVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0 md:mr-4">
                      {item.image}
                    </div>
                  ))}
                  {goldVinyl.map((item, i) => (
                    <div  key={i} className="w-[32px] md:mb-0">
                      {item.image}
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundmintVinyls;
