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
    title: "Japanse toerist overleden na val van Pantheon in Rome",
    topicNumber: 1,
    article: {
      title: "Japanse toerist overleden na val van Pantheon in Rome",
      summary: "Een 69-jarige toerist uit Japan is vrijdagavond van een muur van het Pantheon in de Italiaanse hoofdstad Rome gevallen. Hij overleed ter plaatse."
    },
    vocabulary: {
      words: [
        {
          word: "Pantheon",
          definition: "een oud, rond gebouw in Rome met een grote koepel",
          sentence: "Het ___ is een beroemd monument in Rome.",
          answer: "Pantheon"
        },
        {
          word: "hoofdstad",
          definition: "de belangrijkste stad van een land, waar de regering zit",
          sentence: "Amsterdam is de ___ van Nederland.",
          answer: "hoofdstad"
        },
        {
          word: "muur",
          definition: "een stevige wand van steen of hout, vaak van een gebouw",
          sentence: "Hij viel van de ___ en raakte gewond.",
          answer: "muur"
        },
        {
          word: "toerist",
          definition: "iemand die op vakantie is in een ander land",
          sentence: "De ___ nam veel foto's tijdens zijn reis.",
          answer: "toerist"
        },
        {
          word: "hoofdstad",
          definition: "de belangrijkste stad van een land, waar de regering zit",
          sentence: "Rome is de ___ van Italië.",
          answer: "hoofdstad"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ is een beroemd monument in Rome.",
          answer: "Pantheon"
        },
        {
          sentence: "De ___ nam veel foto's tijdens zijn reis.",
          answer: "toerist"
        },
        {
          sentence: "Rome is de ___ van Italië.",
          answer: "hoofdstad"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar bevindt het Pantheon zich?",
        options: [
          "Londen",
          "Rome",
          "Parijs",
          "Berlijn"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdstad van Italië?",
        options: [
          "Milaan",
          "Venetië",
          "Rome",
          "Napels"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'overleden'?",
        options: [
          "verhuisd",
          "gestorven",
          "verdwenen",
          "gewond"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De toerist overleed ter plaatse.",
        isTrue: true
      },
      {
        statement: "Het ongeluk vond plaats in Rome, Italië.",
        isTrue: true
      },
      {
        statement: "De toerist was afkomstig uit Duitsland.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
    topicNumber: 1,
    article: {
      title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de onderhandelingen over vrede. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "staakt-het-vuren",
          definition: "een afspraak om te stoppen met vechten voor een bepaalde tijd",
          sentence: "Het ___ is van kracht sinds gisteren.",
          answer: "staakt-het-vuren"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke oplossing of succes na moeilijkheden",
          sentence: "De onderhandelingen leiden tot een ___ in het conflict.",
          answer: "doorbraak"
        },
        {
          word: "controleren",
          definition: "in de gaten houden of bepalen wat er gebeurt",
          sentence: "Drones ___ het gebied om te zorgen voor veiligheid.",
          answer: "controleren"
        },
        {
          word: "ontwikkelingen",
          definition: "nieuwe dingen die gebeuren of veranderen",
          sentence: "Volg de laatste ___ in dit nieuwsbericht.",
          answer: "ontwikkelingen"
        },
        {
          word: "oorlog",
          definition: "een periode van gewapend conflict tussen landen of groepen",
          sentence: "De ___ in Gaza duurt al twee jaar.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De onderhandelingen leiden tot een ___ in het conflict.",
          answer: "doorbraak"
        },
        {
          sentence: "Het ___ is van kracht sinds gisteren.",
          answer: "staakt-het-vuren"
        },
        {
          sentence: "Volg de laatste ___ in dit nieuwsbericht.",
          answer: "ontwikkelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom worden drones ingezet in Gaza?",
        options: [
          "Om feestjes te filmen",
          "Om het staakt-het-vuren te controleren",
          "Om nieuwe speelgoed te testen",
          "Om de oorlog te beginnen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het resultaat van de onderhandelingen?",
        options: [
          "Er is geen resultaat",
          "Er is een nieuwe oorlog begonnen",
          "Er is een doorbraak bereikt",
          "Er is niets gebeurd"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe lang duurt de oorlog in Gaza al?",
        options: [
          "1 maand",
          "2 jaar",
          "5 jaar",
          "10 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Drones worden gebruikt om het staakt-het-vuren te controleren.",
        isTrue: true
      },
      {
        statement: "De oorlog in Gaza is net begonnen.",
        isTrue: false
      },
      {
        statement: "Er is een doorbraak in de vredesonderhandelingen.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
      summary: "De 68-jarige Catherine Connally is de nieuwe president van Ierland. Ze stond al lang aan de leiding in de peilingen. Haar rivaal Heather Humphreys van de regeringspartij Fine Gael heeft haar nederlaag toegegeven."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "het hoofd van een land, de leider",
          sentence: "De ___ van de Verenigde Staten is Joe Biden.",
          answer: "president"
        },
        {
          word: "rivaal",
          definition: "iemand die tegen je is, een tegenstander",
          sentence: "De twee atleten waren echte ___ in de race.",
          answer: "rivaal"
        },
        {
          word: "erkent",
          definition: "geeft toe of bevestigt",
          sentence: "Hij ___ dat hij een fout heeft gemaakt.",
          answer: "erkent"
        },
        {
          word: "nederlaag",
          definition: "het verliezen van een wedstrijd of strijd",
          sentence: "Na de zware ___ voelde het team zich down.",
          answer: "nederlaag"
        },
        {
          word: "regeringspartij",
          definition: "een politieke groep die aan de macht is",
          sentence: "De ___ heeft veel zetels in het parlement.",
          answer: "regeringspartij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ dat hij een fout heeft gemaakt.",
          answer: "erkent"
        },
        {
          sentence: "De twee atleten waren echte ___ in de race.",
          answer: "rivaal"
        },
        {
          sentence: "Na de zware ___ voelde het team zich down.",
          answer: "nederlaag"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'president' in de context van de tekst?",
        options: [
          "een soort dokter",
          "de leider van een land",
          "een type auto",
          "een beroemde filmster"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom erkende Heather Humphreys haar nederlaag volgens de tekst?",
        options: [
          "Omdat ze ziek was",
          "Omdat ze de verkiezing verloor",
          "Omdat ze een nieuwe baan kreeg",
          "Omdat ze de verkiezing won"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van Catherine Connally in Ierland?",
        options: [
          "Ze is een student",
          "Ze is de nieuwe president",
          "Ze is een beroemde zanger",
          "Ze is de leider van een klein dorp"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connally is de nieuwe president van Ierland.",
        isTrue: true
      },
      {
        statement: "Heather Humphreys won de verkiezingen.",
        isTrue: false
      },
      {
        statement: "Catherine Connally stond al lang aan de leiding in de peilingen.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
      summary: "Het KMI waarschuwt opnieuw voor slecht weer. De overheid heeft het nummer 1722 geactiveerd, dat mensen kunnen bellen bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "storm",
          definition: "een zware wind met regen of sneeuw",
          sentence: "Er komt een ___ met veel wind.",
          answer: "storm"
        },
        {
          word: "waarschuwt",
          definition: "waarschuwen, een waarschuwing geven",
          sentence: "Het KMI ___ voor gevaarlijk weer.",
          answer: "waarschuwt"
        },
        {
          word: "schade",
          definition: "schade, wat kapot of beschadigd is",
          sentence: "Door de storm was er veel ___ aan huizen.",
          answer: "schade"
        },
        {
          word: "overheid",
          definition: "de organisatie die een land of stad bestuurt",
          sentence: "De ___ heeft een noodnummer gemaakt.",
          answer: "overheid"
        },
        {
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut, het weerinstituut",
          sentence: "Het ___ waarschuwt voor slecht weer.",
          answer: "KMI"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ waarschuwt voor slecht weer.",
          answer: "KMI"
        },
        {
          sentence: "Er komt een ___ met veel wind.",
          answer: "storm"
        },
        {
          sentence: "De ___ heeft een noodnummer gemaakt.",
          answer: "overheid"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet het KMI bij slecht weer?",
        options: [
          "Ze geven een waarschuwing",
          "Ze sluiten alle scholen",
          "Ze organiseren een feest",
          "Ze zeggen niets"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarvoor is het nummer 1722 bedoeld?",
        options: [
          "Voor het bestellen van pizza",
          "Voor het melden van verkeersongelukken",
          "Voor hulp bij stormschade",
          "Alleen voor politie en brandweer"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar staat KMI voor?",
        options: [
          "Koninklijke Meteo Informatie",
          "Koninklijk Meteorologisch Instituut",
          "Koninklijke Meteorologische Instelling",
          "Koninklijke Weer Informatie"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI geeft alleen waarschuwingen voor sneeuw.",
        isTrue: false
      },
      {
        statement: "Het nummer 1722 is bedoeld voor alle soorten schade.",
        isTrue: true
      },
      {
        statement: "De overheid heeft het nummer 1722 geactiveerd voor stormschade.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
    topicNumber: 1,
    article: {
      title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
      summary: "Gent wil de Vlasmarkt asfalteren, al is niet iedereen daar gelukkig mee. Tegenstanders willen de kinderkopjes laten erkennen als erfgoed. Want niets is zo Gents als het vermogen om pittoresk struikelgevaar te romantiseren."
    },
    vocabulary: {
      words: [
        {
          word: "tegenstanders",
          definition: "mensen die het niet eens zijn met een plan of idee en ertegen zijn",
          sentence: "De ___ van het plan vrezen voor hogere kosten.",
          answer: "tegenstanders"
        },
        {
          word: "erfgoed",
          definition: "iets wat uit het verleden is overgebleven en dat we willen behouden voor de toekomst",
          sentence: "Het kasteel is een belangrijk stuk ___ voor ons land.",
          answer: "erfgoed"
        },
        {
          word: "pittoresk",
          definition: "mooi en schilderachtig, vaak op een ouderwetse of charmante manier",
          sentence: "Het dorpje was erg ___ met zijn kleine huisjes en bloemen.",
          answer: "pittoresk"
        },
        {
          word: "asfalteren",
          definition: "een laag asfalt aanbrengen, meestal om een weg te maken of te repareren",
          sentence: "De gemeente wil de straat ___ voor een betere ondergrond.",
          answer: "asfalteren"
        },
        {
          word: "romantiseren",
          definition: "iets mooier of romantischer voorstellen dan het in werkelijkheid is",
          sentence: "Soms ___ mensen het verleden te veel en vergeten de moeilijkheden.",
          answer: "romantiseren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het dorpje was erg ___ met zijn kleine huisjes en bloemen.",
          answer: "pittoresk"
        },
        {
          sentence: "Het kasteel is een belangrijk stuk ___ voor ons land.",
          answer: "erfgoed"
        },
        {
          sentence: "De ___ van het plan vrezen voor hogere kosten.",
          answer: "tegenstanders"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Gent de Vlasmarkt asfalteren?",
        options: [
          "Omdat kasseien gevaarlijk zijn voor fietsers",
          "Omdat kasseien te duur zijn in onderhoud",
          "Omdat asfalteren beter is voor rolstoelgebruikers",
          "Omdat de stad moderne ondergronden wil testen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk punt van de tegenstanders?",
        options: [
          "Kasseien zijn goedkoop in onderhoud",
          "Kasseien zijn een belangrijk stuk erfgoed",
          "Asfalteren is slecht voor het milieu",
          "Asfalteren is alleen nodig voor auto's"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe beschrijft de auteur de kasseien in Gent?",
        options: [
          "Als een gevaar dat vermeden moet worden",
          "Als een pittoresk en romantisch element",
          "Als een historisch element zonder nut",
          "Als een symbool van moderniteit"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gent wil de Vlasmarkt asfalteren omdat het een moderne stad wil zijn.",
        isTrue: true
      },
      {
        statement: "De tegenstanders willen de kasseien verwijderen om plaats te maken voor groene zones.",
        isTrue: false
      },
      {
        statement: "Een van de argumenten voor asfalteren is betere toegankelijkheid voor rolstoelgebruikers.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van de AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "verwacht",
          definition: "denkt dat iets gaat gebeuren",
          sentence: "We ___ veel bezoekers op het festival.",
          answer: "verwacht"
        },
        {
          word: "opent",
          definition: "begint te werken of beschikbaar wordt",
          sentence: "Het nieuwe winkelcentrum ___ volgende week.",
          answer: "opent"
        },
        {
          word: "stap",
          definition: "een actie of deel van een proces",
          sentence: "De eerste ___ in het plan is voltooid.",
          answer: "stap"
        },
        {
          word: "ring",
          definition: "een rondweg om een stad",
          sentence: "De Antwerpse ___ is erg druk tijdens de spits.",
          answer: "ring"
        },
        {
          word: "werken",
          definition: "activiteiten om iets te bouwen of repareren",
          sentence: "De ___ aan de nieuwe brug zijn bijna klaar.",
          answer: "werken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De Antwerpse ___ is erg druk tijdens de spits.",
          answer: "ring"
        },
        {
          sentence: "We ___ veel bezoekers op het festival.",
          answer: "verwacht"
        },
        {
          sentence: "De ___ aan de nieuwe brug zijn bijna klaar.",
          answer: "werken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is er veel verkeershinder op de Antwerpse Ring?",
        options: [
          "Omdat er een feest is",
          "Omdat er een nieuwe weg is geopend",
          "Omdat er veel sneeuw ligt",
          "Omdat er een voetbalwedstrijd is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de Oosterweelverbinding?",
        options: [
          "Een nieuwe tunnel",
          "Een nieuwe brug",
          "Een reeks van bouwwerken",
          "Een groot station"
        ],
        correctAnswer: 3
      },
      {
        question: "Wanneer werd het nieuwe stuk weg geopend?",
        options: [
          "Vorige week",
          "Afgelopen nacht",
          "Over een maand",
          "Vroeger"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Oosterweelwerken zijn volledig klaar.",
        isTrue: false
      },
      {
        statement: "Het nieuwe stuk weg ligt parallel aan het viaduct van Merksem.",
        isTrue: true
      },
      {
        statement: "De Antwerpse Ring is nu gesloten voor alle verkeer.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Japanse toerist overleden na val van Pantheon in Rome",
    topicNumber: 1,
    article: {
      title: "Japanse toerist overleden na val van Pantheon in Rome",
      summary: "Een toerist uit Japan viel van het Pantheon in Rome en overleed."
    },
    vocabulary: {
      words: [
        {
          word: "val",
          definition: "naar beneden gaan",
          sentence: "Hij maakte een ___ van het gebouw.",
          answer: "val"
        },
        {
          word: "overleden",
          definition: "niet meer leven",
          sentence: "Hij is ___ na het ongeluk.",
          answer: "overleden"
        },
        {
          word: "Pantheon",
          definition: "een oud gebouw",
          sentence: "Hij viel van het ___.",
          answer: "Pantheon"
        },
        {
          word: "Rome",
          definition: "een stad in Italië",
          sentence: "Het Pantheon staat in ___.",
          answer: "Rome"
        },
        {
          word: "toerist",
          definition: "iemand die op reis is",
          sentence: "De ___ komt uit Japan.",
          answer: "toerist"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ komt uit Japan.",
          answer: "toerist"
        },
        {
          sentence: "Hij maakte een ___ van het gebouw.",
          answer: "val"
        },
        {
          sentence: "Hij viel van het ___.",
          answer: "Pantheon"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar komt de toerist vandaan?",
        options: [
          "Italië",
          "Japan",
          "Frankrijk",
          "Duitsland"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het Pantheon?",
        options: [
          "een park",
          "een gebouw",
          "een rivier",
          "een dier"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat overkwam de toerist?",
        options: [
          "Hij at iets.",
          "Hij viel.",
          "Hij ging winkelen.",
          "Hij sliep."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De toerist komt uit Italië.",
        isTrue: false
      },
      {
        statement: "De man viel van het Pantheon.",
        isTrue: true
      },
      {
        statement: "Hij overleed in het ziekenhuis.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
    topicNumber: 1,
    article: {
      title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de onderhandelingen over vrede. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "controleren",
          definition: "kijken of iets goed gaat",
          sentence: "Zij ___ het staakt-het-vuren.",
          answer: "controleren"
        },
        {
          word: "onderhandelingen",
          definition: "gesprekken om tot een oplossing te komen",
          sentence: "De ___ zijn belangrijk voor vrede.",
          answer: "onderhandelingen"
        },
        {
          word: "staakt-het-vuren",
          definition: "stoppen met schieten",
          sentence: "Het ___ is belangrijk voor vrede.",
          answer: "staakt-het-vuren"
        },
        {
          word: "Amerikaanse",
          definition: "komt uit Amerika",
          sentence: "De ___ drone vliegt in de lucht.",
          answer: "Amerikaanse"
        },
        {
          word: "drones",
          definition: "vliegende machines zonder piloot",
          sentence: "De ___ zijn in de lucht.",
          answer: "drones"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ is belangrijk voor vrede.",
          answer: "staakt-het-vuren"
        },
        {
          sentence: "De ___ zijn in de lucht.",
          answer: "drones"
        },
        {
          sentence: "De ___ zijn belangrijk voor vrede.",
          answer: "onderhandelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat controleren de drones?",
        options: [
          "het weer",
          "de vrede",
          "het staakt-het-vuren",
          "de oorlog"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar vindt het staakt-het-vuren plaats?",
        options: [
          "in Gaza",
          "in Amerika",
          "in de lucht",
          "in een gebouw"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het resultaat van de onderhandelingen?",
        options: [
          "meer oorlog",
          "een doorbraak",
          "een drone",
          "geen resultaat"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Drones controleren het staakt-het-vuren in Gaza.",
        isTrue: true
      },
      {
        statement: "De onderhandelingen zijn in Amerika.",
        isTrue: false
      },
      {
        statement: "Er is een doorbraak in de onderhandelingen over vrede.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
      summary: "Catherine Connolly wordt de nieuwe president van Ierland. Haar tegenstander heeft de verkiezing verloren. Catherine Connolly is de nieuwe president."
    },
    vocabulary: {
      words: [
        {
          word: "wordt",
          definition: "veranderen naar een nieuwe staat",
          sentence: "Zij ___ de nieuwe leider.",
          answer: "wordt"
        },
        {
          word: "rivaal",
          definition: "iemand met wie je strijdt",
          sentence: "Hij was mijn ___ in de wedstrijd.",
          answer: "rivaal"
        },
        {
          word: "heeft",
          definition: "hebben, in bezit hebben",
          sentence: "Zij ___ een mooi huis.",
          answer: "heeft"
        },
        {
          word: "nederlaag",
          definition: "verliezen van een strijd",
          sentence: "Na de ___ gaf hij op.",
          answer: "nederlaag"
        },
        {
          word: "van",
          definition: "een voorzetsel dat bezit of herkomst aangeeft",
          sentence: "De hoofdstad ___ Nederland is Amsterdam.",
          answer: "van"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De hoofdstad ___ Nederland is Amsterdam.",
          answer: "van"
        },
        {
          sentence: "Zij ___ de nieuwe leider.",
          answer: "wordt"
        },
        {
          sentence: "Na de ___ gaf hij op.",
          answer: "nederlaag"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Catherine Connolly?",
        options: [
          "Een actrice",
          "De nieuwe president van Ierland",
          "Een Nederlandse politicus",
          "Een leraar"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'erkent'?",
        options: [
          "Verliest",
          "Geeft toe",
          "Wint",
          "Is blij"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'rivaal'?",
        options: [
          "Een vriend",
          "Iemand met wie je strijdt",
          "Een buurman",
          "Een soort voedsel"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connolly is de nieuwe president van Ierland.",
        isTrue: true
      },
      {
        statement: "Heather Humphreys heeft de verkiezing gewonnen.",
        isTrue: false
      },
      {
        statement: "Catherine Connolly wordt de nieuwe president.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Noodnummer 1722 voor storm- en waterschade",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade",
      summary: "Het KMI waarschuwt voor slecht weer. Het nummer 1722 is voor meldingen over storm en water."
    },
    vocabulary: {
      words: [
        {
          word: "nummer",
          definition: "een reeks cijfers",
          sentence: "Bel dit ___ als je hulp nodig hebt.",
          answer: "nummer"
        },
        {
          word: "storm",
          definition: "heel slecht weer met veel wind",
          sentence: "Er komt een ___ met harde wind.",
          answer: "storm"
        },
        {
          word: "water",
          definition: "de vloeistof die we drinken",
          sentence: "Na de regen staat er ___ op straat.",
          answer: "water"
        },
        {
          word: "KMI",
          definition: "het instituut dat het weer voorspelt",
          sentence: "Het ___ waarschuwt voor slecht weer.",
          answer: "KMI"
        },
        {
          word: "waarschuwt",
          definition: "zegt dat er gevaar is",
          sentence: "De politie ___ voor gevaar.",
          answer: "waarschuwt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er komt een ___ met harde wind.",
          answer: "storm"
        },
        {
          sentence: "Bel dit ___ als je hulp nodig hebt.",
          answer: "nummer"
        },
        {
          sentence: "De politie ___ voor gevaar.",
          answer: "waarschuwt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het woord 'storm'?",
        options: [
          "een soort dier",
          "heel slecht weer met veel wind",
          "een apparaat om mee te koken",
          "een grote groep mensen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar staat 'KMI' voor?",
        options: [
          "Koninklijk Meteorologisch Instituut",
          "Koninklijke Maaltijd Informatie",
          "Kleine Mobiele Installatie",
          "Korte Mooie Interventie"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom heeft de overheid 1722 geactiveerd?",
        options: [
          "omdat het een lekker recept is",
          "omdat ze willen dat mensen kunnen bellen bij schade door storm of water",
          "omdat ze een verjaardag vieren",
          "omdat ze een nieuwe wet maken"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI waarschuwt voor slecht weer, dus het is veilig om naar buiten te gaan.",
        isTrue: false
      },
      {
        statement: "Je kunt bellen naar 1722 als je schade hebt door storm of water.",
        isTrue: true
      },
      {
        statement: "De overheid heeft 1722 niet geactiveerd, dus je kunt niet bellen.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Vrouw belt 112 en wil iemand helpen",
    topicNumber: 1,
    article: {
      title: "Vrouw belt 112 en wil iemand helpen",
      summary: "Een vrouw belt 112 omdat ze een gewonde man wil helpen in het Zoniënwoud. Maar de hulpdienst spreekt alleen Nederlands. De vrouw is Frans-talig en verstaat het Nederlands niet goed. Dit is een probleem."
    },
    vocabulary: {
      words: [
        {
          word: "belt",
          definition: "telefoneert, maakt een telefoongesprek",
          sentence: "Ze ___ naar de hulpdienst.",
          answer: "belt"
        },
        {
          word: "probleem",
          definition: "een situatie die moeilijkheid of zorg veroorzaakt",
          sentence: "Het ___ is dat ze elkaar niet verstaan.",
          answer: "probleem"
        },
        {
          word: "Nederlands",
          definition: "de officiële taal van Nederland en Vlaanderen",
          sentence: "Spreekt u ook ___?",
          answer: "Nederlands"
        },
        {
          word: "vrouw",
          definition: "een mens van het vrouwelijk geslacht",
          sentence: "De ___ belt naar 112.",
          answer: "vrouw"
        },
        {
          word: "spreekt",
          definition: "praat, uit woorden",
          sentence: "Hij ___ alleen Nederlands.",
          answer: "spreekt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ belt naar 112.",
          answer: "vrouw"
        },
        {
          sentence: "Het ___ is dat ze elkaar niet verstaan.",
          answer: "probleem"
        },
        {
          sentence: "Spreekt u ook ___?",
          answer: "Nederlands"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belt de vrouw naar 112?",
        options: [
          "Om een pizza te bestellen",
          "Omdat ze een gewonde man wil helpen",
          "Om te klagen over het weer",
          "Om haar moeder te feliciteren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het probleem in de situatie?",
        options: [
          "De vrouw heeft honger",
          "De vrouw en de hulpdienst spreken verschillende talen",
          "De vrouw is verdwaald in de stad",
          "De man is niet gewond"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de oplossing volgens de tekst?",
        options: [
          "De vrouw moet Chinees leren",
          "De hulpdienst moet Engels spreken",
          "Iedereen moet Nederlands leren",
          "Er is geen oplossing genoemd"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw belt naar 112 omdat ze hulp nodig heeft.",
        isTrue: true
      },
      {
        statement: "De vrouw en de hulpdienst spreken beide vloeiend Nederlands.",
        isTrue: false
      },
      {
        statement: "De man is gewond in het Zoniënwoud.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van de AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "is",
          definition: "zijn (tegenwoordige tijd)",
          sentence: "Hij ___ mijn vriend.",
          answer: "is"
        },
        {
          word: "de",
          definition: "een bepaald lidwoord",
          sentence: "Ik zie ___ man.",
          answer: "de"
        },
        {
          word: "de",
          definition: "bepaald lidwoord",
          sentence: "Ik zie ___ man.",
          answer: "de"
        },
        {
          word: "op",
          definition: "boven iets",
          sentence: "De kat slaapt ___ de tafel.",
          answer: "op"
        },
        {
          word: "een",
          definition: "een (onbepaald)",
          sentence: "Ik heb ___ huis.",
          answer: "een"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ mijn vriend.",
          answer: "is"
        },
        {
          sentence: "Ik heb ___ huis.",
          answer: "een"
        },
        {
          sentence: "De kat slaapt ___ de tafel.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat dit artikel over?",
        options: [
          "Een nieuwe dierentuin",
          "Een nieuwe brug",
          "Een nieuwe weg",
          "Een nieuwe tunnel"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is de nieuwe weg?",
        options: [
          "In Brussel",
          "In Antwerpen",
          "In Gent",
          "In Brugge"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het effect van de nieuwe weg?",
        options: [
          "Minder verkeer",
          "Meer verkeer",
          "Minder files",
          "Meer files"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De nieuwe weg is in Antwerpen.",
        isTrue: true
      },
      {
        statement: "De nieuwe weg is in Brussel.",
        isTrue: false
      },
      {
        statement: "De nieuwe weg veroorzaakt meer verkeer.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Japanse toerist overleden na val van Pantheon in Rome",
    topicNumber: 1,
    article: {
      title: "Japanse toerist overleden na val van Pantheon in Rome",
      summary: "Een 69-jarige toerist uit Japan is vrijdagavond van een muur van het Pantheon in de Italiaanse hoofdstad Rome gevallen. Hij overleed ter plaatse."
    },
    vocabulary: {
      words: [
        {
          word: "val",
          definition: "naar beneden gaan door zwaartekracht; een ongeluk",
          sentence: "De ___ van de trap veroorzaakte zijn verwondingen.",
          answer: "val"
        },
        {
          word: "ter plaatse",
          definition: "op dezelfde locatie; niet elders",
          sentence: "Hij overleed ___, zonder naar een ziekenhuis te gaan.",
          answer: "ter plaatse"
        },
        {
          word: "hoofdstad",
          definition: "de belangrijkste stad van een land, vaak waar de regering zit",
          sentence: "Rome is de ___ van Italië.",
          answer: "hoofdstad"
        },
        {
          word: "toerist",
          definition: "iemand die een plaats bezoekt voor plezier of ontspanning",
          sentence: "De ___ nam deel aan een georganiseerde excursie.",
          answer: "toerist"
        },
        {
          word: "Rome",
          definition: "de hoofdstad van Italië, bekend om zijn geschiedenis",
          sentence: "___ trekt miljoenen toeristen per jaar.",
          answer: "Rome"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ trekt miljoenen toeristen per jaar.",
          answer: "Rome"
        },
        {
          sentence: "Hij overleed ___, zonder naar een ziekenhuis te gaan.",
          answer: "ter plaatse"
        },
        {
          sentence: "De ___ van de trap veroorzaakte zijn verwondingen.",
          answer: "val"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar bevindt het Pantheon zich?",
        options: [
          "Parijs",
          "Londen",
          "Rome",
          "Berlijn"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de nationaliteit van de overledene?",
        options: [
          "Italiaans",
          "Amerikaans",
          "Japans",
          "Duits"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe overleed de toerist?",
        options: [
          "Door een auto-ongeluk",
          "Door ziekte",
          "Door een val",
          "Door ouderdom"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De toerist overleed in een ziekenhuis.",
        isTrue: false
      },
      {
        statement: "Het incident vond plaats in Rome.",
        isTrue: true
      },
      {
        statement: "De toerist overleefde de val.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
    topicNumber: 1,
    article: {
      title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de onderhandelingen over vrede. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "controleren",
          definition: "toezicht houden op, monitoren",
          sentence: "Vredeshandhavers ___ de naleving van de overeenkomst.",
          answer: "controleren"
        },
        {
          word: "onderhandelingen",
          definition: "besprekingen met als doel een overeenkomst te bereiken",
          sentence: "De ___ verlopen moeizaam maar zijn veelbelovend.",
          answer: "onderhandelingen"
        },
        {
          word: "staakt-het-vuren",
          definition: "een (tijdelijke) stopzetting van gevechtshandelingen",
          sentence: "Een ___ is vaak de eerste stap naar vrede.",
          answer: "staakt-het-vuren"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke positieve ontwikkeling of oplossing",
          sentence: "Een diplomatieke ___ kan het conflict helpen oplossen.",
          answer: "doorbraak"
        },
        {
          word: "oorlog",
          definition: "georganiseerd gewapend conflict tussen staten of groepen",
          sentence: "De ___ heeft veel levens geëist en schade aangericht.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ heeft veel levens geëist en schade aangericht.",
          answer: "oorlog"
        },
        {
          sentence: "Vredeshandhavers ___ de naleving van de overeenkomst.",
          answer: "controleren"
        },
        {
          sentence: "De ___ verlopen moeizaam maar zijn veelbelovend.",
          answer: "onderhandelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofddoel van een staakt-het-vuren?",
        options: [
          "Het permanent beëindigen van alle gevechten",
          "Het tijdelijk stoppen van gevechten om humanitaire redenen",
          "Het vergroten van het grondgebied van een partij",
          "Het voorbereiden van een nieuwe offensief"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe worden drones vaak ingezet in conflictgebieden?",
        options: [
          "Alleen voor het verzamelen van inlichtingen",
          "Voor zowel verkenningsmissies als gerichte aanvallen",
          "Uitsluitend voor het afleveren van humanitaire hulp",
          "Voor het monitoren van wapenhandel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk aandachtspunt bij vredesonderhandelingen?",
        options: [
          "De garantie dat alle partijen zich aan de afspraken houden",
          "De keuze van de onderhandelaars hun kledingstijl",
          "De locatie waar de onderhandelingen plaatsvinden",
          "De keuze van de taal waarin onderhandeld wordt"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Een staakt-het-vuren is altijd permanent en wordt nooit geschonden.",
        isTrue: false
      },
      {
        statement: "Drones kunnen worden gebruikt om naleving van een staakt-het-vuren te monitoren.",
        isTrue: true
      },
      {
        statement: "Vredesonderhandelingen leiden nooit tot een doorbraak en zijn daarom tijdverspilling.",
        isTrue: false
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
      summary: "De 68-jarige Catherine Connolly is op weg naar het presidentschap van Ierland. Ze lag al ruim op kop in de peilingen en zaterdagnamiddag heeft haar rivaal in de presidentsverkiezingen, de 62-jarige Heather Humphreys van de centrumrechtse regeringspartij Fine Gael, haar verkiezingsnederlaag toegegeven."
    },
    vocabulary: {
      words: [
        {
          word: "rivaal",
          definition: "iemand die met een ander concurreert of strijdt om hetzelfde doel",
          sentence: "Zij waren eens elkaars grootste ___ in het bedrijfsleven.",
          answer: "rivaal"
        },
        {
          word: "nederlaag",
          definition: "het verliezen van een strijd of conflict",
          sentence: "De terugtrekking was een strategische beslissing, geen ___.",
          answer: "nederlaag"
        },
        {
          word: "peilingen",
          definition: "onderzoeken of enquêtes die de publieke opinie meten",
          sentence: "Volgens de laatste ___ staat de partij sterk.",
          answer: "peilingen"
        },
        {
          word: "verkiezingen",
          definition: "het proces waarbij mensen stemmen om leiders of vertegenwoordigers te kiezen",
          sentence: "De algemene ___ zijn over een maand.",
          answer: "verkiezingen"
        },
        {
          word: "presidentschap",
          definition: "het ambt of de functie van president",
          sentence: "Na de verkiezingen zal hij het ___ overnemen.",
          answer: "presidentschap"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De terugtrekking was een strategische beslissing, geen ___.",
          answer: "nederlaag"
        },
        {
          sentence: "Zij waren eens elkaars grootste ___ in het bedrijfsleven.",
          answer: "rivaal"
        },
        {
          sentence: "De algemene ___ zijn over een maand.",
          answer: "verkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als een politicus zijn nederlaag erkent?",
        options: [
          "Hij geeft toe dat hij verloren heeft.",
          "Hij viert zijn overwinning.",
          "Hij weigert het resultaat te accepteren.",
          "Hij negeert de uitslag volledig."
        ],
        correctAnswer: 1
      },
      {
        question: "Welke rol speelt Heather Humphreys in deze context?",
        options: [
          "Ze is de winnaar van de verkiezingen.",
          "Ze is de verliezende kandidaat.",
          "Ze is de zittende president van Ierland.",
          "Ze is een internationale waarnemer."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat geeft de uitslag van de peilingen aan over Catherine Connolly's kans?",
        options: [
          "Ze staat er zeer zwak voor.",
          "Ze heeft een kleine kans om te winnen.",
          "Ze heeft een zeer grote kans om te winnen.",
          "Ze heeft al gewonnen, de uitslag is definitief."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connolly is de enige kandidaat in de presidentsverkiezingen.",
        isTrue: false
      },
      {
        statement: "Heather Humphreys heeft haar nederlaag toegegeven tijdens de verkiezingen.",
        isTrue: true
      },
      {
        statement: "Catherine Connolly is de huidige president van Ierland.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
      summary: "Het KMI waarschuwt opnieuw voor slecht weer. De overheid heeft het nummer 1722 geactiveerd, dat mensen kunnen bellen bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "overheid",
          definition: "De overheid is de organisatie die een land of gebied bestuurt.",
          sentence: "De ___ heeft besloten om extra maatregelen te nemen.",
          answer: "overheid"
        },
        {
          word: "geactiveerd",
          definition: "In werking gesteld of geactiveerd.",
          sentence: "Het noodnummer werd ___ zodat mensen snel hulp kunnen vragen.",
          answer: "geactiveerd"
        },
        {
          word: "nummer",
          definition: "Een reeks cijfers die iets identificeert, zoals een telefoonnummer.",
          sentence: "Welk ___ moet ik bellen in geval van nood?",
          answer: "nummer"
        },
        {
          word: "bellen",
          definition: "Iemand telefonisch contacteren.",
          sentence: "Je kunt de politie ___ als je hulp nodig hebt.",
          answer: "bellen"
        },
        {
          word: "weer",
          definition: "De toestand van de atmosfeer, zoals regen of zonneschijn.",
          sentence: "Het ___ wordt morgen beter, volgens de voorspelling.",
          answer: "weer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ heeft besloten om extra maatregelen te nemen.",
          answer: "overheid"
        },
        {
          sentence: "Je kunt de politie ___ als je hulp nodig hebt.",
          answer: "bellen"
        },
        {
          sentence: "Het noodnummer werd ___ zodat mensen snel hulp kunnen vragen.",
          answer: "geactiveerd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'geactiveerd' in deze context?",
        options: [
          "Verwijderd",
          "Opgeschort",
          "In werking gesteld",
          "Verboden"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom heeft de overheid het nummer 1722 geactiveerd?",
        options: [
          "Om mensen te informeren over het weer",
          "Om financiële steun aan te bieden",
          "Om hulp te bieden bij stormschade",
          "Om feesten te organiseren"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Het weer wordt steeds onvoorspelbaarder",
          "Mensen moeten beter voorbereid zijn op stormen",
          "De overheid biedt een hulplijn voor stormschade",
          "Het KMI geeft altijd correcte waarschuwingen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI waarschuwt voor zware buien en veel wind, wat duidt op een storm.",
        isTrue: true
      },
      {
        statement: "Het nummer 1722 is bedoeld voor financiële donaties na een storm.",
        isTrue: false
      },
      {
        statement: "Mensen kunnen bellen naar 1722 voor hulp bij waterschade.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Franstalige vrouw belt hulpdiensten omdat ze gewonde man wil helpen in Zoniënwoud, maar mag enkel Nederlands spreken",
    topicNumber: 1,
    article: {
      title: "Franstalige vrouw belt hulpdiensten omdat ze gewonde man wil helpen in Zoniënwoud, maar mag enkel Nederlands spreken",
      summary: "Een Franstalige vrouw wilde afgelopen week een gewonde man in het Zoniënwoud helpen, maar toen ze de 112 belde, kreeg ze te horen dat ze enkel in het Nederlands gehoord kon worden. “Een schandalige situatie”, zegt de burgemeester van Watermaal-Bosvoorde."
    },
    vocabulary: {
      words: [
        {
          word: "schandalige",
          definition: "ergerlijk en onacceptabel",
          sentence: "De burgemeester noemde het een ___ situatie.",
          answer: "schandalige"
        },
        {
          word: "Zoniënwoud",
          definition: "een bosgebied in België",
          sentence: "Het incident gebeurde in het ___.",
          answer: "Zoniënwoud"
        },
        {
          word: "belde",
          definition: "telefonisch contact opnemen",
          sentence: "Ze ___ naar 112 voor assistentie.",
          answer: "belde"
        },
        {
          word: "hulpdiensten",
          definition: "organisaties die hulp bieden, zoals politie of ambulance",
          sentence: "Ze belde de ___ om assistentie te vragen.",
          answer: "hulpdiensten"
        },
        {
          word: "enkel",
          definition: "alleen, uitsluitend",
          sentence: "Ze mocht ___ Nederlands spreken, niet Frans.",
          answer: "enkel"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het incident gebeurde in het ___.",
          answer: "Zoniënwoud"
        },
        {
          sentence: "Ze belde de ___ om assistentie te vragen.",
          answer: "hulpdiensten"
        },
        {
          sentence: "Ze ___ naar 112 voor assistentie.",
          answer: "belde"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belde de vrouw naar de hulpdiensten?",
        options: [
          "Om een pizza te bestellen",
          "Om een gewonde man te helpen",
          "Om te klagen over het weer",
          "Om een taxi te bellen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de reactie van de burgemeester?",
        options: [
          "Hij prees de vrouw",
          "Hij noemde de situatie schandalig",
          "Hij bood aan om te vertalen",
          "Hij belde de politie onmiddellijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar bevond het incident zich?",
        options: [
          "In een supermarkt",
          "In het Zoniënwoud",
          "Aan het strand",
          "In een bibliotheek"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw sprak vloeiend Nederlands.",
        isTrue: false
      },
      {
        statement: "De hulpdiensten boden alleen ondersteuning in het Nederlands aan.",
        isTrue: true
      },
      {
        statement: "De burgemeester vond de situatie acceptabel.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van de AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "bypass",
          definition: "Een alternatieve route of omleiding, vaak tijdelijk.",
          sentence: "De nieuwe ___ helpt om het verkeer tijdens de werken te beheren.",
          answer: "bypass"
        },
        {
          word: "viaduct",
          definition: "Een brug of overbrugging voor verkeer, meestal boven een weg of water.",
          sentence: "Het nieuwe ___ verbindt twee delen van de ringweg.",
          answer: "viaduct"
        },
        {
          word: "Oosterweel",
          definition: "Verwijst naar de Oosterweelverbinding, een groot infrastructuurproject in Antwerpen.",
          sentence: "De ___ verbinding is een belangrijk onderdeel van het verkeersplan.",
          answer: "Oosterweel"
        },
        {
          word: "ring",
          definition: "Kort voor ringweg, een hoofdweg die rond een stad loopt.",
          sentence: "De Antwerpse ___ is vaak druk tijdens de spits.",
          answer: "ring"
        },
        {
          word: "belooft",
          definition: "Geeft een toezegging of verwachting aan, vaak met enige zekerheid.",
          sentence: "De nieuwe route ___ een vlotte doorstroom.",
          answer: "belooft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe route ___ een vlotte doorstroom.",
          answer: "belooft"
        },
        {
          sentence: "De nieuwe ___ helpt om het verkeer tijdens de werken te beheren.",
          answer: "bypass"
        },
        {
          sentence: "Het nieuwe ___ verbindt twee delen van de ringweg.",
          answer: "viaduct"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdlocatie van de nieuwe Oosterweel-bypass?",
        options: [
          "Antwerpen-Centrum",
          "Het Antwerpse havengebied",
          "De Antwerpse Ringweg",
          "Het viaduct van Merksem"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een direct gevolg van de opening van de bypass?",
        options: [
          "Volledige sluiting van de ringweg",
          "Minder verkeer in het centrum",
          "Verhoogde verkeersdoorstroom elders",
          "Enkel vertraging tijdens de spits"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk element is een onderdeel van de Oosterweelwerken?",
        options: [
          "De nieuwe Antwerpse metro",
          "De verbreding van de E19",
          "Het viaduct bij Merksem",
          "De heraanleg van het Sportpaleis"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Oosterweel-bypass is permanent en zal niet worden afgebroken na de werken.",
        isTrue: false
      },
      {
        statement: "De verkeershinder is vooral te verwachten tijdens de ochtendspits.",
        isTrue: true
      },
      {
        statement: "Het viaduct van Merksem is een onderdeel van de Oosterweelverbinding.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Japanse toerist overleden na val van Pantheon in Rome",
    topicNumber: 1,
    article: {
      title: "Japanse toerist overleden na val van Pantheon in Rome",
      summary: "Een 69-jarige toerist uit Japan is vrijdagavond van een muur van het Pantheon in de Italiaanse hoofdstad Rome gevallen. Hij overleed ter plaatse."
    },
    vocabulary: {
      words: [
        {
          word: "p",
          definition: "dit is een letter, deel van een woord",
          sentence: "Het woord 'muur' begint met een ___.",
          answer: "p"
        },
        {
          word: "val",
          definition: "naar beneden gaan, vallen",
          sentence: "Hij maakte een ___ van de muur.",
          answer: "val"
        },
        {
          word: "m",
          definition: "een letter van het alfabet",
          sentence: "De letter ___ is de dertiende letter.",
          answer: "m"
        },
        {
          word: "overleed",
          definition: "niet meer leven, dood gaan",
          sentence: "Helaas is hij ___ na het ongeluk.",
          answer: "overleed"
        },
        {
          word: "r",
          definition: "een letter in het alfabet",
          sentence: "De laatste letter van 'val' is de ___.",
          answer: "r"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De letter ___ is de dertiende letter.",
          answer: "m"
        },
        {
          sentence: "Hij maakte een ___ van de muur.",
          answer: "val"
        },
        {
          sentence: "De laatste letter van 'val' is de ___.",
          answer: "r"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar kwam de toerist vandaan?",
        options: [
          "Nederland",
          "Duitsland",
          "Japan",
          "Italië"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdstad van Italië?",
        options: [
          "Parijs",
          "Rome",
          "Amsterdam",
          "Berlijn"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurde er met de man?",
        options: [
          "Hij is gezond",
          "Hij is vertrokken",
          "Hij is overleden",
          "Hij is aan het werk"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De toerist kwam uit Nederland.",
        isTrue: false
      },
      {
        statement: "De man is overleden na de val.",
        isTrue: true
      },
      {
        statement: "Rome is de hoofdstad van Duitsland.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
    topicNumber: 1,
    article: {
      title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de onderhandelingen over vrede. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "drones",
          definition: "vliegende machines zonder piloot",
          sentence: "De ___ zijn in de lucht.",
          answer: "drones"
        },
        {
          word: "onderhandelingen",
          definition: "gesprekken om tot een oplossing te komen",
          sentence: "De ___ zijn belangrijk voor vrede.",
          answer: "onderhandelingen"
        },
        {
          word: "controleren",
          definition: "kijken of alles goed gaat",
          sentence: "Ze ___ het staakt-het-vuren.",
          answer: "controleren"
        },
        {
          word: "staakt-het-vuren",
          definition: "stoppen met schieten",
          sentence: "Het ___ is belangrijk voor vrede.",
          answer: "staakt-het-vuren"
        },
        {
          word: "doorbraak",
          definition: "een belangrijke stap vooruit",
          sentence: "Er is een ___ in de gesprekken.",
          answer: "doorbraak"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ zijn in de lucht.",
          answer: "drones"
        },
        {
          sentence: "Ze ___ het staakt-het-vuren.",
          answer: "controleren"
        },
        {
          sentence: "De ___ zijn belangrijk voor vrede.",
          answer: "onderhandelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar kijken de drones naar?",
        options: [
          "Naar de maan",
          "Naar het staakt-het-vuren",
          "Naar de vogels",
          "Naar de zon"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurt er na twee jaar oorlog?",
        options: [
          "Er is nog steeds oorlog",
          "Er is een doorbraak in de onderhandelingen",
          "Er is een groot feest",
          "Er is een nieuwe oorlog"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is Gaza?",
        options: [
          "In Europa",
          "In Azië",
          "In het Midden-Oosten",
          "In Afrika"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Amerikaanse drones controleren het staakt-het-vuren in Gaza.",
        isTrue: true
      },
      {
        statement: "Na twee jaar oorlog is er nog geen doorbraak in de onderhandelingen.",
        isTrue: false
      },
      {
        statement: "Gaza is een plaats in Amerika.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wordt president van Ierland, rivaal erkent nederlaag",
      summary: "De 68-jarige Catherine Connolly is de nieuwe president van Ierland. Ze kreeg veel stemmen en haar tegenstander Heather Humphreys heeft de verkiezing verloren."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "De leider van een land",
          sentence: "De ___ van het land is belangrijk.",
          answer: "president"
        },
        {
          word: "tegenstander",
          definition: "Iemand die tegen je is in een wedstrijd of verkiezing",
          sentence: "Zijn ___ was erg sterk, maar hij won toch.",
          answer: "tegenstander"
        },
        {
          word: "erkent",
          definition: "Toegeven of toegeven dat iets waar is",
          sentence: "Hij ___ dat hij fout zat.",
          answer: "erkent"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zijn ___ was erg sterk, maar hij won toch.",
          answer: "tegenstander"
        },
        {
          sentence: "Hij ___ dat hij fout zat.",
          answer: "erkent"
        },
        {
          sentence: "De ___ van het land is belangrijk.",
          answer: "president"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is de nieuwe president van Ierland?",
        options: [
          "Catherine Connolly",
          "Heather Humphreys",
          "Een andere persoon",
          "Nog iemand anders"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat deed Heather Humphreys na de verkiezingen?",
        options: [
          "Ze gaf haar nederlaag toe",
          "Ze werd de nieuwe president",
          "Ze verhuisde naar een ander land",
          "Ze stopte met politiek"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe voelde Catherine Connelly na de overwinning?",
        options: [
          "Ze was heel blij",
          "Ze was verdrietig",
          "Ze was boos",
          "Ze was verward"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connolly is de nieuwe president van Ierland.",
        isTrue: true
      },
      {
        statement: "Heather Humphreys won de verkiezingen.",
        isTrue: false
      },
      {
        statement: "Catherine Connolly is ouder dan Heather Humphreys.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
      summary: "Het KMI waarschuwt opnieuw voor slecht weer. De overheid heeft het nummer 1722 geactiveerd, dat mensen kunnen bellen bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "schade",
          definition: "Schade is wat kapot gaat, bijvoorbeeld door een ongeluk.",
          sentence: "Na de storm was er veel ___ aan huizen.",
          answer: "schade"
        },
        {
          word: "KMI",
          definition: "Het KMI is het Koninklijk Meteorologisch Instituut. Het geeft weerberichten.",
          sentence: "Het ___ waarschuwt voor slecht weer.",
          answer: "KMI"
        },
        {
          word: "bellen",
          definition: "Bellen is telefoneren, iemand opbellen.",
          sentence: "Je kunt ___ naar 1722 als je schade hebt.",
          answer: "bellen"
        },
        {
          word: "overheid",
          definition: "De overheid is de regering van een land. Ze maakt regels en beslist over veel dingen.",
          sentence: "De ___ heeft een noodnummer gemaakt.",
          answer: "overheid"
        },
        {
          word: "mensen",
          definition: "Mensen zijn personen, zoals jij en ik.",
          sentence: "Alle ___ moeten voorzichtig zijn bij storm.",
          answer: "mensen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Alle ___ moeten voorzichtig zijn bij storm.",
          answer: "mensen"
        },
        {
          sentence: "Het ___ waarschuwt voor slecht weer.",
          answer: "KMI"
        },
        {
          sentence: "Je kunt ___ naar 1722 als je schade hebt.",
          answer: "bellen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het nummer 1722?",
        options: [
          "Een gewoon telefoonnummer",
          "Een noodnummer voor stormschade",
          "Een nummer voor een pizza",
          "Een code voor de supermarkt"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is het nummer 1722 voor?",
        options: [
          "Voor feestjes en feestdagen",
          "Voor als je iemand mist",
          "Voor als je hulp nodig hebt bij storm of waterschade",
          "Voor als je een nieuwe auto wilt kopen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie heeft het nummer 1722 gemaakt?",
        options: [
          "De bakker",
          "De politie",
          "De brandweer",
          "De overheid"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI geeft weerberichten en waarschuwingen.",
        isTrue: true
      },
      {
        statement: "Je kunt 1722 bellen als je honger hebt.",
        isTrue: false
      },
      {
        statement: "De overheid heeft het nummer 1722 gemaakt voor stormschade.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Franstalige vrouw belt hulpdiensten om gewonde man te helpen",
    topicNumber: 1,
    article: {
      title: "Franstalige vrouw belt hulpdiensten om gewonde man te helpen",
      summary: "Een Franstalige vrouw wilde een gewonde man in het Zoniënwoud helpen, maar bij het bellen van 112 kreeg ze te horen dat ze alleen in het Nederlands geholpen kon worden. De burgemeester noemt dit een schandalige situatie."
    },
    vocabulary: {
      words: [
        {
          word: "Franstalige",
          definition: "iemand die Frans spreekt",
          sentence: "De ___ vrouw spreekt Frans.",
          answer: "Franstalige"
        },
        {
          word: "bellen",
          definition: "telefoneren, iemand opbellen",
          sentence: "Ze moest ___ om hulp te vragen.",
          answer: "bellen"
        },
        {
          word: "situatie",
          definition: "de toestand of omstandigheid op een bepaald moment",
          sentence: "De ___ was verwarrend voor de vrouw.",
          answer: "situatie"
        },
        {
          word: "Burgemeester",
          definition: "de leider van een stad of gemeente",
          sentence: "De ___ van de stad gaf een verklaring.",
          answer: "Burgemeester"
        },
        {
          word: "Nederlands",
          definition: "de taal die in Nederland en Vlaanderen gesproken wordt",
          sentence: "Ze moest ___ spreken, maar ze kon het niet.",
          answer: "Nederlands"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze moest ___ spreken, maar ze kon het niet.",
          answer: "Nederlands"
        },
        {
          sentence: "Ze moest ___ om hulp te vragen.",
          answer: "bellen"
        },
        {
          sentence: "De ___ van de stad gaf een verklaring.",
          answer: "Burgemeester"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belde de vrouw de hulpdiensten?",
        options: [
          "Om een feest te organiseren",
          "Om een gewonde man te helpen",
          "Om te oefenen met Nederlands",
          "Om de burgemeester te spreken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was het probleem met de taal?",
        options: [
          "Ze sprak te luid",
          "Ze sprak alleen Frans",
          "De telefoon was kapot",
          "Niemand wilde haar helpen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat vond de burgemeester van deze situatie?",
        options: [
          "Hij vond het leuk",
          "Hij vond het een schandaal",
          "Hij vond het een feest",
          "Hij vond het gewoon"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw kon de gewonde man niet helpen omdat ze hem niet kon vinden.",
        isTrue: false
      },
      {
        statement: "De hulpdiensten spraken alleen Nederlands, wat de vrouw niet kon.",
        isTrue: true
      },
      {
        statement: "De burgemeester was blij met de situatie.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van de AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "Bypass",
          definition: "Een weg die het verkeer om iets heen leidt.",
          sentence: "De ___ helpt om het verkeer sneller te laten gaan.",
          answer: "Bypass"
        },
        {
          word: "Viaduct",
          definition: "Een brug voor verkeer, vaak boven een weg.",
          sentence: "Het ___ is hoog en lang.",
          answer: "Viaduct"
        },
        {
          word: "Belooft",
          definition: "Iets wat wordt aangezegd of toegezegd.",
          sentence: "Hij ___ dat hij komt, maar hij is er nog niet.",
          answer: "Belooft"
        },
        {
          word: "Stap",
          definition: "Een actie of deel van een plan.",
          sentence: "De eerste ___ is het moeilijkst.",
          answer: "Stap"
        },
        {
          word: "Mee",
          definition: "Samen of erbij.",
          sentence: "Kom je ___ naar het feest?",
          answer: "Mee"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ is hoog en lang.",
          answer: "Viaduct"
        },
        {
          sentence: "De ___ helpt om het verkeer sneller te laten gaan.",
          answer: "Bypass"
        },
        {
          sentence: "De eerste ___ is het moeilijkst.",
          answer: "Stap"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is de nieuwe weg geopend?",
        options: [
          "In Brussel",
          "In Antwerpen",
          "Op de Antwerpse Ring",
          "Bij de AFAS-Dome"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een viaduct?",
        options: [
          "Een soort brug",
          "Een soort auto",
          "Een soort fiets",
          "Een soort gebouw"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'belooft' in deze tekst?",
        options: [
          "Het is een belofte",
          "Het is een feest",
          "Het is een soort",
          "Het is een type"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De nieuwe weg is in Antwerpen.",
        isTrue: true
      },
      {
        statement: "Het viaduct is een gebouw.",
        isTrue: false
      },
      {
        statement: "De nieuwe weg brengt verkeershinder mee.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Japanse toerist overleden na val van Pantheon in Rome",
    topicNumber: 1,
    article: {
      title: "Japanse toerist overleden na val van Pantheon in Rome",
      summary: "Een 69-jarige toerist uit Japan is vrijdagavond van een muur van het Pantheon in de Italiaanse hoofdstad Rome gevallen. Hij overleed ter plaatse."
    },
    vocabulary: {
      words: [
        {
          word: "is",
          definition: "zijn, de tegenwoordige tijd van zijn",
          sentence: "Hij ___ nu in het ziekenhuis.",
          answer: "is"
        },
        {
          word: "Pantheon",
          definition: "een oud gebouw in Rome, oorspronkelijk een tempel",
          sentence: "Het ___ is een populaire attractie voor bezoekers.",
          answer: "Pantheon"
        },
        {
          word: "muur",
          definition: "een stevige structuur van steen of hout die ruimtes scheidt",
          sentence: "Hij viel van de ___ en raakte gewond.",
          answer: "muur"
        },
        {
          word: "val",
          definition: "naar beneden gaan, vallen",
          sentence: "De ___ van de trap was pijnlijk.",
          answer: "val"
        },
        {
          word: "ter plaatse",
          definition: "op dezelfde plek waar iets gebeurt",
          sentence: "De politie arriveerde en handelde ___.",
          answer: "ter plaatse"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ is een populaire attractie voor bezoekers.",
          answer: "Pantheon"
        },
        {
          sentence: "Hij viel van de ___ en raakte gewond.",
          answer: "muur"
        },
        {
          sentence: "De ___ van de trap was pijnlijk.",
          answer: "val"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het incident plaats?",
        options: [
          "Rome",
          "Parijs",
          "Madrid",
          "Londen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het Pantheon?",
        options: [
          "Een historisch gebouw",
          "Een soort voedsel",
          "Een sportteam",
          "Een rivier"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was de toerist?",
        options: [
          "69 jaar",
          "70 jaar",
          "68 jaar",
          "71 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De toerist overleefde het incident.",
        isTrue: false
      },
      {
        statement: "Het incident vond plaats in Rome, Italië.",
        isTrue: true
      },
      {
        statement: "De toerist was afkomstig uit Japan.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
    topicNumber: 1,
    article: {
      title: "Amerikaanse drones controleren staakt-het-vuren in Gaza",
      summary: "Na twee jaar oorlog in Gaza lijkt er eindelijk een doorbraak te zijn in de onderhandelingen over vrede. Volg hier de laatste ontwikkelingen."
    },
    vocabulary: {
      words: [
        {
          word: "drones",
          definition: "Onbemande vliegtuigjes die op afstand bestuurd worden",
          sentence: "De Verenigde Staten gebruiken ___ om de situatie in Gaza te observeren.",
          answer: "drones"
        },
        {
          word: "controleren",
          definition: "Controleren of toezicht houden op iets",
          sentence: "Vredeshandhavers willen ___ of het staakt-het-vuren wordt nageleefd.",
          answer: "controleren"
        },
        {
          word: "staakt-het-vuren",
          definition: "Een afspraak om te stoppen met vechten voor een bepaalde tijd",
          sentence: "Een ___ is een belangrijke eerste stap naar vrede.",
          answer: "staakt-het-vuren"
        },
        {
          word: "doorbraak",
          definition: "Een belangrijke, plotselinge vooruitgang",
          sentence: "De vredesonderhandelingen hebben geleid tot een belangrijke ___ in het conflict.",
          answer: "doorbraak"
        },
        {
          word: "onderhandelingen",
          definition: "Gesprekken voeren om tot een overeenkomst te komen",
          sentence: "De ___ tussen de landen zijn nog steeds aan de gang.",
          answer: "onderhandelingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Vredeshandhavers willen ___ of het staakt-het-vuren wordt nageleefd.",
          answer: "controleren"
        },
        {
          sentence: "Een ___ is een belangrijke eerste stap naar vrede.",
          answer: "staakt-het-vuren"
        },
        {
          sentence: "De ___ tussen de landen zijn nog steeds aan de gang.",
          answer: "onderhandelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofddoel van de inzet van drones in Gaza volgens de tekst?",
        options: [
          "Het beëindigen van de oorlog",
          "Het controleren van het staakt-het-vuren",
          "Het voeren van aanvallen",
          "Het verzamelen van informatie voor toekomstige onderhandelingen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de huidige status van de vredesonderhandelingen volgens de tekst?",
        options: [
          "Ze zijn volledig vastgelopen",
          "Ze zijn onlangs succesvol afgerond",
          "Er is een belangrijke doorbraak",
          "Er is geen overeenkomst in zicht"
        ],
        correctAnswer: 3
      },
      {
        question: "Welke rol spelen de Verenigde Staten volgens de tekst in dit proces?",
        options: [
          "Ze leiden de vijandelijke aanvallen",
          "Ze observeren en controleren de situatie",
          "Ze bemiddelen tussen de partijen",
          "Ze verzorgen humanitaire hulp"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De onderhandelingen zijn volledig afgerond en hebben geleid tot een permanent staakt-het-vuren.",
        isTrue: false
      },
      {
        statement: "De Verenigde Staten maken gebruik van drones om de naleving van het staakt-het-vuren te controleren.",
        isTrue: true
      },
      {
        statement: "Het conflict in Gaza is volledig opgelost door de inzet van internationale drones.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Als het gaat om defensie, is Europa bereid eigen regels wat op te rekken",
    topicNumber: 1,
    article: {
      title: "Als het gaat om defensie, is Europa bereid eigen regels wat op te rekken",
      summary: "Europa haalt de hinderpalen voor defensie-investeringen één voor één weg. Op de Europese top stond behalve de Russische tegoeden ook het pad om een turbo te zetten op de militaire paraatheid centraal."
    },
    vocabulary: {
      words: [
        {
          word: "defensie",
          definition: "het geheel van middelen en mensen die een land beschermen tegen aanvallen van buitenaf",
          sentence: "Het ministerie van ___ is verantwoordelijk voor de veiligheid van het land.",
          answer: "defensie"
        },
        {
          word: "Europa",
          definition: "het werelddeel dat ten westen van Azië en ten noorden van Afrika ligt, en waaronder de Europese Unie valt",
          sentence: "___ is een continent met veel verschillende culturen en talen.",
          answer: "Europa"
        },
        {
          word: "regels",
          definition: "afspraken of voorschriften die zeggen hoe iets moet worden gedaan",
          sentence: "Volgens de ___ van dit spel moet je eerst gooien met de dobbelsteen.",
          answer: "regels"
        },
        {
          word: "hinderpalen",
          definition: "problemen of obstakels die iets moeilijk of onmogelijk maken",
          sentence: "Er waren te veel ___ om het project op tijd af te ronden.",
          answer: "hinderpalen"
        },
        {
          word: "investeringen",
          definition: "geld dat in een project of activiteit wordt gestopt om het te laten groeien of verbeteren",
          sentence: "De ___ in nieuwe technologie bracht het bedrijf veel winst.",
          answer: "investeringen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er waren te veel ___ om het project op tijd af te ronden.",
          answer: "hinderpalen"
        },
        {
          sentence: "De ___ in nieuwe technologie bracht het bedrijf veel winst.",
          answer: "investeringen"
        },
        {
          sentence: "Het ministerie van ___ is verantwoordelijk voor de veiligheid van het land.",
          answer: "defensie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'defensie' in deze context?",
        options: [
          "sport",
          "bescherming",
          "aanval",
          "onderhandeling"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'hindernis'?",
        options: [
          "een soort voedsel",
          "een obstakel",
          "een feestdag",
          "een snelweg"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar staat 'Europa' voor in deze tekst?",
        options: [
          "een planeet",
          "een automerk",
          "een continent",
          "een rivier"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Europa wil meer investeren in defensie.",
        isTrue: true
      },
      {
        statement: "Nederland heeft de meeste hinderpalen voor defensie.",
        isTrue: false
      },
      {
        statement: "De Europese top besprak alleen Russische tegoeden.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
      summary: "Het KMI waarschuwt opnieuw voor slecht weer. De overheid heeft het nummer 1722 geactiveerd, dat mensen kunnen bellen bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "storm",
          definition: "Hevig weer met veel wind en regen",
          sentence: "De ___ veroorzaakte schade aan daken.",
          answer: "storm"
        },
        {
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut; een organisatie die het weer voorspelt",
          sentence: "Het ___ geeft weerwaarschuwingen.",
          answer: "KMI"
        },
        {
          word: "schade",
          definition: "Beschadiging; iets dat kapot is gemaakt",
          sentence: "De storm veroorzaakte veel ___ aan huizen.",
          answer: "schade"
        },
        {
          word: "geactiveerd",
          definition: "In werking gesteld; actief gemaakt",
          sentence: "Het noodnummer is ___ na het stormbericht.",
          answer: "geactiveerd"
        },
        {
          word: "bellen",
          definition: "Telefoneren; iemand opbellen",
          sentence: "Mensen kunnen ___ naar 1722 voor hulp.",
          answer: "bellen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ geeft weerwaarschuwingen.",
          answer: "KMI"
        },
        {
          sentence: "De ___ veroorzaakte schade aan daken.",
          answer: "storm"
        },
        {
          sentence: "Het noodnummer is ___ na het stormbericht.",
          answer: "geactiveerd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het KMI?",
        options: [
          "Een sportclub",
          "Een weervoorspeller",
          "Een soort voedsel",
          "Een type auto"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'geactiveerd' in deze context?",
        options: [
          "Verwijderd",
          "Vernietigd",
          "In werking gesteld",
          "Vergeten"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is het belangrijk om 1722 te bellen bij waterschade?",
        options: [
          "Om een pizza te bestellen",
          "Om professionele hulp te krijgen",
          "Om te klagen over buren",
          "Om de storm te stoppen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI geeft alleen waarschuwingen voor zonneschijn.",
        isTrue: false
      },
      {
        statement: "1722 is een telefoonnummer voor noodhulp bij storm of waterschade.",
        isTrue: true
      },
      {
        statement: "De overheid heeft het nummer 1722 afgeschaft.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Franstalige vrouw belt 112 in Zoniënwoud, maar mag enkel Nederlands spreken",
    topicNumber: 1,
    article: {
      title: "Franstalige vrouw belt 112 in Zoniënwoud, maar mag enkel Nederlands spreken",
      summary: "Een Franstalige vrouw wilde een gewonde man in het Zoniënwoud helpen, maar kreeg te horen dat ze enkel in het Nederlands geholpen kon worden. Dit gebeurde nadat ze 112 belde. De burgemeester van Watermaal-Bosvoorde noemt het een schandalige situatie."
    },
    vocabulary: {
      words: [
        {
          word: "wilde",
          definition: "de verleden tijd van 'willen', wat betekent dat iemand iets graag wil doen",
          sentence: "De vrouw ___ de gewonde man helpen, maar ze kon niet.",
          answer: "wilde"
        },
        {
          word: "enkel",
          definition: "alleen maar, niets meer dan",
          sentence: "Ze mocht ___ Nederlands spreken.",
          answer: "enkel"
        },
        {
          word: "Nederlands",
          definition: "de officiële taal van Nederland en Vlaanderen, ook bekend als Hollands",
          sentence: "Ze kreeg geen hulp omdat ze geen ___ sprak.",
          answer: "Nederlands"
        },
        {
          word: "geholpen",
          definition: "het voltooid deelwoord van 'helpen', wat betekent dat iemand assistentie gaf",
          sentence: "De vrouw had graag ___ willen worden, maar het mocht niet.",
          answer: "geholpen"
        },
        {
          word: "Franstalige",
          definition: "iemand die Frans spreekt als moedertaal",
          sentence: "De ___ vrouw kon zich niet in het Nederlands uitdrukken.",
          answer: "Franstalige"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze mocht ___ Nederlands spreken.",
          answer: "enkel"
        },
        {
          sentence: "De ___ vrouw kon zich niet in het Nederlands uitdrukken.",
          answer: "Franstalige"
        },
        {
          sentence: "De vrouw had graag ___ willen worden, maar het mocht niet.",
          answer: "geholpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wilde de Franstalige vrouw doen in het Zoniënwoud?",
        options: [
          "Een wandeling maken",
          "Een gewonde man helpen",
          "De burgemeester bellen",
          "Frans spreken"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemde de burgemeester de situatie schandalig?",
        options: [
          "Omdat de vrouw niet mocht wandelen",
          "Omdat de vrouw in het Frans mocht praten",
          "Omdat de hulpdienst alleen Nederlands accepteert",
          "Omdat de vrouw niet wilde helpen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat was het resultaat van de telefoontje naar 112?",
        options: [
          "De vrouw kreeg hulp in het Frans",
          "De vrouw kreeg geen hulp",
          "De vrouw werd naar de burgemeester doorverbonden",
          "De vrouw kreeg een beloning"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Franstalige vrouw kon de gewonde man niet helpen omdat ze geen Nederlands sprak.",
        isTrue: true
      },
      {
        statement: "De burgemeester van Watermaal-Bosvoorde vond dat de hulpdienst de vrouw in het Frans moest helpen.",
        isTrue: false
      },
      {
        statement: "De vrouw belde 112 om iemand anders te helpen, niet voor zichzelf.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Oosterweel-verbinding opent in Antwerpen: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-verbinding opent in Antwerpen: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is een nieuw stuk snelweg geopend. Dit is een belangrijke stap in de Oosterweelwerken. Er wordt veel verkeershinder verwacht."
    },
    vocabulary: {
      words: [
        {
          word: "Ring",
          definition: "een grote weg die rond een stad loopt",
          sentence: "De ___ van Antwerpen is erg druk.",
          answer: "Ring"
        },
        {
          word: "snelweg",
          definition: "een brede weg waarop snel gereden mag worden",
          sentence: "De nieuwe ___ is nu open voor het verkeer.",
          answer: "snelweg"
        },
        {
          word: "Antwerpen",
          definition: "een grote stad in België",
          sentence: "___ is een stad met veel geschiedenis.",
          answer: "Antwerpen"
        },
        {
          word: "verkeershinder",
          definition: "problemen die het verkeer veroorzaakt, zoals files of vertragingen",
          sentence: "Door de wegwerkzaamheden is er veel ___.",
          answer: "verkeershinder"
        },
        {
          word: "Oosterweelwerken",
          definition: "een groot bouwproject in Antwerpen met wegen en tunnels",
          sentence: "De ___ zijn bijna klaar.",
          answer: "Oosterweelwerken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een stad met veel geschiedenis.",
          answer: "Antwerpen"
        },
        {
          sentence: "De nieuwe ___ is nu open voor het verkeer.",
          answer: "snelweg"
        },
        {
          sentence: "De ___ van Antwerpen is erg druk.",
          answer: "Ring"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Oosterweelverbinding?",
        options: [
          "Een nieuwe fietspad",
          "Een grote weg",
          "Een treinstation",
          "Een voetbalstadion"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar bevindt de nieuwe snelweg zich?",
        options: [
          "In Brussel",
          "In Antwerpen",
          "In Gent",
          "In Brussel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het gevolg van de opening van de nieuwe weg?",
        options: [
          "Minder verkeer",
          "Meer verkeershinder",
          "Minder files",
          "Geen effect"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De nieuwe snelweg is aangelegd in Brussel.",
        isTrue: false
      },
      {
        statement: "De Oosterweelwerken zijn een groot bouwproject in Antwerpen.",
        isTrue: true
      },
      {
        statement: "De nieuwe weg veroorzaakt minder verkeer.",
        isTrue: false
      }
    ]
  }
];
