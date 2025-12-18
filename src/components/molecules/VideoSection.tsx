import { FC } from 'react';
import { Play } from 'lucide-react';
import type { VideoItem } from '@/types';

interface VideoSectionProps {
  videos: VideoItem[];
}

const VideoSection: FC<VideoSectionProps> = ({ videos }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <a
          key={video.title}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50"
        >
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                <Play
                  className="ml-1 h-6 w-6 text-primary-foreground"
                  fill="currentColor"
                />
              </div>
            </div>

            {video.duration && (
              <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                {video.duration}
              </span>
            )}
          </div>

          <div className="p-3">
            <h3 className="line-clamp-2 font-medium text-foreground transition-colors group-hover:text-primary">
              {video.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default VideoSection;
