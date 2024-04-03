export const BlockInformation = ({
   title,
   children,
}: {
   title: string;
   children: string;
}) => {
   return (
      <div className="bg-white py-2.5 px-5 rounded-[1.25rem]">
         <h2 className="text-2xl mb-2.5 text-color-1">{title}</h2>
         <span>{children}</span>
      </div>
   );
};
