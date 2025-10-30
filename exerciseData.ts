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
    title: "D66 en PVD allebei op 26 zetels, verschil is minder dan 2.000 stemmen",
    topicNumber: 1,
    article: {
      title: "D66 en PVV allebei op 26 zetels, verschil is minder dan 2.000 stemmen",
      summary: "Nederland trekt woensdag opnieuw naar de stembus voor de vervroegde parlementsverkiezingen na de val van het kabinet-Schoof. Volg hier de laatste updates."
    },
    vocabulary: {
      words: [
        {
          word: "kabinet",
          definition: "de regering van een land",
          sentence: "Het nieuwe ___ bestaat uit ministers en staatssecretarissen.",
          answer: "kabinet"
        },
        {
          word: "stemmen",
          definition: "stemmen, hetzelfde woord als eerder, maar nu als zelfstandig naamwoord",
          sentence: "Er werden veel ___ uitgebracht bij de verkiezingen.",
          answer: "stemmen"
        },
        {
          word: "zetels",
          definition: "plaatsen in het parlement voor een politieke partij",
          sentence: "Elke partij probeert zo veel mogelijk ___ te winnen.",
          answer: "zetels"
        },
        {
          word: "vervroegde",
          definition: "vroeger dan gepland, eerder dan verwacht",
          sentence: "De verkiezingen waren ___ uitgeschreven.",
          answer: "vervroegde"
        },
        {
          word: "verkiezingen",
          definition: "verkiezingen, wanneer mensen stemmen voor een nieuwe regering",
          sentence: "Er zijn binnenkort weer nieuwe ___ in Nederland.",
          answer: "verkiezingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het nieuwe ___ bestaat uit ministers en staatssecretarissen.",
          answer: "kabinet"
        },
        {
          sentence: "Er zijn binnenkort weer nieuwe ___ in Nederland.",
          answer: "verkiezingen"
        },
        {
          sentence: "De verkiezingen waren ___ uitgeschreven.",
          answer: "vervroegde"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'vervroegde' in deze context?",
        options: [
          "te laat gepland",
          "te vroeg gepland",
          "niet gepland",
          "onbekend"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'zetel' in de politiek?",
        options: [
          "een stoel",
          "een politieke functie",
          "een mandaat in het parlement",
          "een verkiezingsdistrict"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom wordt er opnieuw gestemd in Nederland?",
        options: [
          "Omdat het oude kabinet viel",
          "Omdat er een feest was",
          "Omdat de verkiezingen elk jaar zijn",
          "Omdat er een nieuwe koning is"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het kabinet-Schoof is nog steeds aan de macht.",
        isTrue: false
      },
      {
        statement: "D66 en PVD hebben evenveel zetels.",
        isTrue: true
      },
      {
        statement: "De verkiezingen waren oorspronkelijk gepland voor volgend jaar.",
        isTrue: false
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
    title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
    topicNumber: 1,
    article: {
      title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
      summary: "De Standaard-fotograaf Gert Jochems geeft een inkijk in het leven van alledag in Oekraïens oorlogsgebied. Hij kon ter plekke volgen hoe de Azov-brigade gronddrones inzet voor de bevoorrading langs de levensgevaarlijke frontlijn."
    },
    vocabulary: {
      words: [
        {
          word: "front",
          definition: "gebied waar gevochten wordt",
          sentence: "Hij reisde naar het ___ om te filmen.",
          answer: "front"
        },
        {
          word: "gronddrones",
          definition: "vliegende machines die op de grond werken",
          sentence: "De ___ brengen medicijnen naar soldaten.",
          answer: "gronddrones"
        },
        {
          word: "frontlijn",
          definition: "lijn waar de twee kanten elkaar ontmoeten",
          sentence: "De ___ verplaatst zich dagelijks.",
          answer: "frontlijn"
        },
        {
          word: "fotograaf",
          definition: "iemand die foto's maakt",
          sentence: "De ___ maakt foto's van de oorlog.",
          answer: "fotograaf"
        },
        {
          word: "oorlogsgebied",
          definition: "plaats waar oorlog is",
          sentence: "Hij reisde naar het ___ om te helpen.",
          answer: "oorlogsgebied"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij reisde naar het ___ om te helpen.",
          answer: "oorlogsgebied"
        },
        {
          sentence: "De ___ brengen medicijnen naar soldaten.",
          answer: "gronddrones"
        },
        {
          sentence: "De ___ verplaatst zich dagelijks.",
          answer: "frontlijn"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'onmisbaar' in de tekst?",
        options: [
          "niet te missen",
          "heel erg nodig",
          "onzichtbaar",
          "onbereikbaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gebruikt men gronddrones volgens de tekst?",
        options: [
          "in vredestijd",
          "in oorlogsgebieden",
          "alleen in laboratoria",
          "voor filmopnames"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de fotograaf in de tekst?",
        options: [
          "hij vecht mee",
          "hij maakt foto's",
          "hij leidt de drones",
          "hij behandelt gewonden"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gert Jochems is een fotograaf voor De Standaard.",
        isTrue: true
      },
      {
        statement: "Gronddrones worden gebruikt om te bouwen.",
        isTrue: false
      },
      {
        statement: "De Azov-brigade gebruikt drones voor bevoorrading.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Verdachte in grootschalige adoptiefraude na veertig jaar voor de rechter",
    topicNumber: 1,
    article: {
      title: "Verdachte in grootschalige adoptiefraude na veertig jaar voor de rechter",
      summary: "Er komt een Belgisch strafproces over de adoptie van kinderen uit Guatemala. Deze kinderen werden gestolen en met valse papieren naar België gebracht. De biologische moeder weet mogelijk niet eens dat haar kind nog leeft."
    },
    vocabulary: {
      words: [
        {
          word: "moeder",
          definition: "de vrouwelijke ouder van een kind",
          sentence: "De biologische ___ wist misschien niet dat haar kind nog leefde.",
          answer: "moeder"
        },
        {
          word: "Guatemala",
          definition: "een land in Midden-Amerika",
          sentence: "Veel kinderen werden illegaal geadopteerd uit ___.",
          answer: "Guatemala"
        },
        {
          word: "kinderen",
          definition: "jonge personen, meestal onder de 18 jaar",
          sentence: "De ___ werden illegaal geadopteerd uit Guatemala.",
          answer: "kinderen"
        },
        {
          word: "adoptie",
          definition: "het officieel aannemen van een kind dat niet van jezelf is",
          sentence: "De ___ van kinderen uit andere landen is soms illegaal.",
          answer: "adoptie"
        },
        {
          word: "valse",
          definition: "niet echt, nep of onecht",
          sentence: "Ze kregen ___ documenten om de adoptie te verbergen.",
          answer: "valse"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werden illegaal geadopteerd uit Guatemala.",
          answer: "kinderen"
        },
        {
          sentence: "Veel kinderen werden illegaal geadopteerd uit ___.",
          answer: "Guatemala"
        },
        {
          sentence: "Ze kregen ___ documenten om de adoptie te verbergen.",
          answer: "valse"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat deze rechtszaak over?",
        options: [
          "Een adoptie van een kind uit Nederland",
          "Een adoptie van kinderen uit Guatemala",
          "Een diefstal van kunstwerken",
          "Een verkeersongeval in België"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk gevolg van deze fraude?",
        options: [
          "Kinderen groeien op zonder te weten wie hun echte ouders zijn.",
          "Kinderen krijgen te veel speelgoed.",
          "Kinderen worden verliefd op hun adoptieouders.",
          "Kinderen vergeten hun verleden."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is waar over de biologische moeder?",
        options: [
          "Ze weet zeker dat haar kind nog leeft.",
          "Ze heeft nooit geweten dat ze een kind had.",
          "Ze heeft het kind zelf aan de adoptieouders gegeven.",
          "Ze is de adoptiemoeder van het kind."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De adoptiekinderen werden met valse papieren naar België gebracht.",
        isTrue: true
      },
      {
        statement: "De biologische moeder was altijd al op de hoogte van de adoptie.",
        isTrue: false
      },
      {
        statement: "Deze zaak speelt zich af in Guatemala alleen.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: Waarom zo veel, zo laat, en zo luid?",
    topicNumber: 1,
    article: {
      title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: Waarom zo veel, zo laat, en zo luid?",
      summary: "In de Gentse Bernard Spaelaan zijn de bewoners de wanhoop nabij: sinds een paar maanden denderen per dag zo’n 700 trams aan 100 decibel door de straat. De vrederechter vraagt De Lijn de overlast te verminderen."
    },
    vocabulary: {
      words: [
        {
          word: "decibel",
          definition: "eenheid voor geluidsvolume",
          sentence: "Het geluid was meer dan 100 ___.",
          answer: "decibel"
        },
        {
          word: "bewoners",
          definition: "mensen die in een huis of gebied wonen",
          sentence: "De ___ van de straat klagen over het lawaai.",
          answer: "bewoners"
        },
        {
          word: "verminderen",
          definition: "minder maken",
          sentence: "We moeten de overlast ___.",
          answer: "verminderen"
        },
        {
          word: "trams",
          definition: "openbaar vervoermiddel op rails",
          sentence: "De ___ rijden door de stad.",
          answer: "trams"
        },
        {
          word: "bewoners",
          definition: "mensen die in een huis of gebied wonen",
          sentence: "De ___ van de straat klagen over het lawaai.",
          answer: "bewoners"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van de straat klagen over het lawaai.",
          answer: "bewoners"
        },
        {
          sentence: "We moeten de overlast ___.",
          answer: "verminderen"
        },
        {
          sentence: "De ___ van de straat klagen over het lawaai.",
          answer: "bewoners"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de bewoners van de Bernard Spaelaan ontevreden?",
        options: [
          "Omdat er te veel auto's rijden",
          "Omdat er te veel trams rijden",
          "Omdat er te veel lawaai is",
          "Omdat er te weinig parken zijn"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat heeft de vrederechter gevraagd aan De Lijn?",
        options: [
          "Om de trams te stoppen",
          "Om de trams sneller te laten rijden",
          "Om de overlast te verminderen",
          "Om de bewoners te verhuizen"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel trams rijden er per dag door de straat?",
        options: [
          "Ongeveer 100",
          "Ongeveer 500",
          "Ongeveer 700",
          "Ongeveer 1000"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van de Bernard Spaelaan zijn blij met de trams.",
        isTrue: false
      },
      {
        statement: "De vrederechter heeft De Lijn gevraagd om de overlast te verminderen.",
        isTrue: true
      },
      {
        statement: "Er rijden 700 trams per dag door de straat.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Defensie werkt aan betere droneverdediging",
    topicNumber: 1,
    article: {
      title: "Defensie werkt aan betere droneverdediging",
      summary: "Defensie wil haar bescherming tegen drones verbeteren. Ze gaan nieuwe technologie kopen om drones te detecteren en te bestrijden. Dit gebeurt na incidenten waarbij drones ongezien bases naderden."
    },
    vocabulary: {
      words: [
        {
          word: "Defensie",
          definition: "de krijgsmacht, het leger",
          sentence: "___ is de organisatie die het land verdedigt.",
          answer: "Defensie"
        },
        {
          word: "drones",
          definition: "onbemande vliegtuigjes, vaak op afstand bestuurd",
          sentence: "Een ___ is een klein onbemand vliegtuigje.",
          answer: "drone"
        },
        {
          word: "detecteren",
          definition: "opmerken, ontdekken",
          sentence: "De politie kan een verdachte ___ met camera's.",
          answer: "detecteren"
        },
        {
          word: "verbeteren",
          definition: "beter maken, verbeteren",
          sentence: "De coach wil de teamspirit ___ met oefeningen.",
          answer: "verbeteren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een ___ is een klein onbemand vliegtuigje.",
          answer: "drone"
        },
        {
          sentence: "De coach wil de teamspirit ___ met oefeningen.",
          answer: "verbeteren"
        },
        {
          sentence: "De politie kan een verdachte ___ met camera's.",
          answer: "detecteren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het doel van Defensie volgens de tekst?",
        options: [
          "Drone races organiseren",
          "Nieuwe drones kopen voor eigen gebruik",
          "Drone detectie en bewapening verbeteren",
          "Geen actie ondernemen"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom wil Defensie deze actie ondernemen?",
        options: [
          "Omdat er een tekort is aan drones",
          "Omdat er recent incidenten waren met drones",
          "Omdat de regering het heeft gevraagd",
          "Omdat het budget te hoog is"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageert Defensie op de drone-incidenten?",
        options: [
          "Door drones te negeren",
          "Door defensiebudgetten te verhogen zonder actie",
          "Door technologie te kopen voor betere detectie",
          "Door de luchtmacht op te doeken"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Defensie heeft al de perfecte oplossing voor drone-aanvallen.",
        isTrue: false
      },
      {
        statement: "De tekst suggereert dat Defensie actie onderneemt na drone-incidenten.",
        isTrue: true
      },
      {
        statement: "Defensie gaat minder drones gebruiken door deze ontwikkelingen.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Verkiezingen in Nederland",
    topicNumber: 1,
    article: {
      title: "Verkiezingen in Nederland",
      summary: "Nederland houdt verkiezingen. Er is een nieuwe regering."
    },
    vocabulary: {
      words: [
        {
          word: "Nederland",
          definition: "een land in Europa",
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        },
        {
          word: "verkiezingen",
          definition: "wanneer mensen stemmen voor een nieuwe regering",
          sentence: "Mensen stemmen tijdens de ___.",
          answer: "verkiezingen"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land bestuurt",
          sentence: "De ___ maakt belangrijke beslissingen.",
          answer: "regering"
        },
        {
          word: "nieuwe",
          definition: "niet oud, recent gemaakt",
          sentence: "Ze hebben een ___ huis gekocht.",
          answer: "nieuwe"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Mensen stemmen tijdens de ___.",
          answer: "verkiezingen"
        },
        {
          sentence: "Ze hebben een ___ huis gekocht.",
          answer: "nieuwe"
        },
        {
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebeurt er tijdens verkiezingen?",
        options: [
          "Mensen stemmen op een partij.",
          "Mensen gaan op vakantie.",
          "Mensen vieren een feest.",
          "Mensen spelen een spel."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een kabinet?",
        options: [
          "Een groep ministers die het land bestuurt.",
          "Een soort auto.",
          "Een groot gebouw.",
          "Een soort voedsel."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'nieuwe'?",
        options: [
          "Niet oud, recent gemaakt.",
          "Heel oud.",
          "Een soort dier.",
          "Een muziekinstrument."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Nederland heeft verkiezingen gehouden.",
        isTrue: true
      },
      {
        statement: "Een kabinet is een soort dier.",
        isTrue: false
      },
      {
        statement: "Stemmen betekent je keuze maken.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
    topicNumber: 1,
    article: {
      title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
      summary: "Donald Trump is opnieuw president van Amerika. Hij wil dat de VS weer kernwapens testen. Dit verandert veel in de wereld. Volg hier het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "VS",
          definition: "De Verenigde Staten, een land",
          sentence: "De ___ zijn een land in Amerika.",
          answer: "VS"
        },
        {
          word: "testen",
          definition: "Uitproberen of controleren",
          sentence: "Hij wil een nieuw spel ___.",
          answer: "testen"
        },
        {
          word: "gaan",
          definition: "Willen of van plan zijn",
          sentence: "Ze ___ een taart eten.",
          answer: "gaan"
        },
        {
          word: "kernwapens",
          definition: "Heel gevaarlijke bommen",
          sentence: "___ kunnen veel kapotmaken.",
          answer: "kernwapens"
        },
        {
          word: "weer",
          definition: "Opnieuw of nog een keer",
          sentence: "Hij komt ___ naar huis.",
          answer: "weer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ zijn een land in Amerika.",
          answer: "VS"
        },
        {
          sentence: "Ze ___ een taart eten.",
          answer: "gaan"
        },
        {
          sentence: "Hij komt ___ naar huis.",
          answer: "weer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent “testen” in deze context?",
        options: [
          "Eten",
          "Maken",
          "Uitproberen",
          "Bouwen"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar staat “VS” voor in deze tekst?",
        options: [
          "Verenigde Staten",
          "Vlaamse Staten",
          "Vrije Staten",
          "Veilige Staten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van het artikel?",
        options: [
          "Trump is president",
          "Trump wil nieuwe dingen doen",
          "Trump verandert niets",
          "Trump reist de wereld over"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "Trump wil geen kernwapens testen.",
        isTrue: false
      },
      {
        statement: "Het artikel zegt dat Trump veel verandert.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Fotograaf in Oekraïne",
    topicNumber: 1,
    article: {
      title: "Fotograaf in Oekraïne",
      summary: "Een fotograaf laat het leven zien in Oekraïne. Drones brengen eten en spullen naar soldaten."
    },
    vocabulary: {
      words: [
        {
          word: "eten",
          definition: "wat je eet, zoals brood of fruit",
          sentence: "De drone brengt ___ naar de soldaten.",
          answer: "eten"
        },
        {
          word: "soldaten",
          definition: "mensen die vechten in een leger",
          sentence: "De ___ vechten in Oekraïne.",
          answer: "soldaten"
        },
        {
          word: "spullen",
          definition: "alle dingen die je hebt, zoals kleren of gereedschap",
          sentence: "De drone brengt ___ naar de soldaten.",
          answer: "spullen"
        },
        {
          word: "Oekraïne",
          definition: "een land in Europa",
          sentence: "Hij reist naar ___ voor zijn werk.",
          answer: "Oekraïne"
        },
        {
          word: "fotograaf",
          definition: "iemand die foto's maakt",
          sentence: "De ___ maakt een foto van de drone.",
          answer: "fotograaf"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij reist naar ___ voor zijn werk.",
          answer: "Oekraïne"
        },
        {
          sentence: "De ___ vechten in Oekraïne.",
          answer: "soldaten"
        },
        {
          sentence: "De drone brengt ___ naar de soldaten.",
          answer: "eten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat laat de fotograaf zien in Oekraïne?",
        options: [
          "Het leven van soldaten",
          "De stad waar hij woont",
          "Een nieuwe drone",
          "Zijn eigen familie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doen de drones in de tekst?",
        options: [
          "Ze vechten in de oorlog.",
          "Ze brengen eten en spullen.",
          "Ze maken foto's van soldaten.",
          "Ze wonen in Oekraïne."
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is de fotograaf?",
        options: [
          "In Nederland",
          "In Oekraïne",
          "In zijn huis",
          "Op school"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De fotograaf is in Oekraïne.",
        isTrue: true
      },
      {
        statement: "De drones vechten in de oorlog.",
        isTrue: false
      },
      {
        statement: "De fotograaf laat het leven in Oekraïne zien.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Verdachte in adoptiefraude",
    topicNumber: 1,
    article: {
      title: "Verdachte in adoptiefraude",
      summary: "Er is een rechtszaak over adoptie. Er zijn problemen met adoptie uit Guatemala."
    },
    vocabulary: {
      words: [
        {
          word: "adoptie",
          definition: "wanneer iemand een kind opneemt als eigen kind",
          sentence: "___ kan een manier zijn om een gezin te starten.",
          answer: "adoptie"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is een adoptie?",
        options: [
          "Een soort dier",
          "Een type auto",
          "Een manier om een kind te krijgen",
          "Een soort voedsel"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat doet een rechter?",
        options: [
          "Kookt eten",
          "Doet onderzoek",
          "Beslist in de rechtbank",
          "Speelt videogames"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is België?",
        options: [
          "In Azië",
          "In Europa",
          "In Afrika",
          "In de oceaan"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Adoptie is wanneer je een auto koopt.",
        isTrue: false
      },
      {
        statement: "Een rechter werkt in een rechtbank.",
        isTrue: true
      },
      {
        statement: "België is een stad in Nederland.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Lawaai in Gent",
    topicNumber: 1,
    article: {
      title: "Lawaai in Gent",
      summary: "In Gent is er veel lawaai van trams. Bewoners kunnen niet slapen. De rechter wil dat de tram minder lawaai maakt."
    },
    vocabulary: {
      words: [
        {
          word: "Lawaai",
          definition: "veel geluid",
          sentence: "Ik houd niet van ___.",
          answer: "lawaai"
        },
        {
          word: "trams",
          definition: "een soort trein in de stad",
          sentence: "De ___ rijden op straat.",
          answer: "trams"
        },
        {
          word: "bewoners",
          definition: "mensen die in een huis of stad wonen",
          sentence: "De ___ van de straat zijn thuis.",
          answer: "bewoners"
        },
        {
          word: "rechter",
          definition: "iemand die in de rechtbank werkt",
          sentence: "De ___ zegt dat het lawaai moet stoppen.",
          answer: "rechter"
        },
        {
          word: "lawaai",
          definition: "veel geluid",
          sentence: "Er is te veel ___ in de stad.",
          answer: "lawaai"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik houd niet van ___.",
          answer: "lawaai"
        },
        {
          sentence: "De ___ zegt dat het lawaai moet stoppen.",
          answer: "rechter"
        },
        {
          sentence: "De ___ rijden op straat.",
          answer: "trams"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de bewoners van Gent wakker?",
        options: [
          "Omdat er veel lawaai is van trams",
          "Omdat ze naar een feest gaan",
          "Omdat ze veel werken",
          "Omdat ze ziek zijn"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wil de rechter?",
        options: [
          "Dat de tram minder lawaai maakt",
          "Dat de tram sneller gaat rijden",
          "Dat de bewoners verhuizen",
          "Dat de tram stopt met rijden"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar wonen de bewoners?",
        options: [
          "In Gent",
          "In Amsterdam",
          "In een groot huis",
          "Op een boerderij"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De tram maakt veel lawaai.",
        isTrue: true
      },
      {
        statement: "De rechter wil dat de tram meer lawaai maakt.",
        isTrue: false
      },
      {
        statement: "De bewoners kunnen goed slapen door het lawaai.",
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
    title: "D66 en PVV beide op 26 zetels, verschil is minder dan 2.000 stemmen",
    topicNumber: 1,
    article: {
      title: "D66 en PVV beide op 26 zetels, verschil is minder dan 2.000 stemmen",
      summary: "Nederland trekt woensdag opnieuw naar de stembus voor de vervroegde parlementsverkiezingen na de val van het kabinet-Schoof. Volg hier de laatste updates."
    },
    vocabulary: {
      words: [
        {
          word: "stemmen",
          definition: "een stem uitbrengen, je keuze maken in een verkiezing",
          sentence: "In een democratie is het belangrijk dat burgers hun recht om te ___ kunnen uitoefenen.",
          answer: "stemmen"
        },
        {
          word: "zetels",
          definition: "de zetels in een parlement, de posities die partijen winnen bij verkiezingen",
          sentence: "De partij won meer dan tien ___ in het nieuwe parlement.",
          answer: "zetels"
        },
        {
          word: "verkiezingen",
          definition: "het proces waarbij mensen stemmen om hun vertegenwoordigers te kiezen",
          sentence: "Nederland houdt volgende maand algemene ___ om een nieuwe regering te kiezen.",
          answer: "verkiezingen"
        },
        {
          word: "kabinet",
          definition: "de regering van een land, bestaande uit ministers en staatssecretarissen",
          sentence: "Het oude ___ viel vanwege onenigheid over de begroting.",
          answer: "kabinet"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het oude ___ viel vanwege onenigheid over de begroting.",
          answer: "kabinet"
        },
        {
          sentence: "In een democratie is het belangrijk dat burgers hun recht om te ___ kunnen uitoefenen.",
          answer: "stemmen"
        },
        {
          sentence: "Nederland houdt volgende maand algemene ___ om een nieuwe regering te kiezen.",
          answer: "verkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als een kabinet valt?",
        options: [
          "De regering treedt af en er zijn nieuwe verkiezingen nodig.",
          "Het kabinet heeft een succesvolle hervorming doorgevoerd.",
          "De koning heeft een nieuwe minister-president benoemd.",
          "Het parlement is met vakantie gegaan."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een belangrijk kenmerk van een democratie?",
        options: [
          "Vrije en eerlijke verkiezingen waar iedereen kan stemmen.",
          "Een koning die alle beslissingen neemt.",
          "Politieke partijen zijn verboden.",
          "Alleen de rijkste burgers mogen stemmen."
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom is het belangrijk dat verkiezingen vrij zijn?",
        options: [
          "Zodat burgers hun echte voorkeur kunnen uiten zonder dwang.",
          "Omdat het dan makkelijker is voor de regerende partij.",
          "Omdat internationale waarnemers dan positiever rapporteren.",
          "Omdat de verliezende partij dan minder protest heeft."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Nederland is een monarchie waar de koningin de meeste politieke macht heeft.",
        isTrue: false
      },
      {
        statement: "Vrije verkiezingen zijn een essentieel onderdeel van een functionerende democratie.",
        isTrue: true
      },
      {
        statement: "Als een kabinet valt, betekent dat de regering aftreedt en er nieuwe verkiezingen komen.",
        isTrue: true
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
    topicNumber: 1,
    article: {
      title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste zorg bij het testen van kernwapens volgens de tekst?",
        options: [
          "Het kan internationale spanningen vergroten.",
          "Het is duur en inefficiënt.",
          "Het is goed voor de economie.",
          "Het leidt tot onmiddellijke wereldvrede."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wordt er genoemd als een manier om internationale veiligheid te bevorderen?",
        options: [
          "Het testen van meer kernwapens.",
          "Het inzetten van diplomatieke onderhandelingen.",
          "Het isoleren van landen van de wereldgemeenschap.",
          "Het negeren van internationale verdragen."
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe wordt de tweede ambtstermijn van Trump in de titel omschreven?",
        options: [
          "Als een periode van grote wereldwijde verandering.",
          "Als een tijdperk van totale vrede.",
          "Als een onbelangrijke historische gebeurtenis.",
          "Als een voorbeeld van perfect leiderschap."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De titel suggereert dat Trump onmiddellijk na zijn aantreden kernwapens zal testen.",
        isTrue: true
      },
      {
        statement: "De samenvatting stelt dat Trumps tweede ambtstermijn alleen lokale veranderingen in de VS veroorzaakt.",
        isTrue: false
      },
      {
        statement: "Internationale samenwerking is een thema in de tekst, maar wordt niet gepromoot als oplossing.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
    topicNumber: 1,
    article: {
      title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
      summary: "De Standaard-fotograaf Gert Jochems geeft een inkijk in het leven van alledag in Oekraïens oorlogsgebied. Hij kon ter plekke volgen hoe de Azov-brigade gronddrones inzet voor de bevoorrading langs de levensgevaarlijke frontlijn."
    },
    vocabulary: {
      words: [
        {
          word: "frontlijn",
          definition: "de voorste linie in een gevechtsgebied",
          sentence: "De soldaten hielden stand langs de volledige lengte van de ___.",
          answer: "frontlijn"
        },
        {
          word: "bevoorrading",
          definition: "het voorzien van benodigdheden, vooral in militaire context",
          sentence: "De ___ van medicijnen en voedsel was cruciaal voor de overlevenden.",
          answer: "bevoorrading"
        },
        {
          word: "leven",
          definition: "het bestaan of de staat van in leven zijn",
          sentence: "Het ___ van de soldaten hing aan een zijden draadje.",
          answer: "leven"
        },
        {
          word: "front",
          definition: "het voorste deel of gebied waar actie plaatsvindt, vooral in militaire context",
          sentence: "Hij rapporteerde vanaf het ___ waar de gevechten het hevigst waren.",
          answer: "front"
        },
        {
          word: "fotograaf",
          definition: "een persoon die foto's maakt, meestal als beroep",
          sentence: "De ___ nam indrukwekkende beelden tijdens de missie.",
          answer: "fotograaf"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ nam indrukwekkende beelden tijdens de missie.",
          answer: "fotograaf"
        },
        {
          sentence: "Het ___ van de soldaten hing aan een zijden draadje.",
          answer: "leven"
        },
        {
          sentence: "De soldaten hielden stand langs de volledige lengte van de ___.",
          answer: "frontlijn"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat beschrijft de tekst over het gebruik van gronddrones in Oekraïne?",
        options: [
          "Ze worden gebruikt voor bevoorrading langs de frontlijn.",
          "Ze worden ingezet voor luchtverkenning alleen.",
          "Ze vervangen volledig menselijke soldaten.",
          "Ze zijn niet effectief gebleken in oorlog."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van Gert Jochems volgens de tekst?",
        options: [
          "Hij is een fotograaf die de situatie documenteert.",
          "Hij is een soldaat die vecht in Oekraïne.",
          "Hij leidt de Azov-brigade met drones.",
          "Hij is een politiek leider die over oorlog praat."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat impliceert de tekst over de veiligheidssituatie?",
        options: [
          "Het is gevaarlijk; de frontlijn is levensgevaarlijk.",
          "Het is volledig veilig; er is geen risico.",
          "Alleen drones zijn in gevaar, niet mensen.",
          "De situatie is volledig vreedzaam en stabiel."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Gert Jochems is een fotograaf die de inzet van gronddrones in Oekraïne documenteert.",
        isTrue: true
      },
      {
        statement: "De Azov-brigade gebruikt alleen drones voor offensieve aanvallen, niet voor bevoorrading.",
        isTrue: false
      },
      {
        statement: "Journalisten zoals Jochems hebben directe toegang tot de frontlinie zonder enig risico.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Verdachte grootschalige adoptiefraude na veertig jaar alsnog voor de rechter",
    topicNumber: 1,
    article: {
      title: "Verdachte grootschalige adoptiefraude na veertig jaar alsnog voor de rechter",
      summary: "Er komt alsnog een Belgisch strafproces in de zaak van de minstens vijftien geroofde ‘weeskinderen’ uit Guatemala. “Ik kwam naar België met een valse naam, zonder geboortedatum en met een biologische moeder die allicht niet eens weet dat ik nog leef.”"
    },
    vocabulary: {
      words: [
        {
          word: "fraude",
          definition: "Opzettelijke misleiding of bedrog om een oneerlijk voordeel te krijgen.",
          sentence: "De politie onderzoekt de zaak op verdenking van ___.",
          answer: "fraude"
        },
        {
          word: "rechter",
          definition: "De persoon die in een rechtzaak beslist wie gelijk heeft of welke straf er moet worden gegeven.",
          sentence: "De zaak werd voor de ___ gebracht.",
          answer: "rechter"
        },
        {
          word: "geboortedatum",
          definition: "De datum waarop iemand is geboren.",
          sentence: "Zijn ___ is 12 maart 1985.",
          answer: "geboorte datum"
        },
        {
          word: "wees",
          definition: "Een kind waarvan beide ouders zijn overleden.",
          sentence: "Hij werd een ___ op zevenjarige leeftijd.",
          answer: "wees"
        },
        {
          word: "valse",
          definition: "Niet echt of niet waar, vaak met de bedoeling om te misleiden.",
          sentence: "Hij gebruikte een ___ paspoort om het land binnen te komen.",
          answer: "valse"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De politie onderzoekt de zaak op verdenking van ___.",
          answer: "fraude"
        },
        {
          sentence: "Hij gebruikte een ___ paspoort om het land binnen te komen.",
          answer: "valse"
        },
        {
          sentence: "De zaak werd voor de ___ gebracht.",
          answer: "rechter"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom worden de kinderen in deze zaak 'weeskinderen' genoemd?",
        options: [
          "Omdat ze geen ouders meer hebben.",
          "Omdat ze zijn achtergelaten door hun ouders.",
          "Omdat ze illegaal zijn geadopteerd zonder dat hun biologische ouders het weten.",
          "Omdat ze zijn verkocht door hun familie."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'valse naam' in deze context?",
        options: [
          "Een naam die iemand uit zichzelf kiest.",
          "Een naam die niet iemands echte naam is, maar wordt gebruikt om autoriteiten te misleiden.",
          "Een naam die alleen in officiële documenten wordt gebruikt.",
          "Een naam die door de overheid is toegewezen."
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom wordt deze zaak nu, na veertig jaar, voor de rechter gebracht?",
        options: [
          "Omdat nieuwe technologieën oude zaken kunnen oplossen.",
          "Omdat de slachtoffers nu pas durven te spreken.",
          "Omdat de adoptieouders nu berecht worden voor fraude.",
          "Omdat de biologische ouders nu pas de kinderen terugvinden."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De kinderen in deze zaak zijn allemaal wezen, wat betekent dat hun biologische ouders allebei zijn overleden.",
        isTrue: false
      },
      {
        statement: "De term 'weeskinderen' wordt hier gebruikt om aan te geven dat de kinderen van hun ouders zijn gescheiden, niet dat de ouders daadwerkelijk zijn overleden.",
        isTrue: true
      },
      {
        statement: "De zaak wordt nu voor de rechter gebracht omdat de adoptieouders destijds wisten dat de adoptie illegaal was.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: “Waarom zo veel, zo laat, en zo luid?”",
    topicNumber: 1,
    article: {
      title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: “Waarom zo veel, zo laat, en zo luid?”",
      summary: "In de Gentse Bernard Spaelaan zijn de bewoners de wanhoop nabij: sinds een paar maanden denderen per dag zo’n 700 trams aan 100 decibel door de straat. De vrederechter vraagt De Lijn de overlast te verminderen."
    },
    vocabulary: {
      words: [
        {
          word: "wanhoop",
          definition: "gevoel van totale hopeloosheid of verlatenheid",
          sentence: "Na het verlies van zijn baan voelde hij een diepe ___.",
          answer: "wanhoop"
        },
        {
          word: "overlast",
          definition: "hinder of last die wordt veroorzaakt",
          sentence: "De bouwwerkzaamheden veroorzaken veel ___ voor de buurt.",
          answer: "overlast"
        },
        {
          word: "bewoners",
          definition: "mensen die in een bepaalde plaats of gebouw wonen",
          sentence: "De ___ van deze straat klagen over geluidsoverlast.",
          answer: "bewoners"
        },
        {
          word: "bewoners",
          definition: "mensen die in een bepaalde plaats of gebouw wonen",
          sentence: "De ___ van het gebouw werden geëvacueerd wegens brand.",
          answer: "bewoners"
        },
        {
          word: "trams",
          definition: "openbaar vervoermiddel dat op rails rijdt, vaak in de stad",
          sentence: "De ___ in deze stad rijden tot laat in de avond.",
          answer: "trams"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van deze straat klagen over geluidsoverlast.",
          answer: "bewoners"
        },
        {
          sentence: "De ___ van het gebouw werden geëvacueerd wegens brand.",
          answer: "bewoners"
        },
        {
          sentence: "De ___ in deze stad rijden tot laat in de avond.",
          answer: "trams"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de bewoners van de Bernard Spaelaan overlast gaan ervaren?",
        options: [
          "Omdat er meer auto's zijn dan normaal",
          "Omdat het aantal trams is toegenomen tot 700 per dag",
          "Omdat er een brand was in het gebouw",
          "Omdat de tramrails zijn vernieuwd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de vrederechter in deze situatie?",
        options: [
          "Hij organiseert protesten tegen de overlast",
          "Hij beveelt De Lijn om de overlast te verminderen",
          "Hij geeft gratis ov-kaarten aan de bewoners",
          "Hij bemiddelt tussen de bewoners en de trambestuurders"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe probeert De Lijn de overlast te verminderen volgens de samenvatting?",
        options: [
          "Door minder trams te laten rijden",
          "Door tramroutes te verleggen naar andere straten",
          "Door geluiddempende maatregelen te nemen op de trams",
          "Door de vrederechter in te schakelen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van de Bernard Spaelaan in Gent ervaren overlast door het hoge aantal trams dat daar rijdt.",
        isTrue: true
      },
      {
        statement: "De vrederechter heeft De Lijn bevolen om de overlast volledig te elimineren.",
        isTrue: false
      },
      {
        statement: "De overlast wordt veroorzaakt doordat de trams 's nachts rijden en veel geluid maken.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Chef Defensie Vansina over drones boven Marche-en-Famenne: “We gaan versneld dronedetectie en bewapening kopen”",
    topicNumber: 1,
    article: {
      title: "Chef Defensie Vansina over drones boven Marche-en-Famenne: “We gaan versneld dronedetectie en bewapening kopen”",
      summary: "Wie de drones bestuurde die dinsdagnacht opnieuw boven de legerbasis van Marche-en-Famenne vlogen, weet Defensie nog niet. Maar dat de bescherming tegen disruptieve droneactiviteit verscherpt moet worden, staat vast. “Men test ons.”"
    },
    vocabulary: {
      words: [
        {
          word: "drones",
          definition: "Onbemande vliegtuigjes die op afstand bestuurd worden",
          sentence: "De militaire basis gebruikt speciale systemen om ___ te detecteren en onschadelijk te maken.",
          answer: "drones"
        },
        {
          word: "basis",
          definition: "Een plaats of locatie die als uitgangspunt of hoofdkwartier dient",
          sentence: "De militaire ___ in Marche-en-Famenne werd recent overvlogen door drones.",
          answer: "basis"
        },
        {
          word: "detectie",
          definition: "Het opsporen of ontdekken van iets, vaak met technische middelen",
          sentence: "Moderne ___systemen kunnen zelfs kleine objecten van ver waarnemen.",
          answer: "detectie"
        },
        {
          word: "bewapening",
          definition: "Wapens en munitie die gebruikt worden voor defensie of aanval",
          sentence: "Nieuwe ___ is nodig om de verhoogde dreiging het hoofd te bieden.",
          answer: "bewapening"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De militaire ___ in Marche-en-Famenne werd recent overvlogen door drones.",
          answer: "basis"
        },
        {
          sentence: "Moderne ___systemen kunnen zelfs kleine objecten van ver waarnemen.",
          answer: "detectie"
        },
        {
          sentence: "De militaire basis gebruikt speciale systemen om ___ te detecteren en onschadelijk te maken.",
          answer: "drones"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de voornaamste zorg van Defensie volgens de tekst?",
        options: [
          "Het detecteren van nieuwe drone-modellen",
          "Het trainen van personeel in drone-bestrijding",
          "Het beveiligen van militaire bases tegen drone-aanvallen",
          "Het ontwikkelen van offensieve drone-capaciteiten"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe reageert Defensie op de drone-incidenten?",
        options: [
          "Door de aanschaf van drones te versnellen",
          "Door detectie- en bewapeningstechnologie te verbeteren",
          "Door alle bases tijdelijk te sluiten",
          "Door internationale partners om hulp te vragen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat impliceert de uitspraak “Men test ons”?",
        options: [
          "Dat Defensie zelf experimenteert met drones",
          "Dat een externe groep de verdedigingstesten",
          "Dat nieuwe medewerkers worden gescreend",
          "Dat er sprake is van psychologische oorvoering"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Defensie weet precies wie verantwoordelijk is voor de drone-incidenten.",
        isTrue: false
      },
      {
        statement: "De bewaking van militaire bases wordt aangescherpt na de recente gebeurtenissen.",
        isTrue: true
      },
      {
        statement: "Drones worden enkel gebruikt voor offensieve militaire operaties.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Nederlandse verkiezingen: uitslag erg spannend",
    topicNumber: 1,
    article: {
      title: "Nederlandse verkiezingen: uitslag erg spannend",
      summary: "In Nederland zijn er verkiezingen. De uitslag is heel spannend, want de twee grootste partijen hebben bijna evenveel zetels. Ze zijn nog aan het tellen."
    },
    vocabulary: {
      words: [
        {
          word: "uitslag",
          definition: "het eindresultaat, zoals na verkiezingen",
          sentence: "De ___ laat zien welke partij heeft gewonnen.",
          answer: "uitslag"
        },
        {
          word: "spannend",
          definition: "opwindend, je weet niet wat er gaat gebeuren",
          sentence: "Het is ___ om te wachten op de uitslag.",
          answer: "spannend"
        },
        {
          word: "partij",
          definition: "een groep mensen met dezelfde ideeën over hoe het land moet worden gerund",
          sentence: "Mensen stemmen op een ___ die ze leuk vinden.",
          answer: "partij"
        },
        {
          word: "tellen",
          definition: "optellen, bijvoorbeeld hoeveel stemmen een partij heeft",
          sentence: "Medewerkers moeten de stemmen ___.",
          answer: "tellen"
        },
        {
          word: "verkiezingen",
          definition: "een keer per paar jaar stemmen mensen op een partij.",
          sentence: "In Nederland zijn er binnenkort ___.",
          answer: "verkiezingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het is ___ om te wachten op de uitslag.",
          answer: "spannend"
        },
        {
          sentence: "Mensen stemmen op een ___ die ze leuk vinden.",
          answer: "partij"
        },
        {
          sentence: "In Nederland zijn er binnenkort ___.",
          answer: "verkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de uitslag van de verkiezingen in Nederland?",
        options: [
          "Het is nog niet bekend",
          "Het is al bekend",
          "Het regent buiten",
          "Nederland heeft gewonnen"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom is de uitslag spannend?",
        options: [
          "Omdat het nog niet bekend is",
          "Omdat het al bekend is",
          "Omdat het een feest is",
          "Omdat niemand meer stemt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat gebeurt er als de uitslag bekend is?",
        options: [
          "Dan weten we welke partij gewonnen heeft",
          "Dan begint het te regenen",
          "Dan is de verkiezing voorbij",
          "Dan moet iedereen opnieuw stemmen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De uitslag is al bekend.",
        isTrue: false
      },
      {
        statement: "Twee partijen hebben bijna evenveel zetels.",
        isTrue: true
      },
      {
        statement: "Nederland heeft geen verkiezingen.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
    topicNumber: 1,
    article: {
      title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
      summary: "Donald Trump is opnieuw president van Amerika. Hij zegt dat Amerika weer kernwapens gaat testen. Veel landen zijn bezorgd. Volg hier het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "Amerika",
          definition: "Een land, ook Verenigde Staten genoemd",
          sentence: "Amerika is een groot land.",
          answer: "Amerika"
        },
        {
          word: "landen",
          definition: "Landen zoals Duitsland of Frankrijk",
          sentence: "Veel landen zijn bezorgd.",
          answer: "landen"
        },
        {
          word: "Trump",
          definition: "De achternaam van de president",
          sentence: "Trump is de president van Amerika.",
          answer: "Trump"
        },
        {
          word: "bezorgd",
          definition: "Je maakt je zorgen over iets",
          sentence: "Ze zijn bezorgd over de test.",
          answer: "bezorgd"
        },
        {
          word: "kernwapens",
          definition: "Heel gevaarlijke bommen",
          sentence: "Kernwapens kunnen veel schade doen.",
          answer: "kernwapens"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Trump is de president van Amerika.",
          answer: "Trump"
        },
        {
          sentence: "Ze zijn bezorgd over de test.",
          answer: "bezorgd"
        },
        {
          sentence: "Kernwapens kunnen veel schade doen.",
          answer: "kernwapens"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'testen' in deze tekst?",
        options: [
          "Iets nieuws maken",
          "Iets uitproberen of controleren",
          "Iets kapotmaken",
          "Iets vergeten"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over reizen naar andere landen",
          "Over de verkiezingen in Amerika",
          "Over kernwapens en testen",
          "Over de president van China"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom zijn andere landen bezorgd?",
        options: [
          "Omdat ze niet van Trump houden",
          "Omdat kernwapens gevaarlijk zijn",
          "Omdat ze meer geld willen",
          "Omdat de test plaatsvindt in hun land"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "Kernwapens zijn niet gevaarlijk.",
        isTrue: false
      },
      {
        statement: "Andere landen zijn bezorgd over de tests.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
    topicNumber: 1,
    article: {
      title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
      summary: "De Standaard-fotograaf Gert Jochems geeft een inkijk in het leven van alledag in Oekraïens oorlogsgebied. Hij kon ter plekke volgen hoe de Azov-brigade gronddrones inzet voor de bevoorrading langs de levensgevaarlijke frontlijn."
    },
    vocabulary: {
      words: [
        {
          word: "gronddrones",
          definition: "kleine vliegende machines die dingen kunnen dragen",
          sentence: "De soldaten gebruiken ___ om medicijnen te sturen.",
          answer: "gronddrones"
        },
        {
          word: "nieuwkomers",
          definition: "mensen of dingen die nieuw zijn in een gebied",
          sentence: "De ___ in de klas komen uit verschillende landen.",
          answer: "nieuwkomers"
        },
        {
          word: "oorlogsgebied",
          definition: "een plek waar oorlog is",
          sentence: "Mensen moeten vluchten uit een ___.",
          answer: "oorlogsgebied"
        },
        {
          word: "onmisbare",
          definition: "heel erg nodig, je kunt niet zonder",
          sentence: "Water is ___ voor mensen en dieren.",
          answer: "onmisbare"
        },
        {
          word: "levensgevaarlijke",
          definition: "gevaarlijk voor je leven",
          sentence: "Het is ___ om alleen de oceaan over te steken.",
          answer: "levensgevaarlijke"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Mensen moeten vluchten uit een ___.",
          answer: "oorlogsgebied"
        },
        {
          sentence: "De ___ in de klas komen uit verschillende landen.",
          answer: "nieuwkomers"
        },
        {
          sentence: "Water is ___ voor mensen en dieren.",
          answer: "onmisbare"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat de tekst vooral?",
        options: [
          "Over fotografie in de natuur",
          "Over oorlog in Oekraïne en de inzet van drones",
          "Over reizen naar andere landen",
          "Over de geschiedenis van drones"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat zijn 'gronddrones' in deze tekst?",
        options: [
          "Een soort vliegtuig",
          "Een type soldaat",
          "Kleine vliegende machines die dingen kunnen dragen",
          "Een soort camera"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom zijn de drones belangrijk in de tekst?",
        options: [
          "Ze maken mooie foto's",
          "Ze vervoeren medicijnen en spullen langs de frontlijn",
          "Ze zijn leuk om mee te spelen",
          "Ze worden gebruikt in vredestijd"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De fotograaf Gert Jochems werkte in een oorlogsgebied.",
        isTrue: true
      },
      {
        statement: "Gronddrones worden gebruikt om foto's te maken in de oorlog.",
        isTrue: false
      },
      {
        statement: "De drones zijn onmisbaar voor het overleven van soldaten.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Verdachte van adoptiefraude na veertig jaar voor de rechter",
    topicNumber: 1,
    article: {
      title: "Verdachte van adoptiefraude na veertig jaar voor de rechter",
      summary: "Er is een Belgische rechtszaak over gestolen kinderen uit Guatemala. Iemand zegt: 'Ik kwam naar België met een valse naam, zonder geboortedatum en met een biologische moeder die misschien niet eens weet dat ik nog leef.'"
    },
    vocabulary: {
      words: [
        {
          word: "fraude",
          definition: "wanneer iemand opzettelijk liegt of bedriegt om iets te krijgen",
          sentence: "Hij gebruikte een valse naam, dat is een vorm van ___.",
          answer: "fraude"
        },
        {
          word: "adoptie",
          definition: "wanneer een kind officieel wordt opgenomen in een ander gezin",
          sentence: "Sommige kinderen komen in een gezin via ___.",
          answer: "adoptie"
        },
        {
          word: "moeder",
          definition: "de vrouwelijke ouder van een kind",
          sentence: "De ___ van het kind woonde in Guatemala.",
          answer: "moeder"
        },
        {
          word: "kinderen",
          definition: "jonge mensen, meestal onder de 18 jaar",
          sentence: "De ___ werden illegaal geadopteerd.",
          answer: "kinderen"
        },
        {
          word: "geboorte",
          definition: "het moment dat een kind wordt geboren",
          sentence: "Zijn ___ vond plaats in 2010.",
          answer: "geboorte"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige kinderen komen in een gezin via ___.",
          answer: "adoptie"
        },
        {
          sentence: "Hij gebruikte een valse naam, dat is een vorm van ___.",
          answer: "fraude"
        },
        {
          sentence: "Zijn ___ vond plaats in 2010.",
          answer: "geboorte"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de rechtszaak over?",
        options: [
          "Een diefstal van auto's",
          "Een fraude met adoptie",
          "Een vakantie in Guatemala",
          "Een feest in de rechtbank"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar woont de biologische moeder van het kind?",
        options: [
          "In Nederland",
          "In België",
          "In Guatemala",
          "In Duitsland"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'valse naam'?",
        options: [
          "Een echte naam",
          "Een lieve naam",
          "Een naam die niet echt is",
          "Een naam die alleen thuis wordt gebruikt"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De zaak speelt zich af in België.",
        isTrue: true
      },
      {
        statement: "De moeder van het kind woont in Nederland.",
        isTrue: false
      },
      {
        statement: "Het kind werd geadopteerd met een valse naam.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Lawaai van trams in Gent",
    topicNumber: 1,
    article: {
      title: "Lawaai van trams in Gent",
      summary: "In Gent maken trams veel lawaai. Bewoners kunnen niet slapen. De rechter wil dat De Lijn, de trammaatschappij, de overlast vermindert."
    },
    vocabulary: {
      words: [
        {
          word: "Lawaai",
          definition: "veel geluid, vaak onaangenaam",
          sentence: "De tram maakt veel ___.",
          answer: "lawaai"
        },
        {
          word: "Bewoners",
          definition: "mensen die in een huis of gebied wonen",
          sentence: "De ___ van de straat klagen over het geluid.",
          answer: "bewoners"
        },
        {
          word: "Trams",
          definition: "een soort trein of voertuig dat op straat rijdt, vaak elektrisch",
          sentence: "De ___ in Gent rijden dag en nacht.",
          answer: "trams"
        },
        {
          word: "Overlast",
          definition: "iets dat vervelend of storend is",
          sentence: "De bewoners hebben last van de ___.",
          answer: "overlast"
        },
        {
          word: "Rechter",
          definition: "een persoon die beslist in een rechtszaak",
          sentence: "De ___ heeft De Lijn bevolen om de overlast te verminderen.",
          answer: "rechter"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ in Gent rijden dag en nacht.",
          answer: "trams"
        },
        {
          sentence: "De tram maakt veel ___.",
          answer: "lawaai"
        },
        {
          sentence: "De ___ van de straat klagen over het geluid.",
          answer: "bewoners"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de bewoners van de Bernard Spaelaan ontevreden?",
        options: [
          "De trams rijden te snel",
          "De trams maken te veel lawaai",
          "De trams rijden niet vaak genoeg",
          "De trams zijn te oud"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat heeft de rechter beslist?",
        options: [
          "De Lijn moet de trams stiller maken",
          "De Lijn moet de trams sneller laten rijden",
          "De Lijn moet de trams uit de stad halen",
          "De Lijn moet meer trams inzetten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het gevolg van de rechter's besluit?",
        options: [
          "De bewoners zijn nu helemaal wakker",
          "De Lijn negeert de rechter",
          "De Lijn moet de overlast verminderen",
          "De trams rijden nu nog harder"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van de Bernard Spaelaan zijn blij met de trams.",
        isTrue: false
      },
      {
        statement: "De rechter heeft De Lijn gevraagd om de overlast te verminderen.",
        isTrue: true
      },
      {
        statement: "De trams in Gent rijden alleen overdag.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Chef Defensie over drones boven legerbasis",
    topicNumber: 1,
    article: {
      title: "Chef Defensie over drones boven legerbasis",
      summary: "Defensie weet nog niet wie de drones bestuurde boven de legerbasis. Maar de bescherming tegen drones wordt beter. Men test de verdediging."
    },
    vocabulary: {
      words: [
        {
          word: "basis",
          definition: "een plaats waar mensen werken of wonen",
          sentence: "De soldaten werken op een militaire ___.",
          answer: "basis"
        },
        {
          word: "leger",
          definition: "een groep mensen die een land verdedigt",
          sentence: "Het ___ bestaat uit soldaten en officieren.",
          answer: "leger"
        },
        {
          word: "drones",
          definition: "kleine vliegtuigen zonder piloot, op afstand bestuurd",
          sentence: "Soms zie je ___ in de lucht, ze maken foto's of video's.",
          answer: "drones"
        },
        {
          word: "bescherming",
          definition: "iets dat je veilig houdt, bijvoorbeeld tegen gevaar",
          sentence: "Een helm biedt ___ voor je hoofd bij een val.",
          answer: "bescherming"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een helm biedt ___ voor je hoofd bij een val.",
          answer: "bescherming"
        },
        {
          sentence: "De soldaten werken op een militaire ___.",
          answer: "basis"
        },
        {
          sentence: "Soms zie je ___ in de lucht, ze maken foto's of video's.",
          answer: "drones"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vlogen de drones boven?",
        options: [
          "Boven een park",
          "Boven een winkelcentrum",
          "Boven een legerbasis",
          "Boven een school"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'verscherpen'?",
        options: [
          "Minder sterk maken",
          "Versterken",
          "Negeren",
          "Verminderen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet Defensie om de drones te stoppen?",
        options: [
          "Niets, ze wachten af",
          "Ze kopen nieuwe drones",
          "Ze testen detectie en kopen bewapening",
          "Ze sluiten de basis"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De drones vlogen boven een winkelcentrum.",
        isTrue: false
      },
      {
        statement: "Defensie weet wie de drones bestuurde.",
        isTrue: false
      },
      {
        statement: "De bescherming tegen drones wordt beter.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "D66 en PVD allebei op 26 zetels, verschil is minder dan 2.000 stemmen",
    topicNumber: 1,
    article: {
      title: "D66 en PVV allebei op 26 zetels, verschil is minder dan 2.000 stemmen",
      summary: "Nederland trekt woensdag opnieuw naar de stembus voor de vervroegde parlementsverkiezingen na de val van het kabinet-Schoof. Volg hier de laatste updates."
    },
    vocabulary: {
      words: [
        {
          word: "trekt",
          definition: "gaat naar, reist naar",
          sentence: "Hij trekt naar het buitenland voor zijn vakantie.",
          answer: "trekt"
        },
        {
          word: "opnieuw",
          definition: "nog een keer, opnieuw",
          sentence: "Hij probeerde het opnieuw, na zijn eerste mislukking.",
          answer: "opnieuw"
        },
        {
          word: "val",
          definition: "een manier om te vallen, of het einde van iets",
          sentence: "De val van de regering leidde tot nieuwe verkiezingen.",
          answer: "val"
        },
        {
          word: "verkiezingen",
          definition: "een stemming waarin mensen stemmen voor hun leiders",
          sentence: "De verkiezingen zijn gepland voor volgende maand.",
          answer: "verkiezingen"
        },
        {
          word: "stemmen",
          definition: "het geven van je stem, kiezen",
          sentence: "Alle burgers mogen stemmen bij de verkiezingen.",
          answer: "stemmen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De val van de regering leidde tot nieuwe verkiezingen.",
          answer: "val"
        },
        {
          sentence: "Alle burgers mogen stemmen bij de verkiezingen.",
          answer: "stemmen"
        },
        {
          sentence: "Hij trekt naar het buitenland voor zijn vakantie.",
          answer: "trekt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn er nieuwe verkiezingen in Nederland?",
        options: [
          "Omdat het voetbalteam verloor",
          "Omdat de koning aftrad",
          "Omdat het kabinet viel",
          "Omdat het een jaarlijkse traditie is"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'trekt' in deze context?",
        options: [
          "trekt aan",
          "gaat naar",
          "blijft thuis",
          "kiest een andere optie"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het verschil tussen D66 en PVV in deze verkiezingen?",
        options: [
          "D66 heeft meer stemmen",
          "PVV heeft meer stemmen",
          "Het verschil is klein",
          "Ze zijn even groot"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Nederland heeft nieuwe verkiezingen omdat de regering is gevallen.",
        isTrue: true
      },
      {
        statement: "D66 en PVV hebben exact hetzelfde aantal zetels.",
        isTrue: false
      },
      {
        statement: "Het verschil in stemmen tussen D66 en PVV is meer dan 2.000.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
    topicNumber: 1,
    article: {
      title: "Trump: VS gaan “onmiddellijk” weer kernwapens testen",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "onmiddellijk",
          definition: "meteen, zonder vertraging",
          sentence: "Na het ongeluk reageerde de hulp ___.",
          answer: "onmiddellijk"
        },
        {
          word: "kernwapens",
          definition: "wapens die gebruikmaken van nucleaire reacties voor hun vernietigende kracht",
          sentence: "Het non-proliferatieverdrag probeert de verspreiding van ___ te stoppen.",
          answer: "kernwapens"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is het hoofdonderwerp van dit artikel?",
        options: [
          "Klimaatverandering",
          "Kernwapenbeheersing",
          "Ruimtevaart",
          "Internationale handel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van Trump ten opzichte van kernwapens volgens de titel?",
        options: [
          "Hij wil ze afschaffen",
          "Hij wil ze verminderen",
          "Hij wil ze onmiddellijk opnieuw testen",
          "Hij negeert het onderwerp"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de verwachte impact van Trumps beleid op internationaal gebied?",
        options: [
          "Alleen positief voor de VS",
          "Alleen negatief voor andere landen",
          "Wereldwijd veranderend, zowel positief als negatief",
          "Geen enkele impact"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Kernwapens zijn wapens die gebruikmaken van nucleaire reacties.",
        isTrue: true
      },
      {
        statement: "Trump's beleid heeft alleen gevolgen voor de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
    topicNumber: 1,
    article: {
      title: "Onze fotograaf aan het front in Oekraïne: Gronddrones, de onmisbare nieuwkomers",
      summary: "De Standaard-fotograaf Gert Jochems geeft een inkijk in het leven van alledag in Oekraïens oorlogsgebied. Hij kon ter plekke volgen hoe de Azov-brigade gronddrones inzet voor de bevoorrading langs de levensgevaarlijke frontlijn."
    },
    vocabulary: {
      words: [
        {
          word: "gronddrones",
          definition: "onbemande vliegtuigjes die over de grond gaan",
          sentence: "De Azov-brigade zet ___ in voor bevoorrading.",
          answer: "gronddrones"
        },
        {
          word: "nieuwkomers",
          definition: "mensen of dingen die er nieuw bij zijn",
          sentence: "De drones zijn de ___ in dit soort oorlog.",
          answer: "nieuwkomers"
        },
        {
          word: "fotograaf",
          definition: "iemand die foto's maakt",
          sentence: "De ___ maakte indrukwekkende beelden in Oekraïne.",
          answer: "fotograaf"
        },
        {
          word: "Oekraïne",
          definition: "land in Europa, nu in oorlog",
          sentence: "Hij reisde af naar ___ om te fotograferen.",
          answer: "Oekraïne"
        },
        {
          word: "onmisbare",
          definition: "niet te missen, heel belangrijk",
          sentence: "Gronddrones zijn ___ in dit conflict.",
          answer: "onmisbare"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ maakte indrukwekkende beelden in Oekraïne.",
          answer: "fotograaf"
        },
        {
          sentence: "Hij reisde af naar ___ om te fotograferen.",
          answer: "Oekraïne"
        },
        {
          sentence: "De Azov-brigade zet ___ in voor bevoorrading.",
          answer: "gronddrones"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat beschrijft deze tekst vooral?",
        options: [
          "Het leven van fotograaf Gert Jochems",
          "De uitvinding van de gronddrone",
          "Hoe gronddrones worden gebruikt in Oekraïne",
          "De geschiedenis van Oekraïne"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom zijn gronddrones 'onmisbaar' volgens de tekst?",
        options: [
          "Ze vervangen soldaten in gevechten",
          "Ze zijn goedkoop en makkelijk te maken",
          "Ze worden gebruikt voor bevoorrading in gevaarlijke gebieden",
          "Ze kunnen ook in de lucht vliegen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van Gert Jochems volgens de tekst?",
        options: [
          "Hij is een Oekraïense soldaat",
          "Hij is een fotograaf voor De Standaard",
          "Hij is de uitvinder van de gronddrone",
          "Hij leidt de Azov-brigade"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gert Jochems is een fotograaf die in Oekraïne werkt.",
        isTrue: true
      },
      {
        statement: "Gronddrones worden alleen maar gebruikt voor spionage.",
        isTrue: false
      },
      {
        statement: "De Azov-brigade maakt gebruik van gronddrones voor bevoorrading.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Verdachte grootschalige adoptiefraude na veertig jaar alsnog voor de rechter",
    topicNumber: 1,
    article: {
      title: "Verdachte grootschalige adoptiefraude na veertig jaar alsnog voor de rechter",
      summary: "Er komt alsnog een Belgisch strafproces in de zaak van de minstens vijftien geroofde ‘weeskinderen’ uit Guatemala. “Ik kwam naar België met een valse naam, zonder geboortedatum en met een biologische moeder die allicht niet eens weet dat ik nog leef.”"
    },
    vocabulary: {
      words: [
        {
          word: "valse",
          definition: "niet echt of niet waar, vervalst",
          sentence: "Hij reisde met een valse paspoort naar België.",
          answer: "valse"
        },
        {
          word: "fraude",
          definition: "opzettelijke misleiding of bedrog om iets illegaals te bereiken",
          sentence: "Hij werd beschuldigd van fraude omdat hij de documenten had vervalst.",
          answer: "fraude"
        },
        {
          word: "weeskinderen",
          definition: "kinderen die beide ouders verloren hebben",
          sentence: "De weeskinderen werden opgevangen door een liefdadigheidsinstelling.",
          answer: "weeskinderen"
        },
        {
          word: "adoptie",
          definition: "zie eerste woord",
          sentence: "Adoptie kan een mooie manier zijn om een gezin te vormen, maar het moet legaal gebeuren.",
          answer: "adoptie"
        },
        {
          word: "geboortedatum",
          definition: "de datum waarop iemand geboren is",
          sentence: "Zonder een geboortedatum is het lastig om iemands leeftijd te bepalen.",
          answer: "geboortedatum"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De weeskinderen werden opgevangen door een liefdadigheidsinstelling.",
          answer: "weeskinderen"
        },
        {
          sentence: "Hij reisde met een valse paspoort naar België.",
          answer: "valse"
        },
        {
          sentence: "Adoptie kan een mooie manier zijn om een gezin te vormen, maar het moet legaal gebeuren.",
          answer: "adoptie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een belangrijk gevolg van deze adoptiefraude voor de slachtoffers?",
        options: [
          "Ze krijgen veel cadeaus",
          "Ze verliezen hun wettelijke identiteit",
          "Ze worden meteen geadopteerd",
          "Ze worden allemaal beroemd"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom duurde het zo lang voordat deze zaak voor de rechter kwam?",
        options: [
          "Omdat niemand het wist",
          "Omdat de documenten pas recent werden gevonden",
          "Omdat de slachtoffers pas later durfden te spreken",
          "Omdat de fraudeurs erg goed waren in verbergen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de rechter in deze kwestie?",
        options: [
          "De rechter organiseert feestjes",
          "De rechter beslist over de straf en gerechtigheid",
          "De rechter is een van de slachtoffers",
          "De rechter kent de waarheid niet"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De adoptiefraude zaken worden nooit opgelost omdat alle documenten verloren zijn.",
        isTrue: false
      },
      {
        statement: "Slachtoffers van adoptiefraude kunnen hun ware identiteit volledig verliezen.",
        isTrue: true
      },
      {
        statement: "De rechter in deze zaak heeft al een vonnis geveld voordat de zaak begon.",
        isTrue: false
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: “Waarom zo veel, zo laat, en zo luid?”",
    topicNumber: 1,
    article: {
      title: "Gentse ‘tramterreur’ houdt buurtbewoners wakker: “Waarom zo veel, zo laat, en zo luid?”",
      summary: "In de Gentse Bernard Spaelaan zijn de bewoners de wanhoop nabij: sinds een paar maanden denderen per dag zo’n 700 trams aan 100 decibel door de straat. De vrederechter vraagt De Lijn de overlast te verminderen."
    },
    vocabulary: {
      words: [
        {
          word: "verminderen",
          definition: "minder maken of doen afnemen",
          sentence: "De trammaatschappij moet de overlast proberen te ___.",
          answer: "verminderen"
        },
        {
          word: "wanhoop",
          definition: "een gevoel van hopeloosheid of geen uitweg meer zien",
          sentence: "De bewoners zijn ten einde raad en voelen diepe ___.",
          answer: "wanhoop"
        },
        {
          word: "bewoners",
          definition: "mensen die in een bepaald gebied wonen",
          sentence: "De ___ van de straat worden wakker gehouden door het lawaai.",
          answer: "bewoners"
        },
        {
          word: "vrederechter",
          definition: "een rechter die zich bezighoudt met geschillen tussen burgers, niet met strafrecht",
          sentence: "De ___ heeft een oplossing gevraagd voor het geluidsoverlast.",
          answer: "vrederechter"
        },
        {
          word: "bewoners",
          definition: "mensen die in een bepaald gebied of huis wonen",
          sentence: "De ___ hebben een klacht ingediend over het lawaai.",
          answer: "bewoners"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van de straat worden wakker gehouden door het lawaai.",
          answer: "bewoners"
        },
        {
          sentence: "De bewoners zijn ten einde raad en voelen diepe ___.",
          answer: "wanhoop"
        },
        {
          sentence: "De trammaatschappij moet de overlast proberen te ___.",
          answer: "verminderen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de bewoners van de Bernard Spaelaan wakker?",
        options: [
          "Door het lawaai van de trams",
          "Door te veel koffie drinken",
          "Omdat ze nachtwerkers zijn",
          "Omdat ze aan het feesten zijn"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat heeft de vrederechter gevraagd aan De Lijn?",
        options: [
          "Om de trams te stoppen",
          "Om de trams stiller te maken",
          "Om de bewoners te verhuizen",
          "Om de klokken te luiden"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoeveel trams rijden er per dag door de straat?",
        options: [
          "Ongeveer 700",
          "Minder dan 100",
          "Meer dan 1000",
          "Geen, het is een voetgangersgebied"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De bewoners van de Bernard Spaelaan kunnen niet slapen door het lawaai van de trams.",
        isTrue: true
      },
      {
        statement: "De vrederechter heeft De Lijn gevraagd om de trams te stoppen.",
        isTrue: false
      },
      {
        statement: "De tramoverlast is een recent probleem, sinds een paar maanden.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Chef Defensie Vansina over drones boven Marche-en-Famenne: 'We gaan versneld dronedetectie en bewapening kopen'",
    topicNumber: 1,
    article: {
      title: "Chef Defensie Vansina over drones boven Marche-en-Famenne: 'We gaan versneld dronedetectie en bewapening kopen'",
      summary: "Wie de drones bestuurde die dinsdagnacht opnieuw boven de legerbasis van Marche-en-Famenne vlogen, weet Defensie nog niet. Maar dat de bescherming tegen disruptieve droneactiviteit verscherpt moet worden, staat vast. 'Men test ons.'"
    },
    vocabulary: {
      words: [
        {
          word: "disruptieve",
          definition: "verstorend, veroorzaakt onderbrekingen",
          sentence: "De ___ activiteit van de drones verstoorde de communicatie.",
          answer: "disruptieve"
        },
        {
          word: "test",
          definition: "testen, uitproberen, op de proef stellen",
          sentence: "De tegenstander ___ onze verdediging constant.",
          answer: "test"
        },
        {
          word: "detectie",
          definition: "het opsporen of ontdekken van iets",
          sentence: "Dankzij de nieuwe ___ -technologie werden de drones gesignaleerd.",
          answer: "detectie"
        },
        {
          word: "bestuurde",
          definition: "besturen, in de verleden tijd",
          sentence: "Wie de drone ___ , heeft een vlucht uitgevoerd.",
          answer: "bestuurde"
        },
        {
          word: "basis",
          definition: "een plaats of locatie die als uitgangspunt dient",
          sentence: "De militaire ___ was gesloten voor het publiek.",
          answer: "basis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De tegenstander ___ onze verdediging constant.",
          answer: "test"
        },
        {
          sentence: "Dankzij de nieuwe ___ -technologie werden de drones gesignaleerd.",
          answer: "detectie"
        },
        {
          sentence: "De ___ activiteit van de drones verstoorde de communicatie.",
          answer: "disruptieve"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofdonderwerp van dit artikel?",
        options: [
          "De toekomst van drone technologie",
          "Versterking van defensie tegen drone-incidenten",
          "Het gebruik van drones in de landbouw",
          "Internationale samenwerking tegen cyberaanvallen"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke maatregel wordt genoemd als directe reactie op de drone-incidenten?",
        options: [
          "Volledige sluiting van de basis",
          "Samenwerking met internationale partners",
          "Versnelde aankoop van detectie- en bewapeningssystemen",
          "Geen, er wordt alleen onderzocht"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de toon van de uitspraak 'Men test ons.'?",
        options: [
          "Positief en optimistisch",
          "Neutraal en informatief",
          "Zorgelijk en serieus",
          "Sarcastisch en licht"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Defensie weet nog niet wie de drones bestuurde tijdens de vlucht boven de basis.",
        isTrue: true
      },
      {
        statement: "De bescherming tegen drones wordt verzwakt na het incident.",
        isTrue: false
      },
      {
        statement: "De basis van Marche-en-Famenne is een civiele luchthaven.",
        isTrue: false
      }
    ]
  }
];
