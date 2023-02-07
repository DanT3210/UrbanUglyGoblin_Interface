import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
//import styles from '../styles/Home.module.css'
import { DarkThemeToggle,Dropdown,Button } from "flowbite-react";
import Image from 'next/image'
import Link from 'next/link';
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {abi, contractAddress} from '../../constants/index';



export default function Welcome(){
    const { enableWeb3, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
       // These get re-rendered every time due to our connect button!
       const chainId = parseInt(chainIdHex);
       /*console.log(`ChainId is ${chainId}`);
       console.log(`ContractAddress is ${contractAddress}`);*/
       const proxyContAddress = chainId in contractAddress ? contractAddress[chainId][0] : null;


    const { runContractFunction: getArtPrice } = useWeb3Contract({
        abi: abi,
        contractAddress: proxyContAddress, // specify the networkId
        functionName: "getArtPrice",
        params: {},
    });

    const { runContractFunction: getName } = useWeb3Contract({
        abi: abi,
        contractAddress: proxyContAddress, // specify the networkId
        functionName: "getName",
        params: {},
    });

    const { runContractFunction: updateArtPrice } = useWeb3Contract({
        abi: abi,
        contractAddress: proxyContAddress, // specify the networkId
        functionName: "updateArtPrice",
        params: {
            _newPrice:500,
        },
    });    

    
    async function updateUIValues() {

        const artPrice = (await getArtPrice()).toString();
        const collectionName= (await getName());
        //const setNewPrice=(await updateArtPrice());
        console.log(`ArtPrice is ${artPrice}`);
        console.log(`Collection Name is ${collectionName}`);
        //console.log(`New Price is ${setNewPrice.toString()}`);
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            //updateUIValues();
        }
    }, [isWeb3Enabled]);


    const mystyles = {
        menu: "hover:bg-neutral-200 dark:hover:bg-bckblue",
    }
    
    return(<>
            <div className="h-50v md:flex justify-center items-center">
                
                <div className="bg-blue-500 border-solid border-2 border-zinc-900 rounded-md dark:text-slate dark:border-slate dark:bg-neutral-700">
                    <div className="mx-20 pt-4 pb-4">
                        <p className="text-6xl font-thin">WELCOM TO <b>SALES-UP!</b></p>
                        <p className="text-2xl font-black">Where Digital & Physical Assets converge in the same place.</p>
                        <p className="pt-10">Sales-Up is a decentralized trading protocol that allows users to buy and sell digital and physical assets in a secure and transparent manner.</p>
                        <p>The platform is powered by blockchain technology and provides users with a secure and reliable way to trade digital and physical assets.</p>
                        <p className="pt-10 text-lg font-bold">Sales-Up provides users with a wide range of features, including:</p>
                        * Secure and transparent transactions<br></br>
                        * Low transaction fees (2%)<br></br>
                        * Ability to buy and sell digital and physical assets<br></br>
                        * Ability to track and monitor transactions<br></br>
                        * Access to a global marketplace
                        <div className="visible flex justify-center items-center mr-0 pt-8 pb-4 lg:hidden "><ConnectButton/></div>
                    </div>
                </div>
            </div> 
            <div className="md:flex justify-center items-center">
                {isWeb3Enabled ? ( 
                    ("")
                    ) : <ConnectButton/>} 
            </div>
    </>)
}