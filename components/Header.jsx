import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';

import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle } from "flowbite-react";

export default function Header(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();
    const mystyles = {
        menu: "hover:bg-neutral-200 dark:hover:bg-bckblue",
      }
    
    return(<>
        <Navbar fluid={true} rounded={true} className="border-b-4 border-b-indigo-500 bg-white dark:bg-bckblue dark:border-b-black">
        <Navbar.Brand href="https://flowbite.com/">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-bckblue dark:text-slate">
            ARTEM
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Flowbite>
                <DarkThemeToggle className='bg-silver'/>
            </Flowbite>     
            <div className="hidden lg:block"><ConnectButton/></div>
        </div>
        <Navbar.Collapse  className="text-bckblue dark:text-slate">
            <Navbar.Link active={true} href="/">Home</Navbar.Link>
            <div>
                <Dropdown label="Artist" inline={true} className="hover:text-red dark:bg-blue-900">
                    <Dropdown.Item onClick={onClick} className={mystyles.menu}>Carlos Games</Dropdown.Item>
                    <Dropdown.Item onClick={onClick} className={mystyles.menu}>Javier Nunez</Dropdown.Item>
                    <Dropdown.Item onClick={onClick} className={mystyles.menu}>Cosme Proenza</Dropdown.Item>
                </Dropdown>
            </div>
            <Navbar.Link href="https://github.com/DanT3210/UrbanUglyGoblin_Interface" target={"_blank"}>Protocol</Navbar.Link>
            <Navbar.Link href="https://polygonscan.com/address/0xaf962d5adb264e3bb7397e378dd775a5645e7606" target={"_blank"}>Transaction History</Navbar.Link>
            <Navbar.Link href="/#">Contact</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </>)
}