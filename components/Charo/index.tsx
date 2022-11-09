import Image from 'next/image';
export const Charo = ({className}:{className:string}) => {
  const items: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f'];
  return (
    <div className={`${className} border-[1.5px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] rounded-md border-black py-5 px-5`}>
      <ul className="bg-blue-300 flex justify-center gap-10">
        {items.map((item: any, index: any) => {
          return (
            <li
              key={index}
              className="border-[1.5px] border-black relative w-[50px] h-[50px] rounded-full"
            >
              <Image
                alt={`${item + index}`}
                fill
                className="absolute rounded-full"
                src={`https://picsum.photos/200/200?random=${index}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
