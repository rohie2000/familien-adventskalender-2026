/*
  ZENTRALE MEDIENLISTE
  Für jedes Türchen kann statt eines Fotos auch ein Video eingetragen werden:
  24: { typ: 'video', datei: 'videos/mein-video.mp4', poster: 'fotos/vorschaubild.jpg' }
  Die Reihenfolge des Fotolaufbands weiter unten ist unabhängig davon frei änderbar.
*/
const TUERCHEN_MEDIEN = {
  1:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-01.jpg' },
  2:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-02.jpg' },
  3:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-03.jpg' },
  4:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-04.jpg' },
  5:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-05.jpg' },
  6:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-06.jpg' },
  7:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-07.jpg' },
  8:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-08.jpg' },
  9:  { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-09.jpg' },
  10: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-10.jpg' },
  11: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-11.jpg' },
  12: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-12.jpg' },
  13: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-13.jpg' },
  14: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-14.jpg' },
  15: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-15.jpg' },
  16: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-16.jpg' },
  17: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-17.jpg' },
  18: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-18.jpg' },
  19: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-19.jpg' },
  20: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-20.png' },
  21: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-21.png' },
  22: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-22.png' },
  23: { typ: 'foto',  datei: 'fotos/tuerchen/tuerchen-23.png' },
  24: { typ: 'video', datei: 'videos/weihnachtsgruesse.mp4', poster: 'fotos/tuerchen/tuerchen-24.png' }
};
/* Etwa 20 Erinnerungen; Einträge können ergänzt, entfernt oder umsortiert werden. */
const LAUFBAND_FOTOS = [
  'fotos/tuerchen/tuerchen-01.jpg', 'fotos/tuerchen/tuerchen-02.jpg',
  'fotos/tuerchen/tuerchen-03.jpg', 'fotos/tuerchen/tuerchen-04.jpg',
  'fotos/tuerchen/tuerchen-05.jpg', 'fotos/tuerchen/tuerchen-06.jpg',
  'fotos/tuerchen/tuerchen-07.jpg', 'fotos/tuerchen/tuerchen-08.jpg',
  'fotos/tuerchen/tuerchen-09.jpg', 'fotos/tuerchen/tuerchen-10.jpg',
  'fotos/tuerchen/tuerchen-11.jpg', 'fotos/tuerchen/tuerchen-12.jpg',
  'fotos/tuerchen/tuerchen-13.jpg', 'fotos/tuerchen/tuerchen-14.jpg',
  'fotos/tuerchen/tuerchen-15.jpg', 'fotos/tuerchen/tuerchen-16.jpg',
  'fotos/tuerchen/tuerchen-17.jpg', 'fotos/tuerchen/tuerchen-18.jpg',
  'fotos/tuerchen/tuerchen-19.jpg', 'fotos/tuerchen/tuerchen-20.png'
];
