export interface Exercise {
  id: number;
  section: string;
  level: string;
  title: string;
  topicNumber: number;
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

export const exercises: Exercise[] = [
{
    id: 1,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
    topicNumber: 1,
    article: {
      title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bepopeling in het donker",
      summary: "Spotgoedkope waterkrachtenergie lokt tientallen bitcoinbedrijven naar de Ethiopische hoofdstad Addis Abeba. Ze leveren het Afrikaanse land amper geld en jobs op. De helft van de Ethiopiërs moet ondertussen zonder stroom en drinkbaar water overleven."
    },
    vocabulary: {
      words: [
        {
          word: "bitcoinboys",
          definition: "Mensen die veel bezitten van de digitale munt Bitcoin",
          sentence: "De ___ waren erg rijk geworden.",
          answer: "bitcoinboys"
        },
        {
          word: "jobs",
          definition: "Werk, betaald werk dat je doet",
          sentence: "Hij heeft drie ___ tegelijk.",
          answer: "jobs"
        },
        {
          word: "stroom",
          definition: "Elektriciteit die uit het stopcontact komt",
          sentence: "Zonder ___ kun je geen lamp aanzetten.",
          answer: "stroom"
        },
        {
          word: "megadam",
          definition: "Een heel grote dam in een rivier",
          sentence: "De nieuwe ___ zorgt voor problemen.",
          answer: "megadam"
        },
        {
          word: "Ethiopische",
          definition: "Van of over Ethiopië, een land in Afrika",
          sentence: "De ___ keuken is heel pittig.",
          answer: "Ethiopische"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft drie ___ tegelijk.",
          answer: "jobs"
        },
        {
          sentence: "De ___ keuken is heel pittig.",
          answer: "Ethiopische"
        },
        {
          sentence: "De ___ waren erg rijk geworden.",
          answer: "bitcoinboys"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar wordt de stroom in dit artikel vooral voor gebruikt?",
        options: [
          "Om huizen te verlichten",
          "Om computers te koelen",
          "Om bitcoin te delven",
          "Om drinkwater te zuiveren"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een gevolg van de bitcoinmijnen in Ethiopië?",
        options: [
          "Meer jobs voor de lokale bevolking",
          "Minder stroom voor andere doeleinden",
          "Meer drinkwater voor iedereen",
          "Minder immigratie naar andere landen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie heeft voordeel van de situatie in Ethiopië?",
        options: [
          "De lokale bevolking",
          "De Ethiopische overheid",
          "De bitcoinbedrijven",
          "De buurlanden van Ethiopië"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Ethiopië heeft veel stroom door de nieuwe dam.",
        isTrue: true
      },
      {
        statement: "De bitcoinbedrijven zorgen voor veel jobs in Ethiopië.",
        isTrue: false
      },
      {
        statement: "De lokale bevolking heeft meer stroom dan voorheen.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Fraude met EU-subsidies: Griekse groep pleegde fraude",
    topicNumber: 1,
    article: {
      title: "Fraude met EU-subsidies: Griekse groep pleegde fraude",
      summary: "Een criminele groep in Griekenland heeft de Europese Unie bedrogen voor bijna 20 miljoen euro. Zij logen over het aantal schapen en geiten dat ze hadden, om meer geld te krijgen."
    },
    vocabulary: {
      words: [
        {
          word: "subsidies",
          definition: "Financiële steun gegeven door de overheid of een organisatie.",
          sentence: "De boer ontving ___ van de EU om zijn land te verbeteren.",
          answer: "subsidies"
        },
        {
          word: "Fraude",
          definition: "Een vorm van bedrog of misleiding, vaak voor financieel gewin.",
          sentence: "Hij werd gearresteerd voor zijn rol in de grote ___.",
          answer: "fraude"
        },
        {
          word: "logen",
          definition: "Niet de waarheid vertellen; het tegenovergestelde van de waarheid spreken.",
          sentence: "Zij ___ over hun leeftijd om binnen te komen.",
          answer: "logen"
        },
        {
          word: "groep",
          definition: "Een aantal mensen of dingen bij elkaar.",
          sentence: "De hele ___ werkte samen aan het project.",
          answer: "groep"
        },
        {
          word: "aantal",
          definition: "Hoeveel er van iets is; het getal.",
          sentence: "Het ___ mensen dat kwam opdagen was groot.",
          answer: "aantal"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De boer ontving ___ van de EU om zijn land te verbeteren.",
          answer: "subsidies"
        },
        {
          sentence: "De hele ___ werkte samen aan het project.",
          answer: "groep"
        },
        {
          sentence: "Hij werd gearresteerd voor zijn rol in de grote ___.",
          answer: "fraude"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was het hoofddoel van de groep in Griekenland?",
        options: [
          "Meer dieren verzorgen",
          "Geld stelen van de EU",
          "Een nieuwe wet aannemen",
          "Meer boeren helpen"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe pleegde de groep de fraude precies?",
        options: [
          "Ze verkochten te veel dieren",
          "Ze logen over het aantal dieren",
          "Ze stalen geld uit banken",
          "Ze gaven dieren weg"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van dit soort fraude?",
        options: [
          "De EU stopt met alle subsidies",
          "De EU wordt voorzichtiger met geld",
          "Dieren krijgen minder eten",
          "Belastinggeld wordt verspild"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De groep in Griekenland gaf de Europese Unie te veel dieren.",
        isTrue: false
      },
      {
        statement: "De groep loog over hoeveel dieren ze hadden om meer geld te krijgen.",
        isTrue: true
      },
      {
        statement: "Dit gebeurde alleen in Griekenland.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Jamaica maakt zich op voor Melissa, de zwaarste orkaan van het jaar",
    topicNumber: 1,
    article: {
      title: "Jamaica maakt zich op voor Melissa, de zwaarste orkaan van het jaar",
      summary: "Een ramp lijkt onafwendbaar in Jamaica, nu orkaan Melissa op drie manieren kan toeslaan: met stormvloed, immense regenval en verwoestende wind. Op Haïti en de Dominicaanse Republiek vielen al vier doden."
    },
    vocabulary: {
      words: [
        {
          word: "stormvloed",
          definition: "Een grote overstroming door de zee die het land binnenstroomt",
          sentence: "Bij een stormvloed stroomt zeewater het land binnen en veroorzaakt overstromingen.",
          answer: "stormvloed"
        },
        {
          word: "regenval",
          definition: "De hoeveelheid regen die in een bepaalde tijd valt",
          sentence: "Hevige regenval kan straten blank zetten en huizen onder water zetten.",
          answer: "regenval"
        },
        {
          word: "orkaan",
          definition: "Een hele zware storm met veel wind en regen",
          sentence: "Een orkaan kan veel schade veroorzaken met harde wind en veel regen.",
          answer: "orkaan"
        },
        {
          word: "wind",
          definition: "Bewegende lucht die je voelt maar niet ziet",
          sentence: "Sterke wind kan takken afbreken en dingen omver blazen.",
          answer: "wind"
        },
        {
          word: "ramp",
          definition: "Een ernstige gebeurtenis met veel schade en vaak slachtoffers",
          sentence: "Een natuurramp zoals een orkaan kan hele steden verwoesten.",
          answer: "ramp"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Bij een stormvloed stroomt zeewater het land binnen en veroorzaakt overstromingen.",
          answer: "stormvloed"
        },
        {
          sentence: "Sterke wind kan takken afbreken en dingen omver blazen.",
          answer: "wind"
        },
        {
          sentence: "Een natuurramp zoals een orkaan kan hele steden verwoesten.",
          answer: "ramp"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een orkaan?",
        options: [
          "Een soort dier",
          "Een feestdag",
          "Een zware storm met veel wind",
          "Een type auto"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is de situatie in Jamaica zorgelijk?",
        options: [
          "Er is een feest aan de gang",
          "Er is een voedseltekort",
          "Orkaan Melissa nadert en kan op drie manieren toeslaan",
          "De president is afgetreden"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is al gebeurd in naburige landen?",
        options: [
          "Er is een orkaan geweest",
          "Er zijn vier mensen overleden",
          "Er is een festival gehouden",
          "Er is niets gebeurd"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Een orkaan brengt alleen harde wind, geen andere problemen.",
        isTrue: false
      },
      {
        statement: "Er zijn al doden gevallen in Haïti en de Dominicaanse Republiek door de orkaan.",
        isTrue: true
      },
      {
        statement: "Nederland wordt vaak getroffen door orkanen.",
        isTrue: false
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Pater Herwig Arts, 90 jaar",
    topicNumber: 1,
    article: {
      title: "Pater Herwig Arts, 90 jaar",
      summary: "Pater Herwig Arts is geboren in 1935 en overleden op 24 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "jaar",
          definition: "een periode van 365 of 366 dagen",
          sentence: "Hij is 90 ___ oud geworden.",
          answer: "jaar"
        },
        {
          word: "Arts",
          definition: "een achternaam, zoals Jansen of De Vries",
          sentence: "Zijn volledige naam was Herwig ___.",
          answer: "Arts"
        },
        {
          word: "overleden",
          definition: "niet meer in leven zijn, dood zijn",
          sentence: "Hij is ___ op 24 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Herwig",
          definition: "een mannelijke voornaam",
          sentence: "___ was de voornaam van de pater.",
          answer: "Herwig"
        },
        {
          word: "geboren",
          definition: "het moment dat iemand ter wereld komt",
          sentence: "Hij werd ___ in het jaar 1935.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 24 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is 90 ___ oud geworden.",
          answer: "jaar"
        },
        {
          sentence: "Hij werd ___ in het jaar 1935.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar werd Pater Herwig Arts geboren?",
        options: [
          "1930",
          "1935",
          "1940",
          "1945"
        ],
        correctAnswer: 2
      },
      {
        question: "In welke maand overleed Pater Herwig Arts?",
        options: [
          "Januari",
          "Februari",
          "September",
          "Oktober"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud was Pater Herwig Arts toen hij overleed?",
        options: [
          "85 jaar",
          "89 jaar",
          "90 jaar",
          "95 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Pater Herwig Arts werd geboren in 1935.",
        isTrue: true
      },
      {
        statement: "Pater Herwig Arts overleed in de maand december.",
        isTrue: false
      },
      {
        statement: "Pater Herwig Arts werd 90 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
    topicNumber: 1,
    article: {
      title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
      summary: "Meer agenten klussen bij, en dat leidt soms tot mistoestanden. Minister van Binnenlandse Zaken Bernard Quintin (MR) wil de regels aanscherpen."
    },
    vocabulary: {
      words: [
        {
          word: "politiemensen",
          definition: "mensen die werken voor de politie",
          sentence: "De ___ werken hard om de stad veilig te houden.",
          answer: "politiemensen"
        },
        {
          word: "agenten",
          definition: "mensen die werken voor de politie",
          sentence: "De ___ houden de wijk veilig.",
          answer: "agenten"
        },
        {
          word: "minister",
          definition: "iemand die een deel van de overheid leidt",
          sentence: "De ___ heeft een nieuw plan gemaakt.",
          answer: "minister"
        },
        {
          word: "aanscherpen",
          definition: "strenger of scherper maken",
          sentence: "De regels worden ___ om problemen te voorkomen.",
          answer: "aanscherpen"
        },
        {
          word: "klussen",
          definition: "bijklussen, extra werken naast hun eigen baan",
          sentence: "Sommige mensen ___ om extra geld te verdienen.",
          answer: "klussen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werken hard om de stad veilig te houden.",
          answer: "politiemensen"
        },
        {
          sentence: "Sommige mensen ___ om extra geld te verdienen.",
          answer: "klussen"
        },
        {
          sentence: "De ___ heeft een nieuw plan gemaakt.",
          answer: "minister"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil de minister de regels aanscherpen?",
        options: [
          "Omdat er te veel agenten zijn",
          "Omdat agenten bijklussen en dat soms problemen geeft",
          "Omdat de agenten niet goed werken",
          "Omdat de minister het zelf niet weet"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het gevolg van de aanscherping van de regels?",
        options: [
          "Meer agenten gaan bijklussen",
          "Minder agenten gaan bijklussen",
          "Agenten krijgen een hoger salaris",
          "Er verandert niets"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie is Bernard Quintin?",
        options: [
          "Een agent die bijklust",
          "Een minister die de regels aanscherpt",
          "Iemand die een vechtpartij begint",
          "Iemand die nieuwe regels maakt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Agenten mogen niet bijklussen volgens de nieuwe regels.",
        isTrue: false
      },
      {
        statement: "De minister wil de regels aanscherpen omdat bijklussen soms tot problemen leidt.",
        isTrue: true
      },
      {
        statement: "Alle agenten zijn verplicht om bij te klussen naast hun werk.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "De warme bakker is steeds vaker een vrouw: Na tien broden bakken wist ik: hier word ik gelukkig van",
    topicNumber: 1,
    article: {
      title: "De warme bakker is steeds vaker een vrouw: Na tien broden bakken wist ik: hier word ik gelukkig van",
      summary: "Van een passie voor millefeuille tot ambachtelijke zuurdesembroden, steeds vaker kiezen vrouwen voor een job als bakker of patissier. In verschillende bakkersopleidingen maken ze intussen meer dan de helft van de leerlingen uit. Vrouwen hebben de finesse sneller in de vingers."
    },
    vocabulary: {
      words: [
        {
          word: "millefeuille",
          definition: "een Frans gebakje gemaakt van laagjes bladerdeeg en room",
          sentence: "Voor het dessert serveerden ze een heerlijke ___.",
          answer: "millefeuille"
        },
        {
          word: "patissier",
          definition: "iemand die taarten en andere zoete lekkernijen maakt",
          sentence: "De ___ versierde de taart met bloemen van suiker.",
          answer: "patissier"
        },
        {
          word: "bakker",
          definition: "iemand die brood en andere gebakken producten maakt",
          sentence: "De ___ maakt elke ochtend vers brood.",
          answer: "bakker"
        },
        {
          word: "ambachtelijke",
          definition: "op een traditionele manier gemaakt, vaak met de hand",
          sentence: "Deze ___ kaas komt van een kleine boerderij.",
          answer: "ambachtelijke"
        },
        {
          word: "vrouw",
          definition: "een volwassen persoon van het vrouwelijk geslacht",
          sentence: "De ___ werkt parttime in de supermarkt.",
          answer: "vrouw"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ versierde de taart met bloemen van suiker.",
          answer: "patissier"
        },
        {
          sentence: "Deze ___ kaas komt van een kleine boerderij.",
          answer: "ambachtelijke"
        },
        {
          sentence: "Voor het dessert serveerden ze een heerlijke ___.",
          answer: "millefeuille"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kiezen steeds meer vrouwen voor een baan als bakker of patissier?",
        options: [
          "Omdat het goed betaalt",
          "Omdat ze van koken houden",
          "Omdat ze kunnen werken met hun handen",
          "Omdat ze een passie voor zoetigheid hebben"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een kenmerk van vrouwelijke leerlingen in bakkersopleidingen?",
        options: [
          "Ze zijn ouder dan mannen",
          "Ze zijn in de meerderheid",
          "Ze werken alleen parttime",
          "Ze hebben meer finesse"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'finesse' in dit artikel?",
        options: [
          "Snelheid",
          "Kracht",
          "Behendigheid",
          "Zorgvuldigheid"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Vrouwen zijn de meerderheid in bakkersopleidingen.",
        isTrue: true
      },
      {
        statement: "Mannen hebben meer finesse dan vrouwen.",
        isTrue: false
      },
      {
        statement: "Een patissier maakt vooral hartige gerechten.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Bitcoinbedrijven in Ethiopië",
    topicNumber: 1,
    article: {
      title: "Bitcoinbedrijven in Ethiopië",
      summary: "Bitcoinbedrijven gebruiken stroom in Ethiopië. De mensen daar hebben weinig stroom. Bitcoinbedrijven krijgen goedkope stroom. De gewone mensen hebben problemen."
    },
    vocabulary: {
      words: [
        {
          word: "stroom",
          definition: "elektriciteit, energie",
          sentence: "Zonder ___ kun je geen lamp gebruiken.",
          answer: "stroom"
        },
        {
          word: "bitcoin",
          definition: "een soort digitaal geld",
          sentence: "Mensen gebruiken ___ om te betalen.",
          answer: "bitcoin"
        },
        {
          word: "weinig",
          definition: "niet veel, een kleine hoeveelheid",
          sentence: "Er is ___ voedsel beschikbaar.",
          answer: "weinig"
        },
        {
          word: "mensen",
          definition: "personen, individuen",
          sentence: "De ___ in deze stad hebben weinig water.",
          answer: "mensen"
        },
        {
          word: "problemen",
          definition: "moeilijkheden, uitdagingen",
          sentence: "Zij hebben grote ___ met de stroom.",
          answer: "problemen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Mensen gebruiken ___ om te betalen.",
          answer: "bitcoin"
        },
        {
          sentence: "De ___ in deze stad hebben weinig water.",
          answer: "mensen"
        },
        {
          sentence: "Zij hebben grote ___ met de stroom.",
          answer: "problemen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebruiken de bitcoinbedrijven veel?",
        options: [
          "Water",
          "Stroom",
          "Eten",
          "Geld"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat hebben de Ethiopische mensen te weinig?",
        options: [
          "Bitcoin",
          "Stroom",
          "Tijd",
          "Vrienden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een groot probleem voor de Ethiopische bevolking?",
        options: [
          "Te veel bitcoinbedrijven",
          "Te weinig water",
          "Te veel voedsel",
          "Te weinig elektriciteit"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Bitcoinbedrijven gebruiken veel stroom in Ethiopië.",
        isTrue: true
      },
      {
        statement: "Alle mensen in Ethiopië hebben genoeg water.",
        isTrue: false
      },
      {
        statement: "De bitcoinbedrijven helpen de Ethiopische mensen.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Fraude met EU-steun",
    topicNumber: 1,
    article: {
      title: "Fraude met EU-steun",
      summary: "Sommige mensen in Griekenland kregen geld van de EU, maar ze logen over hoeveel dieren ze hadden."
    },
    vocabulary: {
      words: [
        {
          word: "mensen",
          definition: "personen, meervoud van mens",
          sentence: "Deze ___ werken samen.",
          answer: "mensen"
        },
        {
          word: "dieren",
          definition: "dieren, zoals een hond of kat",
          sentence: "Ze hebben veel ___ op hun boerderij.",
          answer: "dieren"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om iets te kopen",
          sentence: "Ze kregen veel ___ van de EU.",
          answer: "geld"
        },
        {
          word: "logen",
          definition: "niet de waarheid zeggen",
          sentence: "Ze ___ over het aantal dieren.",
          answer: "logen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Deze ___ werken samen.",
          answer: "mensen"
        },
        {
          sentence: "Ze hebben veel ___ op hun boerderij.",
          answer: "dieren"
        },
        {
          sentence: "Ze kregen veel ___ van de EU.",
          answer: "geld"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging de fraude over?",
        options: [
          "over reizen",
          "over eten",
          "over dieren",
          "over muziek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat deden de mensen in Griekenland?",
        options: [
          "Ze logen over het aantal dieren",
          "Ze kochten nieuwe dieren",
          "Ze verkochten hun dieren",
          "Ze gingen op vakantie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de EU?",
        options: [
          "Een land",
          "Een groep van landen",
          "Een dier",
          "Een stad"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De mensen in Griekenland hadden te veel dieren.",
        isTrue: true
      },
      {
        statement: "De EU gaf de mensen geen geld.",
        isTrue: false
      },
      {
        statement: "De mensen logen over hoeveel dieren ze hadden.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Orkaan Melissa nadelt naar Jamaica",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa nadelt naar Jamaica",
      summary: "Orkaan Melissa komt naar Jamaica. De orkaan brengt veel wind en regen. Er is ook gevaar voor overstromingen. Er zijn al doden in andere landen."
    },
    vocabulary: {
      words: [
        {
          word: "orkaan",
          definition: "een hele grote storm met veel wind",
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        },
        {
          word: "Jamaica",
          definition: "een land in het Caribisch gebied",
          sentence: "Jamaica is een eiland in de Caribische Zee.",
          answer: "Jamaica"
        },
        {
          word: "doden",
          definition: "mensen die zijn overleden",
          sentence: "Er zijn helaas doden gevallen door de orkaan.",
          answer: "doden"
        },
        {
          word: "land",
          definition: "een gebied met een eigen regering, zoals Nederland of België",
          sentence: "Welk land ligt naast Duitsland?",
          answer: "land"
        },
        {
          word: "regen",
          definition: "water dat uit de lucht valt, vaak bij slecht weer",
          sentence: "De regen viel de hele dag.",
          answer: "regen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        },
        {
          sentence: "Er zijn helaas doden gevallen door de orkaan.",
          answer: "doden"
        },
        {
          sentence: "De regen viel de hele dag.",
          answer: "regen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is orkaan Melissa?",
        options: [
          "Bij Jamaica",
          "In Nederland",
          "Op de maan",
          "In een boek"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat veroorzaakt orkaan Melissa?",
        options: [
          "Veel wind en regen",
          "Zonnig weer",
          "Een lichte bries",
          "Koude sneeuw"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg van de orkaan?",
        options: [
          "Er zijn overstromingen",
          "De zon schijnt fel",
          "Het sneeuwt",
          "Het is erg koud"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa veroorzaakt overstromingen in Jamaica.",
        isTrue: true
      },
      {
        statement: "Nederland wordt ook getroffen door orkaan Melissa.",
        isTrue: false
      },
      {
        statement: "Er zijn al doden in andere landen door de orkaan.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Pater Herwig Arts, 90 jaar",
    topicNumber: 1,
    article: {
      title: "Pater Herwig Arts, 90 jaar",
      summary: "Geboren in 1935, overleden op 24/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "pater",
          definition: "een priester in sommige religieuze orden",
          sentence: "De ___ heeft een lange tijd geleefd.",
          answer: "pater"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Hij is 90 ___ oud.",
          answer: "jaar"
        },
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Hij is ___ in 1935.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ op 24 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ in 1935.",
          answer: "geboren"
        },
        {
          sentence: "De ___ heeft een lange tijd geleefd.",
          answer: "pater"
        },
        {
          sentence: "Hij is ___ op 24 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van pater Herwig Arts?",
        options: [
          "1935",
          "1920",
          "1945",
          "1900"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar overleed pater Herwig Arts?",
        options: [
          "2025",
          "2020",
          "2030",
          "2015"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd pater Herwig Arts?",
        options: [
          "90 jaar",
          "80 jaar",
          "100 jaar",
          "85 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Pater Herwig Arts is geboren in 1935.",
        isTrue: true
      },
      {
        statement: "Hij overleed in 2020.",
        isTrue: false
      },
      {
        statement: "Hij werd 90 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
    topicNumber: 1,
    article: {
      title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
      summary: "AI-modellen zoals ChatGPT maken onze taal vlakker, stelt computerlinguïst Tim Van de Cruys vast. Tegelijk wordt ons eigen taalgevoel misschien nog belangrijker door AI. 'Hoe beter je de taal al beheerst, hoe beter een AI-model voor jou zal werken.'"
    },
    vocabulary: {
      words: [
        {
          word: "computer",
          definition: "een apparaat waarmee je kunt internetten en werken",
          sentence: "Ik gebruik mijn ___ om te werken.",
          answer: "computer"
        },
        {
          word: "taal",
          definition: "de manier waarop mensen met elkaar praten",
          sentence: "Welke ___ spreek jij het best?",
          answer: "taal"
        },
        {
          word: "taalgevoel",
          definition: "het natuurlijke gevoel voor wat goed of fout is in een taal",
          sentence: "Zijn ___ is heel goed, hij maakt nooit fouten.",
          answer: "taalgevoel"
        },
        {
          word: "taal",
          definition: "de manier waarop mensen met elkaar praten",
          sentence: "In welk land wordt deze ___ gesproken?",
          answer: "taal"
        },
        {
          word: "modellen",
          definition: "versies of soorten van iets, bijvoorbeeld van een computerprogramma",
          sentence: "De nieuwe ___ van de auto zijn erg populair.",
          answer: "modellen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Welke ___ spreek jij het best?",
          answer: "taal"
        },
        {
          sentence: "Zijn ___ is heel goed, hij maakt nooit fouten.",
          answer: "taalgevoel"
        },
        {
          sentence: "De nieuwe ___ van de auto zijn erg populair.",
          answer: "modellen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'taalgevoel'?",
        options: [
          "een soort gevoel",
          "een soort taal",
          "een soort computer",
          "een soort kunst"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een computer?",
        options: [
          "een dier",
          "een machine",
          "een gebouw",
          "een land"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een model?",
        options: [
          "een persoon",
          "een auto",
          "een soort van iets",
          "een stad"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "AI maakt taal eenvoudiger.",
        isTrue: true
      },
      {
        statement: "Taal is alleen voor ouderen.",
        isTrue: false
      },
      {
        statement: "Een computer kan helpen met taal leren.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "De warme bakker is steeds vaker een vrouw",
    topicNumber: 1,
    article: {
      title: "De warme bakker is steeds vaker een vrouw",
      summary: "Veel vrouwen werken nu als bakker of patissier. In opleidingen zijn er steeds meer vrouwen. Vrouwen kunnen dit werk goed doen."
    },
    vocabulary: {
      words: [
        {
          word: "warm",
          definition: "niet koud, een hoge temperatuur hebbend",
          sentence: "Het brood is ___ en vers.",
          answer: "warm"
        },
        {
          word: "werken",
          definition: "een taak uitvoeren, een job hebben",
          sentence: "Zij ___ in de keuken.",
          answer: "werken"
        },
        {
          word: "bakker",
          definition: "iemand die brood bakt",
          sentence: "De ___ bakt brood en koek.",
          answer: "bakker"
        },
        {
          word: "vak",
          definition: "een beroep, een soort werk",
          sentence: "Het bakkers___ leert men op school.",
          answer: "vak"
        },
        {
          word: "vrouwen",
          definition: "vrouwelijke personen",
          sentence: "De ___ werken in de bakkerij.",
          answer: "vrouwen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij ___ in de keuken.",
          answer: "werken"
        },
        {
          sentence: "Het bakkers___ leert men op school.",
          answer: "vak"
        },
        {
          sentence: "De ___ werken in de bakkerij.",
          answer: "vrouwen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'steeds'?",
        options: [
          "snel",
          "vaak",
          "steeds vaker",
          "meer en meer"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een 'bakker'?",
        options: [
          "iemand die brood bakt",
          "iemand die taarten maakt",
          "iemand die koffie zet",
          "iemand die soep kookt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen vrouwen in dit verhaal?",
        options: [
          "Ze bakken brood",
          "Ze werken in bakkerijen",
          "Ze zijn allemaal moeders",
          "Ze zijn allemaal leraars"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Vrouwen werken als bakker.",
        isTrue: true
      },
      {
        statement: "Alleen mannen zijn bakkers.",
        isTrue: false
      },
      {
        statement: "Steeds meer vrouwen worden bakker.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
    topicNumber: 1,
    article: {
      title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
      summary: "Spotgoedkope waterkrachtenergie lokt tientallen bitcoinbedrijven naar de Ethiopische hoofdstad Addis Abeba. Ze leveren het Afrikaanse land amper geld en jobs op. De helft van de Ethiopiërs moet ondertussen zonder stroom en drinkbaar water overleven."
    },
    vocabulary: {
      words: [
        {
          word: "megadam",
          definition: "Een zeer groot stuwmeer of dam, vaak gebouwd voor waterkracht of waterbeheer.",
          sentence: "De nieuwe ___ in Ethiopië is een van de grootste in Afrika.",
          answer: "megadam"
        },
        {
          word: "jobs",
          definition: "Werkgelegenheid; betaalde posities of functies binnen een organisatie.",
          sentence: "Het project heeft weinig nieuwe ___ opgeleverd voor de lokale bevolking.",
          answer: "jobs"
        },
        {
          word: "Addis Abeba",
          definition: "De hoofdstad van Ethiopië, gelegen in het hoogland van het land.",
          sentence: "___ is de hoofdstad van Ethiopië en een belangrijk cultureel centrum.",
          answer: "Addis Abeba"
        },
        {
          word: "drinkbaar",
          definition: "Geschikt om te drinken; veilig voor consumptie zonder gevaar voor de gezondheid.",
          sentence: "Het water is niet langer ___ door de vervuiling.",
          answer: "drinkbaar"
        },
        {
          word: "stroom",
          definition: "Elektriciteit; de stroom van elektrische energie.",
          sentence: "Veel mensen hebben geen toegang tot ___ in hun huizen.",
          answer: "stroom"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ in Ethiopië is een van de grootste in Afrika.",
          answer: "megadam"
        },
        {
          sentence: "Het project heeft weinig nieuwe ___ opgeleverd voor de lokale bevolking.",
          answer: "jobs"
        },
        {
          sentence: "Het water is niet langer ___ door de vervuiling.",
          answer: "drinkbaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste reden dat bitcoinbedrijven naar Addis Abeba zijn gekomen?",
        options: [
          "Goedkope arbeidskrachten",
          "Overvloed aan stroom",
          "Gunstig belastingklimaat",
          "Goedkope waterkrachtenergie"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een van de gevolgen voor de lokale bevolking volgens de samenvatting?",
        options: [
          "Ze profiteren van de bitcoinhandel",
          "Ze hebben geen toegang tot drinkbaar water",
          "Ze krijgen goedkope stroom van de dam",
          "Ze worden rijk door de bitcoinhandel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat wordt er gezegd over de bijdrage van deze bedrijven aan Ethiopië?",
        options: [
          "Ze leveren veel banen op",
          "Ze dragen bij aan de infrastructuur",
          "Ze leveren amper geld en jobs op",
          "Ze stimuleren de lokale economie enorm"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Ethiopische megadam biedt voornamelijk voordelen voor de lokale bevolking.",
        isTrue: false
      },
      {
        statement: "Bitcoinbedrijven in Addis Abeba maken gebruik van goedkope waterkrachtenergie.",
        isTrue: true
      },
      {
        statement: "De meerderheid van de Ethiopische bevolking heeft direct profijt van de bitcoinminingactiviteiten.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
    topicNumber: 1,
    article: {
      title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
      summary: "Een georganiseerde misdaadgroep in Griekenland haalde op frauduleuze manier bijna 20 miljoen euro Europese landbouwsubsidies binnen. De verdachten overdreven het aantal dieren waarvoor ze geld aanvroegen."
    },
    vocabulary: {
      words: [
        {
          word: "fraude",
          definition: "opzettelijke misleiding of bedrog voor financieel gewin",
          sentence: "De politie ontdekte een grote geval van ___ in de subsidieaanvragen.",
          answer: "fraude"
        },
        {
          word: "subsidies",
          definition: "financiële steun van de overheid voor een specifiek doel",
          sentence: "Boeren kunnen vaak aanspraak maken op ___ voor duurzame landbouw.",
          answer: "subsidies"
        },
        {
          word: "verdachten",
          definition: "personen die worden verdacht van een misdrijf",
          sentence: "De ___ ontkennen alle aanklachten.",
          answer: "verdachten"
        },
        {
          word: "dieren",
          definition: "levende wezens die niet mens zijn, zoals katten of honden",
          sentence: "De opvang bood onderdak aan tientallen ___.",
          answer: "dieren"
        },
        {
          word: "misdaad",
          definition: "een illegale activiteit die strafbaar is",
          sentence: "Hij is veroordeeld voor zijn rol in de georganiseerde ___.",
          answer: "misdaad"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De politie ontdekte een grote geval van ___ in de subsidieaanvragen.",
          answer: "fraude"
        },
        {
          sentence: "De ___ ontkennen alle aanklachten.",
          answer: "verdachten"
        },
        {
          sentence: "De opvang bood onderdak aan tientallen ___.",
          answer: "dieren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was het hoofddoel van de frauduleuze activiteiten in Griekenland?",
        options: [
          "Het stelen van landbouwgrond",
          "Het illegaal verkrijgen van EU-subsidies",
          "Het opzetten van een nepboerderij",
          "Het vervalsen van dierenaantallen"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe probeerden de fraudeurs hun misdaad te verbergen?",
        options: [
          "Door dieren te verbergen",
          "Door valse documenten te gebruiken",
          "Door naar het buitenland te vluchten",
          "Door getuigen te bedreigen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was een gevolg van deze fraudezaak?",
        options: [
          "De EU schafte alle subsidies af",
          "Griekenland moest miljoenen terugbetalen",
          "Alle verdachten werden vrijgesproken",
          "De veestapel in Europa werd gehalveerd"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De fraude was gericht op het verkrijgen van EU-subsidies voor landbouw.",
        isTrue: true
      },
      {
        statement: "Alle verdachten in deze zaak zijn uiteindelijk veroordeeld tot gevangenisstraffen.",
        isTrue: false
      },
      {
        statement: "Dit incident leidde tot een tijdelijke stopzetting van EU-subsidies aan Griekenland.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Jamaica maakt zich op voor orkaan Melissa, de zwaarste van het jaar",
    topicNumber: 1,
    article: {
      title: "Jamaica maakt zich op voor orkaan Melissa, de zwaarste van het jaar",
      summary: "Een ramp lijkt onafwendbaar in Jamaica, nu orkaan Melissa op drie manieren kan toeslaan: met stormvloed, immense regenval en verwoestende wind. Op Haïti en de Dominicaanse Republiek vielen al vier doden."
    },
    vocabulary: {
      words: [
        {
          word: "immense",
          definition: "Zeer groot of enorm in omvang of hoeveelheid.",
          sentence: "De storm bracht ___ hoeveelheden regen.",
          answer: "immense"
        },
        {
          word: "regenval",
          definition: "De hoeveelheid neerslag die in een bepaalde periode valt.",
          sentence: "De hevige ___ zorgde voor overstromingen in de stad.",
          answer: "regenval"
        },
        {
          word: "verwoestende",
          definition: "Iets dat grote schade of vernieling veroorzaakt.",
          sentence: "De orkaan had een ___ effect op de kuststad.",
          answer: "verwoestende"
        },
        {
          word: "doden",
          definition: "Mensen die zijn overleden, meestal als gevolg van een incident.",
          sentence: "Er vielen verschillende ___ na de aardbeving.",
          answer: "doden"
        },
        {
          word: "orkaan",
          definition: "Een zeer zware storm met extreme windsnelheden, vaak voorkomend in tropische gebieden.",
          sentence: "De orkaan veroorzaakte veel schade aan de kust.",
          answer: "orkaan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De orkaan had een ___ effect op de kuststad.",
          answer: "verwoestende"
        },
        {
          sentence: "Er vielen verschillende ___ na de aardbeving.",
          answer: "doden"
        },
        {
          sentence: "De storm bracht ___ hoeveelheden regen.",
          answer: "immense"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste dreiging van orkaan Melissa voor Jamaica?",
        options: [
          "Aardverschuivingen",
          "Tsunami's",
          "Stormvloed en overstromingen",
          "Extreme hittegolven"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel doden vielen er reeds in Haïti en de Dominicaanse Republiek als gevolg van orkaan Melissa?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een van de manieren waarop orkaan Melissa toeslaat volgens de samenvatting?",
        options: [
          "Door extreme droogte",
          "Met zware stormvloed",
          "Met tornado's",
          "Door aardbevingen te triggeren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is de eerste orkaan van het jaar die Jamaica treft.",
        isTrue: false
      },
      {
        statement: "De storm heeft al doden veroorzaakt in buurlanden.",
        isTrue: true
      },
      {
        statement: "Orkanen kunnen alleen toeslaan met extreme windsnelheden.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Pater Herwig Arts, 90 jaar",
    topicNumber: 1,
    article: {
      title: "Pater Herwig Arts, 90 jaar",
      summary: "Geboren in 1935, overleden op 24/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "pater",
          definition: "een priester of geestelijke, specifiek in een katholieke context",
          sentence: "De ___ van het klooster leidde de mis.",
          answer: "pater"
        },
        {
          word: "geboren",
          definition: "het begin van iemands leven; ter wereld komen",
          sentence: "Hij werd ___ in 1935.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "gestorven; niet meer in leven",
          sentence: "Hij is vorige week ___ na een lang ziekbed.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 of 366 dagen, 12 maanden",
          sentence: "Hij is negentig ___ oud geworden.",
          answer: "jaar"
        },
        {
          word: "overleden",
          definition: "gestorven; niet meer in leven",
          sentence: "Hij is helaas gisteren ___.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd ___ in 1935.",
          answer: "geboren"
        },
        {
          sentence: "Hij is helaas gisteren ___.",
          answer: "overleden"
        },
        {
          sentence: "Hij is negentig ___ oud geworden.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden' in deze context?",
        options: [
          "gestorven",
          "vernietigd",
          "vergeten",
          "gevierd"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Pater Herwig Arts op het moment van overlijden?",
        options: [
          "90 jaar",
          "100 jaar",
          "85 jaar",
          "95 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Pater Herwig Arts geboren?",
        options: [
          "1935",
          "1925",
          "1945",
          "1930"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Pater Herwig Arts is in 2025 overleden.",
        isTrue: true
      },
      {
        statement: "Hij is geboren in 1930.",
        isTrue: false
      },
      {
        statement: "Hij is 90 jaar oud geworden.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
    topicNumber: 1,
    article: {
      title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
      summary: "Meer agenten klussen bij, en dat leidt soms tot misstanden. Minister van Binnenlandse Zaken Bernard Quintin (MR) wil de regels aanscherpen."
    },
    vocabulary: {
      words: [
        {
          word: "aanscherpen",
          definition: "Strenger of scherper maken, bijvoorbeeld van regels of wetten",
          sentence: "De minister wil de bestaande regels ___ om misstanden tegen te gaan.",
          answer: "aanscherpen"
        },
        {
          word: "regels",
          definition: "Voorschriften of reglementen die moeten worden gevolgd",
          sentence: "De minister wil nieuwe ___ introduceren om problemen te voorkomen.",
          answer: "regels"
        },
        {
          word: "leidt",
          definition: "Veroorzaakt of resulteert in (van 'leiden tot')",
          sentence: "Onvoldoende toezicht ___ soms tot problemen.",
          answer: "leidt"
        },
        {
          word: "agenten",
          definition: "Politieagenten; personen die bij de politie werken",
          sentence: "Meer ___ nemen deel aan bijklussen, wat soms leidt tot problemen.",
          answer: "agenten"
        },
        {
          word: "vechtpartij",
          definition: "Een fysiek conflict of gevecht tussen personen",
          sentence: "Na een ___ onder collega's, worden nieuwe regels overwogen.",
          answer: "vechtpartij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Meer ___ nemen deel aan bijklussen, wat soms leidt tot problemen.",
          answer: "agenten"
        },
        {
          sentence: "Na een ___ onder collega's, worden nieuwe regels overwogen.",
          answer: "vechtpartij"
        },
        {
          sentence: "De minister wil de bestaande regels ___ om misstanden tegen te gaan.",
          answer: "aanscherpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil de minister de regels aanscherpen?",
        options: [
          "Omdat er te weinig agenten zijn",
          "Omdat bijklussen soms leidt tot conflicten en problemen",
          "Omdat de politie niet genoeg betaalt",
          "Omdat het ministerie nieuwe wetten wil testen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'bijklussen' in deze context?",
        options: [
          "Het schoonmaken van politieauto's na dienst",
          "Het nemen van extra betaald werk buiten de hoofdbaan om",
          "Het trainen voor fysieke fitheid",
          "Het deelnemen aan protestacties"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de minister in deze kwestie?",
        options: [
          "Hij organiseert wekelijkse vechtpartijen voor teamontwikkeling",
          "Hij biedt financiële steun aan agenten die bijklussen",
          "Hij evalueert nieuwe technologie voor politiewerk",
          "Hij overweegt regels aan te scherpen om misstanden te voorkomen"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Bijklussen door politieagenten wordt altijd gesteund door het management.",
        isTrue: false
      },
      {
        statement: "Het aanscherpen van regels kan helpen om problemen in de toekomst te voorkomen.",
        isTrue: true
      },
      {
        statement: "De minister van Binnenlandse Zaken is verantwoordelijk voor het direct aanstellen van politieagenten.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "De warme bakker is steeds vaker een vrouw: “Na tien broden bakken wist ik: hier word ik gelukkig van”",
    topicNumber: 1,
    article: {
      title: "De warme bakker is steeds vaker een vrouw: “Na tien broden bakken wist ik: hier word ik gelukkig van”",
      summary: "Van een passie voor millefeuille tot ambachtelijke zuurdesembroden, steeds vaker kiezen vrouwen voor een job als bakker of patissier. In verschillende bakkersopleidingen maken ze intussen meer dan de helft van de leerlingen uit. “Vrouwen hebben de finesse sneller in de vingers.”"
    },
    vocabulary: {
      words: [
        {
          word: "finesse",
          definition: "de aanwezigheid van stijl, elegantie en precisie in iets",
          sentence: "De danser beweegt met grote ___.",
          answer: "finesse"
        },
        {
          word: "vrouw",
          definition: "een volwassen mens van het vrouwelijk geslacht",
          sentence: "De ___ werkt parttime in de zorg.",
          answer: "vrouw"
        },
        {
          word: "bakker",
          definition: "een persoon die brood en ander gebak bereidt als beroep",
          sentence: "De ___ werkt vaak in de vroege ochtend.",
          answer: "bakker"
        },
        {
          word: "millefeuille",
          definition: "een Frans gebakje gemaakt van lajes bladerdeeg met crème ertussen, letterlijk vertaald 'duizend lagen'",
          sentence: "De ___ smaakte hemels met de karamel.",
          answer: "millefeuille"
        },
        {
          word: "ambachtelijke",
          definition: "gemaakt met traditionele, handmatige methoden in plaats van door machines",
          sentence: "De ___ kaas was heerlijk bij het brood.",
          answer: "ambachtelijke"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De danser beweegt met grote ___.",
          answer: "finesse"
        },
        {
          sentence: "De ___ werkt parttime in de zorg.",
          answer: "vrouw"
        },
        {
          sentence: "De ___ kaas was heerlijk bij het brood.",
          answer: "ambachtelijke"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kiezen steeds meer vrouwen voor een baan als bakker of patissier?",
        options: [
          "Omdat ze van koken houden.",
          "Vanwege de creativiteit en precisie die het vak vereist.",
          "Omdat het werk goed betaalt.",
          "Omdat ze in een bakkerij zijn opgegroeid."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat maakt patisserie tot een geschikt vak voor mensen met oog voor detail?",
        options: [
          "Het is niet geschikt, het is te chaotisch.",
          "Omdat je moet kunnen multitasken.",
          "Omdat het precisiewerk vereist, net als bij een kunstenaar.",
          "Het is alleen geschikt voor mensen die van zoet houden."
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom zijn vrouwen volgens de tekst succesvol in patisserie?",
        options: [
          "Ze hebben sterkere spieren.",
          "Ze zijn niet succesvoller dan mannen.",
          "Ze hebben een natuurlijk talent voor precisie en geduld.",
          "Ze werken alleen in teams."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Vrouwen domineren nu de bakkerijopleidingen.",
        isTrue: false
      },
      {
        statement: "Patisserie is een vak dat vooral geduld en creativiteit vereist.",
        isTrue: true
      },
      {
        statement: "Mannen hebben over het algemeen meer fysieke kracht, wat nodig is in een bakkerij.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
    topicNumber: 1,
    article: {
      title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
      summary: "Spotgoedkope waterkrachtenergie lokt tientallen bitcoinbedrijven naar de Ethiopische hoofdstad Addis Abeba. Ze leveren het Afrikaanse land amper geld en jobs op. De helft van de Ethiopiërs moet ondertussen zonder stroom en drinkbaar water overleven."
    },
    vocabulary: {
      words: [
        {
          word: "megadam",
          definition: "een heel grote dam",
          sentence: "De ___ is van steen en beton.",
          answer: "megadam"
        },
        {
          word: "water",
          definition: "vloeistof zonder kleur en geur, om te drinken of te gebruiken",
          sentence: "Schoon ___ is belangrijk voor gezondheid.",
          answer: "water"
        },
        {
          word: "drinkbaar",
          definition: "geschikt om te drinken",
          sentence: "Het water is niet ___.",
          answer: "drinkbaar"
        },
        {
          word: "bedrijven",
          definition: "organisaties die producten of diensten verkopen",
          sentence: "Sommige ___ zijn heel groot en hebben veel werknemers.",
          answer: "bedrijven"
        },
        {
          word: "bitcoinboys",
          definition: "mensen die veel met bitcoin bezig zijn",
          sentence: "De ___ zijn vooral mannen.",
          answer: "bitcoinboys"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ is van steen en beton.",
          answer: "megadam"
        },
        {
          sentence: "Het water is niet ___.",
          answer: "drinkbaar"
        },
        {
          sentence: "Sommige ___ zijn heel groot en hebben veel werknemers.",
          answer: "bedrijven"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een megadam?",
        options: [
          "Een klein stuwmeer",
          "Een enorme dam",
          "Een soort computer",
          "Een Ethiopisch gerecht"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom komen bitcoinbedrijven naar Ethiopië?",
        options: [
          "Om de natuur te beschermen",
          "Omdat de energie daar heel goedkoop is",
          "Omdat ze daar vrienden hebben",
          "Omdat Ethiopië zo mooi is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een probleem voor de lokale bevolking?",
        options: [
          "Ze hebben te veel stroom",
          "Ze hebben geen stroom en geen drinkwater",
          "Ze krijgen te veel geld van de bedrijven",
          "Ze hebben te veel werk"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De bitcoinbedrijven helpen de lokale bevolking.",
        isTrue: false
      },
      {
        statement: "Ethiopië is een land in Afrika.",
        isTrue: true
      },
      {
        statement: "De megadam geeft stroom aan alle Ethiopiërs.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
    topicNumber: 1,
    article: {
      title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
      summary: "Een groep in Griekenland heeft bijna 20 miljoen euro aan EU-subsidies gekregen door te frauderen. Zij deden alsof ze veel meer dieren hadden dan in werkelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "meer",
          definition: "Een grotere hoeveelheid, extra.",
          sentence: "Hij heeft ___ boeken dan ik, dus zijn kast is voller.",
          answer: "meer"
        },
        {
          word: "geiten",
          definition: "Een dier dat melk geeft en op boerderijen leeft.",
          sentence: "De boer heeft veel ___ die melk geven.",
          answer: "geiten"
        },
        {
          word: "schapen",
          definition: "Een dier met wol dat op boerderijen leeft.",
          sentence: "De herder heeft veel ___ die hij scheert voor wol.",
          answer: "schapen"
        },
        {
          word: "alsof",
          definition: "Een woord om aan te geven dat iets niet echt is, maar alleen lijkt zo.",
          sentence: "Hij gedraagt zich ___ hij de baas is, maar dat is hij niet.",
          answer: "alsof"
        },
        {
          word: "subsidies",
          definition: "Geld dat de overheid geeft voor een bepaald doel.",
          sentence: "De boer ontvangt ___ van de EU om zijn land te verbeteren.",
          answer: "subsidies"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De boer ontvangt ___ van de EU om zijn land te verbeteren.",
          answer: "subsidies"
        },
        {
          sentence: "Hij heeft ___ boeken dan ik, dus zijn kast is voller.",
          answer: "meer"
        },
        {
          sentence: "De boer heeft veel ___ die melk geven.",
          answer: "geiten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging de fraude over?",
        options: [
          "Over te veel dieren vragen",
          "Over te weinig dieren vragen",
          "Over het stelen van dieren",
          "Over het kopen van dieren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is 'subsidies'?",
        options: [
          "Een soort belasting",
          "Geld van de overheid",
          "Een soort verzekering",
          "Een soort lening"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het tegenovergestelde van 'meer'?",
        options: [
          "Minder",
          "Meer",
          "Veel",
          "Weinig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De groep in Griekenland kreeg geld van de EU.",
        isTrue: true
      },
      {
        statement: "De dieren waren echt en vielen de groep aan.",
        isTrue: false
      },
      {
        statement: "De groep had minder dieren dan ze zeiden.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Orkaan Melissa treft Jamaica",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa treft Jamaica",
      summary: "Orkaan Melissa brengt veel schade in Jamaica. Er is veel regen en harde wind. Er zijn ook overstromingen. Er zijn al vier doden in buurlanden."
    },
    vocabulary: {
      words: [
        {
          word: "doden",
          definition: "mensen die zijn overleden",
          sentence: "Helaas waren er meerdere doden door de orkaan.",
          answer: "doden"
        },
        {
          word: "schade",
          definition: "wat kapot of beschadigd is",
          sentence: "De storm veroorzaakte veel schade aan huizen en straten.",
          answer: "schade"
        },
        {
          word: "buurland",
          definition: "een land dat naast een ander land ligt",
          sentence: "Haïti is een buurland van de Dominicaanse Republiek.",
          answer: "buurland"
        },
        {
          word: "land",
          definition: "een gebied met eigen regering, zoals Nederland of België",
          sentence: "Jamaica is een eiland, maar het is ook een land.",
          answer: "land"
        },
        {
          word: "orkaan",
          definition: "een hele zware storm met veel wind en regen",
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De storm veroorzaakte veel schade aan huizen en straten.",
          answer: "schade"
        },
        {
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        },
        {
          sentence: "Helaas waren er meerdere doden door de orkaan.",
          answer: "doden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is orkaan Melissa?",
        options: [
          "Een soort dier",
          "Een type auto",
          "Een zware storm",
          "Een feestdag"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar heeft orkaan Melissa veel effect gehad?",
        options: [
          "Alleen in Jamaica",
          "Alleen in de Verenigde Staten",
          "In Jamaica en buurlanden",
          "Alleen in Europa"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een gevolg van de orkaan?",
        options: [
          "Mensen verhuizen naar de maan",
          "Er is veel schade en er zijn doden",
          "De orkaan brengt alleen regen",
          "De orkaan zorgt voor feest"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa veroorzaakt alleen regen.",
        isTrue: false
      },
      {
        statement: "Er zijn meerdere doden gevallen door de orkaan.",
        isTrue: true
      },
      {
        statement: "Orkaan Melissa is een feestelijke gebeurtenis in Jamaica.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Pater Herwig Arts, 90 jaar",
    topicNumber: 1,
    article: {
      title: "Pater Herwig Arts, 90 jaar",
      summary: "Geboren in 1935, overleden op 24/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Arts",
          definition: "een achternaam, hier van de persoon",
          sentence: "Zijn achternaam is ___.",
          answer: "Arts"
        },
        {
          word: "Pater",
          definition: "een priester, vooral in een klooster",
          sentence: "De ___ geeft leiding aan de gemeenschap.",
          answer: "Pater"
        },
        {
          word: "1935",
          definition: "het jaar negentienhonderdvijfendertig",
          sentence: "Hij is geboren in ___.",
          answer: "1935"
        },
        {
          word: "2025",
          definition: "het jaar tweeduizendvijfentwintig",
          sentence: "Hij overleed in ___.",
          answer: "2025"
        },
        {
          word: "90",
          definition: "het getal negentig, hier de leeftijd",
          sentence: "Hij werd ___ jaar oud.",
          answer: "90"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is geboren in ___.",
          answer: "1935"
        },
        {
          sentence: "Hij werd ___ jaar oud.",
          answer: "90"
        },
        {
          sentence: "Zijn achternaam is ___.",
          answer: "Arts"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Pater Herwig Arts geboren?",
        options: [
          "1920",
          "1935",
          "1940",
          "1945"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud werd Pater Herwig Arts?",
        options: [
          "80 jaar",
          "85 jaar",
          "89 jaar",
          "90 jaar"
        ],
        correctAnswer: 4
      },
      {
        question: "Op welke datum overleed Pater Herwig Arts?",
        options: [
          "24 oktober 2025",
          "24 november 2025",
          "24 december 2025",
          "24 januari 2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Pater Herwig Arts is geboren in 1935.",
        isTrue: true
      },
      {
        statement: "Hij overleed in het jaar 2024.",
        isTrue: false
      },
      {
        statement: "Hij werd 90 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
    topicNumber: 1,
    article: {
      title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
      summary: "AI-modellen zoals ChatGPT maken onze taal vlakker, stelt computerlinguïst Tim Van de Cruys vast. Tegelijk wordt ons eigen taalgevoel misschien nog belangrijker door AI. Hoe beter je de taal al beheerst, hoe beter een AI-model voor jou zal werken."
    },
    vocabulary: {
      words: [
        {
          word: "Helpt",
          definition: "Helpt betekent dat het ondersteunt of bijdraagt aan iets.",
          sentence: "Als iemand je ___ bij je huiswerk, wordt het werk makkelijker.",
          answer: "helpt"
        },
        {
          word: "taal",
          definition: "Taal is de manier waarop mensen met elkaar communiceren, zoals door te praten of te schrijven.",
          sentence: "Welke ___ spreek jij het beste? Nederlands, Engels of Spaans?",
          answer: "taal"
        },
        {
          word: "belangrijker",
          definition: "Belangrijker betekent dat iets meer waarde of betekenis heeft dan iets anders.",
          sentence: "Is gezondheid ___ dan geld? Ja, want zonder gezondheid kan je niet genieten van geld.",
          answer: "belangrijker"
        },
        {
          word: "is",
          definition: "Is is een vorm van 'zijn', dat gebruikt wordt om te zeggen wat iets of iemand is.",
          sentence: "Mijn naam ___ John, en ik kom uit Engeland.",
          answer: "is"
        },
        {
          word: "wordt",
          definition: "Wordt is een werkwoordsvorm die aangeeft dat iets gebeurt of verandert.",
          sentence: "Hij ___ elke dag beter in Nederlands na veel oefenen.",
          answer: "wordt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ elke dag beter in Nederlands na veel oefenen.",
          answer: "wordt"
        },
        {
          sentence: "Als iemand je ___ bij je huiswerk, wordt het werk makkelijker.",
          answer: "helpt"
        },
        {
          sentence: "Welke ___ spreek jij het beste? Nederlands, Engels of Spaans?",
          answer: "taal"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het woord 'helpt' in deze context?",
        options: [
          "Het betekent 'stopt' of 'eindigt'",
          "Het betekent 'ondersteunt' of 'assisteert'",
          "Het betekent 'verwondt' of 'beschadigt'",
          "Het betekent 'vergeet' of 'negeert'"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is taal belangrijk volgens de tekst?",
        options: [
          "Omdat taal alleen voor schrijven wordt gebruikt",
          "Omdat taal helpt bij communicatie en begrip",
          "Omdat taal alleen in boeken bestaat",
          "Omdat taal alleen door computers wordt gebruikt"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe beïnvloedt AI onze taalvaardigheid?",
        options: [
          "Het maakt taal volledig irrelevant",
          "Het vermindert onze behoefte om taal te leren",
          "Het versterkt het belang van goed taalgebruik",
          "Het heeft helemaal geen effect op taal"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "AI maakt taal minder belangrijk voor mensen.",
        isTrue: false
      },
      {
        statement: "Goede kennis van taal helpt je om AI beter te gebruiken.",
        isTrue: true
      },
      {
        statement: "AI kan alle talen ter wereld perfect vertalen zonder fouten.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "De warme bakker is steeds vaker een vrouw",
    topicNumber: 1,
    article: {
      title: "De warme bakker is steeds vaker een vrouw",
      summary: "Steeds meer vrouwen kiezen voor een baan als bakker of patissier. In veel bakkersopleidingen zijn vrouwen in de meerderheid. Vrouwen hebben vaak een goede aanleg voor dit werk."
    },
    vocabulary: {
      words: [
        {
          word: "bakker",
          definition: "iemand die brood bakt",
          sentence: "De ___ maakt brood en taarten.",
          answer: "bakker"
        },
        {
          word: "opleiding",
          definition: "een cursus of studie om iets te leren",
          sentence: "De ___ tot bakker duurt twee jaar.",
          answer: "opleiding"
        },
        {
          word: "steeds",
          definition: "meer en meer, in toenemende mate",
          sentence: "___ vaker zie je vrouwen in de bakkerij.",
          answer: "steeds"
        },
        {
          word: "warm",
          definition: "niet koud, met een hoge temperatuur",
          sentence: "Het brood is nog ___ als het uit de oven komt.",
          answer: "warm"
        },
        {
          word: "meerderheid",
          definition: "het grootste deel, meer dan de helft",
          sentence: "In de klas is de ___ van de leerlingen vrouw.",
          answer: "meerderheid"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het brood is nog ___ als het uit de oven komt.",
          answer: "warm"
        },
        {
          sentence: "In de klas is de ___ van de leerlingen vrouw.",
          answer: "meerderheid"
        },
        {
          sentence: "De ___ maakt brood en taarten.",
          answer: "bakker"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'steeds' in deze context?",
        options: [
          "nooit",
          "soms",
          "steeds vaker",
          "altijd"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "het weer",
          "bouwen",
          "bakkerijen",
          "reizen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'meerderheid'?",
        options: [
          "het kleinste deel",
          "het grootste deel",
          "de helft",
          "een klein beetje"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De tekst gaat over bouwen.",
        isTrue: false
      },
      {
        statement: "Steeds meer vrouwen werken als bakker.",
        isTrue: true
      },
      {
        statement: "Een meerderheid is het kleinste deel.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
    topicNumber: 1,
    article: {
      title: "Terwijl bitcoinboys profiteren van Ethiopische megadam, zit de lokale bevolking in het donker",
      summary: "Spotgoedkope waterkrachtenergie lokt tientallen bitcoinbedrijven naar de Ethiopische hoofdstad Addis Abeba. Ze leveren het Afrikaanse land amper geld en jobs op. De helft van de Ethiopiërs moet ondertussen zonder stroom en drinkbaar water overleven."
    },
    vocabulary: {
      words: [
        {
          word: "jobs",
          definition: "Werkgelegenheid; betaald werk dat iemand heeft.",
          sentence: "Veel jongeren in de stad kunnen geen ___ vinden die bij hun opleiding past.",
          answer: "jobs"
        },
        {
          word: "energie",
          definition: "De kracht of capaciteit om werk te verrichten, zoals elektriciteit of kracht.",
          sentence: "Zonder voldoende ___ kan een land zich niet goed ontwikkelen.",
          answer: "energie"
        },
        {
          word: "drinkbaar",
          definition: "Veilig of geschikt om te drinken (meestal over water).",
          sentence: "Na de overstroming was het water niet meer ___ en moest het worden gezuiverd.",
          answer: "drinkbaar"
        },
        {
          word: "bitcoinboys",
          definition: "Mensen die veel bezitten of handelen in de digitale munt bitcoin.",
          sentence: "De ___ verdienden veel geld door te handelen in cryptocurrency.",
          answer: "bitcoinboys"
        },
        {
          word: "megadam",
          definition: "Een heel groot stuwmeer of dam, vaak gebouwd om energie op te wekken.",
          sentence: "De nieuwe ___ in Ethiopië voorziet een groot gebied van elektriciteit.",
          answer: "megadam"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Veel jongeren in de stad kunnen geen ___ vinden die bij hun opleiding past.",
          answer: "jobs"
        },
        {
          sentence: "De ___ verdienden veel geld door te handelen in cryptocurrency.",
          answer: "bitcoinboys"
        },
        {
          sentence: "De nieuwe ___ in Ethiopië voorziet een groot gebied van elektriciteit.",
          answer: "megadam"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een belangrijk effect van de megadam in Ethiopië op de lokale bevolking?",
        options: [
          "Ze krijgen betere toegang tot elektriciteit en water.",
          "Ze verliezen hun land en hebben geen stroom.",
          "Ze beginnen allemaal met bitcoin mining.",
          "Ze krijgen nieuwe jobs in de bouwsector."
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom komen bitcoinbedrijven naar Addis Abeba?",
        options: [
          "Omdat de stad bekend staat om zijn nachtleven.",
          "Omdat de Ethiopische overheid hen uitnodigt.",
          "Omdat de stroom daar spotgoedkoop is.",
          "Omdat de lokale bevolking daarom vraagt."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat voor soort energie wekt de megadam vooral op?",
        options: [
          "Zonne-energie",
          "Windenergie",
          "Waterkracht",
          "Kernenergie"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bitcoinbedrijven in Addis Abeba zorgen voor veel nieuwe banen voor de lokale bevolking.",
        isTrue: false
      },
      {
        statement: "Ethiopiërs die geen stroom hebben, missen ook vaak schoon drinkwater.",
        isTrue: true
      },
      {
        statement: "De megadam levert direct drinkbaar water aan omliggende dorpen.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
    topicNumber: 1,
    article: {
      title: "Fraude met EU-subsidies: plots telde Kreta veel meer schapen en geiten",
      summary: "Een criminele groep in Griekenland heeft op fraudeleuze wijze bijna 20 miljoen euro aan EU-subsidies ontvangen. De verdachten logen over het aantal dieren in hun aanvraag."
    },
    vocabulary: {
      words: [
        {
          word: "ontvangen",
          definition: "krijgen, in bezit nemen",
          sentence: "Ze hebben de subsidie ___, maar dat was niet correct.",
          answer: "ontvangen"
        },
        {
          word: "verdachten",
          definition: "mensen waarvan wordt gedacht dat ze iets fouts hebben gedaan",
          sentence: "De ___ moeten voor de rechter verschijnen.",
          answer: "verdachten"
        },
        {
          word: "Griekenland",
          definition: "een land in Europa",
          sentence: "___ is een land met veel eilanden.",
          answer: "Griekenland"
        },
        {
          word: "subsidies",
          definition: "financiële steun van de overheid",
          sentence: "De EU geeft ___ aan landbouwers voor bepaalde projecten.",
          answer: "subsidies"
        },
        {
          word: "aanvraag",
          definition: "een verzoek om iets, vaak schriftelijk",
          sentence: "Hun ___ voor subsidie werd goedgekeurd.",
          answer: "aanvraag"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De EU geeft ___ aan landbouwers voor bepaalde projecten.",
          answer: "subsidies"
        },
        {
          sentence: "De ___ moeten voor de rechter verschijnen.",
          answer: "verdachten"
        },
        {
          sentence: "Hun ___ voor subsidie werd goedgekeurd.",
          answer: "aanvraag"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was het hoofddoel van de groep in Griekenland?",
        options: [
          "Het opzetten van een legale boerderij",
          "Het krijgen van EU-subsidies door fraude",
          "Het verminderen van het aantal schapen in Griekenland",
          "Het openbaar maken van fraude door de overheid"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe probeerde de groep de subsidie te ontvangen?",
        options: [
          "Door een eerlijke aanvraag in te dienen",
          "Door het aantal dieren te verhogen en te liegen",
          "Door de subsidie te weigeren na ontvangst",
          "Door meer dieren te kopen met eigen geld"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de Europese Unie in deze situatie?",
        options: [
          "Het negeren van fraude door boeren",
          "Het aanbieden van subsidies zonder voorwaarden",
          "Het controleren en straffen van fraude",
          "Het sluiten van de organisatie die subsidies beheert"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De groep in Griekenland heeft de subsidie op een eerlijke manier verdiend.",
        isTrue: false
      },
      {
        statement: "De Europese Unie biedt subsidies aan voor verschillende doelen, maar er zijn regels.",
        isTrue: true
      },
      {
        statement: "Alle dieren in Griekenland zijn betrokken bij de fraude.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Jamaica maakt zich op voor orkaan Melissa",
    topicNumber: 1,
    article: {
      title: "Jamaica maakt zich op voor orkaan Melissa",
      summary: "Jamaana bereidt zich voor op de komst van orkaan Melissa, die de zwaarste storm van dit jaar kan worden. De orkaan kan toeslaan met stormvloed, zware regen en zeer harde wind. Alleen al op Haïti en de Dominicaanse Republiek vielen vier doden door de storm."
    },
    vocabulary: {
      words: [
        {
          word: "orkaan",
          definition: "een zeer zware storm met veel wind en regen",
          sentence: "De orkaan veroorzaakte veel schade aan gebouwen en bomen.",
          answer: "orkaan"
        },
        {
          word: "stormvloed",
          definition: "een snel stijgende watermassa, vaak door een storm",
          sentence: "De stormvloed overspoelde de straten en huizen langs de kust.",
          answer: "stormvloed"
        },
        {
          word: "wind",
          definition: "bewegende lucht, vaak sterk tijdens een storm",
          sentence: "De harde wind blies dakpannen van de huizen en braakt takken af.",
          answer: "wind"
        },
        {
          word: "doden",
          definition: "mensen die zijn overleden",
          sentence: "Helaas vielen er door de orkaan enkele doden in het gebied.",
          answer: "doden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De harde wind blies dakpannen van de huizen en braakt takken af.",
          answer: "wind"
        },
        {
          sentence: "De orkaan veroorzaakte veel schade aan gebouwen en bomen.",
          answer: "orkaan"
        },
        {
          sentence: "De stormvloed overspoelde de straten en huizen langs de kust.",
          answer: "stormvloed"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste reden dat Jamaica zich voorbereidt op orkaan Melissa?",
        options: [
          "Vanwege zware regenval",
          "Omdat het een traditie is",
          "Omdat de orkaan verwoestend kan zijn",
          "Omdat er al doden zijn gevallen"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk effect kan orkaan Melissa hebben op Jamaica?",
        options: [
          "Alleen lichte regen",
          "Geen effect, het is ver weg",
          "Stormvloed en veel schade",
          "Alleen harde wind, zonder problemen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een gevolg van orkaan Melissa in Haïti en de Dominicaanse Republiek?",
        options: [
          "Vier doden zijn al gevallen",
          "Er is geen effect, de orkaan is er niet",
          "Alleen lichte regen, geen probleem",
          "De orkaan is daar nog niet aangekomen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is de eerste storm van het jaar in Jamaica.",
        isTrue: false
      },
      {
        statement: "Stormvloed is een van de manieren waarop de orkaan toeslaat.",
        isTrue: true
      },
      {
        statement: "Er zijn nog geen doden gevallen door orkaan Melissa.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Pater Herwig Arts, 90 jaar",
    topicNumber: 1,
    article: {
      title: "Pater Herwig Arts, 90 jaar",
      summary: "Hij werd geboren in 1935 en overleed op 24 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Pater",
          definition: "Een pater is een geestelijke in de Katholieke Kerk.",
          sentence: "De ___ droeg een zwart habijt.",
          answer: "pater"
        },
        {
          word: "geboren",
          definition: "Geboren worden betekent dat je leven begint; het is het tegenovergestelde van overlijden.",
          sentence: "Zij werd ___ in een klein dorp in Nederland.",
          answer: "geboren"
        },
        {
          word: "werd",
          definition: "Werd is de verleden tijd van 'worden', wat 'zijn' of 'geworden' betekent.",
          sentence: "Hij ___ geboren in een klein dorp.",
          answer: "werd"
        },
        {
          word: "werd",
          definition: "Werd is de verleden tijd van 'worden', wat 'geworden' of 'zijn' betekent.",
          sentence: "Zij ___ geboren in een groot ziekenhuis.",
          answer: "werd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij werd ___ in een klein dorp in Nederland.",
          answer: "geboren"
        },
        {
          sentence: "De ___ droeg een zwart habijt.",
          answer: "pater"
        },
        {
          sentence: "Hij ___ geboren in een klein dorp.",
          answer: "werd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als iemand is overleden?",
        options: [
          "Die persoon is op reis",
          "Die persoon is gestorven",
          "Die persoon is net geboren",
          "Die persoon is verhuisd"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk woord past bij 'Hij werd geboren'?",
        options: [
          "gestorven",
          "overleden",
          "geboren",
          "verhuisd"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de tegenhanger van 'overleden'?",
        options: [
          "Oud worden",
          "Geboren worden",
          "Verhuizen",
          "Sterven"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Pater Herwig Arts werd geboren in 1935.",
        isTrue: true
      },
      {
        statement: "Hij overleed op 24 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Hij werd geboren in 2025.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
    topicNumber: 1,
    article: {
      title: "Helpt AI het Nederlands vooruit of is het de doodgraver ervan?",
      summary: "AI-modellen zoals ChatGPT maken onze taal vlakker, stelt computerlinguïst Tim Van de Cruys vast. Tegelijk wordt ons eigen taalgevoel misschien nog belangrijker door AI. 'Hoe beter je de taal al beheerst, hoe beter een AI-model voor jou zal werken.'"
    },
    vocabulary: {
      words: [
        {
          word: "AI",
          definition: "Afkorting voor kunstmatige intelligentie; technologie die menselijke intelligentie nabootst.",
          sentence: "___ wordt gebruikt in veel moderne toepassingen.",
          answer: "AI"
        },
        {
          word: "stelt",
          definition: "Zet iets neer of presenteert; in deze context betekent het 'beweert' of 'stelt'.",
          sentence: "De auteur ___ dat het onderzoek nog loopt.",
          answer: "stelt"
        },
        {
          word: "computerlinguïst",
          definition: "Een expert die taal en computerwetenschap combineert.",
          sentence: "De ___ onderzocht hoe AI taal kan begrijpen.",
          answer: "computerlinguïst"
        },
        {
          word: "taal",
          definition: "Een systeem van gesproken of geschreven woorden die mensen gebruiken om te communiceren.",
          sentence: "De Nederlandse ___ is bekend om zijn complexe grammatica.",
          answer: "taal"
        },
        {
          word: "taalgevoel",
          definition: "Het natuurlijke gevoel voor wat correct of passend taalgebruik is.",
          sentence: "Een goed ___ helpt bij het leren van een nieuwe taal.",
          answer: "taalgevoel"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De Nederlandse ___ is bekend om zijn complexe grammatica.",
          answer: "taal"
        },
        {
          sentence: "Een goed ___ helpt bij het leren van een nieuwe taal.",
          answer: "taalgevoel"
        },
        {
          sentence: "De ___ onderzocht hoe AI taal kan begrijpen.",
          answer: "computerlinguïst"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt de auteur AI-modellen zoals ChatGPT 'taalvlakmakers'?",
        options: [
          "Omdat ze taal letterlijk vlak maken",
          "Omdat ze taalgebruik minder diepgaand maken",
          "Omdat ze alleen platte taal produceren",
          "Omdat ze taal tot simpele structuren reduceren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat stelt computerlinguïst Tim Van de Cruys over AI en taal?",
        options: [
          "AI maakt taal compleet overbodig",
          "AI kan taalvaardigheid juist versterken",
          "AI vervangt alle taalexperts",
          "AI heeft geen effect op taal"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk gevolg van AI volgens de tekst?",
        options: [
          "Taal wordt overal ter wereld hetzelfde",
          "Mensen verliezen alle taalvaardigheid",
          "Goede taalbeheersing wordt nog waardevoller",
          "AI schrijft binnenkort alle teksten zelf"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "AI maakt taal compleet overbodig, omdat computers alles kunnen.",
        isTrue: false
      },
      {
        statement: "Hoe beter je de taal al beheerst, hoe beter een AI-model voor jou zal werken.",
        isTrue: true
      },
      {
        statement: "Computerlinguïstiek is hetzelfde als gewone taalkunde.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "De warme bakker is steeds vaker een vrouw: “Na tien broden bakken wist ik: hier word ik gelukkig van”",
    topicNumber: 1,
    article: {
      title: "De warme bakker is steeds vaker een vrouw: “Na tien broden bakken wist ik: hier word ik gelukkig van”",
      summary: "Van een passie voor millefeuille tot ambachtelijke zuurdesembroden, steeds vaker kiezen vrouwen voor een job als bakker of patissier. In verschillende bakkersopleidingen maken ze intussen meer dan de helft van de leerlingen uit. “Vrouwen hebben de finesse sneller in de vingers.”"
    },
    vocabulary: {
      words: [
        {
          word: "zuurdesem",
          definition: "een soort desem dat zuur is en gebruikt wordt om brood te laten rijzen",
          sentence: "Het ___ brood had een rijke, zure smaak.",
          answer: "zuurdesem"
        },
        {
          word: "bakker",
          definition: "iemand die brood en banket bakt",
          sentence: "De ___ staat elke dag vroeg op om vers brood te bakken.",
          answer: "bakker"
        },
        {
          word: "ambacht",
          definition: "een traditioneel handwerk of vakmanschap",
          sentence: "Het oude ___ van houtbewerking is nog steeds levend.",
          answer: "ambacht"
        },
        {
          word: "vrouw",
          definition: "een volwassen persoon van het vrouwelijk geslacht",
          sentence: "De ___ werkt parttime en zorgt voor de kinderen.",
          answer: "vrouw"
        },
        {
          word: "ambachtelijke",
          definition: "op de manier van een ambacht, traditioneel en handgemaakt",
          sentence: "De ___ producten zijn van hoge kwaliteit.",
          answer: "ambachtelijke"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ producten zijn van hoge kwaliteit.",
          answer: "ambachtelijke"
        },
        {
          sentence: "Het oude ___ van houtbewerking is nog steeds levend.",
          answer: "ambacht"
        },
        {
          sentence: "De ___ werkt parttime en zorgt voor de kinderen.",
          answer: "vrouw"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar komt het woord 'patissier' vandaan?",
        options: [
          "Uit het Nederlands",
          "Uit het Frans",
          "Uit het Engels",
          "Uit het Italiaans"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom kiezen meer vrouwen voor een baan als bakker?",
        options: [
          "Omdat het goed betaalt",
          "Omdat ze van koken houden",
          "Omdat ze fijne motoriek beheersen",
          "Omdat ze thuis kunnen werken"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'millefeuille'?",
        options: [
          "Een soort bloem",
          "Een soort taart",
          "Een soort gerecht",
          "Een soort boek"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Vrouwen hebben over het algemeen betere fijne motoriek dan mannen.",
        isTrue: true
      },
      {
        statement: "Een patissier is iemand die alleen maar taarten bakt.",
        isTrue: false
      },
      {
        statement: "Zuurdesem is een soort meel dat gebruikt wordt voor brood.",
        isTrue: true
      }
    ]
  }
];
