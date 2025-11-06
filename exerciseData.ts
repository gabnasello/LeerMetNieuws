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
    title: "Trump en het Hooggerechtshof",
    topicNumber: 1,
    article: {
      title: "Rechters over Trumps tarieven",
      summary: "Het Hooggerechtshof beslist over de tarieven van Donald Trump. De meeste rechters steunen Trump, maar drie conservatieve rechters zijn kritisch."
    },
    vocabulary: {
      words: [
        {
          word: "rechters",
          definition: "mensen die rechtspreken",
          sentence: "De ___ hebben een belangrijke taak.",
          answer: "rechters"
        },
        {
          word: "hof",
          definition: "een plaats waar recht wordt gesproken",
          sentence: "Het ___ spreekt recht over zaken.",
          answer: "hof"
        },
        {
          word: "kritisch",
          definition: "niet zomaar alles aannemen, maar beoordelen",
          sentence: "Een ___ persoon stelt veel vragen.",
          answer: "kritisch"
        },
        {
          word: "Trump",
          definition: "familienaam van de voormalige president",
          sentence: "___ was president van de Verenigde Staten.",
          answer: "Trump"
        },
        {
          word: "steunen",
          definition: "helpen of ondersteunen",
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een ___ persoon stelt veel vragen.",
          answer: "kritisch"
        },
        {
          sentence: "___ was president van de Verenigde Staten.",
          answer: "Trump"
        },
        {
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet het Hooggerechtshof?",
        options: [
          "Zingt liedjes",
          "Maakt nieuwe wetten",
          "Beslist over belangrijke zaken",
          "Organiseert feesten"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe reageerden de rechters op Trumps tarieven?",
        options: [
          "Ze waren het er allemaal mee eens",
          "Sommige waren kritisch",
          "Ze dansten van blijdschap",
          "Ze vroegen om meer informatie"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van conservatieve rechters?",
        options: [
          "Ze zijn er niet",
          "Ze steunen alle veranderingen",
          "Ze zijn voorzichtig en beoordelen alles",
          "Ze zijn altijd tegen de regering"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Alle rechters van het Hooggerechtshof steunden Trumps tarieven.",
        isTrue: false
      },
      {
        statement: "Enkele conservatieve rechters waren kritisch over de tarieven.",
        isTrue: true
      },
      {
        statement: "Het Hooggerechtshof beslist uiteindelijk over de tarieven.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een even grote vijand",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een even grote vijand",
      summary: "Winnen is één ding, het waarmaken iets anders. Zohran Mamdani wordt een heel andere burgemeester van New York, maar staat voor één grote uitdaging: geld vinden voor zijn plannen, met een president die hem wil saboteren."
    },
    vocabulary: {
      words: [
        {
          word: "winnen",
          definition: "het bereiken van een overwinning, zoals in een wedstrijd",
          sentence: "Hij hoopte de verkiezing te ___.",
          answer: "winnen"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om dingen te kopen, zoals munten en briefjes",
          sentence: "Hij spaart ___ voor een nieuwe fiets.",
          answer: "geld"
        },
        {
          word: "plannen",
          definition: "ideeën over wat je in de toekomst wilt doen",
          sentence: "Hun ___ voor het weekend zijn nog niet bekend.",
          answer: "plannen"
        },
        {
          word: "vijand",
          definition: "iemand die tegen je is en kwaad wil",
          sentence: "De detective ontdekte wie de echte ___ was.",
          answer: "vijand"
        },
        {
          word: "burgemeester",
          definition: "de leider van een stad of gemeente",
          sentence: "De ___ opent het nieuwe park.",
          answer: "burgemeester"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij spaart ___ voor een nieuwe fiets.",
          answer: "geld"
        },
        {
          sentence: "De ___ opent het nieuwe park.",
          answer: "burgemeester"
        },
        {
          sentence: "Hij hoopte de verkiezing te ___.",
          answer: "winnen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat dit artikel?",
        options: [
          "Over reizen",
          "Over een nieuwe burgemeester",
          "Over sport",
          "Over koken"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is Zohran Mamdani in het nieuws?",
        options: [
          "Hij won een prijs",
          "Hij is de nieuwe burgemeester",
          "Hij is een filmster",
          "Hij is een kok"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een belangrijke uitdaging voor hem?",
        options: [
          "Hij heeft geen vrienden",
          "Hij heeft te veel geld",
          "Hij moet geld vinden voor zijn plannen",
          "Hij spreekt geen Nederlands"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is de burgemeester van New York.",
        isTrue: true
      },
      {
        statement: "De president wil de burgemeester helpen met zijn plannen.",
        isTrue: false
      },
      {
        statement: "Het artikel zegt dat winnen niet hetzelfde is als de plannen waarmaken.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
    topicNumber: 1,
    article: {
      title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
      summary: "De gerenommeerde Soedan-experte Hager Ali zegt dat het genocidale geweld in Al-Fasher de afgelopen dagen nog is toegenomen. “De logica van de rebellen is dat iedereen die zich nu nog in Al-Fasher bevindt een vijand is. Iedereen is een doelwit: mannen, vrouwen, kinderen.”"
    },
    vocabulary: {
      words: [
        {
          word: "vijand",
          definition: "iemand die tegen je is",
          sentence: "Iedereen wordt gezien als een ___.",
          answer: "vijand"
        },
        {
          word: "experte",
          definition: "iemand die veel weet over een onderwerp",
          sentence: "De ___ gaf uitleg over de situatie.",
          answer: "experte"
        },
        {
          word: "rebellen",
          definition: "mensen die vechten tegen de regering",
          sentence: "De ___ willen de stad innemen.",
          answer: "rebellen"
        },
        {
          word: "doelwit",
          definition: "iets of iemand waarop wordt gericht",
          sentence: "Iedereen is een ___ van de rebellen.",
          answer: "doelwit"
        },
        {
          word: "stoppen",
          definition: "ergens mee ophouden",
          sentence: "Het is te laat om de rebellen te ___.",
          answer: "stoppen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het is te laat om de rebellen te ___.",
          answer: "stoppen"
        },
        {
          sentence: "Iedereen is een ___ van de rebellen.",
          answer: "doelwit"
        },
        {
          sentence: "De ___ gaf uitleg over de situatie.",
          answer: "experte"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'genocidaal' in deze context?",
        options: [
          "Vriendelijk",
          "Vredelievend",
          "Vernietigend",
          "Opbouwend"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar is Al-Fasher?",
        options: [
          "Een stad in Soedan",
          "Een stad in Nederland",
          "Een stad in Amerika",
          "Een stad in Azië"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de experte?",
        options: [
          "Ze vecht mee",
          "Ze geeft informatie",
          "Ze is de leider",
          "Ze is een slachtoffer"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rebellen vechten tegen de regering.",
        isTrue: true
      },
      {
        statement: "Al-Fasher is een stad in Nederland.",
        isTrue: false
      },
      {
        statement: "Hager Ali is een Soedan-experte.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Godelieve De Meyer, 87 jaar",
    topicNumber: 1,
    article: {
      title: "Godelieve De Meyer, 87 jaar",
      summary: "Geboren in 1937, overleden op 01/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "1937",
          definition: "Het jaar negentienhonderdzevenendertig.",
          sentence: "De kerk werd gebouwd in ___, vlak na de oorlog.",
          answer: "1937"
        },
        {
          word: "De Meyer",
          definition: "De familienaam van de persoon.",
          sentence: "De familie ___ woonde al generaties lang in dezelfde straat.",
          answer: "De Meyer"
        },
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig.",
          sentence: "Ze verwachten dat het gebouw klaar is in ___.",
          answer: "2025"
        },
        {
          word: "Godelieve",
          definition: "Een vrouwelijke voornaam, van oorsprong een heiligennaam.",
          sentence: "___ De Meyer was een bekende figuur in haar dorp.",
          answer: "Godelieve"
        },
        {
          word: "geboren",
          definition: "Het begin van iemands leven; wanneer iemand ter wereld komt.",
          sentence: "Zij werd ___ in het jaar 1937.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij werd ___ in het jaar 1937.",
          answer: "geboren"
        },
        {
          sentence: "Ze verwachten dat het gebouw klaar is in ___.",
          answer: "2025"
        },
        {
          sentence: "De kerk werd gebouwd in ___, vlak na de oorlog.",
          answer: "1937"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Godelieve De Meyer geboren?",
        options: [
          "1937",
          "1945",
          "1950",
          "1960"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum is Godelieve De Meyer overleden?",
        options: [
          "1 november 2025",
          "11 januari 2025",
          "1 januari 2024",
          "11 november 2024"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was de leeftijd van Godelieve De Meyer bij haar overlijden?",
        options: [
          "87 jaar",
          "90 jaar",
          "85 jaar",
          "80 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Godelieve De Meyer is geboren in 1937.",
        isTrue: true
      },
      {
        statement: "Godelieve De Meyer overleed in het jaar 2025.",
        isTrue: true
      },
      {
        statement: "Godelieve De Meyer was 100 jaar oud bij haar overlijden.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Etienne Wijnant, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Etienne Wijnant, 89 jaar",
      summary: "Geboren in 1936, overleden op 03/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "89",
          definition: "Het getal na 88 en voor 90.",
          sentence: "Hij werd ___ jaar oud.",
          answer: "89"
        },
        {
          word: "Wijnant",
          definition: "Een achternaam, waarschijnlijk van Nederlandse oorsprong.",
          sentence: "De familie ___ is bekend in deze regio.",
          answer: "Wijnant"
        },
        {
          word: "1936",
          definition: "Een jaartal, vaak gebruikt voor historische gebeurtenissen.",
          sentence: "Hij is geboren in het jaar ___.",
          answer: "1936"
        },
        {
          word: "2025",
          definition: "Een jaartal in de toekomst.",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op 3 november.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De familie ___ is bekend in deze regio.",
          answer: "Wijnant"
        },
        {
          sentence: "Hij werd ___ jaar oud.",
          answer: "89"
        },
        {
          sentence: "Hij is ___ op 3 november.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Etienne Wijnant geboren?",
        options: [
          "1920",
          "1936",
          "1940",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "In welke maand overleed Etienne Wijnant?",
        options: [
          "Januari",
          "Februari",
          "November",
          "December"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe oud werd Etienne Wijnant?",
        options: [
          "80 jaar",
          "89 jaar",
          "90 jaar",
          "99 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Etienne Wijnant is geboren in 1936.",
        isTrue: true
      },
      {
        statement: "Etienne Wijnant overleed in december 2025.",
        isTrue: false
      },
      {
        statement: "Etienne Wijnant werd 89 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Belgische drugsbaron opgepakt in Dubai",
    topicNumber: 1,
    article: {
      title: "Belgische drugsbaron opgepakt in Dubai",
      summary: "Terwijl de Belgische minister van Justitie op bezoek was in de Verenigde Arabische Emiraten, heeft de politie daar de Belgische drugsbaron Omar Govers gearresteerd. Ze willen hem uitleveren."
    },
    vocabulary: {
      words: [
        {
          word: "Justitie",
          definition: "het ministerie dat gaat over recht en politie",
          sentence: "Justitie zorgt voor een eerlijke rechtspraak.",
          answer: "Justitie"
        },
        {
          word: "drugsbaron",
          definition: "iemand die veel handelt in verboden drugs",
          sentence: "De ___ werd opgepakt in zijn vakantiehuis.",
          answer: "drugsbaron"
        },
        {
          word: "bezoek",
          definition: "een korte tijd waarin je ergens naartoe gaat",
          sentence: "Tijdens zijn ___ aan Dubai, ondertekende hij een verdrag.",
          answer: "bezoek"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven en misdaad bestrijden",
          sentence: "De ___ heeft de man gearresteerd na een lange zoektocht.",
          answer: "politie"
        },
        {
          word: "Belgische",
          definition: "iemand of iets dat uit België komt",
          sentence: "De ___ atleet won goud op de Olympische Spelen.",
          answer: "Belgische"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werd opgepakt in zijn vakantiehuis.",
          answer: "drugsbaron"
        },
        {
          sentence: "De ___ heeft de man gearresteerd na een lange zoektocht.",
          answer: "politie"
        },
        {
          sentence: "Tijdens zijn ___ aan Dubai, ondertekende hij een verdrag.",
          answer: "bezoek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom was de minister van Justitie in de Verenigde Arabische Emiraten?",
        options: [
          "Om te surveilleren op het strand",
          "Om een officieel bezoek af te leggen",
          "Om te onderhandelen over een uitwisseling",
          "Om vakantie te vieren met zijn gezin"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de politie in deze situatie?",
        options: [
          "Het organiseren van festiviteiten",
          "Het handhaven van de wet en arresteren van verdachten",
          "Het opstellen van nieuwe wetten",
          "Het geven van gratis eten aan mensen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'uitlevering' in deze context?",
        options: [
          "Het weggeven van cadeaus",
          "Het teruggeven van geleend geld",
          "Het overhandigen van een persoon aan een ander land",
          "Het organiseren van een groot feest"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Omar Gavers is de naam van de Belgische drugsbaron.",
        isTrue: false
      },
      {
        statement: "De minister van Justitie was in de Verenigde Arabische Emiraten voor een officieel bezoek.",
        isTrue: true
      },
      {
        statement: "Omar Gavers werd gearresteerd door de politie van België.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Rechters en Trump",
    topicNumber: 1,
    article: {
      title: "Rechters en Trump",
      summary: "Rechters kunnen Trump helpen of niet. Soms zijn rechters streng. Soms zijn rechters vriendelijk. De rechters in de VS keken naar een zaak over Trump."
    },
    vocabulary: {
      words: [
        {
          word: "rechters",
          definition: "mensen die beslissen over regels",
          sentence: "De ___ beslisten over de zaak.",
          answer: "rechters"
        },
        {
          word: "niet",
          definition: "geen, ontkenning",
          sentence: "Hij is ___ mijn vriend.",
          answer: "niet"
        },
        {
          word: "zaak",
          definition: "een situatie of geval, vooral juridisch",
          sentence: "De rechter hoorde de ___ gisteren.",
          answer: "zaak"
        },
        {
          word: "zijn",
          definition: "van hem, het bezittelijk voornaamwoord",
          sentence: "Dat is ___ boek.",
          answer: "zijn"
        },
        {
          word: "helpen",
          definition: "assisteren, bijstaan",
          sentence: "Kan jij me ___ met deze tas?",
          answer: "helpen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is ___ mijn vriend.",
          answer: "niet"
        },
        {
          sentence: "Kan jij me ___ met deze tas?",
          answer: "helpen"
        },
        {
          sentence: "De ___ beslisten over de zaak.",
          answer: "rechters"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doen rechters?",
        options: [
          "Ze helpen mensen.",
          "Ze spelen voetbal.",
          "Ze kijken naar films.",
          "Ze beslissen over regels."
        ],
        correctAnswer: 4
      },
      {
        question: "Wie is Trump?",
        options: [
          "Een leraar.",
          "Een dokter.",
          "Een president.",
          "Een kok."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'helpen'?",
        options: [
          "Iemand pijn doen.",
          "Iemand ondersteunen.",
          "Iemand negeren.",
          "Iemand uitlachen."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Rechters kunnen mensen helpen.",
        isTrue: true
      },
      {
        statement: "Trump is een soort van fruit.",
        isTrue: false
      },
      {
        statement: "Rechters kunnen beslissen over een zaak.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Zohran Mamdani, de burgemeester van New York",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani, de burgemeester van New York",
      summary: "Zohran Mamdani is de burgemeester van New York. Hij heeft grote plannen. Maar hij heeft ook een vijand. Die vijand is de president. De president wil niet dat de plannen lukken. Zohran moet geld vinden voor zijn plannen."
    },
    vocabulary: {
      words: [
        {
          word: "plannen",
          definition: "wat je van plan bent te doen",
          sentence: "Hij heeft grote ___ voor de stad.",
          answer: "plannen"
        },
        {
          word: "burgemeester",
          definition: "de leider van een stad",
          sentence: "De ___ van New York heet Zohran Mamdani.",
          answer: "burgemeester"
        },
        {
          word: "vijand",
          definition: "iemand die tegen je is",
          sentence: "De president is zijn ___.",
          answer: "vijand"
        },
        {
          word: "zijn",
          definition: "hetzelfde als 'be' in het Engels",
          sentence: "Hij ___ de burgemeester van New York.",
          answer: "is"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om dingen te kopen",
          sentence: "Hij heeft veel ___ nodig voor zijn plannen.",
          answer: "geld"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft veel ___ nodig voor zijn plannen.",
          answer: "geld"
        },
        {
          sentence: "De ___ van New York heet Zohran Mamdani.",
          answer: "burgemeester"
        },
        {
          sentence: "Hij heeft grote ___ voor de stad.",
          answer: "plannen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wie is Zohran Mamdani?",
        options: [
          "De burgemeester van New York",
          "De president van Amerika",
          "Een leraar",
          "Een dokter"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat wil de president niet?",
        options: [
          "Dat de plannen van Zohran lukken",
          "Dat Zohran geld heeft",
          "Dat Zohran burgemeester is",
          "Dat Zohran een vijand heeft"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar heeft Zohran geld voor nodig?",
        options: [
          "Voor zijn plannen",
          "Om een huis te kopen",
          "Om eten te kopen",
          "Om de president te betalen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is de burgemeester van New York.",
        isTrue: true
      },
      {
        statement: "De president is de vijand van Zohran.",
        isTrue: true
      },
      {
        statement: "Zohran heeft geen geld nodig voor zijn plannen.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Expert over Soedan",
    topicNumber: 1,
    article: {
      title: "Expert over Soedan",
      summary: "Een deskundige zegt dat het geweld in Soedan erg is. Iedereen is in gevaar: mannen, vrouwen en kinderen."
    },
    vocabulary: {
      words: [
        {
          word: "mannen",
          definition: "volwassen personen van het mannelijk geslacht",
          sentence: "De ___ werken vaak buitenshuis.",
          answer: "mannen"
        },
        {
          word: "geweld",
          definition: "situatie waarin mensen gewond raken of sterven",
          sentence: "Het ___ in Soedan is erg.",
          answer: "geweld"
        },
        {
          word: "kinderen",
          definition: "jonge mensen, meestal onder de 18 jaar",
          sentence: "De ___ spelen en leren op school.",
          answer: "kinderen"
        },
        {
          word: "vrouwen",
          definition: "volwassen personen van het vrouwelijk geslacht",
          sentence: "De ___ zorgen vaak voor het gezin.",
          answer: "vrouwen"
        },
        {
          word: "iedereen",
          definition: "alle mensen",
          sentence: "___ moet veilig zijn.",
          answer: "iedereen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werken vaak buitenshuis.",
          answer: "mannen"
        },
        {
          sentence: "De ___ zorgen vaak voor het gezin.",
          answer: "vrouwen"
        },
        {
          sentence: "___ moet veilig zijn.",
          answer: "iedereen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat zegt de expert over Soedan?",
        options: [
          "Het is een veilig land.",
          "Er is veel geweld.",
          "Het is een klein land.",
          "De mensen zijn erg vriendelijk."
        ],
        correctAnswer: 2
      },
      {
        question: "Wie is in gevaar volgens de tekst?",
        options: [
          "Alleen mannen",
          "Alleen kinderen",
          "Alleen vrouwen",
          "Iedereen"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de boodschap van de tekst?",
        options: [
          "Soedan is een veilig land.",
          "Iedereen moet voorzichtig zijn.",
          "Soedan is een groot land.",
          "Er is te veel geweld in Soedan."
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De expert zegt dat Soedan veilig is.",
        isTrue: false
      },
      {
        statement: "Vrouwen en kinderen zijn in gevaar.",
        isTrue: true
      },
      {
        statement: "Soedan is een land in Europa.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Godelieve De Meyer, 87 jaar",
    topicNumber: 1,
    article: {
      title: "Godelieve De Meyer, 87 jaar",
      summary: "Geboren in 1937, overleden op 01/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Geboren worden, het begin van het leven",
          sentence: "Zij is ___ in 1937.",
          answer: "geboren"
        },
        {
          word: "Godelieve",
          definition: "Een voornaam, een naam van een persoon",
          sentence: "___ is een vrouw.",
          answer: "Godelieve"
        },
        {
          word: "op",
          definition: "Een voorzetsel, hier gebruikt met een datum",
          sentence: "Zij is overleden ___ 01/11/2025.",
          answer: "op"
        },
        {
          word: "87",
          definition: "Een getal, de leeftijd",
          sentence: "Zij is ___ jaar oud.",
          answer: "87"
        },
        {
          word: "overleden",
          definition: "Niet meer leven, dood zijn",
          sentence: "Zij is ___ op 01/11/2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij is ___ in 1937.",
          answer: "geboren"
        },
        {
          sentence: "Zij is overleden ___ 01/11/2025.",
          answer: "op"
        },
        {
          sentence: "Zij is ___ op 01/11/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de leeftijd van Godelieve De Meyer?",
        options: [
          "87",
          "100",
          "90",
          "75"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk jaar is Godelieve De Meyer geboren?",
        options: [
          "1937",
          "1945",
          "1920",
          "1950"
        ],
        correctAnswer: 1
      },
      {
        question: "Is Godelieve De Meyer nog in leven?",
        options: [
          "Ja",
          "Nee",
          "Misschien",
          "Geen idee"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Godelieve De Meyer is 87 jaar oud.",
        isTrue: true
      },
      {
        statement: "Godelieve De Meyer is geboren in 1940.",
        isTrue: false
      },
      {
        statement: "Godelieve De Meyer is overleden op 01/11/2025.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Etienne Wijnant, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Etienne Wijnant, 89 jaar",
      summary: "Hij is geboren in 1936. Hij is overleden op 3 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Hij",
          definition: "verwijst naar een man",
          sentence: "___ is overleden op 3 november 2025.",
          answer: "Hij"
        },
        {
          word: "Hij",
          definition: "verwijst naar een man",
          sentence: "___ is geboren in 1936.",
          answer: "Hij"
        },
        {
          word: "op",
          definition: "geeft een dag of datum aan",
          sentence: "Hij is overleden ___ 3 november 2025.",
          answer: "op"
        },
        {
          word: "is",
          definition: "vorm van 'zijn', geeft een toestand aan",
          sentence: "Hij ___ 89 jaar oud.",
          answer: "is"
        },
        {
          word: "is",
          definition: "vorm van 'zijn', geeft een toestand aan",
          sentence: "Hij ___ 89 jaar oud.",
          answer: "is"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is overleden ___ 3 november 2025.",
          answer: "op"
        },
        {
          sentence: "___ is overleden op 3 november 2025.",
          answer: "Hij"
        },
        {
          sentence: "___ is geboren in 1936.",
          answer: "Hij"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Etienne Wijnant geboren?",
        options: [
          "In 1936",
          "In 1989",
          "In 2000",
          "In 2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud is Etienne Wijnant?",
        options: [
          "89 jaar",
          "90 jaar",
          "100 jaar",
          "85 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Wanneer is Etienne Wijnant overleden?",
        options: [
          "3 november 2025",
          "3 maart 2024",
          "5 mei 2025",
          "1 januari 2023"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Etienne Wijnant is 89 jaar.",
        isTrue: true
      },
      {
        statement: "Etienne Wijnant is geboren in 2025.",
        isTrue: false
      },
      {
        statement: "Etienne Wijnant is overleden op 3 november 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Belgische man opgepakt in Dubai",
    topicNumber: 1,
    article: {
      title: "Belgische man opgepakt in Dubai",
      summary: "De politie heeft een man opgepakt. De man komt uit België. Hij wordt verdacht van drugshandel. De minister van Justitie was op bezoek in Dubai."
    },
    vocabulary: {
      words: [
        {
          word: "opgepakt",
          definition: "gepakt of gevangen genomen door de politie",
          sentence: "De dief werd ___ en naar de gevangenis gebracht.",
          answer: "opgepakt"
        },
        {
          word: "Dubai",
          definition: "een stad in het Midden-Oosten",
          sentence: "Veel toeristen gaan naar ___ voor vakantie.",
          answer: "Dubai"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ houdt de stad veilig.",
          answer: "politie"
        },
        {
          word: "België",
          definition: "een land in Europa",
          sentence: "Hij komt uit ___ en spreekt Frans.",
          answer: "België"
        },
        {
          word: "man",
          definition: "een volwassen persoon van het mannelijk geslacht",
          sentence: "De ___ woont alleen in een groot huis.",
          answer: "man"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De dief werd ___ en naar de gevangenis gebracht.",
          answer: "opgepakt"
        },
        {
          sentence: "Hij komt uit ___ en spreekt Frans.",
          answer: "België"
        },
        {
          sentence: "Veel toeristen gaan naar ___ voor vakantie.",
          answer: "Dubai"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werd de man opgepakt?",
        options: [
          "In België",
          "In Dubai",
          "In Nederland",
          "In Frankrijk"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de minister?",
        options: [
          "Hij is een leraar",
          "Hij is een arts",
          "Hij is een politieagent",
          "Hij is een belangrijk persoon in de regering"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat betekent 'opgepakt'?",
        options: [
          "Vrijgelaten",
          "Gepromoveerd",
          "Gearresteerd door politie",
          "Verhuisd naar een nieuwe stad"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De man komt uit Nederland.",
        isTrue: false
      },
      {
        statement: "De man is opgepakt door de politie.",
        isTrue: true
      },
      {
        statement: "De minister werd ook opgepakt in Dubai.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Supreme Court op weg om Trumps tarieven te verbieden",
    topicNumber: 1,
    article: {
      title: "Supreme Court op weg om Trumps tarieven te verbieden",
      summary: "Verklaart het Supreme Court Donald Trumps tarieven onwettig? Meestal steunen de hoge rechters Trump, maar in dit belangrijke dossier toonden ook drie conservatieve rechters zich woensdag uiterst kritisch en sceptisch."
    },
    vocabulary: {
      words: [
        {
          word: "op",
          definition: "in beweging of onderweg",
          sentence: "Hij is ___ weg naar huis.",
          answer: "op"
        },
        {
          word: "om",
          definition: "met als doel of reden",
          sentence: "Hij ging naar de winkel ___ melk te kopen.",
          answer: "om"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat betekent het als de Supreme Court een beslissing 'terugwijst'?",
        options: [
          "Het besluit volledig ongedaan maken",
          "Het besluit voor onbepaalde tijd uitstellen",
          "Het besluit bekrachtigen",
          "Het besluit naar een lagere rechter sturen voor herziening"
        ],
        correctAnswer: 4
      },
      {
        question: "Waarom waren rechters kritisch over Trumps tarieven?",
        options: [
          "Omdat de tarieven te hoog waren",
          "Omdat de tarieven ongrondwettelijk waren",
          "Omdat de tarieven alleen voor bepaalde groepen golden",
          "Omdat de tarieven niet werden nageleefd"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat impliceert de steun van rechters voor Trump?",
        options: [
          "Dat ze al zijn beslissingen steunen",
          "Dat ze het oneens zijn met zijn beleid",
          "Dat ze zijn autoriteit erkennen",
          "Dat ze zijn voorstellen onderschrijven"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het Supreme Court heeft de bevoegdheid om presidentiële besluiten te beoordelen.",
        isTrue: true
      },
      {
        statement: "De conservatieve rechters steunden Trump in alle kwesties.",
        isTrue: false
      },
      {
        statement: "Sommige rechters toonden scepsis over de grondwettelijkheid van Trumps maatregelen.",
        isTrue: true
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
      summary: "Winnen is één ding, het waarmaken iets anders. Zohran Mamdani wordt een heel andere burgemeester van New York, maar staat voor één grote uitdaging: geld vinden voor zijn plannen, met een president die hem wil saboteren."
    },
    vocabulary: {
      words: [
        {
          word: "vinden",
          definition: "iets zoeken en dan ontdekken",
          sentence: "Ze kon haar sleutels niet ___.",
          answer: "vinden"
        },
        {
          word: "nieuwe",
          definition: "pas ontstaan of recent gemaakt",
          sentence: "De ___ auto rook nog nieuw.",
          answer: "nieuwe"
        },
        {
          word: "even",
          definition: "op dezelfde manier of in gelijke mate",
          sentence: "Zijn broer is even oud.",
          answer: "even"
        },
        {
          word: "winnen",
          definition: "iets behalen door inspanning of geluk, zoals een wedstrijd of verkiezing",
          sentence: "Hij hoopte de verkiezing te ___.",
          answer: "winnen"
        },
        {
          word: "grote",
          definition: "van aanzienlijke omvang of hoeveelheid",
          sentence: "De ___ tafel paste niet in de lift.",
          answer: "grote"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij hoopte de verkiezing te ___.",
          answer: "winnen"
        },
        {
          sentence: "De ___ tafel paste niet in de lift.",
          answer: "grote"
        },
        {
          sentence: "Ze kon haar sleutels niet ___.",
          answer: "vinden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'winnen' in deze context?",
        options: [
          "verliezen",
          "winnen",
          "zoeken",
          "vinden"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'grote' in de titel naar?",
        options: [
          "naar de burgemeester",
          "naar de plannen",
          "naar de vijand",
          "naar de stad"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de president volgens de samenvatting?",
        options: [
          "Hij ondersteunt de plannen",
          "Hij is neutraal",
          "Hij wil helpen",
          "Hij wil saboteren"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De burgemeester heeft geen tegenstanders.",
        isTrue: false
      },
      {
        statement: "De president ondersteunt de burgemeester actief.",
        isTrue: false
      },
      {
        statement: "Geld is een middel om plannen te realiseren.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
    topicNumber: 1,
    article: {
      title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
      summary: "De gerenommeerde Soedan-experte Hager Ali zegt dat het genocidale geweld in Al-Fasher de afgelopen dagen nog is toegenomen. “De logica van de rebellen is dat iedereen die zich nu nog in Al-Fasher bevindt een vijand is. Iedereen is een doelwit: mannen, vrouwen, kinderen.”"
    },
    vocabulary: {
      words: [
        {
          word: "doelwit",
          definition: "iemand of iets dat het doel is van een aanval",
          sentence: "Hij was het ___ van pesterijen op school.",
          answer: "doelwit"
        },
        {
          word: "losgeslagen",
          definition: "niet meer onder controle, onbeheersbaar geworden",
          sentence: "De situatie is volledig ___ en onomkeerbaar.",
          answer: "losgeslagen"
        },
        {
          word: "toegenomen",
          definition: "groter, sterker, of meer geworden",
          sentence: "Het geweld is de afgelopen week sterk ___.",
          answer: "toegenomen"
        },
        {
          word: "stoppen",
          definition: "doen ophouden, tot een einde brengen",
          sentence: "De vredesmacht probeerde het geweld te ___.",
          answer: "stoppen"
        },
        {
          word: "bevindt",
          definition: "zich bevindt, is gelegen, is aanwezig",
          sentence: "Iedereen die zich nu in Al-Fasher ___ is een doelwit.",
          answer: "bevindt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De vredesmacht probeerde het geweld te ___.",
          answer: "stoppen"
        },
        {
          sentence: "De situatie is volledig ___ en onomkeerbaar.",
          answer: "losgeslagen"
        },
        {
          sentence: "Hij was het ___ van pesterijen op school.",
          answer: "doelwit"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden dat de rebellen in Al-Fasher iedereen als doelwit zien?",
        options: [
          "Omdat ze etnisch zuiver willen zijn",
          "Omdat ze hulpbronnen willen beheersen",
          "Omdat ze de regering omver willen werpen",
          "Omdat ze iedereen als vijand beschouwen, ongeacht hun rol"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat wordt er bedoeld met 'losgeslagen' in de context van de titel?",
        options: [
          "De rebellen zijn fysiek uit elkaar gedreven",
          "De rebellen hebben hun morele remmingen verloren",
          "De situatie is onherstelbaar veranderd",
          "De rebellen zijn niet meer te controleren"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de rol van de Soedan-expert Hager Ali in dit artikel?",
        options: [
          "Ze leidt de rebellen in Darfour",
          "Ze analyseert en rapporteert over de situatie",
          "Ze is een slachtoffer van het geweld in Al-Fasher",
          "Ze is een internationaal bemiddelaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het geweld in Al-Fasher is de afgelopen dagen afgenomen.",
        isTrue: false
      },
      {
        statement: "De rebellen beschouwen iedereen in Al-Fasher als een vijand, ongeacht leeftijd of geslacht.",
        isTrue: true
      },
      {
        statement: "Hager Ali is de leider van de rebellen in Darfour.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Beroemdheden",
    topicNumber: 1,
    article: {
      title: "Godelieve De Meyer, 87 jaar",
      summary: "Godelieve De Meyer werd geboren in 1937 en overleed op 01/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Godelieve",
          definition: "Een vrouwelijke voornaam, afgeleid van het Germaans, met de betekenis 'god' en 'liefde'.",
          sentence: "Godelieve is een zeldzame maar mooie naam.",
          answer: "Godelieve"
        },
        {
          word: "Geboren",
          definition: "Het moment waarop een persoon ter wereld komt.",
          sentence: "Hij werd geboren in een klein dorpje.",
          answer: "Geboren"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat betekent de naam 'Godelieve' historisch gezien?",
        options: [
          "Het betekent 'geliefd door God'.",
          "Het is een oud-Griekse term voor 'wijsheid'.",
          "Het is een verbastering van 'Godzilla'.",
          "Het heeft geen specifieke betekenis."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de voornaamste reden dat iemand als 'beroemdheid' wordt beschouwd?",
        options: [
          "Door uitzonderlijke talenten of prestaties.",
          "Door anoniem te blijven in de media.",
          "Door weinig tot geen impact te hebben op de samenleving.",
          "Door alleen in kleine kringen bekend te zijn."
        ],
        correctAnswer: 1
      },
      {
        question: "Welk jaar werd Godelieve De Meyer geboren?",
        options: [
          "1937",
          "1945",
          "1920",
          "1950"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Godelieve De Meyer overleed op 1 november 2025.",
        isTrue: true
      },
      {
        statement: "Het binnenland van een land is altijd het gebied dat grenst aan de zee.",
        isTrue: false
      },
      {
        statement: "Beroemdheden zijn per definitie personen die bekend zijn bij het grote publiek.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Etienne Wijnant, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Etienne Wijnant, 89 jaar",
      summary: "Geboren in 1936, overleden op 03/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "89",
          definition: "Het getal negenentachtig, een jaartal of leeftijd.",
          sentence: "Hij werd ___ jaar oud, een respectabele leeftijd.",
          answer: "89"
        },
        {
          word: "Etienne",
          definition: "Een Franse voornaam, vaak gebruikt voor mannen.",
          sentence: "___ was een bekende kunstenaar uit de vorige eeuw.",
          answer: "Etienne"
        },
        {
          word: "11",
          definition: "Het getal elf; de elfde van de maand.",
          sentence: "Hij overleed op de ___e, een dag vol betekenis.",
          answer: "11"
        },
        {
          word: "2025",
          definition: "Het jaar 2025; een jaartal.",
          sentence: "Hij overleed in ___, een jaar dat nog moet komen.",
          answer: "2025"
        },
        {
          word: "03",
          definition: "De derde dag van de maand; ook wel de 3e genoemd.",
          sentence: "Hij overleed op de ___e van de maand, een dag om te onthouden.",
          answer: "03"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij overleed op de ___e van de maand, een dag om te onthouden.",
          answer: "03"
        },
        {
          sentence: "Hij werd ___ jaar oud, een respectabele leeftijd.",
          answer: "89"
        },
        {
          sentence: "Hij overleed in ___, een jaar dat nog moet komen.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Etienne Wijnant geboren?",
        options: [
          "1920",
          "1936",
          "1945",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Etienne Wijnant toen hij overleed?",
        options: [
          "75 jaar",
          "80 jaar",
          "89 jaar",
          "90 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Op welke datum overleed Etienne Wijnant?",
        options: [
          "03-11-2024",
          "03-11-2025",
          "04-11-2025",
          "03-12-2025"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Etienne Wijnant werd geboren in 1936.",
        isTrue: true
      },
      {
        statement: "Etienne Wijnant overleed in het jaar 2024.",
        isTrue: false
      },
      {
        statement: "Etienne Wijnant was 89 jaar oud toen hij overleed.",
        isTrue: true
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Belgische drugsbaron opgepakt in Dubai",
    topicNumber: 1,
    article: {
      title: "Belgische drugsbaron opgepakt in Dubai",
      summary: "Net terwijl minister van Justitie Verlinden op werkbezoek is aan de Verenigde Arabische Emiraten, heeft de politie van het land de voortvluchtige Belgische drugsbaron Omar Govers (35) gearresteerd met het oog op uitlevering."
    },
    vocabulary: {
      words: [
        {
          word: "opgepakt",
          definition: "Gearresteerd, in hechtenis genomen.",
          sentence: "De verdachte werd uiteindelijk ___ door de politie.",
          answer: "opgepakt"
        },
        {
          word: "politie",
          definition: "De overheidsinstantie die verantwoordelijk is voor handhaving van de wet.",
          sentence: "De ___ kreeg een anonieme tip.",
          answer: "politie"
        },
        {
          word: "Justitie",
          definition: "Het ministerie of de overheidsinstantie die belast is met rechtshandhaving.",
          sentence: "Hij werkt al jaren bij ___.",
          answer: "Justitie"
        },
        {
          word: "uitlevering",
          definition: "Het proces waarbij een persoon wordt overgedragen aan een ander land voor berechting.",
          sentence: "Er werd een verzoek tot ___ ingediend.",
          answer: "uitlevering"
        },
        {
          word: "voortvluchtige",
          definition: "Iemand die op de vlucht is voor justitie.",
          sentence: "De ___ werd na maanden gevonden.",
          answer: "voortvluchtige"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werd na maanden gevonden.",
          answer: "voortvluchtige"
        },
        {
          sentence: "Hij werkt al jaren bij ___.",
          answer: "Justitie"
        },
        {
          sentence: "De ___ kreeg een anonieme tip.",
          answer: "politie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van minister Verlinden in deze situatie?",
        options: [
          "Hij leidt het onderzoek",
          "Hij is op werkbezoek in het land",
          "Hij is de gearresteerde persoon",
          "Hij is de drugsbaron zelf"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom werd Omar Govers gearresteerd?",
        options: [
          "Voor het plegen van een bankoverval",
          "Voor het leiden van een drugsbende",
          "Voor het ontduiken van belastingen",
          "Voor het plegen van fraude"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de huidige status van Omar Gavers?",
        options: [
          "Hij is nog steeds voortvluchtig",
          "Hij is ontsnapt uit de gevangenis",
          "Hij is overleden",
          "Hij is uitgeleverd aan België"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Minister Verlinden was op werkbezoek in de Verenigde Arabische Emiraten tijdens deze gebeurtenis.",
        isTrue: true
      },
      {
        statement: "Omar Govers is een Belgische drugsbaron die nog nooit is gearresteerd.",
        isTrue: false
      },
      {
        statement: "De arrestatie vond plaats met het oog op uitlevering, niet voor directe berechting in Dubai.",
        isTrue: true
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Supreme Court beslist over Trumps tarieven",
    topicNumber: 1,
    article: {
      title: "Supreme Court beslist over Trumps tarieven",
      summary: "Het Supreme Court beslist over de tarieven van Donald Trump. Meestal steunen de rechters Trump, maar in dit geval zijn enkele rechters kritisch."
    },
    vocabulary: {
      words: [
        {
          word: "beslist",
          definition: "heeft bepaald, heeft een beslissing genomen",
          sentence: "De rechter ___ over de zaak.",
          answer: "beslist"
        },
        {
          word: "tarieven",
          definition: "de prijzen of kosten voor iets",
          sentence: "De ___ voor elektriciteit zijn gestegen.",
          answer: "tarieven"
        },
        {
          word: "steunen",
          definition: "helpen of ondersteunen",
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        },
        {
          word: "rechters",
          definition: "personen die beslissen over recht en wet",
          sentence: "De ___ zijn onpartijdig.",
          answer: "rechters"
        },
        {
          word: "kritisch",
          definition: "ietwat negatief of veeleisend",
          sentence: "De recensie was ___ over de nieuwe film.",
          answer: "kritisch"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        },
        {
          sentence: "De recensie was ___ over de nieuwe film.",
          answer: "kritisch"
        },
        {
          sentence: "De rechter ___ over de zaak.",
          answer: "beslist"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'steunen' in deze context?",
        options: [
          "laten vallen",
          "ondersteunen",
          "negeren",
          "bekritiseren"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar staat 'SCOTUS' voor?",
        options: [
          "Supreme Court Of The United States",
          "Senior Court of Texas",
          "Special Council of the United States",
          "Supreme Council of the United States"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdtaak van het Supreme Court?",
        options: [
          "wetten maken",
          "wetten interpreteren",
          "verkiezingen organiseren",
          "strafen uitdelen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Supreme Court heeft de macht om presidenten te vervolgen.",
        isTrue: false
      },
      {
        statement: "Rechters in het Supreme Court worden voor het leven benoemd.",
        isTrue: true
      },
      {
        statement: "Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
      summary: "Winnen is één ding, het waarmaken iets anders. Zohran Mamdani wordt een heel andere burgemeester van New York, maar staat voor één grote uitdaging: geld vinden voor zijn plannen, met een president die hem wil saboteren."
    },
    vocabulary: {
      words: [
        {
          word: "winnen",
          definition: "iets halen wat je wil, zoals een wedstrijd of verkiezing",
          sentence: "Hij hoopt de verkiezing te ___.",
          answer: "winnen"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om te betalen voor dingen",
          sentence: "Hij heeft niet genoeg ___ om een nieuwe fiets te kopen.",
          answer: "geld"
        },
        {
          word: "plannen",
          definition: "dingen die je van plan bent te doen in de toekomst",
          sentence: "Hij heeft grote ___ voor de stad.",
          answer: "plannen"
        },
        {
          word: "vijand",
          definition: "iemand die tegen je is en je kwaad wil doen",
          sentence: "De president is zijn grote ___.",
          answer: "vijand"
        },
        {
          word: "president",
          definition: "de leider van een land",
          sentence: "De ___ van Amerika wil hem niet helpen.",
          answer: "president"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft grote ___ voor de stad.",
          answer: "plannen"
        },
        {
          sentence: "Hij hoopt de verkiezing te ___.",
          answer: "winnen"
        },
        {
          sentence: "De president is zijn grote ___.",
          answer: "vijand"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'winnen' in deze context?",
        options: [
          "verliezen",
          "een prijs krijgen",
          "een wedstrijd winnen",
          "geen van bovenstaande"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar staat 'geld' voor in de tekst?",
        options: [
          "een soort eten",
          "een soort geld",
          "een soort machine",
          "een soort muziek"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over een nieuwe auto",
          "Over een nieuwe burgemeester",
          "Over het weer",
          "Over een vakantie"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is de nieuwe burgemeester van New York.",
        isTrue: true
      },
      {
        statement: "De president van Amerika helpt Zohran Mamdani.",
        isTrue: false
      },
      {
        statement: "Zohran Mamdani heeft grote plannen voor de stad.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
    topicNumber: 1,
    article: {
      title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
      summary: "De gerenommeerde Soedan-experte Hager Ali zegt dat het genocidale geweld in Al-Fasher de afgelopen dagen nog is toegenomen. “De logica van de rebellen is dat iedereen die zich nu nog in Al-Fasher bevindt een vijand is. Iedereen is een doelwit: mannen, vrouwen, kinderen.”"
    },
    vocabulary: {
      words: [
        {
          word: "experte",
          definition: "een deskundige, iemand die veel weet over een onderwerp",
          sentence: "De ___ Hager Ali spreekt over de situatie in Soedan.",
          answer: "experte"
        },
        {
          word: "experte",
          definition: "een deskundige, iemand die veel weet over een onderwerp",
          sentence: "De ___ geeft uitleg over de situatie in Soedan.",
          answer: "experte"
        },
        {
          word: "genocidale",
          definition: "gerelateerd aan genocide, het opzettelijk doden van een hele groep mensen",
          sentence: "Het geweld in Al-Fasher is ___ en wreed.",
          answer: "genocidale"
        },
        {
          word: "vijand",
          definition: "iemand die tegen je is en kwaad wil doen",
          sentence: "Iedereen in Al-Fasher wordt gezien als een ___ door de rebellen.",
          answer: "vijand"
        },
        {
          word: "logica",
          definition: "de manier van denken of redeneren",
          sentence: "De ___ van de rebellen is dat iedereen een vijand is.",
          answer: "logica"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het geweld in Al-Fasher is ___ en wreed.",
          answer: "genocidale"
        },
        {
          sentence: "Iedereen in Al-Fasher wordt gezien als een ___ door de rebellen.",
          answer: "vijand"
        },
        {
          sentence: "De ___ geeft uitleg over de situatie in Soedan.",
          answer: "experte"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover spreekt de Soedan-experte Hager Ali?",
        options: [
          "Over de politiek in Nederland",
          "Over het geweld in Al-Fasher, Soedan",
          "Over de geschiedenis van Frankrijk",
          "Over de economie van Japan"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van de rebellen in Darfour?",
        options: [
          "Ze willen vrede sluiten",
          "Ze zijn een losgeslagen moordmachine",
          "Ze geven veel geld aan de bevolking",
          "Ze werken samen met andere landen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie wordt getroffen door het geweld in Al-Fasher?",
        options: [
          "Alleen soldaten",
          "Alleen mannen",
          "Alleen kinderen",
          "Iedereen: mannen, vrouwen, kinderen"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De rebellen in Darfour zijn makkelijk te stoppen.",
        isTrue: false
      },
      {
        statement: "Het geweld in Al-Fasher is de afgelopen dagen toegenomen.",
        isTrue: true
      },
      {
        statement: "Hager Ali is een Soedan-experte die zegt dat alleen mannen worden aangevallen.",
        isTrue: false
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Bekende vrouw overleden",
    topicNumber: 1,
    article: {
      title: "Bekende vrouw overleden",
      summary: "Godelieve De Meyer is overleden. Ze werd 87 jaar. Ze is geboren in 1937 en overleden in 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Bekende",
          definition: "iemand die veel mensen kennen",
          sentence: "Godelieve De Meyer was een ___ in Vlaanderen.",
          answer: "Bekende"
        },
        {
          word: "overleden",
          definition: "niet meer levend, dood",
          sentence: "Helaas is zij nu ___.",
          answer: "overleden"
        },
        {
          word: "vrouw",
          definition: "een volwassen persoon van het vrouwelijk geslacht",
          sentence: "Deze ___ was 87 jaar oud.",
          answer: "vrouw"
        },
        {
          word: "overleden",
          definition: "gestorven, niet meer levend",
          sentence: "Helaas is zij nu ___.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Godelieve De Meyer was een ___ in Vlaanderen.",
          answer: "Bekende"
        },
        {
          sentence: "Helaas is zij nu ___.",
          answer: "overleden"
        },
        {
          sentence: "Helaas is zij nu ___.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat gebeurde er met Godelieve De Meyer?",
        options: [
          "Ze is verhuisd naar een ander land",
          "Ze is overleden",
          "Ze werd koningin",
          "Ze is op vakantie gegaan"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Godelieve De Meyer toen ze overleed?",
        options: [
          "60 jaar",
          "75 jaar",
          "87 jaar",
          "100 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "In welk jaar is Godelieve De Meyer geboren?",
        options: [
          "1937",
          "1945",
          "1950",
          "1960"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Godelieve De Meyer is nog in leven.",
        isTrue: false
      },
      {
        statement: "Godelieve De Meyer werd 87 jaar oud.",
        isTrue: true
      },
      {
        statement: "Godelieve De Meyer is geboren in 1940.",
        isTrue: false
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Etienne Wijnant, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Etienne Wijnant, 89 jaar",
      summary: "Hij is geboren in 1936 en overleden op 03/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Wijnant",
          definition: "Een achternaam, een familienaam",
          sentence: "Etienne ___ is zijn volledige naam.",
          answer: "Wijnant"
        },
        {
          word: "geboren",
          definition: "Het begin van het leven, wanneer iemand wordt geboren",
          sentence: "Hij is ___ in 1936.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer leven, gestorven zijn",
          sentence: "Hij is ___ op 03/11/2025.",
          answer: "overleden"
        },
        {
          word: "Etienne",
          definition: "Een voornaam, een naam van een persoon",
          sentence: "___ Wijnant is de volledige naam van de man.",
          answer: "Etienne"
        },
        {
          word: "2025",
          definition: "Het jaartal, tweeduizend vijfentwintig",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ Wijnant is de volledige naam van de man.",
          answer: "Etienne"
        },
        {
          sentence: "Etienne ___ is zijn volledige naam.",
          answer: "Wijnant"
        },
        {
          sentence: "Hij is ___ in 1936.",
          answer: "geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar werd Etienne Wijnant geboren?",
        options: [
          "1936",
          "1945",
          "1950",
          "1960"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Etienne Wijnant geworden?",
        options: [
          "89 jaar",
          "90 jaar",
          "100 jaar",
          "80 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Etienne Wijnant?",
        options: [
          "03/11/2025",
          "04/11/2025",
          "03/12/2025",
          "05/11/2024"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Etienne Wijnant werd geboren in 1936.",
        isTrue: true
      },
      {
        statement: "Etienne Wijnant overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Etienne Wijnant werd 89 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Belgische drugsbaron opgepakt in Dubai",
    topicNumber: 1,
    article: {
      title: "Belgische drugsbaron opgepakt in Dubai",
      summary: "Een Belgische drugsbaron wordt in Dubai gearresteerd. Minister van Justitie Verlinden is op dat moment in de Verenigde Arabische Emiraten voor werk. De politie van het land pakt de man. De man heet Omar Govers en is 35 jaar oud. Er wordt gewerkt aan zijn uitlevering."
    },
    vocabulary: {
      words: [
        {
          word: "drugsbaron",
          definition: "een persoon die handelt in verboden drugs",
          sentence: "De politie arresteerde een beruchte ___ tijdens een inval.",
          answer: "drugsbaron"
        },
        {
          word: "opgepakt",
          definition: "gearresteerd, door de politie meegenomen",
          sentence: "De politie heeft de verdachte ___ na een lange zoektocht.",
          answer: "opgepakt"
        },
        {
          word: "Belgische",
          definition: "iemand of iets dat uit België komt",
          sentence: "De ___ atleet won goud op de Olympische Spelen.",
          answer: "Belgische"
        },
        {
          word: "uitlevering",
          definition: "het overdragen van een persoon aan een ander land voor berechting",
          sentence: "De verdachte ondergaat een ___ naar de Verenigde Staten.",
          answer: "uitlevering"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De verdachte ondergaat een ___ naar de Verenigde Staten.",
          answer: "uitlevering"
        },
        {
          sentence: "De ___ atleet won goud op de Olympische Spelen.",
          answer: "Belgische"
        },
        {
          sentence: "De politie heeft de verdachte ___ na een lange zoektocht.",
          answer: "opgepakt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werd Omar Govers gearresteerd?",
        options: [
          "In een hotel in Brussel",
          "In een politiebureau in Antwerpen",
          "In een gevangenis in Dubai",
          "Op straat in Dubai"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van minister Verlinden in deze zaak?",
        options: [
          "Ze is de drugsbaron",
          "Ze leidt het onderzoek in Dubai",
          "Ze is op werkbezoek in de Verenigde Arabische Emiraten",
          "Ze arresteerde Omar Gapers persoonlijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'uitlevering' in deze context?",
        options: [
          "Het uitleveren van een cadeau",
          "Het vrijgeven van een gevangene",
          "Het overdragen van een persoon aan een ander land voor berechting",
          "Het ophalen van iemand van het vliegveld"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Omar Gavers is de volledige naam van de drugsbaron.",
        isTrue: false
      },
      {
        statement: "Minister Verlinden was in de Verenigde Arabische Emiraten voor werk.",
        isTrue: true
      },
      {
        statement: "Omar Govers werd opgepakt in België.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Supreme Court op weg om Trumps tarieven te verbieden",
    topicNumber: 1,
    article: {
      title: "Supreme Court op weg om Trumps tarieven te verbieden",
      summary: "Verklaart het Supreme Court Donald Trumps tarieven onwettig? Meestal steunen de hoge rechters Trump, maar in dit belangrijke dossier toonden ook drie conservatieve rechters zich woensdag uiterst kritisch en sceptisch."
    },
    vocabulary: {
      words: [
        {
          word: "sceptisch",
          definition: "twijfelend, niet direct gelovend",
          sentence: "Wees ___ over te mooie beloften.",
          answer: "sceptisch"
        },
        {
          word: "conservatieve",
          definition: "behoudend, gericht op behoud van tradities",
          sentence: "Hij heeft erg ___e standpunten over economie.",
          answer: "conservatieve"
        },
        {
          word: "steunen",
          definition: "ondersteunen, helpen",
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        },
        {
          word: "onwettig",
          definition: "niet volgens de wet, illegaal",
          sentence: "Het is ___ om zonder rijbewijs auto te rijden.",
          answer: "onwettig"
        },
        {
          word: "tarieven",
          definition: "verouderd woord voor prijzen, tegenwoordig vooral gebruikt voor kosten die in rekening worden gebracht",
          sentence: "De meeste artsen hanteren vaste ___ voor een consult.",
          answer: "tarieven"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Vrienden ___ elkaar in moeilijke tijden.",
          answer: "steunen"
        },
        {
          sentence: "Het is ___ om zonder rijbewijs auto te rijden.",
          answer: "onwettig"
        },
        {
          sentence: "Hij heeft erg ___e standpunten over economie.",
          answer: "conservatieve"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als de rechters een maatregel 'onwettig' verklaren?",
        options: [
          "Het is nooit gebeurd",
          "Het is tegen de wet",
          "Het is een speciale actie",
          "Het is goedgekeurd door de regering"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een synoniem voor 'steunen' in deze context?",
        options: [
          "Tegenwerken",
          "Ondersteunen",
          "Negeren",
          "Bekritiseren"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemt de tekst sommige rechters 'conservatief'?",
        options: [
          "Omdat ze erg streng zijn",
          "Omdat ze traditionele waarden belangrijk vinden",
          "Omdat ze tegen verandering zijn",
          "Omdat ze de regering steunen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Supreme Court heeft de macht om handelingen van de president onwettig te verklaren.",
        isTrue: true
      },
      {
        statement: "De rechters van het Supreme Court worden allemaal voor het leven benoemd.",
        isTrue: true
      },
      {
        statement: "Donald Trump is momenteel de president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
    topicNumber: 1,
    article: {
      title: "Zohran Mamdani, de nieuwe burgemeester van New York, heeft grote plannen, maar een al even grote vijand",
      summary: "Winnen is één ding, het waarmaken iets anders. Zohran Mamdani wordt een heel andere burgemeester van New York, maar staat voor één grote uitdaging: geld vinden voor zijn plannen, met een president die hem wil saboteren."
    },
    vocabulary: {
      words: [
        {
          word: "winnen",
          definition: "iets of iemand verslaan in een wedstrijd of verkiezing",
          sentence: "Hij hoopte de wedstrijd te ___ met zijn team.",
          answer: "winnen"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om te betalen voor iets, in de vorm van munten of briefjes",
          sentence: "Hij had niet genoeg ___ om de nieuwe fiets te kopen.",
          answer: "geld"
        },
        {
          word: "plannen",
          definition: "iets wat je van plan bent te doen in de toekomst",
          sentence: "Ze hadden grote ___ voor hun vakantie.",
          answer: "plannen"
        },
        {
          word: "vinden",
          definition: "iets of iemand ontdekken door te zoeken",
          sentence: "Ze konden de sleutel niet ___ in de rommelige kamer.",
          answer: "vinden"
        },
        {
          word: "zijn",
          definition: "bestaan of voorkomen",
          sentence: "De bloemen ___ geel en rood.",
          answer: "zijn"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij hoopte de wedstrijd te ___ met zijn team.",
          answer: "winnen"
        },
        {
          sentence: "Ze hadden grote ___ voor hun vakantie.",
          answer: "plannen"
        },
        {
          sentence: "Hij had niet genoeg ___ om de nieuwe fiets te kopen.",
          answer: "geld"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het om iets 'waar te maken'?",
        options: [
          "Het echt laten gebeuren",
          "Erover liegen",
          "Het verbergen voor anderen",
          "Het negeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar staat 'Verenigde Staten' voor in deze context?",
        options: [
          "Een land",
          "Een sportteam",
          "Een muziekband",
          "Een stad"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'vijand' in deze tekst?",
        options: [
          "Iemand die je helpt",
          "Iemand die je tegenwerkt",
          "Iemand die je negeert",
          "Iemand die je bewondert"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Zohran Mamdani is de nieuwe burgemeester van New York.",
        isTrue: true
      },
      {
        statement: "De president van de Verenigde Staten helpt Mamdani met zijn plannen.",
        isTrue: false
      },
      {
        statement: "Mamdani heeft grote plannen voor New York.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
    topicNumber: 1,
    article: {
      title: "Soedan-experte: “Het is te laat om de rebellen in Darfour te stoppen: dit is een losgeslagen moordmachine”",
      summary: "De gerenommeerde Soedan-experte Hager Ali zegt dat het genocidale geweld in Al-Fasher de afgelopen dagen nog is toegenomen. “De logica van de rebellen is dat iedereen die zich nu nog in Al-Fasher bevindt een vijand is. Iedereen is een doelwit: mannen, vrouwen, kinderen.”"
    },
    vocabulary: {
      words: [
        {
          word: "experte",
          definition: "een deskundige of specialist in een bepaald gebied",
          sentence: "De ___ gaf een duidelijk overzicht van de situatie.",
          answer: "experte"
        },
        {
          word: "geweld",
          definition: "het gebruik van fysieke kracht, vaak met als doel te beschadigen",
          sentence: "Het ___ escaleerde snel na de protesten.",
          answer: "geweld"
        },
        {
          word: "logica",
          definition: "de manier waarop iets redelijk of logisch is",
          sentence: "De ___ achter het besluit was voor niemand duidelijk.",
          answer: "logica"
        },
        {
          word: "vijand",
          definition: "iemand die tegen je is of waarmee je in conflict bent",
          sentence: "Hij beschouwde haar als zijn grootste ___.",
          answer: "vijand"
        },
        {
          word: "rebellen",
          definition: "mensen die tegen de gevestigde macht vechten, vaak in een oorlog",
          sentence: "De ___ trokken zich terug uit de stad.",
          answer: "rebellen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ gaf een duidelijk overzicht van de situatie.",
          answer: "experte"
        },
        {
          sentence: "De ___ achter het besluit was voor niemand duidelijk.",
          answer: "logica"
        },
        {
          sentence: "Hij beschouwde haar als zijn grootste ___.",
          answer: "vijand"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waaruit bestaat de genocidale actie in Al-Fasher volgens de expert?",
        options: [
          "Uit het stelen van voedselvoorraden",
          "Uit het richten van geweld op iedereen, inclusief burgers",
          "Uit het negeren van internationale wetten",
          "Uit het alleen aanvallen van militaire doelen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de rebellen in Darfoer volgens deze context?",
        options: [
          "Ze bouwen scholen en ziekenhuizen",
          "Ze handhaven vrede en stabiliteit",
          "Ze voeren een genocidaal geweld uit waarin iedereen een doelwit is",
          "Ze werken samen met internationale vredestroepen"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe beschrijft de expert de situatie in Al-Fasher?",
        options: [
          "Als een vreedzaam protest",
          "Als een chaotische maar geweldloze situatie",
          "Als genocidaal geweld dat de afgelopen dagen is toegenomen",
          "Als een tijd van grote vreugde en feest"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rebellen in Darfour beschouwen alleen mannen als hun vijanden.",
        isTrue: false
      },
      {
        statement: "Het geweld in Al-Fasher is de afgelopen dagen toegenomen, volgens de expert.",
        isTrue: true
      },
      {
        statement: "De rebellen zien iedereen in Al-Fasher als een vriend en bondgenoot.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Godelieve De Meyer, 87 jaar",
    topicNumber: 1,
    article: {
      title: "Godelieve De Meyer, 87 jaar",
      summary: "Godelieve De Meyer is geboren in 1937 en overleden op 1 november 2025."
    },
    vocabulary: {
      words: [
        {
          word: "Godelieve",
          definition: "Een vrouwelijke voornaam, afgeleid van 'God' en 'liefde'",
          sentence: "___ De Meyer was een bekende inwoner van het dorp.",
          answer: "Godelieve"
        },
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig",
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        },
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig",
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        },
        {
          word: "1",
          definition: "Het getal één; de eerste in een reeks",
          sentence: "Ze overleed op ___ november 2025.",
          answer: "1"
        },
        {
          word: "geboren",
          definition: "Het begin van het leven; ter wereld komen",
          sentence: "Ze werd ___ in 1937.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        },
        {
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        },
        {
          sentence: "___ De Meyer was een bekende inwoner van het dorp.",
          answer: "Godelieve"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Godelieve De Meyer geboren?",
        options: [
          "1930",
          "1935",
          "1940",
          "1937"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe oud was Godelieve De Meyer toen ze overleed?",
        options: [
          "75 jaar",
          "80 jaar",
          "87 jaar",
          "90 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "In welke maand overleed Godelieve De Meyer?",
        options: [
          "Januari",
          "Februari",
          "November",
          "December"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Godelieve De Meyer overleed op 1 november 2025.",
        isTrue: true
      },
      {
        statement: "Godelieve De Meyer werd 90 jaar oud.",
        isTrue: false
      },
      {
        statement: "Godelieve De Meyer is geboren in 1937.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Etienne Wijnant, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Etienne Wijnant, 89 jaar",
      summary: "Etienne Wijnant werd geboren in 1936 en overleed op 03/11/2025. Hij heeft zijn hele leven in Nederland gewoond."
    },
    vocabulary: {
      words: [
        {
          word: "Etienne",
          definition: "een voornaam, vaak van Franse oorsprong",
          sentence: "___ was de voornaam van de overleden man.",
          answer: "Etienne"
        },
        {
          word: "Wijnant",
          definition: "een achternaam, waarschijnlijk van Nederlandse oorsprong",
          sentence: "Zijn achternaam was ___.",
          answer: "Wijnant"
        },
        {
          word: "89",
          definition: "het getal negenentachtig, tussen 88 en 90",
          sentence: "Hij werd ___ jaar oud.",
          answer: "89"
        },
        {
          word: "1936",
          definition: "het jaar negentienhonderdzesendertig, een jaartal",
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1936"
        },
        {
          word: "2025",
          definition: "het jaar tweeduizend vijfentwintig, een jaartal",
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zijn achternaam was ___.",
          answer: "Wijnant"
        },
        {
          sentence: "Hij overleed in het jaar ___.",
          answer: "2025"
        },
        {
          sentence: "Hij werd geboren in het jaar ___.",
          answer: "1936"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Etienne Wijnant geboren?",
        options: [
          "1920",
          "1936",
          "1940",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Etienne Wijnant toen hij overleed?",
        options: [
          "75 jaar",
          "80 jaar",
          "89 jaar",
          "90 jaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar heeft Etienne Wijnant zijn hele leven gewoond?",
        options: [
          "België",
          "Duitsland",
          "Nederland",
          "Frankrijk"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Etienne Wijnant is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Etienne Wijnant werd 100 jaar oud.",
        isTrue: false
      },
      {
        statement: "Etienne Wijnant is geboren in Nederland.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Belgische drugsbaron opgepakt in Dubai",
    topicNumber: 1,
    article: {
      title: "Belgische drugsbaron opgepakt in Dubai",
      summary: "Net terwijl minister van Justitie Verlinden op werkbezoek is aan de Verenigde Arabische Emiraten, heeft de politie van het land de voortvluchtige Belgische drugsbaron Omar Govers (35) gearresteerd met het oog op uitlevering."
    },
    vocabulary: {
      words: [
        {
          word: "drugsbaron",
          definition: "een leider van een organisatie die handelt in verdovende middelen",
          sentence: "De ___ werd gearresteerd in Dubai.",
          answer: "drugsbaron"
        },
        {
          word: "opgepakt",
          definition: "gearresteerd of gevangen genomen",
          sentence: "Hij werd ___ door de politie.",
          answer: "opgepakt"
        },
        {
          word: "minister",
          definition: "een persoon met een hoge positie in de regering",
          sentence: "De ___ van Justitie bezoekt het land.",
          answer: "minister"
        },
        {
          word: "Justitie",
          definition: "het ministerie dat gaat over rechtspraak",
          sentence: "Minister van ___ is verantwoordelijk voor rechtspraak.",
          answer: "Justitie"
        },
        {
          word: "werkbezoek",
          definition: "een officieel bezoek met een werkgerelateerd doel",
          sentence: "Tijdens het ___ besprak hij samenwerking.",
          answer: "werkbezoek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens het ___ besprak hij samenwerking.",
          answer: "werkbezoek"
        },
        {
          sentence: "Hij werd ___ door de politie.",
          answer: "opgepakt"
        },
        {
          sentence: "De ___ van Justitie bezoekt het land.",
          answer: "minister"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom was minister Verlinden in de Verenigde Arabische Emiraten?",
        options: [
          "Om te vakantie vieren",
          "Voor een officieel werkbezoek",
          "Om een vriend te bezoeken",
          "Voor medische behandeling"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de hoofdactiviteit van Omar Govers?",
        options: [
          "Hij is een kunstenaar",
          "Hij is een professionele atleet",
          "Hij is een drugsbaron",
          "Hij is een restauranteigenaar"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurt er met Omar Gavers nadat hij is gearresteerd?",
        options: [
          "Hij wordt meteen vrijgelaten",
          "Hij wordt uitgeleverd aan België",
          "Hij krijgt een medaille",
          "Hij wordt minister van Justitie"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Omar Gavers is een Belgische drugsbaron.",
        isTrue: true
      },
      {
        statement: "Minister Verlinden was op vakantie in de Verenigde Arabische Emiraten.",
        isTrue: false
      },
      {
        statement: "Omar Gavers wordt uitgeleverd aan België.",
        isTrue: true
      }
    ]
  }
];
