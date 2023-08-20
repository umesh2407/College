// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who is the father of C language?",
    answer: "Dennis Ritchie",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf"
    ]
  },

  {
    numb: 2,
    question:"Which of the following is not a valid C variable name?",
    answer: "int $main;",
    options: [
        "int number;",
        "float rate;",
        "int variable_count;",
        "int $main;"
    ]
  },
    {
    numb: 3,
    question: "All keywords in C are in ____________?",
    answer: "LowerCase letters",
    options: [
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the Above"
    ]
  },
    {
    numb: 4,
    question: "Which is valid C expression?",
    answer: "int my_num = 100000;",
    options: [
      "int my_num = 100,000;",
      "int my_num = 100000;",
      "int my num = 1000;",
      "int $my_num = 10000;"
    ]
  },
    {
    numb: 5,
    question: "Which of the following cannot be a variable name in C?",
    answer: "volatile",
    options: [
      "volatile",
      "true",
      "friend",
      "export"
    ]
  },
    {
    numb: 6,
    question: "Which of the following declaration is not supported by C language?",
    answer: "String str;",
    options: [
      "String str;",
      "char *str;",
      "float str = 3e2;",
      "Both “String str;” and “float str = 3e2;”"
    ]
  },
    {
    numb: 7,
    question: "Which keyword is used to prevent any changes in the variable within a C program?",
    answer: "const",
    options: [
      "immutable",
      "mutable",
      "const",
      "volatile"
    ]
  },

  {
    numb: 8,
    question: "What is the result of logical or relational expression in C?",
    answer: " 0 or 1",
    options: [
      "True or False",
      " 0 or 1",
      "0 if an expression is false and any positive number if an expression is true",
      "None of the Above"
    ]
  },

  {
    numb: 9,
    question: " Functions can return enumeration constants in C?",
    answer: "true",
    options: [
      "true",
      "false",
      "depends on the compiler",
      "depends on the standard"
    ]
  },

  {
    numb: 10,
    question: "Which of following is not accepted in C?",
    answer: "static static int a; //a static variable prefixed with static",
    options: [
      "static a = 10; //static as",
      "static int func (int); //parameter as static",
      "static static int a; //a static variable prefixed with static",
      "All of the Above"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];