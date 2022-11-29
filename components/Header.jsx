import {ConnectButton} from 'web3uikit';
import styles from '../styles/Home.module.css'
import logo from '../assets/amazon_logo.png'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import Image from 'next/image'
import Link from 'next/link';

const my_style={
    container:`p-1 w-full shadow-lg `,
    linksContainer:`hidden md:flex space-x-6 text-sm text-slate mx-20 `,
    amazonLogo: `mr-4 flex object-cover`,
    myButton: `hidden md:block lg:pl-[960px] pl-[90px]`,
}
export default function Header(){
    
    return(<>
    
        <nav className={my_style.container}>
            <div className="hidden md:flex items-center justify between">
                <div className={my_style.linksContainer}>
                <Link href='/'>
                    <div className='hover:text-white hover:shadow-md'>
                        Home
                    </div>
                </Link>
                    <a href='#' className='hover:text-white'>Artit(s)</a>
                    <a href='#'className='hover:text-white'>Arts</a>
                    <a href='#' className='hover:text-white'>Transactions</a>
                    <a href='#' className='hover:text-white'>Protocole</a>
                    <a href='#' className='hover:text-white'>About us</a>
                </div>
                <div className={my_style.myButton}>
                    <ConnectButton />
                </div>
            </div>
    
            
        </nav></>)
}