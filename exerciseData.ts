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
    title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
    topicNumber: 1,
    article: {
      title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
      summary: "New York is niet zoals de rest van de VS. Minder dan ooit, nu in tijden van Trump met Zohran Mamdani een onervaren socialistische moslim wellicht de volgende burgemeester wordt. Tot hoop én afgrijzen van zijn eigen partijgenoten."
    },
    vocabulary: {
      words: [
        {
          word: "afgrijzen",
          definition: "Heel erg schrikken van iets",
          sentence: "Hij schrok zich ___ van het enge nieuws.",
          answer: "afgrijzen"
        },
        {
          word: "partijgenoten",
          definition: "Mensen die in dezelfde politieke partij zitten",
          sentence: "Hij werkt samen met zijn ___ aan een nieuw plan.",
          answer: "partijgenoten"
        },
        {
          word: "moslim",
          definition: "Iemand die de islamitische godsdienst volgt",
          sentence: "Een ___ gelooft in de islamitische godsdienst.",
          answer: "moslim"
        },
        {
          word: "hoop",
          definition: "De hoop dat iets goed gaat komen",
          sentence: "Ik heb veel ___ dat het goed komt.",
          answer: "hoop"
        },
        {
          word: "New York",
          definition: "Een grote stad in Amerika",
          sentence: "___ is een bekende stad in de Verenigde Staten.",
          answer: "New York"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een ___ gelooft in de islamitische godsdienst.",
          answer: "moslim"
        },
        {
          sentence: "Hij werkt samen met zijn ___ aan een nieuw plan.",
          answer: "partijgenoten"
        },
        {
          sentence: "___ is een bekende stad in de Verenigde Staten.",
          answer: "New York"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van de Verenigde Staten?",
        options: [
          "Washington D.C.",
          "New York",
          "Los Angeles",
          "Chicago"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'onervaren'?",
        options: [
          "Iemand met weinig ervaring",
          "Iemand die heel erg oud is",
          "Iemand die heel snel rent",
          "Iemand die veel geld heeft"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de religie van een moslim?",
        options: [
          "Islam",
          "Christendom",
          "Boeddhisme",
          "Hindoeïsme"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "New York is de hoofdstad van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Een moslim is iemand die de islamitische godsdienst volgt.",
        isTrue: true
      },
      {
        statement: "Zohran Mamdani is de burgemeester van New York.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: 'Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint'",
    topicNumber: 1,
    article: {
      title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: 'Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint'",
      summary: "De eerste Nederlandse regering met PVV-ministers draaide uit op een fiasco. Toch wenkt een volgende verkiezingstriomf voor Geert Wilders. Auteur Marijn Kruk schrikt niet: 'Radicaal-rechts heeft de strijd in dit land met 10-0 gewonnen.'"
    },
    vocabulary: {
      words: [
        {
          word: "radicaal",
          definition: "zeer extreem, tot het uiterste gaand",
          sentence: "Hij heeft ___ andere ideeën.",
          answer: "radicaal"
        },
        {
          word: "minister",
          definition: "een belangrijk persoon in de regering",
          sentence: "De ___ van Onderwijs geeft een toespraak.",
          answer: "minister"
        },
        {
          word: "wereld",
          definition: "alle landen en mensen samen, de aarde",
          sentence: "Hij bekijkt de ___ vanuit een ander perspectief.",
          answer: "wereld"
        },
        {
          word: "verkiezing",
          definition: "een stemming waarbij mensen kiezen wie hun vertegenwoordiger wordt",
          sentence: "De uitslag van de ___ is bekend.",
          answer: "verkiezing"
        },
        {
          word: "fiasco",
          definition: "een grote mislukking, iets dat heel fout gaat",
          sentence: "Het plan werd een ___.",
          answer: "fiasco"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het plan werd een ___.",
          answer: "fiasco"
        },
        {
          sentence: "De ___ van Onderwijs geeft een toespraak.",
          answer: "minister"
        },
        {
          sentence: "Hij heeft ___ andere ideeën.",
          answer: "radicaal"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'fiasco' in deze context?",
        options: [
          "een groot succes",
          "een complete mislukking",
          "een soort dans",
          "een nieuwe start"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar staat PVV voor?",
        options: [
          "Partij voor de Vrijheid",
          "Partij voor de Vrede",
          "Partij van de Vrijheid",
          "Partij voor de Vrijheid en Democratie"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de rol van een minister?",
        options: [
          "De regering van een land leiden",
          "Alleen wetten maken",
          "Zorgen voor sportevenementen",
          "De koning adviseren"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Geert Wilders is de minister-president van Nederland.",
        isTrue: true
      },
      {
        statement: "Een fiasco is een kleine fout zonder gevolgen.",
        isTrue: false
      },
      {
        statement: "Radicaal-rechts heeft in Nederland de verkiezingen gewonnen.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Amerikaanse diplomaat in het Midden-Oosten",
    topicNumber: 1,
    article: {
      title: "Amerikaanse diplomaat in het Midden-Oosten",
      summary: "Een Amerikaanse diplomaat werkt aan vredesgesprekken in het Midden-Oosten. Hij gebruikt zijn contacten en ervaring om partijen samen te brengen."
    },
    vocabulary: {
      words: [
        {
          word: "contacten",
          definition: "mensen die je kent en die je kunnen helpen",
          sentence: "Hij heeft goede ___ in de politieke wereld.",
          answer: "contacten"
        },
        {
          word: "samen",
          definition: "gezamenlijk, met elkaar",
          sentence: "Ze werken ___ aan een oplossing.",
          answer: "samen"
        },
        {
          word: "diplomaat",
          definition: "iemand die namens een land in het buitenland werkt",
          sentence: "De ___ reist vaak naar andere landen voor werk.",
          answer: "diplomaat"
        },
        {
          word: "partijen",
          definition: "groepen of landen die betrokken zijn bij een situatie",
          sentence: "De verschillende ___ in het conflict moeten samenwerken.",
          answer: "partijen"
        },
        {
          word: "ervaring",
          definition: "kennis en vaardigheden die je opdoet door dingen mee te maken",
          sentence: "Zijn ___ in diplomatie is erg groot.",
          answer: "ervaring"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ reist vaak naar andere landen voor werk.",
          answer: "diplomaat"
        },
        {
          sentence: "De verschillende ___ in het conflict moeten samenwerken.",
          answer: "partijen"
        },
        {
          sentence: "Zijn ___ in diplomatie is erg groot.",
          answer: "ervaring"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet de diplomaat in deze tekst?",
        options: [
          "Hij speelt voetbal",
          "Hij koopt een huis",
          "Hij werkt aan vredesgesprekken",
          "Hij reist voor zijn plezier"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is de diplomaat goed in zijn werk?",
        options: [
          "Hij is sterk",
          "Hij heeft veel contacten",
          "Hij is heel rijk",
          "Hij woont in een groot huis"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het doel van de diplomaat?",
        options: [
          "Om te winnen met voetbal",
          "Om partijen samen te brengen",
          "Om alleen te werken",
          "Om te stoppen met werken"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De diplomaat werkt alleen.",
        isTrue: false
      },
      {
        statement: "De diplomaat gebruikt zijn contacten om partijen samen te brengen.",
        isTrue: true
      },
      {
        statement: "De diplomaat wil dat partijen tegen elkaar vechten.",
        isTrue: false
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Begint de linkse revolutie in Sint-Gillis? ‘Het is ook een vorm van lifestyle’",
    topicNumber: 1,
    article: {
      title: "Begint de linkse revolutie in Sint-Gillis? ‘Het is ook een vorm van lifestyle’",
      summary: "Is extreemlinks in Brussel een gevaar voor de openbare orde, of vooral een vorm van idealistische folklore? In Sint-Gillis groeit een beweging die zijn verontwaardiging koppelt aan oude revolutionaire symboliek. ‘De kwaadheid over Gaza en het klimaat biedt vruchtbare grond voor extremisme.’"
    },
    vocabulary: {
      words: [
        {
          word: "linkse",
          definition: "betreft politieke ideeën die verandering en gelijkheid willen",
          sentence: "Sommige politieke groepen worden ___ genoemd.",
          answer: "linkse"
        },
        {
          word: "revolutie",
          definition: "een grote en snelle verandering in de maatschappij",
          sentence: "Soms is er een ___ nodig voor grote veranderingen.",
          answer: "revolutie"
        },
        {
          word: "kwaadheid",
          definition: "het gevoel van boos zijn",
          sentence: "Zijn ___ was duidelijk na het zien van het onrecht.",
          answer: "kwaadheid"
        },
        {
          word: "koppelt",
          definition: "verbindt of verbindt twee dingen met elkaar",
          sentence: "Hij ___ zijn ervaring met theorie uit boeken.",
          answer: "koppelt"
        },
        {
          word: "verontwaardiging",
          definition: "sterke gevoel van boosheid over iets onrechtvaardigs",
          sentence: "Veel mensen voelen ___ over de situatie in Gaza.",
          answer: "verontwaardiging"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige politieke groepen worden ___ genoemd.",
          answer: "linkse"
        },
        {
          sentence: "Soms is er een ___ nodig voor grote veranderingen.",
          answer: "revolutie"
        },
        {
          sentence: "Zijn ___ was duidelijk na het zien van het onrecht.",
          answer: "kwaadheid"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent ‘kwaadheid’ in deze context?",
        options: [
          "Boosheid",
          "Vrolijkheid",
          "Verdriet",
          "Verwarring"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom wordt er gesproken over ‘symboliek’ in de tekst?",
        options: [
          "Omdat het over oude symbolen gaat",
          "Omdat het over toekomstige plannen gaat",
          "Omdat het over eten en drinken gaat",
          "Omdat het over sport gaat"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een voorbeeld van ‘extremisme’?",
        options: [
          "Iemand die anderen pijn doet voor zijn ideeën",
          "Iemand die altijd lacht",
          "Iemand die goed kan dansen",
          "Iemand die veel leest"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De tekst gaat alleen over gevaar door extremisme.",
        isTrue: false
      },
      {
        statement: "Sint-Gillis is een plaats in Brussel.",
        isTrue: true
      },
      {
        statement: "De tekst suggereert dat klimaat en Gaza tot extremisme leiden.",
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
    title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
    topicNumber: 1,
    article: {
      title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
      summary: "Het Engels is oppermachtig aan de universiteit. Dat biedt kansen, maar het knelt en wringt ook. 'Zelfs op een congres over Franse vertaalwetenschap is de voertaal Engels.'"
    },
    vocabulary: {
      words: [
        {
          word: "biedt",
          definition: "geeft, aanbiedt, mogelijk maakt",
          sentence: "De nieuwe supermarkt ___ veel keuze aan de klanten.",
          answer: "biedt"
        },
        {
          word: "knelt",
          definition: "zit strak, knelt, is niet comfortabel",
          sentence: "Deze schoen ___ een beetje bij mijn tenen.",
          answer: "knelt"
        },
        {
          word: "oppermachtig",
          definition: "heel erg machtig, de baas zijn",
          sentence: "De leeuw is de ___ heerser van de savanne.",
          answer: "oppermachtig"
        },
        {
          word: "wringt",
          definition: "zit strak, schuurt, is ongemakkelijk",
          sentence: "Deze broek ___ een beetje bij mijn knieën.",
          answer: "wringt"
        },
        {
          word: "gestreden",
          definition: "gevochten, hard gewerkt voor iets",
          sentence: "De soldaten hebben lang ___ voor hun vrijheid.",
          answer: "gestreden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Deze broek ___ een beetje bij mijn knieën.",
          answer: "wringt"
        },
        {
          sentence: "Deze schoen ___ een beetje bij mijn tenen.",
          answer: "knelt"
        },
        {
          sentence: "De soldaten hebben lang ___ voor hun vrijheid.",
          answer: "gestreden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verengelsing' in deze context?",
        options: [
          "Het verbieden van Engelse woorden",
          "Het overnemen van Engelse taal en cultuur",
          "Het verliezen van een oorlog",
          "Het vieren van een Engelse feestdag"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom wordt gezegd dat 'niemand wakker ligt' van verengelsing?",
        options: [
          "Omdat het niet belangrijk genoeg is",
          "Omdat mensen te moe zijn",
          "Omdat het een geheim is",
          "Omdat het alleen in Nederland gebeurt"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een voorbeeld van 'oppermachtig' zijn?",
        options: [
          "De koning is oppermachtig in zijn land.",
          "De student is oppermachtig in de klas.",
          "De hond is oppermachtig in het park.",
          "De leraar is oppermachtig over de taal."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Verengelsing betekent dat de Engelse taal de Nederlandse taal vervangt.",
        isTrue: true
      },
      {
        statement: "Niemand ligt wakker van verengelsing omdat het geen probleem is.",
        isTrue: false
      },
      {
        statement: "Engels is de voertaal op een congres over Franse vertaalwetenschap.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
    topicNumber: 1,
    article: {
      title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
      summary: "New York is niet zoals de rest van de VS. Minder dan ooit, nu in tijden van Trump met Zohran Mamdani een onervaren socialistische moslim wellicht de volgende burgemeester wordt. Tot hoop én afgrijzen van zijn eigen partijgenoten."
    },
    vocabulary: {
      words: [
        {
          word: "burgemeester",
          definition: "De leider van een stad of gemeente.",
          sentence: "Hij wil de nieuwe ___ worden van de stad.",
          answer: "burgemeester"
        },
        {
          word: "kandidaat",
          definition: "Iemand die probeert gekozen te worden.",
          sentence: "Hij is de ___ voor de verkiezing.",
          answer: "kandidaat"
        },
        {
          word: "betaalbaar",
          definition: "Niet te duur, goedkoop genoeg.",
          sentence: "Hij wil woningen ___ maken voor iedereen.",
          answer: "betaalbaar"
        },
        {
          word: "moslim",
          definition: "Iemand die de islam volgt.",
          sentence: "Hij is een ___ en bidt elke dag.",
          answer: "moslim"
        },
        {
          word: "partijgenoten",
          definition: "Mensen die bij dezelfde politieke groep horen.",
          sentence: "Sommige ___ steunen hem niet.",
          answer: "partijgenoten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige ___ steunen hem niet.",
          answer: "partijgenoten"
        },
        {
          sentence: "Hij is de ___ voor de verkiezing.",
          answer: "kandidaat"
        },
        {
          sentence: "Hij wil woningen ___ maken voor iedereen.",
          answer: "betaalbaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wil de kandidaat doen voor New York?",
        options: [
          "Het duurder maken",
          "Het betaalbaar houden",
          "Er niets aan doen",
          "Het kleiner maken"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe voelen sommige partijgenoten over hem?",
        options: [
          "Ze zijn blij",
          "Ze zijn neutraal",
          "Ze zijn boos",
          "Ze zijn enthousiast"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is zijn religie?",
        options: [
          "Christen",
          "Boeddhist",
          "Moslim",
          "Hindoe"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "New York is hetzelfde als de rest van de VS.",
        isTrue: false
      },
      {
        statement: "Zohran Mamdani is de burgemeester van New York.",
        isTrue: false
      },
      {
        statement: "Sommige partijgenoten hebben afgrijzen van hem.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Auteur Marijn Kruk over het succes van de PVV in Nederland",
    topicNumber: 1,
    article: {
      title: "Auteur Marijn Kruk over het succes van de PVV in Nederland",
      summary: "De eerste Nederlandse regering met PVV-ministers draaide uit op een fiasco. Toch wenkt een volgende verkiezingstriomf voor Geert Wilders. Auteur Marijn Kruk schrikt niet: “Radicaal-rechts heeft de strijd in dit land met 10-0 gewonnen.”"
    },
    vocabulary: {
      words: [
        {
          word: "land",
          definition: "een gebied met een eigen regering, zoals Nederland of België",
          sentence: "Nederland is een mooi ___ om in te wonen.",
          answer: "land"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land bestuurt",
          sentence: "De ___ maakt belangrijke beslissingen voor het land.",
          answer: "regering"
        },
        {
          word: "minister",
          definition: "iemand met een hoge functie in de regering",
          sentence: "De ___ van Onderwijs bezocht onze school.",
          answer: "minister"
        },
        {
          word: "succes",
          definition: "iets dat goed gaat of goed afloopt",
          sentence: "Hij had veel ___ met zijn nieuwe baan.",
          answer: "succes"
        },
        {
          word: "verkiezing",
          definition: "een stemming om te kiezen wie de leider wordt",
          sentence: "Tijdens de ___ stemmen mensen voor hun favoriete partij.",
          answer: "verkiezing"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ maakt belangrijke beslissingen voor het land.",
          answer: "regering"
        },
        {
          sentence: "Hij had veel ___ met zijn nieuwe baan.",
          answer: "succes"
        },
        {
          sentence: "Nederland is een mooi ___ om in te wonen.",
          answer: "land"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'regering' in het Nederlands?",
        options: [
          "een soort auto",
          "de baas van een land",
          "een sportteam",
          "een soort eten"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'verkiezing'?",
        options: [
          "een feestdag",
          "een soort spel",
          "een stemming om een nieuwe leider te kiezen",
          "een soort muziek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'winnen' in deze context?",
        options: [
          "verliezen",
          "een wedstrijd winnen",
          "een boek lezen",
          "zingen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De auteur heet Marijn Kruk.",
        isTrue: true
      },
      {
        statement: "Geert Wilders is een minister in de nieuwe regering.",
        isTrue: false
      },
      {
        statement: "PVV is de naam van een politieke partij in Nederland.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Jared Kushner: Amerikaanse adviseur in het Midden-Oosten",
    topicNumber: 1,
    article: {
      title: "Jared Kushner: Amerikaanse adviseur in het Midden-Oosten",
      summary: "Jared Kushner is de schoonzoon van de Amerikaanse president Trump. Hij hielp met vredesgesprekken in het Midden-Oosten en gebruikte zijn zakelijke ervaring."
    },
    vocabulary: {
      words: [
        {
          word: "Kushner",
          definition: "Een achternaam",
          sentence: "Jared ___ is de schoonzoon van Trump.",
          answer: "Kushner"
        },
        {
          word: "Midden-Oosten",
          definition: "Een gebied op de wereld met veel landen zoals Israël en Iran",
          sentence: "Het ___ is een gebied met veel verschillende culturen.",
          answer: "Midden-Oosten"
        },
        {
          word: "Jared",
          definition: "Een mannelijke voornaam",
          sentence: "___ Kushner is de schoonzoon van Trump.",
          answer: "Jared"
        },
        {
          word: "zakelijk",
          definition: "Iets wat met geld of bedrijven te maken heeft",
          sentence: "Hij heeft een ___ plan om geld te verdienen.",
          answer: "zakelijk"
        },
        {
          word: "Trump",
          definition: "De achternaam van de voormalige Amerikaanse president",
          sentence: "___ was de president van Amerika.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ was de president van Amerika.",
          answer: "Trump"
        },
        {
          sentence: "Jared ___ is de schoonzoon van Trump.",
          answer: "Kushner"
        },
        {
          sentence: "Hij heeft een ___ plan om geld te verdienen.",
          answer: "zakelijk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van Jared Kushner in deze tekst?",
        options: [
          "Hij is een kok",
          "Hij is een leraar",
          "Hij is een adviseur voor vrede",
          "Hij is een sporter"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'schoonzoon'?",
        options: [
          "Een soort hond",
          "De man van je dochter",
          "Een soort auto",
          "Een soort fruit"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over koken",
          "Over reizen",
          "Over vredesgesprekken en een persoon",
          "Over sporten"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Jared Kushner is de schoonzoon van Trump.",
        isTrue: true
      },
      {
        statement: "Jared Kushner is een professionele voetballer.",
        isTrue: false
      },
      {
        statement: "Jared Kushner heeft ervaring met zakelijke zaken.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Begint de linkse revolutie in Sint-Gillis?",
    topicNumber: 1,
    article: {
      title: "Begint de linkse revolutie in Sint-Gillis?",
      summary: "Is extreemlinks in Brussel een gevaar voor de openbare orde, of vooral een vorm van idealistische folklore? In Sint-Gillis groeit een beweging die zijn verontwaardiging koppelt aan oude revolutionaire symboliek. De kwaadheid over Gaza en het klimaat biedt vruchtbare grond voor extremisme."
    },
    vocabulary: {
      words: [
        {
          word: "extreemlinks",
          definition: "heel erg links, radicaal",
          sentence: "De groep was ___ en wilde snel veranderen.",
          answer: "extreemlinks"
        },
        {
          word: "Sint-Gillis",
          definition: "een plaats in Brussel",
          sentence: "___ is een bekende wijk.",
          answer: "Sint-Gillis"
        },
        {
          word: "revolutie",
          definition: "een grote verandering, vaak met geweld",
          sentence: "De ___ in dat land bracht veel verandering.",
          answer: "revolutie"
        },
        {
          word: "symboliek",
          definition: "het gebruik van symbolen, beeldspraak",
          sentence: "De ___ in de kunst was mooi.",
          answer: "symboliek"
        },
        {
          word: "gevaar",
          definition: "iets dat gevaarlijk is, risico",
          sentence: "Er is een ___ voor de gezondheid.",
          answer: "gevaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ in dat land bracht veel verandering.",
          answer: "revolutie"
        },
        {
          sentence: "De groep was ___ en wilde snel veranderen.",
          answer: "extreemlinks"
        },
        {
          sentence: "De ___ in de kunst was mooi.",
          answer: "symboliek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Koken",
          "Sport",
          "Politiek",
          "Muziek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is Sint-Gillis?",
        options: [
          "Een stad",
          "Een rivier",
          "Een wijk in Brussel",
          "Een berg"
        ],
        correctAnswer: 3
      },
      {
        question: "Is extreemlinks gevaarlijk?",
        options: [
          "Ja, altijd",
          "Nee, nooit",
          "Soms, het hangt af",
          "Alleen in de winter"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Sint-Gillis is een plaats in Brussel.",
        isTrue: true
      },
      {
        statement: "Extreemlinks betekent heel rechts.",
        isTrue: false
      },
      {
        statement: "De tekst gaat over politiek.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
    topicNumber: 1,
    article: {
      title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
      summary: "Gent wil de Vlasmarkt asfalteren. Sommige mensen zijn hier niet blij mee. Tegenstanders willen de kasseien bewaren als erfgoed. Want niets is zo Gents als het vermogen om pittoresk struikelgevaar te romantiseren."
    },
    vocabulary: {
      words: [
        {
          word: "struikelgevaar",
          definition: "gevaar om te vallen of te struikelen",
          sentence: "Let op voor ___ op deze weg!",
          answer: "struikelgevaar"
        },
        {
          word: "pittoresk",
          definition: "mooi en charmant, vaak op een ouderwetse manier",
          sentence: "Het dorpje is heel ___ met zijn oude huisjes.",
          answer: "pittoresk"
        },
        {
          word: "wil",
          definition: "willen, wensen",
          sentence: "Hij ___ graag naar de film.",
          answer: "wil"
        },
        {
          word: "bewaren",
          definition: "iets bewaren, niet weggooien",
          sentence: "Ik wil deze foto's ___ in een album.",
          answer: "bewaren"
        },
        {
          word: "romantiseren",
          definition: "iets mooier of romantischer voorstellen dan het is",
          sentence: "Hij probeert het harde werk te ___ in zijn verhaal.",
          answer: "romantiseren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ graag naar de film.",
          answer: "wil"
        },
        {
          sentence: "Het dorpje is heel ___ met zijn oude huisjes.",
          answer: "pittoresk"
        },
        {
          sentence: "Hij probeert het harde werk te ___ in zijn verhaal.",
          answer: "romantiseren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Gent de Vlasmarkt asfalteren?",
        options: [
          "Omdat het mooi is",
          "Omdat het gevaarlijk is",
          "Omdat het goedkoop is",
          "Omdat niemand het gebruikt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'erfgoed' in deze tekst?",
        options: [
          "Een soort eten",
          "Een soort muziek",
          "Iets van culturele waarde uit het verleden",
          "Een soort sport"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een voorbeeld van pittoresk in de tekst?",
        options: [
          "De kasseien",
          "Een snelweg",
          "Een modern gebouw",
          "Een lege straat"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Gent wil de kasseien verwijderen omdat ze te gevaarlijk zijn.",
        isTrue: true
      },
      {
        statement: "Iedereen in Gent is blij met het asfalteren.",
        isTrue: false
      },
      {
        statement: "Kasseien kunnen gevaarlijk zijn om op te lopen.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
    topicNumber: 1,
    article: {
      title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
      summary: "Het Engels is oppermachtig aan de universiteit. Dat biedt kansen, maar het knelt en wringt ook. 'Zelfs op een congres over Franse vertaalwetenschap is de voertaal Engels.'"
    },
    vocabulary: {
      words: [
        {
          word: "gestreden",
          definition: "gevochten, hard gewerkt",
          sentence: "Hij heeft veel ___ voor zijn rechten.",
          answer: "gestreden"
        },
        {
          word: "congres",
          definition: "grote bijeenkomst voor een onderwerp",
          sentence: "Het ___ duurt drie dagen.",
          answer: "congres"
        },
        {
          word: "knelt",
          definition: "zit niet lekker, voelt niet goed",
          sentence: "Deze schoen ___.",
          answer: "knelt"
        },
        {
          word: "verengelsing",
          definition: "het gebruik van steeds meer Engelse woorden",
          sentence: "De ___ is duidelijk op deze universiteit.",
          answer: "verengelsing"
        },
        {
          word: "universiteit",
          definition: "school voor volwassenen, universiteit",
          sentence: "Hij studeert aan de ___.",
          answer: "universiteit"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ duurt drie dagen.",
          answer: "congres"
        },
        {
          sentence: "Hij studeert aan de ___.",
          answer: "universiteit"
        },
        {
          sentence: "Hij heeft veel ___ voor zijn rechten.",
          answer: "gestreden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verengelsing'?",
        options: [
          "Het gebruik van Engelse woorden",
          "Een feest in Engeland",
          "Een soort sport",
          "Een oude taal"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar staat 'kansen' voor in deze tekst?",
        options: [
          "Kansen om te winnen",
          "Kansen om te leren",
          "Kansen om te slagen",
          "Kansen om te groeien"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'congres'?",
        options: [
          "Een groot gebouw",
          "Een feest met muziek",
          "Een grote bijeenkomst over een onderwerp",
          "Een sportwedstrijd"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Verengelsing betekent dat Engels de enige taal wordt.",
        isTrue: false
      },
      {
        statement: "Een congres is een grote bijeenkomst.",
        isTrue: true
      },
      {
        statement: "Niemand geeft om verengelsing, dus het is niet erg.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
    topicNumber: 1,
    article: {
      title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
      summary: "New York is niet zoals de rest van de VS. Minder dan ooit, nu in tijden van Trump met Zohran Mamdani een onervaren socialistische moslim wellicht de volgende burgemeester wordt. Tot hoop én afgrijzen van zijn eigen partijgenoten."
    },
    vocabulary: {
      words: [
        {
          word: "betaalbaar",
          definition: "Niet te duur, goedkoop genoeg om te kunnen betalen.",
          sentence: "De woning was gelukkig ___.",
          answer: "betaalbaar"
        },
        {
          word: "kandidaat",
          definition: "Iemand die meedoet aan een verkiezing of sollicitatie.",
          sentence: "De ___ voor het burgemeesterschap heeft veel steun.",
          answer: "kandidaat"
        },
        {
          word: "socialistisch",
          definition: "Betrekking hebbend op socialisme, een politieke stroming die streeft naar gelijkheid.",
          sentence: "Hij heeft een ___ wereldbeeld.",
          answer: "socialistisch"
        },
        {
          word: "onervaren",
          definition: "Nog niet veel ervaring hebbend, nog niet geoefend.",
          sentence: "Hij was een ___ spreker.",
          answer: "onervaren"
        },
        {
          word: "moslim",
          definition: "Iemand die de islamitische religie aanhangt.",
          sentence: "Hij is een toegewijde ___.",
          answer: "moslim"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft een ___ wereldbeeld.",
          answer: "socialistisch"
        },
        {
          sentence: "Hij is een toegewijde ___.",
          answer: "moslim"
        },
        {
          sentence: "De woning was gelukkig ___.",
          answer: "betaalbaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de belangrijkste reden dat Zohran Mamdani opvalt in de New Yorkse politiek?",
        options: [
          "Hij is een socialist",
          "Hij is een moslim",
          "Hij is een onervaren kandidaat",
          "Hij komt van buiten de VS"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe reageren zijn partijgenoten op zijn kandidatuur?",
        options: [
          "Ze zijn enthousiast en ondersteunend",
          "Ze zijn neutraal en afwachtend",
          "Ze zijn afwijzend en kritisch",
          "Ze zijn hoopvol maar ook bezorgd"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de situatie in New York in vergelijking met de rest van de VS volgens de tekst?",
        options: [
          "Het is hetzelfde",
          "Het is compleet anders",
          "Het is minder representatief",
          "Het is meer progressief"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is een ervaren politicus die al lang burgemeester is van New York.",
        isTrue: false
      },
      {
        statement: "New York wordt voorgesteld als een uitzondering binnen de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "De reacties op Mamdani's kandidatuur zijn unaniem positief binnen zijn partij.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
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
    id: 15,
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
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Begint de linkse revolutie in Sint-Gillis? 'Het is ook een vorm van lifestyle'",
    topicNumber: 1,
    article: {
      title: "Begint de linkse revolutie in Sint-Gillis? 'Het is ook een vorm van lifestyle'",
      summary: "Is extreemlinks in Brussel een gevaar voor de openbare orde, of vooral een vorm van idealistische folklore? In Sint-Gillis groeit een beweging die zijn verontwaardiging koppelt aan oude revolutionaire symboliek. 'De kwaadheid over Gaza en het klimaat biedt vruchtbare grond voor extremisme.'"
    },
    vocabulary: {
      words: [
        {
          word: "koppelt",
          definition: "Verbindt of verbindt twee dingen",
          sentence: "De groep ___ hun acties aan oude idealen.",
          answer: "koppelt"
        },
        {
          word: "revolutie",
          definition: "Een radicale verandering, vaak politiek of sociaal",
          sentence: "De beweging hoopt op een sociale ___ .",
          answer: "revolutie"
        },
        {
          word: "Sint-Gillis",
          definition: "Een gemeente in Brussel, België",
          sentence: "In ___ vindt de beweging veel steun.",
          answer: "Sint-Gillis"
        },
        {
          word: "revolutionaire",
          definition: "Betreffende grote verandering, vaak politiek",
          sentence: "De groep gebruikt oude ___ symboliek.",
          answer: "revolutionaire"
        },
        {
          word: "symboliek",
          definition: "Het gebruik van symbolen om ideeën te representeren",
          sentence: "De ___ van de beweging is krachtig.",
          answer: "symboliek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "In ___ vindt de beweging veel steun.",
          answer: "Sint-Gillis"
        },
        {
          sentence: "De groep ___ hun acties aan oude idealen.",
          answer: "koppelt"
        },
        {
          sentence: "De ___ van de beweging is krachtig.",
          answer: "symboliek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de voornaamste reden voor de groei van de linkse beweging in Sint-Gillis?",
        options: [
          "Economische crisis",
          "Sociale ongelijkheid",
          "Politieke repressie",
          "Culturele diversiteit"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe karakteriseert de auteur de beweging in Sint-Gillis?",
        options: [
          "Als een gevaar voor de openbare orde",
          "Als een vorm van folklore",
          "Als een politieke partij",
          "Als een religieuze groep"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk element in de symboliek van de beweging?",
        options: [
          "Moderne technologie",
          "Oude revolutionaire symbolen",
          "Sportevenementen",
          "Kunstuitingen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De beweging in Sint-Gillis wordt vooral gedreven door jonge activisten.",
        isTrue: true
      },
      {
        statement: "De kwaadheid over Gaza en het klimaat zijn de enige redenen voor de beweging.",
        isTrue: false
      },
      {
        statement: "Sint-Gillis is een stad in Nederland.",
        isTrue: false
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
    topicNumber: 1,
    article: {
      title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
      summary: "Gent wil de Vlasmarkt asfalteren, maar niet iedereen is daar gelukkig mee. Tegenstanders willen de kinderkopjes laten erkennen als erfgoed. Want niets is zo Gents als het vermogen om pittoresk struikelgevaar te romantiseren."
    },
    vocabulary: {
      words: [
        {
          word: "struikelgevaar",
          definition: "het risico om te struikelen, bijvoorbeeld door een ongelijke ondergrond",
          sentence: "Deze weg heeft veel ___ door de losse stenen.",
          answer: "struikelgevaar"
        },
        {
          word: "emotie",
          definition: "een gevoel, zoals blijdschap, verdriet of boosheid",
          sentence: "Hij sprak met veel ___ in zijn stem.",
          answer: "emotie"
        },
        {
          word: "kasseien",
          definition: "ronde stenen die vroeger vaak werden gebruikt om straten te plaveien",
          sentence: "De oude straat was geplaveid met grote, ronde ___.",
          answer: "kasseien"
        },
        {
          word: "pittoresk",
          definition: "schilderachtig, mooi en charmant om te zien, vaak op een traditionele manier",
          sentence: "Het dorpje was ___ met zijn kleine huisjes en bloemen.",
          answer: "pittoresk"
        },
        {
          word: "romantiseren",
          definition: "iets of een situatie idealiseren, mooier maken dan het in werkelijkheid is",
          sentence: "We moeten het verleden niet ___; het leven was toen ook hard.",
          answer: "romantiseren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Deze weg heeft veel ___ door de losse stenen.",
          answer: "struikelgevaar"
        },
        {
          sentence: "De oude straat was geplaveid met grote, ronde ___.",
          answer: "kasseien"
        },
        {
          sentence: "Hij sprak met veel ___ in zijn stem.",
          answer: "emotie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Gent de Vlasmarkt asfalteren?",
        options: [
          "Om het historische uiterlijk te behouden",
          "Om de verkeersveiligheid te verbeteren",
          "Om toeristen aan te trekken",
          "Om kosten te besparen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk argument van tegenstanders tegen asfalteren?",
        options: [
          "Asfalt is duurder dan kasseien",
          "Kasseien zijn een stuk cultureel erfgoed",
          "Asfalt is slecht voor het milieu",
          "Kasseien zijn comfortabeler om op te fietsen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat beschrijft de tekst over de stad Gent?",
        options: [
          "Het is een stad zonder geschiedenis",
          "Het is een stad die alleen naar de toekomst kijkt",
          "Het is een stad die zijn verleden koestert en beschermt",
          "Het is een stad die comfort boven esthetiek stelt"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De stad Gent wil de Vlasmarkt asfalteren omwille van de verkeersveiligheid.",
        isTrue: true
      },
      {
        statement: "Alle inwoners van Gent zijn tegen het asfalteren van de Vlasmarkt.",
        isTrue: false
      },
      {
        statement: "Kasseien worden beschouwd als een vorm van cultureel erfgoed.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
    topicNumber: 1,
    article: {
      title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
      summary: "Het Engels is oppermachtig aan de universiteit. Dat biedt kansen, maar het knelt en wringt ook. “Zelfs op een congres over Franse vertaalwetenschap is de voertaal Engels.”"
    },
    vocabulary: {
      words: [
        {
          word: "congres",
          definition: "Grote bijeenkomst of conferentie over een onderwerp",
          sentence: "Het internationale ___ trok veel bezoekers.",
          answer: "congres"
        },
        {
          word: "knelt",
          definition: "Zit niet lekker, wringt of is moeilijk",
          sentence: "Het besluit ___ nog steeds.",
          answer: "knelt"
        },
        {
          word: "gestreden",
          definition: "Gevochten of hard gewerkt voor iets",
          sentence: "De activisten hebben jarenlang ___ voor dierenrechten.",
          answer: "gestreden"
        },
        {
          word: "kansen",
          definition: "Gunstige mogelijkheden of gelegenheden",
          sentence: "Hij zag de nieuwe baan als grote ___.",
          answer: "kansen"
        },
        {
          word: "verengelsing",
          definition: "Het overnemen van de Engelse taal in plaats van de eigen taal",
          sentence: "De ___ van het onderwijs zorgt voor discussie.",
          answer: "verengelsing"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het internationale ___ trok veel bezoekers.",
          answer: "congres"
        },
        {
          sentence: "Hij zag de nieuwe baan als grote ___.",
          answer: "kansen"
        },
        {
          sentence: "De activisten hebben jarenlang ___ voor dierenrechten.",
          answer: "gestreden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verengelsing' in deze context?",
        options: [
          "Vernederlandsing",
          "Vernietiging",
          "Verengelsing",
          "Verbetering"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het hoofdthema van de tekst?",
        options: [
          "De opkomst van het Nederlands",
          "De dominantie van het Engels",
          "De vernietiging van talen",
          "De geschiedenis van Europa"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de auteur?",
        options: [
          "Neutraal en onverschillig",
          "Kritisch en bezorgd",
          "Enthousiast en positief",
          "Boos en agressief"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De auteur is tegen het gebruik van Engels in het onderwijs.",
        isTrue: false
      },
      {
        statement: "Het artikel suggereert dat verengelsing een onomkeerbaar proces is.",
        isTrue: true
      },
      {
        statement: "De auteur gelooft dat niemand zich zorgen maakt over verengelsing.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
    topicNumber: 1,
    article: {
      title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
      summary: "New York is niet zoals de rest van de VS. Minder dan ooit, nu in tijden van Trump met Zohran Mamdani, een onervaren socialistische moslim wellicht de volgende burgemeester wordt. Tot hoop en afgrijzen van zijn eigen partijgenoten."
    },
    vocabulary: {
      words: [
        {
          word: "socialist",
          definition: "iemand die gelooft in gelijkheid en eerlijkheid voor iedereen",
          sentence: "De ___ wil gratis onderwijs voor iedereen.",
          answer: "socialist"
        },
        {
          word: "moslim",
          definition: "iemand die gelooft in de islamitische godsdienst",
          sentence: "De ___ gelooft in één God en de profeet Mohammed.",
          answer: "moslim"
        },
        {
          word: "kandidaat",
          definition: "iemand die meedoet aan een verkiezing om een baan of prijs te winnen",
          sentence: "De ___ voor burgemeester heeft veel steun.",
          answer: "kandidaat"
        },
        {
          word: "partij",
          definition: "een groep mensen die samenwerkt voor een doel, vooral in de politiek",
          sentence: "Hij is lid van een politieke ___.",
          answer: "partij"
        },
        {
          word: "hoop",
          definition: "het gevoel dat iets goeds gaat gebeuren, iets waar je naar uitkijkt",
          sentence: "Ik heb veel ___ voor de toekomst.",
          answer: "hoop"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ik heb veel ___ voor de toekomst.",
          answer: "hoop"
        },
        {
          sentence: "De ___ gelooft in één God en de profeet Mohammed.",
          answer: "moslim"
        },
        {
          sentence: "De ___ wil gratis onderwijs voor iedereen.",
          answer: "socialist"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Zohran Mamdani?",
        options: [
          "Een bekende zanger",
          "Een professionele basketballer",
          "Een politieke kandidaat",
          "Een bekende acteur"
        ],
        correctAnswer: 3
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
        question: "Wat betekent 'afschuw'?",
        options: [
          "Een groot gevoel van geluk",
          "Een sterk gevoel van afkeer of walging",
          "Een soort van dans",
          "Een oud woord voor vriendschap"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is een socialistische moslim.",
        isTrue: true
      },
      {
        statement: "New York is de hoofdstad van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Zohran Mamdani is lid van een politieke partij.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: 'Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint'",
    topicNumber: 1,
    article: {
      title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: 'Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint'",
      summary: "De eerste Nederlandse regering met PVV-ministers draaide uit op een fiasco. Toch wenkt een volgende verkiezingstriomf voor Geert Wilders. Auteur Marijn Kruk schrikt niet: 'Radicaal-rechts heeft de strijd in dit land met 10-0 gewonnen.'"
    },
    vocabulary: {
      words: [
        {
          word: "auteur",
          definition: "iemand die een artikel of boek schrijft",
          sentence: "De ___ van dit boek is bekend.",
          answer: "auteur"
        },
        {
          word: "succes",
          definition: "als iets goed gaat of goed afloopt",
          sentence: "Hij had veel ___ met zijn nieuwe baan.",
          answer: "succes"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land bestuurt",
          sentence: "De nieuwe ___ bestaat uit ministers van verschillende partijen.",
          answer: "regering"
        },
        {
          word: "verkiezingstriomf",
          definition: "een grote overwinning bij verkiezingen",
          sentence: "De partij vierde een grote ___.",
          answer: "verkiektionstriomf"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De nieuwe ___ bestaat uit ministers van verschillende partijen.",
          answer: "regering"
        },
        {
          sentence: "De partij vierde een grote ___.",
          answer: "verkiektionstriomf"
        },
        {
          sentence: "Hij had veel ___ met zijn nieuwe baan.",
          answer: "succes"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verkiezingstriomf'?",
        options: [
          "een soort feest",
          "een grote overwinning bij verkiezingen",
          "een nieuwe regering",
          "een moeilijke verkiezing"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over sport in Nederland",
          "Over een Nederlandse auteur",
          "Over de Nederlandse politiek en verkiezingen",
          "Over de Nederlandse koning"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is de auteur niet verrast door de winst van Wilders?",
        options: [
          "Omdat Wilders altijd wint",
          "Omdat de auteur niet van politiek houdt",
          "Omdat veel mensen de wereld zien zoals Wilders",
          "Omdat Wilders de enige kandidaat was"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De eerste regering met PVV-ministers was een groot succes.",
        isTrue: false
      },
      {
        statement: "Geert Wilders is de leider van de PVV.",
        isTrue: true
      },
      {
        statement: "De auteur Marijn Kruk is boos over de verkiezingsuitslag.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Kusiner versterkt vrede in Midden-Oosten",
    topicNumber: 1,
    article: {
      title: "Kusiner versterkt vrede in Midden-Oosten",
      summary: "Een familielid van de Amerikaanse president helpt bij vredesonderhandelingen in het Midden-Oosten. Hij gebruikt zijn persoonlijke contacten en zakelijke ervaring om overeenkomsten te maken die vrede en handel bevorderen."
    },
    vocabulary: {
      words: [
        {
          word: "Handel",
          definition: "De activiteit van kopen en verkopen van goederen",
          sentence: "Internationale ___ brengt welvaart voor vele landen.",
          answer: "handel"
        },
        {
          word: "Kusin",
          definition: "Een familielid, zoals een broer of zus, maar dan van een ouder",
          sentence: "Mijn ___ helpt me vaak met mijn huiswerk.",
          answer: "kusin"
        },
        {
          word: "Vrede",
          definition: "Geen oorlog of conflict, rust en harmonie",
          sentence: "Na de storm heerst er weer ___ in het land.",
          answer: "vrede"
        },
        {
          word: "Midden-Oosten",
          definition: "Een gebied op de wereldkaart, ongeveer van Egypte tot Iran",
          sentence: "Het ___ staat bekend om zijn olie.",
          answer: "Midden-Oosten"
        },
        {
          word: "Helpt",
          definition: "Geeft assistentie of ondersteuning",
          sentence: "Hij ___ zijn moeder in de keuken.",
          answer: "helpt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Internationale ___ brengt welvaart voor vele landen.",
          answer: "handel"
        },
        {
          sentence: "Hij ___ zijn moeder in de keuken.",
          answer: "helpt"
        },
        {
          sentence: "Het ___ staat bekend om zijn olie.",
          answer: "Midden-Oosten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'versterkt' in deze context?",
        options: [
          "Verzwakt",
          "Versterkt",
          "Vernietigt",
          "Vergeet"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar helpt de persoon in de tekst mee?",
        options: [
          "Koken",
          "Vechten",
          "Vredesonderhandelingen",
          "Winkelen"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een belangrijk resultaat van deze inspanningen?",
        options: [
          "Meer oorlog",
          "Meer handel",
          "Meer eenzaamheid",
          "Meer armoede"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De persoon in de tekst gebruikt zijn zakelijke ervaring om overeenkomsten te maken.",
        isTrue: true
      },
      {
        statement: "Het doel van de inspanningen is om oorlog te veroorzaken.",
        isTrue: false
      },
      {
        statement: "De persoon werkt alleen in één klein land.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
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
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
    topicNumber: 1,
    article: {
      title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
      summary: "Gent wil de Vlasmarkt asfalteren, maar niet iedereen is daar blij mee. Tegenstanders willen de kinderkopjes laten erkennen als erfgoed. Want niets is zo Gents als het vermogen om pittoresk struikelgevaar te romantiseren."
    },
    vocabulary: {
      words: [
        {
          word: "erfgoed",
          definition: "iets van cultureel of historisch belang dat bewaard wordt",
          sentence: "Het oude gebouw is nu ___ en wordt beschermd.",
          answer: "erfgoed"
        },
        {
          word: "nostalgie",
          definition: "het verlangen naar iets uit het verleden",
          sentence: "Veel mensen hebben ___ naar de jaren negentig.",
          answer: "nostalgie"
        },
        {
          word: "emotie",
          definition: "een gevoel, zoals blijdschap of verdriet",
          sentence: "Hij sprak met veel ___ over zijn jeugd.",
          answer: "emotie"
        },
        {
          word: "pittoresk",
          definition: "mooi en charmant op een ouderwetse manier",
          sentence: "Het kleine dorpje was erg ___ met zijn oude huisjes.",
          answer: "pittoresk"
        },
        {
          word: "struikelgevaar",
          definition: "het gevaar dat je over iets struikelt en valt",
          sentence: "Op gladde stenen is er veel ___ voor ouderen.",
          answer: "struikelgevaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het oude gebouw is nu ___ en wordt beschermd.",
          answer: "erfgoed"
        },
        {
          sentence: "Op gladde stenen is er veel ___ voor ouderen.",
          answer: "struikelgevaar"
        },
        {
          sentence: "Het kleine dorpje was erg ___ met zijn oude huisjes.",
          answer: "pittoresk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Gent de Vlasmarkt asfalteren?",
        options: [
          "Omdat de stenen te oud zijn",
          "Voor de veiligheid van voetgangers",
          "Omdat er te veel verkeer is",
          "Omdat niemand van kasseien houdt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'pittoresk' volgens de tekst?",
        options: [
          "Iets dat gevaarlijk is",
          "Iets dat mooi en charmant is",
          "Iets dat nieuw is",
          "Iets dat saai is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat willen tegenstanders van de asfaltering?",
        options: [
          "Niets, ze zijn het ermee eens",
          "De kasseien behouden als erfgoed",
          "Meer asfalt in de stad",
          "Alleen asfalt voor auto's"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gent wil de Vlasmarkt asfalteren om het veiliger te maken.",
        isTrue: true
      },
      {
        statement: "Iedereen in Gent is blij met de asfaltering.",
        isTrue: false
      },
      {
        statement: "Kasseien kunnen gevaarlijk zijn om op te lopen.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
    topicNumber: 1,
    article: {
      title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
      summary: "Het Engels is oppermachtig aan de universiteit. Dat biedt kansen, maar het knelt en wringt ook. 'Zelfs op een congres over Franse vertaalwetenschap is de voertaal Engels.'"
    },
    vocabulary: {
      words: [
        {
          word: "kansen",
          definition: "Mogelijkheden of goede kansen op iets.",
          sentence: "Hij heeft veel ___ op die baan.",
          answer: "kansen"
        },
        {
          word: "gestreden",
          definition: "Gevochten of hard gewerkt voor iets.",
          sentence: "Ze hebben jarenlang ___ voor hun rechten.",
          answer: "gestreden"
        },
        {
          word: "knelt",
          definition: "Iets dat strak zit of niet comfortabel is.",
          sentence: "Deze schoen ___ een beetje.",
          answer: "knelt"
        },
        {
          word: "congres",
          definition: "Een grote bijeenkomst voor een bepaald onderwerp.",
          sentence: "Hij sprak op het ___ over klimaatverandering.",
          answer: "congres"
        },
        {
          word: "oppermachtig",
          definition: "Heel erg machtig of de baas zijn.",
          sentence: "De leeuw is de ___ heerser van de jungle.",
          answer: "oppermachtig"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De leeuw is de ___ heerser van de jungle.",
          answer: "oppermachtig"
        },
        {
          sentence: "Ze hebben jarenlang ___ voor hun rechten.",
          answer: "gestreden"
        },
        {
          sentence: "Deze schoen ___ een beetje.",
          answer: "knelt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst vooral over?",
        options: [
          "Koken en eten",
          "De Nederlandse taal",
          "Engelse woorden in het Nederlands",
          "Sport en gezondheid"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'verengelsing'?",
        options: [
          "Een soort plant",
          "Een type dans",
          "Het gebruik van Engelse woorden in het Nederlands",
          "Een oude traditie"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de houding van mensen volgens de tekst?",
        options: [
          "Ze zijn boos over verengelsing",
          "Ze maken zich er geen zorgen over",
          "Ze willen meer verengelsing",
          "Ze negeren het volledig"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Nederlanders vechten tegen verengelsing.",
        isTrue: false
      },
      {
        statement: "Engels is de voertaal op sommige congressen.",
        isTrue: true
      },
      {
        statement: "Iedereen maakt zich zorgen over verengelsing.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
    topicNumber: 1,
    article: {
      title: "De socialistische moslim die New York betaalbaar wil maken: in het spoor van kandidaat-burgemeester Zohran Mamdani",
      summary: "New York is niet zoals de rest van de VS. Minder dan ooit, nu in tijden van Trump met Zohran Mamdani een onervaren socialistische moslim wellicht de volgende burgemeester wordt. Tot hoop én afgrijzen van zijn eigen partijgenoten."
    },
    vocabulary: {
      words: [
        {
          word: "partijgenoten",
          definition: "mensen die bij dezelfde politieke partij horen",
          sentence: "De ___ steunden het plan van hun leider.",
          answer: "partijgenoten"
        },
        {
          word: "onervaren",
          definition: "geen of weinig ervaring hebbend",
          sentence: "De ___ kok maakte fouten met het recept.",
          answer: "onervaren"
        },
        {
          word: "hoop",
          definition: "het gevoel dat iets goed zal gaan",
          sentence: "Er is veel ___ op betere tijden.",
          answer: "hoop"
        },
        {
          word: "kandidaat",
          definition: "iemand die meedoet aan een verkiezing of sollicitatie",
          sentence: "De ___ voor burgemeester hield een toespraak.",
          answer: "kandidaat"
        },
        {
          word: "betaalbaar",
          definition: "niet te duur, goedkoop genoeg",
          sentence: "We zoeken een ___ hotel voor onze vakantie.",
          answer: "betaalbaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We zoeken een ___ hotel voor onze vakantie.",
          answer: "betaalbaar"
        },
        {
          sentence: "De ___ steunden het plan van hun leider.",
          answer: "partijgenoten"
        },
        {
          sentence: "Er is veel ___ op betere tijden.",
          answer: "hoop"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdfocus van de tekst?",
        options: [
          "Koken",
          "Sport",
          "Politiek",
          "Muziek"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van Zohran Mamdani in de tekst?",
        options: [
          "Hij is een chef-kok",
          "Hij is een professionele atleet",
          "Hij is een politieke kandidaat",
          "Hij is een muzikant"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de houding van de partijgenoten in de tekst?",
        options: [
          "Ze zijn heel enthousiast",
          "Ze zijn neutraal",
          "Ze zijn erg boos",
          "Ze hebben gemengde gevoelens van hoop en afgrijzen"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "New York is vergelijkbaar met de rest van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Zohran Mamdani is een ervaren politicus.",
        isTrue: false
      },
      {
        statement: "Sommige partijgenoten hebben negatieve gevoelens over de situatie.",
        isTrue: true
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: “Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint”",
    topicNumber: 1,
    article: {
      title: "Auteur Marijn Kruk over het succes van de PVV in Nederland: “Iedereen bekijkt de wereld intussen zoals Wilders. Dan moet je niet verbaasd zijn dat hij wint”",
      summary: "De eerste Nederlandse regering met PVV-ministers draaide uit op een fiasco. Toch wenkt een volgende verkiezingstriomf voor Geert Wilders. Auteur Marijn Kruk schrikt niet: “Radicaal-rechts heeft de strijd in dit land met 10-0 gewonnen.”"
    },
    vocabulary: {
      words: [
        {
          word: "auteur",
          definition: "schrijver van een tekst of boek",
          sentence: "De ___ van dit artikel is Marijn Kruk.",
          answer: "auteur"
        },
        {
          word: "wereld",
          definition: "de aarde en alles erop, of een grote groep mensen",
          sentence: "Hij bekijkt de ___ door de ogen van Wilders.",
          answer: "wereld"
        },
        {
          word: "succes",
          definition: "het bereiken van een goed resultaat",
          sentence: "Het ___ van de PVV verraste veel mensen.",
          answer: "succes"
        },
        {
          word: "verkiezingstriomf",
          definition: "een grote overwinning in een verkiezing",
          sentence: "Wilders behaalde een ___.",
          answer: "verkiezingstriomf"
        },
        {
          word: "regering",
          definition: "een groep mensen die een land bestuurt",
          sentence: "De nieuwe ___ heeft veel plannen.",
          answer: "regering"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ van dit artikel is Marijn Kruk.",
          answer: "auteur"
        },
        {
          sentence: "Wilders behaalde een ___.",
          answer: "verkiezingstriomf"
        },
        {
          sentence: "De nieuwe ___ heeft veel plannen.",
          answer: "regering"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover schrijft auteur Marijn Kruk?",
        options: [
          "Over reizen",
          "Over de Nederlandse politiek",
          "Over koken",
          "Over sport"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van Marijn Kruk naar de PVV?",
        options: [
          "Ze is erg positief",
          "Ze is neutraal",
          "Ze is kritisch",
          "Ze is enthousiast"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat was het resultaat van de eerste regering met PVV-ministers?",
        options: [
          "Het was een groot succes",
          "Het was een fiasco",
          "Het was onbelangrijk",
          "Het was een overwinning"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Geert Wilders is de leider van de PVV.",
        isTrue: true
      },
      {
        statement: "De PVV is een linkse partij.",
        isTrue: false
      },
      {
        statement: "Marijn Kruk is de schrijver van het artikel.",
        isTrue: true
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
    title: "Begint de linkse revolutie in Sint-Gillis? 'Het is ook een vorm van lifestyle'",
    topicNumber: 1,
    article: {
      title: "Begint de linkse revolutie in Sint-Gillis? 'Het is ook een vorm van lifestyle'",
      summary: "Is extreemlinks in Brussel een gevaar voor de openbare orde, of vooral een vorm van idealistische folklore? In Sint-Gillis groeit een beweging die zijn verontwaardiging koppelt aan oude revolutionaire symboliek. 'De kwaadheid over Gaza en het klimaat biedt vruchtbare grond voor extremisme.'"
    },
    vocabulary: {
      words: [
        {
          word: "linkse",
          definition: "Betreft politieke groeperingen die sociaal en economisch gelijkheid willen.",
          sentence: "De ___ politieke partij wil meer geld voor onderwijs.",
          answer: "linkse"
        },
        {
          word: "verontwaardiging",
          definition: "Een gevoel van boosheid of ongenoegen over iets wat onrechtvaardig is.",
          sentence: "Zijn ___ over het beleid was duidelijk in zijn speech.",
          answer: "verontwaardiging"
        },
        {
          word: "revolutie",
          definition: "Een snelle en grote verandering in de maatschappij of politiek.",
          sentence: "De Franse ___ bracht grote veranderingen in de samenleving.",
          answer: "revolutie"
        },
        {
          word: "extremisme",
          definition: "Het hanteren van extreme opvattingen of acties, vaak politiek of sociaal.",
          sentence: "Radicale groepen kunnen leiden tot gevaarlijk ___.",
          answer: "extremisme"
        },
        {
          word: "beweging",
          definition: "Een groep mensen die samenwerkt voor een gemeenschappelijk doel.",
          sentence: "De arbeiders___ organiseerde een protest vorige week.",
          answer: "beweging"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Radicale groepen kunnen leiden tot gevaarlijk ___.",
          answer: "extremisme"
        },
        {
          sentence: "Zijn ___ over het beleid was duidelijk in zijn speech.",
          answer: "verontwaardiging"
        },
        {
          sentence: "De Franse ___ bracht grote veranderingen in de samenleving.",
          answer: "revolutie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar verwijst 'Sint-Gillis' in deze context naar?",
        options: [
          "Een persoon",
          "Een soort voedsel",
          "Een plaats in Brussel",
          "Een historisch figuur"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'symboliek' in deze tekst?",
        options: [
          "Een soort voedsel",
          "Een type muziek",
          "Het gebruik van symbolen",
          "Een economisch systeem"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat wordt bedoeld met 'extremisme' in deze context?",
        options: [
          "Een soort sport",
          "Een vorm van extreme politieke opvattingen",
          "Een economisch systeem",
          "Een type kunst"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Sint-Gillis is een plaats in Brussel.",
        isTrue: true
      },
      {
        statement: "Extremisme verwijst hier naar een politieke partij.",
        isTrue: false
      },
      {
        statement: "De tekst beschrijft zowel gevaar als culturele aspecten van de beweging.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
    topicNumber: 1,
    article: {
      title: "Gent wil de Vlasmarkt asfalteren: “Kasseien zijn een zaak van emotie en nostalgie, maar ook van verkeersveiligheid”",
      summary: "Gent wil de Vlasmarkt asfalteren, al is niet iedereen daar gelukkig mee. Tegenstanders willen de kinderkopjes laten erkennen als erfgoed. Want niets is zo Gents als het vermogen om pittoresk struikelgevaar te romantiseren."
    },
    vocabulary: {
      words: [
        {
          word: "erfgoed",
          definition: "cultureel of natuurlijk erfgoed dat bewaard moet worden",
          sentence: "Sommige inwoners zien de straat als een stukje ___ dat beschermd moet worden.",
          answer: "erfgoed"
        },
        {
          word: "struikelgevaar",
          definition: "gevaar dat iemand struikelt, bijvoorbeeld door een oneffen ondergrond",
          sentence: "De oude stenen veroorzaken ___ voor oudere inwoners.",
          answer: "struikelgevaar"
        },
        {
          word: "romantiseren",
          definition: "iets of iemand idealiseren door vooral de positieve kanten te zien",
          sentence: "Critici zeggen dat het gevaar wordt ___ en dat de straat veiliger moet.",
          answer: "romantiseren"
        },
        {
          word: "asfalteren",
          definition: "een ondergrond bedekken met asfalt, een stevig en glad materiaal",
          sentence: "De gemeente wil de straat ___ voor een betere ondergrond.",
          answer: "asfalteren"
        },
        {
          word: "kasseien",
          definition: "oude straatstenen die vaak gebruikt worden in historische straten",
          sentence: "De Vlasmarkt is geplaveid met oude ___ die glimmen in de zon.",
          answer: "kasseien"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige inwoners zien de straat als een stukje ___ dat beschermd moet worden.",
          answer: "erfgoed"
        },
        {
          sentence: "De oude stenen veroorzaken ___ voor oudere inwoners.",
          answer: "struikelgevaar"
        },
        {
          sentence: "De gemeente wil de straat ___ voor een betere ondergrond.",
          answer: "asfalteren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom wil Gent de Vlasmarkt asfalteren?",
        options: [
          "Omdat de stenen te oud zijn",
          "Om de straat veiliger en toegankelijker te maken",
          "Omdat er te weinig toeristen komen",
          "Omdat asfalteren goedkoper is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijk argument van de tegenstanders?",
        options: [
          "Asfalt is slecht voor het milieu",
          "Kasseien zijn deel van het cultureel erfgoed",
          "Asfalteren is te duur voor de stad",
          "De Vlasmarkt is niet geschikt voor auto's"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een gevolg van kasseien als ondergrond?",
        options: [
          "Ze zijn erg duurzaam en gaan lang mee",
          "Ze zijn glad als ze nat worden",
          "Ze zijn niet geschikt voor rolstoelgebruikers",
          "Ze veroorzaken meer verkeerslawaai"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Gent wil de Vlasmarkt asfalteren om het struikelgevaar te verminderen.",
        isTrue: true
      },
      {
        statement: "Alle inwoners van Gent zijn tegen het asfalteren van de Vlasmarkt.",
        isTrue: false
      },
      {
        statement: "De kasseien op de Vlasmarkt worden door sommige mensen gezien als belangrijk erfgoed.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
    topicNumber: 1,
    article: {
      title: "We hebben zo hard gestreden voor het Nederlands, maar van de verengelsing ligt niemand wakker",
      summary: "Het Engels is oppermachtig aan de universiteit. Dat biedt kansen, maar het knelt en wringt ook. 'Zelfs op een congres over Franse vertaalwetenschap is de voertaal Engels.'"
    },
    vocabulary: {
      words: [
        {
          word: "gestreden",
          definition: "Gevochten of hard gewerkt voor iets",
          sentence: "De soldaten hebben lang ___ voor hun vrijheid.",
          answer: "gestreden"
        },
        {
          word: "kansen",
          definition: "Mogelijkheden of gunstige gelegenheden",
          sentence: "Hij heeft veel ___ op die baan.",
          answer: "kansen"
        },
        {
          word: "oppermachtig",
          definition: "Zeer machtig of overheersend",
          sentence: "Het leger was ___ in de regio.",
          answer: "oppermachtig"
        },
        {
          word: "universiteit",
          definition: "Een instelling voor hoger onderwijs en onderzoek",
          sentence: "Hij studeert aan de ___ van Amsterdam.",
          answer: "universiteit"
        },
        {
          word: "wringt",
          definition: "Zit niet lekker of schuurt",
          sentence: "Deze broek ___ aan mijn benen.",
          answer: "wringt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het leger was ___ in de regio.",
          answer: "oppermachtig"
        },
        {
          sentence: "Deze broek ___ aan mijn benen.",
          answer: "wringt"
        },
        {
          sentence: "De soldaten hebben lang ___ voor hun vrijheid.",
          answer: "gestreden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verengelsing' in deze context?",
        options: [
          "Vervanging van de Nederlandse taal",
          "Overheersing van de Engelse taal",
          "Een feestelijke gebeurtenis",
          "Een type muziek"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'knelt' naar in de tekst?",
        options: [
          "Het is een synoniem voor 'past'",
          "Het betekent dat iets te strak zit",
          "Het is een type Nederlandse dans",
          "Het is een plaatsnaam"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het hoofdonderwerp van de artikel?",
        options: [
          "De geschiedenis van Nederland",
          "De opkomst van Engels in academische settings",
          "Hoe je een congres organiseert",
          "De voordelen van tweetaligheid"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De auteur is tegen enige vorm van Engels gebruik.",
        isTrue: false
      },
      {
        statement: "Het artikel suggereert dat verengelsing zowel kansen als problemen biedt.",
        isTrue: true
      },
      {
        statement: "De titel impliceert dat mensen niet genoeg geven om het Nederlands te beschermen.",
        isTrue: true
      }
    ]
  }
];
