import Image from "next/image";
export const Downbad = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <a href={``}>
        <div className="p-3 relative border border-black rounded-sm bg-white w-14 h-14 flex items-center justify-center">
          <Image className="absolute" width={15} height={15} src={`/assets/images/download.svg`} alt={`Download button`} />
        </div>
      </a>
    </div>
  );
};
