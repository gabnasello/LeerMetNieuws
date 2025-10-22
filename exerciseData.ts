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
    section: "Binnenland",
    level: "B1",
    title: "Werknemers gevangenis moeten e-mailtekst verwijderen",
    topicNumber: 1,
    article: {
      title: "Werknemers gevangenis moeten e-mailtekst verwijderen",
      summary: "De personeelsleden van de Belgische gevangenissen moeten een bericht uit hun e-mailhandtekening verwijderen. In dat bericht werd geklaagd over te veel gevangenen. De ministerraad heeft dit gevraagd."
    },
    vocabulary: {
      words: [
        {
          word: "gevangenis",
          definition: "Een plaats waar mensen die de wet hebben overtreden, worden vastgehouden."
        },
        {
          word: "e-mailhandtekening",
          definition: "De tekst die automatisch onderaan een e-mailbericht wordt geplaatst."
        },
        {
          word: "ministerraad",
          definition: "De groep van ministers die samen de regering vormen."
        },
        {
          word: "verwijderen",
          definition: "Iets weghalen of er niet meer bij hebben."
        },
        {
          word: "klagen",
          definition: "Zeggen dat je niet tevreden bent, meestal over iets dat vervelend is."
        }
      ],
      fillInBlanks: [
        {
          sentence: "De werknemers moeten de e-mailtekst ___",
          answer: "verwijderen"
        },
        {
          sentence: "De ministerraad heeft dit ___",
          answer: "gevraagd"
        },
        {
          sentence: "Er wordt veel ___ over de situatie in de gevangenissen",
          answer: "geklaagd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar verwijderen de werknemers de e-mailtekst uit?",
        options: [
          "Uit hun e-mailhandtekening",
          "Uit een boek",
          "Van de ministerraad",
          "Uit de gevangenis"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is de rol van de ministerraad in dit verhaal?",
        options: [
          "Ze hebben de tekst geschreven",
          "Ze hebben gevraagd de tekst te verwijderen",
          "Ze zijn de gevangenen",
          "Ze hebben de tekst goedgekeurd"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarover werd er geklaagd in het bericht?",
        options: [
          "Over te veel gevangenen",
          "Over te weinig gevangenen",
          "Over de ministerraad",
          "Over de e-mailhandtekening"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "De werknemers moeten de e-mailtekst toevoegen aan hun e-mail.",
        isTrue: false
      },
      {
        statement: "De ministerraad heeft gevraagd om het bericht te verwijderen.",
        isTrue: true
      },
      {
        statement: "Het bericht klaagde over te weinig gevangenen.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Binnenland",
    level: "B1",
    title: "Fietsers en wandelaars: Waarom ruziën? Met een beetje beleefdheid is er veel op te lossen.",
    topicNumber: 1,
    article: {
      title: "Fietsers en wandelaars: Waarom ruziën? Met een beetje beleefdheid is er veel op te lossen.",
      summary: "Fietsers en wandelaars hebben soms problemen met elkaar. Veel mensen herkennen dit. Ze vertellen over hun ergernissen. Dit artikel laat een selectie van die reacties zien."
    },
    vocabulary: {
      words: [
        {
          word: "fietsers",
          definition: "personen die fietsen"
        },
        {
          word: "wandelaars",
          definition: "personen die wandelen"
        },
        {
          word: "ruzie",
          definition: "onenigheid of conflict"
        },
        {
          word: "beleefdheid",
          definition: "het beleefd zijn; vriendelijkheid"
        },
        {
          word: "oplossen",
          definition: "iets oplossen; een probleem verhelpen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Fietsers en wandelaars maken soms ___ over elkaars gedrag.",
          answer: "ruzies"
        },
        {
          sentence: "Met een beetje ___ kun je al veel problemen voorkomen.",
          answer: "beleefdheid"
        },
        {
          sentence: "Samen kunnen we dit probleem ___ door beter naar elkaar te luisteren.",
          answer: "oplossen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat helpt om ruzies tussen fietsers en wandelaars te voorkomen?",
        options: [
          "Meer fietsen",
          "Meer wandelen",
          "Beleefdheid tonen",
          "Harder praten"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom maken fietsers en wandelaars soms ruzie?",
        options: [
          "Ze verstaan elkaar niet",
          "Ze willen allebei voorrang",
          "Ze hebben haast",
          "Ze hebben andere doelen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een voorbeeld van beleefdheid in het verkeer?",
        options: [
          "Snel inhalen",
          "Niet groeten",
          "Iemand voor laten gaan",
          "Op de telefoon kijken"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Fietsers en wandelaars hebben altijd dezelfde doelen.",
        isTrue: false
      },
      {
        statement: "Beleefdheid kan helpen om conflicten te voorkomen.",
        isTrue: true
      },
      {
        statement: "Ruzie is altijd de schuld van de fietser.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Vance is optimistisch over vrede in Gaza",
    topicNumber: 1,
    article: {
      title: "Vance is optimistisch over vrede in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de vredesonderhandelingen. Vance is hier optimistisch over."
    },
    vocabulary: {
      words: [
        {
          word: "optimistisch",
          definition: "positief en hoopvol"
        },
        {
          word: "vakbond",
          definition: "een groep werknemers die samenwerkt voor betere rechten"
        },
        {
          word: "onderhandelingen",
          definition: "gesprekken om tot een oplossing te komen"
        },
        {
          word: "oorlog",
          definition: "een periode van gewapend conflict"
        },
        {
          word: "vrede",
          definition: "geen oorlog, rust en harmonie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ over de toekomst.",
          answer: "optimistisch"
        },
        {
          sentence: "De ___ tussen landen is belangrijk voor vrede.",
          answer: "onderhandelingen"
        },
        {
          sentence: "Ze willen ___ in de regio.",
          answer: "vrede"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is Vance optimistisch over?",
        options: [
          "Oorlog in Gaza",
          "Vrede in Gaza",
          "Een nieuwe oorlog",
          "Meer conflicten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het tegenovergestelde van oorlog?",
        options: [
          "Strijd",
          "Vrede",
          "Conflict",
          "Oorlog"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe lang duurde de oorlog in Gaza?",
        options: [
          "1 jaar",
          "2 jaar",
          "5 jaar",
          "10 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Vance is optimistisch over vrede in Gaza.",
        isTrue: true
      },
      {
        statement: "De oorlog in Gaza duurde vijf jaar.",
        isTrue: false
      },
      {
        statement: "Onderhandelingen kunnen leiden tot vrede.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Buitenland",
    topic: "Oorlog in Oekraïne",
    level: "B1",
    title: "Oekraïne Oorlog",
    topicNumber: 1,
    article: {
      title: "Oekraïne Oorlog",
      summary: "President Zelensky vindt het voorstel van Trump om de oorlog te bevriezen een goed compromis. Volg het laatste nieuws over de oorlog in Oekraïne via de DS Nieuws app."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "een gewapend conflict tussen landen of groepen"
        },
        {
          word: "bevriezen",
          definition: "iets stoppen of pauzeren, zoals een conflict"
        },
        {
          word: "compromis",
          definition: "een oplossing waar beide partijen iets toegeven"
        },
        {
          word: "voorstel",
          definition: "een plan of idee dat wordt voorgesteld"
        },
        {
          word: "app",
          definition: "een applicatie op je telefoon, vaak voor nieuws of sociale media"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De twee landen besloten de oorlog te ___",
          answer: "bevriezen"
        },
        {
          sentence: "Ze maakten een ___ om het conflict op te lossen.",
          answer: "compromis"
        },
        {
          sentence: "Ze gebruikten een ___ om het nieuws te volgen.",
          answer: "app"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'bevriezen' in deze context?",
        options: [
          "Het permanent stoppen van de oorlog",
          "Het tijdelijk pauzeren van de oorlog",
          "Het versnellen van de oorlog",
          "Het negeren van de oorlog"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar staat 'app' voor in deze tekst?",
        options: [
          "Een soort voedsel",
          "Een applicatie op je telefoon",
          "Een type auto",
          "Een soort dier"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'compromis'?",
        options: [
          "Een soort wapen",
          "Een overeenkomst waar beide partijen iets opgeven",
          "Een type virus",
          "Een soort auto"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zelensky wil de oorlog helemaal stoppen.",
        isTrue: false
      },
      {
        statement: "Trump stelde voor de oorlog te bevriezen.",
        isTrue: true
      },
      {
        statement: "De DS Nieuws app geeft updates over de oorlog.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Kansspelcommissie kon weinig boetes innen",
    topicNumber: 1,
    article: {
      title: "Kansspelcommissie kon weinig boetes innen",
      summary: "De Kansspelcommissie heeft in 2024 veel boetes uitgeschreven, maar weinig geld binnengekregen. Het is een organisatie zonder tanden."
    },
    vocabulary: {
      words: [
        {
          word: "commissie",
          definition: "een groep mensen die samenwerkt"
        },
        {
          word: "boetes",
          definition: "geld dat je moet betalen als straf"
        },
        {
          word: "innen",
          definition: "binnenhalen of ontvangen"
        },
        {
          word: "tand",
          definition: "een hard ding in je mond om mee te kauwen"
        },
        {
          word: "weinig",
          definition: "niet veel"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De commissie kon de boetes niet ___",
          answer: "innen"
        },
        {
          sentence: "Hij heeft een ___ gelachen, dus hij is blij.",
          answer: "tand"
        },
        {
          sentence: "Er is ___ water in de fles.",
          answer: "weinig"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Kansspelcommissie?",
        options: [
          "Een soort school",
          "Een soort winkel",
          "Een soort commissie",
          "Een soort auto"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een boete?",
        options: [
          "Een soort beloning",
          "Een soort straf",
          "Een soort spel",
          "Een soort tand"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'innen'?",
        options: [
          "Buiten krijgen",
          "Binnen krijgen",
          "Buiten halen",
          "Binnen halen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Kansspelcommissie heeft veel boetes uitgeschreven.",
        isTrue: true
      },
      {
        statement: "De Kansspelcommissie heeft alle boetes binnengekregen.",
        isTrue: false
      },
      {
        statement: "Een tandeloze tijger heeft geen tanden.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Acteur Felix Heremans wint in tv-quiz",
    topicNumber: 1,
    article: {
      title: "Acteur Felix Heremans wint in tv-quiz",
      summary: "Acteur Felix Heremans is de jongste winnaar ooit van de tv-quiz 'De slimste mens'. Hij won de eerste aflevering. We spraken met hem in juli."
    },
    vocabulary: {
      words: [
        {
          word: "acteur",
          definition: "iemand die een rol speelt in een film of toneelstuk"
        },
        {
          word: "winnen",
          definition: "een wedstrijd of spel winnen"
        },
        {
          word: "quiz",
          definition: "een spel of wedstrijd met vragen"
        },
        {
          word: "jongste",
          definition: "de kleinste in leeftijd"
        },
        {
          word: "aflevering",
          definition: "een deel van een serie, bijvoorbeeld op tv"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Felix Heremans is een ___.",
          answer: "acteur"
        },
        {
          sentence: "Hij was de ___ winnaar ooit.",
          answer: "jongste"
        },
        {
          sentence: "Hij deed mee aan een ___.",
          answer: "quiz"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Felix Heremans?",
        options: [
          "Een student",
          "Een leraar",
          "Een acteur",
          "Een atleet"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'De slimste mens'?",
        options: [
          "Een boek",
          "Een film",
          "Een tv-programma",
          "Een sport"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud is Felix Heremans ongeveer?",
        options: [
          "10 jaar",
          "20 jaar",
          "30 jaar",
          "40 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Felix Heremans is de oudste winnaar.",
        isTrue: false
      },
      {
        statement: "'De slimste mens' is een tv-programma.",
        isTrue: true
      },
      {
        statement: "Felix Heremans is een acteur.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Binnenland",
    level: "C1",
    title: "Medewerkers gevangenis moeten klacht over overbevolking uit e-mail verwijderen",
    topicNumber: 1,
    article: {
      title: "Medewerkers gevangenis moeten klacht over overbeveling uit e-mail verwijderen",
      summary: "De Belgische regering vraagt aan personeel in gevangenissen om een klacht over overbeveling te verwijderen uit hun e-mailhandtekening. Dit is een belangrijk onderwerp omdat overbeveling in gevangenissen een groot probleem is."
    },
    vocabulary: {
      words: [
        {
          word: "gevangenis",
          definition: "Een plaats waar mensen worden vastgehouden als straf voor een misdaad."
        },
        {
          word: "overbevolking",
          definition: "Wanneer er te veel mensen in een ruimte zijn, waardoor het oncomfortabel of ongezond wordt."
        },
        {
          word: "klacht",
          definition: "Een formele uiting van ontevredenheid of een probleem."
        },
        {
          word: "e-mailhandtekening",
          definition: "De tekst die automatisch onderaan een e-mailbericht wordt geplaatst, vaak met contactgegevens."
        },
        {
          word: "verwijderen",
          definition: "Iets weghalen of verwijderen zodat het niet langer aanwezig is."
        }
      ],
      fillInBlanks: [
        {
          sentence: "De overbevolking in de ___ is zorgwekkend.",
          answer: "gevangenis"
        },
        {
          sentence: "Hij diende een ___ in wegens de slechte service.",
          answer: "klacht"
        },
        {
          sentence: "Kun je die oude foto ___ van je telefoon?",
          answer: "verwijderen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is overbevolking?",
        options: [
          "Een soort ziekte",
          "Te veel mensen in een kleine ruimte",
          "Een nieuw soort technologie",
          "Een feestelijke gebeurtenis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'verwijderen'?",
        options: [
          "Toevoegen",
          "Wegdoen",
          "Verbergen",
          "Repareren"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom vraagt de regering aan gevangenispersoneel om de klacht te verwijderen?",
        options: [
          "Omdat het niet waar is",
          "Omdat het slecht voor het imago is",
          "Omdat het personeel ermee moet leren omgaan",
          "Omdat het een officieel document moet worden"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Overbevolking is een probleem in gevangenissen.",
        isTrue: true
      },
      {
        statement: "Een e-mailhandtekening kan geen klachten bevatten.",
        isTrue: false
      },
      {
        statement: "De Belgische regering onderneemt actie tegen overbevolking.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Binnenland",
    level: "C1",
    title: "Waarom ruziën? Met een beetje hoffelijkheid los je veel op.",
    topicNumber: 1,
    article: {
      title: "Waarom ruziën? Met een beetje hoffelijkheid los je veel op.",
      summary: "Fietsers en voetgangers hebben vaak conflicten. Maar met een beetje beleefdheid kunnen ze veel problemen voorkomen. Veel lezers erkennen dit en delen voorbeelden van ergernissen en oplossingen."
    },
    vocabulary: {
      words: [
        {
          word: "conflict",
          definition: "een meningsverschil of botsing tussen mensen"
        },
        {
          word: "hoffelijkheid",
          definition: "beleefd en respectvol gedrag"
        },
        {
          word: "voorkomen",
          definition: "ervoor zorgen dat iets niet gebeurt"
        },
        {
          word: "ergernis",
          definition: "irritatie of ergernis"
        },
        {
          word: "oplossing",
          definition: "manier om een probleem op te lossen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een ___ kan escaleren als mensen niet communiceren.",
          answer: "conflict"
        },
        {
          sentence: "___ is belangrijk in elke interactie.",
          answer: "Hoffelijkheid"
        },
        {
          sentence: "Het is beter om problemen te ___ dan ze te negeren.",
          answer: "voorkomen"
        },
        {
          sentence: "Constante ___ kan tot ruzies leiden.",
          answer: "ergernis"
        },
        {
          sentence: "Een goede ___ lost veel problemen op.",
          answer: "oplossing"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het tegenovergestelde van hoffelijkheid?",
        options: [
          "Onbeleefdheid",
          "Luidruchtigheid",
          "Onverschilligheid",
          "Onbeschoftheid"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat helpt om een conflict op te lossen?",
        options: [
          "Harder praten",
          "Weigeren te luisteren",
          "Samenwerken",
          "Eigenbelang eerst"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is hoffelijkheid belangrijk?",
        options: [
          "Het is verplicht",
          "Het maakt anderen boos",
          "Het creëert harmonie",
          "Het kost te veel moeite"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Conflicten zijn altijd negatief.",
        isTrue: false
      },
      {
        statement: "Hoffelijkheid kan conflicten voorkomen.",
        isTrue: true
      },
      {
        statement: "Samenwerken leidt altijd tot ruzies.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Vance is hoopvol over vrede in Gaza",
    topicNumber: 1,
    article: {
      title: "Vance is hoopvol over vrede in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de vredesonderhandelingen. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "een gewapend conflict tussen landen of groepen"
        },
        {
          word: "vredesonderhandelingen",
          definition: "gesprekken om oorlog te beëindigen en vrede te maken"
        },
        {
          word: "staakt-het-vuren",
          definition: "een overeenkomst om te stoppen met vechten"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke, positieve verandering in een situatie"
        },
        {
          word: "hoopvol",
          definition: "optimistisch en vol hoop"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De partijen hebben een ___ overeengekomen om de gevechten te stoppen.",
          answer: "staakt-het-vuren"
        },
        {
          sentence: "De onderhandelingen leidden tot een ___ in het conflict.",
          answer: "doorbraak"
        },
        {
          sentence: "Vance is ___ over de uitkomst van de gesprekken.",
          answer: "hoopvol"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Vrede in Gaza",
          "Een sportevenement",
          "Een kunsttentoonstelling",
          "Een nieuwe film"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is een 'staakt-het-vuren'?",
        options: [
          "Een soort wapen",
          "Een soort dans",
          "Een soort overeenkomst",
          "Een soort maaltijd"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe voelt Vance over de onderhandelingen?",
        options: [
          "Boos",
          "Verdrietig",
          "Hopelijk",
          "Bang"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De tekst gaat over vrede in Gaza.",
        isTrue: true
      },
      {
        statement: "Vance is verdrietig over de onderhandelingen.",
        isTrue: false
      },
      {
        statement: "Er is een doorbraak in de vredesgesprekken.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zelensky vindt Trumps voorstel goed compromis",
    topicNumber: 1,
    article: {
      title: "Zelensky vindt Trumps voorstel goed compromis",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "voorstel",
          definition: "een idee of plan dat iemand voorstelt"
        },
        {
          word: "compromis",
          definition: "een oplossing waar beide partijen iets van elkaar krijgen"
        },
        {
          word: "oorlog",
          definition: "een gewapend conflict tussen landen of groepen"
        },
        {
          word: "ontwikkeling",
          definition: "een nieuwe gebeurtenis of verandering in een situatie"
        },
        {
          word: "melding",
          definition: "een bericht of waarschuwing dat je iets vertelt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft een nieuw ___ gedaan om het conflict op te lossen.",
          answer: "voorstel"
        },
        {
          sentence: "Ze sloten een ___ om het meningsverschil bij te leggen.",
          answer: "compromis"
        },
        {
          sentence: "De ___ duurt al meer dan twee jaar.",
          answer: "oorlog"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een sportevenement",
          "Een politiek conflict",
          "Een kunstexpositie",
          "Een wetenschappelijke doorbraak"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de kern van Trumps voorstel?",
        options: [
          "Een wapenstilstand",
          "Een volledige overgave",
          "Geen specifieke actie",
          "Een gezamenlijke vakantie"
        ],
        correctAnswer: 0
      },
      {
        question: "Hoe reageert Zelensky op het voorstel?",
        options: [
          "Hij wijst het meteen af",
          "Hij noemt het een goed compromis",
          "Hij eist meer",
          "Hij negeert het volledig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Trumps voorstel gaat over een permanente vrede.",
        isTrue: false
      },
      {
        statement: "Zelensky is positief over het voorstel.",
        isTrue: true
      },
      {
        statement: "De oorlog is al beëindigd.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Felix Heremans: van 'Putain' naar 'De Slimste Mens'",
    topicNumber: 1,
    article: {
      title: "Felix Heremans: van 'Putain' naar 'De Slimste Mens'",
      summary: "Acteur Felix Heremans deed mee aan het tv-programma 'De Slimste Mens'. Hij won de eerste aflevering. Hij is de jongste kandidaat ooit in dat programma. We spraken met hem in juli, en nu lees je hier over hem."
    },
    vocabulary: {
      words: [
        {
          word: "acteur",
          definition: "iemand die een rol speelt in een film of op het toneel"
        },
        {
          word: "winnen",
          definition: "een wedstrijd of spel winnen"
        },
        {
          word: "kandidaat",
          definition: "iemand die meedoet aan een wedstrijd of verkiezing"
        },
        {
          word: "programma",
          definition: "een tv-programma of uitzending"
        },
        {
          word: "interview",
          definition: "een vraaggesprek, vaak voor de media"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is een ___ die meedeed aan een tv-programma.",
          answer: "acteur"
        },
        {
          sentence: "Hij hoopte de eerste aflevering te ___.",
          answer: "winnen"
        },
        {
          sentence: "Hij is de jongste ___ ooit in dat programma.",
          answer: "kandidaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Felix Heremans?",
        options: [
          "Een programmamaker",
          "Een presentator",
          "Een acteur",
          "Een journalist"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat deed Felix in de eerste aflevering?",
        options: [
          "Hij verloor",
          "Hij was afwezig",
          "Hij won",
          "Hij was tweede"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is bijzonder aan zijn deelname?",
        options: [
          "Hij is de oudste",
          "Hij is de jongste",
          "Hij is de sterkste",
          "Hij is de snelste"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Felix Heremans is de jongste kandidaat ooit in 'De Slimste Mens'.",
        isTrue: true
      },
      {
        statement: "Felix Heremans verloor de eerste aflevering.",
        isTrue: false
      },
      {
        statement: "Felix Heremans is een acteur.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    level: "A2",
    title: "Werknemers in de gevangenis mogen niet klagen over te veel gevangenen",
    topicNumber: 1,
    article: {
      title: "Werknemers in de gevangenis mogen niet klagen over te veel gevangenen",
      summary: "De Belgische regering zegt tegen personeel in gevangenissen: jullie mogen niet meer zeggen dat er te veel gevangenen zijn. Die boodschap moet weg uit jullie e-mail handtekening."
    },
    vocabulary: {
      words: [
        {
          word: "werknemers",
          definition: "mensen die werken voor een bedrijf"
        },
        {
          word: "gevangenis",
          definition: "een plaats waar mensen worden vastgehouden als straf"
        },
        {
          word: "klagen",
          definition: "zeggen dat je niet blij bent met iets"
        },
        {
          word: "over",
          definition: "bovenop of erboven"
        },
        {
          word: "te veel",
          definition: "meer dan nodig is"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De werknemers mogen niet ___ over hun werk.",
          answer: "klagen"
        },
        {
          sentence: "Er zijn te ___ gevangenen in de gevangenis.",
          answer: "veel"
        },
        {
          sentence: "De regering wil dat de boodschap ___ uit de e-mail.",
          answer: "verdwijnt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat mogen de werknemers niet doen?",
        options: [
          "Klagen over te veel gevangenen",
          "Lachen met collega's",
          "Eten tijdens het werk",
          "Naar huis gaan vroeg"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat zegt de Belgische regering tegen het personeel?",
        options: [
          "Jullie mogen niet klagen over te veel gevangenen",
          "Jullie moeten harder werken",
          "Jullie moeten meer uren maken",
          "Jullie moeten minder geld vragen"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat moet er gebeuren met de boodschap in de e-mail?",
        options: [
          "Die moet verdwijnen",
          "Die moet groter worden",
          "Die moet blijven",
          "Die moet veranderen"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "De werknemers mogen klagen over te veel gevangenen.",
        isTrue: false
      },
      {
        statement: "De Belgische regering wil dat de boodschap verdwijnt uit de e-mail.",
        isTrue: true
      },
      {
        statement: "De werknemers mogen blijven werken in de gevangenis.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Binnenland",
    level: "A2",
    title: "Ruzie tussen fietsers en wandelaars: Waarom ruzie maken? Met vriendelijkheid los je veel problemen op.",
    topicNumber: 1,
    article: {
      title: "Ruzie tussen fietsers en wandelaars: Waarom ruzie maken? Met vriendelijkheid los je veel problemen op.",
      summary: "Soms zijn fietsers en wandelaars boos op elkaar. Maar waarom? Het is beter om vriendelijk te zijn. Dan los je veel problemen op."
    },
    vocabulary: {
      words: [
        {
          word: "ruzie",
          definition: "een situatie waarin mensen ruzie hebben"
        },
        {
          word: "vriendelijkheid",
          definition: "vriendelijk zijn; aardig zijn tegen anderen"
        },
        {
          word: "problemen",
          definition: "moeilijke situaties die moeten worden opgelost"
        },
        {
          word: "oplossen",
          definition: "iets fixen; een oplossing vinden"
        },
        {
          word: "wandelaars",
          definition: "mensen die wandelen, meestal in de natuur"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Fietsers en wandelaars hebben soms ___ met elkaar.",
          answer: "ruzie"
        },
        {
          sentence: "Met vriendelijkheid kun je veel ___ oplossen.",
          answer: "problemen"
        },
        {
          sentence: "___ is een goed voorbeeld van hoe je problemen kunt oplossen.",
          answer: "Vriendelijkheid"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is het belangrijk om vriendelijk te zijn?",
        options: [
          "Omdat het makkelijker is",
          "Omdat ruzie gevaarlijk is",
          "Omdat vriendelijkheid problemen oplost",
          "Omdat het sneller gaat"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van vriendelijkheid?",
        options: [
          "Iemand uitschelden",
          "Iemand helpen met zijn fiets",
          "Negeren",
          "Hard weglopen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen wandelaars vooral?",
        options: [
          "Fietsen",
          "Auto rijden",
          "Wandelen",
          "Zwemmen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Fietsers en wandelaars zijn altijd vriendelijk.",
        isTrue: false
      },
      {
        statement: "Vriendelijkheid kan problemen oplossen.",
        isTrue: true
      },
      {
        statement: "Ruzie is beter dan vriendelijkheid.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Vance is hoopvol over vrede in Gaza",
    topicNumber: 1,
    article: {
      title: "Vance is hoopvol over vrede in Gaza",
      summary: "Na twee jaar oorlog in Gaza is er hoop op vrede. Vance is optimistisch over het staakt-het-vuren. Volg hier het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "vredes",
          definition: "geen oorlog, vrede"
        },
        {
          word: "hoop",
          definition: "het gevoel dat iets goeds gaat gebeuren"
        },
        {
          word: "onderhandelingen",
          definition: "gesprekken om tot een oplossing te komen"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke, positieve verandering"
        },
        {
          word: "staakt-het-vuren",
          definition: "stoppen met vechten, geen vuur meer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De vredes___ zijn begonnen",
          answer: "onderhandelingen"
        },
        {
          sentence: "Er is een belangrijke door___ in het conflict",
          answer: "doorbraak"
        },
        {
          sentence: "Het staakt-het-vuren wordt ___ gehouden",
          answer: "Vance"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is Vance optimistisch over?",
        options: [
          "De oorlog in Gaza",
          "Het staakt-het-vuren",
          "De toekomst van Gaza",
          "De onderhandelingen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het resultaat van de onderhandelingen?",
        options: [
          "Een nieuwe oorlog",
          "Een doorbraak naar vrede",
          "Meer conflicten",
          "Geen verandering"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe lang duurde de oorlog in Gaza?",
        options: [
          "1 jaar",
          "2 jaar",
          "5 jaar",
          "10 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Vance is optimistisch over het staakt-het-vuren.",
        isTrue: true
      },
      {
        statement: "De oorlog in Gaza is al 10 jaar aan de gang.",
        isTrue: false
      },
      {
        statement: "Er is een doorbraak in de onderhandelingen.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Oorlog in Oekraïne: nieuws en updates",
    topicNumber: 1,
    article: {
      title: "Oorlog in Oekraïne: nieuws en updates",
      summary: "Volg hier alle nieuwe ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "een situatie waarin landen of groepen tegen elkaar vechten"
        },
        {
          word: "ontwikkeling",
          definition: "iets dat nieuw is of verandert"
        },
        {
          word: "app",
          definition: "een programma op je telefoon of computer"
        },
        {
          word: "melding",
          definition: "een bericht dat je iets vertelt"
        },
        {
          word: "updates",
          definition: "nieuwe informatie over iets"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er is een nieuwe ___ in de oorlog.",
          answer: "ontwikkeling"
        },
        {
          sentence: "Download de ___ om meldingen te krijgen.",
          answer: "app"
        },
        {
          sentence: "Krijg een ___ wanneer er belangrijk nieuws is.",
          answer: "melding"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de oorlog over?",
        options: [
          "Een spel",
          "Een feest",
          "Een conflict tussen landen",
          "Een soort muziek"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een app?",
        options: [
          "Een soort dier",
          "Een programma op je telefoon",
          "Een soort eten",
          "Een auto"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'updates'?",
        options: [
          "Oude informatie",
          "Nieuwe informatie",
          "Een soort game",
          "Een sport"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Een oorlog is wanneer mensen samen feesten.",
        isTrue: false
      },
      {
        statement: "Een app is iets op je telefoon.",
        isTrue: true
      },
      {
        statement: "Updates zijn oude informatie die niet meer geldig is.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Veel boetes voor gokken niet betaald",
    topicNumber: 1,
    article: {
      title: "Veel boetes voor gokken niet betaald",
      summary: "De Kansspelcommissie heeft in 2024 veel boetes uitgeschreven, maar veel boetes zijn niet betaald. Van de 4,6 miljoen euro aan boetes is slechts 0,6 procent betaald. De Kansspelcommissie is als een tijger zonder tanden."
    },
    vocabulary: {
      words: [
        {
          word: "boetes",
          definition: "geld dat je moet betalen als straf"
        },
        {
          word: "betaald",
          definition: "het geld is gegeven voor iets"
        },
        {
          word: "gokken",
          definition: "spelen om geld te winnen of verliezen"
        },
        {
          word: "tand",
          definition: "hard, wit ding in je mond"
        },
        {
          word: "tijger",
          definition: "een groot, geel met zwart gestreept dier"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Als je niet betaalt, krijg je een ___.",
          answer: "boete"
        },
        {
          sentence: "Een ___ is een gevaarlijk dier.",
          answer: "tijger"
        },
        {
          sentence: "Gokken kan verslavend zijn, net als een ___.",
          answer: "tijger"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Kansspelcommissie?",
        options: [
          "Een soort bank",
          "Een groep die toezicht houdt op gokken",
          "Een soort dierentuin",
          "Een soort restaurant"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'tandeloze tijger'?",
        options: [
          "Een dier zonder tanden",
          "Iemand die er niet gevaarlijk uitziet",
          "Een dier dat niet kan bijten",
          "Alle bovenstaande"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over een echte tijger",
          "Over geld en boetes",
          "Over een commissie die geen tanden heeft",
          "Over de opbrengst van boetes"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Kansspelcommissie heeft in 2024 veel boetes geïnd.",
        isTrue: false
      },
      {
        statement: "Een tijger zonder tanden kan niet bijten.",
        isTrue: true
      },
      {
        statement: "De Kansspelcommissie is net een sterke leeuw.",
        isTrue: false
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Felix Heremans in De Slimste Mens",
    topicNumber: 1,
    article: {
      title: "Felix Heremans in De Slimste Mens",
      summary: "Acteur Felix Heremans deed mee aan De Slimste Mens. Hij won de eerste aflevering. Hij is de jongste kandidaat ooit in dat programma. Dit is een artikel over hem."
    },
    vocabulary: {
      words: [
        {
          word: "acteur",
          definition: "iemand die in films of theater speelt"
        },
        {
          word: "winnen",
          definition: "een spel of wedstrijd winnen"
        },
        {
          word: "kandidaat",
          definition: "iemand die meedoet aan een wedstrijd of show"
        },
        {
          word: "programma",
          definition: "een tv-show of uitzending"
        },
        {
          word: "jongste",
          definition: "de kleinste in leeftijd, het tegenovergestelde van oudste"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is een ___ en speelt in films.",
          answer: "acteur"
        },
        {
          sentence: "Hij hoopte te ___ in de show.",
          answer: "winnen"
        },
        {
          sentence: "Hij was een ___ in de tv-show.",
          answer: "kandidaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Felix Heremans?",
        options: [
          "Een acteur",
          "Een leraar",
          "Een atleet",
          "Een muzikant"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat deed hij in de show?",
        options: [
          "Hij won",
          "Hij verloor",
          "Hij zong",
          "Hij danste"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is 'De Slimste Mens'?",
        options: [
          "Een boek",
          "Een tv-programma",
          "Een restaurant",
          "Een sport"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Felix Heremans is de jongste kandidaat ooit in De Slimste Mens.",
        isTrue: true
      },
      {
        statement: "De Slimste Mens is een boek.",
        isTrue: false
      },
      {
        statement: "Felix Heremans won de eerste aflevering.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    level: "B2",
    title: "Overbevolking in gevangenissen: personeel mag niet klagen in e-mails",
    topicNumber: 1,
    article: {
      title: "Overbeplakt: Titel is gewijzigd voor privacy",
      summary: "Artikelinhoud is samengevat voor oefening"
    },
    vocabulary: {
      words: [
        {
          word: "overbevolking",
          definition: "te veel mensen in een beperkte ruimte"
        },
        {
          word: "gevangenis",
          definition: "een plaats waar mensen worden vastgehouden als straf"
        },
        {
          word: "ministerraad",
          definition: "een groep ministers die samen besluiten nemen"
        },
        {
          word: "e-mailhandtekening",
          definition: "de tekst onderaan een e-mail met contactgegevens"
        },
        {
          word: "verwijderen",
          definition: "weghalen of wissen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De gevangenis heeft last van ___",
          answer: "overbevolking"
        },
        {
          sentence: "De ministerraad vroeg om de ___ aan te passen",
          answer: "e-mailhandtekening"
        },
        {
          sentence: "Het personeel moet de tekst ___",
          answer: "verwijderen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom moet het personeel de tekst verwijderen?",
        options: [
          "Omdat de ministerraad het vraagt",
          "Omdat de tekst te lang is",
          "Omdat de tekst onjuist is",
          "Omdat de tekst geheim is"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is de gevolgen van overbevolking in gevangenissen?",
        options: [
          "Meer conflicten onder gevangenen",
          "Minder privacy voor gevangenen",
          "Meer werkdruk voor personeel",
          "Alle bovenstaande"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de ministerraad?",
        options: [
          "Beslissen over gevangenissen",
          "Adviseren over e-mailgebruik",
          "Controleren van personeelshandelingen",
          "Geen van bovenstaande"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "De e-mailhandtekening mocht blijven staan.",
        isTrue: false
      },
      {
        statement: "Overbevolking is een probleem in gevangenissen.",
        isTrue: true
      },
      {
        statement: "Alleen de ministerraad mag over dit onderwerp communiceren.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Binnenland",
    level: "B2",
    title: "Waarom zijn fietsers en voetgangers ontevreden? Met een beetje beleefdheid is er veel op te lossen.",
    topicNumber: 1,
    article: {
      title: "Waarom zijn fietsers en voetgangers ontevreden? Met een beetje beleefdheid is er veel op te lossen.",
      summary: "Fietsers en voetgangers zijn al lang ontevreden. Maar veel lezers herkennen dit en vertellen over hun ergernissen. Dit is een selectie van hun verhalen."
    },
    vocabulary: {
      words: [
        {
          word: "ontevreden",
          definition: "niet tevreden, niet blij met de situatie"
        },
        {
          word: "oplossen",
          definition: "een probleem of conflict wegwerken"
        },
        {
          word: "beleefdheid",
          definition: "beleefd zijn, vriendelijk en respectvol zijn"
        },
        {
          word: "herkennen",
          definition: "iets of iemand (weer)zien en weten wat of wie het is"
        },
        {
          word: "ergernis",
          definition: "een gevoel van irritatie of frustratie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Veel mensen zijn ontevreden omdat ze zich niet ___ voelen.",
          answer: "gehoord"
        },
        {
          sentence: "Met een beetje meer ___, kunnen veel problemen worden opgelost.",
          answer: "beleefdheid"
        },
        {
          sentence: "Als je een conflict ___, los je het op.",
          answer: "oplost"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn fietsers en voetgangers ontevreden?",
        options: [
          "Omdat er te weinig fietspaden zijn",
          "Omdat ze zich niet gehoord voelen",
          "Omdat er te veel auto's zijn",
          "Omdat het weer slecht is"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat helpt om problemen op te lossen?",
        options: [
          "Meer auto's bouwen",
          "Meer geld uitgeven",
          "Meer beleefdheid",
          "Meer klagen"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe voelen veel mensen zich volgens de tekst?",
        options: [
          "Tevreden",
          "Ongehoord",
          "Vrolijk",
          "Verdwaald"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Fietsers en voetgangers zijn over het algemeen tevreden.",
        isTrue: false
      },
      {
        statement: "Beleefdheid kan helpen om problemen op te lossen.",
        isTrue: true
      },
      {
        statement: "De meeste lezers hebben geen last van ergernissen in het verkeer.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Vance is optimistisch over wapenstilstand in Gaza",
    topicNumber: 1,
    article: {
      title: "Vance is optimistisch over wapenstilstand in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de vredesonderhandelingen. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "optimistisch",
          definition: "positief en hoopvol over de toekomst"
        },
        {
          word: "wapenstilstand",
          definition: "een overeenkomst om te stoppen met vechten"
        },
        {
          word: "onderhandelingen",
          definition: "gesprekken om tot een oplossing te komen"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke en positieve ontwikkeling"
        },
        {
          word: "vredesonderhandelingen",
          definition: "gesprekken om vrede te bereiken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij voelde zich ___ over de uitkomst.",
          answer: "optimistisch"
        },
        {
          sentence: "De partijen kwamen overeen een ___ te sluiten.",
          answer: "wapenstilstand"
        },
        {
          sentence: "De ___ leidde tot een oplossing.",
          answer: "doorbraak"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is Vance optimistisch over?",
        options: [
          "het weer",
          "de wapenstilstand",
          "een sportevenement",
          "zijn vakantie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent het woord 'doorbraak' in deze context?",
        options: [
          "een doorgebroken raam",
          "een belangrijke positieve ontwikkeling",
          "een sportterm",
          "een soort voedsel"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom zijn de onderhandelingen belangrijk?",
        options: [
          "Ze zijn niet belangrijk",
          "Ze kunnen leiden tot meer vrede",
          "Ze gaan alleen over sport",
          "Ze zijn geheim"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Vance is optimistisch over de wapenstilstand.",
        isTrue: true
      },
      {
        statement: "De oorlog in Gaza duurt al meer dan twee jaar.",
        isTrue: true
      },
      {
        statement: "Er zijn geen onderhandelingen geweest.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zelensky vindt Trumps voorstel een goed compromis",
    topicNumber: 1,
    article: {
      title: "Zelensky vindt Trumps voorstel een goed compromis",
      summary: "Volg de laatste ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws voor updates."
    },
    vocabulary: {
      words: [
        {
          word: "voorstel",
          definition: "een plan of idee dat iemand naar voren brengt"
        },
        {
          word: "bevriezen",
          definition: "stoppen of laten stilstaan, vooral van actie"
        },
        {
          word: "compromis",
          definition: "een oplossing waar beide partijen iets toegeven"
        },
        {
          word: "ontwikkeling",
          definition: "gebeurtenis of verandering die plaatsvindt"
        },
        {
          word: "oorlog",
          definition: "een gewapend conflict tussen landen of groepen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het voorstel was om de gevechten te ___.",
          answer: "bevriezen"
        },
        {
          sentence: "Een ___ kan helpen om een conflict op te lossen.",
          answer: "compromis"
        },
        {
          sentence: "Er was een nieuwe ___ in het conflict.",
          answer: "ontwikkeling"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'bevriezen' in deze context?",
        options: [
          "bevriezen betekent doorgaan",
          "bevriezen betekent stoppen",
          "bevriezen betekent versnellen",
          "bevriezen betekent negeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'compromis'?",
        options: [
          "Een soort muziek",
          "Een soort voedsel",
          "Een overeenkomst waar beide partijen iets opgeven",
          "Een soort wapen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over koken",
          "Over sport",
          "Over politiek en conflict",
          "Over kunst"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zelensky vindt Trumps voorstel een slecht idee.",
        isTrue: false
      },
      {
        statement: "De tekst gaat over de oorlog in Oekraïne.",
        isTrue: true
      },
      {
        statement: "Een compromis betekent dat niets verandert.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Binnenland",
    topicNumber: 1,
    article: {
      title: "Grote boetes voor gokken, maar weinig betaald",
      summary: "De Kansspelcommissie heeft in 2024 veel boetes uitgeschreven, maar weinig van dit geld is daadwerkelijk betaald. Dit komt doordat het voor veel mensen moeilijk is om de hoge boetes te betalen. Hierdoor heeft de commissie minder geld binnengekregen dan verwacht."
    },
    vocabulary: {
      words: [
        {
          word: "boetes",
          definition: "Geld dat je moet betalen als straf voor iets wat niet mag"
        },
        {
          word: "betalen",
          definition: "Geld geven voor iets wat je koopt of voor een dienst"
        },
        {
          word: "moeilijk",
          definition: "Niet gemakkelijk, veel moeite kostend"
        },
        {
          word: "hoge",
          definition: "Veel, groot, boven een normaal niveau"
        },
        {
          word: "mensen",
          definition: "Meerdere personen, de groep personen in het algemeen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige mensen kunnen hun ___ niet betalen.",
          answer: "boetes"
        },
        {
          sentence: "Het is ___ voor hem om alleen naar school te gaan.",
          answer: "moeilijk"
        },
        {
          sentence: "De prijs voor deze auto is te ___ voor mij.",
          answer: "hoge"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom heeft de Kansspelcommissie weinig geld binnengekregen?",
        options: [
          "Omdat ze te veel boetes uitgeschreven heeft",
          "Omdat veel mensen de boetes niet kunnen betalen",
          "Omdat ze stopte met innen",
          "Omdat er geen boetes zijn uitgeschreven"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een voorbeeld van iets dat 'hoog' is?",
        options: [
          "Een diepe kuil",
          "Een korte persoon",
          "Een hoge berg",
          "Een warme dag"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'betalen' in deze context?",
        options: [
          "Geld ontvangen",
          "Geld uitgeven",
          "Geld geven voor een dienst of product",
          "Geld weigeren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Kansspelcommissie heeft veel geld binnengekregen in 2024.",
        isTrue: false
      },
      {
        statement: "Het is moeilijk voor sommige mensen om boetes te betalen.",
        isTrue: true
      },
      {
        statement: "De Kansspelcommissie heeft alleen boetes uitgeschreven voor lage bedragen.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Felix Heremans wint in 'De slimste mens'",
    topicNumber: 1,
    article: {
      title: "Felix Heremans wint in 'De slimste mens'",
      summary: "Acteur Felix Heremans won de eerste aflevering van 'De slimste mens'. Hij is de jongste winnaar ooit. Eind juli werd hij al geïnterviewd. Hier lees je het opnieuw."
    },
    vocabulary: {
      words: [
        {
          word: "acteur",
          definition: "iemand die in films of toneel speelt"
        },
        {
          word: "winnen",
          definition: "een wedstrijd of spel winnen"
        },
        {
          word: "kandidaat",
          definition: "iemand die meedoet aan een wedstrijd"
        },
        {
          word: "aflevering",
          definition: "een deel van een serie op tv"
        },
        {
          word: "geïnterviewd",
          definition: "vragen beantwoorden voor een krant of tv"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is een ___ in een film.",
          answer: "acteur"
        },
        {
          sentence: "Ze hoopte de eerste prijs te ___.",
          answer: "winnen"
        },
        {
          sentence: "Hij was een ___ in de talentenjacht.",
          answer: "kandidaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Felix Heremans?",
        options: [
          "Een acteur",
          "Een presentator",
          "Een atleet",
          "Een muzikant"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is 'De slimste mens'?",
        options: [
          "Een boek",
          "Een radioprogramma",
          "Een tv-programma",
          "Een restaurant"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud is Felix Heremans ongeveer?",
        options: [
          "10 jaar",
          "20 jaar",
          "30 jaar",
          "40 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Felix Heremans is de jongste winnaar ooit van 'De slimste mens'.",
        isTrue: true
      },
      {
        statement: "De tekst is geschreven voordat 'De slimste mens' werd uitgezonden.",
        isTrue: false
      },
      {
        statement: "Felix Heremans is een acteur.",
        isTrue: true
      }
    ]
  }
];
