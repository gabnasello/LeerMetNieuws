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
    title: "Wij zijn nog altijd boos: tienduizenden mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
    topicNumber: 1,
    article: {
      title: "Wij zijn nog altijd boos: tienduizend mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
      summary: "Tienduizenden mensen hebben in Valencia deelgenomen aan een protestmars, een jaar na de dodelijke overstromingen in de regio."
    },
    vocabulary: {
      words: [
        {
          word: "zijn",
          definition: "het werkwoord dat een staat of eigenschap aangeeft",
          sentence: "Ik ___ erg moe vandaag.",
          answer: "ben"
        },
        {
          word: "wij",
          definition: "verwijst naar de mensen die aan het woord zijn, vaak in een groep",
          sentence: "___ gaan samen naar het park.",
          answer: "Wij"
        },
        {
          word: "Valencia",
          definition: "een stad in Spanje, bekend om zijn geschiedenis",
          sentence: "___ is een mooie stad in Spanje.",
          answer: "Valencia"
        },
        {
          word: "nog",
          definition: "tot nu toe of tot dit moment",
          sentence: "Heb je ___ niet gegeten?",
          answer: "al"
        },
        {
          word: "altijd",
          definition: "op elk moment, zonder uitzondering",
          sentence: "Hij is ___ op tijd voor meetings.",
          answer: "altijd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik ___ erg moe vandaag.",
          answer: "ben"
        },
        {
          sentence: "Hij is ___ op tijd voor meetings.",
          answer: "altijd"
        },
        {
          sentence: "___ is een mooie stad in Spanje.",
          answer: "Valencia"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de protestmars plaats?",
        options: [
          "Amsterdam",
          "Parijs",
          "Valencia",
          "Brussel"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat was de reden voor de protestmars?",
        options: [
          "Tegen de regering",
          "Tegen klimaatverandering",
          "Herdenking van overstromingen",
          "Voor meer geld"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel mensen deden mee aan de protestmars?",
        options: [
          "Honderden",
          "Duizenden",
          "Tienduizenden",
          "Miljoenen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De protestmars vond plaats in Amsterdam.",
        isTrue: false
      },
      {
        statement: "De overstromingen in Valencia vonden een jaar geleden plaats.",
        isTrue: true
      },
      {
        statement: "Tienduizenden mensen protesteerden tegen de overstromingen.",
        isTrue: false
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
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut, zij geven weersverwachtingen.",
          sentence: "Het ___ waarschuwt voor zwaar weer.",
          answer: "KMI"
        },
        {
          word: "schade",
          definition: "Schade is wat kapot of beschadigd is.",
          sentence: "Na de ___ moesten we herstellen.",
          answer: "schade"
        },
        {
          word: "bellen",
          definition: "Telefoneren, iemand opbellen.",
          sentence: "Je kunt ___ naar 1722 voor hulp.",
          answer: "bellen"
        },
        {
          word: "storm",
          definition: "Hevig weer met veel wind en regen.",
          sentence: "De ___ veroorzaakte veel schade.",
          answer: "storm"
        },
        {
          word: "nummer",
          definition: "Een reeks cijfers die iets identificeert, zoals een telefoonnummer.",
          sentence: "Welk ___ moet ik bellen bij nood?",
          answer: "nummer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ veroorzaakte veel schade.",
          answer: "storm"
        },
        {
          sentence: "Na de ___ moesten we herstellen.",
          answer: "schade"
        },
        {
          sentence: "Het ___ waarschuwt voor zwaar weer.",
          answer: "KMI"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom heeft de overheid nummer 1722 geactiveerd?",
        options: [
          "Voor het melden van leuke nieuwtjes",
          "Voor het aanvragen van een paspoort",
          "Voor hulp bij storm- en waterschade",
          "Voor het bestellen van eten"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doet het KMI tijdens slecht weer?",
        options: [
          "Ze sluiten hun deuren en blijven thuis",
          "Ze geven waarschuwingen en advies aan het publiek",
          "Ze organiseren een buurtfeest in de regen",
          "Ze stoppen met werken en wachten op de zon"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van een storm?",
        options: [
          "Mensen krijgen een nieuwe auto van de gemeente",
          "Er vallen geen blaadjes meer van bomen",
          "Schade aan huizen en wegen door wind en water",
          "Iedereen krijgt een gratis ticket naar de zon"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI waarschuwt alleen voor zonnig weer.",
        isTrue: false
      },
      {
        statement: "Nummer 1722 is een telefoonnummer voor vragen over dieren in de tuin.",
        isTrue: false
      },
      {
        statement: "Je kunt bellen naar 1722 als je schade hebt door een storm.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Franstalige vrouw belt hulpdiensten voor gewonde man in Zoniënwoud maar mag enkel Nederlands spreken",
    topicNumber: 1,
    article: {
      title: "Franstalige vrouw belt hulpdiensten voor gewonde man in Zoniënwoud maar mag enkel Nederlands spreken",
      summary: "Een Franstalige vrouw wilde afgelopen week een gewonde man in het Zoniënwoud helpen, maar toen ze de 112 belde, kreeg ze te horen dat ze enkel in het Nederlands geholpen kon worden. De burgemeester van Watermaal-Bosvoorde noemt dit een schandalige situatie."
    },
    vocabulary: {
      words: [
        {
          word: "schandalige",
          definition: "iets wat erg oneerlijk of onacceptabel is",
          sentence: "De situatie was ___ volgens de burgemeester.",
          answer: "schandalige"
        },
        {
          word: "belde",
          definition: "telefonisch contact gemaakt, verleden tijd van bellen",
          sentence: "Ze ___ 112 om hulp te vragen.",
          answer: "belde"
        },
        {
          word: "hulpdiensten",
          definition: "organisaties die hulp bieden, zoals politie of brandweer",
          sentence: "Mensen bellen de ___ wanneer er een probleem is.",
          answer: "hulpdiensten"
        },
        {
          word: "Nederlands",
          definition: "de taal die in Nederland en België gesproken wordt",
          sentence: "Ze spraken ___ met elkaar.",
          answer: "Nederlands"
        },
        {
          word: "gewonde",
          definition: "iemand die pijn heeft door een verwonding",
          sentence: "De man was een ___ na zijn val.",
          answer: "gewonde"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze spraken ___ met elkaar.",
          answer: "Nederlands"
        },
        {
          sentence: "Ze ___ 112 om hulp te vragen.",
          answer: "belde"
        },
        {
          sentence: "De situatie was ___ volgens de burgemeester.",
          answer: "schandalige"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belde de vrouw naar de hulpdiensten?",
        options: [
          "Om een taxi te bestellen",
          "Om te oefenen met Nederlands",
          "Omdat ze een gewonde man wilde helpen",
          "Om te klagen over het weer"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de reactie van de burgemeester?",
        options: [
          "Hij vindt het geweldig",
          "Hij zegt dat het een schande is",
          "Hij wil meer bomen planten",
          "Hij vindt het niet belangrijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was het probleem met de taal?",
        options: [
          "De vrouw sprak te luid",
          "De hulpdienst sprak alleen Nederlands",
          "De vrouw sprak alleen Frans",
          "De hulpdienst was gesloten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw kon de gewonde man niet helpen omdat ze geen Nederlands sprak.",
        isTrue: false
      },
      {
        statement: "De burgemeester vindt de situatie onacceptabel.",
        isTrue: true
      },
      {
        statement: "De hulpdienst weigerde de vrouw te helpen in het Frans.",
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
          word: "belooft",
          definition: "zegt of toezegt dat iets gaat gebeuren",
          sentence: "De gemeente ___ een nieuwe speeltuin aan te leggen.",
          answer: "belooft"
        },
        {
          word: "ring",
          definition: "een rondweg om een stad heen",
          sentence: "De Antwerpse ___ ligt rond de stad.",
          answer: "ring"
        },
        {
          word: "tijdelijk",
          definition: "niet voor altijd, maar voor een tijdje",
          sentence: "Dit is een ___ oplossing tot de nieuwe brug klaar is.",
          answer: "tijdelijk"
        },
        {
          word: "op",
          definition: "niet dicht, toegankelijk",
          sentence: "De winkel is ___ van 9 tot 18 uur.",
          answer: "open"
        },
        {
          word: "stap",
          definition: "een actie die je zet, of een deel van een plan",
          sentence: "De volgende ___ in het plan is de bouw van de tunnel.",
          answer: "stap"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Dit is een ___ oplossing tot de nieuwe brug klaar is.",
          answer: "tijdelijk"
        },
        {
          sentence: "De Antwerpse ___ ligt rond de stad.",
          answer: "ring"
        },
        {
          sentence: "De volgende ___ in het plan is de bouw van de tunnel.",
          answer: "stap"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'tijdelijk' in deze context?",
        options: [
          "voor altijd",
          "voor een korte tijd",
          "gemaakt van goud",
          "heel groot"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'verkeershinder'?",
        options: [
          "een soort auto",
          "een weg die niet vlak is",
          "problemen in het verkeer",
          "een hele snelle trein"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de nieuwe weg vooral om?",
        options: [
          "minder verkeershinder",
          "meer auto's in de stad",
          "meer verkeershinder",
          "een nieuwe stad"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De nieuwe weg in Antwerpen zorgt voor meer verkeershinder.",
        isTrue: true
      },
      {
        statement: "De ringweg in Antwerpen is gesloten voor altijd.",
        isTrue: false
      },
      {
        statement: "De aanleg van de Oosterweelverbinding gebeurt in stappen.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Man geeft veel geld aan Trump",
    topicNumber: 1,
    article: {
      title: "Man geeft veel geld aan Trump",
      summary: "Een rijke man geeft veel geld aan Trump. Trump gebruikt het geld voor zijn werk."
    },
    vocabulary: {
      words: [
        {
          word: "geeft",
          definition: "om aan iemand iets te geven",
          sentence: "Hij ___ een cadeau aan zijn vriend.",
          answer: "geeft"
        },
        {
          word: "aan",
          definition: "naar iemand of iets toe",
          sentence: "Hij loopt ___ het huis.",
          answer: "aan"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om dingen te kopen",
          sentence: "Hij heeft veel ___ in zijn portemonnee.",
          answer: "geld"
        },
        {
          word: "man",
          definition: "een persoon die mannelijk is",
          sentence: "De ___ werkt hard.",
          answer: "man"
        },
        {
          word: "werk",
          definition: "wat je doet om geld te verdienen",
          sentence: "Mijn ___ is heel interessant.",
          answer: "werk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij loopt ___ het huis.",
          answer: "aan"
        },
        {
          sentence: "Hij ___ een cadeau aan zijn vriend.",
          answer: "geeft"
        },
        {
          sentence: "Mijn ___ is heel interessant.",
          answer: "werk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gebruikt Trump het geld voor?",
        options: [
          "Om eten te kopen",
          "Om soldaten te betalen",
          "Om een huis te bouwen",
          "Om naar de maan te gaan"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie geeft het geld aan Trump?",
        options: [
          "Een bekende acteur",
          "Een rijke man",
          "Een jonge student",
          "Een oude vrouw"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het resultaat van de donatie?",
        options: [
          "Trump koopt een auto",
          "Trump gebruikt het voor zijn werk",
          "Trump geeft het aan iemand anders",
          "Trump verliest het geld"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De man die geld geeft is een vrouw.",
        isTrue: false
      },
      {
        statement: "Trump gebruikt het geld om soldaten te betalen.",
        isTrue: true
      },
      {
        statement: "De man geeft het geld aan een kind.",
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
    title: "Catherine Connolly wint verkiezing in Ierland",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wint verkiezing in Ierland",
      summary: "Catherine Connolly is de nieuwe president van Ierland. Ze won de verkiezingen met 63 procent van de stemmen."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "Een leider van een land",
          sentence: "De ___ van het land is belangrijk.",
          answer: "president"
        },
        {
          word: "stemmen",
          definition: "Je stem geven aan iemand",
          sentence: "We gaan morgen ___ voor de nieuwe president.",
          answer: "stemmen"
        },
        {
          word: "verkiezing",
          definition: "Een moment waarop mensen kiezen wie de leider wordt",
          sentence: "De ___ was vorige week.",
          answer: "verkiezing"
        },
        {
          word: "Ierland",
          definition: "Een land in Europa",
          sentence: "___ is een land met veel groene natuur.",
          answer: "Ierland"
        },
        {
          word: "nieuwe",
          definition: "Niet oud, pas gemaakt of gekomen",
          sentence: "Ze is de ___ president van Ierland.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We gaan morgen ___ voor de nieuwe president.",
          answer: "stemmen"
        },
        {
          sentence: "De ___ van het land is belangrijk.",
          answer: "president"
        },
        {
          sentence: "De ___ was vorige week.",
          answer: "verkiezing"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een president?",
        options: [
          "Een soort dier",
          "Een leider van een land",
          "Een soort eten",
          "Een sport"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is Ierland?",
        options: [
          "In Afrika",
          "In Azië",
          "In Europa",
          "In Zuid-Amerika"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'winnen' in deze context?",
        options: [
          "Verliezen",
          "Kopen",
          "Winnen",
          "Maken"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connolly is de nieuwe president van Ierland.",
        isTrue: true
      },
      {
        statement: "Catherine Connolly is de nieuwe president van Frankrijk.",
        isTrue: false
      },
      {
        statement: "Catherine Connolly won de verkiezingen met 63 procent van de stemmen.",
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
      summary: "Het KMI waarschuwt voor slecht weer. Mensen kunnen bellen naar 1722 voor hulp bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "hulp",
          definition: "Assistentie, ondersteuning als je het nodig hebt.",
          sentence: "Vraag ___ als je niet weet wat je moet doen.",
          answer: "hulp"
        },
        {
          word: "nummer",
          definition: "Een getal, zoals je telefoonnummer.",
          sentence: "Welk ___ moet ik bellen voor hulp?",
          answer: "nummer"
        },
        {
          word: "KMI",
          definition: "Het KMI is een instituut dat het weer voorspelt.",
          sentence: "Het ___ zegt dat het gaat regenen.",
          answer: "KMI"
        },
        {
          word: "water",
          definition: "Een natte stof die je drinkt of die uit de lucht valt.",
          sentence: "Na veel regen staat er ___ op straat.",
          answer: "water"
        },
        {
          word: "storm",
          definition: "Heel harde wind met veel regen.",
          sentence: "Tijdens een ___ kunnen bomen omvallen.",
          answer: "storm"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens een ___ kunnen bomen omvallen.",
          answer: "storm"
        },
        {
          sentence: "Het ___ zegt dat het gaat regenen.",
          answer: "KMI"
        },
        {
          sentence: "Na veel regen staat er ___ op straat.",
          answer: "water"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet het KMI?",
        options: [
          "Ze maken eten klaar",
          "Ze voorspellen het weer",
          "Ze repareren auto's",
          "Ze geven medische hulp"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 1722?",
        options: [
          "Een telefoonnummer voor hulp",
          "Een adres van een restaurant",
          "Een code voor een computer",
          "Een type van auto"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is schade?",
        options: [
          "Een soort van eten",
          "Een type van kleding",
          "Schade is wat kapot is",
          "Een soort van sport"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI waarschuwt voor slecht weer.",
        isTrue: true
      },
      {
        statement: "Het nummer 1722 is voor feestelijke evenementen.",
        isTrue: false
      },
      {
        statement: "Mensen kunnen bellen naar 1722 voor hulp bij storm- en waterschade.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Vrouw belt 112 in het Nederlands",
    topicNumber: 1,
    article: {
      title: "Vrouw belt 112 in het Nederlands",
      summary: "Een vrouw belt 112 omdat ze een gewonde man wil helpen. Maar ze mag alleen Nederlands spreken."
    },
    vocabulary: {
      words: [
        {
          word: "wil",
          definition: "heeft de wens of intentie om iets te doen",
          sentence: "Hij ___ een nieuwe fiets kopen.",
          answer: "wil"
        },
        {
          word: "belt",
          definition: "gebruikt de telefoon om iemand te bellen",
          sentence: "Hij ___ zijn moeder als hij hulp nodig heeft.",
          answer: "belt"
        },
        {
          word: "helpen",
          definition: "iemand assisteren of ondersteunen",
          sentence: "Ik wil je graag ___ met je huiswerk.",
          answer: "helpen"
        },
        {
          word: "man",
          definition: "een volwassen persoon van het mannelijk geslacht",
          sentence: "Die ___ werkt in een groot kantoor.",
          answer: "man"
        },
        {
          word: "Nederlands",
          definition: "de officiële taal van Nederland en Vlaanderen",
          sentence: "In België spreken veel mensen ___.",
          answer: "Nederlands"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ een nieuwe fiets kopen.",
          answer: "wil"
        },
        {
          sentence: "Die ___ werkt in een groot kantoor.",
          answer: "man"
        },
        {
          sentence: "Ik wil je graag ___ met je huiswerk.",
          answer: "helpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belt de vrouw naar 112?",
        options: [
          "Omdat ze een feest organiseert",
          "Omdat ze een gewonde man wil helpen",
          "Omdat ze haar kat kwijt is",
          "Omdat ze Nederlands wil oefenen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdtaal in Vlaanderen?",
        options: [
          "Frans",
          "Duits",
          "Nederlands",
          "Engels"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de situatie volgens de burgemeester?",
        options: [
          "Een geweldige dag",
          "Een schandalige situatie",
          "Een rustige nacht",
          "Een grote feest"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw belt 112 omdat ze een gewonde man wil helpen.",
        isTrue: true
      },
      {
        statement: "De vrouw mag alleen Engels spreken met 112.",
        isTrue: false
      },
      {
        statement: "De burgemeester vindt de situatie schandalig.",
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
          word: "ring",
          definition: "een rondweg of cirkel",
          sentence: "De auto rijdt op de ___ .",
          answer: "ring"
        },
        {
          word: "opent",
          definition: "begint of start",
          sentence: "Het nieuwe ___ vandaag.",
          answer: "opent"
        },
        {
          word: "Antwerpse",
          definition: "van de stad Antwerpen",
          sentence: "De ___ ring is druk.",
          answer: "Antwerpse"
        },
        {
          word: "belooft",
          definition: "belooft of zegt dat iets zal gebeuren",
          sentence: "Hij ___ veel verkeer.",
          answer: "belooft"
        },
        {
          word: "verkeer",
          definition: "het verplaatsen van auto's en voertuigen",
          sentence: "Het ___ staat stil.",
          answer: "verkeer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ staat stil.",
          answer: "verkeer"
        },
        {
          sentence: "De ___ ring is druk.",
          answer: "Antwerpse"
        },
        {
          sentence: "Hij ___ veel verkeer.",
          answer: "belooft"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is de nieuwe weg geopend?",
        options: [
          "Op de Antwerpse ring",
          "In het centrum van Brussel",
          "Aan de kust",
          "In een park"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het effect van de nieuwe opening?",
        options: [
          "Het veroorzaakt veel verkeer",
          "Het maakt de weg leeg",
          "Het stopt alle auto's",
          "Het maakt niets uit"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de 'stap' in de context?",
        options: [
          "Een dansbeweging",
          "Een trede op een ladder",
          "Een belangrijke gebeurtenis in het project",
          "Een soort dier"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De nieuwe weg is in Antwerpen.",
        isTrue: true
      },
      {
        statement: "Het nieuwe wegdeel is gesloten.",
        isTrue: false
      },
      {
        statement: "De opening zorgt voor veel verkeer.",
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
    title: "“Wij zijn nog altijd boos”: tienduizenden mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
    topicNumber: 1,
    article: {
      title: "“Wij zijn nog altijd boos”: tienduizenden mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
      summary: "Tienduizenden mensen hebben in Valencia deelgenomen aan een protestmars, een jaar na de dodelijke overstromingen in de regio."
    },
    vocabulary: {
      words: [
        {
          word: "a",
          definition: "Onbepaald lidwoord voor een enkelvoudig zelfstandig naamwoord.",
          sentence: "De overstroming was ___ direct gevolg van extreme regenval.",
          answer: "a"
        },
        {
          word: "op",
          definition: "Voorzetsel dat onder andere locatie of richting aangeeft.",
          sentence: "De demonstranten kwamen bijeen ___ het centrale plein.",
          answer: "op"
        },
        {
          word: "na",
          definition: "Geeft een volgorde in tijd aan, ofwel 'later dan'.",
          sentence: "Het protest vond plaats ___ jaar na de ramp.",
          answer: "na"
        },
        {
          word: "dodelijke",
          definition: "Betrekking hebbend op of veroorzakend van de dood.",
          sentence: "De overstromingen hadden ___ gevolgen voor de gemeenschap.",
          answer: "dodelijke"
        },
        {
          word: "zijn",
          definition: "Koppelwerkwoord dat een toestand of eigenschap uitdrukt.",
          sentence: "Zij ___ verantwoordelijk voor de organisatie van de demonstratie.",
          answer: "zijn"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het protest vond plaats ___ jaar na de ramp.",
          answer: "na"
        },
        {
          sentence: "Zij ___ verantwoordelijk voor de organisatie van de demonstratie.",
          answer: "zijn"
        },
        {
          sentence: "De demonstranten kwamen bijeen ___ het centrale plein.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kwamen de mensen in Valencia bijeen op straat?",
        options: [
          "Om een feest te vieren",
          "Om te protesteren tegen onvoldoende klimaatactie",
          "Om de overstromingen te herdenken",
          "Om nieuwe wetten te eisen tegen immigratie"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de tijdsaanduiding in de titel 'een jaar na'?",
        options: [
          "Precies een jaar later",
          "Meer dan een jaar later",
          "Minder dan een jaar later",
          "Onbekend"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat impliceert het woord 'nog' in de titel?",
        options: [
          "De woede is recent ontstaan",
          "De woede is onverminderd aanwezig",
          "De woede is al overgegaan",
          "De woede is onrealistisch"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De protesten in Valencia waren gericht tegen de nationale regering.",
        isTrue: true
      },
      {
        statement: "De overstromingen vonden plaats precies een jaar voor de protesten.",
        isTrue: true
      },
      {
        statement: "De demonstranten eisten onmiddellijke financiële compensatie voor alle slachtoffers.",
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
          word: "geactiveerd",
          definition: "in werking gesteld; actief gemaakt",
          sentence: "De overheid heeft het noodnummer ___ voor vragen over stormschade.",
          answer: "geactiveerd"
        },
        {
          word: "storm",
          definition: "een weerssysteem met zeer harde wind, vaak met regen of sneeuw",
          sentence: "Tijdens de ___ raakten veel bomen ontworteld.",
          answer: "storm"
        },
        {
          word: "schade",
          definition: "schade; wat kapot of beschadigd is geraakt",
          sentence: "Er was veel ___ aan huizen na de storm.",
          answer: "schade"
        },
        {
          word: "nummer",
          definition: "een getal; in deze context een telefoonnummer",
          sentence: "Bel dit ___ voor hulp bij waterschade.",
          answer: "nummer"
        },
        {
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut; de organisatie die weersvoorspellingen doet",
          sentence: "Het ___ heeft een waarschuwing uitgegeven voor zware buien.",
          answer: "KMI"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De overheid heeft het noodnummer ___ voor vragen over stormschade.",
          answer: "geactiveerd"
        },
        {
          sentence: "Tijdens de ___ raakten veel bomen ontworteld.",
          answer: "storm"
        },
        {
          sentence: "Bel dit ___ voor hulp bij waterschade.",
          answer: "nummer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van het KMI in deze situatie?",
        options: [
          "Het geeft weerswaarschuwingen.",
          "Het repareert schade na stormen.",
          "Het maakt films over het weer.",
          "Het leidt evacuaties."
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom heeft de overheid nummer 1722 geactiveerd?",
        options: [
          "Om feestelijkheden aan te kondigen.",
          "Om mensen te helpen bij storm- en waterschade.",
          "Om weersvoorspellingen te doen.",
          "Om nieuwe wetten te maken."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van zware regen volgens de tekst?",
        options: [
          "Mensen dansen in de regen.",
          "Schade aan huizen en wegen.",
          "De zon begint te schijnen.",
          "Mensen vergeten het nummer."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI heeft geen rol in weerswaarschuwingen.",
        isTrue: false
      },
      {
        statement: "Nummer 1722 is alleen voor branden.",
        isTrue: false
      },
      {
        statement: "De overheid heeft nummer 1722 geactiveerd voor hulp bij stormschade.",
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
      summary: "Een Franstalige vrouw wilde afgelopen week een gewonde man in het Zoniënwoud helpen, maar toen ze de 112 belde, kreeg ze te horen dat ze enkel in het Nederlands geholpen kon worden. “Een schandalige situatie”, zegt de burgemeester van Watermaal-Bosvoorde."
    },
    vocabulary: {
      words: [
        {
          word: "belde",
          definition: "telefonisch contact opnemen",
          sentence: "Ze ___ naar de hulpdiensten voor assistentie.",
          answer: "belde"
        },
        {
          word: "enkel",
          definition: "alleen of uitsluitend",
          sentence: "Ze mocht ___ Nederlands spreken met de hulpdienst.",
          answer: "enkel"
        },
        {
          word: "Franstalige",
          definition: "iemand die Frans spreekt als moedertaal",
          sentence: "De ___ vrouw kon geen Nederlands spreken.",
          answer: "Franstalige"
        },
        {
          word: "Zoniënwoud",
          definition: "een bosgebied in België",
          sentence: "Het incident gebeurde in het ___.",
          answer: "Zoniënwoud"
        },
        {
          word: "Nederlands",
          definition: "de officiële taal in Vlaanderen en Nederland",
          sentence: "Ze kreeg te horen dat ze enkel in het ___ mocht communiceren.",
          answer: "Nederlands"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze mocht ___ Nederlands spreken met de hulpdienst.",
          answer: "enkel"
        },
        {
          sentence: "Ze ___ naar de hulpdiensten voor assistentie.",
          answer: "belde"
        },
        {
          sentence: "Het incident gebeurde in het ___.",
          answer: "Zoniënwoud"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom belde de vrouw de hulpdiensten?",
        options: [
          "Om een pizza te bestellen",
          "Omdat ze een gewonde man wilde helpen",
          "Om de burgemeester te spreken",
          "Omdat ze verdwaald was"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de reactie van de burgemeester op de situatie?",
        options: [
          "Hij vond het prima",
          "Hij noemde het een schandalige situatie",
          "Hij belde de vrouw zelf",
          "Hij vond het een goede zaak"
        ],
        correctAnswer: 2
      },
      {
        question: "In welke taal mocht de vrouw communiceren met de hulpdiensten?",
        options: [
          "Alleen in het Frans",
          "Alleen in het Engels",
          "Alleen in het Nederlands",
          "In elke taal"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw kon vrijuit in het Frans communiceren met de hulpdiensten.",
        isTrue: false
      },
      {
        statement: "De burgemeester van Watermaal-Bosvoorde reageerde positief op de situatie.",
        isTrue: false
      },
      {
        statement: "Het incident vond plaats in het Zoniënwoud.",
        isTrue: true
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
          word: "opent",
          definition: "begint beschikbaar te zijn, gaat open",
          sentence: "Het nieuwe winkelcentrum ___ vandaag officieel zijn deuren.",
          answer: "opent"
        },
        {
          word: "belooft",
          definition: "zegt toe, geeft de verwachting",
          sentence: "De coach ___ zijn team een overwinning.",
          answer: "belooft"
        },
        {
          word: "ring",
          definition: "een rondweg of rondweg rond een stad",
          sentence: "De Antwerpse ___ is een belangrijke verkeersader.",
          answer: "ring"
        },
        {
          word: "parallel",
          definition: "naast elkaar, op gelijke afstand",
          sentence: "De nieuwe weg loopt ___ aan de bestaande.",
          answer: "parallel"
        },
        {
          word: "stap",
          definition: "een actie of handeling in een proces",
          sentence: "De volgende ___ in het project is cruciaal.",
          answer: "stap"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het nieuwe winkelcentrum ___ vandaag officieel zijn deuren.",
          answer: "opent"
        },
        {
          sentence: "De nieuwe weg loopt ___ aan de bestaande.",
          answer: "parallel"
        },
        {
          sentence: "De volgende ___ in het project is cruciaal.",
          answer: "stap"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is de nieuwe wegopening in Antwerpen belangrijk?",
        options: [
          "Het vermindert verkeer onmiddellijk",
          "Het biedt een alternatieve route tijdens werken",
          "Het is alleen voor openbaar vervoer",
          "Het verbindt twee verre steden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het hoofddoel van de Oosterweelwerken?",
        options: [
          "Vervangen van alle bestaande bruggen",
          "Verbeteren van de verkeersdoorstroming",
          "Vergroten van de havencapaciteit alleen",
          "Enkel de bouw van een nieuw station"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe beïnvloedt de opening het lokale verkeer?",
        options: [
          "Het vermindert files onmiddellijk",
          "Het heeft geen enkel effect",
          "Het veroorzaakt vertragingen door de werken",
          "Het maakt de ring volledig autovrij"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Oosterweelwerken zijn volledig voltooid met de opening van dit wegsegment.",
        isTrue: false
      },
      {
        statement: "De nieuwe wegopening heeft als doel verkeer tijdelijk te verleiden tijdens verdere werken.",
        isTrue: true
      },
      {
        statement: "De ring van Antwerpen wordt volledig gesloten voor alle verkeer na deze opening.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Miljardair geeft veel geld aan Trump voor soldaten",
    topicNumber: 1,
    article: {
      title: "Miljardair geeft veel geld aan Trump voor soldaten",
      summary: "Donald Trump krijgt veel geld van een rijke man. Het geld is voor soldaten. Dit gebeurt in Amerika."
    },
    vocabulary: {
      words: [
        {
          word: "geld",
          definition: "wat je gebruikt om dingen te kopen, zoals euro's of dollars",
          sentence: "Hij geeft veel ___ aan Trump voor soldaten.",
          answer: "geld"
        },
        {
          word: "krijgt",
          definition: "ontvangt, krijgt iets",
          sentence: "Trump ___ het geld van de miljardair.",
          answer: "krijgt"
        },
        {
          word: "Amerika",
          definition: "een groot land, ook Verenigde Staten genoemd",
          sentence: "Deze gebeurtenis vindt plaats in ___.",
          answer: "Amerika"
        },
        {
          word: "gebeurt",
          definition: "iets dat plaatsvindt of gebeurt",
          sentence: "Wat ___ er in dit verhaal?",
          answer: "gebeurt"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige president van Amerika",
          sentence: "___ krijgt veel geld van de miljardair.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ krijgt veel geld van de miljardair.",
          answer: "Trump"
        },
        {
          sentence: "Hij geeft veel ___ aan Trump voor soldaten.",
          answer: "geld"
        },
        {
          sentence: "Deze gebeurtenis vindt plaats in ___.",
          answer: "Amerika"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom geeft de miljardair geld aan Trump?",
        options: [
          "Om soldaten te betalen",
          "Om rijk te worden",
          "Om president te worden",
          "Om naar Europa te reizen"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar vindt deze gebeurtenis plaats?",
        options: [
          "In Amerika",
          "In Nederland",
          "In China",
          "In Rusland"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie is de man die het geld geeft?",
        options: [
          "De miljardair",
          "De president van Amerika",
          "De soldaat",
          "De leraar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De miljardair geeft geld aan Trump voor soldaten.",
        isTrue: true
      },
      {
        statement: "Deze gebeurtenis vindt plaats in Nederland.",
        isTrue: false
      },
      {
        statement: "Trump ontvangt het geld voor zichzelf.",
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
    title: "Catherine Connolly wint Ierse presidentsverkiezingen",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wint Ierse presidentsverkiezingen",
      summary: "De 68-jarige Catherine Connolly wordt de nieuwe president van Ierland. Ze heeft de presidentsverkiezingen gewonnen met meer dan 63 procent van de stemmen, zo blijkt uit de officiële resultaten."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "iemand die aan het hoofd staat van een land of organisatie",
          sentence: "De ___ van de Verenigde Staten is Joe Biden.",
          answer: "president"
        },
        {
          word: "stemmen",
          definition: "je stem geven aan een kandidaat",
          sentence: "Veel mensen gaan ___ tijdens verkiezingen.",
          answer: "stemmen"
        },
        {
          word: "resultaten",
          definition: "de uitkomsten of gegevens van iets",
          sentence: "De ___ van het onderzoek zijn bekend.",
          answer: "resultaten"
        },
        {
          word: "verkiezingen",
          definition: "een verkiezing waarbij mensen stemmen voor een kandidaat",
          sentence: "De ___ zijn volgende week.",
          answer: "verkiezingen"
        },
        {
          word: "nieuwe",
          definition: "het tegenovergestelde van oud",
          sentence: "Dit is een ___ boek.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Dit is een ___ boek.",
          answer: "nieuwe"
        },
        {
          sentence: "De ___ van het onderzoek zijn bekend.",
          answer: "resultaten"
        },
        {
          sentence: "Veel mensen gaan ___ tijdens verkiezingen.",
          answer: "stemmen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Catherine Connolly?",
        options: [
          "Een student",
          "Een leraar",
          "De nieuwe president van Ierland",
          "Een beroemde schrijver"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel procent van de stemmen won ze?",
        options: [
          "Minder dan 50%",
          "Ongeveer 60%",
          "Meer dan 63%",
          "Precies 63%"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is haar leeftijd?",
        options: [
          "45 jaar",
          "68 jaar",
          "70 jaar",
          "75 jaar"
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
        statement: "Ze won met 50 procent van de stemmen.",
        isTrue: false
      },
      {
        statement: "De resultaten zijn officieel bekend.",
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
          word: "water",
          definition: "Water is een vloeistof die we drinken of die uit de kraan komt.",
          sentence: "Na de regen staat er ___ op de straten.",
          answer: "water"
        },
        {
          word: "bellen",
          definition: "Bellen betekent telefoneren of iemand opbellen.",
          sentence: "Je kunt ___ naar 1722 voor hulp.",
          answer: "bellen"
        },
        {
          word: "KMI",
          definition: "Het KMI is een instituut dat het weer voorspelt.",
          sentence: "Het ___ waarschuwt voor zwaar weer.",
          answer: "KMI"
        },
        {
          word: "overheid",
          definition: "De overheid is de regering van een land.",
          sentence: "De ___ beslist over nieuwe regels.",
          answer: "overheid"
        },
        {
          word: "nummer",
          definition: "Een nummer is een getal of een telefoonnummer.",
          sentence: "Bel dit ___ bij een noodgeval.",
          answer: "nummer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ waarschuwt voor zwaar weer.",
          answer: "KMI"
        },
        {
          sentence: "Na de regen staat er ___ op de straten.",
          answer: "water"
        },
        {
          sentence: "Bel dit ___ bij een noodgeval.",
          answer: "nummer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het telefoonnummer 1722 voor?",
        options: [
          "Voor het bestellen van pizza",
          "Voor het melden van stormschade",
          "Voor het bellen van de politie",
          "Voor het maken van een afspraak"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet het KMI?",
        options: [
          "Het voorspelt het weer",
          "Het repareert schade",
          "Het maakt nieuwe wetten",
          "Het stuurt hulpverleners"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom heeft de overheid het nummer 1722 geactiveerd?",
        options: [
          "Om mensen te helpen bij verkeersongelukken",
          "Om mensen te helpen bij stormschade",
          "Om nieuwe wetten aan te kondigen",
          "Om feestjes te organiseren"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI waarschuwt alleen voor mooi weer.",
        isTrue: false
      },
      {
        statement: "Je kunt bellen naar 1722 als je schade hebt door een storm.",
        isTrue: true
      },
      {
        statement: "De overheid heeft het nummer 1722 gemaakt voor feestjes.",
        isTrue: false
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
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van het AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "verkeershinder",
          definition: "problemen voor het verkeer, zoals files of vertragingen",
          sentence: "Er is veel ___ op de ring.",
          answer: "verkeershinder"
        },
        {
          word: "belooft",
          definition: "zegt dat iets gaat gebeuren",
          sentence: "De weg ___ veel verkeer.",
          answer: "belooft"
        },
        {
          word: "snelweg",
          definition: "een grote weg waar auto's snel kunnen rijden",
          sentence: "De nieuwe ___ is sinds gisteren open.",
          answer: "snelweg"
        },
        {
          word: "AFAS-Dome",
          definition: "de naam van een groot gebouw in Antwerpen",
          sentence: "Het ___ is een bekend gebouw.",
          answer: "AFAS-Dome"
        },
        {
          word: "viaduct",
          definition: "een brug waar auto's overheen rijden",
          sentence: "Het ___ is hoog boven de grond.",
          answer: "viaduct"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ is sinds gisteren open.",
          answer: "snelweg"
        },
        {
          sentence: "Het ___ is hoog boven de grond.",
          answer: "viaduct"
        },
        {
          sentence: "De weg ___ veel verkeer.",
          answer: "belooft"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de 'Oosterweel-bypass'?",
        options: [
          "Een soort auto",
          "Een soort fiets",
          "Een soort weg",
          "Een soort gebouw"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is de nieuwe snelweg geopend?",
        options: [
          "In Brussel",
          "In Antwerpen",
          "In Gent",
          "In Brugge"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het gevolg van de nieuwe weg?",
        options: [
          "Minder verkeer",
          "Meer verkeer",
          "Minder lawaai",
          "Meer lawaai"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Oosterweel-bypass is een nieuwe tunnel.",
        isTrue: false
      },
      {
        statement: "De nieuwe weg veroorzaakt veel verkeershinder.",
        isTrue: true
      },
      {
        statement: "Het project is al helemaal klaar.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Miljardair Timothy Mellon stopte Trump 130 miljoen toe om soldaten te betalen",
    topicNumber: 1,
    article: {
      title: "Miljardair Timothy Mellon stopte Trump 130 miljoen toe om soldaten te betalen",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "miljardair",
          definition: "iemand die meer dan een miljard euro bezit",
          sentence: "Een ___ heeft veel geld.",
          answer: "miljardair"
        },
        {
          word: "Trump",
          definition: "familienaam van de voormalige Amerikaanse president",
          sentence: "Donald ___ was president van 2017 tot 2021.",
          answer: "Trump"
        },
        {
          word: "stopte",
          definition: "gaf, schonk (verleden tijd van stoppen of geven)",
          sentence: "Hij ___ geld aan een goed doel.",
          answer: "stopte"
        },
        {
          word: "om",
          definition: "omdat, met als doel",
          sentence: "Hij spaart geld ___ een nieuwe auto te kopen.",
          answer: "om"
        },
        {
          word: "soldaten",
          definition: "mensen die in het leger vechten",
          sentence: "De ___ verdedigen het land.",
          answer: "soldaten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Donald ___ was president van 2017 tot 2021.",
          answer: "Trump"
        },
        {
          sentence: "Een ___ heeft veel geld.",
          answer: "miljardair"
        },
        {
          sentence: "De ___ verdedigen het land.",
          answer: "soldaten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden dat Timothy Mellon geld doneerde aan Trump?",
        options: [
          "Om soldaten te betalen",
          "Om een nieuw huis te kopen",
          "Om een politieke campagne te steunen",
          "Om een feest te organiseren"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk effect heeft Trumps presidentschap op de wereld?",
        options: [
          "Het verandert niets",
          "Het veroorzaakt veel veranderingen",
          "Het maakt iedereen gelukkig",
          "Het zorgt voor economische groei"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van soldaten in deze context?",
        options: [
          "Ze worden betaald door de donatie",
          "Ze vechten in een oorlog",
          "Ze zijn politieke leiders",
          "Ze organiseren feesten"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Timothy Mellon is een miljardair die geld gaf aan Trump.",
        isTrue: true
      },
      {
        statement: "Trump gebruikte het geld om soldaten te betalen voor een feest.",
        isTrue: false
      },
      {
        statement: "De donatie beïnvloedt de wereldpolitiek.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Wij zijn nog altijd boos: tienduizenden mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
    topicNumber: 1,
    article: {
      title: "Wij zijn nog altijd boos: tienduizenden mensen komen een jaar na dodelijke overstromingen in Valencia op straat",
      summary: "Tienduizenden mensen hebben in Valencia deelgenomen aan een protestmars, een jaar na de dodelijke overstromingen in de regio."
    },
    vocabulary: {
      words: [
        {
          word: "straat",
          definition: "een weg in een stad of dorp, meestal met huizen eraan",
          sentence: "Ze liepen over de ___ om hun stem te laten horen.",
          answer: "straat"
        },
        {
          word: "boos",
          definition: "een sterk gevoel van ergernis of woede hebben",
          sentence: "Ze voelen zich ___ omdat er niet genoeg is gedaan.",
          answer: "boos"
        },
        {
          word: "nog",
          definition: "geeft aan dat iets continuert of nog steeds het geval is",
          sentence: "We zijn ___ steeds boos over wat er is gebeurd.",
          answer: "nog"
        },
        {
          word: "Valencia",
          definition: "een stad in Spanje, waar de overstromingen plaatsvonden",
          sentence: "In ___ vonden de dodelijke overstromingen plaats.",
          answer: "Valencia"
        },
        {
          word: "wij",
          definition: "verwijst naar een groep mensen waar de spreker toe behoort",
          sentence: "___ gaan de straat op om te protesteren.",
          answer: "wij"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze voelen zich ___ omdat er niet genoeg is gedaan.",
          answer: "boos"
        },
        {
          sentence: "We zijn ___ steeds boos over wat er is gebeurd.",
          answer: "nog"
        },
        {
          sentence: "In ___ vonden de dodelijke overstromingen plaats.",
          answer: "Valencia"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom protesteerden de mensen in Valencia?",
        options: [
          "Omdat er te veel regen was",
          "Omdat ze ontevreden zijn over de hulp na de overstromingen",
          "Omdat ze een feest wilden vieren",
          "Omdat de straten nog nat waren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de overheid volgens het artikel?",
        options: [
          "Ze hebben alles perfect opgelost",
          "Ze hebben niets gedaan sinds de overstromingen",
          "Ze hebben genoeg gedaan, maar de mensen willen meer",
          "Ze hebben de overstromingen veroorzaakt"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe lang geleden vonden de overstromingen plaats?",
        options: [
          "Vijf jaar geleden",
          "Twee weken geleden",
          "Vorig jaar",
          "Tien jaar geleden"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De overstromingen in Valencia veroorzaakten alleen materiële schade.",
        isTrue: false
      },
      {
        statement: "De protestmars vond plaats om de overheid tot actie aan te zetten.",
        isTrue: true
      },
      {
        statement: "Valencia is de hoofdstad van Spanje.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Catherine Connolly wint Ierse presidentsverkiezingen",
    topicNumber: 1,
    article: {
      title: "Catherine Connolly wint Ierse presidentsverkiezingen",
      summary: "De 68-jarige Catherine Connolly wordt de nieuwe president van Ierland. Ze heeft de presidentsverkiezingen gewonnen met meer dan 63 procent van de stemmen, zo blijkt uit de officiële resultaten."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "Het staatshoofd van een republiek",
          sentence: "De nieuwe ___ van Ierland is Catherine Connolly.",
          answer: "president"
        },
        {
          word: "verkiezing",
          definition: "Zie 'verkiezingen'; dit is het enkelvoud",
          sentence: "De presidentsverkiezing was een spannende race.",
          answer: "verkiezing"
        },
        {
          word: "resultaten",
          definition: "De uitkomsten of gevolgen van iets",
          sentence: "De verkiezings-___ zijn bekend gemaakt.",
          answer: "resultaten"
        },
        {
          word: "officiële",
          definition: "Iets wat formeel en openbaar is",
          sentence: "De ___ resultaten bevestigen haar overwinning.",
          answer: "officiële"
        },
        {
          word: "stemmen",
          definition: "Het uitbrengen van een stem, of de stemmen zelf",
          sentence: "Zij kreeg de meeste ___ in de verkiezing.",
          answer: "stemmen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ van Ierland is Catherine Connolly.",
          answer: "president"
        },
        {
          sentence: "De ___ resultaten bevestigen haar overwinning.",
          answer: "officiële"
        },
        {
          sentence: "De presidentsverkiezing was een spannende race.",
          answer: "verkiezing"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat heeft Catherine Connolly gewonnen?",
        options: [
          "De Nobelprijs",
          "De presidentsverkiezingen",
          "Een sportwedstrijd",
          "Een loterij"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud is Catherine Connolly?",
        options: [
          "50 jaar",
          "60 jaar",
          "68 jaar",
          "70 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de officiële uitslag van de verkiezingen?",
        options: [
          "Onbekend",
          "Nog niet bekend",
          "Catherine won met 63%",
          "Ze verloor met 37%"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Catherine Connolly is de nieuwe president van Ierland.",
        isTrue: true
      },
      {
        statement: "Catherine Connolly is 70 jaar oud.",
        isTrue: false
      },
      {
        statement: "De verkiezingsresultaten zijn officieel bevestigd.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Noodnummer 1722",
    topicNumber: 1,
    article: {
      title: "Noodnummer 1722 voor storm- en waterschade geactiveerd, KMI waarschuwt voor buien en veel wind",
      summary: "Het KMI waarschuwt opnieuw voor slecht weer. De overheid heeft het nummer 1722 geactiveerd, dat mensen kunnen bellen bij storm- en waterschade."
    },
    vocabulary: {
      words: [
        {
          word: "overheid",
          definition: "De organisatie die een land, stad of gemeente bestuurt.",
          sentence: "De ___ waarschuwt voor gevaarlijk weer.",
          answer: "overheid"
        },
        {
          word: "storm",
          definition: "Een periode met zeer slecht weer, vaak met veel wind en regen.",
          sentence: "Er raasde een zware ___ over het land.",
          answer: "storm"
        },
        {
          word: "geactiveerd",
          definition: "In werking gesteld of aangezet.",
          sentence: "De hulplijn werd ___ na de storm.",
          answer: "geactiveerd"
        },
        {
          word: "waarschuwt",
          definition: "Iemand waarschuwen betekent zeggen dat er gevaar of iets slechts kan komen.",
          sentence: "Het KMI ___ voor zware regen.",
          answer: "waarschuwt"
        },
        {
          word: "KMI",
          definition: "Het Koninklijk Meteorologisch Instituut, een Belgische overheidsinstelling die het weer voorspelt.",
          sentence: "Het ___ waarschuwde voor zware stormen.",
          answer: "KMI"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ waarschuwt voor gevaarlijk weer.",
          answer: "overheid"
        },
        {
          sentence: "Er raasde een zware ___ over het land.",
          answer: "storm"
        },
        {
          sentence: "De hulplijn werd ___ na de storm.",
          answer: "geactiveerd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van het KMI in deze situatie?",
        options: [
          "Ze organiseren evacuaties",
          "Ze voorspellen het weer en geven waarschuwingen",
          "Ze herstellen elektriciteitsnetten",
          "Ze bieden financiële steun aan slachtoffers"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom heeft de overheid het nummer 1722 geactiveerd?",
        options: [
          "Om feestelijke evenementen aan te kondigen",
          "Om mensen te helpen bij stormschade",
          "Om weersvoorspellingen te geven",
          "Om nieuwsbulletins uit te zenden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van een zware storm?",
        options: [
          "Mensen gaan meer binnen sporten",
          "Schade aan gebouwen en infrastructuur",
          "Alle voorspellingen worden onmiddellijk gestopt",
          "De temperatuur stijgt snel"
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
        statement: "Mensen kunnen 1722 bellen voor hulp na stormschade.",
        isTrue: true
      },
      {
        statement: "De overheid heeft het nummer 1722 gedeactiveerd na de storm.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Franstalige vrouw belt hulpdiensten omdat ze gewonde man wil helpen in Zoniënwoud, maar mag enkel Nederlands spreken",
    topicNumber: 1,
    article: {
      title: "Franstalige vrouw belt hulpdiensten omdat ze gewonde man wil helpen in Zoniënwoud, maar mag enkel Nederlands spreken",
      summary: "Een Franstalige vrouw wilde afgelopen week een gewonde man in het Zoniënwoud helpen, maar toen ze de 112 belde, kreeg ze te horen dat ze enkel in het Nederlands geholpen kon worden. 'Een schandalige situatie', zegt de burgemeester van Watermaal-Bosvoorde."
    },
    vocabulary: {
      words: [
        {
          word: "hulpdiensten",
          definition: "organisaties die hulp bieden, zoals politie of ambulance",
          sentence: "Ze belde de ___ omdat iemand gewond was.",
          answer: "hulpdiensten"
        },
        {
          word: "horen",
          definition: "iets met je oren waarnemen",
          sentence: "Ze kon de instructies niet ___ door de chaos.",
          answer: "horen"
        },
        {
          word: "Nederlands",
          definition: "de officiële taal van Nederland en Vlaanderen",
          sentence: "Ze mocht alleen ___ spreken met de hulpdienst.",
          answer: "Nederlands"
        },
        {
          word: "helpen",
          definition: "assisteren of bijstaan",
          sentence: "Ze wilde de gewonde man ___.",
          answer: "helpen"
        },
        {
          word: "schandalige",
          definition: "ergerlijk, onacceptabel",
          sentence: "De burgemeester noemde het een ___ situatie.",
          answer: "schandalige"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze belde de ___ omdat iemand gewond was.",
          answer: "hulpdiensten"
        },
        {
          sentence: "Ze kon de instructies niet ___ door de chaos.",
          answer: "horen"
        },
        {
          sentence: "Ze wilde de gewonde man ___.",
          answer: "helpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de hoofdreden dat de vrouw de hulpdiensten belde?",
        options: [
          "Ze was verdwaald in het bos",
          "Ze wilde een gewonde man helpen",
          "Ze hoorde een schreeuw om hulp",
          "Ze wilde een klacht indienen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de reactie van de burgemeester op de situatie?",
        options: [
          "Hij vond het perfect geregeld",
          "Hij prees de vrouw voor haar moed",
          "Hij noemde het een schandalige situatie",
          "Hij beloofde betere training voor hulpverleners"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk probleem ontstond er tijdens het telefoongesprek?",
        options: [
          "De vrouw sprak geen Nederlands",
          "De hulpdienst was overbelast",
          "De telefoonverbinding was slecht",
          "De vrouw was te emotioneel om duidelijk te spreken"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De vrouw kon de gewonde man niet helpen omdat ze geen Nederlands sprak.",
        isTrue: false
      },
      {
        statement: "De burgemeester van Watermaal-Bosvoorde vond de situatie onacceptabel.",
        isTrue: true
      },
      {
        statement: "De hulpdiensten weigerden Engels of Frans te spreken uit principe.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
    topicNumber: 1,
    article: {
      title: "Oosterweel-bypass opent op de Antwerpse ring: veel verkeershinder verwacht",
      summary: "Op de Antwerpse Ring is afgelopen nacht een tijdelijk stuk snelweg geopend, parallel met het viaduct van Merksem ter hoogte van de AFAS-Dome. De belangrijke stap in de Oosterweelwerken belooft veel verkeershinder met zich mee te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "stap",
          definition: "een actie of deel van een proces",
          sentence: "De eerste ___ in het project is voltooid.",
          answer: "stap"
        },
        {
          word: "belooft",
          definition: "zegt dat iets zal gebeuren of verwacht wordt",
          sentence: "De coach ___ zijn team een overwinning.",
          answer: "belooft"
        },
        {
          word: "viaduct",
          definition: "een brug waar een weg of spoor over gaat",
          sentence: "Het nieuwe ___ verbindt de twee stadsdelen.",
          answer: "viaduct"
        },
        {
          word: "ring",
          definition: "een rondweg of rondweg rond een stad",
          sentence: "De Antwerpse ___ maakt deel uit van het stadswegennet.",
          answer: "ring"
        },
        {
          word: "parallel",
          definition: "naast elkaar, in dezelfde richting",
          sentence: "Deze weg loopt ___ aan de snelweg.",
          answer: "parallel"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De coach ___ zijn team een overwinning.",
          answer: "belooft"
        },
        {
          sentence: "De Antwerpse ___ maakt deel uit van het stadswegennet.",
          answer: "ring"
        },
        {
          sentence: "Het nieuwe ___ verbindt de twee stadsdelen.",
          answer: "viaduct"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofdonderwerp van dit nieuwsbericht?",
        options: [
          "De opening van een nieuwe winkel",
          "De aanleg van een tijdelijke snelweg",
          "De vernieuwing van het Antwerpse stadscentrum",
          "De verkeersproblemen in heel België"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is deze gebeurtenis belangrijk voor Antwerpen?",
        options: [
          "Het maakt de stad mooier",
          "Het vermindert het verkeer in de stad",
          "Het is een belangrijke stap in een groot infrastructuurproject",
          "Het betekent het einde van alle Oosterweelwerken"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het effect van deze opening op korte termijn?",
        options: [
          "Er zal minder verkeer zijn",
          "Er wordt een nieuw park gebouwd",
          "Het zal meer verkeershinder veroorzaken",
          "De ringweg wordt permanent gesloten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het nieuwe wegdeel is permanent en vervangt de bestaande ringweg.",
        isTrue: false
      },
      {
        statement: "De opening van deze weg vindt plaats tijdens de nacht om hinder te beperken.",
        isTrue: true
      },
      {
        statement: "De Oosterweelwerken zijn volledig afgerond met deze stap.",
        isTrue: false
      }
    ]
  }
];
