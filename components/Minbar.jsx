import { abi, contractAddress } from "../constants";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useEffect } from "react";


export default function Mainbar(){
    const {chainId: chainIdHex, isWeb3Enabled}=useMoralis();
    //console.log(parseInt(chainIdHex));
    const chainId=parseInt(chainIdHex);
    //console.log(chainId);
    const goblinAddress=chainId in contractAddress ? contractAddress[chainId][0] : null; 
    
    const {runContractFunction: getArtPrice}=useWeb3Contract({
        abi: abi,
        contractAddress: goblinAddress,
        functionName: "getArtPrice",
        params: {},
        //msgValue:,
    })

    async function updateUIValues() {
        const newPrice = (await getArtPrice());
        console.log(newPrice);
    }
    
    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    return(
        <div>
            SIDE BAR!
        </div>
    )
}