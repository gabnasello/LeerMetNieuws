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
    title: "Zelensky-vertrouweling in corruptieonderzoek",
    topicNumber: 1,
    article: {
      title: "Zelensky-vertrouweling in corruptieonderzoek",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "corruptie",
          definition: "wanneer mensen misbruik maken van hun macht voor persoonlijk voordeel",
          sentence: "Er is een onderzoek naar mogelijke ___ in de regering.",
          answer: "corruptie"
        },
        {
          word: "ontwikkelingen",
          definition: "nieuwe gebeurtenissen of veranderingen in een situatie",
          sentence: "Volg de laatste ___ in dit verhaal op onze website.",
          answer: "ontwikkelingen"
        },
        {
          word: "vertrouweling",
          definition: "iemand die je vertrouwt en die dicht bij je staat",
          sentence: "Hij is een belangrijke ___ van de president.",
          answer: "vertrouweling"
        },
        {
          word: "Oekraïne",
          definition: "een land in Europa, momenteel in conflict",
          sentence: "De oorlog in ___ duurt al lang.",
          answer: "Oekraïne"
        },
        {
          word: "app",
          definition: "een applicatie op je telefoon of computer, vaak om informatie te krijgen",
          sentence: "Download de ___ om updates te ontvangen.",
          answer: "app"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De oorlog in ___ duurt al lang.",
          answer: "Oekraïne"
        },
        {
          sentence: "Volg de laatste ___ in dit verhaal op onze website.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "Download de ___ om updates te ontvangen.",
          answer: "app"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Een nieuwe film over Oekraïne",
          "Een sportevenement in Oekraïne",
          "Een corruptieonderzoek in Oekraïne",
          "Een vakantiebestemming in Oekraïne"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe kan men updates over de oorlog ontvangen?",
        options: [
          "Door een brief te sturen",
          "Door een bericht via de postduif",
          "Door de DS Nieuws app te downloaden",
          "Door een bezoek aan Oekraïne"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de relatie tussen Zelensky en de vertrouweling?",
        options: [
          "Zij zijn broers",
          "Hij is zijn leraar",
          "De vertrouweling is een naaste medewerker van Zelensky",
          "Zij zijn buren"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het artikel gaat over een corruptieonderzoek in Oekraïne.",
        isTrue: true
      },
      {
        statement: "Zelensky is de president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Je kunt de DS Nieuws app downloaden voor updates.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
    topicNumber: 1,
    article: {
      title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "ontwikkelingen",
          definition: "veranderingen of gebeurtenissen die plaatsvinden",
          sentence: "De laatste ___ in de regio zijn zorgwekkend.",
          answer: "ontwikkelingen"
        },
        {
          word: "aanvallen",
          definition: "acties om iets of iemand aan te vallen",
          sentence: "De ___ waren hevig en gericht.",
          answer: "aanvallen"
        },
        {
          word: "leger",
          definition: "een groep mensen die voor een land vecht",
          sentence: "Het ___ voert aanvallen uit.",
          answer: "leger"
        },
        {
          word: "Midden-Oosten",
          definition: "een regio die onder andere het Midden-Oosten omvat",
          sentence: "Het conflict in het ___ is complex.",
          answer: "Midden-Oosten"
        },
        {
          word: "dodelijk",
          definition: "iets of iemand dat de dood veroorzaakt",
          sentence: "De operatie was ___ en zorgde voor veel slachtoffers.",
          answer: "dodelijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ voert aanvallen uit.",
          answer: "leger"
        },
        {
          sentence: "De operatie was ___ en zorgde voor veel slachtoffers.",
          answer: "dodelijk"
        },
        {
          sentence: "Het conflict in het ___ is complex.",
          answer: "Midden-Oosten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'dodelijk'?",
        options: [
          "levend",
          "dodelijk",
          "vriendelijk",
          "onbekend"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar voert het Israëlische leger aanvallen op uit?",
        options: [
          "Nederland",
          "Duitsland",
          "Libanon",
          "Frankrijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'ontwikkelingen' in deze context?",
        options: [
          "nieuwe uitvindingen",
          "veranderingen in de situatie",
          "een soort fruit",
          "een soort auto"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Israëlische leger voert aanvallen uit op Libanon.",
        isTrue: true
      },
      {
        statement: "Nederland is het land waar de aanvallen plaatsvinden.",
        isTrue: false
      },
      {
        statement: "Het Midden-Oosten is een regio met complexe geopolitieke situaties.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
    topicNumber: 1,
    article: {
      title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijk veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "sancties",
          definition: "Straffen die een land geeft aan een ander land",
          sentence: "De Verenigde Naties kunnen ___ opleggen aan een land.",
          answer: "sancties"
        },
        {
          word: "VS",
          definition: "Verenigde Staten van Amerika",
          sentence: "De ___ zijn een land in Noord-Amerika.",
          answer: "VS"
        },
        {
          word: "heffen",
          definition: "iets officieel maken of stoppen",
          sentence: "De regering besloot de belastingen te ___.",
          answer: "heffen"
        },
        {
          word: "op",
          definition: "niet meer actief of aanwezig",
          sentence: "Het feest is ___ voor de hele buurt.",
          answer: "op"
        },
        {
          word: "Trump",
          definition: "De achternaam van de voormalige president van de VS",
          sentence: "___ was president van 2017 tot 2021.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ zijn een land in Noord-Amerika.",
          answer: "VS"
        },
        {
          sentence: "De regering besloot de belastingen te ___.",
          answer: "heffen"
        },
        {
          sentence: "De Verenigde Naties kunnen ___ opleggen aan een land.",
          answer: "sancties"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar verwijst 'VS' naar in deze context?",
        options: [
          "Verenigde Staten",
          "Verenigde Naties",
          "Europa",
          "Aziz"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'heffen' in deze titel?",
        options: [
          "Optillen",
          "Starten",
          "Beëindigen",
          "Veranderen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van Al-Sharaa in de titel?",
        options: [
          "Een politieke leider",
          "Een plaatselijke bewoner",
          "Een bekende acteur",
          "Een historisch figuur"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De VS heeft de sancties tegen Syrië volledig verwijderd.",
        isTrue: false
      },
      {
        statement: "Donald Trump had een ontmoeting met Al-Sharaa.",
        isTrue: true
      },
      {
        statement: "Al-Sharaa is de president van Syrië.",
        isTrue: false
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
    title: "Politie gebruikt waterkanon bij protest in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Politie gebruikt waterkanon bij protest in Antwerpen",
      summary: "De politie heeft een waterkanon ingezet tijdens een pro-Palestijns protest in Antwerpen. Verschillende betogers zijn opgepakt. De demonstratie was tegen de oorlog in Gaza."
    },
    vocabulary: {
      words: [
        {
          word: "betogers",
          definition: "Mensen die deelnemen aan een protest of demonstratie",
          sentence: "Verschillende ___ werden gearresteerd.",
          answer: "betogers"
        },
        {
          word: "politie",
          definition: "Zie 'Politie' hierboven; herhaald voor consistentie",
          sentence: "De ___ hield toezicht op de menigte.",
          answer: "politie"
        },
        {
          word: "Gaza",
          definition: "Een gebied in het Midden-Oosten, vaak in conflict",
          sentence: "De situatie in ___ is zeer ernstig.",
          answer: "Gaza"
        },
        {
          word: "Politie",
          definition: "De mensen die de wet handhaven",
          sentence: "De ___ kwam tussenbeide tijdens het protest.",
          answer: "Politie"
        },
        {
          word: "waterkanon",
          definition: "Een apparaat dat water spuit, vaak gebruikt door politie",
          sentence: "De politie gebruikte een ___ om de menigte uiteen te drijven.",
          answer: "waterkanon"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ hield toezicht op de menigte.",
          answer: "politie"
        },
        {
          sentence: "Verschillende ___ werden gearresteerd.",
          answer: "betogers"
        },
        {
          sentence: "De situatie in ___ is zeer ernstig.",
          answer: "Gaza"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het protest plaats?",
        options: [
          "Antwerpen",
          "Brussel",
          "Amsterdam",
          "Parijs"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat gebruikte de politie om de menigte uiteen te drijven?",
        options: [
          "Waterkanon",
          "Traangas",
          "Knuppels",
          "Een hek"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar was het protest tegen?",
        options: [
          "De oorlog in Gaza",
          "Belgisch beleid",
          "Klimaatverandering",
          "Hogere belastingen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De politie gebruikte een waterkanon tijdens het protest.",
        isTrue: true
      },
      {
        statement: "Het protest was tegen de Belgische regering.",
        isTrue: false
      },
      {
        statement: "Er werden geen betogers gearresteerd.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Ook in “de gevangenis van de toekomst” in Haren, die zou inzetten op individuele detentie, komen er nu stapelbedden",
    topicNumber: 1,
    article: {
      title: "Ook in “de gevangenis van de toekomst” in Haren, die zou inzetten op individuele detentie, komen er nu stapelbedden",
      summary: "De cipiersvakbonden hebben een stakingsaanzegging ingediend omdat nu ook in de gevangenis van Haren stapelbedden worden geplaatst. Nochtans is de gevangenis ontworpen rond het idee van “individuele detentie”."
    },
    vocabulary: {
      words: [
        {
          word: "stapelbedden",
          definition: "meerdere bedden op elkaar gestapeld om ruimte te besparen",
          sentence: "In kleine kamers worden soms ___ gebruikt om meer mensen te laten slapen.",
          answer: "stapelbedden"
        },
        {
          word: "stakingsaanzegging",
          definition: "een formele aankondiging dat er gestaakt zal worden",
          sentence: "De vakbond heeft een ___ gedaan om hun eisen kracht bij te zetten.",
          answer: "stakingsaanzegging"
        },
        {
          word: "gevangenis",
          definition: "een plaats waar mensen worden vastgehouden als straf",
          sentence: "De ___ is een plek waar mensen niet vrijuit mogen gaan.",
          answer: "gevangenis"
        },
        {
          word: "ontworpen",
          definition: "gepland of gemaakt met een bepaald doel",
          sentence: "Het park was ___ om natuurlijk en rustgevend te zijn.",
          answer: "ontworpen"
        },
        {
          word: "individuele",
          definition: "alleen, voor één persoon",
          sentence: "Sommige mensen geven de voorkeur aan ___ activiteiten in plaats van teamsporten.",
          answer: "individuele"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige mensen geven de voorkeur aan ___ activiteiten in plaats van teamsporten.",
          answer: "individuele"
        },
        {
          sentence: "Het park was ___ om natuurlijk en rustgevend te zijn.",
          answer: "ontworpen"
        },
        {
          sentence: "De ___ is een plek waar mensen niet vrijuit mogen gaan.",
          answer: "gevangenis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst hoofdzakelijk over?",
        options: [
          "Over gevangenen die willen protesteren",
          "Over personeel van een gevangenis die gaat staken",
          "Over de opening van een nieuwe gevangenis",
          "Over een vakantiepark in Haren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de situatie in de gevangenis van Haren momenteel?",
        options: [
          "Er zijn te weinig cellen",
          "Er is een tekort aan bewakers",
          "Er worden stapelbedden geplaatst",
          "De gevangenis wordt gesloten"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het hoofddoel van de tekst?",
        options: [
          "Mensen waarschuwen over de gevangenis",
          "Uitleggen waarom men stakt",
          "Promoten van individuele detentie",
          "Laten zien hoe goed de gevangenis is"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De gevangenis in Haren is ontworpen voor individuele detentie.",
        isTrue: true
      },
      {
        statement: "De staking is veroorzaakt omdat er te veel gevangenen zijn.",
        isTrue: true
      },
      {
        statement: "Stapelbedden worden gebruikt om meer ruimte te creëren.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Oorlog in Oekraïne",
    topicNumber: 1,
    article: {
      title: "Oorlog in Oekraïne",
      summary: "Volg het nieuws over de oorlog in Oekraïne. Download de app DS Nieuws voor updates."
    },
    vocabulary: {
      words: [
        {
          word: "download",
          definition: "Iets van internet halen.",
          sentence: "___ de app om nieuws te lezen.",
          answer: "Download"
        },
        {
          word: "nieuws",
          definition: "Informatie over wat er gebeurt in de wereld.",
          sentence: "Ik lees het ___ online.",
          answer: "nieuws"
        },
        {
          word: "update",
          definition: "Nieuwe informatie.",
          sentence: "Krijg een ___ over het nieuws.",
          answer: "update"
        },
        {
          word: "oorlog",
          definition: "Een situatie waarin landen vechten.",
          sentence: "Er is een ___ in Oekraïne.",
          answer: "oorlog"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Europa.",
          sentence: "Er is oorlog in ___.",
          answer: "Oekraïne"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er is oorlog in ___.",
          answer: "Oekraïne"
        },
        {
          sentence: "Er is een ___ in Oekraïne.",
          answer: "oorlog"
        },
        {
          sentence: "Ik lees het ___ online.",
          answer: "nieuws"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is er oorlog?",
        options: [
          "Oekraïne",
          "Nederland",
          "Duitsland",
          "Frankrijk"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat kun je downloaden?",
        options: [
          "Een app",
          "Een boek",
          "Een fiets",
          "Een huis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een update?",
        options: [
          "Oud nieuws",
          "Oude informatie",
          "Geen nieuws",
          "Nieuwe informatie"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Er is oorlog in Oekraïne.",
        isTrue: true
      },
      {
        statement: "Je kunt een auto downloaden.",
        isTrue: false
      },
      {
        statement: "Een app geeft je nieuws.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Israël en Libanon",
    topicNumber: 1,
    article: {
      title: "Israël en Libanon",
      summary: "Er gebeuren dingen tussen Israël en Libanon."
    },
    vocabulary: {
      words: [
        {
          word: "Israël",
          definition: "een land",
          sentence: "___ ligt in het Midden-Oosten.",
          answer: "Israël"
        },
        {
          word: "Libanon",
          definition: "een ander land",
          sentence: "___ is een buurland van Israël.",
          answer: "Libanon"
        },
        {
          word: "gebeuren",
          definition: "iets wat plaatsvindt",
          sentence: "Wat ___ er in het nieuws?",
          answer: "gebeuren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Wat ___ er in het nieuws?",
          answer: "gebeuren"
        },
        {
          sentence: "___ is een buurland van Israël.",
          answer: "Libanon"
        },
        {
          sentence: "___ ligt in het Midden-Oosten.",
          answer: "Israël"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ligt Israël?",
        options: [
          "In Azië",
          "In Europa",
          "In Afrika",
          "In het Midden-Oosten"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een aanval?",
        options: [
          "Een soort dier",
          "Een soort plant",
          "Een soort weer",
          "Een soort geweld"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is het Midden-Oosten?",
        options: [
          "Een continent",
          "Een stad",
          "Een gebied",
          "Een rivier"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Israël ligt in het Midden-Oosten.",
        isTrue: true
      },
      {
        statement: "Libanon is een stad.",
        isTrue: false
      },
      {
        statement: "Een aanval kan dodelijk zijn.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
    topicNumber: 1,
    article: {
      title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "tijdens",
          definition: "in de tijd van, gedurende",
          sentence: "We ontmoeten elkaar ___ de vergadering.",
          answer: "tijdens"
        },
        {
          word: "sancties",
          definition: "straffen of beperkingen die een land oplegt",
          sentence: "De regering kondigt nieuwe ___ aan.",
          answer: "sancties"
        },
        {
          word: "VS",
          definition: "een land, Verenigde Staten",
          sentence: "De ___ en andere landen werken samen.",
          answer: "VS"
        },
        {
          word: "heffen",
          definition: "iets niet meer gebruiken, stoppen met iets",
          sentence: "De regering besluit om de sancties te ___.",
          answer: "heffen"
        },
        {
          word: "op",
          definition: "beginnen, starten",
          sentence: "De vergadering gaat zo ___.",
          answer: "op"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ en andere landen werken samen.",
          answer: "VS"
        },
        {
          sentence: "De regering kondigt nieuwe ___ aan.",
          answer: "sancties"
        },
        {
          sentence: "De vergadering gaat zo ___.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'heffen' in deze context?",
        options: [
          "ophouden met",
          "beginnen met",
          "steunen",
          "vergeten"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar is Syrië gelegen?",
        options: [
          "Europa",
          "Azië",
          "Afrika",
          "Zuid-Amerika"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'ontmoeting'?",
        options: [
          "een soort sport",
          "een feest",
          "een belangrijke bijeenkomst",
          "een soort voedsel"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "VS is een land in Europa.",
        isTrue: false
      },
      {
        statement: "Sancties zijn straffen die een land oplegt.",
        isTrue: true
      },
      {
        statement: "Syrië ligt in Zuid-Amerika.",
        isTrue: false
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
    title: "Politie gebruikt waterkanon bij protest in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Politie gebruikt waterkanon bij protest in Antwerpen",
      summary: "De politie gebruikte een waterkanon tijdens een protest in Antwerpen. Mensen demonstreerden voor Palestina. De politie heeft enkele demonstranten opgepakt."
    },
    vocabulary: {
      words: [
        {
          word: "Antwerpen",
          definition: "Een stad in België",
          sentence: "Het protest was in ___.",
          answer: "Antwerpen"
        },
        {
          word: "gebruikte",
          definition: "Heeft gebruikt, het verleden van gebruiken",
          sentence: "De politie ___ een waterkanon.",
          answer: "gebruikte"
        },
        {
          word: "protest",
          definition: "Een actie om onvrede te uiten",
          sentence: "Het ___ was vreedzaam.",
          answer: "protest"
        },
        {
          word: "waterkanon",
          definition: "Een apparaat dat water spuit",
          sentence: "Een ___ spuit water om mensen te verjagen.",
          answer: "waterkanon"
        },
        {
          word: "demonstreerden",
          definition: "Zij lieten hun mening zien in het openbaar",
          sentence: "De groep ___ voor hun rechten.",
          answer: "demonstreerden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ was vreedzaam.",
          answer: "protest"
        },
        {
          sentence: "Een ___ spuit water om mensen te verjagen.",
          answer: "waterkanon"
        },
        {
          sentence: "Het protest was in ___.",
          answer: "Antwerpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar was het protest?",
        options: [
          "Amsterdam",
          "Antwerpen",
          "Brussel",
          "Parijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebruikte de politie?",
        options: [
          "Een auto",
          "Een waterkanon",
          "Een vlag",
          "Een camera"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat deden sommige demonstranten?",
        options: [
          "Ze gingen naar huis",
          "Ze werden opgepakt",
          "Ze gingen dansen",
          "Ze gingen sporten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het protest was in Antwerpen.",
        isTrue: true
      },
      {
        statement: "De politie gebruikte een waterkanon.",
        isTrue: true
      },
      {
        statement: "Alle demonstraten werden opgepakt.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Ook in Haren zijn stapelbedden",
    topicNumber: 1,
    article: {
      title: "Ook in Haren zijn stapelbedden",
      summary: "In de gevangenis in Haren komen stapelbedden. De cipiers gaan staken. In Haren is de gevangenis anders. Mensen slapen daar apart."
    },
    vocabulary: {
      words: [
        {
          word: "Haren",
          definition: "een plaatsnaam, hier: de stad Haren",
          sentence: "In ___ is een gevangenis.",
          answer: "Haren"
        },
        {
          word: "gevangenis",
          definition: "een plek waar mensen die de wet hebben gebroken, naartoe gaan",
          sentence: "De ___ is een gebouw.",
          answer: "gevangenis"
        },
        {
          word: "Haren",
          definition: "een plaatsnaam, hier: de stad Haren",
          sentence: "In ___ is een gevangenis.",
          answer: "Haren"
        },
        {
          word: "stapelbedden",
          definition: "meerdere bedden op elkaar",
          sentence: "In de gevangenis staan ___.",
          answer: "stapelbedden"
        },
        {
          word: "gevangenis",
          definition: "een plek waar mensen die de wet hebben gebroken, naartoe gaan",
          sentence: "De ___ is een gebouw.",
          answer: "gevangenis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ is een gebouw.",
          answer: "gevangenis"
        },
        {
          sentence: "De ___ is een gebouw.",
          answer: "gevangenis"
        },
        {
          sentence: "In ___ is een gevangenis.",
          answer: "Haren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom gaan de cipiers staken?",
        options: [
          "Omdat er stapelbedden zijn",
          "Omdat het te warm is",
          "Omdat ze meer geld willen",
          "Omdat ze willen feesten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is er in Haren?",
        options: [
          "Een gevangenis",
          "Een school",
          "Een park",
          "Een restaurant"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een stapelbed?",
        options: [
          "Meerdere bedden op elkaar",
          "Een groot bed",
          "Een bed voor kinderen",
          "Een bed voor dieren"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "In Haren is er een gevangenis.",
        isTrue: true
      },
      {
        statement: "Cipiers werken in een school.",
        isTrue: false
      },
      {
        statement: "Stapelbedden zijn bedden die op elkaar staan.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Oekraïne",
    topicNumber: 1,
    article: {
      title: "Vertrouweling Zelensky verwikkeld in corruptieonderzoek",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "ontwikkelingen",
          definition: "Veranderingen of nieuwe gebeurtenissen in een situatie of proces.",
          sentence: "De recente ___ in de oorlog tonen een escalatie aan het front.",
          answer: "ontwikkelingen"
        },
        {
          word: "melding",
          definition: "Een bericht of signaal dat iemand informeert over iets belangrijks.",
          sentence: "Krijg een ___ wanneer er belangrijk nieuws is.",
          answer: "melding"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa, momenteel betrokken bij een conflict.",
          sentence: "___ heeft internationale steun gekregen voor zijn verdediging.",
          answer: "Oekraïne"
        },
        {
          word: "app",
          definition: "Een applicatie op een smartphone of computer, vaak voor informatie of entertainment.",
          sentence: "Download de ___ om op de hoogte te blijven van het laatste nieuws.",
          answer: "app"
        },
        {
          word: "Vertrouweling",
          definition: "Een persoon die in vertrouwen wordt genomen of die zeer vertrouwd is met iemand.",
          sentence: "De president beschouwt hem als een ___ die altijd discreet handelt.",
          answer: "Vertrouweling"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ heeft internationale steun gekregen voor zijn verdediging.",
          answer: "Oekraïne"
        },
        {
          sentence: "De recente ___ in de oorlog tonen een escalatie aan het front.",
          answer: "ontwikkelingen"
        },
        {
          sentence: "De president beschouwt hem als een ___ die altijd discreet handelt.",
          answer: "Vertrouweling"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat het corruptieonderzoek waar Zelensky's vertrouweling bij betrokken is?",
        options: [
          "Het gaat over mogelijke fraude in de verkiezingen",
          "Het betreft vermeende omkoping van hoge overheidsfunctionarissen",
          "Het is een onderzoek naar witwaspraktijken via een stichting",
          "Het richt zich op fraude bij defensiecontracten"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageert de Oekraïense regering op de beschuldigingen?",
        options: [
          "Ze ontkennen alles volledig",
          "Er wordt een onafhankelijke commissie opgericht",
          "Ze eisen bewijzen van de aanklagers",
          "Ze stellen een onderzoek in en benadrukken transparantie"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is een gevolg van de ontwikkelingen in de oorlog voor Oekraïne?",
        options: [
          "De economie groeit exponentieel",
          "Internationale steun neemt toe, ook al zijn er uitdagingen",
          "Alle steden zijn volledig verwoest",
          "De regering trekt zich volledig terug"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zelensky's vertrouweling werd direct gearresteerd na de onthullingen.",
        isTrue: false
      },
      {
        statement: "Het corruptieonderzoek leidde tot een tijdelijke bevriezing van sommige buitenlandse fondsen.",
        isTrue: true
      },
      {
        statement: "De Oekraïense regering ontkent alle aantijgingen en weigert samen te werken met internationale organisaties.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
    topicNumber: 1,
    article: {
      title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "Midden-Oosten",
          definition: "Een regio die onder andere Israël, Libanon en Syrië omvat.",
          sentence: "De crisis in het ___ trekt wereldwijd aandacht.",
          answer: "Midden-Oosten"
        },
        {
          word: "Israëlisch",
          definition: "Betrekking hebbend op Israël, het land in het Midden-Oosten.",
          sentence: "Het ___ leger voerde aanvallen uit op Libanon.",
          answer: "Israëlisch"
        },
        {
          word: "dodelijk",
          definition: "Met als gevolg dat er iemand overlijdt, dodelijk.",
          sentence: "De aanvallen hadden een ___ effect.",
          answer: "dodelijk"
        },
        {
          word: "aanvallen",
          definition: "Offensieve acties, vaak militair, gericht tegen een doel.",
          sentence: "De ___ waren gericht op doelen in Libanon.",
          answer: "aanvallen"
        },
        {
          word: "leger",
          definition: "Een georganiseerde groep gewapende personen die een land verdedigt of aanvallen uitvoert.",
          sentence: "Het Israëlische ___ voerde de aanvallen uit.",
          answer: "leger"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het Israëlische ___ voerde de aanvallen uit.",
          answer: "leger"
        },
        {
          sentence: "De crisis in het ___ trekt wereldwijd aandacht.",
          answer: "Midden-Oosten"
        },
        {
          sentence: "Het ___ leger voerde aanvallen uit op Libanon.",
          answer: "Israëlisch"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Libanon?",
        options: [
          "Jeruzalem",
          "Beiroet",
          "Amman",
          "Damascus"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk land voerde de aanvallen uit?",
        options: [
          "Libanon",
          "Israël",
          "Syrië",
          "Iran"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'dodelijk' in deze context?",
        options: [
          "Leidend tot doden",
          "Onbedoeld",
          "Onschadelijk",
          "Onbeduidend"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Israël voerde de aanvallen uit op Libanon.",
        isTrue: true
      },
      {
        statement: "De aanvallen hadden geen dodelijke gevolgen.",
        isTrue: false
      },
      {
        statement: "De situatie in het Midden-Oosten wordt nauwlettend gevolgd.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Shariyad",
    topicNumber: 1,
    article: {
      title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Shariyad",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "sancties",
          definition: "maatregelen die een land neemt tegen een ander land, vaak om politieke redenen",
          sentence: "De Verenigde Staten hebben nieuwe ___ tegen Rusland aangekondigd.",
          answer: "sancties"
        },
        {
          word: "Syrië",
          definition: "een land in het Midden-Oosten, officieel de Syrische Arabische Republiek",
          sentence: "___ is een land dat al jaren te maken heeft met conflicten.",
          answer: "Syrië"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige president van de Verenigde Staten",
          sentence: "___ was de 45e president van de Verenigde Staten.",
          answer: "Trump"
        },
        {
          word: "updates",
          definition: "bijgewerkte informatie of nieuwsberichten",
          sentence: "Volg de ___ op onze website voor het laatste nieuws.",
          answer: "updates"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Volg de ___ op onze website voor het laatste nieuws.",
          answer: "updates"
        },
        {
          sentence: "De Verenigde Staten hebben nieuwe ___ tegen Rusland aangekondigd.",
          answer: "sancties"
        },
        {
          sentence: "___ is een land dat al jaren te maken heeft met conflicten.",
          answer: "Syrië"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom heft de VS sancties tegen Syrië op?",
        options: [
          "Om economische steun te bieden",
          "Als onderdeel van een vredesakkoord",
          "Vanwege een natuurlijke ramp in Syrië",
          "Omdat de sancties niet langer nodig zijn"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een mogelijk gevolg van het opheffen van sancties?",
        options: [
          "Toenemende internationale spanningen",
          "Verbeterde economische samenwerking",
          "Verdere isolatie van het land",
          "Geen enkel effect, het is symbolisch"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageerde de internationale gemeenschap op deze stap?",
        options: [
          "Met scepsis, het is te vroeg voor optimisme",
          "Met volledige steun, iedereen is het erover eens",
          "Met verwarring, het is onduidelijk waarom het gebeurt",
          "Met onverschilligheid, het maakt weinig uit"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De sancties tegen Syrië werden opgeheven als onderdeel van een breder vredesakkoord.",
        isTrue: true
      },
      {
        statement: "Deze actie betekent dat Syrië nu volledig zelfvoorzienend is zonder internationale hulp.",
        isTrue: false
      },
      {
        statement: "President Trump noemde de opheffing een 'humanitaire stap'.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Net hierdoor voel ik mij als brave burger radicaliseren: pro-Palestijns protest in Antwerpen opnieuw weggespoeld met waterkanon",
    topicNumber: 1,
    article: {
      title: "Net hierdoor voel ik mij als brave burger radicaliseren: pro-Palestijns protest in Antwerpen opnieuw weggespoeld met waterkanon",
      summary: "Voor de tweede week op rij is pro-Palestijns protest in Antwerpen uitgedraaid op een confrontatie tussen betogers en de oproerpolitie. Zeven manifestanten werden bestuurlijk aangehouden. “Tot voor kort verliep alles nochtans heel gemoedelijk.”"
    },
    vocabulary: {
      words: [
        {
          word: "oproerpolitie",
          definition: "Politie-eenheid die gespecialiseerd is in het beheersen van onrust en rellen",
          sentence: "De ___ trad hardhandig op tegen de demonstranten.",
          answer: "oproerpolitie"
        },
        {
          word: "confrontatie",
          definition: "Een conflict of botsing tussen twee of meer partijen",
          sentence: "De ___ tussen de twee groepen leidde tot geweld.",
          answer: "confrontatie"
        },
        {
          word: "gemoedelijk",
          definition: "Vriendelijk en zonder spanning of conflict",
          sentence: "De sfeer was erg ___ ondanks de meningsverschillen.",
          answer: "gemoedelijk"
        },
        {
          word: "aangehouden",
          definition: "Gearresteerd of vastgehouden door de politie",
          sentence: "Hij werd ___ voor verdere ondervraging.",
          answer: "aangehouden"
        },
        {
          word: "betogers",
          definition: "Mensen die deelnemen aan een protestactie of betoging",
          sentence: "De ___ hielden spandoeken vast tijdens de mars.",
          answer: "betogers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ tussen de twee groepen leidde tot geweld.",
          answer: "confrontatie"
        },
        {
          sentence: "Hij werd ___ voor verdere ondervraging.",
          answer: "aangehouden"
        },
        {
          sentence: "De sfeer was erg ___ ondanks de meningsverschillen.",
          answer: "gemoedelijk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden voor de confrontatie tussen de betogers en de politie in Antwerpen?",
        options: [
          "Een meningsverschil over sport",
          "Een ruzie over een persoonlijke kwestie",
          "De aanwezigheid van de oproerpolitie bij de protesten",
          "Een misverstand over de locatie"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe werden de manifestanten behandeld door de autoriteiten?",
        options: [
          "Ze werden allemaal direct vrijgelaten zonder voorwaarden.",
          "Ze werden overgebracht naar een feestelijke bijeenkomst.",
          "Ze werden bestuurlijk aangehouden voor verder onderzoek.",
          "Ze werden beloond voor hun moed."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat was de algemene sfeer tijdens de meeste protesten volgens de samenvatting?",
        options: [
          "Heel gewelddadig en angstaanjagend",
          "Zeer formeel en afstandelijk",
          "Heel gemoedelijk en vreedzaam",
          "Extreem competitief en individualistisch"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De protesten in Antwerpen verliepen volledig zonder enige confrontatie met de autoriteiten.",
        isTrue: false
      },
      {
        statement: "De oproerpolitie had alleen de taak om toeschouwers te beschermen tijdens de protesten.",
        isTrue: false
      },
      {
        statement: "Voor het recente incident verliepen de protesten over het algemeen in een gemoedelijke sfeer.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Politie zet opnieuw waterkanon in bij pro-Palestijns protest in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Politie zet opnieuw waterkanon in bij pro-Palestijns protest in Antwerpen",
      summary: "De Antwerpse Coalitie voor Palestina betoogt maandagavond in de Antwerpse binnenstad opnieuw tegen de genocide in Gaza. De politie heeft de demonstranten richting het Steenplein verdreven, verschillende betogers zijn opgepakt."
    },
    vocabulary: {
      words: [
        {
          word: "Politie",
          definition: "De organisatie die belast is met het handhaven van de openbare orde en veiligheid.",
          sentence: "De ___ trad hardhandig op tijdens de demonstratie.",
          answer: "Politie"
        },
        {
          word: "waterkanon",
          definition: "Een apparaat dat water onder hoge druk spuit, vaak gebruikt voor crowd control.",
          sentence: "Om de menigte uiteen te drijven, zette de politie het ___ in.",
          answer: "waterkanon"
        },
        {
          word: "Antwerpen",
          definition: "Een grote stad in België, bekend om zijn haven en historische centrum.",
          sentence: "De protesten vonden plaats in de stad ___.",
          answer: "Antwerpen"
        },
        {
          word: "betogers",
          definition: "Mensen die deelnemen aan een protest of demonstratie.",
          sentence: "De ___ hielden spandoeken vast tijdens de mars.",
          answer: "betogers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ hielden spandoeken vast tijdens de mars.",
          answer: "betogers"
        },
        {
          sentence: "De protesten vonden plaats in de stad ___.",
          answer: "Antwerpen"
        },
        {
          sentence: "Om de menigte uiteen te drijven, zette de politie het ___ in.",
          answer: "waterkanon"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de protestactie plaats?",
        options: [
          "Brussel",
          "Antwerpen",
          "Gent",
          "Luik"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de reactie van de politie op de demonstratie?",
        options: [
          "Ze gebruikten traangas",
          "Ze zetten een waterkanon in",
          "Ze arresteerden niemand",
          "Ze keken alleen maar toe"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was het hoofddoel van de betogers?",
        options: [
          "Tegen de regering protesteren",
          "Steun betuigen aan de Palestijnse bevolking",
          "De stad Antwerpen bezetten",
          "Geen specifiek doel"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De politie heeft tijdens de protesten waterkanonnen ingezet.",
        isTrue: true
      },
      {
        statement: "De protesten vonden plaats in de stad Brussel.",
        isTrue: false
      },
      {
        statement: "Er werden geen betogers gearresteerd tijdens de demonstratie.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Ook in “de gevangenis van de toekomst” in Haren, die zou inzetten op individuele detentie, komen er nu stapelbedden",
    topicNumber: 1,
    article: {
      title: "Ook in “de gevangenis van de toekomst” in Haren, die zou inzetten op individuele detentie, komen er nu stapelbedden",
      summary: "De cipiersvakbonden hebben een stakingsaanzegging ingediend omdat nu ook in de gevangenis van Haren stapelbedden worden geplaatst. Nochtans is de gevangenis ontworpen rond het idee van “individuele detentie”."
    },
    vocabulary: {
      words: [
        {
          word: "ontworpen",
          definition: "Gemaakt, gepland of bedacht volgens een plan.",
          sentence: "Het systeem was zo ___ voor maximale efficiëntie.",
          answer: "ontworpen"
        },
        {
          word: "stakingsaanzegging",
          definition: "Een officiële mededeling dat er een staking plaatsvindt.",
          sentence: "De werknemers overhandigden de ___ aan het management.",
          answer: "stakingsaanzegging"
        },
        {
          word: "Haren",
          definition: "De naam van een plaats, in deze context een gevangenis.",
          sentence: "In ___ is de situatie voor gevangenen erg slecht.",
          answer: "Haren"
        },
        {
          word: "detentie",
          definition: "De periode waarin iemand vastgehouden wordt, bijvoorbeeld in een gevangenis.",
          sentence: "Hij zat in ___ voor drie jaar wegens diefstal.",
          answer: "detentie"
        },
        {
          word: "individuele",
          definition: "Alleenstaand, voor één persoon bedoeld.",
          sentence: "Elke gevangene heeft recht op ___ bezoekuren.",
          answer: "individuele"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij zat in ___ voor drie jaar wegens diefstal.",
          answer: "detentie"
        },
        {
          sentence: "Elke gevangene heeft recht op ___ bezoekuren.",
          answer: "individuele"
        },
        {
          sentence: "De werknemers overhandigden de ___ aan het management.",
          answer: "stakingsaanzegging"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden voor de stakingsaanzegging door de cipiersvakbonden?",
        options: [
          "De komst van stapelbedden in de gevangenis van Haren",
          "Een loonsverlaging van 10% voor alle bewakers",
          "Het sluiten van de gevangenis van Haren zelf",
          "De wens voor betere koffiemachines op de werkvloer"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe is de gevangenis van Haren oorspronkelijk ontworpen?",
        options: [
          "Rond het idee van individuele detentie",
          "Voor collectieve detentie met stapelbedden",
          "Zonder enige vorm van detentie",
          "Als een open kamp zonder bewakers"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de toestand van de gevangenis in Haren momenteel?",
        options: [
          "Het gebruikt stapelbedden om meer gevangenen te herbergen",
          "Het is onlangs volledig gerenoveerd met nieuwe technologie",
          "De gevangenis is gesloten en leeg sinds 2020",
          "Alleen bewaard als museumstuk sinds 1990"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De gevangenis van Haren is recentelijk begonnen met het plaatsen van stapelbedden.",
        isTrue: true
      },
      {
        statement: "De cipiersvakbonden hebben een stakingsaanzegging ingediend om de gevangenis van Haren geheel te sluiten.",
        isTrue: false
      },
      {
        statement: "De gevangenis van Haren is oorspronkelijk ontworpen voor collectieve detentie met stapelbedden.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Zelensky en Oekraïne in het nieuws",
    topicNumber: 1,
    article: {
      title: "Zelensky en Oekraïne in het nieuws",
      summary: "Lees het laatste nieuws over de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "belangrijk",
          definition: "iets dat heel veel waarde heeft",
          sentence: "Het is ___ om op de hoogte te blijven van het nieuws.",
          answer: "belangrijk"
        },
        {
          word: "oorlog",
          definition: "een situatie waarin landen of groepen vechten",
          sentence: "Er is een ___ in Oekraïne, en dat is heel erg.",
          answer: "oorlog"
        },
        {
          word: "app",
          definition: "een programma op je telefoon of computer",
          sentence: "Ik download een nieuwe ___ om nieuws te lezen.",
          answer: "app"
        },
        {
          word: "nieuws",
          definition: "informatie over wat er in de wereld gebeurt",
          sentence: "Ik lees het ___ elke ochtend om op de hoogte te blijven.",
          answer: "nieuws"
        },
        {
          word: "melding",
          definition: "een bericht dat je iets laat weten",
          sentence: "Ik krijg een ___ als er belangrijk nieuws is.",
          answer: "melding"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik download een nieuwe ___ om nieuws te lezen.",
          answer: "app"
        },
        {
          sentence: "Ik krijg een ___ als er belangrijk nieuws is.",
          answer: "melding"
        },
        {
          sentence: "Er is een ___ in Oekraïne, en dat is heel erg.",
          answer: "oorlog"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Koken",
          "Sport",
          "Oorlog in Oekraïne",
          "Kunst"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat kun je doen met de app DS Nieuws?",
        options: [
          "Muziek luisteren",
          "Foto's maken",
          "Nieuws lezen en meldingen krijgen",
          "Videogames spelen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdstad van Oekraïne?",
        options: [
          "Kiev",
          "Parijs",
          "Berlijn",
          "Rome"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne is een stad.",
        isTrue: false
      },
      {
        statement: "Je kunt de app DS Nieuws downloaden om nieuws te lezen.",
        isTrue: true
      },
      {
        statement: "De hoofdstad van Oekraïne is Parijs.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
    topicNumber: 1,
    article: {
      title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "dodelijk",
          definition: "dood veroorzakend",
          sentence: "Het ongeluk was ___ voor twee mensen.",
          answer: "dodelijk"
        },
        {
          word: "Libanon",
          definition: "een land in het Midden-Oosten",
          sentence: "___ is een land naast Israël.",
          answer: "Libanon"
        },
        {
          word: "leger",
          definition: "een groep mensen die voor een land vechten",
          sentence: "Het ___ van het land verdedigt de grenzen.",
          answer: "leger"
        },
        {
          word: "ontwikkelingen",
          definition: "nieuwe dingen die gebeuren",
          sentence: "De laatste ___ in de technologie zijn snel.",
          answer: "ontwikkelingen"
        },
        {
          word: "Midden-Oosten",
          definition: "een gebied op de wereld met veel landen",
          sentence: "Het ___ heeft een droog klimaat.",
          answer: "Midden-Oosten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ van het land verdedigt de grenzen.",
          answer: "leger"
        },
        {
          sentence: "___ is een land naast Israël.",
          answer: "Libanon"
        },
        {
          sentence: "Het ongeluk was ___ voor twee mensen.",
          answer: "dodelijk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'dodelijk'?",
        options: [
          "leuk",
          "gevaarlijk",
          "snel",
          "makkelijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'Libanon'?",
        options: [
          "een stad",
          "een rivier",
          "een land",
          "een berg"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'ontwikkelingen'?",
        options: [
          "oude dingen",
          "nieuwe dingen die gebeuren",
          "moeilijke problemen",
          "leuke activiteiten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Israël en Libanon zijn twee verschillende landen.",
        isTrue: true
      },
      {
        statement: "Het Midden-Oosten heeft een nat klimaat.",
        isTrue: false
      },
      {
        statement: "Ontwikkelingen kunnen snel of langzaam zijn.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
    topicNumber: 1,
    article: {
      title: "VS heffen sancties tegen Syrië op tijdens ontmoeting Trump en Al-Sharaa",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "heffen",
          definition: "iets officieel maken of stoppen",
          sentence: "De regering wil de belastingen ___ voor kleine bedrijven.",
          answer: "heffen"
        },
        {
          word: "VS",
          definition: "Verenigde Staten, een land",
          sentence: "De ___ willen samenwerken met andere landen.",
          answer: "VS"
        },
        {
          word: "Syrië",
          definition: "een land in het Midden-Oosten",
          sentence: "___ heeft veel historische steden.",
          answer: "Syrië"
        },
        {
          word: "sancties",
          definition: "straffen die een land geeft aan een ander land",
          sentence: "De Verenigde Naties hebben nieuwe ___ ingesteld tegen het land.",
          answer: "sancties"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige president van de VS",
          sentence: "___ is bekend om zijn uitspraken op sociale media.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De Verenigde Naties hebben nieuwe ___ ingesteld tegen het land.",
          answer: "sancties"
        },
        {
          sentence: "De ___ willen samenwerken met andere landen.",
          answer: "VS"
        },
        {
          sentence: "___ heeft veel historische steden.",
          answer: "Syrië"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'heffen' in deze context?",
        options: [
          "optillen",
          "officieel maken",
          "veranderen",
          "stoppen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom heft de VS sancties tegen Syrië op?",
        options: [
          "Omdat Syrië vrede wil",
          "Vanwege nieuwe afspraken met andere landen",
          "Omdat de president het wil",
          "Om de economie te helpen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'sanctie'?",
        options: [
          "Een soort feest",
          "Een economische straf",
          "Een soort belasting",
          "Een internationale overeenkomst"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De VS heft sancties tegen Syrië op omdat ze vrienden willen zijn.",
        isTrue: false
      },
      {
        statement: "Trump heeft een ontmoeting met Al-Sharaa over de sancties.",
        isTrue: true
      },
      {
        statement: "De sancties zijn al volledig verwijderd.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Antwerpse protesten",
    topicNumber: 1,
    article: {
      title: "Antwerpse protesten",
      summary: "In Antwerpen waren er protesten. De politie en de demonstranten kwamen met elkaar in conflict. De politie hield zeven mensen aan. Meestal verliep het protest vreedzaam."
    },
    vocabulary: {
      words: [
        {
          word: "conflict",
          definition: "een meningsverschil of strijd",
          sentence: "Er was een ___ tussen de politie en de demonstranten.",
          answer: "conflict"
        },
        {
          word: "demonstranten",
          definition: "mensen die protesteren",
          sentence: "De ___ wilden hun mening laten horen.",
          answer: "demonstranten"
        },
        {
          word: "meestal",
          definition: "meer dan de helft van de keren",
          sentence: "___ is het protest vreedzaam.",
          answer: "meestal"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ kwam naar de protesten.",
          answer: "politie"
        },
        {
          word: "vreedzaam",
          definition: "zonder geweld",
          sentence: "Het protest verliep ___.",
          answer: "vreedzaam"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er was een ___ tussen de politie en de demonstranten.",
          answer: "conflict"
        },
        {
          sentence: "De ___ kwam naar de protesten.",
          answer: "politie"
        },
        {
          sentence: "De ___ wilden hun mening laten horen.",
          answer: "demonstranten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging het protest over?",
        options: [
          "Over een voetbalwedstrijd",
          "Over de prijs van brood",
          "Over politieke kwesties",
          "Over een feest"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe verliep het protest meestal?",
        options: [
          "Heel gewelddadig",
          "Heel rustig en vreedzaam",
          "Heel chaotisch",
          "Heel snel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat deed de politie met enkele demonstranten?",
        options: [
          "Gaf hen een prijs",
          "Hield hen aan voor vragen",
          "Negeerde hen volledig",
          "Liet hen direct vrij"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het protest was altijd vreedzaam.",
        isTrue: false
      },
      {
        statement: "De politie hield mensen aan.",
        isTrue: true
      },
      {
        statement: "Het protest ging over een voetbalwedstrijd.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Politie gebruikt waterkanon tijdens protest in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Politie gebruikt waterkanon tijdens protest in Antwerpen",
      summary: "De politie heeft een waterkanon gebruikt tijdens een pro-Palestijns protest in Antwerpen. Verschillende betogers zijn opgepakt."
    },
    vocabulary: {
      words: [
        {
          word: "Antwerpen",
          definition: "Een stad in België.",
          sentence: "___ is een grote stad met veel mensen.",
          answer: "Antwerpen"
        },
        {
          word: "protest",
          definition: "Een bijeenkomst waar mensen hun ongenoegen uiten.",
          sentence: "Het ___ was vreedzaam tot de politie kwam.",
          answer: "protest"
        },
        {
          word: "waterkanon",
          definition: "Een apparaat dat water spuit, vaak voor controle van menigten.",
          sentence: "Het ___ spuit water om mensen weg te jagen.",
          answer: "waterkanon"
        },
        {
          word: "Politie",
          definition: "Mensen die de wet handhaven.",
          sentence: "De ___ controleert de stad.",
          answer: "Politie"
        },
        {
          word: "protest",
          definition: "Een uiting van ontevredenheid, vaak publiekelijk.",
          sentence: "Het ___ was vreedzaam ondanks de drukte.",
          answer: "protest"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ spuit water om mensen weg te jagen.",
          answer: "waterkanon"
        },
        {
          sentence: "De ___ controleert de stad.",
          answer: "Politie"
        },
        {
          sentence: "Het ___ was vreedzaam ondanks de drukte.",
          answer: "protest"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een waterkanon?",
        options: [
          "Een soort wapen",
          "Een type auto",
          "Een gebouw",
          "Een park"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom werd er een waterkanon ingezet?",
        options: [
          "Om planten water te geven",
          "Tegen betogers",
          "Voor een feest",
          "Omdat het regende"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurde er met sommige betogers?",
        options: [
          "Zij gingen naar huis",
          "Ze werden opgepakt",
          "Ze wonnen een prijs",
          "Ze gingen eten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De politie gebruikte een waterkanon tijdens het protest.",
        isTrue: true
      },
      {
        statement: "Het protest vond plaats in Brussel.",
        isTrue: false
      },
      {
        statement: "Enkele betogers werden opgepakt door de politie.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Ook in de gevangenis van Haren komen er stapelbedden",
    topicNumber: 1,
    article: {
      title: "Ook in de gevangenis van Haren komen er stapelbedden",
      summary: "In de gevangenis van Haren komen er stapelbedden. De vakbonden van cipiers hebben een staking aangekondigd. De gevangenis is eigenlijk ontworpen voor individuele detentie, niet voor stapelbedden."
    },
    vocabulary: {
      words: [
        {
          word: "ontworpen",
          definition: "gepland of gemaakt met een bepaald doel",
          sentence: "Het gebouw was ___ om veel natuurlijk licht binnen te laten.",
          answer: "ontworpen"
        },
        {
          word: "cipiers",
          definition: "de mensen die in een gevangenis werken en toezicht houden op de gevangenen",
          sentence: "De ___ hebben extra personeel gevraagd vanwege de drukte.",
          answer: "cipiers"
        },
        {
          word: "individuele",
          definition: "alleen, voor of van één persoon",
          sentence: "In de nieuwe gevangenis heeft elke gevangene een ___ cel.",
          answer: "individuele"
        },
        {
          word: "detentie",
          definition: "de staat van iemand die gevangen wordt gehouden",
          sentence: "Hij werd in ___ genomen na het incident.",
          answer: "detentie"
        },
        {
          word: "gevangenis",
          definition: "een plaats waar mensen die een misdaad hebben gedaan, worden opgesloten",
          sentence: "Hij moet voor twee jaar naar de ___.",
          answer: "gevangenis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd in ___ genomen na het incident.",
          answer: "detentie"
        },
        {
          sentence: "In de nieuwe gevangenis heeft elke gevangene een ___ cel.",
          answer: "individuele"
        },
        {
          sentence: "De ___ hebben extra personeel gevraagd vanwege de drukte.",
          answer: "cipiers"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom hebben de vakbonden een staking aangekondigd?",
        options: [
          "Omdat er te weinig cipiers zijn",
          "Omdat de gevangenis te klein is",
          "Omdat er stapelbedden worden geplaatst",
          "Omdat de gevangenen in opstand zijn gekomen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het oorspronkelijke ontwerp van de gevangenis in Haren?",
        options: [
          "Het is een open ruimte met veel bedden",
          "Het is een grote kamer met stapelbedden",
          "Het is gebouwd voor individuele cellen",
          "Het is ontworpen voor groepscellen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het gevolg van de staking door de cipiers?",
        options: [
          "De gevangenis zal gesloten worden",
          "De cipiers krijgen een loonsverhoging",
          "Er worden minder stapelbedden geplaatst",
          "De staking wordt onbeperkt voortgezet"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De gevangenis van Haren is ontworpen voor individuele detentie.",
        isTrue: true
      },
      {
        statement: "De vakbonden hebben de staking aangekondigd omdat er te weinig cipiers zijn.",
        isTrue: false
      },
      {
        statement: "Stapelbedden worden geplaatst om meer gevangenen te kunnen huisvesten.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Vertrouweling Zelensky verwikkeld in corruptieonderzoek",
    topicNumber: 1,
    article: {
      title: "Vertrouweling Zelensky verwikkeld in corruptieonderzoek",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "updates",
          definition: "Nieuwe informatie over een onderwerp.",
          sentence: "Volg de ___ om op de hoogte te blijven.",
          answer: "updates"
        },
        {
          word: "verwikkeld",
          definition: "Betrokken of geïmpliceerd in een situatie, vaak negatief.",
          sentence: "Hij is ___ in een groot schandaal.",
          answer: "verwikkeld"
        },
        {
          word: "app",
          definition: "Een applicatie op een smartphone of computer.",
          sentence: "Download de ___ om het nieuws te volgen.",
          answer: "app"
        },
        {
          word: "Vertrouweling",
          definition: "Iemand die vertrouwd is, vaak in een informele of persoonlijke context.",
          sentence: "Hij was een oude ___ van de president.",
          answer: "Vertrouweling"
        },
        {
          word: "oorlog",
          definition: "Een gewapend conflict tussen landen of groepen.",
          sentence: "De ___ in Oekraïne duurt nu al maanden.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Volg de ___ om op de hoogte te blijven.",
          answer: "updates"
        },
        {
          sentence: "De ___ in Oekraïne duurt nu al maanden.",
          answer: "oorlog"
        },
        {
          sentence: "Download de ___ om het nieuws te volgen.",
          answer: "app"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel vooral over?",
        options: [
          "Een nieuwe app",
          "Oorlog in Oekraïne",
          "Een sportevenement",
          "Kooktips"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de app DS Nieuws?",
        options: [
          "Het is een social media platform",
          "Het biedt nieuwsupdates over belangrijke gebeurtenissen",
          "Het is een game-app",
          "Het is een restaurantgids"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de auteur?",
        options: [
          "Positief over de oorlog",
          "Neutraal, informeert alleen",
          "Negatief over Oekraïne",
          "Promoot de app actief"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Het artikel gaat over een nieuwe app die gelanceerd is.",
        isTrue: true
      },
      {
        statement: "De auteur is tegen de oorlog in Oekraïne.",
        isTrue: false
      },
      {
        statement: "De app DS Nieuws biedt updates over de oorlog.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
    topicNumber: 1,
    article: {
      title: "Israëlisch leger voert dodelijke aanvallen uit op Libanon",
      summary: "Volg hier de laatste ontwikkelingen in het Midden-Oosten."
    },
    vocabulary: {
      words: [
        {
          word: "Israëlisch",
          definition: "Betrekking hebbend op Israël, een land.",
          sentence: "Het ___ leger voert aanvallen uit.",
          answer: "Israëlisch"
        },
        {
          word: "Libanon",
          definition: "Een land in het Midden-Oosten.",
          sentence: "___ ligt ten noorden van Israël.",
          answer: "Libanon"
        },
        {
          word: "aanvallen",
          definition: "Acties om schade toe te brengen of aan te vallen.",
          sentence: "De ___ waren gericht op militaire doelen.",
          answer: "aanvallen"
        },
        {
          word: "leger",
          definition: "Een groep mensen die een land verdedigt en vecht.",
          sentence: "Het ___ van een land voert oorlogen.",
          answer: "leger"
        },
        {
          word: "dodelijke",
          definition: "Waardoor iemand overlijdt.",
          sentence: "Een ___ aanval eist levens.",
          answer: "dodelijke"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ leger voert aanvallen uit.",
          answer: "Israëlisch"
        },
        {
          sentence: "Een ___ aanval eist levens.",
          answer: "dodelijke"
        },
        {
          sentence: "Het ___ van een land voert oorlogen.",
          answer: "leger"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar voert het Israëlische leger aanvallen uit?",
        options: [
          "Nederland",
          "Libanon",
          "Duitsland",
          "België"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van 'dodelijke' in deze context?",
        options: [
          "Levensbedreigend",
          "Gezond",
          "Vriendelijk",
          "Onbelangrijk"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar ligt Libanon ten opzichte van Israël?",
        options: [
          "Ten noorden van",
          "Ten zuiden van",
          "Ten oosten van",
          "Ten westen van"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het Israëlische leger voert aanvallen uit in Nederland.",
        isTrue: false
      },
      {
        statement: "Libanon ligt ten noorden van Israël.",
        isTrue: true
      },
      {
        statement: "Het Midden-Oosten is een regio zonder conflicten.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "VS heffen sancties tegen Syrië op",
    topicNumber: 1,
    article: {
      title: "VS heffen sancties tegen Syrië op",
      summary: "De Amerikaanse president Donald Trump heeft tijdens een ontmoeting met de Syrische minister van Buitenlandse Zaken, Walid al-Moallem, aangekondigd dat de Verenigde Staten de sancties tegen Syrië zullen opschorten. Dit gebeurt in de hoop op een vreedzame oplossing voor het conflict. De internationale gemeenschap volgt de situatie nauwlettend."
    },
    vocabulary: {
      words: [
        {
          word: "sancties",
          definition: "straffen die een land aan een ander land oplegt",
          sentence: "De Verenigde Naties hebben nieuwe ___ opgelegd aan het land.",
          answer: "sancties"
        },
        {
          word: "Syrische",
          definition: "betreffende Syrië",
          sentence: "De ___ regering heeft een verklaring uitgegeven.",
          answer: "Syrische"
        },
        {
          word: "op",
          definition: "hier als deel van 'heffen op', maar op zichzelf heeft het geen losse definitie in deze context",
          sentence: "De regering heeft de wet ___ laten gaan.",
          answer: "op"
        },
        {
          word: "op",
          definition: "hier gebruikt als deel van 'heffen op', wat betekent 'intrekken' of 'niet meer van kracht laten zijn'",
          sentence: "De regering heeft de maatregel ___ laten gaan.",
          answer: "op"
        },
        {
          word: "Syrië",
          definition: "een land in het Midden-Oosten",
          sentence: "___ wordt al jaren geteisterd door oorlog.",
          answer: "Syrië"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De regering heeft de maatregel ___ laten gaan.",
          answer: "op"
        },
        {
          sentence: "De Verenigde Naties hebben nieuwe ___ opgelegd aan het land.",
          answer: "sancties"
        },
        {
          sentence: "De regering heeft de wet ___ laten gaan.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'heffen' in deze context?",
        options: [
          "vernietigen",
          "bekrachtigen",
          "intrekken",
          "afkondigen"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom heft de VS de sancties tegen Syrië op?",
        options: [
          "Om Syrië te straffen",
          "Om een signaal te geven",
          "Vanwege een akkoord",
          "Op verzoek van de VN"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de internationale gemeenschap?",
        options: [
          "De sancties opleggen",
          "De situatie volgen",
          "De VS adviseren",
          "Geen rol spelen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De VS heft de sancties op om Syrië te helpen.",
        isTrue: true
      },
      {
        statement: "De sancties zijn permanent ingetrokken.",
        isTrue: false
      },
      {
        statement: "De internationale gemeenschap ondersteunt deze stap.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Net hierdoor voel ik mij als brave burger radicaliseren: pro-Palestijns protest in Antwerpen opnieuw weggespoeld met waterkanon",
    topicNumber: 1,
    article: {
      title: "Net hierdoor voel ik mij als brave burger radicaliseren: pro-Palestijns protest in Antwerpen opnieuw weggespoeld met waterkanon",
      summary: "Voor de tweede week op rij is pro-Palestijns protest in Antwerpen uitgedraaid op een confrontatie tussen betogers en de oproerpolitie. Zeven manifestanten werden bestuurlijk aangehouden. 'Tot voor kort verliep alles nochtans heel gemoedelijk.'"
    },
    vocabulary: {
      words: [
        {
          word: "bestuurlijk",
          definition: "op bestuurlijk of organisatorisch vlak",
          sentence: "De maatregel was vooral ___ van aard.",
          answer: "bestuurlijk"
        },
        {
          word: "radicaliseren",
          definition: "radicaal of extreem worden in gedrag of ideeën",
          sentence: "Hij begon te ___ na de incidenten.",
          answer: "radicaliseren"
        },
        {
          word: "waterkanon",
          definition: "een voertuig dat water spuit om mensen uiteen te drijven",
          sentence: "Het ___ werd ingezet tegen de betogers.",
          answer: "waterkanon"
        },
        {
          word: "betogers",
          definition: "mensen die demonstreren of protesteren",
          sentence: "De ___ voerden actie voor hun rechten.",
          answer: "betogers"
        },
        {
          word: "confrontatie",
          definition: "een conflict of botsing tussen partijen",
          sentence: "De ___ leidde tot verschillende arrestaties.",
          answer: "confrontatie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij begon te ___ na de incidenten.",
          answer: "radicaliseren"
        },
        {
          sentence: "De maatregel was vooral ___ van aard.",
          answer: "bestuurlijk"
        },
        {
          sentence: "Het ___ werd ingezet tegen de betogers.",
          answer: "waterkanon"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom werden de manifestanten aangehouden?",
        options: [
          "Omdat ze vreedzaam demonstreerden",
          "Omdat ze de wet overtraden tijdens de protesten",
          "Omdat ze te laat waren voor de start",
          "Omdat ze met te veel mensen waren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de houding van de politie tijdens het incident?",
        options: [
          "Ze bleven volledig afzijdig",
          "Ze werkten nauw samen met de betogers",
          "Ze grepen in met onder andere een waterkanon",
          "Ze versterkten de manifestanten in hun acties"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe verliep de situatie volgens de beschrijving?",
        options: [
          "Er was alleen maar samenwerking",
          "Het ging om geweld van beide kanten",
          "Het verliep gemoedelijk tot kort voor het einde",
          "De politie was de hele tijd afwezig"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De betoging in Antwerpen verliep zonder enig probleem voor het einde.",
        isTrue: false
      },
      {
        statement: "Er werden zeven manifestanten aangehouden door de politie.",
        isTrue: true
      },
      {
        statement: "Het incident vond plaats tijdens een pro-Palestijnse betoging.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Politie zet opnieuw waterkanon in bij pro-Palestijns protest in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Politie zet opnieuw waterkanon in bij pro-Palestijns protest in Antwerpen",
      summary: "De Antwerpse Coalitie voor Palestina betoogt maandagavond in de Antwerpse binnenstad opnieuw tegen de genocide in Gaza. De politie heeft de demonstranten richting het Steenplein verdreven, verschillende betogers zijn opgepakt."
    },
    vocabulary: {
      words: [
        {
          word: "verdreven",
          definition: "Gedwongen weggejaagd of verspreid.",
          sentence: "De menigte werd ___ door de politie naar de zijstraten.",
          answer: "verdreven"
        },
        {
          word: "genocide",
          definition: "Een geplande vernietiging van een hele bevolkingsgroep.",
          sentence: "De VN onderzoekt de beschuldigingen van ___ in de regio.",
          answer: "genocide"
        },
        {
          word: "demonstranten",
          definition: "Mensen die deelnemen aan een protest of betoging.",
          sentence: "De ___ hielden borden met leuzen erop.",
          answer: "demonstranten"
        },
        {
          word: "politie",
          definition: "De organisatie die zorgt voor openbare veiligheid en handhaving van de wet.",
          sentence: "De ___ trad op met waterkanonnen tijdens het protest.",
          answer: "politie"
        },
        {
          word: "betoogt",
          definition: "Vecht voor of spreekt zich uit voor een zaak.",
          sentence: "Hij ___ voor dierenrechten tijdens de vergadering.",
          answer: "betoogt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De VN onderzoekt de beschuldigingen van ___ in de regio.",
          answer: "genocide"
        },
        {
          sentence: "Hij ___ voor dierenrechten tijdens de vergadering.",
          answer: "betoogt"
        },
        {
          sentence: "De ___ trad op met waterkanonnen tijdens het protest.",
          answer: "politie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom gebruikte de politie een waterkanon tijdens het protest?",
        options: [
          "Om de demonstranten te vermaken",
          "Om de menigte uiteen te drijven",
          "Om water te besparen",
          "Om de aandacht af te leiden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was het hoofddoel van de betoging in Antwerpen?",
        options: [
          "Tegen dierenrechten",
          "Tegen de genocide in Gaza",
          "Voor meer toerisme",
          "Tegen de lokale politie"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageerde de politie op de demonstratie?",
        options: [
          "Door niets te doen",
          "Door de groep te verdrijven en sommigen aan te houden",
          "Door iedereen direct aan te houden",
          "Door de groep uit te nodigen voor een feest"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De politie heeft geen waterkanon ingezet tijdens het protest.",
        isTrue: false
      },
      {
        statement: "De betoging vond plaats in Antwerpen tegen de situatie in Gaza.",
        isTrue: true
      },
      {
        statement: "Er werden geen demonstranten aangehouden.",
        isTrue: false
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Ook in de gevangenis van de toekomst in Haren komen stapelbedden",
    topicNumber: 1,
    article: {
      title: "Ook in de gevangenis van de toekomst in Haren komen stapelbedden",
      summary: "De cipiersvakbonden hebben een stakingsaanzegging ingediend omdat nu ook in de gevangenis van Haren stapelbedden worden geplaatst. Nochtans is de gevangenis ontworpen rond het idee van 'individuele detentie'."
    },
    vocabulary: {
      words: [
        {
          word: "Haren",
          definition: "De naam van een plaats, hier de gevangenis van Haren.",
          sentence: "De gevangenis in ___ is modern.",
          answer: "Haren"
        },
        {
          word: "ontworpen",
          definition: "Gemaakt, bedacht, of gepland.",
          sentence: "Het gebouw was ___ voor 100 mensen.",
          answer: "ontworpen"
        },
        {
          word: "gevangenis",
          definition: "Een plaats waar mensen worden vastgehouden als straf voor een misdrijf.",
          sentence: "Hij zat vijf jaar in de ___.",
          answer: "gevangenis"
        },
        {
          word: "stapelbedden",
          definition: "Bedden die boven op elkaar zijn geplaatst, om ruimte te besparen.",
          sentence: "In de kleine kamer stond een ___.",
          answer: "stapelbedden"
        },
        {
          word: "detentie",
          definition: "De vrijheidsstraf waarbij iemand wordt vastgehouden.",
          sentence: "Hij zat in ___ voor drie jaar.",
          answer: "detentie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De gevangenis in ___ is modern.",
          answer: "Haren"
        },
        {
          sentence: "In de kleine kamer stond een ___.",
          answer: "stapelbedden"
        },
        {
          sentence: "Hij zat in ___ voor drie jaar.",
          answer: "detentie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom hebben de cipiersvakbonden een stakingsaanzegging ingediend?",
        options: [
          "Omdat de gevangenis te koud is",
          "Omdat er stapelbedden worden geplaatst",
          "Omdat de cipiers te weinig betaald worden",
          "Omdat er een nieuw gevangenisbeleid is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het tegenovergestelde van individuele detentie?",
        options: [
          "Gedeelde detentie",
          "Gezamenlijke detentie",
          "Collectieve detentie",
          "Geen detentie"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "De gevangenis is een vakantieoord",
          "Stapelbedden zijn oncomfortabel",
          "Individuele detentie wordt niet toegepast in Haren",
          "De cipiers zijn in staking"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De gevangenis van Haren gebruikt stapelbedden.",
        isTrue: true
      },
      {
        statement: "De cipiersvakbonden zijn tevreden met de situatie.",
        isTrue: false
      },
      {
        statement: "De gevangenis is ontworpen voor individuele detentie.",
        isTrue: true
      }
    ]
  }
];
