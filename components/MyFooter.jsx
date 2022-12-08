import styles from '../styles/Home.module.css'
import { AiOutlineHistory,AiFillHome } from 'react-icons/ai';
import { BsTwitter,BsFacebook, BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs';
import Image from 'next/image'
import Link from 'next/link';

import { Dropdown,Navbar,Button,onClick,Flowbite,DarkThemeToggle, Footer } from "flowbite-react";

export default function MyFooter(){
    
    return(<>
    <Footer container={true} className="absolute inset-x-0 bottom-0 dark:bg-bckblue dark:rounded-none border-t-4 border-t-indigo-500 dark:border-t-black">
        <div className="w-full  dark:text-slate">
          
            <div className="w-full sm:flex sm:items-center sm:justify-between ">
                <Footer.Copyright href="#" by="ARTEM" year={2022}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook}/>
                        <Footer.Icon href="#" icon={BsTwitter}/>
                        <Footer.Icon href="#" icon={BsGithub}/>
                    </div>
            </div>
        </div>
    </Footer>
    </>)
}