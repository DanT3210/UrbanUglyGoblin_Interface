import {ConnectButton} from 'web3uikit';
import styles from '../styles/Home.module.css'


export default function Header(){
    
    return(<>   
        <div>
            <ConnectButton moralisAuth={false}/>
        </div></>)
}