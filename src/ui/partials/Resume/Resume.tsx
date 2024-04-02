import { BlockInformation } from '../../components/DataInformation/BlockInformation';
import { resumeStyle } from '../../styles/Home/resumeStyles';

export const Resume = () => {
   return (
      <div className={resumeStyle()}>
         <BlockInformation />
      </div>
   );
};
