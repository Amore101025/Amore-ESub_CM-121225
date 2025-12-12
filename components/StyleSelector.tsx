import React from 'react';
import { Palette, Moon, Sun, Globe } from 'lucide-react';
import { PainterStyle, Language, ThemeMode } from '../types';

interface StyleSelectorProps {
  styles: PainterStyle[];
  currentStyle: PainterStyle;
  onStyleChange: (style: PainterStyle) => void;
  language: Language;
  onLanguageChange: () => void;
  themeMode: ThemeMode;
  onThemeToggle: () => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  styles,
  currentStyle,
  onStyleChange,
  language,
  onLanguageChange,
  themeMode,
  onThemeToggle,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-xl transition-all hover:scale-110"
        style={{ backgroundColor: currentStyle.colors.accent, color: '#fff' }}
      >
        <Palette size={24} />
      </button>

      {isOpen && (
        <div 
          className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-40 overflow-y-auto p-6 transition-transform duration-300 transform translate-x-0"
          style={{ borderLeft: `4px solid ${currentStyle.colors.accent}` }}
        >
          <div className="flex justify-between items-center mb-8 mt-12">
            <h2 className="text-xl font-bold dark:text-white">Customize Experience</h2>
          </div>

          <div className="flex gap-4 mb-8">
            <button 
              onClick={onThemeToggle}
              className="flex-1 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {themeMode === 'light' ? <Moon size={18} className="text-gray-700 dark:text-gray-300"/> : <Sun size={18} className="text-yellow-400"/>}
              <span className="text-sm dark:text-gray-300">{themeMode === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <button 
              onClick={onLanguageChange}
              className="flex-1 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Globe size={18} className="text-gray-700 dark:text-gray-300" />
              <span className="text-sm dark:text-gray-300">{language === 'en' ? '中文' : 'ENG'}</span>
            </button>
          </div>

          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-bold">Artistic Styles</h3>
          <div className="grid grid-cols-1 gap-3">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => onStyleChange(style)}
                className={`text-left p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
                  currentStyle.id === style.id ? 'translate-x-2 shadow-md' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                style={{ 
                  borderColor: currentStyle.id === style.id ? style.colors.accent : 'transparent',
                  backgroundColor: currentStyle.id === style.id ? `${style.colors.accent}10` : 'transparent'
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full border shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${style.colors.bg}, ${style.colors.accent})` }}
                />
                <div>
                  <div className="font-bold text-sm dark:text-gray-200">{style.name}</div>
                  <div className="text-xs opacity-60 dark:text-gray-400">{style.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Overlay to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
