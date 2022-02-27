import { InjectedConnector } from "@web3-react/injected-connector";
import { toast } from "react-toastify";
import {
  gql
} from "@apollo/client";

export const componentNames = {
  heroBanner: "hero-banner",
  mintShowCase: "mint-show-case",
  about: "about",
  whatIsSoundArts: "whatIsSoundArts",
  soundArtsDrop: "soundArtsDrop",
  behindTheScenes: "behindTheScenes",
  signUpUpdatesAnnouncements: "signUpUpdatesAnnouncements",
  aboutTheArtists: "about-the-artists",
  stems: "stems",
  visuals: "visuals",
  applyToBeAnArtist: "apply-to-be-an-artist",
};

export const injected = new InjectedConnector({
  supportedChainIds: [1,5],
});

export const showError = (message) => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
}

export const showInfo = (message) => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
}

export const LATEST_PRICES = gql`
  query GetLastPrices {
    logPriceUpdatedEntities(first: 3, orderBy:timestamp, orderDirection:desc){
      id
      newPrice
      timestamp
    }
  }
`;

export const LATEST_BIDS = gql`
  query GetLatestBids {
    auctionBidEntities(first: 15, orderBy:timestamp, orderDirection:desc) {
        id
        sender
        nounId
        value
        extended
        timestamp
    }
  }
`;
