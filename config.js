/* Die Türchenbilder sind nach Empfänger und Nummer benannt. */
const TUERCHEN_MEDIEN = {
  1:  { typ: 'foto', datei: 'fotos/tuerchen/Lena-1.jpg' },
  2:  { typ: 'foto', datei: 'fotos/tuerchen/Celine-1.jpg' },
  3:  { typ: 'foto', datei: 'fotos/tuerchen/Leon-1.jpg' },
  4:  { typ: 'foto', datei: 'fotos/tuerchen/Lena-2.jpg' },
  5:  { typ: 'foto', datei: 'fotos/tuerchen/Celine-2.jpg' },
  6:  { typ: 'foto', datei: 'fotos/tuerchen/Leon-2.jpg' },
  7:  { typ: 'foto', datei: 'fotos/tuerchen/Lena-3.jpg' },
  8:  { typ: 'foto', datei: 'fotos/tuerchen/Celine-3.jpg' },
  9:  { typ: 'foto', datei: 'fotos/tuerchen/Leon-3.jpg' },
  10: { typ: 'foto', datei: 'fotos/tuerchen/Lena-4.jpg' },
  11: { typ: 'foto', datei: 'fotos/tuerchen/Celine-4.jpg' },
  12: { typ: 'foto', datei: 'fotos/tuerchen/Leon-4.jpg' },
  13: { typ: 'foto', datei: 'fotos/tuerchen/Lena-5.jpg' },
  14: { typ: 'foto', datei: 'fotos/tuerchen/Celine-5.jpg' },
  15: { typ: 'foto', datei: 'fotos/tuerchen/Leon-5.jpg' },
  16: { typ: 'foto', datei: 'fotos/tuerchen/Lena-6.jpg' },
  17: { typ: 'foto', datei: 'fotos/tuerchen/Celine-6.jpg' },
  18: { typ: 'foto', datei: 'fotos/tuerchen/Leon-6.jpg' },
  19: { typ: 'foto', datei: 'fotos/tuerchen/Lena-7.jpg' },
  20: { typ: 'foto', datei: 'fotos/tuerchen/Celine-7.jpg' },
  21: { typ: 'foto', datei: 'fotos/tuerchen/Leon-7.jpg' },
  22: { typ: 'foto', datei: 'fotos/tuerchen/Lena-8.jpg' },
  23: { typ: 'foto', datei: 'fotos/tuerchen/Celine-8.jpg' },
  24: { typ: 'foto', datei: 'fotos/tuerchen/Leon-8.jpg' }
};

const KOPF_VIDEO = 'videos/adventsgruesse-1.mp4';
const ABSCHLUSS_VIDEO = 'videos/adventsgruesse-2.mp4';

/* Alle Fotos aus dem Ordner „Fotoband“. */
const LAUFBAND_FOTOS = [
  'fotos/fotoband/11_10_22_125.jpg', 'fotos/fotoband/12_02_11_164.jpg', 'fotos/fotoband/12_11_03_09.jpg',
  'fotos/fotoband/12_12_24_30.jpg', 'fotos/fotoband/13_04_20_106.jpg', 'fotos/fotoband/13_12_14_24.jpg',
  'fotos/fotoband/13_12_26_08.jpg', 'fotos/fotoband/13_12_26_16.jpg', 'fotos/fotoband/14_01_01_128.jpg',
  'fotos/fotoband/14_12_23_029.jpg', 'fotos/fotoband/15_12_23_53.jpg', 'fotos/fotoband/15_12_24_03.jpg',
  'fotos/fotoband/15_12_24_10.jpg', 'fotos/fotoband/15_12_24_18.jpg', 'fotos/fotoband/16_04_23_120.jpg',
  'fotos/fotoband/16_04_23_125.jpg', 'fotos/fotoband/16_04_23_126.jpg', 'fotos/fotoband/16_04_23_128.jpg',
  'fotos/fotoband/16_04_23_135.jpg', 'fotos/fotoband/17_12_24_1645.jpg', 'fotos/fotoband/18_12_26_041.jpg',
  'fotos/fotoband/18_12_26_043.jpg', 'fotos/fotoband/18_12_26_058.jpg', 'fotos/fotoband/2025_07_11_001.png',
  'fotos/fotoband/2025_07_11_003.png', 'fotos/fotoband/2025_07_11_005.png', 'fotos/fotoband/2025_07_11_006.png',
  'fotos/fotoband/2025_07_11_035.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_19_26.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_19_39.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_48-1.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_49-2.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_51-3.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_52-4.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_53-5.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_54-6.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_55-7.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_56-8.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_58-10.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_21_58-9.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_17-1.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_18-2.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_19-3.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_20-4.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_21-5.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_22-6.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_23-7.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_24-8.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_25-9.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_26-10.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_45-1.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_46-2.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_47-3.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_48-4.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_49-5.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_50-6.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_51-7.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_52-8.png', 'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_53-9.png',
  'fotos/fotoband/ChatGPT-Bild 3. Nov. 2026, 14_22_55-10.png', 'fotos/fotoband/Festliche Katze im Weihnachtsambiente-6.png',
  'fotos/fotoband/Festliche Katze mit Nikolausmütze-5.png', 'fotos/fotoband/Festliche Weihnachtskatze mit Goldglöckchen-1.png',
  'fotos/fotoband/Festliches Katzenporträt mit Weihnachtsmütze-3.png', 'fotos/fotoband/Festliches Winterporträt mit Katze-4.png',
  'fotos/fotoband/IMG_5934.jpg', 'fotos/fotoband/IMG_9852.jpg', 'fotos/fotoband/Kuschelige Weihnachtskatze mit Glöckchen-7.png',
  'fotos/fotoband/Weihnachtskatze mit Glöckchen-1.png'
];
