import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import { DarkThemeToggle } from "flowbite-react";
//import Sidebar from '../components/Sidebar';
import MyFooter from '../components/MyFooter';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

export default function Home() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  //document.body.style = 'background:black;';
  return (<>
    <Header/>
    
    <div className="h-90v bg-[url('../assets/bkg/BGK_1.png')] dark:bg-[url('../assets/bkg/BGK_2.png')]">
      <Head>
        <title>ARTem dapp</title>
        <meta name="description" content="NFTs, digital art, physical arts and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <Welcome/>    
    </div>
    
    <MyFooter/>
    </>)
}