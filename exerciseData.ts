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
    title: "Zeven doden na Russische aanval Oekraïne",
    topicNumber: 1,
    article: {
      title: "Zeven doden na Russische aanval Oekraïne",
      summary: "Bij een Russische aanval op Oekraïne zijn zeven mensen omgekomen, onder wie twee kinderen. In Kiev vielen zes doden, en in Charkiv viel een dode. Een kleuterschool werd geraakt."
    },
    vocabulary: {
      words: [
        {
          word: "aanval",
          definition: "wanneer iemand of een groep iets met geweld doet tegen een ander"
        },
        {
          word: "kinderen",
          definition: "jonge mensen, meestal onder de 18 jaar"
        },
        {
          word: "kleuterschool",
          definition: "een school voor jonge kinderen, meestal tussen 4 en 6 jaar oud"
        },
        {
          word: "omgekomen",
          definition: "gestorven, overleden"
        },
        {
          word: "geraakt",
          definition: "gemaakt contact met; werd getroffen door"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Bij de aanval op de stad zijn er helaas veel mensen ___",
          answer: "omgekomen"
        },
        {
          sentence: "De raket trof een ___ waar kinderen nog aan het spelen waren.",
          answer: "kleuterschool"
        },
        {
          word: "Tijdens de ___ zijn veel mensen gewond geraakt.",
          answer: "aanval"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de aanval plaats die in de tekst wordt beschreven?",
        options: [
          "Oekraïne",
          "Rusland",
          "Verenigde Staten",
          "Duitsland"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat werd getroffen door de aanval volgens de tekst?",
        options: [
          "Een kleuterschool",
          "Een ziekenhuis",
          "Een woonwijk",
          "Een winkelcentrum"
        ],
        correctAnswer: 1
      },
      {
        question: "Hoeveel mensen zijn er omgekomen in de stad Charkiv?",
        options: [
          "1",
          "6",
          "7",
          "2"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De aanval vond plaats in Rusland.",
        isTrue: false
      },
      {
        statement: "Er zijn kinderen omgekomen bij deze aanval.",
        isTrue: true
      },
      {
        statement: "Alleen de stad Kiev werd getroffen.",
        isTrue: false
      }
    ]
  },
{
    id: 2,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B1",
    title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
    topicNumber: 1,
    article: {
      title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
      summary: "Bij het protest tegen het beleid van Donald Trump lopen activisten in opblaasbare verkleedpakken steeds prominenter in beeld. “Trump wil zijn Rijksdagbrand. Hij krijgt een eenhoornkostuum.”"
    },
    vocabulary: {
      words: [
        {
          word: "protest",
          definition: "demonstratie of actie tegen iets"
        },
        {
          word: "beleid",
          definition: "manier waarop iemand regeert of beslissingen neemt"
        },
        {
          word: "Trump",
          definition: "de familienaam van de voormalige president van de VS"
        },
        {
          word: "activisten",
          definition: "mensen die actie voeren voor een verandering"
        },
        {
          word: "pepperspray",
          definition: "spray die pijn doet maar niet blijvend schaadt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens het ___ tegen het beleid van Trump werden veel mensen gearresteerd.",
          answer: "protest"
        },
        {
          sentence: "De politie gebruikte ___ om de menigte uit elkaar te drijven.",
          answer: "pepperspray"
        },
        {
          sentence: "___ zijn mensen die vechten voor een betere wereld.",
          answer: "Activisten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is pepperspray?",
        options: [
          "Een soort parfum",
          "Een soort plant",
          "Een soort wapen dat de politie gebruikt",
          "Een soort eten"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar is Donald Trump bekend om?",
        options: [
          "Hij is een bekende filmster",
          "Hij is de voormalige president van de Verenigde Staten",
          "Hij is een professionele tennisser",
          "Hij is de koning van Nederland"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat gebeurt er als je pepperspray in je ogen krijgt?",
        options: [
          "Je gaat ervan niezen",
          "Je kunt tijdelijk niet goed zien en het doet pijn",
          "Het heeft geen effect",
          "Je ogen veranderen van kleur"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Pepperspray kan mensen blind maken.",
        isTrue: false
      },
      {
        statement: "Activisten protesteren soms tegen regeringen.",
        isTrue: true
      },
      {
        statement: "Donald Trump is de huidige president van de Verenigde Staten.",
        isTrue: false
      }
    ]
  },
{
    id: 3,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B1",
    title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
    topicNumber: 1,
    article: {
      title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
      summary: "Het KMI heeft code geel afgekondigd voor het aankomende stormweer. Aan de kust geldt donderdag vanaf 15 uur code oranje."
    },
    vocabulary: {
      words: [
        {
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut, het nationale weeralarm"
        },
        {
          word: "afgekondigd",
          definition: "officieel bekendgemaakt"
        },
        {
          word: "stormweer",
          definition: "weer met veel wind en storm"
        },
        {
          word: "geldt",
          definition: "is van kracht, is geldig"
        },
        {
          word: "oranje",
          definition: "de kleur oranje, hier gebruikt als code voor ernstige weersomstandigheden"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het KMI heeft code ___ afgekondigd voor het stormweer.",
          answer: "geel"
        },
        {
          sentence: "Aan de kust geldt donderdag vanaf 15 uur code ___.",
          answer: "oranje"
        },
        {
          sentence: "Het KMI is het instituut dat de weeralarm ___.",
          answer: "afgekondigd"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'afgekondigd' in deze context?",
        options: [
          "officieel bekendgemaakt",
          "verloren",
          "verborgen",
          "afgebroken"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat betekent 'geldt' in deze zin?",
        options: [
          "is geldig",
          "verloren is",
          "verdiend wordt",
          "gevaarlijk is"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de 'code oranje'?",
        options: [
          "Een weeralarm voor zeer gevaarlijk weer",
          "Een feestelijke code",
          "Een soort fruit",
          "Een sportevenement"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Het KMI heeft code groen afgekondigd voor het stormweer.",
        isTrue: false
      },
      {
        statement: "Aan de kust geldt donderdag vanaf 15 uur code oranje.",
        isTrue: true
      },
      {
        statement: "Code oranje betekent dat er geen gevaar is.",
        isTrue: false
      }
    ]
  },
{
    id: 4,
    section: "Sport",
    topic: "Schaak",
    level: "B1",
    title: "Schaakgrootmeester Garry Kasparov verslaat twintig tegenstanders in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Schaakgrootmeester Garry Kasparov verslaat twintig tegenstanders in Antwerpen",
      summary: "Het KMSKA in Antwerpen stond gisteren helemaal in het thema van schaken. Garry Kasparov speelde tegen twintig schakers, waaronder burgemeester Els van Doesburg en ondernemer Marc Coucke. Kasparov won alle partijen."
    },
    vocabulary: {
      words: [
        {
          word: "schaken",
          definition: "een spel met zwarte en witte stukken op een bord"
        },
        {
          word: "tegenstanders",
          definition: "mensen die tegen elkaar spelen"
        },
        {
          word: "won",
          definition: "heeft gewonnen, is winnaar"
        },
        {
          word: "finalisten",
          definition: "deelnemers in de laatste ronde"
        },
        {
          word: "ondernemer",
          definition: "iemand die een bedrijf heeft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Garry Kasparov is een beroemde schaak___",
          answer: "speler"
        },
        {
          sentence: "Hij won van alle twintig ___ in Antwerpen.",
          answer: "tegenstanders"
        },
        {
          sentence: "Ook de burgemeester van Antwerpen was een van de ___",
          answer: "finalisten"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond het schaaktoernooi plaats?",
        options: [
          "In Amsterdam",
          "In Antwerpen",
          "In Brussel",
          "In Gent"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie won alle partijen?",
        options: [
          "Els van Doesburg",
          "Marc Coucke",
          "Garry Kasparov",
          "Een onbekende speler"
        ],
        correctAnswer: 2
      },
      {
        question: "Hoeveel tegenstanders versloeg Kasparov?",
        options: [
          "Vijf",
          "Tien",
          "Twintig",
          "Dertig"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Garry Kasparov won van alle twintig tegenstanders.",
        isTrue: true
      },
      {
        statement: "Els van Doesburg is de burgemeester van Amsterdam.",
        isTrue: false
      },
      {
        statement: "Marc Coucke is een Belgische ondernemer.",
        isTrue: true
      }
    ]
  },
{
    id: 5,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Zeven doden na grootschalige Russische aanval op Oekraïne, onder wie twee kinderen",
    topicNumber: 1,
    article: {
      title: "Zeven doden na grootschalige Russische aanval op Oekraïne, onder wie twee kinderen",
      summary: "Bij een grootschalige Russische aanval zijn in Kiev zes mensen omgekomen, onder wie twee kinderen. Ook in Charkiv viel een dode. Daar werd een kleuterschool getroffen."
    },
    vocabulary: {
      words: [
        {
          word: "aanval",
          definition: "militair offensief of gewelddadige actie"
        },
        {
          word: "omgekomen",
          definition: "overleden, gestorven"
        },
        {
          word: "getroffen",
          definition: "geraakt, beïnvloed"
        },
        {
          word: "kleuterschool",
          definition: "school voor jonge kinderen"
        },
        {
          word: "grootschalige",
          definition: "op grote schaal, omvangrijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de oorlog zijn er veel mensen ___ door bombardementen.",
          answer: "omgekomen"
        },
        {
          sentence: "De ___ werd beschadigd door de explosie.",
          answer: "kleuterschool"
        },
        {
          sentence: "Een ___ is vaak het doelwit in een conflict.",
          answer: "aanval"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de grootste deel van de aanval plaats?",
        options: [
          "Kiev",
          "Charkiv",
          "Moskou",
          "Lviv"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de betekenis van 'getroffen' in deze context?",
        options: [
          "Getroffen door geluk",
          "Beschadigd of geraakt",
          "Volledig verwoest",
          "Onbeschadigd gebleven"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is het hoofdonderwerp van dit artikel?",
        options: [
          "Een sportevenement",
          "Een internationale conferentie",
          "Een militaire aanval",
          "Een economische crisis"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Er waren geen slachtoffers in Charkiv.",
        isTrue: false
      },
      {
        statement: "De aanval vond plaats in Oekraïne.",
        isTrue: true
      },
      {
        statement: "Alleen militaire doelen werden getroffen.",
        isTrue: false
      }
    ]
  },
{
    id: 6,
    section: "Buitenland",
    topic: "Buitenland",
    level: "C1",
    title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
    topicNumber: 1,
    article: {
      title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
      summary: "Bij het protest tegen het beleid van Donald Trump lopen activisten in opblaasbare verkleedpakken steeds prominenter in beeld. “Trump wil zijn Rijksdagbrand. Hij krijgt een eenhoornkostuum.”"
    },
    vocabulary: {
      words: [
        {
          word: "activisten",
          definition: "personen die actief zijn in een beweging of protest"
        },
        {
          word: "opblaasbaar",
          definition: "iets dat kan worden opgeblazen of opgepompt"
        },
        {
          word: "verkleedpakken",
          definition: "kostuums of outfits die mensen aantrekken om zich te vermommen"
        },
        {
          word: "prominent",
          definition: "opvallend aanwezig of belangrijk"
        },
        {
          word: "botsen",
          definition: "ergens tegenaan lopen of tegen iets aanbotsen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens de betoging droegen enkele _____ verkleedpakken.",
          answer: "activisten"
        },
        {
          sentence: "De ballonnen zijn _____, dus je kunt ze meenemen.",
          answer: "opblaasbaar"
        },
        {
          sentence: "De agenten _____ tegen de betogers op, wat tot rellen leidde.",
          answer: "botsen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom gebruikten de activisten opblaasbare kostuums?",
        options: [
          "Om zich te vermommen als dieren",
          "Om zich te beschermen tegen traangas",
          "Om de aandacht van de media te trekken",
          "Omdat het feestelijk was"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een 'pepperspraybol'?",
        options: [
          "Een soort soep",
          "Een projectiel met traangas",
          "Een speciaal soort bal",
          "Een onderdeel van een wapen"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar verwijst 'Rijksdagbrand' naar?",
        options: [
          "De dag dat het Rijk vergadert",
          "Een historische brand in Duitsland",
          "Een moderne politieke partij",
          "Een festival"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "De activisten droegen opblaasbare kostuums om zich te beschermen.",
        isTrue: true
      },
      {
        statement: "Trump heeft persoonlijk de opblaasbare figuren ontworpen.",
        isTrue: false
      },
      {
        statement: "Het incident met de pepperspraybollen vond plaats in Washington D.C.",
        isTrue: true
      }
    ]
  },
{
    id: 7,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
    topicNumber: 1,
    article: {
      title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
      summary: "Het KMI heeft code geel afgekondigd voor het aankomende stormweer. Aan de kust geldt donderdag vanaf 15 uur code oranje."
    },
    vocabulary: {
      words: [
        {
          word: "afgekondigd",
          definition: "officieel bekendgemaakt"
        },
        {
          word: "aankomende",
          definition: "wat binnenkort komt"
        },
        {
          word: "geldt",
          definition: "is van toepassing"
        },
        {
          word: "vanaf",
          definition: "beginnend op"
        },
        {
          word: "aangekondigd",
          definition: "officieel bekendgemaakt"
        }
      ],
      fillInBlanks: [
        {
          sentence: "De regering heeft een nieuwe wet ___ voor de veiligheid.",
          answer: "afgekondigd"
        },
        {
          sentence: "De storm zal ___ morgen de kust bereiken.",
          answer: "aankomende"
        },
        {
          sentence: "Deze regel ___ voor alle bezoekers van het park.",
          answer: "geldt"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'afgekondigd' in deze context?",
        options: [
          "Ondertekend",
          "Afgekondigd",
          "Gepubliceerd",
          "Verboden"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar geldt code oranje volgens de tekst?",
        options: [
          "In het hele land",
          "Alleen aan de kust",
          "In de rest van het land",
          "Alleen in de hoofdstad"
        ],
        correctAnswer: 1
      },
      {
        question: "Vanaf wanneer geldt code oranje aan de kust?",
        options: [
          "Vanaf 12:00",
          "Vanaf 15:00",
          "Vanaf 18:00",
          "Vanaf morgenochtend"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Code oranje geldt voor het hele land.",
        isTrue: false
      },
      {
        statement: "Code geel geldt voor het hele land behalve de kust.",
        isTrue: false
      },
      {
        statement: "Code oranje geldt alleen aan de kust vanaf 15:00.",
        isTrue: true
      }
    ]
  },
{
    id: 8,
    section: "Binnenland",
    topic: "Binnenland",
    level: "C1",
    title: "Schaken in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Schaken in Antwerpen",
      summary: "Het KMSKA in Antwerpen stond gisteren helemaal in het thema van schaken. Schaakgrootmeester Garry Kasparov nam het er op tegen twintig schakers, onder wie Antwerps burgemeester Els van Doesburg en de Belgische ondernemer Marc Coucke."
    },
    vocabulary: {
      words: [
        {
          word: "schaken",
          definition: "een bordspel voor twee spelers"
        },
        {
          word: "grootmeester",
          definition: "iemand die heel goed is in iets"
        },
        {
          word: "titel",
          definition: "een naam die iets of iemand krijgt"
        },
        {
          word: "finalisten",
          definition: "mensen die meedoen aan de laatste ronde van een wedstrijd"
        },
        {
          word: "ondernemer",
          definition: "iemand die een bedrijf heeft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Garry Kasparov is een beroemde schaak___",
          answer: "grootmeester"
        },
        {
          sentence: "De finalisten van het toernooi kregen een speciale ___",
          answer: "titel"
        },
        {
          sentence: "Een ondernemer zoals Marc Coucke richt vaak een ___ op",
          answer: "ondernemer"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is schaken?",
        options: [
          "Een sport",
          "Een soort kunst",
          "Een bordspel",
          "Een muziekstuk"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar vond het schaakevenement plaats?",
        options: [
          "In Brussel",
          "In het KMSKA",
          "In een park",
          "Op school"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie is Marc Coucke?",
        options: [
          "Een schaker",
          "Een kunstenaar",
          "Een ondernemer",
          "Een politicus"
        ],
        correctAnswer: 2
      }
    ],
    trueFalse: [
      {
        statement: "Garry Kasparov is een professionele schaker.",
        isTrue: true
      },
      {
        statement: "Het schaakevenement vond plaats in Brussel.",
        isTrue: false
      },
      {
        statement: "Marc Coucke is een van de deelnemers aan het schaaktoernooi.",
        isTrue: true
      }
    ]
  },
{
    id: 9,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Aanval op Oekraïne",
    topicNumber: 1,
    article: {
      title: "Aanval op Oekraïne",
      summary: "Bij een aanval op Oekraïne zijn zeven mensen omgekomen, onder wie twee kinderen. De aanval was in Kiev en Charkiv. In Charkiv werd een kleuterschool getroffen."
    },
    vocabulary: {
      words: [
        {
          word: "aanval",
          definition: "een gewelddadige actie tegen iemand of iets"
        },
        {
          word: "omgekomen",
          definition: "overleden, gestorven"
        },
        {
          word: "krijgen",
          definition: "ontvangen, krijgen"
        },
        {
          word: "kinderen",
          definition: "jonge mensen, jongens en meisjes"
        },
        {
          word: "kleuterschool",
          definition: "een school voor jonge kinderen"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Bij een aanval kunnen mensen ___ komen.",
          answer: "omgekomen"
        },
        {
          sentence: "Kinderen zijn jonge ___ die nog moeten groeien.",
          answer: "kinderen"
        },
        {
          sentence: "Een ___ is een plek waar kinderen leren en spelen.",
          answer: "kleuterschool"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar was de aanval?",
        options: [
          "Kiev",
          "Charkiv",
          "Beide steden",
          "Geen van beide"
        ],
        correctAnswer: 2
      },
      {
        question: "Wie zijn er omgekomen?",
        options: [
          "Alleen volwassenen",
          "Alleen kinderen",
          "Volwassenen en kinderen",
          "Niemand"
        ],
        correctAnswer: 2
      },
      {
        question: "Wat is een kleuterschool?",
        options: [
          "Een soort winkel",
          "Een school voor jonge kinderen",
          "Een park",
          "Een ziekenhuis"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Er vielen doden bij de aanval.",
        isTrue: true
      },
      {
        statement: "Alleen volwassenen zijn omgekomen.",
        isTrue: false
      },
      {
        statement: "De aanval was alleen in Kiev.",
        isTrue: false
      }
    ]
  },
{
    id: 10,
    section: "Buitenland",
    topic: "Buitenland",
    level: "A2",
    title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
    topicNumber: 1,
    article: {
      title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
      summary: "Bij het protest tegen het beleid van Donald Trump lopen activisten in opblaasbare verkleedpakken steeds prominenter in beeld. “Trump wil zijn Rijksdagbrand. Hij krijgt een eenhoornkostuum.”"
    },
    vocabulary: {
      words: [
        {
          word: "protest",
          definition: "een actie om te laten zien dat je het ergens niet mee eens bent"
        },
        {
          word: "activisten",
          definition: "mensen die actie voeren voor een bepaald doel, vaak een politiek of sociaal doel"
        },
        {
          word: "kostuum",
          definition: "een speciaal pak dat je aantrekt, vaak voor een feest of om je te verkleden"
        },
        {
          word: "pepperspray",
          definition: "een spuitbus met een scherpe vloeistof die de ogen irriteert, gebruikt door politie soms"
        },
        {
          word: "botsen",
          definition: "tegen elkaar aan komen, vaak met kracht"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens het ___ droegen veel mensen maskers.",
          answer: "protest"
        },
        {
          sentence: "De politie gebruikte ___ om de menigte uiteen te drijven.",
          answer: "pepperspray"
        },
        {
          sentence: "Twee mensen liepen tegen elkaar op, ze ___ tegen elkaar.",
          answer: "botsen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom droegen sommige mensen een kostuum?",
        options: [
          "Om zich te beschermen tegen pepperspray",
          "Omdat het feest was",
          "Omdat ze wilden dansen",
          "Ze waren verkleed als dier"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is pepperspray?",
        options: [
          "Een soort parfum",
          "Een soort medicijn",
          "Een spuitbus met irritante vloeistof",
          "Een soort verkleedkostuum"
        ],
        correctAnswer: 3
      },
      {
        question: "Wat gebeurde er met de pepperspray?",
        options: [
          "Het werd opgegeten",
          "Het verdampte in de lucht",
          "Het werd afgebeten door de activisten",
          "Het ketste af op de kostuums"
        ],
        correctAnswer: 4
      }
    ],
    trueFalse: [
      {
        statement: "De activisten droegen kostuums om zich te beschermen.",
        isTrue: true
      },
      {
        statement: "Pepperspray kan door kleding heen komen.",
        isTrue: true
      },
      {
        statement: "De protesten waren alleen tegen Donald Trump.",
        isTrue: false
      }
    ]
  },
{
    id: 11,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Veel boetes voor gokken niet betaald",
    topicNumber: 1,
    article: {
      title: "Veel boetes voor gokken niet betaald",
      summary: "De Kansspelcommissie heeft in 2024 veel boetes uitgeschreven, maar veel boetes zijn niet betaald. Van de 4,6 miljoen euro aan boetes is slechts 0,6 procent betaald. De Kansspelcommissie is als een tijger zonder tanden."
    },
    vocabulary: {
      words: [
        {
          word: "boetes",
          definition: "geld dat je moet betalen als straf"
        },
        {
          word: "betaald",
          definition: "het geld is gegeven voor iets"
        },
        {
          word: "gokken",
          definition: "spelen om geld te winnen of verliezen"
        },
        {
          word: "tand",
          definition: "hard, wit ding in je mond"
        },
        {
          word: "tijger",
          definition: "een groot, geel met zwart gestreept dier"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Als je niet betaalt, krijg je een ___.",
          answer: "boete"
        },
        {
          sentence: "Een ___ is een gevaarlijk dier.",
          answer: "tijger"
        },
        {
          sentence: "Gokken kan verslavend zijn, net als een ___.",
          answer: "tijger"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is de Kansspelcommissie?",
        options: [
          "Een soort bank",
          "Een groep die toezicht houdt op gokken",
          "Een soort dierentuin",
          "Een soort restaurant"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is een 'tandeloze tijger'?",
        options: [
          "Een dier zonder tanden",
          "Iemand die er niet gevaarlijk uitziet",
          "Een dier dat niet kan bijten",
          "Alle bovenstaande"
        ],
        correctAnswer: 3
      },
      {
        question: "Waar gaat de tekst over?",
        options: [
          "Over een echte tijger",
          "Over geld en boetes",
          "Over een commissie die geen tanden heeft",
          "Over de opbrengst van boetes"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De Kansspelcommissie heeft in 2024 veel boetes geïnd.",
        isTrue: false
      },
      {
        statement: "Een tijger zonder tanden kan niet bijten.",
        isTrue: true
      },
      {
        statement: "De Kansspelcommissie is net een sterke leeuw.",
        isTrue: false
      }
    ]
  },
{
    id: 12,
    section: "Binnenland",
    topic: "Binnenland",
    level: "A2",
    title: "Schaakgrootmeester Garry Kasparov verslaat tegenstanders in Antwerpen",
    topicNumber: 1,
    article: {
      title: "Schaakgrootmeester Garry Kasparov verslaat tegenstanders in Antwerpen",
      summary: "Het KMSKA in Antwerpen stond gisteren helemaal in het thema van schaken. Schaakgrootmeester Garry Kasparov nam het er op tegen twintig schakers, onder wie Antwerps burgemeester Els van Doesburg en de Belgische ondernemer Marc Coucke."
    },
    vocabulary: {
      words: [
        {
          word: "schaken",
          definition: "een spel dat je op een bord speelt met verschillende soorten stukken"
        },
        {
          word: "tegenstanders",
          definition: "mensen tegen wie je speelt of strijdt"
        },
        {
          word: "Antwerpen",
          definition: "een grote stad in België"
        },
        {
          word: "grootmeester",
          definition: "iemand die heel erg goed is in iets, vooral in schaken"
        },
        {
          word: "onderwerp",
          definition: "waar iets over gaat"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Garry Kasparov is een beroemde ___",
          answer: "schaken"
        },
        {
          sentence: "Hij speelde tegen sterke ___ uit verschillende landen.",
          answer: "tegenstanders"
        },
        {
          sentence: "De wedstrijd vond plaats in de stad ___.",
          answer: "Antwerpen"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar ging het artikel over?",
        options: [
          "een voetbalwedstrijd",
          "een schaakwedstrijd",
          "een politiek debat",
          "een kunstexpositie"
        ],
        correctAnswer: 1
      },
      {
        question: "Wie is Garry Kasparov?",
        options: [
          "een beroemde schaker",
          "de burgemeester van Antwerpen",
          "een Belgische ondernemer",
          "een kunstschilder"
        ],
        correctAnswer: 0
      },
      {
        question: "Waar vond de gebeurtenis plaats?",
        options: [
          "in Antwerpen",
          "in Brussel",
          "in Amsterdam",
          "in Parijs"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "Garry Kasparov is een professionele schaker.",
        isTrue: true
      },
      {
        statement: "De schakers speelden een voetbalwedstrijd.",
        isTrue: false
      },
      {
        statement: "Marc Coucke is een van de schakers.",
        isTrue: true
      }
    ]
  },
{
    id: 13,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Zeven doden na grootschalige Russische aanval op Oekraïne, onder wie twee kinderen",
    topicNumber: 1,
    article: {
      title: "Zeven doden na grootschalige Russische aanval op Oekraïne, onder wie twee kinderen",
      summary: "Bij een grootschalige Russische aanval zijn in Kiev zes mensen omgekomen, onder wie twee kinderen. Ook in Charkiv viel een dode. Daar werd een kleuterschool getroffen."
    },
    vocabulary: {
      words: [
        {
          word: "aanval",
          definition: "een militaire actie tegen een doel"
        },
        {
          word: "omgekomen",
          definition: "overleden, gestorven"
        },
        {
          word: "getroffen",
          definition: "geraakt, getroffen door iets (bijv. een bom)"
        },
        {
          word: "kleuterschool",
          definition: "een school voor jonge kinderen"
        },
        {
          word: "grootschalige",
          definition: "op grote schaal, omvangrijk"
        }
      ],
      fillInBlanks: [
        {
          sentence: "In de oorlog zijn veel mensen ___ door bombardementen.",
          answer: "omgekomen"
        },
        {
          sentence: "De ___ werd beschadigd door een bom.",
          answer: "kleuterschool"
        },
        {
          sentence: "De aanval was ___ en trof veel gebieden.",
          answer: "grootschalige"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waar vond de aanval plaats?",
        options: [
          "Kiev",
          "Charkiv",
          "Moskou",
          "Berlijn"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat werd er getroffen in Charkiv?",
        options: [
          "Een ziekenhuis",
          "Een woonwijk",
          "Een school",
          "Een fabriek"
        ],
        correctAnswer: 3
      },
      {
        question: "Hoeveel mensen stierven in totaal?",
        options: [
          "5",
          "6",
          "7",
          "8"
        ],
        correctAnswer: 3
      }
    ],
    trueFalse: [
      {
        statement: "Er vielen alleen doden in Kiev.",
        isTrue: false
      },
      {
        statement: "Ook in Charkiv vielen doden door de aanval.",
        isTrue: true
      },
      {
        statement: "Er werden alleen militaire doelen getroffen.",
        isTrue: false
      }
    ]
  },
{
    id: 14,
    section: "Buitenland",
    topic: "Buitenland",
    level: "B2",
    title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
    topicNumber: 1,
    article: {
      title: "Opblaaskikkers leiden protest tegen Trump: “De pepperspraybollen botsen er gewoon af”",
      summary: "Bij het protest tegen het beleid van Donald Trump lopen activisten in opblaasbare verkleedpakken steeds prominenter in beeld. “Trump wil zijn Rijksdagbrand. Hij krijgt een eenhoornkostuum.”"
    },
    vocabulary: {
      words: [
        {
          word: "protest",
          definition: "een publieke actie om ongenoegen of verzet te uiten"
        },
        {
          word: "beleid",
          definition: "een plan of reeks van regels om iets te besturen"
        },
        {
          word: "kostuum",
          definition: "een set kleding die samen een outfit vormen, vaak voor een specifiek doel"
        },
        {
          word: "beschermen",
          definition: "iets of iemand veilig houden en tegen gevaar beschermen"
        },
        {
          word: "actie",
          definition: "een gebeurtenis of activiteit met een bepaald doel"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Tijdens het ___ tegen het nieuwe beleid, droegen velen een speciaal kostuum.",
          answer: "protest"
        },
        {
          sentence: "De politie kon de demonstranten niet ___, omdat ze onherkenbaar waren.",
          answer: "identificeren"
        },
        {
          sentence: "Het nieuwe ___ maakt het moeilijk voor mensen met een laag inkomen.",
          answer: "beleid"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Waarom droegen sommige demonstranten een kostuum?",
        options: [
          "Om zich te beschermen tegen traangas",
          "Om er stijlvol uit te zien",
          "Omdat het verplicht was",
          "Ze droegen geen kostuum"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was het effect van de kostuums?",
        options: [
          "De politie kon hen niet herkennen",
          "Ze vielen meer op in de menigte",
          "Ze werden sneller moe van het lopen",
          "Ze waren beter beschermd tegen kou"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat is de toon van het artikel?",
        options: [
          "Neutraal en informatief",
          "Heel kritisch",
          "Heel positief",
          "Onverschillig"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "De activisten droegen kostuums om zich te beschermen tegen pepperspray.",
        isTrue: true
      },
      {
        statement: "Donald Trump was zelf aanwezig bij dit protest.",
        isTrue: false
      },
      {
        statement: "Het artikel suggereert dat de kostuums de actie effectiever maakten.",
        isTrue: true
      }
    ]
  },
{
    id: 15,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
    topicNumber: 1,
    article: {
      title: "KMI waarschuwt voor stormweer donderdag: code oranje aan kust, code geel in rest van het land",
      summary: "Het KMI heeft code geel afgekondigd voor het aankomende stormweer. Aan de kust geldt donderdag vanaf 15 uur code oranje."
    },
    vocabulary: {
      words: [
        {
          word: "KMI",
          definition: "Koninklijk Meteorologisch Instituut"
        },
        {
          word: "stormweer",
          definition: "weer met veel wind, regen of storm"
        },
        {
          word: "code",
          definition: "een soort waarschuwing of signaal"
        },
        {
          word: "oranje",
          definition: "een kleur, hier een code voor gevaar"
        },
        {
          word: "geel",
          definition: "een kleur, hier een code voor minder gevaar"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Het KMI heeft een speciale ___ uitgegeven voor het weer.",
          answer: "code"
        },
        {
          sentence: "Aan de kust geldt code ___ vanaf 15 uur.",
          answer: "oranje"
        },
        {
          sentence: "In de rest van het land geldt code ___ .",
          answer: "geel"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat betekent 'code oranje'?",
        options: [
          "Er is geen gevaar",
          "Wees voorzichtig, er is gevaar",
          "Er is extreem gevaar",
          "De code is niet geldig"
        ],
        correctAnswer: 2
      },
      {
        question: "Waar geldt code geel?",
        options: [
          "Alleen aan de kust",
          "In de rest van het land",
          "Alleen in het buitenland",
          "Overal in België"
        ],
        correctAnswer: 2
      },
      {
        question: "Wanneer gaat de code in?",
        options: [
          "Vanaf 15 uur",
          "Alleen in de ochtend",
          "De hele dag",
          "Alleen na 15 uur"
        ],
        correctAnswer: 1
      }
    ],
    trueFalse: [
      {
        statement: "Code oranje betekent dat er extreem gevaar is.",
        isTrue: true
      },
      {
        statement: "Code geel geldt alleen aan de kust.",
        isTrue: false
      },
      {
        statement: "De waarschuwing geldt vanaf 15 uur.",
        isTrue: true
      }
    ]
  },
{
    id: 16,
    section: "Binnenland",
    topic: "Binnenland",
    level: "B2",
    title: "Schaakgrootmeester Garry Kasparov speelt in Antwerpen tegen twintig finalisten",
    topicNumber: 1,
    article: {
      title: "Schaakgrootmeester Garry Kasparov speelt in Antwerpen tegen twintig finalisten",
      summary: "Het KMSKA in Antwerpen stond gisteren helemaal in het thema van schaken. De bekende schaker Garry Kasparov speelde tegen twintig tegenstanders, waaronder de Antwerpse burgemeester Els van Doesburg en de Belgische ondernemer Marc Coucke. Uiteindelijk won Kasparov alle partijen."
    },
    vocabulary: {
      words: [
        {
          word: "schaken",
          definition: "een bordspel voor twee spelers waarbij je de stukken van je tegenstander moet slaan"
        },
        {
          word: "tegenstander",
          definition: "iemand die tegen je speelt in een spel of sport"
        },
        {
          word: "winnen",
          definition: "een spel of wedstrijd winnen, dus niet verliezen"
        },
        {
          word: "finalisten",
          definition: "deelnemers die tot de finale zijn gekwalificeerd"
        },
        {
          word: "ondernemer",
          definition: "een persoon die een bedrijf of onderneming heeft"
        }
      ],
      fillInBlanks: [
        {
          sentence: "Garry Kasparov is een beroemde ___ die in Antwerpen tegen twintig mensen speelde.",
          answer: "schaker"
        },
        {
          sentence: "Els van Doesburg en Marc Coucke waren twee van de ___ die tegen Kasparov speelden.",
          answer: "finalisten"
        },
        {
          sentence: "Uiteindelijk kon niemand Kasparov ___ en won hij alle partijen.",
          answer: "verslaan"
        }
      ]
    },
    multipleChoice: [
      {
        question: "Wat is Garry Kasparos zijn beroep?",
        options: [
          "Tennisser",
          "Schaker",
          "Voetballer",
          "Basketballer"
        ],
        correctAnswer: 1
      },
      {
        question: "Waar vond het schaakevenement plaats?",
        options: [
          "In Brussel",
          "In Antwerpen",
          "In Gent",
          "In Brugge"
        ],
        correctAnswer: 1
      },
      {
        question: "Wat was de uitslag van de schaakpartijen?",
        options: [
          "Kasparov won alles",
          "Kasparov verloor alles",
          "Het werd een gelijkspel",
          "Alleen de laatste partij werd gewonnen"
        ],
        correctAnswer: 0
      }
    ],
    trueFalse: [
      {
        statement: "Garry Kasparov is een professionele schaker.",
        isTrue: true
      },
      {
        statement: "De Belgische ondernemer Marc Coucke won zijn partij tegen Kasparov.",
        isTrue: false
      },
      {
        statement: "Het KMSKA is een museum in Antwerpen.",
        isTrue: true
      }
    ]
  }
];
