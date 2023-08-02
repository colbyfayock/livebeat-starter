import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className = '' }: ButtonProps) => {
  return (
    <button className={`inline-block rounded bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400 py-2.5 px-6 text-sm font-bold uppercase text-white  ${className}`}>
      { children }
    </button>
  )
}

export default Button;