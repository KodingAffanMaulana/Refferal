import React, { useState } from 'react';
import Input from '../atoms/input';
import Checkbox from '../atoms/checkbox';
import Textarea from '../atoms/text_area';

const BankForm: React.FC = () => {
  const [formData, setFormData] = useState({
    bank_name: '',
    rekening_number: '',
    rekening_owner: '',
    address: '',
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ formData });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <Input
        label="Nama Bank"
        type="text"
        name="bankName"
        value={formData.bank_name}
        onChange={handleChange}
      />
      <Input
        label="Nomor Rekening"
        type="text"
        name="accountNumber"
        value={formData.rekening_number}
        onChange={handleChange}
      />
      <Input
        label="Nama Pemilik Rekening"
        type="text"
        name="accountHolder"
        value={formData.rekening_owner}
        onChange={handleChange}
      />
      <Textarea
        label="Alamat"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <div className='flex flex-col md:flex-row justify-between'>
        <Checkbox
          label="Saya telah membaca dan menyetujui Syarat dan Ketentuan yang berlaku"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
        />
        <div>
          <a
            href="https://www.canva.com/design/DAGHX7iHTGU/xCm2JnSiiL_T8NkYLHlfGg/view?utm_content=DAGHX7iHTGU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 underline hover:underline"
          >
            Panduan
          </a>
        </div>
      </div>

      <div className="flex items-center justify-end pt-8">
        <button
          type="submit"
          className="bg-orange-light hover:bg-orange text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
        >
          Konfirmasi
        </button>
      </div>
    </form>
  );
};

export default BankForm;
