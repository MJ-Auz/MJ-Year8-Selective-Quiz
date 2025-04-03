const questions = [
  {
    "q": "A bag contains 4 blue, 3 red and 3 green marbles. One marble is picked at random. What is the probability it is not green?",
    options: ["1/10", "3/10", "7/10", "9/10"],
    "answer": 2
  },
  {
    "q": "A number is chosen at random from the numbers 1 to 20. What is the probability that it is a multiple of 4?",
    options: ["1/5", "1/4", "1/3", "3/10"],
    "answer": 1
  },
  {
    "q": "A spinner has 8 equal sections labeled 1 to 8. What is the probability of landing on a number greater than 5?",
    options: ["1/2", "3/8", "5/8", "3/4"],
    "answer": 1
  },
  {
    "q": "A box contains 6 pens: 2 black, 2 blue, and 2 red. If you pick one pen at random, what is the probability that it is blue or red?",
    options: ["1/3", "2/3", "1/2", "5/6"],
    "answer": 1
  },
  {
    "q": "Two dice are rolled. What is the probability that the sum is exactly 7?",
    options: ["1/12", "1/8", "1/6", "1/9"],
    "answer": 2
  },
  {
    "q": "A drawer has 7 white socks and 5 black socks. One sock is picked at random. What is the probability it is black?",
    options: ["5/12", "7/12", "5/11", "1/2"],
    "answer": 0
  },
  {
    "q": "A coin is flipped twice. What is the probability of getting heads at least once?",
    options: ["1/4", "1/2", "3/4", "7/8"],
    "answer": 2
  },
  {
    "q": "A card is drawn at random from a standard deck of 52 cards. What is the probability that it is a queen?",
    options: ["1/13", "1/4", "1/12", "4/13"],
    "answer": 0
  },
  {
    "q": "A die is rolled. What is the probability of getting an odd number or a number greater than 4?",
    options: ["1/3", "2/3", "5/6", "1/2"],
    "answer": 1
  },
  {
    "q": "A spinner has 6 equal sections: 3 are green, 2 are yellow, and 1 is blue. What is the probability of not landing on yellow?",
    options: ["1/3", "2/3", "5/6", "1/6"],
    "answer": 1
  },
  {
    "q": "A jar contains 10 balls: 3 red, 4 blue, and 3 yellow. What is the probability of picking a red or yellow ball?",
    options: ["3/10", "6/10", "7/10", "4/10"],
    "answer": 2
  },
  {
    "q": "A dice is rolled once. What is the probability of getting a number less than 3?",
    options: ["1/2", "1/3", "2/3", "5/6"],
    "answer": 1
  },
  {
    "q": "A pack of 52 cards is shuffled. What is the probability of drawing a black card?",
    options: ["1/2", "1/4", "3/4", "2/3"],
    "answer": 0
  },
  {
    "q": "You flip 3 coins. What is the probability of getting at least 2 heads?",
    options: ["1/4", "1/2", "1/8", "1/2"],
    "answer": 1
  },
  {
    "q": "A bag has 5 black, 3 white, and 2 orange balls. What is the probability of picking a white or orange ball?",
    options: ["1/5", "1/2", "2/5", "3/5"],
    "answer": 3
  },
  {
    "q": "A box contains 6 orange and 2 white marbles. What is the probability of picking a orange marble?",
    options: ["5/8", "6/8", "2/8", "7/8"],
    "answer": 1
  },
  {
    "q": "A box contains 1 green and 9 red marbles. What is the probability of picking a green marble?",
    options: ["1/11", "1/10", "9/10", "2/10"],
    "answer": 1
  },
  {
    "q": "A box contains 4 black and 7 blue marbles. What is the probability of picking a black marble?",
    options: ["3/11", "4/11", "7/11", "5/11"],
    "answer": 1
  },
  {
    "q": "A box contains 6 black and 4 orange marbles. What is the probability of picking a black marble?",
    options: ["5/10", "6/10", "4/10", "7/10"],
    "answer": 1
  },
  {
    "q": "A box contains 5 white and 3 yellow marbles. What is the probability of picking a white marble?",
    options: ["4/8", "5/8", "3/8", "6/8"],
    "answer": 1
  },
  {
    "q": "A box contains 3 blue and 4 green marbles. What is the probability of picking a blue marble?",
    options: ["2/7", "3/7", "4/7", "4/7"],
    "answer": 1
  },
  {
    "q": "A box contains 9 white and 2 green marbles. What is the probability of picking a white marble?",
    options: ["8/11", "9/11", "2/11", "10/11"],
    "answer": 1
  },
  {
    "q": "A box contains 2 black and 8 blue marbles. What is the probability of picking a black marble?",
    options: ["1/10", "2/10", "8/10", "3/10"],
    "answer": 1
  },
  {
    "q": "A box contains 6 orange and 5 red marbles. What is the probability of picking a orange marble?",
    options: ["5/11", "6/11", "5/11", "7/11"],
    "answer": 1
  },
  {
    "q": "A box contains 6 red and 2 black marbles. What is the probability of picking a red marble?",
    options: ["5/8", "6/8", "2/8", "7/8"],
    "answer": 1
  },
  {
    "q": "A box contains 5 red and 4 black marbles. What is the probability of picking a red marble?",
    options: ["4/9", "5/9", "4/9", "6/9"],
    "answer": 1
  },
  {
    "q": "A box contains 3 blue and 6 orange marbles. What is the probability of picking a blue marble?",
    options: ["2/9", "3/9", "6/9", "4/9"],
    "answer": 1
  },
  {
    "q": "A box contains 2 blue and 7 white marbles. What is the probability of picking a blue marble?",
    options: ["1/9", "2/9", "7/9", "3/9"],
    "answer": 1
  },
  {
    "q": "A box contains 1 red and 8 yellow marbles. What is the probability of picking a red marble?",
    options: ["1/10", "1/9", "8/9", "2/9"],
    "answer": 1
  },
  {
    "q": "A box contains 5 red and 6 white marbles. What is the probability of picking a red marble?",
    options: ["4/11", "5/11", "6/11", "6/11"],
    "answer": 1
  },
  {
    "q": "A box contains 3 black and 6 white marbles. What is the probability of picking a black marble?",
    options: ["2/9", "3/9", "6/9", "4/9"],
    "answer": 1
  },
  {
    "q": "A box contains 5 orange and 7 yellow marbles. What is the probability of picking a orange marble?",
    options: ["4/12", "5/12", "7/12", "6/12"],
    "answer": 1
  },
  {
    "q": "A box contains 6 black and 4 green marbles. What is the probability of picking a black marble?",
    options: ["5/10", "6/10", "4/10", "7/10"],
    "answer": 1
  },
  {
    "q": "A box contains 3 yellow and 8 green marbles. What is the probability of picking a yellow marble?",
    options: ["2/11", "3/11", "8/11", "4/11"],
    "answer": 1
  },
  {
    "q": "A box contains 8 blue and 1 green marbles. What is the probability of picking a blue marble?",
    options: ["7/9", "8/9", "1/9", "1"],
    "answer": 1
  },
  {
    "q": "A bag contains 5 red, 3 green, and 2 blue marbles. Two marbles are drawn without replacement. What is the probability that both marbles are red?",
    options: ["1/9", "2/9", "2/15", "1/3"],
    "answer": 1
  },
  {
    "q": "You roll two fair six-sided dice. What is the probability that the numbers add up to a number greater than 9?",
    options: ["1/6", "1/4", "5/36", "7/36"],
    "answer": 1
  },
  {
    "q": "A card is drawn at random from a standard deck of 52 cards. What is the probability that it is a red face card?",
    options: ["1/13", "3/26", "2/13", "1/4"],
    "answer": 1
  },
  {
    "q": "A spinner is divided into 4 equal parts labelled 1, 2, 3, and 4. You spin it twice. What is the probability that the sum is exactly 5?",
    options: ["1/8", "1/4", "3/16", "1/2"],
    "answer": 0
  },
  {
    "q": "In a group of 5 boys and 4 girls, two students are selected at random. What is the probability that both are girls?",
    options: ["1/9", "2/9", "1/6", "1/3"],
    "answer": 0
  },
  {
    "q": "A bag has 6 red and 4 blue balls. Two balls are picked at random with replacement. What is the probability that both are blue?",
    options: ["1/10", "2/25", "4/25", "4/100"],
    "answer": 2
  },
  {
    "q": "Three coins are tossed. What is the probability that not all coins show the same face?",
    options: ["6/8", "3/4", "7/8", "1/2"],
    "answer": 2
  },
  {
    "q": "A number is selected at random from 1 to 50. What is the probability that the number is divisible by both 2 and 5?",
    options: ["1/5", "1/10", "1/4", "3/10"],
    "answer": 1
  },
  {
    "q": "A class has 12 students. What is the probability that a randomly selected student was born in January or February? (Assume equal distribution)",
    options: ["1/6", "1/3", "2/12", "1/2"],
    "answer": 0
  },
  {
    "q": "A drawer contains 3 black, 5 white and 2 grey socks. If two socks are picked at random without replacement, what is the probability that both are white?",
    options: ["2/5", "1/4", "2/9", "1/15"],
    "answer": 3
  },
];
