[![CI](https://github.com/HIStudiosEU/food-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/HIStudiosEU/food-frontend/actions/workflows/ci.yml)
# food-frontend

Heroku : https://kalotracker-frontend.herokuapp.com/food

Anwendungszweck:
Dies ist eine App, um die gegessenen Kalorien und Makronährstoffe zu erfassen, welche man in einem bestimmten Zeitraum gegessen hat. Dazu gibt man die Nährwerte von dem gegessenen Nahrungsmittel an und die Menge in Gramm. Anschließend werden die Makronährstoffe und Kalorien zusammengefasst und dargestellt. Man kann außerdem das Nahrungsmittel abspeichern, um die Nährwerte von diesem Nahrungsmittel anzeigen zu lassen.

Wie man die App benutzt:

Homepage(Kalotracker) - Textfeld für Name, Fett, Kohlenhydrate, Eiweiß und Grammzahl ausfüllen.
                      - in den Textfeldern Fett, Kohlenhydrate und Eiweiß sind nur Zahlenwerte zugelassen
                      - mit dem ,,Hinzufügen-Button" wird das Nahrungsmittel in der Zusammenfassung(rechts ,,Tagesbedarf") eingefügt
                      - mit dem ,,Speichern-Button" wird das Nahrungsmittel in der Datenbank gespeichert
                      - mit dem ,,Löschen-Button" werden die Daten aus der Zusammenfassung(rechts ,,Tagesbedarf") gelöscht
              
Foodpage  - die Nahrungsmittel, welche zuvor in die Datenbank gespeichert worden sind, werden auf dieser Seite dargestellt


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
