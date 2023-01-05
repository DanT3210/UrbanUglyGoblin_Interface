import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { DarkThemeToggle,Dropdown,Button } from "flowbite-react";
import Image from 'next/image'
import Link from 'next/link';
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {abi, contractAddress} from '../constants/index';



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
            updateUIValues();
        }
    }, [isWeb3Enabled]);


    const mystyles = {
        menu: "hover:bg-neutral-200 dark:hover:bg-bckblue",
    }
    
    return(<>
            <div className="h-50v md:flex justify-center items-center">
                
                <div className="top-40 bg-blue-500 border-solid border-2 border-zinc-900 rounded-md dark:text-slate dark:border-slate dark:bg-neutral-700">
                    <div className="mx-20 pt-4 pb-4">
                        <p className="text-6xl font-thin">WELCOM TO <b>ARTEM!</b></p>
                        <p className="text-2xl font-black">Where NFTs & Physical Art converge...</p>
                        <p className="pt-10">Connect, Search, and Collect your favorit Artist's Art (Digital+Physical) in a decentralized trading protocol.</p>
                        <div className="visible flex justify-center items-center mr-0 pt-8 pb-4 lg:hidden "><ConnectButton/></div>
                    </div>
                    
                    {isWeb3Enabled ? (
                        <div className="flex flex-wrap gap-2 pt-2 pb-2 mx-20">
                            <Dropdown label="Artist's List" color="red" dismissOnClick={false} className="dark:bg-blue-900">
                                <Dropdown.Item className={mystyles.menu}>Carlos Gamez</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Javier Antunez</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Cosme Proenza</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Others</Dropdown.Item>
                            </Dropdown>
                            <Dropdown label="Collection's List" color="red" dismissOnClick={false} className="dark:bg-blue-900">
                                <Dropdown.Item className={mystyles.menu}>Butterflies in the stomach</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Dark Arts</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Greek Gods</Dropdown.Item>
                                <Dropdown.Item className={mystyles.menu}>Others</Dropdown.Item>
                            </Dropdown>
                            <form className="flex items-center">   
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-bckblue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-blue-100 border border-zinc-300 text-black text-sm rounded-lg  pl-10 p-2.5 focus:ring-bckblue dark:bg-zinc-200 dark:border-zinc-600 dark:placeholder-zinc-600 dark:focus:ring-slate" placeholder="Search: Artis, Collections" required/>
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-blue-200 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-bckblue dark:bg-zinc-500 dark:hover:bg-stone-800 dark:focus:ring-slate">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    ) : ("")}   
                </div>
            </div> 
    </>)
}