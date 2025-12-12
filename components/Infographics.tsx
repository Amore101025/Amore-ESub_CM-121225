import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as ReTooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Calendar, Monitor, Disc, CheckCircle, Clock, Shield, Upload, FileCheck, Send, Stamp, MousePointer, LogIn, FileText } from 'lucide-react';
import { ContentData } from '../types';

interface InfographicProps {
  content: ContentData;
  accentColor: string;
  textColor: string;
}

// 1. Interactive Timeline
export const DeadlineCountdown: React.FC<InfographicProps> = ({ content, accentColor, textColor }) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const target = new Date('2025-07-01').getTime();
    const now = new Date().getTime();
    const diff = target - now;
    setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="w-full p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl group" 
         style={{ borderColor: accentColor }}>
      <div className="flex items-center gap-3 mb-4">
        <Calendar size={28} style={{ color: accentColor }} />
        <h3 className="text-xl font-bold">{content.infographics.timeline.title}</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <p className="opacity-90 mb-4">{content.infographics.timeline.desc}</p>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
             <div 
               className="h-full rounded-full transition-all duration-1000 ease-out"
               style={{ 
                 width: `${Math.max(0, Math.min(100, (1 - daysLeft / 1000) * 100))}%`, 
                 backgroundColor: accentColor 
               }} 
             />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-opacity-10 backdrop-blur-sm"
             style={{ backgroundColor: `${accentColor}20` }}>
          <span className="text-4xl font-bold animate-pulse" style={{ color: accentColor }}>{daysLeft}</span>
          <span className="text-sm font-semibold uppercase opacity-70">Days Until</span>
          <span className="text-xs font-mono mt-1 opacity-60">{content.infographics.timeline.targetDate}</span>
        </div>
      </div>
    </div>
  );
};

// 2. Interactive Scope Chart
export const ScopeChart: React.FC<InfographicProps> = ({ content, accentColor, textColor }) => {
  const data = [
    { name: content.infographics.scope.class2, value: 45 },
    { name: content.infographics.scope.class3, value: 35 },
    { name: content.infographics.scope.other, value: 20 },
  ];

  const COLORS = [accentColor, `${accentColor}99`, `${accentColor}40`];

  return (
    <div className="w-full h-[300px] p-4 rounded-xl border border-dashed hover:border-solid transition-all"
         style={{ borderColor: accentColor }}>
      <h3 className="text-lg font-bold text-center mb-2">{content.infographics.scope.title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
            ))}
          </Pie>
          <ReTooltip 
            contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px', color: '#000' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// 3. Submission Modes Toggle
export const SubmissionModes: React.FC<InfographicProps> = ({ content, accentColor }) => {
  const [activeMode, setActiveMode] = useState<'web' | 'cd'>('web');

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center">{content.infographics.modes.title}</h3>
      <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: accentColor }}>
        <button 
          onClick={() => setActiveMode('web')}
          className={`flex-1 p-4 flex items-center justify-center gap-2 transition-all duration-300 ${activeMode === 'web' ? 'text-white' : 'hover:bg-opacity-10'}`}
          style={{ backgroundColor: activeMode === 'web' ? accentColor : 'transparent' }}
        >
          <Monitor size={20} />
          <span className="font-semibold">{content.infographics.modes.web}</span>
        </button>
        <button 
          onClick={() => setActiveMode('cd')}
          className={`flex-1 p-4 flex items-center justify-center gap-2 transition-all duration-300 ${activeMode === 'cd' ? 'text-white' : 'hover:bg-opacity-10'}`}
          style={{ backgroundColor: activeMode === 'cd' ? accentColor : 'transparent' }}
        >
          <Disc size={20} />
          <span className="font-semibold">{content.infographics.modes.cd}</span>
        </button>
      </div>
      
      <div className="p-6 rounded-lg border-2 transition-all duration-500 transform min-h-[120px] flex items-center"
           style={{ borderColor: accentColor, backgroundColor: `${accentColor}10` }}>
        {activeMode === 'web' ? (
          <div className="flex gap-4 items-start animate-fade-in-up">
            <Upload size={32} style={{ color: accentColor }} />
            <div>
              <h4 className="font-bold text-lg mb-1">{content.infographics.modes.web}</h4>
              <p className="opacity-80">{content.infographics.modes.webDesc}</p>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 items-start animate-fade-in-up">
            <Send size={32} style={{ color: accentColor }} />
            <div>
              <h4 className="font-bold text-lg mb-1">{content.infographics.modes.cd}</h4>
              <p className="opacity-80">{content.infographics.modes.cdDesc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. Interactive 5-Step Stepper
export const ProcessStepper: React.FC<InfographicProps> = ({ content, accentColor, textColor }) => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = content.infographics.steps.list;

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'LogIn': return <LogIn size={20} />;
      case 'MousePointer': return <MousePointer size={20} />;
      case 'FileText': return <FileText size={20} />;
      case 'Stamp': return <Stamp size={20} />;
      case 'Send': return <Send size={20} />;
      default: return <CheckCircle size={20} />;
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Clock size={24} style={{ color: accentColor }} />
        {content.infographics.steps.title}
      </h3>
      <div className="flex flex-col md:flex-row gap-2 relative">
        {/* Progress Bar Background (Desktop) */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10" />
        
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isPast = activeStep > step.id;

          return (
            <div 
              key={step.id} 
              className={`flex-1 flex flex-col items-center cursor-pointer group transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
              onClick={() => setActiveStep(step.id)}
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-500 shadow-md z-10`}
                style={{ 
                  backgroundColor: isActive || isPast ? accentColor : 'var(--bg-card)', 
                  borderColor: accentColor,
                  color: isActive || isPast ? '#fff' : textColor
                }}
              >
                {getIcon(step.icon)}
              </div>
              <div className={`text-center transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0'}`}>
                 <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                 {isActive && (
                   <p className="text-xs max-w-[150px] mx-auto p-2 rounded bg-opacity-10" style={{ backgroundColor: `${accentColor}20` }}>
                     {step.desc}
                   </p>
                 )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 5. Authentication Simulation (Interactive Form Element)
export const AuthSimulation: React.FC<InfographicProps> = ({ content, accentColor }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleAuth = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="p-6 rounded-xl border-2 flex flex-col items-center justify-center text-center h-[300px] relative overflow-hidden"
         style={{ borderColor: accentColor, backgroundColor: `${accentColor}05` }}>
      
      <Shield size={48} style={{ color: accentColor }} className="mb-4" />
      <h3 className="text-lg font-bold mb-4">{content.infographics.auth.title}</h3>

      {status === 'idle' && (
        <button
          onClick={handleAuth}
          className="px-6 py-3 rounded-full font-bold text-white shadow-lg transform transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          style={{ backgroundColor: accentColor }}
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          {content.infographics.auth.button}
        </button>
      )}

      {status === 'loading' && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 mb-2" style={{ borderColor: accentColor }}></div>
          <span className="opacity-70 text-sm animate-pulse">{content.infographics.auth.placeholder}</span>
        </div>
      )}

      {status === 'success' && (
        <div className="animate-bounce-in flex flex-col items-center text-green-500">
          <FileCheck size={48} className="mb-2" />
          <span className="font-bold">Access Granted</span>
          <button 
             onClick={() => setStatus('idle')}
             className="mt-4 text-sm underline opacity-60 hover:opacity-100"
          >
            Reset Simulation
          </button>
        </div>
      )}
      
      {/* Decorative background circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: accentColor }} />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: accentColor }} />
    </div>
  );
};
