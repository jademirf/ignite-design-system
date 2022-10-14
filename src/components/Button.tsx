import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({children, asChild, className, ...props}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'bg-cyan-500 font-sans py-3 px-4 rounded text-black font-semibold text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}