import { LucideIcon } from 'lucide-react';

export interface VideoItem {
  title: string;
  thumbnail: string;
  url: string;
  duration?: string;
}

export interface PictureItem {
  src: string;
  alt: string;
}

export interface GalleryItem {
  id: number;
  name: string;
  date: string;
  image: string;
  memory: string;
  color: string;
}

export interface BaseItem {
  name: string;
  image?: string;
  description?: string;
  icon?: LucideIcon;
}

export interface BaseCityItem extends BaseItem {
  id: string;
  address: string;
  date: string;
  memory?: string;
  exclusiveVideo?: VideoItem[];
  exclusivePicture?: PictureItem[];
  attractions?: BaseItem[];
  foods?: BaseItem[];
  travels?: BaseItem[];
}

export interface TimelineItem extends BaseCityItem {
  highlight: string;
  songs: string[];
}
