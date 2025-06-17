import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export const EmptyState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/empty.svg" alt="EmptyState" width={240} height={240} />
      <div className="flex flex-col gap-y-6 max-w-xl mx-auto text-center">
        <h6 className="text-lg font-medium tracking-tighter">{title}</h6>
        <p className="text-sm tracking-tighter text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
