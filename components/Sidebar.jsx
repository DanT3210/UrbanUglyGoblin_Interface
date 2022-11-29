import React, { useContext, useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import Image from 'next/image';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsFillPersonFill, BsFillEaselFill, BsFillCollectionFill,BsFileEarmarkImageFill } from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';
import { ConnectButton } from 'web3uikit';
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import { useMoralis, useWeb3Contract } from 'react-moralis';


const Sidebar = () => {
const { enableWeb3, isWeb3Enabled } = useMoralis();

  const styles = {
    container: `h-full w-[300px] flex flex-col bg-[#22203f] static text-white `,
    profile: ` w-full py-30 flex flex-col justify-center items-center rounded-r-3xl mt-[0px] mb-[40px] `,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4 shadow-md`,
    menu: `flex flex-col w-full h-full px-10 gap-10 mt-[60px] `,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2 `,
  }
  //console.log(isWeb3Enabled);
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.connectButton}>
          <ConnectButton />
        </div>
        <div className={styles.menu}>
            <Link href='/'>
            <div className={styles.menuItem}>
            <AiFillHome />
                Home
            </div>
            </Link>
            <Link href='/navegation/Artist'>
            <div className={styles.menuItem}>
            <BsFillEaselFill />
                Artist
            </div>
            </Link>     
            <a target="_blank" href="https://www.carlosgamezdefrancisco.com/butterflies-in-the-stomach">     
            <div className={styles.menuItem}>
            <BsFileEarmarkImageFill />
            Digital Arts
            </div>
            </a>
            <a target="_blank" href="https://github.com/DanT3210">
            <div className={styles.menuItem}>
            <GoMarkGithub />
            Protocol
            </div>
            </a>
            <Link href='/navegation/history'>
            <div className={styles.menuItem}>
                <AiOutlineHistory />
                Transaction History
            </div>
            </Link>
        </div>  
      </div>
    
        
    </div>
  )
}

export default Sidebar