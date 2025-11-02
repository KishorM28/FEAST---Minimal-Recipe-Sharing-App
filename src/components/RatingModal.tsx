import { X, Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface RatingModalProps {
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
  recipeTitle: string;
}

export function RatingModal({ onClose, onSubmit, recipeTitle }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, comment);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="bg-white rounded-t-3xl w-full max-w-md p-6 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#2C3E2F]">Rate Recipe</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Recipe Title */}
        <p className="text-gray-600 mb-6">{recipeTitle}</p>

        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={40}
                className={
                  star <= (hoverRating || rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }
              />
            </button>
          ))}
        </div>

        {/* Comment */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Your Review (Optional)</label>
          <Textarea
            placeholder="Share your experience with this recipe..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-gray-300 rounded-xl min-h-24"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full bg-[#8B9D83] hover:bg-[#7A8C74] text-white rounded-full py-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit Rating
        </Button>
      </div>
    </div>
  );
}
