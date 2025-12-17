import { FC } from 'react';
import CityCard from '@/components/molecules/CityCard';
import { allCities } from '@/static/city';

const CityList: FC = () => {
  return (
    <div className="m-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allCities.map((city) => (
        <CityCard key={city.id} {...city} />
      ))}
    </div>
  );
};

export default CityList;
