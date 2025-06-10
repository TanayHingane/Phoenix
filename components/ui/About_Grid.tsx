import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-2 md:max-w-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description1,
  description2,
  description3,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description1?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  description3?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group row-span-1 flex justify-between space-y-4 rounded-xl bg-white p-4 object-cover",
        className
      )}
    >
      {header}
      <div className="text-base md:text-lg mt-2 mb-2 font-sans font-light text-black">
        {icon}
        <div className="mt-2 mb-2 font-pre text-xl md:text-2xl text-sky-500 ">
          {title}
        </div>
        <div className="font-sans gap-2 text-xs md:text-sm font-normal text-neutral-600 ">
          {description1}
          <br />
          <br />
          {description2}
          <br />
          <br />
          {description3}
        </div>
      </div>
    </div>
  );
};
