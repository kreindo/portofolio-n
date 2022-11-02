import { Fancer } from '../Fancer';

export const HeadMan = () => {
  const menus = ['Home', 'Content', 'Blog', 'Books', 'User']
  return (
    <div className="flex justify-between items-center flex-row">
      {menus.map((menu, index)=>{
        return (<Fancer key={index} icon={menu}/>)
      })}
    </div>
  );
};
