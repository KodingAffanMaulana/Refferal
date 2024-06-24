import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-[#8F8F8F] text-sm font-semibold md:font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border-[#D9D9D9] rounded w-full py-3 px-4 text-gray leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder='Silahkan inputkan'
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
