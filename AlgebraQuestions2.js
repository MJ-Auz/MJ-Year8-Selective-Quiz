const questions = [
  {
    "q": "Expand: (x + 5)(x + 4)",
    "options": [
      "x\u00b2 + 4x + 42",
      "x\u00b2 + 3x + 63",
      "x\u00b2 + 2x + 65",
      "x\u00b2 + 9x + 20"
    ],
    "answer": 3
  },
  {
    "q": "Expand: (x + 9)(x + 8)",
    "options": [
      "x\u00b2 + 6x + 53",
      "x\u00b2 + 17x + 72",
      "x\u00b2 + 1x + 95",
      "x\u00b2 + 8x + 2"
    ],
    "answer": 1
  },
  {
    "q": "Expand: (x + 6)(x + 7)",
    "options": [
      "x\u00b2 + 10x + 16",
      "x\u00b2 + 9x + 26",
      "x\u00b2 + 4x + 100",
      "x\u00b2 + 13x + 42"
    ],
    "answer": 3
  },
  {
    "q": "Expand: (x + 8)(x + 2)",
    "options": [
      "x\u00b2 + 10x + 16",
      "x\u00b2 + 20x + 70",
      "x\u00b2 + 17x + 32",
      "x\u00b2 + 10x + 28"
    ],
    "answer": 0
  },
  {
    "q": "Expand: (x + 2)(x + 7)",
    "options": [
      "x\u00b2 + 8x + 85",
      "x\u00b2 + 9x + 14",
      "x\u00b2 + 15x + 12",
      "x\u00b2 + 18x + 77"
    ],
    "answer": 1
  },
  {
    "q": "Expand: (x + 5)(x + 2)",
    "options": [
      "x\u00b2 + 7x + 10",
      "x\u00b2 + 7x + 82",
      "x\u00b2 + 18x + 49",
      "x\u00b2 + 1x + 88"
    ],
    "answer": 0
  },
  {
    "q": "Expand: (x + 6)(x + 10)",
    "options": [
      "x\u00b2 + 13x + 54",
      "x\u00b2 + 16x + 60",
      "x\u00b2 + 2x + 50",
      "x\u00b2 + 8x + 65"
    ],
    "answer": 1
  },
  {
    "q": "Expand: (x + 2)(x + 6)",
    "options": [
      "x\u00b2 + 8x + 12",
      "x\u00b2 + 18x + 97",
      "x\u00b2 + 3x + 48",
      "x\u00b2 + 3x + 69"
    ],
    "answer": 0
  },
  {
    "q": "Expand: (x + 7)(x + 5)",
    "options": [
      "x\u00b2 + 6x + 94",
      "x\u00b2 + 12x + 35",
      "x\u00b2 + 1x + 18",
      "x\u00b2 + 19x + 9"
    ],
    "answer": 1
  },
  {
    "q": "Expand: (x + 4)(x + 3)",
    "options": [
      "x\u00b2 + 11x + 29",
      "x\u00b2 + 7x + 12",
      "x\u00b2 + 8x + 60",
      "x\u00b2 + 15x + 86"
    ],
    "answer": 1
  },
  {
    "q": "Factorise: x\u00b2 + 20x + 100",
    "options": [
      "(x + 5)(x + 5)",
      "(x + 7)(x + 4)",
      "(x + 8)(x + 8)",
      "(x + 10)(x + 10)"
    ],
    "answer": 3
  },
  {
    "q": "Factorise: x\u00b2 + 16x + 64",
    "options": [
      "(x + 6)(x + 1)",
      "(x + 1)(x + 9)",
      "(x + 5)(x + 7)",
      "(x + 8)(x + 8)"
    ],
    "answer": 3
  },
  {
    "q": "Factorise: x\u00b2 + 14x + 48",
    "options": [
      "(x + 8)(x + 9)",
      "(x + 9)(x + 5)",
      "(x + 8)(x + 6)",
      "(x + 8)(x + 7)"
    ],
    "answer": 2
  },
  {
    "q": "Factorise: x\u00b2 + 8x + 7",
    "options": [
      "(x + 2)(x + 8)",
      "(x + 7)(x + 1)",
      "(x + 8)(x + 10)",
      "(x + 6)(x + 1)"
    ],
    "answer": 1
  },
  {
    "q": "Factorise: x\u00b2 + 8x + 7",
    "options": [
      "(x + 4)(x + 3)",
      "(x + 1)(x + 7)",
      "(x + 10)(x + 1)",
      "(x + 7)(x + 1)"
    ],
    "answer": 1
  },
  {
    "q": "Solve for x and y:\ny = x + 3\n2x + 3y = 34",
    "options": [
      "x = 9, y = 8",
      "x = 13, y = 1",
      "x = 2, y = 11",
      "x = 5, y = 8"
    ],
    "answer": 3
  },
  {
    "q": "Solve for x and y:\ny = x + 4\n2x + 3y = 17",
    "options": [
      "x = 9, y = 5",
      "x = 8, y = 5",
      "x = 14, y = 14",
      "x = 1, y = 5"
    ],
    "answer": 3
  },
  {
    "q": "Solve for x and y:\ny = x + 2\n2x + 3y = 21",
    "options": [
      "x = 2, y = 4",
      "x = 4, y = 1",
      "x = 3, y = 5",
      "x = 8, y = 7"
    ],
    "answer": 2
  },
  {
    "q": "Solve for x and y:\ny = x + -9\n2x + 3y = 23",
    "options": [
      "x = 5, y = 11",
      "x = 12, y = 14",
      "x = 4, y = 4",
      "x = 10, y = 1"
    ],
    "answer": 3
  },
  {
    "q": "Solve for x and y:\ny = x + 6\n2x + 3y = 28",
    "options": [
      "x = 4, y = 11",
      "x = 2, y = 8",
      "x = 2, y = 9",
      "x = 2, y = 13"
    ],
    "answer": 1
  },
  {
    "q": "Solve for x and y:\ny = x + 3\n2x + 3y = 44",
    "options": [
      "x = 7, y = 1",
      "x = 7, y = 14",
      "x = 7, y = 6",
      "x = 7, y = 10"
    ],
    "answer": 3
  },
  {
    "q": "Solve for x and y:\ny = x + -5\n2x + 3y = 35",
    "options": [
      "x = 15, y = 3",
      "x = 15, y = 8",
      "x = 11, y = 11",
      "x = 10, y = 5"
    ],
    "answer": 3
  },
  {
    "q": "Solve for x and y:\ny = x + 5\n2x + 3y = 30",
    "options": [
      "x = 1, y = 11",
      "x = 3, y = 8",
      "x = 9, y = 15",
      "x = 12, y = 10"
    ],
    "answer": 1
  },
  {
    "q": "Solve for x and y:\ny = x + 0\n2x + 3y = 50",
    "options": [
      "x = 11, y = 11",
      "x = 13, y = 5",
      "x = 10, y = 10",
      "x = 13, y = 9"
    ],
    "answer": 2
  },
    {
    "q": "Jake bought 4 apples and 5 oranges for $13. In another purchase, he bought 6 apples and 7 oranges for $19. What is the cost of one apple?",
    "options": ["$2", "$3", "$6", "$1"],
    "answer": 0
  },
  {
    "q": "Solve for x and y:\ny = x + -6\n2x + 3y = 17",
    "options": [
      "x = 7, y = 10",
      "x = 5, y = 6",
      "x = 8, y = 6",
      "x = 7, y = 1"
    ],
    "answer": 3
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $12. How many cakes did she buy?",
    "options": [
      "4 cakes",
      "3 cakes",
      "2 cakes",
      "6 cakes"
    ],
    "answer": 2
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $18. How many cakes did she buy?",
    "options": [
      "1 cakes",
      "4 cakes",
      "3 cakes",
      "2 cakes"
    ],
    "answer": 1
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $12. How many cakes did she buy?",
    "options": [
      "4 cakes",
      "5 cakes",
      "2 cakes",
      "3 cakes"
    ],
    "answer": 2
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $9. How many cakes did she buy?",
    "options": [
      "4 cakes",
      "6 cakes",
      "2 cakes",
      "1 cakes"
    ],
    "answer": 3
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $9. How many cakes did she buy?",
    "options": [
      "6 cakes",
      "3 cakes",
      "1 cakes",
      "4 cakes"
    ],
    "answer": 2
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $9. How many cakes did she buy?",
    "options": [
      "6 cakes",
      "2 cakes",
      "1 cakes",
      "5 cakes"
    ],
    "answer": 2
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $9. How many cakes did she buy?",
    "options": [
      "3 cakes",
      "1 cakes",
      "2 cakes",
      "5 cakes"
    ],
    "answer": 1
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $18. How many cakes did she buy?",
    "options": [
      "4 cakes",
      "3 cakes",
      "1 cakes",
      "6 cakes"
    ],
    "answer": 0
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $15. How many cakes did she buy?",
    "options": [
      "5 cakes",
      "2 cakes",
      "6 cakes",
      "3 cakes"
    ],
    "answer": 3
  },
  {
    "q": "Sarah bought some cakes and cookies. Cakes cost $2 each, cookies $1 each. She bought 6 more cookies than cakes and spent $9. How many cakes did she buy?",
    "options": [
      "1 cakes",
      "6 cakes",
      "2 cakes",
      "5 cakes"
    ],
    "answer": 0
  },
    {
    "q": "Jake bought 4 apples and 2 oranges for $18. In another purchase, he bought 7 apples and 5 oranges for $36. What is the cost of one apple?",
    "options": ["$2", "$3", "$4", "$1"],
    "answer": 1
  },
  {
    "q": "Jake bought 4 apples and 2 oranges for $18. In another purchase, he bought 5 apples and 4 oranges for $24. What is the cost of one apple?",
    "options": ["$5", "$1", "$2", "$4"],
    "answer": 3
  },
  {
    "q": "Jake bought 4 apples and 5 oranges for $17. In another purchase, he bought 7 apples and 7 oranges for $28. What is the cost of one apple?",
    "options": ["$3", "$2", "$6", "$1"],
    "answer": 0
  },
  {
    "q": "Jake bought 2 apples and 4 oranges for $16. In another purchase, he bought 3 apples and 7 oranges for $26. What is the cost of one apple?",
    "options": ["$3", "$2", "$6", "$4"],
    "answer": 3
  },
  {
    "q": "Solve: 5x + 9 = 39",
    "options": [
      "x = 6",
      "x = 9",
      "x = 12",
      "x = 10"
    ],
    "answer": 0
  },
  {
    "q": "Solve: 10x + 5 = 55",
    "options": [
      "x = 14",
      "x = 5",
      "x = 3",
      "x = 15"
    ],
    "answer": 1
  },
  {
    "q": "Solve: 9x + 7 = 43",
    "options": [
      "x = 8",
      "x = 7",
      "x = 4",
      "x = 10"
    ],
    "answer": 2
  },
  {
    "q": "Solve: 10x + 4 = 74",
    "options": [
      "x = 2",
      "x = 8",
      "x = 11",
      "x = 7"
    ],
    "answer": 3
  },
  {
    "q": "Solve: 7x + 4 = 32",
    "options": [
      "x = 4",
      "x = 14",
      "x = 11",
      "x = 15"
    ],
    "answer": 0
  },
  {
    "q": "Solve: 5x + 8 = 48",
    "options": [
      "x = 7",
      "x = 8",
      "x = 3",
      "x = 0"
    ],
    "answer": 1
  },
  {
    "q": "Solve: 1x + 10 = 13",
    "options": [
      "x = 15",
      "x = 3",
      "x = 13",
      "x = 0"
    ],
    "answer": 1
  },
  {
    "q": "Solve: 1x + 9 = 18",
    "options": [
      "x = 5",
      "x = 4",
      "x = 9",
      "x = 11"
    ],
    "answer": 2
  },
  {
    "q": "Solve: 1x + 1 = 7",
    "options": [
      "x = 13",
      "x = 7",
      "x = 6",
      "x = 14"
    ],
    "answer": 2
  },
  {
    "q": "Solve: 6x + 6 = 18",
    "options": [
      "x = 15",
      "x = 8",
      "x = 2",
      "x = 10"
    ],
    "answer": 2
  }
];