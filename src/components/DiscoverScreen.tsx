import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { RecipeCard } from './RecipeCard';
import { BottomNavigation } from './BottomNavigation';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface DiscoverScreenProps {
  onNavigate: (screen: string) => void;
  onRecipeClick: (recipeId: number) => void;
}

const allRecipes = [
  {
    id: 9,
    title: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1594497523022-e4d56a881497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBiZXJyaWVzfGVufDF8fHx8MTc2MjAzNDI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    categories: ['Breakfast', 'Vegetarian', 'Healthy'],
  },
  {
    id: 10,
    title: 'Street Tacos',
    image: 'https://images.unsplash.com/photo-1707603571504-86c1ea50903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2MjAzNjc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    categories: ['Mexican', 'Quick & Easy', 'Dinner'],
  },
  {
    id: 11,
    title: 'Curry Rice Bowl',
    image: 'https://images.unsplash.com/photo-1694953593181-6ce423500712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyeSUyMHJpY2UlMjBib3dsfGVufDF8fHx8MTc2MTk3Mzk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    categories: ['Indian', 'Vegetarian', 'Dinner'],
  },
  {
    id: 12,
    title: 'Fluffy Pancakes',
    image: 'https://images.unsplash.com/photo-1636743713732-125909a35dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJyZWFrZmFzdHxlbnwxfHx8fDE3NjIwMDU1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    categories: ['Breakfast', 'Quick & Easy', 'Dessert'],
  },
  {
    id: 1,
    title: 'Creamy Truffle Pasta',
    image: 'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MTk3NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    categories: ['Italian', 'Pasta', 'Dinner'],
  },
  {
    id: 3,
    title: 'Artisan Pizza',
    image: 'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDF8fHx8MTc2MjA2MTMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    categories: ['Italian', 'Dinner', 'Comfort Food'],
  },
];

const filterOptions = {
  'Cuisine': ['Italian', 'Mexican', 'Indian', 'Japanese', 'American'],
  'Meal Type': ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'],
  'Diet': ['Vegetarian', 'Vegan', 'Gluten-Free', 'Healthy', 'Low-Carb'],
  'Time': ['Quick & Easy', 'Under 30 min', '30-60 min', '1+ hour'],
};

export function DiscoverScreen({ onNavigate, onRecipeClick }: DiscoverScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(null);

  const displayedRecipes = allRecipes.filter(recipe => {
    const matchesSearch = searchQuery === '' || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = !selectedSubFilter || 
      recipe.categories.includes(selectedSubFilter);
    return matchesSearch && matchesFilter;
  });

  const handleFilterClick = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter(null);
      setSelectedSubFilter(null);
    } else {
      setSelectedFilter(filter);
      setSelectedSubFilter(null);
    }
  };

  const handleSubFilterClick = (subFilter: string) => {
    if (selectedSubFilter === subFilter) {
      setSelectedSubFilter(null);
    } else {
      setSelectedSubFilter(subFilter);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Header with Search */}
      <header className="sticky top-0 bg-[#FAF9F6] border-b border-gray-200 z-10 pb-4">
        <div className="max-w-md mx-auto px-6 pt-6">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-full border-gray-300 bg-white"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
            {/* AI-Powered For You Filter */}
            <Badge
              onClick={() => {
                setSelectedFilter('For You');
                setSelectedSubFilter(null);
              }}
              className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-colors ${
                selectedFilter === 'For You'
                  ? 'bg-[#8B9D83] text-white border-[#8B9D83]'
                  : 'bg-[#8B9D83]/10 text-[#8B9D83] border-[#8B9D83]/20 hover:bg-[#8B9D83]/20'
              }`}
            >
              <Sparkles size={14} className="inline mr-1" />
              For You
            </Badge>
            {Object.keys(filterOptions).map((category) => (
              <Badge
                key={category}
                onClick={() => handleFilterClick(category)}
                variant="outline"
                className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-colors ${
                  selectedFilter === category
                    ? 'bg-[#8B9D83] text-white border-[#8B9D83]'
                    : 'border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83]/10'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Sub-Filter Chips */}
          {selectedFilter && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2 no-scrollbar">
              {filterOptions[selectedFilter as keyof typeof filterOptions].map((subFilter) => (
                <Badge
                  key={subFilter}
                  onClick={() => handleSubFilterClick(subFilter)}
                  className={`px-3 py-1.5 rounded-full cursor-pointer whitespace-nowrap text-sm transition-colors ${
                    selectedSubFilter === subFilter
                      ? 'bg-[#8B9D83] text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#8B9D83]'
                  }`}
                >
                  {subFilter}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Recipe Grid */}
      <main className="max-w-md mx-auto px-6 py-6">
        {displayedRecipes.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {displayedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                rating={recipe.rating}
                onClick={() => onRecipeClick(recipe.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-2">No recipes found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      <BottomNavigation activeScreen="discover" onNavigate={onNavigate} />
    </div>
  );
}
