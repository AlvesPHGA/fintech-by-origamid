import React from 'react';

interface LinkNavProps extends React.ComponentProps<'a'> {
   link?: string;
}

export const LinkNav = ({ link, ...props }: LinkNavProps) => {
   return <a href={link} {...props} />;
};
