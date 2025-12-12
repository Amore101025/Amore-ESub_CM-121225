import { ContentData, PainterStyle } from './types';

export const CONTENT: Record<'en' | 'tc', ContentData> = {
  en: {
    title: "TFDA Medical Device E-Submission System",
    subtitle: "A Quick Interactive Guide for Class II & III Submissions",
    infographics: {
      timeline: {
        title: "Mandatory E-Submission Countdown",
        desc: "From July 1, 2025, specific Class II/III applications must be submitted electronically.",
        targetDate: "July 1, 2025"
      },
      scope: {
        title: "Submission Scope Coverage",
        class2: "Class II Devices",
        class3: "Class III Devices",
        other: "Others (Paper)"
      },
      modes: {
        title: "Two Submission Modes",
        web: "Web Upload",
        webDesc: "Directly upload all files via the secure portal.",
        cd: "Offline CD",
        cdDesc: "Burn files to a CD and mail it physically."
      },
      steps: {
        title: "5-Step Submission Process",
        list: [
          { id: 1, title: "Log In", desc: "Use Business IC Card to access the system.", icon: "LogIn" },
          { id: 2, title: "Select Type", desc: "Choose Registration, Change, or Extension.", icon: "MousePointer" },
          { id: 3, title: "Fill & Upload", desc: "Complete forms and attach PDF/Word files.", icon: "FileText" },
          { id: 4, title: "Stamp Official Forms", desc: "Download, stamp with company seal, and re-upload.", icon: "Stamp" },
          { id: 5, title: "Final Submit", desc: "Submit online and mail originals within 3 days.", icon: "Send" }
        ]
      },
      auth: {
        title: "Step 1 Simulation: Authentication",
        button: "Insert Business IC Card",
        placeholder: "Waiting for card..."
      }
    }
  },
  tc: {
    title: "TFDA 醫療器材電子送件系統",
    subtitle: "第二與第三等級醫療器材查驗登記 電子送件快速指南",
    infographics: {
      timeline: {
        title: "強制電子送件倒數計時",
        desc: "自 2025 年 7 月 1 日起，特定第二/三等級申請案須強制採行電子送件。",
        targetDate: "2025 年 7 月 1 日"
      },
      scope: {
        title: "適用範圍分佈",
        class2: "第二等級器材",
        class3: "第三等級器材",
        other: "其他 (紙本)"
      },
      modes: {
        title: "兩種送件模式",
        web: "網路即時上傳",
        webDesc: "直接透過安全入口網站上傳所有檔案。",
        cd: "光碟寄送",
        cdDesc: "將檔案燒錄至光碟並郵寄。"
      },
      steps: {
        title: "五步驟送件流程",
        list: [
          { id: 1, title: "憑證登入", desc: "使用工商憑證 IC 卡登入系統。", icon: "LogIn" },
          { id: 2, title: "選擇類別", desc: "選擇查驗登記、變更或展延。", icon: "MousePointer" },
          { id: 3, title: "填寫與上傳", desc: "填寫資料並上傳 PDF/Word 格式檔案。", icon: "FileText" },
          { id: 4, title: "用印上傳", desc: "下載申請書，蓋公司大小章後重新上傳。", icon: "Stamp" },
          { id: 5, title: "送出與寄送", desc: "線上送件後，3日內寄出紙本原件。", icon: "Send" }
        ]
      },
      auth: {
        title: "步驟 1 模擬: 身分驗證",
        button: "插入工商憑證",
        placeholder: "等待憑證中..."
      }
    }
  }
};

