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
    title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
    topicNumber: 1,
    article: {
      title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
      summary: "Zaterdagavond zijn meerdere mensen neergestoken in een trein die naar het Engelse Huntingdon reed. Dat meldt de Britse transportpolitie. Er zijn twee verdachten gearresteerd."
    },
    vocabulary: {
      words: [
        {
          word: "verdachten",
          definition: "mensen waarvan wordt gedacht dat ze een misdrijf hebben gepleegd",
          sentence: "De twee ___ werden kort na het incident gearresteerd.",
          answer: "verdachten"
        },
        {
          word: "rit",
          definition: "een reis of reisdeel, vooral in een voertuig",
          sentence: "De eerste ___ van de trein was zonder problemen.",
          answer: "rit"
        },
        {
          word: "Engeland",
          definition: "een land dat deel uitmaakt van het Verenigd Koninkrijk",
          sentence: "De trein reed door ___ op het moment van het incident.",
          answer: "Engeland"
        },
        {
          word: "trein",
          definition: "een voertuig dat op rails rijdt en mensen of spullen vervoert",
          sentence: "De ___ reed van Londen naar Huntingdon.",
          answer: "trein"
        },
        {
          word: "neergestoken",
          definition: "met een mes of ander scherp voorwerp verwond zijn",
          sentence: "De man was ___ door een onbekende aanvaller.",
          answer: "neergestoken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ reed van Londen naar Huntingdon.",
          answer: "trein"
        },
        {
          sentence: "De trein reed door ___ op het moment van het incident.",
          answer: "Engeland"
        },
        {
          sentence: "De eerste ___ van de trein was zonder problemen.",
          answer: "rit"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebeurde er in de trein naar Huntingdon?",
        options: [
          "Er was een brand",
          "Er was een steekpartij",
          "Er was een ontspannen sfeer",
          "De trein was leeg"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie heeft de verdachten gearresteerd?",
        options: [
          "De Nederlandse politie",
          "De burgemeester van Londen",
          "De Britse transportpolitie",
          "Een getuige van het incident"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de Britse transportpolitie in dit incident?",
        options: [
          "Zij hebben de verdachten gearresteerd",
          "Zij hebben de trein bestuurd",
          "Zij hebben niets met het incident te maken",
          "Zij hebben het incident gemeld"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Het incident vond plaats in een trein die naar Huntingdon reed.",
        isTrue: true
      },
      {
        statement: "De verdachten zijn nog niet gevonden.",
        isTrue: false
      },
      {
        statement: "De Britse transportpolitie heeft de aanval gemeld.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
    topicNumber: 1,
    article: {
      title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
      summary: "Waar zijn de Russische soldaten? Dat is de vraag voor de Oekraïense verdediging in Pokrovsk. De strategisch belangrijke stad dreigt te vallen door een nieuwe Russische manier van oorlogvoeren."
    },
    vocabulary: {
      words: [
        {
          word: "vraag",
          definition: "een vraag is iets wat je wilt weten, je stelt een vraag om informatie te krijgen.",
          sentence: "Dat is de ___ voor de Oekraïense verdediging.",
          answer: "vraag"
        },
        {
          word: "vallen",
          definition: "hetzelfde als hierboven, het tegengestelde van staan of zweven.",
          sentence: "De stad dreigt te ___ door de nieuwe tactiek.",
          answer: "vallen"
        },
        {
          word: "doen",
          definition: "uitvoeren van een actie, iets uitvoeren of maken.",
          sentence: "Nieuwe tactiek dreigt Pokrovsk te ___ vallen.",
          answer: "doen"
        },
        {
          word: "vallen",
          definition: "naar beneden gaan, niet meer staan of hangen, maar neerkomen.",
          sentence: "De stad dreigt te ___ door de nieuwe tactiek.",
          answer: "vallen"
        },
        {
          word: "doen",
          definition: "hetzelfde als hierboven, een actie uitvoeren.",
          sentence: "De nieuwe tactiek dreigt de stad te ___ vallen.",
          answer: "doen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De stad dreigt te ___ door de nieuwe tactiek.",
          answer: "vallen"
        },
        {
          sentence: "De stad dreigt te ___ door de nieuwe tactiek.",
          answer: "vallen"
        },
        {
          sentence: "Dat is de ___ voor de Oekraïense verdediging.",
          answer: "vraag"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Oekraïne?",
        options: [
          "Kiev",
          "Londen",
          "Berlijn",
          "Parijs"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'dreigen' in deze context?",
        options: [
          "aankondigen",
          "verbergen",
          "beschermen",
          "verliezen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een synoniem voor 'tactiek'?",
        options: [
          "strategie",
          "vordering",
          "verlies",
          "winst"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Pokrovsk is een stad in Oekraïne.",
        isTrue: true
      },
      {
        statement: "De Russische soldaten zijn aanwezig in Pokrovsk.",
        isTrue: false
      },
      {
        statement: "De nieuwe tactiek zorgt ervoor dat de stad dreigt te vallen.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Frans parlement verwerpt rijkentaks",
    topicNumber: 1,
    article: {
      title: "Frans parlement verwerpt rijkentaks",
      summary: "Het Franse parlement heeft voorstellen om de rijksten te belasten verworpen. Er is geen sprake van een wonderbelasting."
    },
    vocabulary: {
      words: [
        {
          word: "Frans",
          definition: "Betrekking hebbend op Frankrijk",
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          word: "parlement",
          definition: "Een groep mensen die wetten maakt",
          sentence: "Het Nederlands ___ bestaat uit de Eerste en Tweede Kamer.",
          answer: "parlement"
        },
        {
          word: "verwerpt",
          definition: "Niet accepteren, afwijzen",
          sentence: "De regering ___ het voorstel voor een nieuwe wet.",
          answer: "verwerpt"
        },
        {
          word: "rijkentaks",
          definition: "Belasting voor mensen met veel geld",
          sentence: "De ___ is bedoeld om de rijken te belasten.",
          answer: "rijkentaks"
        },
        {
          word: "is",
          definition: "Zijn, het tegenwoordige tijd van 'zijn'",
          sentence: "Hij ___ erg blij met het resultaat.",
          answer: "is"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het Nederlands ___ bestaat uit de Eerste en Tweede Kamer.",
          answer: "parlement"
        },
        {
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          sentence: "De ___ is bedoeld om de rijken te belasten.",
          answer: "rijkentaks"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het Franse parlement?",
        options: [
          "Een gebouw in Parijs",
          "De Assemblée Nationale",
          "Een groep Franse ministers",
          "De Franse regering"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'verwerpt' in deze context?",
        options: [
          "Accepteert",
          "Verwerpt",
          "Wijst af",
          "Verbergt"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een belasting voor iedereen",
          "Een belasting voor de armen",
          "Een belasting voor de rijken",
          "Een feest in Frankrijk"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het Franse parlement heeft de rijkentaks goedgekeurd.",
        isTrue: false
      },
      {
        statement: "Er is een nieuwe wet aangenomen in Frankrijk.",
        isTrue: false
      },
      {
        statement: "De rijkentaks is niet ingevoerd in Frankrijk.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Illegale rave bij Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Illegale rave bij Kluisbergen",
      summary: "In de Waalse gemeente Frasnes-lez-Anvaing, vlak over de taalgrens, is een illegale rave bezig met ongeveer 700 bezoekers. De deelnemers komen uit België, Nederland en Frankrijk en zijn van plan om tot zondagnamiddag door te gaan."
    },
    vocabulary: {
      words: [
        {
          word: "Nederland",
          definition: "ons land",
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        },
        {
          word: "deelnemers",
          definition: "mensen die meedoen aan iets",
          sentence: "De ___ van het feest kwamen uit verschillende landen.",
          answer: "deelnemers"
        },
        {
          word: "zondag",
          definition: "de dag na zaterdag",
          sentence: "Op ___ is het weekend.",
          answer: "zondag"
        },
        {
          word: "Frankrijk",
          definition: "een groot land in Europa",
          sentence: "___ is groter dan België.",
          answer: "Frankrijk"
        },
        {
          word: "bezoekers",
          definition: "mensen die naar een plaats gaan",
          sentence: "De ___ van het feest waren erg luid.",
          answer: "bezoekers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is groter dan België.",
          answer: "Frankrijk"
        },
        {
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        },
        {
          sentence: "De ___ van het feest waren erg luid.",
          answer: "bezoekers"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een rave?",
        options: [
          "Een soort dans",
          "Een groot feest met muziek",
          "Een sportevenement",
          "Een markt"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar vond deze rave plaats?",
        options: [
          "In Nederland",
          "In België",
          "In Frankrijk",
          "In Duitsland"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe lang duurde de rave?",
        options: [
          "Tot zaterdag",
          "Tot zondag",
          "Tot maandag",
          "Tot dinsdag"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rave vond plaats in Kluisbergen.",
        isTrue: false
      },
      {
        statement: "De rave had ongeveer 700 bezoekers.",
        isTrue: true
      },
      {
        statement: "De rave was legaal.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
    topicNumber: 1,
    article: {
      title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
      summary: "Ook vanavond zijn boven de militaire basis van Kleine-Brogel drones waargenomen. Vrijdag bespreekt de ministerraad het 'counterdronedossier' van Defensieminister Theo Francken (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "Brogel",
          definition: "een plaatsnaam, deel van Kleine-Brogel",
          sentence: "Kleine-___ is een dorp in België.",
          answer: "Brogel"
        },
        {
          word: "Boven",
          definition: "op een hogere plaats",
          sentence: "De vogel vliegt ___ het huis.",
          answer: "Boven"
        },
        {
          word: "Ministerraad",
          definition: "een groep van ministers die samen besluiten nemen",
          sentence: "De ___ vergadert elke vrijdag.",
          answer: "Ministerraad"
        },
        {
          word: "waargenomen",
          definition: "gezien of opgemerkt",
          sentence: "De drones werden ___ door bewakers.",
          answer: "waargenomen"
        },
        {
          word: "Bespreekt",
          definition: "bespreekt, erover praat",
          sentence: "Hij ___ het plan met zijn team.",
          answer: "Bespreekt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ vergadert elke vrijdag.",
          answer: "Ministerraad"
        },
        {
          sentence: "De vogel vliegt ___ het huis.",
          answer: "Boven"
        },
        {
          sentence: "Kleine-___ is een dorp in België.",
          answer: "Brogel"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er bedoeld met 'waargenomen' in de titel?",
        options: [
          "Vergeten",
          "Gezien",
          "Verborgen",
          "Gemaakt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de 'ministerraad'?",
        options: [
          "Een soort school",
          "Een groep ministers",
          "Een soort restaurant",
          "Een sportteam"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat bespreekt de ministerraad volgens de samenvatting?",
        options: [
          "Een nieuw soort drone",
          "Het 'counterdronedossier'",
          "Een feestplan",
          "Een nieuwe wet tegen drones"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Drones worden alleen 's nachts waargenomen.",
        isTrue: false
      },
      {
        statement: "De ministerraad vergadert op vrijdag.",
        isTrue: true
      },
      {
        statement: "Theo Francken is de Minister van Defensie.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Weinig zon in oktober, maar bijna een record",
    topicNumber: 1,
    article: {
      title: "Weinig zon in oktober, maar bijna een record",
      summary: "De maand oktober had weinig zon, maar het was net geen record. Alleen in 1998 was er nog minder zon. Het goede nieuws is dat het woensdag warm wordt."
    },
    vocabulary: {
      words: [
        {
          word: "maand",
          definition: "een van de twaalf periodes in een jaar",
          sentence: "De maand oktober was erg regenachtig.",
          answer: "maand"
        },
        {
          word: "zon",
          definition: "de ster die licht en warmte geeft",
          sentence: "Er was weinig ___ in oktober.",
          answer: "zon"
        },
        {
          word: "record",
          definition: "een prestatie die beter is dan alle anderen",
          sentence: "Het was bijna een nieuw ___.",
          answer: "record"
        },
        {
          word: "goed",
          definition: "van goede kwaliteit, positief",
          sentence: "Het ___ nieuws is dat het warmer wordt.",
          answer: "goed"
        },
        {
          word: "warm",
          definition: "een hoge temperatuur hebbend",
          sentence: "Het wordt ___ en zonnig op woensdag.",
          answer: "warm"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De maand oktober was erg regenachtig.",
          answer: "maand"
        },
        {
          sentence: "Er was weinig ___ in oktober.",
          answer: "zon"
        },
        {
          sentence: "Het was bijna een nieuw ___.",
          answer: "record"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was bijzonder aan de maand oktober dit jaar?",
        options: [
          "Het was de warmste ooit",
          "Er was erg weinig zon",
          "Het regende elke dag",
          "De zon scheen de hele maand"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk record werd bijna gebroken in oktober?",
        options: [
          "Het aantal uren zon",
          "De hoeveelheid regen",
          "De gemiddelde temperatuur",
          "De hoeveelheid sneeuw"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het goede nieuws volgens het artikel?",
        options: [
          "Het wordt kouder",
          "Het gaat regenen",
          "Het wordt warmer",
          "Er komt sneeuw"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Oktober 2023 had meer zon dan oktober 1998.",
        isTrue: false
      },
      {
        statement: "Woensdag wordt het warm en zonnig.",
        isTrue: true
      },
      {
        statement: "Oktober 2023 brak het record voor minste zon.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
    topicNumber: 1,
    article: {
      title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
      summary: "Zaterdagavond zijn meerdere mensen neergestoken in een trein die naar het Engelse Huntingdon reed. Dat meldt de Britse transportpolitie. Er zijn twee verdachten gearresteerd."
    },
    vocabulary: {
      words: [
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ heeft de verdachten gearresteerd.",
          answer: "politie"
        },
        {
          word: "opgepakt",
          definition: "gearresteerd door de politie",
          sentence: "De politie heeft de verdachten ___.",
          answer: "opgepakt"
        },
        {
          word: "neergestoken",
          definition: "gestoken met een mes",
          sentence: "Mensen werden ___ in de trein.",
          answer: "neergestoken"
        },
        {
          word: "mensen",
          definition: "personen",
          sentence: "Verschillende ___ werden neergestoken.",
          answer: "mensen"
        },
        {
          word: "trein",
          definition: "een voertuig dat rijdt op rails",
          sentence: "Het incident vond plaats in een ___.",
          answer: "trein"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het incident vond plaats in een ___.",
          answer: "trein"
        },
        {
          sentence: "De politie heeft de verdachten ___.",
          answer: "opgepakt"
        },
        {
          sentence: "De ___ heeft de verdachten gearresteerd.",
          answer: "politie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gebeurde het incident?",
        options: [
          "In een trein",
          "In een bus",
          "In een auto",
          "Op een fiets"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie heeft de verdachten gearresteerd?",
        options: [
          "De Britse transportpolitie",
          "De Nederlandse politie",
          "De Franse politie",
          "De Duitse politie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat gebeurde er met de verdachten?",
        options: [
          "Ze werden opgepakt",
          "Ze werden vrijgelaten",
          "Ze werden vergeten",
          "Ze werden ontslagen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het incident vond plaats in een trein.",
        isTrue: true
      },
      {
        statement: "De verdachten zijn nog niet gevonden.",
        isTrue: false
      },
      {
        statement: "De politie heeft de verdachten gearresteerd.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Waar zijn de Russische soldaten?",
    topicNumber: 1,
    article: {
      title: "Waar zijn de Russische soldaten?",
      summary: "Waar zijn de Russische soldaten? Dat is de vraag in de oorlog in Oekraïne. De stad Pokrovsk kan vallen door een nieuwe Russische tactiek."
    },
    vocabulary: {
      words: [
        {
          word: "tactiek",
          definition: "een plan of manier om iets te doen",
          sentence: "De nieuwe ___ van Rusland is gevaarlijk.",
          answer: "tactiek"
        },
        {
          word: "stad",
          definition: "een grote plaats waar mensen wonen",
          sentence: "De ___ Pokrovsk kan vallen.",
          answer: "stad"
        },
        {
          word: "Russische",
          definition: "van of gerelateerd aan Rusland",
          sentence: "De ___ soldaten gebruiken een nieuwe tactiek.",
          answer: "Russische"
        },
        {
          word: "waar",
          definition: "op welke plaats of locatie",
          sentence: "___ zijn de soldaten?",
          answer: "waar"
        },
        {
          word: "nieuwe",
          definition: "iets dat nog niet eerder is geweest",
          sentence: "Ze gebruiken een ___ manier van oorlogvoeren.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze gebruiken een ___ manier van oorlogvoeren.",
          answer: "nieuwe"
        },
        {
          sentence: "___ zijn de soldaten?",
          answer: "waar"
        },
        {
          sentence: "De ___ soldaten gebruiken een nieuwe tactiek.",
          answer: "Russische"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar zijn de Russische soldaten?",
        options: [
          "In Rusland",
          "In Oekraïne",
          "In de stad Pokrovsk",
          "Dat is niet bekend"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de vraag voor de Oekraïense verdediging?",
        options: [
          "Hoe heet de stad?",
          "Waar zijn de Russische soldaten?",
          "Hoeveel soldaten zijn er?",
          "Wat is de naam van de stad?"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat dreigt er te gebeuren met de stad Pokrovsk?",
        options: [
          "Het wordt groter",
          "Het valt",
          "Het wordt herbouwd",
          "Het verandert van naam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Russische soldaten zijn in Oekraïne.",
        isTrue: true
      },
      {
        statement: "De stad Pokrovsk is al gevallen.",
        isTrue: false
      },
      {
        statement: "De Russen gebruiken een nieuwe tactiek.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Oekraïne en Rusland",
    topicNumber: 1,
    article: {
      title: "Oekraïne en Rusland",
      summary: "Oekraïne en Rusland zijn in oorlog. Lees hier het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "Oekraïne",
          definition: "een land",
          sentence: "___ is een land.",
          answer: "Oekraïne"
        },
        {
          word: "Rusland",
          definition: "een ander land",
          sentence: "___ is ook een land.",
          answer: "Rusland"
        },
        {
          word: "oorlog",
          definition: "vechten tussen landen",
          sentence: "Er is nu ___ in Oekraïne.",
          answer: "oorlog"
        },
        {
          word: "nieuws",
          definition: "informatie over wat er gebeurt",
          sentence: "Het ___ zegt wat er gebeurt.",
          answer: "nieuws"
        },
        {
          word: "zijn",
          definition: "bestaan of voorkomen",
          sentence: "Ze ___ in Oekraïne.",
          answer: "zijn"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een land.",
          answer: "Oekraïne"
        },
        {
          sentence: "Er is nu ___ in Oekraïne.",
          answer: "oorlog"
        },
        {
          sentence: "Het ___ zegt wat er gebeurt.",
          answer: "nieuws"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Oekraïne?",
        options: [
          "Een stad",
          "Een land",
          "Een rivier",
          "Een auto"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is de oorlog?",
        options: [
          "In Rusland",
          "In Duitsland",
          "In Oekraïne",
          "In Frankrijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'lezen'?",
        options: [
          "Een soort sport",
          "Iets wat je met boeken doet",
          "Een soort eten",
          "Een land"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne is een stad.",
        isTrue: false
      },
      {
        statement: "Rusland en Oekraïne zijn in oorlog.",
        isTrue: true
      },
      {
        statement: "Je kunt nieuws lezen in een app.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Illegale rave in België",
    topicNumber: 1,
    article: {
      title: "Illegale rave in België",
      summary: "Er is een feest in België. Het feest is illegaal. Er zijn 700 mensen. Zij komen uit België, Nederland en Frankrijk. Ze blijven tot zondag."
    },
    vocabulary: {
      words: [
        {
          word: "illegale",
          definition: "niet toegestaan, tegen de wet",
          sentence: "De politie stopte de ___ feest.",
          answer: "illegale"
        },
        {
          word: "zondag",
          definition: "de dag na zaterdag",
          sentence: "Het feest duurt tot ___.",
          answer: "zondag"
        },
        {
          word: "Frankrijk",
          definition: "een land naast België",
          sentence: "Sommige bezoekers komen uit ___.",
          answer: "Frankrijk"
        },
        {
          word: "Nederland",
          definition: "een land naast België",
          sentence: "Sommige bezoekers komen uit ___.",
          answer: "Nederland"
        },
        {
          word: "rave",
          definition: "een groot feest met muziek",
          sentence: "De ___ is in België.",
          answer: "rave"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het feest duurt tot ___.",
          answer: "zondag"
        },
        {
          sentence: "Sommige bezoekers komen uit ___.",
          answer: "Frankrijk"
        },
        {
          sentence: "De ___ is in België.",
          answer: "rave"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is de rave?",
        options: [
          "In België",
          "In Nederland",
          "In Duitsland",
          "In Spanje"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoeveel bezoekers zijn er?",
        options: [
          "700",
          "7000",
          "70",
          "7"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe lang duurt het feest?",
        options: [
          "Tot zondag",
          "Tot maandag",
          "Tot vrijdag",
          "Tot dinsdag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De rave is in Nederland.",
        isTrue: false
      },
      {
        statement: "Het feest duurt tot zondag.",
        isTrue: true
      },
      {
        statement: "Alle bezoekers komen uit België.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Drones boven militaire basis",
    topicNumber: 1,
    article: {
      title: "Drones boven militaire basis",
      summary: "Drones zijn gezien boven een legerbasis. Minister Francken heeft plannen tegen drones."
    },
    vocabulary: {
      words: [
        {
          word: "Basis",
          definition: "een plaats waar mensen werken of wonen",
          sentence: "Soldaten leven en werken op een militaire ___.",
          answer: "Basis"
        },
        {
          word: "Tegen",
          definition: "tegen iets of iemand zijn",
          sentence: "Hij is ___ het plan.",
          answer: "Tegen"
        },
        {
          word: "Plannen",
          definition: "ideeën voor de toekomst",
          sentence: "De overheid heeft nieuwe ___.",
          answer: "Plannen"
        },
        {
          word: "Boven",
          definition: "ergens boven, niet onder",
          sentence: "De vogel vliegt ___ het huis.",
          answer: "Boven"
        },
        {
          word: "Gezien",
          definition: "iets met je ogen waarnemen",
          sentence: "Ik heb dat film ___.",
          answer: "Gezien"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik heb dat film ___.",
          answer: "Gezien"
        },
        {
          sentence: "De vogel vliegt ___ het huis.",
          answer: "Boven"
        },
        {
          sentence: "Soldaten leven en werken op een militaire ___.",
          answer: "Basis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een drone?",
        options: [
          "Een soort auto",
          "Een vliegend apparaat",
          "Een soort boom",
          "Een soort boek"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet de minister?",
        options: [
          "Hij rijdt een auto",
          "Hij eet een appel",
          "Hij maakt plannen",
          "Hij speelt buiten"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar zijn de drones gezien?",
        options: [
          "In de stad",
          "Op de maan",
          "Boven een militaire basis",
          "In een rivier"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Drones zijn grote vliegtuigen.",
        isTrue: false
      },
      {
        statement: "De minister heeft nieuwe plannen.",
        isTrue: true
      },
      {
        statement: "Drones zijn verboden boven de stad.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Weinig zon in oktober",
    topicNumber: 1,
    article: {
      title: "Weinig zon in oktober",
      summary: "Oktober had weinig zon. Alleen 1998 had nog minder zon. Maar woensdag wordt het warm."
    },
    vocabulary: {
      words: [
        {
          word: "zon",
          definition: "Dat is wat je ziet in de lucht als het niet bewolkt is.",
          sentence: "De ___ schijnt fel vandaag.",
          answer: "zon"
        },
        {
          word: "oktober",
          definition: "De tiende maand van het jaar.",
          sentence: "In ___ is het vaak herfst.",
          answer: "oktober"
        },
        {
          word: "weinig",
          definition: "Niet veel, een kleine hoeveelheid.",
          sentence: "Er is ___ water in de fles.",
          answer: "weinig"
        },
        {
          word: "warm",
          definition: "Niet koud, een hoge temperatuur.",
          sentence: "De soep is erg ___.",
          answer: "warm"
        },
        {
          word: "woensdag",
          definition: "De derde dag van de week.",
          sentence: "___ is de dag na dinsdag.",
          answer: "woensdag"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ schijnt fel vandaag.",
          answer: "zon"
        },
        {
          sentence: "___ is de dag na dinsdag.",
          answer: "woensdag"
        },
        {
          sentence: "In ___ is het vaak herfst.",
          answer: "oktober"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was er bijzonder aan oktober dit jaar?",
        options: [
          "Er was veel zon",
          "Er was weinig zon",
          "Het was erg koud",
          "Het was erg warm"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er goed nieuws voor woensdag?",
        options: [
          "Het wordt koud",
          "Het wordt nat",
          "Het wordt warm",
          "Er is veel wind"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk record werd bijna gehaald in oktober?",
        options: [
          "Hoogste temperatuur",
          "Meeste zonuren",
          "Minste zonuren",
          "Minste regen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Oktober had veel zon.",
        isTrue: false
      },
      {
        statement: "Woensdag wordt het warm.",
        isTrue: true
      },
      {
        statement: "Alleen oktober 1998 had meer zon.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
    topicNumber: 1,
    article: {
      title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
      summary: "Zaterdagavond zijn meerdere mensen neergestoken in een trein die naar het Engelse Huntingdon reed. Dat meldt de Britse transportpolitie. Er zijn twee verdachten gearresteerd."
    },
    vocabulary: {
      words: [
        {
          word: "zaterdagavond",
          definition: "de avond van zaterdag",
          sentence: "De politie werd __ zaterdagavond op de hoogte gebracht van het incident.",
          answer: "zaterdagavond"
        },
        {
          word: "trein",
          definition: "een voertuig dat op rails rijdt en wordt gebruikt voor personenvervoer",
          sentence: "De __ vertrok vanuit Londen en was onderweg naar Huntingdon.",
          answer: "trein"
        },
        {
          word: "neergestoken",
          definition: "het fysiek met een mes of scherp voorwerp zijn verwond",
          sentence: "De slachtoffers zijn ernstig __ tijdens de aanval.",
          answer: "neergestoken"
        },
        {
          word: "Engeland",
          definition: "een land dat deel uitmaakt van het Verenigd Koninkrijk",
          sentence: "Het incident vond plaats in __, waar de politie de zaak onderzoekt.",
          answer: "Engeland"
        },
        {
          word: "verdachten",
          definition: "personen die worden verdacht van een misdrijf",
          sentence: "De twee __ werden kort na het incident aangehouden.",
          answer: "verdachten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het incident vond plaats in __, waar de politie de zaak onderzoekt.",
          answer: "Engeland"
        },
        {
          sentence: "De twee __ werden kort na het incident aangehouden.",
          answer: "verdachten"
        },
        {
          sentence: "De politie werd __ zaterdagavond op de hoogte gebracht van het incident.",
          answer: "zaterdagavond"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het incident plaats?",
        options: [
          "In een trein in Engeland",
          "Op een station in Londen",
          "In een bus in Schotland",
          "Op straat in Manchester"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de Britse transportpolitie in deze kwestie?",
        options: [
          "Zij hebben de twee verdachten gearresteerd",
          "Zij verzorgen de slachtoffers",
          "Zij leiden het onderzoek",
          "Zij meldden het incident aan de media"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat gebeurde er met de verdachten na het incident?",
        options: [
          "Ze werden onmiddellijk gearresteerd",
          "Ze vluchten het land uit",
          "Ze werden na een uur gevonden",
          "Ze werden nooit gevonden"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het incident vond plaats op een zaterdagavond in een trein in Engeland.",
        isTrue: true
      },
      {
        statement: "De Britse transportpolitie heeft nog geen verdachten kunnen arresteren.",
        isTrue: false
      },
      {
        statement: "De trein was onderweg naar Huntingdon op het moment van het incident.",
        isTrue: true
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
    topicNumber: 1,
    article: {
      title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
      summary: "Waar zijn de Russische soldaten? Dat is de vraag voor de Oekraïense verdediging in Pokrovsk. De strategisch belangrijke stad dreigt te vallen door een nieuwe Russische manier van oorlogvoeren."
    },
    vocabulary: {
      words: [
        {
          word: "verdediging",
          definition: "het beschermen tegen aanvallen",
          sentence: "De verdediging van Pokrovsk is cruciaal.",
          answer: "verdediging"
        },
        {
          word: "vraag",
          definition: "een vraag of verzoek om informatie",
          sentence: "Dat is de ___ voor de Oekraïense verdediging.",
          answer: "vraag"
        },
        {
          word: "zijn",
          definition: "bestaan of aanwezig zijn",
          sentence: "Waar zijn de Russische soldaten?",
          answer: "zijn"
        },
        {
          word: "Russische",
          definition: "betrekking hebbend op Rusland",
          sentence: "De ___ soldaten zijn niet zichtbaar, maar hun tactiek is duidelijk.",
          answer: "Russische"
        },
        {
          word: "oorlogvoeren",
          definition: "het voeren van oorlog, oorlog voeren",
          sentence: "De nieuwe manier van ___ is effectief maar gevaarlijk.",
          answer: "oorlogvoeren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De verdediging van Pokrovsk is cruciaal.",
          answer: "verdediging"
        },
        {
          sentence: "Dat is de ___ voor de Oekraïense verdediging.",
          answer: "vraag"
        },
        {
          sentence: "De ___ soldaten zijn niet zichtbaar, maar hun tactiek is duidelijk.",
          answer: "Russische"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar zijn de Russische soldaten volgens de tekst?",
        options: [
          "Niet zichtbaar in de stad",
          "Alleen in Pokrovsk",
          "Overal in Oekraïne",
          "Alleen in Moskou"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het gevolg van de nieuwe Russische tactiek?",
        options: [
          "Pokrovsk valt snel",
          "Oekraïne wint de oorlog",
          "De soldaten keren terug",
          "Er is geen effect"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Oekraïne verliest snel",
          "De vraag naar soldaten is cruciaal",
          "Rusland gebruikt nieuwe methoden",
          "Pokrovsk is al gevallen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Russische soldaten zijn duidelijk zichtbaar in Pokrovsk.",
        isTrue: false
      },
      {
        statement: "De nieuwe Russische tactiek veroorzaakt dat Pokrovk dreigt te vallen.",
        isTrue: true
      },
      {
        statement: "De tekst is voornamelijk gericht op de locatie van de Russische soldaten.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Frans parlement verwerpt rijkenbelasting: “Wonderbelasting bestaat niet”",
    topicNumber: 1,
    article: {
      title: "Frans parlement verwerpt rijkenbelasting: “Wonderbelasting bestaat niet”",
      summary: "De Assemblée nationale, het Franse parlement, heeft vrijdag voorstellen voor een belasting op de hoogste vermogens met een grote meerderheid verworpen."
    },
    vocabulary: {
      words: [
        {
          word: "vermogens",
          definition: "Vermogens of fortuinen, vaak in economische context",
          sentence: "Hoge ___ kunnen meer belasting dragen.",
          answer: "vermogens"
        },
        {
          word: "Assemblée",
          definition: "Het Franse woord voor een vergadering of parlement",
          sentence: "De Nationale ___ behandelt wetgeving.",
          answer: "Assemblée"
        },
        {
          word: "belasting",
          definition: "Een verplichte financiële bijdrage aan de overheid",
          sentence: "Deze ___ wordt geheven op inkomen en vermogen.",
          answer: "belasting"
        },
        {
          word: "bestaat",
          definition: "Is aanwezig of is realiteit",
          sentence: "De entiteit ___ al sinds 2020.",
          answer: "bestaat"
        },
        {
          word: "voorstellen",
          definition: "Plannen of ideeën die worden aangeboden",
          sentence: "De nieuwe ___ werden goed ontvangen.",
          answer: "voorstellen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Deze ___ wordt geheven op inkomen en vermogen.",
          answer: "belasting"
        },
        {
          sentence: "Hoge ___ kunnen meer belasting dragen.",
          answer: "vermogens"
        },
        {
          sentence: "De entiteit ___ al sinds 2020.",
          answer: "bestaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verworpen' in deze context?",
        options: [
          "Geaccepteerd",
          "Afgewezen",
          "Geprezen",
          "Gewijzigd"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'Assemblée' specifiek naar?",
        options: [
          "Een soort belasting",
          "De Franse regering",
          "Het Franse parlement",
          "Een Europese instelling"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Frankrijk introduceert een nieuwe belasting",
          "Frankrijk verwerpt een belastingvoorstel",
          "De Assemblée Nationale wordt hervormd",
          "Er is een grote meerderheid voor belastingverhoging"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Franse parlement heeft de belastingvoorstellen goedgekeurd.",
        isTrue: false
      },
      {
        statement: "De Assemblée Nationale is het Franse parlement.",
        isTrue: true
      },
      {
        statement: "De belastingvoorstellen werden unaniem aangenomen.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Illegale rave vlak bij Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Illegale rave vlak bij Kluisbergen",
      summary: "In de Waalse gemeente Frasnes-lez-Anvaing, vlak over de taalgrens, is een illegale rave bezig met ongeveer 700 bezoekers. De deelnemers komen uit België, Nederland en Frankrijk en zijn van plan om tot zondagnamiddag door te gaan."
    },
    vocabulary: {
      words: [
        {
          word: "Illegale",
          definition: "Niet toegestaan door de wet",
          sentence: "De ___ activiteit werd gestopt door de politie.",
          answer: "Illegale"
        },
        {
          word: "Rave",
          definition: "Een groot feest met elektronische muziek",
          sentence: "De ___ trok honderden bezoekers.",
          answer: "Rave"
        },
        {
          word: "Kluisbergen",
          definition: "Een plaatsnaam in België",
          sentence: "___ is een gemeente in Vlaanderen.",
          answer: "Kluisbergen"
        },
        {
          word: "Anvaing",
          definition: "Een plaatsnaam in België",
          sentence: "___ is een deelgemeente van Frasnes-lez-Anvaing.",
          answer: "Anvaing"
        },
        {
          word: "zondagnamiddag",
          definition: "De tijd na zondagmiddag en voor zondagavond",
          sentence: "We spreken af op ___ om te sporten.",
          answer: "zondagnamiddag"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een gemeente in Vlaanderen.",
          answer: "Kluisbergen"
        },
        {
          sentence: "We spreken af op ___ om te sporten.",
          answer: "zondagnamiddag"
        },
        {
          sentence: "De ___ activiteit werd gestopt door de politie.",
          answer: "Illegale"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Welke taal wordt er vooral in Vlaanderen gesproken?",
        options: [
          "Frans",
          "Duits",
          "Vlaams",
          "Engels"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'Flandern'?",
        options: [
          "Een Duitse stad",
          "Een type feest",
          "De Duitse naam voor Vlaanderen",
          "Een Nederlands dialect"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe laat eindigde de rave?",
        options: [
          "Zondagochtend",
          "Zaterdagnacht",
          "Zondagnamiddag",
          "Maandagochtend"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rave vond plaats in de Waalse gemeente Frasnes-lez-Anvaing.",
        isTrue: true
      },
      {
        statement: "De rave werd georganiseerd door de lokale overheid.",
        isTrue: false
      },
      {
        statement: "Deelnemers aan de rave kwamen uit meerdere Europese landen.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
    topicNumber: 1,
    article: {
      title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
      summary: "Ook vanavond zijn boven de militaire basis van Kleine-Brogel drones waargenomen. Vrijdag bespreekt de ministerraad het 'counterdronedossier' van Defensieminister Theo Francken (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "bespreekt",
          definition: "Bespreekt of overlegt over een onderwerp.",
          sentence: "Het team ___ de nieuwe strategie tijdens de vergadering.",
          answer: "bespreekt"
        },
        {
          word: "drones",
          definition: "Onbemande vliegende toestellen die vaak voor militaire of recreatieve doeleinden worden gebruikt.",
          sentence: "De militairen zagen verschillende ___ in de lucht tijdens de oefening.",
          answer: "drones"
        },
        {
          word: "Defensieminister",
          definition: "De minister die verantwoordelijk is voor de landsverdediging.",
          sentence: "De ___ gaf een persconferentie over de nieuwe defensiebegroting.",
          answer: "Defensieminister"
        },
        {
          word: "minister",
          definition: "Een lid van de regering, belast met een specifiek beleidsgebied.",
          sentence: "De ___ van Onderwijs kondigde nieuwe subsidies aan voor scholen.",
          answer: "minister"
        },
        {
          word: "ministerraad",
          definition: "Het college van ministers in een regering, die wekelijks bijeenkomt.",
          sentence: "De ___ komt elke vrijdag bijeen om de wekelijkse agenda te bespreken.",
          answer: "ministerraad"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het team ___ de nieuwe strategie tijdens de vergadering.",
          answer: "bespreekt"
        },
        {
          sentence: "De ___ komt elke vrijdag bijeen om de wekelijkse agenda te bespreken.",
          answer: "ministerraad"
        },
        {
          sentence: "De militairen zagen verschillende ___ in de lucht tijdens de oefening.",
          answer: "drones"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er besproken in de ministerraad volgens de tekst?",
        options: [
          "Het budget voor onderwijs",
          "Het counterdronedossier",
          "De bouw van een nieuwe basis",
          "Hulp aan Oekraïne"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie is Theo Francken volgens de tekst?",
        options: [
          "De minister van Defensie",
          "De burgemeester van Kleine-Brogel",
          "De minister van Buitenlandse Zaken",
          "Een drone-piloot"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke dag vond de beschreven gebeurtenis plaats?",
        options: [
          "Vrijdag",
          "Zaterdag",
          "Zondag",
          "Maandag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Drones werden alleen 's avonds waargenomen boven Kleine Brogel.",
        isTrue: false
      },
      {
        statement: "Theo Francken is de minister van Defensie en maakt deel uit van de N-VA.",
        isTrue: true
      },
      {
        statement: "De ministerraad bespreekt het counterdronedossier op zaterdag.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Amper zon in oktober, maar wel bijna een record",
    topicNumber: 1,
    article: {
      title: "Amper zon in oktober, maar wel bijna een record",
      summary: "De voorbije maand oktober was zo somber dat er bijna een record in zat. Alleen oktober 1998 was nog zonlozer. Maar er is ook goed nieuws: woensdag wordt het gezellig warm."
    },
    vocabulary: {
      words: [
        {
          word: "gezellig",
          definition: "Gezellig betekent: knus, aangenaam of met een goede sfeer.",
          sentence: "Het wordt ___ warm op woensdag.",
          answer: "gezellig"
        },
        {
          word: "maand",
          definition: "Een maand is een periode van ongeveer vier weken, ofwel ongeveer 30 of 31 dagen.",
          sentence: "De ___ oktober was erg somber.",
          answer: "maand"
        },
        {
          word: "record",
          definition: "Een record is een prestatie of resultaat dat het beste of slechtste is in zijn soort.",
          sentence: "Het was bijna een nieuw ___ voor weinig zon.",
          answer: "record"
        },
        {
          word: "Amper",
          definition: "Met amper wordt bedoeld: heel weinig of bijna niet. Het is een aanduiding voor een zeer kleine hoeveelheid.",
          sentence: "Er was ___ geen zon te zien.",
          answer: "amper"
        },
        {
          word: "zonlozer",
          definition: "Zonlozer is een vergrotende trap: het betekent 'met nog minder zon' of 'nog minder zonlicht'.",
          sentence: "Alleen 1998 was nog ___ dan oktober 2023.",
          answer: "zonlozer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Alleen 1998 was nog ___ dan oktober 2023.",
          answer: "zonlozer"
        },
        {
          sentence: "Er was ___ geen zon te zien.",
          answer: "amper"
        },
        {
          sentence: "De ___ oktober was erg somber.",
          answer: "maand"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'zonlozer' in de context van de tekst?",
        options: [
          "Meer zon",
          "Minder zon",
          "Geen zon",
          "Volle zon"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk jaar had nog minder zon dan 2023 volgens de tekst?",
        options: [
          "1998",
          "1999",
          "2000",
          "2022"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat voor weer wordt er verwacht op woensdag?",
        options: [
          "Koud en nat",
          "Warm en zonnig",
          "Koud en winderig",
          "Mild en bewolkt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oktober 2023 was de somberste maand ooit.",
        isTrue: false
      },
      {
        statement: "Er was een maand in 1998 die nog somberder was dan oktober 2023.",
        isTrue: true
      },
      {
        statement: "Woensdag wordt een koude dag volgens de tekst.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
    topicNumber: 1,
    article: {
      title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
      summary: "Zaterdagavond zijn meerdere mensen neergestoken in een trein die naar het Engelse Huntingdon reed. Dat meldt de Britse transportpolitie. Er zijn twee verdachten gearresteerd."
    },
    vocabulary: {
      words: [
        {
          word: "trein",
          definition: "Voertuig dat rijdt op rails",
          sentence: "De ___ staat stil op het station.",
          answer: "trein"
        },
        {
          word: "verdachten",
          definition: "Mensen die iets slechts hebben gedaan, denkt men",
          sentence: "De twee ___ zijn opgepakt door de politie.",
          answer: "verdachten"
        },
        {
          word: "Engeland",
          definition: "Land in Europa",
          sentence: "Londen is de hoofdstad van ___.",
          answer: "Engeland"
        },
        {
          word: "Huntingdon",
          definition: "Stad in Engeland",
          sentence: "___ is een plaats in Engeland.",
          answer: "Huntingdon"
        },
        {
          word: "opgepakt",
          definition: "Gearresteerd, meegenomen door politie",
          sentence: "De agenten hebben de man ___.",
          answer: "opgepakt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een plaats in Engeland.",
          answer: "Huntingdon"
        },
        {
          sentence: "De twee ___ zijn opgepakt door de politie.",
          answer: "verdachten"
        },
        {
          sentence: "Londen is de hoofdstad van ___.",
          answer: "Engeland"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gebeurde het incident met de steekpartij?",
        options: [
          "In een trein",
          "In een bus",
          "Op straat",
          "In een park"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie zijn de verdachten volgens de tekst?",
        options: [
          "Twee mannen",
          "Twee vrouwen",
          "Een man en een vrouw",
          "Niet vermeld"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de politie in dit bericht?",
        options: [
          "Zij arresteerden twee mensen",
          "Zij waren slachtoffer",
          "Zij deden niks",
          "Zij startten de aanval"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het incident vond plaats in een trein in Engeland.",
        isTrue: true
      },
      {
        statement: "Er is slechts één verdachte gearresteerd.",
        isTrue: false
      },
      {
        statement: "De politie heeft de twee verdachten gearresteerd.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
    topicNumber: 1,
    article: {
      title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
      summary: "Waar zijn de Russische soldaten? Dat is de vraag voor de Oekraïense verdediging in Pokrovsk. De strategisch belangrijke stad dreigt te vallen door een nieuwe Russische manier van oorlogvoeren."
    },
    vocabulary: {
      words: [
        {
          word: "nieuwe",
          definition: "recent gemaakt of ontstaan, niet oud",
          sentence: "De ___ tactiek van Rusland zorgt voor problemen.",
          answer: "nieuwe"
        },
        {
          word: "zijn",
          definition: "het werkwoord 'zijn' betekent dat iets bestaat of zich in een bepaalde toestand bevindt",
          sentence: "Waar ___ de Russische soldaten?",
          answer: "zijn"
        },
        {
          word: "tactiek",
          definition: "een plan of methode om een doel te bereiken, vooral in een conflict of competitie",
          sentence: "De nieuwe ___ van Rusland is effectief.",
          answer: "tactiek"
        },
        {
          word: "Oekraïense",
          definition: "betrekking hebbend op Oekraïne, iets of iemand uit Oekraïne",
          sentence: "De ___ verdediging moet de stad beschermen.",
          answer: "Oekraïense"
        },
        {
          word: "doen",
          definition: "uitvoeren, uitvoeren van een actie",
          sentence: "De nieuwe Russische tactiek dreigt de stad te ___ vallen.",
          answer: "doen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ tactiek van Rusland zorgt voor problemen.",
          answer: "nieuwe"
        },
        {
          sentence: "De nieuwe Russische tactiek dreigt de stad te ___ vallen.",
          answer: "doen"
        },
        {
          sentence: "De ___ verdediging moet de stad beschermen.",
          answer: "Oekraïense"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het woord 'tactiek' in deze context?",
        options: [
          "Een soort wapen",
          "Een plan om een doel te bereiken",
          "Een type soldaat",
          "Een soort voertuig"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is de stad Pokrovsk belangrijk?",
        options: [
          "Het is de hoofdstad van Oekraïne",
          "Het is een kleine onbelangrijke stad",
          "Het is een strategisch belangrijke locatie voor de verdediging",
          "Er zijn geen Russische soldaten aanwezig"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het gevolg van de nieuwe Russische tactiek?",
        options: [
          "De stad is al gevallen",
          "Er is geen effect",
          "Het dreigt de stad te doen vallen",
          "De stad wordt sterker verdedigd"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Russische soldaten zijn niet zichtbaar in Pokrovsk.",
        isTrue: true
      },
      {
        statement: "De nieuwe Russische tactiek maakt de stad sterker.",
        isTrue: false
      },
      {
        statement: "Oekraïne verdedigt de stad Pokrovsk.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Oekraïne wil Pokrovsk weer onder controle krijgen",
    topicNumber: 1,
    article: {
      title: "Oekraïne wil Pokrovsk weer onder controle krijgen",
      summary: "Oekraïne wil de stad Pokrovsk terugwinnen. Er is een oorlog in Oekraïne. Volg het nieuws om op te hoogte te blijven."
    },
    vocabulary: {
      words: [
        {
          word: "nieuws",
          definition: "Informatie over wat er gebeurt in de wereld",
          sentence: "Ik lees het ___ elke dag.",
          answer: "nieuws"
        },
        {
          word: "onder",
          definition: "Onder, aan de onderkant",
          sentence: "De kat ligt ___ de tafel.",
          answer: "onder"
        },
        {
          word: "weer",
          definition: "Opnieuw, nog een keer",
          sentence: "Hij is ___ thuis.",
          answer: "weer"
        },
        {
          word: "wil",
          definition: "Willen, iets graag willen",
          sentence: "Hij ___ een nieuwe fiets.",
          answer: "wil"
        },
        {
          word: "controle",
          definition: "Beheersing, beheer",
          sentence: "Hij heeft ___ over de auto.",
          answer: "controle"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De kat ligt ___ de tafel.",
          answer: "onder"
        },
        {
          sentence: "Ik lees het ___ elke dag.",
          answer: "nieuws"
        },
        {
          sentence: "Hij ___ een nieuwe fiets.",
          answer: "wil"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wil Oekraïne doen met Pokrovsk?",
        options: [
          "Vernietigen",
          "Verkopen",
          "Terugwinnen",
          "Verliezen"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is er oorlog?",
        options: [
          "Nederland",
          "Duitsland",
          "Oekraïne",
          "Frankrijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'weer'?",
        options: [
          "Nooit",
          "Weer (opnieuw)",
          "Boven",
          "Onder"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne heeft Pokrovsk al onder controle.",
        isTrue: false
      },
      {
        statement: "Er is oorlog in Oekraïne.",
        isTrue: true
      },
      {
        statement: "Nieuws apps geven updates over de oorlog.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Illegale rave in België",
    topicNumber: 1,
    article: {
      title: "Illegale rave in België",
      summary: "In België is er een illegaal feest. Er zijn 700 mensen. Ze komen uit Nederland, België en Frankrijk. Het feest gaat door tot zondag."
    },
    vocabulary: {
      words: [
        {
          word: "illegale",
          definition: "niet wettelijk toegestaan",
          sentence: "De politie stopte de ___ feest.",
          answer: "illegale"
        },
        {
          word: "rave",
          definition: "groot feest met elektronische muziek",
          sentence: "De ___ was in een oud gebouw.",
          answer: "rave"
        },
        {
          word: "feest",
          definition: "een vrolijke bijeenkomst",
          sentence: "Het ___ was leuk maar illegaal.",
          answer: "feest"
        },
        {
          word: "land",
          definition: "een gebied zoals Nederland of België",
          sentence: "Welk ___ is dit?",
          answer: "land"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Welk ___ is dit?",
          answer: "land"
        },
        {
          sentence: "De ___ was in een oud gebouw.",
          answer: "rave"
        },
        {
          sentence: "De politie stopte de ___ feest.",
          answer: "illegale"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de rave plaats?",
        options: [
          "In Nederland",
          "In Duitsland",
          "In België",
          "In Frankrijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel mensen waren er ongeveer?",
        options: [
          "700",
          "70",
          "7000",
          "70000"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'rave'?",
        options: [
          "Een soort feest",
          "Een soort dier",
          "Een soort auto",
          "Een soort land"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De rave was in Nederland.",
        isTrue: false
      },
      {
        statement: "Er waren 700 mensen aanwezig.",
        isTrue: true
      },
      {
        statement: "De politie begon meteen op te treden.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Drones boven militaire basis",
    topicNumber: 1,
    article: {
      title: "Drones boven militaire basis",
      summary: "Er zijn drones gezien boven een militaire basis. Minister Francken heeft maatregelen tegen drones."
    },
    vocabulary: {
      words: [
        {
          word: "militaire",
          definition: "van of over het leger",
          sentence: "De ___ basis is beveiligd.",
          answer: "militaire"
        },
        {
          word: "minister",
          definition: "een belangrijk persoon in de regering",
          sentence: "De ___ van Defensie heeft een plan.",
          answer: "minister"
        },
        {
          word: "maatregelen",
          definition: "acties of stappen die worden genomen",
          sentence: "De minister heeft ___ genomen tegen de drones.",
          answer: "maatregelen"
        },
        {
          word: "basis",
          definition: "een plek of locatie",
          sentence: "De militaire ___ is in België.",
          answer: "basis"
        },
        {
          word: "drones",
          definition: "kleine vliegende machines",
          sentence: "Er zijn ___ waargenomen boven de basis.",
          answer: "drones"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er zijn ___ waargenomen boven de basis.",
          answer: "drones"
        },
        {
          sentence: "De minister heeft ___ genomen tegen de drones.",
          answer: "maatregelen"
        },
        {
          sentence: "De ___ basis is beveiligd.",
          answer: "militaire"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar zijn drones waargenomen?",
        options: [
          "In een park",
          "Boven een militaire basis",
          "In de stad",
          "Bij een school"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet minister Francken?",
        options: [
          "Hij speelt thuis",
          "Hij heeft maatregelen genomen",
          "Hij reist naar de maan",
          "Hij leest een boek"
        ],
        correctAnswer: 2
      },
      {
        question: "Wanneer bespreekt de ministerraad het plan?",
        options: [
          "Morgen",
          "Over een week",
          "Vrijdag",
          "Volgende maand"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Drones zijn grote vliegtuigen.",
        isTrue: false
      },
      {
        statement: "Minister Francken heeft maatregelen genomen tegen drones.",
        isTrue: true
      },
      {
        statement: "De ministerraad bespreekt het plan op zaterdag.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Amper zon in oktober, maar wel bijna een record",
    topicNumber: 1,
    article: {
      title: "Amper zon in oktober, maar wel bijna een record",
      summary: "De voorbije maand oktober was zo somber dat er bijna een record in zat. Alleen oktober 1998 was nog zonlozer. Maar er is ook goed nieuws: woensdag wordt het gezellig warm."
    },
    vocabulary: {
      words: [
        {
          word: "somber",
          definition: "niet vrolijk, een beetje triest",
          sentence: "Het weer was erg ___ in oktober.",
          answer: "somber"
        },
        {
          word: "maand",
          definition: "een van de twaalf delen van een jaar",
          sentence: "October is een ___ waarin het vaak regent.",
          answer: "maand"
        },
        {
          word: "warm",
          definition: "niet koud, een hoge temperatuur",
          sentence: "De soep is nog ___ genoeg om te eten.",
          answer: "warm"
        },
        {
          word: "record",
          definition: "het hoogste of beste dat ooit is bereikt",
          sentence: "Hij brak het ___ voor de meeste goals.",
          answer: "record"
        },
        {
          word: "gezellig",
          definition: "gezellig en leuk",
          sentence: "We hadden een ___ avond met vrienden.",
          answer: "gezellig"
        }
      ],
      fillInBlanks: [
        {
          sentence: "October is een ___ waarin het vaak regent.",
          answer: "maand"
        },
        {
          sentence: "We hadden een ___ avond met vrienden.",
          answer: "gezellig"
        },
        {
          sentence: "De soep is nog ___ genoeg om te eten.",
          answer: "warm"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was bijzonder aan oktober dit jaar?",
        options: [
          "Het was heel zonnig",
          "Het was erg somber",
          "Het was heel warm",
          "Het was erg koud"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het goede nieuws in het artikel?",
        options: [
          "Het wordt koud",
          "Het wordt warm",
          "Het gaat sneeuwen",
          "Het wordt zonnig"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'record' in deze context?",
        options: [
          "Een soort muziek",
          "Een soort sport",
          "Een ongekende prestatie",
          "Een type weer"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Oktober dit jaar was erg zonnig.",
        isTrue: false
      },
      {
        statement: "Er is goed nieuws: woensdag wordt het warm.",
        isTrue: true
      },
      {
        statement: "Oktober 1998 was minder somber dan dit jaar.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
    topicNumber: 1,
    article: {
      title: "Verschillende mensen neergestoken op trein in Engeland, twee verdachten opgepakt",
      summary: "Zaterdagavond zijn meerdere mensen neergestoken in een trein die naar het Engelse Huntingdon reed. Dat meldt de Britse transportpolitie. Er zijn twee verdachten gearresteerd."
    },
    vocabulary: {
      words: [
        {
          word: "zaterdagavond",
          definition: "de avond van zaterdag",
          sentence: "De politie kreeg de melding op ___.",
          answer: "zaterdagavond"
        },
        {
          word: "neergestoken",
          definition: "gestoken met een scherp voorwerp, zoals een mes",
          sentence: "Verschillende mensen zijn ___ in de trein.",
          answer: "neergesteken"
        },
        {
          word: "trein",
          definition: "een voertuig dat rijdt op rails en mensen vervoert",
          sentence: "Het incident gebeurde in een ___ naar Huntingdon.",
          answer: "trein"
        },
        {
          word: "Engeland",
          definition: "een land dat deel uitmaakt van het Verenigd Koninkrijk",
          sentence: "Het incident vond plaats in ___.",
          answer: "Engeland"
        },
        {
          word: "verdachten",
          definition: "mensen die verdacht worden van een misdrijf",
          sentence: "Twee ___ zijn gearresteerd.",
          answer: "verdachten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het incident gebeurde in een ___ naar Huntingdon.",
          answer: "trein"
        },
        {
          sentence: "Twee ___ zijn gearresteerd.",
          answer: "verdachten"
        },
        {
          sentence: "Verschillende mensen zijn ___ in de trein.",
          answer: "neergesteken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het incident plaats?",
        options: [
          "In een trein",
          "In een bus",
          "Op een station",
          "In een auto"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoeveel verdachten zijn er aangehouden?",
        options: [
          "Twee",
          "Drie",
          "Vier",
          "Vijf"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de politie in dit bericht?",
        options: [
          "Zij hebben de verdachten gearresteerd",
          "Zij waren niet betrokken",
          "Zij hebben het incident veroorzaakt",
          "Zij hebben het slachtoffer geholpen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het incident vond plaats in een trein in Engeland.",
        isTrue: true
      },
      {
        statement: "Er zijn drie verdachten gearresteerd.",
        isTrue: false
      },
      {
        statement: "De politie heeft de verdachten nog niet gevonden.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
    topicNumber: 1,
    article: {
      title: "Waar zijn de Russische soldaten? Nieuwe tactiek dreigt Pokrovsk te doen vallen",
      summary: "Waar zijn de Russische soldaten? Dat is de vraag voor de Oekraïense verdediging in Pokrovsk. De strategisch belangrijke stad dreigt te vallen door een nieuwe Russische manier van oorlogvoeren."
    },
    vocabulary: {
      words: [
        {
          word: "dreigt",
          definition: "Lijkt waarschijnlijk te gebeuren, vaak iets negatiefs.",
          sentence: "De stad ___ in te nemen door de vijand.",
          answer: "dreigt"
        },
        {
          word: "zijn",
          definition: "Koppelwerkwoord dat iets beschrijft of iemand identificeert.",
          sentence: "Waar ___ de Russische soldaten? Ze zijn niet zichtbaar.",
          answer: "zijn"
        },
        {
          word: "strategisch",
          definition: "Betrekking hebbend op een plan of methode om een doel te bereiken.",
          sentence: "De ___ ligging maakt de stad belangrijk.",
          answer: "strategisch"
        },
        {
          word: "vraag",
          definition: "Een verzoek om informatie of een reactie.",
          sentence: "De belangrijkste ___ is waar de vijand zich bevindt.",
          answer: "vraag"
        },
        {
          word: "Russische",
          definition: "Betrekking hebbend op Rusland of de Russen.",
          sentence: "De ___ soldaten gebruiken een nieuwe tactiek.",
          answer: "Russische"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De stad ___ in te nemen door de vijand.",
          answer: "dreigt"
        },
        {
          sentence: "Waar ___ de Russische soldaten? Ze zijn niet zichtbaar.",
          answer: "zijn"
        },
        {
          sentence: "De ___ soldaten gebruiken een nieuwe tactiek.",
          answer: "Russische"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is de locatie van de Russische soldaten een vraag voor de Oekraïense verdediging?",
        options: [
          "Omdat het de verdediging verzwakt als de vijand onzichtbaar is.",
          "Omdat de Oekraïense soldaten niet weten waar te schieten.",
          "Omdat de Russen een nieuwe tactiek gebruiken die de Oekraïners verrast.",
          "Omdat de stad Pokrovsk dreigt te vallen door deze onzekerheid."
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de nieuwe tactiek van de Russische soldaten?",
        options: [
          "Ze vallen aan zonder zich te verstoppen.",
          "Ze gebruiken drones om de Oekraïense posities te lokaliseren.",
          "Ze concentreren hun aanval op één zwak punt in de verdediging.",
          "Ze vermijden directe confrontaties en vallen vanuit onverwachte hoeken aan."
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is het gevolg als Pokrovsk valt?",
        options: [
          "Het heeft geen strategisch belang, dus weinig effect.",
          "De Russen krijgen toegang tot belangrijke transportroutes.",
          "De Oekraïense moreel wordt onmiddellijk gebroken.",
          "De oorlog wordt meteen gewonnen door Rusland."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Pokrovsk is een stad met groot strategisch belang in de oorlog.",
        isTrue: true
      },
      {
        statement: "De Russische soldaten gebruiken een nieuwe tactiek, maar deze is al volledig bekend bij de Oekraïense verdediging.",
        isTrue: false
      },
      {
        statement: "Als Pokrovsk valt, heeft dat directe gevolgen voor het hele front.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Oekraïne wil Pokrovsk weer onder controle krijgen",
    topicNumber: 1,
    article: {
      title: "Oekraïne wil Pokrovsk weer onder controle krijgen",
      summary: "Oekraïne wil de stad Pokrovsk weer onder controle krijgen. Dit is een belangrijke ontwikkeling in de oorlog. Volg het nieuws voor updates."
    },
    vocabulary: {
      words: [
        {
          word: "Pokrovsk",
          definition: "Een stad in Oekraïne, nu belangrijk.",
          sentence: "De strijd om ___ is intens.",
          answer: "Pokrovsk"
        },
        {
          word: "ontwikkeling",
          definition: "Iets dat zich ontwikkelt of verandert, vaak vooruitgang.",
          sentence: "Deze ___ is positief voor Oekraïne.",
          answer: "ontwikkeling"
        },
        {
          word: "wil",
          definition: "Heeft als doel of verlangen.",
          sentence: "Hij ___ graag dat het stopt.",
          answer: "wil"
        },
        {
          word: "onder",
          definition: "Ondergeschikt aan of lager dan.",
          sentence: "Het valt ___ mijn verwachtingen.",
          answer: "onder"
        },
        {
          word: "weer",
          definition: "Opnieuw of opnieuw gebeuren.",
          sentence: "Hij probeerde het ___.",
          answer: "weer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De strijd om ___ is intens.",
          answer: "Pokrovsk"
        },
        {
          sentence: "Deze ___ is positief voor Oekraïne.",
          answer: "ontwikkeling"
        },
        {
          sentence: "Hij ___ graag dat het stopt.",
          answer: "wil"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wil Oekraïne bereiken in Pokrovsk?",
        options: [
          "Vrede onderhandelen",
          "Toerisme bevorderen",
          "Controle herwinnen",
          "Niets, het is al veilig"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is controle over Pokrovsk belangrijk?",
        options: [
          "Voor de economie",
          "Voor de bevolking",
          "Als symbool van macht",
          "Omdat het een mooie stad is"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe volg je het nieuws over Oekraïne?",
        options: [
          "Via sociale media",
          "Door de app DS Nieuws",
          "Alleen via de krant",
          "Via officiële kanalen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne heeft volledige controle over Pokrovsk.",
        isTrue: false
      },
      {
        statement: "De situatie in Oekraïne verandert snel.",
        isTrue: true
      },
      {
        statement: "Pokrovsk is de hoofdstad van Oekraïne.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Illegale rave vlak bij Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Illegale rave vlak bij Kluisbergen",
      summary: "In de Waalse gemeente Frasnes-lez-Anvaing, vlak over de taalgrens, is een illegale rave bezig met ongeveer 700 bezoekers. De deelnemers komen uit België, Nederland en Frankrijk en zijn van plan om tot zondagnamiddag door te gaan."
    },
    vocabulary: {
      words: [
        {
          word: "rave",
          definition: "Een groot feest met elektronische muziek, vaak illegaal",
          sentence: "De politie heeft de ___ stopgezet omdat er geen vergunning was.",
          answer: "rave"
        },
        {
          word: "bezoekers",
          definition: "Mensen die naar een evenement of plaats gaan",
          sentence: "De ___ van het festival waren erg enthousiast.",
          answer: "bezoekers"
        },
        {
          word: "gemeente",
          definition: "Een officieel gebied of gemeenschap met een eigen bestuur",
          sentence: "De ___ waar ik woon, heeft een nieuw park geopend.",
          answer: "gemeente"
        },
        {
          word: "deelnemers",
          definition: "Mensen die meedoen aan een activiteit of evenement",
          sentence: "Alle ___ van de wedstrijd krijgen een medaille.",
          answer: "deelnemers"
        },
        {
          word: "plan",
          definition: "Een idee of methode over wat je gaat doen",
          sentence: "Wat is jouw ___ voor het weekend?",
          answer: "plan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Alle ___ van de wedstrijd krijgen een medaille.",
          answer: "deelnemers"
        },
        {
          sentence: "De ___ waar ik woon, heeft een nieuw park geopend.",
          answer: "gemeente"
        },
        {
          sentence: "Wat is jouw ___ voor het weekend?",
          answer: "plan"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de reden dat de rave werd stopgezet?",
        options: [
          "Er waren te veel deelnemers",
          "Er was geen vergunning",
          "Het was te laat in de nacht",
          "De muziek was te luid"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe lang was de rave gepland te duren?",
        options: [
          "Tot zaterdagavond",
          "Tot zondagmiddag",
          "Tot maandagochtend",
          "Slechts een paar uur"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar vond de rave plaats?",
        options: [
          "In Nederland",
          "In een Belgische gemeente",
          "In een Frans dorp",
          "Op een Nederlands strand"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rave was illegaal omdat er geen vergunning was aangevraagd.",
        isTrue: true
      },
      {
        statement: "De rave had meer dan 1000 bezoekers.",
        isTrue: false
      },
      {
        statement: "De deelnemers waren alleen uit België afkomstig.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
    topicNumber: 1,
    article: {
      title: "Opnieuw drones waargenomen boven Kleine Brogel: Francken heeft tegenmaatregelen klaar",
      summary: "Ook vanavond zijn boven de militaire basis van Kleine-Brogel drones waargenomen. Vrijdag bespreekt de ministerraad het 'counterdronedossier' van Defensieminister Theo Francken (N-VA)."
    },
    vocabulary: {
      words: [
        {
          word: "ministerraad",
          definition: "De ministerraad is een vergadering van alle ministers van de regering.",
          sentence: "De ___ komt elke vrijdag bijeen om belangrijke zaken te bespreken.",
          answer: "ministerraad"
        },
        {
          word: "defensie",
          definition: "Defensie is de bescherming van een land tegen aanvallen of gevaren.",
          sentence: "Nederland investeert veel in zijn ___ om het land veilig te houden.",
          answer: "defensie"
        },
        {
          word: "bespreekt",
          definition: "Bespreekt betekent dat er over iets wordt gesproken of gediscussieerd.",
          sentence: "De manager ___ de nieuwe projecten met het team.",
          answer: "bespreekt"
        },
        {
          word: "tegenmaatregelen",
          definition: "Maatregelen zijn plannen of acties die genomen worden om een probleem op te lossen.",
          sentence: "De regering kondigt nieuwe ___ aan om de stijgende inflatie tegen te gaan.",
          answer: "tegenmaatregelen"
        },
        {
          word: "basis",
          definition: "Een basis is een fundamenteel onderdeel of de ondersteuning voor iets.",
          sentence: "De soldaten keerden terug naar hun ___ na de missie.",
          answer: "basis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Nederland investeert veel in zijn ___ om het land veilig te houden.",
          answer: "defensie"
        },
        {
          sentence: "De regering kondigt nieuwe ___ aan om de stijgende inflatie tegen te gaan.",
          answer: "tegenmaatregelen"
        },
        {
          sentence: "De manager ___ de nieuwe projecten met het team.",
          answer: "bespreekt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van de ministerraad in deze context?",
        options: [
          "Ze bespreken het 'counterdronedossier'.",
          "Ze organiseren demonstraties tegen drones.",
          "Ze bouwen nieuwe militaire bases.",
          "Ze geven gratis drones aan burgers."
        ],
        correctAnswer: 1
      },
      {
        question: "Waar is de militaire basis Kleine-Brogel gelegen?",
        options: [
          "In Nederland",
          "In België",
          "In Duitsland",
          "In Frankrijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'counterdronedossier'?",
        options: [
          "Een document over hoe drones te bestrijden",
          "Een plan om nieuwe drones te kopen",
          "Een verzoek om drones te verbieden",
          "Een handleiding voor drone-gebruikers"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Drones worden alleen voor militaire doeleinden gebruikt.",
        isTrue: false
      },
      {
        statement: "De ministerraad bespreekt het 'counterdronedossier' aanstaande vrijdag.",
        isTrue: true
      },
      {
        statement: "Theo Francken is de minister van Defensie in Nederland.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
      summary: "Zeventig procent van de producten die Testaankoop samen met buitenlandse consumentenorganisaties kocht bij webwinkels Shein en Temu, voldoet niet aan de Europese veiligheidsregels. Sommige goedkope sieraden en babyspeeltjes blijken zelfs gevaarlijk. “We hebben meteen alles offline gehaald”, reageren Shein en Temu."
    },
    vocabulary: {
      words: [
        {
          word: "producten",
          definition: "dingen die je kunt kopen en gebruiken",
          sentence: "Sommige ___ zijn niet veilig om te gebruiken.",
          answer: "producten"
        },
        {
          word: "Russische roulette",
          definition: "een gevaarlijk spel waar je veel risico neemt, genoemd naar een Russisch spel",
          sentence: "Kopen bij die winkels is als ___ spelen.",
          answer: "Russische roulette"
        },
        {
          word: "consumentenorganisaties",
          definition: "groepen die opkomen voor de belangen van kopers/gebruikers",
          sentence: "Samen met internationale ___ test Testaankoop producten.",
          answer: "consumentenorganisaties"
        },
        {
          word: "webwinkels",
          definition: "online winkels waar je producten kunt kopen via internet",
          sentence: "Sommige ___ verkopen producten die niet veilig zijn.",
          answer: "webwinkels"
        },
        {
          word: "babyspeeltjes",
          definition: "speelgoed speciaal gemaakt voor baby's",
          sentence: "Ook sommige ___ voldoen niet aan de veiligheidsnormen.",
          answer: "babyspeeltjes"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige ___ zijn niet veilig om te gebruiken.",
          answer: "producten"
        },
        {
          sentence: "Sommige ___ verkopen producten die niet veilig zijn.",
          answer: "webwinkels"
        },
        {
          sentence: "Kopen bij die winkels is als ___ spelen.",
          answer: "Russische roulette"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Testaankoop kopen bij Temu 'Russische roulette'?",
        options: [
          "Omdat het een leuk spel is",
          "Omdat het veel geld kost",
          "Omdat het een groot risico is voor de koper",
          "Omdat het een oude traditie is"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat deden Shein en Temu na de waarschuwing?",
        options: [
          "Ze sloten de webwinkels",
          "Ze haalden de producten offline",
          "Ze negeerden de waarschuwing",
          "Ze verhoogden de prijzen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van een product dat niet voldeed?",
        options: [
          "Een veiligheidshelm",
          "Een brandblusser",
          "Een goedkoop sieraad",
          "Een stevige tafel"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Testaankoop testte de producten alleen.",
        isTrue: false
      },
      {
        statement: "Shein en Temu haalden de producten offline na de waarschuwing.",
        isTrue: true
      },
      {
        statement: "Alle producten van Shein en Temu zijn veilig volgens Europese normen.",
        isTrue: false
      }
    ]
  }
];
