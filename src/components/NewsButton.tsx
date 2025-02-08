'use client';
import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}
const NewsButton: React.FC<ButtonProps> = ({
  children,
  isActive,
  ...props
}) => {
  return (
    <button
      className={`border-[1.5px] border-[#0000FF] text-[#f0ebeb] font-satoshi px-4 py-2 transition-all
        hover:bg-[#0000FF] hover:text-white hover:shadow-lg
        ${isActive ? 'bg-[#0000FF] text-white shadow-lg' : ''}`}
      {...props}>
      {children}
    </button>
  );
};
export default NewsButton;