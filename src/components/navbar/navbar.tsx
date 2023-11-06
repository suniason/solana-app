import React from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js'
import { message } from 'antd';

const Navbar:React.FC = () => {
    const solanaNetwork = clusterApiUrl('devnet')
    const connection = new Connection(solanaNetwork)
    const connectToWallet = async () => {
            try {
            const {solana} = window as any
            const res = await solana.connect()
            console.log(res)
          } catch (error) {
            message.error('Phantom wallet not found')
          }
      };

    return (
    <div className='flex w-full justify-center'>
      <div className='flex w-8/12 justify-end m-5'>
        <div className=''>
          <button className='text-white font-semibold bg-primary-500 px-4 py-2 rounded-lg' 
          onClick={connectToWallet}>Connect Wallet</button>
        </div>
      </div>
    </div>
    )
}

export default Navbar
