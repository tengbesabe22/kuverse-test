import { useState } from "react";
import Web3 from "web3";
import dotenv from "dotenv";
import { abi } from "../utils/abi";
import { getWallet } from "../utils/wallet";
dotenv.config();

export const NFTForm = () => {
  const NFT_CONTRACT = '0xc00c8229e7741FE89f7043bC37F960fb21E90691';
  const [formData, setFormData] = useState({
    recipient: '',
    tokenUri: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const web3 = new Web3(window.ethereum);
    const account = await getWallet();
    const contract = new web3.eth.Contract(abi, NFT_CONTRACT);
    contract.methods.mint(formData.recipient, formData.tokenUri).send({ from: account })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="recipient" className="block mb-2">
          Recipient Address
        </label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter recipient address"
        />
      </div>
      <div>
        <label htmlFor="tokenUri" className="block mb-2">
          Token URI
        </label>
        <input
          type="text"
          id="tokenUri"
          name="tokenUri"
          value={formData.tokenUri}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter token URI"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Mint
      </button>
    </form>
  );
};