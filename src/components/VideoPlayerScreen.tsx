import { ArrowLeft, Play, Pause, Volume2, Maximize } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerScreenProps {
  onBack: () => void;
  recipeTitle: string;
}

export function VideoPlayerScreen({ onBack, recipeTitle }: VideoPlayerScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent absolute top-0 left-0 right-0 z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
        <h3 className="text-white max-w-[60%] truncate">{recipeTitle}</h3>
        <div className="w-10" />
      </div>

      {/* Video Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MTk3NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Video"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute w-20 h-20 rounded-full bg-white/90 flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause size={32} className="text-[#8B9D83]" fill="#8B9D83" />
          ) : (
            <Play size={32} className="text-[#8B9D83] ml-1" fill="#8B9D83" />
          )}
        </button>
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-t from-black/60 to-transparent p-6 absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white text-sm">0:45</span>
          <div className="flex-1 mx-4 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '35%' }} />
          </div>
          <span className="text-white text-sm">2:08</span>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="text-white">
            <Volume2 size={24} />
          </button>
          <button className="text-white">
            <Maximize size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
