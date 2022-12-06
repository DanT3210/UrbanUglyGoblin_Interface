import { abi, contractAddress } from "../constants";
import Hephaestus from "../assets/Img/Hephaestus.png";
import Wave from "../assets/Img/Wave2.jpg";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { ConnectButton } from 'web3uikit';
import { useEffect } from "react";
import { ethers } from "ethers";
import Image from 'next/image'
import { AiFillHome, AiFillFacebook } from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go';
import { BsTwitter,BsFacebook, BsClockHistory, BsFillEnvelopeOpenFill } from 'react-icons/bs';
import { DarkThemeToggle } from "flowbite-react";


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
    <div className="bg-white text-bckblue dark:bg-bckblue dark:text-slate">
         <h2 className="text-6xl font-black">Welcome to ARTem!</h2>
         <h1 className="text-purple text-3xl font-thin  dark:bg-bckblue dark:text-slate">Forging a new Blockchain Art Page! Where digital and physical arts exist...</h1>
        <div className="static bg-bckblue mt-10 text-slate rounded-xl bg-fixed bg-cover xl:bg-[url('../assets/Img/Wave2.jpg')] ms:bg-none">
            <div className="flow-root"> 
                <p className="float-right opacity-5 hidden mt-10 md:flex object-cover"><Image height={970} width={410} src={Hephaestus}/></p>
                <h2 className="text-6xl"></h2>
                <h1 className="text-white text-3xl"></h1>
                <p className="mt-16"></p>
                <div className="mt-8 md:invisible"><ConnectButton /></div>
                <p className="mt-16"></p>
            </div>   
        
        </div> 
        <div className="mt-10 text-bckblue dark:text-slate">
                <ul className="flex mt-18 ml-40 text-md grid grid-cols-7 content-center">
                    <li>
                        <a href='#' className='hover:text-white'><AiFillHome/></a>
                    </li>                    
                    <li>
                        <a href='#' className='hover:text-white'><BsTwitter/></a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'><GoMarkGithub/></a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'><BsFacebook/></a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-white'><BsClockHistory/></a>
                    </li>       
                    <li>
                        <a href='#' className='hover:text-white'><BsFillEnvelopeOpenFill/></a>
                    </li>     
                    <li>
                        <a href='#' className='hover:text-white text-sm'>OpenSea</a>
                    </li>                                                      
                </ul>
            </div>     
            <div className="flex justify-center bg-white mt-5 dark:bg-bckblue">
                <p className="text-sm text-metal"> This dapp focus on combine the best of both worlds, web3/blockchain technologies with traditional selling sites. Buy one of our artists pieces to receive the "NFTs" and the "Physical Arts" work!</p>
            </div>   
            <div className="flex justify-center bg-white mt-2 dark:bg-bckblue">
                <p className="text-sm text-metal"> All rights reservered to Dant3210, created im 2022. </p>
            </div>               
    </div>
    </>)
}