import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { DarkThemeToggle,Dropdown,Button } from "flowbite-react";
import Image from 'next/image'
import Link from 'next/link';



export default function Welcome(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();
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
                        </div>
                    ) : ("")}
                        
                    
                </div>
            </div> 
    </>)
}