import {
   containerStyle,
   divStyle,
   mainStyle,
} from '../../styles/Global/GlobalStyles';

export const Section = ({ ...props }) => {
   return <section className={containerStyle()} {...props} />;
};

export const Div = ({ ...props }) => {
   return <div className={divStyle()} {...props} />;
};

export const Main = ({ ...props }) => {
   return <main className={mainStyle()} {...props} />;
};
