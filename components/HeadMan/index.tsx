import { Fancer } from '../Fancer';

export const HeadMan = () => {
  return (
    <div className="flex justify-between items-center flex-row">
      <Fancer icon="Home" />
      <Fancer icon="Content" />
      <Fancer icon="Blog" />
      <Fancer icon="Books" />
      <Fancer icon="User" />
    </div>
  );
};
