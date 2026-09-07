import { Play, Settings, Volume2 } from 'lucide-react';

interface VideoPlayerProps {
  thumbnail?: string;
  duration?: string;
}

export default function VideoPlayer({
  thumbnail = '/images/craig-thumbnail.jpg',
  duration = '1:39',
}: VideoPlayerProps) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
      style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute right-4 top-4 text-sm font-semibold text-white/90">
        supportninja
      </div>

      <button
        type="button"
        aria-label="Play video"
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
      >
        <Play className="h-8 w-8 fill-current" />
      </button>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
        <span className="text-sm font-medium">0:00</span>
        <div className="relative h-1 flex-1 rounded-full bg-white/30">
          <div className="absolute left-0 top-0 h-full w-0 rounded-full bg-red-500" />
        </div>
        <span className="text-sm font-medium">{duration}</span>
        <Volume2 className="h-5 w-5" />
        <Settings className="h-5 w-5" />
      </div>
    </div>
  );
}
