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
    title: "Dodentol Jamaica loopt op, terwijl “zware hongersnood” dreigt",
    topicNumber: 1,
    article: {
      title: "Dodentol Jamaica loopt op, terwijl “zware hongersnood” dreigt",
      summary: "Het dodental na orkaan Melissa in Jamaica is gestegen tot 32. In sommige gebieden is de hulp nog niet aangekomen, en er wordt gevreesd voor hongersnood."
    },
    vocabulary: {
      words: [
        {
          word: "dreigt",
          definition: "iets dat waarschijnlijk gaat gebeuren, vaak iets negatiefs",
          sentence: "Er ___ een tekort aan voedsel.",
          answer: "dreigt"
        },
        {
          word: "dodentol",
          definition: "het aantal mensen dat is overleden",
          sentence: "De ___ na de orkaan is hoog.",
          answer: "dodentol"
        },
        {
          word: "hongersnood",
          definition: "gebrek aan voedsel; wanneer er niet genoeg eten is voor iedereen",
          sentence: "Na de overstroming was er ___.",
          answer: "hongersnood"
        },
        {
          word: "hulp",
          definition: "steun of assistentie, vaak in moeilijke tijden",
          sentence: "Internationale ___ is onderweg naar het eiland.",
          answer: "hulp"
        },
        {
          word: "orkaan",
          definition: "een hele zware storm met veel wind en regen",
          sentence: "De ___ veroorzaakte veel schade.",
          answer: "orkaan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ veroorzaakte veel schade.",
          answer: "orkaan"
        },
        {
          sentence: "Er ___ een tekort aan voedsel.",
          answer: "dreigt"
        },
        {
          sentence: "Na de overstroming was er ___.",
          answer: "hongersnood"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'dodentol' in deze context?",
        options: [
          "Het aantal doden",
          "Het aantal gewonden",
          "De naam van een plaats",
          "Een soort weegschaal"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'orkaan'?",
        options: [
          "Een soort dans",
          "Een sterke tropische storm",
          "Een soort vogel",
          "Een type auto"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom wordt er 'hongersnood' verwacht in Jamaica?",
        options: [
          "Omdat er te veel voedsel is",
          "Omdat er onvoldoende voedsel is door de orkaan",
          "Omdat de bevolking niet van eten houdt",
          "Omdat het land veel voedsel exporteert"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De dodentol in Jamaica is gestegen tot 32.",
        isTrue: true
      },
      {
        statement: "Hongersnood dreigt al in alle delen van Jamaica.",
        isTrue: false
      },
      {
        statement: "Nog niet alle gebieden hebben hulp ontvangen.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "verkiezingen zijn het kiezen van nieuwe politici",
          sentence: "De ___ zijn in november.",
          answer: "verkiezingen"
        },
        {
          word: "burgemeester",
          definition: "een burgemeester is de baas van een stad",
          sentence: "De ___ van New York is een Democraat.",
          answer: "burgemeester"
        },
        {
          word: "Democraten",
          definition: "de Democraten zijn een van de twee grote politieke partijen in de VS",
          sentence: "De ___ willen meer geld voor scholen.",
          answer: "Democraten"
        },
        {
          word: "gouverneur",
          definition: "een gouverneur is de baas van een staat",
          sentence: "De ___ van Texas woont in Austin.",
          answer: "gouverneur"
        },
        {
          word: "populariteit",
          definition: "populariteit is hoe populair iets of iemand is",
          sentence: "De ___ van de president neemt af in de peilingen.",
          answer: "populariteit"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ zijn in november.",
          answer: "verkiezingen"
        },
        {
          sentence: "De ___ van Texas woont in Austin.",
          answer: "gouverneur"
        },
        {
          sentence: "De ___ van New York is een Democraat.",
          answer: "burgemeester"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van een gouverneur in de VS?",
        options: [
          "Hij is de baas van een hele staat.",
          "Hij is alleen verantwoordelijk voor de hoofdstad.",
          "Hij is de baas van het leger in de staat.",
          "Hij is een burgemeester met een andere titel."
        ],
        correctAnswer: 1
      },
      {
        question: "Waarover gaan de verkiezingen in dit artikel?",
        options: [
          "Over het kiezen van nieuwe politici in de VS.",
          "Over de Olympische Spelen in de VS.",
          "Over de verkiezing van de koning van de VS.",
          "Over de bouw van nieuwe scholen in de VS."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de invloed van deze verkiezingen op de Democraten?",
        options: [
          "Ze kunnen de partij helpen of schaden, afhankelijk van de uitslag.",
          "Ze zullen de partij zeker helpen, ongeacht de uitslag.",
          "Ze hebben geen effect op de partij, alleen op lokale zaken.",
          "Ze zijn alleen belangrijk voor de Republikeinse partij."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen in het artikel gaan over het kiezen van nieuwe politici in de VS.",
        isTrue: true
      },
      {
        statement: "Een gouverneur in de VS is de baas van een hele stad.",
        isTrue: false
      },
      {
        statement: "De populariteit van Donald Trump wordt beïnvloed door de uitslag van deze verkiezingen.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Nieuwe voorzitter Jesse Klaver",
    topicNumber: 1,
    article: {
      title: "Nieuwe voorzitter Jesse Klaver",
      summary: "Jesse Klaver is de nieuwe voorzitter van GroenLinks-PvdA. Hij volgt Frans Timmermans op. Zijn taak is om te onderhandelen over een nieuwe regering voor Nederland. Dit wordt een moeilijke opgave met lastige keuzes."
    },
    vocabulary: {
      words: [
        {
          word: "voorzitter",
          definition: "een leider of iemand die de leiding heeft",
          sentence: "De ___ van de vergadering leidde de discussie.",
          answer: "voorzitter"
        },
        {
          word: "taak",
          definition: "iets wat gedaan moet worden, een opdracht",
          sentence: "Zijn belangrijkste ___ is het leiden van de onderhandelingen.",
          answer: "taak"
        },
        {
          word: "opgave",
          definition: "iets wat gedaan moet worden, een taak",
          sentence: "Zijn nieuwe ___ is het leiden van de coalitieonderhandelingen.",
          answer: "opgave"
        },
        {
          word: "lastige",
          definition: "moeilijk, vervelend of complex",
          sentence: "De onderhandelingen werden ___ door tegenstrijdige belangen.",
          answer: "lastige"
        },
        {
          word: "keuzes",
          definition: "verschillende mogelijkheden waaruit je kunt kiezen",
          sentence: "Hij heeft moeilijke ___ te maken over de toekomst.",
          answer: "keuzes"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zijn nieuwe ___ is het leiden van de coalitieonderhandelingen.",
          answer: "opgave"
        },
        {
          sentence: "De ___ van de vergadering leidde de discussie.",
          answer: "voorzitter"
        },
        {
          sentence: "De onderhandelingen werden ___ door tegenstrijdige belangen.",
          answer: "lastige"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdtaak van Jesse Klaver als nieuwe voorzitter?",
        options: [
          "Het leiden van internationale vergaderingen",
          "Het onderhandelen over een nieuwe regering voor Nederland",
          "Het schrijven van politieke speeches",
          "Het trainen van nieuwe politici"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat beschrijft de tekst over de uitdagingen voor Klaver?",
        options: [
          "Ze zijn onmogelijk",
          "Ze zijn eenvoudig en duidelijk",
          "Ze zijn lastig en moeilijk",
          "Ze zijn onbekend en mysterieus"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie was de vorige leider van GroenLinks-PvdA volgens de tekst?",
        options: [
          "Jesse Klaver",
          "Frans Timmermans",
          "Een internationale diplomaat",
          "Een voormalig president"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Jesse Klaver volgt Frans Timmermans op als voorzitter van GroenLinks-PvdA.",
        isTrue: true
      },
      {
        statement: "De hoofdtaak van Klaver is het leiden van een sportteam.",
        isTrue: false
      },
      {
        statement: "Klaver staat voor een moeilijke opgave met lastige keuzes.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Greet D’HELF, 62 jaar",
    topicNumber: 1,
    article: {
      title: "Greet D’HELF, 62 jaar",
      summary: "Geboren in 1963, overleden op 30/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "62",
          definition: "Leeftijd van de persoon",
          sentence: "Hij is ___ jaar oud.",
          answer: "62"
        },
        {
          word: "Greet",
          definition: "Voornaam van de persoon",
          sentence: "___ is een vrouwelijke naam.",
          answer: "Greet"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 dagen",
          sentence: "Een ___ heeft 365 dagen.",
          answer: "jaar"
        },
        {
          word: "overleden",
          definition: "Stoppen met leven, doodgaan",
          sentence: "Hij is ___ op 30 oktober.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Het jaar 2025",
          sentence: "In het jaar ___ zal alles anders zijn.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 30 oktober.",
          answer: "overleden"
        },
        {
          sentence: "In het jaar ___ zal alles anders zijn.",
          answer: "2025"
        },
        {
          sentence: "___ is een vrouwelijke naam.",
          answer: "Greet"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Greet D’HELF geboren?",
        options: [
          "1963",
          "1964",
          "1965",
          "1966"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum is Greet D’HELF overleden?",
        options: [
          "29 oktober 2025",
          "30 oktober 2025",
          "31 oktober 2025",
          "1 november 2025"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Greet D’HELF toen ze overleed?",
        options: [
          "60 jaar",
          "61 jaar",
          "62 jaar",
          "63 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Greet D’HELF is geboren in 1963.",
        isTrue: true
      },
      {
        statement: "Greet D’HELF is overleden in november 2025.",
        isTrue: false
      },
      {
        statement: "Greet D’HELF werd 62 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Paul Defoort, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Paul Defoort, 78 jaar",
      summary: "Paul Defoort is geboren in 1946 en overleden op 27 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "2025",
          definition: "Het jaar na 2024",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          word: "Defoort",
          definition: "Familienaam van Paul",
          sentence: "De familienaam van de overledene is ___.",
          answer: "Defoort"
        },
        {
          word: "geboren",
          definition: "Begonnen met leven, het tegenovergestelde van overleden",
          sentence: "Hij is ___ in 1946.",
          answer: "geboren"
        },
        {
          word: "oktober",
          definition: "De tiende maand van het jaar",
          sentence: "Hij overleed in ___, de tiende maand.",
          answer: "oktober"
        },
        {
          word: "Paul",
          definition: "Een mannelijke voornaam",
          sentence: "___ is de voornaam van de overleden man.",
          answer: "Paul"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          sentence: "De familienaam van de overledene is ___.",
          answer: "Defoort"
        },
        {
          sentence: "Hij overleed in ___, de tiende maand.",
          answer: "oktober"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Paul Defoort overleden?",
        options: [
          "2023",
          "2024",
          "2025",
          "2026"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Paul Defoort op het moment van overlijden?",
        options: [
          "76 jaar",
          "77 jaar",
          "78 jaar",
          "79 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar komt Paul Defoort vandaan?",
        options: [
          "Uit Amsterdam",
          "Uit Rotterdam",
          "Uit Den Haag",
          "Uit een onbekende plaats"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Paul Defoort is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Paul Defoort overleed in oktober 2025.",
        isTrue: true
      },
      {
        statement: "Paul Defoort was 79 jaar oud toen hij overleed.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Stormloop voor nieuwe tandarts in Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Stormloop voor nieuwe tandarts in Kluisbergen",
      summary: "Tandarts Julie Parmentier (26) start donderdag haar praktijk in Kluisbergen en nu al zit ze volgeboekt tot in september 2026. Het is typerend voor een probleem in veel Vlaamse gemeenten."
    },
    vocabulary: {
      words: [
        {
          word: "probleem",
          definition: "iets dat moeilijk is of niet goed gaat",
          sentence: "Er is een ___ met de waterleiding.",
          answer: "probleem"
        },
        {
          word: "praktijk",
          definition: "de plaats waar een professional werkt, zoals een dokter",
          sentence: "Haar nieuwe ___ is in het centrum.",
          answer: "praktijk"
        },
        {
          word: "start",
          definition: "beginnen, van start gaan",
          sentence: "Ze ___ volgende week met haar nieuwe baan.",
          answer: "start"
        },
        {
          word: "typerend",
          definition: "iets wat heel kenmerkend of typisch is",
          sentence: "Het is ___ voor deze tijd van het jaar.",
          answer: "typerend"
        },
        {
          word: "volgeboekt",
          definition: "helemaal vol, geen plaats meer",
          sentence: "Het hotel is ___ voor de zomer.",
          answer: "volgeboekt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er is een ___ met de waterleiding.",
          answer: "probleem"
        },
        {
          sentence: "Het is ___ voor deze tijd van het jaar.",
          answer: "typerend"
        },
        {
          sentence: "Haar nieuwe ___ is in het centrum.",
          answer: "praktijk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de situatie met tandarts Julie Parmentier?",
        options: [
          "Ze heeft te veel patiënten",
          "Ze heeft te weinig patiënten",
          "Ze verkoopt haar praktijk",
          "Ze is met pensioen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het probleem in veel Vlaamse gemeenten?",
        options: [
          "Te veel tandartsen",
          "Te weinig tandartsen",
          "Geen apotheken",
          "Geen supermarkten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de toestand van haar praktijk nu?",
        options: [
          "Ze is net begonnen",
          "Ze is al jaren bezig",
          "Ze is gestopt",
          "Ze is verhuisd"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Julie Parmentier is een tandarts.",
        isTrue: true
      },
      {
        statement: "Julie Parmentier werkt in een supermarkt.",
        isTrue: false
      },
      {
        statement: "De praktijk van Julie start volgende week.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Orkaan in Jamaica",
    topicNumber: 1,
    article: {
      title: "Orkaan in Jamaica",
      summary: "Na de orkaan zijn er problemen. Er zijn doden en er is weinig eten."
    },
    vocabulary: {
      words: [
        {
          word: "eten",
          definition: "voedsel dat je eet",
          sentence: "Mensen hebben ___ nodig om te leven.",
          answer: "eten"
        },
        {
          word: "doden",
          definition: "mensen die zijn gestorven",
          sentence: "Er zijn veel ___ door de ramp.",
          answer: "doden"
        },
        {
          word: "Jamaica",
          definition: "een land in het Caribisch gebied",
          sentence: "De orkaan trof ___ het hardst.",
          answer: "Jamaica"
        },
        {
          word: "eten",
          definition: "voedsel dat je eet",
          sentence: "Honger betekent dat je ___ wilt hebben.",
          answer: "eten"
        },
        {
          word: "problemen",
          definition: "dingen die moeilijk of fout gaan",
          sentence: "Na de storm zijn er veel ___.",
          answer: "problemen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Na de storm zijn er veel ___.",
          answer: "problemen"
        },
        {
          sentence: "Mensen hebben ___ nodig om te leven.",
          answer: "eten"
        },
        {
          sentence: "Er zijn veel ___ door de ramp.",
          answer: "doden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging de orkaan over?",
        options: [
          "Nederland",
          "Jamaica",
          "Duitsland",
          "China"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van de orkaan?",
        options: [
          "Mensen gaan winkelen",
          "Er is veel schade",
          "Iedereen is veilig",
          "Het weer is mooi"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is honger?",
        options: [
          "Een soort feest",
          "Een gevoel dat je wilt eten",
          "Een soort game",
          "Een soort dier"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De orkaan trof Nederland.",
        isTrue: false
      },
      {
        statement: "Na de orkaan hebben mensen honger.",
        isTrue: true
      },
      {
        statement: "Er zijn geen doden door de orkaan.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "burgemeesters",
          definition: "een burgemeester is de baas van een stad of gemeente",
          sentence: "De ___ van grote steden hebben veel werk.",
          answer: "burgemeesters"
        },
        {
          word: "herlanceren",
          definition: "opnieuw beginnen of iets nieuw leven inblazen",
          sentence: "Hij wil zijn carrière ___ met een nieuw project.",
          answer: "herlanceren"
        },
        {
          word: "wie",
          definition: "welke persoon of personen",
          sentence: "___ komt er naar het feest?",
          answer: "wie"
        },
        {
          word: "gouverneurs",
          definition: "een gouverneur is een baas in een staat of gebied",
          sentence: "De ___ van New York en Virginia zijn belangrijk.",
          answer: "gouverneurs"
        },
        {
          word: "verkiezingen",
          definition: "een verkiezing is als mensen stemmen om te kiezen wie de baas wordt",
          sentence: "Tijdens de ___ kiest iedereen een nieuw hoofd.",
          answer: "verkiezingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de ___ kiest iedereen een nieuw hoofd.",
          answer: "verkiezingen"
        },
        {
          sentence: "De ___ van grote steden hebben veel werk.",
          answer: "burgemeesters"
        },
        {
          sentence: "___ komt er naar het feest?",
          answer: "wie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'herlanceren'?",
        options: [
          "opnieuw beginnen",
          "stoppen",
          "vergeten",
          "verliezen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'gouverneur'?",
        options: [
          "een soort auto",
          "een soort dier",
          "een politieke leider van een staat",
          "een type voedsel"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'verkiezing'?",
        options: [
          "een sportwedstrijd",
          "een groot feest",
          "een moment waarop mensen stemmen voor een nieuwe leider",
          "een soort spel"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Een burgemeester is de leider van een stad.",
        isTrue: true
      },
      {
        statement: "Een gouverneur is de leider van een heel land.",
        isTrue: false
      },
      {
        statement: "Tijdens een verkiezing kiest men een nieuwe leider.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Nieuwe voorzitter Jesse Klaver",
    topicNumber: 1,
    article: {
      title: "Nieuwe voorzitter Jesse Klaver",
      summary: "Jesse Klaver is de nieuwe voorzitter. Hij wordt de nieuwe leider. Hij gaat voor GroenLinks-PvdA praten over een nieuwe regering. Het wordt een moeilijke taak."
    },
    vocabulary: {
      words: [
        {
          word: "praten",
          definition: "spreken, woorden zeggen",
          sentence: "We ___ met elkaar over onze plannen.",
          answer: "praten"
        },
        {
          word: "voorzitter",
          definition: "iemand die de leiding heeft",
          sentence: "De ___ van de vergadering spreekt eerst.",
          answer: "voorzitter"
        },
        {
          word: "leider",
          definition: "iemand die de leiding heeft",
          sentence: "De ___ van het team motiveert de groep.",
          answer: "leider"
        },
        {
          word: "taak",
          definition: "iets wat gedaan moet worden, opdracht",
          sentence: "Mijn ___ voor vandaag is de afwas doen.",
          answer: "taak"
        },
        {
          word: "leider",
          definition: "iemand die de leiding heeft",
          sentence: "De ___ van het project legt alles uit.",
          answer: "leider"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We ___ met elkaar over onze plannen.",
          answer: "praten"
        },
        {
          sentence: "De ___ van het project legt alles uit.",
          answer: "leider"
        },
        {
          sentence: "De ___ van het team motiveert de groep.",
          answer: "leider"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Jesse Klaver?",
        options: [
          "Een Nederlandse politicus",
          "Een Franse acteur",
          "Een Duitse zanger",
          "Een Spaanse kok"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doet Jesse Klaver als nieuwe voorzitter?",
        options: [
          "Hij speelt piano",
          "Hij onderhandelt over de regering",
          "Hij kookt eten",
          "Hij leest een boek"
        ],
        correctAnswer: 2
      },
      {
        question: "Is dit een moeilijke taak voor Jesse?",
        options: [
          "Ja, het is moeilijk",
          "Nee, het is makkelijk",
          "Misschien",
          "Ik weet het niet"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Jesse Klaver is de nieuwe voorzitter.",
        isTrue: true
      },
      {
        statement: "Jesse Klaver onderhandelt voor de regering.",
        isTrue: true
      },
      {
        statement: "Jesse Klaver is een acteur.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Greet D’HELF, 62 jaar",
    topicNumber: 1,
    article: {
      title: "Greet D’HELF, 62 jaar",
      summary: "Geboren in 1963, overleden op 30/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "het begin van het leven",
          sentence: "Zij is ___ in 1963.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "niet meer levend",
          sentence: "Hij is ___ op 30 oktober.",
          answer: "overleden"
        },
        {
          word: "Jaar",
          definition: "een periode van 365 dagen",
          sentence: "Het ___ 2025 is bijna voorbij.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 30 oktober.",
          answer: "overleden"
        },
        {
          sentence: "Het ___ 2025 is bijna voorbij.",
          answer: "jaar"
        },
        {
          sentence: "Zij is ___ in 1963.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Greet D’HELF geboren?",
        options: [
          "In 1963",
          "In 1964",
          "In 1965",
          "In 1966"
        ],
        correctAnswer: 1
      },
      {
        question: "Is Greet D’HELF nog in leven?",
        options: [
          "Ja, ze leeft nog",
          "Nee, ze is overleden",
          "Ze is net geboren",
          "Ze is heel oud"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar wordt de datum in een artikel vaak vermeld?",
        options: [
          "Aan het begin",
          "Aan het einde",
          "In de titel",
          "Nergens"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Greet D’HELF is in 1963 geboren.",
        isTrue: true
      },
      {
        statement: "Greet D’HELF is nog in leven.",
        isTrue: false
      },
      {
        statement: "Greet D’HELF overleed in oktober 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Paul Defoort, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Paul Defoort, 78 jaar",
      summary: "Paul Defoort was 78 jaar. Hij is overleden."
    },
    vocabulary: {
      words: [
        {
          word: "Paul",
          definition: "een mannelijke naam",
          sentence: "___ is een man.",
          answer: "Paul"
        },
        {
          word: "Defoort",
          definition: "een achternaam",
          sentence: "Zijn achternaam is ___.",
          answer: "Defoort"
        },
        {
          word: "78",
          definition: "een getal, veel meer dan 10",
          sentence: "Hij is ___ jaar geworden.",
          answer: "78"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Hij is 78 ___ oud.",
          answer: "jaar"
        },
        {
          word: "overleden",
          definition: "niet meer levend, dood",
          sentence: "Hij is ___ op 27 oktober.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 27 oktober.",
          answer: "overleden"
        },
        {
          sentence: "Zijn achternaam is ___.",
          answer: "Defoort"
        },
        {
          sentence: "Hij is ___ jaar geworden.",
          answer: "78"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Hoe oud was Paul Defoort?",
        options: [
          "78 jaar",
          "80 jaar",
          "75 jaar",
          "77 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Paul geboren?",
        options: [
          "1946",
          "1945",
          "1947",
          "1948"
        ],
        correctAnswer: 1
      },
      {
        question: "Is Paul Defoort nu nog in leven?",
        options: [
          "Nee, hij is overleden.",
          "Ja, hij leeft nog.",
          "Hij is ziek.",
          "Hij is op vakantie."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Paul Defoort is overleden.",
        isTrue: true
      },
      {
        statement: "Paul is geboren in 1945.",
        isTrue: false
      },
      {
        statement: "Paul stierf op 27 oktober 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Nieuwe tandarts in Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Nieuwe tandarts in Kluisbergen",
      summary: "Tandarts Julie start haar praktijk. Ze is nu al volgeboekt tot in 2026."
    },
    vocabulary: {
      words: [
        {
          word: "tandarts",
          definition: "iemand die zorgt voor tanden",
          sentence: "De ___ helpt als je kiespijn hebt.",
          answer: "tandarts"
        },
        {
          word: "praktijk",
          definition: "de plaats waar een professional werkt",
          sentence: "De tandarts heeft een nieuwe ___.",
          answer: "praktijk"
        },
        {
          word: "volgeboekt",
          definition: "helemaal vol, geen plaats meer",
          sentence: "Er zijn geen afspraken meer mogelijk, want de agenda is ___.",
          answer: "volgeboekt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er zijn geen afspraken meer mogelijk, want de agenda is ___.",
          answer: "volgeboekt"
        },
        {
          sentence: "De tandarts heeft een nieuwe ___.",
          answer: "praktijk"
        },
        {
          sentence: "De ___ helpt als je kiespijn hebt.",
          answer: "tandarts"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet een tandarts?",
        options: [
          "Hij kookt eten",
          "Hij repareert tanden",
          "Hij verkoopt huizen",
          "Hij rijdt in een auto"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'volgeboekt'?",
        options: [
          "Het is erg druk",
          "Het is heel leeg",
          "Het is erg duur",
          "Het is heel nieuw"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar is Julie's praktijk?",
        options: [
          "In Antwerpen",
          "In Brussel",
          "In Kluisbergen",
          "In Gent"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Julie is een tandarts in Kluisbergen.",
        isTrue: true
      },
      {
        statement: "Julie start haar praktijk in 2026.",
        isTrue: false
      },
      {
        statement: "Veel Vlaamse gemeenten hebben hetzelfde probleem.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
      summary: "42 miljoen Amerikanen komen maar rond dankzij voedselsteun van de regering. De voedselbonnen van november lijken gered, al ontbreken er miljarden dollars."
    },
    vocabulary: {
      words: [
        {
          word: "ontbreken",
          definition: "niet aanwezig zijn, missen",
          sentence: "Er ___ nog enkele belangrijke handtekeningen.",
          answer: "ontbreken"
        },
        {
          word: "voedselsteun",
          definition: "hulp in de vorm van voedsel, vaak van de overheid",
          sentence: "De regering bood ___ aan de getroffen bevolking.",
          answer: "voedselsteun"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land of gebied bestuurt",
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        },
        {
          word: "rechter",
          definition: "een persoon die in een rechtbank beslist over geschillen",
          sentence: "De ___ heeft de zaak behandeld.",
          answer: "rechter"
        },
        {
          word: "gered",
          definition: "beschermd of veiliggesteld, van een gevaar",
          sentence: "De voorraden zijn ___ van de overstroming.",
          answer: "gered"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De regering bood ___ aan de getroffen bevolking.",
          answer: "voedselsteun"
        },
        {
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        },
        {
          sentence: "De voorraden zijn ___ van de overstroming.",
          answer: "gered"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van de rechter in deze kwestie?",
        options: [
          "Hij start de voedselsteun",
          "Hij beëindigt de voedselsteun",
          "Hij beschermt de voedselbonnen",
          "Hij keurt de steun af"
        ],
        correctAnswer: 3
      },
      {
        question: "Waaruit bestaat de voedselsteun in dit artikel?",
        options: [
          "Alleen uit geld",
          "Alleen uit voedselbonnen",
          "Uitsluitend uit voedselpakketten",
          "Een combinatie van bonnen en mogelijk geld"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de toestand van de voedselbonnen in november?",
        options: [
          "Ze zijn al gebruikt",
          "Ze zijn verloren gegaan",
          "Ze zijn gered en bruikbaar",
          "Ze zijn nog niet uitgedeeld"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rechter heeft de voedselsteun volledig stopgezet.",
        isTrue: false
      },
      {
        statement: "Er ontbreken miljarden dollars aan de voedselsteun, maar de bonnen zijn gered.",
        isTrue: true
      },
      {
        statement: "Alleen de voedselbonnen worden beschermd, niet het geld.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "wie",
          definition: "Vraagwoord dat gebruikt wordt om te vragen naar een persoon of personen.",
          sentence: "Wie heeft deze beslissing genomen?",
          answer: "wie"
        },
        {
          word: "gouverneurs",
          definition: "De hoogstverkiezen bestuurders van een staat in de VS.",
          sentence: "De gouverneurs van Texas en Californië hebben verschillende beleidsvisies.",
          answer: "gouverneurs"
        },
        {
          word: "verkiezingen",
          definition: "Het proces waarbij mensen stemmen om personen te kiezen voor een politieke functie.",
          sentence: "Tijdens de verkiezingen kiezen burgers hun vertegenwoordigers.",
          answer: "verkiezingen"
        },
        {
          word: "herlanceren",
          definition: "Weer nieuw leven inblazen of opnieuw activeren.",
          sentence: "De regering probeert het economisch plan te herlanceren met nieuwe investeringen.",
          answer: "herlanceren"
        },
        {
          word: "burgemeester",
          definition: "Het hoofd van de uitvoerende macht van een gemeente of stad.",
          sentence: "De burgemeester van Rotterdam wordt gekozen door de gemeenteraad.",
          answer: "burgemeester"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Wie heeft deze beslissing genomen?",
          answer: "wie"
        },
        {
          sentence: "De burgemeester van Rotterdam wordt gekozen door de gemeenteraad.",
          answer: "burgemeester"
        },
        {
          sentence: "De gouverneurs van Texas en Californië hebben verschillende beleidsvisies.",
          answer: "gouverneurs"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er bedoeld met de term 'barometer' in de context van de tekst?",
        options: [
          "Een instrument voor het weergeven van de druk",
          "Een metafoor voor iets dat dient als indicator of graadmeter",
          "Een specifieke weersvoorspelling tool",
          "Een historisch artefact uit de 19e eeuw"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemt de tekst specifiek een 'moslim burgemeester'?",
        options: [
          "Omdat alle burgemeesters in de VS moslims zijn",
          "Om de religieuze achtergrond van de kandidaat te benadrukken",
          "Omdat de verkiezingen in een islamitische staat plaatsvinden",
          "Als referentie aan een historische figuur"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de primaire focus van de tekst?",
        options: [
          "Het beschrijven van het klimaat in Virginia en New Jersey",
          "Het uitleggen van het Amerikaanse politieke systeem",
          "Het analyseren van de uitkomsten van lokale verkiezingen als graadmeter voor nationale politiek",
          "Het bespreken van de geschiedenis van de Democratische partij"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen voor gouverneurs en burgemeesters in de VS hebben geen invloed op de nationale politiek.",
        isTrue: false
      },
      {
        statement: "Een burgemeester van New York zou de eerste moslim in die positie zijn als hij verkozen wordt.",
        isTrue: true
      },
      {
        statement: "Donald Trump is momenteel de president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Nieuwe voorzitter Jesse Klaver mag proberen GroenLinks-PvdA de regering binnen te loodsen",
    topicNumber: 1,
    article: {
      title: "Nieuwe voorzitter Jesse Klaver mag proberen GroenLinks-PvdA de regering binnen te loodsen",
      summary: "Voormalig GroenLinks-leider Jesse Klaver neemt het stokje over van Frans Timmermans. Hij zal voor GroenLinks-PvdA onderhandelen over een nieuwe Nederlandse regering. Hij staat voor lastige keuzes."
    },
    vocabulary: {
      words: [
        {
          word: "stokje",
          definition: "een klein voorwerp of symbool, vaak gebruikt in overdrachtelijke zin",
          sentence: "Hij neemt het ___ over van zijn voorganger.",
          answer: "stokje"
        },
        {
          word: "keuzes",
          decision: "beslissing of optie",
          sentence: "Hij heeft moeilijke ___ te maken.",
          answer: "keuzes"
        },
        {
          word: "lastige",
          definition: "moeilijk of vervelend",
          sentence: "Hij heeft te maken met ___ beslissingen.",
          answer: "lastige"
        },
        {
          word: "onderhandelen",
          definition: "overleggen met anderen om tot een overeenkomst te komen",
          sentence: "Hij zal met andere partijen ___ over de nieuwe plannen.",
          answer: "onderhandelen"
        },
        {
          word: "loodsen",
          definition: "geleiden of begeleiden, vooral in moeilijke situaties",
          sentence: "Hij moet de onderhandelingen door lastige discussies ___.",
          answer: "loodsen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij moet de onderhandelingen door lastige discussies ___.",
          answer: "loodsen"
        },
        {
          sentence: "Hij heeft te maken met ___ beslissingen.",
          answer: "lastige"
        },
        {
          sentence: "Hij heeft moeilijke ___ te maken.",
          answer: "keuzes"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'loodsen' in deze context?",
        options: [
          "Sturen of begeleiden",
          "Vermijden",
          "Vertragen",
          "Negeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van Jesse Klaver in deze situatie?",
        options: [
          "Hij is de nieuwe voorzitter",
          "Hij is een gewone lid",
          "Hij neemt geen deel aan de onderhandelingen",
          "Hij is de vorige leider"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat de tekst vooral over?",
        options: [
          "Over politieke onderhandelingen",
          "Over een sportevenement",
          "Over een cultureel festival",
          "Over een wetenschappelijke ontdekking"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Jesse Klaver neemt de plaats in van Frans Timmermans.",
        isTrue: true
      },
      {
        statement: "Jesse Klaver zal de onderhandelingen leiden.",
        isTrue: true
      },
      {
        statement: "De tekst gaat over een sportevenement.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Greet D’HELF, 62 jaar",
    topicNumber: 1,
    article: {
      title: "Greet D’HELF, 62 jaar",
      summary: "Geboren in 1963, overleden op 30/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "1963",
          definition: "Het jaar negentienhonderd drieënzestig",
          sentence: "Geboren in ___, overleden in 2025.",
          answer: "1963"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 dagen, of 366 in een schrikkeljaar",
          sentence: "Ze werd slechts 62 ___ oud.",
          answer: "jaar"
        },
        {
          word: "D’HELF",
          definition: "Een familienaam, waarschijnlijk van Franse of Vlaamse oorsprong",
          sentence: "Greet ___ is de volledige naam van de overledene.",
          answer: "D'HELF"
        },
        {
          word: "62",
          definition: "Het getal tweeënzestig, tussen 61 en 63",
          sentence: "Ze werd slechts ___ jaar oud.",
          answer: "62"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven",
          sentence: "Ze is helaas ___ op 30/10/2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Greet ___ is de volledige naam van de overledene.",
          answer: "D'HELF"
        },
        {
          sentence: "Ze werd slechts ___ jaar oud.",
          answer: "62"
        },
        {
          sentence: "Ze is helaas ___ op 30/10/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Greet D'HELF geboren?",
        options: [
          "1963",
          "1964",
          "1965",
          "1966"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de volledige naam zoals vermeld in de titel?",
        options: [
          "Greet D'HELF",
          "Greet De Helf",
          "Greet D'Helf",
          "Greet D.Helf"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum is Greet D'HELF overleden?",
        options: [
          "30/10/2025",
          "31/10/2025",
          "30/11/2025",
          "31/12/2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Greet D'HELF was 62 jaar oud op het moment van overlijden.",
        isTrue: true
      },
      {
        statement: "Greet D'HELF is geboren in 1964.",
        isTrue: false
      },
      {
        statement: "De overlijdensdatum is 30/10/2025.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Paul Defoort, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Paul Defoort, 78 jaar",
      summary: "Geboren in 1946, overleden op 27/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Het moment waarop iemand ter wereld komt.",
          sentence: "Hij werd ___ in 1946.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer in leven zijn; gestorven zijn.",
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 of 366 dagen, beginnend op 1 januari.",
          sentence: "Hij werd 78 ___ oud.",
          answer: "jaar"
        },
        {
          word: "geboren",
          definition: "Het begin van het leven; ter wereld komen.",
          sentence: "Hij werd ___ in 1946.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd 78 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij werd ___ in 1946.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als iemand is overleden?",
        options: [
          "Die persoon is verhuisd.",
          "Die persoon is nog in leven.",
          "Die persoon is gestorven.",
          "Die persoon is jarig."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat geeft de geboortedatum aan?",
        options: [
          "De dag waarop iemand is overleden.",
          "De dag waarop iemand is geboren.",
          "De dag waarop iemand jarig is.",
          "De dag waarop iemand is verhuisd."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een synoniem voor 'geboren'?",
        options: [
          "Ter wereld komen",
          "Overlijden",
          "Jong zijn",
          "Oud zijn"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Paul Defoort is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Paul Defoorn overleed op 27 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Paul Defoort was 78 jaar oud bij zijn overlijden.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Stormloop voor nieuwe tandarts in Kluisbergen: “Mijn praktijk is nog niet open, maar ik ben al volgeboekt”",
    topicNumber: 1,
    article: {
      title: "Stormloop voor nieuwe tandarts in Kluisbergen: “Mijn praktijk is nog niet open, maar ik ben al volgeboekt”",
      summary: "Tandarts Julie Parmentier (26) start donderdag haar praktijk in Kluisbergen en nu al zit ze volgeboekt tot in september 2026. Het is typerend voor een probleem in veel Vlaamse gemeenten."
    },
    vocabulary: {
      words: [
        {
          word: "Praktijk",
          definition: "De professionele werkplek of de dagelijkse uitoefening van een beroep, vooral in medische context.",
          sentence: "Haar medische ___ is gevestigd in het stadscentrum.",
          answer: "Praktijk"
        },
        {
          word: "Probleem",
          definition: "Een moeilijke situatie of een kwestie die problemen veroorzaakt.",
          sentence: "De stad heeft een groot ___ met parkeerplaatsen.",
          answer: "Probleem"
        },
        {
          word: "Typerend",
          definition: "Karakteristiek of exemplarisch voor iets of iemand.",
          sentence: "Zijn punctualiteit is ___ voor zijn professionele instelling.",
          answer: "Typerend"
        },
        {
          word: "Gemeenten",
          definition: "Lokale bestuursgebieden of de lokale overheid in een gebied, vooral in België en Nederland.",
          sentence: "Verschillende ___ werken samen aan een recyclingprogramma.",
          answer: "Gemeenten"
        },
        {
          word: "Stormloop",
          definition: "Een snelle en massale toeloop of toestroom, vaak in een negatieve context.",
          sentence: "De ___ naar winkelopeningen tijdens Black Friday is soms gevaarlijk.",
          answer: "Stormloop"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Verschillende ___ werken samen aan een recyclingprogramma.",
          answer: "Gemeenten"
        },
        {
          sentence: "Haar medische ___ is gevestigd in het stadscentrum.",
          answer: "Praktijk"
        },
        {
          sentence: "De ___ naar winkelopeningen tijdens Black Friday is soms gevaarlijk.",
          answer: "Stormloop"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is tandarts Julie Parmentier al volgeboekt, hoewel haar praktijk nog niet open is?",
        options: [
          "Omdat ze al bekende is in de gemeente",
          "Vanwege een grote vraag naar tandheelkundige zorg in de regio",
          "Omdat ze haar diensten al aanbood voor de opening",
          "Er was een misverstand over de openingsdatum"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van 'volgeboekt' in deze context?",
        options: [
          "Dat alle beschikbare tijdsloten zijn gereserveerd",
          "Dat de praktijk fysiek vol is met patiënten",
          "Dat de boekingstop is bereikt",
          "Dat de agenda niet meer beschikbaar is"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat illustreert dit verhaal over gemeenten in Vlaanderen?",
        options: [
          "Dat ze overvloedige middelen hebben voor gezondheidszorg",
          "Dat ze kampen met een tekort aan medische voorzieningen",
          "Dat ze prioriteit geven aan kunst boven gezondheid",
          "Dat ze snel handelen bij noodsituaties"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Tandarts Julie Parmentier zal pas over 3 jaar nieuwe patiënten kunnen accepteren.",
        isTrue: false
      },
      {
        statement: "De situatie in Kluisbergen weerspiegelt een breder probleem in Vlaamse gemeenten.",
        isTrue: true
      },
      {
        statement: "Julie Parmentier's praktijk is gevestigd in een stad met veel tandartsen.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Dodentol na orkaan loopt op in Jamaica",
    topicNumber: 1,
    article: {
      title: "Dodentol na orkaan loopt op in Jamaica",
      summary: "Het aantal doden na de orkaan in Jamaica is gestegen tot 32. Hulpverleners vrezen dat er nog meer slachtoffers zijn in afgelegen gebieden. Er is ook een groot tekort aan voedsel."
    },
    vocabulary: {
      words: [
        {
          word: "doden",
          definition: "mensen die zijn overleden",
          sentence: "Na de orkaan zijn er veel ___.",
          answer: "doden"
        },
        {
          word: "orkaan",
          definition: "een hele zware storm met veel wind",
          sentence: "De ___ veroorzaakte veel schade.",
          answer: "orkaan"
        },
        {
          word: "Jamaica",
          definition: "een land in het Caribisch gebied",
          sentence: "___ is een eiland in de Caribische Zee.",
          answer: "Jamaica"
        },
        {
          word: "loopt",
          definition: "hier: gaat verder of wordt meer",
          sentence: "Het aantal doden ___ op.",
          answer: "loopt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Na de orkaan zijn er veel ___.",
          answer: "doden"
        },
        {
          sentence: "Het aantal doden ___ op.",
          answer: "loopt"
        },
        {
          sentence: "___ is een eiland in de Caribische Zee.",
          answer: "Jamaica"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de situatie in Jamaica na de orkaan?",
        options: [
          "Er is veel schade en er zijn veel doden",
          "Jamaica heeft geen last van de orkaan",
          "De orkaan is nog niet voorbij",
          "Jamaica is een groot land met veel mensen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg van de orkaan voor de mensen?",
        options: [
          "Ze hebben veel honger",
          "Ze zijn heel gelukkig",
          "Ze gaan naar een feest",
          "Ze hebben veel geld gekregen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen hulpverleners nu?",
        options: [
          "Ze werken hard om mensen te helpen",
          "Ze zijn met vakantie",
          "Ze maken de situatie erger",
          "Ze doen niets meer"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De orkaan in Jamaica heeft veel doden veroorzaakt.",
        isTrue: true
      },
      {
        statement: "Er is genoeg voedsel voor iedereen in Jamaica.",
        isTrue: false
      },
      {
        statement: "Hulpverleners zijn nog niet in alle gebieden geweest.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "een keer dat mensen stemmen om iemand te kiezen",
          sentence: "In november zijn er ___ in de Verenigde Staten.",
          answer: "verkiezingen"
        },
        {
          word: "gouverneur",
          definition: "de baas van een staat in Amerika",
          sentence: "Elke staat in de VS heeft een ___.",
          answer: "gouverneur"
        },
        {
          word: "burgemeester",
          definition: "de leider van een stad of gemeente",
          sentence: "De ___ van Rotterdam heet Ahmed Aboutaleb.",
          answer: "burgemeester"
        },
        {
          word: "Democraten",
          definition: "een politieke partij in de VS",
          sentence: "De ___ willen meer geld geven aan scholen.",
          answer: "Democraten"
        },
        {
          word: "doet",
          definition: "doet, van het werkwoord doen",
          sentence: "Hij ___ goed zijn werk.",
          answer: "doet"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Elke staat in de VS heeft een ___.",
          answer: "gouverneur"
        },
        {
          sentence: "Hij ___ goed zijn werk.",
          answer: "doet"
        },
        {
          sentence: "De ___ willen meer geld geven aan scholen.",
          answer: "Democraten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een gouverneur?",
        options: [
          "Een soort auto",
          "Een sport",
          "De baas van een Amerikaanse staat",
          "Een bekende filmster"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van een burgemeester?",
        options: [
          "Hij maakt veel grapjes.",
          "Hij bestuurt een stad of gemeente.",
          "Hij speelt gitaar.",
          "Hij kookt het eten."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van 'doet' in deze context?",
        options: [
          "Hij doet zijn schoenen aan.",
          "Hij doet de afwas.",
          "Hij doet zijn werk (hij voert zijn taak uit).",
          "Hij doet een dutje."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De burgemeester is de leider van een stad.",
        isTrue: true
      },
      {
        statement: "Donald Trump is de gouverneur van New York.",
        isTrue: false
      },
      {
        statement: "De Democraten zijn een politieke partij in de VS.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Hoe Trump Latijns-Amerika als speeltuin ziet",
    topicNumber: 1,
    article: {
      title: "Hoe Trump Latijns-Amerika als speeltuin ziet",
      summary: "Amerikaanse media noemen Trump een piraat en waarschuwen voor een invasie in Venezuela. Maar Trump maakt van Latijns-Amerika zijn exclusieve speeltuin, in zijn eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "een",
          definition: "lidwoord voor enkelvoud, zoals 'een boek'",
          sentence: "Hij heeft ___ nieuwe plan.",
          answer: "een"
        },
        {
          word: "zijn",
          definition: "bezittelijk voornaamwoord, zoals 'dat is van hem'",
          sentence: "Dat hoort bij ___. (verwijs naar iets van Trump)",
          answer: "zijn"
        },
        {
          word: "maakt",
          definition: "doet of creëert iets",
          sentence: "Hij ___ van Latijns-Amerika zijn speeltuin.",
          answer: "maakt"
        },
        {
          word: "van",
          definition: "woord dat bezit of herkomst aangeeft",
          sentence: "Dit is een boek ___ mijn leraar.",
          answer: "van"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige Amerikaanse president",
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ van Latijns-Amerika zijn speeltuin.",
          answer: "maakt"
        },
        {
          sentence: "Dit is een boek ___ mijn leraar.",
          answer: "van"
        },
        {
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemen media Trump een piraat?",
        options: [
          "Omdat hij van piraten houdt",
          "Omdat hij oneerlijk handelt",
          "Omdat hij een schip heeft",
          "Omdat hij een ooglapje draagt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de Monroedoctrine?",
        options: [
          "Een medische behandeling",
          "Een oud boek",
          "Een plan voor Noord- en Zuid-Amerika",
          "Een soort sport"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'exclusief' in deze tekst?",
        options: [
          "Alleen voor speciale mensen",
          "Voor iedereen toegankelijk",
          "Helemaal niet toegankelijk",
          "Alleen op dinsdag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "De Monroedoctrine is een nieuwe dans.",
        isTrue: false
      },
      {
        statement: "Media noemen Trump een piraat omdat hij oneerlijk is.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Greet D’HELF, 62 jaar",
    topicNumber: 1,
    article: {
      title: "Greet D’HELF, 62 jaar",
      summary: "Geboren in 1963, overleden op 30/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "jaar",
          definition: "Een periode van 12 maanden",
          sentence: "Hij is 30 ___ oud",
          answer: "jaar"
        },
        {
          word: "62",
          definition: "Getal tussen 61 en 63",
          sentence: "Ze is ___ jaar oud",
          answer: "62"
        },
        {
          word: "overleden",
          definition: "Niet meer leven, gestorven zijn",
          sentence: "Hij is ___ in 2023",
          answer: "overleden"
        },
        {
          word: "geboren",
          definition: "Geboren worden, het begin van het leven",
          sentence: "Hij is ___ in 1990",
          answer: "geboren"
        },
        {
          word: "Greet",
          definition: "Een naam",
          sentence: "___ is een vrouw",
          answer: "Greet"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ in 2023",
          answer: "overleden"
        },
        {
          sentence: "___ is een vrouw",
          answer: "Greet"
        },
        {
          sentence: "Hij is 30 ___ oud",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van Greet D’HELF?",
        options: [
          "1963",
          "1964",
          "1965",
          "1966"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Greet D’HELF overleden?",
        options: [
          "2024",
          "2025",
          "2026",
          "2027"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud is Greet D’HELF geworden?",
        options: [
          "60 jaar",
          "61 jaar",
          "62 jaar",
          "63 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Greet D’HELF is geboren in 1963.",
        isTrue: true
      },
      {
        statement: "Greet D’HELF is overleden in 2024.",
        isTrue: false
      },
      {
        statement: "Greet D’HELF is 63 jaar oud geworden.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Paul Defoort, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Paul Defoort, 78 jaar",
      summary: "Geboren in 1946, overleden op 27 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Niet meer levend, gestorven",
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Defoort",
          definition: "Familienaam van de persoon",
          sentence: "Paul ___ was 78 jaar oud.",
          answer: "Defoort"
        },
        {
          word: "Paul",
          definition: "Voornaam van de persoon",
          sentence: "___ Defoort was 78 jaar oud.",
          answer: "Paul"
        },
        {
          word: "2025",
          definition: "Jaartal waarin hij overleed",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          word: "1946",
          definition: "Jaartal waarin hij geboren werd",
          sentence: "Hij is geboren in het jaar ___.",
          answer: "1946"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Paul ___ was 78 jaar oud.",
          answer: "Defoort"
        },
        {
          sentence: "Hij is geboren in het jaar ___.",
          answer: "1946"
        },
        {
          sentence: "___ Defoort was 78 jaar oud.",
          answer: "Paul"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Paul Defoort geboren?",
        options: [
          "1945",
          "1946",
          "1947",
          "1948"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Paul Defoort overleden?",
        options: [
          "26 oktober 2025",
          "27 oktober 2025",
          "28 oktober 2025",
          "29 oktober 2025"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de familienaam van Paul?",
        options: [
          "Jansen",
          "Pietersen",
          "Defoort",
          "Janssen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Paul Defoort is geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Paul Defoort overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Paul Defoort werd 78 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Nieuwe tandarts in Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Nieuwe tandarts in Kluisbergen",
      summary: "Er is een nieuwe tandarts in Kluisbergen. Ze heet Julie. Haar praktijk is nog niet open, maar ze heeft al veel afspraken. Mensen kunnen niet meteen bij haar terecht."
    },
    vocabulary: {
      words: [
        {
          word: "tandarts",
          definition: "een persoon die voor je tanden zorgt",
          sentence: "De ___ helpt als je kiespijn hebt.",
          answer: "tandarts"
        },
        {
          word: "praktijk",
          definition: "de plaats waar iemand werkt, zoals een kantoor",
          sentence: "Julie heeft een nieuwe ___ in Kluisbergen.",
          answer: "praktijk"
        },
        {
          word: "open",
          definition: "beginnen, starten",
          sentence: "De praktijk is nog niet ___.",
          answer: "open"
        },
        {
          word: "afspraken",
          definition: "een plan dat je maakt om iemand te ontmoeten",
          sentence: "Julie heeft al veel ___ gemaakt met patiënten.",
          answer: "afspraken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De praktijk is nog niet ___.",
          answer: "open"
        },
        {
          sentence: "Julie heeft een nieuwe ___ in Kluisbergen.",
          answer: "praktijk"
        },
        {
          sentence: "Julie heeft al veel ___ gemaakt met patiënten.",
          answer: "afspraken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werkt Julie als tandarts?",
        options: [
          "in een ziekenhuis",
          "in een school",
          "in een praktijk in Kluisbergen",
          "in een supermarkt"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de situatie voor Julie's praktijk?",
        options: [
          "Het is al open.",
          "Het is nog gesloten.",
          "Het is verhuisd.",
          "Het is veranderd in een restaurant."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het probleem in veel Vlaamse gemeenten?",
        options: [
          "Er zijn te veel tandartsen.",
          "Er zijn te weinig tandartsen.",
          "Er zijn te veel patiënten.",
          "Er is geen probleem."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Julie is een tandarts in Kluisbergen.",
        isTrue: true
      },
      {
        statement: "Julie's praktijk is al open sinds vorige week.",
        isTrue: false
      },
      {
        statement: "Er is een tekort aan tandarts in sommige Vlaamse gemeenten.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Dodentol Jamaica loopt op, terwijl “zware hongersnood” dreigt",
    topicNumber: 1,
    article: {
      title: "Dodentol Jamaica loopt op, terwijl “zware hongersnood” dreigt",
      summary: "De tol na de doortocht van orkaan Melissa loopt verder op. In Jamaica zijn al 32 doden geteld, maar in de nog niet bereikte plaatsen worden nog meer slachtoffers verwacht. En honger loert om de hoek."
    },
    vocabulary: {
      words: [
        {
          word: "slachtoffers",
          definition: "mensen of dieren die zijn gestorven of gewond zijn geraakt",
          sentence: "De hulpverleners probeerden alle ___ zo snel mogelijk te vinden.",
          answer: "slachtoffers"
        },
        {
          word: "orkaan",
          definition: "een grote, gevaarlijke storm met veel wind",
          sentence: "De ___ veroorzaakte veel schade aan gebouwen en bomen.",
          answer: "orkaan"
        },
        {
          word: "dreigt",
          definition: "iets dat waarschijnlijk zal gebeuren, meestal iets negatiefs",
          sentence: "De donkere wolken ___ met regen later vandaag.",
          answer: "dreigt"
        },
        {
          word: "doortocht",
          definition: "het voorbijgaan of passeren van iets, zoals een storm",
          sentence: "De orkaan liet een spoor van vernieling achter tijdens zijn ___.",
          answer: "doortocht"
        },
        {
          word: "hongersnood",
          definition: "een situatie waarin er niet genoeg voedsel is voor iedereen",
          sentence: "Na de oogst mislukking ontstond er een ___ in de regio.",
          answer: "hongersnood"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De donkere wolken ___ met regen later vandaag.",
          answer: "dreigt"
        },
        {
          sentence: "Na de oogst mislukking ontstond er een ___ in de regio.",
          answer: "hongersnood"
        },
        {
          sentence: "De hulpverleners probeerden alle ___ zo snel mogelijk te vinden.",
          answer: "slachtoffers"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er bedoeld met de dreiging van 'zware hongersnood' in de tekst?",
        options: [
          "Een lichte vorm van honger hebben",
          "Een periode waarin er extreem weinig voedsel beschikbaar is",
          "Een storm met veel regen",
          "Een feestmaaltijd met veel voedsel"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom worden er in de tekst meer slachtoffers verwacht?",
        options: [
          "Omdat de storm voorbij is en het weer mooi wordt",
          "Omdat hulpverleners nog niet alle gebieden hebben kunnen bereiken",
          "Omdat er een groot feest gepland is waar iedereen naartoe komt",
          "Omdat er veel ziekenhuizen zijn en iedereen daar is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de orkaan in deze situatie?",
        options: [
          "De orkaan brengt vreugde en feestelijkheden",
          "De orkaan is de oorzaak van de vernieling en problemen zoals honger",
          "De orkaan zorgt alleen voor wat regen en verder niets",
          "De orkaan is een dier dat op de vlucht is geslagen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De orkaan Melissa heeft alleen in Jamaica slachtoffers gemaakt.",
        isTrue: false
      },
      {
        statement: "Hongersnood is een direct gevolg van de orkaan omdat er geen voedsel meer is.",
        isTrue: true
      },
      {
        statement: "Alle slachtoffers zijn al geteld en er worden er geen nieuwe meer verwacht.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "een verkiezing is een proces waarbij mensen stemmen om iemand te kiezen voor een functie",
          sentence: "Tijdens de ___ stemmen mensen op hun favoriete kandidaat.",
          answer: "verkiezingen"
        },
        {
          word: "gouverneurs",
          definition: "een gouverneur is de leider van een staat in de Verenigde Staten",
          sentence: "De ___ van Texas en Californië hebben veel macht.",
          answer: "gouverneurs"
        },
        {
          word: "burgemeester",
          definition: "een burgemeester is het hoofd van de gemeente of stad",
          sentence: "De ___ van New York werkt samen met de gemeenteraad.",
          answer: "burgemeester"
        },
        {
          word: "Democraten",
          definition: "een van de twee grote politieke partijen in de Verenigde Staten",
          sentence: "De ___ hebben momenteel de meerderheid in de Senaat.",
          answer: "Democraten"
        },
        {
          word: "herlanceren",
          definition: "opnieuw beginnen of nieuw leven inblazen",
          sentence: "Het nieuwe project zal de economie ___.",
          answer: "herlanceren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van Texas en Californië hebben veel macht.",
          answer: "gouverneurs"
        },
        {
          sentence: "De ___ hebben momenteel de meerderheid in de Senaat.",
          answer: "Democraten"
        },
        {
          sentence: "De ___ van New York werkt samen met de gemeenteraad.",
          answer: "burgemeester"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Welke politieke partij is momenteel aan de macht in de Senaat van de Verenigde Staten?",
        options: [
          "De Democraten",
          "De Republikeinen",
          "De Groenen",
          "De Liberalen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van een gouverneur?",
        options: [
          "Leider van een staat",
          "Leider van het land",
          "Leider van een stad",
          "Leider van een provincie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een barometer in deze context?",
        options: [
          "Een meetinstrument voor luchtdruk",
          "Een indicator of graadmeter",
          "Een weervoorspeller",
          "Een apparaat om snelheid te meten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen in Virginia en New Jersey bepalen wie de nieuwe gouverneurs worden.",
        isTrue: true
      },
      {
        statement: "Een burgemeester van New York is automatisch ook de burgemeester van heel de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "De uitslagen van deze verkiezingen kunnen een indicatie geven van de populariteit van president Trump.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Nieuwe voorzitter Jesse Klaver mag proberen GroenLinks-PvdA de regering binnen te loodsen",
    topicNumber: 1,
    article: {
      title: "Nieuwe voorzitter Jesse Klaver mag proberen GroenLinks-PvdA de regering binnen te loodsen",
      summary: "Voormalig GroenLinks-leider Jesse Klaver neemt het stokje over van Frans Timmermans. Hij zal voor GroenLinks-PvdA onderhandelen over een nieuwe Nederlandse regering. Hij staat voor lastige keuzes."
    },
    vocabulary: {
      words: [
        {
          word: "keuzes",
          definition: "verschillende mogelijkheden waaruit je kunt kiezen",
          sentence: "Hij moet moeilijke ___ maken.",
          answer: "keuzes"
        },
        {
          word: "leider",
          definition: "iemand die een groep of organisatie leidt",
          sentence: "Hij is een charismatische ___ voor zijn partij.",
          answer: "leider"
        },
        {
          word: "onderhandelen",
          definition: "overleggen met anderen om tot een overeenkomst te komen",
          sentence: "De partijen gaan ___ over de nieuwe plannen.",
          answer: "onderhandelen"
        },
        {
          word: "stokje",
          definition: "een klein, dun stukje van iets, vaak figuurlijk gebruikt",
          sentence: "Hij nam het ___ over van zijn voorganger.",
          answer: "stokje"
        },
        {
          word: "proberen",
          definition: "een poging doen om iets te doen of te bereiken",
          sentence: "Hij zal ___ om een akkoord te bereiken.",
          answer: "proberen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij nam het ___ over van zijn voorganger.",
          answer: "stokje"
        },
        {
          sentence: "Hij is een charismatische ___ voor zijn partij.",
          answer: "leider"
        },
        {
          sentence: "De partijen gaan ___ over de nieuwe plannen.",
          answer: "onderhandelen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'het stokje overnemen' in deze context?",
        options: [
          "Iemand fysiek slaan",
          "Een positie of taak van iemand anders overnemen",
          "Een sportwedstrijd winnen",
          "Een stokje doorgeven in een estafette"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een synoniem voor 'lastige' in deze tekst?",
        options: [
          "Gemakkelijke",
          "Uitdagende",
          "Onmogelijke",
          "Complexe"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het hoofdonderwerp van deze tekst?",
        options: [
          "De sportcarrière van Jesse Klaver",
          "Een kookwedstrijd tussen politici",
          "Politieke onderhandelingen en leiderschap",
          "De geschiedenis van GroenLinks"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Jesse Klaver was de voorganger van Frans Timmermans.",
        isTrue: false
      },
      {
        statement: "Jesse Klaver wordt de nieuwe leider van GroenLinks-PvdA.",
        isTrue: true
      },
      {
        statement: "De tekst gaat vooral over een voetbalwedstrijd.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Greet D’HELF, 62 jaar",
    topicNumber: 1,
    article: {
      title: "Greet D’HELF, 62 jaar",
      summary: "Geboren in 1963, overleden op 30/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Helaas is zij recentelijk ___.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Een jaartal, in dit geval het jaar 2025.",
          sentence: "Ze stierf op 30 oktober in het jaar ___.",
          answer: "2025"
        },
        {
          word: "1963",
          definition: "Een jaartal, verwijzend naar het jaar 1963.",
          sentence: "Ze werd geboren in het jaar ___.",
          answer: "1963"
        },
        {
          word: "30",
          definition: "Het getal dertig, hier gebruikt als datum.",
          sentence: "Ze stierf op ___ oktober 2025.",
          answer: "30"
        },
        {
          word: "2025",
          definition: "Een jaartal, in dit geval het jaar 2025.",
          sentence: "Ze stierf op 30 oktober in het jaar ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze stierf op ___ oktober 2025.",
          answer: "30"
        },
        {
          sentence: "Helaas is zij recentelijk ___.",
          answer: "overleden"
        },
        {
          sentence: "Ze stierf op 30 oktober in het jaar ___.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Greet D’HELF geboren?",
        options: [
          "1960",
          "1963",
          "1970",
          "1975"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Greet D’HELF overleden?",
        options: [
          "30 oktober 2025",
          "31 oktober 2025",
          "30 november 2025",
          "31 december 2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de geboortemaand van Greet D’HELF?",
        options: [
          "Januari",
          "Februari",
          "Maart",
          "Onbekend"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Greet D’HELF is geboren in 1963.",
        isTrue: true
      },
      {
        statement: "Greet D’HELF is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Greet D’HELF stierf in de maand januari.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Paul Defoort, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Paul Defoort, 78 jaar",
      summary: "Geboren in 1946, overleden op 27/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Het begin van iemands leven; het ter wereld komen.",
          sentence: "Paul Defoort werd ___ in 1946.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Overleden",
          definition: "Gestorven; niet meer levend.",
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Paul Defoort werd ___ in 1946.",
          answer: "geboren"
        },
        {
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is ___ op 27 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Paul Defoort geboren?",
        options: [
          "1940",
          "1945",
          "1946",
          "1950"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent het woord 'overleden'?",
        options: [
          "Net geboren",
          "Heel oud",
          "Gestorven",
          "Zeer ziek"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Paul Defoort geworden?",
        options: [
          "78 jaar",
          "80 jaar",
          "75 jaar",
          "77 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Paul Defoort is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Paul Defoort werd geboren in 1946.",
        isTrue: true
      },
      {
        statement: "Paul Defoort was 75 jaar oud.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Vlaamse tandarts",
    topicNumber: 1,
    article: {
      title: "Stormloop voor nieuwe tandarts in Kluisbergen",
      summary: "Tandarts Julie Parmentier (26) start donderdag haar praktijk in Kluisbergen en nu al zit ze volgeboekt tot in september 2026. Het is typerend voor een probleem in veel Vlaamse gemeenten."
    },
    vocabulary: {
      words: [
        {
          word: "Stormloop",
          definition: "Een plotselinge, grote toestroom van mensen of activiteit.",
          sentence: "Tijdens de ___ op de nieuwe winkel, waren er veel mensen.",
          answer: "Stormloop"
        },
        {
          word: "Gemeente",
          definition: "Een lokale overheidseenheid, vaak een stad of dorp.",
          sentence: "De ___ van Kluisbergen heeft deze kwestie.",
          answer: "Gemeente"
        },
        {
          word: "Gemeenten",
          definition: "Lokale bestuursgebieden, zoals een stad of dorp.",
          sentence: "Verschillende ___ in Vlaanderen kampen met dit probleem.",
          answer: "Gemeenten"
        },
        {
          word: "Vlaamse",
          definition: "Betrekking hebbend op Vlaanderen, het Vlaamse deel van België.",
          sentence: "De ___ gemeenten hebben vaak een tekort aan tandartsen.",
          answer: "Vlaamse"
        },
        {
          word: "Volgeboekt",
          definition: "Volledig bezet, geen plaats meer vrij.",
          sentence: "De tandartspraktijk is al ___ voor de komende jaren.",
          answer: "Volgeboekt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de ___ op de nieuwe winkel, waren er veel mensen.",
          answer: "Stormloop"
        },
        {
          sentence: "De tandartspraktijk is al ___ voor de komende jaren.",
          answer: "Volgeboekt"
        },
        {
          sentence: "De ___ gemeenten hebben vaak een tekort aan tandartsen.",
          answer: "Vlaamse"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden voor de drukte bij tandarts Julie?",
        options: [
          "Ze is de enige tandarts in de regio",
          "Er is een speciale actie gaande voor gratis behandelingen",
          "De praktijk opent pas later, maar heeft nu al veel aanmeldingen",
          "Er is een misverstand over de openingsdatum"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het gevolg van de situatie in Kluisbergen?",
        options: [
          "Julie stopt met werken als tandarts",
          "Andere gemeenten zullen hetzelfde probleem hebben",
          "De wachtlijst wordt korter door nieuwe wetten",
          "Er is geen gevolg, het is opgelost"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat typeert de situatie volgens de samenvatting?",
        options: [
          "Het is een eenmalige gebeurtenis",
          "Het is kenmerkend (typerend) voor een groter probleem",
          "Het is een positief teken van veel vraag",
          "Het is een gevolg van slechte planning door de gemeente"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Julie Parmentier is al meer dan vijfentwintig jaar oud.",
        isTrue: false
      },
      {
        statement: "Kluisbergen is de enige Vlaamse gemeente met dit probleem.",
        isTrue: false
      },
      {
        statement: "De praktijk van Julie is nog niet open, maar ze heeft al veel patiënten ingeschreven.",
        isTrue: true
      }
    ]
  }
];
