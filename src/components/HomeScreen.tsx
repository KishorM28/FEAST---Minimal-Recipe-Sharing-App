import { Leaf, Search, ChevronRight, Sparkles } from 'lucide-react';
import { RecipeCard } from './RecipeCard';
import { BottomNavigation } from './BottomNavigation';
import { Badge } from './ui/badge';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  onRecipeClick: (recipeId: number) => void;
}

const recommendedRecipes = [
  {
    id: 1,
    title: 'Creamy Truffle Pasta',
    image: 'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MTk3NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Mediterranean Bowl',
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjE5NjUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Artisan Pizza',
    image: 'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDF8fHx8MTc2MjA2MTMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Chocolate Indulgence',
    image: 'https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjA1MjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
];

const curatedCollections = [
  {
    id: 'autumn',
    title: 'Autumn Comforts',
    description: 'Warming dishes for cozy evenings',
    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 'quick-weeknight',
    title: 'Quick Weeknight Wins',
    description: '30-minute meals that wow',
    image: 'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 'plant-power',
    title: 'Plant-Powered Plates',
    description: 'Vibrant vegetarian & vegan',
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
];

const allRecipes = [
  {
    id: 5,
    title: 'Avocado Toast Delight',
    image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjB0b2FzdCUyMGF2b2NhZG98ZW58MXx8fHwxNzYyMDYxMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
  },
  {
    id: 6,
    title: 'Fresh Sushi Platter',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMDU0NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 7,
    title: 'Grilled Salmon',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9ufGVufDF8fHx8MTc2MjA2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
  },
  {
    id: 8,
    title: 'Artisan Sourdough',
    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWR8ZW58MXx8fHwxNzYyMDM2NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
];

export function HomeScreen({ onNavigate, onRecipeClick }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAF9F6] border-b border-gray-200 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#8B9D83] flex items-center justify-center">
              <Leaf size={18} className="text-white" strokeWidth={1.5} />
            </div>
            <span className="text-[#2C3E2F]">FEAST</span>
          </div>
          <button onClick={() => onNavigate('discover')}>
            <Search size={24} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto">
        {/* AI-Powered Recommendations */}
        <section className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-[#8B9D83]" />
              <h2 className="text-[#2C3E2F]">Recommended for You</h2>
            </div>
            <Badge className="bg-[#8B9D83]/10 text-[#8B9D83] border-0 hover:bg-[#8B9D83]/20">
              AI Powered
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {recommendedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                onClick={() => onRecipeClick(recipe.id)}
              />
            ))}
          </div>
        </section>

        {/* Curated Collections Carousel */}
        <section className="py-6">
          <div className="px-6 mb-4 flex items-center justify-between">
            <h2 className="text-[#2C3E2F]">Curated Collections</h2>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 pb-2 no-scrollbar">
            {curatedCollections.map((collection) => (
              <button
                key={collection.id}
                className="flex-shrink-0 w-64 rounded-2xl overflow-hidden relative group"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="text-white mb-1">{collection.title}</h3>
                  <p className="text-white/80 text-sm">{collection.description}</p>
                </div>
                <Badge className="absolute top-3 right-3 bg-[#8B9D83] text-white border-0">
                  Collection
                </Badge>
              </button>
            ))}
          </div>
        </section>

        {/* All Recipes Grid */}
        <section className="px-6 pb-6">
          <h2 className="mb-4 text-[#2C3E2F]">Latest from the Tribe</h2>
          <div className="grid grid-cols-2 gap-4">
            {allRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                onClick={() => onRecipeClick(recipe.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
}
