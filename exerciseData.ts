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
    title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambtenaren",
    topicNumber: 1,
    article: {
      title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambtenaren",
      summary: "Na één maand begint de shutdown de Amerikanen zwaar te raken – niet alleen onbetaalde ambtenaren, maar bijvoorbeeld ook steuntrekkers. Worden wél netjes verder betaald: immigratie-agenten."
    },
    vocabulary: {
      words: [
        {
          word: "betaald",
          definition: "geld ontvangen voor geleverd werk",
          sentence: "Sommige werknemers worden nog wel ___.",
          answer: "betaald"
        },
        {
          word: "maand",
          definition: "een periode van ongeveer 30 dagen",
          sentence: "Na een ___ is de situatie ernstig.",
          answer: "maand"
        },
        {
          word: "shutdown",
          definition: "tijdelijke sluiting of stopzetting",
          sentence: "De ___ duurt al een maand.",
          answer: "shutdown"
        },
        {
          word: "agenten",
          definition: "mensen die voor een organisatie of overheid werken",
          sentence: "De immigratie-___ werken nog steeds door.",
          answer: "agenten"
        },
        {
          word: "immigratie",
          definition: "het binnenkomen van mensen in een nieuw land",
          sentence: "De ___ agenten zijn gewoon doorbetaald.",
          answer: "immigratie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ agenten zijn gewoon doorbetaald.",
          answer: "immigratie"
        },
        {
          sentence: "De immigratie-___ werken nog steeds door.",
          answer: "agenten"
        },
        {
          sentence: "De ___ duurt al een maand.",
          answer: "shutdown"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een 'shutdown' in deze context?",
        options: [
          "Een feest",
          "Een vakantie",
          "Een tijdelijke stop",
          "Een nieuwe start"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie worden er direct geraakt door de shutdown?",
        options: [
          "Alleen politici",
          "Alleen ambtenaren",
          "Ook steuntrekkers en anderen",
          "Alleen buitenlanders"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurt er met de immigratie-agenten?",
        options: [
          "Ze worden ontslagen",
          "Ze worden niet betaald",
          "Ze worden wel doorbetaald",
          "Ze krijgen een bonus"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De shutdown duurt al een maand.",
        isTrue: true
      },
      {
        statement: "Alleen ambtenaren worden geraakt door de shutdown.",
        isTrue: false
      },
      {
        statement: "Immigratie-agenten worden nog steeds betaald.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
    topicNumber: 1,
    article: {
      title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
      summary: "Volgens toponderhandelaars van China en de VS zijn de “grote lijnen” van een akkoord beklonken. Haalt de dealmaker-in-chief tijdens zijn rondreis in Azië een handelsdeal met China binnen?"
    },
    vocabulary: {
      words: [
        {
          word: "volgens",
          definition: "zoals door iemand gezegd of geschreven",
          sentence: "___ de krant was het een mooie dag.",
          answer: "Volgens"
        },
        {
          word: "rondreis",
          definition: "een reis waarbij meerdere plaatsen worden bezocht",
          sentence: "Hun ___ door Europa duurde drie weken.",
          answer: "rondreis"
        },
        {
          word: "tijdens",
          definition: "een voorzetsel dat aangeeft dat iets tegelijk met iets anders gebeurt",
          sentence: "Hij was aan het werken ___ de vergadering.",
          answer: "tijdens"
        },
        {
          word: "Komt",
          definition: "een werkwoord dat aangeeft wat iemand of iets doet, nu of in de toekomst",
          sentence: "___ hij morgen naar school?",
          answer: "Komt"
        },
        {
          word: "toenadering",
          definition: "het dichter bij elkaar komen, meestal na een conflict",
          sentence: "Na het gesprek was er weer ___ tussen de twee.",
          answer: "toenadering"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hun ___ door Europa duurde drie weken.",
          answer: "rondreis"
        },
        {
          sentence: "___ hij morgen naar school?",
          answer: "Komt"
        },
        {
          sentence: "___ de krant was het een mooie dag.",
          answer: "Volgens"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel vooral over?",
        options: [
          "Een vakantie van Trump",
          "Een sportwedstrijd in China",
          "Onderhandelingen tussen de VS en China",
          "Een feest in Azië"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de toponderhandelaars?",
        options: [
          "Ze organiseren feesten",
          "Ze maken internationale afspraken",
          "Ze geven les op school",
          "Ze zijn atleten in de Olympische Spelen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het resultaat van de besprekingen?",
        options: [
          "Er is meer oorlog gekomen",
          "Er zijn nieuwe spelregels gemaakt",
          "Er is een akkoord bereikt",
          "Er is niets besloten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De tekst gaat over een mogelijke ontmoeting tussen Trump en de leider van China.",
        isTrue: true
      },
      {
        statement: "Trump heeft al een handelsdeal met China ondertekend tijdens zijn reis.",
        isTrue: false
      },
      {
        statement: "Toponderhandelaars hebben de hoofdafspraken van een akkoord vastgelegd.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Koerdische PKK haalt alle strijders weg uit Turkije",
    topicNumber: 1,
    article: {
      title: "Koerdische PKK haalt alle strijders weg uit Turkije",
      summary: "Turkije en de Koerdische PKK hebben een nieuw akkoord. De PKK-strijders zullen zich terugtrekken uit Turkije. Dit is een historische stap in hun onderhandelingen. Maar het akkoord is het resultaat van achterkamertjespolitiek."
    },
    vocabulary: {
      words: [
        {
          word: "strijders",
          definition: "mensen die vechten in een oorlog",
          sentence: "De ___ vechten voor een zaak.",
          answer: "strijders"
        },
        {
          word: "stap",
          definition: "een actie die je neemt",
          sentence: "De eerste ___ is vaak het moeilijkst.",
          answer: "stap"
        },
        {
          word: "terugtrekken",
          definition: "weggaan van een plaats",
          sentence: "Soldaten ___ zich uit een gebied.",
          answer: "terugtrekken"
        },
        {
          word: "achterkamertjespolitiek",
          definition: "geheime politieke deals",
          sentence: "___ gebeurt vaak zonder openbaarheid.",
          answer: "achterkamertjespolitiek"
        },
        {
          word: "Turkije",
          definition: "een land in Europa en Azië",
          sentence: "___ is het land waar de PKK zich terugtrekt.",
          answer: "Turkije"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is het land waar de PKK zich terugtrekt.",
          answer: "Turkije"
        },
        {
          sentence: "___ gebeurt vaak zonder openbaarheid.",
          answer: "achterkamertjespolitiek"
        },
        {
          sentence: "De ___ vechten voor een zaak.",
          answer: "strijders"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'terugtrekken' in deze context?",
        options: [
          "vooruit bewegen",
          "teruggaan",
          "stil blijven",
          "rennen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'achterkamertjespolitiek'?",
        options: [
          "openbare vergaderingen",
          "geheime politieke deals",
          "sportevenementen",
          "kooklessen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is dit akkoord historisch?",
        options: [
          "Omdat het nooit eerder is gebeurd",
          "Omdat het om eten gaat",
          "Omdat het in de krant staat",
          "Omdat het niet belangrijk is"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De PKK-strijders blijven in Turkije.",
        isTrue: false
      },
      {
        statement: "Het akkoord is het resultaat van onderhandelingen.",
        isTrue: true
      },
      {
        statement: "De PKK is een Turkse organisatie.",
        isTrue: false
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
    title: "Wat denken de Ronsenaars over al die PFAS? “Ik blijf eten uit mijn moestuin, PFAS of niet”",
    topicNumber: 1,
    article: {
      title: "Wat denken de Ronsenaars over al die PFAS? “Ik blijf eten uit mijn moestuin, PFAS of niet”",
      summary: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben. “We hopen dat de stad weet waar ze mee bezig is. Zolang we maar niet het nieuwe Zwijndrecht worden.”"
    },
    vocabulary: {
      words: [
        {
          word: "worden",
          definition: "zijn, veranderen in",
          sentence: "Zolang we maar niet het nieuwe Zwijndrecht worden.",
          answer: "worden"
        },
        {
          word: "heerst",
          definition: "is aanwezig, gebeurt veel",
          sentence: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben.",
          answer: "heerst"
        },
        {
          word: "weet",
          definition: "kent, heeft kennis van",
          sentence: "“We hopen dat de stad weet waar ze mee bezig is.”",
          answer: "weet"
        },
        {
          word: "hebben",
          definition: "in bezit zijn van, hebben",
          sentence: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben.",
          answer: "hebben"
        },
        {
          word: "zolang",
          definition: "gedurende de tijd dat, onder de voorwaarde dat",
          sentence: "Zolang we maar niet het nieuwe Zwijndrecht worden.",
          answer: "zolang"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zolang we maar niet het nieuwe Zwijndrecht worden.",
          answer: "worden"
        },
        {
          sentence: "Zolang we maar niet het nieuwe Zwijndrecht worden.",
          answer: "zolang"
        },
        {
          sentence: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben.",
          answer: "hebben"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel vooral over?",
        options: [
          "Over reizen naar andere landen",
          "Over gezond eten uit de tuin",
          "Over een stad met veel PFAS in het bloed",
          "Over sporten in Ronse"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de houding van de bewoners volgens het artikel?",
        options: [
          "Ze zijn erg bang en stoppen met alles",
          "Ze vertrouwen op de stad en blijven normaal leven",
          "Ze willen de stad verlaten",
          "Ze negeren het probleem volledig"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de belangrijkste boodschap van de titel?",
        options: [
          "Gezondheid is niet belangrijk",
          "Ronse is een gevaarlijke stad",
          "Ondanks problemen, het leven gaat door",
          "Iedereen moet nu Zwijndrecht worden"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van Ronse hebben allemaal erg hoge PFAS-waarden.",
        isTrue: false
      },
      {
        statement: "De bewoners hopen dat de stad weet wat het doet.",
        isTrue: true
      },
      {
        statement: "De bewoners willen net zoals in Zwijndrecht worden.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Amerikaanse shutdown",
    topicNumber: 1,
    article: {
      title: "Amerikaanse shutdown",
      summary: "Na een maand zonder geld begint de situatie moeilijk te worden voor Amerika. Sommige mensen krijgen nog wel geld, anderen niet."
    },
    vocabulary: {
      words: [
        {
          word: "geld",
          definition: "wat je gebruikt om iets te kopen, zoals euro's of dollars",
          sentence: "In de winkel betaal je met ___.",
          answer: "geld"
        },
        {
          word: "maand",
          definition: "een periode van tijd, 30 of 31 dagen",
          sentence: "Een jaar heeft twaalf ___.",
          answer: "maanden"
        },
        {
          word: "anderen",
          definition: "andere mensen of dingen",
          sentence: "Sommige mensen werken, ___ rusten uit.",
          answer: "anderen"
        },
        {
          word: "krijgen",
          definition: "iets ontvangen, krijgen",
          sentence: "Ik ___ een cadeau voor mijn verjaardag.",
          answer: "krijg"
        },
        {
          word: "mensen",
          definition: "meerdere personen, mannen en vrouwen",
          sentence: "Er werken veel ___ in dit gebouw.",
          answer: "mensen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik ___ een cadeau voor mijn verjaardag.",
          answer: "krijg"
        },
        {
          sentence: "In de winkel betaal je met ___.",
          answer: "geld"
        },
        {
          sentence: "Sommige mensen werken, ___ rusten uit.",
          answer: "anderen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Over welke periode gaat dit artikel?",
        options: [
          "1 week",
          "1 maand",
          "1 jaar",
          "1 dag"
        ],
        correctAnswer: 2
      },
      {
        question: "Krijgen alle ambtenaren nu geen geld?",
        options: [
          "Ja, alle ambtenaren",
          "Nee, alleen sommige",
          "Nee, alleen de anderen",
          "Ja, niemand krijgt geld"
        ],
        correctAnswer: 2
      },
      {
        question: "Gaat het hier om Amerika of Nederland?",
        options: [
          "Alleen Amerika",
          "Alleen Nederland",
          "Beide landen",
          "Geen van beide"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De shutdown duurt nu een maand.",
        isTrue: true
      },
      {
        statement: "Alle ambtenaren krijgen geen geld meer.",
        isTrue: false
      },
      {
        statement: "Sommige mensen krijgen nog wel geld.",
        isTrue: true
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
    title: "PKK strijders gaan weg uit Turkije",
    topicNumber: 1,
    article: {
      title: "PKK strijkers gaan weg uit Turkije",
      summary: "Turkije en de Koerdische groep PKK hebben een akkoord. De PKK-strijders zullen zich terugtrekken uit Turkije. Dit is een historische stap in de onderhandelingen. Maar het akkoord is het resultaat van politiek overleg achter gesloten deuren."
    },
    vocabulary: {
      words: [
        {
          word: "groep",
          definition: "Een aantal mensen bij elkaar.",
          sentence: "De ___ gaat samen sporten.",
          answer: "groep"
        },
        {
          word: "akkoord",
          definition: "Een overeenkomst.",
          sentence: "Ze hebben een ___ getekend.",
          answer: "akkoord"
        },
        {
          word: "PKK",
          definition: "Een groep mensen.",
          sentence: "De ___ is een groep.",
          answer: "PKK"
        },
        {
          word: "weg",
          definition: "Niet hier, maar ergens anders.",
          sentence: "Hij is ___ van huis.",
          answer: "weg"
        },
        {
          word: "strijders",
          definition: "Mensen die vechten.",
          sentence: "De soldaten zijn ook ___.",
          answer: "strijders"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De soldaten zijn ook ___.",
          answer: "strijders"
        },
        {
          sentence: "Hij is ___ van huis.",
          answer: "weg"
        },
        {
          sentence: "De ___ is een groep.",
          answer: "PKK"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'strijders'?",
        options: [
          "Mensen die vechten",
          "Een soort eten",
          "Een type auto",
          "Een muziekinstrument"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is 'onderhandelingen'?",
        options: [
          "Een soort dans",
          "Gesprekken om afspraken te maken",
          "Een soort game",
          "Een type schoen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'stap'?",
        options: [
          "Een beweging met je voet",
          "Een soort vogel",
          "Een soort insect",
          "Een soort plant"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Turkije is een land.",
        isTrue: true
      },
      {
        statement: "PKK is een soort auto.",
        isTrue: false
      },
      {
        statement: "Strijders zijn mensen die vechten.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Bouwproject",
    topicNumber: 1,
    article: {
      title: "Bouwproject",
      summary: "Er komen nieuwe huizen in een dorp. De mensen zijn blij. Maar in de stad is er protest tegen meer bouwen. Wat is wijs?"
    },
    vocabulary: {
      words: [
        {
          word: "mensen",
          definition: "personen",
          sentence: "De ___ zijn vriendelijk.",
          answer: "mensen"
        },
        {
          word: "dorp",
          definition: "een kleine plaats met huizen",
          sentence: "Het ___ is rustig en mooi.",
          answer: "dorp"
        },
        {
          word: "wijs",
          definition: "slim en goed",
          sentence: "Een ___ persoon denkt na.",
          answer: "wijs"
        },
        {
          word: "Bouwproject",
          definition: "een plan om iets te bouwen",
          sentence: "Het ___ is klaar.",
          answer: "Bouwproject"
        },
        {
          word: "protest",
          definition: "tegen iets zijn",
          sentence: "Er is ___ tegen het plan.",
          answer: "protest"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er is ___ tegen het plan.",
          answer: "protest"
        },
        {
          sentence: "De ___ zijn vriendelijk.",
          answer: "mensen"
        },
        {
          sentence: "Een ___ persoon denkt na.",
          answer: "wijs"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is het bouwproject?",
        options: [
          "In een dorp",
          "In een stad",
          "In een park",
          "In een school"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen de mensen in het dorp?",
        options: [
          "Ze werken",
          "Ze wonen",
          "Ze reizen",
          "Ze slapen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het tegenovergestelde van protest?",
        options: [
          "Steun",
          "Tegen",
          "Rust",
          "Lawaai"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het bouwproject is in een dorp.",
        isTrue: true
      },
      {
        statement: "De mensen in de stad zijn blij met het protest.",
        isTrue: false
      },
      {
        statement: "Een wijs persoon denkt na over wonen.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
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
          definition: "strenger maken, zoals van regels",
          sentence: "De minister wil de regels ___ om problemen te voorkomen.",
          answer: "aanscherpen"
        },
        {
          word: "minister",
          definition: "een belangrijk persoon in de regering",
          sentence: "De ___ van Binnenlandse Zaken maakt nieuwe plannen.",
          answer: "minister"
        },
        {
          word: "agenten",
          definition: "mensen die werken bij de politie",
          sentence: "De ___ houden de wijk veilig.",
          answer: "agenten"
        },
        {
          word: "klussen",
          definition: "extra werk doen, vaak naast een andere baan",
          sentence: "Hij wil graag ___ om meer geld te verdienen.",
          answer: "klussen"
        },
        {
          word: "politiemensen",
          definition: "mannen en vrouwen die bij de politie werken",
          sentence: "De ___ hebben een moeilijke taak.",
          answer: "politiemensen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van Binnenlandse Zaken maakt nieuwe plannen.",
          answer: "minister"
        },
        {
          sentence: "Hij wil graag ___ om meer geld te verdienen.",
          answer: "klussen"
        },
        {
          sentence: "De ___ hebben een moeilijke taak.",
          answer: "politiemensen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil de minister de regels aanscherpen?",
        options: [
          "Omdat er te weinig agenten zijn",
          "Omdat er veel misstanden zijn door het bijklussen",
          "Omdat de agenten geen andere hobby's hebben",
          "Omdat de minister zelf ook bijklust"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'bijklussen'?",
        options: [
          "Werken als een klusser voor huishoudens",
          "Werken bij de politie",
          "Werken naast je gewone baan",
          "Werken als een spion"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat dit artikel over?",
        options: [
          "Alleen over de agenten die bijklussen",
          "Alleen over de minister die nieuwe regels maakt",
          "Over hoe agenten vechten tijdens hun werk",
          "Over de nieuwe regels en waarom ze nodig zijn"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Alle agenten mogen niet meer bijklussen.",
        isTrue: false
      },
      {
        statement: "De minister wil de regels aanscherpen om problemen te voorkomen.",
        isTrue: true
      },
      {
        statement: "Alleen agenten mogen bijklussen, andere mensen niet.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Wat denken de Ronsenaars over al die PFAS?",
    topicNumber: 1,
    article: {
      title: "Wat denken de Ronsenaars over al die PFAS?",
      summary: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben. We hopen dat de stad weet waar ze mee bezig is. Zolang we maar niet het nieuwe Zwijndrecht worden."
    },
    vocabulary: {
      words: [
        {
          word: "denken",
          definition: "iets in je hoofd hebben",
          sentence: "Wat ___ de mensen in Ronse?",
          answer: "denken"
        },
        {
          word: "Ronsenaars",
          definition: "mensen uit Ronse",
          sentence: "De ___ zijn bezorgd.",
          answer: "Ronsenaars"
        },
        {
          word: "PFAS",
          definition: "een soort chemische stof",
          sentence: "Er is veel ___ in Ronse.",
          answer: "PFAS"
        },
        {
          word: "stad",
          definition: "een plaats waar veel mensen wonen",
          sentence: "De ___ van Ronse zoekt oplossingen.",
          answer: "stad"
        },
        {
          word: "worden",
          definition: "veranderen in iets anders",
          sentence: "We willen niet als Zwijndrecht ___.",
          answer: "worden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Wat ___ de mensen in Ronse?",
          answer: "denken"
        },
        {
          sentence: "Er is veel ___ in Ronse.",
          answer: "PFAS"
        },
        {
          sentence: "We willen niet als Zwijndrecht ___.",
          answer: "worden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover zijn de mensen in Ronse bezorgd?",
        options: [
          "Over het weer",
          "Over hun werk",
          "Over PFAS in hun bloed",
          "Over vakantieplannen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat hopen de mensen in Ronse?",
        options: [
          "Dat het stopt met regenen",
          "Dat de stad helpt",
          "Dat ze veel geld winnen",
          "Dat ze een nieuw huis krijgen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat willen de mensen in Ronse niet worden?",
        options: [
          "Een nieuwe stad",
          "Een nieuwe school",
          "Een nieuwe Zwijndrecht",
          "Een nieuwe supermarkt"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De mensen in Ronse zijn blij met de PFAS.",
        isTrue: false
      },
      {
        statement: "De stad Ronse wil de mensen helpen.",
        isTrue: true
      },
      {
        statement: "De mensen in Ronse worden net als in Zwijndrecht.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambtenaren",
    topicNumber: 1,
    article: {
      title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambtenaren",
      summary: "Na één maand begint de shutdown de Amerikanen zwaar te raken – niet alleen onbetaalde ambtenaren, maar bijvoorbeeld ook steuntrekkers. Worden wél netjes verder betaald: immigratie-agenten."
    },
    vocabulary: {
      words: [
        {
          word: "niet",
          definition: "Ontkenning; het tegenovergestelde van 'wel'",
          sentence: "De ambtenaren worden ___ betaald, wat tot onvrede leidt.",
          answer: "niet"
        },
        {
          word: "worden",
          definition: "Een werkwoord, hier gebruikt in de betekenis van 'zijn' of 'worden'",
          sentence: "De agenten ___ nog steeds betaald, ook al werken ze niet.",
          answer: "worden"
        },
        {
          word: "betaald",
          definition: "Geld ontvangen voor geleverd werk",
          sentence: "Sommige werknemers worden nog steeds ___ tijdens de shutdown.",
          answer: "betaald"
        },
        {
          word: "immigratie",
          definition: "Het proces van immigratie, oftewel immigratie",
          sentence: "De ___-agenten blijven werken ondanks de shutdown.",
          answer: "immigratie"
        },
        {
          word: "ambtenaren",
          definition: "Personen die werken voor de overheid",
          sentence: "De ___ wachten op hun salaris tijdens de shutdown.",
          answer: "ambtenaren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ wachten op hun salaris tijdens de shutdown.",
          answer: "ambtenaren"
        },
        {
          sentence: "De ambtenaren worden ___ betaald, wat tot onvrede leidt.",
          answer: "niet"
        },
        {
          sentence: "De agenten ___ nog steeds betaald, ook al werken ze niet.",
          answer: "worden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een 'shutdown' in de context van de overheid?",
        options: [
          "Een feestelijke sluiting",
          "Een tijdelijke sluiting door gebrek aan budget",
          "Een permanente sluiting van diensten",
          "Een soort van belastingverlaging"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie wordt er specifiek genoemd als 'wel' betaald tijdens de shutdown?",
        options: [
          "Alle ambtenaren",
          "Alleen de hoogst genote ambtenaren",
          "De immigratie-agenten",
          "De steuntrekkers"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat voor effect heeft de shutdown op de meeste ambtenaren?",
        options: [
          "Ze krijgen een bonus",
          "Ze worden ontslagen",
          "Ze worden niet meer betaald",
          "Ze krijgen extra verlof"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De shutdown treft alleen ambtenaren, en geen andere groepen.",
        isTrue: false
      },
      {
        statement: "Immigratie-agenten worden nog steeds betaald tijdens de shutdown.",
        isTrue: true
      },
      {
        statement: "De shutdown duurt al meer dan een maand, maar heeft nog geen gevolgen.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
    topicNumber: 1,
    article: {
      title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
      summary: "Volgens toponderhandelaars van China en de VS zijn de grote lijnen van een akkoord beklonken. Haalt de dealmaker-in-chief tijdens zijn rondreis in Azië een handelsdeal met China binnen?"
    },
    vocabulary: {
      words: [
        {
          word: "akkoord",
          definition: "Een overeenkomst of afspraak tussen partijen.",
          sentence: "Het ___ werd na lang overleg getekend.",
          answer: "akkoord"
        },
        {
          word: "toenadering",
          definition: "Het nader tot elkaar komen, het verbeteren van de relatie.",
          sentence: "De ___ tussen de twee landen is duidelijk merkbaar.",
          answer: "toenadering"
        },
        {
          word: "deal",
          definition: "Een afspraak of overeenkomst, vaak in zakelijke context.",
          sentence: "De ___ werd gesloten na intensieve onderhandelingen.",
          answer: "deal"
        },
        {
          word: "toponderhandelaars",
          definition: "De belangrijkste personen die namens een land of organisatie onderhandelen.",
          sentence: "De ___ van beide landen hebben een akkoord bereikt.",
          answer: "toponderhandelaars"
        },
        {
          word: "rondreis",
          definition: "Een reis waarbij men verschillende plaatsen achter elkaar bezoekt.",
          sentence: "Tijdens zijn ___ door Azië ontmoette hij verschillende leiders.",
          answer: "rondreis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens zijn ___ door Azië ontmoette hij verschillende leiders.",
          answer: "rondreis"
        },
        {
          sentence: "De ___ van beide landen hebben een akkoord bereikt.",
          answer: "toponderhandelaars"
        },
        {
          sentence: "Het ___ werd na lang overleg getekend.",
          answer: "akkoord"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als een overeenkomst is 'afgerond'?",
        options: [
          "Het is nog in onderhandeling.",
          "Het is definitief en afgesloten.",
          "Het is tijdelijk opgeschort.",
          "Het is alleen mondeling overeengekomen."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat wordt bedoeld met 'toenadering' in een politieke context?",
        options: [
          "Het fysiek naderen van een persoon.",
          "Het aangaan van een romantische relatie.",
          "Het verbeteren van de diplomatieke relaties tussen landen.",
          "Het terugtrekken uit een alliantie."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'handelsdeal'?",
        options: [
          "Een financiële transactie tussen individuen.",
          "Een weddenschap over de handelsmarkt.",
          "Een overeenkomst tussen landen over de handel van goederen.",
          "Een gezelschapsspel over economie."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De toponderhandelaars van China en de VS hebben een akkoord bereikt dat alle details alvast vastlegt.",
        isTrue: false
      },
      {
        statement: "Een rondreis door Azië kan meerdere landen behelsen.",
        isTrue: true
      },
      {
        statement: "Een handelsdeal is altijd formeel en schriftelijk vastgelegd.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Koerdische PKK haalt alle strijders weg uit Turkije",
    topicNumber: 1,
    article: {
      title: "Koerdische PKK haalt alle strijders weg uit Turkije",
      summary: "Turkije en de Koerdische separatisten van de PKK zetten een historische nieuwe stap in hun onderhandelingen. De PKK-strijders zullen zich terugtrekken uit Turkije. Maar het akkoord blijft het resultaat van achterkamertjespolitiek."
    },
    vocabulary: {
      words: [
        {
          word: "historische",
          definition: "betrekking hebbend op of behorend tot de geschiedenis",
          sentence: "Deze overeenkomst markeert een ___ mijlpaal in de betrekkingen.",
          answer: "historische"
        },
        {
          word: "achterkamertjespolitiek",
          definition: "politieke besluitvorming die plaatsvindt in besloten kringen, zonder transparantie",
          sentence: "Critici noemden het beleid een vorm van ___.",
          answer: "achterkamertjespolitiek"
        },
        {
          word: "terugtrekken",
          definition: "zich terugtrekken of teruggaan naar een eerdere positie",
          sentence: "De troepen zullen zich ___ uit de betwiste regio.",
          answer: "terugtrekken"
        },
        {
          word: "akkoord",
          definition: "overeenkomst tussen partijen, vaak na onderhandelingen",
          sentence: "Het vredes___ werd ondertekend na maanden van onderhandelingen.",
          answer: "akkoord"
        },
        {
          word: "akkoord",
          definition: "overeenkomst tussen partijen over bepaalde kwesties",
          sentence: "Het politieke ___ werd unaniem goedgekeurd.",
          answer: "akkoord"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het vredes___ werd ondertekend na maanden van onderhandelingen.",
          answer: "akkoord"
        },
        {
          sentence: "Het politieke ___ werd unaniem goedgekeurd.",
          answer: "akkoord"
        },
        {
          sentence: "Deze overeenkomst markeert een ___ mijlpaal in de betrekkingen.",
          answer: "historische"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'terugtrekken' in deze context?",
        options: [
          "vooruitgaan",
          "terugkeren",
          "evacueren",
          "zich terugtrekken"
        ],
        correctAnswer: 4
      },
      {
        question: "Welk woord beschrijft het tegenovergestelde van openlijke diplomatie?",
        options: [
          "transparantie",
          "onderhandeling",
          "achterkamertjespolitiek",
          "internationale samenwerking"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat kenmerkt een 'historische' gebeurtenis?",
        options: [
          "Het is onbeduidend en snel vergeten.",
          "Het heeft grote gevolgen voor de toekomst.",
          "Het is een alledaagse gebeurtenis.",
          "Het is alleen lokaal belangrijk."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De PKK-strijders keren terug naar Turkije na de onderhandelingen.",
        isTrue: false
      },
      {
        statement: "Het akkoord is het resultaat van achterkamertjespolitiek, wat betekent dat het niet transparant is.",
        isTrue: true
      },
      {
        statement: "De onderhandelingen vonden plaats zonder internationale bemiddeling.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Was ons budget ongelimiteerd, dan hadden wij ook een vrijstaand huis op den buiten gekocht",
    topicNumber: 1,
    article: {
      title: "Was ons budget ongelimiteerd, dan hadden wij ook een vrijstaand huis op den buiten gekocht",
      summary: "Nergens in Vlaanderen werd de voorbije jaren zoveel grond aangesneden voor woningen als in Deinze, en tegen de zin van het lokale bestuur in. Maar de bewoners, die zijn er gelukkig. Wil de Vlaming wel een bouwshift, of blijven we dromen van een groot huis in het groen? “Dat kortzichtig protest tegen hoger bouwen moet stoppen.”"
    },
    vocabulary: {
      words: [
        {
          word: "Vlaming",
          definition: "een inwoner van Vlaanderen, het Nederlandstalige deel van België",
          sentence: "De gemiddelde ___ houdt van ruimte en groen.",
          answer: "Vlaming"
        },
        {
          word: "tegen de zin van",
          definition: "tegen de wil of wens van iemand of iets",
          sentence: "Hij handelde ___ zijn ouders, die hem verboden hadden om naar het feest te gaan.",
          answer: "tegen de zin van"
        },
        {
          word: "bestuur",
          definition: "de groep mensen die een organisatie of gebied leidt en bestuurt",
          sentence: "Het stads___ beslist over nieuwe bouwprojecten.",
          answer: "bestuur"
        },
        {
          word: "bewoners",
          definition: "mensen die in een bepaalde plaats of gebouw wonen",
          sentence: "De ___ van het nieuwe complex zijn erg tevreden.",
          answer: "bewoners"
        },
        {
          word: "kortzichtig",
          definition: "niet vooruitdenkend, zonder de lange termijn in beschouwing te nemen",
          sentence: "Het is ___ om te denken dat we zonder meer bouwen onze problemen oplossen.",
          answer: "kortzichtig"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het stads___ beslist over nieuwe bouwprojecten.",
          answer: "bestuur"
        },
        {
          sentence: "De gemiddelde ___ houdt van ruimte en groen.",
          answer: "Vlaming"
        },
        {
          sentence: "Het is ___ om te denken dat we zonder meer bouwen onze problemen oplossen.",
          answer: "kortzichtig"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'onlimiteerd' in de context van de titel?",
        options: [
          "Zonder beperking",
          "Zeer duur",
          "Niet beschikbaar",
          "Gedeeltelijk beschikbaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom wordt er gesproken over 'tegen de zin van' het lokale bestuur?",
        options: [
          "Omdat het bestuur de bouw steunde",
          "Omdat de bewoners tegen waren",
          "Omdat de grond ongeschikt was",
          "Omdat de gemeente de ontwikkeling wilde maar de bewoners niet"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Bouw altijd meer om problemen op te lossen",
          "Stop met bouwen om groen te sparen",
          "Bouw hoger om ruimte te besparen, maar niet tegen elke prijs",
          "Verhuis naar een andere stad als er te veel gebouwd wordt"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van Deinze zijn gelukkig met de nieuwe woningen.",
        isTrue: true
      },
      {
        statement: "Het lokale bestuur van Deinze was voorstander van de nieuwe bouwprojecten.",
        isTrue: false
      },
      {
        statement: "De auteur pleit voor het stoppen van alle bouwactiviteiten.",
        isTrue: false
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
    title: "Wat denken de Ronsenaars over al die PFAS? “Ik blijf eten uit mijn moestuin, PFAS of niet”",
    topicNumber: 1,
    article: {
      title: "Wat denken de Ronsenaars over al die PFAS? “Ik blijf eten uit mijn moestuin, PFAS of niet”",
      summary: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben. “We hopen dat de stad weet waar ze mee bezig is. Zolang we maar niet het nieuwe Zwijndrecht worden.”"
    },
    vocabulary: {
      words: [
        {
          word: "heerst",
          definition: "aanwezig is, voorkomt",
          sentence: "Er heerst onrust in de stad.",
          answer: "heerst"
        },
        {
          word: "PFAS",
          definition: "een groep van door de mens gemaakte chemicaliën",
          sentence: "PFAS zijn schadelijk voor de gezondheid.",
          answer: "PFAS"
        },
        {
          word: "Ronsenaars",
          definition: "inwoners van Ronse",
          sentence: "De Ronsenaars maken zich zorgen over hun gezondheid.",
          answer: "Ronsenaars"
        },
        {
          word: "Zwijndrecht",
          definition: "een gemeente in Nederland, bekend om PFAS-verontreiniging",
          sentence: "Zij willen niet het volgende Zwijndrecht worden.",
          answer: "Zwijndrecht"
        },
        {
          word: "onrust",
          definition: "gevoel van bezorgdheid of verontrusting",
          sentence: "Er is onrust onder de bewoners.",
          answer: "onrust"
        }
      ],
      fillInBlanks: [
        {
          sentence: "PFAS zijn schadelijk voor de gezondheid.",
          answer: "PFAS"
        },
        {
          sentence: "De Ronsenaars maken zich zorgen over hun gezondheid.",
          answer: "Ronsenaars"
        },
        {
          sentence: "Er is onrust onder de bewoners.",
          answer: "onrust"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent de term 'PFAS'?",
        options: [
          "Een soort groente",
          "Een type huisdier",
          "Een groep chemicaliën",
          "Een stad in België"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom zijn de bewoners van Ronse bezorgd?",
        options: [
          "Ze hebben te veel groenten",
          "Er is een tekort aan water",
          "Hoge PFAS-waarden in hun bloed",
          "Er is een nieuwe diersoort ontdekt"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de houding van de Ronsenaars tegenover hun situatie?",
        options: [
          "Ze zijn volledig apathisch",
          "Ze zijn extreem pessimistisch",
          "Ze zijn voorzichtig optimistisch",
          "Ze zijn volledig in paniek"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Ronsenaars hebben zeer lage PFAS-waarden in hun bloed.",
        isTrue: false
      },
      {
        statement: "De Ronsenaars hopen dat de stad weet waarmee ze bezig is.",
        isTrue: true
      },
      {
        statement: "Ronse is een stad in Nederland.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Amerikaanse shutdown: wat zijn de gevolgen?",
    topicNumber: 1,
    article: {
      title: "Amerikaanse shutdown: wat zijn de gevolgen?",
      summary: "Na een maand begint de shutdown Amerikaanse burgers hard te raken. Niet alleen onbetaalde ambtenaren, maar ook anderen zoals steuntrekkers worden geraakt. Echter, sommige groepen zoals immigratie-agenten worden wel doorbetaald."
    },
    vocabulary: {
      words: [
        {
          word: "agenten",
          definition: "mensen die werken voor veiligheid of handhaving",
          sentence: "De ___ houden zich bezig met immigratiecontroles.",
          answer: "agenten"
        },
        {
          word: "steuntrekkers",
          definition: "mensen die geld krijgen van de overheid voor levensonderhoud",
          sentence: "Ook ___ hebben last van de shutdown.",
          answer: "steuntrekkers"
        },
        {
          word: "shutdown",
          definition: "een situatie waarin de overheid tijdelijk stopt met werken",
          sentence: "De ___ duurt al heel lang.",
          answer: "shutdown"
        },
        {
          word: "immigratie",
          definition: "het komen naar een nieuw land om daar te wonen",
          sentence: "___ is een belangrijk onderwerp in de politiek.",
          answer: "immigratie"
        },
        {
          word: "gevolgen",
          definition: "de resultaten of effecten van iets",
          sentence: "Wat zijn de ___ van de shutdown?",
          answer: "gevolgen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een belangrijk onderwerp in de politiek.",
          answer: "immigratie"
        },
        {
          sentence: "Wat zijn de ___ van de shutdown?",
          answer: "gevolgen"
        },
        {
          sentence: "De ___ duurt al heel lang.",
          answer: "shutdown"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie worden het meest geraakt door de shutdown?",
        options: [
          "Alleen ambtenaren",
          "Alleen mensen die steun krijgen",
          "Alleen immigratie-agenten",
          "Zowel ambtenaren als anderen"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een gevolg van de shutdown?",
        options: [
          "Ambtenaren krijgen direct geen salaris meer",
          "Steuntrekkers krijgen geen geld meer",
          "Immigratie-agenten worden ontslagen",
          "De overheid stopt helemaal met werken"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom worden sommige groepen wel doorbetaald?",
        options: [
          "Omdat ze niet belangrijk zijn",
          "Omdat hun werk essentieel is voor de samenleving",
          "Omdat de overheid hen vergeet",
          "Omdat ze niet voor de overheid werken"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De shutdown duurt nu een maand.",
        isTrue: true
      },
      {
        statement: "Steuntrekkers worden niet geraakt door de shutdown.",
        isTrue: false
      },
      {
        statement: "Immigratie-agenten worden wel doorbetaald tijdens de shutdown.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
    topicNumber: 1,
    article: {
      title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
      summary: "Volgens toponderhandelaars van China en de VS zijn de 'grote lijnen' van een akkoord beklonken. Haalt de dealmaker-in-chief tijdens zijn rondreis in Azië een handelsdeal met China binnen?"
    },
    vocabulary: {
      words: [
        {
          word: "toenadering",
          definition: "Het dichter bij elkaar komen, bijvoorbeeld in een relatie",
          sentence: "Er was sprake van een ___ tussen de twee landen.",
          answer: "toenadering"
        },
        {
          word: "VS",
          definition: "Verenigde Staten van Amerika",
          sentence: "De ___ is een groot land in Noord-Amerika.",
          answer: "VS"
        },
        {
          word: "akkoord",
          definition: "Overeenkomst, wanneer partijen het eens zijn",
          sentence: "Ze zijn tot een ___ gekomen.",
          answer: "akkoord"
        },
        {
          word: "Komt",
          definition: "Hulpwerkwoord dat aangeeft dat iets in de toekomst gebeurt",
          sentence: "___ het morgen regenen?",
          answer: "Komt"
        },
        {
          word: "Azië",
          definition: "Het werelddeel ten oosten van Europa",
          sentence: "China ligt in ___.",
          answer: "Azië"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ het morgen regenen?",
          answer: "Komt"
        },
        {
          sentence: "China ligt in ___.",
          answer: "Azië"
        },
        {
          sentence: "Er was sprake van een ___ tussen de twee landen.",
          answer: "toenadering"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'rondreis' in deze context?",
        options: [
          "Een reis waarbij meerdere plaatsen worden bezocht",
          "Een enkele reis naar één plaats",
          "Een vakantie thuis",
          "Een reis naar de maan"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de betekenis van 'akkoord' in deze tekst?",
        options: [
          "Overeenkomst tussen partijen",
          "Een muziekstuk",
          "Een soort gerecht",
          "Een sportevenement"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar staat 'VS' voor in deze context?",
        options: [
          "Verenigde Staten",
          "Vlaamse Stam",
          "Voetbal Samenwerking",
          "Vrije Stad"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Trump bezoekt Azië tijdens zijn reis.",
        isTrue: true
      },
      {
        statement: "China en de VS hebben een akkoord ondertekend.",
        isTrue: true
      },
      {
        statement: "Trump reist alleen naar China.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "PKK strijders verlaten Turkije",
    topicNumber: 1,
    article: {
      title: "PKK strijkers verlaten Turkije",
      summary: "Turkije en de PKK, een Koerdische groep, hebben een akkoord. PKK-strijders zullen zich terugtrekken uit Turkije. Dit akkoord is het resultaat van onderhandelingen, maar de details zijn onduidelijk."
    },
    vocabulary: {
      words: [
        {
          word: "Turkije",
          definition: "Een land.",
          sentence: "___ ligt gedeeltelijk in Europa en Azië.",
          answer: "Turkije"
        },
        {
          word: "strijders",
          definition: "Mensen die vechten, vaak in een oorlog.",
          sentence: "De ___ vechten voor hun land of idealen.",
          answer: "strijders"
        },
        {
          word: "onderhandelingen",
          definition: "Gesprekken om tot een besluit te komen.",
          sentence: "De ___ duurden vele uren.",
          answer: "onderhandelingen"
        },
        {
          word: "PKK",
          definition: "Een politieke of militaire groep.",
          sentence: "De ___ vecht voor rechten van Koerden.",
          answer: "PKK"
        },
        {
          word: "akkoord",
          definition: "Een overeenkomst tussen partijen.",
          sentence: "Ze hebben een ___ ondertekend om samen te werken.",
          answer: "akkoord"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ duurden vele uren.",
          answer: "onderhandelingen"
        },
        {
          sentence: "De ___ vecht voor rechten van Koerden.",
          answer: "PKK"
        },
        {
          sentence: "Ze hebben een ___ ondertekend om samen te werken.",
          answer: "akkoord"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'strijders' in deze context?",
        options: [
          "Een soort sporters",
          "Mensen die vechten in een conflict",
          "Een type politicus",
          "Iemand die ergens tegen is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdboodschap van de tekst?",
        options: [
          "Turkije valt een ander land aan",
          "PKK-strijders verlaten Turkije volledig",
          "Er wordt een nieuwe sport uitgevonden",
          "Koffie wordt de nationale drank"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van dit akkoord?",
        options: [
          "Turkije wordt opgedeeld",
          "De PKK regeert over heel Turkije",
          "PKK-strijders zijn niet langer in Turkije",
          "Koffie wordt illegaal in Turkije"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Turkije en de PKK hebben een akkoord ondertekend.",
        isTrue: true
      },
      {
        statement: "De PKK-strijders blijven in Turkije na het akkoord.",
        isTrue: false
      },
      {
        statement: "Het akkoord is het resultaat van onderhandelingen.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Bouwgrond in Deinze: bewoners blij, bestuur niet",
    topicNumber: 1,
    article: {
      title: "Bouwgrond in Deinze: bewoners blij, bestuur niet",
      summary: "In Deinze is er veel nieuwe bouwgrond, maar het bestuur is niet blij. De bewoners zijn wel blij. Willen Vlamingen echt meer bouwen of blijven ze dromen over een groot huis met een tuin? Dit protest moet stoppen."
    },
    vocabulary: {
      words: [
        {
          word: "protest",
          definition: "iets zeggen of doen omdat je het niet eens bent met iets",
          sentence: "Er was veel ___ tegen het nieuwe plan.",
          answer: "protest"
        },
        {
          word: "bewoners",
          definition: "mensen die in een plaats wonen",
          sentence: "De ___ van de nieuwe wijk zijn heel tevreden.",
          answer: "bewoners"
        },
        {
          word: "Vlamingen",
          definition: "mensen die in Vlaanderen wonen",
          sentence: "Veel ___ willen een eigen huis met een tuin.",
          answer: "Vlamingen"
        },
        {
          word: "huis",
          definition: "plaats waar iemand woont",
          sentence: "Het ___ heeft drie slaapkamers en een grote tuin.",
          answer: "huis"
        },
        {
          word: "tuin",
          definition: "een stuk grond rond een huis met planten en gras",
          sentence: "De kinderen spelen in de ___ .",
          answer: "tuin"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Veel ___ willen een eigen huis met een tuin.",
          answer: "Vlamingen"
        },
        {
          sentence: "Er was veel ___ tegen het nieuwe plan.",
          answer: "protest"
        },
        {
          sentence: "De ___ van de nieuwe wijk zijn heel tevreden.",
          answer: "bewoners"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is het bestuur van Deinze niet blij met de nieuwe bouwgrond?",
        options: [
          "Omdat er te veel bewoners zijn",
          "Omdat ze willen dat er minder wordt gebouwd",
          "Omdat het veel geld kost",
          "Omdat ze liever geen verandering willen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de wens van veel Vlamingen volgens de tekst?",
        options: [
          "Een klein appartement in de stad",
          "Een groot huis met een tuin eromheen",
          "Geen huis maar een caravan",
          "Een huis zonder tuin om geld te besparen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Iedereen moet in een flat gaan wonen",
          "Bouwen moet stoppen om het milieu te sparen",
          "Mensen willen ruimte om te wonen, niet alleen maar hoge gebouwen",
          "De overheid moet alle huizen gratis maken"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van Deinze zijn ongelukkig met de nieuwe bouwgrond.",
        isTrue: false
      },
      {
        statement: "Vlamingen willen graag een eigen huis met wat ruimte eromheen.",
        isTrue: true
      },
      {
        statement: "Het protest is tegen het bouwen van huizen, dus tegen meer woningen.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
    topicNumber: 1,
    article: {
      title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
      summary: "Meer agenten klussen bij, en dat leidt soms tot mistoestanden. Minister van Binnenlandse Zaken Bernard Quintin (MR) wil de regels aanscherpen."
    },
    vocabulary: {
      words: [
        {
          word: "regels",
          definition: "afspraken die je moet volgen",
          sentence: "De nieuwe ___ zijn strenger dan voorheen.",
          answer: "regels"
        },
        {
          word: "politiemensen",
          definition: "mensen die werken voor de politie",
          sentence: "De ___ helpen bij ongelukken.",
          answer: "politiemensen"
        },
        {
          word: "vechtpartij",
          definition: "een gevecht, vaak tussen meerdere personen",
          sentence: "Er was een ___ in het park, en de politie moest komen.",
          answer: "vechtpartij"
        },
        {
          word: "mistoestanden",
          definition: "situaties die niet goed of eerlijk zijn",
          sentence: "Er zijn ___ in dat bedrijf door slechte leiding.",
          answer: "mistoestanden"
        },
        {
          word: "klussen",
          definition: "werk doen, vaak buiten hun normale baan",
          sentence: "Hij wil graag ___ om extra geld te verdienen.",
          answer: "klussen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ zijn strenger dan voorheen.",
          answer: "regels"
        },
        {
          sentence: "Hij wil graag ___ om extra geld te verdienen.",
          answer: "klussen"
        },
        {
          sentence: "De ___ helpen bij ongelukken.",
          answer: "politiemensen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wil de minister doen met de regels voor agenten?",
        options: [
          "Niets",
          "Ze verwijderen",
          "Ze aanscherpen",
          "Ze veranderen"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom klussen agenten soms bij?",
        options: [
          "Omdat ze niet van hun werk houden",
          "Omdat ze te weinig verdienen",
          "Omdat ze te veel werken",
          "Omdat ze dat leuk vinden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van bijklussen voor agenten?",
        options: [
          "Soms zijn er vechtpartijen",
          "Ze krijgen altijd een bonus",
          "Ze worden altijd gepromoveerd",
          "Ze krijgen nooit problemen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Agenten klussen bij om minder te werken.",
        isTrue: false
      },
      {
        statement: "De minister wil de regels aanscherpen om problemen te voorkomen.",
        isTrue: true
      },
      {
        statement: "Agenten mogen nooit bijklussen volgens de regels.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Wat denkt Ronse over PFAS?",
    topicNumber: 1,
    article: {
      title: "Wat denkt Ronse over PFAS?",
      summary: "In Ronse is er onrust omdat veel mensen hoge PFAS-waarden in hun bloed hebben. De mensen hopen dat de stad hun helpt en dat ze niet zoals Zwijndrecht worden."
    },
    vocabulary: {
      words: [
        {
          word: "denkt",
          definition: "heeft een mening over iets",
          sentence: "Wat ___ de gemeente over dit probleem?",
          answer: "denkt"
        },
        {
          word: "worden",
          definition: "veranderen in of zijn",
          sentence: "We willen niet dat onze stad ___ als Zwijndrecht.",
          answer: "worden"
        },
        {
          word: "niet",
          definition: "geen, of op een andere manier dan",
          sentence: "We willen ___ ziek worden van PFAS.",
          answer: "niet"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We willen niet dat onze stad ___ als Zwijndrecht.",
          answer: "worden"
        },
        {
          sentence: "Wat ___ de gemeente over dit probleem?",
          answer: "denkt"
        },
        {
          sentence: "We willen ___ ziek worden van PFAS.",
          answer: "niet"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover is er onrust in Ronse?",
        options: [
          "Over slecht weer",
          "Over te veel werk",
          "Over PFAS in hun bloed",
          "Over te weinig geld"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat hopen de Ronsenaars?",
        options: [
          "Dat de stad hen helpt",
          "Dat ze meer geld krijgen",
          "Dat het warm weer wordt",
          "Dat ze naar zee gaan"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is Zwijndrecht?",
        options: [
          "Een stad in Nederland",
          "Een soort plant",
          "Een bekende schilder",
          "Een rivier in Duitsland"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Ronsenaars hebben allemaal veel PFAS in hun bloed.",
        isTrue: false
      },
      {
        statement: "De mensen in Ronse hopen dat de stad hen helpt.",
        isTrue: true
      },
      {
        statement: "Zwijndrecht is een stad in Duitsland.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambiteurs",
    topicNumber: 1,
    article: {
      title: "Shutdown doet nu echt pijn, maar niet voor Trumps favoriete ambiteurs",
      summary: "Na één maand begint de shutdown de Amerikanen zwaar te raken, niet alleen onbetaalde ambtenaren, maar ook bijvoorbeeld de steuntrekkers. Worden wel netjes verder betaald: immigratie-agenten."
    },
    vocabulary: {
      words: [
        {
          word: "agenten",
          definition: "Officiële personen die een bepaalde taak uitvoeren, vaak voor de overheid",
          sentence: "De immigratie-___ moeten doorwerken, ook zonder loon.",
          answer: "agenten"
        },
        {
          word: "immigratie",
          definition: "Het proces van immigreren, oftewel het zich vestigen in een ander land",
          sentence: "De ___ -agenten controleren wie het land binnenkomt.",
          answer: "immigratie"
        },
        {
          word: "ambtenaren",
          definition: "Mensen die werken voor de overheid",
          sentence: "De ___ werken voor de overheid en zijn nu thuis zonder loon.",
          answer: "ambtenaren"
        },
        {
          word: "Amerikanen",
          definition: "De inwoners van de Verenigde Staten",
          sentence: "De ___ worden hard geraakt door de shutdown, vooral de armsten.",
          answer: "Amerikanen"
        },
        {
          word: "shutdown",
          definition: "Een stopzetting of onderbreking, vaak van overheidsdiensten",
          sentence: "De ___ duurt al weken en veel ambtenaren krijgen geen salaris.",
          answer: "shutdown"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ duurt al weken en veel ambtenaren krijgen geen salaris.",
          answer: "shutdown"
        },
        {
          sentence: "De ___ werken voor de overheid en zijn nu thuis zonder loon.",
          answer: "ambtenaren"
        },
        {
          sentence: "De immigratie-___ moeten doorwerken, ook zonder loon.",
          answer: "agenten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een 'shutdown' in deze context?",
        options: [
          "Een feestelijke gebeurtenis",
          "Een grote stroomuitval",
          "Het tijdelijk stilleggen van overheidsdiensten",
          "Een nieuwe regeringsvorm"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom worden de immigratie-agenten wel betaald?",
        options: [
          "Omdat ze voor Trump werken",
          "Omdat ze als essentiële werknemers worden beschouwd",
          "Omdat ze een protest hebben georganiseerd",
          "Omdat ze niet voor de overheid werken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van Trump in de shutdown?",
        options: [
          "Hij probeert het op te lossen",
          "Hij is de directe oorzaak ervan",
          "Hij is op vakantie tijdens de crisis",
          "Hij heeft er geen weet van"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De shutdown raakt alleen ambtenaren, niet de gewone burger.",
        isTrue: false
      },
      {
        statement: "Immigratie-agenten worden niet betaald tijdens de shutdown.",
        isTrue: false
      },
      {
        statement: "Steuntrekkers worden indirect getroffen door de shutdown.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
    topicNumber: 1,
    article: {
      title: "Komt Trump tijdens rondreis in Azië tot toenadering met Xi?",
      summary: "Volgens toponderhandelaars van China en de VS zijn de “grote lijnen” van een akkoord beklonken. Haalt de dealmaker-in-chief tijdens zijn rondreis in Azië een handelsdeal met China binnen?"
    },
    vocabulary: {
      words: [
        {
          word: "Xi",
          definition: "De achternaam van de Chinese leider Xi Jinping, vaak aangeduid als President Xi.",
          sentence: "___ is de leider van China.",
          answer: "Xi"
        },
        {
          word: "tot",
          definition: "Tot' kan 'until' of 'to' betekenen, afhankelijk van de context.",
          sentence: "Hij werkte ___ hij moest stoppen.",
          answer: "tot"
        },
        {
          word: "Azië",
          definition: "Het werelddeel ten oosten van Europa, met landen als China en India.",
          sentence: "Hij reisde door ___ voor zijn werk.",
          answer: "Azië"
        },
        {
          word: "Komt",
          definition: "Derde persoon enkelvoud van 'komen', wat betekent 'to come' in het Engels.",
          sentence: "Hij ___ morgen naar het feest.",
          answer: "komt"
        },
        {
          word: "toenadering",
          definition: "Het naderbij komen, oftewel het dichter bij elkaar komen, vaak in relaties of politiek.",
          sentence: "De ___ tussen de twee landen verraste velen.",
          answer: "toenadering"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ tussen de twee landen verraste velen.",
          answer: "toenadering"
        },
        {
          sentence: "Hij werkte ___ hij moest stoppen.",
          answer: "tot"
        },
        {
          sentence: "Hij ___ morgen naar het feest.",
          answer: "komt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de rondreis van Trump plaats?",
        options: [
          "Europa",
          "Azië",
          "Afrika",
          "Zuid-Amerika"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een mogelijke uitkomst van Trumps bezoek aan China?",
        options: [
          "Een oorlog",
          "Een handelsdeal",
          "Een sportevenement",
          "Een cultureel festival"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie is Xi in deze context?",
        options: [
          "De leider van Rusland",
          "De leider van China",
          "De leider van India",
          "De leider van Japan"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump maakt een reis door Azië.",
        isTrue: true
      },
      {
        statement: "Xi is de leider van Rusland.",
        isTrue: false
      },
      {
        statement: "Trump en Xi proberen tot een overeenkomst te komen.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Koerdische PKK haalt strijders weg uit Turkije",
    topicNumber: 1,
    article: {
      title: "Koerdische PKK haalt strijders weg uit Turkije",
      summary: "Turkije en de Koerdische separatisten van de PKK zetten een historische nieuwe stap in hun onderhandelingen. De PKK-strijders zullen zich terugtrekken uit Turkije. Maar het akkoord blijft het resultaat van achterkamertjespolitiek."
    },
    vocabulary: {
      words: [
        {
          word: "achterkamertjespolitiek",
          definition: "politiek die in het geheim plaatsvindt, zonder openheid",
          sentence: "De beslissing werd genomen door middel van ___.",
          answer: "achterkamertjespolitiek"
        },
        {
          word: "akkoord",
          definition: "overeenkomst tussen partijen",
          sentence: "Het politieke ___ werd gisteren ondertekend.",
          answer: "akkoord"
        },
        {
          word: "terugtrekken",
          definition: "ergens weg gaan, zich terugtrekken",
          sentence: "Soldaten moeten zich ___ uit gevaarlijke gebieden.",
          answer: "terugtrekken"
        },
        {
          word: "akkoord",
          definition: "overeenkomst tussen partijen",
          sentence: "Beide partijen hebben het ___ ondertekend.",
          answer: "akkoord"
        },
        {
          word: "strijders",
          definition: "mensen die vechten in een oorlog of conflict",
          sentence: "De ___ verdedigen hun land.",
          answer: "strijders"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het politieke ___ werd gisteren ondertekend.",
          answer: "akkoord"
        },
        {
          sentence: "De ___ verdedigen hun land.",
          answer: "strijders"
        },
        {
          sentence: "Soldaten moeten zich ___ uit gevaarlijke gebieden.",
          answer: "terugtrekken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als strijders zich terugtrekken?",
        options: [
          "Ze geven zich over",
          "Ze verlaten het gebied",
          "Ze vieren feest",
          "Ze winnen de oorlog"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een kenmerk van achterkamertjespolitiek?",
        options: [
          "Het is volledig transparant",
          "Het gebeurt openbaar",
          "Het is geheim en niet openbaar",
          "Het heeft geen effect"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het resultaat van onderhandelingen?",
        options: [
          "Een oorlog",
          "Een nieuwe wet",
          "Een overeenkomst",
          "Een schending van rechten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De PKK-strijders blijven in Turkije.",
        isTrue: false
      },
      {
        statement: "Het akkoord is het resultaat van openbare onderhandelingen.",
        isTrue: false
      },
      {
        statement: "Turkije en de PKK hebben een nieuwe stap gezet in onderhandelingen.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Was ons budget ongelimiteerd, dan hadden wij ook een vrijstaand huis op den buiten gekocht",
    topicNumber: 1,
    article: {
      title: "Was ons budget ongelimiteerd, dan hadden wij ook een vrijstaand huis op den buiten gekocht",
      summary: "Nergens in Vlaanderen werd de voorbije jaren zoveel grond aangesneden voor woningen als in Deinze, en tegen de zin van het lokale bestuur in. Maar de bewoners, die zijn er gelukkig. Wil de Vlaming wel een bouwshift, of blijven we dromen van een groot huis in het groen? 'Dat kortzichtig protest tegen hoger bouwen moet stoppen.'"
    },
    vocabulary: {
      words: [
        {
          word: "Buiten",
          definition: "De buitenlucht, buitenhuis, of buiten de stad",
          sentence: "We gaan dit weekend naar het ___ om te wandelen.",
          answer: "buiten"
        },
        {
          word: "vrijstaand",
          definition: "Alleenstaand, niet verbonden met andere gebouwen",
          sentence: "Ze kochten een ___ huis met een grote tuin.",
          answer: "vrijstaand"
        },
        {
          word: "budget",
          definition: "Het beschikbare geld voor een bepaald doel",
          sentence: "Het ___ voor het nieuwe project is nog niet goedgekeurd.",
          answer: "budget"
        },
        {
          word: "aangesneden",
          definition: "In gebruik genomen of vrijgegeven voor een doel",
          sentence: "Er werd veel grond ___ voor nieuwe woningbouw.",
          answer: "aangesneken"
        },
        {
          word: "bewoners",
          definition: "Mensen die in een bepaalde plaats of huis wonen",
          sentence: "De ___ van de flat organiseerden een feest.",
          answer: "bewoners"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze kochten een ___ huis met een grote tuin.",
          answer: "vrijstaand"
        },
        {
          sentence: "De ___ van de flat organiseerden een feest.",
          answer: "bewoners"
        },
        {
          sentence: "We gaan dit weekend naar het ___ om te wandelen.",
          answer: "buiten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'aangesneden' in de context van de tekst?",
        options: [
          "Opengesneden",
          "Vrijgemaakt",
          "Voltooid",
          "Vergeten"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst vooral over?",
        options: [
          "Over het kopen van een huis",
          "Over een conflict in een gemeente",
          "Over de voorkeuren van Vlamingen",
          "Over de prijs van grond"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de auteur?",
        options: [
          "Neutraal en informatief",
          "Kritisch en aanmoedigend",
          "Helemaal positief",
          "Helemaal negatief"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van Deinze zijn ongelukkig met de nieuwe woningen.",
        isTrue: false
      },
      {
        statement: "De auteur suggereert dat Vlamingen misschien liever dromen over een groot huis dan dat ze een 'bouwshift' willen.",
        isTrue: true
      },
      {
        statement: "De auteur is tegen hogere bouwprojecten en steunt het protest ertegen.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
    topicNumber: 1,
    article: {
      title: "Na vechtpartij onder agenten: strengere regels voor bijklussende politiemensen op komst",
      summary: "Meer agenten klussen bij, en dat leidt soms tot misstanden. Minister van Binnenlandse Zaken Bernard Quintin (MR) wil de regels aanscherpen."
    },
    vocabulary: {
      words: [
        {
          word: "regels",
          definition: "afspraken of voorschriften die gevolgd moeten worden",
          sentence: "In dit land gelden andere ___ dan in ons land.",
          answer: "regels"
        },
        {
          word: "agenten",
          definition: "mensen die werken bij de politie",
          sentence: "De ___ houden zich bezig met het handhaven van de wet.",
          answer: "agenten"
        },
        {
          word: "klussen",
          definition: "klussen, een ander woord voor werken, vaak naast een andere baan",
          sentence: "Soms moeten mensen ___ om extra geld te verdienen.",
          answer: "klussen"
        },
        {
          word: "aanscherpen",
          definition: "strenger of scherper maken",
          sentence: "De school wil de regels ___ om de veiligheid te verbeteren.",
          answer: "aanscherpen"
        },
        {
          word: "minister",
          definition: "iemand die de leiding heeft over een deel van de regering",
          sentence: "De ___ van Financiën heeft een nieuw plan aangekondigd.",
          answer: "minister"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ houden zich bezig met het handhaven van de wet.",
          answer: "agenten"
        },
        {
          sentence: "De ___ van Financiën heeft een nieuw plan aangekondigd.",
          answer: "minister"
        },
        {
          sentence: "De school wil de regels ___ om de veiligheid te verbeteren.",
          answer: "aanscherpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als regels worden aangescherpt?",
        options: [
          "Ze worden minder streng",
          "Ze worden duidelijker gemaakt",
          "Ze worden strenger gemaakt",
          "Ze worden helemaal verwijderd"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom wil de minister de regels aanscherpen?",
        options: [
          "Omdat er te weinig agenten zijn",
          "Omdat er misstanden zijn door het bijklussen",
          "Omdat de agenten niet goed kunnen vechten",
          "Omdat er te veel regels zijn"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van bijklussen?",
        options: [
          "Een politieagent die in de avonduren als leraar werkt",
          "Een politieagent die 's nachts als bewaker werkt",
          "Een politieagent die in het weekend als chauffeur werkt",
          "Een politieagent die overdag als verkoper werkt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Agenten mogen nooit bijklussen, volgens de nieuwe regels.",
        isTrue: false
      },
      {
        statement: "Het aanscherpen van de regels moet misstanden voorkomen.",
        isTrue: true
      },
      {
        statement: "Minister Quintin wil dat agenten stoppen met werken.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Wat denken de Ronsenaars over al die PFAS?",
    topicNumber: 1,
    article: {
      title: "Wat denken de Ronsenaars over al die PFAS? “Ik blijf eten uit mijn moestuin, PFAS of niet”",
      summary: "In Ronse heerst onrust nu blijkt dat tientallen Ronsenaars zeer hoge PFAS-waarden in hun bloed hebben. “We hopen dat de stad weet waar ze mee bezig is. Zolang we maar niet het nieuwe Zwijndrecht worden.”"
    },
    vocabulary: {
      words: [
        {
          word: "worden",
          definition: "veranderen in of getransformeerd worden naar",
          sentence: "We hopen niet het nieuwe Zwijndrecht te worden.",
          answer: "worden"
        },
        {
          word: "we",
          definition: "verwijst naar de groep die spreekt, inclusief de spreker zelf",
          sentence: "We blijven eten uit onze eigen tuin, wat er ook gebeurt.",
          answer: "we"
        },
        {
          word: "maar",
          definition: "behalve, met uitzondering van",
          sentence: "Het gaat niet om schuld, maar om voorzorg.",
          answer: "maar"
        },
        {
          word: "heerst",
          definition: "bestaat of is aanwezig (van een situatie of gevoel)",
          sentence: "Er heerst veel onrust in de stad sinds het nieuws bekend werd.",
          answer: "heerst"
        },
        {
          word: "tientallen",
          definition: "ongeveer tien tot honderd, een groot aantal",
          sentence: "Er werden tientallen mensen getest op PFAS.",
          answer: "tientallen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het gaat niet om schuld, maar om voorzorg.",
          answer: "maar"
        },
        {
          sentence: "Er heerst veel onrust in de stad sinds het nieuws bekend werd.",
          answer: "heerst"
        },
        {
          sentence: "We blijven eten uit onze eigen tuin, wat er ook gebeurt.",
          answer: "we"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst vooral over?",
        options: [
          "Over PFAS in Ronse",
          "Over een nieuwe supermarkt",
          "Over reizen naar Zwijndrecht",
          "Over politieke veranderingen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de houding van de bewoners?",
        options: [
          "Ze zijn boos en protesteren",
          "Ze accepteren het en doen niets",
          "Ze blijven hun eigen gewoontes volgen",
          "Ze zijn blij met de situatie"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het doel van dit artikel?",
        options: [
          "Mensen waarschuwen over PFAS",
          "Mensen geruststellen over hun voedsel",
          "Een nieuwe wet aankondigen",
          "Een restaurant promoten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van Ronse zijn gestopt met het eten uit hun eigen tuin.",
        isTrue: false
      },
      {
        statement: "De stad Ronse neemt maatregelen om de bewoners te beschermen.",
        isTrue: true
      },
      {
        statement: "Zwijndrecht is een voorbeeld van hoe het niet moet, volgens de bewoners.",
        isTrue: true
      }
    ]
  }
];
