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
    title: "Witte Huis beperkt toegang voor journalisten",
    topicNumber: 1,
    article: {
      title: "Witte Huis beperkt toegang voor journalisten",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "beperkt",
          definition: "niet volledig, met een grens",
          sentence: "De toegang tot het gebied is ___.",
          answer: "beperkt"
        },
        {
          word: "journalisten",
          definition: "mensen die nieuwsberichten schrijven",
          sentence: "De ___ interviewden de politicus.",
          answer: "journalisten"
        },
        {
          word: "wereldwijd",
          definition: "over de hele wereld",
          sentence: "Deze trend is ___ te zien.",
          answer: "wereldwijd"
        },
        {
          word: "updates",
          definition: "nieuwe, recente informatie",
          sentence: "Blijf op de hoogte met onze ___.",
          answer: "updates"
        },
        {
          word: "brengt",
          definition: "veroorzaakt, levert op",
          sentence: "De nieuwe regel ___ veel problemen.",
          answer: "brengt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Blijf op de hoogte met onze ___.",
          answer: "updates"
        },
        {
          sentence: "Deze trend is ___ te zien.",
          answer: "wereldwijd"
        },
        {
          sentence: "De toegang tot het gebied is ___.",
          answer: "beperkt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'beperkt' in deze context?",
        options: [
          "oneindig",
          "beperkt",
          "geheim",
          "gewoon"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van journalisten in dit artikel?",
        options: [
          "Ze worden buitengesloten",
          "Ze krijgen speciale toegang",
          "Ze schrijven over het weer",
          "Ze bepalen het nieuws"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Trump verandert niets",
          "Trump's tweede termijn beïnvloedt de wereld",
          "Journalisten hebben meer macht",
          "De toegang is volledig open"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Journalisten mogen overal in het Witte Huis komen.",
        isTrue: false
      },
      {
        statement: "Donald Trump is momenteel president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "De toegang tot het Witte Huis is beperkt voor journalisten.",
        isTrue: true
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Oorlog in Oekraïne",
    topicNumber: 1,
    article: {
      title: "Oorlog in Oekraïne",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "een situatie waarin landen of groepen vechten",
          sentence: "De ___ in Oekraïne is begonnen in 2022.",
          answer: "oorlog"
        },
        {
          word: "download",
          definition: "iets van internet naar je apparaat halen",
          sentence: "___ de app om op de hoogte te blijven.",
          answer: "download"
        },
        {
          word: "Oekraïne",
          definition: "een land in Oost-Europa",
          sentence: "De oorlog in ___ duurt nu al twee jaar.",
          answer: "Oekraïne"
        },
        {
          word: "ontwikkelingen",
          definition: "gebeurtenissen of veranderingen die plaatsvinden",
          sentence: "Volg de laatste ___ in het conflict op onze website.",
          answer: "ontwikkelingen"
        },
        {
          word: "melding",
          definition: "een bericht dat je iets laat weten",
          sentence: "Je krijgt een ___ wanneer er nieuws is.",
          answer: "melding"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ de app om op de hoogte te blijven.",
          answer: "download"
        },
        {
          sentence: "Je krijgt een ___ wanneer er nieuws is.",
          answer: "melding"
        },
        {
          sentence: "Volg de laatste ___ in het conflict op onze website.",
          answer: "ontwikkelingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Oekraïne?",
        options: [
          "Kiev",
          "Parijs",
          "Berlijn",
          "Londen"
        ],
        correctAnswer: 1
      },
      {
        question: "Sinds wanneer is er oorlog in Oekraïne?",
        options: [
          "sinds 2022",
          "sinds 2000",
          "sinds 2014",
          "sinds 2020"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is het belangrijk om updates te volgen?",
        options: [
          "Om te leren",
          "Om op de hoogte te blijven",
          "Om te vermaken",
          "Om te vergeten"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne ligt in Azië.",
        isTrue: false
      },
      {
        statement: "De oorlog in Oekraïne begon in 2022.",
        isTrue: true
      },
      {
        statement: "Je kunt de DS Nieuws app downloaden voor updates.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Frans parlement verwerpt rijkentaks",
    topicNumber: 1,
    article: {
      title: "Frans parlement verwerpt rijkentaks",
      summary: "Het Franse parlement heeft voorstellen om de rijksten te belasten verworpen. Er is geen sprake van een wonderbelasting."
    },
    vocabulary: {
      words: [
        {
          word: "Frans",
          definition: "Betrekking hebbend op Frankrijk",
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          word: "parlement",
          definition: "Een groep mensen die wetten maakt",
          sentence: "Het Nederlands ___ bestaat uit de Eerste en Tweede Kamer.",
          answer: "parlement"
        },
        {
          word: "verwerpt",
          definition: "Niet accepteren, afwijzen",
          sentence: "De regering ___ het voorstel voor een nieuwe wet.",
          answer: "verwerpt"
        },
        {
          word: "rijkentaks",
          definition: "Belasting voor mensen met veel geld",
          sentence: "De ___ is bedoeld om de rijken te belasten.",
          answer: "rijkentaks"
        },
        {
          word: "is",
          definition: "Zijn, het tegenwoordige tijd van 'zijn'",
          sentence: "Hij ___ erg blij met het resultaat.",
          answer: "is"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het Nederlands ___ bestaat uit de Eerste en Tweede Kamer.",
          answer: "parlement"
        },
        {
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          sentence: "De ___ is bedoeld om de rijken te belasten.",
          answer: "rijkentaks"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het Franse parlement?",
        options: [
          "Een gebouw in Parijs",
          "De Assemblée Nationale",
          "Een groep Franse ministers",
          "De Franse regering"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'verwerpt' in deze context?",
        options: [
          "Accepteert",
          "Verwerpt",
          "Wijst af",
          "Verbergt"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een belasting voor iedereen",
          "Een belasting voor de armen",
          "Een belasting voor de rijken",
          "Een feest in Frankrijk"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Het Franse parlement heeft de rijkentaks goedgekeurd.",
        isTrue: false
      },
      {
        statement: "Er is een nieuwe wet aangenomen in Frankrijk.",
        isTrue: false
      },
      {
        statement: "De rijkentaks is niet ingevoerd in Frankrijk.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Rijverbod en boete voor Van Gucht",
    topicNumber: 1,
    article: {
      title: "Rijverbod en boete voor Van Gucht",
      summary: "Ruben Van Gucht heeft een rijverbod en een boete gekregen omdat hij meerdere keren reed met alcohol op."
    },
    vocabulary: {
      words: [
        {
          word: "rijverbod",
          definition: "niet mogen rijden",
          sentence: "Hij kreeg een ___ omdat hij te veel dronk.",
          answer: "rijverbod"
        },
        {
          word: "boete",
          definition: "geld dat je moet betalen als straf",
          sentence: "Hij moest een ___ van 100 euro betalen.",
          answer: "boete"
        },
        {
          word: "alcohol",
          definition: "een stof in drank die je dronken kan maken",
          sentence: "Hij had te veel ___ gedronken voor hij ging rijden.",
          answer: "alcohol"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij had te veel ___ gedronken voor hij ging rijden.",
          answer: "alcohol"
        },
        {
          sentence: "Hij moest een ___ van 100 euro betalen.",
          answer: "boete"
        },
        {
          sentence: "Hij kreeg een ___ omdat hij te veel dronk.",
          answer: "rijverbod"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdreden voor Van Gucht's straf?",
        options: [
          "Hij reed te hard",
          "Hij was dronken",
          "Hij reed stiekem door",
          "Hij had een ongeluk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'rijverbod'?",
        options: [
          "Een feestje in de auto",
          "Een verbod om te rijden",
          "Een soort boete",
          "Een type verkeersbord"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe vaak is Van Gucht betrapt?",
        options: [
          "Eén keer",
          "Twee keer",
          "Drie keer",
          "Vier keer"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Van Gucht kreeg alleen een boete, geen rijverbod.",
        isTrue: false
      },
      {
        statement: "Hij reed stiekem door na een alcoholtest.",
        isTrue: true
      },
      {
        statement: "Hij kreeg de straf omdat hij vier keer een ongeluk had.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Politievakbond vraagt parlementair onderzoek naar politiegeweld",
    topicNumber: 1,
    article: {
      title: "Politievakbond vraagt parlementair onderzoek naar politiegeweld",
      summary: "Van “flagrante schending van de interventieregels” tot het gebruik van traangas en matrakken, de socialistische politievakbond ACOD veroordeelt nu zelf het gedrag van sommige politieagenten tijdens verschillende manifestaties in oktober. De vakbond vraagt het parlement om een onderzoekscommissie op te richten."
    },
    vocabulary: {
      words: [
        {
          word: "onderzoek",
          definition: "een studie om iets te leren",
          sentence: "Een ___ kan uitwijzen wat er is gebeurd.",
          answer: "onderzoek"
        },
        {
          word: "vakbond",
          definition: "een organisatie die werknemers vertegenwoordigt",
          sentence: "De ___ helpt werknemers bij onderhandelingen.",
          answer: "vakbond"
        },
        {
          word: "manifestaties",
          definition: "bijeenkomsten of demonstraties",
          sentence: "Tijdens ___ komen mensen samen om hun mening te uiten.",
          answer: "manifestaties"
        },
        {
          word: "agenten",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ werken dag en nacht voor onze veiligheid.",
          answer: "agenten"
        },
        {
          word: "vakbond",
          definition: "een organisatie die werknemers vertegenwoordigt",
          sentence: "De ___ helpt werknemers bij problemen.",
          answer: "vakbond"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werken dag en nacht voor onze veiligheid.",
          answer: "agenten"
        },
        {
          sentence: "De ___ helpt werknemers bij problemen.",
          answer: "vakbond"
        },
        {
          sentence: "Een ___ kan uitwijzen wat er is gebeurd.",
          answer: "onderzoek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat doet de vakbond in deze situatie?",
        options: [
          "Ze steunt de politie onvoorwaardelijk",
          "Ze vraagt om een onderzoek naar het politiegedrag",
          "Ze organiseert een feest voor de agenten",
          "Ze zegt niets en wacht af"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het doel van een parlementair onderzoek?",
        options: [
          "Om nieuwe films te kijken",
          "Om feesten te organiseren",
          "Om problemen grondig te onderzoeken",
          "Om nieuwe sporten te introduceren"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarover maakt de vakbond zich zorgen?",
        options: [
          "Over het weer van volgende week",
          "Over het gedrag van sommige agenten tijdens de manifestaties",
          "Over de prijs van brood",
          "Over de verkiezingen van volgend jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vakbond vraagt een onderzoek naar het gedrag van politieagenten.",
        isTrue: true
      },
      {
        statement: "Het parlement weigert een onderzoek te starten.",
        isTrue: false
      },
      {
        statement: "Agenten gebruiken soms geweld tijdens hun werk.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
      summary: "Zeventig procent van de producten die Testaankoop samen met buitenlandse consumentenorganisaties kocht bij webwinkels Shein en Temu, voldoet niet aan de Europese veiligheidsregels. Sommige goedkope sieraden en babyspeeltjes blijken zelfs gevaarlijk. “We hebben meteen alles offline gehaald”, reageren Shein en Temu."
    },
    vocabulary: {
      words: [
        {
          word: "roulette",
          definition: "een kansspel, vaak in een casino",
          sentence: "Hij zette al zijn geld in op één nummer bij ___.",
          answer: "roulette"
        },
        {
          word: "start",
          definition: "beginnen",
          sentence: "De vergadering ___ om 10 uur.",
          answer: "start"
        },
        {
          word: "producten",
          definition: "dingen die je kunt kopen, zoals spullen of goederen",
          sentence: "De supermarkt verkoopt veel verschillende ___.",
          answer: "producten"
        },
        {
          word: "consumentenorganisaties",
          definition: "groepen die opkomen voor de belangen van kopers, van consumenten",
          sentence: "De Consumentenbond is een bekende ___.",
          answer: "consumentenorganisaties"
        },
        {
          word: "veiligheid",
          definition: "dat iets of iemand veilig is, zonder gevaar",
          sentence: "De ___ op de werkvloer is erg belangrijk.",
          answer: "veiligheid"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij zette al zijn geld in op één nummer bij ___.",
          answer: "roulette"
        },
        {
          sentence: "De vergadering ___ om 10 uur.",
          answer: "start"
        },
        {
          sentence: "De Consumentenbond is een bekende ___.",
          answer: "consumentenorganisaties"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is het belangrijk dat producten voldoen aan veiligheidsregels?",
        options: [
          "Omdat het dan lichter weegt",
          "Omdat het dan meer kost",
          "Omdat het dan veilig is voor gebruik",
          "Omdat het dan mooier is"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat deden Shein en Temu nadat de problemen bekend werden?",
        options: [
          "Ze gaven meer korting",
          "Ze haalden de producten offline",
          "Ze stopten met verkopen",
          "Ze verhoogden de prijzen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van een gevaarlijk product?",
        options: [
          "Een fiets met goede remmen",
          "Een speelgoed dat niet stukgaat",
          "Een sieraad met losse onderdelen",
          "Een speelgoed dat zacht is"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Testaankoop kocht producten bij Shein en Temu om ze te testen.",
        isTrue: true
      },
      {
        statement: "Alle producten van Shein en Temu zijn veilig volgens Europese regels.",
        isTrue: false
      },
      {
        statement: "Shein en Temu hebben de onveilige producten offline gehaald.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Witte Huis beperkt toegang voor journalisten",
    topicNumber: 1,
    article: {
      title: "Witte Huis beperkt toegang voor journalisten",
      summary: "Donald Trump start zijn tweede termijn als president van Amerika. Dit brengt veranderingen over de hele wereld. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "updates",
          definition: "nieuwe informatie, het laatste nieuws",
          sentence: "Volg alle ___ over dit onderwerp online.",
          answer: "updates"
        },
        {
          word: "wereld",
          definition: "de aarde en alle landen samen",
          sentence: "De veranderingen in de ___ zijn groot door de nieuwe president.",
          answer: "wereld"
        },
        {
          word: "Witte",
          definition: "heeft geen kleur, of de naam van een gebouw",
          sentence: "Het ___ Huis is waar de president woont.",
          answer: "Witte"
        },
        {
          word: "president",
          definition: "de leider van een land",
          sentence: "De ___ van Amerika woont in het Witte Huis.",
          answer: "president"
        },
        {
          word: "toegang",
          definition: "kunnen komen of gaan in een plaats",
          sentence: "Journalisten hebben geen ___ meer tot het Witte Huis.",
          answer: "toegang"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ Huis is waar de president woont.",
          answer: "Witte"
        },
        {
          sentence: "De ___ van Amerika woont in het Witte Huis.",
          answer: "president"
        },
        {
          sentence: "Journalisten hebben geen ___ meer tot het Witte Huis.",
          answer: "toegang"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'beperkt' in deze context?",
        options: [
          "niet veel, gelimiteerd",
          "helemaal geen",
          "oneindig veel",
          "alleen voor kinderen"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar woont de president van Amerika?",
        options: [
          "In het Witte Huis",
          "In een groot kasteel",
          "In een normaal huis",
          "In een hotel"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is 'updates' in het Nederlands?",
        options: [
          "nieuwsupdates",
          "een soort fruit",
          "een soort auto",
          "een soort boek"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Journalisten mogen altijd in het Witte Huis komen.",
        isTrue: false
      },
      {
        statement: "De president van Amerika woont in het Witte Huis.",
        isTrue: true
      },
      {
        statement: "'Updates' betekent dat alles hetzelfde blijft.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Pentagon geeft groen licht voor raketten, beslissing ligt bij Trump",
    topicNumber: 1,
    article: {
      title: "Pentagon geeft groen licht voor raketten, beslissing ligt bij Trump",
      summary: "Lees hier het laatste nieuws over de oorlog in Oekraïne. Download de app voor updates."
    },
    vocabulary: {
      words: [
        {
          word: "Trump",
          definition: "een persoon",
          sentence: "___ is een man.",
          answer: "Trump"
        },
        {
          word: "licht",
          definition: "niet donker, helder",
          sentence: "De lamp geeft ___.",
          answer: "licht"
        },
        {
          word: "beslissing",
          definition: "wat je kiest",
          sentence: "Mijn ___ is om thuis te blijven.",
          answer: "beslissing"
        },
        {
          word: "groen",
          definition: "een kleur, zoals gras",
          sentence: "Het gras is ___.",
          answer: "groen"
        },
        {
          word: "Pentagon",
          definition: "een gebouw in Amerika",
          sentence: "Het ___ is een gebouw.",
          answer: "Pentagon"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een man.",
          answer: "Trump"
        },
        {
          sentence: "Het ___ is een gebouw.",
          answer: "Pentagon"
        },
        {
          sentence: "Mijn ___ is om thuis te blijven.",
          answer: "beslissing"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Pentagon?",
        options: [
          "Een dier",
          "Een stad",
          "Een gebouw",
          "Een land"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'gaf'?",
        options: [
          "Kreeg",
          "Gaf",
          "Kocht",
          "Verkocht"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is groen?",
        options: [
          "Een kleur",
          "Een steen",
          "Een dier",
          "Een auto"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Pentagon is een gebouw.",
        isTrue: true
      },
      {
        statement: "Trump is een vrouw.",
        isTrue: false
      },
      {
        statement: "Groen is een kleur.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Frans parlement neemt belasting af",
    topicNumber: 1,
    article: {
      title: "Frans parlement neemt belasting af",
      summary: "Frankrijk heeft een belasting voor rijke mensen. Het parlement verwerpt deze belasting."
    },
    vocabulary: {
      words: [
        {
          word: "Frans",
          definition: "van of uit Frankrijk",
          sentence: "De ___ keuken is bekend.",
          answer: "Frans"
        },
        {
          word: "parlement",
          definition: "een groep mensen die wetten maakt",
          sentence: "Het ___ komt elke dag bijeen.",
          answer: "parlement"
        },
        {
          word: "verwerpt",
          definition: "niet accepteren, weigeren",
          sentence: "De groep ___ het voorstel.",
          answer: "verwerpt"
        },
        {
          word: "belasting",
          definition: "geld dat je aan de overheid betaalt",
          sentence: "Ik betaal ___ over mijn inkomen.",
          answer: "belasting"
        },
        {
          word: "rijk",
          definition: "iemand met veel geld",
          sentence: "Hij is erg ___ en heeft een groot huis.",
          answer: "rijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De groep ___ het voorstel.",
          answer: "verwerpt"
        },
        {
          sentence: "De ___ keuken is bekend.",
          answer: "Frans"
        },
        {
          sentence: "Ik betaal ___ over mijn inkomen.",
          answer: "belasting"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een feest in Frankrijk",
          "Een nieuwe belasting voor rijke mensen",
          "Een sportevenement",
          "Een nieuwe wet voor alle mensen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet het parlement met de belasting?",
        options: [
          "Ze accepteren het",
          "Ze weigeren het",
          "Ze veranderen het",
          "Ze vergeten het"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de 'rijkentaks'?",
        options: [
          "Een belasting voor rijke mensen",
          "Een nieuwe stad",
          "Een Franse dans",
          "Een soort voedsel"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Frankrijk heeft een parlement.",
        isTrue: true
      },
      {
        statement: "De belasting is voor arme mensen.",
        isTrue: false
      },
      {
        statement: "Het parlement neemt de belasting niet aan.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Rijbewijs weg, toch gereden",
    topicNumber: 1,
    article: {
      title: "Rijbewijs weg, toch gereden",
      summary: "Ruben Van Gucht kreeg een rijverbod en een boete, omdat hij bleef rijden zonder rijbewijs."
    },
    vocabulary: {
      words: [
        {
          word: "rijbewijs",
          definition: "een document dat zegt dat je mag rijden",
          sentence: "Hij heeft zijn ___ niet meer.",
          answer: "rijbewijs"
        },
        {
          word: "boete",
          definition: "geld dat je moet betalen voor iets verkeerds",
          sentence: "Hij kreeg een ___ van 4800 euro.",
          answer: "boete"
        },
        {
          word: "rijverbod",
          definition: "niet mogen rijden voor een tijd",
          sentence: "Hij kreeg een ___ van negen maanden.",
          answer: "rijverbod"
        },
        {
          word: "rijden",
          definition: "een voertuig besturen",
          sentence: "Hij bleef ___ zonder rijbewijs.",
          answer: "rijden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft zijn ___ niet meer.",
          answer: "rijbewijs"
        },
        {
          sentence: "Hij bleef ___ zonder rijbewijs.",
          answer: "rijden"
        },
        {
          sentence: "Hij kreeg een ___ van negen maanden.",
          answer: "rijverbod"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kreeg Ruben Van Gucht een rijverbod?",
        options: [
          "Hij reed te snel",
          "Hij heeft gestolen",
          "Hij reed zonder rijbewijs",
          "Hij gebruikte een auto van een ander"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een rijverbod?",
        options: [
          "Een feest",
          "Een soort vakantie",
          "Een verbod om te rijden",
          "Een beloning"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat deed Ruben Van Gucht nadat hij zijn rijbewijs verloor?",
        options: [
          "Hij stopte met rijden",
          "Hij kocht een nieuwe auto",
          "Hij kreeg hulp van de politie",
          "Hij reed verder zonder rijbewijs"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Ruben Van Gcht kreeg een rijverbod omdat hij stopte met rijden.",
        isTrue: false
      },
      {
        statement: "Ruben Van Gcht reed zonder rijbewijs.",
        isTrue: true
      },
      {
        statement: "Ruben Van Gcht kreeg een boete van 4800 euro.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Politie en protest",
    topicNumber: 1,
    article: {
      title: "Politie en protest",
      summary: "De politie en mensen op straat hebben problemen. De politie gebruikt geweld. Een groep vraagt om onderzoek."
    },
    vocabulary: {
      words: [
        {
          word: "vraagt",
          definition: "vraagt om iets",
          sentence: "Hij ___ om hulp.",
          answer: "vraagt"
        },
        {
          word: "geweld",
          definition: "slecht en hard gedrag",
          sentence: "Soms is er ___ op straat.",
          answer: "geweld"
        },
        {
          word: "straat",
          definition: "weg in een stad of dorp",
          sentence: "Kinderen spelen op de ___.",
          answer: "straat"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ helpt mensen.",
          answer: "politie"
        },
        {
          word: "groep",
          definition: "meerdere personen samen",
          sentence: "Een ___ mensen liep naar het park.",
          answer: "groep"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ helpt mensen.",
          answer: "politie"
        },
        {
          sentence: "Een ___ mensen liep naar het park.",
          answer: "groep"
        },
        {
          sentence: "Kinderen spelen op de ___.",
          answer: "straat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Politie die geweld gebruikt",
          "Mensen die dansen",
          "Kinderen die leren",
          "Feest in de stad"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doet de groep?",
        options: [
          "Vraagt om onderzoek",
          "Gaat naar huis",
          "Koopt eten",
          "Speelt buiten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het probleem?",
        options: [
          "Politie gebruikt geweld",
          "Er is geen water",
          "Iemand is alleen",
          "Het weer is koud"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De politie gebruikt geweld.",
        isTrue: true
      },
      {
        statement: "Iedereen is thuis.",
        isTrue: false
      },
      {
        statement: "Een groep vraagt om onderzoek.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten",
      summary: "Testaankoop waarschuwt voor gevaarlijke producten bij Temu. Sommige producten zijn niet veilig. Temu haalt ze nu offline."
    },
    vocabulary: {
      words: [
        {
          word: "producten",
          definition: "dingen die je koopt",
          sentence: "De ___ zijn nieuw of gebruikt.",
          answer: "producten"
        },
        {
          word: "Testaankoop",
          definition: "een organisatie die producten test",
          sentence: "___ testte de producten en vond problemen.",
          answer: "Testaankoop"
        },
        {
          word: "veilig",
          definition: "zonder gevaar",
          sentence: "Is het ___ om hier te spelen?",
          answer: "veilig"
        },
        {
          word: "offline",
          definition: "niet verbonden met internet",
          sentence: "Mijn computer staat ___ nu.",
          answer: "offline"
        },
        {
          word: "Temu",
          definition: "een online winkel",
          sentence: "___ verkoopt veel producten.",
          answer: "Temu"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ zijn nieuw of gebruikt.",
          answer: "producten"
        },
        {
          sentence: "___ verkoopt veel producten.",
          answer: "Temu"
        },
        {
          sentence: "Mijn computer staat ___ nu.",
          answer: "offline"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'gevaarlijk'?",
        options: [
          "leuk",
          "gevaarlijk",
          "mooi",
          "duur"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat doet Testaankoop?",
        options: [
          "test producten",
          "verkoopt eten",
          "maakt kleren",
          "geeft les"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is 'offline'?",
        options: [
          "niet op internet",
          "in de winkel",
          "heel snel",
          "heel traag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Temu is een online winkel.",
        isTrue: true
      },
      {
        statement: "Testaankoop verkoopt gevaarlijke producten.",
        isTrue: false
      },
      {
        statement: "Sommige producten zijn offline gehaald.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Witte Huis beperkt toegang voor journalisten",
    topicNumber: 1,
    article: {
      title: "Witte Huis beperkt toegang voor journalisten",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijk veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "updates",
          definition: "bijgewerkte informatie of nieuwsberichten.",
          sentence: "Volg hier alle laatste ___ over de situatie.",
          answer: "updates"
        },
        {
          word: "veranderingen",
          definition: "veranderingen; transformaties of wijzigingen.",
          sentence: "Het beleid bracht grote ___ teweeg.",
          answer: "veranderingen"
        },
        {
          word: "tweede",
          definition: "komend na de eerste; nummer twee in een reeks.",
          sentence: "Zijn ___ ambtstermijn verliep minder voorspelbaar.",
          answer: "tweede"
        },
        {
          word: "toegang",
          definition: "de mogelijkheid om een plaats te betreden of te gebruiken.",
          sentence: "Journalisten kregen geen ___ tot de persconferentie.",
          answer: "toegang"
        },
        {
          word: "teweeg",
          definition: "veroorzaken; tot stand brengen. (gebruikt in 'brengt ... teweeg')",
          sentence: "De crisis bracht grote onrust ___ in de regio.",
          answer: "teweeg"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zijn ___ ambtstermijn verliep minder voorspelbaar.",
          answer: "tweede"
        },
        {
          sentence: "De crisis bracht grote onrust ___ in de regio.",
          answer: "teweeg"
        },
        {
          sentence: "Journalisten kregen geen ___ tot de persconferentie.",
          answer: "toegang"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'beperken' in deze context?",
        options: [
          "Volledig verbieden",
          "Gedeeltelijk of met beperkingen toestaan",
          "Ongelimiteerd toestaan",
          "Negeer en doe niets"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk effect heeft 'beperkte toegang' op internationale betrekkingen?",
        options: [
          "Het verbetert de samenwerking enorm",
          "Het heeft geen enkel effect op de relaties",
          "Het kan spanningen verhogen door gebrek aan transparantie",
          "Het leidt altijd tot onmiddellijke oorlog"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een synoniem voor 'teweegbrengen'?",
        options: [
          "Tegengaan",
          "Verminderen",
          "Veroorzaken",
          "Neutraliseren"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De beperking van de toegang voor journalisten is een voorbeeld van transparantie.",
        isTrue: false
      },
      {
        statement: "De maatregel heeft wereldwijde gevolgen, niet alleen voor de VS.",
        isTrue: true
      },
      {
        statement: "Trump's tweede termijn bracht geen enkele verandering teweeg.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Pentagon gave green light for Tomahawks, decision lies in Trump's hands",
    topicNumber: 1,
    article: {
      title: "Pentagon gave green light for Tomahawks, decision lies in Trump's hands",
      summary: "Follow all recent developments in the war in Ukraine. Download the DS News app and get notified for important updates."
    },
    vocabulary: {
      words: [
        {
          word: "Pentagon",
          definition: "Het Amerikaanse ministerie van defensie, gevestigd in Washington D.C.",
          sentence: "Het ___ heeft de goedkeuring gegeven voor de levering van nieuwe wapens.",
          answer: "Pentagon"
        },
        {
          word: "Tomahawks",
          definition: "Een type geleide raketten, vaak gebruikt voor langeafstandsaanvallen.",
          sentence: "De Verenigde Staten overwegen de levering van extra ___ aan Oekraïne.",
          answer: "Tomahawks"
        },
        {
          word: "Trump",
          definition: "De voormalige president van de Verenigde Staten.",
          sentence: "___ zal de uiteindelijke beslissing nemen over de wapens.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ heeft de goedkeuring gegeven voor de levering van nieuwe wapens.",
          answer: "Pentagon"
        },
        {
          sentence: "___ zal de uiteindelijke beslissing nemen over de wapens.",
          answer: "Trump"
        },
        {
          sentence: "De Verenigde Staten overwegen de levering van extra ___ aan Oekraïne.",
          answer: "Tomahawks"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'groen licht geven' in deze context?",
        options: [
          "Goedkeuring verlenen",
          "Een lamp vervangen",
          "Stoppen met een activiteit",
          "Een kleur kiezen"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar verwijst 'Tomahawks' in de titel naar?",
        options: [
          "Een soort voedsel",
          "Een type auto",
          "Een merk van sportartikelen",
          "Een type raketten"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de rol van Trump in deze situatie?",
        options: [
          "Hij is de uiteindelijke beslisser",
          "Hij is een toeschouwer",
          "Hij is een atleet",
          "Hij is een leraar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Verenigde Staten hebben al Tomahawks geleverd aan Oekraïne.",
        isTrue: false
      },
      {
        statement: "Trump heeft de laatste beslissingsbevoegdheid over deze wapenzending.",
        isTrue: true
      },
      {
        statement: "De oorlog in Oekraïne is al beëindigd.",
        isTrue: false
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Frans parlement verwerpt rijkenbelasting: “Wonderbelasting bestaat niet”",
    topicNumber: 1,
    article: {
      title: "Frans parlement verwerpt rijkenbelasting: “Wonderbelasting bestaat niet”",
      summary: "De Assemblée nationale, het Franse parlement, heeft vrijdag voorstellen voor een belasting op de hoogste vermogens met een grote meerderheid verworpen."
    },
    vocabulary: {
      words: [
        {
          word: "vermogens",
          definition: "Vermogens of fortuinen, vaak in economische context",
          sentence: "Hoge ___ kunnen meer belasting dragen.",
          answer: "vermogens"
        },
        {
          word: "Assemblée",
          definition: "Het Franse woord voor een vergadering of parlement",
          sentence: "De Nationale ___ behandelt wetgeving.",
          answer: "Assemblée"
        },
        {
          word: "belasting",
          definition: "Een verplichte financiële bijdrage aan de overheid",
          sentence: "Deze ___ wordt geheven op inkomen en vermogen.",
          answer: "belasting"
        },
        {
          word: "bestaat",
          definition: "Is aanwezig of is realiteit",
          sentence: "De entiteit ___ al sinds 2020.",
          answer: "bestaat"
        },
        {
          word: "voorstellen",
          definition: "Plannen of ideeën die worden aangeboden",
          sentence: "De nieuwe ___ werden goed ontvangen.",
          answer: "voorstellen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Deze ___ wordt geheven op inkomen en vermogen.",
          answer: "belasting"
        },
        {
          sentence: "Hoge ___ kunnen meer belasting dragen.",
          answer: "vermogens"
        },
        {
          sentence: "De entiteit ___ al sinds 2020.",
          answer: "bestaat"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'verworpen' in deze context?",
        options: [
          "Geaccepteerd",
          "Afgewezen",
          "Geprezen",
          "Gewijzigd"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'Assemblée' specifiek naar?",
        options: [
          "Een soort belasting",
          "De Franse regering",
          "Het Franse parlement",
          "Een Europese instelling"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Frankrijk introduceert een nieuwe belasting",
          "Frankrijk verwerpt een belastingvoorstel",
          "De Assemblée Nationale wordt hervormd",
          "Er is een grote meerderheid voor belastingverhoging"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Franse parlement heeft de belastingvoorstellen goedgekeurd.",
        isTrue: false
      },
      {
        statement: "De Assemblée Nationale is het Franse parlement.",
        isTrue: true
      },
      {
        statement: "De belastingvoorstellen werden unaniem aangenomen.",
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
    title: "Politievakbond vraagt parlementair onderzoek naar politiegeweld",
    topicNumber: 1,
    article: {
      title: "Politievakbond vraagt parlementair onderzoek naar politiegeweld",
      summary: "Van “flagrante schending van de interventieregels” tot het gebruik van traangas en matrakken, de socialistische politievakbond ACOD veroordeelt nu zelf het gedrag van sommige politieagenten tijdens verschillende manifestaties in oktober. De vakbond vraagt het parlement om een onafhankelijke onderzoekscommissie op te richten."
    },
    vocabulary: {
      words: [
        {
          word: "manifestaties",
          definition: "openbare demonstraties of bijeenkomsten waar standpunten worden getoond",
          sentence: "De politie was aanwezig bij verschillende ___ in oktober.",
          answer: "manifestaties"
        },
        {
          word: "schending",
          definition: "het overtreden of niet naleven van een regel of wet",
          sentence: "De agenten werden beschuldigd van ___ van de regels.",
          answer: "schending"
        },
        {
          word: "vakbond",
          definition: "een organisatie die de belangen van werknemers verdedigt",
          sentence: "De ___ komt op voor de rechten van de werknemers.",
          answer: "vakbond"
        },
        {
          word: "agenten",
          definition: "leden van de politie die toezicht houden op de openbare orde",
          sentence: "De ___ patrouilleerden in de stad.",
          answer: "agenten"
        },
        {
          word: "matrakken",
          definition: "een wapen in de vorm van een stok, gebruikt voor slag- en stootacties",
          sentence: "De politie gebruikte ___ om de menigte uiteen te drijven.",
          answer: "matrakken"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De politie gebruikte ___ om de menigte uiteen te drijven.",
          answer: "matrakken"
        },
        {
          sentence: "De agenten werden beschuldigd van ___ van de regels.",
          answer: "schending"
        },
        {
          sentence: "De politie was aanwezig bij verschillende ___ in oktober.",
          answer: "manifestaties"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat wordt bedoeld met 'flagrante schending' in de context?",
        options: [
          "Een duidelijk zichtbare overtreding",
          "Een kleine vergissing",
          "Een geheim gehouden feit",
          "Een onbedoelde handeling"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de ACOD in deze kwestie?",
        options: [
          "Ze verdedigen het gedrag van de politieagenten.",
          "Ze veroordelen het gedrag en vragen een onafhankelijk onderzoek.",
          "Ze negeren de incidenten volledig.",
          "Ze steunen de politieagenten onvoorwaardelijk."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'matrak' in deze context?",
        options: [
          "Een soort muziekinstrument",
          "Een politie-uitrusting voor controle, zoals een wapen",
          "Een onderdeel van een auto",
          "Een medisch hulpmiddel"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De vakbond ACOD steunt het gebruik van traangas door de politie.",
        isTrue: false
      },
      {
        statement: "Het parlement wordt gevraagd een onafhankelijke commissie in te stellen.",
        isTrue: true
      },
      {
        statement: "De incidenten vonden plaats in december.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarshuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
      summary: "Zeventig procent van de producten die Testaankoop samen met buitenlandse consumentenorganisaties kocht bij webwinkels Shein en Temu, voldoet niet aan de Europese veiligheidsregels. Sommige goedkope sieraden en babyspeeltjes blijken zelfs gevaarlijk. “We hebben meteen alles offline gehaald”, reageren Shein en Temu."
    },
    vocabulary: {
      words: [
        {
          word: "Testaankoop",
          definition: "Een Belgische consumentenorganisatie die producten test.",
          sentence: "___ bracht de problemen met de producten aan het licht.",
          answer: "Testaankoop"
        },
        {
          word: "Russische roulette",
          definition: "Een gevaarlijk spel waarbij iemand zijn of haar leven riskeert; hier gebruikt als metafoor voor een groot risico nemen.",
          sentence: "Kopen bij deze winkels is als ___ spelen.",
          answer: "Russische roulette"
        },
        {
          word: "veiligheidsregels",
          definition: "Regels die zijn opgesteld om de veiligheid te garanderen.",
          sentence: "Veel producten voldoen niet aan de Europese ___.",
          answer: "veiligheidsregels"
        },
        {
          word: "gevaarlijk",
          definition: "Het gevaar opleverend, risicovol.",
          sentence: "Producten die niet voldoen aan de normen zijn vaak ___ voor de gebruiker.",
          answer: "gevaarlijk"
        },
        {
          word: "terugroepactie",
          definition: "Een actie waarbij een bedrijf producten terugneemt van klanten, vaak vanwege problemen.",
          sentence: "Temu startte een ___ voor de onveilige producten.",
          answer: "terugroepactie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ bracht de problemen met de producten aan het licht.",
          answer: "Testaankoop"
        },
        {
          sentence: "Temu startte een ___ voor de onveilige producten.",
          answer: "terugroepactie"
        },
        {
          sentence: "Kopen bij deze winkels is als ___ spelen.",
          answer: "Russische roulette"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Testaankoop het kopen bij deze winkels 'Russische roulette'?",
        options: [
          "Omdat het een oud spel is",
          "Omdat het veel geld kost",
          "Omdat het een groot risico is voor de consument",
          "Omdat het populair is in Rusland"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de reactie van de webwinkels op de bevindingen van Testaankoop?",
        options: [
          "Ze negeerden het volledig",
          "Ze haalden de producten onmiddellijk offline",
          "Ze verhoogden de prijzen",
          "Ze startten een reclamecampagne"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een van de specifieke problemen met de verkochte producten?",
        options: [
          "Ze zijn te duur",
          "Ze voldoen niet aan de veiligheidsregels",
          "Ze zijn alleen online beschikbaar",
          "Ze zijn te groot voor gemakkelijke verzending"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Testaankoop werkte alleen met Europese organisaties.",
        isTrue: false
      },
      {
        statement: "Sommige babyspeeltjes bleken gevaarlijk te zijn voor kinderen.",
        isTrue: true
      },
      {
        statement: "Shein en Temu hebben de producten niet offline gehaald.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Witte Huis beperkt toegang voor journalisten",
    topicNumber: 1,
    article: {
      title: "Witte Huis beperkt toegang voor journalisten",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "updates",
          definition: "nieuwe informatie, het laatste nieuws",
          sentence: "Volg hier alle ___ over het nieuws.",
          answer: "updates"
        },
        {
          word: "wereldwijd",
          definition: "over de hele wereld",
          sentence: "De veranderingen zijn ___ voelbaar.",
          answer: "wereldwijd"
        },
        {
          word: "Huis",
          definition: "een gebouw waar mensen wonen",
          sentence: "Het Witte ___ is waar de president werkt.",
          answer: "Huis"
        },
        {
          word: "beperkt",
          definition: "niet veel, niet veel",
          sentence: "Toegang is ___ voor journalisten.",
          answer: "beperkt"
        },
        {
          word: "Witte",
          definition: "een kleur, zoals wit",
          sentence: "De ___ Huis is in Washington.",
          answer: "Witte"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Toegang is ___ voor journalisten.",
          answer: "beperkt"
        },
        {
          sentence: "De veranderingen zijn ___ voelbaar.",
          answer: "wereldwijd"
        },
        {
          sentence: "De ___ Huis is in Washington.",
          answer: "Witte"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar werkt de president van Amerika?",
        options: [
          "In het Witte Huis",
          "In het Rode Huis",
          "In het Blauwe Huis",
          "In het Groene Huis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'beperkt' in deze context?",
        options: [
          "Niet veel, gelimiteerd",
          "Heel veel",
          "Onbeperkt",
          "Gesloten"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'update' in dit artikel?",
        options: [
          "Het laatste nieuws",
          "Een oude krant",
          "Een foto",
          "Een video"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Journalisten mogen altijd in het Witte Huis komen.",
        isTrue: false
      },
      {
        statement: "Donald Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "De veranderingen zijn alleen in Amerika.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Pentagon geeft toestemming voor raketten, Trump moet beslissen",
    topicNumber: 1,
    article: {
      title: "Pentagon geeft toestemming voor raketten, Trump moet beslissen",
      summary: "Amerika overweegt het sturen van meer wapens naar Oekraïne. President Trump moet de uiteindelijke beslissing nemen. Volg het laatste nieuws over de oorlog via de DS Nieuws app."
    },
    vocabulary: {
      words: [
        {
          word: "Pentagon",
          definition: "Het gebouw van het Ministerie van Defensie in de VS",
          sentence: "Het ___ is het hoofdkwartier van het Amerikaanse leger.",
          answer: "Pentagon"
        },
        {
          word: "beslissing",
          definition: "Een keuze die je maakt nadat je erover nadenkt",
          sentence: "De minister-president moet een belangrijke ___ nemen over de oorlog.",
          answer: "beslissing"
        },
        {
          word: "Trump",
          definition: "De familienaam van de voormalige president van de Verenigde Staten",
          sentence: "___ was president van de Verenigde Staten.",
          answer: "Trump"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Europa, momenteel in conflict met Rusland",
          sentence: "___ is een land dat grenst aan Rusland.",
          answer: "Oekraïne"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is een land dat grenst aan Rusland.",
          answer: "Oekraïne"
        },
        {
          sentence: "Het ___ is het hoofdkwartier van het Amerikaanse leger.",
          answer: "Pentagon"
        },
        {
          sentence: "De minister-president moet een belangrijke ___ nemen over de oorlog.",
          answer: "beslissing"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Pentagon?",
        options: [
          "Een type raket",
          "Het hoofdkantoor van het Amerikaanse leger",
          "Een stad in de VS",
          "Een beroemde acteur"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarover moet Trump een beslissing nemen?",
        options: [
          "Of hij zijn haar moet laten knippen",
          "Of de VS meer wapens naar Oekraïne stuurt",
          "Welk ontbijt hij wil eten",
          "Of hij naar een feestje gaat"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de situatie in Oekraïne?",
        options: [
          "Er is vrede",
          "Er is een grote oorlog aan de gang",
          "Het is altijd zomer",
          "Ze spelen alleen maar voetbal"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De Verenigde Staten overwegen het sturen van wapens naar Oekraïne.",
        isTrue: true
      },
      {
        statement: "Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Oekraïne is een land in Europa.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Frans parlement weigert belasting",
    topicNumber: 1,
    article: {
      title: "Frans parlement weigert belasting",
      summary: "Het Franse parlement heeft een nieuwe belasting voor rijke mensen niet aangenomen. De politici stemden tegen de belasting."
    },
    vocabulary: {
      words: [
        {
          word: "parlement",
          definition: "De groep mensen die wetten maakt in een land",
          sentence: "Het ___ van Nederland heet de Tweede Kamer.",
          answer: "parlement"
        },
        {
          word: "belasting",
          definition: "Geld dat je moet betalen aan de overheid",
          sentence: "In Nederland betaal je ___ over je inkomen.",
          answer: "belasting"
        },
        {
          word: "politici",
          definition: "Mensen die een regering runnen en wetten maken",
          sentence: "___ moeten vaak in het openbaar spreken.",
          answer: "politici"
        },
        {
          word: "weigert",
          definition: "Zegt nee tegen iets, accepteert niet",
          sentence: "Hij ___ om mee te gaan naar het feest.",
          answer: "weigert"
        },
        {
          word: "Frans",
          definition: "Van of uit Frankrijk",
          sentence: "De ___ keuken is bekend over de hele wereld.",
          answer: "Frans"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ om mee te gaan naar het feest.",
          answer: "weigert"
        },
        {
          sentence: "In Nederland betaal je ___ over je inkomen.",
          answer: "belasting"
        },
        {
          sentence: "Het ___ van Nederland heet de Tweede Kamer.",
          answer: "parlement"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'aangenomen' in deze context?",
        options: [
          "Geaccepteerd",
          "Geweigerd",
          "Vergeten",
          "Verboden"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar stemden de politici tegen?",
        options: [
          "Tegen een nieuwe belasting",
          "Tegen een feest",
          "Tegen een nieuwe wet voor scholen",
          "Tegen de koning"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de 'Assemblée nationale'?",
        options: [
          "Het Franse parlement",
          "Een soort belasting",
          "Een Frans restaurant",
          "Een sportteam"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het Franse parlement heeft de belasting aangenomen.",
        isTrue: false
      },
      {
        statement: "Politici stemden tegen de nieuwe belasting.",
        isTrue: true
      },
      {
        statement: "De Assemblée nationale is de regering van Frankrijk.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Rijverbod voor presentator",
    topicNumber: 1,
    article: {
      title: "Rijverbod voor presentator",
      summary: "Een presentator heeft een probleem met de politie. Hij kreeg een rijverbod, maar reed toch. Daarom kreeg hij een boete en een nieuw rijverbod."
    },
    vocabulary: {
      words: [
        {
          word: "reed",
          definition: "verleden tijd van rijden; zich verplaatsen in een voertuig",
          sentence: "Hij ___ met zijn auto naar zijn werk.",
          answer: "reed"
        },
        {
          word: "nieuw",
          definition: "vers, recent gemaakt of ontstaan",
          sentence: "Hij kreeg een ___ rijverbag, nadat hij eerder al was gestraft.",
          answer: "nieuw"
        },
        {
          word: "boete",
          definition: "geld dat je moet betalen als straf voor een overtreding",
          sentence: "Hij kreeg een ___ omdat hij door rood reed.",
          answer: "boete"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven en misdaad bestrijden",
          sentence: "De ___ kwam omdat hij te hard reed.",
          answer: "politie"
        },
        {
          word: "presentator",
          definition: "iemand die een programma op tv of radio presenteert",
          sentence: "De ___ praat met mensen in een show.",
          answer: "presentator"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ praat met mensen in een show.",
          answer: "presentator"
        },
        {
          sentence: "Hij ___ met zijn auto naar zijn werk.",
          answer: "reed"
        },
        {
          sentence: "Hij kreeg een ___ rijverbag, nadat hij eerder al was gestraft.",
          answer: "nieuw"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kreeg de presentator een rijverbod?",
        options: [
          "Hij had te veel gedronken.",
          "Hij had te hard gereden.",
          "Hij had geen rijbewijs.",
          "Hij had iemand aangereden."
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe lang is het nieuwe rijverbod?",
        options: [
          "9 maanden",
          "4 maanden",
          "1 jaar",
          "6 maanden"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een boete?",
        options: [
          "Een soort straf waarbij je geld moet betalen",
          "Een soort feest met cadeaus",
          "Een type auto",
          "Een soort maaltijd"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De presentator reed door rood licht.",
        isTrue: false
      },
      {
        statement: "De presentator kreeg een boete van 4800 euro.",
        isTrue: true
      },
      {
        statement: "Het rijverbod was voor negen jaar.",
        isTrue: false
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
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten",
      summary: "Testaankoop waarschuwt voor gevaarlijke producten bij Temu en Shein. Veel producten voldoen niet aan de Europese veiligheidsregels. Sommige sieraden en speelgoed zijn zelfs gevaarlijk. De winkels hebben sommige producten offline gehaald."
    },
    vocabulary: {
      words: [
        {
          word: "producten",
          definition: "dingen die je koopt, zoals speelgoed of sieraden",
          sentence: "Sommige ___ zijn gevaarlijk.",
          answer: "producten"
        },
        {
          word: "veiligheidsregels",
          definition: "regels om ervoor te zorgen dat iets veilig is",
          sentence: "De producten voldoen niet aan de Europese ___.",
          answer: "veiligheidsregels"
        },
        {
          word: "sieraden",
          definition: "versieringen die je draagt, zoals een ketting of ring",
          sentence: "Sommige ___ zijn gevaarlijk omdat ze giftige stoffen bevatten.",
          answer: "sieraden"
        },
        {
          word: "speelgoed",
          definition: "spullen om mee te spelen, zoals poppen of auto's",
          sentence: "Ook sommig ___ is onveilig voor kinderen.",
          answer: "speelgoed"
        },
        {
          word: "gevaarlijk",
          definition: "niet veilig, kan schade veroorzaken",
          sentence: "Sommige producten zijn erg ___.",
          answer: "gevaarlijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige ___ zijn gevaarlijk.",
          answer: "producten"
        },
        {
          sentence: "Sommige ___ zijn gevaarlijk omdat ze giftige stoffen bevatten.",
          answer: "sieraden"
        },
        {
          sentence: "Ook sommig ___ is onveilig voor kinderen.",
          answer: "speelgoed"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom waarschuwt Testaankoop voor producten van Temu en Shein?",
        options: [
          "Omdat de producten te duur zijn",
          "Omdat de producten niet voldoen aan de veiligheidsregels",
          "Omdat de producten niet leverbaar zijn",
          "Omdat de producten te populair zijn"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat hebben Shein en Temu gedaan na de waarschuwing?",
        options: [
          "Ze hebben alle producten verwijderd van hun websites",
          "Ze hebben niets gedaan",
          "Ze hebben alleen de gevaarlijke producten offline gehaald",
          "Ze hebben nieuwe producten toegevoegd"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een voorbeeld van een gevaarlijk product?",
        options: [
          "Een fiets",
          "Een boek",
          "Een sieraad met giftige stoffen",
          "Een computer"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Testaankoop heeft producten van Temu en Shein getest en ze zijn allemaal veilig bevonden.",
        isTrue: false
      },
      {
        statement: "Temu is een online winkel waar je producten kunt kopen.",
        isTrue: true
      },
      {
        statement: "Alle producten van Shein en Temu zijn nu offline gehaald.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Witte Huis beperkt toegang voor journalisten",
    topicNumber: 1,
    article: {
      title: "Witte Huis beperkt toegang voor journalisten",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "toegang",
          definition: "De mogelijkheid om een plaats te betreden of te gebruiken.",
          sentence: "Journalisten hebben nu geen ___ tot de persconferentie.",
          answer: "toegang"
        },
        {
          word: "beperkt",
          definition: "Niet volledig; met bepaalde grenzen.",
          sentence: "De toegang tot het gebied was ___ om veiligheidsredenen.",
          answer: "beperkt"
        },
        {
          word: "wereldwijd",
          definition: "Over de hele wereld; op globale schaal.",
          sentence: "De pandemie had ___ gevolgen voor de economie.",
          answer: "wereldwijd"
        },
        {
          word: "updates",
          definition: "Bijgewerkte informatie of nieuws.",
          sentence: "Volg de laatste ___ over de situatie via deze website.",
          answer: "updates"
        },
        {
          word: "journalisten",
          definition: "Personen die verslag doen van nieuws.",
          sentence: "___ spelen een belangrijke rol in de verspreiding van informatie.",
          answer: "Journalisten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De toegang tot het gebied was ___ om veiligheidsredenen.",
          answer: "beperkt"
        },
        {
          sentence: "Journalisten hebben nu geen ___ tot de persconferentie.",
          answer: "toegang"
        },
        {
          sentence: "De pandemie had ___ gevolgen voor de economie.",
          answer: "wereldwijd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'beperkt' in deze context?",
        options: [
          "Volledig",
          "Onbeperkt",
          "Gelimiteerd",
          "Oneindig"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar verwijst 'Witte Huis' naar in deze tekst?",
        options: [
          "Een museum",
          "De Amerikaanse regering",
          "Een krant",
          "Een historisch gebouw"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'journalist'?",
        options: [
          "Iemand die boeken schrijft",
          "Iemand die nieuws rapporteert",
          "Iemand die politieondersteunt",
          "Iemand die films maakt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Het Witte Huis heeft onbeperkte toegang voor journalisten.",
        isTrue: false
      },
      {
        statement: "Donald Trump was de president van de Verenigde Staten tijdens zijn tweede ambtstermijn.",
        isTrue: true
      },
      {
        statement: "Deze tekst gaat alleen over Amerikaanse politiek.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Oorlog in Oekraïne: recente ontwikkelingen",
    topicNumber: 1,
    article: {
      title: "Oorlog in Oekraïne: recente ontwikkelingen",
      summary: "Volg hier alle recente ontwikkelingen in de oorlog in Oekraïne. Download de app DS Nieuws en krijg een melding bij belangrijke updates."
    },
    vocabulary: {
      words: [
        {
          word: "app",
          definition: "een applicatie op je telefoon of computer, vaak afkorting van application",
          sentence: "Download de ___ om op de hoogte te blijven.",
          answer: "app"
        },
        {
          word: "oorlog",
          definition: "een gewapend conflict tussen landen of groepen",
          sentence: "De ___ in Oekraïne duurt nu al maanden.",
          answer: "oorlog"
        },
        {
          word: "melding",
          definition: "een bericht of signaal dat je informeert",
          sentence: "Krijg een ___ wanneer er belangrijk nieuws is.",
          answer: "melding"
        },
        {
          word: "Oekraïne",
          definition: "een land in Oost-Europa",
          sentence: "___ wordt momenteel zwaar getroffen door de oorlog.",
          answer: "Oekraïne"
        },
        {
          word: "ontwikkelingen",
          definition: "gebeurtenissen of veranderingen in een situatie",
          sentence: "De recente ___ in de oorlog zijn belangrijk om te volgen.",
          answer: "ontwikkelingen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ wordt momenteel zwaar getroffen door de oorlog.",
          answer: "Oekraïne"
        },
        {
          sentence: "Krijg een ___ wanneer er belangrijk nieuws is.",
          answer: "melding"
        },
        {
          sentence: "Download de ___ om op de hoogte te blijven.",
          answer: "app"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het om een app te downloaden?",
        options: [
          "Een app verwijderen van je telefoon",
          "Een app installeren vanaf het internet",
          "Een app negeren op je scherm",
          "Een app deactiveren in je instellingen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom is het belangrijk om het nieuws te volgen?",
        options: [
          "Om oude informatie te hergebruiken",
          "Om op de hoogte te blijven van actuele gebeurtenissen",
          "Om je telefoon op te laden",
          "Om meer vrienden te krijgen op sociale media"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van een actuele gebeurtenis?",
        options: [
          "De uitvinding van de telefoon in 1876",
          "De eerste mens op de maan in 1969",
          "Een recente ontwikkelingen in de oorlog in Oekraïne",
          "De val van het Romeinse Rijk in 476 AD"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De oorlog in Oekraïne is al enkele maanden aan de gang.",
        isTrue: true
      },
      {
        statement: "Het is niet nodig om het nieuws te volgen om op de hoogte te blijven.",
        isTrue: false
      },
      {
        statement: "Apps kunnen je helpen om informatie te krijgen.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Frans parlement verwerpt rijkenbelasting",
    topicNumber: 1,
    article: {
      title: "Frans parlement verwerpt rijkenbelasting",
      summary: "De Assemblée nationale, het Franse parlement, heeft vrijdag voorstellen voor een belasting op de hoogste vermogens met een grote meerderheid verworpen."
    },
    vocabulary: {
      words: [
        {
          word: "Frans",
          definition: "Betrekking hebbend op Frankrijk of zijn inwoners.",
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          word: "rijk",
          definition: "Een land of gebied met eigen regels en een overheid.",
          sentence: "Het koninkrijk is een soevereine ___ met een monarch.",
          answer: "rijk"
        },
        {
          word: "parlement",
          definition: "Een groep mensen die wetten maakt en beslissingen neemt voor een land.",
          sentence: "Het ___ van Frankrijk komt regelmatig bijeen.",
          answer: "parlement"
        },
        {
          word: "vermogens",
          definition: "Vermogens zijn bezittingen, vaak in de vorm van geld of eigendommen.",
          sentence: "De belasting is van toepassing op grote ___.",
          answer: "vermogens"
        },
        {
          word: "belasting",
          definition: "Geld dat mensen of bedrijven moeten betalen aan de overheid.",
          sentence: "De ___ op inkomens is dit jaar verhoogd.",
          answer: "belasting"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het ___ van Frankrijk komt regelmatig bijeen.",
          answer: "parlement"
        },
        {
          sentence: "Het ___ parlement heeft de wet aangenomen.",
          answer: "Frans"
        },
        {
          sentence: "De ___ op inkomens is dit jaar verhoogd.",
          answer: "belasting"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is het Franse equivalent van het woord 'parlement'?",
        options: [
          "Assemblée",
          "Parlement",
          "Senat",
          "Nationale Vergadering"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'verwerpt' in deze context?",
        options: [
          "Accepteert",
          "Verwerpt",
          "Wijzigt",
          "Bevestigt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het hoofdonderwerp van het artikel?",
        options: [
          "Belastingen",
          "Wetgeving",
          "Vermogens",
          "Politiek"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De Franse regering heeft de belasting goedgekeurd.",
        isTrue: false
      },
      {
        statement: "De belasting is alleen van toepassing op de allerrijksten.",
        isTrue: true
      },
      {
        statement: "De beslissing is unaniem genomen.",
        isTrue: false
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "'s Nachts rijbewijs ingetrokken, 's ochtends terug achter het stuur: Ruben Van Gucht krijgt rijverbod en boete na meerdere inbreuken",
    topicNumber: 1,
    article: {
      title: "'s Nachts rijbewijs ingetrokken, 's ochtends terug achter het stuur: Ruben Van Gucht krijgt rijverbod en boete na meerdere inbreuken",
      summary: "Negen maanden rijverbod en een boete van 4.800 euro: die zware straf heeft sportanker Ruben Van Gucht (38) vrijdagochtend in de Dendermondse politierechtbank gekregen omdat hij ondanks een rijverbod na een positieve alcoholtest stiekem toch reed. Vier keer liep hij tegen de lamp."
    },
    vocabulary: {
      words: [
        {
          word: "rijbewijs",
          definition: "Een officieel document dat bewijst dat je mag autorijden.",
          sentence: "Hij moest zijn ___ inleveren na de overtreding.",
          answer: "rijbewijs"
        },
        {
          word: "stiekem",
          definition: "In het geheim, zonder dat anderen het merken.",
          sentence: "Hij reed ___ toch door, ook al mocht het niet.",
          answer: "stiekem"
        },
        {
          word: "rijverbod",
          definition: "Een verbod om een voertuig te besturen voor een bepaalde periode.",
          sentence: "Hij kreeg een ___ van negen maanden.",
          answer: "rijverbod"
        },
        {
          word: "alcoholtest",
          definition: "Een test die meet hoeveel alcohol er in je lichaam zit.",
          sentence: "Hij bleek positief op de ___.",
          answer: "alcoholtest"
        },
        {
          word: "vrijdagochtend",
          definition: "De ochtend van vrijdag, een dag van de week.",
          sentence: "Hij kreeg de uitspraak op ___.",
          answer: "vrijdagochtend"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij reed ___ toch door, ook al mocht het niet.",
          answer: "stiekem"
        },
        {
          sentence: "Hij moest zijn ___ inleveren na de overtreding.",
          answer: "rijbewijs"
        },
        {
          sentence: "Hij bleek positief op de ___.",
          answer: "alcoholtest"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom kreeg Ruben Van Gucht een rijverbod?",
        options: [
          "Hij reed stiekem door na een alcoholtest.",
          "Hij was betrokken bij een auto-ongeluk.",
          "Hij reed zonder rijbewijs.",
          "Hij verloor een weddenschap over rijden."
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe lang was de duur van het rijverbod?",
        options: [
          "Vier maanden",
          "Negen maanden",
          "Twaalf maanden",
          "Acht maanden"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar vond de rechtszaak plaats?",
        options: [
          "Brussel",
          "Dendermonde",
          "Antwerpen",
          "Gent"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Ruben Van Gucht kreeg een rijverbod omdat hij te hard reed.",
        isTrue: false
      },
      {
        statement: "Hij kreeg een rijverbod van negen maanden en een boete.",
        isTrue: true
      },
      {
        statement: "Hij reed stiekem door, maar werd niet gepakt.",
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
    title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
    topicNumber: 1,
    article: {
      title: "Temu start terugroepactie na waarschuwing voor gevaarlijke producten door Testaankoop: “Daar kopen is Russische roulette”",
      summary: "Zeventig procent van de producten die Testaankoop samen met buitenlandse consumentenorganisaties kocht bij webwinkels Shein en Temu, voldoet niet aan de Europese veiligheidsregels. Sommige goedkope sieraden en babyspeeltjes blijken zelfs gevaarlijk. “We hebben meteen alles offline gehaald”, reageren Shein en Temu."
    },
    vocabulary: {
      words: [
        {
          word: "producten",
          definition: "dingen die je kunt kopen en gebruiken",
          sentence: "Sommige ___ zijn niet veilig om te gebruiken.",
          answer: "producten"
        },
        {
          word: "Russische roulette",
          definition: "een gevaarlijk spel waar je veel risico neemt, genoemd naar een Russisch spel",
          sentence: "Kopen bij die winkels is als ___ spelen.",
          answer: "Russische roulette"
        },
        {
          word: "consumentenorganisaties",
          definition: "groepen die opkomen voor de belangen van kopers/gebruikers",
          sentence: "Samen met internationale ___ test Testaankoop producten.",
          answer: "consumentenorganisaties"
        },
        {
          word: "webwinkels",
          definition: "online winkels waar je producten kunt kopen via internet",
          sentence: "Sommige ___ verkopen producten die niet veilig zijn.",
          answer: "webwinkels"
        },
        {
          word: "babyspeeltjes",
          definition: "speelgoed speciaal gemaakt voor baby's",
          sentence: "Ook sommige ___ voldoen niet aan de veiligheidsnormen.",
          answer: "babyspeeltjes"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sommige ___ zijn niet veilig om te gebruiken.",
          answer: "producten"
        },
        {
          sentence: "Sommige ___ verkopen producten die niet veilig zijn.",
          answer: "webwinkels"
        },
        {
          sentence: "Kopen bij die winkels is als ___ spelen.",
          answer: "Russische roulette"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Testaankoop kopen bij Temu 'Russische roulette'?",
        options: [
          "Omdat het een leuk spel is",
          "Omdat het veel geld kost",
          "Omdat het een groot risico is voor de koper",
          "Omdat het een oude traditie is"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat deden Shein en Temu na de waarschuwing?",
        options: [
          "Ze sloten de webwinkels",
          "Ze haalden de producten offline",
          "Ze negeerden de waarschuwing",
          "Ze verhoogden de prijzen"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van een product dat niet voldeed?",
        options: [
          "Een veiligheidshelm",
          "Een brandblusser",
          "Een goedkoop sieraad",
          "Een stevige tafel"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Testaankoop testte de producten alleen.",
        isTrue: false
      },
      {
        statement: "Shein en Temu haalden de producten offline na de waarschuwing.",
        isTrue: true
      },
      {
        statement: "Alle producten van Shein en Temu zijn veilig volgens Europese normen.",
        isTrue: false
      }
    ]
  }
];
