import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Video, Images, Landmark, Utensils, Map } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DetailLayout from '@/components/layout/DetailLayout';
import AttractionCard from '@/components/molecules/AttractionCard';
import FoodCard from '@/components/molecules/FoodCard';
import SectionCard from '@/components/molecules/SectionCard';
import TravelTip from '@/components/molecules/TravelTip';
import VideoSection from '@/components/molecules/VideoSection';
import PictureSection from '@/components/molecules/PictureSection';
import { allCities } from '@/static/city';

const CityDetail: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const cityDetail = useMemo(() => allCities.filter((city) => city.id === id)[0], [id]);

  return (
    <DetailLayout {...cityDetail}>
      <div className="space-y-8">
        <SectionCard icon={Video} title={t('CityDetail.Video')}>
          <VideoSection videos={cityDetail.exclusiveVideo ?? []} />
        </SectionCard>

        <SectionCard icon={Images} title={t('CityDetail.Photo')}>
          <PictureSection pictures={cityDetail.exclusivePicture ?? []} />
        </SectionCard>

        <SectionCard icon={Landmark} title={t('CityDetail.Attraction')}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cityDetail.attractions?.map((attraction, idx) => (
              <AttractionCard key={idx} {...attraction} />
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Utensils} title={t('CityDetail.Food')}>
          <div className="grid gap-4 sm:grid-cols-2">
            {cityDetail.foods?.map((food, idx) => (
              <FoodCard key={idx} {...food} />
            ))}
          </div>
        </SectionCard>

        <SectionCard icon={Map} title={t('CityDetail.Travel')}>
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
