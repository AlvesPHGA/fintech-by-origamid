import { NavLink } from 'react-router-dom';
import { linkNavProps } from '../../../data/@types/Nav/INav';
import { linkNavStyle } from '../../styles/Nav/NavStyles';

export const LinkNav = ({ link, ...props }: linkNavProps) => {
   return <NavLink className={linkNavStyle()} to={link} {...props} />;
};
