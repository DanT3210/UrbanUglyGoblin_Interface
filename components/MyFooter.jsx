import styles from '../styles/Home.module.css'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';
import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle, Footer } from "flowbite-react";

export default function MyFooter(){
    
    return(<>
    <div className="relative h-9 inset-x-0 bottom-0 dark:bg-bckblue dark:text-slate">               
                    <div className="pt-2 mr-10 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Link href="https://facebook.com" target="_blank"><BsFacebook className="w-5 h-5 hover:text-blue-700 dark:hover:text-white"/></Link>
                        <Link href="https://twitter.com" target="_blank"><BsTwitter className="w-5 h-5 hover:text-blue-700 dark:hover:text-white"/> </Link>
                        <Link href="https://github.com/DanT3210" target="_blank"><BsGithub className="w-5 h-5 hover:text-blue-700 dark:hover:text-white"/></Link>
                    </div>
    </div>
    </>)
}