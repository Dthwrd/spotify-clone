import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, onClick, type = "button", disabled, ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        className={twMerge(
          "w-full bg-green-500 border rounded-full border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition",
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
