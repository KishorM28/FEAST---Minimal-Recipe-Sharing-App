import { Star, Heart, MessageCircle } from 'lucide-react';

interface RecipeCardProps {
  image: string;
  title: string;
  rating: number;
  onClick?: () => void;
  showEngagement?: boolean;
  likes?: number;
  comments?: number;
}

export function RecipeCard({ image, title, rating, onClick, showEngagement, likes, comments }: RecipeCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white mb-1">{title}</h3>
        {showEngagement ? (
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <Heart size={14} className="fill-white" />
              <span>{likes || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              <span>{comments || 0}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
