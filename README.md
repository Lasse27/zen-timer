# ZenTimer

ZenTimer ist ein einfaches, frei nutzbares Hobby-Projekt: Ein fokussierter Timer mit Zen-inspiriertem Design und motivierenden Sprüchen. Die Anwendung richtet sich an alle, die fokussiert arbeiten oder lernen möchten.

## Features

- **Fokus-Timer:** Stelle eine beliebige Zeit ein, starte und stoppe den Timer.
- **Akustisches Signal:** Am Ende der Zeit ertönt ein prägnanter Piepton (mehrfach).
- **Motivierende Zen-Sprüche:** Im Header werden wechselnde, inspirierende Sprüche angezeigt.
- **Responsives Design:** Die Timer-Anzeige passt sich der Bildschirmgröße an.
- **Modulare Architektur:** Die Logik ist in Composables ausgelagert:
  - `useTimer`: Timer-Logik (Start, Stop, Fortschritt, Zeitformatierung)
  - `useBeep`: Akustisches Signal am Ende
  - `useResponsiveRadius`: Dynamische SVG-Größe für die Timer-Anzeige

## Technologien

- [Vue 3](https://vuejs.org/) mit `<script setup>`
- Composition API & eigene Composables
- Web Audio API für den Signalton
- Responsives SVG für die Timer-Anzeige

## Projekt Setup

```bash
npm install
```

### Entwicklung starten

```bash
npm run serve
```

### Für Produktion bauen

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Electron Build

<!-- Hier später Anleitung für Electron-Builds ergänzen -->

## Lizenz

MIT
