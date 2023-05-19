// Daten für die Einsätze
const stationen = [
  'Klinikum Westfalen GmbH',
  'Universitätsklinikum Knappschaftskrankenhaus Bochum',
  'ADAC Station Köln',
  'Katharinen-Hospital Unna',
  'Städtisches Hellmig Krankenhaus Kamen',
  'St. Antonius-Hospital Gronau (Westfalen)',
  'Kreiskrankenhaus Gummersbach',
  'Gemeinschaftskrankenhaus Herdecke',
  "Klinikum Dortmund Nord"
];
const adressen = [
  'Münsterstraße 111, Lünen (Herzinfarkt)',
  'Hauptstraße 22, Selm (Schlaganfall)',
  'Bergstraße 55, Dortmund (Polytrauma)',
  'Schloßstraße 1, Hamm (Kopfverletzung)',
  'Stadtweg 33, Werne (Herzrhythmusstörungen)',
  'Am Stadtgraben 13, Hamm (Schwere Verbrennungen)',
  'Bogenstraße 2, Bergkamen (Hirnblutung)',
  'Rudolf-Diesel-Straße 1, Kamen (Atemnot)',
  'Kurfürstenstraße 51, Dortmund (Knochenbrüche)',
  'Königsheide 12, Dortmund (Verkehrsunfall)',
  'Friedrich-Ebert-Straße 4, Lünen (Schock)',
  'Friedhofstraße 1, Datteln (Schwangerschaftskomplikationen)',
  'Hansastraße 6, Hamm (Rückenmarksverletzung)',
  'Kreuzstraße 21, Werne (Blutvergiftung)',
  'Lippstädter Straße 50, Dortmund (Bauchschmerzen)',
  'Oberhausener Straße 17, Castrop-Rauxel (Herzstillstand)',
  'Bahnhofstraße 18, Dortmund (Akutes Abdomen)',
  'Heinrichstraße 40, Hamm (Brandverletzungen)',
  'Willy-Brandt-Platz 7, Hagen (Ertrinkungsunfall)',
  'Theodor-Heuss-Straße 28, Werne (Schwere Blutungen)',
  'Kleine Bahnhofstraße 2, Lünen (Bewusstlosigkeit)',
  'Am Alten Schacht 4, Unna (Sepsis)',
  'Moltkestraße 22, Werne (Schwere allergische Reaktion)',
  'Im Ort 1, Bergkamen (Hypoglykämie)',
  'Rathausplatz 1, Selm (Epileptischer Anfall)',
  'Nordstraße 8, Unna (Kreislaufkollaps)',
  'Willy-Brandt-Platz 2, Hamm (Asthmaanfall)',
  'Bahnhofstraße 15, Dortmund (Thrombose)',
  'Gartenstraße 2, Lünen (Hitzschlag)',
  'Königsbornstraße 13, Unna (Herzklappenfehler)',
  'Burgstraße 5, Werne (Lebensmittelvergiftung)',
  'Daimlerstraße 5, Kamen (Lungenentzündung)',
  'Münsterplatz 1, Dortmund (Herzbeutelentzündung)',
  'Neuer Weg 3, Werne (Lungenödem)',
  'Hermannstraße 12, Hamm (Blutgerinnungsstörung)',
  'Kaiserstraße 8, Lünen (Schwere Verletzungen)',
  'Kirchplatz 6, Selm (Magen-Darm-Blutung)',
  'Hauptallee 17, Dortmund (Atemstillstand)',
  'Kleistraße 4, Unna (Kehlkopfentzündung)',
  'Bahnhofsweg 5, Kamen (Herzrhythmusstörungen)',
  'Am Friedhof 11, Datteln (Kopf-Hals-Trauma)',
  'Schillerplatz 2, Hamm (Krampfanfall)',
  'Neuer Weg 3, Werne (Lungenödem)',
  'Hermannstraße 12, Hamm (Blutgerinnungsstörung)',
  'Kaiserstraße 8, Lünen (Schwere Verletzungen)',
  'Kirchplatz 6, Selm (Magen-Darm-Blutung)',
  'Hauptallee 17, Dortmund (Atemstillstand)',
  'Kleistraße 4, Unna (Kehlkopfentzündung)',
  'Bahnhofsweg 5, Kamen (Herzrhythmusstörungen)',
  'Am Friedhof 11, Datteln (Kopf-Hals-Trauma)',
  'Schillerplatz 2, Hamm (Krampfanfall)',
  'Buchenweg 8, Lünen (Rückenverletzung)',
  'Gartenweg 2, Selm (Diabetischer Notfall)',
  'Höveler Weg 15, Dortmund (Hitzschlag)',
  'Hafenstraße 6, Bergkamen (Herzrhythmusstörungen)',
  'Schillerstraße 22, Kamen (Heeren) (Schwere Verbrennungen)',
  'Parkstraße 3, Hamm (Asthmaanfall)',
  'Schlossplatz 4, Werne (Knochenbrüche)',
  'Am Markt 7, Datteln (Herzinfarkt)',
  'Lindenweg 12, Lünen (Krampfanfall)',
  'Friedensstraße 5, Selm (Bauchschmerzen)',
  'Bismarckstraße 11, Dortmund (Schwerer Unfall)',
  'Kirchweg 3, Bergkamen (Kopfverletzung)',
  'Rosenstraße 8, Unna (Atemnot)',
  'Hauptstraße 15, Kamen (Allergischer Schock)',
  'Wiesenweg 1, Hamm (Hypoglykämie)',
  'Schulstraße 6, Werne (Rückenmarksverletzung)',
  'Mühlenstraße 4, Lünen (Schwere Blutungen)',
  'Heinestraße 11, Selm (Schlaganfall)',
  'Bachstraße 10, Bergkamen (Hirnblutung)',
  'Parkweg 3, Selm (Asthmaanfall)',
  'Bahnhofplatz 6, Hamm (Herzinfarkt)',
  'Schlossallee 2, Werne (Herzrhythmusstörungen)',
  'Am Sportplatz 9, Datteln (Kopfverletzung)',
  'Kirchhofstraße 5, Lünen (Bauchschmerzen)',
  'Mozartstraße 7, Selm (Atemnot)',
  'Blumenweg 4, Dortmund (Polytrauma)',
  'Hafenweg 2, Bergkamen (Rippenfraktur)',
  'Am Stadtpark 12, Unna (Herzrhythmusstörungen)',
  'Königstraße 5, Hamm (Kopf-Hals-Trauma)',
  'Bergstraße 11, Werne (Krampfanfall)',
  'Schillerweg 3, Datteln (Bauchhöhlenschmerzen)',
  'Goetheallee 8, Lünen (Herzbeutelentzündung)',
  'Schulberg 2, Selm (Rückenverletzung)',
  'Kirchplatz 1, Dortmund (Diabetischer Notfall)',
  'Hauptstraße 6, Bergkamen (Hitzschlag)',
  'Parkweg 15, Selm (Schlaganfall)',
  'Am Markt 4, Hamm (Asthmaanfall)',
];


