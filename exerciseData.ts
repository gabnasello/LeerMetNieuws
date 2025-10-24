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
    title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
    topicNumber: 1,
    article: {
      title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "politie",
          definition: "De mensen die de wet handhaven en voor veiligheid zorgen.",
          sentence: "De ___ kwam snel naar het protest.",
          answer: "politie"
        },
        {
          word: "aan",
          definition: "Het voorzetsel dat richting of doel aangeeft.",
          sentence: "Hij schreef een brief ___ de directeur.",
          answer: "aan"
        },
        {
          word: "klaagt",
          definition: "Iets aanklagen of een klacht indienen.",
          sentence: "Hij ___ de politie aan vanwege onterechte arrestatie.",
          answer: "klaagt"
        },
        {
          word: "na",
          definition: "Na een bepaalde tijd of gebeurtenis.",
          sentence: "___ de vakantie begon het nieuwe schooljaar.",
          answer: "Na"
        },
        {
          word: "muziek",
          definition: "Klanken en tonen die samen muziek vormen.",
          sentence: "De ___ maakte iedereen vrolijk.",
          answer: "muziek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ kwam snel naar het protest.",
          answer: "politie"
        },
        {
          sentence: "Hij ___ de politie aan vanwege onterechte arrestatie.",
          answer: "klaagt"
        },
        {
          sentence: "De ___ maakte iedereen vrolijk.",
          answer: "muziek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een protest tegen politie",
          "Een nieuwe film",
          "Een man die klaagt",
          "Een muziekstuk"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is de rol van de politie in de tekst?",
        options: [
          "Ze zijn degenen die worden aangeklaagd",
          "Ze spelen een instrument",
          "Ze arresteren iemand",
          "Ze dansen op de muziek"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat voor soort muziek wordt genoemd?",
        options: [
          "Rockmuziek",
          "Jazzmuziek",
          "Muziek van Star Wars",
          "Klassieke muziek"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De man klaagt de politie aan omdat hij werd gearresteerd.",
        isTrue: true
      },
      {
        statement: "De muziek van Star Wars werd gespeeld tijdens het protest.",
        isTrue: true
      },
      {
        statement: "Donald Trump wordt genoemd in de tekst.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Argentijnse verkiezingen bepalen toekomst president Milei",
    topicNumber: 1,
    article: {
      title: "Argentijnse verkiezingen bepalen toekomst president Milei",
      summary: "Argentinië houdt de adem in. Van de parlementsverkiezingen zondag hangt af of de excentrieke president Javier Milei zijn ultraliberale hervormingen een nieuwe impuls kan geven, met steun van de VS. Maar de slabakkende economie en tal van schandalen doen de president tanen."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "De leider van een land",
          sentence: "De ___ van Argentinië heet Javier Milei.",
          answer: "president"
        },
        {
          word: "verkiezingen",
          definition: "Het kiezen van nieuwe leiders door te stemmen",
          sentence: "Op zondag zijn er ___ in Argentinië.",
          answer: "verkiezingen"
        },
        {
          word: "regering",
          definition: "De groep mensen die een land bestuurt",
          sentence: "De ___ van Argentinië heeft veel problemen.",
          answer: "regering"
        },
        {
          word: "steun",
          definition: "Hulp of ondersteuning",
          sentence: "De president krijgt internationale ___ voor zijn plannen.",
          answer: "steun"
        },
        {
          word: "scandalen",
          definition: "Slechte gebeurtenissen waarbij regels worden gebroken",
          sentence: "Er zijn veel ___ die de regering beschadigen.",
          answer: "scandalen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er zijn veel ___ die de regering beschadigen.",
          answer: "scandalen"
        },
        {
          sentence: "Op zondag zijn er ___ in Argentinië.",
          answer: "verkiezingen"
        },
        {
          sentence: "De ___ van Argentinië heet Javier Milei.",
          answer: "president"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de verkiezingen in Argentinië belangrijk?",
        options: [
          "Ze bepalen of president Milei meer macht krijgt voor zijn plannen.",
          "Ze zijn alleen voor lokale bestuurders, niet voor de president.",
          "Ze gaan alleen over economische kwesties, niet over politiek.",
          "Ze zijn vooral symbolisch en hebben weinig echte impact."
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is een gevolg van de economische problemen in Argentinië?",
        options: [
          "President Milei verliest populariteit en steun.",
          "De economie verbetert snel en iedereen is gelukkig.",
          "De Verenigde Naties sturen hulp om de economie te stabiliseren.",
          "President Milei wordt nog populairder door zijn aanpak van de crisis."
        ],
        correctAnswer: 0
      },
      {
        question: "Hoe reageert de internationale gemeenschap op president Milei's beleid?",
        options: [
          "Landen zoals de VS geven hem steun voor zijn hervormingen.",
          "Alle landen keuren zijn beleid af en stoppen met handel.",
          "De VN stuurt troepen om de regering over te nemen.",
          "Geen enkel land bemoeit zich met Argentinië's binnenlandse politiek."
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "President Milei van Argentinië geniet nog brede steun van de bevolking.",
        isTrue: false
      },
      {
        statement: "De verkiezingen van zondag kunnen de positie van president Milei versterken.",
        isTrue: true
      },
      {
        statement: "Scandalen en economische problemen hebben de positie van Milei verzwakt.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Als het om defensie gaat, is Europa bereid eigen regels aan te passen",
    topicNumber: 1,
    article: {
      title: "Als het om defensie gaat, is Europa bereid eigen regels aan te passen",
      summary: "Europa maakt het makkelijker om te investeren in defensie. Tijdens een Europese top stond het verbeteren van de militaire paraatheid centraal."
    },
    vocabulary: {
      words: [
        {
          word: "gaat",
          definition: "betekent 'doet' of 'is bezig met' in deze context",
          sentence: "Hij ___ van start tot finish zonder te stoppen.",
          answer: "gaat"
        },
        {
          word: "regels",
          definition: "afspraken of regels die gevolgd moeten worden",
          sentence: "In dit spel zijn er strikte ___ die gevolgd moeten worden.",
          answer: "regels"
        },
        {
          word: "Europa",
          definition: "het continent Europa, of de Europese Unie",
          sentence: "___ is een continent met veel verschillende landen en culturen.",
          answer: "Europa"
        },
        {
          word: "eigen",
          definition: "iets dat van jezelf is, persoonlijk",
          sentence: "Hij heeft zijn ___ kamer altijd netjes en schoon.",
          answer: "eigen"
        },
        {
          word: "aant",
          definition: "afkorting van 'aan het', gebruikt in informele taal",
          sentence: "Hij is aant werken aan zijn nieuwe project voor school.",
          answer: "aant"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een continent met veel verschillende landen en culturen.",
          answer: "Europa"
        },
        {
          sentence: "Hij heeft zijn ___ kamer altijd netjes en schoon.",
          answer: "eigen"
        },
        {
          sentence: "Hij ___ van start tot finish zonder te stoppen.",
          answer: "gaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'Europa is bereid eigen regels aan te passen'?",
        options: [
          "Europa wil nieuwe regels maken",
          "Europa gaat zijn bestaande regels veranderen",
          "Europa wil zijn eigen regels volgen",
          "Europa wil geen regels meer hebben"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat de tekst vooral over?",
        options: [
          "Over een sportevenement",
          "Over Europese politiek en defensie",
          "Over een Europese vakantie",
          "Over nieuwe Europese regels voor bedrijven"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom wil Europa de regels aanpassen?",
        options: [
          "Om sterker te worden in defensie",
          "Om minder regels te hebben",
          "Om andere landen te helpen",
          "Om nieuwe technologie te ontwikkelen"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "Europa wil zijn defensie sterker maken door regels aan te passen.",
        isTrue: true
      },
      {
        statement: "De tekst zegt dat Europa geen regels meer wil hebben voor defensie.",
        isTrue: false
      },
      {
        statement: "Europa is van plan om de militaire paraatheid te verbeteren.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
    topicNumber: 1,
    article: {
      title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
      summary: "De strijd tegen Russische corruptie leidt zelfs tot in het Vlinderpaleis. Op het spel staat een eerbetoon aan Sergej Magnitski en een Antwerps appartement waarvan wordt aangenomen dat het aangekocht is met geld van de beruchte fraudezaak."
    },
    vocabulary: {
      words: [
        {
          word: "strijd",
          definition: "een gevecht of conflict",
          sentence: "De politie was betrokken bij een ___ met demonstranten.",
          answer: "strijd"
        },
        {
          word: "corruptie",
          definition: "wanneer mensen in macht misbruik maken voor persoonlijk gewin",
          sentence: "De regering voert een campagne tegen ___ in de overheid.",
          answer: "corruptie"
        },
        {
          word: "aangenomen",
          definition: "verondersteld of aangenomen",
          sentence: "Het wordt ___ dat het geld uit criminele activiteiten komt.",
          answer: "aangenomen"
        },
        {
          word: "fraudezaak",
          definition: "een juridisch geval van bedrog of oplichting",
          sentence: "Hij werd gearresteerd in verband met een grote ___.",
          answer: "fraudezaak"
        },
        {
          word: "Vlinderpaleis",
          definition: "een specifiek gebouw of locatie, vaak met een bijnaam",
          sentence: "Het ___ is een bekend gebouw in Antwerpen.",
          answer: "Vlinderpaleis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij werd gearresteerd in verband met een grote ___.",
          answer: "fraudezaak"
        },
        {
          sentence: "De regering voert een campagne tegen ___ in de overheid.",
          answer: "corruptie"
        },
        {
          sentence: "Het ___ is een bekend gebouw in Antwerpen.",
          answer: "Vlinderpaleis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het Vlinderpaleis?",
        options: [
          "Een museum in Brussel",
          "Een gebouw in Antwerpen",
          "Een park in Gent",
          "Een straat in Brugge"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Een nieuwe diersoort",
          "Internationale diplomatie",
          "Corruptie en fraude",
          "De bouw van een paleis"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie was Sergej Magnitski?",
        options: [
          "Een Russische kunstenaar",
          "Een Nederlands politicus",
          "Een Belgische politieagent",
          "Een Russische advocaat en klokkenluider"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het Vlinderpaleis is een gebouw in Antwerpen.",
        isTrue: true
      },
      {
        statement: "Sergej Magnitski was een Belgische politicus.",
        isTrue: false
      },
      {
        statement: "Het artikel beschrijft een verband tussen corruptie en een appartement in Antwerpen.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Minder mensen gaan naar de kerk",
    topicNumber: 1,
    article: {
      title: "Minder mensen gaan naar de kerk",
      summary: "Steeds minder mensen in België gaan naar de kerk. Veel minder mensen kiezen voor een kerkelijk huwelijk of begrafenis. Toch zijn er ook tekenen dat jongeren weer meer nadenken over geloof en zingeving."
    },
    vocabulary: {
      words: [
        {
          word: "kerk",
          definition: "een gebouw waar mensen samenkomen voor christelijke religieuze diensten",
          sentence: "Elke zondag gaan veel mensen naar de ___ om te bidden.",
          answer: "kerk"
        },
        {
          word: "huwelijk",
          definition: "de officiële ceremonie waarbij twee mensen met elkaar trouwen",
          sentence: "Het ___ vond plaats in een mooie tuin, niet in een kerk.",
          answer: "huwelijk"
        },
        {
          word: "begrafenis",
          definition: "een ceremonie waarbij iemand die overleden is, wordt herdacht en begraven",
          sentence: "Na de ___ ging iedereen nog iets drinken om de overledene te eren.",
          answer: "begrafenis"
        },
        {
          word: "geloof",
          definition: "het vertrouwen in iets dat je niet kunt zien of bewijzen, vaak in een god",
          sentence: "Zijn ___ is erg belangrijk voor hem, hij bidt elke dag.",
          answer: "geloof"
        },
        {
          word: "jongeren",
          definition: "mensen die nog niet volwassen zijn, vaak tussen de 12 en 18 jaar oud",
          sentence: "De ___ in onze buurt organiseren vaak een voetbaltoernooi.",
          answer: "jongeren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Elke zondag gaan veel mensen naar de ___ om te bidden.",
          answer: "kerk"
        },
        {
          sentence: "De ___ in onze buurt organiseren vaak een voetbaltoernooi.",
          answer: "jongeren"
        },
        {
          sentence: "Zijn ___ is erg belangrijk voor hem, hij bidt elke dag.",
          answer: "geloof"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is dit artikel vooral over?",
        options: [
          "Sport",
          "Kunst",
          "Religie",
          "Politiek"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er aan het veranderen volgens de tekst?",
        options: [
          "Mensen gaan minder vaak naar de kerk",
          "Mensen gaan vaker naar de kerk",
          "Mensen worden ouder",
          "Kerkgebouwen worden gesloopt"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is een teken van hoop volgens de tekst?",
        options: [
          "Meer ouderen gaan naar de kerk",
          "Mensen trouwen alleen nog in de kerk",
          "Jongeren zoeken naar zingeving",
          "Kerkdiensten worden afgeschaft"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Steeds minder mensen in België gaan naar de kerk.",
        isTrue: true
      },
      {
        statement: "Alleen oudere mensen zijn nog religieus.",
        isTrue: false
      },
      {
        statement: "Jongeren zijn helemaal niet geïnteresseerd in geloof of zingeving.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
    topicNumber: 1,
    article: {
      title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
      summary: "De PFAS-waarden in het bloed bij sommige Ronsenaars blijken vier tot acht keer hoger te liggen dan de Europese veiligheidsnorm. “Dit afdoen als te complex en niet zo gevaarlijk is onethisch”, zegt de Deense expert Philippe Grandjean."
    },
    vocabulary: {
      words: [
        {
          word: "expert",
          definition: "een deskundige of iemand die veel weet over een onderwerp",
          sentence: "De ___ gaf uitleg over de situatie.",
          answer: "expert"
        },
        {
          word: "hoge",
          definition: "groot in hoeveelheid of niveau, veel meer dan normaal",
          sentence: "Er was een ___ concentratie van de stoffen in het bloed.",
          answer: "hoge"
        },
        {
          word: "blijkt",
          definition: "wat duidelijk wordt uit de situatie of uit onderzoek",
          sentence: "Het ___ dat er veel problemen zijn.",
          answer: "blijkt"
        },
        {
          word: "veiligheidsnorm",
          definition: "een regel die zegt wat veilig is en wat niet",
          sentence: "De ___ wordt vaak opgesteld door experts.",
          answer: "veiligheidsnorm"
        },
        {
          word: "onethisch",
          definition: "niet ethisch, niet moreel correct, niet volgens de regels van goed gedrag",
          sentence: "Het is ___ om iemand opzettelijk te kwetsen.",
          answer: "onethisch"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er was een ___ concentratie van de stoffen in het bloed.",
          answer: "hoge"
        },
        {
          sentence: "Het ___ dat er veel problemen zijn.",
          answer: "blijkt"
        },
        {
          sentence: "De ___ gaf uitleg over de situatie.",
          answer: "expert"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van Philippe Grandjean in dit artikel?",
        options: [
          "Hij is een journalist",
          "Hij is de Deense expert",
          "Hij is een inwoner van Ronse",
          "Hij is de Europese voorzitter"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Over een feest in Ronse",
          "Over een sportevenement",
          "Over de PFAS-waarden in het bloed van mensen in Ronse",
          "Over een nieuwe diersoort"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de expert naar de situatie?",
        options: [
          "Hij vindt het niet belangrijk",
          "Hij noemt het onethisch om het probleem te negeren",
          "Hij vindt het een goede zaak",
          "Hij is er blij mee"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De PFAS-waarden in Ronse zijn lager dan de Europese norm.",
        isTrue: false
      },
      {
        statement: "Philippe Grandjean is de Deense expert die commentaar geeft.",
        isTrue: true
      },
      {
        statement: "Het artikel zegt dat PFAS geen effect heeft op het lichaam.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
    topicNumber: 1,
    article: {
      title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "ampt",
          definition: "een persoon die een ambt bekleedt, vaak in politieke context",
          sentence: "De minister is een belangrijk ___ in de regering.",
          answer: "ambtsdrager"
        },
        {
          word: "wereldwijd",
          definition: "over de hele wereld, op globale schaal",
          sentence: "Klimaatverandering is een ___ probleem.",
          answer: "wereldwijd"
        },
        {
          word: "veranderingen",
          definition: "processen of gebeurtenissen waarbij iets verandert",
          sentence: "De nieuwe wet zal grote ___ teweegbrengen.",
          answer: "veranderingen"
        },
        {
          word: "protest",
          definition: "een publieke uiting van afkeuring of verzet, vaak tegen beleid",
          sentence: "Het ___ werd vreedzaam gehouden.",
          answer: "protest"
        },
        {
          word: "aanklacht",
          definition: "een formele beschuldiging, vaak in juridische context",
          sentence: "Hij diende een ___ in tegen de verzekeringsmaatschappij.",
          answer: "aanklacht"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ werd vreedzaam gehouden.",
          answer: "protest"
        },
        {
          sentence: "De nieuwe wet zal grote ___ teweegbrengen.",
          answer: "veranderingen"
        },
        {
          sentence: "De minister is een belangrijk ___ in de regering.",
          answer: "ambtsdrager"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom klaagt de man de politie aan?",
        options: [
          "Omdat hij onterecht is gearresteerd",
          "Omdat hij een vergunning had voor de muziek",
          "Omdat de politie geweld gebruikte",
          "Omdat hij de muziek te luid speelde"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdreden van de aanklacht volgens de tekst?",
        options: [
          "De politie heeft onrechtmatig gehandeld tijdens de arrestatie",
          "De man was een politieagent in burger",
          "De protesten waren tegen het Star Wars-beleid",
          "De man wilde met pensioen gaan"
        ],
        correctAnswer: 0
      },
      {
        question: "Welk aspect van de gebeurtenis kreeg internationale aandacht?",
        options: [
          "Het gebruik van Star Wars-muziek bij het protest",
          "De samenwerking tussen de politie en de demonstranten",
          "De locatie van het protest, namelijk Washington D.C.",
          "De aanklacht wegens oneigenlijk politieoptreden"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De man werd gearresteerd omdat hij Star Wars-muziek draaide in plaats van vanwege het protest zelf.",
        isTrue: false
      },
      {
        statement: "De aanklacht richt zich op het optreden van de politie tijdens de arrestatie.",
        isTrue: true
      },
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
    topicNumber: 1,
    article: {
      title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
      summary: "Argentinië houdt de adem in. Van de parlementsverkiezingen zondag hangt af of de excentrieke president Javier Milei zijn ultraliberale hervormingen een nieuwe impuls kan geven, met steun van de VS. Maar de slabakkende economie en tal van schandalen doen de president ster tanen."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "Een proces waarbij mensen stemmen om hun vertegenwoordigers of leiders te kiezen.",
          sentence: "De uitslag van de verkiezingen zal de politieke koers van het land bepalen.",
          answer: "verkiezingen"
        },
        {
          word: "economie",
          definition: "Het systeem van geld, handel en industrie van een land of regio.",
          sentence: "De economie van het land is aan het krimpen door de hoge inflatie.",
          answer: "economie"
        },
        {
          word: "president",
          definition: "Het staatshoofd van een republiek, verantwoordelijk voor het uitvoeren van wetten en het leiden van de regering.",
          sentence: "De president hield een toespraak over de nieuwe beleidsmaatregelen.",
          answer: "president"
        },
        {
          word: "parlementsverkiezingen",
          definition: "Verkiezingen waarbij de leden van het parlement worden gekozen, die wetten maken en de regering controleren.",
          sentence: "De uitslag van de parlementsverkiezingen zal de machtsverhouding in het congres bepalen.",
          answer: "parlementsverkiezingen"
        },
        {
          word: "scandale",
          definition: "Een schandaal; een gebeurtenis of situatie die schokkend of schadelijk is voor de betrokkenen.",
          sentence: "Het recente schandaal rond de minister heeft de regering in verlegenheid gebracht.",
          answer: "scandale"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De economie van het land is aan het krimpen door de hoge inflatie.",
          answer: "economie"
        },
        {
          sentence: "De uitslag van de verkiezingen zal de politieke koers van het land bepalen.",
          answer: "verkiezingen"
        },
        {
          sentence: "De uitslag van de parlementsverkiezingen zal de machtsverhouding in het congres bepalen.",
          answer: "parlementsverkiezingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste reden voor het belang van de verkiezingen in Argentinië?",
        options: [
          "Om de president te kiezen",
          "Om de economische situatie te verbeteren",
          "Om de politieke macht van Milei en zijn partij te bepalen",
          "Om internationale steun te verkrijgen"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk effect heeft de economische situatie op de populariteit van Milei?",
        options: [
          "Het versterkt zijn positie",
          "Het heeft geen effect",
          "Het verzwakt zijn positie",
          "Het maakt de bevolking rijker"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van de schandalen in de regering-Milei?",
        options: [
          "Meer internationale steun",
          "Verminderde geloofwaardigheid van de regering",
          "Vroegtijdige verkiezingen",
          "Versterking van de economie"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen in Argentinië bepalen alleen de president.",
        isTrue: false
      },
      {
        statement: "De economische situatie heeft invloed op de populariteit van de regering.",
        isTrue: true
      },
      {
        statement: "Internationale steun is voor Milei een belangrijk thema in deze context.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
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
          definition: "het geheel van militaire middelen en strategieën om een land te beschermen",
          sentence: "De defensie van het land is sterk verbeterd de laatste jaren.",
          answer: "defensie"
        },
        {
          word: "regels",
          definition: "afspraken of wetten waar men zich aan moet houden",
          sentence: "De nieuwe regels zorgen voor meer duidelijkheid in de sector.",
          answer: "regels"
        },
        {
          word: "op te rekken",
          definition: "iets flexibeler of ruimer maken",
          sentence: "Soms moet je de regels een beetje op te rekken om vooruitgang te boeken.",
          answer: "op te rekken"
        },
        {
          word: "hinderpalen",
          definition: "obstakels of belemmeringen die vooruitgang in de weg staan",
          sentence: "Er zijn nog een aantal hinderpalen voordat we kunnen starten.",
          answer: "hinderpalen"
        },
        {
          word: "tegoeden",
          definition: "rechten op of vordering op iets, vaak financieel",
          sentence: "De tegoeden van de klant zijn nog niet vrijgegeven.",
          answer: "tegoeden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe regels zorgen voor meer duidelijkheid in de sector.",
          answer: "regels"
        },
        {
          sentence: "De tegoeden van de klant zijn nog niet vrijgegeven.",
          answer: "tegoeden"
        },
        {
          sentence: "Er zijn nog een aantal hinderpalen voordat we kunnen starten.",
          answer: "hinderpalen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de kern van de Europese defensiestrategie volgens de tekst?",
        options: [
          "Volledige militarisatie",
          "Samenwerking met niet-EU-landen",
          "Het wegnemen van belemmeringen en investeren in paraatheid",
          "Vervanging van de NAVO"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'op te rekken' in deze context?",
        options: [
          "De regels volledig negeren",
          "De regels soepeler of ruimer interpreteren",
          "De regels volledig afschaffen",
          "Nieuwe regels invoeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'hinderpaal' in de tekst?",
        options: [
          "Een fysieke barrière",
          "Een wettelijke of procedurele belemmering",
          "Een militair obstakel",
          "Een economische sanctie"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Europese defensiestrategie richt zich puur op het versterken van de eigen militaire capaciteit.",
        isTrue: false
      },
      {
        statement: "Naast de kwestie van Russische tegoeden, is er ook aandacht voor het versnellen van militaire paraatheid.",
        isTrue: true
      },
      {
        statement: "De tekst suggereert dat Europa al zijn defensieproblemen heeft opgelost.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
    topicNumber: 1,
    article: {
      title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
      summary: "De strijd tegen Russische corruptie leidt zelfs tot in het Vlinderpaleis. Op het spel staat een eerbetoon aan Sergej Magnitski en een Antwerps appartement waarvan wordt aangenomen dat het aangekocht is met geld van de beruchte fraudezaak."
    },
    vocabulary: {
      words: [
        {
          word: "strijd",
          definition: "een hevige, langdurige strijd of conflict",
          sentence: "De politieke ___ in het land leidde tot grote spanningen.",
          answer: "strijd"
        },
        {
          word: "corruptie",
          definition: "het misbruik van macht voor persoonlijk gewin",
          sentence: "Wijdverspreide ___ ondermijnt het vertrouwen in de overheid.",
          answer: "corruptie"
        },
        {
          word: "aangenomen",
          definition: "verondersteld, aangenomen (van een feit of situatie)",
          sentence: "Het werd ___ dat de zaak al gesloten was.",
          answer: "aangenomen"
        },
        {
          word: "aangekocht",
          definition: "verleden deelwoord van aankopen; gekocht",
          sentence: "Hij heeft het huis ___ via een online veiling.",
          answer: "aangekocht"
        },
        {
          word: "berucht",
          definition: "berucht; bekend om slechte redenen",
          sentence: "De straat is ___ vanwege de vele inbraken.",
          answer: "berucht"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De straat is ___ vanwege de vele inbraken.",
          answer: "berucht"
        },
        {
          sentence: "Hij heeft het huis ___ via een online veiling.",
          answer: "aangekocht"
        },
        {
          sentence: "De politieke ___ in het land leidde tot grote spanningen.",
          answer: "strijd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar refereert 'Vlinderpaleis' primair naar in deze context?",
        options: [
          "Een operagebouw",
          "Een metafoor voor fragiliteit",
          "Een bekend café in Antwerpen",
          "Een type kunstwerk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "De strijd tegen corruptie is geconcentreerd in één specifiek gebouw.",
          "Antwerpen is het centrum van de wereldwijde anti-corruptie inspanningen.",
          "Een eerbetoon en een aankoop zijn symbolisch voor de bredere corruptiebestrijding.",
          "Sergei Magnitski is de eigenaar van het appartement in Antwerpen."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat impliceert de tekst over de aankoop van het appartement?",
        options: [
          "Het werd officieel bevestigd door de Russische overheid.",
          "Het was een direct resultaat van de fraudezaak.",
          "Het was in handen van een onbekende magnaat.",
          "Het werd alleen aangenomen, niet bewezen."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het Vlinderpaleis is de locatie waar de corruptie plaatsvond.",
        isTrue: false
      },
      {
        statement: "De fraudezaak is direct gerelateerd aan de aankoop van het Antwerpse appartement.",
        isTrue: true
      },
      {
        statement: "Sergei Magnitski is de eigenaar van het appartement in Antwerpen.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "De kerk in België: achteruitgang maar ook tekenen van hoop",
    topicNumber: 1,
    article: {
      title: "De kerk in België: achteruitgang maar ook tekenen van hoop",
      summary: "Amper een op de tien huwelijken is nog kerkelijk, net als bijna een op de drie uitvaarten. Ook het aantal kerkgangers is nog maar eens teruggezakt. Toch ziet godsdienstleraar Bart Willemen tekenen van hoop: 'Jongeren zoeken naar zingeving en godsdienst is weer een optie.'"
    },
    vocabulary: {
      words: [
        {
          word: "kerkelijk",
          definition: "relating to or connected with the church",
          sentence: "Het huwelijk werd op een ___ manier gevierd, met een priester die de ceremonie leidde.",
          answer: "kerkelijk"
        },
        {
          word: "uitvaart",
          definition: "a funeral or funeral ceremony",
          sentence: "De familie kwam bijeen voor de ___ van hun geliefde, waar ze afscheid konden nemen.",
          answer: "uitvaart"
        },
        {
          word: "kerkgangers",
          definition: "people who attend church services",
          sentence: "De ___ van de lokale parochie komen elke zondag samen voor de mis.",
          answer: "kerkgangers"
        },
        {
          word: "zingeving",
          definition: "the search for meaning and purpose in life",
          sentence: "Veel jongeren zijn op zoek naar ___ in hun leven, wat leidt tot een hernieuwde interesse in spiritualiteit.",
          answer: "zingeving"
        },
        {
          word: "optie",
          definition: "an option or choice",
          sentence: "Voor velen is religie geen ___ meer, maar iets dat ze actief nastreven.",
          answer: "optie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Voor velen is religie geen ___ meer, maar iets dat ze actief nastreven.",
          answer: "optie"
        },
        {
          sentence: "Veel jongeren zijn op zoek naar ___ in hun leven, wat leidt tot een hernieuwde interesse in spiritualiteit.",
          answer: "zingeving"
        },
        {
          sentence: "De familie kwam bijeen voor de ___ van hun geliefde, waar ze afscheid konden nemen.",
          answer: "uitvaart"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de huidige trend in kerkelijke huwelijken in België?",
        options: [
          "Ze zijn toegenomen",
          "Ze zijn stabiel gebleven",
          "Ze zijn sterk afgenomen",
          "Ze zijn volledig verdwenen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een van de tekenen van hoop volgens Bart Willemen?",
        options: [
          "Kerkbezoek stijgt snel",
          "Ouderen keren terug naar de kerk",
          "Jongeren zoeken zingeving",
          "Kerken sluiten massaal"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de huidige situatie van kerkgangers in België?",
        options: [
          "Hun aantal is stabiel",
          "Hun aantal neemt licht toe",
          "Hun aantal is drastisch gedaald",
          "Hun aantal is niet bekend"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het aantal kerkelijke huwelijken in België is groter dan niet-kerkelijke.",
        isTrue: false
      },
      {
        statement: "Bart Willemen ziet alleen maar achteruitgang voor de kerk in België.",
        isTrue: false
      },
      {
        statement: "Jongeren zoeken helemaal niet naar zingeving, volgens Bart Willemen.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
    topicNumber: 1,
    article: {
      title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
      summary: "De PFAS-waarden in het bloed bij sommige Ronsenaars blijken vier tot acht keer hoger te liggen dan de Europese veiligheidsnorm. “Dit afdoen als te complex en niet zo gevaarlijk is onethisch”, zegt de Deense expert Philippe Grandjean."
    },
    vocabulary: {
      words: [
        {
          word: "Ronse",
          definition: "Een stad in België, vooral bekend omwille van de PFAS-contaminatie.",
          sentence: "De stad ___ ligt in Vlaanderen en heeft te maken met PFAS-vervuiling.",
          answer: "Ronse"
        },
        {
          word: "blijkt",
          definition: "Wordt duidelijk of komt aan het licht, vaak door onderzoek.",
          sentence: "Het ___ dat de PFAS-waarden veel hoger zijn dan gedacht.",
          answer: "blijkt"
        },
        {
          word: "afdoen",
          definition: "Iets als onbelangrijk of niet serieus beschouwen.",
          sentence: "Het is niet correct om PFAS-vervuiling simpelweg ___ als een klein probleem.",
          answer: "afdoen"
        },
        {
          word: "onethisch",
          definition: "Niet in overeenstemming met morele principes of professionele ethiek.",
          sentence: "Het is ___ om gevaarlijke situaties te negeren wanneer mensen in gevaar zijn.",
          answer: "onethisch"
        },
        {
          word: "expert",
          definition: "Iemand met gespecialiseerde kennis of ervaring in een bepaald gebied.",
          sentence: "De Deense ___ heeft uitgebreid onderzoek gedaan naar PFAS.",
          answer: "expert"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De Deense ___ heeft uitgebreid onderzoek gedaan naar PFAS.",
          answer: "expert"
        },
        {
          sentence: "De stad ___ ligt in Vlaanderen en heeft te maken met PFAS-vervuiling.",
          answer: "Ronse"
        },
        {
          sentence: "Het is niet correct om PFAS-vervuiling simpelweg ___ als een klein probleem.",
          answer: "afdoen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van Philippe Grandjean in de krantenkop?",
        options: [
          "Hij is een getroffen inwoner van Ronse",
          "Hij is de burgemeester van Ronse",
          "Hij is een Deense expert op het gebied van PFAS",
          "Hij is de Europese commissaris voor Milieu"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom wordt de situatie in Ronse als 'onethisch' beschouwd?",
        options: [
          "Omdat er te weinig PFAS in het water zit",
          "Omdat bewoners niet geïnformeerd werden over de risico's",
          "Omdat de PFAS-waarden binnen de norm vallen",
          "Omdat PFAS niet schadelijk is voor de gezondheid"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een van de gevolgen van hoge PFAS-waarden zoals in Ronse?",
        options: [
          "Het zorgt voor betere drinkwaterkwaliteit",
          "Het kan leiden tot strengere Europese regelgeving",
          "Het heeft geen effect op de volksgezondheid",
          "Het verlaagt de Europese veiligheidsnorm"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De PFAS-waarden in Ronse zijn lager dan de Europese norm.",
        isTrue: false
      },
      {
        statement: "Philippe Grandjean is een Deense onderzoeker.",
        isTrue: true
      },
      {
        statement: "De tekst beschrijft dat PFAS alleen effect heeft op het bloed.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Trump heeft nieuwe problemen in Washington",
    topicNumber: 1,
    article: {
      title: "Trump heeft nieuwe problemen in Washington",
      summary: "Donald Trump heeft nieuwe problemen in de Amerikaanse politiek na nieuwe aanklachten. Dit is belangrijk voor de buitenlandse betrekkingen."
    },
    vocabulary: {
      words: [
        {
          word: "Trump",
          definition: "de familienaam van de voormalige president van de Verenigde Staten",
          sentence: "___ heeft nieuwe problemen in Washington.",
          answer: "Trump"
        },
        {
          word: "Washington",
          definition: "de hoofdstad van de Verenigde Staten",
          sentence: "Hij heeft een huis in ___.",
          answer: "Washington"
        },
        {
          word: "aanklachten",
          definition: "officiële beschuldigingen van misdrijven",
          sentence: "Hij kreeg nieuwe ___ in de rechtszaak.",
          answer: "aanklachten"
        },
        {
          word: "politiek",
          definition: "alles wat met het bestuur van een land te maken heeft",
          sentence: "Hij is actief in de ___ van het land.",
          answer: "politiek"
        },
        {
          word: "buitenland",
          definition: "andere landen, niet het eigen land",
          sentence: "Hij reist veel naar het ___ voor werk.",
          answer: "buitenland"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft een huis in ___.",
          answer: "Washington"
        },
        {
          sentence: "___ heeft nieuwe problemen in Washington.",
          answer: "Trump"
        },
        {
          sentence: "Hij is actief in de ___ van het land.",
          answer: "politiek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is de man actief in de politiek?",
        options: [
          "Duitsland",
          "Nederland",
          "Verenigde Staten",
          "China"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdstad van de Verenigde Staten?",
        options: [
          "Amsterdam",
          "Washington",
          "Brussel",
          "Parijs"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een aanklacht?",
        options: [
          "Een soort sport",
          "Een nieuwe wet",
          "Een officiële beschuldiging",
          "Een soort fruit"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de president van Nederland.",
        isTrue: false
      },
      {
        statement: "Washington is een stad in Amerika.",
        isTrue: true
      },
      {
        statement: "Politiek gaat alleen over verkiezingen.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
    topicNumber: 1,
    article: {
      title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
      summary: "Argentinië houdt de adem in. Van de parlementsverkiezingen zondag hangt af of de excentrieke president Javier Milei zijn ultraliberale hervormingen een nieuwe impuls kan geven, met steun van de VS. Maar de slabakkende economie en tal van schandalen doen de president ster tanen."
    },
    vocabulary: {
      words: [
        {
          word: "winnen",
          definition: "een spel of wedstrijd winnen, of iets krijgen wat je wil",
          sentence: "Hij hoopte de loterij te ___ en een nieuwe auto.",
          answer: "winnen"
        },
        {
          word: "tussentijdse",
          definition: "tussen twee momenten in, bijvoorbeeld tussen twee verkiezingen in",
          sentence: "De ___ verkiezingen zijn belangrijk voor de politieke partijen.",
          answer: "tussentijdse"
        },
        {
          word: "verkiezingen",
          definition: "een verkiezing is een stemming waarbij mensen beslissen wie de leider wordt",
          sentence: "Tijdens de ___ stemmen mensen op hun favoriete kandidaat.",
          answer: "verkiezingen"
        },
        {
          word: "economie",
          definition: "de economie is het systeem van geld en handel in een land",
          sentence: "De ___ van het land gaat slecht, waardoor mensen minder geld hebben.",
          answer: "economie"
        },
        {
          word: "scandale",
          definition: "een schandaal is een slechte gebeurtenis die mensen boos maakt, vaak over iets dat fout is gedaan",
          sentence: "De politicus raakte betrokken bij een groot ___ en moest aftreden.",
          answer: "scandale"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ verkiezingen zijn belangrijk voor de politieke partijen.",
          answer: "tussentijdse"
        },
        {
          sentence: "De politicus raakte betrokken bij een groot ___ en moest aftreden.",
          answer: "scandale"
        },
        {
          sentence: "De ___ van het land gaat slecht, waardoor mensen minder geld hebben.",
          answer: "economie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste reden dat president Milei hervormingen wil doorvoeren?",
        options: [
          "Om de economie te verbeteren",
          "Omdat de Verenigde Naties dat vragen",
          "Omdat hij populair wil zijn",
          "Omdat er verkiezingen aankomen"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is een gevolg van de slechte economie in Argentinië?",
        options: [
          "Mensen hebben minder geld om uit te geven",
          "President Milei wordt populairder",
          "Er zijn meer internationale handel",
          "De Verenigde Naties geven meer steun"
        ],
        correctAnswer: 0
      },
      {
        question: "Waarom zijn de tussentijdse verkiezingen belangrijk volgens de tekst?",
        options: [
          "Ze bepalen of Milei's hervormingen doorgaan",
          "Ze zijn elke week gepland",
          "Ze veroorzaken meer schandalen",
          "Ze maken de economie sterker"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "President Milei krijgt steun van de Verenigde Naties voor zijn hervormingen.",
        isTrue: false
      },
      {
        statement: "De economie van Argentinië gaat momenteel slecht, wat de regering moeilijk maakt.",
        isTrue: true
      },
      {
        statement: "President Milei is populair en heeft geen problemen volgens de tekst.",
        isTrue: false
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Europa maakt defensie sterker",
    topicNumber: 1,
    article: {
      title: "Europa maakt defensie sterker",
      summary: "Europa wil de defensie verbeteren. Er komen nieuwe regels om dit te bereiken. Er is meer geld voor defensie. Ook werken landen beter samen."
    },
    vocabulary: {
      words: [
        {
          word: "Europa",
          definition: "een werelddeel met veel landen",
          sentence: "___ is een groot gebied met veel landen.",
          answer: "Europa"
        },
        {
          word: "maakt",
          definition: "doet, creëert",
          sentence: "Hij ___ een plan voor zijn huis.",
          answer: "maakt"
        },
        {
          word: "sterker",
          definition: "meer kracht hebben",
          sentence: "Na het sporten voel ik me ___ dan daarvoor.",
          answer: "sterker"
        },
        {
          word: "wil",
          definition: "heeft als plan, wil iets doen",
          sentence: "Hij ___ graag een nieuwe auto kopen.",
          answer: "wil"
        },
        {
          word: "veranderen",
          definition: "anders maken, veranderen",
          sentence: "We moeten onze plannen ___ omdat het regent.",
          answer: "veranderen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ graag een nieuwe auto kopen.",
          answer: "wil"
        },
        {
          sentence: "___ is een groot gebied met veel landen.",
          answer: "Europa"
        },
        {
          sentence: "Hij ___ een plan voor zijn huis.",
          answer: "maakt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Europa de defensie verbeteren?",
        options: [
          "Omdat het verplicht is",
          "Omdat er een grote oorlog dreigt",
          "Omdat ze meer macht willen",
          "Omdat ze zich veiliger willen voelen"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe helpt samenwerking tussen landen?",
        options: [
          "Het maakt problemen groter",
          "Het lost problemen samen op",
          "Het zorgt voor meer werk",
          "Het is altijd moeilijk"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een voordeel van sterkere defensie?",
        options: [
          "Landen kunnen dan meer vechten",
          "Het kost meer geld voor iedereen",
          "Landen voelen zich veiliger",
          "Er is minder aandacht voor armoede"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Europa wil de defensie sterker maken door nieuwe regels.",
        isTrue: true
      },
      {
        statement: "Er is minder geld beschikbaar voor defensie na de veranderingen.",
        isTrue: false
      },
      {
        statement: "Landen werken minder samen na de veranderingen.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
    topicNumber: 1,
    article: {
      title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
      summary: "De strijd tegen Russische corruptie leidt zelfs tot in het Vlinderpaleis. Op het spel staat een eerbetoon aan Sergej Magnitski en een Antwerps appartement waarvan wordt aangenomen dat het aangekocht is met geld van de beruchte fraudezaak."
    },
    vocabulary: {
      words: [
        {
          word: "strijd",
          definition: "een hevige ruzie of een gevecht, vaak voor een belangrijk doel",
          sentence: "De twee landen voerden een lange ___ om het land.",
          answer: "strijd"
        },
        {
          word: "corruptie",
          definition: "wanneer mensen in de macht misbruik maken van hun positie, bijvoorbeeld door geld te stelen",
          sentence: "De politicus werd beschuldigd van ___ en moest aftreden.",
          answer: "corruptie"
        },
        {
          word: "aangenomen",
          definition: "verondersteld, niet zeker",
          sentence: "Het is ___ dat het gebouw al honderden jaren oud is.",
          answer: "aangenomen"
        },
        {
          word: "erfenis",
          definition: "iets wat wordt achtergelaten voor de toekomst, zoals geld of een gebouw",
          sentence: "De oude vrouw liet haar volledige ___ aan haar kleindochter.",
          answer: "erfenis"
        },
        {
          word: "fraude",
          definition: "een vorm van bedrog, vaak met geld of informatie",
          sentence: "De man pleegde ___ door valse informatie op te geven.",
          answer: "fraude"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het is ___ dat het gebouw al honderden jaren oud is.",
          answer: "aangenomen"
        },
        {
          sentence: "De oude vrouw liet haar volledige ___ aan haar kleindochter.",
          answer: "erfenis"
        },
        {
          sentence: "De twee landen voerden een lange ___ om het land.",
          answer: "strijd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel vooral over?",
        options: [
          "Over een nieuwe wet in België",
          "Over een internationaal sportevenement",
          "Over de aankoop van een appartement met gestolen geld",
          "Over de prijs van een appartement in Antwerpen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het Vlinderpaleis?",
        options: [
          "Een oud museum in Rusland",
          "Een beroemd hotel in Moskou",
          "Een gebouw in Antwerpen",
          "Een type bloem"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom is Sergej Magnitski belangrijk voor dit verhaal?",
        options: [
          "Hij is de eigenaar van het appartement",
          "Hij is een Russische sporter",
          "Hij is een symbolische figuur in de strijd tegen corruptie",
          "Hij is de president van Rusland"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Vlinderpaleis is een gebouw in Antwerpen.",
        isTrue: false
      },
      {
        statement: "Het appartement in Antwerpen is betaald met geld van de fraudezaak.",
        isTrue: true
      },
      {
        statement: "Sergej Magnitski is nog steeds in leven en woont in het Vlinderpaleis.",
        isTrue: false
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "De kerk verandert in België",
    topicNumber: 1,
    article: {
      title: "De kerk verandert in België",
      summary: "Steeds minder mensen huwen in de kerk of kiezen voor een kerkelijke uitvaart. Het aantal kerkgangers is ook gedaald. Toch ziet een godsdienstleraar tekenen van hoop: jongeren zijn op zoek naar zingeving en zien godsdienst als een optie."
    },
    vocabulary: {
      words: [
        {
          word: "kerk",
          definition: "een gebouw waar mensen samenkomen voor religieuze diensten",
          sentence: "De ___ is open op zondag voor de mis.",
          answer: "kerk"
        },
        {
          word: "huwen",
          definition: "trouwen, een huwelijk aangaan",
          sentence: "Ze ___ in de kerk met hun familie en vrienden.",
          answer: "huwen"
        },
        {
          word: "uitvaart",
          definition: "een ceremonie of dienst na iemands overlijden, vaak in een kerk",
          sentence: "De ___ werd gehouden in de parochiekerk.",
          answer: "uitvaart"
        },
        {
          word: "leraar",
          definition: "iemand die lesgeeft, bijvoorbeeld op school",
          sentence: "De godsdienst___ helpt studenten bij het leren over religie.",
          answer: "leraar"
        },
        {
          word: "optie",
          definition: "een keuze of mogelijkheid",
          sentence: "Voor veel jongeren is geloof een serieuze ___ in hun leven.",
          answer: "optie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ is open op zondag voor de mis.",
          answer: "kerk"
        },
        {
          sentence: "De godsdienst___ helpt studenten bij het leren over religie.",
          answer: "leraar"
        },
        {
          sentence: "De ___ werd gehouden in de parochiekerk.",
          answer: "uitvaart"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat dit artikel vooral over?",
        options: [
          "Koken met champignons",
          "De klimaatverandering in België",
          "Veranderingen in de kerk in België",
          "Hoe je een tuin kunt onderhouden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'uitvaart'?",
        options: [
          "Een feestmaal",
          "Een sportwedstrijd",
          "Een herdenking na een overlijden",
          "Een soort feestmuziek"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemt de auteur 'leraar'?",
        options: [
          "Omdat de persoon lesgeeft over God",
          "Omdat het een bijnaam is",
          "Omdat hij studenten helpt met hun huiswerk",
          "Omdat hij een sportcoach is"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "De kerk in België wordt steeds populairder.",
        isTrue: false
      },
      {
        statement: "Jongeren zijn helemaal niet geïnteresseerd in godsdienst.",
        isTrue: false
      },
      {
        statement: "Een leraar kan lesgeven over godsdienst.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Hoge PFAS-waarden in Ronse: wat betekent dit?",
    topicNumber: 1,
    article: {
      title: "Hoge PFAS-waarden in Ronse: wat betekent dit?",
      summary: "In Ronse zijn de PFAS-waarden in het bloed bij sommige mensen veel hoger dan de Europese norm. Dit is niet goed voor de gezondheid. Een expert uit Denemarken legt uit wat PFAS zijn en waarom we voorzichtig moeten zijn."
    },
    vocabulary: {
      words: [
        {
          word: "hoger",
          definition: "meer dan normaal of dan iets anders",
          sentence: "De temperatuur is ___ dan gisteren.",
          answer: "hoger"
        },
        {
          word: "niet",
          definition: "geen of het tegenovergestelde van ja",
          sentence: "Ik heb ___ genoeg tijd om te wachten.",
          answer: "niet"
        },
        {
          word: "goed",
          definition: "goed of positief, niet slecht",
          sentence: "Het is ___ om elke dag fruit te eten.",
          answer: "goed"
        },
        {
          word: "kunnen",
          definition: "in staat zijn om iets te doen",
          sentence: "Kinderen ___ zonder hulp oversteken?",
          answer: "kunnen"
        },
        {
          word: "moeten",
          definition: "verplicht zijn of noodzakelijk hebben",
          sentence: "We ___ op tijd vertrekken om de bus te halen.",
          answer: "moeten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik heb ___ genoeg tijd om te wachten.",
          answer: "niet"
        },
        {
          sentence: "Het is ___ om elke dag fruit te eten.",
          answer: "goed"
        },
        {
          sentence: "Kinderen ___ zonder hulp oversteken?",
          answer: "kunnen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'hoger' in de tekst?",
        options: [
          "minder",
          "hoger",
          "hetzelfde",
          "lager"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is PFAS niet goed voor de gezondheid?",
        options: [
          "Het is duur",
          "Het is moeilijk uit te spreken",
          "Het kan ziek maken",
          "Het is een soort voedsel"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat adviseert de expert?",
        options: [
          "Niets doen",
          "Meer PFAS gebruiken",
          "Meer onderzoek doen",
          "Stoppen met ademen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De PFAS-waarden in Ronse zijn voor iedereen laag.",
        isTrue: false
      },
      {
        statement: "PFAS kan schadelijk zijn voor de gezondheid.",
        isTrue: true
      },
      {
        statement: "De expert uit Denemarken zegt dat PFAS niet gevaarlijk is.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
    topicNumber: 1,
    article: {
      title: "Man klaagt politie Washington D.C. aan na arrestatie bij protest met muziek van Star Wars",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "aan",
          definition: "naar, in de richting van",
          sentence: "Hij gaf het boek ___ zijn vriend.",
          answer: "aan"
        },
        {
          word: "klaagt",
          definition: "maakt een formele klacht over, meestal over een probleem",
          sentence: "De klant ___ de winkel omdat het product defect was.",
          answer: "klaagt"
        },
        {
          word: "politie",
          definition: "de officiële organisatie die de wet handhaaft en de openbare orde bewaakt",
          sentence: "De ___ kwam snel toen we belden over het lawaaierige feest.",
          answer: "politie"
        },
        {
          word: "Washington",
          definition: "de hoofdstad van de Verenigde Staten, of de staat in het noordwesten van de VS",
          sentence: "Vorig jaar bezocht ik ___ D.C. voor een conferentie.",
          answer: "Washington"
        },
        {
          word: "protest",
          definition: "een publieke demonstratie om ongenoegen of verzet tegen iets te uiten",
          sentence: "Het ___ tegen de nieuwe wet trok duizenden mensen.",
          answer: "protest"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Vorig jaar bezocht ik ___ D.C. voor een conferentie.",
          answer: "Washington"
        },
        {
          sentence: "Hij gaf het boek ___ zijn vriend.",
          answer: "aan"
        },
        {
          sentence: "Het ___ tegen de nieuwe wet trok duizenden mensen.",
          answer: "protest"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom klaagt de man de politie aan?",
        options: [
          "Omdat hij de muziek niet mocht spelen",
          "Omdat hij onterecht is gearresteerd",
          "Omdat de politie te hardhandig was",
          "Omdat hij meer publiciteit wil"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdstad van de Verenigde Staten?",
        options: [
          "New York",
          "Los Angeles",
          "Washington D.C.",
          "Chicago"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'Star Wars' in deze context?",
        options: [
          "Een bekende filmreeks",
          "Een politieoperatie",
          "Een type muziek",
          "Een sportevenement"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De man werd gearresteerd omdat hij muziek speelde.",
        isTrue: false
      },
      {
        statement: "De protesten vonden plaats in Washington D.C.",
        isTrue: true
      },
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
    topicNumber: 1,
    article: {
      title: "Zonder winst in tussentijdse verkiezingen in Argentinië is het einde verhaal voor Milei en zijn libertaire beleid",
      summary: "Argentinië houdt de adem in. Van de parlementsverkiezingen zondag hangt af of de excentrieke president Javier Milei zijn ultraliberale hervormingen een nieuwe impuls kan geven, met steun van de VS. Maar de slabakkende economie en tal van schandalen doen de president ster tanen."
    },
    vocabulary: {
      words: [
        {
          word: "verkiezingen",
          definition: "een officiële verkiezing waarbij mensen stemmen voor hun vertegenwoordigers",
          sentence: "De uitslag van de ___ zal bepalen wie de nieuwe leider wordt.",
          answer: "verkiezingen"
        },
        {
          word: "president",
          definition: "het staatshoofd van een republiek die de regering leidt",
          sentence: "De ___ van het land hield een belangrijke toespraak over de toekomst.",
          answer: "president"
        },
        {
          word: "economie",
          definition: "het geheel van de economische activiteiten in een land of gebied",
          sentence: "De ___ van het land is sterk afhankelijk van de export van grondstoffen.",
          answer: "economie"
        },
        {
          word: "steun",
          definition: "hulp of bijstand, zowel financieel als moreel",
          sentence: "Het plan kreeg brede ___ van verschillende politieke partijen.",
          answer: "steun"
        },
        {
          word: "schandalen",
          definition: "gebeurtenissen die schokkend of schandalig zijn en vaak leiden tot publieke verontwaardiging",
          sentence: "De reeks van ___ zorgde voor veel onrust onder de bevolking.",
          answer: "schandalen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De uitslag van de ___ zal bepalen wie de nieuwe leider wordt.",
          answer: "verkiezingen"
        },
        {
          sentence: "Het plan kreeg brede ___ van verschillende politieke partijen.",
          answer: "steun"
        },
        {
          sentence: "De ___ van het land is sterk afhankelijk van de export van grondstoffen.",
          answer: "economie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat hangt er af van de uitslag van de parlementsverkiezingen in Argentinië?",
        options: [
          "Of president Milei zijn hervormingen kan doorzetten",
          "Of de economie zal verbeteren",
          "Of de VS zal ingrijpen",
          "Of er nieuwe verkiezingen komen"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom is de situatie voor president Milei volgens de tekst onzeker?",
        options: [
          "Omdat de economie slecht presteert en er schandalen zijn",
          "Omdat de VS hem niet steunt",
          "Omdat zijn partij geen meerderheid heeft",
          "Omdat de verkiezingen niet doorgaan"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg van de economische problemen in Argentinië?",
        options: [
          "President Mileis populariteit daalt",
          "De VS biedt meer steun",
          "Er komen nieuwe verkiezingen",
          "De economie herstelt snel"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De verkiezingen in Argentinië bepalen of president Milei zijn plannen kan uitvoeren.",
        isTrue: true
      },
      {
        statement: "President Milei krijgt steun van de VS, ongeacht de verkiezingsuitslag.",
        isTrue: false
      },
      {
        statement: "De economische problemen en schandalen verzwakken de positie van president Milei.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
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
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
    topicNumber: 1,
    article: {
      title: "Strijd tegen Russische corruptie leidt naar Antwerps appartement",
      summary: "De strijd tegen Russische corruptie leidt zelfs tot in het Vlinderpaleis. Op het spel staat een eerbetoon aan Sergej Magnitski en een Antwerps appartement waarvan wordt aangenomen dat het aangekocht is met geld van de beruchte fraudezaak."
    },
    vocabulary: {
      words: [
        {
          word: "strijd",
          definition: "Een conflict of gevecht tussen groepen mensen",
          sentence: "De politieke ___ in dat land duurt al jaren.",
          answer: "strijd"
        },
        {
          word: "corruptie",
          definition: "Het misbruik van macht voor persoonlijk gewin",
          sentence: "Er is veel ___ in de regering van dat land.",
          answer: "corruptie"
        },
        {
          word: "aangenomen",
          definition: "Wordt verondersteld of verondersteld",
          sentence: "Het wordt ___ dat het gebouw in de 18e eeuw is gebouwd.",
          answer: "aangenomen"
        },
        {
          word: "fraudezaak",
          definition: "Een strafrechtelijk onderzoek naar oplichting of bedrog",
          sentence: "Hij is verdacht van betrokkenheid bij een grote ___.",
          answer: "fraudezaak"
        },
        {
          word: "aangekocht",
          definition: "Gekocht, verleden tijd van aankopen",
          sentence: "Het schilderij werd ___ op een veiling.",
          answer: "aangekocht"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het schilderij werd ___ op een veiling.",
          answer: "aangekocht"
        },
        {
          sentence: "Hij is verdacht van betrokkenheid bij een grote ___.",
          answer: "fraudezaak"
        },
        {
          sentence: "De politieke ___ in dat land duurt al jaren.",
          answer: "strijd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is het appartement in Antwerpen belangrijk?",
        options: [
          "Het is een geschenk aan Sergej Magnitski.",
          "Het is gekocht met geld uit een fraudezaak.",
          "Het is een toeristische attractie.",
          "Het is een monument voor de stad Antwerpen."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het Vlinderpaleis?",
        options: [
          "Een gebouw in Antwerpen",
          "Een schilderij in een museum",
          "Een metafoor voor fragiliteit",
          "Een type gebouw in Rusland"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is de rol van Sergej Magnitski in deze context?",
        options: [
          "Hij is de eigenaar van het appartement.",
          "Hij is een slachtoffer van corruptie.",
          "Hij is een politicus die tegen corruptie vecht.",
          "Hij is een kunstenaar die over corruptie schildert."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het appartement in Antwerpen is aangekocht met geld uit de fraudezaak.",
        isTrue: true
      },
      {
        statement: "Sergej Magnitski is de eigenaar van het Vlinderpaleis.",
        isTrue: false
      },
      {
        statement: "De strijd tegen corruptie is alleen gericht op Russische officials.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "De kerk in België: achteruitgang maar ook hoop",
    topicNumber: 1,
    article: {
      title: "De kerk in België: achteruitgang maar ook hoop",
      summary: "Het aantal kerkelijke huwelijken en uitvaarten is sterk gedaald, en ook het aantal kerkgangers is verminderd. Toch ziet godsdienstleraar Bart Willemen tekenen van hoop: jongeren zoeken naar zingeving en godsdienst wordt weer een optie."
    },
    vocabulary: {
      words: [
        {
          word: "kerk",
          definition: "een gebouw waar mensen samenkomen voor religieuze diensten",
          sentence: "De ___ is een plek waar mensen samenkomen om te bidden.",
          answer: "kerk"
        },
        {
          word: "huwelijk",
          definition: "een ceremonie waarbij twee mensen met elkaar trouwen",
          sentence: "Het ___ is een feestelijke gebeurtenis waar families samenkomen.",
          answer: "huwelijk"
        },
        {
          word: "uitvaart",
          definition: "een ceremonie waarbij een overleden persoon wordt herdacht",
          sentence: "Tijdens een ___ komen mensen samen om afscheid te nemen.",
          answer: "uitvaart"
        },
        {
          word: "zingeving",
          definition: "de zoektocht naar betekenis en doel in het leven",
          sentence: "Veel mensen zoeken naar ___ in hun leven om gelukkig te zijn.",
          answer: "zingeving"
        },
        {
          word: "God",
          definition: "in veel religies, het hoogste wezen dat wordt aanbeden",
          sentence: "Sommige mensen bidden tot ___ voor steun en guidance.",
          answer: "God"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens een ___ komen mensen samen om afscheid te nemen.",
          answer: "uitvaart"
        },
        {
          sentence: "Veel mensen zoeken naar ___ in hun leven om gelukkig te zijn.",
          answer: "zingeving"
        },
        {
          sentence: "Sommige mensen bidden tot ___ voor steun en guidance.",
          answer: "God"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is het aantal kerkelijke huwelijken gedaald?",
        options: [
          "Mensen geloven niet langer in God",
          "Mensen geven de voorkeur aan een burgerlijk huwelijk",
          "Kerken zijn gesloten wegens onderhoud",
          "De pandemie heeft ceremonies beperkt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een teken van hoop volgens Bart Willemen?",
        options: [
          "Kerken worden voller tijdens feestdagen",
          "Jongeren zoeken actief naar zingeving",
          "Meer mensen bezoeken wekelijks de mis",
          "Religieuze boeken worden meer verkocht"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'uitvaart'?",
        options: [
          "Een huwelijksceremonie in de kerk",
          "Een herdenking voor iemand die overleden is",
          "Een feest voor een nieuwe baby",
          "Een religieuze feestdag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het aantal kerkelijke huwelijken is gestegen in België.",
        isTrue: false
      },
      {
        statement: "Bart Willemen ziet dat jongeren meer interesse tonen in godsdienst.",
        isTrue: true
      },
      {
        statement: "Alle kerken in België zijn gesloten vanwege achteruitgang.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
    topicNumber: 1,
    article: {
      title: "Deense expert over de hoge PFAS-waarden in Ronse: “PFAS hebben een effect op je hele lichaam”",
      summary: "De PFAS-waarden in het bloed bij sommige Ronsenaars blijken vier tot acht keer hoger te liggen dan de Europese veiligheidsnorm. “Dit afdoen als te complex en niet zo gevaarlijk is onethisch”, zegt de Deense expert Philippe Grandjean."
    },
    vocabulary: {
      words: [
        {
          word: "bloed",
          definition: "De rode vloeistof in je lichaam die zuurstof vervoert.",
          sentence: "Het onderzoek richtte zich op de concentraties in het ___.",
          answer: "bloed"
        },
        {
          word: "expert",
          definition: "Iemand die veel kennis heeft over een bepaald onderwerp.",
          sentence: "De ___ uit Denemarken gaf uitleg over de risico's.",
          answer: "expert"
        },
        {
          word: "effect",
          definition: "Het resultaat of gevolg van een actie of gebeurtenis.",
          sentence: "De stoffen kunnen een negatief ___ hebben op de gezondheid.",
          answer: "effect"
        },
        {
          word: "ethisch",
          definition: "Ethisch, moreel juist of verantwoord.",
          sentence: "Het is niet ___ om gevaarlijke situaties te negeren.",
          answer: "ethisch"
        },
        {
          word: "onderzoek",
          definition: "Een studie of onderzoek om iets te leren of te bewijzen.",
          sentence: "Het ___ toont aan dat de waarden te hoog zijn.",
          answer: "onderzoek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het is niet ___ om gevaarlijke situaties te negeren.",
          answer: "ethisch"
        },
        {
          sentence: "De stoffen kunnen een negatief ___ hebben op de gezondheid.",
          answer: "effect"
        },
        {
          sentence: "Het onderzoek richtte zich op de concentraties in het ___.",
          answer: "bloed"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom worden de PFAS-waarden in Ronse onderzocht?",
        options: [
          "Omdat er te veel PFAS in het bloed zit",
          "Omdat de stad erom vraagt",
          "Omdat de normen in Europa veranderd zijn",
          "Omdat er geen probleem is"
        ],
        correctAnswer: 0
      },
      {
        question: "Wat is de rol van Philippe Grandjean in dit artikel?",
        options: [
          "Hij is een getroffen inwoner van Ronse",
          "Hij is de Deense expert die commentaar geeft",
          "Hij is de Belgische milieuminister",
          "Hij is de arts die de testen uitvoerde"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de kern van de boodschap volgens het artikel?",
        options: [
          "PFAS zijn onschadelijk en de situatie is complex",
          "De situatie is complex, maar het is onethisch om het gevaar te negeren",
          "Ethische kwesties zijn niet belangrijk bij milieuproblemen",
          "Ronse heeft de hoogste PFAS-waarden ter wereld"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De PFAS-waarden in Ronse zijn lager dan de Europese norm.",
        isTrue: false
      },
      {
        statement: "Philippe Grandjean is de Deense expert die commentaar geeft.",
        isTrue: true
      },
      {
        statement: "Het artikel stelt dat de situatie in Ronse niet problematisch is.",
        isTrue: false
      }
    ]
  }
];
