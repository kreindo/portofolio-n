import Image from 'next/image';import { Downbad } from '../Downbad';
export const EngineZero = ({ className }: { className: string }) => {
  const user = true;
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="">
        <h1 className="text-[40px] font-semibold ">
          Hello <span>👋</span>
        </h1>
        <h1 className="text-[40px] font-semibold">I&apos;m Lorem</h1>
        <Downbad />
        <Downbad />
        <Downbad />
      </div>
      <div className="">
        <div className="relative border border-black rounded-md w-[189px] h-[195px]">
          <div className="relative">
            <div className="absolute left-[127px] top-[34px] flex flex-col gap-3">
              <div className="h-[9px] w-[35px] border border-black"></div>
              <div className="h-[9px] w-[49px] border border-black"></div>
              <div className="h-[9px] w-[35px] border border-black"></div>
              <div className="h-[9px] w-[49px] border border-black"></div>
              <div className="h-[9px] w-[19px] border border-black"></div>
              <div className="h-[9px] w-[49px] border border-black"></div>
            </div>
          </div>
          <div className="absolute right-[90px] top-6 border border-black bg-yellow-500 w-[147px] h-[147px] rounded-full"></div>
          <div className="absolute right-20 top-2 border border-black bg-white w-[147px] h-[147px] rounded-full">
            <Image
              className="rounded-full"
              src={`${
                !user
                  ? '/assets/images/char0.JPG'
                  : 'https://github.com/ahmad.png'
              }`}
              alt={'img1'}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
