import Link from "next/link";
import React from "react";
import { XGoogle, XPlay, XPlus } from "./ReusableSvgs";

interface THead3Props {
  title: string;
}

export const THead3: React.FC<THead3Props> = ({ title }) => {
  return (
    <div className="mb-8 text-center">
      <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h3>
    </div>
  );
};

interface TInputProps {
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (value: any) => void;
}

export const TInputText: React.FC<TInputProps> = ({
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-full border border-gray-700 bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
};

export const TInputPassword: React.FC<TInputProps> = ({
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <input
      type="password"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id="password"
      className="w-full rounded-full border border-gray-700 bg-black px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
};

interface TButtonProps {
  text: string;
  link: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TButtonColor: React.FC<TButtonProps> = ({ text, link, onClick }) => {
  return (
    <Link href={link} passHref>
      <button onClick={onClick} className="w-full rounded-full bg-red-600 py-3 font-semibold text-white transition duration-300 hover:bg-red-700">
        {text}
      </button>
    </Link>
  );
};

interface TButtonOutlineProps {
  text: string;
  google?: boolean;
}

export const TButtonOutline: React.FC<TButtonOutlineProps> = ({
  text,
  google,
}) => {
  return (
    <button className="flex w-full items-center justify-center rounded-full border border-gray-700 bg-black py-3 text-white transition duration-300 hover:bg-gray-800">
      {google && <XGoogle />}
      <span className="mr-3">{text}</span>
    </button>
  );
};

interface TBtnProps {
  text: string;
  link: string;
  play?: boolean;
  plus?: boolean;
}

export const TBtnColor: React.FC<TBtnProps> = ({ text, link, play }) => {
  return (
    <Link
      href={link}
      className=" ease-in-up hidden rounded-full bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
    >
      <div className="flex items-center justify-center space-x-2">
        {play && <XPlay />}
        {text}
      </div>
    </Link>
  );
};

export const TBtnWhite: React.FC<TBtnProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="ease-in-up hidden rounded-full bg-rCream px-8 py-3 text-base font-medium text-primary shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
    >
      {text}
    </Link>
  );
};

export const TBtnBlackish: React.FC<TBtnProps> = ({ text, link, plus }) => {
  return (
    <Link
      href={link}
      className="ease-in-up hidden rounded-full bg-gray-900 bg-opacity-80 px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
    >
      <div className="flex items-center justify-center space-x-2">
        {plus && <XPlus />}
        {text}
      </div>
    </Link>
  );
};
