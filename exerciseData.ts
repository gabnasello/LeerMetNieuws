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
    title: "Biden: Trump maakt niet alleen het Witte Huis kapot, maar ook het land",
    topicNumber: 1,
    article: {
      title: "Biden: Trump maakt niet alleen het Witte Huis kapot, maar ook het land",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "Trump",
          definition: "De voormalige president van de Verenigde Staten.",
          sentence: "___ was de president van Amerika.",
          answer: "Trump"
        },
        {
          word: "verandering",
          definition: "Een verandering of wijziging in de situatie.",
          sentence: "Er was een grote ___ in het beleid.",
          answer: "verandering"
        },
        {
          word: "land",
          definition: "Een gebied met een eigen regering, zoals Nederland of Amerika.",
          sentence: "Elk ___ heeft zijn eigen regels.",
          answer: "land"
        },
        {
          word: "Witte Huis",
          definition: "De plaats waar de Amerikaanse president werkt.",
          sentence: "Het ___ is in Washington D.C.",
          answer: "Witte Huis"
        },
        {
          word: "Biden",
          definition: "De president van de Verenigde Staten.",
          sentence: "___ is de president van Amerika.",
          answer: "Biden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er was een grote ___ in het beleid.",
          answer: "verandering"
        },
        {
          sentence: "___ was de president van Amerika.",
          answer: "Trump"
        },
        {
          sentence: "Elk ___ heeft zijn eigen regels.",
          answer: "land"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werkt de Amerikaanse president?",
        options: [
          "Het Witte Huis",
          "Het Witte Huis",
          "Het Witte Huis",
          "Het Witte Huis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'termijn' in deze context?",
        options: [
          "Een periode van tijd",
          "Een soort gebouw",
          "Een soort dier",
          "Een type auto"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdstad van de Verenigde Staten?",
        options: [
          "Washington D.C.",
          "New York",
          "Los Angeles",
          "Chicago"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Joe Biden is de huidige president van de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "Het Witte Huis staat in New York.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
    topicNumber: 1,
    article: {
      title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "aanvallen",
          definition: "aanvallen, het aanvallen",
          sentence: "De ___ waren gericht op militaire doelen.",
          answer: "aanvallen"
        },
        {
          word: "Midden-Oosten",
          definition: "een regio waaronder landen als Israël en Libanon vallen",
          sentence: "Het ___ is een onrustige regio.",
          answer: "Midden-Oosten"
        },
        {
          word: "gewonden",
          definition: "mensen die gewond zijn geraakt",
          sentence: "Er zijn veel ___ naar het ziekenhuis gebracht.",
          answer: "gewonden"
        },
        {
          word: "Israëlische",
          definition: "van of uit Israël",
          sentence: "De ___ luchtmacht voerde de aanval uit.",
          answer: "Israëlische"
        },
        {
          word: "doden",
          definition: "mensen die zijn overleden",
          sentence: "Er vielen veel ___ bij het conflict.",
          answer: "doden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ waren gericht op militaire doelen.",
          answer: "aanvallen"
        },
        {
          sentence: "Er vielen veel ___ bij het conflict.",
          answer: "doden"
        },
        {
          sentence: "Er zijn veel ___ naar het ziekenhuis gebracht.",
          answer: "gewonden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'gewonden' in deze context?",
        options: [
          "gewonnen hebben",
          "blessures hebben",
          "overleden zijn",
          "verwond zijn"
        ],
        correctAnswer: 4
      },
      {
        question: "Waar staat 'Midden-Oosten' voor in deze tekst?",
        options: [
          "een sportevenement",
          "een muziekgenre",
          "een geografische regio",
          "een stad"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdstad van Libanon?",
        options: [
          "Jeruzalem",
          "Beiroet",
          "Amman",
          "Bagdad"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Libanon ligt ten noorden van Israël.",
        isTrue: true
      },
      {
        statement: "De aanvallen vonden plaats in de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Gewonden zijn personen die gewond zijn geraakt.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
    topicNumber: 1,
    article: {
      title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "ontwikkelingen",
          definition: "Nieuwe gebeurtenissen of veranderingen in een situatie.",
          sentence: "De recente ___ in de technologie zijn snel.",
          answer: "ontwikkelingen"
        },
        {
          word: "Navo",
          definition: "Een militaire alliantie van landen in Europa en Noord-Amerika.",
          sentence: "De ___ is een belangrijke organisatie voor veiligheid.",
          answer: "Navo"
        },
        {
          word: "baas",
          definition: "De persoon die de leiding heeft over een groep of organisatie.",
          sentence: "Hij is de ___ van het hele team.",
          answer: "baas"
        },
        {
          word: "kan",
          definition: "Een hulpwerkwoord dat aangeeft dat iets mogelijk is.",
          sentence: "Hij ___ morgen komen, maar het is niet zeker.",
          answer: "kan"
        },
        {
          word: "waarschuwt",
          definition: "Iemand waarschuwen betekent dat je die persoon zegt om voorzichtig te zijn.",
          sentence: "Hij ___ zijn vriend voor het gevaar.",
          answer: "waarschuwt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ zijn vriend voor het gevaar.",
          answer: "waarschuwt"
        },
        {
          sentence: "De recente ___ in de technologie zijn snel.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "De ___ is een belangrijke organisatie voor veiligheid.",
          answer: "Navo"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat dit artikel vooral over?",
        options: [
          "Koken en eten",
          "Een nucleaire oorlog",
          "De Navo en een waarschuwing",
          "Vakantieplannen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'waarschuwen' in deze context?",
        options: [
          "Iemand een cadeau geven",
          "Iemand vertellen om voorzichtig te zijn",
          "Iemand uitnodigen voor een feest",
          "Iemand negeren"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is het belangrijk om dit nieuws te volgen?",
        options: [
          "Omdat het over mode gaat",
          "Omdat het over een belangrijke wereldgebeurtenis gaat",
          "Omdat het alleen over sport gaat",
          "Omdat het een grap is"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Mark Rutte is de baas van de Navo.",
        isTrue: true
      },
      {
        statement: "Dit artikel gaat over koken en eten.",
        isTrue: false
      },
      {
        statement: "De Navo is een militaire alliantie.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Slachtoffers van misbruik voorzichtig positief na ontekken met paus",
    topicNumber: 1,
    article: {
      title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
      summary: "Zaterdag zaten vijftien overlevers van misbruik samen met paus Leo XIV. Over dat gesprek zijn de zes mensen die De Standaard nadien kon spreken voorzichtig positief. Al zijn er geen concrete afspraken gemaakt over wat er in praktijk gaat veranderen. “Als de paus het antwoord niet wist, zei hij dat ook eerlijk.”"
    },
    vocabulary: {
      words: [
        {
          word: "gesprek",
          definition: "Een gesprek is wanneer mensen met elkaar praten",
          sentence: "Het ___ was open en eerlijk.",
          answer: "gesprek"
        },
        {
          word: "Zaterdag",
          definition: "De dag na vrijdag en voor zondag",
          sentence: "Op ___ ging de groep naar de paus.",
          answer: "Zaterdag"
        },
        {
          word: "positief",
          definition: "Goed, niet slecht",
          sentence: "De reacties waren overwegend ___.",
          answer: "positief"
        },
        {
          word: "vijftien",
          definition: "Het getal na veertien en voor zestien",
          sentence: "Er waren ___ mensen aanwezig.",
          answer: "vijftien"
        },
        {
          word: "afspraken",
          definition: "Afspraken zijn dingen die je met elkaar afspreekt om te doen",
          sentence: "Er werden geen nieuwe ___ gemaakt.",
          answer: "afspraken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ was open en eerlijk.",
          answer: "gesprek"
        },
        {
          sentence: "De reacties waren overwegend ___.",
          answer: "positief"
        },
        {
          sentence: "Er werden geen nieuwe ___ gemaakt.",
          answer: "afspraken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de houding van de paus tijdens de ontmoeting?",
        options: [
          "Afwezig",
          "Open en eerlijk",
          "Stil en gesloten",
          "Boos en geïrriteerd"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageerden de overlevers na de ontmoeting?",
        options: [
          "Ze waren erg boos",
          "Ze waren voorzichtig positief",
          "Ze waren heel verdrietig",
          "Ze waren onverschillig"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat werd er besproken tijdens de ontmoeting?",
        options: [
          "Alleen het weer",
          "Hun persoonlijke verhalen en ervaringen",
          "De toekomst van de kerk",
          "De paus vertelde alleen maar grapjes"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De paus heeft beloofd om de overlevers financieel te steunen.",
        isTrue: false
      },
      {
        statement: "De overlevers waren tevreden met de openhartigheid van de paus.",
        isTrue: true
      },
      {
        statement: "Er werden nieuwe afspraken gemaakt over toekomstige ontmoetingen.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Auto rijdt in op agenten in Schaarbeek",
    topicNumber: 1,
    article: {
      title: "Auto rijdt in op agenten in Schaarbeek",
      summary: "In Schaarbeek is zaterdagochtend een auto ingereden op agenten die een voertuig aan het controleren waren. Het parket heeft een onderzoek geopend naar poging tot moord. Over het motief van de dader is nog geen duidelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "agenten",
          definition: "mensen die de wet handhaven, zoals politie",
          sentence: "De ___ werkten in Schaarbeek.",
          answer: "agenten"
        },
        {
          word: "controleren",
          definition: "nagaan of iets in orde is",
          sentence: "De politie wilde het voertuig ___.",
          answer: "controleren"
        },
        {
          word: "dader",
          definition: "iemand die iets (illegals) doet",
          sentence: "De ___ is nog niet gevonden.",
          answer: "dader"
        },
        {
          word: "auto",
          definition: "een voertuig dat op de weg rijdt",
          sentence: "De ___ reed tegen de politie in.",
          answer: "auto"
        },
        {
          word: "onderzoek",
          definition: "een grondige zoektocht naar informatie",
          sentence: "Het parket startte een ___ naar de aanval.",
          answer: "onderzoek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ is nog niet gevonden.",
          answer: "dader"
        },
        {
          sentence: "De politie wilde het voertuig ___.",
          answer: "controleren"
        },
        {
          sentence: "De ___ reed tegen de politie in.",
          answer: "auto"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat deed de auto volgens de tekst?",
        options: [
          "Reed in op agenten",
          "Stopte naast agenten",
          "Parkeerde naast agenten",
          "Reed weg van agenten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van het parket in deze situatie?",
        options: [
          "Straf de dader",
          "Doet niets",
          "Start een onderzoek",
          "Arresteert de agenten"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de huidige staat van de dader?",
        options: [
          "Nog niet gevonden",
          "Gearresteerd",
          "Vrijgelaten",
          "Overleden"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De auto reed in op de agenten tijdens de controle.",
        isTrue: true
      },
      {
        statement: "Het parket heeft de dader gearresteerd.",
        isTrue: false
      },
      {
        statement: "Het motief van de dader is nog onbekend.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Inwoner van Kapellen vindt een handgranaat voor zijn deur: “Zo raar is dat toch niet, meneer?”",
    topicNumber: 1,
    article: {
      title: "Inwoner van Kapellen vindt een handgranaat voor zijn deur: “Zo raar is dat toch niet, meneer?”",
      summary: "In Borgerhout is zaterdagnacht een explosief ontploft voor de deur van een woning. Onbekenden hebben vannacht ook een handgranaat achtergelaten voor een woning in Kapellen. Er is voorlopig geen sprake van een link tussen de twee feiten."
    },
    vocabulary: {
      words: [
        {
          word: "deur",
          definition: "het deel van een huis waar je door naar binnen gaat",
          sentence: "De ___ staat open, dus je kunt naar binnen.",
          answer: "deur"
        },
        {
          word: "tussen",
          definition: "in het midden van twee dingen",
          sentence: "De bal lag ___ de twee stoelen in.",
          answer: "tussen"
        },
        {
          word: "Inwoner",
          definition: "iemand die in een plaats woont",
          sentence: "De ___ van dit dorp zijn erg vriendelijk.",
          answer: "inwoner"
        },
        {
          word: "niet",
          definition: "het tegenovergestelde van wel",
          sentence: "Ik heb mijn huiswerk nog ___ gemaakt, dus ik moet nu gaan werken.",
          answer: "niet"
        },
        {
          word: "vindt",
          definition: "ontdekt of ziet iets",
          sentence: "Hij ___ een euro op straat en was blij.",
          answer: "vindt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik heb mijn huiswerk nog ___ gemaakt, dus ik moet nu gaan werken.",
          answer: "niet"
        },
        {
          sentence: "De ___ van dit dorp zijn erg vriendelijk.",
          answer: "inwoner"
        },
        {
          sentence: "De ___ staat open, dus je kunt naar binnen.",
          answer: "deur"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werd de handgranaat gevonden?",
        options: [
          "In een park",
          "Voor een deur",
          "In een auto",
          "Op een dak"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er gebeurd in Borgerhout?",
        options: [
          "Er was een feest",
          "Er was een explosie",
          "Er was een optocht",
          "Er was niets bijzonders"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er bekend over de link tussen de twee incidenten?",
        options: [
          "Er is een duidelijk verband",
          "Er is geen link gevonden",
          "Er is maar één incident geweest",
          "De politie weet het niet"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Er is een explosie geweest in Borgerhout.",
        isTrue: true
      },
      {
        statement: "De handgranaat in Kapellen is dezelfde als die in Borgerhout.",
        isTrue: false
      },
      {
        statement: "Er is nog geen link gevonden tussen de twee incidenten.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Biden: Trump maakt het land kapot",
    topicNumber: 1,
    article: {
      title: "Biden: Trump maakt het land kapot",
      summary: "Donald Trump was president van Amerika. Zijn tweede termijn bracht veranderingen over de hele wereld. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "verandering",
          definition: "iets wat anders wordt",
          sentence: "Er is een ___ in het beleid.",
          answer: "verandering"
        },
        {
          word: "Biden",
          definition: "achternaam van de huidige president",
          sentence: "___ is nu de president.",
          answer: "Biden"
        },
        {
          word: "termijn",
          definition: "periode waarin iemand een functie heeft",
          sentence: "Hij heeft een ___ van vier jaar.",
          answer: "termijn"
        },
        {
          word: "wereld",
          definition: "de aarde en alle mensen",
          sentence: "De ___ is groot en er gebeurt veel.",
          answer: "wereld"
        },
        {
          word: "president",
          definition: "iemand die een land bestuurt",
          sentence: "De ___ van Amerika is Biden.",
          answer: "president"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is nu de president.",
          answer: "Biden"
        },
        {
          sentence: "Hij heeft een ___ van vier jaar.",
          answer: "termijn"
        },
        {
          sentence: "Er is een ___ in het beleid.",
          answer: "verandering"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is de president van Amerika nu?",
        options: [
          "Biden",
          "Trump",
          "Obama",
          "Putin"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'termijn' in deze context?",
        options: [
          "een periode",
          "een gebouw",
          "een soort auto",
          "een type voedsel"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat bracht Trump volgens de tekst?",
        options: [
          "Veranderingen over de hele wereld",
          "Vrede en geluk",
          "Alleen problemen in Amerika",
          "Niets, het is neutraal"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump was de president van Amerika.",
        isTrue: true
      },
      {
        statement: "Biden is momenteel de president van Amerika.",
        isTrue: true
      },
      {
        statement: "Trump bracht alleen verandering in Amerika.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
    topicNumber: 1,
    article: {
      title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
      summary: "In Libanon zijn mensen dood of gewond na Israëlische aanvallen."
    },
    vocabulary: {
      words: [
        {
          word: "Libanon",
          definition: "een land in het Midden-Oosten",
          sentence: "___ is een land in het Midden-Oosten.",
          answer: "Libanon"
        },
        {
          word: "mensen",
          definition: "personen, mannen, vrouwen en kinderen",
          sentence: "Vele ___ zijn omgekomen in de aanvallen.",
          answer: "mensen"
        },
        {
          word: "aanvallen",
          definition: "als iemand of iets met geweld wordt aangevallen",
          sentence: "De ___ waren erg heftig in Libanon.",
          answer: "aanvallen"
        },
        {
          word: "Israëlische",
          definition: "van of gerelateerd aan Israël",
          sentence: "De ___ regering is verantwoordelijk voor de aanvallen.",
          answer: "Israëlische"
        },
        {
          word: "doden",
          definition: "mensen die niet meer leven",
          sentence: "Bij de aanvallen zijn er veel ___.",
          answer: "doden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ regering is verantwoordelijk voor de aanvallen.",
          answer: "Israëlische"
        },
        {
          sentence: "De ___ waren erg heftig in Libanon.",
          answer: "aanvallen"
        },
        {
          sentence: "___ is een land in het Midden-Oosten.",
          answer: "Libanon"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vinden de aanvallen plaats?",
        options: [
          "In Nederland",
          "In Israël",
          "In Libanon",
          "In Amerika"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het resultaat van de aanvallen?",
        options: [
          "Er is niets gebeurd",
          "Er is veel schade",
          "Iedereen is veilig",
          "Er is feest"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie is verantwoordelijk voor de aanvallen?",
        options: [
          "Nederland",
          "Libanon",
          "Israël",
          "De Verenigde Naties"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De aanvallen vonden plaats in Nederland.",
        isTrue: false
      },
      {
        statement: "Er waren doden en gewonden na de aanvallen.",
        isTrue: true
      },
      {
        statement: "Israël is verantwoordelijk voor de aanvallen.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
    topicNumber: 1,
    article: {
      title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "Rutte",
          definition: "De achternaam van de Nederlandse premier.",
          sentence: "___ is een bekende Nederlander.",
          answer: "Rutte"
        },
        {
          word: "Mark",
          definition: "Een Nederlandse voornaam.",
          sentence: "___ Rutte is een bekende politicus.",
          answer: "Mark"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Europa.",
          sentence: "___ is een groot land.",
          answer: "Oekraïne"
        },
        {
          word: "oorlog",
          definition: "Een tijd waarin landen vechten.",
          sentence: "De ___ duurde vier jaar.",
          answer: "oorlog"
        },
        {
          word: "waarschuwt",
          definition: "Iemand waarschuwen betekent zeggen dat er gevaar is.",
          sentence: "Hij ___ haar voor het onweer.",
          answer: "waarschuwt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ duurde vier jaar.",
          answer: "oorlog"
        },
        {
          sentence: "___ is een bekende Nederlander.",
          answer: "Rutte"
        },
        {
          sentence: "Hij ___ haar voor het onweer.",
          answer: "waarschuwt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Over vakantie",
          "Over vrede",
          "Over een waarschuwing",
          "Over een verjaardag"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie is Mark Rutte?",
        options: [
          "Een bakker",
          "Een leraar",
          "De baas van Nederland",
          "Een schrijver"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is Oekraïne?",
        options: [
          "In Azië",
          "In Afrika",
          "In Europa",
          "In Zuid-Amerika"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Mark Rutte is de baas van Nederland.",
        isTrue: true
      },
      {
        statement: "Poetin is de baas van Oekraïne.",
        isTrue: false
      },
      {
        statement: "Een nucleaire oorlog kan nooit gewonnen worden.",
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
    title: "Auto rijdt in op agenten in Schaarbeek: “Geweld tegen politiemensen is onaanvaardbaar”",
    topicNumber: 1,
    article: {
      title: "Auto rijdt in op agenten in Schaarbeek: “Geweld tegen politiemensen is onaanvaardbaar”",
      summary: "In Schaarbeek is zaterdagochtend een auto ingereden op agenten die een voertuig aan het controleren waren. Het parket heeft een onderzoek geopend naar poging tot moord. Over het motief van de dader is nog geen duidelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "dader",
          definition: "iemand die iets slechts doet",
          sentence: "De ___ is nog niet gevonden.",
          answer: "dader"
        },
        {
          word: "poging",
          definition: "een poging om iets te doen",
          sentence: "Hij deed een ___ tot moord.",
          answer: "poging"
        },
        {
          word: "agenten",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ werken voor de politie.",
          answer: "agenten"
        },
        {
          word: "controleren",
          definition: "nakijken of iets klopt",
          sentence: "De politie wil een voertuig ___.",
          answer: "controleren"
        },
        {
          word: "auto",
          definition: "een voertuig voor transport",
          sentence: "De ___ rijdt op de weg.",
          answer: "auto"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De politie wil een voertuig ___.",
          answer: "controleren"
        },
        {
          sentence: "De ___ werken voor de politie.",
          answer: "agenten"
        },
        {
          sentence: "Hij deed een ___ tot moord.",
          answer: "poging"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom controleerde de politie het voertuig?",
        options: [
          "Om de auto te stelen",
          "Om de bestuurder te arresteren",
          "Omdat het verkeerd geparkeerd was",
          "Om een vermist persoon te vinden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van het parket in deze situatie?",
        options: [
          "Het parket bouwt huizen",
          "Het parket heeft een onderzoek geopend",
          "Het parket verkoopt auto's",
          "Het parket is een restaurant"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de toestand van de dader?",
        options: [
          "De dader is gearresteerd",
          "De dager is onbekend",
          "De dager is op vakantie",
          "De dader is een politieagent"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De auto is de dader in dit incident.",
        isTrue: true
      },
      {
        statement: "De agenten waren aan het rijden tijdens het incident.",
        isTrue: false
      },
      {
        statement: "Het motief van de dader is al bekend.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Man vindt handgranaat voor zijn deur",
    topicNumber: 1,
    article: {
      title: "Man vindt handgranaat voor zijn deur",
      summary: "Iemand vindt een handgranaat bij zijn huis. Dit is gevaarlijk. De politie onderzoekt de zaak."
    },
    vocabulary: {
      words: [
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ kwam naar het huis.",
          answer: "politie"
        },
        {
          word: "gevaarlijk",
          definition: "niet veilig, kan pijn doen",
          sentence: "Vuur is ___ voor kinderen.",
          answer: "gevaarlijk"
        },
        {
          word: "handgranaat",
          definition: "een gevaarlijk wapen",
          sentence: "De politie vond een ___ in de tuin.",
          answer: "handgranaat"
        },
        {
          word: "is",
          definition: "zijn, het werkwoord",
          sentence: "Hij ___ een student.",
          answer: "is"
        },
        {
          word: "zaak",
          definition: "een situatie of geval",
          sentence: "De ___ is nog niet opgelost.",
          answer: "zaak"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Vuur is ___ voor kinderen.",
          answer: "gevaarlijk"
        },
        {
          sentence: "De ___ kwam naar het huis.",
          answer: "politie"
        },
        {
          sentence: "Hij ___ een student.",
          answer: "is"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de man de handgranaat?",
        options: [
          "In zijn huis",
          "In zijn auto",
          "Voor zijn deur",
          "In de supermarkt"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doet de politie?",
        options: [
          "Ze negeert het",
          "Ze onderzoekt de zaak",
          "Ze gaat naar huis",
          "Ze belt de man"
        ],
        correctAnswer: 2
      },
      {
        question: "Is de handgranaat gevaarlijk?",
        options: [
          "Nee, het is veilig",
          "Ja, het is gevaarlijk",
          "Het is een pen",
          "Het is een huis"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De man vindt de handgranaat in zijn huis.",
        isTrue: false
      },
      {
        statement: "De politie onderzoekt de zaak.",
        isTrue: true
      },
      {
        statement: "De handgranaat is een veilig speelgoed.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Biden: 'Trump maakt niet alleen het Witte Huis kapot, maar ook het land'",
    topicNumber: 1,
    article: {
      title: "Biden: 'Trump maakt niet alleen het Witte Huis kapot, maar ook het land'",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "Witte",
          definition: "een kleur, vaak gebruikt in namen",
          sentence: "Het Witte Huis is de officiële residentie van de president.",
          answer: "Witte"
        },
        {
          word: "alleen",
          definition: "slechts, exclusief, zonder anderen",
          sentence: "Hij was de enige die het wist; alleen hij had toegang.",
          answer: "alleen"
        },
        {
          word: "maakt",
          definition: "veroorzaakt, leidt tot",
          sentence: "Deze situatie maakt veel problemen.",
          answer: "maakt"
        },
        {
          word: "Huis",
          definition: "een gebouw voor bewoning, of een specifiek gebouw (zoals het Witte Huis)",
          sentence: "Hun nieuwe huis is erg groot en modern.",
          answer: "Huis"
        },
        {
          word: "kapot",
          definition: "beschadigd, niet meer functionerend",
          sentence: "De machine is helemaal kapot na het ongeluk.",
          answer: "kapot"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het Witte Huis is de officiële residentie van de president.",
          answer: "Witte"
        },
        {
          sentence: "Deze situatie maakt veel problemen.",
          answer: "maakt"
        },
        {
          sentence: "Hun nieuwe huis is erg groot en modern.",
          answer: "Huis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'amptel' in de context van de tekst?",
        options: [
          "Een soort gerecht",
          "Een ceremonie",
          "Een ambtstermijn",
          "Een feestelijke gebeurtenis"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat impliceert de uitspraak over het Witte Huis?",
        options: [
          "Het is fysiek beschadigd.",
          "Het is een metafoor voor de regering.",
          "Het is verplaatst naar een andere stad.",
          "Het is een nieuw gebouw."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de kern van de uitspraak van Biden?",
        options: [
          "Hij prees Trump voor zijn werk.",
          "Hij bekritiseert Trump's effect op de VS.",
          "Hij kondigt een nieuw plan aan.",
          "Hij beschrijft een historische gebeurtenis."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "De tekst betreft een kritische uitspraak over Trumps presidentschap.",
        isTrue: true
      },
      {
        statement: "Het Witte Huis is letterlijk vernietigd in de context.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
    topicNumber: 1,
    article: {
      title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "aanvallen",
          definition: "militaire acties of offensieven",
          sentence: "De recente ___ hebben de spanningen doen toenemen.",
          answer: "aanvallen"
        },
        {
          word: "Israëlische",
          definition: "betrekking hebbend op Israël",
          sentence: "De ___ aanvallen troffen doelen in Libanon.",
          answer: "Israëlische"
        },
        {
          word: "Midden-Oosten",
          definition: "een regio die onder meer Israël en Libanon omvat",
          sentence: "Het ___ is opnieuw het toneel van geweld.",
          answer: "Midden-Oosten"
        },
        {
          word: "gewonden",
          definition: "personen die gewond zijn geraakt",
          sentence: "De doden en ___ worden geëvacueerd.",
          answer: "gewonden"
        },
        {
          word: "Libanon",
          definition: "een land in het Midden-Oosten",
          sentence: "___ is een van de landen die betrokken is bij dit conflict.",
          answer: "Libanon"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ aanvallen troffen doelen in Libanon.",
          answer: "Israëlische"
        },
        {
          sentence: "Het ___ is opnieuw het toneel van geweld.",
          answer: "Midden-Oosten"
        },
        {
          sentence: "De recente ___ hebben de spanningen doen toenemen.",
          answer: "aanvallen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een synoniem voor 'gewonden' in deze context?",
        options: [
          "Gezonde personen",
          "Gewonde personen",
          "Buitenlandse burgers",
          "Gelukkige mensen"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk land wordt genoemd als locatie van de aanvallen?",
        options: [
          "Duitsland",
          "Libanon",
          "Nederland",
          "Zwitserland"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent het om ontwikkelingen te 'volgen'?",
        options: [
          "Negeren",
          "Observeren en bijhouden",
          "Vermijden",
          "Ondersteunen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De aanvallen vonden plaats in het Midden-Oosten.",
        isTrue: true
      },
      {
        statement: "Nederland is het land waar de aanvallen plaatsvonden.",
        isTrue: false
      },
      {
        statement: "Het artikel beschrijft de laatste ontwikkelingen in de regio.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
    topicNumber: 1,
    article: {
      title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa, momenteel betrokken bij een conflict.",
          sentence: "___ vecht voor zijn soevereiniteit.",
          answer: "Oekraïne"
        },
        {
          word: "baas",
          definition: "Iemand die de leiding heeft over een organisatie of groep.",
          sentence: "De ___ van het bedrijf heeft veel ervaring.",
          answer: "baas"
        },
        {
          word: "waarschuwt",
          definition: "Iemand waarschuwen betekent die persoon informeren over een mogelijk gevaar.",
          sentence: "Hij ___ zijn collega voor het te laat is.",
          answer: "waarschuwt"
        },
        {
          word: "ontwikkelingen",
          definition: "Veranderingen of vooruitgangen in een situatie.",
          sentence: "De recente ___ in de technologie zijn verbazingwekkend.",
          answer: "ontwikkelingen"
        },
        {
          word: "oorlog",
          definition: "Een gewapend conflict tussen landen of groepen.",
          sentence: "De ___ heeft veel levens geëist.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van het bedrijf heeft veel ervaring.",
          answer: "baas"
        },
        {
          sentence: "De ___ heeft veel levens geëist.",
          answer: "oorlog"
        },
        {
          sentence: "___ vecht voor zijn soevereiniteit.",
          answer: "Oekraïne"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent “Navo” in deze context?",
        options: [
          "Een soort auto",
          "Een militaire alliantie",
          "Een natuurpark",
          "Een type voedsel"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom waarschuwt Mark Rutte Poetin?",
        options: [
          "Om hem uit te nodigen voor een feest",
          "Omdat Rutte bang is voor een nucleaire ramp",
          "Omdat Poetin een cadeau wil",
          "Omdat Rutte een grap maakt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een kern van de boodschap in de titel?",
        options: [
          "Nucleaire oorlog is makkelijk te winnen",
          "Niemand kan een nucleaire oorlog winnen",
          "Alleen Rusland kan een nucleaire oorlog winnen",
          "Oorlog is altijd geweldig"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Mark Rutte is de baas van de Navo.",
        isTrue: true
      },
      {
        statement: "Poetin wordt gewaarschuwd omdat hij een nucleaire oorlog wil starten.",
        isTrue: true
      },
      {
        statement: "Oekraïne heeft de oorlog gewonnen.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
    topicNumber: 1,
    article: {
      title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
      summary: "Zaterdag zaten vijftien overlevers van misbruik samen met paus Leo XIV. Over dat gesprek zijn de zes mensen die De Standaard nadien kon spreken voorzichtig positief. Al zijn er geen concrete afspraken gemaakt over wat er in praktijk gaat veranderen. 'Als de paus het antwoord niet wist, zei hij dat ook eerlijk.'"
    },
    vocabulary: {
      words: [
        {
          word: "positief",
          definition: "Optimistisch of gunstig; iets dat als goed wordt ervaren.",
          sentence: "Zijn reactie was verrassend positief na het nieuws.",
          answer: "positief"
        },
        {
          word: "misbruik",
          definition: "Het op een ongepaste of schadelijke manier gebruiken van iets of iemand.",
          sentence: "Het misbruik van vertrouwen leidde tot diepe wonden.",
          answer: "misbruik"
        },
        {
          word: "paus",
          definition: "Het hoofd van de Rooms-Katholieke Kerk, de hoogste religieuze leider.",
          sentence: "De paus sprak de menigte toe met wijze woorden.",
          answer: "paus"
        },
        {
          word: "slachtoffers",
          definition: "Personen die nadeel of leed ondervinden, vaak door toedoen van anderen.",
          sentence: "De slachtoffers van het misbruik kregen eindelijk erkenning.",
          answer: "slachtoffers"
        },
        {
          word: "gesprek",
          definition: "Een gesprek of discussie tussen twee of meer personen.",
          sentence: "Het gesprek tussen hen verliep moeizaam maar respectvol.",
          answer: "gesprek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De slachtoffers van het misbruik kregen eindelijk erkenning.",
          answer: "slachtoffers"
        },
        {
          sentence: "Het gesprek tussen hen verliep moeizaam maar respectvol.",
          answer: "gesprek"
        },
        {
          sentence: "Het misbruik van vertrouwen leidde tot diepe wonden.",
          answer: "misbruik"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de houding van de overlevers na het gesprek met de paus?",
        options: [
          "Extreem negatief",
          "Uiterst positief",
          "Voorzichtig optimistisch",
          "Openlijk vijandig"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat was het resultaat van de ontmoeting volgens de tekst?",
        options: [
          "Vele concrete afspraken werden gemaakt",
          "Er werden geen concrete afspraken gemaakt",
          "De paus bood zijn excuses aan",
          "Het gesprek werd afgebroken"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe wordt de paus beschreven in zijn reactie?",
        options: [
          "Hij was oneerlijk en hield informatie achter",
          "Hij was eerlijk en toegankelijk",
          "Hij weigerde te antwoorden",
          "Hij verontschuldigde zich herhaaldelijk"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De overlevers van het misbruik spraken met paus Leo XIV over hun ervaringen.",
        isTrue: true
      },
      {
        statement: "Na het gesprek werden er concrete afspraken gemaakt die onmiddellijk werden uitgevoerd.",
        isTrue: false
      },
      {
        statement: "De paus gaf een eerlijk antwoord wanneer hij het niet wist.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Auto rijdt in op agenten in Schaarbeek: 'Geweld tegen politiemensen is onaanvaardbaar'",
    topicNumber: 1,
    article: {
      title: "Auto rijdt in op agenten in Schaarbeek: 'Geweld tegen politiemensen is onaanvaardbaar'",
      summary: "In Schaarbeek is zaterdagochtend een auto ingereden op agenten die een voertuig aan het controleren waren. Het parket heeft een onderzoek geopend naar poging tot moord. Over het motief van de dader is nog geen duidelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "dader",
          definition: "iemand die een misdrijf pleegt",
          sentence: "De ___ is nog niet geïdentificeerd.",
          answer: "dader"
        },
        {
          word: "moord",
          definition: "het opzettelijk doden van een persoon",
          sentence: "Hij is verdacht van ___ op zijn buurman.",
          answer: "moord"
        },
        {
          word: "motief",
          definition: "de reden of beweegreden voor een handeling",
          sentence: "Wat was het ___ voor deze misdaad?",
          answer: "motief"
        },
        {
          word: "onderzoek",
          definition: "een systematisch onderzoek om feiten vast te stellen",
          sentence: "Het parket heeft een ___ geopend naar de gebeurtenissen.",
          answer: "onderzoek"
        },
        {
          word: "controleren",
          definition: "nagaan of controleren of iets in orde is",
          sentence: "Agenten ___ voertuigen op de openbare weg.",
          answer: "controleren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is verdacht van ___ op zijn buurman.",
          answer: "moord"
        },
        {
          sentence: "Wat was het ___ voor deze misdaad?",
          answer: "motief"
        },
        {
          sentence: "De ___ is nog niet geïdentificeerd.",
          answer: "dader"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdactiviteit van de agenten in de beschreven situatie?",
        options: [
          "Rellen beheersen",
          "Voertuigen controleren",
          "Een onderzoek leiden",
          "Een misdaad plegen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de juridische status van de handeling tegen de agenten?",
        options: [
          "Het is een misdrijf van moord.",
          "Het is een geval van verkeersovertreding.",
          "Het is een voorbeeld van burgermanschap.",
          "Het is een onderzoek naar mogelijke oorzaken."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de huidige staat van het onderzoek naar het motief?",
        options: [
          "Het is afgerond met een veroordeling.",
          "Het is in de beginfase met onduidelijkheid.",
          "Het is al bevestigd door de dader.",
          "Het is niet van toepassing in deze situatie."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De agenten waren aan het controleren van een voertuig toen de aanval plaatsvond.",
        isTrue: true
      },
      {
        statement: "Het motief van de dader is al bekend bij de autoriteiten.",
        isTrue: false
      },
      {
        statement: "De auto werd gebruikt als een wapen in de aanval.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Inwoner van Kapellen vindt een handgranaat voor zijn poort: 'Zo raar is dat toch niet, mijnheer?'",
    topicNumber: 1,
    article: {
      title: "Inwoner van Kapellen vindt een handgranaat voor zijn poort: 'Zo raar is dat toch niet, mijnheer?'",
      summary: "In Borgerhout is zaterdagnacht een explosief ontploft voor de deur van een woning. Onbekenden hebben vannacht ook een handgranaat achtergelaten voor een woning in Kapellen. Er is voorlopig geen sprake van een link tussen de twee feiten."
    },
    vocabulary: {
      words: [
        {
          word: "raar",
          definition: "Vreemd of ongebruikelijk, niet normaal.",
          sentence: "Het was erg ___ dat hij zo laat thuiskwam.",
          answer: "raar"
        },
        {
          word: "vindt",
          definition: "Ontdekt of aantreft, meestal per toeval.",
          sentence: "Hij ___ een euro op straat en was erg blij.",
          answer: "vindt"
        },
        {
          word: "ontploft",
          definition: "Ontploft, is ontploft; geëxplodeerd.",
          sentence: "De bom ___ zonder gewonden te veroorzaken.",
          answer: "ontploft"
        },
        {
          word: "link",
          definition: "Een verbinding of verband tussen twee zaken.",
          sentence: "Er is een duidelijke ___ tussen roken en longkanker.",
          answer: "link"
        },
        {
          word: "explosief",
          definition: "Betrekking hebbend op of geschikt voor een explosie.",
          sentence: "De ___ stoffen werden veilig opgeslagen.",
          answer: "explosief"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het was erg ___ dat hij zo laat thuiskwam.",
          answer: "raar"
        },
        {
          sentence: "De bom ___ zonder gewonden te veroorzaken.",
          answer: "ontploft"
        },
        {
          sentence: "De ___ stoffen werden veilig opgeslagen.",
          answer: "explosief"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'vindt' in deze context?",
        options: [
          "Vindt",
          "Vind",
          "Vindt",
          "Vindt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'handgranaat'?",
        options: [
          "Een soort fruit",
          "Een soort dier",
          "Een soort wapen",
          "Een soort boek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'er is voorlopig geen sprake van een link'?",
        options: [
          "Er is nog geen verband bewezen",
          "Er is al een verband bewezen",
          "Er is geen verband mogelijk",
          "Er is een duidelijk verband"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "In Borgerhout is een explosief ontploft voor de deur van een woning.",
        isTrue: true
      },
      {
        statement: "Er is een bewezen verband tussen de incidenten in Borgerhout en Kapellen.",
        isTrue: false
      },
      {
        statement: "Er is voorlopig geen sprake van een link tussen de twee feiten.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Biden: “Trump maakt het Witte Huis en het land kapot”",
    topicNumber: 1,
    article: {
      title: "Biden: “Trump maakt het Witte Huis en het land kapot”",
      summary: "Donald Trump was president van Amerika. Zijn tweede termijn bracht veel verandering in de wereld. Volg hier het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "een leider van een land",
          sentence: "De ___ van de Verenigde Staten is Joe Biden.",
          answer: "president"
        },
        {
          word: "termijn",
          definition: "een periode van tijd, vaak voor een baan",
          sentence: "Hij had een tweede ___ als president.",
          answer: "termijn"
        },
        {
          word: "wereld",
          definition: "de aarde en alle mensen",
          sentence: "De ___ keek toe naar Amerika.",
          answer: "wereld"
        },
        {
          word: "verandering",
          definition: "iets wat anders wordt dan het was",
          sentence: "Er was veel ___ in het beleid.",
          answer: "verandering"
        },
        {
          word: "nieuws",
          definition: "informatie over wat er gebeurt",
          sentence: "Het laatste ___ is net uitgekomen.",
          answer: "nieuws"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ keek toe naar Amerika.",
          answer: "wereld"
        },
        {
          sentence: "Het laatste ___ is net uitgekomen.",
          answer: "nieuws"
        },
        {
          sentence: "Hij had een tweede ___ als president.",
          answer: "termijn"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is de president van de Verenigde Staten nu?",
        options: [
          "Joe Biden",
          "Donald Trump",
          "Barack Obama",
          "Bill Clinton"
        ],
        correctAnswer: 1
      },
      {
        question: "Welk effect had Trump's presidentschap op de wereld?",
        options: [
          "Veel verandering",
          "Alles bleef hetzelfde",
          "Er was geen effect",
          "Alleen Amerika veranderde"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar kan men het laatste nieuws over de verkiezingen volgen?",
        options: [
          "In de krant",
          "Op de radio",
          "Op deze website",
          "In een boek"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump was de president van Amerika.",
        isTrue: true
      },
      {
        statement: "Zijn eerste termijn bracht veel verandering in de wereld.",
        isTrue: false
      },
      {
        statement: "Je kunt hier het laatste nieuws over de verkiezingen volgen.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
    topicNumber: 1,
    article: {
      title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
      summary: "Er is nieuws over aanvallen in Libanon. Er zijn doden en gewonden."
    },
    vocabulary: {
      words: [
        {
          word: "Israëlische",
          definition: "iets of iemand uit Israël",
          sentence: "De ___ regering heeft een verklaring uitgegeven.",
          answer: "Israëlische"
        },
        {
          word: "nieuws",
          definition: "informatie over wat er gebeurt in de wereld",
          sentence: "Het ___ van vandaag gaat over de situatie in de wereld.",
          answer: "nieuws"
        },
        {
          word: "Libanon",
          definition: "een land in het Midden-Oosten",
          sentence: "___ heeft veel schade geleden door de aanvallen.",
          answer: "Libanon"
        },
        {
          word: "gewonden",
          definition: "mensen die gewond zijn geraakt",
          sentence: "Er zijn veel ___ die hulp nodig hebben.",
          answer: "gewonden"
        },
        {
          word: "doden",
          definition: "mensen die niet meer leven",
          sentence: "Er zijn veel ___ in het conflict.",
          answer: "doden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ heeft veel schade geleden door de aanvallen.",
          answer: "Libanon"
        },
        {
          sentence: "Er zijn veel ___ in het conflict.",
          answer: "doden"
        },
        {
          sentence: "Er zijn veel ___ die hulp nodig hebben.",
          answer: "gewonden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het nieuws over?",
        options: [
          "Over sport",
          "Over een conflict in het Midden-Oosten",
          "Over een feest",
          "Over een nieuwe film"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er gebeurd in Libanon?",
        options: [
          "Er was een feest",
          "Er was een aanval",
          "Er was een concert",
          "Er was een sportwedstrijd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie heeft de aanvallen uitgevoerd?",
        options: [
          "Libanon",
          "Israël",
          "Een ander land",
          "Niemand weet het"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Er zijn doden en gewonden gevallen in Libanon.",
        isTrue: true
      },
      {
        statement: "De aanvallen werden uitgevoerd door Libanon.",
        isTrue: false
      },
      {
        statement: "Israëlische troepen waren verantwoordelijk voor de aanvallen.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
    topicNumber: 1,
    article: {
      title: "Navo-baas Mark Rutte waarschuwt Poetin: “Nucleaire oorlog kan nooit gewonnen worden”",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "ontwikkelingen",
          definition: "nieuwe dingen die gebeuren of veranderen",
          sentence: "De technologische ___ gaan snel.",
          answer: "ontwikkelingen"
        },
        {
          word: "app",
          definition: "een programma op je telefoon of computer",
          sentence: "Deze ___ helpt je om talen te leren.",
          answer: "app"
        },
        {
          word: "melding",
          definition: "een bericht dat je iets vertelt",
          sentence: "Ik kreeg een ___ dat de post was aangekomen.",
          answer: "melding"
        },
        {
          word: "poetin",
          definition: "de naam van de leider van Rusland",
          sentence: "___ regeerde Rusland.",
          answer: "poetin"
        },
        {
          word: "oorlog",
          definition: "een situatie waar landen vechten",
          sentence: "De ___ duurt al lang.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ regeerde Rusland.",
          answer: "poetin"
        },
        {
          sentence: "De technologische ___ gaan snel.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "Ik kreeg een ___ dat de post was aangekomen.",
          answer: "melding"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'nucleaire oorlog'?",
        options: [
          "Een oorlog in de lucht",
          "Een oorlog met atoombommen",
          "Een oorlog op zee",
          "Een oorlog in de ruimte"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'ontwikkelingen'?",
        options: [
          "Nieuwe dingen die gebeuren",
          "Oude dingen die verdwijnen",
          "Mensen die vechten",
          "Dieren die groeien"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over een nieuwe app",
          "Over een sportwedstrijd",
          "Over een nucleaire oorlog",
          "Over een vakantie"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Poetin is de leider van Rusland.",
        isTrue: true
      },
      {
        statement: "Een nucleaire oorlog is gemakkelijk te winnen.",
        isTrue: false
      },
      {
        statement: "Je kunt de app DS Nieuws downloaden.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
    topicNumber: 1,
    article: {
      title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
      summary: "Zaterdag zaten vijftien overlevers van misbruik samen met paus Leo XIV. Over dat gesprek zijn de zes mensen die De Standaard nadien kon spreken voorzichtig positief. Al zijn er geen concrete afspraken gemaakt over wat er in praktijk gaat veranderen. \"Als de paus het antwoord niet wist, zei hij dat ook eerlijk.\""
    },
    vocabulary: {
      words: [
        {
          word: "eerlijk",
          definition: "eerlijk zijn betekent de waarheid zeggen en niet liegen",
          sentence: "Hij is altijd ___ tegen zijn vrienden.",
          answer: "eerlijk"
        },
        {
          word: "zaterdag",
          definition: "de vijfde dag van de week",
          sentence: "Op ___ ging ik naar de stad.",
          answer: "zaterdag"
        },
        {
          word: "overlevers",
          definition: "mensen die iets ergs hebben meegemaakt maar nog leven",
          sentence: "De ___ van het ongeluk zijn naar het ziekenhuis gebracht.",
          answer: "overlevers"
        },
        {
          word: "vijftien",
          definition: "het getal na veertien",
          sentence: "Hij is ___ jaar oud.",
          answer: "vijftien"
        },
        {
          word: "positief",
          definition: "goed, niet slecht",
          sentence: "Zij reageerde ___ op het nieuws.",
          answer: "positief"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is altijd ___ tegen zijn vrienden.",
          answer: "eerlijk"
        },
        {
          sentence: "Hij is ___ jaar oud.",
          answer: "vijftien"
        },
        {
          sentence: "Zij reageerde ___ op het nieuws.",
          answer: "positief"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de betekenis van 'positief'?",
        options: [
          "niet goed",
          "goed",
          "slecht",
          "moeilijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'samen'?",
        options: [
          "alleen",
          "met anderen",
          "snel",
          "langzaam"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'gesprek'?",
        options: [
          "een soort sport",
          "een gesprek is wanneer mensen met elkaar praten",
          "een soort voedsel",
          "een soort dier"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De paus sprak met vijftien overlevers van misbruik.",
        isTrue: true
      },
      {
        statement: "Het gesprek was met paus Leo de Veertiende.",
        isTrue: true
      },
      {
        statement: "Na het gesprek waren alle mensen erg negatief.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Auto rijdt in op agenten in Schaarbeek",
    topicNumber: 1,
    article: {
      title: "Auto rijdt in op agenten in Schaarbeek",
      summary: "In Schaarbeek is zaterdagochtend een auto ingereden op agenten die een voertuig aan het controleren waren. Het parket heeft een onderzoek geopend naar poging tot moord. Over het motief van de dader is nog geen duidelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "moord",
          definition: "het opzettelijk doden van een persoon",
          sentence: "Het was een poging tot ___.",
          answer: "moord"
        },
        {
          word: "agenten",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ waren een voertuig aan het controleren.",
          answer: "agenten"
        },
        {
          word: "controleren",
          definition: "nagaan of iets in orde is",
          sentence: "Ze waren het voertuig aan het ___.",
          answer: "controleren"
        },
        {
          word: "auto",
          definition: "een voertuig voor transport",
          sentence: "De ___ reed tegen de agenten.",
          answer: "auto"
        },
        {
          word: "motief",
          definition: "de reden waarom iemand iets doet",
          sentence: "Over het ___ van de dader is nog geen duidelijkheid.",
          answer: "motief"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Over het ___ van de dader is nog geen duidelijkheid.",
          answer: "motief"
        },
        {
          sentence: "Het was een poging tot ___.",
          answer: "moord"
        },
        {
          sentence: "De ___ waren een voertuig aan het controleren.",
          answer: "agenten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gebeurde het incident met de auto?",
        options: [
          "Schaarbeek",
          "Brussel",
          "Schilde",
          "Antwerpen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat deden de agenten op het moment van het incident?",
        options: [
          "Ze waren aan het eten",
          "Ze waren een voertuig aan het controleren",
          "Ze waren aan het slapen",
          "Ze waren aan het rijden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het motief van de dader volgens de tekst?",
        options: [
          "Nog niet bekend",
          "Wraak",
          "Roem",
          "Geld"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De agenten waren aan het rijden met de auto.",
        isTrue: false
      },
      {
        statement: "Het parket heeft een onderzoek geopend.",
        isTrue: true
      },
      {
        statement: "De dader heeft de auto gestolen van een politieagent.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Inwoner van Kapellen vindt handgranaat voor deur",
    topicNumber: 1,
    article: {
      title: "Inwoner van Kapellen vindt handgranaat voor deur",
      summary: "In Borgerhout is een explosief ontploft voor een woning. In Kapellen is een handgranaat gevonden voor een woning. Er is nog geen link tussen deze twee gevallen."
    },
    vocabulary: {
      words: [
        {
          word: "link",
          definition: "een verbinding tussen twee dingen",
          sentence: "Is er een ___ tussen deze twee gebeurtenissen?",
          answer: "link"
        },
        {
          word: "voor",
          definition: "aan de voorkant of bij iets",
          sentence: "De bal lag ___ de deur.",
          answer: "voor"
        },
        {
          word: "handgranaat",
          definition: "een soort kleine bom",
          sentence: "Een ___ is gevaarlijk en mag niet zomaar blijven liggen.",
          answer: "handgranaat"
        },
        {
          word: "inwoner",
          definition: "iemand die in een plaats woont",
          sentence: "De ___ van het dorp kent iedereen.",
          answer: "inwoner"
        },
        {
          word: "deur",
          definition: "het deel van een huis of kamer waar je door naar binnen gaat",
          sentence: "Hij klopte op de ___ en wachtte.",
          answer: "deur"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De bal lag ___ de deur.",
          answer: "voor"
        },
        {
          sentence: "Een ___ is gevaarlijk en mag niet zomaar blijven liggen.",
          answer: "handgranaat"
        },
        {
          sentence: "Is er een ___ tussen deze twee gebeurtenissen?",
          answer: "link"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werd de handgranaat gevonden?",
        options: [
          "In de tuin",
          "Aan de voordeur",
          "Op straat",
          "In een park"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een handgranaat?",
        options: [
          "Een soort fruit",
          "Een soort groente",
          "Een soort wapen",
          "Een soort dier"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de link tussen de twee gevallen?",
        options: [
          "Er is geen link",
          "Het is dezelfde persoon",
          "Het is op dezelfde dag",
          "Het is in dezelfde stad"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Er is een explosie geweest in Borgerhout.",
        isTrue: true
      },
      {
        statement: "De handgranaat in Kapellen is ontploft.",
        isTrue: false
      },
      {
        statement: "Er is een link tussen de twee gebeurtenissen.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Biden: “Trump maakt niet alleen het Witte Huis kapot, maar ook het land”",
    topicNumber: 1,
    article: {
      title: "Biden: “Trump maakt niet alleen het Witte Huis kapot, maar ook het land”",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "Trump",
          definition: "Een voormalige president van de Verenigde Staten.",
          sentence: "Donald ___ was de 45ste president.",
          answer: "Trump"
        },
        {
          word: "maar",
          definition: "Een tegenstelling; in tegenstelling tot wat zojuist is gezegd.",
          sentence: "Hij is sterk, ___ niet erg groot.",
          answer: "maar"
        },
        {
          word: "maakt",
          definition: "Vormt of produceert iets; de derde persoon enkelvoud van 'maken'.",
          sentence: "Hij ___ een plan voor de toekomst.",
          answer: "maakt"
        },
        {
          word: "Witte",
          definition: "Een kleur, vaak geassocieerd met zuiverheid of licht.",
          sentence: "Het ___ Huis is de officiële woning van de president.",
          answer: "Witte"
        },
        {
          word: "alleen",
          definition: "Slechts; zonder anderen.",
          sentence: "Hij was ___ thuis tijdens de storm.",
          answer: "alleen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij was ___ thuis tijdens de storm.",
          answer: "alleen"
        },
        {
          sentence: "Hij is sterk, ___ niet erg groot.",
          answer: "maar"
        },
        {
          sentence: "Donald ___ was de 45ste president.",
          answer: "Trump"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van Donald Trump in deze context?",
        options: [
          "Hij is een acteur",
          "Hij is een voormalige president",
          "Hij is een huidige president",
          "Hij is een journalist"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent de titel 'Biden: “Trump maakt niet alleen het Witte Huis kapot, maar ook het land”'?",
        options: [
          "Biden zegt dat Trump alleen het Witte Huis vernietigt",
          "Biden zegt dat Trump het Witte Huis en het land vernielt",
          "Biden zegt dat Trump alleen het land vernielt",
          "Biden zegt dat Trump niets vernielt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het Witte Huis?",
        options: [
          "Een museum in Washington",
          "De officiële residentie van de Amerikaanse president",
          "Een winkelcentrum in New York",
          "Een stad in Nederland"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Joe Biden is de huidige president van de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "Donald Trump heeft alleen het Witte Huis vernietigd.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
    topicNumber: 1,
    article: {
      title: "Doden en gewonden bij Israëlische aanvallen op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "doden",
          definition: "mensen die omgekomen zijn",
          sentence: "Bij de aanval waren er meerdere ___.",
          answer: "doden"
        },
        {
          word: "gewonden",
          definition: "mensen die gewond zijn geraakt",
          sentence: "De ___ werden naar het ziekenhuis gebracht.",
          answer: "gewonden"
        },
        {
          word: "aanvallen",
          definition: "het actief aanvallen of bestrijden",
          sentence: "De militaire ___ gebeurden vooral 's nachts.",
          answer: "aanvallen"
        },
        {
          word: "ontwikkelingen",
          definition: "nieuwe gebeurtenissen of veranderingen in een situatie",
          sentence: "De laatste ___ in het Midden-Oosten zijn zorgwekkend.",
          answer: "ontwikkelingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De laatste ___ in het Midden-Oosten zijn zorgwekkend.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "De ___ werden naar het ziekenhuis gebracht.",
          answer: "gewonden"
        },
        {
          sentence: "Bij de aanval waren er meerdere ___.",
          answer: "doden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat dit artikel vooral?",
        options: [
          "De economie van Libanon",
          "Een sportevenement in Israël",
          "Een recente militaire aanval in Libanon",
          "Vredesonderhandelingen in de regio"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de internationale gemeenschap volgens de tekst?",
        options: [
          "Die ondersteunt de aanvallen",
          "Die is niet betrokken bij dit conflict",
          "Die reageert met afkeuring op de situatie",
          "Die organiseert vredesgesprekken volgende week"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe volgt men de ontwikkelingen in het Midden-Oosten?",
        options: [
          "Door erheen te reizen en alles zelf te zien",
          "Door te wachten op officiële verklaringen",
          "Via nieuwsberichten en journalisten op locatie",
          "Door alleen naar de politiek te kijken"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De aanvallen vonden plaats in Libanon.",
        isTrue: true
      },
      {
        statement: "Er zijn geen slachtoffers gevallen tijdens deze aanvallen.",
        isTrue: false
      },
      {
        statement: "Journalisten proberen de ontwikkelingen op de voet te volgen.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Navo-baas Mark Rutte waarschuwt Poetin: 'Nucleaire oorlog kan nooit gewonnen worden'",
    topicNumber: 1,
    article: {
      title: "NATO-leider Mark Rutte waarschuwt Poetin: 'Nucleaire oorlog kan nooit gewonnen worden'",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "Een gewapend conflict tussen landen of groepen",
          sentence: "De ___ in Oekraïne duurt nu al maanden.",
          answer: "oorlog"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa",
          sentence: "___ is momenteel het centrum van internationale aandacht.",
          answer: "Oekraïne"
        },
        {
          word: "melding",
          definition: "Een bericht of aankondiging",
          sentence: "Ik kreeg een ___ op mijn telefoon dat het feest is afgelast.",
          answer: "melding"
        },
        {
          word: "ontwikkelingen",
          definition: "Veranderingen of nieuwe gebeurtenissen",
          sentence: "De recente ___ in de technologie zijn verbazingwekkend.",
          answer: "ontwikkelingen"
        },
        {
          word: "Poetin",
          definition: "De president van Rusland",
          sentence: "___ heeft de invasie van Oekraïne bevolen.",
          answer: "Poetin"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De recente ___ in de technologie zijn verbazingwekkend.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "De ___ in Oekraïne duurt nu al maanden.",
          answer: "oorlog"
        },
        {
          sentence: "___ heeft de invasie van Oekraïne bevolen.",
          answer: "Poetin"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'nucleaire oorlog'?",
        options: [
          "Een oorlog die wordt uitgevochten met kernwapens",
          "Een ruzie tussen twee familieleden",
          "Een sportwedstrijd die op tv wordt uitgezonden",
          "Een oud boek over geschiedenis"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom waarschuwt Mark Rutte Poetin?",
        options: [
          "Omdat Rusland kernwapens heeft en de situatie gevaarlijk is",
          "Omdat Rutte een etentje met hem wil plannen",
          "Omdat Poetin graag schaakt en Rutte hem wil uitdagen",
          "Omdat Rutte de Russische taal leuk vindt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdstad van Oekraïne?",
        options: [
          "Kiev",
          "Moskou",
          "Berlijn",
          "Parijs"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne is een klein land in Zuid-Amerika.",
        isTrue: false
      },
      {
        statement: "Nucleaire oorlog kan nooit gewonnen worden, daarom is het zo gevaarlijk.",
        isTrue: true
      },
      {
        statement: "Mark Rutte is de president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
    topicNumber: 1,
    article: {
      title: "Slachtoffers van misbruik voorzichtig positief na ontmoeting met paus",
      summary: "Zaterdag zaten vijftien overlevers van misbruik samen met paus Leo XIV. Over dat gesprek zijn de zes mensen die De Standaard nadien kon spreken voorzichtig positief. Al zijn er geen concrete afspraken gemaakt over wat er in praktijk gaat veranderen. 'Als de paus het antwoord niet wist, zei hij dat ook eerlijk.'"
    },
    vocabulary: {
      words: [
        {
          word: "afspraken",
          definition: "afspraken die gemaakt zijn om iets te regelen",
          sentence: "Er zijn nieuwe afspraken gemaakt om dit in de toekomst te voorkomen.",
          answer: "afspraken"
        },
        {
          word: "gesprek",
          definition: "een gesprek tussen twee of meer mensen",
          sentence: "Tijdens het gesprek met de paus werden veel zorgen gedeeld.",
          answer: "gesprek"
        },
        {
          word: "misbruik",
          definition: "het op een verkeerde of schadelijke manier gebruiken van iets of iemand",
          sentence: "Het misbruik van vertrouwen leidde tot veel verdriet.",
          answer: "misbruik"
        },
        {
          word: "eerlijk",
          definition: "op een oprechte en correcte manier, zonder te bedriegen",
          sentence: "Wees altijd eerlijk over wat je weet of niet weet.",
          answer: "eerlijk"
        },
        {
          word: "overlevers",
          definition: "mensen die een moeilijke of gevaarlijke situatie hebben meegemaakt en nu nog leven",
          sentence: "De overlevers van het misbruik vertelden hun verhaal aan de paus.",
          answer: "overlevers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens het gesprek met de paus werden veel zorgen gedeeld.",
          answer: "gesprek"
        },
        {
          sentence: "De overlevers van het misbruik vertelden hun verhaal aan de paus.",
          answer: "overlevers"
        },
        {
          sentence: "Het misbruik van vertrouwen leidde tot veel verdriet.",
          answer: "misbruik"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de houding van de overlevers na het gesprek met de paus?",
        options: [
          "Ze waren erg boos.",
          "Ze waren voorzichtig positief.",
          "Ze waren volledig negatief.",
          "Ze waren onverschillig."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk gevolg van dit gesprek volgens de tekst?",
        options: [
          "Er zijn nieuwe wetten gemaakt.",
          "Er zijn geen concrete afspraken gemaakt.",
          "De paus heeft zich verontschuldigd.",
          "De paus is ontslagen."
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageerde de paus op vragen die hij niet kon beantwoorden?",
        options: [
          "Hij bleef stil.",
          "Hij verzon een antwoord.",
          "Hij gaf dat eerlijk toe.",
          "Hij veranderde van onderwerp."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het gesprek tussen de overlevers en de paus vond plaats op een zaterdag.",
        isTrue: true
      },
      {
        statement: "De paus kon alle vragen van de overlevers direct beantwoorden.",
        isTrue: false
      },
      {
        statement: "De overlevers waren teleurgesteld na het gesprek omdat er geen concrete afspraken werden gemaakt.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Auto rijdt in op agenten in Schaarbeek: “Geweld tegen politiemensen is onaanvaardbaar”",
    topicNumber: 1,
    article: {
      title: "Auto rijdt in op agenten in Schaarbeek: “Geweld tegen politiemensen is onaanvaardbaar”",
      summary: "In Schaarbeek is zaterdagochtend een auto ingereden op agenten die een voertuig aan het controleren waren. Het parket heeft een onderzoek geopend naar poging tot moord. Over het motief van de dader is nog geen duidelijkheid."
    },
    vocabulary: {
      words: [
        {
          word: "auto",
          definition: "een voertuig voor personenvervoer",
          sentence: "De bestuurder van de ___ reed in op de agenten.",
          answer: "auto"
        },
        {
          word: "agenten",
          definition: "politiemensen",
          sentence: "De ___ controleerden het verkeer toen de auto bijna hen raakte.",
          answer: "agenten"
        },
        {
          word: "onderzoek",
          definition: "een systematische studie om feiten vast te stellen",
          sentence: "Het parket heeft een ___ geopend naar wat er precies is gebeurd.",
          answer: "onderzoek"
        },
        {
          word: "moord",
          definition: "het opzettelijk doden van een ander persoon",
          sentence: "Hij wordt verdacht van ___ op zijn buurman.",
          answer: "moord"
        },
        {
          word: "motief",
          definition: "de reden waarom iemand iets doet",
          sentence: "Er is nog geen duidelijkheid over het ___ van de dader.",
          answer: "motief"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ controleerden het verkeer toen de auto bijna hen raakte.",
          answer: "agenten"
        },
        {
          sentence: "Het parket heeft een ___ geopend naar wat er precies is gebeurd.",
          answer: "onderzoek"
        },
        {
          sentence: "Er is nog geen duidelijkheid over het ___ van de dader.",
          answer: "motief"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat werd er in Schaarbeek afgelopen zaterdagochtend gedaan?",
        options: [
          "Er werd een auto ingereden op agenten.",
          "Er werd een feest georganiseerd.",
          "De politie hield een controle.",
          "Er was een verkeersongeval."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van het parket in deze situatie?",
        options: [
          "Het parket heeft een onderzoek geopend naar poging tot moord.",
          "Het parket organiseert een feest voor de agenten.",
          "Het parket stelt de dader voor in de rechtbank.",
          "Het parket geeft een verklaring over het motief."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is er op dit moment bekend over het motief van de dader?",
        options: [
          "Er is nog geen duidelijkheid over het motief.",
          "Het motief is bekend en wordt vrijgegeven.",
          "Het motief is onbelangrijk voor het onderzoek.",
          "Het motief is al diepgaand onderzocht."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De agenten waren aan het controleren van een voertuig toen het incident plaatsvond.",
        isTrue: true
      },
      {
        statement: "Het motief van de dader is al volledig bekend en bevestigd.",
        isTrue: false
      },
      {
        statement: "Het parket heeft een onderzoek geopend naar poging tot moord.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Inwoner van Kapellen vindt een handgranaat voor zijn poort: “Zo raar is dat toch niet, mijnheer?”",
    topicNumber: 1,
    article: {
      title: "Inwoner van Kapellen vindt een handgranaat voor zijn poort: “Zo raar is dat toch niet, mijnheer?”",
      summary: "In Borgerhout is zaterdagnacht een explosief ontploft voor de deur van een woning. Onbekenden hebben vannacht ook een handgranaat achtergelaten voor een woning in Kapellen. Er is voorlopig geen sprake van een link tussen de twee feiten."
    },
    vocabulary: {
      words: [
        {
          word: "link",
          definition: "een verbinding of verband",
          sentence: "Is er een ___ tussen beide incidenten?",
          answer: "link"
        },
        {
          word: "Inwoner",
          definition: "iemand die in een bepaalde plaats woont",
          sentence: "De ___ van dit dorp zijn erg vriendelijk.",
          answer: "Inwoner"
        },
        {
          word: "poort",
          definition: "een grote deur, vaak van hout of ijzer",
          sentence: "Hij opende de ___ om de tuin te zien.",
          answer: "poort"
        },
        {
          word: "handgranaat",
          definition: "een soort explosief wapen",
          sentence: "De politie vond een ___ in zijn tas.",
          answer: "handgranaat"
        },
        {
          word: "vindt",
          definition: "ontdekt of ziet iets",
          sentence: "Hij ___ een euro op straat en was blij.",
          answer: "vindt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Is er een ___ tussen beide incidenten?",
          answer: "link"
        },
        {
          sentence: "De ___ van dit dorp zijn erg vriendelijk.",
          answer: "Inwoner"
        },
        {
          sentence: "Hij opende de ___ om de tuin te zien.",
          answer: "poort"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat vond de man in Kapellen voor zijn poort?",
        options: [
          "Een brief",
          "Een fiets",
          "Een handgranaat",
          "Een hond"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurde er in Borgerhout volgens de samenvatting?",
        options: [
          "Er was een brand",
          "Er ontplofte een explosief",
          "Er was een feest",
          "Er was niets gebeurd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de huidige situatie volgens de samenvatting?",
        options: [
          "Er is een link bewezen",
          "Er is geen link nog",
          "Er zijn arrestaties",
          "Er is niets bekend"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De man in Kapellen vond een handgranaat voor zijn deur.",
        isTrue: true
      },
      {
        statement: "Er is al een link bewezen tussen de twee incidenten.",
        isTrue: false
      },
      {
        statement: "Er was een explosie in Borgerhout.",
        isTrue: true
      }
    ]
  }
];
