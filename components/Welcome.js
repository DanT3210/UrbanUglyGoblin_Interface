import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { DarkThemeToggle } from "flowbite-react";


export default function Welcome(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    
    return(<>
    <div class="flex justify-center items-center h-50v">
            <div className="mb-8 text-blue-700 top-32 dark:text-slate">
                <div className="mx-20 pt-8">
                    <p className="text-6xl">WELCOM TO ARTEM!</p>
                    <p className="text-xl">Where NFTs & Physical Art converge...</p>
                    <div class="visible lg:hidden justify-center items-center pt-8 pb-4"><ConnectButton/></div>
                </div>
                
            </div>
    </div>

    </>)
}