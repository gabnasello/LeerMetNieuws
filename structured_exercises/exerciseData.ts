// Sample exercise data - replace with GitHub data
export interface ExerciseData {
  id: number;
  section: "Binnenland" | "Buitenland";
  level: "A2" | "B1" | "B2" | "C1";
  title: string;
  topicNumber: number; // To group exercises by topic across levels
  article: {
    title: string;
    summary: string;
  };
  vocabulary: {
    words: { word: string; definition: string }[];
    fillInBlanks: { sentence: string; answer: string }[];
  };
  multipleChoice: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  trueFalse: {
    statement: string;
    isTrue: boolean;
  }[];
}

export const exerciseData: ExerciseData[] = [
  // ============================================
  // BINNENLAND - Topic 1: Nederlandse Politiek
  // ============================================
  
  // A2 Level
  {
    id: 1,
    section: "Binnenland",
    level: "A2",
    title: "Nederlandse Politiek",
    topicNumber: 1,
    article: {
      title: "Verkiezingen in Nederland",
      summary: "Nederland houdt elke vier jaar verkiezingen voor de Tweede Kamer. Burgers stemmen op een politieke partij en hun favoriete kandidaat. De partij met de meeste stemmen krijgt de kans om een coalitie te vormen met andere partijen."
    },
    vocabulary: {
      words: [
        { word: "verkiezingen", definition: "het proces waarbij burgers stemmen" },
        { word: "coalitie", definition: "samenwerking tussen politieke partijen" },
        { word: "stemmen", definition: "je keuze maken bij verkiezingen" },
        { word: "kandidaat", definition: "persoon die zich verkiesbaar stelt" },
        { word: "partij", definition: "groep mensen met dezelfde politieke ideeën" }
      ],
      fillInBlanks: [
        { sentence: "Burgers ___ op een politieke partij.", answer: "stemmen" },
        { sentence: "De winnende partij vormt een ___ met andere partijen.", answer: "coalitie" },
        { sentence: "Elke ___ heeft zijn eigen programma.", answer: "partij" }
      ]
    },
    multipleChoice: [
      {
        question: "Hoe vaak zijn er verkiezingen in Nederland?",
        options: ["Elk jaar", "Elke twee jaar", "Elke vier jaar", "Elke zes jaar"],
        correctAnswer: 2
      },
      {
        question: "Wat is een coalitie?",
        options: ["Een politieke partij", "Samenwerking tussen partijen", "Een stembureau", "Een minister"],
        correctAnswer: 1
      },
      {
        question: "Waar stemmen burgers op?",
        options: ["Alleen op een partij", "Alleen op een kandidaat", "Op een partij en kandidaat", "Op de minister-president"],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      { statement: "Nederland houdt elke vier jaar verkiezingen.", isTrue: true },
      { statement: "Alleen de grootste partij vormt de regering.", isTrue: false },
      { statement: "Burgers kunnen op een kandidaat stemmen.", isTrue: true }
    ]
  },

  // B1 Level
  // {
  //   id: 2,
  //   section: "Binnenland",
  //   level: "B1",
  //   title: "Nederlandse Politiek",
  //   topicNumber: 1,
  //   article: {
  //     title: "Het Nederlandse Parlementaire Stelsel",
  //     summary: "Het Nederlandse politieke systeem is gebaseerd op een parlementaire democratie waarbij elke vier jaar verkiezingen worden gehouden. Kiezers brengen hun stem uit op politieke partijen, waarbij het gebruik van een voorkeurstem mogelijk is. Door het proportionele kiesstelsel weerspiegelt de Tweede Kamer de politieke diversiteit van de bevolking, wat vaak resulteert in coalitieregeringen."
  //   },
  //   vocabulary: {
  //     words: [
  //       { word: "parlementair", definition: "met betrekking tot het parlement" },
  //       { word: "proportioneel kiesstelsel", definition: "systeem waarbij zetels evenredig aan stemmen worden verdeeld" },
  //       { word: "voorkeurstem", definition: "stem op een specifieke kandidaat binnen een partij" },
  //       { word: "politieke diversiteit", definition: "verscheidenheid aan politieke standpunten" },
  //       { word: "coalitieregering", definition: "regering gevormd door meerdere partijen" }
  //     ],
  //     fillInBlanks: [
  //       { sentence: "Nederland heeft een ___ democratie.", answer: "parlementaire" },
  //       { sentence: "Het ___ zorgt voor een goede vertegenwoordiging.", answer: "proportioneel kiesstelsel" },
  //       { sentence: "Meerdere partijen vormen samen een ___.", answer: "coalitieregering" }
  //     ]
  //   },
  //   multipleChoice: [
  //     {
  //       question: "Wat kenmerkt het Nederlandse kiesstelsel?",
  //       options: ["Districtenstelsel", "Proportionele vertegenwoordiging", "Tweepartijenstelsel", "Absolute meerderheid"],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "Waarom zijn coalitieregeringen gebruikelijk in Nederland?",
  //       options: ["Vanwege een grondwettelijke verplichting", "Omdat geen enkele partij meestal een meerderheid haalt", "Vanwege internationale afspraken", "Omdat de koning dit voorschrijft"],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "Wat is een voorkeurstem?",
  //       options: ["Een extra stem voor oudere kiezers", "Een stem op een specifieke kandidaat", "Een stem die meer telt", "Een stem per post"],
  //       correctAnswer: 1
  //     }
  //   ],
  //   trueFalse: [
  //     { statement: "Nederland kent een proportioneel kiesstelsel.", isTrue: true },
  //     { statement: "Coalitieregeringen zijn zeldzaam in Nederland.", isTrue: false },
  //     { statement: "Kiezers kunnen een voorkeurstem uitbrengen.", isTrue: true }
  //   ]
  // },

  
  {
    "id": 2,
    "section": "Binnenland",
    "level": "B1",
    "title": "Moeten er strengere regels komen voor euthanasie bij jongvolwassenen?",
    "topicNumber": 1,
    "article": {
      "title": "Moeten er strengere regels komen voor euthanasie bij jongvolwassenen?",
      "summary": "In Nederland en België zijn er zorgen over het aantal jonge mensen dat kiest voor euthanasie vanwege psychische problemen. Deskundigen overwegen of er strengere regels moeten komen voor jongeren onder de 25, omdat hun hersenen nog niet volledig zijn ontwikkeld. Ze willen voorkomen dat het een heftig debat wordt."
    },
    "vocabulary": {
      "words": [
        {
          "word": "euthanasie",
          "definition": "een medische behandeling om het leven van een terminale patiënt op een humane manier te beëindigen"
        },
        {
          "word": "jongvolwassenen",
          "definition": "jonge mensen die net volwassen zijn, meestal tussen 18 en 25 jaar"
        },
        {
          "word": "psychische problemen",
          "definition": "problemen met de geestelijke gezondheid, zoals depressie of angst"
        },
        {
          "word": "deskundigen",
          "definition": "experts of mensen met veel kennis over een onderwerp"
        },
        {
          "word": "heftig",
          "definition": "erg emotioneel of intens"
        }
      ],
      "fillInBlanks": [
        {
          "sentence": "Euthanasie is een optie voor mensen met ernstige ___ pijn.",
          "answer": "fysieke"
        },
        {
          "sentence": "Jongeren onder de 25 hebben soms nog geen volledig ontwikkelde ___ .",
          "answer": "hersenen"
        },
        {
          "sentence": "Een heftig debat kan veel ___ veroorzaken.",
          "answer": "emotie"
        }
      ]
    },
    "multipleChoice": [
      {
        "question": "Waarom overwegen deskundigen strengere regels voor euthanasie bij jongeren onder 25?",
        "options": [
          "Omdat jongeren vaak rijk zijn",
          "Omdat hun hersenen nog niet volledig zijn ontwikkeld",
          "Omdat jongeren geen pijn voelen",
          "Omdat het een goedkope behandeling is"
        ],
        "correctAnswer": 1
      }
    ],
    "trueFalse": [
      {
        "statement": "Euthanasie is alleen toegestaan voor mensen boven de 30.",
        "isTrue": false
      },
      {
        "statement": "Deskundigen willen voorkomen dat euthanasie een heftig debat wordt.",
        "isTrue": true
      }
    ]
  },

    {
    "id": 3,
    "section": "Binnenland",
    "level": "B1",
    "title": "Archeologen vinden bijzondere overblijfselen in Duivelsteen Gent",
    "topicNumber": 1,
    "article": {
      "title": "Archeologen vinden bijzondere overblijfselen in Duivelsteen Gent",
      "summary": "Archeologen hebben in Gent een bijzondere ontdekking gedaan. Tijdens opgravingen vonden ze goed bewaarde resten van vermoedelijke monniken. Dit was een grote verrassing voor de onderzoekers. Ze hadden wel iets verwacht, maar niet iets zo bijzonders als dit. De vondst is belangrijk voor de geschiedenis van de stad."
    },
    "vocabulary": {
      "words": [
        {
          "word": "archeologen",
          "definition": "mensen die oude voorwerpen en resten bestuderen"
        },
        {
          "word": "overblijfselen",
          "definition": "wat er over is gebleven van iets ouds"
        },
        {
          "word": "opgravingen",
          "definition": "het graven in de grond om oude dingen te vinden"
        },
        {
          "word": "monniken",
          "definition": "mensen die in een klooster leven en geloven"
        },
        {
          "word": "geschiedenis",
          "definition": "alles wat er in het verleden is gebeurd"
        }
      ],
      "fillInBlanks": [
        {
          "sentence": "___ vonden de oude resten tijdens hun onderzoek.",
          "answer": "Archeologen"
        },
        {
          "sentence": "De ___ van de monniken waren goed bewaard gebleven.",
          "answer": "resten"
        },
        {
          "sentence": "Door de ___ leren we over het verleden.",
          "answer": "geschiedenis"
        }
      ]
    },
    "multipleChoice": [
      {
        "question": "Wat vonden de archeologen in Gent?",
        "options": [
          "Een nieuwe stad",
          "Een schat",
          "Resten van monniken",
          "Niets bijzonders"
        ],
        "correctAnswer": 2
      }
    ],
    "trueFalse": [
      {
        "statement": "Archeologen vonden niets bijzonders in Gent.",
        "isTrue": false
      },
      {
        "statement": "De vondst helpt ons de geschiedenis beter te begrijpen.",
        "isTrue": true
      }
    ]
  },

  // B2 Level
  // {
  //   id: 3,
  //   section: "Binnenland",
  //   level: "B2",
  //   title: "Nederlandse Politiek",
  //   topicNumber: 1,
  //   article: {
  //     title: "De Vorming van Nederlandse Kabinetten",
  //     summary: "Na de verkiezingen volgt een complex formatieproces waarbij de grootste partijen onderhandelen over een regeerakkoord. Een informateur of formateur begeleidt dit proces, waarin partijen met verschillende ideologieën tot compromissen moeten komen. De uiteindelijke coalitie moet een meerderheid in de Tweede Kamer vertegenwoordigen en een coherent beleidsprogramma presenteren dat diverse politieke stromingen verenigt."
  //   },
  //   vocabulary: {
  //     words: [
  //       { word: "formatieproces", definition: "proces van kabinetsvorming na verkiezingen" },
  //       { word: "regeerakkoord", definition: "document met afspraken tussen coalitiepartijen" },
  //       { word: "informateur", definition: "persoon die formatiemogelijkheden verkent" },
  //       { word: "ideologie", definition: "samenhangend geheel van politieke opvattingen" },
  //       { word: "coherent beleidsprogramma", definition: "logisch samenhangend plan voor regeringsbeleid" }
  //     ],
  //     fillInBlanks: [
  //       { sentence: "Een ___ begeleidt de onderhandelingen tussen partijen.", answer: "informateur" },
  //       { sentence: "Partijen met verschillende ___ moeten tot compromissen komen.", answer: "ideologieën" },
  //       { sentence: "Het ___ bevat de afspraken van de coalitie.", answer: "regeerakkoord" }
  //     ]
  //   },
  //   multipleChoice: [
  //     {
  //       question: "Wat is de primaire rol van een informateur?",
  //       options: ["Het leiden van de regering", "Het verkennen van formatiemogelijkheden", "Het schrijven van wetten", "Het controleren van ministers"],
  //       correctAnswer: 1
  //     },
  //     {
  //       question: "Waarom is het formatieproces vaak complex?",
  //       options: ["Vanwege internationale druk", "Door gebrek aan interesse", "Vanwege ideologische verschillen en noodzaak tot compromis", "Omdat het verplicht lang duurt"],
  //       correctAnswer: 2
  //     },
  //     {
  //       question: "Wat moet een coalitie minimaal hebben?",
  //       options: ["Drie partijen", "Een meerderheid in de Tweede Kamer", "Steun van alle partijen", "Goedkeuring van de EU"],
  //       correctAnswer: 1
  //     }
  //   ],
  //   trueFalse: [
  //     { statement: "Het formatieproces begint direct na de verkiezingen.", isTrue: true },
  //     { statement: "Een regeerakkoord wordt alleen door één partij geschreven.", isTrue: false },
  //     { statement: "Ideologische verschillen maken formatie vaak uitdagend.", isTrue: true }
  //   ]
  // },

  // C1 Level
  {
    id: 4,
    section: "Binnenland",
    level: "C1",
    title: "Nederlandse Politiek",
    topicNumber: 1,
    article: {
      title: "Constitutionele Checks and Balances in het Nederlandse Staatsbestel",
      summary: "Het Nederlandse democratische systeem berust op een verfijnde scheiding der machten waarbij de wetgevende, uitvoerende en rechterlijke macht elkaar in evenwicht houden. De grondwettelijk verankerde rol van de Tweede Kamer omvat niet alleen wetgeving maar ook intensief parlementair onderzoek en ministeriële verantwoording. Dit stelsel van wederzijdse controle, gecombineerd met een gefragmenteerd partijlandschap, garandeert dat beleidsvorming een product is van deliberatieve democratie waarbij diverse maatschappelijke belangen moeten worden geaccommodeerd."
    },
    vocabulary: {
      words: [
        { word: "scheiding der machten", definition: "constitutioneel principe van machtsverdeling" },
        { word: "grondwettelijk verankerd", definition: "in de constitutie vastgelegd" },
        { word: "ministeriële verantwoording", definition: "politieke aansprakelijkheid van ministers" },
        { word: "gefragmenteerd partijlandschap", definition: "politiek systeem met veel verschillende partijen" },
        { word: "deliberatieve democratie", definition: "democratie gebaseerd op weloverwogen discussie" }
      ],
      fillInBlanks: [
        { sentence: "De ___ voorkomt machtsconcentratie.", answer: "scheiding der machten" },
        { sentence: "Ministers dragen ___ voor hun beleid.", answer: "ministeriële verantwoording" },
        { sentence: "___ kenmerkt het Nederlandse politieke systeem.", answer: "Deliberatieve democratie" }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het fundamentele doel van scheiding der machten?",
        options: ["Efficiency vergroten", "Machtsconcentratie voorkomen en vrijheden waarborgen", "Kosten verlagen", "Internationale samenwerking bevorderen"],
        correctAnswer: 1
      },
      {
        question: "Hoe beïnvloedt het gefragmenteerde partijlandschap de beleidsvorming?",
        options: ["Het vereenvoudigt besluitvorming", "Het elimineert politieke discussie", "Het vereist uitgebreide onderhandelingen en compromissen", "Het heeft geen invloed"],
        correctAnswer: 2
      },
      {
        question: "Wat houdt ministeriële verantwoording in?",
        options: ["Ministers zijn alleen verantwoording schuldig aan hun partij", "Ministers zijn politiek en juridisch aansprakelijk voor hun beleid", "Ministers hoeven geen verantwoording af te leggen", "Alleen de minister-president is verantwoordelijk"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Scheiding der machten is grondwettelijk verankerd in Nederland.", isTrue: true },
      { statement: "Het Nederlandse partijlandschap is sterk geconsolideerd.", isTrue: false },
      { statement: "Deliberatieve democratie vereist weloverwogen politieke discussie.", isTrue: true }
    ]
  },

  // ================================================
  // BINNENLAND - Topic 2: Nederlandse Infrastructuur
  // ================================================

  // A2 Level
  {
    id: 5,
    section: "Binnenland",
    level: "A2",
    title: "Nederlandse Infrastructuur",
    topicNumber: 2,
    article: {
      title: "Fietscultuur in Nederland",
      summary: "Nederland staat bekend om zijn fietscultuur. Er zijn meer fietsen dan inwoners. Het land heeft een uitgebreid netwerk van fietspaden die gescheiden zijn van het autoverkeer, waardoor fietsen veilig en populair is."
    },
    vocabulary: {
      words: [
        { word: "fietscultuur", definition: "de manier waarop fietsen belangrijk is" },
        { word: "netwerk", definition: "systeem van verbonden wegen of paden" },
        { word: "fietspad", definition: "speciale weg voor fietsen" },
        { word: "inwoners", definition: "mensen die in een land wonen" },
        { word: "verkeer", definition: "beweging van voertuigen op de weg" }
      ],
      fillInBlanks: [
        { sentence: "Nederland heeft meer fietsen dan ___.", answer: "inwoners" },
        { sentence: "Fietspaden zijn gescheiden van het auto___.", answer: "verkeer" },
        { sentence: "Het land heeft een uitgebreid ___ van fietspaden.", answer: "netwerk" }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is fietsen populair in Nederland?",
        options: ["Het is goedkoop", "Er zijn veilige fietspaden", "Het weer is altijd goed", "Auto's zijn verboden"],
        correctAnswer: 1
      },
      {
        question: "Hoeveel fietsen zijn er in Nederland?",
        options: ["Minder dan inwoners", "Evenveel als inwoners", "Meer dan inwoners", "Geen fietsen"],
        correctAnswer: 2
      },
      {
        question: "Wat is een fietspad?",
        options: ["Een parkeerplaats", "Een speciale weg voor fietsen", "Een winkel", "Een station"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Nederland heeft meer fietsen dan inwoners.", isTrue: true },
      { statement: "Fietspaden delen de weg met auto's.", isTrue: false },
      { statement: "Fietsen is populair in Nederland.", isTrue: true }
    ]
  },

  // B1 Level
  {
    id: 6,
    section: "Binnenland",
    level: "B1",
    title: "Nederlandse Infrastructuur",
    topicNumber: 2,
    article: {
      title: "Moderne Mobiliteit in Nederland",
      summary: "Het Nederlandse transportsysteem combineert verschillende vormen van mobiliteit. Naast het uitgebreide fietsnetwerk beschikt Nederland over efficiënte openbaar vervoersverbindingen en moderne snelwegen. De integratie van deze systemen, bijvoorbeeld via OV-fietsen en park-and-ride faciliteiten, maakt multimodaal reizen mogelijk en vermindert autoafhankelijkheid in stedelijke gebieden."
    },
    vocabulary: {
      words: [
        { word: "mobiliteit", definition: "het vermogen om te bewegen of verplaatsen" },
        { word: "openbaar vervoer", definition: "bussen, treinen en trams voor iedereen" },
        { word: "integratie", definition: "samenbrengen van verschillende systemen" },
        { word: "multimodaal", definition: "gebruik van meerdere vervoersmiddelen" },
        { word: "stedelijk", definition: "met betrekking tot de stad" }
      ],
      fillInBlanks: [
        { sentence: "Nederland heeft een goed ___ systeem.", answer: "openbaar vervoer" },
        { sentence: "___ reizen combineert verschillende vervoersmiddelen.", answer: "Multimodaal" },
        { sentence: "In ___ gebieden is de fiets erg populair.", answer: "stedelijke" }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is multimodaal reizen?",
        options: ["Alleen met de auto", "Gebruik van meerdere vervoersmiddelen", "Alleen fietsen", "Te voet gaan"],
        correctAnswer: 1
      },
      {
        question: "Wat zijn OV-fietsen?",
        options: ["Private fietsen", "Huurfietsen bij stations", "Elektrische auto's", "Treinen"],
        correctAnswer: 1
      },
      {
        question: "Waarom vermindert integratie autoafhankelijkheid?",
        options: ["Auto's zijn te duur", "Het maakt alternatieve vervoersmiddelen toegankelijker", "Er zijn geen wegen", "Het is verplicht"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Nederland combineert verschillende vormen van mobiliteit.", isTrue: true },
      { statement: "Multimodaal reizen is niet mogelijk in Nederland.", isTrue: false },
      { statement: "OV-fietsen zijn beschikbaar bij stations.", isTrue: true }
    ]
  },

  // B2 Level
  {
    id: 7,
    section: "Binnenland",
    level: "B2",
    title: "Nederlandse Infrastructuur",
    topicNumber: 2,
    article: {
      title: "Duurzame Infrastructuurontwikkeling",
      summary: "Nederland investeert aanzienlijk in duurzame infrastructuur om klimaatdoelstellingen te realiseren. Dit omvat de uitbreiding van elektrische laadpalen, de ontwikkeling van groene corridors langs vervoersaders, en de implementatie van intelligente verkeersmanagementsystemen. De transitie naar duurzame mobiliteit vereist niet alleen technologische innovatie maar ook gedragsverandering bij burgers en bedrijven, waarbij de overheid stimuleringsmaatregelen inzet."
    },
    vocabulary: {
      words: [
        { word: "aanzienlijk", definition: "groot, belangrijk in omvang" },
        { word: "klimaatdoelstellingen", definition: "doelen voor vermindering van uitstoot" },
        { word: "corridors", definition: "verbindingen of routes" },
        { word: "implementatie", definition: "invoering, uitvoering" },
        { word: "stimuleringsmaatregelen", definition: "acties om iets aan te moedigen" }
      ],
      fillInBlanks: [
        { sentence: "Nederland investeert ___ in infrastructuur.", answer: "aanzienlijk" },
        { sentence: "De ___ van nieuwe systemen kost tijd.", answer: "implementatie" },
        { sentence: "De overheid gebruikt ___ om gedrag te veranderen.", answer: "stimuleringsmaatregelen" }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom investeert Nederland in duurzame infrastructuur?",
        options: ["Voor toerisme", "Om klimaatdoelstellingen te realiseren", "Voor sportactiviteiten", "Zonder specifieke reden"],
        correctAnswer: 1
      },
      {
        question: "Wat zijn groene corridors?",
        options: ["Winkelstraten", "Ecologische verbindingen langs vervoersaders", "Kantoorgebouwen", "Parkeerplaatsen"],
        correctAnswer: 1
      },
      {
        question: "Wat vereist duurzame mobiliteitstransitie?",
        options: ["Alleen nieuwe wegen", "Technologie en gedragsverandering", "Alleen hogere belastingen", "Niets speciaals"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Nederland investeert in elektrische laadinfrastructuur.", isTrue: true },
      { statement: "Duurzame mobiliteit vereist alleen technologie.", isTrue: false },
      { statement: "De overheid gebruikt stimuleringsmaatregelen.", isTrue: true }
    ]
  },

  // C1 Level
  {
    id: 8,
    section: "Binnenland",
    level: "C1",
    title: "Nederlandse Infrastructuur",
    topicNumber: 2,
    article: {
      title: "Adaptieve Infrastructuur en Klimaatbestendigheid",
      summary: "De Nederlandse infrastructuurplanning integreert klimaatadaptatie als essentieel ontwerpprincipe. Infrastructurele assets worden ontworpen met redundantie en veerkracht tegen extreme weersomstandigheden, waarbij innovatieve oplossingen zoals multifunctioneel ruimtegebruik en natuurgebaseerde engineering worden toegepast. Deze holistische benadering vereist interdisciplinaire samenwerking tussen stedenbouwkundigen, waterbeheerders en transportplanners, waarbij toekomstige scenario's worden gemodelleerd om de infrastructuur klimaatbestendig te maken voor komende generaties."
    },
    vocabulary: {
      words: [
        { word: "klimaatadaptatie", definition: "aanpassing aan klimaatverandering" },
        { word: "redundantie", definition: "reservecapaciteit voor betrouwbaarheid" },
        { word: "veerkracht", definition: "vermogen om te herstellen van problemen" },
        { word: "multifunctioneel", definition: "meerdere functies vervullend" },
        { word: "interdisciplinair", definition: "verschillende vakgebieden combinerend" }
      ],
      fillInBlanks: [
        { sentence: "___ is essentieel voor toekomstige infrastructuur.", answer: "Klimaatadaptatie" },
        { sentence: "Infrastructuur wordt ontworpen met ___ tegen storingen.", answer: "redundantie" },
        { sentence: "___ samenwerking verbindt verschillende expertises.", answer: "Interdisciplinaire" }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het primaire doel van klimaatadaptatie in infrastructuur?",
        options: ["Kostenreductie", "Bestand maken tegen klimaatverandering", "Versnellen van bouw", "Vereenvoudiging van ontwerp"],
        correctAnswer: 1
      },
      {
        question: "Wat betekent redundantie in infrastructuurcontext?",
        options: ["Verspilling", "Reservecapaciteit voor betrouwbaarheid", "Overbodige elementen", "Verouderde systemen"],
        correctAnswer: 1
      },
      {
        question: "Waarom is interdisciplinaire samenwerking cruciaal?",
        options: ["Voor bureaucratie", "Om complexe infrastructuuruitdagingen holistisch aan te pakken", "Voor kostenverhogingen", "Het is niet cruciaal"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Klimaatadaptatie is geïntegreerd in Nederlandse infrastructuurplanning.", isTrue: true },
      { statement: "Redundantie in infrastructuur is ongewenst.", isTrue: false },
      { statement: "Multifunctioneel ruimtegebruik is een innovatieve oplossing.", isTrue: true }
    ]
  },

  // Continue with remaining 3 Binnenland topics and 5 Buitenland topics...
  // For brevity, I'll add placeholders for topics 3-5 Binnenland and all Buitenland topics
  // In real implementation, each would have full A2, B1, B2, C1 versions

  // BINNENLAND Topic 3: Economie (ids 9-12)
  // BINNENLAND Topic 4: Cultuur (ids 13-16)
  // BINNENLAND Topic 5: Klimaat (ids 17-20)

  // ================================================
  // BUITENLAND - Topic 1: Europese Unie
  // ================================================

  // A2 Level
  {
    id: 21,
    section: "Buitenland",
    level: "A2",
    title: "Europese Unie",
    topicNumber: 1,
    article: {
      title: "Nederland en de EU",
      summary: "Nederland is sinds 1957 lid van de Europese Unie. De EU is een samenwerking tussen Europese landen voor handel, vrede en welvaart. Nederland draagt bij aan EU-beslissingen en profiteert van vrij verkeer van mensen en goederen."
    },
    vocabulary: {
      words: [
        { word: "lid", definition: "deel van een groep of organisatie" },
        { word: "samenwerking", definition: "samen werken aan iets" },
        { word: "handel", definition: "kopen en verkopen van goederen" },
        { word: "welvaart", definition: "rijkdom en welzijn" },
        { word: "vrij verkeer", definition: "kunnen bewegen zonder grenzen" }
      ],
      fillInBlanks: [
        { sentence: "Nederland is sinds 1957 ___ van de EU.", answer: "lid" },
        { sentence: "De EU werkt samen voor handel en ___.", answer: "welvaart" },
        { sentence: "Er is ___ van mensen in de EU.", answer: "vrij verkeer" }
      ]
    },
    multipleChoice: [
      {
        question: "Sinds wanneer is Nederland lid van de EU?",
        options: ["1945", "1957", "1970", "2000"],
        correctAnswer: 1
      },
      {
        question: "Waar werkt de EU voor?",
        options: ["Alleen handel", "Handel, vrede en welvaart", "Alleen sport", "Alleen cultuur"],
        correctAnswer: 1
      },
      {
        question: "Wat is vrij verkeer?",
        options: ["Gratis transport", "Kunnen bewegen zonder grenzen", "Snelwegen", "Fietspaden"],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      { statement: "Nederland is lid van de Europese Unie.", isTrue: true },
      { statement: "De EU werkt alleen aan economie.", isTrue: false },
      { statement: "Er is vrij verkeer van mensen in de EU.", isTrue: true }
    ]
  },

  // B1, B2, C1 for Buitenland topics would continue here (ids 22-40)
  // Following same pattern with progressive difficulty
];