const einsaetze = [];

// Funktion zum Generieren eines neuen Einsatzes
function einsatzGenerieren() {
  // Adresse zufällig generieren (ohne Wiederholungen)
  const adresseIndex = Math.floor(Math.random() * adressen.length);
  const adresse = adressen[adresseIndex];
  adressen.splice(adresseIndex, 1); // Entfernt die gewählte Adresse aus dem Array

  // Zielstation zufällig wählen
  const zielstation = stationen[Math.floor(Math.random() * stationen.length)];

  // Aktuelles Datum und Uhrzeit
  const jetzt = new Date();

  // Einsatzobjekt erstellen
  const einsatz = {
    datum: jetzt.toLocaleDateString('de-DE'),
    abflugzeit: jetzt.toLocaleTimeString('de-DE'),
    adresse: adresse,
    zielstation: zielstation
  };

  // Einsatz in das Array einsaetze einfügen
  einsaetze.push(einsatz);

  // Benachrichtigung anzeigen
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification('Neuer Einsatz', {
      body: `Ein neuer Einsatz ist eingetroffen:\n${adresse}\nZielstation: ${zielstation}`,
    });
  }
}

// Funktion zum Anfordern der Berechtigung für Benachrichtigungen
function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Benachrichtigungen erlaubt.');
      }
    });
  }
}

// Einsätze alle 5 Stunden generieren
setInterval(einsatzGenerieren, 5 * 60 * 60 * 1000);

// Benachrichtigungsberechtigung anfordern
requestNotificationPermission();


// Funktion zum Einfügen der Einsätze in die Tabelle
function einsaetzeEinfuegen() {
  const einsaetzeTabelle = document.querySelector('#einsaetze tbody');
  einsaetzeTabelle.innerHTML = '';

  // Schleife über alle Einsätze
  for (let i = 0; i < einsaetze.length; i++) {
    const tr = document.createElement('tr');
    const datumTd = document.createElement('td');
    const abflugzeitTd = document.createElement('td');
    const adresseTd = document.createElement('td');
    const zielstationTd = document.createElement('td');

    datumTd.textContent = einsaetze[i].datum;
    abflugzeitTd.textContent = einsaetze[i].abflugzeit;
    adresseTd.textContent = einsaetze[i].adresse;
    zielstationTd.textContent = einsaetze[i].zielstation;

    tr.appendChild(datumTd);
    tr.appendChild(abflugzeitTd);
    tr.appendChild(adresseTd);
    tr.appendChild(zielstationTd);

    einsaetzeTabelle.appendChild(tr);
  }
}

// Einsätze beim Laden der Seite anzeigen
einsaetzeEinfuegen();

// Funktion zum Starten des Einsatzgenerators
function startEinsatzGenerator() {
    // Interval-Funktion zum Generieren eines Einsatzes alle 5 Stunden
    setInterval(() => {
        einsatzGenerieren();
        einsaetzeEinfuegen();
    }, 5 * 60 * 60 * 1000);
}

// Einsätze beim Laden der Seite anzeigen
einsaetzeEinfuegen();

// Event Listener für den Button zum Erstellen eines neuen Einsatzes
const einsatzButton = document.querySelector('#einsatz-erstellen');
einsatzButton.addEventListener('click', () => {
    einsatzGenerieren();
    einsaetzeEinfuegen();
});

// Einsatzgenerator starten
startEinsatzGenerator();


// Überprüfen, ob der Browser Benachrichtigungen unterstützt
if ("Notification" in window) {
	// Benutzer um Erlaubnis zur Benachrichtigung fragen
	Notification.requestPermission().then(function (permission) {
		if (permission === "granted") {
			console.log("Benachrichtigungen erlaubt");
		}
	});
}

// Funktion zum Senden einer Benachrichtigung
function sendNotification() {
	// Überprüfen, ob der Browser Benachrichtigungen unterstützt
	if ("Notification" in window && Notification.permission === "granted") {
		// Text für die Benachrichtigung
		const notificationText = "Ein neuer Einsatz ist eingetroffen";

		// Optionen für die Benachrichtigung
		const options = {
			body: notificationText,
			icon: "path/to/notification-icon.png" // Pfad zum Icon der Benachrichtigung
		};

		// Benachrichtigung senden
		new Notification("Neuer Einsatz", options);
	}
}

const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});