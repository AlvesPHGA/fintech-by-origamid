import { BlockInformationProps } from '../../../data/@types/Home/IResume';
import {
   blockInformationStyle,
   legendBlockInformationStyle,
} from '../../styles/Home/resumeStyles';

export const BlockInformation = ({
   title,
   children,
}: BlockInformationProps) => {
   return (
      <div className={blockInformationStyle()}>
         <h2 className={legendBlockInformationStyle()}>{title}</h2>
         <span>{children}</span>
      </div>
   );
};
