export type Language = 'en' | 'tc';
export type ThemeMode = 'light' | 'dark';

export interface PainterStyle {
  id: string;
  name: string;
  colors: {
    bg: string;
    text: string;
    cardBg: string;
    accent: string;
    secondary: string;
    border: string;
  };
  fontFamily: string;
  description: string;
}

export interface ContentData {
  title: string;
  subtitle: string;
  infographics: {
    timeline: {
      title: string;
      desc: string;
      targetDate: string;
    };
    scope: {
      title: string;
      class2: string;
      class3: string;
      other: string;
    };
    modes: {
      title: string;
      web: string;
      webDesc: string;
      cd: string;
      cdDesc: string;
    };
    steps: {
      title: string;
      list: {
        id: number;
        title: string;
        desc: string;
        icon: string;
      }[];
    };
    auth: {
      title: string;
      button: string;
      placeholder: string;
    };
  };
}