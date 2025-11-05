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
    title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "burgemeestersrace",
          definition: "verkiezing voor de nieuwe burgemeester",
          sentence: "Hij deed mee aan de ___.",
          answer: "burgemeestersrace"
        },
        {
          word: "New Jersey",
          definition: "een staat in de Verenigde Staten",
          sentence: "Ook in ___ was er een verkiezing.",
          answer: "New Jersey"
        },
        {
          word: "gouverneursraces",
          definition: "verkiezingen voor de nieuwe gouverneur",
          sentence: "Er waren ___ in verschillende staten.",
          answer: "gouverneursraces"
        },
        {
          word: "Virginia",
          definition: "een staat in de Verenigde Staten",
          sentence: "Er was een verkiezing in ___.",
          answer: "Virginia"
        },
        {
          word: "New York",
          definition: "een grote stad in Amerika",
          sentence: "Hij is de burgemeester van ___.",
          answer: "New York"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er waren ___ in verschillende staten.",
          answer: "gouverneursraces"
        },
        {
          sentence: "Er was een verkiezing in ___.",
          answer: "Virginia"
        },
        {
          sentence: "Hij deed mee aan de ___.",
          answer: "burgemeestersrace"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie won de burgemeestersrace in New York?",
        options: [
          "Zohran Mamdani",
          "Donald Trump",
          "Joe Biden",
          "Een onbekende kandidaat"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van een gouverneur?",
        options: [
          "Leider van een staat",
          "President van het land",
          "Burgemeester van een stad",
          "Minister van onderwijs"
        ],
        correctAnswer: 1
      },
      {
        question: "In welke land zijn deze verkiezingen gehouden?",
        options: [
          "Verenigde Staten",
          "Nederland",
          "Duitsland",
          "Frankrijk"
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
        statement: "Zohran Mamdani won de burgemeestersrace in New York.",
        isTrue: true
      },
      {
        statement: "Deze verkiezingen vonden plaats in Europa.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
    topicNumber: 1,
    article: {
      title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
      summary: "Na een reddingsactie van ruim elf uur werd de Roemeense bouwvakker Octav Stroici (66) bevrijd uit een ingestorte middeleeuwse toren in hartje Rome. Kort daarna overleed hij. Het drama de talrijke dodelijke arbeidsongevallen in Italië opnieuw onder de aandacht."
    },
    vocabulary: {
      words: [
        {
          word: "Italië",
          definition: "Een land in Europa, bekend om zijn eten en geschiedenis.",
          sentence: "___ is een populair vakantieland.",
          answer: "Italië"
        },
        {
          word: "arbeidsongevallen",
          definition: "Ongevallen die gebeuren tijdens het werk.",
          sentence: "De fabriek heeft strenge regels om ___ te voorkomen.",
          answer: "arbeidsongevallen"
        },
        {
          word: "Rome",
          definition: "De hoofdstad van Italië.",
          sentence: "___ is een oude stad met veel geschiedenis.",
          answer: "Rome"
        },
        {
          word: "talrijke",
          definition: "Heel veel, in grote aantallen.",
          sentence: "Er waren ___ mensen aanwezig bij de bijeenkomst.",
          answer: "talrijke"
        },
        {
          word: "overleed",
          definition: "Heeft geen leven meer, is doodgegaan.",
          sentence: "Hij ___ na een lang ziekbed.",
          answer: "overleed"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een oude stad met veel geschiedenis.",
          answer: "Rome"
        },
        {
          sentence: "___ is een populair vakantieland.",
          answer: "Italië"
        },
        {
          sentence: "Hij ___ na een lang ziekbed.",
          answer: "overleed"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is de bouwvakker Octav Stroici omgekomen?",
        options: [
          "In een oude toren in Rome",
          "Op een boerderij in Italië",
          "In een moderne fabriek in Duitsland",
          "Tijdens een vakantie in Spanje"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe lang duurde de reddingsactie voor Octav Stroici?",
        options: [
          "Minder dan een uur",
          "Ongeveer elf uur",
          "Meer dan een dag",
          "Niet vermeld in de tekst"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de gevolg van dit incident volgens de tekst?",
        options: [
          "Meer aandacht voor arbeidsveiligheid",
          "Meer toerisme naar Rome",
          "Geen gevolgen",
          "Een nieuwe wet tegen oude gebouwen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Octav Stroici overleefde het ongeluk niet.",
        isTrue: true
      },
      {
        statement: "Er zijn dit jaar al 777 doden gevallen in Italië door arbeidsongevallen.",
        isTrue: true
      },
      {
        statement: "De toren stortte in omdat het een nieuwe constructie was.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
    topicNumber: 1,
    article: {
      title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
      summary: "In Mali staat het militaire regime onder zware druk. Al-Qaeda-strijders hebben een economische blokkade ingevoerd tegen Bamako, waardoor de stad zonder brandstof dreigt te vallen. De rebellen hopen dat er een opstand uitbreekt, zodat zij de macht kunnen grijpen."
    },
    vocabulary: {
      words: [
        {
          word: "economische",
          definition: "Weer een voor hetzelfde woord, maar nu specifiek voor de titel",
          sentence: "De ___ crisis treft iedereen.",
          answer: "economische"
        },
        {
          word: "macht",
          definition: "De kracht of autoriteit die iemand heeft",
          sentence: "Hij heeft veel ___ in de organisatie.",
          answer: "macht"
        },
        {
          word: "economische",
          definition: "Alles wat met geld en handel te maken heeft",
          sentence: "De ___ situatie in het land is slecht.",
          answer: "economische"
        },
        {
          word: "rebellen",
          definition: "Mensen die vechten tegen de regering",
          sentence: "De ___ voerden een aanval uit.",
          answer: "rebellen"
        },
        {
          word: "brandstof",
          definition: "Materiaal dat verbrand wordt voor energie, zoals benzine",
          sentence: "Zonder ___ kan de auto niet rijden.",
          answer: "brandstof"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft veel ___ in de organisatie.",
          answer: "macht"
        },
        {
          sentence: "De ___ voerden een aanval uit.",
          answer: "rebellen"
        },
        {
          sentence: "De ___ crisis treft iedereen.",
          answer: "economische"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofdonderwerp van dit artikel?",
        options: [
          "Het weer in Mali",
          "De economische situatie in Mali",
          "Een conflict met Al-Qaeda in Mali",
          "De vrede in Mali"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de rebellen in dit artikel?",
        options: [
          "Ze helpen de regering",
          "Ze voeren een blokkade uit",
          "Ze zijn de regering van het land",
          "Ze geven voedsel aan iedereen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een mogelijk gevolg van de acties van de rebellen?",
        options: [
          "Er komt meer brandstof",
          "De stad Bamako valt",
          "Er breekt een opstand uit",
          "De regering wordt sterker"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rebellen hebben Bamako ingenomen.",
        isTrue: false
      },
      {
        statement: "De rebellen proberen de regering ten val te brengen.",
        isTrue: true
      },
      {
        statement: "De economische blokkade is bedoeld om de stad te helpen.",
        isTrue: false
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Madeleine Fonteyne, 100 jaar",
    topicNumber: 1,
    article: {
      title: "Madeleine Fonteyne, 100 jaar",
      summary: "Geboren in 1924, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Het moment dat iemand ter wereld komt.",
          sentence: "Madeleine Fonteyne is ___ in 1924.",
          answer: "geboren"
        },
        {
          word: "Overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Zij is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "Geboren",
          definition: "Het moment dat iemand ter wereld komt.",
          sentence: "Zij is ___ in 1924.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Madeleine Fonteyne is ___ in 1924.",
          answer: "geboren"
        },
        {
          sentence: "Hij is ___ op 29 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Zij is ___ op 29 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Madeleine Fonteyne geboren?",
        options: [
          "1924",
          "1925",
          "1926",
          "1927"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum is Madeleine Fonteyne overleden?",
        options: [
          "29 oktober 2025",
          "30 oktober 2025",
          "29 november 2025",
          "30 november 2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd Madeleine Fonteyne?",
        options: [
          "100 jaar",
          "99 jaar",
          "101 jaar",
          "102 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Madeleine Fonteyne is geboren in 1924.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne is overleden op 30 oktober 2025.",
        isTrue: false
      },
      {
        statement: "Madeleine Fonteyne werd 100 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Antoon Devogelaere, 98 jaar",
    topicNumber: 1,
    article: {
      title: "Antoon Devogelaere, 98 jaar",
      summary: "Geboren in 1927, overleden op 31 oktober 2025"
    },
    vocabulary: {
      words: [
        {
          word: "jaar",
          definition: "periode van 365 dagen",
          sentence: "Hij is 98 ___ oud geworden.",
          answer: "jaar"
        },
        {
          word: "geboren",
          definition: "begonnen met leven",
          sentence: "Hij is ___ in 1927.",
          answer: "geboren"
        },
        {
          word: "2025",
          definition: "jaartal",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "98",
          definition: "getal tussen 97 en 99",
          sentence: "Hij werd ___ jaar oud.",
          answer: "98"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          sentence: "Hij is 98 ___ oud geworden.",
          answer: "jaar"
        },
        {
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Antoon Devogelaere geboren?",
        options: [
          "1927",
          "1928",
          "1929",
          "1930"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Antoon Devogelaere geworden?",
        options: [
          "96 jaar",
          "97 jaar",
          "98 jaar",
          "99 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "In welke maand is Antoon Devogelaere overleden?",
        options: [
          "januari",
          "februari",
          "maart",
          "oktober"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Antoon Devogelaere is geboren in 1927.",
        isTrue: true
      },
      {
        statement: "Antoon Devogelaere is overleden in oktober 2024.",
        isTrue: false
      },
      {
        statement: "Antoon Devogelaere werd 98 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Organisaties verliezen subsidies in strijd tegen armoede in onderwijs",
    topicNumber: 1,
    article: {
      title: "Organisaties verliezen subsidies in strijd tegen armoede in onderwijs",
      summary: "Twee organisaties die armoede in het onderwijs bestrijden, verliezen hun subsidies van de Vlaamse overheid. Dit heeft gevolgen voor kinderen en innovatie."
    },
    vocabulary: {
      words: [
        {
          word: "subsidies",
          definition: "financiële steun van de overheid",
          sentence: "De overheid geeft ___ aan organisaties die helpen.",
          answer: "subsidies"
        },
        {
          word: "overheid",
          definition: "de organisatie die een land of gebied bestuurt",
          sentence: "De ___ moet zorgen voor haar burgers.",
          answer: "overheid"
        },
        {
          word: "organisaties",
          definition: "groepen mensen die samenwerken voor een doel",
          sentence: "De ___ werken aan een betere wereld.",
          answer: "organisaties"
        },
        {
          word: "onderwijs",
          definition: "het geven of krijgen van les en kennis",
          sentence: "Goed ___ is belangrijk voor ieders toekomst.",
          answer: "onderwijs"
        },
        {
          word: "kinderen",
          definition: "jonge mensen, meestal onder de 18 jaar",
          sentence: "De ___ spelen in het park.",
          answer: "kinderen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ moet zorgen voor haar burgers.",
          answer: "overheid"
        },
        {
          sentence: "De ___ spelen in het park.",
          answer: "kinderen"
        },
        {
          sentence: "De ___ werken aan een betere wereld.",
          answer: "organisaties"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom verliezen de organisaties hun subsidies?",
        options: [
          "Omdat ze te veel winst maken",
          "Omdat de overheid vindt dat ze niet efficiënt werken",
          "Omdat ze geen armoede bestrijden",
          "Omdat ze in een ander land werken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van het verlies van de subsidies?",
        options: [
          "Kinderen krijgen meer speeltijd",
          "Organisaties stoppen volledig",
          "Kinderen lijden onder armoede",
          "De overheid wordt rijker"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de overheid in deze situatie?",
        options: [
          "Ze geeft extra geld aan iedereen",
          "Ze beslist over de subsidie",
          "Ze werkt samen met de organisaties",
          "Ze negeert het probleem"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Alleen organisaties die armoede bestrijden, krijgen subsidies.",
        isTrue: false
      },
      {
        statement: "Kinderen hebben direct last van het verlies van subsidies.",
        isTrue: true
      },
      {
        statement: "De overheid heeft de subsidies volledig stopgezet.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Amerikaans nieuws",
    topicNumber: 1,
    article: {
      title: "Amerikaans nieuws",
      summary: "Dit artikel gaat over Amerika. Er is nieuws over verkiezingen. Dit is belangrijk voor de wereld."
    },
    vocabulary: {
      words: [
        {
          word: "Amerika",
          definition: "een land, ook Verenigde Staten genoemd",
          sentence: "Dit artikel gaat over ___.",
          answer: "Amerika"
        },
        {
          word: "verkiezingen",
          definition: "als mensen stemmen om een leider te kiezen",
          sentence: "Er zijn ___ in Amerika.",
          answer: "verkiezingen"
        },
        {
          word: "nieuws",
          definition: "informatie over wat er gebeurt, vaak recent",
          sentence: "Dit is het ___ over Amerika.",
          answer: "nieuws"
        },
        {
          word: "artikel",
          definition: "een geschreven tekst over een onderwerp",
          sentence: "Dit ___ gaat over Amerika.",
          answer: "artikel"
        },
        {
          word: "wereld",
          definition: "de aarde en alle mensen en landen",
          sentence: "Dit nieuws is belangrijk voor de ___.",
          answer: "wereld"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Dit nieuws is belangrijk voor de ___.",
          answer: "wereld"
        },
        {
          sentence: "Dit artikel gaat over ___.",
          answer: "Amerika"
        },
        {
          sentence: "Er zijn ___ in Amerika.",
          answer: "verkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat dit artikel over?",
        options: [
          "Sport",
          "Koken",
          "Amerika",
          "Winkelen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'nieuws'?",
        options: [
          "Een soort voedsel",
          "Informatie over recente gebeurtenissen",
          "Een soort sport",
          "Een type kleding"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is dit nieuws belangrijk?",
        options: [
          "Het is niet belangrijk",
          "Alleen voor Amerika",
          "Voor de hele wereld",
          "Alleen voor de schrijver"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Dit artikel gaat over een feest in Amerika.",
        isTrue: false
      },
      {
        statement: "Amerika is een land.",
        isTrue: true
      },
      {
        statement: "Dit nieuws is alleen belangrijk voor mensen in Amerika.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Rome rouwt om verongelukte Roemeense bouwvakker",
    topicNumber: 1,
    article: {
      title: "Rome rouwt om verongelukte Roemeense bouwvakker",
      summary: "Een bouwvakker uit Roemenië is overleden na een ongeluk in Rome, Italië. Dit jaar zijn er al 777 doden op de werkvloer in Italië."
    },
    vocabulary: {
      words: [
        {
          word: "doden",
          definition: "mensen die niet meer leven",
          sentence: "Er zijn veel ___ door ongevallen.",
          answer: "doden"
        },
        {
          word: "bouwvakker",
          definition: "iemand die werkt in de bouw",
          sentence: "De ___ werkte in Italië.",
          answer: "bouwvakker"
        },
        {
          word: "Rome",
          definition: "een stad in Italië",
          sentence: "Hij werkte in ___.",
          answer: "Rome"
        },
        {
          word: "Roemeense",
          definition: "iemand uit Roemenië",
          sentence: "Hij is een ___ man.",
          answer: "Roemeense"
        },
        {
          word: "Italië",
          definition: "een land in Europa",
          sentence: "Italië is een land in Europa.",
          answer: "Italië"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werkte in Italië.",
          answer: "bouwvakker"
        },
        {
          sentence: "Hij werkte in ___.",
          answer: "Rome"
        },
        {
          sentence: "Italië is een land in Europa.",
          answer: "Italië"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werkte de man?",
        options: [
          "in een winkel",
          "op een bouwplaats",
          "in een school",
          "in een park"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is de man nu?",
        options: [
          "hij is thuis",
          "hij is op vakantie",
          "hij is overleden",
          "hij is in de auto"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is Italië?",
        options: [
          "in Azië",
          "in Europa",
          "in Afrika",
          "in Amerika"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De man is nog in leven.",
        isTrue: false
      },
      {
        statement: "Rome is een stad in Italië.",
        isTrue: true
      },
      {
        statement: "De man werkte in een school.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
    topicNumber: 1,
    article: {
      title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
      summary: "In Mali staat het militaire regime onder zware druk. Al-Qaeda-strijders hebben een economische blokkade ingevoerd tegen Bamako, waardoor de stad zonder brandstof dreigt te vallen. De rebellen hopen dat er een opstand uitbreekt, zodat zij de macht kunnen grijpen."
    },
    vocabulary: {
      words: [
        {
          word: "regime",
          definition: "de groep mensen die een land bestuurt",
          sentence: "Het ___ is niet democratisch.",
          answer: "regime"
        },
        {
          word: "brandstof",
          definition: "stof om machines te laten werken, zoals benzine",
          sentence: "Zonder ___ kan de auto niet rijden.",
          answer: "brandstof"
        },
        {
          word: "opstand",
          definition: "een moment waarop mensen in verzet komen tegen de leiders",
          sentence: "De ___ was groot en gevaarlijk.",
          answer: "opstand"
        },
        {
          word: "macht",
          definition: "de kracht of autoriteit die iemand heeft",
          sentence: "Hij heeft veel ___ in de organisatie.",
          answer: "macht"
        },
        {
          word: "stad",
          definition: "een plaats waar veel mensen wonen en werken",
          sentence: "De ___ is groot en druk.",
          answer: "stad"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft veel ___ in de organisatie.",
          answer: "macht"
        },
        {
          sentence: "De ___ is groot en druk.",
          answer: "stad"
        },
        {
          sentence: "Zonder ___ kan de auto niet rijden.",
          answer: "brandstof"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Mali?",
        options: [
          "Amsterdam",
          "Parijs",
          "Bamako",
          "Londen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat voor blokkade is er in de stad?",
        options: [
          "een sportieve",
          "een economische",
          "een politieke",
          "een culturele"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat hopen de rebellen?",
        options: [
          "dat de stad valt",
          "dat er een opstand komt",
          "dat de brandstof opraakt",
          "dat de regering valt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De hoofdstad van Mali is Bamako.",
        isTrue: true
      },
      {
        statement: "De rebellen hebben een culturele blokkade ingevoerd.",
        isTrue: false
      },
      {
        statement: "De rebellen hopen dat er een opstand uitbreekt.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Madeleine Fonteyne, 100 jaar",
    topicNumber: 1,
    article: {
      title: "Madeleine Fonteyne, 100 jaar",
      summary: "Madeleine Fonteyne was born in 1924. She died on 29/10/2025. She was 100 years old."
    },
    vocabulary: {
      words: [
        {
          word: "old",
          definition: "not new, having lived long",
          sentence: "She was 100 years ___.",
          answer: "old"
        },
        {
          word: "year",
          definition: "a period of 365 days",
          sentence: "She was 100 ___ old.",
          answer: "year"
        },
        {
          word: "Fonteyne",
          definition: "a last name, family name",
          sentence: "Madeleine ___ was born in 1924.",
          answer: "Fonteyne"
        },
        {
          word: "was",
          definition: "past tense of 'is'",
          sentence: "She ___ born in 1924.",
          answer: "was"
        },
        {
          word: "born",
          definition: "to be born, to come into life",
          sentence: "She was ___ in 1924.",
          answer: "born"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Madeleine ___ was born in 1924.",
          answer: "Fonteyne"
        },
        {
          sentence: "She ___ born in 1924.",
          answer: "was"
        },
        {
          sentence: "She was ___ in 1924.",
          answer: "born"
        }
      ]
    },
    multipleChoice: [
      {
        question: "When was Madeleine Fonteyne born?",
        options: [
          "In 1924",
          "In 2025",
          "In 1920",
          "In 1925"
        ],
        correctAnswer: 1
      },
      {
        question: "How old was Madeleine Fonteyne when she died?",
        options: [
          "100 years old",
          "90 years old",
          "95 years old",
          "105 years old"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the surname of Madeleine?",
        options: [
          "Fonteyne",
          "Johnson",
          "Smith",
          "Davis"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Madeleine Fonteyne was born in 1924.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne died in 2025.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne was 90 years old when she died.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Antoon Devogelaere, 98 jaar",
    topicNumber: 1,
    article: {
      title: "Antoon Devogelaere, 98 jaar",
      summary: "Hij is geboren in 1927. Hij is overleden op 31 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Hij",
          definition: "verwijst naar een man",
          sentence: "___ is geboren in 1927.",
          answer: "Hij"
        },
        {
          word: "overleden",
          definition: "niet meer leven",
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "in",
          definition: "tijd of plaats",
          sentence: "Hij is geboren ___ 1927.",
          answer: "in"
        },
        {
          word: "1927",
          definition: "een jaartal",
          sentence: "Hij is geboren in ___.",
          answer: "1927"
        },
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Hij is ___ in 1927.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is geboren ___ 1927.",
          answer: "in"
        },
        {
          sentence: "Hij is geboren in ___.",
          answer: "1927"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Antoon Devogelaere geboren?",
        options: [
          "In 1927",
          "In 1930",
          "In 1920",
          "In 1945"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de geboortedatum van Antoon?",
        options: [
          "31 oktober 1927",
          "1 januari 1927",
          "31 oktober 1920",
          "31 oktober 1925"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Antoon toen hij overleed?",
        options: [
          "98 jaar",
          "100 jaar",
          "95 jaar",
          "102 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Antoon Devogelaere is geboren in 1927.",
        isTrue: true
      },
      {
        statement: "Antoon overleed in 2025.",
        isTrue: true
      },
      {
        statement: "Antoon was 100 jaar oud toen hij overleed.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Organisaties verliezen subsidies",
    topicNumber: 1,
    article: {
      title: "Organisaties verliezen subsidies",
      summary: "Twee organisaties verliezen hun subsidies. Zij helpen arme kinderen. De overheid zegt dat er geen geld meer is. Dit is slecht voor de kinderen."
    },
    vocabulary: {
      words: [
        {
          word: "subsidies",
          definition: "geld van de overheid",
          sentence: "De overheid geeft geen ___ meer.",
          answer: "subsidies"
        },
        {
          word: "geen",
          definition: "niet iets",
          sentence: "Er is ___ geld meer.",
          answer: "geen"
        },
        {
          word: "slecht",
          definition: "niet goed",
          sentence: "Dit is ___ voor de kinderen.",
          answer: "slecht"
        },
        {
          word: "verliezen",
          definition: "iets niet meer hebben",
          sentence: "Zij ___ hun geld.",
          answer: "verliezen"
        },
        {
          word: "organisaties",
          definition: "groepen mensen die samenwerken",
          sentence: "De ___ helpen kinderen in armoede.",
          answer: "organisaties"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De overheid geeft geen ___ meer.",
          answer: "subsidies"
        },
        {
          sentence: "De ___ helpen kinderen in armoede.",
          answer: "organisaties"
        },
        {
          sentence: "Er is ___ geld meer.",
          answer: "geen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat verliezen de organisaties?",
        options: [
          "Hun geld",
          "Hun huis",
          "Hun vrienden",
          "Hun werk"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie geeft normaal gesproken geld aan de organisaties?",
        options: [
          "De scholen",
          "De overheid",
          "De ouders",
          "De kinderen"
        ],
        correctAnswer: 2
      },
      {
        question: "Is dit goed voor de kinderen?",
        options: [
          "Ja, het is leuk",
          "Ja, het is fijn",
          "Nee, het is slecht",
          "Nee, het is geweldig"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De organisaties verliezen hun subsidies.",
        isTrue: true
      },
      {
        statement: "De overheid geeft nu meer geld.",
        isTrue: false
      },
      {
        statement: "Dit is goed nieuws voor de kinderen.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "winnen",
          definition: "Een overwinning behalen in een wedstrijd of verkiezing.",
          sentence: "Hij hoopte de verkiezing te ___.",
          answer: "winnen"
        },
        {
          word: "gouverneur",
          definition: "De hoogste uitvoerende ambtenaar in een staat of deelstaat.",
          sentence: "De nieuwe ___ van Virginia zal morgen worden beëdigd.",
          answer: "gouverneur"
        },
        {
          word: "updates",
          definition: "Bijgewerkte informatie of het laatste nieuws over een onderwerp.",
          sentence: "Volg de ___ over de verkiezingen hier.",
          answer: "updates"
        },
        {
          word: "burgemeester",
          definition: "Het hoofd van de gemeentelijke overheid in een stad of gemeente.",
          sentence: "De nieuwe ___ werd met veel enthousiasme begroet.",
          answer: "burgemeester"
        },
        {
          word: "race",
          definition: "Een wedstrijd of competitie, vaak in de context van verkiezingen.",
          sentence: "De politieke ___ was erg intens dit jaar.",
          answer: "race"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ werd met veel enthousiasme begroet.",
          answer: "burgemeester"
        },
        {
          sentence: "De politieke ___ was erg intens dit jaar.",
          answer: "race"
        },
        {
          sentence: "Volg de ___ over de verkiezingen hier.",
          answer: "updates"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Welke term wordt gebruikt voor het hoofd van een stedelijke overheid?",
        options: [
          "Burgemeester",
          "Gouverneur",
          "Minister",
          "President"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'winnen' in de context van verkiezingen?",
        options: [
          "Verliezen",
          "Deelnemen",
          "Winnen",
          "Strijden"
        ],
        correctAnswer: 3
      },
      {
        question: "Welke functie bekleedt iemand die een gouverneursrace wint?",
        options: [
          "Burgemeester",
          "Minister van Onderwijs",
          "Gouverneur",
          "President"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump was de eerste president van de Verenigde Staten die een tweede ambtstermijn begon.",
        isTrue: false
      },
      {
        statement: "De verkiezingen in Virginia en New Jersey werden gewonnen door Democraten.",
        isTrue: true
      },
      {
        statement: "Zohran Mamdani werd burgemeester van New York City.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
    topicNumber: 1,
    article: {
      title: "Kunnen de verkiezingen van gouverneurs en burgemeesters de Democraten herlanceren in de VS?",
      summary: "Wie wordt gouverneur in Virginia en New Jersey? En wordt een moslim burgemeester van New York? Al doet hij niet mee, deze verkiezingen zijn een barometer voor Donald Trumps populariteit, én die van de Democraten."
    },
    vocabulary: {
      words: [
        {
          word: "wie",
          definition: "Vraagwoord dat gebruikt wordt om te vragen naar een persoon of personen.",
          sentence: "Wie heeft deze beslissing genomen?",
          answer: "wie"
        },
        {
          word: "gouverneurs",
          definition: "De hoogstverkiezen bestuurders van een staat in de VS.",
          sentence: "De gouverneurs van Texas en Californië hebben verschillende beleidsvisies.",
          answer: "gouverneurs"
        },
        {
          word: "verkiezingen",
          definition: "Het proces waarbij mensen stemmen om personen te kiezen voor een politieke functie.",
          sentence: "Tijdens de verkiezingen kiezen burgers hun vertegenwoordigers.",
          answer: "verkiezingen"
        },
        {
          word: "herlanceren",
          definition: "Weer nieuw leven inblazen of opnieuw activeren.",
          sentence: "De regering probeert het economisch plan te herlanceren met nieuwe investeringen.",
          answer: "herlanceren"
        },
        {
          word: "burgemeester",
          definition: "Het hoofd van de uitvoerende macht van een gemeente of stad.",
          sentence: "De burgemeester van Rotterdam wordt gekozen door de gemeenteraad.",
          answer: "burgemeester"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Wie heeft deze beslissing genomen?",
          answer: "wie"
        },
        {
          sentence: "De burgemeester van Rotterdam wordt gekozen door de gemeenteraad.",
          answer: "burgemeester"
        },
        {
          sentence: "De gouverneurs van Texas en Californië hebben verschillende beleidsvisies.",
          answer: "gouverneurs"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er bedoeld met de term 'barometer' in de context van de tekst?",
        options: [
          "Een instrument voor het weergeven van de druk",
          "Een metafoor voor iets dat dient als indicator of graadmeter",
          "Een specifieke weersvoorspelling tool",
          "Een historisch artefact uit de 19e eeuw"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemt de tekst specifiek een 'moslim burgemeester'?",
        options: [
          "Omdat alle burgemeesters in de VS moslims zijn",
          "Om de religieuze achtergrond van de kandidaat te benadrukken",
          "Omdat de verkiezingen in een islamitische staat plaatsvinden",
          "Als referentie aan een historische figuur"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de primaire focus van de tekst?",
        options: [
          "Het beschrijven van het klimaat in Virginia en New Jersey",
          "Het uitleggen van het Amerikaanse politieke systeem",
          "Het analyseren van de uitkomsten van lokale verkiezingen als graadmeter voor nationale politiek",
          "Het bespreken van de geschiedenis van de Democratische partij"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen voor gouverneurs en burgemeesters in de VS hebben geen invloed op de nationale politiek.",
        isTrue: false
      },
      {
        statement: "Een burgemeester van New York zou de eerste moslim in die positie zijn als hij verkozen wordt.",
        isTrue: true
      },
      {
        statement: "Donald Trump is momenteel de president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
    topicNumber: 1,
    article: {
      title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
      summary: "In Mali staat het militaire regime onder zware druk. Al-Qaeda-strijders hebben een economische blokkade ingevoerd tegen Bamako, waardoor de stad zonder brandstof dreigt te vallen. De rebellen hopen dat er een opstand uitbreekt, zodat zij de macht kunnen grijpen."
    },
    vocabulary: {
      words: [
        {
          word: "blokkade",
          definition: "een actie om de toegang tot een gebied of de doorstroom van goederen te belemmeren",
          sentence: "De protesten leidden tot een volledige blokkade van de hoofdweg.",
          answer: "blokkade"
        },
        {
          word: "rebellen",
          definition: "personen die deelnemen aan een gewapend verzet tegen een gevestigde autoriteit",
          sentence: "De rebellen voerden een verrassingsaanval uit.",
          answer: "rebellen"
        },
        {
          word: "macht",
          definition: "de autoriteit of controle over personen, middelen, of gebieden",
          sentence: "Na de coup greep het leger de macht.",
          answer: "macht"
        },
        {
          word: "opstand",
          definition: "een gewelddadige of openlijke rebellie tegen een regering of autoriteit",
          sentence: "De opstand werd na drie dagen neergeslagen.",
          answer: "opstand"
        },
        {
          word: "wurggreep",
          definition: "een greep of handeling die iemand of iets tot stilstand of onderwerping dwingt",
          sentence: "De nieuwe wetgeving was een wurggreep op de vrijheid van meningsuiting.",
          answer: "wurggreep"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De protesten leidden tot een volledige blokkade van de hoofdweg.",
          answer: "blokkade"
        },
        {
          sentence: "De rebellen voerden een verrassingsaanval uit.",
          answer: "rebellen"
        },
        {
          sentence: "De nieuwe wetgeving was een wurggreep op de vrijheid van meningsuiting.",
          answer: "wurggreep"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofddoel van de economische blokkade door de rebellen in Mali?",
        options: [
          "Om humanitaire hulp te vergemakkelijken",
          "Om de economie van de hoofdstad te verlammen",
          "Om internationale steun te verwerven",
          "Om culturele evenementen te sponsoren"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een waarschijnlijk gevolg als Bamako zonder brandstof valt?",
        options: [
          "Verbeterde internationale handel",
          "Verhoogde elektriciteitsproductie",
          "Stilvallen van essentieel vervoer en stroom",
          "Groeiende politieke stabiliteit"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarin hopen de rebellen dat de opstand resulteert?",
        options: [
          "In een langdurige periode van vrede en welvaart",
          "In een kans om hun politieke tegenstanders te vergeven",
          "In een kans om de macht te grijpen via onrust",
          "In een internationale interventie die hun doelen doorkruist"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Al-Qaeda-strijders in Mali hebben als hoofddoel om humanitaire hulp te bieden aan de bevolking.",
        isTrue: false
      },
      {
        statement: "De economische blokkade is gericht op het uitoefenen van druk op de regering in Bamako.",
        isTrue: true
      },
      {
        statement: "De rebellen hopen dat de opstand leidt tot internationale steun voor hun zaak.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Madeleine Fonteyne, 100 jaar",
    topicNumber: 1,
    article: {
      title: "Madeleine Fonteyne, 100 jaar",
      summary: "Geboren in 1924, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Geboren",
          definition: "Het ter wereld komen, het begin van het leven.",
          sentence: "Hij werd ___ in een klein dorp in het noorden.",
          answer: "Geboren"
        },
        {
          word: "1924",
          definition: "Een jaartal, verwijzend naar een specifiek jaar in de twintigste eeuw.",
          sentence: "Deze auto is van modeljaar ___ en rijdt nog steeds prima.",
          answer: "1924"
        },
        {
          word: "Madeleine",
          definition: "Een vrouwelijke voornaam, van Franse oorsprong.",
          sentence: "___ was een bekende schrijfster uit de vorige eeuw.",
          answer: "Madeleine"
        },
        {
          word: "Fonteyne",
          definition: "Een achternaam, mogelijk van Nederlandse of Franse oorsprong.",
          sentence: "De familie ___ woonde generaties lang in deze stad.",
          answer: "Fonteyne"
        },
        {
          word: "29/10",
          definition: "Een specifieke datum, namelijk de 29ste dag van oktober.",
          sentence: "Mijn verjaardag is op ___, net als die van mijn zus!",
          answer: "29/10"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De familie ___ woonde generaties lang in deze stad.",
          answer: "Fonteyne"
        },
        {
          sentence: "Hij werd ___ in een klein dorp in het noorden.",
          answer: "Geboren"
        },
        {
          sentence: "Mijn verjaardag is op ___, net als die van mijn zus!",
          answer: "29/10"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welke eeuw werd Madeleine Fonteyne geboren?",
        options: [
          "De 18e eeuw",
          "De 19e eeuw",
          "De 20e eeuw",
          "De 21e eeuw"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de geboortedatum van Madeleine Fonteyne?",
        options: [
          "1 januari 1924",
          "31 december 1924",
          "29 oktober 1924",
          "Onbekend"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud werd Madeleine Fonteyne?",
        options: [
          "100 jaar",
          "101 jaar",
          "99 jaar",
          "98 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Madeleine Fonteyne werd geboren in 1924.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne overleed op 29 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne was een man.",
        isTrue: false
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Antoon Devogelaere, 98 jaar",
    topicNumber: 1,
    article: {
      title: "Antoon Devogelaere, 98 jaar",
      summary: "Geboren in 1927, overleden op 31/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "31/10",
          definition: "Datum in dag-maand formaat, hier 31 oktober.",
          sentence: "Hij overleed op ___.",
          answer: "31/10"
        },
        {
          word: "98",
          definition: "Getal, hier de leeftijd weergevend.",
          sentence: "Hij werd ___ jaar oud.",
          answer: "98"
        },
        {
          word: "Devogelaere",
          definition: "Familienaam, mogelijk van Vlaamse oorsprong.",
          sentence: "Zijn volledige naam was Antoon ___.",
          answer: "Devogelaere"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op die datum.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Jaartal, het jaar waarin iemand overleden is.",
          sentence: "Hij overleed in ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ op die datum.",
          answer: "overleden"
        },
        {
          sentence: "Hij werd ___ jaar oud.",
          answer: "98"
        },
        {
          sentence: "Hij overleed in ___.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de geboortedatum van Antoon Devogelaere?",
        options: [
          "1927",
          "1928",
          "1929",
          "1930"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum is Antoon Devogelaere overleden?",
        options: [
          "31/10/2025",
          "31/10/2024",
          "30/10/2025",
          "31/12/2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was de leeftijd van Antoon Devogelaere bij zijn overlijden?",
        options: [
          "98 jaar",
          "97 jaar",
          "99 jaar",
          "100 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Antoon Devogelaere werd geboren in 1927.",
        isTrue: true
      },
      {
        statement: "Antoon Devogelaere overleed op 31/10/2024.",
        isTrue: false
      },
      {
        statement: "Antoon Devogelaere werd 98 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Stormloop voor nieuwe tandarts in Kluisbergen: “Mijn praktijk is nog niet open, maar ik ben al volgeboekt”",
    topicNumber: 1,
    article: {
      title: "Stormloop voor nieuwe tandarts in Kluisbergen: “Mijn praktijk is nog niet open, maar ik ben al volgeboekt”",
      summary: "Tandarts Julie Parmentier (26) start donderdag haar praktijk in Kluisbergen en nu al zit ze volgeboekt tot in september 2026. Het is typerend voor een probleem in veel Vlaamse gemeenten."
    },
    vocabulary: {
      words: [
        {
          word: "Praktijk",
          definition: "De professionele werkplek of de dagelijkse uitoefening van een beroep, vooral in medische context.",
          sentence: "Haar medische ___ is gevestigd in het stadscentrum.",
          answer: "Praktijk"
        },
        {
          word: "Probleem",
          definition: "Een moeilijke situatie of een kwestie die problemen veroorzaakt.",
          sentence: "De stad heeft een groot ___ met parkeerplaatsen.",
          answer: "Probleem"
        },
        {
          word: "Typerend",
          definition: "Karakteristiek of exemplarisch voor iets of iemand.",
          sentence: "Zijn punctualiteit is ___ voor zijn professionele instelling.",
          answer: "Typerend"
        },
        {
          word: "Gemeenten",
          definition: "Lokale bestuursgebieden of de lokale overheid in een gebied, vooral in België en Nederland.",
          sentence: "Verschillende ___ werken samen aan een recyclingprogramma.",
          answer: "Gemeenten"
        },
        {
          word: "Stormloop",
          definition: "Een snelle en massale toeloop of toestroom, vaak in een negatieve context.",
          sentence: "De ___ naar winkelopeningen tijdens Black Friday is soms gevaarlijk.",
          answer: "Stormloop"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Verschillende ___ werken samen aan een recyclingprogramma.",
          answer: "Gemeenten"
        },
        {
          sentence: "Haar medische ___ is gevestigd in het stadscentrum.",
          answer: "Praktijk"
        },
        {
          sentence: "De ___ naar winkelopeningen tijdens Black Friday is soms gevaarlijk.",
          answer: "Stormloop"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is tandarts Julie Parmentier al volgeboekt, hoewel haar praktijk nog niet open is?",
        options: [
          "Omdat ze al bekende is in de gemeente",
          "Vanwege een grote vraag naar tandheelkundige zorg in de regio",
          "Omdat ze haar diensten al aanbood voor de opening",
          "Er was een misverstand over de openingsdatum"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de betekenis van 'volgeboekt' in deze context?",
        options: [
          "Dat alle beschikbare tijdsloten zijn gereserveerd",
          "Dat de praktijk fysiek vol is met patiënten",
          "Dat de boekingstop is bereikt",
          "Dat de agenda niet meer beschikbaar is"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat illustreert dit verhaal over gemeenten in Vlaanderen?",
        options: [
          "Dat ze overvloedige middelen hebben voor gezondheidszorg",
          "Dat ze kampen met een tekort aan medische voorzieningen",
          "Dat ze prioriteit geven aan kunst boven gezondheid",
          "Dat ze snel handelen bij noodsituaties"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Tandarts Julie Parmentier zal pas over 3 jaar nieuwe patiënten kunnen accepteren.",
        isTrue: false
      },
      {
        statement: "De situatie in Kluisbergen weerspiegelt een breder probleem in Vlaamse gemeenten.",
        isTrue: true
      },
      {
        statement: "Julie Parmentier's praktijk is gevestigd in een stad met veel tandartsen.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Amerikaanse verkiezingen: belangrijke uitslagen",
    topicNumber: 1,
    article: {
      title: "Amerikaanse verkiezingen: belangrijke uitslagen",
      summary: "In de Verenigde Staten zijn er belangrijke verkiezingen geweest. Er zijn nieuwe burgemeesters en gouverneurs gekozen. Dit zijn de eerste uitslagen. De verkiezingen kunnen de toekomst van het land beïnvloeden."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "een keer dat mensen stemmen om iemand te kiezen",
          sentence: "In november zijn er ___ in de Verenigde Staten.",
          answer: "verkiezingen"
        },
        {
          word: "burgemeester",
          definition: "de belangrijkste persoon in een stad of gemeente",
          sentence: "De nieuwe ___ van New York heet Zohran Mamdani.",
          answer: "burgemeester"
        },
        {
          word: "gouverneur",
          definition: "de leider van een staat in Amerika",
          sentence: "In Virginia en New Jersey is er een nieuwe ___ gekozen.",
          answer: "gouverneur"
        },
        {
          word: "uitslagen",
          definition: "de officiële resultaten van een verkiezing",
          sentence: "De ___ van de verkiezingen zijn bekend.",
          answer: "uitslagen"
        },
        {
          word: "toekomst",
          definition: "de tijd die nog komt",
          sentence: "De verkiezingen beïnvloeden de ___ van het land.",
          answer: "toekomst"
        }
      ],
      fillInBlanks: [
        {
          sentence: "In Virginia en New Jersey is er een nieuwe ___ gekozen.",
          answer: "gouverneur"
        },
        {
          sentence: "De nieuwe ___ van New York heet Zohran Mamdani.",
          answer: "burgemeester"
        },
        {
          sentence: "In november zijn er ___ in de Verenigde Staten.",
          answer: "verkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat zijn de verkiezingen in de Verenigde Staten?",
        options: [
          "een sportwedstrijd",
          "een festival",
          "een politieke gebeurtenis",
          "een concert"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie is Zohran Mamdani?",
        options: [
          "een bekende zanger",
          "de nieuwe burgemeester van New York",
          "een professionele basketballer",
          "een filmacteur"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van een gouverneur?",
        options: [
          "leider van een stad",
          "leider van een staat in de VS",
          "leider van een heel land",
          "leider van een sportteam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen in de Verenigde Staten vonden plaats in november.",
        isTrue: true
      },
      {
        statement: "De Republikeinen hebben gewonnen in Virginia en New Jersey.",
        isTrue: false
      },
      {
        statement: "De verkiezingsuitslagen kunnen de toekomst beïnvloeden.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
    topicNumber: 1,
    article: {
      title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
      summary: "Na een reddingsactie van ruim elf uur werd de Roemeense bouwvakker Octav Stroici (66) bevrijd uit een ingestorte middeleeuwse toren in hartje Rome. Kort daarna overleed hij. Het drama brengt de talrijke dodelijke arbeidsongevallen in Italië opnieuw onder de aandacht."
    },
    vocabulary: {
      words: [
        {
          word: "drama",
          definition: "een ernstige of verdrietige gebeurtenis",
          sentence: "Het ___ in de mijn kostte veel levens.",
          answer: "drama"
        },
        {
          word: "arbeidsongevallen",
          definition: "ongelukken die gebeuren op het werk",
          sentence: "De ___ zijn toegenomen het afgelopen jaar.",
          answer: "arbeidsonvallen"
        },
        {
          word: "Italië",
          definition: "een land in Europa",
          sentence: "___ is bekend om zijn lekker eten.",
          answer: "Italië"
        },
        {
          word: "toren",
          definition: "een hoog gebouw",
          sentence: "De oude ___ staat in het centrum van de stad.",
          answer: "toren"
        },
        {
          word: "Rome",
          definition: "de hoofdstad van Italië",
          sentence: "___ is een oude stad met veel geschiedenis.",
          answer: "Rome"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De oude ___ staat in het centrum van de stad.",
          answer: "toren"
        },
        {
          sentence: "___ is bekend om zijn lekker eten.",
          answer: "Italië"
        },
        {
          sentence: "Het ___ in de mijn kostte veel levens.",
          answer: "drama"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het ongeluk plaats?",
        options: [
          "In een park",
          "Op een boerderij",
          "In een middeleeuwse toren",
          "In een winkelcentrum"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdstad van Italië?",
        options: [
          "Parijs",
          "Rome",
          "Londen",
          "Berlijn"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'verongelukken'?",
        options: [
          "Vallen en zich pijn doen",
          "Omkomen bij een ongeluk",
          "Verliezen in een wedstrijd",
          "Iets verkeerds doen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De bouwvakker overleed tijdens de reddingsactie.",
        isTrue: false
      },
      {
        statement: "Rome is een stad in Italië.",
        isTrue: true
      },
      {
        statement: "Er zijn dit jaar minder arbeidsongevallen in Italië.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Rebellen blokkeren brandstof voor hoofdstad Mali",
    topicNumber: 1,
    article: {
      title: "Rebellen blokkeren brandstof voor hoofdstad Mali",
      summary: "Rebellen in Mali blokkeren de brandstof voor de hoofdstad. Daardoor kan de stad niet goed functioneren. De rebellen hopen dat de bevolking in opstand komt tegen het leger."
    },
    vocabulary: {
      words: [
        {
          word: "blokkeren",
          definition: "iets tegenhouden of stoppen",
          sentence: "De rebellen willen de toevoer van brandstof ___ om de stad onder druk te zetten.",
          answer: "blokkeren"
        },
        {
          word: "brandstof",
          definition: "wat je nodig hebt om machines of voertuigen te laten werken",
          sentence: "Zonder ___ kunnen auto's en generatoren niet werken.",
          answer: "brandstof"
        },
        {
          word: "leger",
          definition: "een groep mensen die een land verdedigt en onder controle houdt",
          sentence: "Het ___ van Mali probeert de rebellen te stoppen.",
          answer: "leger"
        },
        {
          word: "opstand",
          definition: "een situatie waarin veel mensen tegen de macht in actie komen",
          sentence: "De rebellen hopen dat er een ___ uitbreekt tegen het leger.",
          answer: "opstand"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De rebellen hopen dat er een ___ uitbreekt tegen het leger.",
          answer: "opstand"
        },
        {
          sentence: "Zonder ___ kunnen auto's en generatoren niet werken.",
          answer: "brandstof"
        },
        {
          sentence: "De rebellen willen de toevoer van brandstof ___ om de stad onder druk te zetten.",
          answer: "blokkeren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom blokkeren de rebellen de brandstof?",
        options: [
          "Om de economie te versterken",
          "Om de bevolking aan hun kant te krijgen",
          "Om de stad te helpen groeien",
          "Om de macht van het leger te vergroten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het gevolg van de brandstofblokkade?",
        options: [
          "De stad wordt sterker en rijker",
          "De stad kan niet normaal functioneren",
          "De bevolking is blij en tevreden",
          "Het leger krijgt meer steun van de bevolking"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoop van de rebellen?",
        options: [
          "Dat de bevolking de rebellen gaat helpen",
          "Dat het leger de rebellen verslaat",
          "Dat de stad nog meer brandstof krijgt",
          "Dat de bevolking de rebellen gaat haten"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De rebunnen blokkeren de brandstof omdat ze de stad willen helpen.",
        isTrue: false
      },
      {
        statement: "De rebellen hopen dat de bevolking in opstand komt tegen het leger.",
        isTrue: true
      },
      {
        statement: "Het leger van Mali ondersteunt de rebellen bij hun acties.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Madeleine Fonteyne, 100 jaar",
    topicNumber: 1,
    article: {
      title: "Madeleine Fonteyne, 100 jaar",
      summary: "Geboren in 1924, overleden op 29/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Madeleine",
          definition: "een vrouwelijke voornaam",
          sentence: "___ was een bekende schrijfster.",
          answer: "Madeleine"
        },
        {
          word: "Fonteyne",
          definition: "een achternaam",
          sentence: "De familie ___ is van Belgische oorsprong.",
          answer: "Fonteyne"
        },
        {
          word: "geboren",
          definition: "het begin van het leven",
          sentence: "Ze werd ___ in 1924.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Ze is ___ op 29 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De familie ___ is van Belgische oorsprong.",
          answer: "Fonteyne"
        },
        {
          sentence: "___ was een bekende schrijfster.",
          answer: "Madeleine"
        },
        {
          sentence: "Ze werd ___ in 1924.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Madeleine Fonteyne geboren?",
        options: [
          "1920",
          "1924",
          "1928",
          "1930"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is Madeleine Fonteyne vooral bekend om?",
        options: [
          "Als schrijfster",
          "Als zangeres",
          "Als schilder",
          "Als danseres"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd Madeleine Fonteyne?",
        options: [
          "90 jaar",
          "99 jaar",
          "100 jaar",
          "101 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Madeleine Fonteyne werd 100 jaar oud.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne was een Franse schrijfster.",
        isTrue: false
      },
      {
        statement: "Madeleine Fonteyne stierf in oktober 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Antoon Devogelaere, 98 jaar",
    topicNumber: 1,
    article: {
      title: "Antoon Devogelaere, 98 jaar",
      summary: "Hij is geboren in 1927 en overleden op 31 oktober 2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "geboren zijn betekent dat je op een bepaalde dag bent geboren",
          sentence: "Zijn moeder werd ___ in 1920.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "overleden zijn betekent dat je niet meer leeft",
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wanneer is Antoon Devogelaere geboren?",
        options: [
          "In 1927",
          "In 1930",
          "In 1925",
          "In 1928"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Antoon Devogelaere toen hij overleed?",
        options: [
          "98 jaar",
          "100 jaar",
          "95 jaar",
          "102 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Antoon Devogelaere?",
        options: [
          "31 oktober 2025",
          "31 oktober 2024",
          "1 november 2025",
          "30 oktober 2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Antoon Devogelaere is geboren in 1927.",
        isTrue: true
      },
      {
        statement: "Antoon Devogelaere overleed in 2020.",
        isTrue: false
      },
      {
        statement: "Antoon Devogelaere werd 98 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Organisaties verliezen subsidies voor onderwijs",
    topicNumber: 1,
    article: {
      title: "Organisaties verliezen subsidies voor onderwijs",
      summary: "Twee organisaties die armoede in het onderwijs bestrijden, verliezen hun subsidies van de Vlaamse overheid. “Dit zet veel kinderen in de kou”, zegt Bert Smits van Stichting Robin. “De overheid snijdt in kennis en in innovatief armoedebeleid.”"
    },
    vocabulary: {
      words: [
        {
          word: "onderwijs",
          definition: "lesgeven en leren op school",
          sentence: "Kinderen hebben recht op goed ___.",
          answer: "onderwijs"
        },
        {
          word: "subsidies",
          definition: "geld van de overheid voor een doel",
          sentence: "De organisaties krijgen geen ___ meer.",
          answer: "subsidies"
        },
        {
          word: "organisatie",
          definition: "een groep die samenwerkt",
          sentence: "De ___ helpt kinderen in nood.",
          answer: "organisatie"
        },
        {
          word: "organisaties",
          definition: "groepen mensen die samenwerken",
          sentence: "De ___ werken aan onderwijs voor kinderen.",
          answer: "organisaties"
        },
        {
          word: "overheid",
          definition: "de organisatie die een land bestuurt",
          sentence: "De ___ geeft geld voor onderwijs.",
          answer: "overheid"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De organisaties krijgen geen ___ meer.",
          answer: "subsidies"
        },
        {
          sentence: "De ___ geeft geld voor onderwijs.",
          answer: "overheid"
        },
        {
          sentence: "De ___ helpt kinderen in nood.",
          answer: "organisatie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom verliezen de organisaties hun subsidies?",
        options: [
          "Ze werken niet hard genoeg",
          "De overheid heeft minder geld",
          "Ze helpen geen kinderen meer",
          "Ze zijn verhuisd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het gevolg voor de kinderen?",
        options: [
          "Ze krijgen geen les meer",
          "Ze verliezen hun speelgoed",
          "Ze krijgen geen hulp meer tegen armoede",
          "Ze gaan naar een andere school"
        ],
        correctAnswer: 3
      },
      {
        question: "Wie is Bert Smits?",
        options: [
          "Een leraar",
          "Een kind",
          "Iemand van Stichting Robin",
          "Iemand van de overheid"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De overheid geeft subsidies aan organisaties.",
        isTrue: true
      },
      {
        statement: "Kinderen hebben geen last van het verlies van subsidies.",
        isTrue: false
      },
      {
        statement: "Stichting Robin is een organisatie die helpt.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani wint burgemeestersrace New York, Democraten winnen gouverneursraces in Virginia en New Jersey",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "races",
          definition: "wedstrijden of competities",
          sentence: "De politieke ___ zijn belangrijk voor de democratie.",
          answer: "races"
        },
        {
          word: "Democraten",
          definition: "leden van de Democratische Partij in de VS",
          sentence: "De ___ hebben een meerderheid in de Senaat.",
          answer: "Democraten"
        },
        {
          word: "gouverneurs",
          definition: "hoofden van een staat of regio",
          sentence: "De ___ van Californië heeft veel macht.",
          answer: "gouverneurs"
        },
        {
          word: "Virginia",
          definition: "een staat in de Verenigde Staten",
          sentence: "___ is bekend om zijn geschiedenis.",
          answer: "Virginia"
        },
        {
          word: "winnen",
          definition: "iets halen, zoals een verkiezing of wedstrijd",
          sentence: "Hij hoopte de verkiezingen te ___.",
          answer: "winnen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De politieke ___ zijn belangrijk voor de democratie.",
          answer: "races"
        },
        {
          sentence: "De ___ van Californië heeft veel macht.",
          answer: "gouverneurs"
        },
        {
          sentence: "___ is bekend om zijn geschiedenis.",
          answer: "Virginia"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Virginia?",
        options: [
          "Richmond",
          "New York",
          "Los Angeles",
          "Chicago"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe lang is een ambtstermijn voor een Amerikaanse president?",
        options: [
          "2 jaar",
          "4 jaar",
          "6 jaar",
          "8 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke partij heeft momenteel de meerderheid in de Amerikaanse Senaat?",
        options: [
          "Democraten",
          "Republikeinen",
          "Onafhankelijken",
          "Groenen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump was de president voor Joe Biden.",
        isTrue: true
      },
      {
        statement: "Virginia is een staat in Canada.",
        isTrue: false
      },
      {
        statement: "Politieke verkiezingen worden altijd in november gehouden in de VS.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
    topicNumber: 1,
    article: {
      title: "Rome rouwt om verongelukte Roemeense bouwvakker, dit jaar al 777 doden op de werkvloer in Italië",
      summary: "Na een reddingsactie van ruim elf uur werd de Roemeense bouwvakker Octav Stroici (66) bevrijd uit een ingestorte middeleeuwse toren in hartje Rome. Kort daarna overleed hij. Het drama de talrijke dodelijke arbeidsongevallen in Italië opnieuw onder de aandacht."
    },
    vocabulary: {
      words: [
        {
          word: "arbeidsongevallen",
          definition: "ongelukken die gebeuren tijdens het werk",
          sentence: "Er waren veel ___ in Italië dit jaar.",
          answer: "arbeidsongevallen"
        },
        {
          word: "middeleeuws",
          definition: "uit de middeleeuwen, een periode in de geschiedenis",
          sentence: "De toren was van ___ oorsprong.",
          answer: "middeleeuws"
        },
        {
          word: "bouwvakker",
          definition: "iemand die in de bouw werkt",
          sentence: "De ___ werd gered uit het ingestorte gebouw.",
          answer: "bouwvakker"
        },
        {
          word: "drama",
          definition: "een ernstige of emotionele gebeurtenis, vaak met een slecht einde",
          sentence: "Het ___ trok veel aandacht van de media.",
          answer: "drama"
        },
        {
          word: "reddingsactie",
          definition: "een actie om iemand te redden uit een gevaarlijke situatie",
          sentence: "De ___ duurde meer dan elf uur.",
          answer: "reddingsactie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werd gered uit het ingestorte gebouw.",
          answer: "bouwvakker"
        },
        {
          sentence: "Er waren veel ___ in Italië dit jaar.",
          answer: "arbeidsongevallen"
        },
        {
          sentence: "De toren was van ___ oorsprong.",
          answer: "middeleeuws"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het ongeluk plaats?",
        options: [
          "In een middeleeuwse toren in Rome",
          "Op een bouwplaats in Duitsland",
          "In een ziekenhuis in Roemenië",
          "Tijdens een reddingsactie in Italië"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van een bouwvakker?",
        options: [
          "Hij werkt in de bouw",
          "Hij is een brandweerman",
          "Hij is een historicus",
          "Hij is een toerist"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de boodschap van dit artikel?",
        options: [
          "Veel arbeidsongevallen in Italië",
          "Rome is een gevaarlijke stad",
          "Roemenië heeft veel bouwvakkers",
          "De middeleeuwen zijn terug"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De bouwvakker overleed kort na zijn bevrijding.",
        isTrue: true
      },
      {
        statement: "Italië heeft dit jaar minder arbeidsongevallen dan vorig jaar.",
        isTrue: false
      },
      {
        statement: "De toren stortte in door een brand.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
    topicNumber: 1,
    article: {
      title: "Al-Qaeda-rebellen houden Malinese hoofdstad in economische wurggreep",
      summary: "In Mali staat het militaire regime onder zware druk. Al-Qaeda-strijders hebben een economische blokkade ingevoerd tegen Bamako, waardoor de stad zonder brandstof dreigt te vallen. De rebellen hopen dat er een opstand uitbreekt, zodat zij de macht kunnen grijpen."
    },
    vocabulary: {
      words: [
        {
          word: "regime",
          definition: "een regering of bestuursorgaan, vooral een autoritair regime",
          sentence: "Het militaire ___ heeft de macht in Mali.",
          answer: "regime"
        },
        {
          word: "blokkade",
          definition: "een blokkering, iets dat de doorgang belemmert",
          sentence: "De rebellen hebben een ___ opgeworpen.",
          answer: "blokkade"
        },
        {
          word: "brandstof",
          definition: "brandstof, iets dat energie levert, zoals benzine of gas",
          sentence: "Zonder ___ kan de economie niet draaien.",
          answer: "brandstof"
        },
        {
          word: "dreigt",
          definition: "iets wat waarschijnlijk gaat gebeuren, vaak iets negatiefs",
          sentence: "De stad ___ zonder brandstof te vallen.",
          answer: "dreigt"
        },
        {
          word: "macht",
          definition: "controle of autoriteit, de mogelijkheid om te controleren",
          sentence: "De rebellen willen de ___ overnemen.",
          answer: "macht"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zonder ___ kan de economie niet draaien.",
          answer: "brandstof"
        },
        {
          sentence: "De rebellen willen de ___ overnemen.",
          answer: "macht"
        },
        {
          sentence: "Het militaire ___ heeft de macht in Mali.",
          answer: "regime"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het hoofddoel van de rebellen in deze situatie?",
        options: [
          "De hoofdstad verwoesten",
          "De bevolking tegen zich in opstand laten komen",
          "De economie volledig overnemen",
          "De regering ten val brengen via een opstand"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de rol van de economische blokkade in de strategie van de rebellen?",
        options: [
          "Het is een afleidingsmanoeuvre voor een militaire aanval.",
          "Het verzwakt de stad en maakt de bevolking ontevreden, zodat ze de rebellen steunen.",
          "Het is een manier om de regering te dwingen tot overgave zonder een schot te lossen.",
          "Het is een test om te zien of de regering reageert."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de huidige toestand van de hoofdstad Bamako volgens de tekst?",
        options: [
          "Het is al volledig in handen van de rebellen.",
          "Het valt nog steeds onder het gezag van het militaire regime.",
          "Het is onbekend, de tekst noemt het niet.",
          "Het is een neutrale zone waar niemand de controle heeft."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rebellen hebben Bamako al ingenomen met hun troepen.",
        isTrue: false
      },
      {
        statement: "De economische blokkade zorgt voor tekorten in de stad.",
        isTrue: true
      },
      {
        statement: "Het militaire regime wordt gesteund door de meeste inwoners.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Madeleine Fonteyne, 100 jaar",
    topicNumber: 1,
    article: {
      title: "Madeleine Fonteyne, 100 jaar",
      summary: "Madeleine Fonteyne werd geboren in 1924 en overleed op 29 oktober 2025. Ze was 100 jaar oud."
    },
    vocabulary: {
      words: [
        {
          word: "Madeleine",
          definition: "Een vrouwelijke voornaam, oorspronkelijk Frans.",
          sentence: "___ was een bekende schrijfster.",
          answer: "Madeleine"
        },
        {
          word: "was",
          definition: "De verleden tijd van 'zijn' (to be).",
          sentence: "Hij ___ 100 jaar oud.",
          answer: "was"
        },
        {
          word: "op",
          definition: "Een voorzetsel dat vaak een datum of plaats aangeeft.",
          sentence: "De vergadering is ___ 29 oktober.",
          answer: "op"
        },
        {
          word: "werd",
          definition: "Het werkwoord 'worden' in de verleden tijd.",
          sentence: "Hij ___ geboren in 1924.",
          answer: "werd"
        },
        {
          word: "Fonteyne",
          definition: "Een achternaam, van Franse oorsprong.",
          sentence: "De familie ___ woonde in België.",
          answer: "Fonteyne"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ was een bekende schrijfster.",
          answer: "Madeleine"
        },
        {
          sentence: "Hij ___ 100 jaar oud.",
          answer: "was"
        },
        {
          sentence: "De vergadering is ___ 29 oktober.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar werd Madeleine Fonteyne geboren?",
        options: [
          "1920",
          "1924",
          "1928",
          "1930"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud werd Madeleine Fonteyne?",
        options: [
          "99 jaar",
          "100 jaar",
          "101 jaar",
          "102 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum overleed Madeleine Fonteyne?",
        options: [
          "29 september 2025",
          "29 oktober 2025",
          "30 oktober 2025",
          "31 oktober 2025"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Madeleine Fonteyne overleed op 29 oktober 2025.",
        isTrue: true
      },
      {
        statement: "Madeleine Fonteyne werd 99 jaar oud.",
        isTrue: false
      },
      {
        statement: "Madeleine Fonteyne werd geboren in 1924.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Antoon Devogelaere, 98 jaar",
    topicNumber: 1,
    article: {
      title: "Antoon Devogelaere, 98 jaar",
      summary: "Geboren in 1927, overleden op 31/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Antoon",
          definition: "een mannelijke voornaam",
          sentence: "___ is de voornaam van de overleden man.",
          answer: "Antoon"
        },
        {
          word: "Devogelaere",
          definition: "een familienaam, waarschijnlijk van Vlaamse oorsprong",
          sentence: "Zijn volledige naam is Antoon ___.",
          answer: "Devogelaere"
        },
        {
          word: "geboren",
          definition: "het begin van het leven, geboren worden",
          sentence: "Hij is ___ in 1927.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ op 31 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "een jaartal, in dit geval het jaar van overlijden",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is de voornaam van de overleden man.",
          answer: "Antoon"
        },
        {
          sentence: "Hij is ___ in 1927.",
          answer: "geboren"
        },
        {
          sentence: "Zijn volledige naam is Antoon ___.",
          answer: "Devogelaere"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Antoon Devogelaere geboren?",
        options: [
          "1925",
          "1926",
          "1927",
          "1928"
        ],
        correctAnswer: 3
      },
      {
        question: "In welke maand overleed Antoon Devogelaere?",
        options: [
          "januari",
          "februari",
          "oktober",
          "december"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud was Antoon Devogelaere toen hij overleed?",
        options: [
          "96 jaar",
          "97 jaar",
          "98 jaar",
          "99 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Antoon Devogelaere overleed in oktober.",
        isTrue: true
      },
      {
        statement: "Antoon Devogelaere werd 100 jaar oud.",
        isTrue: false
      },
      {
        statement: "Antoon Devogelaere werd geboren in 1927.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Organisaties die armoede in onderwijs bestrijden, verliezen Vlaamse subsidies",
    topicNumber: 1,
    article: {
      title: "Organisaties die armoede in onderwijs bestrijden, verliezen Vlaamse subsidies",
      summary: "Twee organisaties die armoede in het onderwijs bestrijden, verliezen hun subsidies van de Vlaamse overheid. “Dit zet veel kinderen in de kou”, zegt Bert Smits van Stichting Robin. “De overheid snijdt in kennis en in innovatief armoedebeleid.”"
    },
    vocabulary: {
      words: [
        {
          word: "verliezen",
          definition: "Iets kwijtraken wat je eerst had.",
          sentence: "Zij kunnen hun subsidie ___ door deze beslissing.",
          answer: "verliezen"
        },
        {
          word: "organisaties",
          definition: "Groepen of verenigingen die een bepaald doel hebben.",
          sentence: "Verschillende ___ werken samen aan dit project.",
          answer: "organisaties"
        },
        {
          word: "kinderen",
          definition: "Jonge personen, meestal tot een bepaalde leeftijd.",
          sentence: "De ___ hebben recht op goed onderwijs en bescherming.",
          answer: "kinderen"
        },
        {
          word: "overheid",
          definition: "De organisatie die een land of regio bestuurt, inclusief overheidsinstellingen.",
          sentence: "De ___ moet zorgen voor goede wetten en voorzieningen.",
          answer: "overheid"
        },
        {
          word: "subsidies",
          definition: "Financiële steun van de overheid voor een specifiek doel.",
          sentence: "Organisaties vragen ___ aan om hun werk mogelijk te maken.",
          answer: "subsidies"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ moet zorgen voor goede wetten en voorzieningen.",
          answer: "overheid"
        },
        {
          sentence: "Zij kunnen hun subsidie ___ door deze beslissing.",
          answer: "verliezen"
        },
        {
          sentence: "De ___ hebben recht op goed onderwijs en bescherming.",
          answer: "kinderen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom verliezen de organisaties hun subsidies?",
        options: [
          "Omdat ze hun doel niet bereikten",
          "Door bezuinigingen van de overheid",
          "Omdat ze te veel winst maakten",
          "Omdat ze geen nieuwe projecten startten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van het verlies van subsidies voor de organisaties?",
        options: [
          "Ze kunnen geen nieuwe medewerkers aannemen",
          "Ze moeten hun werk sterk verminderen of stoppen",
          "Ze krijgen meer steun van vrijwilligers",
          "Ze kunnen zich focussen op andere projecten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat zegt Bert Smits over deze situatie?",
        options: [
          "Hij is blij met de beslissing",
          "Hij vindt het een goede zaak",
          "Hij noemt het een probleem voor kinderen",
          "Hij denkt dat de overheid genoeg doet"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De organisaties krijgen geen subsidies meer van de Vlaamse overheid.",
        isTrue: true
      },
      {
        statement: "Bert Smits vindt dat de overheid te veel bezuinigt op belangrijke taken.",
        isTrue: true
      },
      {
        statement: "De organisaties kunnen hun werk nu makkelijker voortzetten.",
        isTrue: false
      }
    ]
  }
];
