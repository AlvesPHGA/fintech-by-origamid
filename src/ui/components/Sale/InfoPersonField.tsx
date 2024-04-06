interface InfoPersonFieldProps {
   legend: string;
   info: string | number;
}

export const InfoPersonField = ({ legend, info }: InfoPersonFieldProps) => {
   return (
      <div>
         <span>{legend}</span>
         <span>{info}</span>
      </div>
   );
};
