import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";

import {
  DiscordBlack,
  InstagramBlack,
  TwitterBlack,
  OpenSeaBlack,
  MediumBlack,
} from "./icons";
import { ScrollContext, ContractContext } from "../../layout/page";

const Footer = () => {
  const { mintShowCaseRef, executeScroll } = useContext(ScrollContext);
  const { minter, baseToken, web3 } = useContext(ContractContext);

  const [isMintActive, setIsMintActive] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (minter && baseToken && web3) {
        const isSaleActive = await minter.methods.saleIsActive().call();
        const isSignedMintIsActive = await minter.methods
          .signedMintIsActive()
          .call();

        setIsMintActive(isSaleActive || isSignedMintIsActive);
      }
    };
    init();
  }, [minter, baseToken, web3]);

  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="pb-10">
      <div className="wrapper">
        <div className="md:flex md:justify-between items-center">
          <div className="text-center mb-4 md:mb-0">
            <Link href="/">
              <a>
                <Image
                  src="/img/soundmint-black.svg"
                  alt="SoundMint"
                  width="150"
                  height="36"
                  quality={100}
                />
              </a>
            </Link>
          </div>
          <ul className="hidden md:flex space-x-8">
            {isMintActive && (
              <li className="hover:text-gray-400">
                <a
                  title="Mint"
                  className="text-sm hover:cursor-pointer"
                  onClick={() =>
                    Router.push("/we-are-kloud").then(() => {
                      if (mintShowCaseRef) {
                        executeScroll(mintShowCaseRef);
                      }
                    })
                  }
                >
                  Mint
                </a>
              </li>
            )}
            <li className="hover:text-gray-400">
              <Link href="/drops">
                <a title="Drops" className="text-sm">
                  Drops
                </a>
              </Link>
            </li>
            {/* <li className="hover:text-gray-400">
              <Link href="/rarity">
                <a title="Rarity" className="text-sm">
                  Rarity
                </a>
              </Link>
            </li> */}
            <li className="hover:text-gray-400">
              <Link href="/about">
                <a title="About" className="text-sm">
                  About
                </a>
              </Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/contact">
                <a title="Contact" className="text-sm">
                  Contact
                </a>
              </Link>
            </li>
            <li className="hover:text-gray-400">
              <a
                title="Apply"
                href="https://go.soundmint.xyz/join"
                target="_blank"
                className="text-sm"
                rel="noreferrer"
              >
                Apply
              </a>
            </li>
          </ul>
          <ul className="flex justify-center md:hidden space-x-6">
            <li>
              <a
                href="https://go.soundmint.xyz/discord"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/ig"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/twitter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/opensea"
                target="_blank"
                rel="noreferrer"
              >
                <OpenSeaBlack />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/soundmint"
                target="_blank"
                rel="noreferrer"
              >
                <MediumBlack />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center text-sm md:flex md:justify-between">
          <ul className="mb-4 flex justify-center space-x-6 text-[12px]">
            <li>©{year} SoundMint. All rights reserved.</li>
            {/* <li className="hidden md:block">
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="#">
                <a>Terms & Conditions</a>
              </Link>
            </li> */}
          </ul>
          <ul className="space-x-6 hidden md:flex">
            <li>
              <a
                href="https://go.soundmint.xyz/discord"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/ig"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/twitter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterBlack />
              </a>
            </li>
            <li>
              <a
                href="https://go.soundmint.xyz/opensea"
                target="_blank"
                rel="noreferrer"
              >
                <OpenSeaBlack />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/soundmint"
                target="_blank"
                rel="noreferrer"
              >
                <MediumBlack />
              </a>
            </li>
          </ul>
          {/* <ul className="flex space-x-6 justify-center md:hidden text-[12px] pb-6">
            <li>
              <Link href="/">
                <a title="Privacy Policy">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a title="Terms & Conditions">Terms & Conditions</a>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
