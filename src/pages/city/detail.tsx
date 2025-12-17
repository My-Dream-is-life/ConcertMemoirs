import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Landmark, Utensils, Map } from 'lucide-react';
import DetailLayout from '@/components/layout/DetailLayout';
import AttractionCard from '@/components/molecules/AttractionCard';
import FoodCard from '@/components/molecules/FoodCard';
import SectionCard from '@/components/molecules/SectionCard';
import TravelTip from '@/components/molecules/TravelTip';
import { allCities } from '@/static/city';

const CityDetail: FC = () => {
  const { id } = useParams();

  const cityDetail = useMemo(() => allCities.filter((city) => city.id === id)[0], [id]);

  return (
    <DetailLayout {...cityDetail}>
      <div className="space-y-8">
        <SectionCard icon={Landmark} title="必游景点">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cityDetail.attractions?.map((attraction, idx) => (
              <AttractionCard key={idx} {...attraction} />
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Utensils} title="特色美食">
          <div className="grid gap-4 sm:grid-cols-2">
            {cityDetail.foods?.map((food, idx) => (
              <FoodCard key={idx} {...food} />
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Map} title="旅游攻略">
          <div className="grid gap-4 sm:grid-cols-2">
            {cityDetail.travels?.map((travel, idx) => (
              <TravelTip key={idx} {...travel} />
            ))}
          </div>
        </SectionCard>
      </div>
    </DetailLayout>
  );
};

export default CityDetail;
