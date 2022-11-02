import { Charo } from '../../components/Charo';
import { DaggerT } from '../../components/DaggerT';
import { EngineZero } from '../../components/EngineZero';
import { Fancer } from '../../components/Fancer';
export const Homepage = () => {
  return (
    <div className="mt-10">
      <div className='flex justify-between items-center flex-row'>
        <Fancer icon='Home' />
        <Fancer icon='Content'/>
        <Fancer icon='Blog'/>
        <Fancer icon='Books'/>
        <Fancer icon='User'/>
      </div>
      <Charo />
      <EngineZero />
      <Charo />
      <Charo />
      <DaggerT />
    </div>
  );
};
