import { Settings } from 'lucide-react';
import { RecipeCard } from './RecipeCard';
import { BottomNavigation } from './BottomNavigation';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Button } from './ui/button';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  onRecipeClick: (recipeId: number) => void;
  onEditProfile: () => void;
  onOpenSettings: () => void;
}

const myRecipes = [
  {
    id: 1,
    title: 'Creamy Truffle Pasta',
    image: 'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwcGFzdGElMjBkaXNofGVufDF8fHx8MTc2MTk3NzQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    likes: 234,
    comments: 45,
  },
  {
    id: 3,
    title: 'Artisan Pizza',
    image: 'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDF8fHx8MTc2MjA2MTMzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    likes: 189,
    comments: 32,
  },
  {
    id: 7,
    title: 'Grilled Salmon',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9ufGVufDF8fHx8MTc2MjA2MTMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    likes: 156,
    comments: 28,
  },
  {
    id: 8,
    title: 'Artisan Sourdough',
    image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWR8ZW58MXx8fHwxNzYyMDM2NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    likes: 312,
    comments: 58,
  },
];

const savedRecipes = [
  {
    id: 2,
    title: 'Mediterranean Bowl',
    image: 'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjE5NjUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Chocolate Indulgence',
    image: 'https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MjA1MjYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
  },
  {
    id: 6,
    title: 'Fresh Sushi Platter',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMDU0NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
  {
    id: 9,
    title: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1594497523022-e4d56a881497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBiZXJyaWVzfGVufDF8fHx8MTc2MjAzNDI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
  },
];

export function ProfileScreen({ onNavigate, onRecipeClick, onEditProfile, onOpenSettings }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Profile Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto px-6 py-8 relative">
          <button
            onClick={onOpenSettings}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Settings size={20} className="text-gray-600" />
          </button>
          <div className="flex flex-col items-center">
            <button onClick={onEditProfile}>
              <Avatar className="w-24 h-24 mb-4 hover:opacity-80 transition-opacity">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maya" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </button>
            <h2 className="mb-2 text-[#2C3E2F]">Maya David</h2>
            <p className="text-gray-600 text-center mb-4 max-w-xs">
              Home chef & food enthusiast. Sharing simple recipes with bold flavors.
            </p>
            <Button
              onClick={onEditProfile}
              variant="outline"
              className="mb-6 border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83] hover:text-white rounded-full px-6"
            >
              Edit Profile
            </Button>

            {/* Stats - Community Engagement */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-[#2C3E2F]">24</div>
                <div className="text-gray-500 text-sm">Recipes</div>
              </div>
              <button className="text-center hover:opacity-75 transition-opacity">
                <div className="text-[#2C3E2F]">1.2k</div>
                <div className="text-gray-500 text-sm">Followers</div>
              </button>
              <button className="text-center hover:opacity-75 transition-opacity">
                <div className="text-[#2C3E2F]">342</div>
                <div className="text-gray-500 text-sm">Following</div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <main className="max-w-md mx-auto">
        <Tabs defaultValue="my-recipes" className="w-full">
          <TabsList className="w-full rounded-none border-b border-gray-200 bg-transparent h-auto p-0">
            <TabsTrigger
              value="my-recipes"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B9D83] data-[state=active]:bg-transparent data-[state=active]:text-[#8B9D83] py-4"
            >
              My Recipes
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B9D83] data-[state=active]:bg-transparent data-[state=active]:text-[#8B9D83] py-4"
            >
              Saved Recipes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-recipes" className="px-6 py-6 mt-0">
            <div className="grid grid-cols-2 gap-4">
              {myRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  rating={recipe.rating}
                  showEngagement={true}
                  likes={recipe.likes}
                  comments={recipe.comments}
                  onClick={() => onRecipeClick(recipe.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="px-6 py-6 mt-0">
            <div className="grid grid-cols-2 gap-4">
              {savedRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  {...recipe}
                  onClick={() => onRecipeClick(recipe.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeScreen="profile" onNavigate={onNavigate} />
    </div>
  );
}
