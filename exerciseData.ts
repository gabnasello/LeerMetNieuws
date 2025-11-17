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
    title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
    topicNumber: 1,
    article: {
      title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "stemmen",
          definition: "Je stem uitbrengen bij een verkiezing.",
          sentence: "We moeten gaan ___ om onze voorkeur aan te geven.",
          answer: "stemmen"
        },
        {
          word: "Republikeinen",
          definition: "Leden van een van de twee grote politieke partijen in de VS.",
          sentence: "De ___ hebben een meerderheid in het Huis van Afgevaardigden.",
          answer: "Republikeinen"
        },
        {
          word: "vrijgeven",
          definition: "Iets openbaar maken, bekendmaken.",
          sentence: "De overheid zal de documenten ___ voor het publiek.",
          answer: "vrijgeven"
        },
        {
          word: "Epstein",
          definition: "Een achternaam, hier van een persoon die betrokken was bij een schandaal.",
          sentence: "Het ___-dossier bevat gevoelige informatie.",
          answer: "Epstein"
        },
        {
          word: "updates",
          definition: "Nieuwe informatie of het laatste nieuws over een onderwerp.",
          sentence: "Volg de ___ over de situatie op onze website.",
          answer: "updates"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De overheid zal de documenten ___ voor het publiek.",
          answer: "vrijgeven"
        },
        {
          sentence: "Het ___-dossier bevat gevoelige informatie.",
          answer: "Epstein"
        },
        {
          sentence: "Volg de ___ over de situatie op onze website.",
          answer: "updates"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van Donald Trump in deze tekst?",
        options: [
          "Hij is een journalist",
          "Hij is de president van de VS",
          "Hij is een voormalige president die nu iets doet",
          "Hij is een acteur in een film"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat wordt er met de Epstein-dossiers gedaan?",
        options: [
          "Ze worden vernietigd",
          "Ze worden geheim gehouden",
          "Ze worden vrijgegeven voor het publiek",
          "Ze worden verkocht"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over koken",
          "Over politiek en nieuws",
          "Over sport",
          "Over geschiedenis"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de huidige president van de VS.",
        isTrue: false
      },
      {
        statement: "De tekst gaat over het vrijgeven van documenten over Epstein.",
        isTrue: true
      },
      {
        statement: "De tekst is geschreven in het Engels.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
    topicNumber: 1,
    article: {
      title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
      summary: "Complotdenkster Marjorie Taylor Greene was een van Trumps ferventste bondgenoten in het Congres. Nu ze zijn niet nagekomen beloftes tegen hem lijkt te gebruiken, noemt Trump haar een “verraadster”."
    },
    vocabulary: {
      words: [
        {
          word: "niet nagekomen",
          definition: "Niet gedaan wat beloofd is.",
          sentence: "Hij ___ zijn belofte om te helpen.",
          answer: "niet nagekomen"
        },
        {
          word: "Marjorie",
          definition: "Een voornaam, hier van de politicus.",
          sentence: "___ Taylor Greene is een Amerikaans congreslid.",
          answer: "Marjorie"
        },
        {
          word: "gekke",
          definition: "Iemand die zich vreemd of onverstandig gedraagt.",
          sentence: "Hij noemde haar een ___ in het debat.",
          answer: "gekke"
        },
        {
          word: "Marjorie",
          definition: "Een voornaam, hier van de politicus.",
          sentence: "___ Taylor Greene is een Amerikaans congreslid.",
          answer: "Marjorie"
        },
        {
          word: "drijft",
          definition: "Zorgt dat iets gebeurt of verandert.",
          sentence: "De wind ___ de wolken weg.",
          answer: "drijft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De wind ___ de wolken weg.",
          answer: "drijft"
        },
        {
          sentence: "___ Taylor Greene is een Amerikaans congreslid.",
          answer: "Marjorie"
        },
        {
          sentence: "___ Taylor Greene is een Amerikaans congreslid.",
          answer: "Marjorie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Trump Marjorie Taylor Greene een “verraadster”?",
        options: [
          "Omdat ze hem hielp",
          "Omdat ze een geheim vertelde",
          "Omdat ze haar beloften niet nakwam",
          "Omdat ze een feest organiseerde"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van Marjorie Taylor Greene in deze situatie?",
        options: [
          "Ze is een leider",
          "Ze is een bondgenoot geworden",
          "Ze is een tegenstander",
          "Ze is een verraadster"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat betekent het als beloftes niet nagekomen worden?",
        options: [
          "Het is goed",
          "Het is neutraal",
          "Het is slecht",
          "Het is onbekend"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Marjorie Taylor Greene en Donald Trump werken nu samen.",
        isTrue: false
      },
      {
        statement: "Marjorie Taylor Greene is een politicus uit de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "De titel van dit artikel is in het Engels.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
    topicNumber: 1,
    article: {
      title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
      summary: "De Denen en Noren sloten als eersten in Europa hun luchthavens wegens drones. Maar bijna twee maanden later is nog niet bevestigd dat er daar effectief vlogen. De Noorse politie staakte haar onderzoek zelfs wegens gebrek aan bewijs. In België worden minstens zeventien incidenten onderzocht."
    },
    vocabulary: {
      words: [
        {
          word: "bewijs",
          definition: "materiaal of informatie die iets bevestigt",
          sentence: "Zonder ___ kan de politie niets doen.",
          answer: "bewijs"
        },
        {
          word: "incidenten",
          definition: "gebeurtenissen of voorvallen, meestal ongelukkig",
          sentence: "Er waren verschillende ___ tijdens het festival.",
          answer: "incidenten"
        },
        {
          word: "luchthavens",
          definition: "plaatsen waar vliegtuigen landen en opstijgen",
          sentence: "We wachten in de ___ tot ons vliegtuig vertrekt.",
          answer: "luchthavens"
        },
        {
          word: "effectief",
          definition: "echt, daadwerkelijk",
          sentence: "De maatregel was ___ nuttig.",
          answer: "effectief"
        },
        {
          word: "onderzoek",
          definition: "het bestuderen of uitzoeken van iets",
          sentence: "Het politie- ___ naar de diefstal duurt lang.",
          answer: "onderzoek"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zonder ___ kan de politie niets doen.",
          answer: "bewijs"
        },
        {
          sentence: "We wachten in de ___ tot ons vliegtuig vertrekt.",
          answer: "luchthavens"
        },
        {
          sentence: "Het politie- ___ naar de diefstal duurt lang.",
          answer: "onderzoek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom sloten Denemarken en Noorwegen hun luchthavens?",
        options: [
          "Vanwege sneeuw",
          "Vanwege drones",
          "Vanwege vakantie",
          "Vanwege een feest"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat deed de Noorse politie met het onderzoek?",
        options: [
          "Stopte het",
          "Startte het",
          "Vergat het",
          "Vierde het"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar worden incidenten onderzocht?",
        options: [
          "In Nederland",
          "In Luxemburg",
          "In België",
          "In Duitsland"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Noorwegen en Denemarken hadden als eerste last van drones.",
        isTrue: true
      },
      {
        statement: "De Noorse politie stopte het onderzoek omdat het klaar was.",
        isTrue: false
      },
      {
        statement: "In België worden minstens zeventien incidenten onderzocht.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Lucie Goetinck, 97 jaar",
    topicNumber: 1,
    article: {
      title: "Lucie Goetinck, 97 jaar",
      summary: "Geboren in 1928, overleden op 08/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "2025",
          definition: "het jaar na 2024",
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        },
        {
          word: "overleden",
          definition: "niet meer leven, dood zijn",
          sentence: "Ze is ___ op 08/11/2025.",
          answer: "overleden"
        },
        {
          word: "08",
          definition: "de achtste dag van de maand",
          sentence: "Ze overleed op ___ november 2025.",
          answer: "08"
        },
        {
          word: "Lucie",
          definition: "een meisjesnaam, eigennaam",
          sentence: "___ Goetinck werd 97 jaar",
          answer: "Lucie"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Ze werd 97 ___ oud",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze overleed op ___ november 2025.",
          answer: "08"
        },
        {
          sentence: "___ Goetinck werd 97 jaar",
          answer: "Lucie"
        },
        {
          sentence: "Ze overleed in november ___.",
          answer: "2025"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Lucie Goetinck geboren?",
        options: [
          "1928",
          "1945",
          "1980",
          "2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd Lucie Goetinck?",
        options: [
          "75 jaar",
          "80 jaar",
          "95 jaar",
          "97 jaar"
        ],
        correctAnswer: 4
      },
      {
        question: "Op welke datum overleed Lucie Goetinck?",
        options: [
          "08-11-2025",
          "09-11-2025",
          "10-11-2025",
          "11-11-2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Lucie Goetinck is geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Lucie Goetinck werd 97 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Willy Braspenninckx, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Willy Braspenninckx, 89 jaar",
      summary: "Geboren in 1936, overleden op 09/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "1936",
          definition: "Een jaartal, uit de vorige eeuw.",
          sentence: "Hij is geboren in het jaar ___.",
          answer: "1936"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 dagen, of 12 maanden.",
          sentence: "Hij is 89 ___ oud.",
          answer: "jaar"
        },
        {
          word: "89",
          definition: "Een getal, bijna negentig.",
          sentence: "Hij is ___ jaar geworden.",
          answer: "89"
        },
        {
          word: "overleden",
          definition: "Niet meer levend, gestorven.",
          sentence: "Hij is ___ op 9 november 2025.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Een jaartal, in de toekomst.",
          sentence: "Hij stierf in het jaar ___.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij stierf in het jaar ___.",
          answer: "2025"
        },
        {
          sentence: "Hij is ___ op 9 november 2025.",
          answer: "overleden"
        },
        {
          sentence: "Hij is 89 ___ oud.",
          answer: "jaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Willy geboren?",
        options: [
          "1920",
          "1936",
          "1940",
          "1950"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Willy toen hij stierf?",
        options: [
          "75 jaar",
          "89 jaar",
          "90 jaar",
          "100 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de familienaam van Willy?",
        options: [
          "Janssen",
          "De Vries",
          "Braspenninckx",
          "Peters"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Willy stierf op 9 november 2025.",
        isTrue: true
      },
      {
        statement: "Willy was 90 jaar oud toen hij stierf.",
        isTrue: false
      },
      {
        statement: "Willy is een mannelijke naam.",
        isTrue: true
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
    topicNumber: 1,
    article: {
      title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
      summary: "Gezond eten is vaak veel duurder dan kant-en-klaar maaltijden. Dit komt omdat verse groenten en fruit meer kosten dan bewerkt voedsel. Mensen die gezond eten willen kopen, betalen meer dan mensen die vaak fastfood eten."
    },
    vocabulary: {
      words: [
        {
          word: "duurder",
          definition: "meer geld kostend",
          sentence: "De nieuwe telefoon is ___ dan de oude.",
          answer: "duurder"
        },
        {
          word: "gezond",
          definition: "goed voor je lichaam, niet ziek",
          sentence: "Sporten is ___ voor je.",
          answer: "gezond"
        },
        {
          word: "mensen",
          definition: "personen, individuen",
          sentence: "Sommige ___ houden van harde muziek.",
          answer: "mensen"
        },
        {
          word: "kosten",
          definition: "geld dat je moet betalen",
          sentence: "Hoeveel ___ een nieuwe fiets?",
          answer: "kost"
        },
        {
          word: "eten",
          definition: "voedsel, wat je eet",
          sentence: "Ik heb honger, ik wil iets ___.",
          answer: "eten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hoeveel ___ een nieuwe fiets?",
          answer: "kost"
        },
        {
          sentence: "De nieuwe telefoon is ___ dan de oude.",
          answer: "duurder"
        },
        {
          sentence: "Ik heb honger, ik wil iets ___.",
          answer: "eten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is gezond eten duurder volgens de tekst?",
        options: [
          "Omdat het minder lekker is",
          "Omdat het meer kost om verse producten te kopen",
          "Omdat mensen het niet willen kopen",
          "Omdat het niet in de winkel ligt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voorbeeld van kant-en-klaar eten?",
        options: [
          "Een appel",
          "Een salade van thuis",
          "Een pizza die je bestelt",
          "Een broodje van de bakker"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is het tegenovergestelde van 'kant-en-klaar'?",
        options: [
          "Snel klaar",
          "Zelfgemaakt",
          "Duur",
          "Ongezond"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gezond eten is goedkoper dan kant-en-klaar maaltijden.",
        isTrue: false
      },
      {
        statement: "Verse groenten en fruit zijn vaak duurder dan bewerkt voedsel.",
        isTrue: true
      },
      {
        statement: "Mensen die gezond eten kopen, betalen minder dan fastfood-eters.",
        isTrue: false
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Trump vraagt om stemmen",
    topicNumber: 1,
    article: {
      title: "Trump vraagt om stemmen",
      summary: "Donald Trump wil dat mensen stemmen in Amerika. De wereld kijkt mee. Hier lees je het laatste nieuws."
    },
    vocabulary: {
      words: [
        {
          word: "Trump",
          definition: "een persoon, de naam van een man",
          sentence: "___ is een man uit Amerika.",
          answer: "Trump"
        },
        {
          word: "Amerika",
          definition: "een land, de Verenigde Staten",
          sentence: "Hij komt uit ___.",
          answer: "Amerika"
        },
        {
          word: "nieuws",
          definition: "informatie, wat er gebeurt",
          sentence: "Het ___ is vandaag belangrijk.",
          answer: "nieuws"
        },
        {
          word: "vraagt",
          definition: "vragen, iets willen weten",
          sentence: "Hij ___ om hulp.",
          answer: "vraagt"
        },
        {
          word: "mensen",
          definition: "meerdere personen, groep personen",
          sentence: "De ___ werken samen.",
          answer: "mensen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ werken samen.",
          answer: "mensen"
        },
        {
          sentence: "___ is een man uit Amerika.",
          answer: "Trump"
        },
        {
          sentence: "Hij komt uit ___.",
          answer: "Amerika"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar komt Donald Trump vandaan?",
        options: [
          "Nederland",
          "Duitsland",
          "Amerika",
          "Frankrijk"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'stemmen'?",
        options: [
          "rennen",
          "kiesten",
          "lezen",
          "werken"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'nieuws'?",
        options: [
          "een soort eten",
          "een soort sport",
          "informatie over wat er gebeurt",
          "een soort dier"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Trump komt uit Amerika.",
        isTrue: true
      },
      {
        statement: "Stemmen betekent dansen.",
        isTrue: false
      },
      {
        statement: "Nieuws gaat over wat er gebeurt in de wereld.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Politieke onrust in Amerika",
    topicNumber: 1,
    article: {
      title: "Politieke onrust in Amerika",
      summary: "Twee politici hebben ruzie over een onderwerp."
    },
    vocabulary: {
      words: [
        {
          word: "politici",
          definition: "mensen die in de regering werken",
          sentence: "In veel landen hebben ___ belangrijke functies.",
          answer: "politici"
        },
        {
          word: "hebben",
          definition: "iets in bezit of onder beheer hebben",
          sentence: "Zij ___ een meningsverschil over een dossier.",
          answer: "hebben"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "Wat is een dossier?",
        options: [
          "een soort eten",
          "een verzameling documenten",
          "een soort auto",
          "een soort gebouw"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'gebruiken'?",
        options: [
          "iets inzetten voor een doel",
          "iets verliezen",
          "iets breken",
          "iets verbergen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een kenmerk van politici?",
        options: [
          "Ze hebben een belangrijke functie.",
          "Ze koken heel goed.",
          "Ze zijn altijd alleen.",
          "Ze hebben nooit documenten."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Politici werken altijd samen zonder ruzie.",
        isTrue: false
      },
      {
        statement: "Een dossier kan gevoelige informatie bevatten.",
        isTrue: true
      },
      {
        statement: "Politici hebben nooit meningsverschillen.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Drone-opschudding in Scandinavië",
    topicNumber: 1,
    article: {
      title: "Drone-opschudding in Scandinavië",
      summary: "Drones zorgen voor problemen op luchthavens in Noorwegen en Denemarken. De politie vindt het moeilijk om de daders te vinden. In België zijn er ook problemen met drones."
    },
    vocabulary: {
      words: [
        {
          word: "België",
          definition: "een land in Europa",
          sentence: "___ ligt naast Nederland.",
          answer: "België"
        },
        {
          word: "luchthaven",
          definition: "een plaats waar vliegtuigen landen en opstijgen",
          sentence: "Op de ___ landen vliegtuigen.",
          answer: "luchthaven"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven en misdaad onderzoeken",
          sentence: "De ___ zoekt naar de drone.",
          answer: "politie"
        },
        {
          word: "moeilijk",
          definition: "niet gemakkelijk, hard werken",
          sentence: "De test was erg ___.",
          answer: "moeilijk"
        },
        {
          word: "drone",
          definition: "een klein vliegend apparaat zonder piloot",
          sentence: "Een ___ vliegt in de lucht.",
          answer: "drone"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De test was erg ___.",
          answer: "moeilijk"
        },
        {
          sentence: "___ ligt naast Nederland.",
          answer: "België"
        },
        {
          sentence: "De ___ zoekt naar de drone.",
          answer: "politie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar zijn er problemen met drones?",
        options: [
          "Op luchthavens in Noorwegen en Denemarken",
          "In alle parken en tuinen",
          "Alleen in de Verenigde Staten",
          "Nergens, het is veilig"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat doet de politie?",
        options: [
          "Ze zoekt naar de drones",
          "Ze geeft iedereen een bon",
          "Ze sluit de luchthaven",
          "Ze doet niets"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar is België?",
        options: [
          "Het is een land in Europa",
          "Het is een stad in Nederland",
          "Het is een woord voor 'drone'",
          "Het is een soort drone"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Drones vliegen op luchthavens in Noorwegen en Denemarken.",
        isTrue: true
      },
      {
        statement: "De politie in Noorwegen heeft de drones gevonden.",
        isTrue: false
      },
      {
        statement: "In België zijn er ook incidenten met drones.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Lucie Goetinck, 97 jaar",
    topicNumber: 1,
    article: {
      title: "Lucie Goetinck, 97 jaar",
      summary: "Geboren in 1928, overleden op 08/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Niet meer levend, dood zijn",
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        },
        {
          word: "Lucie",
          definition: "Een vrouwelijke naam",
          sentence: "___ is een vrouw.",
          answer: "Lucie"
        },
        {
          word: "op",
          definition: "Een voorzetsel, bijvoorbeeld in 'op maandag'",
          sentence: "Hij is overleden ___ 08/11/2025.",
          answer: "op"
        },
        {
          word: "2025",
          definition: "Een jaartal",
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          word: "97",
          definition: "Een getal",
          sentence: "Zij werd ___ jaar oud.",
          answer: "97"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij is overleden ___ 08/11/2025.",
          answer: "op"
        },
        {
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Lucie Goetinck geboren?",
        options: [
          "1928",
          "1945",
          "1950",
          "1960"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud werd Lucie Goetinck?",
        options: [
          "80 jaar",
          "97 jaar",
          "100 jaar",
          "105 jaar"
        ],
        correctAnswer: 2
      },
      {
        question: "Is Lucie Goetinck nog in leven?",
        options: [
          "Ja, zij leeft nog",
          "Nee, zij is overleden",
          "Zij is nog jong",
          "Zij is 50 jaar"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Lucie Goetinck is geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck is overleden in 2025.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck is nu 97 jaar.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Willy Braspenninckx, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Willy Braspenninckx, 89 jaar",
      summary: "Hij is geboren in 1936. Hij is overleden op 09/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Zij is ___ in 2020.",
          answer: "overleden"
        },
        {
          word: "op",
          definition: "een voorzetsel dat vaak een plaats of tijd aangeeft",
          sentence: "We komen ___ 5 uur aan.",
          answer: "op"
        },
        {
          word: "in",
          definition: "een voorzetsel dat plaats of tijd aangeeft",
          sentence: "Hij woont ___ Amsterdam.",
          answer: "in"
        },
        {
          word: "2025",
          definition: "een jaartal",
          sentence: "Het jaar ___ is nog niet begonnen.",
          answer: "2025"
        },
        {
          word: "is",
          definition: "zijn (van het werkwoord 'zijn')",
          sentence: "Hij ___ een man.",
          answer: "is"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij is ___ in 2020.",
          answer: "overleden"
        },
        {
          sentence: "Het jaar ___ is nog niet begonnen.",
          answer: "2025"
        },
        {
          sentence: "We komen ___ 5 uur aan.",
          answer: "op"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'overleden'?",
        options: [
          "gestorven",
          "geweest",
          "geweest",
          "gegaan"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een persoon die overleden is",
          "Een nieuwe auto",
          "Een feest",
          "Een reis"
        ],
        correctAnswer: 1
      },
      {
        question: "Wanneer is Willy geboren?",
        options: [
          "In 1936",
          "In 2025",
          "In 1980",
          "In 2000"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Willy is een vrouw.",
        isTrue: false
      },
      {
        statement: "Willy is overleden.",
        isTrue: true
      },
      {
        statement: "Willy is geboren in 2025.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
    topicNumber: 1,
    article: {
      title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
      summary: "Gezond eten is duurder dan kant-en-klaar maaltijden. Wie gezond eet, betaalt meer dan wie dat niet doet."
    },
    vocabulary: {
      words: [
        {
          word: "eten",
          definition: "iets wat je kunt opeten, zoals brood of fruit",
          sentence: "Ik eet gezond ___ met groenten en fruit.",
          answer: "eten"
        },
        {
          word: "gezond",
          definition: "goed voor je lichaam, niet ziek",
          sentence: "Sporten is goed om ___ te blijven.",
          answer: "gezond"
        },
        {
          word: "duur",
          definition: "kost veel geld, niet goedkoop",
          sentence: "Die auto is erg ___ en niet voor iedereen betaalbaar.",
          answer: "duur"
        },
        {
          word: "maaltijd",
          definition: "het eten dat je op een moment eet, zoals ontbijt of diner",
          sentence: "De warme ___ bestond uit soep en een hoofdgerecht.",
          answer: "maaltijd"
        },
        {
          word: "eten",
          definition: "iets wat je kunt opeten, zoals brood of fruit",
          sentence: "Ik eet gezond ___ met groenten en fruit.",
          answer: "eten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Sporten is goed om ___ te blijven.",
          answer: "gezond"
        },
        {
          sentence: "Ik eet gezond ___ met groenten en fruit.",
          answer: "eten"
        },
        {
          sentence: "De warme ___ bestond uit soep en een hoofdgerecht.",
          answer: "maaltijd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'gezond' in deze context?",
        options: [
          "snel",
          "sterk",
          "goed voor het lichaam",
          "oud"
        ],
        correctAnswer: 3
      },
      {
        question: "Waarom is gezond eten duurder?",
        options: [
          "Omdat het populair is",
          "Omdat het moeilijk te maken is",
          "Omdat het veel grondstoffen vereist",
          "Omdat het zwaar is"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een 'maaltijd'?",
        options: [
          "Een soort sport",
          "Een moment van eten",
          "Een type boek",
          "Een soort dier"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Gezond eten kost meer geld dan fastfood.",
        isTrue: true
      },
      {
        statement: "Gezond eten is makkelijk te koken.",
        isTrue: false
      },
      {
        statement: "Iedereen kan gezond eten betalen.",
        isTrue: false
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
    topicNumber: 1,
    article: {
      title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "president",
          definition: "het staatshoofd van een republiek, meestal de hoogste politieke functionaris",
          sentence: "De ___ van de Verenigde Staten heeft een belangrijke rol in de buitenlandse politiek.",
          answer: "president"
        },
        {
          word: "stemmen",
          definition: "een stem uitbrengen, kiezen voor een kandidaat of partij",
          sentence: "Tijdens de verkiezingen kunnen burgers hun ___ uitbrengen op hun favoriete kandidaat.",
          answer: "stemmen"
        },
        {
          word: "dossiers",
          definition: "een verzameling van documenten over een bepaald onderwerp of persoon",
          sentence: "Journalisten hebben toegang gekregen tot de geheime ___ over het schandaal.",
          answer: "dossiers"
        },
        {
          word: "Epstein",
          definition: "verwijst naar Jeffrey Epstein, een controversieel figuur in recente geschiedenis",
          sentence: "Het ___ schandaal heeft wereldwijd aandacht getrokken vanwege de betrokkenheid van hooggeplaatste personen.",
          answer: "Epstein"
        },
        {
          word: "Republikeinen",
          definition: "een van de twee grote politieke partijen in de Verenigde Staten",
          sentence: "De ___ en Democraten hebben fundamenteel verschillende visies op buitenlands beleid.",
          answer: "Republikeinen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ en Democraten hebben fundamenteel verschillende visies op buitenlands beleid.",
          answer: "Republikeinen"
        },
        {
          sentence: "Het ___ schandaal heeft wereldwijd aandacht getrokken vanwege de betrokkenheid van hooggeplaatste personen.",
          answer: "Epstein"
        },
        {
          sentence: "De ___ van de Verenigde Staten heeft een belangrijke rol in de buitenlandse politiek.",
          answer: "president"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van de president in de buitenlandse politiek volgens de tekst?",
        options: [
          "Heeft geen rol",
          "Is alleen ceremonieel aanwezig",
          "Draagt verantwoordelijkheid voor internationale besluiten",
          "Wordt in de tekst niet genoemd"
        ],
        correctAnswer: 3
      },
      {
        question: "Welke term wordt gebruikt voor het proces waarbij burgers hun keuze uiten?",
        options: [
          "Stemmen",
          "Kiezen",
          "Selecteren",
          "Bepalen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een belangrijk thema in de tekst in verband met Epstein?",
        options: [
          "Zijn muzikale carrière",
          "Zijn filantropische werk",
          "Het schandaal rond zijn persoon",
          "Zijn wetenschappelijke ontdekkingen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de voormalige president van de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "De tekst stelt dat Trump nog steeds de huidige president is.",
        isTrue: false
      },
      {
        statement: "De Epstein-dossiers zijn volledig openbaar gemaakt volgens de tekst.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
    topicNumber: 1,
    article: {
      title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
      summary: "Complotdenkster Marjorie Taylor Greene was een van Trumps ferventste bondgenoten in het Congres. Nu ze zijn niet nagekomen beloftes tegen hem lijkt te gebruiken, noemt Trump haar een “verraadster”."
    },
    vocabulary: {
      words: [
        {
          word: "ferventste",
          definition: "Meest enthousiaste, gepassioneerde",
          sentence: "Zij was een van zijn ___ supporters.",
          answer: "ferventste"
        },
        {
          word: "gekke",
          definition: "Informeel voor iemand die onvoorspelbaar of irrationeel gedrag vertoont",
          sentence: "Hij noemde haar een ___ in de media.",
          answer: "gekke"
        },
        {
          word: "bondgenoten",
          definition: "Mensen of groepen die samenwerken voor een gemeenschappelijk doel",
          sentence: "De twee partijen waren ooit sterke politieke ___.",
          answer: "bondgenoten"
        },
        {
          word: "bondgenoten",
          definition: "Personen of groepen die samenwerken voor een gemeenschappelijk doel, vaak in politieke of militaire context.",
          sentence: "Tijdens de verkiezingen waren ze hechte politieke ___.",
          answer: "bondgenoten"
        },
        {
          word: "drijft",
          definition: "Vormt de oorzaak van, leidt tot",
          sentence: "Het conflict ___ hen uit elkaar.",
          answer: "drijft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de verkiezingen waren ze hechte politieke ___.",
          answer: "bondgenoten"
        },
        {
          sentence: "Het conflict ___ hen uit elkaar.",
          answer: "drijft"
        },
        {
          sentence: "Zij was een van zijn ___ supporters.",
          answer: "ferventste"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Trump Marjorie Taylor Greene een verraadster?",
        options: [
          "Omdat ze zich tegen hem keert",
          "Omdat ze een geheim verklapt",
          "Omdat ze een bondgenoot verraadt",
          "Omdat ze beloftes niet nakomt"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de relatie tussen Trump en Greene na het conflict?",
        options: [
          "Ze zijn vijanden geworden",
          "Ze werken weer samen",
          "Ze hebben geen contact meer",
          "Ze zijn bondgenoten gebleven"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de toon van de titel?",
        options: [
          "Neutraal en informatief",
          "Spottend en denigrerend",
          "Formeel en afstandelijk",
          "Emotioneel en beschuldigend"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Marjorie Taylor Greene en Donald Trump zijn nu politieke tegenstanders.",
        isTrue: true
      },
      {
        statement: "De titel gebruikt het woord “gekke” als een objectieve beschrijving.",
        isTrue: false
      },
      {
        statement: "Trump noemt Greene een verraadster omdat ze beloften niet heeft nagekomen.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
    topicNumber: 1,
    article: {
      title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
      summary: "De Denen en Noren sloten als eersten in Europa hun luchthavens wegens drones. Maar bijna twee maanden later is nog niet bevestigd dat er daar effectief vlogen. De Noorse politie staakte haar onderzoek zelfs wegens gebrek aan bewijs. In België worden minstens zeventien incidenten onderzocht."
    },
    vocabulary: {
      words: [
        {
          word: "speurtocht",
          definition: "Een zoektocht of onderzoek, vaak met als doel iets te vinden of te ontdekken.",
          sentence: "De politie startte een ___ naar de vermiste persoon.",
          answer: "speurtocht"
        },
        {
          word: "bewijs",
          definition: "Informatie of materiaal dat aantoont dat iets waar of gebeurd is.",
          sentence: "De politie heeft nog geen ___ van zijn betrokkenheid.",
          answer: "bewijs"
        },
        {
          word: "incidenten",
          definition: "Gebeurtenissen of voorvallen, vaak onverwachts of met negatieve gevolgen.",
          sentence: "Er werden verschillende ___ gemeld tijdens het festival.",
          answer: "incidenten"
        },
        {
          word: "onderzocht",
          definition: "Onderzocht; onderwerp van onderzoek of analyse.",
          sentence: "De zaak wordt nog steeds ___ door de politie.",
          answer: "onderzocht"
        },
        {
          word: "vlogen",
          definition: "Verleden tijd van vliegen; het zich door de lucht verplaatsen.",
          sentence: "De vogels ___ over het meer naar warmer weer.",
          answer: "vlogen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er werden verschillende ___ gemeld tijdens het festival.",
          answer: "incidenten"
        },
        {
          sentence: "De vogels ___ over het meer naar warmer weer.",
          answer: "vlogen"
        },
        {
          sentence: "De politie startte een ___ naar de vermiste persoon.",
          answer: "speurtocht"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de voornaamste reden waarom de luchthavens in Noorwegen en Denemarken werden gesloten?",
        options: [
          "Vanwege een drone die gesignaleerd was",
          "Omdat er een protest plaatsvond",
          "Vanwege slechte weersomstandigheden",
          "Omdat er onderhoud nodig was"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was het resultaat van het onderzoek door de Noorse politie?",
        options: [
          "Ze vonden voldoende bewijs om de zaak op te lossen",
          "Ze staakten het onderzoek vanwege gebrek aan bewijs",
          "Ze vonden de drone en arresteerden de operator",
          "Ze sloten de luchthaven permanent"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoeveel incidenten worden er in België onderzocht volgens de tekst?",
        options: [
          "Minder dan tien",
          "Precies tien",
          "Meer dan vijftien",
          "Minimaal zeventien"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De Deense en Noorse autoriteiten hebben hun luchthavens gesloten omdat er drones werden waargenomen.",
        isTrue: true
      },
      {
        statement: "Het onderzoek van de Noorse politie heeft geleid tot de arrestatie van de drone-operator.",
        isTrue: false
      },
      {
        statement: "In België worden momenteel meer dan tien incidenten onderzocht die verband houden met drones.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Lucie Goetinck, 97 jaar",
    topicNumber: 1,
    article: {
      title: "Lucie Goetinck, 97 jaar",
      summary: "Geboren in 1928, overleden op 08/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Lucie",
          definition: "Voornaam van de overledene, afgeleid van Lucia.",
          sentence: "___ Goetinck werd 97 jaar oud.",
          answer: "Lucie"
        },
        {
          word: "overleden",
          definition: "Overleden zijn, niet meer in leven zijn.",
          sentence: "Ze is ___ op 08/11/2025.",
          answer: "overleden"
        },
        {
          word: "geboren",
          definition: "Geboren zijn, het begin van het leven.",
          sentence: "Ze werd ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "2025",
          definition: "Het jaartal waarin ze overleed.",
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          word: "jaar",
          definition: "Eenheid van tijd, gelijk aan 12 maanden.",
          sentence: "Ze leefde 97 ___.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ Goetinck werd 97 jaar oud.",
          answer: "Lucie"
        },
        {
          sentence: "Ze leefde 97 ___.",
          answer: "jaar"
        },
        {
          sentence: "Ze is ___ op 08/11/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als iemand is overleden?",
        options: [
          "Die persoon is net geboren",
          "Die persoon is verhuisd naar een andere stad",
          "Die persoon is niet meer in leven",
          "Die persoon is op vakantie gegaan"
        ],
        correctAnswer: 3
      },
      {
        question: "In welk jaar is Lucie Goetinck geboren?",
        options: [
          "1928",
          "1945",
          "1930",
          "2025"
        ],
        correctAnswer: 1
      },
      {
        question: "Welke van deze is een jaartal?",
        options: [
          "Lucie",
          "97",
          "2025",
          "overleden"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Lucie Goetinck werd 97 jaar oud.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck is geboren in 2025.",
        isTrue: false
      },
      {
        statement: "De overlijdensdatum was 08/11/2025.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Willy Braspenninckx, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Willy Braspenninckx, 89 jaar",
      summary: "Geboren in 1936, overleden op 09/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Het einde van het leven; gestorven.",
          sentence: "Hij is ___ op hoge leeftijd, omringd door familie.",
          answer: "overleden"
        },
        {
          word: "geboren",
          definition: "Het begin van het leven, het moment van iemands geboorte.",
          sentence: "Hij werd ___ in een klein dorp in de jaren dertig.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is recentelijk ___ na een lang en vol leven.",
          answer: "overleden"
        },
        {
          word: "Geboren",
          definition: "Het moment waarop iemand ter wereld is gekomen.",
          sentence: "Zij werd ___ in een tijd van grote veranderingen.",
          answer: "Geboren"
        },
        {
          word: "Willy",
          definition: "Een voornaam, vaak gebruikt als verkorte vorm van Willem.",
          sentence: "___ was een veel voorkomende naam in de vorige eeuw.",
          answer: "Willy"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ was een veel voorkomende naam in de vorige eeuw.",
          answer: "Willy"
        },
        {
          sentence: "Hij is ___ op hoge leeftijd, omringd door familie.",
          answer: "overleden"
        },
        {
          sentence: "Zij werd ___ in een tijd van grote veranderingen.",
          answer: "Geboren"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat symboliseert de naam 'Willy Braspenninckx' in deze context?",
        options: [
          "Een actuele politicus",
          "Een personage uit een boek",
          "Een overleden persoon uit een nieuwsartikel",
          "Een fictief karakter in een film"
        ],
        correctAnswer: 3
      },
      {
        question: "Welk jaar markeert het overlijden van Willy Braspenninckx?",
        options: [
          "1936",
          "1945",
          "2025",
          "2000"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de betekenis van 'overleden' in deze tekst?",
        options: [
          "Geboren worden",
          "Sterven",
          "Verhuizen",
          "Veranderen van naam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Willy Braspenninckx overleed in het jaar 2025.",
        isTrue: true
      },
      {
        statement: "Willy Braspenninckx werd geboren in 1936, wat betekent dat hij 89 jaar werd.",
        isTrue: true
      },
      {
        statement: "De titel gebruikt de volledige naam 'Willy Braspenninckx' om te verwijzen naar een fictief persoon.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
    topicNumber: 1,
    article: {
      title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
      summary: "Groenten, fruit, rijst, melk ... Wie het advies van de Hoge Gezondheidsraad wil naleven, zal meer betalen dan wie daar zijn voeten aan veegt en vaker uit een aluminium bakje eet."
    },
    vocabulary: {
      words: [
        {
          word: "eten",
          definition: "voedsel; dat wat men nuttigt",
          sentence: "Gezond ___ is belangrijk voor een goede gezondheid.",
          answer: "eten"
        },
        {
          word: "kant-en-klaar",
          definition: "reeds bereid en verpakt; direct klaar voor consumptie",
          sentence: "___ maaltijden zijn handig maar vaak minder voedzaam.",
          answer: "kant-en-klaar"
        },
        {
          word: "advies",
          definition: "een aanbeveling of suggestie; raad",
          sentence: "De arts gaf ___ over een gezonde levensstijl.",
          answer: "advies"
        },
        {
          word: "duurder",
          definition: "met een hogere prijs; kostbaarder",
          sentence: "Vers fruit is vaak ___ dan conserven.",
          answer: "duurder"
        },
        {
          word: "gezond",
          definition: "in goede gezondheid verkerend; goed voor het lichaam",
          sentence: "Een ___ dieet bevat veel groenten en fruit.",
          answer: "gezond"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ maaltijden zijn handig maar vaak minder voedzaam.",
          answer: "kant-en-klaar"
        },
        {
          sentence: "De arts gaf ___ over een gezonde levensstijl.",
          answer: "advies"
        },
        {
          sentence: "Een ___ dieet bevat veel groenten en fruit.",
          answer: "gezond"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als voedsel 'kant-en-klaar' is?",
        options: [
          "Het is direct eetbaar zonder voorbereiding",
          "Het is alleen verkrijgbaar in speciale winkels",
          "Het is exclusief voor kinderen",
          "Het is altijd gezond en vers"
        ],
        correctAnswer: 1
      },
      {
        question: "Waarom zou iemand kiezen voor kant-en-klaar maaltijden?",
        options: [
          "Omdat ze altijd goedkoper zijn dan andere opties",
          "Omdat ze gemak bieden en tijd besparen",
          "Omdat ze duurzaam en milieuvriendelijk verpakt zijn",
          "Omdat ze per definitie gezonder zijn dan zelfgemaakt voedsel"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat suggereert de auteur over de voedingswaarde van kant-en-klaar maaltijden?",
        options: [
          "Ze zijn altijd evenwichtig en voedzaam",
          "Ze zijn meestal minder voedzaam dan vers bereide maaltijden",
          "Ze zijn verrijkt met extra vitaminen en mineralen",
          "Ze zijn vooral bedoeld voor mensen met veel tijd om te koken"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Kant-en-klaarmaaltijden zijn altijd duurder dan zelfgemaakte maaltijden.",
        isTrue: false
      },
      {
        statement: "De auteur suggereert dat kant-en-klaarmaaltijden handig zijn maar mogelijk minder voedzaam.",
        isTrue: true
      },
      {
        statement: "Gezond eten volgens de Hoge Gezondheidsraad vereist het kopen van exclusief geïmporteerde producten.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
    topicNumber: 1,
    article: {
      title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "stemmen",
          definition: "Je stem uitbrengen bij een verkiezing.",
          sentence: "We gaan ___ bij de verkiezingen.",
          answer: "stemmen"
        },
        {
          word: "vrijgeven",
          definition: "Iets openbaar maken, bijvoorbeeld een document.",
          sentence: "De regering besloot het rapport te ___.",
          answer: "vrijgeven"
        },
        {
          word: "dossiers",
          definition: "Een verzameling van documenten over een onderwerp.",
          sentence: "De politie heeft de ___ over de zaak.",
          answer: "dossiers"
        },
        {
          word: "Trump",
          definition: "De familienaam van de voormalige president van Amerika.",
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        },
        {
          word: "updates",
          definition: "Nieuwe informatie of het laatste nieuws over iets.",
          sentence: "Volg de website voor de laatste ___.",
          answer: "updates"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We gaan ___ bij de verkiezingen.",
          answer: "stemmen"
        },
        {
          sentence: "Volg de website voor de laatste ___.",
          answer: "updates"
        },
        {
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de hoofdstad van Frankrijk?",
        options: [
          "Berlijn",
          "Parijs",
          "Londen",
          "Rome"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke taal wordt in Brazilië gesproken?",
        options: [
          "Spaans",
          "Portugees",
          "Engels",
          "Frans"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'vrijgeven'?",
        options: [
          "Opslaan",
          "Verbergen",
          "Openbaar maken",
          "Verliezen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de president van Frankrijk.",
        isTrue: false
      },
      {
        statement: "Epstein is de naam van een persoon.",
        isTrue: true
      },
      {
        statement: "Updates zijn altijd positief.",
        isTrue: false
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
    topicNumber: 1,
    article: {
      title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
      summary: "Complotdenkster Marjorie Taylor Greene was een van Trumps ferventste bondgenoten in het Congres. Nu ze zijn niet nagekomen beloftes tegen hem lijkt te gebruiken, noemt Trump haar een “verraadster”."
    },
    vocabulary: {
      words: [
        {
          word: "drijft",
          definition: "doet dat iets of iemand beweegt of scheidt",
          sentence: "Een beslissing kan een persoon ___ om iets te doen.",
          answer: "drijft"
        },
        {
          word: "niet",
          definition: "ontkenning; het tegenovergestelde van wel",
          sentence: "Ze kon haar beloften ___ houden.",
          answer: "niet"
        },
        {
          word: "gebruiken",
          definition: "iets op een bepaalde manier inzetten",
          sentence: "Hij wil zijn invloed ___ om steun te krijgen.",
          answer: "gebruiken"
        },
        {
          word: "gekke",
          definition: "iemand die niet normaal denkt of doet",
          sentence: "Hij noemde haar een ___ in zijn toespraak.",
          answer: "gekke"
        },
        {
          word: "nagekomen",
          definition: "gevolgd, gedaan wat beloofd is",
          sentence: "Hij heeft zijn beloften ___.",
          answer: "nagekomen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze kon haar beloften ___ houden.",
          answer: "niet"
        },
        {
          sentence: "Een beslissing kan een persoon ___ om iets te doen.",
          answer: "drijft"
        },
        {
          sentence: "Hij heeft zijn beloften ___.",
          answer: "nagekomen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als Trump iemand een “verraadster” noemt?",
        options: [
          "Hij vindt die persoon heel leuk",
          "Hij vertrouwt die persoon niet meer",
          "Hij wil die persoon helpen",
          "Hij geeft die persoon een prijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom noemde Trump Marjorie Taylor Greene een “verraadster”?",
        options: [
          "Omdat ze hem hielp",
          "Omdat ze zijn beloften niet nakwam",
          "Omdat ze veel geld gaf",
          "Omdat ze zijn vriend was"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was het gevolg van Greene’s handelen voor haar relatie met Trump?",
        options: [
          "Ze werden vrienden",
          "Ze gingen samenwerken",
          "Hij keerde zich tegen haar",
          "Hij gaf haar een prijs"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Marjorie Taylor Greene en Donald Trump zijn nu vijanden.",
        isTrue: true
      },
      {
        statement: "Trump noemde Greene een “verraadster” omdat ze hem hielp.",
        isTrue: false
      },
      {
        statement: "Greene kon haar beloften niet nakomen, en dat maakte Trump boos.",
        isTrue: true
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Drones in Noorwegen en Denemarken",
    topicNumber: 1,
    article: {
      title: "Drones in Noorwegen en Denemarken",
      summary: "In Noorwegen en Denemarken zagen mensen drones, maar het is niet zeker. De politie in Noorwegen stopte het onderzoek omdat er geen bewijs was. In België wordt er ook naar drones gezocht."
    },
    vocabulary: {
      words: [
        {
          word: "onderzoek",
          definition: "proberen iets te weten te komen",
          sentence: "De politie doet ___ naar de drones.",
          answer: "onderzoek"
        },
        {
          word: "drones",
          definition: "kleine vliegende machines zonder piloot",
          sentence: "Sommige mensen zien ___ in de lucht.",
          answer: "drones"
        },
        {
          word: "Denemarken",
          definition: "een land in Europa",
          sentence: "___ ligt naast Duitsland.",
          answer: "Denemarken"
        },
        {
          word: "Noorwegen",
          definition: "een land in Europa",
          sentence: "___ is een land in het noorden van Europa.",
          answer: "Noorwegen"
        },
        {
          word: "politie",
          definition: "mensen die de wet handhaven",
          sentence: "De ___ zorgt voor veiligheid.",
          answer: "politie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ ligt naast Duitsland.",
          answer: "Denemarken"
        },
        {
          sentence: "De ___ zorgt voor veiligheid.",
          answer: "politie"
        },
        {
          sentence: "De politie doet ___ naar de drones.",
          answer: "onderzoek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom stopte de politie in Noorwegen het onderzoek naar de drones?",
        options: [
          "Omdat er geen bewijs was",
          "Omdat het te duur was",
          "Omdat ze het niet wilde",
          "Omdat er te veel drones waren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een drone?",
        options: [
          "Een soort vliegtuig zonder piloot",
          "Een soort auto",
          "Een soort fiets",
          "Een soort boot"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk land werd het onderzoek naar drones gestopt?",
        options: [
          "Noorwegen",
          "Duitsland",
          "Frankrijk",
          "Spanje"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "In Denemarken zagen mensen drones in de lucht.",
        isTrue: true
      },
      {
        statement: "De politie in Noorwegen vond veel bewijs van drones.",
        isTrue: false
      },
      {
        statement: "Er zijn incidenten met drones in België.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Lucie Goetinck, 97 jaar",
    topicNumber: 1,
    article: {
      title: "Lucie Goetinck, 97 jaar",
      summary: "Geboren in 1928, overleden op 08/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "Wanneer iemand geboren is, is dat het begin van zijn of haar leven.",
          sentence: "Lucie is ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Helaas is ze ___ op 8 november 2025.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar werd Lucie Goetinck geboren?",
        options: [
          "1920",
          "1928",
          "1930",
          "1935"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud werd Lucie Goetinck?",
        options: [
          "97 jaar",
          "100 jaar",
          "95 jaar",
          "102 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de geboortedatum van Lucie Goetinck?",
        options: [
          "1 januari 1928",
          "31 december 1928",
          "De tekst zegt het niet",
          "1 januari 1920"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Lucie Goetinck werd geboren in 1928.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck overleed in 2020.",
        isTrue: false
      },
      {
        statement: "Lucie Goetinck leefde tot 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Willy Braspenninckx, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Willy Braspenninckx, 89 jaar",
      summary: "Geboren in 1936, overleden op 09/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Braspenninckx",
          definition: "Een familienaam, de achternaam van iemand.",
          sentence: "De familie ___ woont in België.",
          answer: "Braspenninckx"
        },
        {
          word: "09",
          definition: "Het getal negen, na acht en voor tien.",
          sentence: "De maand oktober heeft ___ dagen? Nee, oktober heeft 31 dagen.",
          answer: "09"
        },
        {
          word: "Willy",
          definition: "Een voornaam, zoals de naam van een persoon.",
          sentence: "___ is een mannelijke naam.",
          answer: "Willy"
        },
        {
          word: "11",
          definition: "Het getal elf, na tien en voor twaalf.",
          sentence: "November is de ___de maand van het jaar.",
          answer: "11"
        },
        {
          word: "overleden",
          definition: "Niet meer levend, gestorven.",
          sentence: "Hij is ___ in 2023.",
          answer: "overleden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "November is de ___de maand van het jaar.",
          answer: "11"
        },
        {
          sentence: "De maand oktober heeft ___ dagen? Nee, oktober heeft 31 dagen.",
          answer: "09"
        },
        {
          sentence: "___ is een mannelijke naam.",
          answer: "Willy"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Willy geboren?",
        options: [
          "In 1936",
          "In 1945",
          "In 1989",
          "In 2000"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de familienaam van Willy?",
        options: [
          "Janssens",
          "Braspenninckx",
          "Peeters",
          "Verbeeck"
        ],
        correctAnswer: 2
      },
      {
        question: "Op welke datum is Willy overleden?",
        options: [
          "09-11-2025",
          "11-09-2025",
          "09-11-2024",
          "10-11-2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Willy was een vrouw.",
        isTrue: false
      },
      {
        statement: "Willy overleed in 2025.",
        isTrue: true
      },
      {
        statement: "Willy is geboren in 1936.",
        isTrue: true
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Waarom is gezond eten duurder dan kant-en-klaarmaaltijden?",
    topicNumber: 1,
    article: {
      title: "Waarom is gezond eten duurder dan kant-en-klaarmaaltijden?",
      summary: "Wie gezond wil eten volgens de regels, betaalt meer dan wie kant-en-klaarmaaltijden eet."
    },
    vocabulary: {
      words: [
        {
          word: "betaalt",
          definition: "geld geven voor iets, betalen",
          sentence: "Hij ___ voor zijn brood bij de bakker.",
          answer: "betaalt"
        },
        {
          word: "eten",
          definition: "voedsel dat je opeet",
          sentence: "Ik heb honger, ik wil iets ___.",
          answer: "eten"
        },
        {
          word: "regels",
          definition: "afspraken of instructies die je moet volgen",
          sentence: "Volg de ___ van het spel om te winnen.",
          answer: "regels"
        },
        {
          word: "klaar",
          definition: "gereed, afgerond",
          sentence: "Mijn huiswerk is ___, ik kan nu spelen.",
          answer: "klaar"
        },
        {
          word: "gezond",
          definition: "goed voor je lichaam, niet ziek",
          sentence: "Sporten is ___ voor je.",
          answer: "gezond"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Mijn huiswerk is ___, ik kan nu spelen.",
          answer: "klaar"
        },
        {
          sentence: "Volg de ___ van het spel om te winnen.",
          answer: "regels"
        },
        {
          sentence: "Sporten is ___ voor je.",
          answer: "gezond"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom is gezond eten soms duurder?",
        options: [
          "Omdat het meer vitaminen heeft.",
          "Omdat het in de aanbieding is.",
          "Omdat het langer meegaat.",
          "Omdat het duurder is om te maken."
        ],
        correctAnswer: 4
      },
      {
        question: "Wat betekent 'niet' in deze context?",
        options: [
          "Niet betekent altijd 'geen'.",
          "Niet is een soort fruit.",
          "Niet is een tegenstelling van 'wel'.",
          "Niet is een vorm van groente."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is een voorbeeld van 'volgen'?",
        options: [
          "Iets heel zwaar tillen.",
          "De regels van een spel negeren.",
          "Naar de leraar luisteren.",
          "Hard wegrennen voor een leeuw."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Gezond eten is vaak goedkoper dan kant-en-klaarmaaltijden.",
        isTrue: false
      },
      {
        statement: "Wie gezond eet, betaalt meer dan wie kant-en-klaar eet.",
        isTrue: true
      },
      {
        statement: "Kant-en-klaarmaaltijden zijn altijd duurder dan zelf koken.",
        isTrue: false
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
    topicNumber: 1,
    article: {
      title: "Trump roept Republikeinen op te stemmen voor vrijgeven Epstein-dossiers",
      summary: "De tweede ambtstermijn van Donald Trump als Amerikaans president brengt wereldwijd veranderingen teweeg. Volg hier alle updates."
    },
    vocabulary: {
      words: [
        {
          word: "wereldwijd",
          definition: "Over de hele wereld",
          sentence: "Deze gebeurtenis is wereldwijd bekend geworden.",
          answer: "wereldwijd"
        },
        {
          word: "stemmen",
          definition: "Een stem uitbrengen; kiezen",
          sentence: "We moeten allemaal gaan stemmen bij de verkiezingen.",
          answer: "stemmen"
        },
        {
          word: "vrijgeven",
          definition: "Vrijgeven; openbaar maken",
          sentence: "De regering wil de documenten vrijgeven aan het publiek.",
          answer: "vrijgeven"
        },
        {
          word: "tweede",
          definition: "Nummer twee in een reeks",
          sentence: "Dit is zijn tweede kans om te slagen.",
          answer: "tweede"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Dit is zijn tweede kans om te slagen.",
          answer: "tweede"
        },
        {
          sentence: "Deze gebeurtenis is wereldwijd bekend geworden.",
          answer: "wereldwijd"
        },
        {
          sentence: "De regering wil de documenten vrijgeven aan het publiek.",
          answer: "vrijgeven"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent het als een document wordt vrijgegeven?",
        options: [
          "Het wordt vernietigd",
          "Het wordt openbaar gemaakt",
          "Het wordt verborgen",
          "Het wordt verkocht"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'wereldwijd'?",
        options: [
          "Alleen in één land",
          "Over de hele wereld",
          "Alleen in de toekomst",
          "Alleen in het verleden"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'amtsperiode'?",
        options: [
          "Een soort fruit",
          "Een sportevenement",
          "De periode waarin iemand een functie bekleedt",
          "Een wiskundige term"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de president van de Verenigde Staten.",
        isTrue: false
      },
      {
        statement: "Epstein-dossiers bevatten informatie over Jeffrey Epstein.",
        isTrue: true
      },
      {
        statement: "Donald Trump heeft alleen maar een eerste ambtstermijn gehad.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
    topicNumber: 1,
    article: {
      title: "Epstein-dossier drijft Trump en “gekke” Marjorie Taylor Greene uit elkaar",
      summary: "Complotdenkster Marjorie Taylor Greene was een van Trumps ferventste bondgenoten in het Congress. Nu ze zijn niet nagekomen beloftes tegen hem lijkt te gebruiken, noemt Trump haar een “verraadster”."
    },
    vocabulary: {
      words: [
        {
          word: "bondgenoten",
          definition: "Mensen die samenwerken voor een doel",
          sentence: "Tijdens de oorlog hadden ze veel internationale ___.",
          answer: "bondgenoten"
        },
        {
          word: "congres",
          definition: "Een grote, formele vergadering",
          sentence: "Het ___ duurde langer dan verwacht.",
          answer: "congres"
        },
        {
          word: "niet nagekomen",
          definition: "Niet gedaan wat beloofd is",
          sentence: "Hij bleek ___ beloften te hebben.",
          answer: "niet nagekomen"
        },
        {
          word: "gekke",
          definition: "Iemand die niet goed bij zinnen is",
          sentence: "Hij gedraagt zich als een echte ___.",
          answer: "gekke"
        },
        {
          word: "drijft",
          definition: "Zet aan het werk of in beweging",
          sentence: "De motor ___ de machine aan.",
          answer: "drijft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De motor ___ de machine aan.",
          answer: "drijft"
        },
        {
          sentence: "Tijdens de oorlog hadden ze veel internationale ___.",
          answer: "bondgenoten"
        },
        {
          sentence: "Hij bleek ___ beloften te hebben.",
          answer: "niet nagekomen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemde Trump Marjorie Taylor Greene een “verraadster”?",
        options: [
          "Omdat ze een spion was",
          "Omdat ze haar beloften niet nakwam",
          "Omdat ze een andere politieke partij steunde",
          "Omdat ze informatie lekte"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de rol van Marjorie Taylor Greene in het Congress voor de ruzie?",
        options: [
          "Ze was de president",
          "Ze was een bondgenoot van Trump",
          "Ze was een spion",
          "Ze was de leider van de oppositie"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe reageerde Trump op het gedrag van Marjorie Taylor Greene?",
        options: [
          "Hij prees haar",
          "Hij negeerde haar",
          "Hij noemde haar een “verraadster”",
          "Hij gaf haar een medaille"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Marjorie Taylor Greene was een bondgenoot van Trump in het Congress.",
        isTrue: true
      },
      {
        statement: "Trump noemde Greene een “verraadster” omdat ze informatie lekte.",
        isTrue: false
      },
      {
        statement: "Greene en Trump werden uit elkaar gedreven door het Epstein-dossier.",
        isTrue: true
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
    topicNumber: 1,
    article: {
      title: "Speurtocht naar ‘eerste’ drones in Noorwegen en Denemarken levert vooral vragen op",
      summary: "De Denen en Noren sloten als eersten in Europa hun luchthavens wegens drones. Maar bijna twee maanden later is nog niet bevestigd dat er daar effectief vlogen. De Noorse politie staakte haar onderzoek zelfs wegens gebrek aan bewijs. In België worden minstens zeventien incidenten onderzocht."
    },
    vocabulary: {
      words: [
        {
          word: "drone",
          definition: "een onbemand vliegtuigje op afstand bestuurd",
          sentence: "Hij filmde de bruiloft met een ___.",
          answer: "drone"
        },
        {
          word: "incidenten",
          definition: "gebeurtenissen of voorvallen, vaak ongelukkig",
          sentence: "De politie registreerde drie ___ op straat.",
          answer: "incidenten"
        },
        {
          word: "incidenten",
          definition: "gebeurtenissen of voorvallen, vaak ongelukken",
          sentence: "Er waren meerdere ___ tijdens het festival.",
          answer: "incidenten"
        },
        {
          word: "onderzoek",
          definition: "een studie of inspectie om iets te weten te komen",
          sentence: "Het wetenschappelijk ___ naar de drone gaat door.",
          answer: "onderzoek"
        },
        {
          word: "bewijs",
          definition: "bewijsstukken of informatie die iets aantoont",
          sentence: "Zonder ___ kan de rechter niet oordelen.",
          answer: "bewijs"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij filmde de bruiloft met een ___.",
          answer: "drone"
        },
        {
          sentence: "Er waren meerdere ___ tijdens het festival.",
          answer: "incidenten"
        },
        {
          sentence: "Het wetenschappelijk ___ naar de drone gaat door.",
          answer: "onderzoek"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom werden de luchthavens in Noorwegen en Denemarken gesloten?",
        options: [
          "Vanwege drones",
          "Vanwege slecht weer",
          "Vanwege een staking",
          "Vanwege een virusuitbraak"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was het resultaat van het onderzoek van de Noorse politie?",
        options: [
          "Vond niets",
          "Vond bewijs van drones",
          "Leidde tot arrestaties",
          "Was nog niet afgerond"
        ],
        correctAnswer: 1
      },
      {
        question: "In welk land worden momenteel incidenten met drones onderzocht?",
        options: [
          "Noorwegen",
          "Denemarken",
          "België",
          "Nederland"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De politie in Noorwegen stopte het onderzoek omdat ze drones vonden.",
        isTrue: false
      },
      {
        statement: "Er zijn in België minstens zeventien incidenten met drones die worden onderzocht.",
        isTrue: true
      },
      {
        statement: "Denemarken en Noorwegen hadden de eerste drone-incidenten in Europa.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Lucie Goetinck, 97 jaar",
    topicNumber: 1,
    article: {
      title: "Lucie Goetinck, 97 jaar",
      summary: "Geboren in 1928, overleden op 08/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "2025",
          definition: "Het jaar tweeduizend vijfentwintig, na 2024.",
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          word: "jaar",
          definition: "Een periode van 365 dagen, of 12 maanden.",
          sentence: "Ze was 97 ___ oud.",
          answer: "jaar"
        },
        {
          word: "Goetinck",
          definition: "Een familienaam, mogelijk van Nederlandse of Vlaamse oorsprong.",
          sentence: "Haar volledige naam was ___ Goetinck.",
          answer: "Goetinck"
        },
        {
          word: "geboren",
          definition: "Geboren zijn; het begin van het leven.",
          sentence: "Ze werd ___ in 1928.",
          answer: "geboren"
        },
        {
          word: "Lucie",
          definition: "Een vrouwelijke voornaam, afgeleid van Lucia.",
          sentence: "___ was de oudste inwoner van het dorp.",
          answer: "Lucie"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze overleed in ___.",
          answer: "2025"
        },
        {
          sentence: "Ze was 97 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Haar volledige naam was ___ Goetinck.",
          answer: "Goetinck"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Lucie Goetinck geboren?",
        options: [
          "1928",
          "1945",
          "1930",
          "1920"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Lucie Goetinck toen ze overleed?",
        options: [
          "97 jaar",
          "96 jaar",
          "98 jaar",
          "99 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Lucie Goetinck?",
        options: [
          "08/11/2025",
          "09/11/2025",
          "08/12/2025",
          "07/11/2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Lucie Goetinck was ouder dan 95 jaar.",
        isTrue: true
      },
      {
        statement: "Lucie Goetinck overleed in het jaar 2024.",
        isTrue: false
      },
      {
        statement: "Lucie Goetinck werd geboren in de 20e eeuw.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Willy Braspenninckx, 89 jaar",
    topicNumber: 1,
    article: {
      title: "Willy Braspenninckx, 89 jaar",
      summary: "Geboren in 1936, overleden op 09/11/2025."
    },
    vocabulary: {
      words: [
        {
          word: "overleden",
          definition: "Niet meer levend, gestorven.",
          sentence: "Hij is ___ op 89-jarige leeftijd, na een lang leven.",
          answer: "overleden"
        },
        {
          word: "1936",
          definition: "Een jaartal, bijna een eeuw geleden.",
          sentence: "In het jaar ___ begon de economische crisis te verminderen.",
          answer: "1936"
        },
        {
          word: "09/11/2025",
          definition: "Een datum, de elfde van de elfde? Nee, het is een specifieke dag in de toekomst.",
          sentence: "Hij stierf op ___, een datum die nog moet komen.",
          answer: "09/11/2025"
        },
        {
          word: "89",
          definition: "Een getal, negenentachtig, tussen 88 en 90.",
          sentence: "Hij werd ___ jaar oud, een respectabele leeftijd.",
          answer: "89"
        },
        {
          word: "Braspenninckx",
          definition: "Een familienaam, waarschijnlijk van Belgische of Nederlandse oorsprong.",
          sentence: "De familie ___ woonde al generaties in hetzelfde dorp.",
          answer: "Braspenninckx"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De familie ___ woonde al generaties in hetzelfde dorp.",
          answer: "Braspenninckx"
        },
        {
          sentence: "Hij stierf op ___, een datum die nog moet komen.",
          answer: "09/11/2025"
        },
        {
          sentence: "In het jaar ___ begon de economische crisis te verminderen.",
          answer: "1936"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar werd Willy geboren?",
        options: [
          "1920",
          "1930",
          "1936",
          "1940"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de geboortedatum van Willy?",
        options: [
          "09/11/2025",
          "09/11/1936",
          "01/01/1936",
          "31/12/1936"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud werd Willy?",
        options: [
          "89 jaar",
          "90 jaar",
          "100 jaar",
          "85 jaar"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Willy overleed op 09/11/2025.",
        isTrue: true
      },
      {
        statement: "Willy werd geboren in 1940.",
        isTrue: false
      },
      {
        statement: "Willy was 89 jaar oud toen hij stierf.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
    topicNumber: 1,
    article: {
      title: "Waarom is gezond eten zoveel duurder dan kant-en-klaar?",
      summary: "Gezonde voeding volgens de Hoge Gezondheidsraad is duurder dan kant-en-klaar maaltijden, wat mensen kan beïnvloeden in hun keuze."
    },
    vocabulary: {
      words: [
        {
          word: "eten",
          definition: "voedsel, dat wat je consumeert",
          sentence: "Gezond ___ is belangrijk voor je lichaam.",
          answer: "eten"
        },
        {
          word: "gezond",
          definition: "goed voor je lichaam, niet ziek",
          sentence: "Een ___ lichaam heeft veel energie.",
          answer: "gezond"
        },
        {
          word: "duurder",
          definition: "meer geld kostend",
          sentence: "De auto is ___ dan de fiets.",
          answer: "duurder"
        },
        {
          word: "kant-en-klaar",
          definition: "voedsel dat al is bereid en alleen nog opgewarmd moet worden",
          sentence: "Ik heb geen tijd om te koken, dus eet ik een ___ maaltijd.",
          answer: "kant-en-klaar"
        },
        {
          word: "Hoge",
          definition: "groot in hoogte of belangrijk",
          sentence: "De ___ Raad geeft belangrijke richtlijnen.",
          answer: "Hoge"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De auto is ___ dan de fiets.",
          answer: "duurder"
        },
        {
          sentence: "Een ___ lichaam heeft veel energie.",
          answer: "gezond"
        },
        {
          sentence: "Ik heb geen tijd om te koken, dus eet ik een ___ maaltijd.",
          answer: "kant-en-klaar"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een belangrijk punt uit de tekst?",
        options: [
          "Gezond eten is duurder dan kant-en-klaar maaltijden.",
          "Iedereen eet graag kant-en-klaar maaltijden.",
          "De Hoge Gezondheidsraad is een restaurant.",
          "Gezond eten is altijd goedkoop."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de rol van de Hoge Gezondheidsraad?",
        options: [
          "Ze adviseren over gezond eten.",
          "Ze verkopen kant-en-klaar maaltijden.",
          "Ze maken de regels voor sporten.",
          "Ze zijn een soort supermarkt."
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een gevolg volgens de tekst?",
        options: [
          "Mensen kiezen vaker voor kant-en-klaar omdat het goedkoper is.",
          "Gezond eten wordt steeds goedkoper.",
          "De Hoge Gezondheidsraad verkoopt eten.",
          "Kant-en-klaar maaltijden zijn altijd gezond."
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Gezond eten is duurder dan kant-en-klaar maaltijden.",
        isTrue: true
      },
      {
        statement: "De Hoge Gezondheidsraad verkoopt kant-en-klaar maaltijden.",
        isTrue: false
      },
      {
        statement: "Mensen kiezen soms voor kant-en-klaar vanwege de prijs.",
        isTrue: true
      }
    ]
  }
];
