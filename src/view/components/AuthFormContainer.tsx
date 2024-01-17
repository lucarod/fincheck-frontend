import { Link } from 'react-router-dom';

import { ReactNode } from 'react';

interface AuthFormContainerProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
  onSubmit: () => void;
  children: ReactNode;
}

export function AuthFormContainer({
  title,
  subtitle,
  linkText,
  linkHref,
  onSubmit,
  children,
}: AuthFormContainerProps) {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          {title}
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            {subtitle}
          </span>
          <Link
            to={linkHref}
            className="text-teal-900 font-medium tracking-[-0.5px]">
            {linkText}
          </Link>
        </p>
      </header>
      <form
        onSubmit={onSubmit}
        className="mt-[60px] flex flex-col gap-4"
      >
        {children}
      </form>
    </>
  );
}
