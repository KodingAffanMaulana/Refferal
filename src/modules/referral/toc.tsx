import React from 'react'
import Sidebar from '../sidebar'
import BankForm from './moleculs/bank_form'

const toc = () => {
  return (
    <div className=" bg-white flex flex-col md:flex-row">
      <Sidebar />
      <div
        className="mt-5 md:mt-0 border-l-2 border-grey-heavylight"
        style={{ height: "700px" }}
      ></div>
      <div className="md:w-3/4 p-10 flex justify-center items-center">
        <div className='shadow-xl rounded-xl w-full p-10'>
          <div className='text-center pb-6'>
            <h1 className='text-orange font-bold text-md md:text-2xl pb-5'>Konfirmasi dan Penyetujuan Layanan</h1>
            <p className='font-semibold text-sm md:text-[16px]'>Silakan isi informasi berikut untuk melanjutkan dengan layanan kami</p>
          </div>
          <BankForm />
        </div>
      </div>
    </div>
  )
}

export default toc