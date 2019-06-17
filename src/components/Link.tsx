/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import MuiLink, { LinkBaseProps } from '@material-ui/core/Link';

const NextComposed: React.FunctionComponent<INextComposedProps> = props => {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a {...other} />
    </NextLink>
  );
}

interface INextComposedProps {
  as?: string;
  href?: string;
  prefetch?: boolean;
  className?: string;
};  

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
export const Link: React.FunctionComponent<IProps & LinkBaseProps> = props => {
  const { activeClassName, router, className: classNameProps, naked, ...other } = props;

  const className = clsx(classNameProps, {
    [activeClassName as string]: router && router.pathname === props.href && activeClassName,
  });
  if (naked) {
    return <NextComposed className={className} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} {...other} />;
}

interface IProps {
  activeClassName?: string;
  as?: string;
  className?: string;
  href?: string;
  naked?: boolean;
  onClick?: () => void;
  prefetch?: boolean;
  router?: {
    pathname?: string;
  };
};