import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { DarkThemeToggle } from "flowbite-react";


export default function Welcome(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();

    
    return(<>
            <div className="dark:text-slate">
                <div className="mx-10 bg-black">
                    <p className='pt-10'>WELCOM</p>
                </div>
            
            </div>
    </>)
}