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
    title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
      summary: "42 miljoen Amerikanen komen maar rond dankzij voedselsteun van de regering. De voedselbonnen van november lijken gered, al ontbreken er miljarden dollars."
    },
    vocabulary: {
      words: [
        {
          word: "rechter",
          definition: "iemand die beslist in een rechtszaak",
          sentence: "De ___ bepaalde dat de steun doorgaat.",
          answer: "rechter"
        },
        {
          word: "voedselbonnen",
          definition: "bonnen die je kunt gebruiken om eten te kopen",
          sentence: "Sommige gezinnen gebruiken ___ om boodschappen te doen.",
          answer: "voedselbonnen"
        },
        {
          word: "gered",
          definition: "beschermd of veiliggesteld",
          sentence: "De dieren zijn ___ door de brandweer.",
          answer: "gered"
        },
        {
          word: "hongercrisis",
          definition: "een situatie waarin veel mensen niet genoeg te eten hebben",
          sentence: "Door de droogte ontstond er een ___ in het land.",
          answer: "hongercrisis"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land bestuurt",
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        },
        {
          sentence: "Sommige gezinnen gebruiken ___ om boodschappen te doen.",
          answer: "voedselbonnen"
        },
        {
          sentence: "De dieren zijn ___ door de brandweer.",
          answer: "gered"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van de rechter in deze situatie?",
        options: [
          "Hij organiseert voedselhulp.",
          "Hij beslist over de voortzetting van het steunprogramma.",
          "Hij kookt voor daklozen.",
          "Hij start een nieuwe campagne."
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom zijn de voedselbonnen belangrijk voor de mensen?",
        options: [
          "Ze zijn gemaakt van goud.",
          "Ze kunnen worden ingeruild voor voedsel.",
          "Ze zijn alleen geldig in het buitenland.",
          "Ze worden niet meer gebruikt."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het probleem met de financiering?",
        options: [
          "Er is te veel geld.",
          "Er is te weinig geld voor het programma.",
          "Het geld is gestolen.",
          "Het geld is in andere valuta."
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rechter heeft de voedselsteun volledig stopgezet.",
        isTrue: false
      },
      {
        statement: "Er ontbreken miljarden dollars aan de steun.",
        isTrue: true
      },
      {
        statement: "Alleen kinderen krijgen voedselbonnen in dit programma.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
    topicNumber: 1,
    article: {
      title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
      summary: "Nu de kans op een snel bestand in Oekraïne vervlogen is, blijft de vraag: hoe zal deze oorlog eindigen? Niemand durft het te voorspellen, maar een trend is duidelijk: Oekraïne kan financieel niet veel verder, maar het moet wel."
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "Een situatie waarin landen of groepen vechten.",
          sentence: "Een ___ brengt veel schade met zich mee.",
          answer: "oorlog"
        },
        {
          word: "financieel",
          definition: "Alles wat met geld te maken heeft.",
          sentence: "Hij is ___ niet sterk.",
          answer: "financieel"
        },
        {
          word: "economische",
          definition: "Alles wat met de economie te maken heeft.",
          sentence: "De ___ situatie in het land is stabiel.",
          answer: "economische"
        },
        {
          word: "voorspellen",
          definition: "Iets zeggen over wat er in de toekomst gaat gebeuren.",
          sentence: "Het is moeilijk om de toekomst te ___.",
          answer: "voorspellen"
        },
        {
          word: "vervlogen",
          definition: "Iets dat voorbij is of niet meer bestaat.",
          sentence: "De hoop op vrede is ___.",
          answer: "vervlogen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De hoop op vrede is ___.",
          answer: "vervlogen"
        },
        {
          sentence: "Hij is ___ niet sterk.",
          answer: "financieel"
        },
        {
          sentence: "Een ___ brengt veel schade met zich mee.",
          answer: "oorlog"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover gaat dit artikel?",
        options: [
          "Over sport",
          "Over vrede",
          "Over Oekraïne",
          "Over economie"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de situatie in Oekraïne?",
        options: [
          "Er is vrede",
          "Er is een oorlog",
          "Er is een feest",
          "Er is een vergadering"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de belangrijkste boodschap van de tekst?",
        options: [
          "Oekraïne wint de oorlog",
          "De economie is belangrijker dan het leger",
          "Het leger is belangrijker dan de economie",
          "Oekraïne heeft geen problemen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne kan financieel niet verder.",
        isTrue: true
      },
      {
        statement: "De oorlog is al afgelopen.",
        isTrue: false
      },
      {
        statement: "Een economische uitputtingsslag is belangrijker dan een militaire.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een eigen versie van de Monroedoctrine",
    topicNumber: 1,
    article: {
      title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een eigen versie van de Monroedoctrine",
      summary: "Amerikaanse media noemen hem een piraat en waarschuwen voor de risico’s van een invasie van Venezuela. Maar Donald Trump maakt van Latijns-Amerika opnieuw zijn exclusieve speeltuin, in zijn geheel eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "Monroedoctrine",
          definition: "Een oude Amerikaanse politieke doctrine die zegt dat Europa zich niet moet bemoeien met Amerika.",
          sentence: "De ___ is een belangrijk stuk geschiedenis voor de Verenigde Staten.",
          answer: "Monroedoctrine"
        },
        {
          word: "speeltuin",
          definition: "Een plek waar kinderen kunnen spelen, vaak met toestellen zoals glijbanen en schommels.",
          sentence: "Kinderen spelen graag in de ___.",
          answer: "speeltuin"
        },
        {
          word: "invasie",
          definition: "Binnen vallen van een gebied of land door een ander leger.",
          sentence: "Een ___ is vaak het begin van een oorlog.",
          answer: "invasie"
        },
        {
          word: "versie",
          definition: "Een bepaalde vorm of editie van iets, zoals een verhaal of software.",
          sentence: "Welke ___ van het spel heb jij?",
          answer: "versie"
        },
        {
          word: "Donald Trump",
          definition: "De voornaam en achternaam van de voormalige president van de Verenigde Staten.",
          sentence: "___ is een bekende politieke figuur.",
          answer: "Donald Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Een ___ is vaak het begin van een oorlog.",
          answer: "invasie"
        },
        {
          sentence: "De ___ is een belangrijk stuk geschiedenis voor de Verenigde Staten.",
          answer: "Monroedoctrine"
        },
        {
          sentence: "___ is een bekende politieke figuur.",
          answer: "Donald Trump"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Monroedoctrine?",
        options: [
          "Een sport",
          "Een politiek beleid",
          "Een soort eten",
          "Een historisch monument"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'invasie' in deze context?",
        options: [
          "Een feest",
          "Een soort dans",
          "Binnenvallen door een leger",
          "Een nieuwe wet"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar ligt Venezuela?",
        options: [
          "In Afrika",
          "In Azië",
          "In Zuid-Amerika",
          "In Europa"
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
        statement: "Venezuela is een land in Zuid-Amerika.",
        isTrue: true
      },
      {
        statement: "De Monroedoctrine is een beleid dat zegt dat de Verenigde Staten Europa niet in Amerika laat bemoeien.",
        isTrue: true
      }
    ]
  },
{
    id: 4,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Illegale rave bij Kluisbergen",
    topicNumber: 1,
    article: {
      title: "Illegale rave bij Kluisbergen",
      summary: "In de Waalse gemeente Frasnes-lez-Anvaing, vlak over de taalgrens, is een illegale rave bezig met ongeveer 700 bezoekers. De deelnemers komen uit België, Nederland en Frankrijk en zijn van plan om tot zondagnamiddag door te gaan."
    },
    vocabulary: {
      words: [
        {
          word: "Nederland",
          definition: "ons land",
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        },
        {
          word: "deelnemers",
          definition: "mensen die meedoen aan iets",
          sentence: "De ___ van het feest kwamen uit verschillende landen.",
          answer: "deelnemers"
        },
        {
          word: "zondag",
          definition: "de dag na zaterdag",
          sentence: "Op ___ is het weekend.",
          answer: "zondag"
        },
        {
          word: "Frankrijk",
          definition: "een groot land in Europa",
          sentence: "___ is groter dan België.",
          answer: "Frankrijk"
        },
        {
          word: "bezoekers",
          definition: "mensen die naar een plaats gaan",
          sentence: "De ___ van het feest waren erg luid.",
          answer: "bezoekers"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ is groter dan België.",
          answer: "Frankrijk"
        },
        {
          sentence: "___ is een land in Europa.",
          answer: "Nederland"
        },
        {
          sentence: "De ___ van het feest waren erg luid.",
          answer: "bezoekers"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een rave?",
        options: [
          "Een soort dans",
          "Een groot feest met muziek",
          "Een sportevenement",
          "Een markt"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar vond deze rave plaats?",
        options: [
          "In Nederland",
          "In België",
          "In Frankrijk",
          "In Duitsland"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe lang duurde de rave?",
        options: [
          "Tot zaterdag",
          "Tot zondag",
          "Tot maandag",
          "Tot dinsdag"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rave vond plaats in Kluisbergen.",
        isTrue: false
      },
      {
        statement: "De rave had ongeveer 700 bezoekers.",
        isTrue: true
      },
      {
        statement: "De rave was legaal.",
        isTrue: false
      }
    ]
  },
{
    id: 5,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Helft leerlingen die les volgt via Bednet heeft psychische problemen",
    topicNumber: 1,
    article: {
      title: "Helft leerlingen die les volgt via Bednet heeft psychische problemen",
      summary: "Meer dan de helft van de leerlingen in het middelbaar die afstandsonderwijs volgen, doet dat omdat ze psychisch kwetsbaar zijn. 'Elke dag in de klas zitten, lukt me niet.'"
    },
    vocabulary: {
      words: [
        {
          word: "heeft",
          definition: "hebben, om te bezitten",
          sentence: "Hij ___ een grote hond als huisdier.",
          answer: "heeft"
        },
        {
          word: "volgt",
          definition: "doorgaan met, blijven doen",
          sentence: "Hij ___ nog steeds de online lessen.",
          answer: "volgt"
        },
        {
          word: "helft",
          definition: "de helft, een van de twee",
          sentence: "Ongeveer de ___ van de groep was al klaar.",
          answer: "helft"
        },
        {
          word: "leerlingen",
          definition: "mensen die les volgen op school",
          sentence: "De ___ van deze school zijn erg leergierig.",
          answer: "leerlingen"
        },
        {
          word: "psychische",
          definition: "mentaal, met de geest te maken hebbend",
          sentence: "Hij kreeg ___ hulp na het ongeluk.",
          answer: "psychische"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij kreeg ___ hulp na het ongeluk.",
          answer: "psychische"
        },
        {
          sentence: "Ongeveer de ___ van de groep was al klaar.",
          answer: "helft"
        },
        {
          sentence: "Hij ___ een grote hond als huisdier.",
          answer: "heeft"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom volgen sommige leerlingen les via Bednet?",
        options: [
          "Omdat ze in het buitenland wonen",
          "Omdat ze lichamelijk beperkt zijn",
          "Omdat ze psychische problemen hebben",
          "Omdat ze de taal niet spreken"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is Bednet?",
        options: [
          "Een soort online winkel",
          "Een organisatie voor thuisonderwijs",
          "Een sportvereniging",
          "Een school voor kunstonderwijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Voor welke groep leerlingen is Bednet bedoeld?",
        options: [
          "Alleen voor universiteitsstudenten",
          "Alleen voor basisschoolleerlingen",
          "Voor alle leerlingen die tijdelijk niet naar school kunnen",
          "Alleen voor volwassenen die een opleiding volgen"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Bednet is een online winkel.",
        isTrue: false
      },
      {
        statement: "Leerlingen met psychische problemen kunnen via Bednet les volgen.",
        isTrue: true
      },
      {
        statement: "Bednet biedt alleen les in wiskunde en taal.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "Thomas Siffer neemt afscheid van Louise Delanghe",
    topicNumber: 1,
    article: {
      title: "Thomas Siffer neemt afscheid van Louise Delanghe",
      summary: "Louise Delanghe was jong en ze was alles. Intelligent, vrolijk, vriendelijk en uitbundig. Thomas Siffer neemt afscheid van de jonge kunstenares die omkwam bij een verkeersongeluk."
    },
    vocabulary: {
      words: [
        {
          word: "afscheid",
          definition: "het einde van een bijeenkomst of het moment dat je iemand niet meer ziet",
          sentence: "Hij nam ___ van zijn collega's toen hij vertrok.",
          answer: "afscheid"
        },
        {
          word: "omkwam",
          definition: "overleden, niet meer levend",
          sentence: "Hij ___ in een auto-ongeluk.",
          answer: "omkwam"
        },
        {
          word: "intelligent",
          definition: "slim en goed in het leren van nieuwe dingen",
          sentence: "Ze is erg ___ en lost problemen snel op.",
          answer: "intelligent"
        },
        {
          word: "kunstenares",
          definition: "een vrouw die kunst maakt, zoals een schilder of een muzikant",
          sentence: "De ___ maakte een prachtig schilderij.",
          answer: "kunstenares"
        },
        {
          word: "verkeersongeluk",
          definition: "een ongeluk op de weg met auto's of andere voertuigen",
          sentence: "Er was een ___ op de snelweg vanmorgen.",
          answer: "verkeersongeluk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze is erg ___ en lost problemen snel op.",
          answer: "intelligent"
        },
        {
          sentence: "Hij nam ___ van zijn collega's toen hij vertrok.",
          answer: "afscheid"
        },
        {
          sentence: "De ___ maakte een prachtig schilderij.",
          answer: "kunstenares"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemt Thomas Siffer Louise Delanghe een kunstenares?",
        options: [
          "Omdat ze een mooi schilderij maakte",
          "Omdat ze een bekende actrice was",
          "Omdat ze kunst creëerde en daarom een kunstenares is",
          "Omdat ze in een atelier werkte"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent het dat Louise Delanghe omkwam bij een verkeersongeluk?",
        options: [
          "Ze reed te snel met de auto",
          "Ze overleed door een auto-ongeluk",
          "Ze maakte een schilderij van een auto",
          "Ze was een raceauto-chauffeur"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe wordt Louise Delanghe beschreven in de tekst?",
        options: [
          "Als een serieuze en strenge persoon",
          "Als een vrolijke en intelligente persoon",
          "Als een eenzame en verdrietige persoon",
          "Als een boze en gefrustreerde persoon"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Louise Delanghe was een kunstenares die schilderde.",
        isTrue: true
      },
      {
        statement: "Thomas Siffer is de persoon die overleed in het verkeersongeluk.",
        isTrue: false
      },
      {
        statement: "Louise Delanghe was bekend om haar uitbundige karakter.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Amerikaanse rechter wendt hongercrisis af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis af",
      summary: "42 miljoen Amerikanen krijgen eten van de regering. De rechter helpt de voedselbonnen."
    },
    vocabulary: {
      words: [
        {
          word: "rechter",
          definition: "iemand die beslist over de wet",
          sentence: "De ___ beslist over de zaak.",
          answer: "rechter"
        },
        {
          word: "Amerikaan",
          definition: "iemand die in Amerika woont",
          sentence: "De ___ komt uit de Verenigde Staten.",
          answer: "Amerikaan"
        },
        {
          word: "eten",
          definition: "iets wat je kunt opeten, zoals brood",
          sentence: "Ik ga vanavond ___ met mijn gezin.",
          answer: "eten"
        },
        {
          word: "krijgen",
          definition: "iets ontvangen van iemand",
          sentence: "Zij ___ een cadeau van hun vriend.",
          answer: "krijgen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De ___ komt uit de Verenigde Staten.",
          answer: "Amerikaan"
        },
        {
          sentence: "De ___ beslist over de zaak.",
          answer: "rechter"
        },
        {
          sentence: "Ik ga vanavond ___ met mijn gezin.",
          answer: "eten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is een rechter?",
        options: [
          "Een soort dokter",
          "Een soort leraar",
          "Een soort rechter",
          "Een soort boer"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de rol van de rechter in deze situatie?",
        options: [
          "Hij geeft eten aan mensen",
          "Hij beslist over de wet",
          "Hij kookt voor mensen",
          "Hij werkt in een restaurant"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de uitkomst van de rechter's beslissing?",
        options: [
          "Iedereen moet nu zelf voor eten zorgen",
          "De regering geeft eten aan wie het nodig heeft",
          "Er is geen eten meer over",
          "De rechter eet al het eten op"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rechter beslist dat de regering moet helpen.",
        isTrue: true
      },
      {
        statement: "De rechter zegt dat niemand eten krijgt.",
        isTrue: false
      },
      {
        statement: "De voedselbonnen worden niet gebruikt.",
        isTrue: false
      }
    ]
  },
{
    id: 8,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Oekraïne en de oorlog",
    topicNumber: 1,
    article: {
      title: "Oekraïne en de oorlog",
      summary: "Oekraïne heeft een oorlog. Het land heeft weinig geld. Het land moet doorgaan. Hoe zal de oorlog eindigen?"
    },
    vocabulary: {
      words: [
        {
          word: "oorlog",
          definition: "een tijd van vechten tussen landen",
          sentence: "Er is een ___ in Oekraïne.",
          answer: "oorlog"
        },
        {
          word: "geld",
          definition: "wat je gebruikt om te betalen",
          sentence: "Oekraïne heeft weinig ___.",
          answer: "geld"
        },
        {
          word: "land",
          definition: "een gebied met eigen regels en mensen",
          sentence: "Oekraïne is een ___.",
          answer: "land"
        },
        {
          word: "eindigen",
          definition: "stoppen, klaar zijn",
          sentence: "Hoe zal de oorlog ___?",
          answer: "eindigen"
        },
        {
          word: "doorgaan",
          definition: "verder gaan, niet stoppen",
          sentence: "Oekraïne moet ___ met vechten.",
          answer: "doorgaan"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Oekraïne moet ___ met vechten.",
          answer: "doorgaan"
        },
        {
          sentence: "Oekraïne heeft weinig ___.",
          answer: "geld"
        },
        {
          sentence: "Oekraïne is een ___.",
          answer: "land"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'oorlog'?",
        options: [
          "een feest",
          "een ziekte",
          "een conflict tussen landen",
          "een soort eten"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is 'geld'?",
        options: [
          "een dier",
          "wat je gebruikt om dingen te kopen",
          "een land",
          "een taal"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is 'eindigen'?",
        options: [
          "beginnen",
          "stoppen",
          "verliezen",
          "winnen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oekraïne heeft veel geld.",
        isTrue: false
      },
      {
        statement: "Oekraïne is in oorlog.",
        isTrue: true
      },
      {
        statement: "De oorlog is al geëindigd.",
        isTrue: false
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A1",
    title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een geheel eigen versie van de Monroedoctrine.",
    topicNumber: 1,
    article: {
      title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een geheel eigen versie van de Monroedoctrine.",
      summary: "Amerikaanse media noemen hem een piraat en waarschuwen voor de risico’s van een invasie van Venezuela. Maar Donald Trump maakt van Latijns-Amerika opnieuw zijn exclusieve speeltuin, in zijn geheel eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "is",
          definition: "zijn, staat voor iets dat bestaat of gebeurt",
          sentence: "Hij ___ blij met het cadeau.",
          answer: "is"
        },
        {
          word: "zijn",
          definition: "bezittelijk voornaamwoord, zoals 'zijn boek'",
          sentence: "Dat is ___ huis.",
          answer: "zijn"
        },
        {
          word: "maakt",
          definition: "doet of creëert",
          sentence: "Hij ___ een plan.",
          answer: "maakt"
        },
        {
          word: "een",
          definition: "een onbepaald lidwoord, zoals 'een boek'",
          sentence: "Ik heb ___ appel.",
          answer: "een"
        },
        {
          word: "van",
          definition: "een voorzetsel dat bezit of herkomst aangeeft",
          sentence: "Het boek ___ de leraar is op de tafel.",
          answer: "van"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ een plan.",
          answer: "maakt"
        },
        {
          sentence: "Het boek ___ de leraar is op de tafel.",
          answer: "van"
        },
        {
          sentence: "Ik heb ___ appel.",
          answer: "een"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Een reis naar de maan",
          "Een politieke situatie met Donald Trump",
          "Een recept voor taart",
          "Een dag op het strand"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'opnieuw'?",
        options: [
          "Nooit meer",
          "Weer een keer",
          "Voor het eerst",
          "Alleen maar"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is Latijns-Amerika?",
        options: [
          "Een soort voedsel",
          "Een gebied met landen",
          "Een bekende film",
          "Een sportteam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "De tekst gaat over koken.",
        isTrue: false
      },
      {
        statement: "Latijns-Amerika is een plaats op aarde.",
        isTrue: true
      }
    ]
  },
{
    id: 10,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Annemarie Sauer, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Annemarie Sauer, 78 jaar",
      summary: "Geboren in 1947. Overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "geboren worden",
          sentence: "Ze is ___ in 1947.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer leven",
          sentence: "Hij is ___ op 20/10/2025.",
          answer: "overleden"
        },
        {
          word: "jaar",
          definition: "een periode van 365 dagen",
          sentence: "Hij is 78 ___ oud.",
          answer: "jaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Ze is ___ in 1947.",
          answer: "geboren"
        },
        {
          sentence: "Hij is 78 ___ oud.",
          answer: "jaar"
        },
        {
          sentence: "Hij is ___ op 20/10/2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wanneer is Annemarie Sauer geboren?",
        options: [
          "In 1947",
          "In 1950",
          "In 1960",
          "In 1970"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe oud was Annemarie Sauer toen ze overleed?",
        options: [
          "78 jaar",
          "80 jaar",
          "75 jaar",
          "70 jaar"
        ],
        correctAnswer: 1
      },
      {
        question: "Op welke datum overleed Annemarie Sauer?",
        options: [
          "20/10/2025",
          "20/11/2025",
          "21/10/2025",
          "19/10/2025"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Annemarie Sauer is geboren in 1947.",
        isTrue: true
      },
      {
        statement: "Annemarie Sauer overleed in 2024.",
        isTrue: false
      },
      {
        statement: "Annemarie Sauer was 78 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
    topicNumber: 1,
    article: {
      title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
      summary: "Meer dan de helft van de leerlingen in het middelbaar die afstandsonderwijs volgen, doet dat omdat ze psychisch kwetsbaar zijn. 'Elke dag in de klas zitten, lukt me niet.'"
    },
    vocabulary: {
      words: [
        {
          word: "meer",
          definition: "een grotere hoeveelheid",
          sentence: "Ik heb ___ dan jij.",
          answer: "meer"
        },
        {
          word: "via",
          definition: "door middel van",
          sentence: "Hij stuurt het bericht ___ de post.",
          answer: "via"
        },
        {
          word: "les",
          definition: "iets wat je leert op school",
          sentence: "Hij geeft ___ over taal.",
          answer: "les"
        },
        {
          word: "leerlingen",
          definition: "kinderen die op school leren",
          sentence: "De ___ van deze school zijn erg blij.",
          answer: "leerlingen"
        },
        {
          word: "helft",
          definition: "een van de twee gelijke delen van iets",
          sentence: "De ___ van de leerlingen is ziek.",
          answer: "helft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij stuurt het bericht ___ de post.",
          answer: "via"
        },
        {
          sentence: "De ___ van deze school zijn erg blij.",
          answer: "leerlingen"
        },
        {
          sentence: "Ik heb ___ dan jij.",
          answer: "meer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom volgen leerlingen les via Bednet?",
        options: [
          "Omdat ze ziek zijn",
          "Omdat ze het leuk vinden",
          "Omdat ze moeten",
          "Omdat ze niet kunnen betalen"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is Bednet?",
        options: [
          "Een soort school",
          "Een soort sport",
          "Een soort game",
          "Een soort boek"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoe voelen leerlingen zich als ze niet naar school kunnen?",
        options: [
          "Vrolijk",
          "Verdrietig",
          "Boos",
          "Bang"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Leerlingen die Bednet gebruiken zijn altijd ziek.",
        isTrue: false
      },
      {
        statement: "Sommige leerlingen kunnen niet naar school gaan door hun gezondheid.",
        isTrue: true
      },
      {
        statement: "Bednet is een manier om thuis les te volgen.",
        isTrue: true
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A1",
    title: "Thomas Siffer neemt afscheid van Louise Delanghe",
    topicNumber: 1,
    article: {
      title: "Thomas Siffer neemt afscheid van Louise Delanghe",
      summary: "Louise Delanghe was een jonge kunstenares. Ze was intelligent, vrolijk, vriendelijk en uitbundig. Helaas kwam ze om bij een verkeersongeluk. Thomas Siffer schreef een afscheidstekst voor haar."
    },
    vocabulary: {
      words: [
        {
          word: "uitbundig",
          definition: "vol energie en enthousiasme",
          sentence: "Ze was erg ___ en levendig.",
          answer: "uitbundig"
        },
        {
          word: "tekst",
          definition: "geschreven woorden op papier of scherm",
          sentence: "Hij schreef een mooie ___ over haar.",
          answer: "tekst"
        },
        {
          word: "vrolijk",
          definition: "blij en gelukkig",
          sentence: "Ze was altijd ___.",
          answer: "vrolijk"
        },
        {
          word: "kunstenares",
          definition: "iemand die kunst maakt",
          sentence: "Louise was een ___.",
          answer: "kunstenares"
        },
        {
          word: "vriendelijk",
          definition: "aardig en vriendelijk",
          sentence: "Ze was heel ___ tegen iedereen.",
          answer: "vriendelijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Louise was een ___.",
          answer: "kunstenares"
        },
        {
          sentence: "Ze was heel ___ tegen iedereen.",
          answer: "vriendelijk"
        },
        {
          sentence: "Ze was altijd ___.",
          answer: "vrolijk"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was Louise Delanghe?",
        options: [
          "een schilder",
          "een kunstenares",
          "een muzikant",
          "een schrijfster"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe was Louise als persoon?",
        options: [
          "Ze was erg verlegen.",
          "Ze was erg stil.",
          "Ze was erg vrolijk en vriendelijk.",
          "Ze was erg boos en onvriendelijk."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurde er met Louise?",
        options: [
          "Ze ging met pensioen.",
          "Ze verhuisde naar een ander land.",
          "Ze kwam om bij een verkeersongeluk.",
          "Ze won een belangrijke prijs."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Louise Delanghe was een kunstenares.",
        isTrue: true
      },
      {
        statement: "Louise was een erg verdrietig persoon.",
        isTrue: false
      },
      {
        statement: "Louise overleed door een verkeersongeval.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
      summary: "42 miljoen Amerikanen komen maar rond dankzij voedselsteun van de regering. De voedselbonnen van november lijken gered, al ontbreken er miljarden dollars."
    },
    vocabulary: {
      words: [
        {
          word: "ontbreken",
          definition: "niet aanwezig zijn, missen",
          sentence: "Er ___ nog enkele belangrijke handtekeningen.",
          answer: "ontbreken"
        },
        {
          word: "voedselsteun",
          definition: "hulp in de vorm van voedsel, vaak van de overheid",
          sentence: "De regering bood ___ aan de getroffen bevolking.",
          answer: "voedselsteun"
        },
        {
          word: "regering",
          definition: "de groep mensen die een land of gebied bestuurt",
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        },
        {
          word: "rechter",
          definition: "een persoon die in een rechtbank beslist over geschillen",
          sentence: "De ___ heeft de zaak behandeld.",
          answer: "rechter"
        },
        {
          word: "gered",
          definition: "beschermd of veiliggesteld, van een gevaar",
          sentence: "De voorraden zijn ___ van de overstroming.",
          answer: "gered"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De regering bood ___ aan de getroffen bevolking.",
          answer: "voedselsteun"
        },
        {
          sentence: "De ___ heeft nieuwe maatregelen aangekondigd.",
          answer: "regering"
        },
        {
          sentence: "De voorraden zijn ___ van de overstroming.",
          answer: "gered"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de rol van de rechter in deze kwestie?",
        options: [
          "Hij start de voedselsteun",
          "Hij beëindigt de voedselsteun",
          "Hij beschermt de voedselbonnen",
          "Hij keurt de steun af"
        ],
        correctAnswer: 3
      },
      {
        question: "Waaruit bestaat de voedselsteun in dit artikel?",
        options: [
          "Alleen uit geld",
          "Alleen uit voedselbonnen",
          "Uitsluitend uit voedselpakketten",
          "Een combinatie van bonnen en mogelijk geld"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de toestand van de voedselbonnen in november?",
        options: [
          "Ze zijn al gebruikt",
          "Ze zijn verloren gegaan",
          "Ze zijn gered en bruikbaar",
          "Ze zijn nog niet uitgedeeld"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rechter heeft de voedselsteun volledig stopgezet.",
        isTrue: false
      },
      {
        statement: "Er ontbreken miljarden dollars aan de voedselsteun, maar de bonnen zijn gered.",
        isTrue: true
      },
      {
        statement: "Alleen de voedselbonnen worden beschermd, niet het geld.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
    topicNumber: 1,
    article: {
      title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
      summary: "Nu de kans op een snel bestand in Oekraïne vervlogen is, blijft de vraag: hoe zal deze oorlog eindigen? Niemand durft het te voorspellen, maar een trend is duidelijk: Oekraïne kan financieel niet veel verder, maar het moet wel."
    },
    vocabulary: {
      words: [
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa, momenteel betrokken bij een conflict.",
          sentence: "___ heeft behoefte aan internationale steun om te herstellen.",
          answer: "Oekraïne"
        },
        {
          word: "militair",
          definition: "Met betrekking tot soldaten, oorlog of gewapende strijd.",
          sentence: "Hij diende in het ___ apparaat voor tien jaar.",
          answer: "militair"
        },
        {
          word: "trend",
          definition: "Een algemene richting of tendens waarin iets zich ontwikkelt of verandert.",
          sentence: "De opkomende ___ in de mode is om vintage kleding te dragen.",
          answer: "trend"
        },
        {
          word: "financieel",
          definition: "Met betrekking tot geld, financiën of monetaire zaken.",
          sentence: "Zonder een sterke economie is een land ___ onstabiel.",
          answer: "financieel"
        },
        {
          word: "oorlog",
          definition: "Een gewapend conflict tussen landen of groepen.",
          sentence: "De ___ heeft veel levens verwoest en steden verwoest.",
          answer: "oorlog"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij diende in het ___ apparaat voor tien jaar.",
          answer: "militair"
        },
        {
          sentence: "De opkomende ___ in de mode is om vintage kleding te dragen.",
          answer: "trend"
        },
        {
          sentence: "Zonder een sterke economie is een land ___ onstabiel.",
          answer: "financieel"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'vervlogen' in deze context?",
        options: [
          "Vergeten",
          "Actueel",
          "Vernieuwend",
          "Versterkend"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Oekraïne wint de oorlog",
          "Economische factoren zijn beslissend",
          "Militair overwicht is alles",
          "Het einde is nabij"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de toestand van Oekraïne volgens de tekst?",
        options: [
          "Het is een economische grootmacht",
          "Het kan financieel niet verder",
          "Het is militair onverslaanbaar",
          "Het heeft buitenlandse steun niet nodig"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De tekst suggereert dat Oekraïne de oorlog kan winnen door economische veerkracht.",
        isTrue: true
      },
      {
        statement: "Een snel bestand in Oekraïne is nog steeds mogelijk.",
        isTrue: false
      },
      {
        statement: "Oekraïne heeft geen andere keuze dan door te vechten op alle fronten.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Hoe Trump Latijns-Amerika opnieuw als exclusieve invloedssfeer claimt",
    topicNumber: 1,
    article: {
      title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een geheel eigen versie van de Monroedoctrine",
      summary: "Amerikaanse media noemen hem een piraat en waarschuwen voor de risico’s van een invasie van Venezuela. Maar Donald Trump maakt van Latijns-Amerika opnieuw zijn exclusieve speeltuin, in zijn geheel eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "Latijns-Amerika",
          definition: "regio in Amerika ten zuiden van de Verenigde Staten, voornamelijk Spaans- en Portugeessprekend",
          sentence: "___ heeft een rijke geschiedenis en diverse culturen.",
          answer: "Latijns-Amerika"
        },
        {
          word: "maakt",
          definition: "vormt, creëert of produceert",
          sentence: "Hij ___ van zijn hobby zijn beroep.",
          answer: "maakt"
        },
        {
          word: "exclusieve",
          definition: "uitsluitend, alleen toegankelijk voor een selecte groep",
          sentence: "De club heeft een ___ ledenlijst.",
          answer: "exclusieve"
        },
        {
          word: "Trump",
          definition: "achternaam van de voormalige president van de Verenigde Staten",
          sentence: "Donald ___ staat bekend om zijn onconventionele aanpak.",
          answer: "Trump"
        },
        {
          word: "opnieuw",
          definition: "nog een keer, weer",
          sentence: "Hij probeerde het ___ na zijn eerste mislukking.",
          answer: "opnieuw"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Donald ___ staat bekend om zijn onconventionele aanpak.",
          answer: "Trump"
        },
        {
          sentence: "Hij probeerde het ___ na zijn eerste mislukking.",
          answer: "opnieuw"
        },
        {
          sentence: "De club heeft een ___ ledenlijst.",
          answer: "exclusieve"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Welke regio wordt vooral beïnvloed door de Monroedoctrine volgens de tekst?",
        options: [
          "Europa",
          "Azië",
          "Latijns-Amerika",
          "Afrika"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe wordt Donald Trump's benadering van Latijns-Amerika in de tekst beschreven?",
        options: [
          "Als een collaboratieve effort",
          "Als een eenzijdige claim",
          "Als een neutrale observatie",
          "Als een historische hervorming"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de media volgens de tekst in deze context?",
        options: [
          "Ze ondersteunen Trump's beleid volledig",
          "Ze negeren de situatie geheel",
          "Ze bekritiseren Trump en waarschuwen voor risico's",
          "Ze prijzen hem als een piraat"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump wordt door de media omschreven als een piraat vanwege zijn beleid.",
        isTrue: true
      },
      {
        statement: "Latijns-Amerika wordt in de tekst voorgesteld als een exclusieve speeltuin alleen voor de Verenigde Staten.",
        isTrue: true
      },
      {
        statement: "De Monroedoctrine is recentelijk geïntroduceerd door Donald Trump.",
        isTrue: false
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Annemarie Sauer, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Annemarie Sauer, 78 jaar",
      summary: "Geboren in 1947, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "Annemarie",
          definition: "Vrouwelijke voornaam, afgeleid van Anna en Maria",
          sentence: "___ Sauer was een bekende schrijfster uit de vorige eeuw.",
          answer: "Annemarie"
        },
        {
          word: "Sauer",
          definition: "Duitse familienaam, betekent 'zuur' of 'bitter'",
          sentence: "De schrijfster Annemarie ___ is vooral bekend van haar romans.",
          answer: "Sauer"
        },
        {
          word: "geboren",
          definition: "Het moment waarop iemand ter wereld komt",
          sentence: "Zij werd ___ in 1947 en is nu 78 jaar oud.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "Iemand die is gestorven, niet meer levend",
          sentence: "Helaas is zij reeds ___ op 20 oktober 2025.",
          answer: "overleden"
        },
        {
          word: "2025",
          definition: "Het jaar na 2024 en voor 2026",
          sentence: "Zij stierf in ___ , wat nog ver in de toekomst ligt.",
          answer: "2025"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ Sauer was een bekende schrijfster uit de vorige eeuw.",
          answer: "Annemarie"
        },
        {
          sentence: "De schrijfster Annemarie ___ is vooral bekend van haar romans.",
          answer: "Sauer"
        },
        {
          sentence: "Helaas is zij reeds ___ op 20 oktober 2025.",
          answer: "overleden"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Annemarie Sauer overleden?",
        options: [
          "1947",
          "1980",
          "2020",
          "2025"
        ],
        correctAnswer: 4
      },
      {
        question: "Wat is de betekenis van de familienaam 'Sauer'?",
        options: [
          "Zoet",
          "Bitter",
          "Zout",
          "Scherp"
        ],
        correctAnswer: 2
      },
      {
        question: "Welke maand overleed Annemarie Sauer?",
        options: [
          "Januari",
          "Februari",
          "September",
          "Oktober"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "Annemarie Sauer werd geboren in 1947.",
        isTrue: true
      },
      {
        statement: "Annemarie Sauer overleed in de maand juni.",
        isTrue: false
      },
      {
        statement: "Annemarie Sauer is een schrijfster van romans.",
        isTrue: true
      }
    ]
  },
{
    id: 17,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
    topicNumber: 1,
    article: {
      title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
      summary: "Meer dan de helft van de leerlingen in het middelbaar die afstandsonderwijs volgen, doet dat omdat ze psychisch kwetsbaar zijn. 'Elke dag in de klas zitten, lukt me niet.'"
    },
    vocabulary: {
      words: [
        {
          word: "via",
          definition: "Door middel van; met gebruikmaking van.",
          sentence: "We communiceren ___ de chatfunctie.",
          answer: "via"
        },
        {
          word: "helft",
          definition: "Een van de twee gelijke delen waarin iets verdeeld kan worden; de helft.",
          sentence: "De ___ van de deelnemers voltooide de studie.",
          answer: "helft"
        },
        {
          word: "omdat",
          definition: "Geeft een reden of oorzaak aan.",
          sentence: "Hij is thuis ___ hij ziek is.",
          answer: "omdat"
        },
        {
          word: "omdat",
          definition: "Geeft een reden of oorzaak aan.",
          sentence: "Hij is thuis ___ hij ziek is.",
          answer: "omdat"
        },
        {
          word: "psychisch",
          definition: "Betrekking hebbend op de geest; mentaal.",
          sentence: "De patiënt kreeg ___ ondersteuning na het trauma.",
          answer: "psychisch"
        }
      ],
      fillInBlanks: [
        {
          sentence: "We communiceren ___ de chatfunctie.",
          answer: "via"
        },
        {
          sentence: "De ___ van de deelnemers voltooide de studie.",
          answer: "helft"
        },
        {
          sentence: "De patiënt kreeg ___ ondersteuning na het trauma.",
          answer: "psychisch"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom volgen sommige leerlingen afstandsonderwijs via Bednet?",
        options: [
          "Omdat ze fysiek niet naar school kunnen komen",
          "Omdat ze psychische problemen hebben en daardoor de klas niet fysiek kunnen bijwonen",
          "Omdat ze liever thuis werken dan op school",
          "Omdat ze geen interesse hebben in onderwijs"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een voordeel van Bednet volgens de tekst?",
        options: [
          "Leerlingen kunnen volledig stoppen met onderwijs",
          "Leerlingen krijgen extra vakken aangeboden",
          "Leerlingen kunnen toch de lessen volgen, ook al zijn ze er niet fysiek",
          "Leerlingen worden verplicht om online te zijn"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de samenvatting?",
        options: [
          "Bednet is een overbodige service",
          "Leerlingen gebruiken Bednet omdat ze psychisch kwetsbaar zijn en niet fysiek naar school kunnen",
          "Leerlingen kiezen voor Bednet om gemakkelijker te kunnen zijn",
          "Bednet wordt enkel gebruikt tijdens vakanties"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Bednet biedt enkel onderwijs voor basisschoolleerlingen.",
        isTrue: false
      },
      {
        statement: "Leerlingen die Bednet gebruiken, zijn vaak psychisch kwetsbaar en kunnen niet fysiek naar school.",
        isTrue: true
      },
      {
        statement: "Bednet vervangt volledig het fysieke onderwijs voor alle leerlingen.",
        isTrue: false
      }
    ]
  },
{
    id: 18,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Amper zon in oktober, maar wel bijna een record",
    topicNumber: 1,
    article: {
      title: "Amper zon in oktober, maar wel bijna een record",
      summary: "De voorbije maand oktober was zo somber dat er bijna een record in zat. Alleen oktober 1998 was nog zonlozer. Maar er is ook goed nieuws: woensdag wordt het gezellig warm."
    },
    vocabulary: {
      words: [
        {
          word: "gezellig",
          definition: "Gezellig betekent: knus, aangenaam of met een goede sfeer.",
          sentence: "Het wordt ___ warm op woensdag.",
          answer: "gezellig"
        },
        {
          word: "maand",
          definition: "Een maand is een periode van ongeveer vier weken, ofwel ongeveer 30 of 31 dagen.",
          sentence: "De ___ oktober was erg somber.",
          answer: "maand"
        },
        {
          word: "record",
          definition: "Een record is een prestatie of resultaat dat het beste of slechtste is in zijn soort.",
          sentence: "Het was bijna een nieuw ___ voor weinig zon.",
          answer: "record"
        },
        {
          word: "Amper",
          definition: "Met amper wordt bedoeld: heel weinig of bijna niet. Het is een aanduiding voor een zeer kleine hoeveelheid.",
          sentence: "Er was ___ geen zon te zien.",
          answer: "amper"
        },
        {
          word: "zonlozer",
          definition: "Zonlozer is een vergrotende trap: het betekent 'met nog minder zon' of 'nog minder zonlicht'.",
          sentence: "Alleen 1998 was nog ___ dan oktober 2023.",
          answer: "zonlozer"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Alleen 1998 was nog ___ dan oktober 2023.",
          answer: "zonlozer"
        },
        {
          sentence: "Er was ___ geen zon te zien.",
          answer: "amper"
        },
        {
          sentence: "De ___ oktober was erg somber.",
          answer: "maand"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'zonlozer' in de context van de tekst?",
        options: [
          "Meer zon",
          "Minder zon",
          "Geen zon",
          "Volle zon"
        ],
        correctAnswer: 2
      },
      {
        question: "Welk jaar had nog minder zon dan 2023 volgens de tekst?",
        options: [
          "1998",
          "1999",
          "2000",
          "2022"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat voor weer wordt er verwacht op woensdag?",
        options: [
          "Koud en nat",
          "Warm en zonnig",
          "Koud en winderig",
          "Mild en bewolkt"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Oktober 2023 was de somberste maand ooit.",
        isTrue: false
      },
      {
        statement: "Er was een maand in 1998 die nog somberder was dan oktober 2023.",
        isTrue: true
      },
      {
        statement: "Woensdag wordt een koude dag volgens de tekst.",
        isTrue: false
      }
    ]
  },
{
    id: 19,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
      summary: "42 miljoen Amerikanen komen maar rond dankzij voedselsteun van de regering. De voedselbonnen van november lijken gered, al ontbreken er miljarden dollars."
    },
    vocabulary: {
      words: [
        {
          word: "voedselsteun",
          definition: "hulp in de vorm van eten of bonnen voor eten",
          sentence: "Tijdens de lockdown kregen veel mensen ___ van de overheid.",
          answer: "voedselsteun"
        },
        {
          word: "rechter",
          definition: "iemand die beslist of iets volgens de wet is",
          sentence: "De ___ besliste dat het programma door mocht gaan.",
          answer: "rechter"
        },
        {
          word: "voedselbonnen",
          definition: "bonnen die je kunt inwisselen voor eten",
          sentence: "Ouderen kunnen vaak gratis ___ krijgen.",
          answer: "voedselbonnen"
        },
        {
          word: "dollars",
          definition: "de munteenheid van de Verenigde Staten",
          sentence: "Hij spaarde al zijn ___ voor een nieuwe fiets.",
          answer: "dollars"
        },
        {
          word: "hongercrisis",
          definition: "een situatie waarin mensen niet genoeg te eten hebben",
          sentence: "Door de droogte ontstond er een ___ in het land.",
          answer: "hongercrisis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de lockdown kregen veel mensen ___ van de overheid.",
          answer: "voedselsteun"
        },
        {
          sentence: "Ouderen kunnen vaak gratis ___ krijgen.",
          answer: "voedselbonnen"
        },
        {
          sentence: "Hij spaarde al zijn ___ voor een nieuwe fiets.",
          answer: "dollars"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom krijgen veel Amerikanen voedselsteun?",
        options: [
          "Omdat er te weinig voedsel is",
          "Omdat de regering dat organiseert",
          "Omdat ze niet willen werken",
          "Omdat het een speciale feestdag is"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is er met de voedselbonnen van november gebeurd?",
        options: [
          "Ze zijn allemaal verloren gegaan",
          "Ze zijn veilig, maar er is minder geld",
          "Ze zijn veranderd in geld",
          "Ze zijn gebruikt voor een feestmaal"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de rol van de rechter in dit artikel?",
        options: [
          "Hij startte de voedselsteun",
          "Hij stopte de voedselsteun tijdelijk",
          "Hij kookte voor de mensen",
          "Hiz verzamelde de bonnen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De rechter heeft de voedselsteun helemaal gestopt.",
        isTrue: false
      },
      {
        statement: "Er zijn miljarden dollars die nog niet gevonden zijn.",
        isTrue: true
      },
      {
        statement: "Alleen Amerikanen krijgen voedselsteun van hun regering.",
        isTrue: true
      }
    ]
  },
{
    id: 20,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Hoe eindigt de oorlog in Oekraïne?",
    topicNumber: 1,
    article: {
      title: "Hoe eindigt de oorlog in Oekraïne?",
      summary: "De oorlog in Oekraïne is erg lang. Niemand weet hoe het zal eindigen, maar Oekraïne heeft weinig geld. Het land moet doorgaan met vechten."
    },
    vocabulary: {
      words: [
        {
          word: "geld",
          definition: "wat je gebruikt om dingen te kopen, zoals euro's of dollars",
          sentence: "Oekraïne heeft niet veel ___ meer voor de oorlog.",
          answer: "geld"
        },
        {
          word: "eindigen",
          definition: "ophouden, stoppen",
          sentence: "Hoe zal de oorlog ___?",
          answer: "eindigen"
        },
        {
          word: "weinig",
          definition: "een kleine hoeveelheid, niet veel",
          sentence: "Er is ___ voedsel over voor de bevolking.",
          answer: "weinig"
        },
        {
          word: "doorgaan",
          definition: "verder gaan, niet stoppen",
          sentence: "Oekraïne moet ___ met de oorlog, ondanks problemen.",
          answer: "doorgaan"
        },
        {
          word: "vechten",
          definition: "proberen iemand fysiek pijn te doen tijdens een conflict",
          sentence: "De soldaten moeten ___ voor hun land.",
          answer: "vechten"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De soldaten moeten ___ voor hun land.",
          answer: "vechten"
        },
        {
          sentence: "Oekraïne heeft niet veel ___ meer voor de oorlog.",
          answer: "geld"
        },
        {
          sentence: "Oekraïne moet ___ met de oorlog, ondanks problemen.",
          answer: "doorgaan"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'eindigen'?",
        options: [
          "beginnen",
          "ophouden",
          "vechten",
          "verliezen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "de oorlog in Oekraïne",
          "vakantie in Oekraïne",
          "de taal in Oekraïne",
          "de president van Oekraïne"
        ],
        correctAnswer: 1
      },
      {
        question: "Heeft Oekraïne veel geld voor de oorlog?",
        options: [
          "ja, heel veel",
          "nee, bijna niet",
          "alleen voor soldaten",
          "alleen voor kinderen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De oorlog in Oekraïne is net begonnen.",
        isTrue: false
      },
      {
        statement: "Oekraïne heeft weinig geld om door te gaan met de oorlog.",
        isTrue: true
      },
      {
        statement: "Iedereen weet precies hoe de oorlog zal eindigen.",
        isTrue: false
      }
    ]
  },
{
    id: 21,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Hoe Trump Latijns-Amerika als speeltuin ziet",
    topicNumber: 1,
    article: {
      title: "Hoe Trump Latijns-Amerika als speeltuin ziet",
      summary: "Amerikaanse media noemen Trump een piraat en waarschuwen voor een invasie in Venezuela. Maar Trump maakt van Latijns-Amerika zijn exclusieve speeltuin, in zijn eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "een",
          definition: "lidwoord voor enkelvoud, zoals 'een boek'",
          sentence: "Hij heeft ___ nieuwe plan.",
          answer: "een"
        },
        {
          word: "zijn",
          definition: "bezittelijk voornaamwoord, zoals 'dat is van hem'",
          sentence: "Dat hoort bij ___. (verwijs naar iets van Trump)",
          answer: "zijn"
        },
        {
          word: "maakt",
          definition: "doet of creëert iets",
          sentence: "Hij ___ van Latijns-Amerika zijn speeltuin.",
          answer: "maakt"
        },
        {
          word: "van",
          definition: "woord dat bezit of herkomst aangeeft",
          sentence: "Dit is een boek ___ mijn leraar.",
          answer: "van"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige Amerikaanse president",
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij ___ van Latijns-Amerika zijn speeltuin.",
          answer: "maakt"
        },
        {
          sentence: "Dit is een boek ___ mijn leraar.",
          answer: "van"
        },
        {
          sentence: "___ was president van Amerika.",
          answer: "Trump"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom noemen media Trump een piraat?",
        options: [
          "Omdat hij van piraten houdt",
          "Omdat hij oneerlijk handelt",
          "Omdat hij een schip heeft",
          "Omdat hij een ooglapje draagt"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de Monroedoctrine?",
        options: [
          "Een medische behandeling",
          "Een oud boek",
          "Een plan voor Noord- en Zuid-Amerika",
          "Een soort sport"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat betekent 'exclusief' in deze tekst?",
        options: [
          "Alleen voor speciale mensen",
          "Voor iedereen toegankelijk",
          "Helemaal niet toegankelijk",
          "Alleen op dinsdag"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Trump is de president van Amerika.",
        isTrue: true
      },
      {
        statement: "De Monroedoctrine is een nieuwe dans.",
        isTrue: false
      },
      {
        statement: "Media noemen Trump een piraat omdat hij oneerlijk is.",
        isTrue: true
      }
    ]
  },
{
    id: 22,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Annemarie Sauer, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Annemarie Sauer, 78 jaar",
      summary: "Geboren in 1947, overleden op 20 oktober 2025"
    },
    vocabulary: {
      words: [
        {
          word: "geboren",
          definition: "het begin van het leven, wanneer iemand wordt geboren",
          sentence: "Zij werd ___ in 1947.",
          answer: "geboren"
        },
        {
          word: "overleden",
          definition: "niet meer levend, gestorven",
          sentence: "Hij is ___ in 2020.",
          answer: "overleden"
        }
      ],
      fillInBlanks: []
    },
    multipleChoice: [
      {
        question: "In welk jaar is Annemarie Sauer geboren?",
        options: [
          "1945",
          "1946",
          "1947",
          "1948"
        ],
        correctAnswer: 3
      },
      {
        question: "Wanneer is Annemarie Sauer overleden?",
        options: [
          "20 oktober 2024",
          "20 oktober 2025",
          "20 oktober 2026",
          "20 oktober 2027"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe oud was Annemarie Sauer toen ze overleed?",
        options: [
          "76 jaar",
          "77 jaar",
          "78 jaar",
          "79 jaar"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Annemarie Sauer werd geboren in 1947.",
        isTrue: true
      },
      {
        statement: "Annemarie overleed in 2023.",
        isTrue: false
      },
      {
        statement: "Annemarie werd 78 jaar oud.",
        isTrue: true
      }
    ]
  },
{
    id: 23,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
    topicNumber: 1,
    article: {
      title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
      summary: "Meer dan de helft van de leerlingen in het middelbaar die afstandsonderwijs volgen, doet dat omdat ze psychisch kwetsbaar zijn. “Elke dag in de klas zitten, lukt me niet.”"
    },
    vocabulary: {
      words: [
        {
          word: "psychische",
          definition: "met betrekking tot de geest of emoties",
          sentence: "Sommige mensen hebben ___ problemen en voelen zich vaak verdrietig.",
          answer: "psychische"
        },
        {
          word: "volgen",
          definition: "doen wat er gezegd wordt, of iets meemaken",
          sentence: "De studenten ___ de online les via hun computer.",
          answer: "volgen"
        },
        {
          word: "helft",
          definition: "een van twee gelijke delen",
          sentence: "Slechts de ___ van de koek is over.",
          answer: "helft"
        },
        {
          word: "leerlingen",
          definition: "kinderen die op school leren",
          sentence: "De ___ krijgen les van hun leerkracht.",
          answer: "leerlingen"
        },
        {
          word: "problemen",
          definition: "moeilijke situaties of taken",
          sentence: "Wanneer je ___ hebt, is het goed om hulp te vragen.",
          answer: "problemen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De studenten ___ de online les via hun computer.",
          answer: "volgen"
        },
        {
          sentence: "Slechts de ___ van de koek is over.",
          answer: "helft"
        },
        {
          sentence: "De ___ krijgen les van hun leerkracht.",
          answer: "leerlingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'via' in de context van de tekst?",
        options: [
          "naast",
          "door middel van",
          "ondanks",
          "bovenop"
        ],
        correctAnswer: 2
      },
      {
        question: "Waarom volgen sommige leerlingen afstandsonderwijs?",
        options: [
          "Omdat ze het leuk vinden",
          "Omdat ze in het buitenland wonen",
          "Omdat ze psychische problemen hebben",
          "Omdat ze geen computer hebben"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Alle leerlingen moeten naar school",
          "Psychische problemen kunnen een reden zijn voor afstandsonderwijs",
          "Afstandsonderwijs is makkelijk",
          "Kinderen met psychische problemen zijn zeldzaam"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De meeste leerlingen die afstandsonderwijs volgen, doen dat omdat ze psychische problemen hebben.",
        isTrue: true
      },
      {
        statement: "Afstandsonderwijs wordt alleen via internet gegeven.",
        isTrue: true
      },
      {
        statement: "Alle leerlingen met psychische problemen volgen afstandsonderwijs.",
        isTrue: false
      }
    ]
  },
{
    id: 24,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Thomas Siffer neemt afscheid van Louise Delanghe",
    topicNumber: 1,
    article: {
      title: "Thomas Siffer neemt afscheid van Louise Delanghe",
      summary: "Louise Delanghe was een jonge kunstenares. Ze was intelligent, vrolijk, vriendelijk en vol leven. Helaas kwam ze om bij een verkeersongeluk. Schrijver Thomas Siffer neemt afscheid van haar."
    },
    vocabulary: {
      words: [
        {
          word: "kunst",
          definition: "werken die gemaakt zijn om mooi of expressief te zijn, zoals schilderijen of muziek",
          sentence: "Louise had een grote passie voor kunst en creëerde haar eigen meesterwerken.",
          answer: "kunst"
        },
        {
          word: "kunstenares",
          definition: "iemand die kunst maakt, zoals schilderen of tekenen",
          sentence: "Louise was een getalenteerde kunstenares die prachtige schilderijen maakte.",
          answer: "kunstenares"
        },
        {
          word: "intelligent",
          definition: "slim en goed in het leren van nieuwe dingen",
          sentence: "Louise was niet alleen creatief maar ook erg intelligent.",
          answer: "intelligent"
        },
        {
          word: "afscheid",
          definition: "het moment waarop je gedag zegt, vaak omdat iemand weggaat of overlijdt",
          sentence: "Thomas Siffer nam afscheid van zijn goede vriendin in een emotioneel afscheid.",
          answer: "afscheid"
        },
        {
          word: "vriendelijk",
          definition: "aardig en behulpzaam tegenover anderen",
          sentence: "Iedereen herinnerde haar als een warme en vriendelijke persoon.",
          answer: "vriendelijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Louise was niet alleen creatief maar ook erg intelligent.",
          answer: "intelligent"
        },
        {
          sentence: "Iedereen herinnerde haar als een warme en vriendelijke persoon.",
          answer: "vriendelijk"
        },
        {
          sentence: "Thomas Siffer nam afscheid van zijn goede vriendin in een emotioneel afscheid.",
          answer: "afscheid"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat was de rol van Louise Delanghe?",
        options: [
          "Ze was een schrijfster",
          "Ze was een kunstenares",
          "Ze was een zangeres",
          "Ze was een danseres"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoe wordt Louise door Thomas Siffer beschreven?",
        options: [
          "Als een somber en serieus persoon",
          "Als een intelligent, vrolijk, vriendelijk en uitbundig persoon",
          "Als een verlegen en teruggetrokken persoon",
          "Als een boosaardig en gemeen persoon"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurde er met Louise Delanghe?",
        options: [
          "Ze ging met pensioen",
          "Ze verhuisde naar een ander land",
          "Ze overleed helaas bij een verkeersongeval",
          "Ze verhuisde naar een andere stad"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Louise Delanghe was een kunstenares die schilderijen maakte.",
        isTrue: true
      },
      {
        statement: "Louise Delanghe was een bekende actrice in Hollywood.",
        isTrue: false
      },
      {
        statement: "Thomas Siffer schreef over Louise om afscheid van haar te nemen na haar overlijden.",
        isTrue: true
      }
    ]
  },
{
    id: 25,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
    topicNumber: 1,
    article: {
      title: "Amerikaanse rechter wendt hongercrisis in VS (even) af",
      summary: "42 miljoen Amerikanen komen maar rond dankzij voedselsteun van de regering. De voedselbonnen van november lijken gered, al ontbreken er miljarden dollars."
    },
    vocabulary: {
      words: [
        {
          word: "rechter",
          definition: "een persoon die in de rechtspraak werkt en beslissingen neemt",
          sentence: "De ___ besliste dat de voedselbonnen konden worden gebruikt.",
          answer: "rechter"
        },
        {
          word: "hongercrisis",
          definition: "een situatie waarin veel mensen niet genoeg te eten hebben",
          sentence: "Er was een grote ___ in het land, maar de rechter greep in.",
          answer: "hongercrisis"
        },
        {
          word: "voedselsteun",
          definition: "hulp in de vorm van eten voor mensen die het nodig hebben",
          sentence: "De overheid bood ___ aan mensen zonder eten.",
          answer: "voedselsteun"
        },
        {
          word: "voedselbonnen",
          definition: "bonnen die je kunt inwisselen voor eten",
          sentence: "De ___ waren bijna verloren, maar de rechter besliste anders.",
          answer: "voedselbonnen"
        },
        {
          word: "miljarden",
          definition: "een zeer groot aantal, vaak over geld",
          sentence: "Er ontbraken ___ dollars aan budget voor het programma.",
          answer: "miljarden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Er ontbraken ___ dollars aan budget voor het programma.",
          answer: "miljarden"
        },
        {
          sentence: "Er was een grote ___ in het land, maar de rechter greep in.",
          answer: "hongercrisis"
        },
        {
          sentence: "De ___ waren bijna verloren, maar de rechter besliste anders.",
          answer: "voedselbonnen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom zijn voedselbonnen belangrijk in deze context?",
        options: [
          "Ze zijn waardeloos geworden door inflatie.",
          "Ze worden gebruikt om eten te kopen voor wie honger heeft.",
          "Ze vervangen gewoon geld in de supermarkt.",
          "Ze worden alleen in de zomer gebruikt."
        ],
        correctAnswer: 2
      },
      {
        question: "Wat was de rol van de rechter in deze situatie?",
        options: [
          "Hij begon de hongercrisis.",
          "Hij stopte de voedselhulp volledig.",
          "Hij zorgde dat de bonnen gebruikt konden blijven worden.",
          "Hij kreeg zelf de voedselbonnen als beloning."
        ],
        correctAnswer: 3
      },
      {
        question: "Wat is er met het budget voor de voedselhulp gebeurd?",
        options: [
          "Het is verdubbeld door de rechter.",
          "Het is gestolen door hackers.",
          "Er ontbreken miljarden dollars aan geld.",
          "Het werd omgewisseld voor voedselbonnen."
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "De rechter stopte de voedselhulp volledig.",
        isTrue: false
      },
      {
        statement: "Er ontbreken miljarden dollars aan budget voor het voedselprogramma.",
        isTrue: true
      },
      {
        statement: "Alleen kinderen krijgen voedselsteun in de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 26,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
    topicNumber: 1,
    article: {
      title: "In Oekraïne wordt de economische uitputtingsslag belangrijker dan de militaire",
      summary: "Nu de kans op een snel bestand in Oekraïne vervlogen is, blijft de vraag: hoe zal deze oorlog eindigen? Niemand durft het te voorspellen, maar een trend is duidelijk: Oekraïne kan financieel niet veel verder, maar het moet wel."
    },
    vocabulary: {
      words: [
        {
          word: "bestand",
          definition: "Een bestand is een computerbestand, maar hier betekent het 'stilstand' of 'geen vooruitgang'",
          sentence: "De onderhandelingen zijn in een ___ geraakt.",
          answer: "bestand"
        },
        {
          word: "militaire",
          definition: "Met betrekking tot het leger of oorlog",
          sentence: "De ___ operatie was een succes.",
          answer: "militaire"
        },
        {
          word: "economische",
          definition: "Betrekking hebbend op de economie",
          sentence: "De ___ gevolgen van de oorlog zijn groot.",
          answer: "economische"
        },
        {
          word: "kans",
          definition: "Mogelijkheid dat iets gebeurt",
          sentence: "Er is een grote ___ dat het morgen gaat regenen.",
          answer: "kans"
        },
        {
          word: "Oekraïne",
          definition: "Een land in Oost-Europa",
          sentence: "___ is een groot land met veel natuurlijke hulpbronnen.",
          answer: "Oekraïne"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De onderhandelingen zijn in een ___ geraakt.",
          answer: "bestand"
        },
        {
          sentence: "Er is een grote ___ dat het morgen gaat regenen.",
          answer: "kans"
        },
        {
          sentence: "De ___ operatie was een succes.",
          answer: "militaire"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'financieel' in deze context?",
        options: [
          "Met weinig geld",
          "Emotioneel",
          "Fysiek sterk",
          "Met veel energie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Oekraïne wint de oorlog",
          "De economie is belangrijker dan het leger",
          "Het weer wordt besproken",
          "Er is geen hoop meer"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat betekent 'bestand' in deze titel?",
        options: [
          "Een computerbestand",
          "Stilstand of geen vooruitgang",
          "Een militaire rang",
          "Een soort wapen"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De economische situatie kan de oorlog beëindigen.",
        isTrue: true
      },
      {
        statement: "Oekraïne heeft geen geld meer voor de oorlog.",
        isTrue: true
      },
      {
        statement: "Het artikel zegt dat de oorlog al gewonnen is.",
        isTrue: false
      }
    ]
  },
{
    id: 27,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een geheel eigen versie van de Monroedoctrine",
    topicNumber: 1,
    article: {
      title: "Hoe Donald Trump van Latijns-Amerika opnieuw zijn exclusieve speeltuin maakt, een geheel eigen versie van de Monroedoctrine",
      summary: "Amerikaanse media noemen hem een piraat en waarschuwen voor de risico’s van een invasie van Venezuela. Maar Donald Trump maakt van Latijns-Amerika opnieuw zijn exclusieve speeltuin, in zijn geheel eigen versie van de Monroedoctrine."
    },
    vocabulary: {
      words: [
        {
          word: "exclusieve",
          definition: "Alleen voor een bepaalde groep of persoon, niet voor iedereen",
          sentence: "Dit is een ___ club, je moet uitgenodigd worden.",
          answer: "exclusieve"
        },
        {
          word: "versie",
          definition: "Een andere vorm of type van iets, een aangepaste uitvoering",
          sentence: "Welke ___ van het spel speel je het liefst?",
          answer: "versie"
        },
        {
          word: "doctrine",
          definition: "Een officieel beleid of set van principes die een groep volgt",
          sentence: "De Monroe ___ was belangrijk voor Amerika's buitenlandbeleid.",
          answer: "doctrine"
        },
        {
          word: "eigen",
          definition: "Van jou alleen, of van een groep zelf",
          sentence: "Dit is mijn ___ boek, niet van jou.",
          answer: "eigen"
        },
        {
          word: "opnieuw",
          definition: "Weer, nog een keer, op een andere tijd",
          sentence: "Hij deed het ___ en het lukte weer.",
          answer: "opnieuw"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De Monroe ___ was belangrijk voor Amerika's buitenlandbeleid.",
          answer: "doctrine"
        },
        {
          sentence: "Dit is mijn ___ boek, niet van jou.",
          answer: "eigen"
        },
        {
          sentence: "Hij deed het ___ en het lukte weer.",
          answer: "opnieuw"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de kern van de Monroedoctrine volgens de tekst?",
        options: [
          "Dat Amerika zich niet bemoeit met andere landen",
          "Dat alleen Amerika recht heeft op het westelijk halfrond",
          "Dat Latijns-Amerika een speeltuin wordt voor de VS",
          "Dat het een oude, vergeten regel is"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoe wordt Donald Trump door de media genoemd in de tekst?",
        options: [
          "Als een held",
          "Als een piraat",
          "Als een visionair",
          "Als een vredestichter"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is de houding van Donald Trump tegenover Latijns-Amerika volgens de tekst?",
        options: [
          "Hij wil het onafhankelijk laten",
          "Hij ziet het als een gebied om te beheersen",
          "Hij heeft geen interesse",
          "Hij steunt de onafhankelijkheid"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Donald Trump wordt door de media geprezen als een piraat.",
        isTrue: false
      },
      {
        statement: "De Monroedoctrine wordt door Trump gebruikt om zijn beleid te rechtvaardigen.",
        isTrue: true
      },
      {
        statement: "Volgens de tekst wil Trump van Latijns-Amerika een beschermd gebied maken.",
        isTrue: true
      }
    ]
  },
{
    id: 28,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Annemarie Sauer, 78 jaar",
    topicNumber: 1,
    article: {
      title: "Annemarie Sauer, 78 jaar",
      summary: "Geboren in 1947, overleden op 20/10/2025."
    },
    vocabulary: {
      words: [
        {
          word: "1947",
          definition: "Het jaar na de Tweede Wereldoorlog; een jaartal.",
          sentence: "Deze gebeurtenis vond plaats in ___.",
          answer: "1947"
        },
        {
          word: "overleden",
          definition: "Niet meer levend; gestorven.",
          sentence: "Hij is ___ op 90-jarige leeftijd.",
          answer: "overleden"
        },
        {
          word: "Sauer",
          definition: "Duitse achternaam, betekent 'zuur' of 'bitter'.",
          sentence: "De familie ___ heeft veel bekende schrijvers.",
          answer: "Sauer"
        },
        {
          word: "2025",
          definition: "Een jaartal in de toekomst; bijvoorbeeld, 2025.",
          sentence: "We verwachten de opening in ___.",
          answer: "2025"
        },
        {
          word: "geboren",
          definition: "Het begin van iemands leven; ter wereld komen.",
          sentence: "Zij werd ___ in 1947, net na de oorlog.",
          answer: "geboren"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Zij werd ___ in 1947, net na de oorlog.",
          answer: "geboren"
        },
        {
          sentence: "De familie ___ heeft veel bekende schrijvers.",
          answer: "Sauer"
        },
        {
          sentence: "Deze gebeurtenis vond plaats in ___.",
          answer: "1947"
        }
      ]
    },
    multipleChoice: [
      {
        question: "In welk jaar is Annemarie Sauer geboren?",
        options: [
          "1940",
          "1945",
          "1947",
          "1950"
        ],
        correctAnswer: 3
      },
      {
        question: "Op welke datum is Annemarie Sauer overleden?",
        options: [
          "20 oktober 2025",
          "20 november 2025",
          "20 december 2025",
          "20 januari 2026"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de achternaam van Annemarie?",
        options: [
          "Sauer",
          "Schmidt",
          "Müller",
          "Weber"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Annemarie Sauer werd geboren in 1947.",
        isTrue: true
      },
      {
        statement: "Annemarie Sauer stierf in november 2025.",
        isTrue: false
      },
      {
        statement: "Annemarie Sauer leefde tot 2025.",
        isTrue: true
      }
    ]
  },
{
    id: 29,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
    topicNumber: 1,
    article: {
      title: "Helft leerlingen die les volgen via Bednet heeft psychische problemen",
      summary: "Meer dan de helft van de leerlingen in het middelbaar die afstandsonderwijs volgen, doet dat omdat ze psychisch kwetsbaar zijn. 'Elke dag in de klas zitten, lukt me niet.'"
    },
    vocabulary: {
      words: [
        {
          word: "omdat",
          definition: "Omdat is een woord dat een reden geeft.",
          sentence: "Ik ben blij, ___ het mooi weer is.",
          answer: "omdat"
        },
        {
          word: "leerlingen",
          definition: "Leerlingen zijn personen die onderwijs volgen, meestal op school.",
          sentence: "De ___ hebben veel geleerd vandaag.",
          answer: "leerlingen"
        },
        {
          word: "psychische",
          definition: "Psychisch heeft te maken met de geest of mentale toestand.",
          sentence: "Hij heeft ___ problemen sinds het ongeluk.",
          answer: "psychische"
        },
        {
          word: "Helft",
          definition: "Een helft is de helft van een geheel.",
          sentence: "De ___ van de groep was aanwezig.",
          answer: "Helft"
        },
        {
          word: "les",
          definition: "Een les is een onderdeel van onderwijs, bijvoorbeeld een uur les.",
          sentence: "Vandaag hebben we een belangrijke ___ over dit onderwerp.",
          answer: "les"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij heeft ___ problemen sinds het ongeluk.",
          answer: "psychische"
        },
        {
          sentence: "Ik ben blij, ___ het mooi weer is.",
          answer: "omdat"
        },
        {
          sentence: "De ___ hebben veel geleerd vandaag.",
          answer: "leerlingen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom volgen sommige leerlingen afstandsonderwijs?",
        options: [
          "Omdat ze verplicht worden door school",
          "Omdat ze psychische problemen hebben en niet naar school kunnen",
          "Omdat ze liever thuis studeren",
          "Omdat ze geen transport hebben"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is Bednet?",
        options: [
          "Een online platform voor afstandsonderwijs",
          "Een soort sociale media voor studenten",
          "Een nieuwswebsite voor onderwijsnieuws",
          "Een sportteam voor jongeren"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de hoofdgedachte van de tekst?",
        options: [
          "Scholen moeten meer geld krijgen",
          "Leerlingen met psychische problemen gebruiken afstandsonderwijs",
          "Iedereen moet verplicht naar school gaan",
          "Online onderwijs is altijd beter"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Alle leerlingen die Bednet gebruiken, hebben psychische problemen.",
        isTrue: false
      },
      {
        statement: "Sommige leerlingen kunnen niet fysiek naar school vanwege hun mentale gezondheid.",
        isTrue: true
      },
      {
        statement: "Bednet is een alternatief voor fysiek onderwijs voor kinderen die dat nodig hebben.",
        isTrue: true
      }
    ]
  },
{
    id: 30,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Thomas Siffer neemt afscheid van Louise Delanghe",
    topicNumber: 1,
    article: {
      title: "Thomas Siffer neemt afscheid van Louise Delanghe",
      summary: "Schrijver Thomas Siffer herdenkt de jonge kunstenares Louise Delanghe die omkwam bij een verkeersongeval."
    },
    vocabulary: {
      words: [
        {
          word: "afscheid",
          definition: "het einde van een bijeenkomst of een laatste ontmoeting",
          sentence: "Hij nam ___ van zijn collega's toen hij vertrok.",
          answer: "afscheid"
        },
        {
          word: "kunstenares",
          definition: "een vrouw die kunst maakt, zoals schilderen of tekenen",
          sentence: "De ___ maakte een mooi schilderij van de zonsondergang.",
          answer: "kunstenares"
        },
        {
          word: "omkwam",
          definition: "overleed, stierf (meestal door een ongeluk)",
          sentence: "Helaas ___ hij in een auto-ongeluk vorig jaar.",
          answer: "omkwam"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Hij nam ___ van zijn collega's toen hij vertrok.",
          answer: "afscheid"
        },
        {
          sentence: "Helaas ___ hij in een auto-ongeluk vorig jaar.",
          answer: "omkwam"
        },
        {
          sentence: "De ___ maakte een mooi schilderij van de zonsondergang.",
          answer: "kunstenares"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarover schreef Thomas Siffer een afscheid?",
        options: [
          "Over een vakantie",
          "Over een feest",
          "Over een kunstwerk",
          "Over de jonge kunstenares Louise Delanghe"
        ],
        correctAnswer: 4
      },
      {
        question: "Hoe wordt Louise Delanghe omschreven in de tekst?",
        options: [
          "Als een saaie persoon",
          "Als een intelligente en vrolijke persoon",
          "Als een boze persoon",
          "Als een oude persoon"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat gebeurde er met Louise Delanghe?",
        options: [
          "Ze won een prijs",
          "Ze verhuisde naar een ander land",
          "Ze overleed in een verkeersongeluk",
          "Ze startte een nieuwe baan"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Thomas Siffer is de schrijver van de afscheidstekst.",
        isTrue: true
      },
      {
        statement: "Louise Delanghe was een oudere vrouw die thuis bleef.",
        isTrue: false
      },
      {
        statement: "Louise Delanghe overleed door een verkeersongeluk.",
        isTrue: true
      }
    ]
  }
];
