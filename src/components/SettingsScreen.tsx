import { ArrowLeft, Bell, Globe, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { BottomNavigation } from './BottomNavigation';
import { Switch } from './ui/switch';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function SettingsScreen({ onNavigate, onBack }: SettingsScreenProps) {
  const settingsGroups = [
    {
      title: 'Notifications',
      items: [
        { icon: Bell, label: 'Push Notifications', type: 'toggle', value: true },
        { icon: Bell, label: 'Email Notifications', type: 'toggle', value: false },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Globe, label: 'Language', type: 'link', value: 'English' },
        { icon: Lock, label: 'Privacy', type: 'link' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', type: 'link' },
        { icon: LogOut, label: 'Log Out', type: 'link', destructive: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-[#FAF9F6] border-b border-gray-200 z-10">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-[#2C3E2F]">Settings</h1>
        </div>
      </header>

      {/* Settings Content */}
      <main className="max-w-md mx-auto px-6 py-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-8">
            <h2 className="mb-4 text-gray-600">{group.title}</h2>
            <div className="bg-white rounded-2xl overflow-hidden">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div
                    key={itemIndex}
                    className={`flex items-center justify-between p-4 ${
                      itemIndex !== group.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={20}
                        className={item.destructive ? 'text-red-500' : 'text-gray-600'}
                      />
                      <span className={item.destructive ? 'text-red-500' : 'text-gray-800'}>
                        {item.label}
                      </span>
                    </div>
                    {item.type === 'toggle' && <Switch defaultChecked={item.value} />}
                    {item.type === 'link' && (
                      <div className="flex items-center gap-2">
                        {item.value && <span className="text-gray-500 text-sm">{item.value}</span>}
                        <ChevronRight size={20} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="text-center text-gray-400 text-sm mt-8">
          FEAST Version 1.0.0
        </div>
      </main>

      <BottomNavigation activeScreen="profile" onNavigate={onNavigate} />
    </div>
  );
}
