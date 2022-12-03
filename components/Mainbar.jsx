import { abi, contractAddress } from "../constants";
import Hephaestus from "../assets/Img/Hephaestus.png";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { ConnectButton } from 'web3uikit';
import { useEffect } from "react";
import { ethers } from "ethers";
import Image from 'next/image'


export default function Mainbar(){
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

    return(<>
    
        <div className="static bg-bckblue mt-10 text-slate">
            <div className="flow-root">  
                <p className="flex float-right opacity-5 hidden md:flex object-cover"><Image height={970} width={410} src={Hephaestus}/></p>
                <h2 className="text-3xl">Welcome to Hephaestus!</h2>
                <h1 className="text-white ">Forging a new Blockchain Art Page! Where digital and physical arts exist...</h1>
                <p className="mt-16">This dapp focus on combine the best of both worlds, web3/blockchain technologies with traditional selling sites. Buy one of our artists pieces to receive the "NFTs" and the "Physical Arts" work!</p>
                <button className="mt-8 md:invisible"><ConnectButton /></button>
                <p className="mt-16">More data or other info!</p>
            </div>
            <div className="mt-10">
                <ul className="flex mt-20 ml-20 text-sm grid grid-cols-4 gap-1 content-center">
                    <li>
                        <a href='#' className='hover:text-white'>Twitter</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'>Github</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'>Opensea</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'>Other</a>
                    </li>
                </ul>
            </div>
        </div>
        </>)
}