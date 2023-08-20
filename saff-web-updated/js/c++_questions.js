// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is the correct syntax of including a user defined header files in C++?",
    answer: "#include “userdefined”",
    options: [
      "#include [userdefined]",
      "#include “userdefined”",
      "#include <userdefined.h>",
      "#include <userdefined>"
    ]
  },

  {
    numb: 2,
    question:"Which of the following is used for comments in C++?",
    answer: "both // comment or /* comment */",
    options: [
        "/* comment */",
        "// comment */",
        "// comment",
        "both // comment or /* comment */"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is a correct identifier in C++?",
    answer: "VAR_1234",
    options: [
      "VAR_1234",
      "$var_name",
      "7VARNAME",
      "7var_name"
    ]
  },
    {
    numb: 4,
    question: "Which of the following is not a type of Constructor in C++?",
    answer: "Friend constructor",
    options: [
      "Default constructor",
      "Parameterized constructor",
      "Copy constructor",
      "Friend constructor"
    ]
  },
    {
    numb: 5,
    question: "Which of the following approach is used by C++?",
    answer: "Bottom-up",
    options: [
      "Left-right",
      "Right-Left",
      "Bottom-up",
      "up-Bottom"
    ]
  },
    {
    numb: 6,
    question: "What is virtual inheritance in C++?",
    answer: "C++ technique to avoid multiple copies of the base class into children/derived class",
    options: [
      " C++ technique to enhance multiple inheritance",
      "C++ technique to ensure that a private member of the base class can be accessed somehow",
      "C++ technique to avoid multiple inheritances of classes",
      "C++ technique to avoid multiple copies of the base class into children/derived class"
    ]
  },
    {
    numb: 7,
    question: " What happens if the following C++ statement is compiled and executed int *ptr = NULL; delete ptr;?",
    answer: "The program is compiled and executed successfully",
    options: [
      "The program is not semantically correct",
      "The program is compiled and executed successfully",
      "The program gives a compile-time error",
      "The program compiled successfully but throws an error during run-time"
    ]
  },

  {
    numb: 8,
    question: "Which of the following type is provided by C++ but not C?",
    answer: "bool",
    options: [
      "double",
      "float",
      "int",
      "bool"
    ]
  },

  {
    numb: 9,
    question: "By default, all the files in C++ are opened in _________ mode.?",
    answer: "Text",
    options: [
      "Binary",
      "VTC",
      "Text",
      "ISCII"
    ]
  },

  {
    numb: 10,
    question: "Which of the following correctly declares an array in C++?",
    answer: "int array[10];",
    options: [
      "array{10};",
      "array array[10];",
      "int array;",
      "int array[10];"
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