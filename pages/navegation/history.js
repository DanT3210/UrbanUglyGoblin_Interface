import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
//import Sidebar from '../../components/Sidebar';
//import Header from '../../components/Header';


const my_styles = {
  container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
}

export default function History() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  return (
    <div className={my_styles.container}>
    <h1>Welcome to you History!</h1>
    </div>
  )
}
