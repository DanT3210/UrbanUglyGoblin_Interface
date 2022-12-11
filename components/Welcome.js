import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { DarkThemeToggle } from "flowbite-react";


export default function Welcome(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    
    return(<>
    <div class="h-50v lg:flex justify-center items-center">
            <div className="top-40 border-solid border-2 border-zinc-900 rounded-md dark:text-slate dark:border-slate">
                <div className="mx-20 pt-4 pb-4">
                    <p className="text-6xl font-thin">WELCOM TO <b>ARTEM!</b></p>
                    <p className="text-2xl font-black">Where NFTs & Physical Art converge...</p>
                    <p className="pt-10">Connect, Search, and Collect your favorit Artist's Art (Digital+Physical) in a decentralized trading protocol.</p>
                    <div class="visible flex justify-center items-center mr-0 pt-8 pb-4 lg:hidden "><ConnectButton/></div>
                </div>
                
            </div>
    </div>

    </>)
}