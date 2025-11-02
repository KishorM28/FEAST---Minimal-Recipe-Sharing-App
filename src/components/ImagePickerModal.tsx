import { X, Camera, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ImagePickerModalProps {
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
}

const sampleImages = [
  'https://images.unsplash.com/photo-1667473775795-41f69ae72c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
];

export function ImagePickerModal({ onClose, onSelectImage }: ImagePickerModalProps) {
  const handleSelect = (imageUrl: string) => {
    onSelectImage(imageUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
      <div className="bg-white rounded-t-3xl w-full max-w-md p-6 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#2C3E2F]">Select Image</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            variant="outline"
            className="h-24 flex-col gap-2 border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83]/5"
            onClick={() => handleSelect(sampleImages[0])}
          >
            <Camera size={32} />
            <span>Take Photo</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex-col gap-2 border-[#8B9D83] text-[#8B9D83] hover:bg-[#8B9D83]/5"
            onClick={() => handleSelect(sampleImages[1])}
          >
            <ImageIcon size={32} />
            <span>Choose from Gallery</span>
          </Button>
        </div>

        {/* Recent Photos */}
        <div className="mb-4">
          <h3 className="mb-3 text-gray-700">Recent Photos</h3>
          <div className="grid grid-cols-3 gap-2">
            {sampleImages.map((image, index) => (
              <button
                key={index}
                onClick={() => handleSelect(image)}
                className="aspect-square rounded-xl overflow-hidden hover:opacity-75 transition-opacity"
              >
                <img src={image} alt={`Sample ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
