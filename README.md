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
| `impressum.html`, `datenschutz.html` | Pflichtangaben (vor Livegang prüfen lassen, siehe unten) |

Gemeinsames Design: `assets/css/style.css`, Helfer: `assets/js/main.js`.

## Design

- **Farben:** Obsidian `#0E0F12` (Grund), Graphit `#17191E`, Platin `#ECE9E2` (Text), Silber `#A3A5AC` (Sekundärtext), Tantal-Violett `#9C90FF` (Akzent aus dem Logo). Text auf Grund erfüllt WCAG AAA.
- **Schriften:** Cormorant Garamond (Überschriften, Elementsymbole), Manrope (Text).
- **Bildsprache:** grafische Erzstufen aus Verläufen statt Fotos. Später ergänzbar durch Makro-Studiofotos echter Proben auf Schwarz.
- **Barrierearmut:** Sprunglink zum Inhalt, sichtbarer Fokus, semantische Überschriften, beschriftete Formularfelder, Menü ohne JavaScript bedienbar, `prefers-reduced-motion` wird beachtet.

## Inhalte

Alle Fakten stammen von der bisherigen Website (Startseite, Über uns, Metalle, Kontakt/Impressum). Die Sortimentswerte sind unverändert übernommen, nur die Schreibweise ist modernisiert (z. B. „Molybdän“ statt „Molybden“, „Kassiterit“ statt „Cassiterite“). Wo Angaben fehlten, wurde nichts ergänzt, sondern der Punkt weggelassen.

Die Website kommt ohne Fotos aus: Erzstufen, Info-Panels und das Monogramm sind reine CSS-Grafiken. Fotos lassen sich später ergänzen.

Schriften (Cormorant Garamond, Manrope) liegen lokal in `assets/fonts` (SIL Open Font License). Es werden keine externen Dienste geladen, keine Cookies gesetzt.

## Vor dem Livegang prüfen

1. **Impressum und Datenschutzerklärung** rechtlich prüfen lassen. Offen sind vor allem: Rechtsform, Handelsregister (falls vorhanden), ob Jan van Rahden vertretungsberechtigt ist, Name des Hosting-Anbieters.
2. **HTTPS** beim Hoster aktivieren (die alte Seite läuft ohne gültiges Zertifikat). Die Datenschutzerklärung setzt keine Verschlüsselung voraus, empfohlen ist sie trotzdem.
3. **Formularversand:** Ohne Server öffnet das Formular eine vorbereitete E-Mail an info@jkminerals.de. Für echten Versand einen Formular-Dienst oder ein Skript des Hosters eintragen (Attribut `action` am Formular `#anfrage-form`) und die Datenschutzerklärung anpassen.
4. **Englische Version** (die alte Website hatte eine).
5. Inhaltliche Fragen, die die Seite noch stärker machen würden:
   - Ankauf von Schrotten?
   - Brasilien: eigene Anlage oder Partner, Analyseverfahren?
   - Herkunftsnachweise für Zinn, Tantal und Wolfram (EU-Sorgfaltspflichten)?
   - Ist das Sortiment aktuell und vollständig?
   - Meilensteine der Firmengeschichte?
   - Ist das Fax noch aktiv?
   - Gibt es das Logo als Vektordatei? Eigene Fotos von Proben?

## Lokal ansehen

`index.html` im Browser öffnen, oder:

```sh
python3 -m http.server 8000
```
