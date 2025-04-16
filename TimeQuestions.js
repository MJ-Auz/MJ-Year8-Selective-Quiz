const questions = [
  {
    "q": "Liam cycles to school in 30 minutes. One day, he cycled for the first 15 minutes but then got a flat tire and had to walk the rest of the way. His walking speed is half his cycling speed. How many minutes did it take him to get to school that day?",
    "options": [
      "36",
      "41",
      "45",
      "47"
    ],
    "answer": 2
  },
  {
    "q": "I can bike 3 times as fast as Alex can jog. Alex starts jogging along a path 30 minutes before I start biking. How long does it take me to catch Alex?",
    "options": [
      "9",
      "15",
      "23",
      "24"
    ],
    "answer": 1
  },
  {
    "q": "Mia types 18 words per minute. She needs to type an 8-page document, with each page containing 450 words. At this rate, how long will it take her to finish the entire document?",
    "options": [
      "200",
      "202",
      "204",
      "206"
    ],
    "answer": 0
  },
  {
    "q": "At 12:15 pm, the oven\u2019s display showed 1:49, meaning there was 1 hour and 49 minutes remaining. When did the oven\u2019s countdown timer happen to match the actual time?",
    "options": [
      "101",
      "108",
      "109",
      "116"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 90 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "25",
      "30",
      "39",
      "40"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 37 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "2",
      "6",
      "12",
      "19"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 137 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "266",
      "269",
      "274",
      "280"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 59 minutes. Task B is 2 times as fast as Task A. How long will Task B take?",
    "options": [
      "20",
      "22",
      "30",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 98 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "187",
      "191",
      "196",
      "201"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 48 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "8",
      "13",
      "16",
      "21"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 99 minutes. Task B is 2 times as fast as Task A. How long will Task B take?",
    "options": [
      "50",
      "51",
      "59",
      "60"
    ],
    "answer": 0
  },
  {
    "q": "Task A takes 30 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "51",
      "60",
      "64",
      "69"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 53 minutes. Task B is 2 times as fast as Task A. How long will Task B take?",
    "options": [
      "21",
      "26",
      "29",
      "32"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 90 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "173",
      "176",
      "180",
      "182"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 145 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "38",
      "41",
      "45",
      "48"
    ],
    "answer": 3
  },
  {
    "q": "Task A takes 52 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "8",
      "16",
      "17",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 96 minutes. Task B is 2 times as fast as Task A. How long will Task B take?",
    "options": [
      "42",
      "45",
      "48",
      "55"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 169 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "50",
      "56",
      "63",
      "66"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 24 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "5",
      "8",
      "12",
      "17"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 97 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "194",
      "197",
      "198",
      "201"
    ],
    "answer": 0
  },
  {
    "q": "Task A takes 51 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "96",
      "99",
      "102",
      "111"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 105 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "27",
      "30",
      "35",
      "37"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 164 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "46",
      "55",
      "56",
      "61"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 45 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "5",
      "6",
      "15",
      "20"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 64 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "13",
      "17",
      "19",
      "21"
    ],
    "answer": 3
  },
  {
    "q": "Task A takes 112 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "215",
      "216",
      "222",
      "224"
    ],
    "answer": 3
  },
  {
    "q": "Task A takes 114 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "33",
      "34",
      "37",
      "38"
    ],
    "answer": 3
  },
  {
    "q": "Task A takes 159 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "51",
      "53",
      "54",
      "56"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 54 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "11",
      "14",
      "18",
      "27"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 110 minutes. Task B is 2 times as fast as Task A. How long will Task B take?",
    "options": [
      "49",
      "55",
      "57",
      "64"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 157 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "44",
      "45",
      "52",
      "59"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 119 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "230",
      "237",
      "238",
      "240"
    ],
    "answer": 2
  },
  {
    "q": "Task A takes 66 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "18",
      "22",
      "25",
      "30"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 59 minutes. Task B is 0.5 times as fast as Task A. How long will Task B take?",
    "options": [
      "110",
      "118",
      "124",
      "127"
    ],
    "answer": 1
  },
  {
    "q": "Task A takes 188 minutes. Task B is 3 times as fast as Task A. How long will Task B take?",
    "options": [
      "61",
      "63",
      "65",
      "70"
    ],
    "answer": 1
  },
  {
    "q": "A train leaves station A at 8:00 AM traveling at 60 km/h. Another train leaves station B, 300 km away, at 9:30 AM traveling toward station A at 90 km/h. At what time do the two trains meet?",
    "options": [
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM"
    ],
    "answer": 1
  },
  {
    "q": "A man walks to work at 5 km/h and returns home along the same route at 3 km/h. If the total travel time is 1 hour and 36 minutes, how far is his workplace?",
    "options": [
      "6 km",
      "5.4 km",
      "4.5 km",
      "4 km"
    ],
    "answer": 2
  },
  {
    "q": "A plane travels 600 km in the same time a car travels 300 km. If the car\u2019s speed is 75 km/h, what is the plane\u2019s speed?",
    "options": [
      "100 km/h",
      "120 km/h",
      "150 km/h",
      "180 km/h"
    ],
    "answer": 2
  },
  {
    "q": "A cyclist covers a distance of 90 km at a speed of 30 km/h and returns at a speed of 45 km/h. What is the average speed for the whole journey?",
    "options": [
      "36 km/h",
      "37.5 km/h",
      "38.5 km/h",
      "40 km/h"
    ],
    "answer": 1
  },
  {
    "q": "Two people start running around a circular track. One completes a lap in 4 minutes, the other in 6 minutes. After how many minutes will they meet at the starting point?",
    "options": [
      "10 minutes",
      "12 minutes",
      "15 minutes",
      "18 minutes"
    ],
    "answer": 1
  },
  {
    "q": "A water tank can be filled by pipe A in 20 minutes and by pipe B in 30 minutes. If both pipes are opened together, how long will it take to fill the tank?",
    "options": [
      "10 minutes",
      "12 minutes",
      "15 minutes",
      "18 minutes"
    ],
    "answer": 1
  },
  {
    "q": "If a train takes 2 hours to travel 180 km, how long will it take to travel 540 km at the same speed?",
    "options": [
      "4 hours",
      "5 hours",
      "6 hours",
      "7 hours"
    ],
    "answer": 2
  },
  {
    "q": "A bus starts from town X to town Y at 7:00 AM and travels at 50 km/h. Another bus leaves town Y for town X at 8:00 AM at 60 km/h. If the distance between X and Y is 330 km, at what time will they meet?",
    "options": [
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM"
    ],
    "answer": 1
  },
  {
    "q": "John walks from his house to school at 4 km/h and returns by bike at 12 km/h. If the total travel time is 1 hour, what is the distance between his house and school?",
    "options": [
      "3 km",
      "4 km",
      "4.5 km",
      "5 km"
    ],
    "answer": 1
  },
  {
    "q": "A swimmer swims upstream at 3 km/h and downstream at 5 km/h. What is his average speed for the entire trip?",
    "options": [
      "3.5 km/h",
      "3.75 km/h",
      "4 km/h",
      "4.5 km/h"
    ],
    "answer": 1
  }
];