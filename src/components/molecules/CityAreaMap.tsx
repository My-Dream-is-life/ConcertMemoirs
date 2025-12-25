import * as echarts from 'echarts';
import { FC, useEffect, useRef, useState, useCallback } from 'react';
import ReactECharts from 'echarts-for-react';
import { X, MapPin, Calendar, Music } from 'lucide-react';
import BaseParticles from '../atoms/BaseParticles';
import type { BaseCityItem } from '@/types';
import { allCities } from '@/static/city';

interface ProcessedCityData extends BaseCityItem {
  coordinate: [number, number];
}

interface ModalProps {
  city: BaseCityItem | undefined;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ city, onClose }) => {
  if (!city) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="animate-scale-in relative w-full max-w-2xl">
        <div
          className="relative cursor-pointer overflow-hidden rounded-2xl border-2 border-purple-500/50 bg-gradient-to-br from-gray-900 via-purple-900/90 to-pink-900/80 shadow-2xl"
          onClick={onClose}
        >
          <button className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70">
            <X size={24} />
          </button>

          <div className="relative h-48 overflow-hidden bg-gradient-to-r from-purple-900 to-pink-800">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  🎵 {city.name} 演唱会
                </h2>
                <div className="mt-2 flex items-center justify-center gap-4 text-purple-200">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{city.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{city.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          <div className="p-6">
            <div className="mb-6 overflow-hidden rounded-xl border-2 border-purple-500/30">
              <img
                src={city.image}
                alt={`${city.name}演唱会`}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Music className="mt-1 text-purple-400" size={20} />
                <p className="text-lg leading-relaxed text-purple-100">
                  {city.description}
                </p>
              </div>

              <div className="rounded-lg border border-purple-500/20 bg-purple-900/30 p-4">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-purple-300">
                  <MapPin size={18} />
                  演唱会记忆
                </h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span>万人合唱的震撼瞬间</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span>灯光与音乐的完美融合</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-400" />
                    <span>粉丝热情点燃全场</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-purple-500/20 pt-4">
                <button
                  onClick={onClose}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-bold text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95"
                >
                  关闭详情
                </button>
              </div>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      </div>
    </div>
  );
};

const CityAreaMap: FC = () => {
  const [activeCity, setActiveCity] = useState<BaseCityItem>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);
  const chartRef = useRef<ReactECharts>(null);

  const geoCoordMap: Record<string, [number, number]> = {
    济南: [117.120128, 36.652069],
    郑州: [113.665413, 34.757977],
    青岛: [120.382665, 36.066938],
    重庆: [106.55172, 29.562686],
    武汉: [114.304569, 30.593354],
    韩国: [126.8495652, 37.5509788],
    北京: [116.724502, 39.905023],
  };

  const processedData: ProcessedCityData[] = allCities.map((city) => ({
    id: city.id,
    name: city.name,
    date: city.date,
    address: city.address,
    image: city.image,
    description: city.description,
    coordinate: geoCoordMap[city.name],
  }));

  useEffect(() => {
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full')
      .then((res) => res.json())
      .then((geoJson) => {
        echarts.registerMap('china', geoJson);
        setIsMapLoaded(true);
      })
      .catch((error) => {
        console.error('加载地图数据失败:', error);
      });
  }, []);

  const getOption = useCallback(
    (highlightCity?: string): echarts.EChartsOption => {
      if (!isMapLoaded) {
        return {};
      }

      return {
        backgroundColor: 'transparent',
        title: {
          text: '🎵 演唱会足迹地图',
          subtext: '点击城市可查看演唱会详情',
          left: 'center',
          top: 30,
          textStyle: {
            color: '#d8b4fe',
            fontSize: 28,
            fontWeight: 'bold',
            textShadowColor: 'rgba(216, 180, 254, 0.7)',
          },
          subtextStyle: {
            color: '#c084fc',
            fontSize: 16,
            lineHeight: 22,
            fontStyle: 'italic',
          },
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(30, 0, 50, 0.95)',
          borderColor: '#c084fc',
          borderWidth: 1,
          textStyle: {
            color: '#f5f5f5',
            fontSize: 14,
          },
          formatter: (params: echarts.TooltipComponentFormatterCallbackParams) => {
            if ('name' in params) {
              return `
              <div style="font-weight: bold; color: #d8b4fe; margin-bottom: 8px;">
                🎤 ${params.name} 演唱会
              </div>
              <div style="color: #e9d5ff; font-size: 12px;">
                点击查看详情
              </div>
            `;
            }
            return '';
          },
        },
        geo: {
          map: 'china',
          roam: true,
          zoom: 1.2,
          center: [105, 36],
          itemStyle: {
            areaColor: '#2d1b69',
            borderColor: '#4c1d95',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 10,
          },
          emphasis: {
            itemStyle: {
              areaColor: '#581c87',
              borderColor: '#c084fc',
              borderWidth: 2,
              shadowColor: 'rgba(192, 132, 252, 0.4)',
              shadowBlur: 30,
            },
            label: {
              color: '#f0abfc',
              fontWeight: 'bold',
            },
          },
          regions: allCities.map((city) => ({
            name: city.name,
            itemStyle: {
              areaColor: '#4c1d95',
              borderColor: '#c084fc',
            },
            emphasis: {
              itemStyle: {
                areaColor: '#7c3aed',
                shadowColor: 'rgba(124, 58, 237, 0.6)',
                shadowBlur: 40,
              },
            },
          })),
        },
        series: [
          {
            name: '演唱会城市',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: processedData
              .filter((city) => city.coordinate)
              .map((city) => ({
                name: city.name,
                value: [...city.coordinate, 1] as [number, number, number],
                itemStyle: {
                  color: highlightCity === city.name ? '#f0abfc' : '#c084fc',
                  shadowColor: highlightCity === city.name ? '#f0abfc' : '#c084fc',
                  shadowBlur: highlightCity === city.name ? 40 : 20,
                },
              })),
            symbolSize: (val: number[]) => val[2] * 10,
            rippleEffect: {
              brushType: 'stroke',
              scale: 5,
              period: 3,
              color: highlightCity ? '#f0abfc' : '#a855f7',
            },
            itemStyle: {
              color: '#c084fc',
              shadowColor: '#f0abfc',
              shadowBlur: 20,
            },
            label: {
              show: true,
              position: 'right',
              distance: 15,
              formatter: '{b}',
              color: '#f0abfc',
              fontWeight: 'bold',
              fontSize: 14,
              textShadowColor: '#000',
              textShadowBlur: 10,
              backgroundColor: 'rgba(76, 29, 149, 0.8)',
              padding: [4, 8],
              borderRadius: 12,
              borderColor: '#c084fc',
              borderWidth: 1,
            },
            zlevel: 3,
            emphasis: {
              itemStyle: {
                color: '#f0abfc',
                borderColor: '#ffffff',
                borderWidth: 3,
                shadowBlur: 50,
                shadowColor: '#f0abfc',
              },
              label: {
                color: '#ffffff',
                fontSize: 16,
                backgroundColor: 'rgba(124, 58, 237, 0.9)',
                borderColor: '#ffffff',
              },
            },
          },
          {
            name: '辐射光线',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.3,
              color: '#f0abfc',
              symbol: 'circle',
              symbolSize: 4,
            },
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#c084fc' },
                { offset: 1, color: '#f0abfc' },
              ]),
              width: 2,
              opacity: 0.5,
              curveness: 0.4,
            },
            data: processedData
              .filter((item) => item.coordinate)
              .map((item) => ({
                coords: [
                  [104.066301, 30.572961],
                  [item.coordinate[0], item.coordinate[1]],
                ] as [[number, number], [number, number]],
              })),
          },
        ],
      };
    },
    [isMapLoaded, processedData]
  );

  const handleChartClick = (params: {
    seriesType: string;
    data: {
      name: string;
      value?: [number, number, number];
    };
  }) => {
    if (params.seriesType === 'effectScatter' && params.data?.name) {
      const cityName = params.data.name;
      const cityData = processedData.find((c) => c.name === cityName);

      if (cityData) {
        setActiveCity({
          id: cityData.id,
          name: cityData.name,
          image: cityData.image,
          description: cityData.description,
          date: cityData.date,
          address: cityData.address,
        });
        setIsShow(true);
      }
    }
  };

  return (
    <div className="relative h-[700px] w-full overflow-hidden rounded-2xl border border-purple-500/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-pink-900/20" />
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
      <div className="absolute inset-0 opacity-30 blur-3xl transition-all duration-1000" />

      <BaseParticles />

      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-purple-300">正在加载地图数据...</div>
        </div>
      )}

      <ReactECharts
        ref={chartRef}
        option={getOption(activeCity?.name)}
        style={{ height: '100%', width: '100%' }}
        onEvents={{
          click: handleChartClick,
        }}
        theme="dark"
        notMerge={true}
      />

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between rounded-xl border border-purple-500/30 bg-black/40 px-6 py-3 backdrop-blur-sm">
          <div className="text-white">
            <div className="text-sm text-purple-300">已点亮城市</div>
            <div className="text-2xl font-bold text-purple-100">{allCities.length}</div>
          </div>
          <div className="text-white">
            <div className="text-sm text-pink-300">追光之旅</div>
            <div className="text-xl font-bold text-pink-100">继续前行 ✨</div>
          </div>
        </div>
      </div>

      {isShow && <Modal city={activeCity} onClose={() => setIsShow(false)} />}
    </div>
  );
};

export default CityAreaMap;
