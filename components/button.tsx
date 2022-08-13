import { ReactElement } from "react";

export type ButtonProps = {
  href: string;
  text: string;
  icon?: ReactElement;
};

export default function Button({ href, text, icon }: ButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-block group focus:outline-none focus:ring w-full"
    >
      <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-gradient-to-r from-yellow-300 to-yellow-200 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

      <span className="flex justify-center items-center gap-2 w-full relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
        {icon}
        {text}
      </span>
    </a>
  );
}
