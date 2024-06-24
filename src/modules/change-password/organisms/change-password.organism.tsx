/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
// import Sidebar from 
import check from "/public/check.png";

const ChangePasswordPage = () => {

  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validatePasswords, setValidatePassword] = useState(true);
  const [loading, setLoading] = useState(false)

  const [menu, setMenu] = useState("");

  useEffect(() => {
    if (newPassword && repeatPassword) {
      setValidatePassword(newPassword === repeatPassword);
    }
  }, [newPassword, repeatPassword]);

  const handleValidatePasswords = (password: any) => {
    setRepeatPassword(password);
  };

  const handleChangePassword = () => {
    setLoading(true)

    // instance.put('/auth/password/change', {
    //   password: newPassword,
    // }).then(() => {
    //   setLoading(false)
    //   // clear state
    //   setNewPassword('')
    //   setRepeatPassword('')
    //   // alert
    //   alert('Successfully changed password')
    // }).catch(() => {
    //   setLoading(false)
    //   alert('Failed to change password')
    // })
  }

  return (
    <div className="h-screen bg-white mt-16 flex flex-col md:flex-row">
      {/* <Sidebar /> */}
      <div
        className="mt-5 md:mt-0 border-l-2 border-grey-heavylight"
        style={{ height: "700px" }}
      ></div>
      {
        loading ? <div>hshs</div> : (
          <div className="md:w-3/4 p-10">
            <div className="flex flex-col">
              <h1 className="text-black text-2xl font-bold pt-5 mb-6">
                Ubah Kata Sandi
              </h1>
              <p>
                Ketika berhasil mengubah password maka pengguna akan keluar dari
                sistem untuk melindungi akun jika ada orang yang mencoba mendapatkan
                akses
              </p>
            </div>
            <div className="w-full p-4 md:text-left mt-8">
              <div className="flex flex-col justify-start space-y-3">
                <div className="flex flex-row items-center">
                  <img src={check.src} className="mr-4 w-6" />
                  <p>Kata sandi minimal harus 6 huruf</p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={check.src} className="mr-4 w-6" />
                  <p>Kombinasi huruf besar, huruf kecil dan angka</p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={check.src} className="mr-4 w-6" />
                  <p>Minimal menggunakan kombinasi satu karakter (!@#,.)</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex flex-col relative space-y-7">
                  <input
                    type="password"
                    id="newpassword"
                    name="newpassword"
                    placeholder="Kata sandi baru"
                    className="border rounded-lg px-4 py-4 text-sm pl-10"
                    style={{ borderColor: "#bbb", backgroundColor: "#F9F9F9" }}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {
                    !validatePasswords && <p className="text-red">Kata sandi tidak sama</p>
                  }
                  <input
                    type="password"
                    id="repeatpassword"
                    name="repeatpassword"
                    placeholder="Ketik ulang kata sandi baru"
                    className="border rounded-lg px-4 py-4 text-sm pl-10"
                    style={{ borderColor: "#bbb", backgroundColor: "#F9F9F9" }}
                    value={repeatPassword}
                    onChange={(e) => handleValidatePasswords(e.target.value)}
                  />
                </div>
                <a
                  href="#"
                  className="underline font-medium text-sm float-left"
                  style={{ color: "#0056A3" }}
                >
                  Lupa kata sandi ?
                </a>
                {/* <button
                  onClick={() => handleChangePassword()}
                  type="submit"
                  disabled={!newPassword || !repeatPassword || !validatePasswords}
                  className={`text-white font-bold rounded-lg px-8 py-3 w-full ${!newPassword || !repeatPassword || !validatePasswords ? "bg-gray" : 'bg-orange-light'}`}
                >
                  Ubah kata sandi
                </button> */}
                <button
                  type="submit"
                  className={`text-white font-bold rounded-lg px-8 py-3 w-full bg-gray`}
                >
                  Ubah kata sandi
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ChangePasswordPage;
