import Sidebar from '../sidebar'

const Referral = () => {
  const items = [
    { user: 'User 1', commission: 10000 },
    { user: 'User 2', commission: 15000 },
    { user: 'User 3', commission: 8000 },
    { user: 'User 4', commission: 12000 },
    { user: 'User 5', commission: 9000 },
  ];

  return (
    <div className="h-screen bg-white mt-16 flex flex-col md:flex-row">
      <Sidebar />
      <div
        className="mt-5 md:mt-0 border-l-2 border-grey-heavylight"
        style={{ height: "700px" }}
      ></div>
      <div className="md:w-3/4 p-10">
        <div>
          <h1 className="text-black text-2xl font-bold mb-6"><span className='text-orange-light'>Kode </span>Referal</h1>
          <h3 className='pb-3'>Bagikan kode referal anda dan nikmati komisi tambahan!</h3>
          <div className='flex justify-between w-[584px] shadow-lg p-4 rounded-xl'>
            <div className='w-full flex items-center justify-center'>
              <p>ajsdfnasefn98j2k3n23-203kesd</p>
            </div>
            <div className='w-1/4 flex items-center justify-end'>
              <img src="/public/copy-free-image-png 1.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gray pt-7 text-xl font-bold">Total Komisi</h1>
          <div className='flex justify-between w-[584px] shadow-lg p-3 rounded-xl'>
            <div className='w-full flex items-center justify-center text-2xl font-semibold'>
              <p className='text-orange-light'><span className='text-gray'>Rp </span>400.000</p>
            </div>
            <div className='w-1/4 flex items-center justify-end'>
              <button className='bg-orange-light hover:bg-orange w-20 h-10 text-white font-bold rounded-lg'>Tarik</button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-gray pt-10 text-xl font-bold pb-6">Lacak perkembangan referral dan penghasilan Anda</h1>
          {/* logic list */}

          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <li key={index} className="flex flex-col gap-3 py-6 px-12 shadow-md rounded-lg w-[60%] cursor-pointer">
                <div className="flex justify-center items-center text-[#8F8F8F]">
                  <p>Selamat Anda mendapat komisi sebesar Rp <span className='text-green-400'>{formatRupiah(item.commission)} </span> dari</p>
                  <p className='pl-1 font-semibold'>{item.user}</p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Referral

function formatRupiah(value: any) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}