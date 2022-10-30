import Image from 'next/image';
export const EngineZero = () => {
  return (
    <div className="flex">
      <div className="">
        <h1 className="text-2xl">
          Hello <span>👋</span>
        </h1>
        <h1 className="text-2xl">I&apos;m Ahmadsan</h1>
      </div>
      <div className="">
        <div className="relative border border-black rounded-md w-[189px] h-[195px]">
          <div className="absolute right-24 top-9 border border-black bg-yellow-500 w-[147px] h-[147px] rounded-full"></div>
          <div className="absolute right-20 top-2 border border-black bg-white w-[147px] h-[147px] rounded-full">
            <Image
              src={`/assets/images/char0.JPG`}
              alt={'img1'}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
