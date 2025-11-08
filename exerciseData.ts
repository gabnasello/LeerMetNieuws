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
    title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
    topicNumber: 1,
    article: {
      title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
      summary: "In iedere race, in iedere staat kregen de Republikeinen dinsdag zware klappen. Het krachtige signaal van de kiezer plaatst hen voor een dilemma. Ze kunnen niet zonder Trump en ze kunnen niet mét hem."
    },
    vocabulary: {
      words: [
        {
          word: "kunnen",
          definition: "in staat zijn om, kunnen",
          sentence: "Zij ___ goed zwemmen.",
          answer: "kunnen"
        },
        {
          word: "dilemma",
          definition: "een moeilijke keuze tussen twee opties",
          sentence: "Ze stond voor een ___: blijven of vertrekken?",
          answer: "dilemma"
        },
        {
          word: "staat",
          definition: "een gebied of gebiedsdeel met eigen bestuur, zoals in de VS",
          sentence: "Elke ___ heeft zijn eigen wetten.",
          answer: "staat"
        },
        {
          word: "klappen",
          definition: "geluiden van iets dat hard raakt, of een informele term voor problemen",
          sentence: "De auto kreeg een ___ bij de botsing.",
          answer: "klappen"
        },
        {
          word: "race",
          definition: "een wedstrijd of competitie",
          sentence: "De hardlopers namen deel aan de ___.",
          answer: "race"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De hardlopers namen deel aan de ___.",
          answer: "race"
        },
        {
          sentence: "Zij ___ goed zwemmen.",
          answer: "kunnen"
        },
        {
          sentence: "Ze stond voor een ___: blijven of vertrekken?",
          answer: "dilemma"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'krijgen' in de context van de tekst?",
        options: [
          "iets ontvangen",
          "iets kopen",
          "iets breken",
          "iets maken"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'staat' in de politieke context?",
        options: [
          "een land",
          "een stad",
          "een provincie",
          "een regio"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het tegenovergestelde van 'kunnen'?",
        options: [
          "mogen",
          "willen",
          "niet kunnen",
          "stoppen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Trump is nog steeds een belangrijke figuur voor de Republikeinse partij.",
        isTrue: true
      },
      {
        statement: "De Republikeinen wonnen alle verkiezingen op dinsdag.",
        isTrue: false
      },
      {
        statement: "Een dilemma betekent dat je moet kiezen tussen twee slechte opties.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
    topicNumber: 1,
    article: {
      title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
      summary: "Links Europa is klaar om te leren uit de campagne van de succesvolle Amerikaanse socialist Zohran Mamdani, die burgemeester van New York wordt. “Hij toont hoe een progressief kan winnen in het hol van de leeuw.”"
    },
    vocabulary: {
      words: [
        {
          word: "campagne",
          definition: "een georganiseerde actie om een doel te bereiken, vaak in politiek",
          sentence: "Hij startte een ___ om meer stemmen te winnen.",
          answer: "campagne"
        },
        {
          word: "uiterst",
          definition: "heel erg, in de hoogste mate",
          sentence: "De situatie was ___ gevaarlijk zonder hulp.",
          answer: "uiterst"
        },
        {
          word: "rechts",
          definition: "aan de rechterkant, of politiek conservatief",
          sentence: "De partij was ___ en stond voor traditionele waarden.",
          answer: "rechts"
        },
        {
          word: "kunde",
          definition: "kennis en vaardigheid in een bepaald gebied",
          sentence: "Zijn grote ___ was onmisbaar voor het project.",
          answer: "kunde"
        },
        {
          word: "winnen",
          definition: "een overwinning behalen, succes hebben",
          sentence: "Hij hoopte de verkiezing te ___ met zijn plannen.",
          answer: "winnen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij startte een ___ om meer stemmen te winnen.",
          answer: "campagne"
        },
        {
          sentence: "Hij hoopte de verkiezing te ___ met zijn plannen.",
          answer: "winnen"
        },
        {
          sentence: "De situatie was ___ gevaarlijk zonder hulp.",
          answer: "uiterst"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als politici campagne voeren?",
        options: [
          "Ze organiseren een verkiezingscampagne",
          "Ze gaan met vakantie",
          "Ze spelen een spel",
          "Ze doen niets"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een synoniem voor 'leren' in deze context?",
        options: [
          "Studeren",
          "Onderwijzen",
          "Afkijken",
          "Ontdekken"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat betekent 'uiterst' in de titel?",
        options: [
          "Heel, zeer",
          "Bijna niet",
          "Een klein beetje",
          "Alleen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Mamdani is een progressieve politicus.",
        isTrue: true
      },
      {
        statement: "De tekst stelt dat rechts altijd wint van links.",
        isTrue: false
      },
      {
        statement: "Europa kan leren van Amerikaanse campagnes.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Abu Dhabi levert wapens voor een genocide en zijn westerse bondgenoten zwijgen",
    topicNumber: 1,
    article: {
      title: "Abu Dhabi levert wapens voor een genocide en zijn westerse bondgenoten zwijgen",
      summary: "In ruil voor goud leveren de Verenigde Arabische Emiraten de wapens waarmee de Rapid Support Forces in Noord-Darfour een genocidale massamoord aanrichten. Toch wijst niet één wereldleider de sjeiks van Abu Dhabi terecht."
    },
    vocabulary: {
      words: [
        {
          word: "terecht",
          definition: "op de juiste manier, of met een goede reden",
          sentence: "Hij kreeg een boete en dat was helemaal ___.",
          answer: "terecht"
        },
        {
          word: "levert",
          definition: "geeft of verstrekt iets",
          sentence: "De supermarkt ___ voedsel en andere producten.",
          answer: "levert"
        },
        {
          word: "zwijgen",
          definition: "geen geluid maken, niet praten",
          sentence: "Wanneer de leraar boos is, moet de klas ___ en luisteren.",
          answer: "zwijgen"
        },
        {
          word: "goud",
          definition: "een heel waardevol, glimmend metaal",
          sentence: "Sieraden van ___ zijn vaak heel duur.",
          answer: "goud"
        },
        {
          word: "sjeiks",
          definition: "een soort leider of belangrijk persoon in sommige Arabische landen",
          sentence: "De ___ van dat land beslisten over de nieuwe wet.",
          answer: "sjeiks"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De supermarkt ___ voedsel en andere producten.",
          answer: "levert"
        },
        {
          sentence: "Wanneer de leraar boos is, moet de klas ___ en luisteren.",
          answer: "zwijgen"
        },
        {
          sentence: "De ___ van dat land beslisten over de nieuwe wet.",
          answer: "sjeiks"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'levert' in deze context?",
        options: [
          "geeft of verstrekt",
          "verbergt of verstopt",
          "verkoopt of ruilt",
          "verwacht of plant"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom leveren de Verenigde Arabische Emiraten wapens aan de Rapid Support Forces?",
        options: [
          "Omdat ze daarvoor goud krijgen",
          "Omdat ze dezelfde religie hebben",
          "Omdat ze een gezamenlijke vijand hebben",
          "Omdat ze een verdrag hebben ondertekend"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de houding van wereldleiders tegenover de sjeiks van Abu Dhabi?",
        options: [
          "Ze steunen hun acties openlijk",
          "Ze negeren de situatie volledig",
          "Ze zeggen niets tegen de sjeiks",
          "Ze werken samen voor meer macht"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Verenigde Arabische Emiraten leveren wapens in ruil voor goud.",
        isTrue: true
      },
      {
        statement: "Alle wereldleiders spreken de sjeiks van Abu Dhabi aan over hun daden.",
        isTrue: false
      },
      {
        statement: "De Rapid Support Forces voeren een massamoord uit in Noord-Darfour.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Luc Versluig, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Luc Versluig, 78 jaar",
      summary: "Hij is geboren in 1946 en overleden op 02/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het moment dat iemand ter wereld komt",
          sentence: "Zijn moeder ___ hem in 1946.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer in leven zijn",
          sentence: "Hij is ___ op 2 november 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Hij werd 78 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd 78 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Zijn moeder ___ hem in 1946.",
          answer: "geboren"
        },
        {
          sentence: "Hij is ___ op 2 november 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Luc Versluig geboren?",
        options: [
          "1940",
          "1946",
          "1950",
          "1956"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Luc Versluig toen hij overleed?",
        options: [
          "75 jaar",
          "78 jaar",
          "80 jaar",
          "85 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum overleed Luc Versluig?",
        options: [
          "1 november 2025",
          "2 november 2025",
          "3 november 2025",
          "4 november 2025"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Luc Versluig is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Luc Versluig overleed op 2 november 2025.",
        isTrue: true
      },
      {
        statement: "Luc Versluig was 80 jaar oud toen hij overleed.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Nanette Tassin, 96 jaar",
    topicNumber: 1,
    article: {
      title: "Nanette Tassin, 96 jaar",
      summary: "Geboren in 1928, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Ze is ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer leven",
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Ze is 96 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze is 96 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Ze is ___ in 1928.",
          answer: "geboren"
        },
        {
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Nanette Tassin geboren?",
        options: [
          "1920",
          "1928",
          "1930",
          "1940"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de geboortedatum van Nanette Tassin?",
        options: [
          "29 oktober 1928",
          "1 januari 1928",
          "29 oktober 1925",
          "1 januari 1925"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Nanette Tassin toen ze overleed?",
        options: [
          "96 jaar",
          "100 jaar",
          "90 jaar",
          "85 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Nanette Tassin is geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin overleed op 29/10/2025.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin was 100 jaar oud bij overlijden.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Patrick Brems, 64 jaar",
    topicNumber: 1,
    article: {
      title: "Patrick Brems, 64 jaar",
      summary: "Hij is geboren in 1960 en overleden op 4 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Brems",
          definition: "de achternaam van deze persoon",
          sentence: "Zijn achternaam is ___.",
          answer: "Brems"
        },
        {
          word: "geboren",
          definition: "begonnen met leven, het tegenovergestelde van gestorven",
          sentence: "Hij is ___ in 1960.",
          answer: "geboren"
        },
        {
          word: "Hij",
          definition: "verwijst naar een mannelijk persoon",
          sentence: "___ is een man.",
          answer: "Hij"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Hij is 64 ___ oud.",
          answer: "jaar"
        },
        {
          word: "op",
          definition: "geeft een bepaalde dag of tijd aan",
          sentence: "Hij stierf ___ 4 november 2025.",
          answer: "op"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is 64 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "___ is een man.",
          answer: "Hij"
        },
        {
          sentence: "Zijn achternaam is ___.",
          answer: "Brems"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Patrick geboren?",
        options: [
          "1960",
          "1965",
          "1970",
          "1975"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de achternaam van Patrick?",
        options: [
          "Brems",
          "Jansen",
          "De Vries",
          "Peters"
        ],
        correctAnswer: 1
      },
      {
        question: "Is Patrick nog in leven?",
        options: [
          "Ja, hij leeft nog",
          "Nee, hij is overleden",
          "Ik weet het niet",
          "Het artikel zegt het niet"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Patrick is geboren in 1960.",
        isTrue: true
      },
      {
        statement: "Patrick is overleden in 2024.",
        isTrue: false
      },
      {
        statement: "Patrick heeft de achternaam Brems.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Trump en de verkiezingen",
    topicNumber: 1,
    article: {
      title: "Is Trump nog een troef of juist niet?",
      summary: "De Republikeinen hebben problemen na de verkiezingen. Ze moeten kiezen: met Trump of zonder Trump."
    },
    vocabulary: {
      words: [
        {
          word: "niet",
          definition: "geen, ontkenning",
          sentence: "Het is niet waar.",
          answer: "niet"
        },
        {
          word: "Trump",
          definition: "een persoonnaam, de naam van een man",
          sentence: "Trump was president van Amerika.",
          answer: "Trump"
        },
        {
          word: "is",
          definition: "zijn, het tegenwoordige tijd van zijn",
          sentence: "Hij is een man.",
          answer: "is"
        },
        {
          word: "of",
          definition: "een voegwoord, geeft een keuze aan",
          sentence: "Wil je thee of koffie?",
          answer: "of"
        },
        {
          word: "een",
          definition: "een lidwoord, geeft aan dat het er een is",
          sentence: "Ik heb een appel.",
          answer: "een"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Trump was president van Amerika.",
          answer: "Trump"
        },
        {
          sentence: "Het is niet waar.",
          answer: "niet"
        },
        {
          sentence: "Ik heb een appel.",
          answer: "een"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Trump?",
        options: [
          "Een soort fruit",
          "Een voetbalteam",
          "Een bekende persoon",
          "Een soort auto"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'niet'?",
        options: [
          "Ja",
          "Nee",
          "Soms",
          "Altijd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doen de Republikeinen?",
        options: [
          "Ze werken in een winkel.",
          "Ze hebben problemen na de verkiezingen.",
          "Ze spelen voetbal.",
          "Ze eten een appel."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de naam van een persoon.",
        isTrue: true
      },
      {
        statement: "De Republikeinen hebben problemen na de verkiezingen.",
        isTrue: true
      },
      {
        statement: "Trump is een soort fruit.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Politicus wint verkiezingen",
    topicNumber: 1,
    article: {
      title: "Politicus wint verkiezingen",
      summary: "Een politicus wint een verkiezing. Hij is nu burgemeester van New York. Hij laat zien dat progressieven ook kunnen winnen."
    },
    vocabulary: {
      words: [
        {
          word: "wint",
          definition: "heeft succes in een wedstrijd of verkiezing",
          sentence: "Hij ___ de verkiezing en wordt burgemeester.",
          answer: "wint"
        },
        {
          word: "winnen",
          definition: "iets halen of succes hebben",
          sentence: "Zij ___ de wedstrijd en zijn erg blij.",
          answer: "winnen"
        },
        {
          word: "progressieven",
          definition: "mensen die willen veranderen en verbeteren",
          sentence: "De ___ willen helpen en verbeteren.",
          answer: "progressieven"
        },
        {
          word: "burgemeester",
          definition: "de leider van een stad of gemeente",
          sentence: "De ___ leidt de stad en helpt de mensen.",
          answer: "burgemeester"
        },
        {
          word: "verkiezing",
          definition: "een keer dat mensen stemmen voor een nieuwe leider",
          sentence: "De ___ is belangrijk voor democratie.",
          answer: "verkiezing"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ is belangrijk voor democratie.",
          answer: "verkiezing"
        },
        {
          sentence: "Hij ___ de verkiezing en wordt burgemeester.",
          answer: "wint"
        },
        {
          sentence: "De ___ leidt de stad en helpt de mensen.",
          answer: "burgemeester"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een burgemeester?",
        options: [
          "Een soort dier",
          "De leider van een stad",
          "Een type auto",
          "Iemand die alleen in het verleden leeft"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent het om een verkiezing te winnen?",
        options: [
          "Je verliest iets",
          "Je krijgt een nieuwe taak of positie",
          "Je gaat naar huis",
          "Je stopt met werken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'hol van de leeuw'?",
        options: [
          "Een veilige plek",
          "Een gevaarlijke plek",
          "Een restaurant",
          "Een sportschool"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Een burgemeester is de leider van een land.",
        isTrue: false
      },
      {
        statement: "Progressieven zijn mensen die willen veranderen en verbeteren.",
        isTrue: true
      },
      {
        statement: "De burgemeester van New York woont in een hol.",
        isItrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Abu Dhabi levert wapens",
    topicNumber: 1,
    article: {
      title: "Abu Dhabi levert wapens",
      summary: "Abu Dhabi levert wapens. Andere landen zijn stil."
    },
    vocabulary: {
      words: [
        {
          word: "zijn",
          definition: "het werkwoord van zijn",
          sentence: "Zij ___ vrienden.",
          answer: "zijn"
        },
        {
          word: "levert",
          definition: "geeft iets aan iemand",
          sentence: "Hij ___ een pakje.",
          answer: "levert"
        },
        {
          word: "Dhabi",
          definition: "deel van de naam van de stad",
          sentence: "Abu ___ is een stad.",
          answer: "Dhabi"
        },
        {
          word: "Abu",
          definition: "een naam van een plaats",
          sentence: "___ Dhabi is een stad.",
          answer: "Abu"
        },
        {
          word: "en",
          definition: "woord om twee zinnen te verbinden",
          sentence: "Ik heb een pen ___ een boek.",
          answer: "en"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ een pakje.",
          answer: "levert"
        },
        {
          sentence: "___ Dhabi is een stad.",
          answer: "Abu"
        },
        {
          sentence: "Ik heb een pen ___ een boek.",
          answer: "en"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat levert Abu Dhabi?",
        options: [
          "wapens",
          "eten",
          "auto's",
          "boeken"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen de bondgenoten?",
        options: [
          "ze praten",
          "ze zwijgen",
          "ze lachen",
          "ze rennen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is Abu Dhabi?",
        options: [
          "in Azië",
          "in Afrika",
          "in Europa",
          "in Nederland"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Abu Dhabi levert wapens.",
        isTrue: true
      },
      {
        statement: "De bondgenoten praten veel.",
        isTrue: false
      },
      {
        statement: "Abu Dhabi is een stad.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Luc Versluys, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Luc Versluys, 78 jaar",
      summary: "Hij is geboren in 1946. Hij is overleden op 2 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Hij",
          definition: "verwijst naar een man",
          sentence: "___ is een man.",
          answer: "Hij"
        },
        {
          word: "is",
          definition: "zijn (to be)",
          sentence: "Hij ___ een man.",
          answer: "is"
        },
        {
          word: "in",
          definition: "in (locatie)",
          sentence: "Hij woonde ___ een huis.",
          answer: "in"
        },
        {
          word: "op",
          definition: "op (tijdstip)",
          sentence: "Hij overleed ___ 2 november 2025.",
          answer: "op"
        },
        {
          word: "jaar",
          definition: "eenheid van tijd (365 dagen)",
          sentence: "Hij werd 78 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ een man.",
          answer: "is"
        },
        {
          sentence: "Hij overleed ___ 2 november 2025.",
          answer: "op"
        },
        {
          sentence: "Hij woonde ___ een huis.",
          answer: "in"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Luc Versluys geboren?",
        options: [
          "In 1946",
          "In 1945",
          "In 1947",
          "In 1948"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Luc Versluys toen hij overleed?",
        options: [
          "78 jaar",
          "77 jaar",
          "79 jaar",
          "80 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Luc Versluys?",
        options: [
          "2 november 2025",
          "3 november 2025",
          "2 december 2025",
          "3 december 2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Luc Versluys is geboren in 1945.",
        isTrue: false
      },
      {
        statement: "Luc Versluys overleed op 2 november 2025.",
        isTrue: true
      },
      {
        statement: "Luc Versluys werd 80 jaar oud.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Nanette Tassin, 96 jaar",
    topicNumber: 1,
    article: {
      title: "Nanette Tassin, 96 jaar",
      summary: "Geboren in 1928, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Nanette Tassin is ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Ze was 96 ___ oud.",
          answer: "jaar"
        },
        {
          word: "over",
          definition: "voorbij, afgelopen",
          sentence: "Het feest is al ___.",
          answer: "over"
        },
        {
          word: "in",
          definition: "een locatie, ergens binnen",
          sentence: "Ze is geboren ___ 1928.",
          answer: "in"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het feest is al ___.",
          answer: "over"
        },
        {
          sentence: "Ze is geboren ___ 1928.",
          answer: "in"
        },
        {
          sentence: "Ze was 96 ___ oud.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden'?",
        options: [
          "geweest op een feest",
          "gestorven",
          "heel oud",
          "uitgevallen van ouderdom"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'geboren'?",
        options: [
          "begonnen met leven",
          "gestorven",
          "verhuisd",
          "getrouwd"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'leven'?",
        options: [
          "dood zijn",
          "niet meer bestaan",
          "actief zijn",
          "slapen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Nanette Tassin is geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Ze is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Ze is nu 100 jaar oud.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Patrick Brems, 64 jaar",
    topicNumber: 1,
    article: {
      title: "Patrick Brems, 64 jaar",
      summary: "Geboren in 1960, overleden op 04/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Brems",
          definition: "Familienaam.",
          sentence: "De familie ___ heeft een huis.",
          answer: "Brems"
        },
        {
          word: "Patrick",
          definition: "Een mannelijke naam.",
          sentence: "___ is een man.",
          answer: "Patrick"
        },
        {
          word: "gebor",
          definition: "Niet meer leven.",
          sentence: "Hij is ___ in 2025.",
          answer: "overleden"
        },
        {
          word: "11",
          definition: "De elfde maand van het jaar.",
          sentence: "Hij overleed op 04/___/2025.",
          answer: "11"
        },
        {
          word: "04",
          definition: "De vierde dag van de maand.",
          sentence: "Hij overleed op ___ november.",
          answer: "04"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een man.",
          answer: "Patrick"
        },
        {
          sentence: "Hij is ___ in 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij overleed op ___ november.",
          answer: "04"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van Patrick Brems?",
        options: [
          "1960",
          "1961",
          "1962",
          "1963"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar overleed Patrick Brems?",
        options: [
          "2024",
          "2025",
          "2026",
          "2027"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de achternaam van Patrick?",
        options: [
          "Jansen",
          "Pieters",
          "Brems",
          "de Vries"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Patrick Brems is geboren in 1960.",
        isTrue: true
      },
      {
        statement: "Patrick overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Patrick zijn achternaam is Brems.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
    topicNumber: 1,
    article: {
      title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
      summary: "In iedere race, in iedere staat kregen de Republikeinen dinsdag zware klappen. Het krachtige signaal van de kiezer plaatst hen voor een dilemma. Ze kunnen niet zonder Trump en ze kunnen niet mét hem."
    },
    vocabulary: {
      words: [
        {
          word: "signaal",
          definition: "Een teken of indicatie van iets",
          sentence: "Het was een duidelijk ___ van de kiezers.",
          answer: "signaal"
        },
        {
          word: "niet",
          definition: "Gebruikt om ontkenning aan te duiden",
          sentence: "Ze kunnen ___ zonder hem.",
          answer: "niet"
        },
        {
          word: "klappen",
          definition: "Slagen of klappen, vaak figuurlijk gebruikt voor tegenslag",
          sentence: "Na de verkiezingen kregen ze harde ___.",
          answer: "klappen"
        },
        {
          word: "race",
          definition: "Een wedstrijd of competitie, vooral in een politieke context",
          sentence: "De politieke ___ was intens tijdens de verkiezingen.",
          answer: "race"
        },
        {
          word: "staat",
          definition: "Een politieke eenheid binnen een land, zoals in de Verenigde Staten",
          sentence: "Elke ___ heeft zijn eigen verkiezingsregels.",
          answer: "staat"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze kunnen ___ zonder hem.",
          answer: "niet"
        },
        {
          sentence: "De politieke ___ was intens tijdens de verkiezingen.",
          answer: "race"
        },
        {
          sentence: "Elke ___ heeft zijn eigen verkiezingsregels.",
          answer: "staat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'klappen' in deze context?",
        options: [
          "Applaus",
          "Tegenslag",
          "Opstootje",
          "Overwinning"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat wordt bedoeld met 'kunnen niet mét hem'?",
        options: [
          "Niet in zijn nabijheid kunnen zijn",
          "Hem niet kunnen verstaan",
          "Niet met hem kunnen samenwerken",
          "Hij past niet in de groep"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Trump is onmisbaar",
          "Republikeinen zijn verdeeld",
          "Kiezers sturen een signaal",
          "Trump is een last"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Republikeinen wonnen overal op dinsdag.",
        isTrue: false
      },
      {
        statement: "Trump is zowel een voordeel als een nadeel voor de Republikeinen.",
        isTrue: true
      },
      {
        statement: "De kiezer heeft duidelijk gemaakt dat verandering nodig is.",
        isTrue: true
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
    topicNumber: 1,
    article: {
      title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
      summary: "Links Europa is klaar om te leren uit de campagne van de succesvolle Amerikaanse socialist Zohran Mamdani, die burgemeester van New York wordt. “Hij toont hoe een progressief kan winnen in het hol van de leeuw.”"
    },
    vocabulary: {
      words: [
        {
          word: "links",
          definition: "Verwijst naar de politieke richting die progressieve of socialistische ideeën nastreeft.",
          sentence: "Hij staat bekend als een ___ denker in de gemeenschap.",
          answer: "links"
        },
        {
          word: "progressieven",
          definition: "Mensen die vooruitgang of hervorming nastreven, vaak in een politieke context.",
          sentence: "De ___ in het parlement hebben nieuwe wetten voorgesteld.",
          answer: "progressieven"
        },
        {
          word: "hol",
          definition: "Een holle ruimte of een plek die beschutting biedt, vaak gebruikt in metaforen.",
          sentence: "Het leeuwtje verliet zijn ___ pas na een maand.",
          answer: "hol"
        },
        {
          word: "leeuw",
          definition: "Een groot, krachtig zoogdier; vaak symbolisch voor kracht of gevaar.",
          sentence: "Hij voelde zich als een ___ in zijn kracht tijdens de presentatie.",
          answer: "leeuw"
        },
        {
          word: "rechts",
          definition: "Betreft de politieke richting die conservatieve of traditionele waarden benadrukt.",
          sentence: "De partij bevindt zich meer naar ___ op het spectrum.",
          answer: "rechts"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het leeuwtje verliet zijn ___ pas na een maand.",
          answer: "hol"
        },
        {
          sentence: "De partij bevindt zich meer naar ___ op het spectrum.",
          answer: "rechts"
        },
        {
          sentence: "De ___ in het parlement hebben nieuwe wetten voorgesteld.",
          answer: "progressieven"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'het hol van de leeuw' in deze context?",
        options: [
          "Een veilige plek",
          "Een gevaarlijke of uitdagende situatie",
          "Een rustige omgeving",
          "Een koninklijk paleis"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van Zohran Mamdani in deze tekst?",
        options: [
          "Hij is een lokale activist",
          "Hij is een professionele atleet",
          "Hij is een politiek figuur die campagne voert",
          "Hij is een journalist"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat wordt er bedoeld met 'Links Europa is klaar om te leren'?",
        options: [
          "Europa is fysiek klaar om te leren",
          "Links-politiek in Europa is bereid om lessen te trekken",
          "Europa heeft een nieuwe educatiecampagne",
          "Links Europa is een geografische locatie"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is een Amerikaanse politicus die campagne voert.",
        isTrue: true
      },
      {
        statement: "De tekst stelt dat progressieven niet in staat zijn om effectief campagne te voeren.",
        isTrue: false
      },
      {
        statement: "Het begrip 'het hol van de leeuw' betekent in deze context een uitdagende of riskante situatie.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Abu Dhabi levert wapens voor een genocide en hun westerse bondgenoten zwijgen",
    topicNumber: 1,
    article: {
      title: "Abu Dhabi levert wapens voor een genocide en hun westerse bondgenoten zwijgen",
      summary: "In ruil voor goud leveren de Verenigde Arabische Emiraten de wapens waarmee de Rapid Support Forces in Noord-Darfour een genocidale massamoord aanrichten. Toch wijst niet één wereldleider de sjeiks van Abu Dhabi terecht."
    },
    vocabulary: {
      words: [
        {
          word: "genocide",
          definition: "opzettelijke massamoord op een bepaalde groep",
          sentence: "De VN onderzoekt of er sprake is van ___ in het conflict.",
          answer: "genocide"
        },
        {
          word: "massamoord",
          definition: "het op grote schaal doden van mensen",
          sentence: "De massagraven getuigen van de ___ die plaatsvond.",
          answer: "massamoord"
        },
        {
          word: "levert",
          definition: "verstrekt of geeft iets",
          sentence: "De organisatie ___ medische hulp aan de getroffen regio.",
          answer: "levert"
        },
        {
          word: "sjeiks",
          definition: "leiders of hooggeplaatste personen in sommige Arabische landen",
          sentence: "De ___ onderhandelden over de nieuwe olieprijzen.",
          answer: "sjeiks"
        },
        {
          word: "bondgenoten",
          definition: "landen of partijen die samenwerken, vaak in een oorlog",
          sentence: "De ___ van het pact kwamen bijeen om de strategie te bespreken.",
          answer: "bondgenoten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De organisatie ___ medische hulp aan de getroffen regio.",
          answer: "levert"
        },
        {
          sentence: "De ___ van het pact kwamen bijeen om de strategie te bespreken.",
          answer: "bondgenoten"
        },
        {
          sentence: "De VN onderzoekt of er sprake is van ___ in het conflict.",
          answer: "genocide"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden dat de Verenigde Arabische Emiraten wapens leveren aan Rapid Support Forces?",
        options: [
          "Om humanitaire redenen",
          "Vanwege een economisch akkoord voor goud",
          "Omdat de VAE zelf wordt aangevallen",
          "Op verzoek van de Verenigde Naties"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de reactie van westerse leiders op de wapenleveranties door de VAE?",
        options: [
          "Ze steunen de VAE openlijk",
          "Ze veroordelen de VAE unaniem",
          "Ze ondernemen geen actie en zwijgen",
          "Ze sturen hun eigen troepen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een gevolg van de wapenleveranties aan de Rapid Support Forces?",
        options: [
          "Er breekt vrede uit in de regio",
          "De VAE wordt internationaal geprezen",
          "Er vinden grootschalige mensenrechtenschendingen plaats",
          "De VAE stopt onmiddellijk met leveren"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Verenigde Arabische Emiraten leveren wapens in ruil voor goud.",
        isTrue: true
      },
      {
        statement: "Westerse bondgenoten spreken zich uniek uit tegen de wapenleveranties.",
        isTrue: false
      },
      {
        statement: "De Rapid Support Forces plegen massamoorden in Noord-Darfour.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Luc Versluig, 78 jaar oud",
    topicNumber: 1,
    article: {
      title: "Luc Versluig, 78 jaar oud",
      summary: "Geboren in 1946, overleden op 02/11/2025"
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Het moment waarop iemand sterft; overlijden",
          sentence: "Hij ___ op 02/11/2025.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Het jaar waarin de overledene stierf; jaartal",
          sentence: "Hij stierf in het jaar ___.",
          answer: "2025"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven",
          sentence: "Hij is helaas ___.",
          answer: "overleden"
        },
        {
          word: "1946",
          definition: "Het jaar waarin de overledene geboren is; jaartal",
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1946"
        },
        {
          word: "Luc",
          definition: "Voornaam van de overledene; eigennaam",
          sentence: "___ was de voornaam van de overledene.",
          answer: "Luc"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1946"
        },
        {
          sentence: "Hij stierf in het jaar ___.",
          answer: "2025"
        },
        {
          sentence: "Hij ___ op 02/11/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Luc Versluig geboren?",
        options: [
          "1945",
          "1946",
          "1947",
          "1948"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Luc Versluig overleden?",
        options: [
          "01/11/2025",
          "02/11/2025",
          "03/11/2025",
          "04/11/2025"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de volledige naam van de overledene?",
        options: [
          "Luc Versluig",
          "Piet Versluig",
          "Jan Versluig",
          "Kees Versluig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Luc Versluig is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Luc Versluig overleed op 01/11/2025.",
        isTrue: false
      },
      {
        statement: "De volledige naam van de overledene is Luc Versluig.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Nanette Tassin, 96 jaar",
    topicNumber: 1,
    article: {
      title: "Nanette Tassin, 96 jaar",
      summary: "Geboren in 1928, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Het begin van iemands leven; het ter wereld komen.",
          sentence: "Zij werd ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer in leven zijn; gestorven.",
          sentence: "Hij is ___ op 15 maart.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van Nanette Tassin?",
        options: [
          "1928",
          "1929",
          "1930",
          "1931"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar overleed Nanette Tassin?",
        options: [
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Nanette Tassin toen ze overleed?",
        options: [
          "96 jaar",
          "95 jaar",
          "97 jaar",
          "98 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Nanette Tassin werd geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin overleed op 29 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin was 97 jaar oud bij haar overlijden.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Patrick Brems, 64 jaar",
    topicNumber: 1,
    article: {
      title: "Patrick Brems, 64 jaar",
      summary: "Geboren in 1960, overleden op 04/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Patrick",
          definition: "Een mannelijke voornaam, afgeleid van het Latijnse 'Patricius'.",
          sentence: "___ was een veel voorkomende naam in de jaren zestig.",
          answer: "Patrick"
        },
        {
          word: "Brems",
          definition: "Een familienaam van waarschijnlijk Nederlandse of Belgische oorsprong.",
          sentence: "De familie ___ heeft een lange geschiedenis in deze regio.",
          answer: "Brems"
        },
        {
          word: "geboren",
          definition: "Het begin van het leven; het ter wereld komen.",
          sentence: "Hij werd ___ in een klein dorp in de jaren veertig.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Het overlijden; het beëindigen van het leven.",
          sentence: "Hij is recent ___ na een lang ziekbed.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is recent ___ na een lang ziekbed.",
          answer: "overleden"
        },
        {
          sentence: "De familie ___ heeft een lange geschiedenis in deze regio.",
          answer: "Brems"
        },
        {
          sentence: "___ was een veel voorkomende naam in de jaren zestig.",
          answer: "Patrick"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden' in deze context?",
        options: [
          "Ging slapen",
          "Is gestorven",
          "Verhuisde",
          "Is geboren"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk jaar werd Patrick Brems geboren?",
        options: [
          "1960",
          "1961",
          "1962",
          "1963"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Patrick Brems op het moment van overlijden?",
        options: [
          "64 jaar",
          "65 jaar",
          "63 jaar",
          "66 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Patrick Brems stierf in de maand november.",
        isTrue: true
      },
      {
        statement: "Patrick Brems werd geboren in de 20e eeuw.",
        isTrue: true
      },
      {
        statement: "Patrick Brems leefde tot in de 21e eeuw.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
    topicNumber: 1,
    article: {
      title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
      summary: "In iedere race, in iedere staat kregen de Republikeinen dinsdag zware klappen. Het krachtige signaal van de kiezer plaatst hen voor een dilemma. Ze kunnen niet zonder Trump en ze kunnen niet mét hem."
    },
    vocabulary: {
      words: [
        {
          word: "plaatst",
          definition: "zet of stopt iets",
          sentence: "Hij ___ het boek op de tafel.",
          answer: "plaatst"
        },
        {
          word: "dilemma",
          definition: "een moeilijke keuze tussen twee dingen",
          sentence: "Het was een echt ___: gaan of blijven?",
          answer: "dilemma"
        },
        {
          word: "staat",
          definition: "een gebied in een land, zoals een provincie",
          sentence: "Elke ___ heeft zijn eigen regels.",
          answer: "staat"
        },
        {
          word: "signaal",
          definition: "een teken of bericht",
          sentence: "Het ___ was duidelijk: stop nu.",
          answer: "signaal"
        },
        {
          word: "klappen",
          definition: "harde geluiden, of moeilijke momenten",
          sentence: "Hij kreeg veel ___ tijdens de wedstrijd.",
          answer: "klappen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Elke ___ heeft zijn eigen regels.",
          answer: "staat"
        },
        {
          sentence: "Het ___ was duidelijk: stop nu.",
          answer: "signaal"
        },
        {
          sentence: "Het was een echt ___: gaan of blijven?",
          answer: "dilemma"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het woord 'race' in deze context?",
        options: [
          "een snel bewegend voertuig",
          "een wedstrijd of competitie",
          "een type dier",
          "een hard geluid"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van 'dilemma'?",
        options: [
          "een gemakkelijke keuze",
          "een moeilijke keuze tussen twee dingen",
          "een soort dier",
          "een groot feest"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Koken en eten",
          "Politiek en verkiezingen",
          "Sport en wedstrijden",
          "Muziek en dans"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump is nog steeds een sterke leider voor de Republikeinen.",
        isTrue: false
      },
      {
        statement: "De Republikeinen verloren sterk bij de verkiezingen.",
        isTrue: true
      },
      {
        statement: "Trump kan niet meer meedoen aan verkiezingen.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Mamdani laat zien hoe progressieven campagne kunnen voeren",
    topicNumber: 1,
    article: {
      title: "Mamdani laat zien hoe progressieven campagne kunnen voeren",
      summary: "Links Europa is klaar om te leren uit de campagne van de succesvolle Amerikaanse socialist Zohran Mamdani, die burgemeester van New York wordt. Hij toont hoe een progressief kan winnen in het hol van de leeuw."
    },
    vocabulary: {
      words: [
        {
          word: "progressieven",
          definition: "mensen die vooruitgang willen, positieve verandering",
          sentence: "De ___ willen het land verbeteren.",
          answer: "progressieven"
        },
        {
          word: "campagne",
          definition: "een georganiseerde actie om een doel te bereiken, vaak politiek",
          sentence: "Hij voerde een goede ___ voor de verkiezingen.",
          answer: "campagne"
        },
        {
          word: "winnen",
          definition: "iets halen, slagen in iets",
          sentence: "Hij hoopte de verkiezingen te ___.",
          answer: "winnen"
        },
        {
          word: "Amerikaanse",
          definition: "iets of iemand uit de Verenigde Staten",
          sentence: "De ___ president sprak over het klimaat.",
          answer: "Amerikaanse"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ president sprak over het klimaat.",
          answer: "Amerikaanse"
        },
        {
          sentence: "Hij hoopte de verkiezingen te ___.",
          answer: "winnen"
        },
        {
          sentence: "Hij voerde een goede ___ voor de verkiezingen.",
          answer: "campagne"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is Zohran Mamdani burgemeester van?",
        options: [
          "New York",
          "Amsterdam",
          "Londen",
          "Parijs"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'winnen' in deze context?",
        options: [
          "verliezen",
          "winnen",
          "vechten",
          "spelen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van Europa volgens de tekst?",
        options: [
          "leren van de campagne",
          "negeren van de campagne",
          "stoppen met de campagne",
          "bekritiseren van de campagne"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is de burgemeester van New York.",
        isTrue: true
      },
      {
        statement: "Progressieven verliezen altijd in het hol van de leeuw.",
        isTrue: false
      },
      {
        statement: "Europa kan leren van de campagne van Mamdani.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Abu Dhabi levert wapens voor een genocide",
    topicNumber: 1,
    article: {
      title: "Abu Dhabi levert wapens voor een genocide",
      summary: "In ruil voor goud leveren de Verenigde Arabische Emiraten de wapens waarmee de Rapid Support Forces in Noord-Darfour een genocidale massamoord aanrichten. Toch wijst niet één wereldleider de sjeiks van Abu Dhabi terecht."
    },
    vocabulary: {
      words: [
        {
          word: "wapens",
          definition: "dingen waarmee je kunt schieten, zoals een geweer",
          sentence: "Soms geven landen ___ aan andere landen.",
          answer: "wapens"
        },
        {
          word: "levert",
          definition: "geeft iets aan iemand, zoals een product of dienst",
          sentence: "De supermarkt ___ boodschappen aan klanten.",
          answer: "levert"
        },
        {
          word: "genocide",
          definition: "het opzettelijk doden van een hele groep mensen",
          sentence: "In een ___ worden veel onschuldige mensen gedood.",
          answer: "genocide"
        },
        {
          word: "massamoord",
          definition: "het doden van veel mensen in één keer",
          sentence: "Een ___ is een verschrikkelijke gebeurtenis.",
          answer: "massamoord"
        },
        {
          word: "sjeiks",
          definition: "een belangrijke leider in sommige Arabische landen",
          sentence: "De ___ hebben veel invloed in hun land.",
          answer: "sjeiks"
        }
      ],
      fillInBlanks: [
        {
          sentence: "In een ___ worden veel onschuldige mensen gedood.",
          answer: "genocide"
        },
        {
          sentence: "De supermarkt ___ boodschappen aan klanten.",
          answer: "levert"
        },
        {
          sentence: "Soms geven landen ___ aan andere landen.",
          answer: "wapens"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'levert' in deze tekst?",
        options: [
          "geeft",
          "neemt",
          "verkoopt",
          "verbergt"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom zwijgen de bondgenoten volgens de tekst?",
        options: [
          "Ze zijn niet betrokken",
          "Ze steunen de actie",
          "Ze zijn het ermee eens",
          "Ze weten het niet"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'sjeik'?",
        options: [
          "Een soort wapen",
          "Een soort voedsel",
          "Een soort leider",
          "Een soort gebouw"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Abu Dhabi levert wapens aan de Rapid Support Forces.",
        isTrue: true
      },
      {
        statement: "Alle wereldleiders keuren de acties van Abu Dhabi af.",
        isTrue: false
      },
      {
        statement: "Er wordt goud gebruikt in de ruil voor wapens.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Luc Versluys, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Luc Versluys, 78 jaar",
      summary: "Hij is geboren in 1946. Hij is overleden op 2 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "overleden zijn betekent dat je niet meer leeft, dat je dood bent",
          sentence: "Zijn oma is ___ in 2020.",
          answer: "overleden"
        },
        {
          word: "02",
          definition: "nul twee, de tweede dag van de maand",
          sentence: "Hij is overleden op ___ november.",
          answer: "02"
        },
        {
          word: "2025",
          definition: "het jaar tweeduizendvijfentwintig, een jaartal",
          sentence: "Hij is overleden in ___.",
          answer: "2025"
        },
        {
          word: "november",
          definition: "de elfde maand van het jaar",
          sentence: "Hij is overleden in ___.",
          answer: "november"
        },
        {
          word: "2",
          definition: "het getal twee, na één en voor drie",
          sentence: "Hij is overleden op ___ november.",
          answer: "2"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is overleden op ___ november.",
          answer: "2"
        },
        {
          sentence: "Hij is overleden op ___ november.",
          answer: "02"
        },
        {
          sentence: "Hij is overleden in ___.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Luc Versluys geboren?",
        options: [
          "In 1946",
          "In 1947",
          "In 1948",
          "In 1949"
        ],
        correctAnswer: 1
      },
      {
        question: "In welke maand is Luc Versluys overleden?",
        options: [
          "In januari",
          "In februari",
          "In oktober",
          "In november"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud was Luc Versluys toen hij overleed?",
        options: [
          "75 jaar",
          "76 jaar",
          "77 jaar",
          "78 jaar"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Luc Versluys is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Luc Versluys is overleden in 2024.",
        isTrue: false
      },
      {
        statement: "Luc Versluys is 78 jaar geworden.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Nanette Tassin, 96 jaar",
    topicNumber: 1,
    article: {
      title: "Nanette Tassin, 96 jaar",
      summary: "Ze is geboren in 1928. Ze is overleden op 29 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Wanneer iemand is geboren, betekent dit dat die persoon op die dag is geboren.",
          sentence: "Ze is ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Iemand is overleden wanneer die persoon is gestorven.",
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "Een jaar is een periode van 365 of 366 dagen, van 1 januari tot 31 december.",
          sentence: "Ze leefde 96 ___.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Ze is ___ in 1928.",
          answer: "geboren"
        },
        {
          sentence: "Ze leefde 96 ___.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Nanette Tassin geboren?",
        options: [
          "1920",
          "1928",
          "1930",
          "1935"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Nanette Tassin toen ze overleed?",
        options: [
          "80 jaar",
          "90 jaar",
          "96 jaar",
          "100 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Op welke datum overleed Nanette Tassin?",
        options: [
          "29 oktober 2024",
          "29 oktober 2025",
          "30 oktober 2025",
          "31 oktober 2025"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Nanette Tassin is geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin overleed op 29 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin was 100 jaar oud toen ze overleed.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Patrick Brems, 64 jaar",
    topicNumber: 1,
    article: {
      title: "Patrick Brems, 64 jaar",
      summary: "Geboren in 1960, overleden op 04/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "wanneer iemand geboren is, is dat het begin van het leven",
          sentence: "Hij is ___ in 1960.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer leven; dood zijn",
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        },
        {
          word: "overleden",
          definition: "niet meer leven; dood zijn",
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is ___ in 1960.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Patrick geboren?",
        options: [
          "In 1960",
          "In 1964",
          "In 1970",
          "In 1980"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Patrick toen hij overleed?",
        options: [
          "64 jaar",
          "70 jaar",
          "75 jaar",
          "80 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar kan je informatie over Patrick vinden?",
        options: [
          "In een boek",
          "Op een website",
          "In een krant",
          "Op een website"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Patrick is geboren in 1960.",
        isTrue: true
      },
      {
        statement: "Patrick overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Patrick was 64 jaar oud toen hij overleed.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
    topicNumber: 1,
    article: {
      title: "Is Trump nog een troef of juist niet? Republikeinen twijfelen na zware nederlaag",
      summary: "In iedere race, in iedere staat kregen de Republikeinen dinsdag zware klappen. Het krachtige signaal van de kiezer plaatst hen voor een dilemma. Ze kunnen niet zonder Trump en ze kunnen niet mét hem."
    },
    vocabulary: {
      words: [
        {
          word: "staat",
          definition: "een van de gebieden die een land vormen, zoals in de VS",
          sentence: "Elke ___ heeft zijn eigen wetten en verkiezingen.",
          answer: "staat"
        },
        {
          word: "kiezer",
          definition: "iemand die stemt, een stemmer",
          sentence: "Elke ___ heeft het recht om zijn stem uit te brengen.",
          answer: "kiezer"
        },
        {
          word: "klappen",
          definition: "harde slagen, vaak figuurlijk voor tegenslag",
          sentence: "Na de ___ moest het team zich herstellen.",
          answer: "klappen"
        },
        {
          word: "dilemma",
          definition: "een moeilijke keuze tussen twee opties",
          sentence: "Het ___ was duidelijk: vechten of vluchten.",
          answer: "dilemma"
        },
        {
          word: "race",
          definition: "een wedstrijd of competitie, vooral in de politiek",
          sentence: "De politieke ___ was spannend tot het einde.",
          answer: "race"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ was duidelijk: vechten of vluchten.",
          answer: "dilemma"
        },
        {
          sentence: "Na de ___ moest het team zich herstellen.",
          answer: "klappen"
        },
        {
          sentence: "Elke ___ heeft het recht om zijn stem uit te brengen.",
          answer: "kiezer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'krijgen' in deze context?",
        options: [
          "winnen",
          "ontvangen",
          "verliezen",
          "zoeken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Trump wint altijd",
          "Republikeinen verliezen altijd",
          "Kiezers zijn onbeslist",
          "Trump is een dilemma"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een 'dilemma'?",
        options: [
          "een soort dier",
          "een makkelijke keuze",
          "een moeilijke keuze tussen twee dingen",
          "een soort feest"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Republikeinen wonnen alle races dinsdag.",
        isTrue: false
      },
      {
        statement: "Trump is een voordeel voor de Republikeinen.",
        isTrue: false
      },
      {
        statement: "Kiezers stuurden een signaal door Republikeinen te laten verliezen.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
    topicNumber: 1,
    article: {
      title: "Mamdani heeft getoond dat progressieven campagne kunnen voeren met dezelfde kunde als uiterst rechts",
      summary: "Links Europa is klaar om te leren uit de campagne van de succesvolle Amerikaanse socialist Zohran Mamdani, die burgemeester van New York wordt. Hij toont hoe een progressief kan winnen in het hol van de leeuw."
    },
    vocabulary: {
      words: [
        {
          word: "kunde",
          definition: "Kennis en vaardigheid in een bepaald gebied",
          sentence: "Zijn technische ___ was indrukwekkend tijdens het project.",
          answer: "kunde"
        },
        {
          word: "links",
          definition: "Met betrekking tot de politieke linkerzijde of progressieve ideeën",
          sentence: "De ___ partij wil meer geld voor onderwijs en gezondheidszorg.",
          answer: "links"
        },
        {
          word: "uiterst",
          definition: "Zeer of in de hoogste mate",
          sentence: "De situatie was ___ gevaarlijk, maar ze bleven doorzetten.",
          answer: "uiterst"
        },
        {
          word: "Europa",
          definition: "Het continent ten westen van Azië en ten noorden van Afrika",
          sentence: "___ heeft een rijke geschiedenis en diverse culturen.",
          answer: "Europa"
        },
        {
          word: "leren",
          definition: "Kennis opdoen door studie of ervaring",
          sentence: "Ze willen ___ van elkaar om samen te groeien.",
          answer: "leren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ heeft een rijke geschiedenis en diverse culturen.",
          answer: "Europa"
        },
        {
          sentence: "Zijn technische ___ was indrukwekkend tijdens het project.",
          answer: "kunde"
        },
        {
          sentence: "De ___ partij wil meer geld voor onderwijs en gezondheidszorg.",
          answer: "links"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar verwijst 'het hol van de leeuw' symbolisch naar in de tekst?",
        options: [
          "Een plaats van grote uitdaging of gevaar",
          "Een rustige en veilige plek",
          "Een onbelangrijke locatie",
          "Een plek vol kansen en kansen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Progressieven moeten niet leren van anderen",
          "Links Europa kan leren van een succesvolle campagne in de VS",
          "Europa moet zich isoleren van buitenlandse invloeden",
          "Politieke campagnes zijn altijd hetzelfde wereldwijd"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk continent wordt genoemd in de samenvatting?",
        options: [
          "Afrika",
          "Azië",
          "Europa",
          "Zuid-Amerika"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De tekst stelt dat links Europa niets kan leren van de Amerikaanse campagne.",
        isTrue: false
      },
      {
        statement: "Mamdani is een politicus die campagne voerde in New York.",
        isTrue: true
      },
      {
        statement: "De auteur is van mening dat uiterst rechts superieur is aan progressieven.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Abu Dhabi levert wapens voor een genocide en zijn westerse bondgenoten zwijgen",
    topicNumber: 1,
    article: {
      title: "Abu Dhabi levert wapens voor een genocide en zijn westerse bondgenoten zwijgen",
      summary: "In ruil voor goud leveren de Verenigde Arabische Emiraten de wapens waarmee de Rapid Support Forces in Noord-Darfour een genocidale massamoord aanrichten. Toch wijst niet één wereldleider de sjeiks van Abu Dhabi terecht."
    },
    vocabulary: {
      words: [
        {
          word: "goud",
          definition: "een zeer waardevol, glanzend metaal",
          sentence: "Ze betaalden met repen ___ in plaats van geld.",
          answer: "goud"
        },
        {
          word: "wapens",
          definition: "voorwerpen om mee te vechten, zoals geweren",
          sentence: "De rebellen hadden zware ___ gekregen van buitenaf.",
          answer: "wapens"
        },
        {
          word: "genocide",
          definition: "het opzettelijk uitmoorden van een hele bevolkingsgroep",
          sentence: "De massamoord op die bevolkingsgroep was een daad van ___.",
          answer: "genocide"
        },
        {
          word: "emiraten",
          definition: "staten of gebieden die door een emir geregeerd worden",
          sentence: "De Verenigde Arabische ___ zijn zeven in totaal.",
          answer: "emiraten"
        },
        {
          word: "bondgenoten",
          definition: "partners in een alliantie of oorlog",
          sentence: "Onze ___ in die regio steunen ons niet langer.",
          answer: "bondgenoten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De massamoord op die bevolkingsgroep was een daad van ___.",
          answer: "genocide"
        },
        {
          sentence: "Onze ___ in die regio steunen ons niet langer.",
          answer: "bondgenoten"
        },
        {
          sentence: "De rebellen hadden zware ___ gekregen van buitenaf.",
          answer: "wapens"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een mogelijke reden waarom westerse bondgenoten zwijgen over de wapenleveranties?",
        options: [
          "Ze zijn bang voor economische sancties.",
          "Ze steunen de acties van de Emiraten.",
          "Ze hebben geen kennis van de situatie.",
          "Ze zijn bezig met andere internationale conflicten."
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe worden de wapens verkregen door de strijdende partij?",
        options: [
          "Door directe levering vanuit de Emiraten.",
          "Via een derde land dat bemiddelt.",
          "Door diefstal uit een militaire basis.",
          "Door aankoop met gestolen geld."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de Verenigde Arabische Emiraten in dit conflict?",
        options: [
          "Ze bemiddelen alleen maar vredesgesprekken.",
          "Ze zijn neutraal en doen niet mee.",
          "Ze zijn de belangrijkste wapenleverancier.",
          "Ze bieden humanitaire hulp aan slachtoffers."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Verenigde Arabische Emiraten leveren wapens in ruil voor goud, niet voor andere goederen.",
        isTrue: true
      },
      {
        statement: "Alle westerse landen hebben luidkeels hun afkeuring uitgesproken over deze wapenleveranties.",
        isTrue: false
      },
      {
        statement: "Enkel de Verenigde Arabische Emiraten zijn verantwoordelijk voor de wapenleveranties, geen andere landen.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Luc Versluig, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Luc Versluig, 78 jaar",
      summary: "Geboren in 1946, overleden op 02/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van iemands leven; het moment dat iemand ter wereld komt",
          sentence: "Hij is ___ in 1946.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend; gestorven",
          sentence: "Hij is ___ op 2 november 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar is Luc Versluig geboren?",
        options: [
          "1945",
          "1946",
          "1947",
          "1948"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Luc Versluig overleden?",
        options: [
          "1 november 2025",
          "2 november 2025",
          "3 november 2025",
          "4 november 2025"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Luc Versluig op het moment van zijn overlijden?",
        options: [
          "77 jaar",
          "78 jaar",
          "79 jaar",
          "80 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Luc Versluig is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Luc Versluig is overleden op 1 november 2025.",
        isTrue: false
      },
      {
        statement: "Luc Versluig werd 78 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Nanette Tassin, 96 jaar",
    topicNumber: 1,
    article: {
      title: "Nanette Tassin, 96 jaar",
      summary: "Geboren in 1928, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "2025",
          definition: "Het jaartal twintighonderdvijfentwintig.",
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          word: "geboren",
          definition: "Geboren worden, het ter wereld komen.",
          sentence: "Ze werd ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "Nanette",
          definition: "Een eigennaam, hier de voornaam van de overledene.",
          sentence: "___ Tassin werd 96 jaar.",
          answer: "Nanette"
        },
        {
          word: "96",
          definition: "Het getal zesennegentig, hier de leeftijd.",
          sentence: "Ze werd ___ jaar oud.",
          answer: "96"
        },
        {
          word: "29",
          definition: "Het getal negenentwintig, hier de dag van overlijden.",
          sentence: "Ze overleed op ___ oktober.",
          answer: "29"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze werd ___ in 1928.",
          answer: "geboren"
        },
        {
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          sentence: "___ Tassin werd 96 jaar.",
          answer: "Nanette"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Nanette Tassin geboren?",
        options: [
          "1928",
          "1945",
          "1930",
          "1920"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd Nanette Tassin?",
        options: [
          "96 jaar",
          "100 jaar",
          "90 jaar",
          "85 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Nanette Tassin?",
        options: [
          "29 oktober 2025",
          "29 november 2025",
          "30 oktober 2025",
          "29 september 2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Nanette Tassin werd 96 jaar oud.",
        isTrue: true
      },
      {
        statement: "Nanette Tassin overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Nanette Tassin werd geboren in 1928.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Patrick Brems, 64 jaar",
    topicNumber: 1,
    article: {
      title: "Patrick Brems, 64 jaar",
      summary: "Geboren in 1960, overleden op 04/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Het begin van iemands leven; geboren worden.",
          sentence: "Hij is ___ in 1960.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven zijn.",
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 dagen; 12 maanden.",
          sentence: "Hij was 64 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 04/11/2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij was 64 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Hij is ___ in 1960.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden'?",
        options: [
          "Nog in leven",
          "Gestorven",
          "Jong geboren",
          "Heel oud"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'geboortedatum'?",
        options: [
          "De dag dat je sterft",
          "De dag dat je geboren wordt",
          "De dag dat je trouwt",
          "De dag dat je verhuist"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Patrick Brems?",
        options: [
          "64 jaar",
          "100 jaar",
          "50 jaar",
          "75 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Patrick Brems is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Patrick Brems werd 65 jaar oud.",
        isTrue: false
      },
      {
        statement: "Patrick Brems is geboren in 1960.",
        isTrue: true
      }
    ]
  }
];