export const PAINTER_STYLES: PainterStyle[] = [
  {
    id: 'van-gogh',
    name: 'Vincent van Gogh',
    description: 'Starry Night Blues & Yellows',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#1a2b4c', text: '#f5d76e', cardBg: '#2c3e50', accent: '#f1c40f', secondary: '#3498db', border: '#f39c12' }
  },
  {
    id: 'monet',
    name: 'Claude Monet',
    description: 'Impressionist Pastels',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#e0f7fa', text: '#2c3e50', cardBg: '#ffffff', accent: '#81d4fa', secondary: '#a5d6a7', border: '#4dd0e1' }
  },
  {
    id: 'picasso',
    name: 'Pablo Picasso',
    description: 'Cubist Geometry',
    fontFamily: '"Roboto Mono", monospace',
    colors: { bg: '#d35400', text: '#ecf0f1', cardBg: '#8e44ad', accent: '#f39c12', secondary: '#2980b9', border: '#2c3e50' }
  },
  {
    id: 'dali',
    name: 'Salvador Dali',
    description: 'Surrealist Dreams',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#e67e22', text: '#2c3e50', cardBg: '#fad7a0', accent: '#3498db', secondary: '#d35400', border: '#8e44ad' }
  },
  {
    id: 'davinci',
    name: 'Leonardo da Vinci',
    description: 'Renaissance Parchment',
    fontFamily: '"Times New Roman", serif',
    colors: { bg: '#f4ecd8', text: '#4a3b2a', cardBg: '#e8dec3', accent: '#8b4513', secondary: '#a0522d', border: '#8b4513' }
  },
  {
    id: 'rembrandt',
    name: 'Rembrandt',
    description: 'Chiaroscuro Dark Gold',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#1c110a', text: '#d4af37', cardBg: '#3e2723', accent: '#ffca28', secondary: '#5d4037', border: '#8d6e63' }
  },
  {
    id: 'warhol',
    name: 'Andy Warhol',
    description: 'Pop Art Neon',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#ff00ff', text: '#ffff00', cardBg: '#00ffff', accent: '#000000', secondary: '#ffcc00', border: '#000000' }
  },
  {
    id: 'klimt',
    name: 'Gustav Klimt',
    description: 'Golden Pattern',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#423629', text: '#f1c40f', cardBg: '#2c251f', accent: '#d4af37', secondary: '#e67e22', border: '#f39c12' }
  },
  {
    id: 'matisse',
    name: 'Henri Matisse',
    description: 'Fauvism Cutouts',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#e74c3c', text: '#ecf0f1', cardBg: '#3498db', accent: '#2ecc71', secondary: '#f1c40f', border: '#ffffff' }
  },
  {
    id: 'pollock',
    name: 'Jackson Pollock',
    description: 'Abstract Drip',
    fontFamily: '"Roboto Mono", monospace',
    colors: { bg: '#ecf0f1', text: '#2c3e50', cardBg: '#bdc3c7', accent: '#e74c3c', secondary: '#2c3e50', border: '#95a5a6' }
  },
  {
    id: 'kandinsky',
    name: 'Wassily Kandinsky',
    description: 'Geometric Composition',
    fontFamily: '"Roboto Mono", monospace',
    colors: { bg: '#ecf0f1', text: '#2c3e50', cardBg: '#ffffff', accent: '#e74c3c', secondary: '#3498db', border: '#2c3e50' }
  },
  {
    id: 'munch',
    name: 'Edvard Munch',
    description: 'Expressionist Scream',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#d35400', text: '#f39c12', cardBg: '#2c3e50', accent: '#c0392b', secondary: '#e67e22', border: '#e74c3c' }
  },
  {
    id: 'okeeffe',
    name: 'Georgia O\'Keeffe',
    description: 'Modernist Flowers',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#fce4ec', text: '#880e4f', cardBg: '#ffffff', accent: '#d81b60', secondary: '#f8bbd0', border: '#f48fb1' }
  },
  {
    id: 'kahlo',
    name: 'Frida Kahlo',
    description: 'Mexican Folk',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#2ecc71', text: '#c0392b', cardBg: '#f1c40f', accent: '#e74c3c', secondary: '#27ae60', border: '#16a085' }
  },
  {
    id: 'michelangelo',
    name: 'Michelangelo',
    description: 'Sistine Chapel',
    fontFamily: '"Times New Roman", serif',
    colors: { bg: '#d6eaf8', text: '#2c3e50', cardBg: '#fdfefe', accent: '#f39c12', secondary: '#3498db', border: '#85c1e9' }
  },
  {
    id: 'raphael',
    name: 'Raphael',
    description: 'High Renaissance Red',
    fontFamily: '"Times New Roman", serif',
    colors: { bg: '#922b21', text: '#fdedec', cardBg: '#641e16', accent: '#f1c40f', secondary: '#c0392b', border: '#e74c3c' }
  },
  {
    id: 'renoir',
    name: 'Pierre-Auguste Renoir',
    description: 'Soft Warmth',
    fontFamily: '"Playfair Display", serif',
    colors: { bg: '#fef9e7', text: '#5d6d7e', cardBg: '#ffffff', accent: '#f5b7b1', secondary: '#fad7a0', border: '#edbb99' }
  },
  {
    id: 'cezanne',
    name: 'Paul Cezanne',
    description: 'Post-Impressionist Earth',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#566573', text: '#d5d8dc', cardBg: '#273746', accent: '#d35400', secondary: '#1abc9c', border: '#808b96' }
  },
  {
    id: 'hopper',
    name: 'Edward Hopper',
    description: 'Nighthawks Shadows',
    fontFamily: '"Inter", sans-serif',
    colors: { bg: '#17202a', text: '#fdfefe', cardBg: '#1b4f72', accent: '#c0392b', secondary: '#21618c', border: '#2874a6' }
  },
  {
    id: 'basquiat',
    name: 'Jean-Michel Basquiat',
    description: 'Neo-expressionist Graffiti',
    fontFamily: '"Roboto Mono", monospace',
    colors: { bg: '#000000', text: '#ffffff', cardBg: '#333333', accent: '#ff0000', secondary: '#ffff00', border: '#ffffff' }
  }
];
