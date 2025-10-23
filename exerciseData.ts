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
    title: "Witte Huis krijgt nieuwe vleugel",
    topicNumber: 1,
    article: {
      title: "Witte Huis krijgt nieuwe vleugel",
      summary: "In het Witte Huis wordt een deel gesloopt. Er komt een nieuwe vleugel bij. Dat heeft de Amerikaanse president gezegd. De nieuwe vleugel wordt een grote zaal voor feesten en bijeenkomsten."
    },
    vocabulary: {
      words: [
        {
          word: "Witte",
          definition: "helder of schoon, maar hier onderdeel van de naam 'Witte Huis'",
          sentence: "Het ___ Huis is de werkplek van de president.",
          answer: "Witte"
        },
        {
          word: "Huis",
          definition: "een gebouw waar mensen in wonen",
          sentence: "Het Witte ___ is de woning van de president.",
          answer: "Huis"
        },
        {
          word: "gesloopt",
          definition: "afgebroken, kapot gemaakt",
          sentence: "Het oude gebouw werd ___ om plaats te maken voor iets nieuws.",
          answer: "gesloopt"
        },
        {
          word: "vleugel",
          definition: "een deel van een gebouw",
          sentence: "De nieuwe ___ zal gebruikt worden voor grote bijeenkomsten.",
          answer: "vleugel"
        },
        {
          word: "gezegd",
          definition: "uitgesproken, vermeld",
          sentence: "De president heeft dit zelf ___ tijdens een persconferentie.",
          answer: "gezegd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De president heeft dit zelf ___ tijdens een persconferentie.",
          answer: "gezegd"
        },
        {
          sentence: "Het Witte ___ is de woning van de president.",
          answer: "Huis"
        },
        {
          sentence: "Het oude gebouw werd ___ om plaats te maken voor iets nieuws.",
          answer: "gesloopt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er gebouwd in het Witte Huis?",
        options: [
          "Een nieuwe keuken",
          "Een nieuwe slaapkamer",
          "Een nieuwe vleugel",
          "Een nieuwe garage"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom wordt de oude vleugel gesloopt?",
        options: [
          "Omdat het te oud is",
          "Omdat de president meer ruimte wil",
          "Omdat er brand was geweest",
          "Omdat er een nieuw model is"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie heeft dit nieuws bekendgemaakt?",
        options: [
          "De koning van Engeland",
          "De president van Amerika",
          "De burgemeester van Washington",
          "De eerste dame"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De oostvleugel van het Witte Huis wordt gesloopt.",
        isTrue: true
      },
      {
        statement: "De nieuwe vleugel wordt een kleine studeerkamer.",
        isTrue: false
      },
      {
        statement: "President Trump heeft dit nieuws zelf verteld.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Hamas wil weer de baas zijn in Gaza, maar Israël laat dat niet toe",
    topicNumber: 1,
    article: {
      title: "Hamas wil weer de baas zijn in Gaza, maar Israël laat dat niet toe",
      summary: "Hamas wil weer de macht in Gaza, maar Israël probeert dat te voorkomen. Met hulp van een onduidelijk vredesplan van Donald Trump probeert Hamas zijn oude positie terug te krijgen. Israël kan voorlopig alleen toekijken hoe het milities, bendes en critici met geweld wegduwt."
    },
    vocabulary: {
      words: [
        {
          word: "baas",
          definition: "iemand die de leiding heeft",
          sentence: "De ___ bepaalt wat er gebeurt.",
          answer: "baas"
        },
        {
          word: "macht",
          definition: "kracht om iets te doen of te bepalen",
          sentence: "Hij heeft veel ___ in deze organisatie.",
          answer: "macht"
        },
        {
          word: "milities",
          definition: "groepen gewapende mensen, vaak niet officieel",
          sentence: "De ___ vochten tegen het leger.",
          answer: "milities"
        },
        {
          word: "bendes",
          definition: "groepen criminelen die samenwerken",
          sentence: "De ___ overvallen winkels en huizen.",
          answer: "bendes"
        },
        {
          word: "vredesplan",
          definition: "een plan om vrede te bereiken, vaak door onderhandeling",
          sentence: "Het ___ werd ondertekend door beide partijen.",
          answer: "vredesplan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ vochten tegen het leger.",
          answer: "milities"
        },
        {
          sentence: "Het ___ werd ondertekend door beide partijen.",
          answer: "vredesplan"
        },
        {
          sentence: "De ___ bepaalt wat er gebeurt.",
          answer: "baas"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wil Hamas opnieuw doen in Gaza?",
        options: [
          "De baas zijn",
          "Niets doen",
          "Samenzweren met Israël",
          "Vrede sluiten"
        ],
        correctAnswer: 0
      },
      {
        question: "Hoe reageert Israël op de acties van Hamas?",
        options: [
          "Het doet niets en kijkt toe",
          "Het valt aan met milities",
          "Het ondersteunt Hamas",
          "Het accepteert het vredesplan"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg van het vredesplan?",
        options: [
          "Hamas wordt sterker",
          "Israël valt aan",
          "Israël wordt zwakker",
          "Gaza wordt onafhankelijk"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "Hamas probeert opnieuw de macht in Gaza te grijpen.",
        isTrue: true
      },
      {
        statement: "Israël steunt Hamas in deze poging.",
        isTrue: false
      },
      {
        statement: "Het vredesplan van Donald Trump is erg duidelijk voor beide partijen.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Vervuiling in de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
    topicNumber: 1,
    article: {
      title: "Vervuiling in de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
      summary: "Al sinds eind juli is bekend dat de Maas vervuild wordt met een schimmeldodend middel. Maar de bron is nog steeds niet bekend. Zelfs de Nederlandse ambassadeur bemoeit zich met deze zaak."
    },
    vocabulary: {
      words: [
        {
          word: "Vervuiling",
          definition: "Als iets vies of giftig wordt gemaakt, bijvoorbeeld water of lucht.",
          sentence: "De fabriek veroorzaakte veel ___ in de rivier.",
          answer: "vervuiling"
        },
        {
          word: "Mysterie",
          definition: "Iets dat onbekend of geheim is en niet meteen duidelijk is.",
          sentence: "Waarom hij vertrok, bleef een ___ voor iedereen.",
          answer: "mysterie"
        },
        {
          word: "Ambassadeur",
          definition: "Een persoon die zijn land vertegenwoordigt in een ander land.",
          sentence: "De ___ van Frankrijk woonde de bijeenkomst bij.",
          answer: "ambassadeur"
        },
        {
          word: "Mengt",
          definition: "Iets actief betrekken of ermee bemoeien.",
          sentence: "Hij ___ zich in de discussie, ook al kent hij de feiten niet.",
          answer: "mengt"
        },
        {
          word: "Bekend",
          definition: "Iets of iemand waarvan je informatie hebt en die je kent.",
          sentence: "Het is ___ dat hij vaak te laat komt.",
          answer: "bekend"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Waarom hij vertrok, bleef een ___ voor iedereen.",
          answer: "mysterie"
        },
        {
          sentence: "De ___ van Frankrijk woonde de bijeenkomst bij.",
          answer: "ambassadeur"
        },
        {
          sentence: "Hij ___ zich in de discussie, ook al kent hij de feiten niet.",
          answer: "mengt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste oorzaak van de vervuiling in de Maas?",
        options: [
          "Industrieel afval",
          "Landbouwchemicaliën",
          "Onbekende bron",
          "Huishoudelijk afval"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de Nederlandse ambassadeur in deze kwestie?",
        options: [
          "Geen rol",
          "Ondersteunt de onderzoeken",
          "Vertoont desinteresse",
          "Leidt de onderzoeken"
        ],
        correctAnswer: 1
      },
      {
        question: "Sinds wanneer is de vervuiling van de Maas bekend?",
        options: [
          "Sinds januari 2023",
          "Sinds juli 2023",
          "Sinds december 2022",
          "Sinds mei 2023"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De bron van de vervuiling in de Maas is nog steeds niet bekend.",
        isTrue: true
      },
      {
        statement: "De Nederlandse ambassadeur heeft zich niet met de zaak bemoeid.",
        isTrue: false
      },
      {
        statement: "De vervuiling werd veroorzaakt door een schimmeldodend middel.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Ronsenaars maken zich zorgen over hoge PFAS-waarden in bloed",
    topicNumber: 1,
    article: {
      title: "Ronsenaars maken zich zorgen over hoge PFAS-waarden in bloed",
      summary: "Steeds meer inwoners van Ronse laten hun bloed onderzoeken op PFAS en krijgen hoge waarden. Het stadsbestuur wil een groot bloedonderzoek. Ondertussen spelen kinderen op vervuilde grond."
    },
    vocabulary: {
      words: [
        {
          word: "Ronsenaars",
          definition: "Mensen die in de stad Ronse wonen",
          sentence: "De ___ maken zich zorgen over PFAS in hun bloed.",
          answer: "Ronsenaars"
        },
        {
          word: "PFAS",
          definition: "Een groep van chemische stoffen die schadelijk zijn voor de gezondheid",
          sentence: "Er zitten te hoge ___ waarden in het bloed van de Ronsenaars.",
          answer: "PFAS"
        },
        {
          word: "bloed",
          definition: "De rode vloeistof die door je lichaam stroomt",
          sentence: "Ze laten hun ___ testen op PFAS-waarden.",
          answer: "bloed"
        },
        {
          word: "stadsbestuur",
          definition: "De groep mensen die de stad bestuurt",
          sentence: "Het ___ wil een groot onderzoek doen.",
          answer: "stadsbestuur"
        },
        {
          word: "kinderen",
          definition: "Jonge mensen, meestal onder de 18 jaar",
          sentence: "De ___ spelen op de vervuilde grond.",
          answer: "kinderen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ wil een groot onderzoek doen.",
          answer: "stadsbestuur"
        },
        {
          sentence: "Ze laten hun ___ testen op PFAS-waarden.",
          answer: "bloed"
        },
        {
          sentence: "De ___ maken zich zorgen over PFAS in hun bloed.",
          answer: "Ronsenaars"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is PFAS?",
        options: [
          "Een soort medicijn",
          "Een chemische stof",
          "Een soort plant",
          "Een dier"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wil het stadsbestuur doen?",
        options: [
          "Niets",
          "De stad evacueren",
          "Een groot bloedonderzoek organiseren",
          "Meer PFAS gebruiken"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar spelen de kinderen?",
        options: [
          "In een park",
          "Op vervuilde grond",
          "Binnen in huis",
          "In een museum"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "PFAS is goed voor de gezondheid.",
        isTrue: false
      },
      {
        statement: "Het stadsbestuur wil een groot onderzoek doen.",
        isTrue: true
      },
      {
        statement: "Kunnen kinderen veilig spelen op de vervuilde grond?",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Oostvleugel Witte Huis wordt nu toch volledig gesloopt voor bouw nieuwe balzaal: “Dit is Trumps presidentschap in één foto”",
    topicNumber: 1,
    article: {
      title: "Oostvleugel Witte Huis wordt nu toch volledig gesloopt voor bouw nieuwe balzaal: “Dit is Trumps presidentschap in één foto”",
      summary: "De oostvleugel van het Witte Huis wordt volledig met de grond gelijk gemaakt om plaats te maken voor Donald Trumps nieuwe balzaal. Dat heeft de Amerikaanse president woensdag gezegd."
    },
    vocabulary: {
      words: [
        {
          word: "gesloopt",
          definition: "afgebroken, verwoest",
          sentence: "Het oude gebouw werd uiteindelijk ___ om plaats te maken voor een nieuw project.",
          answer: "gesloopt"
        },
        {
          word: "balzaal",
          definition: "een grote zaal die gebruikt wordt voor feesten en dansfeesten",
          sentence: "Het koninklijk paleis heeft een grote ___ waar galadiners worden gehouden.",
          answer: "balzaal"
        },
        {
          word: "presidentschap",
          definition: "de periode waarin iemand president is",
          sentence: "Zijn ___ werd gekenmerkt door vele controverses.",
          answer: "presidentschap"
        },
        {
          word: "oostvleugel",
          definition: "het oostelijke deel van een gebouw",
          sentence: "De ___ van het paleis brandde volledig uit.",
          answer: "oostvleugel"
        },
        {
          word: "Witte Huis",
          definition: "de officiële residentie en werkplaats van de president van de Verenigde Staten",
          sentence: "Het ___ is gelegen in Washington D.C.",
          answer: "Witte Huis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van het paleis brandde volledig uit.",
          answer: "oostvleugel"
        },
        {
          sentence: "Het ___ is gelegen in Washington D.C.",
          answer: "Witte Huis"
        },
        {
          sentence: "Het oude gebouw werd uiteindelijk ___ om plaats te maken voor een nieuw project.",
          answer: "gesloopt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er met de oostvleugel van het Witte Huis gedaan?",
        options: [
          "Het wordt gerenoveerd",
          "Het wordt gesloopt",
          "Het wordt verplaatst",
          "Het blijft onveranderd"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom wordt de oostvleugel gesloopt volgens de tekst?",
        options: [
          "Om plaats te maken voor een nieuw kantoor",
          "Om plaats te maken voor een nieuwe balzaal",
          "Omdat het gebouw onveilig was geworden",
          "Omdat Trump niet van de oude architectuur hield"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie heeft dit besluit aangekondigd?",
        options: [
          "De Amerikaanse president",
          "De burgemeester van Washington",
          "De First Lady",
          "De minister van Binnenlandse Zaken"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "De oostvleugel van het Witte Huis wordt gerenoveerd in plaats van gesloopt.",
        isTrue: false
      },
      {
        statement: "Donald Trump heeft aangekondigd dat de oostvleugel wordt gesloopt om plaats te maken voor een nieuwe balzaal.",
        isTrue: true
      },
      {
        statement: "De oostvleugel is al gesloopt voordat Trump president werd.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Hamas probeert in Gaza het laken naar zich toe te trekken, met dank aan een vaag vredesbestand",
    topicNumber: 1,
    article: {
      title: "Hamas probeert in Gaza het laken naar zich toe te trekken, met dank aan een vaag vredesbestand",
      summary: "Geholpen door de vaagheid in het bestand dat Donald Trump opgelegd heeft, probeert Hamas zijn oude machtspositie te herwinnen. Israël kan voorlopig alleen toekijken hoe het milities, bendes en critici gewelddadig wegduwt."
    },
    vocabulary: {
      words: [
        {
          word: "vaag",
          definition: "niet duidelijk of precies",
          sentence: "De instructies waren erg ___, wat tot verwarring leidde.",
          answer: "vaag"
        },
        {
          word: "bestand",
          definition: "een bestand of verzameling van informatie",
          sentence: "Hij bewaarde het belangrijke ___ op zijn computer voor later gebruik.",
          answer: "bestand"
        },
        {
          word: "milities",
          definition: "milities, gewapende groepen van burgers",
          sentence: "De ___ namen de controle over de stad over na hevige gevechten.",
          answer: "milities"
        },
        {
          word: "bendes",
          definition: "criminele groepen of bendes",
          sentence: "De politie arresteerde verschillende ___ die betrokken waren bij de illegale handel.",
          answer: "bendes"
        },
        {
          word: "wegduwt",
          definition: "duwen of verwijderen, vaak met kracht",
          sentence: "Hij probeerde de indringer te ___ van zijn eigendom.",
          answer: "wegduwt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij probeerde de indringer te ___ van zijn eigendom.",
          answer: "wegduwt"
        },
        {
          sentence: "De politie arresteerde verschillende ___ die betrokken waren bij de illegale handel.",
          answer: "bendes"
        },
        {
          sentence: "De ___ namen de controle over de stad over na hevige gevechten.",
          answer: "milities"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is Hamas in het voordeel door het vredesbestand?",
        options: [
          "Omdat het bestand specifiek is",
          "Omdat het bestand vaag is en ruimte biedt",
          "Omdat Israël het bestand steunt",
          "Omdat het bestand niet bestaat"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg van de situatie voor Israël?",
        options: [
          "Israël kan direct ingrijpen",
          "Israël kan alleen toekijken",
          "Israël verliest grondgebied",
          "Israël wordt gesteund door de VN"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe reageert Hamas op de situatie?",
        options: [
          "Het accepteert de situatie",
          "Het probeert de controle terug te winnen",
          "Het valt andere landen aan",
          "Het negeert de situatie volledig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het vredesbestand is opgelegd door Donald Trump.",
        isTrue: true
      },
      {
        statement: "Hamas heeft als enige doel om Israël te vernietigen.",
        isTrue: false
      },
      {
        statement: "Israël kan op dit moment alleen toekijken.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
    topicNumber: 1,
    article: {
      title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
      summary: "Al van eind juli weten we dat de Maas vervuild wordt met een schimmeldodend middel. Maar nog steeds is de bron niet bekend. Zelfs de Nederlandse ambassadeur liet zich in met de zaak."
    },
    vocabulary: {
      words: [
        {
          word: "Vervuiling",
          definition: "De aanwezigheid van schadelijke of ongewenste stoffen in het milieu",
          sentence: "De industriële ___ heeft geleid tot een verslechtering van de waterkwaliteit.",
          answer: "vervuiling"
        },
        {
          word: "Midden",
          definition: "Een term met meerdere betekenissen; hier gebruikt in de context 'in het midden van' of 'centraal in'",
          sentence: "De stad ligt ___ in een dichtbevolkte regio.",
          answer: "midden"
        },
        {
          word: "Bron",
          definition: "De oorsprong of oorzaak van iets; in deze context, de oorsprong van de vervuiling",
          sentence: "Ondanks onderzoek blijft de exacte ___ van het lek onbekend.",
          answer: "bron"
        },
        {
          word: "Ambassadeur",
          definition: "Een officiële vertegenwoordiger van een land in een ander land",
          sentence: "De ___ heeft een ontmoeting met de minister van Milieu.",
          answer: "ambassadeur"
        },
        {
          word: "Zaak",
          definition: "Een zaak of situatie; vaak gebruikt in formele of juridische context",
          sentence: "De ___ zal worden behandeld door het Hooggerechtshof.",
          answer: "zaak"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De industriële ___ heeft geleid tot een verslechtering van de waterkwaliteit.",
          answer: "vervuiling"
        },
        {
          sentence: "De ___ heeft een ontmoeting met de minister van Milieu.",
          answer: "ambassadeur"
        },
        {
          sentence: "De stad ligt ___ in een dichtbevolkte regio.",
          answer: "midden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de voornaamste oorzaak van de vervuiling in de Maas?",
        options: [
          "Industrieel afval",
          "Landbouwchemicaliën",
          "Een onbekende bron",
          "Stedelijk rioolwater"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke functie heeft de Nederlandse ambassadeur in deze context?",
        options: [
          "Hij onderzoekt de vervuiling",
          "Hij bemiddelt in het conflict",
          "Hij is verantwoordelijk voor de vervuiling",
          "Hij negeert de situatie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de houding van de Nederlandse overheid ten opzichte van deze kwestie?",
        options: [
          "Ze negeert het volledig",
          "Ze werkt samen met andere landen",
          "Ze accepteert alle verantwoordelijkheid",
          "Ze ontkent enige betrokkenheid"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De vervuiling van de Maas is al volledig opgehelderd.",
        isTrue: false
      },
      {
        statement: "De Nederlandse ambassadeur is betrokken bij de zaak.",
        isTrue: true
      },
      {
        statement: "De bron van de vervuiling is een industriële lekkage.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Ronsenaars ontredderd over hoge PFAS-waarden in bloed: 'Eerst dachten we dat onze kinderen geen risico liepen: hoe kan dit nu?'",
    topicNumber: 1,
    article: {
      title: "Ronsenaars ontredderd over hoge PFAS-waarden in bloed: 'Eerst dachten we dat onze kinderen geen risico liepen: hoe kan dit nu?'",
      summary: "Steeds meer Ronsenaars laten hun bloed op PFAS-waarden testen en krijgen verontrustend hoge resultaten terug. Het stadsbestuur zit met de handen in het haar en wil een grootschalig bloedonderzoek. 'De grond rond de beek moet gesaneerd worden, maar intussen spelen scouts vrolijk rond op vergiftigde grond.'"
    },
    vocabulary: {
      words: [
        {
          word: "ontredderd",
          definition: "In verwarring, overstuur, niet meer weten wat te doen",
          sentence: "De bewoners waren ___ door het onverwachte nieuws over de PFAS-waarden.",
          answer: "ontredderd"
        },
        {
          word: "gesaneerd",
          definition: "Gereinigd, vrijgemaakt van schadelijke stoffen of verontreiniging",
          sentence: "De grond moet grondig worden ___ om het weer veilig te maken.",
          answer: "gesaneerd"
        },
        {
          word: "vrolijk",
          definition: "Blij, opgewekt, met plezier",
          sentence: "Ondanks de zorgen, probeerden ze ___ verder te gaan met hun dagelijkse activiteiten.",
          answer: "vrolijk"
        },
        {
          word: "vergiftigde",
          definition: "Vergiftigd, vol gifstoffen die schadelijk zijn",
          sentence: "Ze besefte niet dat ze op een stuk grond aan het spelen was dat was ___ met chemicaliën.",
          answer: "vergiftigde"
        },
        {
          word: "verontreinigd",
          definition: "Vervuild, niet meer puur of schoon, vaak door chemische stoffen",
          sentence: "De bodem was zo ___ dat er niets meer kon groeien.",
          answer: "verontreinigd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze besefte niet dat ze op een stuk grond aan het spelen was dat was ___ met chemicaliën.",
          answer: "vergiftigde"
        },
        {
          sentence: "De bodem was zo ___ dat er niets meer kon groeien.",
          answer: "verontreinigd"
        },
        {
          sentence: "De bewoners waren ___ door het onverwachte nieuws over de PFAS-waarden.",
          answer: "ontredderd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn de inwoners van Ronse zo bezorgd over hun bloedtestresultaten?",
        options: [
          "Omdat ze een feest plannen",
          "Omdat ze hoge PFAS-waarden ontvingen",
          "Omdat ze een nieuwe sport ontdekten",
          "Omdat ze te veel gefrituurd voedsel aten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de reactie van het stadsbestuur op de situatie?",
        options: [
          "Ze organiseren een festival",
          "Ze overwegen een grootschalig bloedonderzoek",
          "Ze negeren de problemen",
          "Ze verhuizen naar een andere stad"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar wordt de grond rond de beek genoemd?",
        options: [
          "Gezond en veilig",
          "Volledig steriel",
          "Vrij van alle chemicaliën",
          "Vervuild met PFAS en andere stoffen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De scouts die op de grond spelen, zijn zich bewust van de PFAS-verontreiniging.",
        isTrue: false
      },
      {
        statement: "Het stadsbestuur heeft meteen actie ondernomen door een grootschalig bloedonderzoek te starten.",
        isTrue: true
      },
      {
        statement: "De bewoners van Ronse waren niet verrast door de testresultaten, omdat ze altijd al vermoedden dat er iets mis was.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Witte Huis krijgt nieuwe balzaal",
    topicNumber: 1,
    article: {
      title: "Witte Huis krijgt nieuwe balzaal",
      summary: "Het Witte Huis is het huis van de president van de Verenigde Staten. Er komt een nieuwe balzaal in het Witte Huis. De oostvleugel wordt afgebroken. President Trump heeft dit gezegd."
    },
    vocabulary: {
      words: [
        {
          word: "Witte",
          definition: "helder of doorzichtig, ook een kleur",
          sentence: "Sneeuw is ___ en koud.",
          answer: "Witte"
        },
        {
          word: "Huis",
          definition: "een gebouw waar mensen in wonen",
          sentence: "Mijn ___ staat in Amsterdam.",
          answer: "Huis"
        },
        {
          word: "balzaal",
          definition: "een grote zaal waar mensen kunnen dansen",
          sentence: "Op het feest was er een grote ___ voor dansen.",
          answer: "balzaal"
        },
        {
          word: "president",
          definition: "de leider van een land",
          sentence: "De ___ van de Verenigde Staten woont in het Witte Huis.",
          answer: "president"
        },
        {
          word: "gezegd",
          definition: "het verleden deelwoord van zeggen, wat betekent dat je iets met woorden uitdrukt",
          sentence: "Hij heeft ___ dat hij morgen komt.",
          answer: "gezegd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Op het feest was er een grote ___ voor dansen.",
          answer: "balzaal"
        },
        {
          sentence: "Hij heeft ___ dat hij morgen komt.",
          answer: "gezegd"
        },
        {
          sentence: "Mijn ___ staat in Amsterdam.",
          answer: "Huis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar is het Witte Huis?",
        options: [
          "In Nederland",
          "In Amerika",
          "In China",
          "In Japan"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie woont in het Witte Huis?",
        options: [
          "De minister",
          "De koning",
          "De president",
          "De leraar"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurt er met de oostvleugel?",
        options: [
          "Het wordt geverfd",
          "Het wordt verkocht",
          "Het wordt afgebroken",
          "Het wordt groter gemaakt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Witte Huis is in Nederland.",
        isTrue: false
      },
      {
        statement: "De president woont in het Witte Huis.",
        isTrue: true
      },
      {
        statement: "De oostvleugel wordt groter gemaakt.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Hamas probeert macht terug te krijgen in Gaza",
    topicNumber: 1,
    article: {
      title: "Hamas probeert macht terug te krijgen in Gaza",
      summary: "Met hulp van een vaag vredesplan van Donald Trump probeert Hamas opnieuw de macht te krijgen in Gaza. Israël kan voorlopig alleen toekijken hoe Hamas gewelddadig optreedt tegen milities, bendes en critici."
    },
    vocabulary: {
      words: [
        {
          word: "macht",
          definition: "kracht of controle over iets",
          sentence: "Hamas wil de ___ in Gaza hebben.",
          answer: "macht"
        },
        {
          word: "plan",
          definition: "een idee of methode om iets te doen",
          sentence: "Het vredes___ is nog niet duidelijk.",
          answer: "plan"
        },
        {
          word: "optreden",
          definition: "handelen of iets doen, vaak in een moeilijke situatie",
          sentence: "De politie moet ___ tegen criminelen.",
          answer: "optreden"
        },
        {
          word: "krijgen",
          definition: "iets ontvangen of verkrijgen",
          sentence: "Hij wil zijn boek terug ___.",
          answer: "krijgen"
        },
        {
          word: "tegen",
          definition: "in oppositie of tegenover iets",
          sentence: "Hij is ___ het plan.",
          answer: "tegen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hamas wil de ___ in Gaza hebben.",
          answer: "macht"
        },
        {
          sentence: "Hij is ___ het plan.",
          answer: "tegen"
        },
        {
          sentence: "De politie moet ___ tegen criminelen.",
          answer: "optreden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Hamas de macht in Gaza?",
        options: [
          "Omdat het daar veel geld heeft",
          "Omdat het daar populair is",
          "Om de bevolking te helpen",
          "Om andere groepen te controleren"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is het resultaat van het vredesplan van Donald Trump voor Hamas?",
        options: [
          "Hamas krijgt meer geld",
          "Hamas wordt populairder",
          "Hamas kan makkelijker de macht grijpen",
          "Hamas moet zich overgeven"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe reageert Israël op de situatie in Gaza?",
        options: [
          "Het stuurt meer soldaten",
          "Het doet niets en kijkt toe",
          "Het onderhandelt met Hamas",
          "Het steunt andere groepen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Hamas probeert de macht in Gaza te krijgen met geweld.",
        isTrue: true
      },
      {
        statement: "Het vredesplan van Donald Trump is heel duidelijk voor iedereen.",
        isTrue: false
      },
      {
        statement: "Israël helpt Hamas om de macht te krijgen in Gaza.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
    topicNumber: 1,
    article: {
      title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
      summary: "Al van eind juli weten we dat de Maas vervuild wordt met een schimmeldodend middel. Maar nog steeds is de bron niet bekend. Zelfs de Nederlandse ambassadeur liet zich in met de zaak."
    },
    vocabulary: {
      words: [
        {
          word: "Vervuiling",
          definition: "Als iets vies of giftig wordt gemaakt.",
          sentence: "De fabriek veroorzaakt veel vervuiling in de rivier.",
          answer: "Vervuiling"
        },
        {
          word: "Mysterie",
          definition: "Iets dat niet bekend is of moeilijk te begrijpen.",
          sentence: "Waarom hij vertrok is nog een mysterie voor ons.",
          answer: "Mysterie"
        },
        {
          word: "Ambassadeur",
          definition: "Een persoon die zijn land vertegenwoordigt in een ander land.",
          sentence: "De ambassadeur van Frankrijk bezocht ons land.",
          answer: "Ambassadeur"
        },
        {
          word: "Mengt",
          definition: "Iets door elkaar halen of erbij betrekken.",
          sentence: "Hij mengt zich altijd in gesprekken die hem niet aangaan.",
          answer: "Mengt"
        },
        {
          word: "Schimmeldodend",
          definition: "Iets dat schimmels doodt.",
          sentence: "Dit schimmeldodend middel is niet goed voor het water.",
          answer: "Schimmeldodend"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De fabriek veroorzaakt veel vervuiling in de rivier.",
          answer: "Vervuiling"
        },
        {
          sentence: "Waarom hij vertrok is nog een mysterie voor ons.",
          answer: "Mysterie"
        },
        {
          sentence: "Hij mengt zich altijd in gesprekken die hem niet aangaan.",
          answer: "Mengt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als de Maas vervuild is?",
        options: [
          "De Maas is erg schoon",
          "De Maas is vuil en gevaarlijk",
          "De Maas is bevroren",
          "De Maas is ondiep"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een schimmeldodend middel?",
        options: [
          "Een middel dat schimmels eet",
          "Een middel dat schimmels doodmaakt",
          "Een middel dat schimmels kweekt",
          "Een middel dat niets met schimmels doet"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doet de Nederlandse ambassadeur?",
        options: [
          "Hij gaat op vakantie",
          "Hij maakt zich druk om de zaak",
          "Hij negeert de zaak",
          "Hij verhuist naar een ander land"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De bron van de vervuiling is al bekend.",
        isTrue: false
      },
      {
        statement: "Een ambassadeur vertegenwoordigt zijn land in een ander land.",
        isTrue: true
      },
      {
        statement: "Schimmels kunnen gevaarlijk zijn voor de gezondheid.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Ronsenaars maken zich zorgen over PFAS in bloed",
    topicNumber: 1,
    article: {
      title: "Ronsenaars maken zich zorgen over PFAS in bloed",
      summary: "Steeds meer mensen in Ronse laten hun bloed testen op PFAS en krijgen hoge waarden. Het stadsbestuur wil een groot bloedonderzoek doen. Ondertussen spelen kinderen op grond met PFAS."
    },
    vocabulary: {
      words: [
        {
          word: "bloed",
          definition: "de rode vloeistof die door je lichaam stroomt",
          sentence: "De dokter onderzoekt het ___ van de patiënt.",
          answer: "bloed"
        },
        {
          word: "testen",
          definition: "controleren of iets goed of slecht is",
          sentence: "De arts wil het bloed ___ op PFAS.",
          answer: "testen"
        },
        {
          word: "hoge",
          definition: "veel of sterk, niet laag",
          sentence: "De temperatuur was erg ___ in de zomer.",
          answer: "hoge"
        },
        {
          word: "bestuur",
          definition: "de groep mensen die de leiding heeft",
          sentence: "Het ___ van de stad moet een beslissing nemen.",
          answer: "bestuur"
        },
        {
          word: "spelen",
          definition: "leuke dingen doen voor plezier",
          sentence: "Kinderen willen graag buiten ___ in de tuin.",
          answer: "spelen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Kinderen willen graag buiten ___ in de tuin.",
          answer: "spelen"
        },
        {
          sentence: "De dokter onderzoekt het ___ van de patiënt.",
          answer: "bloed"
        },
        {
          sentence: "Het ___ van de stad moet een beslissing nemen.",
          answer: "bestuur"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat het artikel over?",
        options: [
          "Het weer in België",
          "De gezondheid van mensen in Ronse",
          "De nieuwe speeltuin in Ronse",
          "De prijs van brood"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wil het stadsbestuur doen?",
        options: [
          "Niets",
          "Meer bomen planten",
          "Een groot bloedonderzoek houden",
          "Meer speeltuinen bouwen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar zijn de kinderen aan het spelen?",
        options: [
          "Op verontreinigde grond",
          "In een museum",
          "Op school",
          "Thuis"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "Het bloed van de mensen in Ronse is getest en is veilig.",
        isTrue: false
      },
      {
        statement: "Het stadsbestuur van Ronse wil een groot bloedonderzoek doen.",
        isTrue: true
      },
      {
        statement: "Kinderen spelen op schone grond zonder PFAS.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Witte Huis krijgt nieuwe vleugel",
    topicNumber: 1,
    article: {
      title: "Witte Huis krijgt nieuwe vleugel",
      summary: "De oostvleugel van het Witte Huis wordt volledig afgebroken. Er komt een nieuwe vleugel voor in de plaats. President Trump heeft dit plan goedgekeurd. De werkzaamheden zijn onmiddellijk begonnen."
    },
    vocabulary: {
      words: [
        {
          word: "afgebroken",
          definition: "gesloopt, verwijderd of weggehaald",
          sentence: "Het oude gebouw werd volledig ___ en vervangen door een modern gebouw.",
          answer: "afgebroken"
        },
        {
          word: "vleugel",
          definition: "een deel van een gebouw, vaak met een eigen functie",
          sentence: "Het nieuwe ziekenhuis heeft een speciale ___ voor kinderafdeling.",
          answer: "vleugel"
        },
        {
          word: "goedgekeurd",
          definition: "officieel akkoord, goedgekeurd",
          sentence: "Het bouwplan is door de gemeente ___ en kan nu starten.",
          answer: "goedgekeurd"
        },
        {
          word: "Witte",
          definition: "een kleur, tegenover zwart",
          sentence: "Hij droeg een ___ overhemd met een donkere das.",
          answer: "Witte"
        },
        {
          word: "Huis",
          definition: "een gebouw om in te wonen, woning",
          sentence: "Het nieuwe ___ heeft vijf slaapkamers en een grote tuin.",
          answer: "Huis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het oude gebouw werd volledig ___ en vervangen door een modern gebouw.",
          answer: "afgebroken"
        },
        {
          sentence: "Hij droeg een ___ overhemd met een donkere das.",
          answer: "Witte"
        },
        {
          sentence: "Het nieuwe ziekenhuis heeft een speciale ___ voor kinderafdeling.",
          answer: "vleugel"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt er met de oostvleugel van het Witte Huis gedaan?",
        options: [
          "Het wordt gerenoveerd",
          "Het wordt volledig afgebroken",
          "Het wordt uitgebreid",
          "Het wordt verplaatst"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de reden voor deze actie volgens het artikel?",
        options: [
          "Er is geen specifieke reden vermeld",
          "Om plaats te maken voor een nieuw gebouw",
          "Omdat het gebouw verouderd is",
          "Vanwege veiligheidsredenen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie heeft deze beslissing goedgekeurd?",
        options: [
          "De gemeente",
          "President Trump",
          "De architect",
          "De burgemeester"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De oostvleugel van het Witte Huis wordt gerenoveerd in plaats van volledig afgebroken.",
        isTrue: false
      },
      {
        statement: "President Trump heeft het plan goedgekeurd om de oostvleugel af te breken.",
        isTrue: true
      },
      {
        statement: "De werkzaamheden om de oostvleugel af te breken zijn nog niet begonnen.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Hamas probeert opnieuw de macht te grijpen in Gaza",
    topicNumber: 1,
    article: {
      title: "Hamas probeert opnieuw de macht te grijpen in Gaza",
      summary: "Met hulp van een vaag vredesbestand van Donald Trump, probeert Hamas zijn oude machtspositie te herwinnen. Israël kan voorlopig alleen toekijken hoe het milities, bendes en critici gewelddadig wegduwt."
    },
    vocabulary: {
      words: [
        {
          word: "machtspositie",
          definition: "De positie waarin iemand macht heeft of controle uitoefent",
          sentence: "In een conflict willen groepen vaak de ___ veroveren.",
          answer: "machtspositie"
        },
        {
          word: "vredesbestand",
          definition: "Een overeenkomst of regeling die vrede moet bewaren",
          sentence: "Een ___ kan helpen om geweld te stoppen, maar soms werkt het niet.",
          answer: "vredesbestand"
        },
        {
          word: "milities",
          definition: "Groepen gewapende mensen die vaak onofficieel vechten",
          sentence: "Sommige ___ vechten voor een bepaalde regio of ideaal.",
          answer: "milities"
        },
        {
          word: "wegduwt",
          definition: "Iets of iemand ergens vandaan duwen, vaak met kracht",
          sentence: "Een sterke natie kan een kleinere groep ___, maar dat lost niet alles op.",
          answer: "wegduwt"
        },
        {
          word: "laken",
          description: "Een oudere of formele term voor een bedoeken; hier figuurlijk gebruikt voor macht of controle",
          sentence: "In onderhandelingen probeert elke partij het ___ naar zich toe te trekken.",
          answer: "laken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "In een conflict willen groepen vaak de ___ veroveren.",
          answer: "machtspositie"
        },
        {
          sentence: "Een sterke natie kan een kleinere groep ___, maar dat lost niet alles op.",
          answer: "wegduwt"
        },
        {
          sentence: "Sommige ___ vechten voor een bepaalde regio of ideaal.",
          answer: "milities"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een 'vredesbestand'?",
        options: [
          "Een soort wapen",
          "Een overeenkomst om het geweld te stoppen",
          "Een internationaal verdrag",
          "Een feestelijke bijeenkomst"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'de macht herwinnen'?",
        options: [
          "De macht verliezen",
          "De macht opnieuw krijgen",
          "De macht overdragen",
          "De macht negeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat zijn 'milities'?",
        options: [
          "Militaire eenheden",
          "Onofficiële gewapende groepen",
          "Politieke partijen",
          "Sportteams"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Een vredesbestand zorgt altijd voor permanente vrede.",
        isTrue: false
      },
      {
        statement: "Milities kunnen bijdragen aan onrust in een regio.",
        isTrue: true
      },
      {
        statement: "Het wegduwen van groepen lost de onderliggende problemen niet op.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
    topicNumber: 1,
    article: {
      title: "Vervuiling van de Maas blijft een mysterie, Nederlandse ambassadeur mengt zich",
      summary: "Al van eind juli weten we dat de Maas vervuild wordt met een schimmeldodend middel. Maar nog steeds is de bron niet bekend. Zelfs de Nederlandse ambassadeur liet zich in met de zaak."
    },
    vocabulary: {
      words: [
        {
          word: "maatregel",
          definition: "iets wat je doet om een probleem op te lossen",
          sentence: "De regering nam een belangrijke ___ om de vervuiling te stoppen.",
          answer: "maatregel"
        },
        {
          word: "veroorlaken",
          definition: "iets dat de oorzaak is van iets, bijvoorbeeld een probleem",
          sentence: "Industrieel afval kan ___ dat rivieren vervuild raken.",
          answer: "veroorlaken"
        },
        {
          word: "onderzoeken",
          definition: "proberen meer te weten te komen over iets, door het te bestuderen",
          sentence: "Wetenschappers willen de waterkwaliteit ___ om deze te verbeteren.",
          answer: "onderzoeken"
        },
        {
          word: "samenwerken",
          definition: "samen met anderen werken aan een gemeenschappelijk doel",
          sentence: "Verschillende landen moeten ___ om grensoverschrijdende vervuiling aan te pakken.",
          answer: "samenwerken"
        },
        {
          word: "aanpakken",
          definition: "iets actief doen om een probleem op te lossen",
          sentence: "De overheid moet de crisis ___ voordat het erger wordt.",
          answer: "aanpakken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De overheid moet de crisis ___ voordat het erger wordt.",
          answer: "aanpakken"
        },
        {
          sentence: "Industrieel afval kan ___ dat rivieren vervuild raken.",
          answer: "veroorlaken"
        },
        {
          sentence: "Verschillende landen moeten ___ om grensoverschrijdende vervuiling aan te pakken.",
          answer: "samenwerken"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een van de oorzaken van de vervuiling in de Maas?",
        options: [
          "Industrieel afval",
          "Natuurlijke sedimenten",
          "Overmatige regenval",
          "Geen van bovenstaande"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het hoofddoel van het onderzoek naar de Maas?",
        options: [
          "De vervuiling stoppen",
          "De bron van de vervuiling vinden",
          "De Maas volledig reinigen",
          "Toerisme bevorderen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de Nederlandse ambassadeur in deze kwestie?",
        options: [
          "Hij leidt het onderzoek",
          "Hij ondersteunt de samenwerking",
          "Hij negeert de situatie",
          "Hij maakt de vervuiling erger"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De bron van de vervuiling in de Maas is al bekend.",
        isTrue: false
      },
      {
        statement: "Nederland werkt alleen om de Maas te zuiveren.",
        isTrue: false
      },
      {
        statement: "Internationale samenwerking is betrokken bij deze kwestie.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Ronsenaars ontredderd over hoge PFAS-waarden in bloed: Eerst dachten zij dat hun kinderen geen risico liepen",
    topicNumber: 1,
    article: {
      title: "Ronsenaars ontredderd over hoge PFAS-waarden in bloed: Eerst dachten zij dat hun kinderen geen risico liepen",
      summary: "Steeds meer Ronsenaars laten hun bloed op PFAS-waarden testen en krijgen verontrustend hoge resultaten terug. Het stadsbestuur zit met de handen in het haar en wil een grootschalig bloedonderzoek. De grond rond de beek moet gesaneerd worden, maar intussen spelen scouts vrolijk rond op vergiftigde grond."
    },
    vocabulary: {
      words: [
        {
          word: "ontredderd",
          definition: "in verwarring, niet weten wat te doen",
          sentence: "Na het ontslag voelde ze zich helemaal ___ en wist niet wat haar volgende stap moest zijn.",
          answer: "ontredderd"
        },
        {
          word: "risico",
          definition: "gevaar of kans op iets negatiefs",
          sentence: "Roken brengt een groot gezondheids___ met zich mee.",
          answer: "risico"
        },
        {
          word: "vergiftigde",
          definition: "vergiftigd, vergift is binnengekregen",
          sentence: "De ___ grond maakte het onmogelijk om er groenten te verbouwen.",
          answer: "vergiftigde"
        },
        {
          word: "gesaneerd",
          definition: "schoon en vrijgemaakt van vervuiling",
          sentence: "Na de sanering was de bodem volledig ___ en veilig voor gebruik.",
          answer: "gesaneerd"
        },
        {
          word: "grootschalig",
          definition: "op grote schaal, met veel deelnemers of gebieden",
          sentence: "De overheid startte een ___ onderzoek naar de waterkwaliteit in de regio.",
          answer: "grootschalig"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Roken brengt een groot gezondheids___ met zich mee.",
          answer: "risico"
        },
        {
          sentence: "De overheid startte een ___ onderzoek naar de waterkwaliteit in de regio.",
          answer: "grootschalig"
        },
        {
          sentence: "Na het ontslag voelde ze zich helemaal ___ en wist niet wat haar volgende stap moest zijn.",
          answer: "ontredderd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als de grond 'gesaneerd' moet worden?",
        options: [
          "Het moet schoongemaakt worden",
          "Het moet bewaterd worden",
          "Het moet bemest worden",
          "Het moet bebouwd worden"
        ],
        correctAnswer: 0
      },
      {
        question: "Waarom zijn de Ronsenaars ontredderd volgens de tekst?",
        options: [
          "Omdat hun kinderen ziek werden",
          "Omdat ze niet wisten dat er een risico was",
          "Omdat de grond al gesaneerd was",
          "Omdat de scouts niet meer mochten spelen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Scouts spelen op giftige grond",
          "Bloedonderzoeken tonen hoge PFAS-waarden",
          "Het stadsbestuur weet het niet meer",
          "De gemeente wil de beek saneren"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Ronsenaars zijn blij met de testresultaten.",
        isTrue: false
      },
      {
        statement: "Het stadsbestuur onderneemt actie door een groot onderzoek te starten.",
        isTrue: true
      },
      {
        statement: "Scouts spelen op de vergiftigde grond, wat als een veilige situatie wordt beschouwd.",
        isTrue: false
      }
    ]
  }
];
