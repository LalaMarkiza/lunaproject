import React from 'react';
import { Home, Calendar, BookOpen, MessageCircle, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex flex-col items-center justify-center
      p-2 flex-1 transition-all
      ${active ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}
    `}
  >
    {React.cloneElement(icon as React.ReactElement, { 
      size: 24,
      className: `transition-transform ${active ? 'scale-110' : 'scale-100'}`
    })}
    <span className={`text-xs mt-1 transition-all ${active ? 'font-medium' : ''}`}>
      {label}
    </span>
  </button>
);

interface BottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="
      fixed bottom-0 left-0 right-0
      bg-white/80 backdrop-blur-lg
      border-t border-gray-100
      px-4 py-2
      flex items-center justify-around
      shadow-lg
      z-50
    ">
      <NavItem
        icon={<Home />}
        label="Accueil"
        active={currentPage === 'home'}
        onClick={() => onPageChange('home')}
      />
      <NavItem
        icon={<Calendar />}
        label="Calendrier"
        active={currentPage === 'calendar'}
        onClick={() => onPageChange('calendar')}
      />
      <NavItem
        icon={<MessageCircle />}
        label="Luna"
        active={currentPage === 'chat'}
        onClick={() => onPageChange('chat')}
      />
      <NavItem
        icon={<BookOpen />}
        label="Ressources"
        active={currentPage === 'resources'}
        onClick={() => onPageChange('resources')}
      />
      <NavItem
        icon={<User />}
        label="Profil"
        active={currentPage === 'profile'}
        onClick={() => onPageChange('profile')}
      />
    </nav>
  );
};