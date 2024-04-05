import React from 'react';

interface LinkNavProps extends React.ComponentProps<'a'> {
   link?: string;
}

export const LinkNav = ({ link, ...props }: LinkNavProps) => {
   return <a className="block text-left py-1 flex-1" href={link} {...props} />;
};
