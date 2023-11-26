import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  tailwind?: string;
  href?: string;
}

const Button = ({ children, tailwind, href, ...attrs }: ButtonProps) => {
  if (href)
    return (
      <a
        className={`bg-[hsla(0, 0%, 7%, 1)] leading-[1.64] text-[1.7rem] min-w-fit text-white px-[55px] pt-[25px] pb-[23px] uppercase font-semibold tracking-[2.5px] border-[1px] border-white border-solid hover:bg-white hover:text-black transition-all ${tailwind}`}
        href={href}
      >
        {children}
      </a>
    );

  return (
    <button
      className={`bg-[hsla(0, 0%, 7%, 1)] leading-[1.64] text-[1.7rem] min-w-fit text-white px-[55px] pt-[25px] pb-[23px] uppercase font-semibold tracking-[2.5px] border-[1px] border-white border-solid hover:bg-white hover:text-black transition-all ${tailwind}`}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
