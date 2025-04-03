const questions = [
  {
    "q": "Solve for x: 3x + 7 = 19",
    options: ["3", "4", "5", "6"],
    "answer": 2
  },
  {
    "q": "Simplify: 2(a + 3) - 4a",
    options: ["-2a + 6", "-2a + 3", "-2a - 6", "2a + 6"],
    "answer": 0
  },
  {
    "q": "If 5x - 2 = 3x + 6, what is x?",
    options: ["2", "3", "4", "6"],
    "answer": 2
  },
  {
    "q": "Factorise: x^2 + 7x + 10",
    options: ["(x + 1)(x + 10)", "(x + 2)(x + 5)", "(x + 3)(x + 4)", "(x - 2)(x - 5)"],
    "answer": 1
  },
  {
    "q": "Expand: (x - 3)(x + 5)",
    options: ["x^2 + 2x - 15", "x^2 - 2x - 15", "x^2 + 8x + 15", "x^2 + 2x + 15"],
    "answer": 0
  },
  {
    "q": "Sam is 4 years older than twice his brother's age. If his brother is 6, how old is Sam?",
    options: ["14", "16", "12", "10"],
    "answer": 1
  },
  {
    "q": "A number is increased by 5 and the result is 3 times the original number. What is the number?",
    options: ["3", "5", "2.5", "2"],
    "answer": 2
  },
  {
    "q": "Jenny has $20 more than twice the amount Tom has. Together they have $80. How much does Tom have?",
    options: ["$15", "$20", "$25", "$30"],
    "answer": 1
  },
  {
    "q": "A father is three times as old as his son. In 5 years, he will be twice as old. How old is the son now?",
    options: ["5", "10", "15", "20"],
    "answer": 0
  },
  {
    "q": "The length of a rectangle is 3 times its width. If the perimeter is 64 cm, what is the width?",
    options: ["8 cm", "10 cm", "12 cm", "16 cm"],
    "answer": 0
  },
  {
    "q": "Solve for x: 2x - 5 = 19",
    options: ["11", "12", "13", "14"],
    "answer": 0
  },
  {
    "q": "Factorise: x^2 + 12x + 18",
    options: ["(x + 6)(x + 9)", "(x + 7)(x + 8)", "(x + 4)(x + 11)", "(x - 6)(x - 9)"],
    "answer": 0
  },
  {
    "q": "Expand: (x + 3)(x + 4)",
    options: ["x^2 + 7x + 12", "x^2 - 7x + 12", "x^2 + 7x - 12", "x^2 + 8x + 12"],
    "answer": 0
  },
  {
    "q": "A number is doubled and increased by 5. The result is 10. What is the number?",
    options: ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "q": "A rectangle has length 11 and width 5. What is its perimeter?",
    options: ["30", "31", "32", "33"],
    "answer": 2
  },
  {
    "q": "Solve for x: 2x - 5 = 29",
    options: ["16", "17", "18", "19"],
    "answer": 1
  },
  {
    "q": "Factorise: x^2 + 17x + 23",
    options: ["(x + 8)(x + 11)", "(x + 9)(x + 10)", "(x + 6)(x + 13)", "(x - 8)(x - 11)"],
    "answer": 0
  },
  {
    "q": "Expand: (x + 2)(x + 4)",
    options: ["x^2 + 6x + 8", "x^2 - 6x + 8", "x^2 + 6x - 8", "x^2 + 7x + 8"],
    "answer": 0
  },
  {
    "q": "A number is doubled and increased by 4. The result is 8. What is the number?",
    options: ["1", "2", "3", "4"],
    "answer": 1
  },
  {
    "q": "A rectangle has length 21 and width 10. What is its perimeter?",
    options: ["60", "61", "62", "63"],
    "answer": 2
  },
  {
    "q": "Solve for x: 2x - 5 = 39",
    options: ["21", "22", "23", "24"],
    "answer": 2
  },
  {
    "q": "Factorise: x^2 + 22x + 28",
    options: ["(x + 11)(x + 14)", "(x + 12)(x + 13)", "(x + 9)(x + 16)", "(x - 11)(x - 14)"],
    "answer": 0
  },
  {
    "q": "Expand: (x + 7)(x + 4)",
    options: ["x^2 + 11x + 28", "x^2 - 11x + 28", "x^2 + 11x - 28", "x^2 + 12x + 28"],
    "answer": 0
  },
  {
    "q": "A number is doubled and increased by 3. The result is 6. What is the number?",
    options: ["0", "1", "2", "3"],
    "answer": 1
  },
  {
    "q": "A rectangle has length 17 and width 8. What is its perimeter?",
    options: ["48", "49", "50", "51"],
    "answer": 2
  },
  {
    "q": "Solve for x: 2x - 5 = 49",
    options: ["26", "27", "28", "29"],
    "answer": 3
  },
  {
    "q": "Factorise: x^2 + 27x + 33",
    options: ["(x + 13)(x + 16)", "(x + 14)(x + 15)", "(x + 11)(x + 18)", "(x - 13)(x - 16)"],
    "answer": 0
  },
  {
    "q": "Expand: (x + 6)(x + 4)",
    options: ["x^2 + 10x + 24", "x^2 - 10x + 24", "x^2 + 10x - 24", "x^2 + 11x + 24"],
    "answer": 0
  },
  {
    "q": "A number is doubled and increased by 8. The result is 16. What is the number?",
    options: ["3", "4", "5", "6"],
    "answer": 1
  },
  {
    "q": "A rectangle has length 13 and width 6. What is its perimeter?",
    options: ["36", "37", "38", "39"],
    "answer": 2
  },
  {
    "q": "Solve for x: 2x - 5 = 59",
    options: ["31", "32", "33", "34"],
    "answer": 0
  },
  {
    "q": "Factorise: x^2 + 32x + 38",
    options: ["(x + 16)(x + 19)", "(x + 17)(x + 18)", "(x + 14)(x + 21)", "(x - 16)(x - 19)"],
    "answer": 0
  },
  {
    "q": "Expand: (x + 5)(x + 4)",
    options: ["x^2 + 9x + 20", "x^2 - 9x + 20", "x^2 + 9x - 20", "x^2 + 10x + 20"],
    "answer": 0
  },
  {
    "q": "A number is doubled and increased by 7. The result is 14. What is the number?",
    options: ["2", "3", "4", "5"],
    "answer": 1
  },
  {
    "q": "A rectangle has length 9 and width 4. What is its perimeter?",
    options: ["24", "25", "26", "27"],
    "answer": 2
  },
  {
    "q": "If 2x + 3 = x^2, what are the possible values of x?",
    options: ["1 and 3", "-1 and 3", "-3 and 1", "2 and -2"],
    "answer": 1
  },
  {
    "q": "Solve for x: x^2 - 5x + 6 = 0",
    options: ["2 and 3", "1 and 6", "3 and 4", "1 and 5"],
    "answer": 0
  },
  {
    "q": "A rectangular garden has a length of (2x + 3) m and width of (x - 2) m. Express its area in terms of x.",
    options: ["2x^2 - x - 6", "2x^2 - x - 5", "2x^2 - x - 4", "2x^2 + x - 6"],
    "answer": 0
  },
  {
    "q": "If a = 3 and b = -2, what is the value of a^2 + 2ab + b^2?",
    options: ["1", "0", "25", "49"],
    "answer": 2
  },
  {
    "q": "Solve: 3(x - 2) = 2(x + 4)",
    options: ["x = 10", "x = 6", "x = 2", "x = -2"],
    "answer": 1
  },
  {
    "q": "If 4x - 7 = 2x + 5, what is x?",
    options: ["6", "5", "4", "3"],
    "answer": 3
  },
  {
    "q": "Expand and simplify: (x + 2)^2",
    options: ["x^2 + 2x + 4", "x^2 + 4x + 4", "x^2 + 3x + 2", "x^2 + 5x + 6"],
    "answer": 1
  },
  {
    "q": "Solve: 2(x + 5) = 3(x - 1)",
    options: ["x = 13", "x = 10", "x = 11", "x = 9"],
    "answer": 3
  },
  {
    "q": "What is the solution to x^2 = 49?",
    options: ["x = 7", "x = -7", "x = ±7", "x = 0"],
    "answer": 2
  },
  {
    "q": "If y = 3x + 2 and y = 5, what is x?",
    options: ["1", "2", "0", "-1"],
    "answer": 0
  },
];