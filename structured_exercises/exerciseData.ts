export interface ExerciseData {
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

export const exerciseData: ExerciseData[] = [
{
    id: 1,
    section: "Binnenland",
    level: "B1",
    title: "Kerk betaalt 3000 euro per slachtoffer: Dit is een tijdelijke oplossing",
    topicNumber: 1,
    article: {
      title: "Kerk betaalt 3000 euro per slachtoffer: Dit is een tijdelijke oplossing",
      summary: "De 1591 erkende slachtoffers van misbruik in de kerk krijgen binnenkort 3000 euro extra. Dit geld is voor psychologische hulp. Maar voor meer hulp kijkt de kerk naar de politiek. Het komt neer op symboliek en wachten."
    },
    vocabulary: {
      words: [
        {
          word: "slachtoffer",
          definition: "iemand die iets ergs meemaakt, bijvoorbeeld door misbruik"
        },
        {
          word: "misbruik",
          definition: "wanneer iemand iets slechts doet met iets of iemand"
        },
        {
          word: "erkennen",
          definition: "toegeven dat iets waar of echt is"
        },
        {
          word: "psychologisch",
          definition: "wat te maken heeft met de geest en gedachten"
        },
        {
          word: "symboliek",
          definition: "iets dat staat voor iets anders, vaak met een diepere betekenis"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De kerk betaalt 3000 euro extra per ___.",
          answer: "slachtoffer"
        },
        {
          sentence: "De kerk erkent het ___ van veel slachtoffers.",
          answer: "misbruik"
        },
        {
          sentence: "De kerk moet de misstanden ___.",
          answer: "erkennen"
        },
        {
          sentence: "Het geld is voor ___ hulp.",
          answer: "psychologische"
        },
        {
          sentence: "Het blijft nog even ___ wat er precies gaat gebeuren.",
          answer: "wachten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom betaalt de kerk 3000 euro per slachtoffer?",
        options: [
          "Omdat het moet van de regering",
          "Als gebaar van excuses",
          "Omdat het zo in de wet staat",
          "Omdat de kerk veel geld heeft"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is het hoofddoel van deze betaling?",
        options: [
          "Om slachtoffers te straffen",
          "Om financiële steun te bieden voor therapie",
          "Om de kerk te promoten",
          "Om de overheid tevreden te stellen"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De kerk betaalt 3000 euro aan alle slachtoffers.",
        isTrue: false
      },
      {
        statement: "De betaling is vooral voor psychologische hulp.",
        isTrue: true
      },
      {
        statement: "De kerk hoeft niet meer te doen na deze betaling.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Binnenland",
    level: "B1",
    title: "Archeologen vinden bijzondere overblijfselen in Duivelsteen Gent",
    topicNumber: 1,
    article: {
      title: "Archeologen vinden bijzondere overblijfselen in Duivelsteen Gent",
      summary: "Archeologen hebben in Gent een bijzondere ontdekking gedaan. Tijdens opgravingen vonden ze goed bewaarde resten van vermoedelijke monniken. Dit was een grote verrassing voor de onderzoekers. Ze hadden wel iets verwacht, maar niet iets zo bijzonders als dit. De vondst is belangrijk voor de geschiedenis van de stad."
    },
    vocabulary: {
      words: [
        {
          word: "archeologen",
          definition: "mensen die oude voorwerpen en resten bestuderen"
        },
        {
          word: "overblijfselen",
          definition: "wat er over is gebleven van iets ouds"
        },
        {
          word: "opgravingen",
          definition: "het graven in de grond om oude dingen te vinden"
        },
        {
          word: "monniken",
          definition: "mensen die in een klooster leven en geloven"
        },
        {
          word: "geschiedenis",
          definition: "alles wat er in het verleden is gebeurd"
        }
      ],
      fillInBlanks: [
        {
          sentence: "___ vonden de oude resten tijdens hun onderzoek.",
          answer: "Archeologen"
        },
        {
          sentence: "De ___ van de monniken waren goed bewaard gebleven.",
          answer: "resten"
        },
        {
          sentence: "Door de ___ leren we over het verleden.",
          answer: "geschiedenis"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat vonden de archeologen in Gent?",
        options: [
          "Een nieuwe stad",
          "Een schat",
          "Resten van monniken",
          "Niets bijzonders"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Archeologen vonden niets bijzonders in Gent.",
        isTrue: false
      },
      {
        statement: "De vondst helpt ons de geschiedenis beter te begrijpen.",
        isTrue: true
      }
    ]
  },
{
    id: 3,
    section: "Binnenland",
    level: "B1",
    title: "Moeten er strengere regels komen voor euthanasie bij jongvolwassenen?",
    topicNumber: 1,
    article: {
      title: "Moeten er strengere regels komen voor euthanasie bij jongvolwassenen?",
      summary: "In Nederland en België zijn er zorgen over het aantal jonge mensen dat kiest voor euthanasie vanwege psychische problemen. Deskundigen overwegen of er strengere regels moeten komen voor jongeren onder de 25, omdat hun hersenen nog niet volledig zijn ontwikkeld. Ze willen voorkomen dat het een heftig debat wordt."
    },
    vocabulary: {
      words: [
        {
          word: "euthanasie",
          definition: "een medische behandeling om het leven van een terminale patiënt op een humane manier te beëindigen"
        },
        {
          word: "jongvolwassenen",
          definition: "jonge mensen die net volwassen zijn, meestal tussen 18 en 25 jaar"
        },
        {
          word: "psychische problemen",
          definition: "problemen met de geestelijke gezondheid, zoals depressie of angst"
        },
        {
          word: "deskundigen",
          definition: "experts of mensen met veel kennis over een onderwerp"
        },
        {
          word: "heftig",
          definition: "erg emotioneel of intens"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Euthanasie is een optie voor mensen met ernstige ___ pijn.",
          answer: "fysieke"
        },
        {
          sentence: "Jongeren onder de 25 hebben soms nog geen volledig ontwikkelde ___ .",
          answer: "hersenen"
        },
        {
          sentence: "Een heftig debat kan veel ___ veroorzaken.",
          answer: "emotie"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom overwegen deskundigen strengere regels voor euthanasie bij jongeren onder 25?",
        options: [
          "Omdat jongeren vaak rijk zijn",
          "Omdat hun hersenen nog niet volledig zijn ontwikkeld",
          "Omdat jongeren geen pijn voelen",
          "Omdat het een goedkope behandeling is"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Euthanasie is alleen toegestaan voor mensen boven de 30.",
        isTrue: false
      },
      {
        statement: "Deskundigen willen voorkomen dat euthanasie een heftig debat wordt.",
        isTrue: true
      }
    ]
  }
];
