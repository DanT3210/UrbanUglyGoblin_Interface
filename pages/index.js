import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import { DarkThemeToggle } from "flowbite-react";
import Welcome from './navegation/Welcome';

export default function Home() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  //document.body.style = 'background:black;';
  return (<>
    
    <div className="h-90v md:bg-[url('../assets/bkg/BGK_1.png')] dark:bg-neutral-700 md:dark:bg-[url('../assets/bkg/BGK_2.png')]">
      <Head>
        <title>SalesUp dapp</title>
        <meta name="description" content="NFTs, digital art, physical arts and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome/>   
    </div>

    </>)
}