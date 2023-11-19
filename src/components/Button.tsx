interface ButtonProps {
  children: string;
  tailwind?: string;
}

const Button = ({ children, tailwind }: ButtonProps) => {
  return (
    <button
      className={`
      text-[1.7rem] w-fit text-white px-[55px] pt-[25px] pb-[23px] uppercase font-semibold leading-4 tracking-[2.5px] border-[1px] border-white border-solid hover:bg-white hover:text-black transition-all 
      ${tailwind}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
