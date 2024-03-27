export const DataInput = ({ legend, id, ...props }) => {
   return (
      <div>
         <label htmlFor={id}>{legend}</label>
         <input id={id} name={id} type="text" />
      </div>
   );
};
