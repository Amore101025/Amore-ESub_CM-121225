import React, { useState, useEffect } from 'react';
import { CONTENT, PAINTER_STYLES } from './constants';
import { Language, ThemeMode, PainterStyle } from './types';
import { StyleSelector } from './components/StyleSelector';
import { DeadlineCountdown, ProcessStepper, SubmissionModes, ScopeChart, AuthSimulation } from './components/Infographics';

const App: React.FC = () => {
  // State
  const [language, setLanguage] = useState<Language>('en');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [currentStyle, setCurrentStyle] = useState<PainterStyle>(PAINTER_STYLES[0]); // Default to Van Gogh
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = CONTENT[language];

  // Apply basic dark mode class to body for tailwind
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  // Derived styles based on themeMode
  const bgColor = themeMode === 'light' ? currentStyle.colors.bg : '#111827';
  const textColor = themeMode === 'light' ? currentStyle.colors.text : '#f3f4f6';
  const cardBg = themeMode === 'light' ? currentStyle.colors.cardBg : '#1f2937';
  
  // Custom font injection
  useEffect(() => {
    document.body.style.fontFamily = currentStyle.fontFamily;
  }, [currentStyle]);

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ 
        backgroundColor: bgColor, 
        color: textColor,
      }}
    >
      <StyleSelector 
        styles={PAINTER_STYLES}
        currentStyle={currentStyle}
        onStyleChange={setCurrentStyle}
        language={language}
        onLanguageChange={() => setLanguage(prev => prev === 'en' ? 'tc' : 'en')}
        themeMode={themeMode}
        onThemeToggle={() => setThemeMode(prev => prev === 'light' ? 'dark' : 'light')}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-6 animate-fade-in-down">
          <h1 
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ textShadow: themeMode === 'dark' ? `0 0 20px ${currentStyle.colors.accent}60` : 'none' }}
          >
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto border-b-4 inline-block pb-2" style={{ borderColor: currentStyle.colors.secondary }}>
            {content.subtitle}
          </p>
        </header>

        {/* Section 1: Timeline & Scope (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="p-1 rounded-2xl shadow-xl transition-all hover:-translate-y-1"
            style={{ background: `linear-gradient(45deg, ${currentStyle.colors.primary}, ${currentStyle.colors.secondary})` }}
          >
            <div className="h-full rounded-xl p-6" style={{ backgroundColor: cardBg }}>
              <DeadlineCountdown content={content} accentColor={currentStyle.colors.accent} textColor={textColor} />
            </div>
          </div>

          <div 
            className="p-1 rounded-2xl shadow-xl transition-all hover:-translate-y-1"
            style={{ background: `linear-gradient(45deg, ${currentStyle.colors.secondary}, ${currentStyle.colors.accent})` }}
          >
             <div className="h-full rounded-xl p-6 flex items-center justify-center" style={{ backgroundColor: cardBg }}>
                <ScopeChart content={content} accentColor={currentStyle.colors.accent} textColor={textColor} />
             </div>
          </div>
        </div>

        {/* Section 2: Process Stepper (Full Width) */}
        <section 
          className="rounded-3xl p-8 md:p-12 shadow-2xl border-t-8"
          style={{ 
            backgroundColor: cardBg,
            borderColor: currentStyle.colors.accent
          }}
        >
          <ProcessStepper content={content} accentColor={currentStyle.colors.accent} textColor={textColor} />
        </section>

        {/* Section 3: Modes & Simulation (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-8 rounded-2xl shadow-xl" style={{ backgroundColor: cardBg }}>
            <SubmissionModes content={content} accentColor={currentStyle.colors.secondary} textColor={textColor} />
          </div>
          <div className="p-1 rounded-2xl shadow-xl" style={{ background: currentStyle.colors.accent }}>
            <div className="h-full rounded-xl p-6" style={{ backgroundColor: cardBg }}>
              <AuthSimulation content={content} accentColor={currentStyle.colors.accent} textColor={textColor} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center opacity-60 pt-12 pb-6">
          <p>© 2024 TFDA Medical Device E-Submission Visualizer</p>
          <p className="text-sm mt-2">Artistic Style: {currentStyle.name}</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
