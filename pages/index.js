import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Mainbar from '../components/Minbar';
//import Header from '../components/Header';

const my_styles = {
  container: `h-full w-[300px] flex flex-col bg-[#22203f] static`,
}

export default function Home() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  return (
    <div className={my_styles.container}>
      <Head>
        <title>Goblin Web</title>
        <meta name="description" content="Goblins against communism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Sidebar/>
      <Mainbar/>
    </div>
  )
}
