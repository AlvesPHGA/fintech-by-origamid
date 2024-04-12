import { containerStyle } from '../../styles/Global/GlobalStyles';

export const Section = ({ ...props }) => {
   return <section className={containerStyle()} {...props} />;
};
