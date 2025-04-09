const questions = [
  {
    "q": "What is the main feeling Silas experiences in this passage?",
    "options": [
      "Joy at the beauty of the night sea",
      "Annoyance at the persistent fog",
      "Worry about the safety of the fishing vessel",
      "Boredom with his solitary life"
    ],
    "answer": 2
  },
  {
    "q": "The phrase \"like the back of his weathered hand\" suggests that Silas:",
    "options": [
      "Has a detailed map of the island.",
      "Is very familiar with the ocean's behaviour.",
      "Often works with his hands.",
      "Enjoys spending time outdoors."
    ],
    "answer": 1
  },
  {
    "q": "The fog is described as a \"suffocating blanket\" because it:",
    "options": [
      "Is cold and damp.",
      "Completely obscures visibility.",
      "Makes it difficult to breathe.",
      "Is a common occurrence on the island."
    ],
    "answer": 1
  },
  {
    "q": "What action has Silas taken to warn the Sea Serpent?",
    "options": [
      "He has turned the lighthouse beam towards the expected route.",
      "He has sent a radio message to the vessel.",
      "He has sounded the foghorn.",
      "He has lit flares on the shore."
    ],
    "answer": 2
  },
  {
    "q": "The word \"heed\" in the last sentence means to:",
    "options": [
      "Ignore",
      "Notice and obey",
      "Question",
      "Misunderstand"
    ],
    "answer": 1
  },
  {
    "q": "According to the passage, the Great Barrier Reef is located off the coast of:",
    "options": [
      "Western Australia",
      "South Australia",
      "Victoria",
      "Queensland"
    ],
    "answer": 3
  },
  {
    "q": "Which of the following is NOT mentioned as a type of marine life found in the Great Barrier Reef?",
    "options": [
      "Sea turtles",
      "Dolphins",
      "Colourful fish",
      "Sharks"
    ],
    "answer": 1
  },
  {
    "q": "The passage highlights that the Great Barrier Reef is important because it is a:",
    "options": [
      "Popular tourist destination.",
      "Source of valuable minerals.",
      "Crucial part of the ocean's health.",
      "Major shipping route."
    ],
    "answer": 2
  },
  {
    "q": "What is identified as the primary cause of coral bleaching?",
    "options": [
      "Overfishing",
      "Pollution from ships",
      "Climate change",
      "Coastal development"
    ],
    "answer": 2
  },
  {
    "q": "The author's tone in this passage can best be described as:",
    "options": [
      "Humorous and light-hearted",
      "Informative and concerned",
      "Critical and angry",
      "Persuasive and optimistic"
    ],
    "answer": 1
  },
  {
    "q": "What is the attic described as?",
    "options": [
      "A dark and scary place",
      "A well-organized storage room",
      "A treasure trove of forgotten things",
      "A dusty and unpleasant space"
    ],
    "answer": 2
  },
  {
    "q": "The dust motes are described as \"dancing\" because:",
    "options": [
      "They are moved by a gentle breeze.",
      "They reflect the light in a lively way.",
      "Maya imagines them moving to music.",
      "They are disturbed by her movements."
    ],
    "answer": 1
  },
  {
    "q": "The yellowed letters and faded ribbons suggest that the letters are:",
    "options": [
      "Recently written.",
      "Very old.",
      "Important official documents.",
      "Part of a child's collection."
    ],
    "answer": 1
  },
  {
    "q": "What did Maya find inside the trunk?",
    "options": [
      "A collection of old coins",
      "A set of antique dolls",
      "A small, leather-bound diary",
      "A box of family photographs"
    ],
    "answer": 2
  },
  {
    "q": "When Maya reads the diary, she feels a:",
    "options": [
      "Sense of confusion about the past.",
      "Strong connection to the diary's owner.",
      "Desire to sell the valuable antique.",
      "Feeling of sadness and loss."
    ],
    "answer": 1
  },
  {
    "q": "According to the passage, what is one potential benefit of AI?",
    "options": [
      "Creating more manual labor jobs",
      "Simplifying difficult problems",
      "Reducing the need for technological advancements",
      "Limiting access to information"
    ],
    "answer": 1
  },
  {
    "q": "Critics of AI are concerned about:",
    "options": [
      "The increasing cost of technology.",
      "The lack of entertainment options.",
      "The possibility of job losses.",
      "The improvement of human skills."
    ],
    "answer": 2
  },
  {
    "q": "The phrase \"bias in AI algorithms\" refers to the idea that AI systems might:",
    "options": [
      "Be too complex for humans to understand.",
      "Unintentionally favour certain groups over others.",
      "Require too much energy to operate efficiently.",
      "Be easily manipulated by hackers."
    ],
    "answer": 1
  },
  {
    "q": "The author uses the phrase \"increasingly autonomous machines\" to describe machines that are:",
    "options": [
      "Becoming more reliant on human control.",
      "Growing in size and physical strength.",
      "Able to make decisions independently.",
      "Designed for very specific and limited tasks."
    ],
    "answer": 2
  },
  {
    "q": "What is the main purpose of this passage?",
    "options": [
      "To persuade readers to embrace AI technology.",
      "To provide a balanced overview of the arguments for and against AI.",
      "To warn readers about the dangers of AI.",
      "To offer a historical account of the development of AI."
    ],
    "answer": 1
  },
  {
    "q": "At the beginning of the passage, Leo feels both:",
    "options": [
      "Excitement and happiness.",
      "Curiosity and amusement.",
      "Envy and fear.",
      "Pride and confidence."
    ],
    "answer": 2
  },
  {
    "q": "What happened after Leo's first few attempts to ride without training wheels?",
    "options": [
      "He immediately mastered riding the bike.",
      "He fell down several times.",
      "His dad put the training wheels back on.",
      "He decided he didn't want to ride anymore."
    ],
    "answer": 1
  },
  {
    "q": "The phrase \"something clicked\" suggests that Leo:",
    "options": [
      "Heard a mechanical sound on the bike.",
      "Suddenly understood the secret to balancing.",
      "Received a helpful instruction from his dad.",
      "Realized his bike was the wrong size."
    ],
    "answer": 1
  },
  {
    "q": "What motivated Leo to keep trying to ride his bike?",
    "options": [
      "The pressure from his friends.",
      "His dad's encouragement and his desire for the experience.",
      "The promise of a new bike if he succeeded.",
      "His anger at not being able to do it immediately."
    ],
    "answer": 1
  },
  {
    "q": "At the end of the passage, Leo experiences:",
    "options": [
      "Disappointment at how difficult it was.",
      "Relief that it is finally over.",
      "A feeling of excitement and achievement.",
      "Sadness that his training wheels are gone."
    ],
    "answer": 2
  },
  {
    "q": "What is the primary source of energy for photosynthesis?",
    "options": [
      "Water from the soil",
      "Carbon dioxide from the air",
      "Sunlight",
      "Chlorophyll in the leaves"
    ],
    "answer": 2
  },
  {
    "q": "What is chlorophyll?",
    "options": [
      "A type of sugar produced during photosynthesis.",
      "The small pores on the leaves of plants.",
      "A pigment that gives plants their green colour and helps absorb light.",
      "The structures within plant cells where photosynthesis occurs."
    ],
    "answer": 2
  },
  {
    "q": "During photosynthesis, carbon dioxide is absorbed by plants through:",
    "options": [
      "Their roots",
      "Their stems",
      "Small pores on their leaves",
      "Their flowers"
    ],
    "answer": 2
  },
  {
    "q": "What are the two main products of photosynthesis?",
    "options": [
      "Water and carbon dioxide",
      "Glucose and oxygen",
      "Chlorophyll and sunlight",
      "Stomata and chloroplasts"
    ],
    "answer": 1
  },
  {
    "q": "Why is photosynthesis described as \"fundamental to life on Earth\"?",
    "options": [
      "It helps to regulate the temperature of the planet.",
      "It is the main source of food for all living organisms.",
      "It produces the oxygen that most living things need to breathe and is a primary energy source.",
      "It helps to maintain the balance of water in the environment."
    ],
    "answer": 2
  },
  {
    "q": "According to the passage, what is one negative consequence of the amount of waste we produce?",
    "options": [
      "It makes products cheaper for consumers.",
      "It helps to create more jobs in landfills.",
      "It leads to pollution of the land and water.",
      "It increases the availability of raw materials."
    ],
    "answer": 2
  },
  {
    "q": "Recycling helps to reduce the need to:",
    "options": [
      "Transport finished goods.",
      "Design new packaging.",
      "Extract and process raw materials.",
      "Consume fewer products."
    ],
    "answer": 2
  },
  {
    "q": "What is one of the natural resources mentioned that recycling helps to conserve?",
    "options": [
      "Wind energy",
      "Solar power",
      "Forests",
      "Ocean currents"
    ],
    "answer": 2
  },
  {
    "q": "The author suggests that the benefits of recycling are:",
    "options": [
      "Primarily financial for individuals.",
      "Short-term and have little lasting impact.",
      "Significant for the environment and future generations.",
      "Only relevant to large corporations."
    ],
    "answer": 2
  },
  {
    "q": "The author uses the phrase \"simple yet powerful way\" to describe:",
    "options": [
      "The process of creating new products.",
      "The impact of overflowing landfills.",
      "The act of choosing to recycle.",
      "The investment required for recycling infrastructure."
    ],
    "answer": 2
  },
  {
    "q": "The sunlight in the forest is described as:",
    "options": [
      "Harsh and direct.",
      "Dappled and shifting.",
      "Bright and overwhelming.",
      "Weak and insufficient."
    ],
    "answer": 1
  },
  {
    "q": "What scents are present in the forest air?",
    "options": [
      "Freshly cut grass and blooming flowers.",
      "Damp soil, decaying leaves, and pine.",
      "Saltwater and sea breeze.",
      "Smoke and pollution from nearby towns."
    ],
    "answer": 1
  },
  {
    "q": "The sound of the leaves in the wind is compared to:",
    "options": [
      "A loud crashing noise.",
      "A soft whispering sound.",
      "A sharp cracking sound.",
      "A deep rumbling sound."
    ],
    "answer": 1
  },
  {
    "q": "The forest floor is described as:",
    "options": [
      "Hard and rocky.",
      "Soft and springy.",
      "Dry and dusty.",
      "Wet and muddy."
    ],
    "answer": 1
  },
  {
    "q": "The overall feeling created by the description of the forest is one of:",
    "options": [
      "Danger and unease.",
      "Excitement and adventure.",
      "Peace and tranquility.",
      "Confusion and disorientation."
    ],
    "answer": 2
  },
  {
    "q": "The old house is described as having windows that look like:",
    "options": [
      "Bright, welcoming eyes.",
      "Darkened, vacant eyes.",
      "Sparkling, clean panes.",
      "Shattered, broken glass."
    ],
    "answer": 1
  },
  {
    "q": "What kind of stories did the locals tell about the house?",
    "options": [
      "Humorous anecdotes about past residents.",
      "Tales of happy families and community events.",
      "Stories of forgotten wealth and disappearances.",
      "Accounts of recent renovations and new owners."
    ],
    "answer": 2
  },
  {
    "q": "What caused the front door to make a sound when Sarah and Ben opened it?",
    "options": [
      "A strong gust of wind.",
      "The weight of the door itself.",
      "The hinges were old and stiff.",
      "They opened it very quickly."
    ],
    "answer": 2
  },
  {
    "q": "Where did Sarah find the loose floorboard?",
    "options": [
      "In the dusty attic.",
      "In the overgrown garden.",
      "In the living room amongst the furniture.",
      "In the dark and damp basement."
    ],
    "answer": 2
  },
  {
    "q": "What did Sarah and Ben find beneath the loose floorboard?",
    "options": [
      "A pile of old newspapers.",
      "A collection of antique coins.",
      "A small, intricately carved wooden box.",
      "A secret passage leading to another room."
    ],
    "answer": 2
  }
];