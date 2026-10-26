import type { Locale } from "./i18n";

export type FaqItem = { id: string; q: string; a: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

// The short list shown on the home page; the full set lives on /[lang]/faq.
export const HOME_FAQ_IDS = [
  "hours",
  "booking",
  "vegetarian",
  "children",
  "fiorentina",
  "where",
];

export const faq: Record<Locale, FaqGroup[]> = {
  it: [
    {
      id: "visit",
      title: "Orari e prenotazioni",
      items: [
        { id: "hours", q: "Quali sono gli orari di apertura?", a: "Siamo aperti a pranzo dalle 12:00 alle 14:30 e a cena dalle 19:00 alle 22:00, tutti i giorni tranne il mercoledì." },
        { id: "closed", q: "Qual è il giorno di chiusura?", a: "Il mercoledì siamo chiusi, sia a pranzo sia a cena. Negli altri sei giorni della settimana ci trovate a pranzo e a cena." },
        { id: "booking", q: "Come posso prenotare un tavolo?", a: "Chiamateci allo 0722 331684 o al 347 762 1359, oppure scriveteci su WhatsApp. Vi consigliamo di prenotare soprattutto nel fine settimana e nelle serate speciali." },
        { id: "walkin", q: "Posso venire anche senza prenotazione?", a: "Certo, se c'è posto vi accogliamo volentieri. Nel fine settimana, durante il Palio della Rana e nella stagione del tartufo la sala si riempie in fretta: in quei casi una telefonata prima vi evita l'attesa." },
        { id: "groups", q: "Organizzate cene per gruppi, compleanni o feste?", a: "Sì, chiamateci con qualche giorno di anticipo: insieme troviamo la data, gli orari e il menu più adatti al vostro gruppo." },
      ],
    },
    {
      id: "food",
      title: "La cucina e il menu",
      items: [
        { id: "woodfired", q: "Le pizze sono cotte nel forno a legna?", a: "Sì, tutte le nostre pizze sono cotte nel forno a legna. La pasta è fatta in casa ogni giorno e la carne è cotta alla brace." },
        { id: "local", q: "Quali piatti tipici del territorio posso trovare?", a: "Passatelli, cappelletti e altri primi fatti in casa, la Casciotta al forno, il Gran tagliere con la crescia sfogliata, le olive all'ascolana e la carne alla brace. Trovate tutto nel menu." },
        { id: "vegetarian", q: "Avete opzioni vegetariane?", a: "Sì. Ci sono diverse pizze vegetariane, contorni di verdure, insalatone e primi fatti in casa senza carne." },
        { id: "allergies", q: "Posso segnalare allergie o intolleranze?", a: "Sì, e vi chiediamo di farlo quando prenotate o al momento dell'ordine. Il personale può indicarvi gli allergeni presenti in ogni piatto e consigliarvi le alternative." },
        { id: "fiorentina", q: "Devo prenotare la Fiorentina?", a: "Sì, la Fiorentina è solo su prenotazione. Chiamateci in anticipo così possiamo prepararla come si deve." },
        { id: "giant", q: "Fate la pizza gigante?", a: "Sì, la pizza gigante è perfetta da dividere in compagnia: va da 13 a 20 euro a seconda dei gusti." },
        { id: "burger", q: "Cosa c'è per chi non vuole pizza o pasta?", a: "Carne alla brace, tagliata, grigliata mista, insalatone e hamburger con pane fatto in casa cotto nel forno a legna, serviti con patatine e una bibita piccola." },
        { id: "prices", q: "Quanto costa mangiare da Lola?", a: "Siamo un ristorante pizzeria dai prezzi accessibili: trovate tutti i prezzi nel menu sul sito. Alcuni prezzi sono in aggiornamento, quindi in caso di dubbio chiamateci." },
      ],
    },
    {
      id: "families",
      title: "Famiglie e bambini",
      items: [
        { id: "children", q: "È un posto adatto ai bambini?", a: "Assolutamente sì. Accanto al ristorante ci sono un parco giochi e un campo da bocce: un bel divertimento per grandi e piccini, a pranzo e a cena." },
        { id: "kidsmenu", q: "Cosa mangiano i bambini?", a: "Pizze semplici come la margherita, la pizza con würstel e patatine, pasta fatta in casa e hamburger con patatine piacciono sempre. Chiedeteci pure porzioni più piccole o piatti senza condimenti particolari." },
      ],
    },
    {
      id: "area",
      title: "Come arrivare e dintorni",
      items: [
        { id: "where", q: "Dove si trova il ristorante?", a: "Siamo in via S. Caterina da Siena 16 a Fermignano (PU), a pochi passi dal centro. Trovate la mappa e le indicazioni nella sezione “Dove siamo”." },
        { id: "fromurbino", q: "Quanto dista Fermignano da Urbino?", a: "Circa un quarto d'ora d'auto. Molti dei nostri ospiti visitano Urbino al mattino e scendono da noi per pranzo o per cena." },
        { id: "fromcoast", q: "Come si arriva dalla costa o dall'autostrada?", a: "Dall'autostrada A14 uscite a Fano e prendete la superstrada E78 in direzione Urbino e Fermignano: in circa mezz'ora siete da noi. Da Pesaro il tempo è simile." },
        { id: "transit", q: "Si può arrivare con i mezzi pubblici?", a: "Fermignano non ha una stazione ferroviaria attiva: si scende a Pesaro o a Fano e si prosegue in autobus. Gli aeroporti più vicini sono Ancona e Rimini." },
        { id: "nearby", q: "Cosa c'è da vedere nei dintorni?", a: "Il ponte e la torre medievale di Fermignano, Urbino, la Gola del Furlo, Urbania e Acqualagna, la capitale del tartufo. Ne parliamo nel nostro blog." },
      ],
    },
  ],
  en: [
    {
      id: "visit",
      title: "Opening hours & booking",
      items: [
        { id: "hours", q: "When are you open?", a: "We're open for lunch from 12:00 to 14:30 and for dinner from 19:00 to 22:00, every day except Wednesday." },
        { id: "closed", q: "Which day are you closed?", a: "We're closed on Wednesdays, for both lunch and dinner. The other six days of the week you'll find us open at lunch and dinner." },
        { id: "booking", q: "How can I book a table?", a: "Call us on 0722 331684 or 347 762 1359, or message us on WhatsApp. We recommend booking, especially at weekends and on special evenings." },
        { id: "walkin", q: "Can I come without a booking?", a: "Of course: if there's room, you're very welcome. At weekends, during the Palio della Rana and in truffle season the dining room fills up quickly, so a quick call beforehand saves you a wait." },
        { id: "groups", q: "Do you host groups, birthdays or parties?", a: "Yes. Call us a few days ahead and we'll work out the date, time and menu that suit your group best." },
      ],
    },
    {
      id: "food",
      title: "Food & menu",
      items: [
        { id: "woodfired", q: "Are the pizzas wood-fired?", a: "Yes, all our pizzas are baked in the wood-fired oven. Our pasta is made in house every day and our meat is grilled over the coals." },
        { id: "local", q: "Which local dishes can I try?", a: "Passatelli, cappelletti and other homemade first courses, baked Casciotta cheese, the Grand sharing board with crescia sfogliata, olive all'ascolana and char-grilled meat. It's all on the menu." },
        { id: "vegetarian", q: "Do you have vegetarian options?", a: "Yes. There are several vegetarian pizzas, vegetable sides and large salads, plus homemade pasta dishes without meat." },
        { id: "allergies", q: "Can I let you know about allergies or intolerances?", a: "Yes, and please do so when you book or when you order. Our staff can tell you which allergens are in each dish and suggest alternatives." },
        { id: "fiorentina", q: "Do I need to pre-order the Fiorentina steak?", a: "Yes, the Fiorentina is available by reservation only. Call ahead so we can prepare it properly." },
        { id: "giant", q: "Do you make giant pizzas?", a: "Yes. The giant pizza is perfect for sharing and costs from €13 to €20 depending on the toppings." },
        { id: "burger", q: "What if I don't want pizza or pasta?", a: "Try our char-grilled meat, sliced steak (tagliata), mixed grill, large salads, or a burger in a house-made bun baked in the wood-fired oven, served with fries and a small drink." },
        { id: "prices", q: "How much does a meal at da Lola cost?", a: "We're an affordable restaurant and pizzeria, and all our prices are on the menu on this site. Some prices are still being updated, so if in doubt, give us a call." },
      ],
    },
    {
      id: "families",
      title: "Families & children",
      items: [
        { id: "children", q: "Is it a good place for children?", a: "Absolutely. There's a playground and a bocce court right next to the restaurant — great fun for grown-ups and children alike, at both lunch and dinner." },
        { id: "kidsmenu", q: "What can children eat?", a: "Simple pizzas like the margherita, the pizza with frankfurters and fries, homemade pasta and burgers with fries are always a hit. Feel free to ask for smaller portions or plain dishes." },
      ],
    },
    {
      id: "area",
      title: "Getting here & the area",
      items: [
        { id: "where", q: "Where are you located?", a: "We're at Via S. Caterina da Siena 16 in Fermignano (PU), a short walk from the centre. You'll find the map and directions in the “Find us” section." },
        { id: "fromurbino", q: "How far is Fermignano from Urbino?", a: "About a quarter of an hour by car. Many of our guests visit Urbino in the morning and come down to us for lunch or dinner." },
        { id: "fromcoast", q: "How do I get here from the coast or the motorway?", a: "Leave the A14 motorway at Fano and take the E78 expressway towards Urbino and Fermignano: you'll be with us in about half an hour. From Pesaro the journey is similar." },
        { id: "transit", q: "Can I get there by public transport?", a: "Fermignano has no working railway station: take the train to Pesaro or Fano and continue by bus. The nearest airports are Ancona and Rimini." },
        { id: "nearby", q: "What is there to see nearby?", a: "Fermignano's medieval bridge and tower, Urbino, the Furlo Gorge, Urbania and Acqualagna, the truffle capital. We write about them on our blog." },
      ],
    },
  ],
  fr: [
    {
      id: "visit",
      title: "Horaires et réservations",
      items: [
        { id: "hours", q: "Quels sont vos horaires ?", a: "Nous sommes ouverts le midi de 12h00 à 14h30 et le soir de 19h00 à 22h00, tous les jours sauf le mercredi." },
        { id: "closed", q: "Quel est votre jour de fermeture ?", a: "Nous sommes fermés le mercredi, midi et soir. Les six autres jours de la semaine, nous vous accueillons le midi et le soir." },
        { id: "booking", q: "Comment réserver une table ?", a: "Appelez-nous au 0722 331684 ou au 347 762 1359, ou écrivez-nous sur WhatsApp. Nous vous conseillons de réserver, surtout le week-end et lors des soirées spéciales." },
        { id: "walkin", q: "Puis-je venir sans réservation ?", a: "Bien sûr : s'il y a de la place, vous êtes les bienvenus. Le week-end, pendant le Palio della Rana et en saison de la truffe, la salle se remplit vite : un petit appel avant vous évite d'attendre." },
        { id: "groups", q: "Accueillez-vous des groupes, anniversaires ou fêtes ?", a: "Oui. Appelez-nous quelques jours à l'avance et nous choisirons ensemble la date, l'horaire et le menu les mieux adaptés à votre groupe." },
      ],
    },
    {
      id: "food",
      title: "La cuisine et la carte",
      items: [
        { id: "woodfired", q: "Les pizzas sont-elles cuites au feu de bois ?", a: "Oui, toutes nos pizzas sont cuites au four à bois. Nos pâtes sont faites maison chaque jour et notre viande est cuite à la braise." },
        { id: "local", q: "Quels plats typiques du terroir puis-je goûter ?", a: "Passatelli, cappelletti et autres pâtes maison, Casciotta au four, la Grande planche avec la crescia sfogliata, les olive all'ascolana et la viande à la braise. Tout est sur la carte." },
        { id: "vegetarian", q: "Avez-vous des plats végétariens ?", a: "Oui. Plusieurs pizzas végétariennes, des accompagnements de légumes, de grandes salades et des pâtes maison sans viande." },
        { id: "allergies", q: "Puis-je signaler des allergies ou intolérances ?", a: "Oui, merci de le faire lors de la réservation ou de la commande. Notre équipe peut vous indiquer les allergènes de chaque plat et vous proposer des alternatives." },
        { id: "fiorentina", q: "Faut-il réserver la Fiorentina ?", a: "Oui, la Fiorentina est servie uniquement sur réservation. Appelez-nous à l'avance pour que nous puissions la préparer comme il se doit." },
        { id: "giant", q: "Faites-vous des pizzas géantes ?", a: "Oui, la pizza géante est idéale à partager : de 13 à 20 euros selon la garniture." },
        { id: "burger", q: "Et si je ne veux ni pizza ni pâtes ?", a: "Viande à la braise, tagliata, grillade mixte, grandes salades ou burger dans un pain maison cuit au four à bois, servi avec des frites et une petite boisson." },
        { id: "prices", q: "Combien coûte un repas chez da Lola ?", a: "Nous sommes un restaurant-pizzeria aux prix accessibles : tous les prix sont sur la carte du site. Certains prix sont en cours de mise à jour ; en cas de doute, appelez-nous." },
      ],
    },
    {
      id: "families",
      title: "Familles et enfants",
      items: [
        { id: "children", q: "Est-ce un bon endroit pour les enfants ?", a: "Absolument. Une aire de jeux et un terrain de boules se trouvent juste à côté du restaurant : un vrai plaisir pour les grands comme pour les petits, le midi comme le soir." },
        { id: "kidsmenu", q: "Que peuvent manger les enfants ?", a: "Les pizzas simples comme la margherita, la pizza saucisses-frites, les pâtes maison et les burgers-frites plaisent toujours. N'hésitez pas à demander des portions plus petites ou des plats nature." },
      ],
    },
    {
      id: "area",
      title: "Venir et les environs",
      items: [
        { id: "where", q: "Où se trouve le restaurant ?", a: "Nous sommes via S. Caterina da Siena 16 à Fermignano (PU), à quelques pas du centre. La carte et l'itinéraire sont dans la rubrique « Nous trouver »." },
        { id: "fromurbino", q: "À quelle distance d'Urbino est Fermignano ?", a: "Environ un quart d'heure en voiture. Beaucoup de nos clients visitent Urbino le matin et descendent chez nous pour déjeuner ou dîner." },
        { id: "fromcoast", q: "Comment venir depuis la côte ou l'autoroute ?", a: "Sortez de l'autoroute A14 à Fano et prenez la voie rapide E78 en direction d'Urbino et Fermignano : vous êtes chez nous en une demi-heure environ. Depuis Pesaro, le trajet est similaire." },
        { id: "transit", q: "Peut-on venir en transports en commun ?", a: "Fermignano n'a pas de gare en service : prenez le train jusqu'à Pesaro ou Fano, puis le bus. Les aéroports les plus proches sont Ancône et Rimini." },
        { id: "nearby", q: "Que voir dans les environs ?", a: "Le pont et la tour médiévale de Fermignano, Urbino, les gorges du Furlo, Urbania et Acqualagna, la capitale de la truffe. Nous en parlons sur notre blog." },
      ],
    },
  ],
  de: [
    {
      id: "visit",
      title: "Öffnungszeiten & Reservierung",
      items: [
        { id: "hours", q: "Wann haben Sie geöffnet?", a: "Wir haben mittags von 12:00 bis 14:30 Uhr und abends von 19:00 bis 22:00 Uhr geöffnet, jeden Tag außer Mittwoch." },
        { id: "closed", q: "Wann ist Ruhetag?", a: "Mittwochs ist Ruhetag, mittags wie abends. An den anderen sechs Tagen der Woche sind wir mittags und abends für Sie da." },
        { id: "booking", q: "Wie kann ich einen Tisch reservieren?", a: "Rufen Sie uns unter 0722 331684 oder 347 762 1359 an oder schreiben Sie uns per WhatsApp. Wir empfehlen eine Reservierung, besonders am Wochenende und an besonderen Abenden." },
        { id: "walkin", q: "Kann ich auch ohne Reservierung kommen?", a: "Natürlich – wenn Platz ist, sind Sie herzlich willkommen. Am Wochenende, während des Palio della Rana und in der Trüffelsaison ist der Saal schnell voll; ein kurzer Anruf vorher erspart Ihnen das Warten." },
        { id: "groups", q: "Richten Sie Essen für Gruppen, Geburtstage oder Feiern aus?", a: "Ja. Rufen Sie uns ein paar Tage vorher an, dann finden wir gemeinsam Datum, Uhrzeit und Menü, die zu Ihrer Gruppe passen." },
      ],
    },
    {
      id: "food",
      title: "Küche & Speisekarte",
      items: [
        { id: "woodfired", q: "Kommen die Pizzen aus dem Holzofen?", a: "Ja, alle unsere Pizzen werden im Holzofen gebacken. Die Pasta machen wir jeden Tag selbst, und das Fleisch kommt vom Holzkohlegrill." },
        { id: "local", q: "Welche regionalen Gerichte gibt es?", a: "Passatelli, Cappelletti und andere hausgemachte Pasta, Casciotta aus dem Ofen, das Große Vorspeisenbrett mit Crescia sfogliata, Olive all'ascolana und Fleisch vom Grill. Alles finden Sie auf der Speisekarte." },
        { id: "vegetarian", q: "Gibt es vegetarische Gerichte?", a: "Ja. Es gibt mehrere vegetarische Pizzen, Gemüsebeilagen, große Salate und hausgemachte Pasta ohne Fleisch." },
        { id: "allergies", q: "Kann ich Allergien oder Unverträglichkeiten angeben?", a: "Ja, bitte teilen Sie uns diese bei der Reservierung oder Bestellung mit. Unser Team nennt Ihnen die Allergene in jedem Gericht und schlägt Alternativen vor." },
        { id: "fiorentina", q: "Muss ich die Fiorentina vorbestellen?", a: "Ja, die Fiorentina gibt es nur auf Vorbestellung. Rufen Sie uns vorher an, damit wir sie richtig vorbereiten können." },
        { id: "giant", q: "Gibt es Riesenpizza?", a: "Ja, die Riesenpizza ist ideal zum Teilen und kostet je nach Belag zwischen 13 und 20 Euro." },
        { id: "burger", q: "Was gibt es, wenn ich keine Pizza oder Pasta möchte?", a: "Fleisch vom Grill, Tagliata, gemischte Grillplatte, große Salate oder Burger im hausgemachten, im Holzofen gebackenen Brötchen – mit Pommes und einem kleinen Getränk." },
        { id: "prices", q: "Was kostet ein Essen bei da Lola?", a: "Wir sind ein preiswertes Restaurant mit Pizzeria; alle Preise finden Sie in der Speisekarte auf dieser Website. Einige Preise werden gerade aktualisiert – im Zweifel rufen Sie uns kurz an." },
      ],
    },
    {
      id: "families",
      title: "Familien & Kinder",
      items: [
        { id: "children", q: "Ist es ein guter Ort für Kinder?", a: "Auf jeden Fall. Direkt neben dem Restaurant gibt es einen Spielplatz und eine Boccia-Bahn – großer Spaß für Groß und Klein, mittags wie abends." },
        { id: "kidsmenu", q: "Was können Kinder essen?", a: "Einfache Pizzen wie die Margherita, die Pizza mit Würstchen und Pommes, hausgemachte Pasta und Burger mit Pommes kommen immer gut an. Fragen Sie gern nach kleineren Portionen oder schlichten Gerichten." },
      ],
    },
    {
      id: "area",
      title: "Anreise & Umgebung",
      items: [
        { id: "where", q: "Wo befindet sich das Restaurant?", a: "Wir sind in der Via S. Caterina da Siena 16 in Fermignano (PU), wenige Schritte vom Zentrum. Karte und Wegbeschreibung finden Sie im Bereich „Anfahrt“." },
        { id: "fromurbino", q: "Wie weit ist Fermignano von Urbino entfernt?", a: "Etwa eine Viertelstunde mit dem Auto. Viele unserer Gäste besichtigen vormittags Urbino und kommen dann zum Mittag- oder Abendessen zu uns." },
        { id: "fromcoast", q: "Wie komme ich von der Küste oder der Autobahn?", a: "Verlassen Sie die Autobahn A14 bei Fano und nehmen Sie die Schnellstraße E78 Richtung Urbino und Fermignano: In etwa einer halben Stunde sind Sie bei uns. Von Pesaro aus dauert es ähnlich lange." },
        { id: "transit", q: "Kann man mit öffentlichen Verkehrsmitteln anreisen?", a: "Fermignano hat keinen Bahnhof in Betrieb: Fahren Sie mit dem Zug bis Pesaro oder Fano und von dort mit dem Bus weiter. Die nächsten Flughäfen sind Ancona und Rimini." },
        { id: "nearby", q: "Was gibt es in der Umgebung zu sehen?", a: "Die mittelalterliche Brücke und der Turm von Fermignano, Urbino, die Furlo-Schlucht, Urbania und Acqualagna, die Hauptstadt des Trüffels. Darüber schreiben wir in unserem Blog." },
      ],
    },
  ],
};

export function homeFaq(lang: Locale): FaqItem[] {
  const all = faq[lang].flatMap((g) => g.items);
  return HOME_FAQ_IDS.map((id) => all.find((i) => i.id === id)).filter(
    (i): i is FaqItem => Boolean(i)
  );
}
