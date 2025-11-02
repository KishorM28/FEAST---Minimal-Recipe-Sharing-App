import { ArrowLeft, Star, Play, Bookmark, MessageCircle, Share2, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { BottomNavigation } from './BottomNavigation';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { toast } from 'sonner@2.0.3';

interface RecipeDetailScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
  onPlayVideo: () => void;
  onRateRecipe: () => void;
}

export function RecipeDetailScreen({ onNavigate, onBack, onPlayVideo, onRateRecipe }: RecipeDetailScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleSaveRecipe = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? 'Recipe removed from saved' : 'Recipe saved!', {
      description: isSaved ? 'Removed from your saved recipes.' : 'Added to your saved recipes.',
    });
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleShareTo = (platform: string) => {
    toast.success(`Shared to ${platform}!`, {
      description: 'Your friends will love this recipe.',
    });
    setShowShareModal(false);
  };
  const recipe = {
    title: 'Creamy Truffle Pasta',
    image: 'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MTk3NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    totalRatings: 234,
    creator: {
      name: 'Sarah Lane',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    ingredients: [
      '400g fresh fettuccine pasta',
      '2 tbsp truffle oil',
      '1 cup heavy cream',
      '1/2 cup parmesan cheese, grated',
      '2 cloves garlic, minced',
      'Fresh black pepper',
      'Salt to taste',
      'Fresh parsley for garnish',
    ],
    instructions: [
      'Bring a large pot of salted water to boil. Cook pasta according to package directions.',
      'In a large pan, heat truffle oil over medium heat. Add minced garlic and sauté until fragrant.',
      'Pour in heavy cream and bring to a gentle simmer. Reduce heat to low.',
      'Stir in grated parmesan cheese until melted and sauce is smooth.',
      'Drain pasta, reserving 1/2 cup pasta water. Add pasta to the sauce.',
      'Toss pasta in sauce, adding pasta water if needed to reach desired consistency.',
      'Season with salt and fresh black pepper to taste.',
      'Serve immediately, garnished with fresh parsley and extra parmesan.',
    ],
    tipsAndTricks: [
      {
        title: 'Perfect Pasta Water',
        tip: 'Always reserve pasta water before draining. Its starch helps emulsify the sauce for a silky texture.',
      },
      {
        title: 'Truffle Oil Quality',
        tip: 'Use high-quality truffle oil and add it at the end for maximum aroma. A little goes a long way!',
      },
      {
        title: 'Cheese Alternatives',
        tip: 'No parmesan? Try pecorino romano for a sharper flavor, or nutritional yeast for a vegan option.',
      },
      {
        title: 'Temperature Control',
        tip: 'Keep the heat low when adding cheese to prevent it from becoming grainy or separating.',
      },
    ],
    comments: [
      {
        id: 1,
        user: 'Emma Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        rating: 5,
        text: 'Absolutely delicious! The truffle oil really makes this dish special. My family loved it!',
        time: '2 days ago',
      },
      {
        id: 2,
        user: 'James Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        rating: 4,
        text: 'Great recipe! I added some mushrooms for extra flavor. Will definitely make again.',
        time: '5 days ago',
      },
      {
        id: 3,
        user: 'Sophie Martin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
        rating: 5,
        text: 'Perfect for a date night dinner. Easy to follow and impressive results!',
        time: '1 week ago',
      },
      {
        id: 4,
        user: 'Alex Rivera',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        rating: 4,
        text: 'Very creamy and flavorful. Used a bit less cream and it was still amazing.',
        time: '2 weeks ago',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Top Action Buttons */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
      >
        <ArrowLeft size={20} className="text-gray-800" />
      </button>
      <div className="fixed top-6 right-6 z-20 flex gap-2">
        <button
          onClick={handleShare}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <Share2 size={20} className="text-gray-800" />
        </button>
        <button
          onClick={handleSaveRecipe}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <Bookmark
            size={20}
            className={isSaved ? 'text-[#8B9D83] fill-[#8B9D83]' : 'text-gray-800'}
          />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-80">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <main className="max-w-md mx-auto px-6 -mt-8 relative z-10">
        {/* Title and Creator */}
        <div className="mb-6">
          <h1 className="mb-3 text-[#2C3E2F]">{recipe.title}</h1>
          <div className="flex items-center gap-3 mb-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={recipe.creator.avatar} />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <span className="text-gray-600">by {recipe.creator.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span className="text-gray-700">{recipe.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm ml-1">({recipe.totalRatings} ratings)</span>
            </div>
            <Button
              onClick={onRateRecipe}
              variant="outline"
              className="border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83] hover:text-white rounded-full px-4"
            >
              Rate Recipe
            </Button>
          </div>
        </div>

        {/* Video Placeholder */}
        <button
          onClick={onPlayVideo}
          className="mb-8 w-full rounded-2xl bg-gray-200 aspect-video flex items-center justify-center relative overflow-hidden group"
        >
          <img
            src={recipe.image}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#8B9D83] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
              <Play size={24} className="text-white ml-1" fill="white" />
            </div>
            <p className="text-gray-800">Watch Recipe Video</p>
          </div>
        </button>

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="mb-4 text-[#2C3E2F]">Ingredients</h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B9D83] mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section className="mb-8">
          <h2 className="mb-4 text-[#2C3E2F]">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#8B9D83] text-white flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 pt-1">{instruction}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips & Tricks - Unique Culinary Insight */}
        <section className="mb-8 bg-[#8B9D83]/5 rounded-2xl p-6 border border-[#8B9D83]/20">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-[#8B9D83]" />
            <h2 className="text-[#2C3E2F]">Tips & Tricks</h2>
          </div>
          <div className="space-y-4">
            {recipe.tipsAndTricks.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-4">
                <h4 className="text-[#8B9D83] mb-2">{tip.title}</h4>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews & Comments */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#2C3E2F]">Reviews</h2>
            <div className="flex items-center gap-1 text-gray-600">
              <MessageCircle size={18} />
              <span className="text-sm">{recipe.comments.length}</span>
            </div>
          </div>

          <ScrollArea className="h-96 rounded-2xl bg-white p-4 border border-gray-200">
            <div className="space-y-4 pr-4">
              {recipe.comments.map((comment) => (
                <div key={comment.id} className="pb-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-800">{comment.user}</span>
                        <span className="text-gray-400 text-xs">{comment.time}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: comment.rating }).map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>
      </main>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-white rounded-t-3xl w-full max-w-md p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#2C3E2F]">Share Recipe</h2>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <ArrowLeft size={18} className="text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              {['Instagram', 'WhatsApp', 'Twitter', 'Email'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => handleShareTo(platform)}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8B9D83]/10 flex items-center justify-center">
                    <Share2 size={20} className="text-[#8B9D83]" />
                  </div>
                  <span className="text-xs text-gray-600">{platform}</span>
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                navigator.clipboard?.writeText('feast.app/recipe/creamy-truffle-pasta');
                toast.success('Link copied!');
                setShowShareModal(false);
              }}
              variant="outline"
              className="w-full border-[#8B9D83] text-[#8B9D83] rounded-full py-3"
            >
              Copy Link
            </Button>
          </div>
        </div>
      )}

      <BottomNavigation activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
}
