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
  song: string;
  songFile: string;
}

export interface ConcertThemeItem {
  id: string;
  name: string;
  artist: string;
  watchCount: number;
  description: string;
  themeMusic: string;
  themeColor: string;
  themeImage: string;
  themeTime: string;
  venues: string[];
  highlights: string[];
  setlistCount: number;
  avgDuration: string;
  firstShow: string;
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

export interface TicketItem {
  name: string;
  address: string;
  date: string;
  time: string;
  seat: string;
  section: string;
  price: string;
  showNumber: string;
  ticketImage?: string;
  tourName: string;
  artist: string;
  gate: string;
  orderNumber: string;
  specialNotes?: string;
}

export interface Music {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration?: string;
  cover: string;
  url: string;
  lyrics: string;
  isNew?: boolean;
}

export interface LyricLine {
  time: number;
  text: string;
}

export interface CountDownTimeUnit {
  value: number;
  label: string;
}

export interface NewConcertInfo extends BaseCityItem {
  venue: string;
}
