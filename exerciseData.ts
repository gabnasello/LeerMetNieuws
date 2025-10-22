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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  }
];
