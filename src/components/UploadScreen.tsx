import { ArrowLeft, Upload, Image, Video, X } from 'lucide-react';
import { useState } from 'react';
import { BottomNavigation } from './BottomNavigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';

interface UploadScreenProps {
  onNavigate: (screen: string) => void;
  onPublish: () => void;
  onOpenImagePicker: () => void;
}

const predefinedTags = ['Italian', 'Pasta', 'Vegetarian', 'Quick & Easy', 'Dinner', 'Gourmet', 'Comfort Food', 'Dairy'];

export function UploadScreen({ onNavigate, onPublish, onOpenImagePicker }: UploadScreenProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(['Italian', 'Pasta']);
  const [skillLevel, setSkillLevel] = useState<string>('Intermediate');

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAF9F6] border-b border-gray-200 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h2 className="text-[#2C3E2F]">Upload Recipe</h2>
          <div className="w-6" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Upload Form */}
      <main className="max-w-md mx-auto px-6 py-6">
        {/* Photo Upload - Visual First Emphasis */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-700">Recipe Photo</label>
            <Badge className="bg-[#8B9D83]/10 text-[#8B9D83] border-0 text-xs">
              Visual-First ✨
            </Badge>
          </div>
          {selectedImage ? (
            <div className="relative rounded-2xl overflow-hidden">
              <img src={selectedImage} alt="Recipe" className="w-full h-64 object-cover" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
              >
                <X size={16} className="text-white" />
              </button>
              <button
                onClick={onOpenImagePicker}
                className="absolute bottom-3 right-3 px-4 py-2 rounded-full bg-white text-gray-800 text-sm"
              >
                Change Photo
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenImagePicker}
              className="w-full border-2 border-dashed border-[#8B9D83] rounded-2xl p-12 text-center bg-[#8B9D83]/5 hover:bg-[#8B9D83]/10 transition-colors"
            >
              <Image size={48} className="mx-auto mb-3 text-[#8B9D83]" />
              <p className="text-gray-700 mb-2">Tap to upload high-quality photo</p>
              <p className="text-gray-500 text-sm mb-3">Make your dish shine! 📸</p>
              <div className="text-xs text-gray-400">
                <p>• Use natural lighting</p>
                <p>• Show the finished dish</p>
                <p>• JPG, PNG up to 10MB</p>
              </div>
            </button>
          )}
        </div>

        {/* Recipe Title */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Recipe Title</label>
          <Input
            placeholder="e.g., Creamy Truffle Pasta"
            className="border-gray-300 rounded-xl py-6"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Description</label>
          <Textarea
            placeholder="Tell us about your recipe..."
            className="border-gray-300 rounded-xl min-h-24"
          />
        </div>

        {/* Categories & Tags */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Categories & Tags</label>
          <div className="flex flex-wrap gap-2">
            {predefinedTags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer rounded-full px-4 py-2 ${
                  selectedTags.includes(tag)
                    ? 'bg-[#8B9D83] text-white hover:bg-[#7A8C74]'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-[#8B9D83]'
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Level */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Skill Level</label>
          <div className="grid grid-cols-3 gap-3">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setSkillLevel(level)}
                className={`py-3 rounded-xl border transition-all ${
                  skillLevel === level
                    ? 'border-[#8B9D83] bg-[#8B9D83]/10 text-[#8B9D83]'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-[#8B9D83]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Video Upload (Optional) */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Video (Optional)</label>
          <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-white hover:border-[#8B9D83] transition-colors">
            <Video size={40} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 text-sm">Tap to upload video</p>
          </button>
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Ingredients</label>
          <Textarea
            placeholder="List your ingredients (one per line)"
            className="border-gray-300 rounded-xl min-h-32"
          />
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <label className="block mb-2 text-gray-700">Instructions</label>
          <Textarea
            placeholder="Step-by-step cooking instructions"
            className="border-gray-300 rounded-xl min-h-40"
          />
        </div>

        {/* Publish Button */}
        <Button
          onClick={onPublish}
          className="w-full bg-[#8B9D83] hover:bg-[#7A8C74] text-white rounded-full py-6"
        >
          <Upload size={20} className="mr-2" />
          Publish Recipe
        </Button>
      </main>

      <BottomNavigation activeScreen="upload" onNavigate={onNavigate} />
    </div>
  );
}
