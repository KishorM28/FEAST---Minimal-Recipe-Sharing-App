import { ArrowLeft, Camera } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface EditProfileScreenProps {
  onBack: () => void;
  onSave: (profile: { name: string; bio: string }) => void;
}

export function EditProfileScreen({ onBack, onSave }: EditProfileScreenProps) {
  const [name, setName] = useState('Maya David');
  const [bio, setBio] = useState('Home chef & food enthusiast. Sharing simple recipes with bold flavors.');

  const handleSave = () => {
    onSave({ name, bio });
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAF9F6] border-b border-gray-200 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBack}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-[#2C3E2F]">Edit Profile</h1>
          <button onClick={handleSave} className="text-[#8B9D83]">
            Save
          </button>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maya" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#8B9D83] flex items-center justify-center">
              <Camera size={16} className="text-white" />
            </button>
          </div>
          <button className="text-[#8B9D83] mt-3">Change Photo</button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-300 rounded-xl py-6"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Bio</label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border-gray-300 rounded-xl min-h-24"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <Input
              type="email"
              defaultValue="maya.david@example.com"
              className="border-gray-300 rounded-xl py-6"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Username</label>
            <Input
              defaultValue="@mayadavid"
              className="border-gray-300 rounded-xl py-6"
            />
          </div>
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-[#8B9D83] hover:bg-[#7A8C74] text-white rounded-full py-6 mt-8"
        >
          Save Changes
        </Button>
      </main>
    </div>
  );
}
