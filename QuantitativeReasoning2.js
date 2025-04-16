const questions = [
  {
    "q": "A jacket originally costs $120. The price was increased by 25% and then decreased by 20%. What is the final price?",
    "options": [
      "$108",
      "$112",
      "$114",
      "$120"
    ],
    "answer": 3
  },
  {
    "q": "What is 30% of 60% of 400?",
    "options": [
      "60",
      "72",
      "80",
      "90"
    ],
    "answer": 1
  },
  {
    "q": "Which is the largest of the following?",
    "options": [
      "5/8",
      "3/5",
      "7/12",
      "2/3"
    ],
    "answer": 3
  },
  {
    "q": "If 3/4 of a number is 54, what is the number?",
    "options": [
      "60",
      "64",
      "70",
      "72"
    ],
    "answer": 3
  },
  {
    "q": "Which of the following is equal to 0.875?",
    "options": [
      "7/8",
      "5/6",
      "3/4",
      "9/10"
    ],
    "answer": 0
  },
  {
    "q": "After a 15% discount, the final price of a laptop is $680. What was the original price?",
    "options": [
      "$780",
      "$800",
      "$805",
      "$820"
    ],
    "answer": 1
  },
  {
    "q": "A stock\u2019s value increased from $80 to $100. What was the percentage increase?",
    "options": [
      "20%",
      "22%",
      "25%",
      "30%"
    ],
    "answer": 2
  },
  {
    "q": "A container is 3/5 full. If 12 litres are added, it becomes full. What is the total capacity?",
    "options": [
      "18 L",
      "20 L",
      "25 L",
      "30 L"
    ],
    "answer": 2
  },
  {
    "q": "The value of a car depreciates by 30% and is now worth $14,000. What was its original value?",
    "options": [
      "$18,000",
      "$19,000",
      "$20,000",
      "$21,000"
    ],
    "answer": 2
  },
  {
    "q": "What is the value of:\n(1.5 \u00d7 0.4) + (0.25 \u00f7 0.05)",
    "options": [
      "5.5",
      "5.6",
      "5.75",
      "6.0"
    ],
    "answer": 1
  },
  {
    "q": "3/8 of the students in a class are girls. If there are 24 girls, how many students are in the class?",
    "options": [
      "56",
      "60",
      "64",
      "72"
    ],
    "answer": 3
  },
  {
    "q": "What is the value of:\n(3/4 of 2/5) \u00f7 (1/2 of 4/5)",
    "options": [
      "3/4",
      "1",
      "5/6",
      "6/5"
    ],
    "answer": 0
  },
  {
    "q": "If a value is increased by 10% and then again by 10%, what is the overall percentage increase?",
    "options": [
      "20%",
      "21%",
      "22%",
      "25%"
    ],
    "answer": 1
  },
  {
    "q": "Which of the following is closest to 12.5%?",
    "options": [
      "1/10",
      "1/6",
      "1/8",
      "1/5"
    ],
    "answer": 2
  },
  {
    "q": "A recipe uses 2/3 cup of sugar for 12 cookies. How much sugar is needed for 30 cookies?",
    "options": [
      "1 cup",
      "1 1/2 cups",
      "1 3/4 cups",
      "2 cups"
    ],
    "answer": 1
  },
  {
    "q": "Simplify the ratio 18:24.",
    "options": [
      "3:4",
      "2:3",
      "4:3",
      "6:7"
    ],
    "answer": 0
  },
  {
    "q": "Divide $60 in the ratio 2:3.",
    "options": [
      "$20 and $40",
      "$24 and $36",
      "$30 and $30",
      "$24 and $36"
    ],
    "answer": 1
  },
  {
    "q": "If the ratio of red to blue balls is 5:3 and there are 40 balls in total, how many are red?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": 1
  },
  {
    "q": "The cost of pencils to erasers is in the ratio 4:1. If an eraser costs $1.20, what is the cost of a pencil?",
    "options": [
      "$4.80",
      "$3.60",
      "$4.20",
      "$2.40"
    ],
    "answer": 0
  },
  {
    "q": "A drink is made by mixing water and juice in the ratio 3:2. How much juice is needed to make 25 litres of drink?",
    "options": [
      "10 L",
      "12 L",
      "15 L",
      "18 L"
    ],
    "answer": 0
  },
  {
    "q": "A mixture contains rice and lentils in the ratio 5:3. If there are 20 kg of rice, how much lentils are needed to maintain the ratio?",
    "options": [
      "8 kg",
      "10 kg",
      "12 kg",
      "15 kg"
    ],
    "answer": 2
  },
  {
    "q": "A recipe uses ingredients in the ratio 2:3:5. If the smallest ingredient is 100 grams, what is the total weight?",
    "options": [
      "800 g",
      "500 g",
      "1,000 g",
      "600 g"
    ],
    "answer": 1
  },
  {
    "q": "In a class, the ratio of boys to girls is 5:4. If there are 36 students in total, how many girls are there?",
    "options": [
      "16",
      "18",
      "20",
      "24"
    ],
    "answer": 0
  },
  {
    "q": "A map scale is 1:250,000. How many kilometers does 4 cm represent?",
    "options": [
      "10 km",
      "25 km",
      "100 km",
      "1,000 km"
    ],
    "answer": 0
  },
  {
    "q": "If A:B = 2:3 and B:C = 4:5, what is the ratio A:C?",
    "options": [
      "8:15",
      "2:5",
      "4:9",
      "5:8"
    ],
    "answer": 0
  },
  {
    "q": "The sides of a triangle are in the ratio 3:4:5. If the perimeter is 48 cm, what is the length of the longest side?",
    "options": [
      "18 cm",
      "20 cm",
      "24 cm",
      "30 cm"
    ],
    "answer": 1
  },
  {
    "q": "The ratio of apples to oranges is 5:2. If there are 140 fruits, how many are oranges?",
    "options": [
      "20",
      "30",
      "40",
      "50"
    ],
    "answer": 2
  },
  {
    "q": "A mixture contains water and syrup in a 4:1 ratio. If 3 litres of water are added, the new ratio becomes 7:2. How much syrup was in the original mixture?",
    "options": [
      "2 L",
      "3 L",
      "4 L",
      "5 L"
    ],
    "answer": 1
  },
  {
    "q": "Two numbers are in the ratio 7:9. If their difference is 10, what are the numbers?",
    "options": [
      "35 and 45",
      "28 and 36",
      "30 and 40",
      "70 and 80"
    ],
    "answer": 0
  },
  {
    "q": "The angles of a triangle are in the ratio 2:3:4. What is the size of the largest angle?",
    "options": [
      "60\u00b0",
      "80\u00b0",
      "100\u00b0",
      "120\u00b0"
    ],
    "answer": 1
  },
  {
    "q": "What is the probability of getting heads in a single toss of a fair coin?",
    "options": [
      "0",
      "0.25",
      "0.5",
      "1"
    ],
    "answer": 2
  },
  {
    "q": "What is the probability of rolling a number greater than 4 on a regular 6-sided die?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "answer": 1
  },
  {
    "q": "What is the probability of drawing a heart from a standard deck of 52 cards?",
    "options": [
      "1/4",
      "1/2",
      "1/13",
      "1/3"
    ],
    "answer": 0
  },
  {
    "q": "A bag contains 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a red?",
    "options": [
      "1/10",
      "3/10",
      "1/3",
      "3/5"
    ],
    "answer": 1
  },
  {
    "q": "If a coin is tossed and a 6-sided die is rolled, what is the probability of getting heads and a 3?",
    "options": [
      "1/12",
      "1/6",
      "1/2",
      "1/3"
    ],
    "answer": 0
  },
  {
    "q": "A spinner has 8 equal sections numbered 1\u20138. What is the probability of landing on an even number?",
    "options": [
      "1/8",
      "1/2",
      "3/8",
      "2/3"
    ],
    "answer": 1
  },
  {
    "q": "How many different 3-letter arrangements can be made from the word \"CAT\"?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "answer": 1
  },
  {
    "q": "A drawer contains 2 red, 3 blue, and 1 black sock. If two socks are pulled out at random, what is the probability both are blue?",
    "options": [
      "1/15",
      "1/10",
      "1/5",
      "1/3"
    ],
    "answer": 0
  },
  {
    "q": "What is the probability of rolling two dice and getting a sum of 9?",
    "options": [
      "1/9",
      "1/8",
      "1/12",
      "1/6"
    ],
    "answer": 0
  },
  {
    "q": "The probability of raining tomorrow is 0.3. What is the probability it will not rain?",
    "options": [
      "0.5",
      "0.6",
      "0.7",
      "0.8"
    ],
    "answer": 2
  },
  {
    "q": "A bag contains 4 red, 5 blue, and 6 green marbles. What is the probability of drawing a red or green marble?",
    "options": [
      "4/15",
      "5/15",
      "10/15",
      "2/3"
    ],
    "answer": 3
  },
  {
    "q": "How many ways can 4 boys and 3 girls be seated in a row if all girls sit together?",
    "options": [
      "720",
      "1,440",
      "1,080",
      "1,200"
    ],
    "answer": 0
  },
  {
    "q": "A die is rolled. If the number is even, a coin is tossed. What is the probability of getting an even number and heads?",
    "options": [
      "1/6",
      "1/12",
      "1/4",
      "1/3"
    ],
    "answer": 2
  },
  {
    "q": "How many 4-digit codes can be made from digits 0\u20139 if digits can be repeated but the code must begin with a non-zero digit?",
    "options": [
      "9,000",
      "10,000",
      "9,999",
      "8,100"
    ],
    "answer": 0
  },
  {
    "q": "A bag contains 2 red and 3 blue balls. One is picked, color is noted, and replaced. What is the probability of picking a red ball twice?",
    "options": [
      "4/25",
      "2/5",
      "1/4",
      "4/9"
    ],
    "answer": 0
  }
];