import React from 'react';
import { Link } from 'react-router-dom'; // Sesuaikan dengan kebutuhan

const Sidebar = () => {
  return (
    <div className="md:w-1/4">
      <div className="flex flex-col items-center justify-center mt-10">
        {/* Profil Picture */}
        <img
          src="https://via.placeholder.com/120"
          alt="Profile picture"
          className="w-30 h-30 rounded-full object-cover"
          style={{ width: "120px", height: "120px" }} // Ganti placeholder URL dengan path sesuai kebutuhan
        />
        {/* Nama User */}
        <h2 className="text-xl font-bold pt-4">Nama Pengguna</h2>
        {/* Email User (jika ada) */}
        <p>Email Pengguna</p>
      </div>

      {/* Menu untuk mobile */}
      <div className="">
        <div className="flex justify-between flex-col  md:hidden mt-10 ml-4 text-grey-font font-bold space-y-5">
          {/* Tombol untuk menutup menu */}
          <img
            src="https://via.placeholder.com/20"
            alt="Close Menu"
            className="w-6 h-6 cursor-pointer"
          />
          {/* Menu-item */}
          <a
            className="flex justify-row items-center"
            href="/dashboard"
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Home"
              className="w-6 pr-2 md:ml-5 md:h-auto h-3.5"
            />
            Home
          </a>
          {/* Tambahkan menu-item lain sesuai kebutuhan */}
        </div>

        {/* Menu untuk desktop */}
        <div className="md:mt-12 text-sm md:flex md:flex-col justify-start md:items-start text-grey-font font-bold space-y-5 hidden">
          <a
            className="flex justify-row items-center"
            href="/dashboard"
          >
            <img
              src="https://via.placeholder.com/20"
              alt="Home"
              className="w-8 pr-2 md:ml-5 md:h-auto h-3.5"
            />
            Home
          </a>
          {/* Tambahkan menu-item lain untuk desktop */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
