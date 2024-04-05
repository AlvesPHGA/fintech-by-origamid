import { linkNavProps } from '../../../data/@types/Nav/INav';
import { linkNavStyle } from '../../styles/Nav/NavStyles';

export const LinkNav = ({ link, ...props }: linkNavProps) => {
   return <a className={linkNavStyle()} href={link} {...props} />;
};
