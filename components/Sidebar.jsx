import React, { useContext, useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import Image from 'next/image';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsFillPersonFill, BsFillEaselFill, BsFillCollectionFill,BsFileEarmarkImageFill } from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';
import { ConnectButton } from 'web3uikit';
import { AiOutlineHistory } from 'react-icons/ai';
import Link from 'next/link';
import { useMoralis, useWeb3Contract } from 'react-moralis';

const Sidebar = () => {
const { enableWeb3, isWeb3Enabled } = useMoralis();

  const styles = {
    container: `h-full w-[300px] flex flex-col bg-[#22203f] static text-white`,
    profile: ` w-full py-10 flex flex-col justify-center items-center rounded-r-3xl mt-[0px] mb-[40px]`,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: `rounded-3xl object-cover`,
    walletAddress: `text-xl flex w-full justify-center font-extrabold mb-4`,
    menu: `flex flex-col w-full h-full px-10 gap-10 mt-[50px] `,
    menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
  }
  console.log(isWeb3Enabled);
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.connectButton}>
          <ConnectButton />
        </div>
        {isWeb3Enabled ? <div>
        <div className={styles.menu}>
            <Link href='/'>
            <div className={styles.menuItem}>
            <BsFillEaselFill />
                Artists
            </div>
            </Link>
            <div className={styles.menuItem}>
            <BsFileEarmarkImageFill />
            All Arts
            </div>
            <a target="_blank" href="https://github.com/DanT3210">
            <div className={styles.menuItem}>
            <GoMarkGithub />
            Protocol
            </div>
            </a>
            <Link href='/history'>
            <div className={styles.menuItem}>
                <AiOutlineHistory />
                Transaction History
            </div>
            </Link>
        </div>  
      </div>:<p></p>} 
      </div>
    
        
    </div>
  )
}

export default Sidebar