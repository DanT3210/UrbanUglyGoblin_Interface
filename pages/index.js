import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import { DarkThemeToggle } from "flowbite-react";
//import Sidebar from '../components/Sidebar';
import Mainbar from '../components/Mainbar';
import Header from '../components/Header';

const my_styles = {
  container: `h-full mx-10 flex-col bg-purple static`,
}

export default function Home() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  return (<>
    <Header/>
    
    <div className="bg-white dark:bg-bckblue">
      <Head>
        <title>ARTem dapp</title>
        <meta name="description" content="NFTs, digital art, physical arts and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mainbar/>
    </div>
    
    </>)
}
