import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';


import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle,Footer} from "flowbite-react";

export default function Header(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();


    const mystyles = {
        menu: "hover:bg-neutral-200 dark:hover:bg-bckblue",
      }
    
    return(<>
    
        <Navbar fluid={true} rounded={false} className="relative border-b  dark:bg-bckblue dark:border-cyan-700">
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
                {isWeb3Enabled ? (
                    <Navbar.Link active={false} href="/navegation/history">Transaction History</Navbar.Link>
                 ) : ("")}  
                <Navbar.Link href="/#">Contact</Navbar.Link>
            </Navbar.Collapse>
            
        </Navbar>     
              
    </>)
}