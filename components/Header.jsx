import {ConnectButton} from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from '../styles/Home.module.css'
import logo from '../assets/amazon_logo.png'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';

import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle } from "flowbite-react";

export default function Header(){
    const { enableWeb3, isWeb3Enabled } = useMoralis();
    const styles = {
      menu: `m-1 hover:bg-neutral-200`,
    }
    return(<>
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ARTem
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ConnectButton/>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </div>
      <Navbar.Collapse>
        <Navbar.Link  href="/#">Home</Navbar.Link>
        <div>
          <Dropdown label="Artist" inline={true}>
            <Dropdown.Item onClick={onClick} className={styles.menu}>Carlos Games</Dropdown.Item>
            <Dropdown.Item onClick={onClick} className={styles.menu}>Javier Nunez</Dropdown.Item>
            <Dropdown.Item onClick={onClick} className={styles.menu}>Cosme Proenza</Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Link href="/">Transaction History</Navbar.Link>
        <Navbar.Link href="/">Contract</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>   
    </>)
}