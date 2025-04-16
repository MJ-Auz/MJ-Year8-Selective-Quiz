const questions = [
  {
    "q": "Jake can paint a fence in 6 hours. Mike can paint the same fence in 4 hours. How long will it take both of them working together to paint the fence?",
    "options": [
      "2 hours",
      "2.4 hours",
      "3 hours",
      "5 hours"
    ],
    "answer": 1
  },
  {
    "q": "Alice can type 60 words per minute, while Bob can type 40 words per minute. If they work together, how long will it take them to type 1,200 words?",
    "options": [
      "10 minutes",
      "12 minutes",
      "15 minutes",
      "20 minutes"
    ],
    "answer": 0
  },
  {
    "q": "A large hose can fill a swimming pool in 8 hours. A smaller hose fills it in 12 hours. If both hoses are used together, how long will it take to fill the pool?",
    "options": [
      "4.8 hours",
      "5 hours",
      "6 hours",
      "7 hours"
    ],
    "answer": 0
  },
  {
    "q": "Emily completes a worksheet in 45 minutes. Her brother, Liam, completes the same worksheet in 30 minutes. How long will they take to complete the worksheet together?",
    "options": [
      "15 minutes",
      "18 minutes",
      "20 minutes",
      "25 minutes"
    ],
    "answer": 1
  },
  {
    "q": "A machine makes 180 sandwiches per hour. A second machine makes 120 sandwiches per hour. How long will both machines take to make 750 sandwiches?",
    "options": [
      "2.5 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    "answer": 0
  },
  {
    "q": "A fast copier can copy 100 pages in 5 minutes. A slower copier copies 60 pages in 5 minutes. If both are used together, how many minutes will it take to copy 800 pages?",
    "options": [
      "20 minutes",
      "25 minutes",
      "30 minutes",
      "35 minutes"
    ],
    "answer": 1
  },
  {
    "q": "One worker can build a wall in 10 hours. If 5 identical workers work together, how many hours will it take them to build the wall?",
    "options": [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours"
    ],
    "answer": 1
  },
  {
    "q": "A sprinkler waters 100 square metres in 40 minutes. How much area will 3 identical sprinklers cover in 1 hour?",
    "options": [
      "200 m\u00b2",
      "300 m\u00b2",
      "450 m\u00b2",
      "600 m\u00b2"
    ],
    "answer": 2
  },
  {
    "q": "A printer prints 12 pages per minute. If it runs for 2 hours, how many pages will it print?",
    "options": [
      "720",
      "1,200",
      "1,440",
      "1,800"
    ],
    "answer": 2
  },
  {
    "q": "If a team of 4 workers can dig a trench in 12 hours, how long will it take 6 workers to dig the same trench (working at the same rate)?",
    "options": [
      "6 hours",
      "7 hours",
      "8 hours",
      "9 hours"
    ],
    "answer": 2
  },
  {
    "q": "Machine A can finish a task in 5 hours. Machine B can finish it in 3 hours. If they work alternately every hour starting with Machine A, how many hours will it take to complete the task?",
    "options": [
      "3.5 hours",
      "3.6 hours",
      "3.75 hours",
      "4 hours"
    ],
    "answer": 2
  },
  {
    "q": "Three workers together can finish a task in 6 hours. However, one worker leaves after 2 hours. The remaining two finish the job in 5 more hours. How long would it take only one worker to complete the task?",
    "options": [
      "18 hours",
      "20 hours",
      "21 hours",
      "22 hours"
    ],
    "answer": 1
  },
  {
    "q": "A tap can fill a tank in 4 hours. But there\u2019s a leak that can empty the tank in 6 hours. If both are open, how long will it take to fill the tank?",
    "options": [
      "7 hours",
      "8 hours",
      "12 hours",
      "24 hours"
    ],
    "answer": 2
  },
  {
    "q": "A crew of 6 workers completes a task in 10 days. After 4 days, 2 workers leave. How many more days will it take the remaining workers to finish the job?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 1
  },
  {
    "q": "A printing machine prints 300 pages/hour but must rest 15 minutes every 45 minutes of work. How many pages will it print in 3 hours?",
    "options": [
      "675",
      "750",
      "800",
      "900"
    ],
    "answer": 0
  },
  {
    "q": "James runs at a speed of 8 km/h. How far will he run in 45 minutes?",
    "options": [
      "4 km",
      "5 km",
      "6 km",
      "8 km"
    ],
    "answer": 1
  },
  {
    "q": "A train travels 120 km at a constant speed of 60 km/h. How long does it take to complete the journey?",
    "options": [
      "1 hour",
      "1.5 hours",
      "2 hours",
      "2.5 hours"
    ],
    "answer": 2
  },
  {
    "q": "Alice cycles at 15 km/h. Bob starts cycling 30 minutes later at 20 km/h. How long will Bob take to catch up with Alice?",
    "options": [
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    "answer": 2
  },
  {
    "q": "A bus takes 2 hours to travel from Town A to Town B at 60 km/h and returns at 40 km/h. What is the average speed for the round trip?",
    "options": [
      "48 km/h",
      "50 km/h",
      "52 km/h",
      "55 km/h"
    ],
    "answer": 0
  },
  {
    "q": "A runner travels 300 metres in 36 seconds. What is her speed in km/h?",
    "options": [
      "25",
      "30",
      "35",
      "40"
    ],
    "answer": 1
  },
  {
    "q": "Two cars are moving towards each other from 300 km apart. Car A drives at 60 km/h and Car B at 40 km/h. How long will it take before they meet?",
    "options": [
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    "answer": 1
  },
  {
    "q": "Tom travels at 45 km/h for 2 hours. Jerry travels at 30 km/h for 3 hours. Who travelled further and by how much?",
    "options": [
      "Tom by 15 km",
      "Jerry by 15 km",
      "Tom by 30 km",
      "Same distance"
    ],
    "answer": 3
  },
  {
    "q": "Sarah walks 2 km in 30 minutes and runs 3 km in 20 minutes. What is her average speed for the entire trip?",
    "options": [
      "6 km/h",
      "7.2 km/h",
      "8 km/h",
      "9 km/h"
    ],
    "answer": 0
  },
  {
    "q": "If a car moves at 90 km/h, how many metres does it travel in 10 seconds?",
    "options": [
      "150",
      "200",
      "250",
      "300"
    ],
    "answer": 2
  },
  {
    "q": "A train is 180 metres long and passes a pole in 12 seconds. What is the speed of the train in km/h?",
    "options": [
      "45 km/h",
      "54 km/h",
      "60 km/h",
      "66 km/h"
    ],
    "answer": 1
  },
  {
    "q": "A train 120 meters long is moving at 72 km/h. How long does it take to cross a platform 180 meters long?",
    "options": [
      "12 seconds",
      "15 seconds",
      "18 seconds",
      "20 seconds"
    ],
    "answer": 2
  },
  {
    "q": "A boat can travel 24 km downstream in 2 hours and the same distance upstream in 3 hours. What is the speed of the stream?",
    "options": [
      "2 km/h",
      "3 km/h",
      "4 km/h",
      "5 km/h"
    ],
    "answer": 0
  },
  {
    "q": "Amy gives Ben a 200m head start in a 1.2 km race. Amy runs at 8 m/s, Ben at 6 m/s. Who wins and by how much?",
    "options": [
      "Amy wins by 50 m",
      "Ben wins by 20 m",
      "Amy wins by 100 m",
      "Ben wins by 10 m"
    ],
    "answer": 2
  },
  {
    "q": "Two students run around a circular track (400 m). Student A runs at 6 m/s, Student B at 4 m/s in the same direction. How long before A laps B?",
    "options": [
      "100 seconds",
      "200 seconds",
      "300 seconds",
      "400 seconds"
    ],
    "answer": 1
  },
  {
    "q": "A cyclist travels the first 30 km at 20 km/h and the next 30 km at 30 km/h. What is the average speed for the entire trip?",
    "options": [
      "24 km/h",
      "25 km/h",
      "26 km/h",
      "27 km/h"
    ],
    "answer": 0
  },
  {
    "q": "What is the next number in the sequence?\n4, 9, 14, 19, 24, ?",
    "options": [
      "28",
      "29",
      "30",
      "31"
    ],
    "answer": 1
  },
  {
    "q": "What comes next?\n2, 4, 8, 16, 32, ?",
    "options": [
      "48",
      "56",
      "60",
      "64"
    ],
    "answer": 3
  },
  {
    "q": "Which number completes the pattern?\n1, 4, 9, 16, 25, ?",
    "options": [
      "36",
      "32",
      "30",
      "40"
    ],
    "answer": 0
  },
  {
    "q": "What is the next number?\n10, 8, 13, 11, 16, ?",
    "options": [
      "14",
      "18",
      "19",
      "17"
    ],
    "answer": 2
  },
  {
    "q": "What comes next in the sequence?\n2, 3, 5, 8, 13, ?",
    "options": [
      "19",
      "20",
      "21",
      "22"
    ],
    "answer": 2
  },
  {
    "q": "What is the 6th term of the sequence?\n1, 3, 6, 10, 15, ?",
    "options": [
      "21",
      "20",
      "19",
      "24"
    ],
    "answer": 0
  },
  {
    "q": "Find the missing number in the pattern:\n81, 27, 9, 3, ?",
    "options": [
      "0",
      "1",
      "2",
      "6"
    ],
    "answer": 1
  },
  {
    "q": "What comes next?\n5, 10, 9, 18, 17, ?",
    "options": [
      "26",
      "34",
      "33",
      "32"
    ],
    "answer": 2
  },
  {
    "q": "What is the next number in the pattern?\n2, 4, 8, 16, 23, ?",
    "options": [
      "29",
      "30",
      "31",
      "32"
    ],
    "answer": 0
  },
  {
    "q": "Find the next number:\n1, 2, 4, 8, 16, 32, ?",
    "options": [
      "64",
      "48",
      "40",
      "52"
    ],
    "answer": 0
  },
  {
    "q": "What is the next number?\n2, 5, 10, 17, 26, ?",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "answer": 2
  },
  {
    "q": "What comes next in the sequence?\n3, 6, 11, 18, 27, ?",
    "options": [
      "35",
      "38",
      "40",
      "45"
    ],
    "answer": 1
  },
  {
    "q": "What comes next?\n12, 33, 54, 75, ?",
    "options": [
      "96",
      "98",
      "100",
      "102"
    ],
    "answer": 0
  },
  {
    "q": "Find the missing number:\n0, 3, 8, 15, 24, ?",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "answer": 0
  },
  {
    "q": "What is the next number?\n2, 4, 3, 9, 4, 16, ?",
    "options": [
      "5",
      "25",
      "6",
      "27"
    ],
    "answer": 0
  }
];