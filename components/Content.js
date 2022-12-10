import { abi, contractAddress } from "../constants";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { ConnectButton } from 'web3uikit';
import { useEffect } from "react";
import { ethers } from "ethers";
import Image from 'next/image'
import { DarkThemeToggle } from "flowbite-react";



export default function Content(){
    const {chainId: chainIdHex, isWeb3Enabled}=useMoralis();
    //console.log(parseInt(chainIdHex));
    const chainId=parseInt(chainIdHex);
    //console.log(chainId);
    const goblinAddress=chainId in contractAddress ? contractAddress[chainId][0] : null; 
    
    const {runContractFunction: updateArtPrice}=useWeb3Contract({
        abi: abi,
        contractAddress: goblinAddress,
        functionName: "updateArtPrice",
        params: {_newPrice:100000},
        //msgValue:,
    })

    async function updateUIValues() {
        const newPrice = (await updateArtPrice());
        //const showPrice=newPrice.toString();
        console.log(newPrice);
    }
    
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    return(<>   </>)
}