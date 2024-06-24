import React from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="form-checkbox"
        />
        <span className="ml-2 text-sm">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
