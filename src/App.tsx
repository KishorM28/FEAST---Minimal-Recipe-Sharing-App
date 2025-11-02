import { useState } from 'react';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { DiscoverScreen } from './components/DiscoverScreen';
import { RecipeDetailScreen } from './components/RecipeDetailScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { UploadScreen } from './components/UploadScreen';
import { VideoPlayerScreen } from './components/VideoPlayerScreen';
import { RatingModal } from './components/RatingModal';
import { ImagePickerModal } from './components/ImagePickerModal';
import { SettingsScreen } from './components/SettingsScreen';
import { EditProfileScreen } from './components/EditProfileScreen';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

type Screen = 'onboarding' | 'home' | 'discover' | 'recipe-detail' | 'profile' | 'upload' | 'video-player' | 'settings' | 'edit-profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);

  const handleNavigate = (screen: string) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen as Screen);
  };

  const handleRecipeClick = (recipeId: number) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('recipe-detail');
  };

  const handleBack = () => {
    setCurrentScreen(previousScreen);
  };

  const handlePublish = () => {
    toast.success('Recipe Shared with the FEAST Tribe! 🎉', {
      description: 'Your culinary creation is now inspiring others in the community.',
    });
    setTimeout(() => {
      setCurrentScreen('home');
    }, 1500);
  };

  const handlePlayVideo = () => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('video-player');
  };

  const handleRateRecipe = () => {
    setShowRatingModal(true);
  };

  const handleSubmitRating = (rating: number, comment: string) => {
    toast.success('Thank you for your rating!', {
      description: `You rated this recipe ${rating} stars.`,
    });
  };

  const handleOpenImagePicker = () => {
    setShowImagePicker(true);
  };

  const handleSelectImage = (imageUrl: string) => {
    toast.success('Image selected!');
  };

  const handleEditProfile = () => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('edit-profile');
  };

  const handleSaveProfile = (profile: { name: string; bio: string }) => {
    toast.success('Profile updated!', {
      description: 'Your changes have been saved.',
    });
  };

  const handleOpenSettings = () => {
    setPreviousScreen(currentScreen);
    setCurrentScreen('settings');
  };

  return (
    <div className="max-w-md mx-auto bg-[#FAF9F6] min-h-screen relative">
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onNavigate={handleNavigate} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} onRecipeClick={handleRecipeClick} />
      )}
      {currentScreen === 'discover' && (
        <DiscoverScreen onNavigate={handleNavigate} onRecipeClick={handleRecipeClick} />
      )}
      {currentScreen === 'recipe-detail' && (
        <RecipeDetailScreen
          onNavigate={handleNavigate}
          onBack={handleBack}
          onPlayVideo={handlePlayVideo}
          onRateRecipe={handleRateRecipe}
        />
      )}
      {currentScreen === 'profile' && (
        <ProfileScreen
          onNavigate={handleNavigate}
          onRecipeClick={handleRecipeClick}
          onEditProfile={handleEditProfile}
          onOpenSettings={handleOpenSettings}
        />
      )}
      {currentScreen === 'upload' && (
        <UploadScreen
          onNavigate={handleNavigate}
          onPublish={handlePublish}
          onOpenImagePicker={handleOpenImagePicker}
        />
      )}
      {currentScreen === 'video-player' && (
        <VideoPlayerScreen
          onBack={handleBack}
          recipeTitle="Creamy Truffle Pasta"
        />
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen onNavigate={handleNavigate} onBack={handleBack} />
      )}
      {currentScreen === 'edit-profile' && (
        <EditProfileScreen onBack={handleBack} onSave={handleSaveProfile} />
      )}

      {/* Modals */}
      {showRatingModal && (
        <RatingModal
          onClose={() => setShowRatingModal(false)}
          onSubmit={handleSubmitRating}
          recipeTitle="Creamy Truffle Pasta"
        />
      )}
      {showImagePicker && (
        <ImagePickerModal
          onClose={() => setShowImagePicker(false)}
          onSelectImage={handleSelectImage}
        />
      )}

      <Toaster />
    </div>
  );
}
