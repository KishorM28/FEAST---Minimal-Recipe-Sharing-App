import { Leaf } from 'lucide-react';
import { Button } from './ui/button';

interface OnboardingScreenProps {
  onNavigate: (screen: string) => void;
}

export function OnboardingScreen({ onNavigate }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-between p-8 pb-12">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-6 w-20 h-20 rounded-full bg-[#8B9D83] flex items-center justify-center">
          <Leaf size={40} className="text-white" strokeWidth={1.5} />
        </div>

        {/* App Name */}
        <h1 className="mb-3 text-[#2C3E2F]">FEAST</h1>

        {/* Tagline */}
        <p className="text-gray-500 text-center mb-8">
          Flavor Exchange And Sharing Tribe
        </p>

        {/* Unique Value Props */}
        <div className="space-y-3 text-center">
          <div className="px-4 py-2 rounded-full bg-[#8B9D83]/10 inline-block">
            <p className="text-[#8B9D83] text-sm">✨ Ad-Free Experience</p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#8B9D83]/10 inline-block">
            <p className="text-[#8B9D83] text-sm">🎨 Visual-First Culinary Journey</p>
          </div>
          <div className="px-4 py-2 rounded-full bg-[#8B9D83]/10 inline-block">
            <p className="text-[#8B9D83] text-sm">🤝 Join the Thriving Tribe</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-sm space-y-3">
        <Button
          onClick={() => onNavigate('home')}
          className="w-full bg-[#8B9D83] hover:bg-[#7A8C74] text-white rounded-full py-6"
        >
          Sign Up
        </Button>
        <Button
          onClick={() => onNavigate('home')}
          variant="outline"
          className="w-full border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83]/5 rounded-full py-6"
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
