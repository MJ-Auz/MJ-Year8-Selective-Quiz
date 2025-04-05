const questions = [
  {
    "q": "Calculate the monthly repayment for a $100000 loan at 4% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["986.39", "984.86", "888.89", "1030.89"],
    "answer": 2
  },
  {
    "q": "Calculate the interest earned on $20000 at 3% per annum for 1 month(s).",
    options: ["45.51", "50.0", "49.54", "59.12"],
    "answer": 1
  },
  {
    "q": "Calculate the monthly repayment for a $100000 loan at 3% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["837.21", "646.03", "805.56", "724.81"],
    "answer": 2
  },
  {
    "q": "Calculate the interest earned on $20000 at 3% per annum for 1 month(s).",
    options: ["56.05", "50.0", "42.42", "56.51"],
    "answer": 1
  },
  {
    "q": "Calculate the interest earned on $10000 at 3% per annum for 1 month(s).",
    options: ["27.04", "20.99", "25.0", "29.31"],
    "answer": 2
  },
  {
    "q": "A loan of $25000 is taken at 3.5% per annum for 10 years. How much total interest is paid?",
    options: ["9109.58", "8750.0", "7421.01", "8240.85"],
    "answer": 1
  },
  {
    "q": "Calculate the interest earned on $10000 at 4% per annum for 6 month(s).",
    options: ["222.19", "235.0", "207.13", "200.0"],
    "answer": 3
  },
  {
    "q": "A loan of $25000 is taken at 4.0% per annum for 10 years. How much total interest is paid?",
    options: ["11304.88", "9402.96", "10000.0", "11272.25"],
    "answer": 2
  },
  {
    "q": "A loan of $20000 is taken at 4.5% per annum for 5 years. How much total interest is paid?",
    options: ["4622.69", "5317.76", "4500.0", "5014.71"],
    "answer": 2
  },
  {
    "q": "Calculate the interest earned on $20000 at 4% per annum for 3 month(s).",
    options: ["200.0", "202.0", "162.87", "187.04"],
    "answer": 0
  },
  {
    "q": "Calculate the interest earned on $10000 at 3% per annum for 6 month(s).",
    options: ["125.51", "133.63", "150.0", "132.03"],
    "answer": 2
  },
  {
    "q": "Calculate the simple interest on $1500 for 3 years at 3% per annum.",
    options: ["113.33", "146.59", "130.99", "135.0"],
    "answer": 3
  },
  {
    "q": "Calculate the monthly repayment for a $120000 loan at 4% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["1066.67", "1225.95", "941.49", "971.08"],
    "answer": 0
  },
  {
    "q": "Calculate the monthly repayment for a $120000 loan at 3% per annum over 25 years (interest calculated annually then divided by 12).",
    options: ["672.65", "780.21", "745.21", "700.0"],
    "answer": 3
  },
  {
    "q": "Calculate the interest earned on $10000 at 3% per annum for 3 month(s).",
    options: ["87.89", "75.0", "82.25", "79.74"],
    "answer": 1
  },
  {
    "q": "A loan of $25000 is taken at 4.0% per annum for 10 years. How much total interest is paid?",
    options: ["11590.06", "11058.74", "11777.11", "10000.0"],
    "answer": 3
  },
  {
    "q": "Calculate the simple interest on $1000 for 1 years at 6% per annum.",
    options: ["60.0", "63.66", "64.59", "50.65"],
    "answer": 0
  },
  {
    "q": "Calculate the monthly repayment for a $150000 loan at 3% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["1117.25", "1329.62", "1118.24", "1208.33"],
    "answer": 3
  },
  {
    "q": "What is the compound interest on $15000 at 5% per annum for 3 years?",
    options: ["2777.17", "2364.38", "2023.33", "2682.31"],
    "answer": 1
  },
  {
    "q": "A loan of $25000 is taken at 4.5% per annum for 5 years. How much total interest is paid?",
    options: ["6442.35", "6373.25", "5625.0", "6372.3"],
    "answer": 2
  },
  {
    "q": "A loan of $30000 is taken at 4.5% per annum for 10 years. How much total interest is paid?",
    options: ["13978.53", "13239.37", "13500.0", "12208.61"],
    "answer": 2
  },
  {
    "q": "Calculate the monthly repayment for a $150000 loan at 3% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["1395.15", "1208.33", "1036.51", "1362.44"],
    "answer": 1
  },
  {
    "q": "Calculate the interest earned on $20000 at 3% per annum for 6 month(s).",
    options: ["300.0", "289.37", "349.62", "269.41"],
    "answer": 0
  },
  {
    "q": "Calculate the interest earned on $10000 at 3% per annum for 6 month(s).",
    options: ["150.0", "170.46", "121.08", "168.09"],
    "answer": 0
  },
  {
    "q": "Calculate the monthly repayment for a $100000 loan at 4% per annum over 20 years (interest calculated annually then divided by 12).",
    options: ["750.0", "779.38", "685.79", "854.27"],
    "answer": 0
  },
  {
    "q": "Calculate the monthly repayment for a $150000 loan at 4% per annum over 25 years (interest calculated annually then divided by 12).",
    options: ["907.9", "1000.0", "887.57", "907.81"],
    "answer": 1
  },
  {
    "q": "Calculate the monthly repayment for a $150000 loan at 3% per annum over 15 years (interest calculated annually then divided by 12).",
    options: ["1053.45", "1208.33", "1219.49", "1387.5"],
    "answer": 1
  },
  {
    "q": "A loan of $20000 is taken at 4.5% per annum for 10 years. How much total interest is paid?",
    options: ["8606.12", "9000.0", "9128.62", "8307.87"],
    "answer": 1
  },
  {
    "q": "Calculate the monthly repayment for a $150000 loan at 4% per annum over 25 years (interest calculated annually then divided by 12).",
    options: ["973.53", "997.71", "1000.0", "1187.23"],
    "answer": 2
  },
  {
    "q": "Calculate the monthly repayment for a $120000 loan at 3% per annum over 25 years (interest calculated annually then divided by 12).",
    options: ["635.92", "780.48", "700.0", "766.54"],
    "answer": 2
  },
  {
    "q": "Calculate the simple interest on $1500 for 2 years at 6% per annum.",
    options: ["180.58", "199.34", "176.63", "180.0"],
    "answer": 3
  },
  {
    "q": "Calculate the interest earned on $10000 at 4% per annum for 1 month(s).",
    options: ["29.98", "30.91", "33.33", "33.37"],
    "answer": 2
  },
  {
    "q": "A loan of $20000 is taken at 4.0% per annum for 5 years. How much total interest is paid?",
    options: ["4425.99", "4000.0", "3321.49", "4637.22"],
    "answer": 1
  },
  {
    "q": "Calculate the simple interest on $1500 for 1 years at 6% per annum.",
    options: ["86.19", "96.74", "90.0", "85.23"],
    "answer": 2
  },
  {
    "q": "Calculate the simple interest on $1500 for 2 years at 3% per annum.",
    options: ["90.0", "92.41", "95.88", "105.86"],
    "answer": 0
  },
  {
    "q": "What is the compound interest on $10000 at 5.1% compounded 2 times per year for 4 years?",
    options: ["2265.15", "2512.97", "2065.45", "2231.66"],
    "answer": 3
  },
  {
    "q": "What is the effective annual interest rate (to 2 decimal places) if the nominal interest rate is 6% compounded quarterly?",
    options: ["6.37", "7.19", "6.14", "5.27"],
    "answer": 2
  },
  {
    "q": "What is the compound interest on $20000 at 4.5% per annum compounded annually for 2.5 years?",
    options: ["2326.5", "2173.2", "1997.34", "2137.3"],
    "answer": 0
  },
  {
    "q": "What is the compound interest on $20000 at 5.1% compounded 2 times per year for 3 years?",
    options: ["3707.74", "3261.84", "2922.18", "2886.39"],
    "answer": 1
  },
  {
    "q": "What is the compound interest on $20000 at 4.5% per annum compounded annually for 2.5 years?",
    options: ["2326.5", "2496.27", "2570.88", "2329.46"],
    "answer": 0
  },
  {
    "q": "What is the effective annual interest rate (to 2 decimal places) if the nominal interest rate is 6% compounded quarterly?",
    options: ["7.25", "6.93", "6.14", "6.1"],
    "answer": 2
  },
  {
    "q": "What is the compound interest on $10000 at 4.2% compounded 4 times per year for 5 years?",
    options: ["2105.99", "2323.28", "2425.92", "2025.05"],
    "answer": 1
  },
  {
    "q": "What is the compound interest on $20000 at 4.5% per annum compounded annually for 2.5 years?",
    options: ["2164.46", "2326.5", "2632.07", "2440.19"],
    "answer": 1
  },
  {
    "q": "What is the effective annual interest rate (to 2 decimal places) if the nominal interest rate is 6% compounded quarterly?",
    options: ["6.86", "6.78", "6.14", "6.88"],
    "answer": 2
  },
  {
    "q": "What is the compound interest on $20000 at 4.5% per annum compounded annually for 2.5 years?",
    options: ["1938.1", "2326.5", "1917.28", "1985.66"],
    "answer": 1
  },
];
