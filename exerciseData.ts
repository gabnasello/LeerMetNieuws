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
    title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
    topicNumber: 1,
    article: {
      title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
      summary: "Volg hier de laatste ontwikkelingen in Gaza."
    },
    vocabulary: {
      words: [
        {
          word: "lucht",
          definition: "De lucht die we inademen.",
          sentence: "De ___ is fris na de regen.",
          answer: "lucht"
        },
        {
          word: "na",
          definition: "Na een bepaalde tijd of gebeurtenis.",
          sentence: "We gaan eten ___ het werk.",
          answer: "na"
        },
        {
          word: "doden",
          definition: "Mensen die zijn overleden.",
          sentence: "Er vielen veel ___ bij het ongeluk.",
          answer: "doden"
        },
        {
          word: "aanvallen",
          definition: "Een aanval of het aanvallen van iets of iemand.",
          sentence: "De soldaten zullen de vijand ___.",
          answer: "aanvallen"
        },
        {
          word: "nieuwe",
          definition: "Iets dat net is begonnen of gemaakt.",
          sentence: "Ze kocht een ___ auto.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze kocht een ___ auto.",
          answer: "nieuwe"
        },
        {
          sentence: "De soldaten zullen de vijand ___.",
          answer: "aanvallen"
        },
        {
          sentence: "Er vielen veel ___ bij het ongeluk.",
          answer: "doden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'nieuwe' in deze context?",
        options: [
          "Oude",
          "Verse",
          "Recent",
          "Nieuwe"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de betekenis van 'volgen' in de samenvatting?",
        options: [
          "Negeren",
          "Volgen",
          "Ontvangen",
          "Aanvallen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'Gaza' naar?",
        options: [
          "Een stad",
          "Een land",
          "Een regio",
          "Een persoon"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Er vielen 26 doden na de luchtaanvallen in Gaza.",
        isTrue: true
      },
      {
        statement: "De aanvallen vonden plaats in Nederland.",
        isTrue: false
      },
      {
        statement: "Men kan de ontwikkelingen in Gaza volgen via nieuwsberichten.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
      summary: "Storm Melissa is als een orkaan van categorie vijf aan land gekomen in Jamaica. Voor het Caraïbisch eiland is het de zwaarste storm ooit."
    },
    vocabulary: {
      words: [
        {
          word: "eiland",
          definition: "een stuk land omgeven door water, kleiner dan een continent",
          sentence: "Jamaica is een ___ in de Caraïben.",
          answer: "eiland"
        },
        {
          word: "zwaarste",
          definition: "het meest in gewicht of moeilijkst",
          sentence: "Dit is de ___ storm die we ooit hebben gezien.",
          answer: "zwaarste"
        },
        {
          word: "orkaan",
          definition: "een hele sterke storm met veel wind",
          sentence: "Er komt een ___ aan, dus we moeten voorzichtig zijn.",
          answer: "orkaan"
        },
        {
          word: "categorie",
          definition: "een groep of type, bijvoorbeeld van een storm",
          sentence: "Deze storm is van ___ vijf, dus het is heel gevaarlijk.",
          answer: "categorie"
        },
        {
          word: "stroom",
          definition: "elektriciteit die stroomt, of een rivier van water",
          sentence: "Na de storm was er geen ___ meer in huis.",
          answer: "stroom"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Na de storm was er geen ___ meer in huis.",
          answer: "stroom"
        },
        {
          sentence: "Er komt een ___ aan, dus we moeten voorzichtig zijn.",
          answer: "orkaan"
        },
        {
          sentence: "Deze storm is van ___ vijf, dus het is heel gevaarlijk.",
          answer: "categorie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een orkaan?",
        options: [
          "Een soort dier",
          "Een soort auto",
          "Een soort feest",
          "Een soort storm"
        ],
        correctAnswer: 4
      },
      {
        question: "Waar is de orkaan Melissa ontstaan?",
        options: [
          "In Nederland",
          "In de Verenigde Staten",
          "In de Atlantische Oceaan",
          "In de woestijn"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'zwaarste' in deze context?",
        options: [
          "Heel licht",
          "Heel zwaar",
          "Heel oud",
          "Heel nieuw"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is de zwaarste storm ooit voor Jamaica.",
        isTrue: true
      },
      {
        statement: "De orkaan heeft voor stroomuitval in Nederland gezorgd.",
        isTrue: false
      },
      {
        statement: "Er zijn 530.000 huishoudens op Jamaica zonder stroom door de orkaan.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Inwoners Al-Fasher worden uitgemoord: in Noord-Soedan ontrolt zich het ergste scenario",
    topicNumber: 1,
    article: {
      title: "Inwoners Al-Fasher worden uitgemoord: in Noord-Soedan ontrolt zich het ergste scenario",
      summary: "Uit getuigenissen, video’s en satellietbeelden blijkt dat rebellen bij de verovering van de Soedanese stad Al-Fasher volledige wijken platbranden en de inwoners uitmoorden. Burgers die proberen te vluchten, worden doodgeschoten of aan bomen opgehangen."
    },
    vocabulary: {
      words: [
        {
          word: "inwoners",
          definition: "mensen die in een stad of land wonen",
          sentence: "De inwoners van het dorp waren erg vriendelijk.",
          answer: "inwoners"
        },
        {
          word: "getuigenissen",
          definition: "officiële verklaringen van wat iemand heeft gezien of meegemaakt",
          sentence: "De politie nam verschillende ___ op na het incident.",
          answer: "getuigenissen"
        },
        {
          word: "wijken",
          definition: "delen van een stad, vaak met hun eigen karakter",
          sentence: "De oude ___ van de stad zijn vol met geschiedenis.",
          answer: "wijken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De oude ___ van de stad zijn vol met geschiedenis.",
          answer: "wijken"
        },
        {
          sentence: "De inwoners van het dorp waren erg vriendelijk.",
          answer: "inwoners"
        },
        {
          sentence: "De politie nam verschillende ___ op na het incident.",
          answer: "getuigenissen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Nederland?",
        options: [
          "Parijs",
          "Londen",
          "Amsterdam",
          "Brussel"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe noem je iemand die in een bepaald land woont?",
        options: [
          "Inwoner",
          "Bewoner",
          "Bewoner",
          "Inwoner"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat betekent 'verwoesten'?",
        options: [
          "Opbouwen",
          "Verwoesten",
          "Herstellen",
          "Negeren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Amsterdam is de hoofdstad van Nederland.",
        isTrue: true
      },
      {
        statement: "De Eiffeltoren staat in Londen.",
        isTrue: false
      },
      {
        statement: "Vluchten betekent om snel weg te gaan van gevaar.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Jacques Vandekerckhove, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Jacques Vandekerckhove, 92 jaar",
      summary: "Geboren in 1933, overleden op 26/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van het leven, wanneer iemand wordt geboren",
          sentence: "Hij is ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ op 26 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar is Jacques Vandekerckhove geboren?",
        options: [
          "1920",
          "1925",
          "1933",
          "1940"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Jacques Vandekerckhove toen hij overleed?",
        options: [
          "88 jaar",
          "90 jaar",
          "92 jaar",
          "95 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Op welke datum overleed Jacques Vandekerckhove?",
        options: [
          "26 oktober 2023",
          "26 oktober 2024",
          "26 oktober 2025",
          "26 oktober 2026"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Jacques Vandekerckhove werd 93 jaar oud.",
        isTrue: false
      },
      {
        statement: "Jacques Vandekerckhove overleed in het jaar 2025.",
        isTrue: true
      },
      {
        statement: "Jacques Vandekerckhove werd geboren in 1930.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Adoptie uit buitenland werd ‘gepauzeerd’, maar nu staan er toch weer 35 gezinnen in de wachtrij",
    topicNumber: 1,
    article: {
      title: "Adoptie uit buitenland werd ‘gepauzeerd’, maar nu staan er toch weer 35 gezinnen in de wachtrij",
      summary: "Veertig gezinnen in Vlaanderen zijn bezig met een traject voor buitenlandse adoptie, 35 andere werd beloofd dat ze er nog mogen instappen. En dat terwijl er al sinds eind 2023 een ‘adoptiepauze’ is afgekondigd. “De boodschap is niet helder en dat is lastig”, meent parlementslid Freya Perdaens (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "wachtrij",
          definition: "Een lijst van mensen die wachten op iets",
          sentence: "Hij staat in de ___ voor een nieuw huis.",
          answer: "wachtrij"
        },
        {
          word: "helder",
          definition: "Duidelijk, makkelijk te begrijpen",
          sentence: "De instructies waren erg ___ en gemakkelijk te volgen.",
          answer: "helder"
        },
        {
          word: "gezin",
          definition: "Een groep mensen die samenwonen, vaak ouders en kinderen",
          sentence: "Een ___ bestaat vaak uit ouders en hun kinderen.",
          answer: "gezin"
        },
        {
          word: "boodschap",
          definition: "De inhoud van wat er gezegd wordt, de mededeling",
          sentence: "De ___ van de leider was duidelijk en motiverend.",
          answer: "boodschap"
        },
        {
          word: "gepauzeerd",
          definition: "Tijdelijk gestopt, niet voor altijd",
          sentence: "De vergadering werd ___ omdat niet iedereen er was.",
          answer: "gepauzeerd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De vergadering werd ___ omdat niet iedereen er was.",
          answer: "gepauzeerd"
        },
        {
          sentence: "Een ___ bestaat vaak uit ouders en hun kinderen.",
          answer: "gezin"
        },
        {
          sentence: "Hij staat in de ___ voor een nieuw huis.",
          answer: "wachtrij"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent ‘gepauzeerd’ in deze tekst?",
        options: [
          "Voor altijd gestopt",
          "Tijdelijk gestopt",
          "Helemaal klaar",
          "Net begonnen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een ‘wachtrij’?",
        options: [
          "Een soort auto",
          "Een winkelwagen",
          "Een lijst van wachtenden",
          "Een snelweg"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over reizen naar het buitenland",
          "Over sportevenementen",
          "Over adoptie en beleid",
          "Over koken en eten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De adoptie uit het buitenland is helemaal gestopt.",
        isTrue: false
      },
      {
        statement: "Er zijn gezinnen in Vlaanderen die willen adopteren uit het buitenland.",
        isTrue: true
      },
      {
        statement: "Er is helemaal geen adoptie meer mogelijk volgens de tekst.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
    topicNumber: 1,
    article: {
      title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
      summary: "Het Hof van Cassatie verwerpt het cassatieberoep dat advocaat Hans Rieder en zijn ex-echtgenote hadden ingesteld tegen hun veroordeling wegens belastingontduiking door domiciliefraude."
    },
    vocabulary: {
      words: [
        {
          word: "verwerpt",
          definition: "weigert, keurt af",
          sentence: "De rechter ___ het verzoek om vrijspraak.",
          answer: "verwerpt"
        },
        {
          word: "advocaat",
          definition: "iemand die anderen helpt met juridische zaken",
          sentence: "De ___ verdedigt mensen in de rechtbank.",
          answer: "advocaat"
        },
        {
          word: "definitief",
          definition: "voorgoed, niet meer veranderbaar",
          sentence: "Het vonnis is nu ___, er is geen beroep meer mogelijk.",
          answer: "definitief"
        },
        {
          word: "cassatie",
          definition: "een hoger beroep bij de hoogste rechter",
          sentence: "De advocaten dienden een verzoek tot ___ in om de uitspraak aan te vechten.",
          answer: "cassatie"
        },
        {
          word: "belastingontduiking",
          definition: "het niet betalen van belasting, wat illegaal is",
          sentence: "Hij werd verdacht van ___ en moest voor de rechter komen.",
          answer: "belastingontduiking"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ verdedigt mensen in de rechtbank.",
          answer: "advocaat"
        },
        {
          sentence: "De rechter ___ het verzoek om vrijspraak.",
          answer: "verwerpt"
        },
        {
          sentence: "De advocaten dienden een verzoek tot ___ in om de uitspraak aan te vechten.",
          answer: "cassatie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdgedachte van dit artikel?",
        options: [
          "Advocaten kunnen niet worden vervolgd",
          "Een advocaat en zijn ex-vrouw zijn definitief schuldig bevonden aan belastingontduiking",
          "Het Hof van Cassatie heeft een nieuwe rechtszaak aangevraagd",
          "De advocaat heeft zelf de fraude gepleegd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'cassatie' in deze context?",
        options: [
          "Een soort koffie",
          "Een hoger beroep bij het hoogste gerechtshof",
          "Een formele excusemail naar de rechter",
          "De ontbinding van het huwelijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van het Hof van Cassatie hier?",
        options: [
          "Het organiseert feesten voor medewerkers",
          "Het bevestigt de echtscheiding van het paar",
          "Het weigert het verzoek om de zaak te herzien",
          "Het stelt de advocaat vrij op basis van nieuwe wetten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De advocaat en zijn ex-echtgenote zijn allebei schuldig bevonden.",
        isTrue: true
      },
      {
        statement: "Het Hof van Cassatie heeft de echtscheiding van het koppel uitgesproken.",
        isTrue: false
      },
      {
        statement: "De uitspraak van het hof is definitief en kan niet meer worden aangevochten.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
    topicNumber: 1,
    article: {
      title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
      summary: "Er zijn nieuwe luchtaanvallen in Gaza. Er zijn 26 doden. Dit is het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "Er",
          definition: "een woord dat vaak aan het begin van een zin staat om iets aan te duiden",
          sentence: "___ zijn 26 doden.",
          answer: "Er"
        },
        {
          word: "na",
          definition: "na een bepaalde tijd of gebeurtenis",
          sentence: "De doden vielen ___ de luchtaanvallen.",
          answer: "na"
        },
        {
          word: "26",
          definition: "het getal tussen 25 en 27",
          sentence: "Er zijn ___ doden gevallen.",
          answer: "26"
        },
        {
          word: "doden",
          definition: "mensen die niet meer leven",
          sentence: "Er zijn 26 ___ na de aanvallen.",
          answer: "doden"
        },
        {
          word: "Gaza",
          definition: "een plaats in het Midden-Oosten waar veel conflicten zijn",
          sentence: "In ___ zijn veel mensen gewond geraakt.",
          answer: "Gaza"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er zijn ___ doden gevallen.",
          answer: "26"
        },
        {
          sentence: "___ zijn 26 doden.",
          answer: "Er"
        },
        {
          sentence: "De doden vielen ___ de luchtaanvallen.",
          answer: "na"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gebeurden de luchtaanvallen?",
        options: [
          "In Gaza",
          "In Nederland",
          "In de supermarkt",
          "Op school"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoeveel doden zijn er gemeld?",
        options: [
          "26",
          "10",
          "50",
          "100"
        ],
        correctAnswer: 1
      },
      {
        question: "Wanneer vonden de luchtaanvallen plaats?",
        options: [
          "Gisteren",
          "Morgen",
          "Vorige week",
          "Over een maand"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De luchtaanvallen vonden plaats in Gaza.",
        isTrue: true
      },
      {
        statement: "Er zijn 100 doden gemeld.",
        isTrue: false
      },
      {
        statement: "De aanvallen gebeurden na een eerdere gebeurtenis.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Orkaan op weg naar Cuba",
    topicNumber: 1,
    article: {
      title: "Orkaan op weg naar Cuba",
      summary: "Storm Melissa is een orkaan. Hij gaat naar Cuba. Hij is heel sterk."
    },
    vocabulary: {
      words: [
        {
          word: "orkaan",
          definition: "een hele sterke storm met veel wind",
          sentence: "Er komt een ___ naar Cuba.",
          answer: "orkaan"
        },
        {
          word: "Cuba",
          definition: "een land in het Caribisch gebied",
          sentence: "De orkaan gaat naar ___.",
          answer: "Cuba"
        },
        {
          word: "Melissa",
          definition: "de naam van de orkaan",
          sentence: "De orkaan heet ___.",
          answer: "Melissa"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De orkaan heet ___.",
          answer: "Melissa"
        },
        {
          sentence: "De orkaan gaat naar ___.",
          answer: "Cuba"
        },
        {
          sentence: "Er komt een ___ naar Cuba.",
          answer: "orkaan"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is orkaan Melissa?",
        options: [
          "In Nederland",
          "Op de maan",
          "Op Jamaica",
          "In een boek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is er met veel huishoudens gebeurd?",
        options: [
          "Ze hebben een nieuwe orkaan",
          "Ze hebben geen stroom",
          "Ze zijn verhuisd",
          "Ze hebben veel gegeten"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe sterk is orkaan Melissa?",
        options: [
          "Categorie 1",
          "Categorie 2",
          "Categorie 3",
          "Categorie 5"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is op Cuba.",
        isTrue: false
      },
      {
        statement: "Orkaan Melissa is op Jamaica geweest.",
        isTrue: true
      },
      {
        statement: "Orkaan Melissa is van categorie 5.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Geweld in Al-Fasher",
    topicNumber: 1,
    article: {
      title: "Geweld in Al-Fasher",
      summary: "Er is veel geweld in Al-Fasher. Mensen worden gedood. Huizen branden af."
    },
    vocabulary: {
      words: [
        {
          word: "Geweld",
          definition: "iets met veel pijn en schade",
          sentence: "Er is veel ___ in de stad.",
          answer: "geweld"
        },
        {
          word: "Mensen",
          definition: "mannen, vrouwen en kinderen",
          sentence: "De ___ in de stad zijn bang.",
          answer: "mensen"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een feest in de stad",
          "Geweld en brand in de stad",
          "Een veilige plek om te spelen",
          "Een nieuwe school"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar zijn de huizen van?",
        options: [
          "Van ijs",
          "Van steen",
          "Van hout",
          "Van water"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is veilig?",
        options: [
          "De stad",
          "De school",
          "Het huis",
          "De boom"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De stad is veilig.",
        isTrue: false
      },
      {
        statement: "Er is veel geweld in de stad.",
        isTrue: true
      },
      {
        statement: "Huis is een plek om te wonen.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Jacques Vandekerckhove, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Jacques Vandekerckhove, 92 jaar",
      summary: "Hij is geboren in 1933. Hij is overleden op 26/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "en",
          definition: "verbindt twee woorden of zinnen",
          sentence: "Ik heb een pen ___ een boek.",
          answer: "en"
        },
        {
          word: "op",
          definition: "geeft een dag of datum aan",
          sentence: "Het feest is ___ zaterdag.",
          answer: "op"
        },
        {
          word: "op",
          definition: "geeft een dag of datum aan",
          sentence: "We zien elkaar ___ maandag.",
          answer: "op"
        },
        {
          word: "van",
          definition: "geeft herkomst of materiaal",
          sentence: "De tafel is gemaakt ___ hout.",
          answer: "van"
        },
        {
          word: "hij",
          definition: "verwijst naar een man",
          sentence: "___ is mijn broer.",
          answer: "hij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De tafel is gemaakt ___ hout.",
          answer: "van"
        },
        {
          sentence: "Ik heb een pen ___ een boek.",
          answer: "en"
        },
        {
          sentence: "We zien elkaar ___ maandag.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Jacques Vandekerckhove geboren?",
        options: [
          "In 1933",
          "In 1945",
          "In 1950",
          "In 1960"
        ],
        correctAnswer: 1
      },
      {
        question: "Wanneer is hij overleden?",
        options: [
          "Op 26/10/2025",
          "Op 27/10/2025",
          "Op 28/10/2025",
          "Op 29/10/2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Jacques Vandekerckhove toen hij overleed?",
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
        statement: "Jacques Vandekerckhove is geboren in 1933.",
        isTrue: true
      },
      {
        statement: "Hij is overleden op 25/10/2025.",
        isTrue: false
      },
      {
        statement: "Hij was 92 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Adoptie uit buitenland werd gepauzeerd, maar nu staan er toch weer 35 gezinnen in de wachtrij",
    topicNumber: 1,
    article: {
      title: "Adoptie uit buitenland werd gepauzeerd, maar nu staan er toch weer 35 gezinnen in de wachtrij",
      summary: "Veertig gezinnen in Vlaanderen zijn bezig met een traject voor buitenlandse adoptie, 35 andere werd beloofd dat ze er nog mogen instappen. En dat terwijl er al sinds eind 2023 een 'adoptiepauze' is afgekondigd. 'De boodschap is niet helder en dat is lastig', meent parlementslid Freya Perdaens (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "Vlaanderen",
          definition: "Een gebied in België waar ze Nederlands spreken",
          sentence: "___ is een deel van België.",
          answer: "Vlaanderen"
        },
        {
          word: "adoptie",
          definition: "Een kind krijgen dat niet van jezelf is",
          sentence: "___ is een manier om een kind te krijgen.",
          answer: "adoptie"
        },
        {
          word: "gepauzeerd",
          definition: "Even gestopt, tijdelijk niet actief",
          sentence: "Het feest was ___, maar gaat nu verder.",
          answer: "gepauzeerd"
        },
        {
          word: "wachtrij",
          definition: "Een rij of lijst van mensen die wachten",
          sentence: "Er is een lange ___ voor de attractie.",
          answer: "wachtrij"
        },
        {
          word: "parlementslid",
          definition: "Iemand die in het parlement zit en wetten maakt",
          sentence: "Een ___ praat over nieuwe wetten.",
          answer: "parlementslid"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een deel van België.",
          answer: "Vlaanderen"
        },
        {
          sentence: "Het feest was ___, maar gaat nu verder.",
          answer: "gepauzeerd"
        },
        {
          sentence: "Er is een lange ___ voor de attractie.",
          answer: "wachtrij"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'gepauzeerd' in deze tekst?",
        options: [
          "Gestopt",
          "Gepauzeerd",
          "Vergeten",
          "Verloren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van een parlementslid in deze tekst?",
        options: [
          "Kinderen adopteren",
          "Wetten maken",
          "In het parlement zitten",
          "Over adoptie praten"
        ],
        correctAnswer: 4
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een sportevenement",
          "Kinderen die adopteren",
          "Een nieuwe wet",
          "Vakantie in het buitenland"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Adoptiepauze betekent dat adoptie helemaal stopt.",
        isTrue: false
      },
      {
        statement: "Sommige gezinnen wachten op adoptie.",
        isTrue: true
      },
      {
        statement: "Alleen mensen in Vlaanderen kunnen adopteren.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
    topicNumber: 1,
    article: {
      title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
      summary: "Het Hof van Cassatie verwerpt het cassatieberoep dat advocaat Hans Rieder en zijn ex-echtgenote hadden ingesteld tegen hun veroordeling wegens belastingontduiking door domiciliefraude."
    },
    vocabulary: {
      words: [
        {
          word: "hof",
          definition: "een plaats waar rechters werken",
          sentence: "Het ___ besliste over de zaak.",
          answer: "hof"
        },
        {
          word: "ontduiking",
          definition: "niet betalen wat je moet betalen",
          sentence: "Hij pleegde ___ om minder te betalen.",
          answer: "ontduiking"
        },
        {
          word: "cassatie",
          definition: "een hoger beroep bij de hoogste rechter",
          sentence: "Hij vroeg om ___ bij de hoogste rechter.",
          answer: "cassatie"
        },
        {
          word: "echtgenote",
          definition: "de vrouw in een huwelijk",
          sentence: "Zijn ___ steunde hem niet.",
          answer: "echtgenote"
        },
        {
          word: "verwerpt",
          definition: "weigeren of niet accepteren",
          sentence: "De rechter ___ het verzoek van de man.",
          answer: "verwerpt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De rechter ___ het verzoek van de man.",
          answer: "verwerpt"
        },
        {
          sentence: "Het ___ besliste over de zaak.",
          answer: "hof"
        },
        {
          sentence: "Hij vroeg om ___ bij de hoogste rechter.",
          answer: "cassatie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is belasting?",
        options: [
          "Een soort bel",
          "Een type auto",
          "Geld dat je aan de overheid betaalt",
          "Een sport"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doet een advocaat?",
        options: [
          "Kookt eten",
          "Helpt mensen met de wet",
          "Bestuurt een auto",
          "Speelt piano"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het Hof van Cassatie?",
        options: [
          "Een soort hotel",
          "Een restaurant",
          "De hoogste rechter in België",
          "Een sportschool"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Hans Rieder is een advocaat.",
        isTrue: true
      },
      {
        statement: "Het Hof van Cassatie heeft de advocaat vrijgesproken.",
        isTrue: false
      },
      {
        statement: "De advocaat en zijn ex-echtgenote zijn veroordeeld.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
    topicNumber: 1,
    article: {
      title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
      summary: "Volg hier de laatste ontwikkelingen in Gaza."
    },
    vocabulary: {
      words: [
        {
          word: "Zeker",
          definition: "Met zekerheid, zonder twijfel.",
          sentence: "Er is ___ sprake van 26 doden na de luchtaanvallen.",
          answer: "Zeker"
        },
        {
          word: "doden",
          definition: "Personen die zijn overleden, slachtoffers.",
          sentence: "Er zijn 26 ___ geregistreerd na de aanval.",
          answer: "doden"
        },
        {
          word: "luchtaanvallen",
          definition: "Militaire aanvallen uitgevoerd vanuit de lucht, vaak met vliegtuigen of drones.",
          sentence: "De ___ veroorzaakten veel schade en slachtoffers.",
          answer: "luchtaanvallen"
        },
        {
          word: "Gaza",
          definition: "Een gebied aan de Middellandse Zee, onderdeel van de Palestijnse gebieden.",
          sentence: "De situatie in ___ is zeer gespannen.",
          answer: "Gaza"
        },
        {
          word: "ontwikkelingen",
          definition: "Veranderingen of vooruitgangen in een situatie.",
          sentence: "De laatste ___ wijzen op een escalatie van het conflict.",
          answer: "ontwikkelingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De laatste ___ wijzen op een escalatie van het conflict.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "Er zijn 26 ___ geregistreerd na de aanval.",
          answer: "doden"
        },
        {
          sentence: "De situatie in ___ is zeer gespannen.",
          answer: "Gaza"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt bedoeld met 'luchtaanvallen' in deze context?",
        options: [
          "Bombardementen uitgevoerd door vliegtuigen",
          "Een reeks onderhandelingen tussen landen",
          "Een soort sportevenement in de lucht",
          "Een type feestelijke vuurwerkshow"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de internationale gemeenschap volgens de tekst?",
        options: [
          "Ze roept op tot een wapenstilstand.",
          "Ze voert zelf de luchtaanvallen uit.",
          "Ze ontkent dat er slachtoffers zijn.",
          "Ze organiseert feestelijke activiteiten in Gaza."
        ],
        correctAnswer: 1
      },
      {
        question: "Waar verwijst 'Gaza' concreet naar?",
        options: [
          "Een stad in de Palestijnse gebieden.",
          "Een historische figuur uit de Griekse mythologie.",
          "Een type wapen gebruikt in de oorlog.",
          "Een vredesverdrag uit 2023."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De luchtaanvallen hebben geleid tot 26 doden, aldus de berichtgeving.",
        isTrue: true
      },
      {
        statement: "De tekst suggereert dat de situatie in Gaza zich aan het verbeteren is.",
        isTrue: false
      },
      {
        statement: "Internationale organisaties spelen een rol in de aanloop naar deze gebeurtenissen.",
        isTrue: true
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
      summary: "Storm Melissa is als een orkaan van categorie vijf aan land gekomen in Jamaica. Voor het Caraïbisch eiland is het de zwaarste storm ooit."
    },
    vocabulary: {
      words: [
        {
          word: "orkaan",
          definition: "een zeer zware storm met extreme windsnelheden",
          sentence: "De orkaan veroorzaakte enorme schade aan de kust.",
          answer: "orkaan"
        },
        {
          word: "categorie",
          definition: "een classificatie of indeling, vaak gebaseerd op bepaalde kenmerken",
          sentence: "De orkaan werd ingedeeld in de hoogste categorie vanwege de windsnelheid.",
          answer: "categorie"
        },
        {
          word: "eiland",
          definition: "een landoppervlak dat geheel door water omgeven is",
          sentence: "Jamaica is een eiland in de Caraïben.",
          answer: "eiland"
        },
        {
          word: "zwaarste",
          definition: "de meest intense of ernstige in zijn soort",
          sentence: "Dit was de zwaarste storm in de geschiedenis van het eiland.",
          answer: "zwaarste"
        },
        {
          word: "ooit",
          definition: "op enig moment in het verleden of de toekomst; ooit",
          sentence: "Hebben ze ooit zo'n zware storm meegemaakt?",
          answer: "ooit"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hebben ze ooit zo'n zware storm meegemaakt?",
          answer: "ooit"
        },
        {
          sentence: "De orkaan werd ingedeeld in de hoogste categorie vanwege de windsnelheid.",
          answer: "categorie"
        },
        {
          sentence: "Dit was de zwaarste storm in de geschiedenis van het eiland.",
          answer: "zwaarste"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het dat een orkaan van categorie vijf is?",
        options: [
          "Zeer lichte storm",
          "Storm met gemiddelde windsnelheid",
          "Extreem zware storm met vernietigende kracht",
          "Storm die alleen op zee voorkomt"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de impact van orkaan Melissa op Jamaica?",
        options: [
          "Geen impact, de storm is nog niet gearriveerd",
          "Alleen lichte regenval, geen echte schade",
          "Massale stroomuitval: 530.000 huishoudens zonder elektriciteit",
          "De orkaan veroorzaakt alleen wind, geen andere problemen"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe verhoudt orkaan Melissa zich tot eerdere stormen op Jamaica?",
        options: [
          "Het is de lichtste storm ooit geregistreerd",
          "Minder ernstig dan voorgaande orkanen, maar meer regen",
          "De zwaarste storm in de recente geschiedenis van het eiland",
          "Vergelijkbaar met andere orkanen, geen uitschieters"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is geclassificeerd als categorie vijf, wat de hoogst mogelijke is.",
        isTrue: true
      },
      {
        statement: "Jamaica heeft nooit eerder een orkaan meegemaakt, dit is een primeur.",
        isTrue: false
      },
      {
        statement: "Naast Jamaica, wordt ook Cuba bedreigd door orkaan Melissa.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Inwoners Al-Fasher worden uitgemoord: in Noord-Soedan ontrolt zich het ergste scenario",
    topicNumber: 1,
    article: {
      title: "Inwoners Al-Fasher worden uitgemoord: in Noord-Soedan ontrolt zich het ergste scenario",
      summary: "Uit getuigenissen, video’s en satellietbeelden blijkt dat rebellen bij de verovering van de Soedanese stad Al-Fasher volledige wijken platbranden en de inwoners uitmoorden. Burgers die proberen te vluchten, worden doodgeschoten of aan bomen opgehangen."
    },
    vocabulary: {
      words: [
        {
          word: "burgers",
          definition: "gewone inwoners van een stad of land, niet de militairen",
          sentence: "De ___ proberen te vluchten, maar worden vaak tegengehouden.",
          answer: "burgers"
        },
        {
          word: "getuigenissen",
          definition: "mondelinge of schriftelijke verklaringen van wat iemand heeft meegemaakt",
          sentence: "De ___ van overlevenden beschrijven gruwelijke taferelen.",
          answer: "getuigenissen"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is de rol van satellietbeelden volgens de tekst?",
        options: [
          "Ze tonen de vernietiging in realtime.",
          "Ze worden gebruikt om het weer te voorspellen.",
          "Ze zijn alleen nuttig voor landbouw.",
          "Ze bewijzen de misdaden die plaatsvinden."
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe reageren de burgers op de situatie in Al-Fasher?",
        options: [
          "Ze blijven thuis en wachten af.",
          "Ze proberen te vluchten voor het geweld.",
          "Ze vechten terug tegen de rebellen.",
          "Ze nemen deel aan de vernietiging."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de rebellen ten opzichte van internationale normen?",
        options: [
          "Ze respecteren deze volledig.",
          "Ze negeren deze volledig en handelen in tegendeel.",
          "Ze zijn onbekend met deze normen.",
          "Ze gebruiken deze normen om hun voordeel te behalen."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De getuigenissen en video's tonen aan dat de rebellen de stad Al-Fasher volledig hebben vernietigd.",
        isTrue: true
      },
      {
        statement: "Internationale gemeenschappen hebben effectief ingegrepen en een staakt-het-vuren bewerkstelligd.",
        isTrue: false
      },
      {
        statement: "De burgers die vluchten, worden zonder uitzondering geëxecuteerd of opgehangen aan bomen.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Jacques Vandekerckhove, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Jacques Vandekerckhove, 92 jaar",
      summary: "Geboren in 1933, overleden op 26/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Jacques",
          definition: "Voornaam van de persoon in de titel.",
          sentence: "___ Vandekerckhove was 92 jaar oud.",
          answer: "Jacques"
        },
        {
          word: "1933",
          definition: "Het jaar waarin hij geboren is.",
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1933"
        },
        {
          word: "geboren",
          definition: "Geboren zijn, het begin van het leven.",
          sentence: "Hij werd ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Overleden zijn, niet meer leven.",
          sentence: "Hij is ___ op 26/10/2025.",
          answer: "overleden"
        },
        {
          word: "92",
          definition: "Getal dat de leeftijd weergeeft.",
          sentence: "Hij was ___ jaar oud.",
          answer: "92"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1933"
        },
        {
          sentence: "___ Vandekerckhove was 92 jaar oud.",
          answer: "Jacques"
        },
        {
          sentence: "Hij is ___ op 26/10/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de geboortedatum van Jacques Vandekerckhove?",
        options: [
          "26/10/2025",
          "1933",
          "26/10/1933",
          "1930"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Jacques Vandekerckhove toen hij overleed?",
        options: [
          "92 jaar",
          "93 jaar",
          "91 jaar",
          "94 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de achternaam van Jacques?",
        options: [
          "Vandekerckhove",
          "Vandekerckhoven",
          "Vandekerkhove",
          "Vandekerkhove"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Jacques Vandekerckhove werd geboren in 1933.",
        isTrue: true
      },
      {
        statement: "Hij overleed op 26/10/2024.",
        isTrue: false
      },
      {
        statement: "Hij was 92 jaar oud op het moment van overlijden.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Adoptie uit buitenland werd ‘gepauzeerd’, maar nu staan er toch weer 35 gezinnen in de wachtrij",
    topicNumber: 1,
    article: {
      title: "Adoptie uit buitenland werd ‘gepauzeerd’, maar nu staan er toch weer 35 gezinnen in de wachtrij",
      summary: "Veertig gezinnen in Vlaanderen zijn bezig met een traject voor buitenlandse adoptie, 35 andere werd beloofd dat ze er nog mogen instappen. En dat terwijl er al sinds eind 2023 een ‘adoptiepauze’ is afgekondigd. “De boodschap is niet helder en dat is lastig”, meent parlementslid Freya Perdaens (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "Vlaanderen",
          definition: "Een deel van België, specifiek de Vlaamse Gemeenschap",
          sentence: "___ is bekend om zijn historische steden.",
          answer: "Vlaanderen"
        },
        {
          word: "adoptiepauze",
          definition: "Een tijdelijke stop of onderbreking van adoptieprocessen",
          sentence: "De ___ gaf ruimte voor beleidsevaluatie.",
          answer: "adoptiepauze"
        },
        {
          word: "buitenland",
          definition: "Andere landen; landen die niet het eigen land zijn",
          sentence: "Zij reisden naar het ___ voor hun vakantie.",
          answer: "buitenland"
        },
        {
          word: "traject",
          definition: "Het verloop of de reeks van stappen in een proces",
          sentence: "Het ___ naar herstel was langzaam maar effectief.",
          answer: "traject"
        },
        {
          word: "wachtrij",
          definition: "Een rij of lijst van mensen of zaken die wachten op iets, zoals een behandeling of dienst",
          sentence: "De lange ___ voor de attractie was frustrerend.",
          answer: "wachtrij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is bekend om zijn historische steden.",
          answer: "Vlaanderen"
        },
        {
          sentence: "De ___ gaf ruimte voor beleidsevaluatie.",
          answer: "adoptiepauze"
        },
        {
          sentence: "Het ___ naar herstel was langzaam maar effectief.",
          answer: "traject"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'adoptiepauze' in deze context?",
        options: [
          "Een permanente stop",
          "Een tijdelijke onderbreking van adoptieprocessen",
          "Een versnelling van adoptieprocedures",
          "Een feestelijke gebeurtenis"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemt parlementslid Perdaens de boodschap 'niet helder'?",
        options: [
          "Omdat er te veel informatie is",
          "Omdat de communicatie onduidelijk en verwarrend is",
          "Omdat de boodschap in een vreemde taal is gesteld",
          "Omdat de boodschap alleen voor bepaalde groepen is bedoeld"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdgedachte van dit artikel?",
        options: [
          "Adoptie is volledig stopgezet",
          "Adoptie uit het buitenland is hervat ondanks eerdere pauze",
          "Vlaanderen stopt alle adoptie",
          "Adoptie is alleen voor grote gezinnen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De adoptiepauze in Vlaanderen is permanent van kracht.",
        isTrue: false
      },
      {
        statement: "Er staan momenteel gezinnen op een wachtlijst voor adoptie.",
        isTrue: true
      },
      {
        statement: "Parlementslid Perdaens vindt de communicatie over adoptie zeer duidelijk.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
    topicNumber: 1,
    article: {
      title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
      summary: "Het Hof van Cassatie verwerpt het cassatieberoep dat advocaat Hans Rieder en zijn ex-echtgenote hadden ingesteld tegen hun veroordeling wegens belastingontduiking door domiciliefraude."
    },
    vocabulary: {
      words: [
        {
          word: "definitief",
          definition: "Iets dat eindelijk is beslist en niet meer verandert.",
          sentence: "De uitspraak van de rechter is ___, er is geen beroep meer mogelijk.",
          answer: "definitief"
        },
        {
          word: "verwerpt",
          definition: "Niet accepteren of goedkeuren; afwijzen.",
          sentence: "De rechter ___ het beroep omdat het ongegrond was.",
          answer: "verwerpt"
        },
        {
          word: "domiciliefraude",
          definition: "Het frauduleus aangeven van een onjuist adres met als doel belasting te ontduiken.",
          sentence: "Het echtpaar werd schuldig bevonden aan ___.",
          answer: "domiciliefraude"
        },
        {
          word: "cassatieberoep",
          definition: "Een verzoek aan een hogere rechter om een eerdere uitspraak te herzien.",
          sentence: "Het Hof stelt de uitspraak van de lagere rechter niet ___.",
          answer: "cassatieberoep"
        },
        {
          word: "advocaat",
          definition: "Een persoon die is opgeleid om juridische bijstand te verlenen.",
          sentence: "De ___ verdedigde zijn cliënt met overtuiging.",
          answer: "advocaat"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het echtpaar werd schuldig bevonden aan ___.",
          answer: "domiciliefraude"
        },
        {
          sentence: "De rechter ___ het beroep omdat het ongegrond was.",
          answer: "verwerpt"
        },
        {
          sentence: "Het Hof stelt de uitspraak van de lagere rechter niet ___.",
          answer: "cassatieberoep"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'domiciliefraude' in deze context?",
        options: [
          "Het frauduleus veranderen van het woonadres",
          "Het legaal optimaliseren van belastingen",
          "Het onbedoeld foutief aangeven van een adres",
          "Het verbergen van belastingdocumenten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van het Hof van Cassatie in deze zaak?",
        options: [
          "Het heeft de zaak heropend",
          "Het heeft het beroep van de verdachten goedgekeurd",
          "Het heeft het beroep van de verdachten afgewezen",
          "Het heeft de zaak geseponeerd"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het gevolg van de uitspraak voor Hans Rieder?",
        options: [
          "Hij wordt vrijgesproken van alle charges",
          "Hij moet een boete betalen maar komt niet in de cel",
          "Hij ontvangt een schadevergoeding van de staat",
          "Zijn straf is definitief en moet worden uitgezeten"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Hans Rieder werd veroordeeld voor het niet declareren van belasting, maar dit werd later herroepen.",
        isTrue: false
      },
      {
        statement: "Het Hof van Cassatie heeft het cassatieberoep van Hans Rieder en zijn ex-echtgenote afgewezen.",
        isTrue: true
      },
      {
        statement: "Domiciliefraude is een vorm van belastingontduiking waarbij men zich inschrijft op een onjuist adres.",
        isIsTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
    topicNumber: 1,
    article: {
      title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
      summary: "Volg hier de laatste ontwikkelingen in Gaza."
    },
    vocabulary: {
      words: [
        {
          word: "op",
          definition: "op iets, op een plaats of tijdstip",
          sentence: "Hij is ___ school.",
          answer: "op"
        },
        {
          word: "Gaza",
          definition: "een plaats in het Midden-Oosten",
          sentence: "___ is een stad met veel problemen.",
          answer: "Gaza"
        },
        {
          word: "doden",
          definition: "mensen die gestorven zijn",
          sentence: "Er vielen veel ___ in het conflict.",
          answer: "doden"
        },
        {
          word: "na",
          definition: "na iets, na een tijd of gebeurtenis",
          sentence: "We gaan eten ___ het werk.",
          answer: "na"
        },
        {
          word: "nieuwe",
          definition: "vers, nieuw, recent",
          sentence: "Hij kocht een ___ auto.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ school.",
          answer: "op"
        },
        {
          sentence: "___ is een stad met veel problemen.",
          answer: "Gaza"
        },
        {
          sentence: "Hij kocht een ___ auto.",
          answer: "nieuwe"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'doden' in deze context?",
        options: [
          "mensen die gestorven zijn",
          "een soort dier",
          "een soort voedsel",
          "een soort gebouw"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar verwijst 'Gaza' naar?",
        options: [
          "een stad in Palestina",
          "een dier",
          "een soort muziek",
          "een beroemde persoon"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'luchtaanvallen'?",
        options: [
          "aanvallen die vanuit de lucht worden uitgevoerd",
          "een soort feest",
          "een soort sport",
          "een soort voertuig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Er vielen 26 doden na de luchtaanvallen.",
        isTrue: true
      },
      {
        statement: "Gaza is een stad in Nederland.",
        isTrue: false
      },
      {
        statement: "Luchtaanvallen gebeuren vanuit vliegtuigen.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
      summary: "Storm Melissa is als een orkaan van categorie vijf aan land gekomen in Jamaica. Voor het Caraïbisch eiland is het de zwaarste storm ooit."
    },
    vocabulary: {
      words: [
        {
          word: "Caraïbisch",
          definition: "van of over het Caribisch gebied, een gebied met veel eilanden",
          sentence: "Jamaica is een land in het Caraïbisch gebied.",
          answer: "Caraïbisch"
        },
        {
          word: "orkaan",
          definition: "een hele zware storm met veel wind",
          sentence: "De orkaan veroorzaakte veel schade.",
          answer: "orkaan"
        },
        {
          word: "categorie",
          definition: "een soort groep of type",
          sentence: "De orkaan was van categorie vijf, de hoogste.",
          answer: "categorie"
        },
        {
          word: "storm",
          definition: "heel slecht weer met veel wind en regen",
          sentence: "De storm blies bomen omver.",
          answer: "storm"
        },
        {
          word: "zonder",
          definition: "niet met, niet in bezit van",
          sentence: "Veel huizen zijn zonder stroom na de storm.",
          answer: "zonder"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Jamaica is een land in het Caraïbisch gebied.",
          answer: "Caraïbisch"
        },
        {
          sentence: "Veel huizen zijn zonder stroom na de storm.",
          answer: "zonder"
        },
        {
          sentence: "De orkaan was van categorie vijf, de hoogste.",
          answer: "categorie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een orkaan?",
        options: [
          "Een soort dier",
          "Een soort feest",
          "Een hele zware storm",
          "Een soort auto"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'zonder stroom'?",
        options: [
          "Er is geen elektriciteit",
          "Er is veel wind",
          "Er is veel water",
          "Er is geen probleem"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar is Jamaica?",
        options: [
          "In Azië",
          "In Europa",
          "In het Caribisch gebied",
          "In de woestijn"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is een lichte storm.",
        isTrue: false
      },
      {
        statement: "Jamaica is een eiland in de Caribische Zee.",
        isTrue: true
      },
      {
        statement: "Er zijn geen problemen met elektriciteit na de storm.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Geweld in Al-Fasher, Soedan",
    topicNumber: 1,
    article: {
      title: "Geweld in Al-Fasher, Soedan",
      summary: "In Al-Fasher, Soedan is veel geweld. Rebellen vernielen huizen en doden mensen. Mensen die vluchten worden ook gedood. Dit is erg en moet stoppen."
    },
    vocabulary: {
      words: [
        {
          word: "geweld",
          definition: "iets met veel kracht of pijn doen",
          sentence: "___ maakt alles kapot en pijnlijk.",
          answer: "geweld"
        },
        {
          word: "rebellen",
          definition: "mensen die tegen een groep vechten",
          sentence: "De ___ zijn degenen die aanvallen in Soedan.",
          answer: "rebellen"
        },
        {
          word: "huizen",
          definition: "plaatsen waar mensen wonen",
          sentence: "Hun ___ waren kapot na het gevecht.",
          answer: "huizen"
        },
        {
          word: "vluchten",
          definition: "weggaan van een gevaarlijke plek",
          sentence: "Mensen willen ___ uit de stad tijdens de oorlog.",
          answer: "vluchten"
        },
        {
          word: "mensen",
          definition: "alle personen, mannen, vrouwen en kinderen",
          sentence: "Alle ___ moeten veilig zijn, ook in Soedan.",
          answer: "mensen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Mensen willen ___ uit de stad tijdens de oorlog.",
          answer: "vluchten"
        },
        {
          sentence: "Hun ___ waren kapot na het gevecht.",
          answer: "huizen"
        },
        {
          sentence: "De ___ zijn degenen die aanvallen in Soedan.",
          answer: "rebellen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een feest in Soedan",
          "Een sportwedstrijd",
          "Een oorlog in Soedan",
          "Een nieuwe school"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doen de rebellen?",
        options: [
          "Ze helpen mensen",
          "Ze maken muziek",
          "Ze vernielen huizen en doden mensen",
          "Ze bouwen nieuwe huizen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurt er met mensen die vluchten?",
        options: [
          "Ze worden geholpen",
          "Ze worden gedood",
          "Ze gaan dansen",
          "Ze krijgen nieuwe kleren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De stad Al-Fasher is in Soedan.",
        isTrue: true
      },
      {
        statement: "Rebellen helpen alle mensen in Soedan.",
        isTrue: false
      },
      {
        statement: "Veel mensen sterven in deze oorlog.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Jacques Vandekerckhove, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Jacques Vandekerckhove, 92 jaar",
      summary: "Hij is geboren in 1933 en overleden op 26/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van iemands leven; geboren worden",
          sentence: "Hij is ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer leven; gestorven zijn",
          sentence: "Hij is ___ op 26/10/2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen; 12 maanden",
          sentence: "Hij is 92 ___ oud.",
          answer: "jaar"
        },
        {
          word: "hij",
          definition: "een mannelijk persoon; die persoon",
          sentence: "___ is de man in dit verhaal.",
          answer: "hij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 26/10/2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is ___ in 1933.",
          answer: "geboren"
        },
        {
          sentence: "Hij is 92 ___ oud.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van Jacques?",
        options: [
          "1933",
          "1923",
          "1943",
          "1953"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Jacques op het moment van overlijden?",
        options: [
          "92 jaar",
          "93 jaar",
          "94 jaar",
          "95 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "In welke maand overleed Jacques?",
        options: [
          "Januari",
          "Februari",
          "Oktober",
          "December"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Jacques overleed in het jaar 2025.",
        isTrue: true
      },
      {
        statement: "Jacques was 91 jaar oud toen hij overleed.",
        isTrue: false
      },
      {
        statement: "Jacques werd geboren in de 20e eeuw.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Adoptie uit buitenland werd 'gepauzeerd', maar nu staan er toch weer 35 gezinnen in de wachtrij",
    topicNumber: 1,
    article: {
      title: "Adoptie uit buitenland werd 'gepauzeerd', maar nu staan er toch weer 35 gezinnen in de wachtrij",
      summary: "Veertig gezinnen in Vlaanderen zijn bezig met een traject voor buitenlandse adoptie, 35 andere werd beloofd dat ze er nog mogen instappen. En dat terwijl er al sinds eind 2023 een 'adoptiepauze' is afgekondigd. 'De boodschap is niet helder en dat is lastig', meent parlementslid Freya Perdaens (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "buitenland",
          definition: "andere landen, niet het eigen land",
          sentence: "Sommige kinderen komen uit het ___.",
          answer: "buitenland"
        },
        {
          word: "pauze",
          definition: "een korte stop of onderbreking",
          sentence: "De adoptie werd even ___ gezet.",
          answer: "pauze"
        },
        {
          word: "parlementslid",
          definition: "een persoon die in het parlement werkt, de volksvertegenwoordiger",
          sentence: "Een ___ geeft commentaar op de situatie.",
          answer: "parlementslid"
        },
        {
          word: "boodschap",
          definition: "een bericht of mededeling",
          sentence: "De ___ van de overheid was niet duidelijk.",
          answer: "boodschap"
        },
        {
          word: "wachtrij",
          definition: "een lijst of rij van mensen die wachten",
          sentence: "Er staan veel mensen in de ___ voor adoptie.",
          answer: "wachtrij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van de overheid was niet duidelijk.",
          answer: "boodschap"
        },
        {
          sentence: "Sommige kinderen komen uit het ___.",
          answer: "buitenland"
        },
        {
          sentence: "Er staan veel mensen in de ___ voor adoptie.",
          answer: "wachtrij"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging de adoptiepauze over?",
        options: [
          "Het tijdelijk stoppen van adoptie uit het buitenland",
          "Het versnellen van adoptieprocedures",
          "Het helpen van gezinnen in de wachtrij",
          "Het annuleren van alle adoptieverzoeken"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van een parlementslid in deze context?",
        options: [
          "Het maken van nieuwe wetten",
          "Het geven van commentaar op situaties",
          "Het leiden van adoptieprocedures",
          "Het ondersteunen van adoptiegezinnen financieel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'wachtrij' in deze tekst?",
        options: [
          "Een soort van attractie in een pretpark",
          "Een lange rij mensen die wachten",
          "Een speciale rij voor adoptiegezinnen",
          "Een tijdelijke stop van processen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Adoptie uit het buitenland is helemaal gestopt in Vlaanderen.",
        isTrue: false
      },
      {
        statement: "Een parlementslid geeft commentaar op de adoptiepauze.",
        isTrue: true
      },
      {
        statement: "Er zijn nu meer dan 100 gezinnen in de wachtrij voor adoptie.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
    topicNumber: 1,
    article: {
      title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
      summary: "Het Hof van Cassatie verwerpt het cassatieberoep dat advocaat Hans Rieder en zijn ex-echtgenote hadden ingesteld tegen hun veroordeling wegens belastingontduiking door domiciliefraude."
    },
    vocabulary: {
      words: [
        {
          word: "belasting",
          definition: "geld dat je moet betalen aan de overheid",
          sentence: "Mensen moeten ___ betalen als ze geld verdienen.",
          answer: "belasting"
        },
        {
          word: "ontduiking",
          definition: "niet betalen wat je moet betalen",
          sentence: "Hij deed aan ___ om geld te besparen.",
          answer: "ontduiking"
        },
        {
          word: "echtgenote",
          definition: "de vrouw in een huwelijk",
          sentence: "Zijn ex-___ helpt hem niet meer.",
          answer: "echtgenote"
        },
        {
          word: "veroordeling",
          definition: "een uitspraak van de rechter dat iemand schuldig is",
          sentence: "De rechter gaf een ___ voor zijn daden.",
          answer: "veroordeling"
        },
        {
          word: "cassatie",
          definition: "een procedure om een vonnis aan te vechten bij de hoogste rechter",
          sentence: "Zijn advocaad diende een ___ in.",
          answer: "cassatie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De rechter gaf een ___ voor zijn daden.",
          answer: "veroordeling"
        },
        {
          sentence: "Hij deed aan ___ om geld te besparen.",
          answer: "ontduiking"
        },
        {
          sentence: "Zijn ex-___ helpt hem niet meer.",
          answer: "echtgenote"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is belastingontduiking?",
        options: [
          "Een sport",
          "Een manier om belasting te vermijden",
          "Een soort belasting",
          "Een type feest"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet het Hof van Cassatie?",
        options: [
          "Bakt brood",
          "Ziet er mooi uit",
          "Beslist over juridische zaken",
          "Doet niets"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een domicilie?",
        options: [
          "Een soort vis",
          "Een adres waar iemand officieel woont",
          "Een sportteam",
          "Een type auto"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Hans Rieder is een advocaat.",
        isTrue: true
      },
      {
        statement: "Het Hof van Cassatie heeft de zaak goedgekeurd.",
        isTrue: false
      },
      {
        statement: "Hans Rieder en zijn ex-echtgenote werden veroordeeld.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
    topicNumber: 1,
    article: {
      title: "Zeker 26 doden na nieuwe luchtaanvallen op Gaza",
      summary: "Volg hier de laatste ontwikkelingen in Gaza."
    },
    vocabulary: {
      words: [
        {
          word: "luchtaanvallen",
          definition: "Luchtaanvallen zijn aanvallen vanuit de lucht, vaak met vliegtuigen.",
          sentence: "De ___ veroorzaakten veel schade.",
          answer: "luchtaanvallen"
        },
        {
          word: "ontwikkelingen",
          definition: "Ontwikkelingen zijn veranderingen of nieuwe gebeurtenissen.",
          sentence: "De ___ in de technologie gaan snel.",
          answer: "ontwikkelingen"
        },
        {
          word: "Zeker",
          definition: "Zeker betekent zonder twijfel, vast.",
          sentence: "Het is ___ dat de vergadering doorgaat.",
          answer: "zeker"
        },
        {
          word: "Volg",
          definition: "Volg betekent hier in de gaten houden of bijhouden.",
          sentence: "___ je het nieuws over de ontwikkelingen?",
          answer: "Volg"
        },
        {
          word: "Gaza",
          definition: "Gaza is een gebied in het Midden-Oosten, bekend om conflicten.",
          sentence: "___ wordt vaak genoemd in het nieuws.",
          answer: "Gaza"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ wordt vaak genoemd in het nieuws.",
          answer: "Gaza"
        },
        {
          sentence: "De ___ veroorzaakten veel schade.",
          answer: "luchtaanvallen"
        },
        {
          sentence: "Het is ___ dat de vergadering doorgaat.",
          answer: "zeker"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'luchtaanvallen' in deze context?",
        options: [
          "Aanvallen vanuit de lucht",
          "Vluchten die worden aangevallen",
          "Een soort game",
          "Een feestelijke gebeurtenis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wordt er bedoeld met 'Volg hier de laatste ontwikkelingen'?",
        options: [
          "Volg hier de nieuwste updates",
          "Volg hier de oude gebeurtenissen",
          "Negeer de gebeurtenissen",
          "Lees alleen de titel"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar verwijst 'Gaza' naar in deze tekst?",
        options: [
          "Een stad in conflict",
          "Een feestlocatie",
          "Een nieuwe technologie",
          "Een soort voedsel"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De luchtaanvallen vonden plaats in Gaza.",
        isTrue: true
      },
      {
        statement: "Er zijn geen doden gemeld na deze aanvallen.",
        isTrue: false
      },
      {
        statement: "De ontwikkelingen in Gaza zijn positief.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
    topicNumber: 1,
    article: {
      title: "Orkaan Melissa op weg naar Cuba, ruim 530.000 huishoudens op Jamaica zonder stroom",
      summary: "Storm Melissa is als een orkaan van categorie vijf aan land gekomen in Jamaica. Voor het Caraïbisch eiland is het de zwaarste storm ooit."
    },
    vocabulary: {
      words: [
        {
          word: "gekomen",
          definition: "aangekomen, hier zijn",
          sentence: "Hij is gisteren aangekomen in de stad.",
          answer: "gekomen"
        },
        {
          word: "orkaan",
          definition: "een hele zware storm met heel veel wind",
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        },
        {
          word: "categorie",
          definition: "een groep of soort waar iets in past",
          sentence: "Deze storm is van categorie vijf, dat is de hoogste.",
          answer: "categorie"
        },
        {
          word: "aan",
          definition: "op, tegen, in de richting van",
          sentence: "Hij hing de foto aan de muur.",
          answer: "aan"
        },
        {
          word: "zwaarste",
          definition: "het meeste gewicht hebbend, het sterkst",
          sentence: "Dit was de zwaarste storm van het jaar.",
          answer: "zwaarste"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij hing de foto aan de muur.",
          answer: "aan"
        },
        {
          sentence: "Dit was de zwaarste storm van het jaar.",
          answer: "zwaarste"
        },
        {
          sentence: "Een orkaan kan veel schade veroorzaken.",
          answer: "orkaan"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het dat een storm van categorie vijf is?",
        options: [
          "Het is de allerzwaarste storm.",
          "Het is een middelmatige storm.",
          "Het is een storm met weinig wind.",
          "Het is een storm die bijna voorbij is."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is er gebeurd met Jamaica na de orkaan?",
        options: [
          "Het eiland is verwoest en 530.000 huishoudens hebben geen stroom.",
          "Jamaica is ongeschonden uit de storm gekomen.",
          "De storm heeft alleen de kust geraakt.",
          "Jamaica heeft de storm volledig vermeden."
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe wordt orkaan Melissa beschreven?",
        options: [
          "Als de zwaarste storm ooit voor het eiland.",
          "Als een lichte bries die niets doet.",
          "Als een storm die alleen op zee blijft.",
          "Als een storm die al is overgewaaid."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Orkaan Melissa is de zwaarste storm ooit voor Jamaica.",
        isTrue: true
      },
      {
        statement: "Jamaica heeft geen last gehad van de orkaan.",
        isTrue: false
      },
      {
        statement: "Orkaan Melissa is van categorie vijf, de hoogste categorie.",
        isTrue: true
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
    title: "Jacques Vandekerckhove, 92 jaar",
    topicNumber: 1,
    article: {
      title: "Jacques Vandekerckhove, 92 jaar",
      summary: "Geboren in 1933, overleden op 26/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Geboren zijn betekent dat je op een bepaalde datum ter wereld bent gekomen.",
          sentence: "Hij werd ___ in 1933.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "Overleden zijn betekent dat iemand niet meer leeft.",
          sentence: "Hij is ___ op 26 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat was de geboortedatum van Jacques Vandekerckhove?",
        options: [
          "26 oktober 1933",
          "1 januari 1933",
          "26 oktober 1923",
          "15 mei 1933"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Jacques Vandekerckhove toen hij overleed?",
        options: [
          "92 jaar",
          "93 jaar",
          "91 jaar",
          "89 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar woonde Jacques Vandekerckhove het grootste deel van zijn leven?",
        options: [
          "In België",
          "In Nederland",
          "In Frankrijk",
          "In Duitsland"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Jacques Vandekerckhove overleed op 26 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Jacques Vandekerckhove was 93 jaar oud bij zijn overlijden.",
        isTrue: false
      },
      {
        statement: "Jacques Vandekerckhove werd geboren in 1933.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Adoptie uit buitenland werd gepauzeerd, maar nu staan er toch weer 35 gezinnen in de wachtrij",
    topicNumber: 1,
    article: {
      title: "Adoptie uit buitenland werd gepauzeerd, maar nu staan er toch weer 35 gezinnen in de wachtrij",
      summary: "Veertig gezinnen in Vlaanderen zijn bezig met een traject voor buitenlandse adoptie, 35 andere werd beloofd dat ze er nog mogen instappen. En dat terwijl er al sinds eind 2023 een adoptiepauze is afgekondigd. De boodschap is niet helder en dat is lastig, meent parlementslid Freya Perdaens (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "adoptie",
          definition: "Het proces waarbij iemand een kind dat niet biologisch van hen is, wettelijk als hun eigen kind aanneemt",
          sentence: "Adoptie uit het buitenland kan een lang proces zijn.",
          answer: "adoptie"
        },
        {
          word: "buitenland",
          definition: "Andere landen; landen die niet het eigen land zijn",
          sentence: "Reizen naar het buitenland vereist vaak een paspoort.",
          answer: "buitenland"
        },
        {
          word: "lastig",
          definition: "Moeilijk, vervelend, of ongemakkelijk om mee om te gaan",
          sentence: "Het vinden van een oplossing was lastig voor het team.",
          answer: "lastig"
        },
        {
          word: "wachtrij",
          definition: "Een lijst of reeks van mensen of dingen die wachten op iets, vaak in een bepaalde volgorde",
          sentence: "Er was een lange wachtrij voor de attractie.",
          answer: "wachtrij"
        },
        {
          word: "gezin",
          definition: "Een groep mensen die samenwonen, meestal ouders en hun kinderen",
          sentence: "Een groot gezin heeft veel ruimte nodig.",
          answer: "gezin"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het vinden van een oplossing was lastig voor het team.",
          answer: "lastig"
        },
        {
          sentence: "Er was een lange wachtrij voor de attractie.",
          answer: "wachtrij"
        },
        {
          sentence: "Een groot gezin heeft veel ruimte nodig.",
          answer: "gezin"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent de adoptiepauze voor de gezinnen in Vlaanderen?",
        options: [
          "Ze kunnen helemaal geen adoptie meer aanvragen.",
          "Ze kunnen doorgaan met hun huidige trajecten.",
          "Alleen nieuwe aanvragen worden gepauzeerd.",
          "De pauze is alleen voor adoptie uit specifieke landen."
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is de situatie volgens het artikel lastig?",
        options: [
          "Omdat er te veel gezinnen willen adopteren.",
          "Omdat de adoptiepauze niet voor iedereen duidelijk is.",
          "Omdat adoptie uit het buitenland te duur is.",
          "Omdat de regering niet genoeg ondersteunt."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van parlementslid Freya Perdaens in dit artikel?",
        options: [
          "Zij heeft de adoptiepauze ingesteld.",
          "Zij geeft commentaar op de situatie.",
          "Zij beheert de wachtrij voor adoptie.",
          "Zij is een van de wachtende ouders."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De adoptiepauze betekent dat alle adoptieactiviteiten in Vlaanderen zijn gestopt.",
        isTrue: false
      },
      {
        statement: "Sommige gezinnen mogen nog steeds beginnen met hun adoptietraject.",
        isTrue: true
      },
      {
        statement: "Parlementslid Freya Perdaens heeft de adoptiepauze ingesteld.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
    topicNumber: 1,
    article: {
      title: "Veroordeling advocaat Hans Rieder wegens belastingontduiking nu definitief",
      summary: "Het Hof van Cassatie verwerpt het cassatieberoep dat advocaat Hans Rieder en zijn ex-echtgenote hadden ingesteld tegen hun veroordeling wegens belastingontduiking door domiciliefraude."
    },
    vocabulary: {
      words: [
        {
          word: "domiciliefraude",
          definition: "Een vorm van fraude waarbij iemand zijn officiële woonplaats (domicilie) verkeerd voorstelt om belasting te ontduiken.",
          sentence: "Ze pleegden ___ door zich in te schrijven op een adres waar ze niet woonden.",
          answer: "domiciliefraude"
        },
        {
          word: "echtgenote",
          definition: "De vrouwelijke partner in een huwelijk; de echtgenote.",
          sentence: "Zijn ex-___ was ook bij de rechtszaak betrokken.",
          answer: "echtgenote"
        },
        {
          word: "cassatie",
          definition: "Het verzoek aan een hogere rechter om een eerdere uitspraak te herzien.",
          sentence: "Het Hof stelde de ___ in, zodat de zaak opnieuw kon worden bekeken.",
          answer: "cassatie"
        },
        {
          word: "belastingontduiking",
          definition: "Het opzettelijk niet betalen van belastingen die je wettelijk moet betalen.",
          sentence: "Hij werd verdacht van ___ omdat hij zijn inkomsten niet had aangegeven.",
          answer: "belastingontduiking"
        },
        {
          word: "veroordeling",
          definition: "De uitspraak van een rechter waarbij iemand schuldig wordt bevonden.",
          sentence: "De ___ betekende dat hij de gevangenis in moest.",
          answer: "veroordeling"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het Hof stelde de ___ in, zodat de zaak opnieuw kon worden bekeken.",
          answer: "cassatie"
        },
        {
          sentence: "Ze pleegden ___ door zich in te schrijven op een adres waar ze niet woonden.",
          answer: "domiciliefraude"
        },
        {
          sentence: "De ___ betekende dat hij de gevangenis in moest.",
          answer: "veroordeling"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van het Hof van Cassatie in deze zaak?",
        options: [
          "Het beslist of de zaak opnieuw behandeld wordt.",
          "Het bevestigt de uitspraak van de lagere rechtbank.",
          "Het straft de verdachten met een boete.",
          "Het treedt niet op in deze zaak."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat houdt domiciliefraude in?",
        options: [
          "Het frauduleus aangeven van een onjuiste woonplaats.",
          "Het niet declareren van zakelijke uitgaven.",
          "Het stelen van iemands identiteitsgegevens.",
          "Het openen van een bankrekening in het buitenland."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de betekenis van 'verwerpt' in juridische taal?",
        options: [
          "Niet goedkeuren, afwijzen.",
          "Goedkeuren, accepteren.",
          "Uitstellen voor later.",
          "Negeren, geen aandacht aan schenken."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De advocaat en zijn ex-echtgenote zijn beiden veroordeeld voor dezelfde misdaad.",
        isTrue: true
      },
      {
        statement: "Het Hof van Cassatie heeft de eerdere veroordeling volledig ongedaan gemaakt.",
        isTrue: false
      },
      {
        statement: "De uitspraak van het Hof van Cassatie is bindend en niet meer aanvechtbaar.",
        isTrue: true
      }
    ]
  }
];
