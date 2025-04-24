const questions = [
  {
    "q": "2x + 3 > 13",
    "options": [
      "x > 4",
      "x > 5",
      "x < 5",
      "x < 4",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "3x + 4 \u2265 -8",
    "options": [
      "x \u2265 -2",
      "x \u2265 -8",
      "x \u2265 6",
      "x \u2265 2",
      "None of these"
    ],
    "answer": 4
  },
  {
    "q": "-3x + 4 \u2265 -14 + 6x",
    "options": [
      "x \u2265 -2",
      "x \u2264 2",
      "x \u2264 -2",
      "x \u2265 2",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "4x - 5 < 11",
    "options": [
      "x < 2",
      "x < 4",
      "x < 5",
      "x < 6",
      "None of these"
    ],
    "answer": 3
  },
  {
    "q": "2(x - 3) > x + 4",
    "options": [
      "x > 4",
      "x > 10",
      "x > 6",
      "x > 5",
      "None of these"
    ],
    "answer": 4
  },
  {
    "q": "3(x + 2) \u2264 2x + 9",
    "options": [
      "x \u2264 3",
      "x \u2264 6",
      "x \u2264 2",
      "x \u2264 4",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "5x + 7 \u2265 2x + 13",
    "options": [
      "x \u2265 2",
      "x \u2265 3",
      "x \u2265 4",
      "x \u2265 5",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "7x - 3 > 2x + 12",
    "options": [
      "x > 2",
      "x > 3",
      "x > 4",
      "x > 5",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "8x + 4 \u2264 20",
    "options": [
      "x \u2264 1",
      "x \u2264 2",
      "x \u2264 3",
      "x \u2264 4",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "10 - 3x > 4",
    "options": [
      "x < 2",
      "x > 2",
      "x < 1",
      "x > 3",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "x/2 + 3 > 5",
    "options": [
      "x > 4",
      "x > 2",
      "x > 1",
      "x > 5",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "6x - 4 < 2x + 12",
    "options": [
      "x < 4",
      "x < 5",
      "x < 3",
      "x < 6",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "-2x + 5 \u2265 -1",
    "options": [
      "x \u2264 3",
      "x \u2265 3",
      "x \u2265 -3",
      "x \u2264 -3",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "5x + 9 > 2x + 18",
    "options": [
      "x > 3",
      "x > 4",
      "x > 5",
      "x > 6",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "9x - 2 < 4x + 8",
    "options": [
      "x < 1",
      "x < 2",
      "x < 3",
      "x < 4",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "3(x - 2) > 2x + 1",
    "options": [
      "x > 5",
      "x > 6",
      "x > 7",
      "x > 8",
      "None of these"
    ],
    "answer": 4
  },
  {
    "q": "x - 5 \u2264 2",
    "options": [
      "x \u2264 6",
      "x \u2264 7",
      "x \u2264 8",
      "x \u2264 9",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "2x + 1 \u2265 3x - 4",
    "options": [
      "x \u2264 4",
      "x \u2265 5",
      "x \u2264 5",
      "x \u2265 4",
      "None of these"
    ],
    "answer": 4
  },
  {
    "q": "-x + 2 < 3",
    "options": [
      "x > -1",
      "x < -1",
      "x < 1",
      "x > 1",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "4x - 3 \u2265 x + 6",
    "options": [
      "x \u2265 2",
      "x \u2265 3",
      "x \u2265 4",
      "x \u2265 5",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "Factorise: x\u00b2 + 5x + 6",
    "options": [
      "(x + 5)(x + 1)",
      "(x + 3)(x + 3)",
      "(x + 4)(x + 2)",
      "(x + 2)(x + 3)",
      "None of these"
    ],
    "answer": 3
  },
  {
    "q": "Factorise: x\u00b2 + 7x + 10",
    "options": [
      "(x + 2)(x + 5)",
      "(x + 1)(x + 10)",
      "(x + 3)(x + 4)",
      "(x + 2)(x + 6)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: 2x\u00b2 - 6x + 4",
    "options": [
      "2(x - 2)(x - 1)",
      "(x + 2)(x - 1)",
      "2(x + 2)(x - 1)",
      "(x - 2)(x - 1)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: 8x\u00b2 - 32x + 24",
    "options": [
      "8(x + 1)(x - 3)",
      "8(x + 2)(x - 4)",
      "8(x - 1)(x - 3)",
      "8(x - 2)(x + 4)",
      "None of these"
    ],
    "answer": 1
  },
  {
    "q": "Factorise: x\u00b2 - 4",
    "options": [
      "(x - 2)(x + 2)",
      "(x + 2)(x + 2)",
      "(x - 4)(x + 1)",
      "(x + 4)(x - 1)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: x\u00b2 + 6x + 8",
    "options": [
      "(x + 4)(x + 2)",
      "(x + 3)(x + 3)",
      "(x + 1)(x + 8)",
      "(x + 2)(x + 3)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: x\u00b2 - 9",
    "options": [
      "(x - 3)(x + 3)",
      "(x - 9)(x + 1)",
      "(x + 9)(x - 1)",
      "(x - 2)(x + 4)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: x\u00b2 + 2x - 15",
    "options": [
      "(x + 5)(x - 3)",
      "(x - 5)(x + 3)",
      "(x + 1)(x - 15)",
      "(x + 2)(x - 8)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: 3x\u00b2 + 11x + 6",
    "options": [
      "(3x + 2)(x + 3)",
      "(3x + 1)(x + 6)",
      "(3x + 3)(x + 2)",
      "(3x + 6)(x + 1)",
      "None of these"
    ],
    "answer": 0
  },
  {
    "q": "Factorise: 4x\u00b2 - 4x - 15",
    "options": [
      "(2x + 3)(2x - 5)",
      "(2x - 3)(2x + 5)",
      "(2x + 1)(2x - 15)",
      "(4x - 5)(x + 3)",
      "None of these"
    ],
    "answer": 0
  }
];