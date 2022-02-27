import { useState, createContext, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { componentNames } from "../common/constants";
import ReactDOM from "react-dom";
import MinterABI from "../artifacts/contracts/Minter.json";
import BaseTokenABI from "../artifacts/contracts/BaseToken.json";
import NounsAuctionHouseABI from "../artifacts/contracts/NounsAuctionHouse.json";
import Web3 from "web3";
import Router from "next/router";
import Notify from "bnc-notify";

const Navbar = dynamic(() => import("../components/shared/navbar"));
const Footer = dynamic(() => import("../components/shared/footer"));

export const SidebarTrackerContext = createContext();
export const ScrollContext = createContext();
export const ContractContext = createContext();

const Page = ({ children }) => {
  const [minter, setMinter] = useState(null);
  const [baseToken, setBaseToken] = useState(null);
  const [nounsAuctionHouse, setNounsAuctionHouse] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    const init = async () => {
      const notify = Notify({
        dappId: process.env.BNC_API_KEY,
        networkId: Number(process.env.NETWORK_ID),
      });

      const web3 = new Web3();
      new web3.eth.setProvider(process.env.PROVIDER);

      const minter = new web3.eth.Contract(
        MinterABI,
        process.env.MINTER_CONTRACT_ADDRESS
      );
      const baseToken = new web3.eth.Contract(
        BaseTokenABI,
        process.env.BASETOKEN_CONTRACT_ADDRESS
      );
      const nounsAuctionHouse = new web3.eth.Contract(
        NounsAuctionHouseABI,
        process.env.NOUNS_AUCTION_HOUSE_CONTRACT_ADDRESS
      );

      setWeb3(web3);
      setMinter(minter);
      setBaseToken(baseToken);
      setNounsAuctionHouse(nounsAuctionHouse);
      setNotify(notify);
    };

    init();
  }, []);

  //component references
  const heroRef = useRef(null);
  const subscribeRef = useRef(null);
  const mintShowCaseRef = useRef(null);
  const aboutDropRef = useRef(null);
  const whatIsSoundArtsRef = useRef(null);
  const soundArtsDropRef = useRef(null);
  const behindTheScenesRef = useRef(null);
  const aboutTheArtistsRef = useRef(null);
  const stemsRef = useRef(null);
  const visualsRef = useRef(null);
  const applyToBeAnArtistRef = useRef(null);

  // execute scroll function
  const executeScroll = (ref) => {
    const element = ref.current;

    const elementID = element?.getAttribute("id");

    if (typeof window !== "undefined") {
      if (element) {
        const node = ReactDOM.findDOMNode(element);
        if (elementID === "mint-showcase") {
          window.scrollTo(0, node.offsetTop - 200);
        } else if (elementID === "stems") {
          window.scrollTo(0, node.offsetTop - 150);
        } else {
          window.scrollTo(0, node.offsetTop - 100);
        }
      } else {
        Router.push("/").then(() => {
          executeScroll(subscribeRef);
        });
      }
    }
  };

  // set initial active component
  const [activeComponent, setActiveComponent] = useState(
    componentNames.heroBanner
  );

  // update active component whenever new component is visible
  const onComponentVisible = (inView, component) => {
    if (inView) {
      setActiveComponent(component);
    }
  };

  return (
    <>
      <SidebarTrackerContext.Provider
        value={{ onComponentVisible, componentNames, activeComponent }}
      >
        <ScrollContext.Provider
          value={{
            heroRef,
            subscribeRef,
            mintShowCaseRef,
            aboutDropRef,
            whatIsSoundArtsRef,
            soundArtsDropRef,
            behindTheScenesRef,
            aboutTheArtistsRef,
            stemsRef,
            visualsRef,
            applyToBeAnArtistRef,
            executeScroll,
          }}
        >
          <ContractContext.Provider
            value={{
              minter,
              baseToken,
              nounsAuctionHouse,
              web3,
              notify,
            }}
          >
            <div>
              <Navbar />
            </div>
            <div>
              <main>{children}</main>
            </div>
            <Footer />
          </ContractContext.Provider>
        </ScrollContext.Provider>
      </SidebarTrackerContext.Provider>
    </>
  );
};

export default Page;
