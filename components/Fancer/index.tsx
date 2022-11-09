import { FaAnchor, FaBook, FaHome, FaNewspaper, FaUser, FaCode } from 'react-icons/fa';
export const Fancer = ({ icon, className }: { icon: string; className?:string }) => {
  return (
    <div className={`${className} group w-full h-[64px]`}>
      <div className=" flex flex-col justify-center items-center border border-black rounded-sm bg-white w-auto h-[64px] group-hover:border-white group-hover:bg-black">
        {icon == 'Home' ? (
          <FaHome className="group-hover:invert" size={16} />
        ) : icon == 'Blog' ? (
          <FaNewspaper className="group-hover:invert" size={16} />
        ) : icon == 'User' ? (
          <FaUser className="group-hover:invert" size={16} />
        ) : icon == 'Books' ? (
          <FaBook className="group-hover:invert" size={16} />
        ) : icon == 'Content' ? (
          <FaAnchor className="group-hover:invert" size={16} />
        ) : icon == 'Works' ? (
          <FaCode className="group-hover:invert" size={16} />
        ) : (
          <></>
        )}
        <p className="group-hover:text-white">{icon}</p>
      </div>
    </div>
  );
};
