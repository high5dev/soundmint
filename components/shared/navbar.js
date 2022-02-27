import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { ScrollContext } from "../../layout/page";
import {
  DiscordWhite,
  InstagramWhite,
  TwitterWhite,
  OpenSeaWhite,
  OpenBtn,
  CloseBtn,
  DropDownIcon,
  DropDownIconLg,
  MediumWhite,
} from "./icons";
import { motion, AnimatePresence } from "framer-motion";

// wallet conenctor
const WalletConnector = dynamic(() => import("./wallet-connector"));

const Navbar = () => {
  // mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // dropdown menu state
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // subscrube ref and execute scroll
  const { subscribeRef, executeScroll } = useContext(ScrollContext);

  const drops = [
    {
      title: "We Are Kloud",
      link: "/we-are-kloud",
    },
  ];

  // functions that help with menu
  typeof window !== "undefined" &&
    window.addEventListener("resize", function (event) {
      var w = document.documentElement.clientWidth;
      const body = document.getElementsByTagName("body")[0];
      if (w >= 991) {
        setMenuOpen(false);
        body.classList.remove("fixed-body");
      }
    });

  //function to help with fixed header
  // typeof window !== "undefined" &&
  //   window.addEventListener("scroll", function (event) {
  //     var scroll = this.scrollY;
  //     const header = document.getElementById("header");
  //     if (scroll >= 100) {
  //       header.classList.add("fixed-header");
  //     } else {
  //       header.classList.remove("fixed-header");
  //     }
  //   });

  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <nav
        className="py-8 bg-black fixed-header"
        id="header"
        onMouseLeave={() => setDropDownOpen(false)}
      >
        <div className="wrapper flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a
                title="SoundMint"
                className="flex-shrink-0"
                style={{ zIndex: "999999999" }}
                onMouseEnter={() => setDropDownOpen(false)}
              >
                <div
                  className="block md:hidden image"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <Image
                    src="/img/soundmint-white.svg"
                    alt="Sound Arts"
                    width="200"
                    height="42"
                    priority
                  />
                </div>
                <div className="hidden md:block image">
                  <Image
                    src="/img/soundmint-white.svg"
                    alt="Sound Arts"
                    width="170"
                    height="35"
                    priority
                  />
                </div>
              </a>
            </Link>
            <ul className="text-white hidden xl:flex items-center ml-8 relative space-x-6">
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => setDropDownOpen(true)}
              >
                <span>
                  <a
                    title="Mint"
                    className="text-sm flex items-center hover:text-brightGreen"
                  >
                    <span>Mint</span>
                    <div
                      className={`ml-2 relative top-[1px] ${
                        dropDownOpen ? `rotate-180` : ``
                      }`}
                    >
                      <DropDownIcon />
                    </div>
                  </a>
                  {dropDownOpen && (
                    <div
                      className="absolute top-[23px] left-0 bg-white text-black w-[150px] text-center z-50"
                      onMouseLeave={() => setDropDownOpen(false)}
                    >
                      <ul className="text-xs uppercase font-bold">
                        {drops.map((drop, i) => (
                          <li onClick={() => setDropDownOpen(false)} key={i}>
                            <Link href={drop.link}>
                              <a
                                title={drop.title}
                                className="p-2 hover:bg-brightGreen block"
                              >
                                {drop.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </span>
              </li>
              <li onMouseEnter={() => setDropDownOpen(false)}>
                <Link href="/drops">
                  <a title="Drops" className="text-sm hover:text-brightGreen">
                    Drops
                  </a>
                </Link>
              </li>
              {/* <li onMouseEnter={() => setDropDownOpen(false)}>
                <Link href="/rarity">
                  <a title="Rarity" className="text-sm hover:text-brightGreen">
                    Rarity
                  </a>
                </Link>
              </li> */}
              <li onMouseEnter={() => setDropDownOpen(false)}>
                <Link href="/about">
                  <a title="About" className="text-sm hover:text-brightGreen">
                    About
                  </a>
                </Link>
              </li>
              <li onMouseEnter={() => setDropDownOpen(false)}>
                <Link href="/vinyl">
                  <a title="vinyl" className="">
                  <div className='vinyl-icon'>
                      <span className='pr-3 text-sm hover:text-brightGreen'>Vinyl</span>
                      <svg className='vinyl-border' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M256 152a104 104 0 1 0 104 104a104 104 0 0 0-104-104zm0 128a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128a128 128 0 0 1-128 128z"/></svg>
                  </div>
                  </a>
                </Link>
              </li>
              {/* <li
                onMouseEnter={() => setDropDownOpen(false)}
                onClick={() => executeScroll(subscribeRef)}
              >
                <a className="text-sm hover:cursor-pointer hover:text-brightGreen">
                  Subscribe
                </a>
              </li> */}
            </ul>
          </div>
          <div
            className="hidden xl:flex relative"
            style={{ zIndex: "999999999" }}
          >
            <ul className="space-x-6 items-center hidden xl:flex mr-6">
              <li>
                <a
                  href="https://go.soundmint.xyz/discord"
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiscordWhite />
                </a>
              </li>
              <li>
                <a
                  href="https://go.soundmint.xyz/ig"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramWhite />
                </a>
              </li>
              <li>
                <a
                  href="https://go.soundmint.xyz/twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterWhite />
                </a>
              </li>
              <li>
                <a
                  href="https://go.soundmint.xyz/opensea"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenSeaWhite />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/soundmint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MediumWhite />
                </a>
              </li>
            </ul>
            <WalletConnector />
          </div>
          <div style={{ zIndex: "999999999" }} className="xl:hidden relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setDropDownOpen(false);
                const body = document.getElementsByTagName("body")[0];
                if (menuOpen === false) {
                  body.classList.add("fixed-body");
                } else {
                  body.classList.remove("fixed-body");
                }
              }}
              className="bg-white text-black"
            >
              {menuOpen === true ? <OpenBtn /> : <CloseBtn />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="block h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-black"
          >
            <div className="wrapper pt-[110px] h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="mb-8">
                    <WalletConnector />
                  </div>
                  <ul className="text-[36px] text-white space-y-4">
                    <li
                      className="font-bold flex items-center justify-between relative hover:cursor-pointer hover:text-brightGreen"
                      onClick={() => setDropDownOpen(!dropDownOpen)}
                    >
                      <span className="hover:cursor-pointer">Mint</span>
                      <div className={`${dropDownOpen ? `rotate-180` : ``}`}>
                        <DropDownIconLg />
                      </div>
                    </li>
                    {dropDownOpen && (
                      <ul className="text-white text-[28px] uppercase font-bold space-y-4 leading-tight">
                        {drops.map((drop, i) => (
                          <li className="pl-8 hover:cursor-pointer" key={i}>
                            <a
                              href={drop.link}
                              title={drop.title}
                              className="hover:text-brightGreen text-lg"
                            >
                              {drop.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    <li
                      onClick={() => {
                        const body = document.getElementsByTagName("body")[0];
                        setMenuOpen(false);
                        body.classList.remove("fixed-body");
                      }}
                    >
                      <Link href="/drops">
                        <a
                          title="Drops"
                          className="font-bold hover:text-brightGreen"
                        >
                          Drops
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                <Link href="/rarity">
                  <a title="Rarity" className="font-bold hover:text-brightGreen">
                    Rarity
                  </a>
                </Link>
              </li> */}
                    <li
                      onClick={() => {
                        const body = document.getElementsByTagName("body")[0];
                        setMenuOpen(false);
                        body.classList.remove("fixed-body");
                      }}
                    >
                      <Link href="/about">
                        <a
                          title="About"
                          className="font-bold hover:text-brightGreen"
                        >
                          About
                        </a>
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        const body = document.getElementsByTagName("body")[0];
                        setMenuOpen(false);
                        body.classList.remove("fixed-body");
                      }}
                    >
                      <Link href="/contact">
                        <a
                          title="Contact"
                          className="font-bold hover:text-brightGreen"
                        >
                          Contact
                        </a>
                      </Link>
                    </li>
                    {/* <li
                      onClick={() => {
                        const body = document.getElementsByTagName("body")[0];
                        setMenuOpen(false);
                        body.classList.remove("fixed-body");
                        executeScroll(subscribeRef);
                      }}
                      className="font-bold hover:text-brightGreen hover:cursor-pointer"
                    >
                      Subscribe
                    </li> */}
                  </ul>
                </div>
                <div className="pb-8">
                  <div className="flex justify-between items-center">
                    <ul className="flex space-x-6 text-xs">
                      <li>
                        <a
                          href="https://go.soundmint.xyz/discord"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <DiscordWhite />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://go.soundmint.xyz/twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <TwitterWhite />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://go.soundmint.xyz/opensea"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <OpenSeaWhite />
                        </a>
                      </li>
                    </ul>
                    <div className="text-xs text-white">
                      <p>©{year} SoundMint</p>
                      <p>All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
