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
    title: "Waarom is er weinig kritiek op de Emiraten? Een blik op de banden met de wapenindustrie.",
    topicNumber: 1,
    article: {
      title: "Waarom is er weinig kritiek op de Emiraten? Een blik op de banden met de wapenindustrie.",
      summary: "Westerse leiders zijn geschokt door het geweld in Soedan, maar geven de Emiraten niet de schuld. Dit komt door grote investeringen van de Emiraten in westerse wapenbedrijven."
    },
    vocabulary: {
      words: [
        {
          word: "leiders",
          definition: "mensen die een groep of land leiden",
          sentence: "De ___ van de vergadering bespraken het nieuwe plan.",
          answer: "leiders"
        },
        {
          word: "kritiek",
          definition: "negatieve opmerkingen of commentaar",
          sentence: "Hij kreeg veel ___ op zijn werk omdat het niet goed was.",
          answer: "kritiek"
        },
        {
          word: "Emiraten",
          definition: "een land in het Midden-Oosten, rijk door olie",
          sentence: "De ___ zijn rijk door hun olie-inkomsten.",
          answer: "Emiraten"
        },
        {
          word: "wapenindustrie",
          definition: "industrie die wapens maakt en verkoopt",
          sentence: "De ___ groeit snel tijdens oorlogen.",
          answer: "wapenindustrie"
        },
        {
          word: "investeringen",
          definition: "geld dat in iets wordt gestopt om meer geld te verdienen",
          sentence: "Hun ___ in technologie bracht veel winst.",
          answer: "investeringen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij kreeg veel ___ op zijn werk omdat het niet goed was.",
          answer: "kritiek"
        },
        {
          sentence: "De ___ groeit snel tijdens oorlogen.",
          answer: "wapenindustrie"
        },
        {
          sentence: "Hun ___ in technologie bracht veel winst.",
          answer: "investeringen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom geven westerse leiders de Emiraten niet de schuld voor het geweld in Soedan?",
        options: [
          "Omdat de Emiraten hun vrienden zijn",
          "Omdat de Emiraten veel geld geven aan westerse wapenfabrikanten",
          "Omdat Soedan te ver weg is",
          "Omdat ze het niet weten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de Emiraten in de wapenindustrie?",
        options: [
          "Ze maken zelf wapens",
          "Ze kopen wapens uit andere landen",
          "Ze investeren in buitenlandse wapenfabrikanten",
          "Ze verkopen wapens aan de hele wereld"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe reageren de Emiraten op de situatie in Soedan?",
        options: [
          "Ze sturen troepen om te helpen",
          "Ze geven geld aan hulporganisaties",
          "Ze negeren het en doen niets",
          "Ze bespreken het met de VN"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Emiraten worden bekritiseerd door alle westerse leiders voor hun rol in Soedan.",
        isTrue: false
      },
      {
        statement: "De Emiraten investeren in westerse wapenbedrijven, en daarom zwijgen westerse leiders over de Emiraten.",
        isTrue: true
      },
      {
        statement: "Soedan is een stad in de Emiraten.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Chinese hackers gebruiken AI voor spionage",
    topicNumber: 1,
    article: {
      title: "Chinese hackers gebruiken AI voor spionage",
      summary: "Chinese hackers worden verdacht van het gebruiken van het AI-model Claude voor aanvallen op bedrijven en overheden. Ze gebruikten een rollenspel en de 'salamitechniek' om het AI-model het werk te laten doen. Dit is een keerpunt in cyberveiligheid en AI."
    },
    vocabulary: {
      words: [
        {
          word: "AI",
          definition: "Kunstmatige intelligentie, computers die leren.",
          sentence: "Het ___ -model heet Claude.",
          answer: "AI"
        },
        {
          word: "overheden",
          definition: "De organisaties die een land of gebied besturen.",
          sentence: "Ook overheden werden ___.",
          answer: "overheden"
        },
        {
          word: "Chinese",
          definition: "Van of uit China, een land.",
          sentence: "De ___ hackers worden verdacht van spionage.",
          answer: "Chinese"
        },
        {
          word: "aanvallen",
          definition: "Een aanval doen, proberen schade toe te brengen.",
          sentence: "Ze voeren ___ uit op bedrijven.",
          answer: "aanvallen"
        },
        {
          word: "cyberveiligheid",
          definition: "Beveiliging tegen computercriminaliteit.",
          sentence: "Dit is een keerpunt in de ___.",
          answer: "cyberveiligheid"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ -model heet Claude.",
          answer: "AI"
        },
        {
          sentence: "De ___ hackers worden verdacht van spionage.",
          answer: "Chinese"
        },
        {
          sentence: "Ook overheden werden ___.",
          answer: "overheden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar wordt het AI-model Claude voor gebruikt?",
        options: [
          "Voor het maken van muziek",
          "Voor het aanvallen van bedrijven",
          "Voor het koken van eten",
          "Voor het besturen van auto's"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'salamitechniek'?",
        options: [
          "Een kooktechniek",
          "Een sportbeweging",
          "Een hackmethode",
          "Een soort salade"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een gevolg van deze gebeurtenissen?",
        options: [
          "Er is niets gebeurd",
          "Er is meer cyberveiligheid nodig",
          "Er is minder computergebruik",
          "Er is meer muziek gemaakt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Chinese hackers hebben het AI-model Claude gebruikt om bedrijven aan te vallen.",
        isTrue: true
      },
      {
        statement: "De 'salamitechniek' is een nieuwe dans.",
        isTrue: false
      },
      {
        statement: "Dit is een keerpunt voor cyberveiligheid.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
    topicNumber: 1,
    article: {
      title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
      summary: "Het duizend jaar oude dorp Moerdijk verdwijnt. 1.100 inwoners moeten plaatsmaken voor de energietransitie en de verduurzaming van de haven. “Moet de industrie altijd het laatste woord hebben?”"
    },
    vocabulary: {
      words: [
        {
          word: "heropbouwen",
          definition: "opnieuw opbouwen, weer opbouwen",
          sentence: "Na de oorlog werd de stad snel ___.",
          answer: "heropbouwen"
        },
        {
          word: "industrie",
          definition: "bedrijven die goederen produceren, fabrieken",
          sentence: "De zware ___ in dit gebied zorgt voor veel banen.",
          answer: "industrie"
        },
        {
          word: "plaatsmaken",
          definition: "vervangen worden door iets anders, ruimte geven",
          sentence: "De oude huizen moeten ___ voor een groot nieuw project.",
          answer: "plaatsmaken"
        },
        {
          word: "wijk",
          definition: "een gedeelte van een stad of dorp",
          sentence: "De oude ___ bestaat uit kleine huisjes en smalle straatjes.",
          answer: "wijk"
        },
        {
          word: "dorp",
          definition: "een plaats waar mensen wonen, kleiner dan een stad",
          sentence: "Het kleine ___ heeft een kerk en een school.",
          answer: "dorp"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De zware ___ in dit gebied zorgt voor veel banen.",
          answer: "industrie"
        },
        {
          sentence: "De oude ___ bestaat uit kleine huisjes en smalle straatjes.",
          answer: "wijk"
        },
        {
          sentence: "Na de oorlog werd de stad snel ___.",
          answer: "heropbouwen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom moeten de inwoners van Moerdijk verhuizen?",
        options: [
          "Er is een nieuwe wet",
          "Er is geen ruimte meer",
          "Er komt een groot winkelcentrum",
          "De grond is vervuild"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de industrie in deze situatie?",
        options: [
          "Ze bieden nieuwe huizen aan",
          "Ze geven werk aan iedereen",
          "Ze hebben het gebied gekozen voor uitbreiding",
          "Ze helpen met de verhuizing"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe reageerden de inwoners op het nieuws?",
        options: [
          "Ze zijn heel boos",
          "Ze zijn blij met de vooruitgang",
          "Ze zijn bezorgd over hun toekomst",
          "Ze willen niet verhuizen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het dorp Moerdijk bestaat al duizend jaar.",
        isTrue: true
      },
      {
        statement: "Alle inwoners weigeren te vertrekken.",
        isTrue: false
      },
      {
        statement: "De industrie wil het dorp uitbreiden.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Flora Loos, 84 jaar",
    topicNumber: 1,
    article: {
      title: "Flora Loos, 84 jaar",
      summary: "Geboren in 1941, overleden op 11/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Flora Loos is ___ in 1941.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Ze is ___ op 11 november 2025.",
          answer: "overleden"
        },
        {
          word: "overleden",
          definition: "gestorven, niet meer levend",
          sentence: "Ze is in 2025 ___.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze is in 2025 ___.",
          answer: "overleden"
        },
        {
          sentence: "Flora Loos is ___ in 1941.",
          answer: "geboren"
        },
        {
          sentence: "Ze is ___ op 11 november 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Flora Loos geboren?",
        options: [
          "1940",
          "1941",
          "1942",
          "1943"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Flora Loos toen ze overleed?",
        options: [
          "82 jaar",
          "83 jaar",
          "84 jaar",
          "85 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Op welke datum overleed Flora Loos?",
        options: [
          "11 november 2024",
          "11 november 2025",
          "11 december 2025",
          "11 januari 2026"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Flora Loos is geboren in 1941.",
        isTrue: true
      },
      {
        statement: "Flora Loos overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Flora Loos werd 84 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Lieve Celestine, 88 jaar",
    topicNumber: 1,
    article: {
      title: "Lieve Celestine, 88 jaar",
      summary: "Geboren in 1937, overleden op 12 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "88",
          definition: "Het getal tussen 87 en 89",
          sentence: "Hij is 88 jaar oud.",
          answer: "88"
        },
        {
          word: "op",
          definition: "Een voorzetsel dat tijd of plaats aangeeft",
          sentence: "We zien elkaar op maandag.",
          answer: "op"
        },
        {
          word: "12",
          definition: "Het getal na 11 en voor 13",
          sentence: "Er zijn 12 maanden in een jaar.",
          answer: "12"
        },
        {
          word: "Lieve",
          definition: "Een manier om iemand liefkozend aan te spreken",
          sentence: "Lieve mensen zijn altijd vriendelijk.",
          answer: "Lieve"
        },
        {
          word: "Celestine",
          definition: "Een vrouwelijke voornaam, afgeleid van Celestijn",
          sentence: "Celestine was een oude dame.",
          answer: "Celestine"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Lieve mensen zijn altijd vriendelijk.",
          answer: "Lieve"
        },
        {
          sentence: "We zien elkaar op maandag.",
          answer: "op"
        },
        {
          sentence: "Hij is 88 jaar oud.",
          answer: "88"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent de naam Celestine?",
        options: [
          "Hemels",
          "Aards",
          "Mannelijk",
          "Onbekend"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Celestine geboren?",
        options: [
          "1937",
          "1945",
          "1950",
          "1960"
        ],
        correctAnswer: 1
      },
      {
        question: "Is Celestine nog in leven?",
        options: [
          "Ja",
          "Nee",
          "Soms",
          "Niet bekend"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Celestine is een mannelijke naam.",
        isTrue: false
      },
      {
        statement: "Celestine is in 2025 overleden.",
        isTrue: true
      },
      {
        statement: "Celestine is geboren in 1937.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Marguerite Destrooper, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Marguerite Destrooper, 92 jaar",
      summary: "Geboren in 1933, overleden op 20/10/2025"
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het moment dat iemand wordt geboren",
          sentence: "Ze werd ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ op 20 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar is Marguerite Destrooper geboren?",
        options: [
          "1930",
          "1933",
          "1940",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de overlijdensdatum van Marguerite Destrooper?",
        options: [
          "20 oktober 2025",
          "20 november 2025",
          "20 december 2025",
          "20 januari 2026"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Marguerite Destrooper op het moment van overlijden?",
        options: [
          "90 jaar",
          "91 jaar",
          "92 jaar",
          "93 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Marguerite Destrooper is geboren in 1933.",
        isTrue: true
      },
      {
        statement: "Marguerite Destrooper is overleden in 2026.",
        isTrue: false
      },
      {
        statement: "Marguerite Destrooper werd 92 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Waarom kritiek op de Emiraten uitblijft",
    topicNumber: 1,
    article: {
      title: "Waarom kritiek op de Emiraten uitblijft",
      summary: "De Emiraten investeren in westerse wapenfabrieken. Daarom zijn westerse landen stil over kritiek op de Emiraten."
    },
    vocabulary: {
      words: [
        {
          word: "landen",
          definition: "andere woorden voor staten, zoals Nederland of België",
          sentence: "De ___ in Europa werken vaak samen.",
          answer: "landen"
        },
        {
          word: "stil",
          definition: "geen geluid makend, niet praten",
          sentence: "De klas is ___ als de leraar binnenkomt.",
          answer: "stil"
        },
        {
          word: "kritiek",
          definition: "dat wat je ervan vindt, een mening over iets",
          sentence: "De minister gaf geen ___ op de vraag.",
          answer: "kritiek"
        },
        {
          word: "Emiraten",
          definition: "een land in het Midden-Oosten",
          sentence: "De ___ zijn rijk door olie.",
          answer: "Emiraten"
        },
        {
          word: "westers",
          definition: "van of uit Europa en Amerika",
          sentence: "De ___ landen zijn vaak rijk.",
          answer: "westers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De klas is ___ als de leraar binnenkomt.",
          answer: "stil"
        },
        {
          sentence: "De minister gaf geen ___ op de vraag.",
          answer: "kritiek"
        },
        {
          sentence: "De ___ landen zijn vaak rijk.",
          answer: "westers"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat investeren de Emiraten in?",
        options: [
          "auto's",
          "wapens",
          "huizen",
          "fabrieken"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom zijn westerse landen stil over de Emiraten?",
        options: [
          "Ze zijn verlegen",
          "Ze zijn bang",
          "Ze hebben er geen mening over",
          "Ze profiteren ervan"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een voorbeeld van iets 'westers'?",
        options: [
          "Een oude tempel in Azië",
          "Een moderne flat in Dubai",
          "Een auto uit Duitsland",
          "Een traditioneel gerecht uit India"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Emiraten investeren in Europese fabrieken.",
        isTrue: true
      },
      {
        statement: "Westerse landen praten veel over de Emiraten.",
        isTrue: false
      },
      {
        statement: "De Emiraten zijn een land in Azië.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Chinese hackers gebruiken AI",
    topicNumber: 1,
    article: {
      title: "Chinese hackers gebruiken AI",
      summary: "Chinese hackers gebruiken AI voor aanvallen. Dit is een groot probleem."
    },
    vocabulary: {
      words: [
        {
          word: "aanvallen",
          definition: "iemand of iets met geweld aanvallen",
          sentence: "Ze ___ andere computers.",
          answer: "aanvallen"
        },
        {
          word: "Chinese",
          definition: "uit China",
          sentence: "___ hackers gebruiken AI.",
          answer: "Chinese"
        },
        {
          word: "groot",
          definition: "niet klein, maar van grote omvang",
          sentence: "Dit is een ___ probleem.",
          answer: "groot"
        },
        {
          word: "gebruiken",
          definition: "iets doen met iets",
          sentence: "Ze ___ AI voor aanvallen.",
          answer: "gebruiken"
        },
        {
          word: "AI",
          definition: "kunstmatige intelligentie, zoals een robotbrein",
          sentence: "Ze gebruiken ___ voor aanvallen.",
          answer: "AI"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Dit is een ___ probleem.",
          answer: "groot"
        },
        {
          sentence: "Ze gebruiken ___ voor aanvallen.",
          answer: "AI"
        },
        {
          sentence: "___ hackers gebruiken AI.",
          answer: "Chinese"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebruiken de hackers?",
        options: [
          "eten",
          "drinken",
          "AI",
          "auto"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het tegenovergestelde van veiligheid?",
        options: [
          "gevaar",
          "geluk",
          "vrede",
          "zon"
        ],
        correctAnswer: 1
      },
      {
        question: "Is dit een klein probleem?",
        options: [
          "Ja",
          "Nee",
          "Soms",
          "Misschien"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De hackers gebruiken AI.",
        isTrue: true
      },
      {
        statement: "Cyberveiligheid is niet belangrijk.",
        isTrue: false
      },
      {
        statement: "Dit is een klein probleem.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Nederlands dorp Moerdijk moet wijken",
    topicNumber: 1,
    article: {
      title: "Nederlands dorp Moerdijk moet wijken",
      summary: "Het dorp Moerdijk moet verdwijnen. De mensen moeten weg. Het dorp is heel oud. De industrie wil groeien. De mensen moeten plaatsmaken voor de industrie."
    },
    vocabulary: {
      words: [
        {
          word: "industrie",
          definition: "bedrijven die producten maken",
          sentence: "De ___ maakt veel spullen.",
          answer: "industrie"
        },
        {
          word: "dorp",
          definition: "een kleine plaats waar mensen wonen",
          sentence: "Ik woon in een klein ___.",
          answer: "dorp"
        },
        {
          word: "mensen",
          definition: "personen, individuen",
          sentence: "De ___ in het dorp zijn vriendelijk.",
          answer: "mensen"
        },
        {
          word: "wijken",
          definition: "verplaatsen, ergens anders naartoe gaan",
          sentence: "Soms moet je ___ voor iets nieuws.",
          answer: "wijken"
        },
        {
          word: "maken",
          definition: "creëren, produceren",
          sentence: "Kinderen ___ vaak een hut van kleden.",
          answer: "maken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik woon in een klein ___.",
          answer: "dorp"
        },
        {
          sentence: "De ___ in het dorp zijn vriendelijk.",
          answer: "mensen"
        },
        {
          sentence: "Kinderen ___ vaak een hut van kleden.",
          answer: "maken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als een dorp moet 'wijken'?",
        options: [
          "Het dorp wordt mooier",
          "Het dorp verdwijnt",
          "Het dorp wordt groter",
          "Het dorp verandert van naam"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom moeten de mensen uit Moerdijk weg?",
        options: [
          "Er is te weinig werk",
          "De huizen zijn te oud",
          "De industrie wil de ruimte",
          "Er is geen water meer"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de 'industrie'?",
        options: [
          "Een soort supermarkt",
          "Een groot bedrijf dat producten maakt",
          "Een grote tuin",
          "Een sportteam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het dorp Moerdijk is heel oud.",
        isTrue: true
      },
      {
        statement: "De mensen in Moerdijk willen niet weg.",
        isTrue: false
      },
      {
        statement: "De industrie helpt de mensen in Moerdijk.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Flora Loos, 84 jaar",
    topicNumber: 1,
    article: {
      title: "Flora Loos, 84 jaar",
      summary: "Geboren in 1941, overleden op 11 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Flora",
          definition: "een vrouwelijke naam",
          sentence: "___ is een mooie naam.",
          answer: "Flora"
        },
        {
          word: "11",
          definition: "het getal na 10",
          sentence: "November is de ___de maand.",
          answer: "11"
        },
        {
          word: "84",
          definition: "een getal, tussen 83 en 85",
          sentence: "Hij is ___ jaar oud.",
          answer: "84"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Zij is ___ in 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Een ___ heeft 12 maanden.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een mooie naam.",
          answer: "Flora"
        },
        {
          sentence: "Hij is ___ jaar oud.",
          answer: "84"
        },
        {
          sentence: "November is de ___de maand.",
          answer: "11"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Flora geboren?",
        options: [
          "In 1941",
          "In 1942",
          "In 1943",
          "In 1944"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud is Flora geworden?",
        options: [
          "83 jaar",
          "84 jaar",
          "85 jaar",
          "86 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke dag is Flora overleden?",
        options: [
          "10 november",
          "11 november",
          "12 november",
          "13 november"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Flora is geboren in 1941.",
        isTrue: true
      },
      {
        statement: "Flora is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Flora is 85 jaar oud.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Lieve Cerstelotte, 88 jaar",
    topicNumber: 1,
    article: {
      title: "Lieve Cerstelotte, 88 jaar",
      summary: "Geboren in 1937, overleden op 12/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "88",
          definition: "een getal, hier de leeftijd",
          sentence: "Hij is ___ jaar oud.",
          answer: "88"
        },
        {
          word: "overleden",
          definition: "niet meer leven, dood zijn",
          sentence: "Hij is ___ op 1 januari.",
          answer: "overleden"
        },
        {
          word: "op",
          definition: "een voorzetsel, hier gebruikt met een datum",
          sentence: "We zien elkaar ___ maandag.",
          answer: "op"
        },
        {
          word: "Lieve",
          definition: "een liefdevol woord, vaak gebruikt in brieven of om iemand aan te spreken",
          sentence: "___ is een liefdevol woord.",
          answer: "Lieve"
        },
        {
          word: "jaar",
          definition: "een tijdseenheid, 12 maanden",
          sentence: "Een ___ heeft 365 dagen.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ jaar oud.",
          answer: "88"
        },
        {
          sentence: "Hij is ___ op 1 januari.",
          answer: "overleden"
        },
        {
          sentence: "We zien elkaar ___ maandag.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden'?",
        options: [
          "geboren zijn",
          "getrouwd zijn",
          "overleden zijn",
          "werken"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is '88'?",
        options: [
          "een naam",
          "een getal",
          "een plaats",
          "een kleur"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'op' in deze context?",
        options: [
          "een voorzetsel",
          "een werkwoord",
          "een naamwoord",
          "een bijwoord"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Cerstelotte is een plaats.",
        isTrue: false
      },
      {
        statement: "12/11/2025 is de overlijdensdatum.",
        isTrue: true
      },
      {
        statement: "Lieve is een familielid.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Marguerite Destrooper, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Marguerite Destrooper, 92 jaar",
      summary: "Geboren in 1933, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "geboren worden betekent: beginnen te leven",
          sentence: "Zij werd ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "overleden zijn betekent: niet meer leven",
          sentence: "Hij is ___ op 20 oktober.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een jaar is 365 dagen",
          sentence: "Zij is 92 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij werd ___ in 1933.",
          answer: "geboren"
        },
        {
          sentence: "Zij is 92 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Hij is ___ op 20 oktober.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'geboren worden'?",
        options: [
          "beginnen te leven",
          "eindigen met leven",
          "werken in een ziekenhuis",
          "een feest vieren"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Marguerite Destrooper?",
        options: [
          "92 jaar",
          "100 jaar",
          "85 jaar",
          "78 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar werd Marguerite geboren?",
        options: [
          "1933",
          "1920",
          "1945",
          "1950"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Marguerite Destrooper is overleden.",
        isTrue: true
      },
      {
        statement: "Marguerite Destrooper is 100 jaar oud.",
        isTrue: false
      },
      {
        statement: "Marguerite Destrooper is geboren in 1933.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Oekraïne",
    topicNumber: 1,
    article: {
      title: "Vertrouweling Zelensky verwikkeld in corruptieonderzoek",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "ontwikkelingen",
          definition: "Veranderingen of nieuwe gebeurtenissen in een situatie of proces.",
          sentence: "De recente ___ in de oorlog tonen een escalatie aan het front.",
          answer: "ontwikkelingen"
        },
        {
          word: "melding",
          definition: "Een bericht of signaal dat iemand informeert over iets belangrijks.",
          sentence: "Krijg een ___ wanneer er belangrijk nieuws is.",
          answer: "melding"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa, momenteel betrokken bij een conflict.",
          sentence: "___ heeft internationale steun gekregen voor zijn verdediging.",
          answer: "Oekraïne"
        },
        {
          word: "app",
          definition: "Een applicatie op een smartphone of computer, vaak voor informatie of entertainment.",
          sentence: "Download de ___ om op de hoogte te blijven van het laatste nieuws.",
          answer: "app"
        },
        {
          word: "Vertrouweling",
          definition: "Een persoon die in vertrouwen wordt genomen of die zeer vertrouwd is met iemand.",
          sentence: "De president beschouwt hem als een ___ die altijd discreet handelt.",
          answer: "Vertrouweling"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ heeft internationale steun gekregen voor zijn verdediging.",
          answer: "Oekraïne"
        },
        {
          sentence: "De recente ___ in de oorlog tonen een escalatie aan het front.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "De president beschouwt hem als een ___ die altijd discreet handelt.",
          answer: "Vertrouweling"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat het corruptieonderzoek waar Zelensky's vertrouweling bij betrokken is?",
        options: [
          "Het gaat over mogelijke fraude in de verkiezingen",
          "Het betreft vermeende omkoping van hoge overheidsfunctionarissen",
          "Het is een onderzoek naar witwaspraktijken via een stichting",
          "Het richt zich op fraude bij defensiecontracten"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageert de Oekraïense regering op de beschuldigingen?",
        options: [
          "Ze ontkennen alles volledig",
          "Er wordt een onafhankelijke commissie opgericht",
          "Ze eisen bewijzen van de aanklagers",
          "Ze stellen een onderzoek in en benadrukken transparantie"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een gevolg van de ontwikkelingen in de oorlog voor Oekraïne?",
        options: [
          "De economie groeit exponentieel",
          "Internationale steun neemt toe, ook al zijn er uitdagingen",
          "Alle steden zijn volledig verwoest",
          "De regering trekt zich volledig terug"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zelensky's vertrouweling werd direct gearresteerd na de onthullingen.",
        isTrue: false
      },
      {
        statement: "Het corruptieonderzoek leidde tot een tijdelijke bevriezing van sommige buitenlandse fondsen.",
        isTrue: true
      },
      {
        statement: "De Oekraïense regering ontkent alle aantijgingen en weigert samen te werken met internationale organisaties.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Chinese hackers automatiseren spionage met Amerikaans AI-model Claude",
    topicNumber: 1,
    article: {
      title: "Chinese hackers automatiseren spionage met Amerikaans AI-model Claude",
      summary: "Chinese hackers worden ervan verdacht Claude te hebben ingezet bij aanvallen op bedrijven en overheden. Door een rollenspel en de ‘salamitechniek’ konden ze het AI-model het vuile werk laten opknappen. “Dit is een keerpunt in cyberveiligheid en AI.”"
    },
    vocabulary: {
      words: [
        {
          word: "verdacht",
          definition: "waarvan men denkt of vermoedt dat het iets verkeerds of onwettigs is",
          sentence: "Hij werd ___ van het lekken van gevoelige informatie.",
          answer: "verdacht"
        },
        {
          word: "ingezet",
          definition: "gebruikt of toegepast voor een specifiek doel",
          sentence: "De technologie werd ___ om de processen te stroomlijnen.",
          answer: "ingezet"
        },
        {
          word: "spionage",
          definition: "het stiekem verzamelen van informatie, vaak van strategisch belang",
          sentence: "Moderne ___ maakt gebruik van geavanceerde technologie.",
          answer: "spionage"
        },
        {
          word: "keerpunt",
          definition: "een moment of punt waarop een significante verandering plaatsvindt",
          sentence: "De ontdekking was een ___ in het onderzoek.",
          answer: "keerpunt"
        },
        {
          word: "model",
          definition: "een voorbeeld of blauwdruk dat als basis dient",
          sentence: "Het AI-___ is ontworpen om complexe taken te vereenvoudigen.",
          answer: "model"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ontdekking was een ___ in het onderzoek.",
          answer: "keerpunt"
        },
        {
          sentence: "Hij werd ___ van het lekken van gevoelige informatie.",
          answer: "verdacht"
        },
        {
          sentence: "Moderne ___ maakt gebruik van geavanceerde technologie.",
          answer: "spionage"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wordt Claude specifiek genoemd in de titel?",
        options: [
          "Het is een veelgebruikt AI-model",
          "Het is een prototype voor toekomstige AI",
          "Het werd gebruikt door Chinese hackers",
          "Het is een codenaam voor een operatie"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de 'salamitechniek' in deze context?",
        options: [
          "Een kooktechniek",
          "Een social engineering tactiek",
          "Een methode om informatie te verbergen",
          "Een codenaam voor een cyberaanval"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat maakt deze gebeurtenis tot een keerpunt?",
        options: [
          "Het is de eerste keer dat AI wordt gebruikt voor spionage",
          "Het markeert een verandering in hoe AI wordt misbruikt",
          "Het is de grootste cyberaanval ooit",
          "Er is geen bijzonderheid, het is routine"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Claude is een AI-model ontwikkeld door Chinese hackers.",
        isTrue: false
      },
      {
        statement: "De 'salamitechniek' verwijst naar een methode om informatie te verbergen in schijnbaar onschuldige communicatie.",
        isTrue: true
      },
      {
        statement: "Dit incident is het eerste gedocumenteerde geval waarin AI wordt gebruikt voor grootschalige spionage.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
    topicNumber: 1,
    article: {
      title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
      summary: "Het duizend jaar oude dorp Moerdijk verdwijnt. 1.100 inwoners moeten plaatsmaken voor de energietransitie en de verduurzaming van de haven. “Moet de industrie altijd het laatste woord hebben?”"
    },
    vocabulary: {
      words: [
        {
          word: "verduurzaming",
          definition: "het proces om iets duurzaam, dus langdurig houdbaar, te maken",
          sentence: "De ___ van de haven is belangrijk voor het milieu.",
          answer: "verduurzaming"
        },
        {
          word: "dorp",
          definition: "een kleine woonplaats, kleiner dan een stad",
          sentence: "Het kleine ___ heeft een rijke geschiedenis.",
          answer: "dorp"
        },
        {
          word: "wijken",
          definition: "een gebied verlaten, vaak onder druk",
          sentence: "De inwoners moeten ___ vanwege de uitbreiding van de haven.",
          answer: "wijken"
        },
        {
          word: "industrie",
          definition: "alle bedrijven en activiteiten die producten maken of diensten leveren",
          sentence: "De ___ in deze regio is erg belangrijk voor de werkgelegenheid.",
          answer: "industrie"
        },
        {
          word: "energietransitie",
          definition: "de overgang naar het gebruik van duurzame energiebronnen",
          sentence: "De ___ is essentieel om klimaatverandering tegen te gaan.",
          answer: "energietransitie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De inwoners moeten ___ vanwege de uitbreiding van de haven.",
          answer: "wijken"
        },
        {
          sentence: "Het kleine ___ heeft een rijke geschiedenis.",
          answer: "dorp"
        },
        {
          sentence: "De ___ van de haven is belangrijk voor het milieu.",
          answer: "verduurzaming"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom moeten de inwoners van Moerdijk hun dorp verlaten?",
        options: [
          "Omdat er een nieuwe snelweg wordt aangelegd.",
          "Omdat de overheid het gebied wil gebruiken voor de energietransitie.",
          "Omdat het dorp verplaatst wordt voor de bouw van een groot winkelcentrum.",
          "Omdat er een nieuwe luchthaven gepland is."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de historische betekenis van het dorp Moerdijk?",
        options: [
          "Het is een eeuwenoud dorp met een geschiedenis van duizend jaar.",
          "Het is een modern dorp, gebouwd in de jaren negentig.",
          "Het is vooral bekend als toeristische attractie.",
          "Het heeft geen bijzondere historische achtergrond."
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe reageren de inwoners op de plannen?",
        options: [
          "Ze zijn enthousiast en werken mee.",
          "Ze zijn neutraal en wachten af.",
          "Ze zijn boos en protesteren actief.",
          "Ze zijn onverschillig en trekken zich niets aan."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het dorp Moerdijk werd volledig verwoest tijdens de Watersnoodramp.",
        isTrue: false
      },
      {
        statement: "De energietransitie is een van de redenen dat het dorp moet verdwijnen.",
        isTrue: true
      },
      {
        statement: "De haven van Moerdijk is de grootste van Europa.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Flora Loos, 84 jaar",
    topicNumber: 1,
    article: {
      title: "Flora Loos, 84 jaar",
      summary: "Geboren in 1941, overleden op 11/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Geboren worden; het begin van het leven.",
          sentence: "Ze werd ___ in een klein dorp.",
          answer: "geboren"
        },
        {
          word: "84",
          definition: "Het getal vierentachtig; tussen tachtig en negentig.",
          sentence: "Ze werd ___ jaar oud, wat respectabel is.",
          answer: "84"
        },
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig.",
          sentence: "Zij stierf in ___, na een lang leven.",
          answer: "2025"
        },
        {
          word: "Flora",
          definition: "Een vrouwelijke voornaam; ook een term voor plantengroei.",
          sentence: "___ was een veelvoorkomende naam in de jaren 40.",
          answer: "Flora"
        },
        {
          word: "overleden",
          definition: "Overleden zijn; niet meer in leven zijn.",
          sentence: "Helaas is zij nu ___, maar haar erfenis leeft voort.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze werd ___ in een klein dorp.",
          answer: "geboren"
        },
        {
          sentence: "Helaas is zij nu ___, maar haar erfenis leeft voort.",
          answer: "overleden"
        },
        {
          sentence: "___ was een veelvoorkomende naam in de jaren 40.",
          answer: "Flora"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Flora Loos geboren?",
        options: [
          "1939",
          "1940",
          "1941",
          "1942"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de betekenis van de achternaam 'Loos'?",
        options: [
          "Vast",
          "Streng",
          "Los",
          "Geheim"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Flora Loos geworden?",
        options: [
          "83 jaar",
          "84 jaar",
          "85 jaar",
          "86 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Flora Loos overleed in 2025.",
        isTrue: true
      },
      {
        statement: "Flora Loos was 85 jaar oud bij haar overlijden.",
        isTrue: false
      },
      {
        statement: "Flora Loos werd geboren tijdens de Tweede Wereldoorlog.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Lieve Cerstelotte, 88 jaar",
    topicNumber: 1,
    article: {
      title: "Lieve Cerstelotte, 88 jaar",
      summary: "Geboren in 1937, overleden op 12/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "11",
          definition: "Het getal elf, hier de maand van overlijden.",
          sentence: "De maand van overlijden was ___, de elfde maand.",
          answer: "11"
        },
        {
          word: "12",
          definition: "Het getal twaalf, hier de dag van overlijden.",
          sentence: "Overleden op de ___e, een dag om te herdenken.",
          answer: "12"
        },
        {
          word: "1937",
          definition: "Het jaar negentienhonderdzevenendertig, hier het geboortejaar.",
          sentence: "Geboren in ___, was ze getuige van vele historische gebeurtenissen.",
          answer: "1937"
        },
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig, hier het jaar van overlijden.",
          sentence: "Overleden in ___, markeert het einde van een tijdperk.",
          answer: "2025"
        },
        {
          word: "Cerstelotte",
          definition: "Een familienaam, waarschijnlijk van Nederlandse of Duitse oorsprong.",
          sentence: "De familie van ___ heeft een lange geschiedenis in deze regio.",
          answer: "Cerstelotte"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Geboren in ___, was ze getuige van vele historische gebeurtenissen.",
          answer: "1937"
        },
        {
          sentence: "Overleden op de ___e, een dag om te herdenken.",
          answer: "12"
        },
        {
          sentence: "De maand van overlijden was ___, de elfde maand.",
          answer: "11"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Lieve Cerstelotte geboren?",
        options: [
          "1920",
          "1937",
          "1945",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Lieve Cerstelotte geworden?",
        options: [
          "77 jaar",
          "88 jaar",
          "90 jaar",
          "100 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Lieve Cerstelotte overleden?",
        options: [
          "1 januari 2025",
          "12 november 2025",
          "31 december 2025",
          "1 januari 2026"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Lieve Cerstelotte werd geboren in 1937 en overleed in 2025.",
        isTrue: true
      },
      {
        statement: "Lieve Cerstelotte overleed op 12 november 2025, wat betekent dat ze stierf op die specifieke datum.",
        isTrue: true
      },
      {
        statement: "Lieve Cerstelotte was 90 jaar oud toen ze overleed.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Marguerite Destrooper, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Marguerite Destrooper, 92 jaar",
      summary: "Geboren in 1933, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Het begin van het leven; het moment waarop iemand ter wereld komt.",
          sentence: "Ze werd ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "Niet meer in leven; gestorven.",
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        },
        {
          word: "1933",
          definition: "Een jaartal; verwijst naar het jaar 1933 na Christus.",
          sentence: "De grote depressie was in volle gang in ___.",
          answer: "1933"
        },
        {
          word: "2025",
          definition: "Een jaartal; verwijst naar het jaar 2025 na Christus.",
          sentence: "Ze verwachten de oplevering in ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De grote depressie was in volle gang in ___.",
          answer: "1933"
        },
        {
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        },
        {
          sentence: "Ze verwachten de oplevering in ___.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Marguerite Destrooper geboren?",
        options: [
          "1933",
          "1945",
          "1920",
          "1950"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de geboortemaand van Marguerite Destrooper?",
        options: [
          "Januari",
          "Februari",
          "Maart",
          "Onbekend"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud was Marguerite Destrooper geworden?",
        options: [
          "92 jaar",
          "93 jaar",
          "94 jaar",
          "95 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Marguerite Destrooper is geboren in 1933.",
        isTrue: true
      },
      {
        statement: "Marguerite Destrooper overleed in juni 2025.",
        isTrue: false
      },
      {
        statement: "De overlijdensdatum van Marguerite Destrooper is 20/10/2025.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Waarom is er weinig kritiek op de Emiraten?",
    topicNumber: 1,
    article: {
      title: "Waarom is er weinig kritiek op de Emiraten?",
      summary: "De Emiraten investeren veel geld in westerse wapenfabrikanten. Daardoor durven westerse leiders geen kritiek te geven."
    },
    vocabulary: {
      words: [
        {
          word: "kritiek",
          definition: "een negatieve mening over iets of iemand",
          sentence: "Hij kreeg veel ___ op zijn nieuwe boek.",
          answer: "kritiek"
        },
        {
          word: "Emiraten",
          definition: "een land in het Midden-Oosten, rijk door olie",
          sentence: "De ___ zijn rijk door hun olie.",
          answer: "Emiraten"
        },
        {
          word: "durven",
          definition: "genoeg moed hebben om iets te doen",
          sentence: "Ze ___ niet te zeggen wat ze echt denken.",
          answer: "durven"
        },
        {
          word: "investeren",
          definition: "geld uitgeven om later meer terug te krijgen",
          sentence: "Hij wil veel ___ in nieuwe technologie.",
          answer: "investeren"
        },
        {
          word: "leiders",
          definition: "mensen die een groep of land leiden",
          sentence: "De ___ van de landen bespreken de problemen.",
          answer: "leiders"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van de landen bespreken de problemen.",
          answer: "leiders"
        },
        {
          sentence: "Ze ___ niet te zeggen wat ze echt denken.",
          answer: "durven"
        },
        {
          sentence: "Hij wil veel ___ in nieuwe technologie.",
          answer: "investeren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom geven westerse leiders geen kritiek op de Emiraten?",
        options: [
          "Omdat ze de Emiraten niet kennen",
          "Omdat ze bang zijn voor de macht van de Emiraten",
          "Omdat ze het warm hebben",
          "Omdat ze de Emiraten steunen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de sjeiks in de Emiraten?",
        options: [
          "Ze zijn gewone burgers",
          "Ze zijn de leiders van het land",
          "Ze zijn buitenlandse toeristen",
          "Ze zijn historische figuren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet de wapenindustrie?",
        options: [
          "Ze maakt en verkoopt wapens",
          "Ze kookt eten voor het leger",
          "Ze bouwt huizen voor soldaten",
          "Ze onderwijst kinderen over vrede"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Emiraten investeren in westerse wapenfabrikanten.",
        isTrue: true
      },
      {
        statement: "Westerse leiders bekritiseren de Emiraten vaak.",
        isTrue: false
      },
      {
        statement: "De sjeiks zijn de leiders van de Emiraten.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Chinese hackers gebruiken AI voor spionage",
    topicNumber: 1,
    article: {
      title: "Chinese hackers gebruiken AI voor spionage",
      summary: "Chinese hackers gebruiken het AI-systeem Claude om bedrijven en overheden aan te vallen. Ze laten de AI het gevaarlijke werk doen. Experts zeggen: dit is een groot probleem voor cyberveiligheid."
    },
    vocabulary: {
      words: [
        {
          word: "veiligheid",
          definition: "veilig zijn, niet in gevaar zijn",
          sentence: "___ is belangrijk in het verkeer.",
          answer: "veiligheid"
        },
        {
          word: "experts",
          definition: "mensen die veel weten over een onderwerp",
          sentence: "De ___ weten veel over computers.",
          answer: "experts"
        },
        {
          word: "experts",
          definition: "mensen die veel weten over een onderwerp",
          sentence: "De ___ geven advies over gezondheid.",
          answer: "experts"
        },
        {
          word: "probleem",
          definition: "iets dat niet goed gaat of moeilijk is",
          sentence: "Hij heeft een ___ met zijn auto.",
          answer: "probleem"
        },
        {
          word: "experts",
          definition: "mensen die veel weten over een onderwerp",
          sentence: "We vragen advies aan de ___.",
          answer: "experts"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is belangrijk in het verkeer.",
          answer: "veiligheid"
        },
        {
          sentence: "De ___ weten veel over computers.",
          answer: "experts"
        },
        {
          sentence: "De ___ geven advies over gezondheid.",
          answer: "experts"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebruiken de hackers?",
        options: [
          "Een computer",
          "Een auto",
          "Een fiets",
          "Een AI-systeem"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is het gevolg van deze aanvallen?",
        options: [
          "Het is leuk voor de hackers",
          "Er is geen gevolg",
          "Er is een groot probleem voor de cyberveiligheid",
          "De hackers worden beroemd"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doen de experts?",
        options: [
          "Ze praten alleen",
          "Ze spelen een spel",
          "Ze geven advies en helpen bij het oplossen van problemen",
          "Ze gaan op vakantie"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De hackers gebruiken een auto voor de aanvallen.",
        isTrue: false
      },
      {
        statement: "De experts zeggen dat dit een groot probleem is.",
        isTrue: true
      },
      {
        statement: "Cyberveiligheid is niet belangrijk voor de hackers.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Nederlands dorp Moerdijk moet wijken",
    topicNumber: 1,
    article: {
      title: "Nederlands dorp Moerdijk moet wijken",
      summary: "Het dorp Moerdijk moet verdwijnen. De inwoners moeten verhuizen. Dit komt door de energietransitie en de haven."
    },
    vocabulary: {
      words: [
        {
          word: "energietransitie",
          definition: "de overstap naar schone energie, zoals wind- of zonne-energie",
          sentence: "Nederland werkt hard aan de ___.",
          answer: "energietransitie"
        },
        {
          word: "verhuizen",
          definition: "naar een andere plaats gaan wonen",
          sentence: "We moeten ___ naar een nieuwe woning.",
          answer: "verhuizen"
        },
        {
          word: "inwoners",
          definition: "mensen die in een plaats wonen",
          sentence: "De ___ van het dorp zijn erg vriendelijk.",
          answer: "inwoners"
        },
        {
          word: "haven",
          definition: "een plaats waar schepen kunnen aanleggen",
          sentence: "De ___ in Rotterdam is erg druk.",
          answer: "haven"
        },
        {
          word: "dorp",
          definition: "een plaats waar mensen wonen, kleiner dan een stad",
          sentence: "Het ___ is niet groot, maar wel gezellig.",
          answer: "dorp"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ in Rotterdam is erg druk.",
          answer: "haven"
        },
        {
          sentence: "We moeten ___ naar een nieuwe woning.",
          answer: "verhuizen"
        },
        {
          sentence: "Nederland werkt hard aan de ___.",
          answer: "energietransitie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom moet het dorp Moerdijk wijken?",
        options: [
          "Voor meer groen",
          "Voor de energietransitie",
          "Omdat er te weinig mensen wonen",
          "Omdat het dorp te oud is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'verduurzaming'?",
        options: [
          "Het bouwen van nieuwe huizen",
          "Het duurzamer maken van iets",
          "Het slopen van oude gebouwen",
          "Het planten van bomen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurt er met de inwoners van Moerdijk?",
        options: [
          "Ze blijven in hun huizen",
          "Ze verhuizen naar een andere plaats",
          "Ze krijgen een nieuwe baan",
          "Ze gaan op vakantie"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het dorp Moerdijk is pas een jaar oud.",
        isTrue: false
      },
      {
        statement: "De inwoners van Moerdijk moeten verhuizen vanwege de energietransitie.",
        isTrue: true
      },
      {
        statement: "De haven van Moerdijk wordt groter gemaakt.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Vrouw van 84 overleden",
    topicNumber: 1,
    article: {
      title: "Vrouw van 84 overleden",
      summary: "Een vrouw is overleden. Ze is 84 jaar oud geworden. Ze heet Flora Loos."
    },
    vocabulary: {
      words: [
        {
          word: "vrouw",
          definition: "een volwassen persoon van het vrouwelijk geslacht",
          sentence: "De ___ was heel oud.",
          answer: "vrouw"
        },
        {
          word: "overleden",
          definition: "niet meer leven; dood zijn",
          sentence: "Hij is ___ en begraven.",
          answer: "overleden"
        },
        {
          word: "geworden",
          definition: "geweest; veranderd in iets anders",
          sentence: "Hij is vader ___.",
          answer: "geworden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 of 366 dagen",
          sentence: "Hij is 70 ___ oud.",
          answer: "jaar"
        },
        {
          word: "oud",
          definition: "niet jong; veel leeftijd hebbend",
          sentence: "Ze is heel ___ maar nog gezond.",
          answer: "oud"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ was heel oud.",
          answer: "vrouw"
        },
        {
          sentence: "Ze is heel ___ maar nog gezond.",
          answer: "oud"
        },
        {
          sentence: "Hij is 70 ___ oud.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Flora Loos?",
        options: [
          "Een kind",
          "Een vrouw",
          "Een man",
          "Een dier"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Flora Loos?",
        options: [
          "84 jaar",
          "100 jaar",
          "50 jaar",
          "30 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Wanneer overleed Flora Loos?",
        options: [
          "11 november 2025",
          "11 november 1941",
          "11 november 2000",
          "11 november 2024"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Flora Loos is overleden.",
        isTrue: true
      },
      {
        statement: "Flora Loos was 100 jaar oud.",
        isTrue: false
      },
      {
        statement: "Flora Loos stierf in november.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Lieve C. (88) overleden",
    topicNumber: 1,
    article: {
      title: "Lieve C. (88) overleden",
      summary: "Lieve Cerstelotte is overleden. Ze was 88 jaar. Ze is geboren in 1937 en overleden op 12 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "begonnen met leven, uitgekomen uit de moeder",
          sentence: "Ze werd ___ in 1937.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, dood",
          sentence: "Hij is ___ na een ongeluk.",
          answer: "overleden"
        },
        {
          word: "Cerstelotte",
          definition: "een naam van een persoon",
          sentence: "___ was de achternaam van de overledene.",
          answer: "Cerstelotte"
        },
        {
          word: "Lieve",
          definition: "een manier om iemand aan te spreken, vriendelijk",
          sentence: "___ is een woord dat vaak wordt gebruikt in brieven.",
          answer: "Lieve"
        },
        {
          word: "overleden",
          definition: "niet meer levend, dood",
          sentence: "Hij is ___ na een lang ziekbed.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze werd ___ in 1937.",
          answer: "geboren"
        },
        {
          sentence: "___ is een woord dat vaak wordt gebruikt in brieven.",
          answer: "Lieve"
        },
        {
          sentence: "Hij is ___ na een lang ziekbed.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welke maand overleed Lieve Cerstelotte?",
        options: [
          "januari",
          "februari",
          "november",
          "december"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Lieve Cerstelotte toen ze overleed?",
        options: [
          "88 jaar",
          "89 jaar",
          "90 jaar",
          "91 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Lieve Cerstelotte geboren?",
        options: [
          "1935",
          "1936",
          "1937",
          "1938"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Lieve Cerstelotte overleed in november.",
        isTrue: true
      },
      {
        statement: "Lieve Cerstelotte was 90 jaar oud toen ze overleed.",
        isTrue: false
      },
      {
        statement: "Lieve Cerstelotte werd geboren in 1937.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Marguerite Destrooper, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Marguerite Destrooper, 92 jaar",
      summary: "Geboren in 1933, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Marguerite",
          definition: "Een vrouwelijke naam, een voornaam.",
          sentence: "__ is een mooie naam voor een meisje.",
          answer: "Marguerite"
        },
        {
          word: "Destrooper",
          definition: "Een familienaam, de achternaam.",
          sentence: "De familie __ is bekend in deze stad.",
          answer: "Destrooper"
        },
        {
          word: "geboren",
          definition: "Wanneer iemand is geboren, is die persoon ter wereld gekomen.",
          sentence: "Ik ben __ in 1990.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Mijn opa is __ in 2020.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 of 366 dagen.",
          sentence: "Een __ heeft 365 of 366 dagen.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "__ is een mooie naam voor een meisje.",
          answer: "Marguerite"
        },
        {
          sentence: "De familie __ is bekend in deze stad.",
          answer: "Destrooper"
        },
        {
          sentence: "Een __ heeft 365 of 366 dagen.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welke maand stierf Marguerite Destrooper?",
        options: [
          "Januari",
          "Februari",
          "Maart",
          "Oktober"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud was Marguerite Destrooper toen ze overleed?",
        options: [
          "90 jaar",
          "91 jaar",
          "92 jaar",
          "93 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "In welk jaar werd Marguerite Destrooper geboren?",
        options: [
          "1930",
          "1931",
          "1932",
          "1933"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Marguerite Destrooper werd geboren in 1933.",
        isTrue: true
      },
      {
        statement: "Marguerite Destrooper overleed in mei.",
        isTrue: false
      },
      {
        statement: "Marguerite Destrooper was 92 jaar oud toen ze overleed.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Waarom kritiek op de Emiraten uitblijft: de miljardendeals tussen de sjeiks en de westerse wapenindustrie in kaart gebracht",
    topicNumber: 1,
    article: {
      title: "Waarom kritiek op de Emiraten uitblijft: de miljardendeals tussen de sjeiks en de westerse wapenindustrie in kaart gebracht",
      summary: "Alle westerse leiders zijn geschokt door de gruwel in Soedan, maar geen van hen durft te wijzen op de medeplichtigheid van de Emiraten. Een blik op de forse investeringen van de sjeiks in de westerse wapenindustrie toont aan waarom ze zullen blijven zwijgen."
    },
    vocabulary: {
      words: [
        {
          word: "wapenindustrie",
          definition: "de industrie die wapens en munitie produceert",
          sentence: "De wapenindustrie is een belangrijke sector in veel landen.",
          answer: "wapenindustrie"
        },
        {
          word: "Emiraten",
          definition: "een land in het Midden-Oosten, officieel de Verenigde Arabische Emiraten",
          sentence: "De Emiraten zijn bekend om hun moderne steden en olie-export.",
          answer: "Emiraten"
        },
        {
          word: "sjeiks",
          definition: "een titel voor een leider in sommige Arabische landen",
          sentence: "De sjeiks van de regio bespraken de nieuwe handelsovereenkomst.",
          answer: "sjeiks"
        },
        {
          word: "miljardendeals",
          definition: "grote zakelijke overeenkomsten die miljarden waard zijn",
          sentence: "De miljardendeals tussen de twee landen werden vorige week ondertekend.",
          answer: "miljardendeals"
        },
        {
          word: "kritiek",
          definition: "een beoordeling of mening, vaak kritisch",
          sentence: "De kritiek op het nieuwe beleid was erg negatief.",
          answer: "kritiek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De miljardendeals tussen de twee landen werden vorige week ondertekend.",
          answer: "miljardendeals"
        },
        {
          sentence: "De sjeiks van de regio bespraken de nieuwe handelsovereenkomst.",
          answer: "sjeiks"
        },
        {
          sentence: "De kritiek op het nieuwe beleid was erg negatief.",
          answer: "kritiek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat de kritiek op de Emiraten?",
        options: [
          "Over hun mensenrechtenbeleid",
          "Over hun steun aan bepaalde groepen in Soedan",
          "Over hun investeringen in de wapenindustrie",
          "Over hun cultuur en geschiedenis"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een van de redenen waarom westerse leiders zwijgen over de Emiraten?",
        options: [
          "Ze zijn bang voor kritiek",
          "Ze profiteren zelf van de deals",
          "Ze weten er te weinig over",
          "Ze zijn het ermee eens"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat toont de analyse van de investeringen van de sjeiks?",
        options: [
          "Dat ze alleen in de wapenindustrie investeren",
          "Dat ze veel geld in westerse landen pompen",
          "Dat ze niet geïnteresseerd zijn in andere sectoren",
          "Dat ze alleen in Azië investeren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Emiraten worden niet bekritiseerd omdat westerse landen ook profiteren van hun deals.",
        isTrue: true
      },
      {
        statement: "Soedan is een van de grootste bondgenoten van de Emiraten.",
        isTrue: false
      },
      {
        statement: "De sjeiks investeren alleen in de wapenindustrie.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Chinese hackers gebruiken AI voor spionage",
    topicNumber: 1,
    article: {
      title: "Chinese hackers gebruiken AI voor spionage",
      summary: "Chinese hackers zijn ervan verdacht het AI-model Claude te gebruiken om bedrijven en overheden aan te vallen. Ze gebruikten een rollenspel en de 'salamitechniek' om het AI-model het werk te laten doen. Dit is een belangrijk moment voor cyberveiligheid en AI."
    },
    vocabulary: {
      words: [
        {
          word: "Chinese",
          definition: "betreft China of zijn inwoners",
          sentence: "___ hackers worden verdacht van spionage.",
          answer: "Chinese"
        },
        {
          word: "gebruiken",
          definition: "iets inzetten of toepassen voor een doel",
          sentence: "Ze ___ een speciale techniek om het systeem te misleiden.",
          answer: "gebruiken"
        },
        {
          word: "AI",
          definition: "kunstmatige intelligentie, computers die zelfstandig kunnen leren",
          sentence: "Het ___ -model heet Claude.",
          answer: "AI"
        },
        {
          word: "model",
          definition: "een voorbeeld of versie van iets, vaak software",
          sentence: "Het AI-___ heet Claude en is geavanceerd.",
          answer: "model"
        },
        {
          word: "techniek",
          definition: "een methode of manier om iets te doen, vaak technisch van aard",
          sentence: "De 'salamit___' is een slimme aanpak.",
          answer: "techniek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze ___ een speciale techniek om het systeem te misleiden.",
          answer: "gebruiken"
        },
        {
          sentence: "De 'salamit___' is een slimme aanpak.",
          answer: "techniek"
        },
        {
          sentence: "Het ___ -model heet Claude.",
          answer: "AI"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de 'salamitechniek' in deze context?",
        options: [
          "Een kooktechniek",
          "Een veiligheidsprotocol",
          "Een type encryptie",
          "Een hackingmethode"
        ],
        correctAnswer: 4
      },
      {
        question: "Waarom is deze gebeurtenis een keerpunt?",
        options: [
          "Omdat het de eerste AI-aanval is",
          "Omdat het de snelste computer betreft",
          "Omdat het de sterkste encryptie breekt",
          "Omdat het aantoont hoe AI misbruikt kan worden"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een 'rollenspel' in cybersecurity?",
        options: [
          "Een online game met vrienden",
          "Een trainingsoefening voor teams",
          "Een tactiek om systemen te testen",
          "Een methode om gebruikers te misleiden"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De hackers gebruikten Claude om directe aanvallen uit te voeren zonder sporen na te laten.",
        isTrue: false
      },
      {
        statement: "De 'salamitechniek' verwijst naar een manier om informatie in kleine stukjes te verdelen.",
        isTrue: true
      },
      {
        statement: "Dit incident heeft geen invloed op de ontwikkelingen in de beveiliging van AI-systemen.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
    topicNumber: 1,
    article: {
      title: "Nederlands dorp Moerdijk moet wijken: “Na de Watersnoodramp konden we ons dorp nog heropbouwen. Nu moeten we voorgoed weg”",
      summary: "Het duizend jaar oude dorp Moerdijk verdwijnt. 1.100 inwoners moeten plaatsmaken voor de energietransitie en de verduurzaming van de haven. “Moet de industrie altijd het laatste woord hebben?”"
    },
    vocabulary: {
      words: [
        {
          word: "dorp",
          definition: "een plaats of gemeenschap, kleiner dan een stad",
          sentence: "Het kleine ___ ligt aan de rivier.",
          answer: "dorp"
        },
        {
          word: "wijk",
          definition: "een deel van een stad of dorp, of een buurt",
          sentence: "De nieuwe ___ wordt gebouwd op de plaats van het oude dorp.",
          answer: "wijk"
        },
        {
          word: "industrie",
          definition: "bedrijven en fabrieken die samen producten maken",
          sentence: "De nieuwe ___ biedt banen, maar vervuilt ook de lucht.",
          answer: "industrie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het kleine ___ ligt aan de rivier.",
          answer: "dorp"
        },
        {
          sentence: "De nieuwe ___ wordt gebouwd op de plaats van het oude dorp.",
          answer: "wijk"
        },
        {
          sentence: "De nieuwe ___ biedt banen, maar vervuilt ook de lucht.",
          answer: "industrie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom moeten de inwoners van Moerdijk hun dorp verlaten?",
        options: [
          "Vanwege de Watersnoodramp",
          "Voor de bouw van een nieuwe snelweg",
          "Voor de uitbreiding van de haven en energietransitie",
          "Omdat ze een nieuw dorp willen bouwen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de houding van de inwoners ten opzichte van de verhuizing?",
        options: [
          "Ze zijn blij met de verandering",
          "Ze voelen zich machteloos en verdrietig",
          "Ze zijn onverschillig",
          "Ze zijn boos en willen vechten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk verschil tussen de Watersnoodramp en de huidige situatie?",
        options: [
          "Er is geen verschil, beide zijn natuurrampen",
          "De Watersnoodramp was natuurlijk, nu is de oorzaak de industrie",
          "De Watersnoodramp trof een groter gebied",
          "Nu is er meer internationale hulp"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het dorp Moerdijk is duizend jaar oud.",
        isTrue: true
      },
      {
        statement: "De inwoners mogen zelf kiezen of ze willen verhuizen.",
        isTrue: false
      },
      {
        statement: "Na de Watersnoodramp kon het dorp worden heropgebouwd.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Flora Loos, 84 jaar",
    topicNumber: 1,
    article: {
      title: "Flora Loos, 84 jaar",
      summary: "Geboren in 1941, overleden op 11/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Geboren zijn betekent dat je op een bepaalde dag ter wereld bent gekomen.",
          sentence: "Flora is ___ in 1941.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Overleden zijn betekent dat je niet meer leeft.",
          sentence: "Ze is ___ op 11 november 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "Een jaar is een periode van 365 dagen, of soms 366.",
          sentence: "Ze werd 84 ___ oud.",
          answer: "jaar"
        },
        {
          word: "overleden",
          definition: "Overleden zijn betekent dat je niet meer leeft.",
          sentence: "Ze is ___ op 11 november 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze werd 84 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Ze is ___ op 11 november 2025.",
          answer: "overleden"
        },
        {
          sentence: "Flora is ___ in 1941.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Flora Loos geboren?",
        options: [
          "In 1920",
          "In 1941",
          "In 1960",
          "In 1980"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de overlijdensdatum van Flora Loos?",
        options: [
          "11 november 2025",
          "12 november 2025",
          "11 december 2025",
          "11 november 2024"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Flora Loos toen ze overleed?",
        options: [
          "84 jaar",
          "85 jaar",
          "83 jaar",
          "86 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Flora Loos is overleden op 11 november 2025.",
        isTrue: true
      },
      {
        statement: "Flora Loos werd geboren in 1940.",
        isTrue: false
      },
      {
        statement: "Flora Loos werd 84 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Lieve Cerstelotte, 88 jaar",
    topicNumber: 1,
    article: {
      title: "Lieve Cerstelotte, 88 jaar",
      summary: "Geboren in 1937, overleden op 12/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Cerstelotte",
          definition: "Een ongebruikelijke naam, mogelijk een variant van Charlotte.",
          sentence: "___ is een meisjesnaam met een Duitse oorsprong.",
          answer: "Cerstelotte"
        },
        {
          word: "12/11",
          definition: "De datum 12 november.",
          sentence: "Ze overleed op ___ 2025.",
          answer: "12/11"
        },
        {
          word: "Lieve",
          definition: "Een liefdevolle of vriendelijke uitdrukking, vaak gebruikt in namen.",
          sentence: "___ is een meisjesnaam die 'geliefde' betekent.",
          answer: "Lieve"
        },
        {
          word: "2025",
          definition: "Een jaartal, het jaar 2025.",
          sentence: "Hij overleed in ___.",
          answer: "2025"
        },
        {
          word: "overleden",
          definition: "Niet meer levend, gestorven.",
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij overleed in ___.",
          answer: "2025"
        },
        {
          sentence: "___ is een meisjesnaam die 'geliefde' betekent.",
          answer: "Lieve"
        },
        {
          sentence: "Ze overleed op ___ 2025.",
          answer: "12/11"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Lieve Cerstelotte geboren?",
        options: [
          "1920",
          "1937",
          "1945",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van de naam 'Lieve'?",
        options: [
          "Liefdevol",
          "Oud",
          "Kort",
          "Gelukkig"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Lieve Cerstelotte?",
        options: [
          "1 januari",
          "12 november",
          "31 december",
          "1 mei"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Lieve Cerstelotte was 88 jaar oud toen ze overleed.",
        isTrue: true
      },
      {
        statement: "Lieve Cerstelotte werd geboren in 1920.",
        isTrue: false
      },
      {
        statement: "De datum van overlijden is 12 november 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Marguerite Destrooper, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Marguerite Destrooper, 92 jaar",
      summary: "Geboren in 1933, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Geboren zijn betekent dat je op een bepaalde datum ter wereld bent gekomen.",
          sentence: "Marguerite Destrooper is ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "Overleden zijn betekent dat iemand niet meer leeft.",
          sentence: "Ze is ___ op 20 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar is Marguerite Destrooper geboren?",
        options: [
          "1923",
          "1933",
          "1943",
          "1953"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Marguerite Destrooper toen ze overleed?",
        options: [
          "82 jaar",
          "90 jaar",
          "92 jaar",
          "100 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de betekenis van 'overleden'?",
        options: [
          "Net geboren zijn",
          "Niet meer leven",
          "Heel oud zijn",
          "Verhuisd zijn"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Marguerite Destrooper overleed op 92-jarige leeftijd.",
        isTrue: true
      },
      {
        statement: "Marguerite Destrooper werd geboren in de 18e eeuw.",
        isTrue: false
      },
      {
        statement: "Marguerite Destrooper overleed in het jaar 2025.",
        isTrue: true
      }
    ]
  }
];
