# Familien-Adventskalender 2026 – GitHub Pages

Die Seite ist eine reine GitHub-Pages-Webseite: kein Azure, kein Login und kein eigener Server.

## Veröffentlichung mit GitHub Desktop

1. In GitHub Desktop **File → Add Local Repository…** wählen und diesen Ordner auswählen.
2. Falls noch kein Repository vorhanden ist, **create a repository** wählen. Als Name bietet sich `familien-adventskalender-2026` an.
3. Mit **Publish repository** auf GitHub veröffentlichen. Für GitHub Pages ist ein öffentliches Repository am unkompliziertesten.
4. Auf GitHub im Repository **Settings → Pages** öffnen und bei *Build and deployment* **Deploy from a branch**, dann `main` und `/(root)` auswählen. Speichern.
5. Nach kurzer Zeit steht die Adresse unter **Pages**. Vor dem 1. Dezember kann die Vorschau über `?vorschau=1` am Ende der Adresse getestet werden.

> **Privatsphäre:** Bei einem öffentlichen GitHub-Repository sind Fotos, Videos, Geschenke und auch der Vorschau-Modus für jeden auffindbar, der die Adresse kennt. Die Datumssperre dient nur der Darstellung und schützt die Überraschungen nicht technisch.

## Geschenke und Zuordnung
- Lena: 1, 4, 7, 10, 13, 16, 19, 22
- Celine: 2, 5, 8, 11, 14, 17, 20, 23
- Leon: 3, 6, 9, 12, 15, 18, 21, 24
- Pro Person: persönlicher Gutschein (Lena ebl, Celine/Leon Bambusgarten), Wunschessen Stadtwiesen 15, 30-€-Tankgutschein, fünf Müsliriegel, satirischer Conny-Top-Preis, Weihnachtswitz, Eisboutique + MEDICON-Taler und 15 Taler, Elisenlebkuchen.
- Geschenkinhalte können in `script.js` unter `gifts` bearbeitet werden.

## Foto oder Video für jedes Türchen

Die 24 vorhandenen Türchenbilder sind bereits eingetragen. Das Weihnachtsvideo ist hinter dem 24. Türchen eingebunden. In `config.js` lässt sich jede Zuordnung ändern:

```js
1: {typ:'foto', datei:'fotos/foto-01.jpg'},
2: {typ:'video', datei:'videos/celine.mp4', poster:'fotos/vorschaubild.jpg'},
```

Neue Medien in den entsprechenden Ordner legen. Bei Videos zeigt ein Klick auf die Fläche den Geschenktext; die Videosteuerung erlaubt Abspielen und Pausieren. Ein leerer Eintrag zeigt einen Platzhalter.

## Kontinuierliches Fotolaufband
In `config.js` das Array `LAUFBAND_FOTOS` ändern. Es enthält bereits 20 Fotos. Es können beliebig viele vorhandene oder neue Fotos in gewünschter Reihenfolge stehen. Die Auswahl ist unabhängig von den Türchen-Medien. Der Lauf pausiert beim Überfahren mit der Maus und wird bei reduzierter Bewegung nicht automatisch animiert.

## Hinweise
- Es werden keine Daten an einen eigenen Server gesendet; die Vorlesefunktion verwendet die Sprachsynthese des Browsers.
- Das Projekt ist mit etwa 47 MB noch gut für GitHub Pages geeignet. Für zusätzliche Videos empfiehlt sich eine komprimierte MP4-Datei.
- Der Kalender öffnet ab 1. Dezember 2026 täglich ein weiteres Türchen; vergangene bleiben für alle drei sichtbar.
