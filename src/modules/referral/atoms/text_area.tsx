import React from 'react';

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: any
}

const Textarea: React.FC<TextareaProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-[#8F8F8F] text-sm font-semibold md:font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="shadow appearance-none border-[#D9D9D9] rounded w-full py-3 px-4 text-gray leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder='Silahkan inputkan'
      />
    </div>
  );
};

export default Textarea;
