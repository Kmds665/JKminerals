# JK Minerals & Metals – Website

Neuentwurf der Website von JK Minerals & Metals (Goslar) in der Designrichtung **„Mineralische Premium-Marke“**: dunkel, ruhig, große Serifenschrift, das Material steht im Mittelpunkt.

Reine statische Website (HTML, CSS, etwas JavaScript), ohne Build-Schritt. Sie läuft auf jedem Webhoster: alle Dateien hochladen, fertig.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, Kurzprofil, Material-Index, Leistungen, Brasilien, Werte, Ansprechpartner, Anfrage |
| `materialien.html` | Alle 14 Elemente mit Formen und Qualitäten, Sprungmarken wie `#tantal` |
| `leistungen.html` | Erze & Konzentrate, reine NE-Metalle, NE-Metallschrotte |
| `aufbereitung.html` | Aufbereitungsanlage und Labor im Nordosten Brasiliens |
| `unternehmen.html` | Profil, Eckdaten, Werte, Geschichte, Geschäftsführung |
| `kontakt.html` | Kontaktdaten und Anfrageformular (`kontakt.html?material=Tantal#anfrage` wählt das Element vor) |
| `impressum.html`, `datenschutz.html` | Pflichtangaben (unvollständig, siehe unten) |

Gemeinsames Design: `assets/css/style.css`, Helfer: `assets/js/main.js`.

## Design

- **Farben:** Obsidian `#0E0F12` (Grund), Graphit `#17191E`, Platin `#ECE9E2` (Text), Silber `#A3A5AC` (Sekundärtext), Tantal-Violett `#9C90FF` (Akzent aus dem Logo). Text auf Grund erfüllt WCAG AAA.
- **Schriften:** Cormorant Garamond (Überschriften, Elementsymbole), Manrope (Text).
- **Bildstil:** Makro-Studiofotos echter Proben auf Schwarz, ein Streiflicht, keine Stockfotos.
- **Barrierearmut:** Sprunglink zum Inhalt, sichtbarer Fokus, semantische Überschriften, beschriftete Formularfelder, Menü ohne JavaScript bedienbar, `prefers-reduced-motion` wird beachtet.

## Inhalte

Alle Fakten stammen von der bisherigen Website (Startseite, Über uns, Metalle, Kontakt/Impressum). Die Sortimentswerte sind unverändert übernommen, nur die Schreibweise ist modernisiert (z. B. „Molybdän“ statt „Molybden“, „Kassiterit“ statt „Cassiterite“).

Fehlende Inhalte sind sichtbar markiert:
- gelb `.ph-tag`: Platzhalter (Foto, Text fehlt)
- rosa `.ph-tag.q`: offene Frage

**Vor dem Livegang** alle Stellen mit `ph-tag` suchen und auflösen.

## Offene Punkte vor dem Livegang

1. **Fotos:** Hero-Makrofoto, Anlage/Labor Brasilien, Porträt Jan van Rahden.
2. **Datenschutzerklärung** erstellen (Pflicht, besonders mit Kontaktformular) und **Impressum** ergänzen (Rechtsform, vertretungsberechtigte Person, ggf. Handelsregister). Beides rechtlich prüfen lassen.
3. **Formularversand:** Ohne Server öffnet das Formular eine vorbereitete E-Mail an info@jkminerals.de. Für echten Versand einen Formular-Dienst oder ein PHP-Skript des Hosters eintragen (Attribut `action` am Formular `#anfrage-form`).
4. **Google Fonts lokal einbinden** (Datenschutz).
5. **HTTPS:** Die alte Seite läuft ohne gültiges Zertifikat. Beim Hoster SSL aktivieren.
6. **Englische Version** (die alte Website hatte eine).
7. Inhaltliche Fragen:
   - Ankauf von Schrotten?
   - Brasilien: eigene Anlage oder Partner?
   - Herkunftsnachweise für Zinn, Tantal und Wolfram (EU-Sorgfaltspflichten)?
   - Ist das Sortiment aktuell und vollständig?
   - Meilensteine der Firmengeschichte?
   - Ist das Fax noch aktiv?
   - Gibt es das Logo als Vektordatei?

## Lokal ansehen

`index.html` im Browser öffnen, oder:

```sh
python3 -m http.server 8000
```
