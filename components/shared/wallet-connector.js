import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, showError, showInfo } from "../../common/constants";

const WalletConnector = ({}) => {

  const { active, activate, deactivate, error, account } = useWeb3React();

  useEffect(() => {

    const init = async () => {

      //if user was logged in reconnect
      try{
        if(account){
          localStorage.setItem("address",account);
        }    
        if(localStorage.getItem("address",account)){
          await activate(injected);
        } 
      }catch(e){
        showError("Error reconnecting to MetaMask.")
      }
    }

    init();

    if(error){    

      if(error.code === -32002){
        localStorage.clear();
        showError("MetaMask is not connected to site.");
      }
      else{
        showError(error.message);
      }

    }

    if(active){
      showInfo("Wallet connected.");
    }

  }, [error,active])


  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
    }
  };

  const disconnect = () => {
    try {
      deactivate();
      showInfo("Wallet disconnected.");
      localStorage.clear();
    } catch (ex) {}
  };

  return (
    <div style={{ zIndex: "999999999" }}>
      <button
        type="button"
        onClick={() => (active ? disconnect() : connect())}
        className="text-center w-full bg-brightGreen text-black py-2 px-4 font-bold text-lg lg:text-sm border border-brightGreen hover:bg-brightBlue"
      >
        {active ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletConnector;
