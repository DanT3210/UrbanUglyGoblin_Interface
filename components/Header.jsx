import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
//import styles from '../styles/Home.module.css'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';
//import { Store } from '../pages/navegation/ItemStore';

import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle,Footer} from "flowbite-react";

export default function Header(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();


    const mystyles = {
        menu: "hover:bg-neutral-200 dark:hover:bg-bckblue",
      }
    
    return(<>
    
        <Navbar fluid={true} rounded={false} className="relative dark:bg-bckblue">
            <div className="md:hidden hover:text-blue-700 dark:text-slate dark:hover:text-white">
                <Navbar.Toggle />
            </div>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-bckblue pointer-events-none dark:text-slate">
                SALES-UP
            </span>
        
            <div className="flex md:order-2">
                <Flowbite>
                    <DarkThemeToggle className="hover:text-blue-700 dark:text-slate dark:hover:text-white"/>
                </Flowbite>     
                <div className="hidden lg:block"><ConnectButton/></div>
            </div>
            <Navbar.Collapse  className="text-bckblue dark:text-slate">
                <Navbar.Link active={false} href="/">Home</Navbar.Link>
                <Navbar.Link active={false} href="/navegation/Store">Item Store</Navbar.Link>
                <Navbar.Link href="https://github.com/DanT3210/UrbanUglyGoblin_Interface" target={"_blank"}>Protocol</Navbar.Link>
                <Navbar.Link active={false} href="/navegation/history">Transaction(s) History</Navbar.Link>
                <Navbar.Link href="/#">Contact</Navbar.Link>
                {isWeb3Enabled ? (
                  <Navbar.Link href="https://polygonscan.com/address/0xaf962d5adb264e3bb7397e378dd775a5645e7606" target={"_blank"}>Transaction History</Navbar.Link>
                ) : ("")}
            </Navbar.Collapse>
            
        </Navbar>     
              
    </>)
}