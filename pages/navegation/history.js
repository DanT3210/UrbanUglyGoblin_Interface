import Image from 'next/image'
import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { DarkThemeToggle } from "flowbite-react";


export default function History() {
  const {enableWeb3, isWeb3Enabled}=useMoralis();
  
  return (<>

    <div className="h-90v md:flex justify-center items-center dark:bg-bckblue dark:text-slate">
      
      {isWeb3Enabled ? ( 
        ("HISTORY")
        ) : <ConnectButton/>} 
    </div>

    </>)
}
