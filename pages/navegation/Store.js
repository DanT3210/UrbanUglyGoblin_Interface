import Image from 'next/image'
//import styles from '../../styles/Home.module.css'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useState } from 'react';
import Header from '../../components/Header';
import MyFooter from '../../components/MyFooter';



const my_styles = {
  container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
}

export default function Store() {
  const [accounts, setAccounts]=useState([]); 
  const {enableWeb3, isWeb3Enable}=useMoralis();
  return (<>
    <Header/>
    <div className="h-90v md:flex justify-center items-center">
    Item(s)
    </div>
    <MyFooter/>
    </>)
}