'use client';
import { Button } from "@mui/material";
import { getWallet } from "../utils/wallet";
import { useState } from "react";
import { NFTForm } from "../components/nft-form";

const Home = () => {
  const [address, setAddress] = useState("");
  const handleConnectWallet = async () => {
    const account = await getWallet();
    console.log(account);
    setAddress(account);
  }

  return (
    <div className="container flex align-center  justify-center w-full h-full">
      <div className="flex flex-col justify-center gap-6 mt-40">
        <h1 className="text-3xl text-center">
          Welcome to Kuverse NFT
        </h1>
        {!address && <Button variant="contained" onClick={handleConnectWallet}>Connect with Metamask</Button>}
        {address && <NFTForm />}
      </div>
    </div>
  )
}

export default Home;