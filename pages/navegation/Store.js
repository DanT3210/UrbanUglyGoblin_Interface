import Image from 'next/image'
//import styles from '../../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import { DarkThemeToggle } from "flowbite-react";


export default function Store() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  
  return (<>

    <div className="h-90v md:flex justify-center items-center dark:bg-bckblue dark:text-slate">
    Item(s)
    </div>

    </>)
}
