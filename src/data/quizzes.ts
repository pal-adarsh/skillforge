export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // in minutes
  questions: QuizQuestion[];
}

export const quizQuestions: QuizQuestion[] = [
  // HTML Questions
  {
    id: "html-1",
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hypertext Machine Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for Hypertext Markup Language. It's the standard markup language for creating web pages.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["html"]
  },
  {
    id: "html-2",
    question: "Which HTML element is used for the largest heading?",
    options: ["<header>", "<h1>", "<h6>", "<head>"],
    correctAnswer: 1,
    explanation: "The <h1> element represents the largest heading in HTML. Headings range from <h1> (largest) to <h6> (smallest).",
    category: "coding",
    difficulty: "Beginner",
    tags: ["html",]
  },
  {
    id: "html-3",
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correctAnswer: 0,
    explanation: "The <br> element produces a line break in text. It's a void element, so it doesn't need a closing tag.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["html"]
  },
  {
    id: "html-4",
    question: "Which attribute specifies the URL of the page the link goes to?",
    options: ["src", "href", "link", "url"],
    correctAnswer: 1,
    explanation: "The href attribute specifies the URL of the page the link goes to in an <a> element.",
    category: "coding",
    difficulty: "Beginner",
    tags: ["html"]
  },
  {
    id: "html-5",
    question: "What is the purpose of the alt attribute in an img tag?",
    options: [
      "To specify the image width",
      "To provide alternative text for screen readers",
      "To set the image alignment",
      "To define the image border"
    ],
    correctAnswer: 1,
    explanation: "The alt attribute provides alternative text for images, which is crucial for accessibility and SEO.",
    category: "coding",
    difficulty: "Intermediate",
    tags: ["html"]
  },
  {
  id: "html-6",
  question: "Which HTML element is used to define an unordered list?",
  options: ["<ul>", "<ol>", "<li>", "<list>"],
  correctAnswer: 0,
  explanation: "The <ul> element is used to define an unordered (bulleted) list. <ol> is for ordered lists, and <li> represents list items.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["html"]
},
{
  id: "html-7",
  question: "Which HTML element is used to display tabular data?",
  options: ["<table>", "<grid>", "<tab>", "<td>"],
  correctAnswer: 0,
  explanation: "The <table> element is used to represent tabular data. Inside it, <tr> defines a row, <th> defines a header cell, and <td> defines a data cell.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["html"]
},
{
  id: "html-8",
  question: "What does the <!DOCTYPE html> declaration do?",
  options: [
    "Defines the title of the document",
    "Specifies the HTML version being used",
    "Links CSS to the page",
    "Starts the head section"
  ],
  correctAnswer: 1,
  explanation: "<!DOCTYPE html> is a declaration that defines the document type and version of HTML. In modern HTML5, it ensures the browser renders in standards mode.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-9",
  question: "Which attribute is used to open a link in a new tab?",
  options: ["new", "blank", "target", "href"],
  correctAnswer: 2,
  explanation: "The target attribute in <a> can be set to '_blank' to open the link in a new browser tab.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-10",
  question: "Which HTML element is used to embed a video?",
  options: ["<media>", "<video>", "<movie>", "<embed>"],
  correctAnswer: 1,
  explanation: "The <video> element is used to embed video content. It supports attributes like controls, autoplay, loop, and muted.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-11",
  question: "Which input type in HTML is used for selecting a date?",
  options: ["text", "date", "datetime", "calendar"],
  correctAnswer: 1,
  explanation: "<input type='date'> creates a date picker control in modern browsers.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-12",
  question: "Which HTML element is used to add a description list?",
  options: ["<dl>", "<dd>", "<dt>", "All of the above"],
  correctAnswer: 3,
  explanation: "A description list uses <dl>. Inside it, <dt> defines the term and <dd> defines its description. All three elements are required.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-13",
  question: "Which global HTML attribute is used to uniquely identify an element?",
  options: ["class", "id", "name", "unique"],
  correctAnswer: 1,
  explanation: "The id attribute uniquely identifies an HTML element. Classes can be shared by multiple elements, but IDs must be unique.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["html"]
},
{
  id: "html-14",
  question: "Which HTML5 element is used to define navigation links?",
  options: ["<menu>", "<nav>", "<header>", "<link>"],
  correctAnswer: 1,
  explanation: "The <nav> element is a semantic element introduced in HTML5 to define a block of navigation links.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},
{
  id: "html-15",
  question: "Which attribute in forms ensures that a field must be filled out?",
  options: ["validate", "mandatory", "required", "must"],
  correctAnswer: 2,
  explanation: "The required attribute in form inputs makes the field mandatory before submission.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["html"]
},

 // CSS Questions
{
  id: "css-1",
  question: "What does CSS stand for?",
  options: [
    "Creative Style Sheets",
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Colorful Style Sheets"
  ],
  correctAnswer: 1,
  explanation: "CSS stands for Cascading Style Sheets. It describes how HTML elements are displayed on screen, paper, or other media.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-2",
  question: "Which CSS property is used to change the text color of an element?",
  options: ["text-color", "font-color", "color", "text-style"],
  correctAnswer: 2,
  explanation: "The 'color' property is used to set the color of text in CSS.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-3",
  question: "How do you select an element with id 'myId' in CSS?",
  options: [".myId", "#myId", "*myId", "myId"],
  correctAnswer: 1,
  explanation: "In CSS, you use the hash symbol (#) to select elements by their ID attribute.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-4",
  question: "Which CSS property controls the space between elements?",
  options: ["padding", "margin", "spacing", "gap"],
  correctAnswer: 1,
  explanation: "The margin property controls the space outside an element's border, creating space between elements.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-5",
  question: "What is the default value of the position property in CSS?",
  options: ["relative", "absolute", "static", "fixed"],
  correctAnswer: 2,
  explanation: "The default value of the position property is 'static', which means the element follows the normal document flow.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-6",
  question: "Which CSS property is used to change the background color?",
  options: ["bgcolor", "background", "background-color", "color"],
  correctAnswer: 2,
  explanation: "The background-color property is used to set the background color of an element.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-7",
  question: "How do you make text bold in CSS?",
  options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "style: bold;"],
  correctAnswer: 0,
  explanation: "The font-weight property controls the boldness of text. Setting it to 'bold' makes text bold.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-8",
  question: "Which CSS property is used to set the space between lines of text?",
  options: ["text-spacing", "line-height", "letter-spacing", "word-spacing"],
  correctAnswer: 1,
  explanation: "The line-height property sets the space between lines of text within an element.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-9",
  question: "Which CSS selector is used to select all elements of a specific type?",
  options: ["#", ".", "element", "*"],
  correctAnswer: 2,
  explanation: "In CSS, writing the element name (e.g., p, div) selects all elements of that type.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-10",
  question: "What is the difference between relative and absolute positioning?",
  options: [
    "Relative is fixed to viewport, absolute moves with content",
    "Relative is based on its normal position, absolute is based on nearest positioned ancestor",
    "Relative and absolute mean the same",
    "Absolute is always at the top-left corner"
  ],
  correctAnswer: 1,
  explanation: "Relative positioning offsets the element from its normal position. Absolute positioning is based on the nearest positioned ancestor.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-11",
  question: "Which CSS property is used to control the size of text?",
  options: ["font-style", "font-size", "text-size", "size"],
  correctAnswer: 1,
  explanation: "The font-size property is used to control the size of text.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-12",
  question: "Which CSS property is used to create rounded corners?",
  options: ["corner-radius", "border-round", "border-radius", "round-corner"],
  correctAnswer: 2,
  explanation: "The border-radius property creates rounded corners on elements.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["css"]
},
{
  id: "css-13",
  question: "Which CSS property is used to change the type of cursor displayed?",
  options: ["mouse", "pointer", "cursor", "cursor-style"],
  correctAnswer: 2,
  explanation: "The cursor property is used to specify the type of cursor to be displayed when pointing over an element.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-14",
  question: "What is the difference between inline, block, and inline-block elements in CSS?",
  options: [
    "Inline takes full width, block takes content width, inline-block is unused",
    "Block takes full width, inline only takes content width, inline-block behaves like inline but supports block properties",
    "Inline and block are the same, inline-block is different",
    "Only block supports height and width"
  ],
  correctAnswer: 1,
  explanation: "Block elements take full width, inline elements take only necessary width, and inline-block behaves like inline but supports height/width.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-15",
  question: "Which CSS property is used to control the stacking order of elements?",
  options: ["stack", "z-index", "layer", "position"],
  correctAnswer: 1,
  explanation: "The z-index property specifies the stack order of elements, with higher values appearing above lower ones.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-16",
  question: "Which CSS unit is relative to the root element’s font size?",
  options: ["em", "px", "rem", "%"],
  correctAnswer: 2,
  explanation: "The rem unit is relative to the root element’s font size, while em is relative to the parent element.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["css"]
},
{
  id: "css-17",
  question: "What does the 'inherit' value do in CSS?",
  options: [
    "Sets the property to default",
    "Removes the property",
    "Inherits the value from the parent element",
    "Makes the property null"
  ],
  correctAnswer: 2,
  explanation: "The 'inherit' value makes the property take the same value as its parent element.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-18",
  question: "Which CSS function is used to apply multiple background images?",
  options: ["multi-bg()", "background-image()", "url()", "background"],
  correctAnswer: 3,
  explanation: "The background property can accept multiple images separated by commas.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["css"]
},
{
  id: "css-19",
  question: "Which CSS property is used to add shadow to text?",
  options: ["font-shadow", "text-style", "text-shadow", "shadow"],
  correctAnswer: 2,
  explanation: "The text-shadow property adds shadow effects to text.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["css"]
},
{
  id: "css-20",
  question: "Which CSS property creates a flexible layout that adapts to screen size?",
  options: ["grid", "float", "flexbox", "position"],
  correctAnswer: 2,
  explanation: "The flexbox (display: flex) layout model creates flexible and responsive designs that adapt to different screen sizes.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["css"]
},
  // JavaScript Questions
{
  id: "js-1",
  question: "Which of the following is the correct way to declare a variable in modern JavaScript?",
  options: ["var name = 'John'", "let name = 'John'", "variable name = 'John'", "name = 'John'"],
  correctAnswer: 1,
  explanation: "In modern JavaScript, 'let' is preferred for declaring variables as it has block scope and prevents common errors associated with 'var'.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["javascript"]
},
{
  id: "js-2",
  question: "What will console.log(typeof null) output?",
  options: ["'null'", "'undefined'", "'object'", "'boolean'"],
  correctAnswer: 2,
  explanation: "This is a well-known quirk in JavaScript. typeof null returns 'object', which is considered a bug but is kept for backwards compatibility.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-3",
  question: "Which method is used to add an element to the end of an array?",
  options: ["append()", "push()", "add()", "insert()"],
  correctAnswer: 1,
  explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["javascript"]
},
{
  id: "js-4",
  question: "What is the difference between == and === in JavaScript?",
  options: [
    "No difference",
    "=== is more strict and checks type",
    "== is more strict and checks type",
    "=== is used for assignment"
  ],
  correctAnswer: 1,
  explanation: "=== (strict equality) checks both value and type, while == (loose equality) performs type coercion before comparison.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-5",
  question: "What does the 'async' keyword do in JavaScript?",
  options: [
    "Makes a function run faster",
    "Makes a function return a Promise",
    "Makes a function run in parallel",
    "Makes a function wait"
  ],
  correctAnswer: 1,
  explanation: "The 'async' keyword makes a function return a Promise and allows the use of 'await' inside the function.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["javascript"]
},
{
  id: "js-6",
  question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
  options: ["true", "false", "undefined", "NaN"],
  correctAnswer: 1,
  explanation: "Due to floating point precision issues in JavaScript, 0.1 + 0.2 equals approximately 0.30000000000000004, not exactly 0.3.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-7",
  question: "Which method creates a new array with all sub-array elements concatenated?",
  options: ["concat()", "join()", "flat()", "merge()"],
  correctAnswer: 2,
  explanation: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-8",
  question: "Which keyword is used to declare a constant in JavaScript?",
  options: ["var", "let", "const", "static"],
  correctAnswer: 2,
  explanation: "The 'const' keyword is used to declare variables whose values cannot be reassigned.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["javascript"]
},
{
  id: "js-9",
  question: "What is the purpose of the 'this' keyword in JavaScript?",
  options: [
    "Refers to the parent function",
    "Refers to the current object",
    "Refers to the global object always",
    "Refers to the prototype"
  ],
  correctAnswer: 1,
  explanation: "The 'this' keyword refers to the object that is currently executing the function.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-10",
  question: "Which built-in method converts a JSON string into an object?",
  options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
  correctAnswer: 0,
  explanation: "JSON.parse() parses a JSON string and converts it into a JavaScript object.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-11",
  question: "What will console.log([] + []) output?",
  options: ["[]", "undefined", "'' (empty string)", "NaN"],
  correctAnswer: 2,
  explanation: "When two arrays are added using +, they are converted to strings, resulting in an empty string.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["javascript"]
},
{
  id: "js-12",
  question: "Which method removes the last element from an array and returns it?",
  options: ["shift()", "pop()", "remove()", "delete()"],
  correctAnswer: 1,
  explanation: "The pop() method removes the last element from an array and returns that element.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["javascript"]
},
{
  id: "js-13",
  question: "What is the difference between 'null' and 'undefined' in JavaScript?",
  options: [
    "No difference",
    "null means empty value, undefined means variable declared but not assigned",
    "undefined is an object, null is not",
    "Both are errors"
  ],
  correctAnswer: 1,
  explanation: "null is an assigned value representing no value, while undefined means a variable has been declared but not assigned a value.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-14",
  question: "Which operator is used to spread elements of an array or object?",
  options: ["...", "->", "::", "**"],
  correctAnswer: 0,
  explanation: "The spread operator (...) is used to expand arrays or objects into individual elements.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-15",
  question: "Which built-in method is used to filter elements of an array based on a condition?",
  options: ["map()", "forEach()", "filter()", "reduce()"],
  correctAnswer: 2,
  explanation: "The filter() method creates a new array containing only the elements that satisfy the given condition.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-16",
  question: "What will console.log('5' - 2) output?",
  options: ["3", "52", "NaN", "Error"],
  correctAnswer: 0,
  explanation: "When using the - operator, JavaScript converts the string '5' to a number, so '5' - 2 results in 3.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-17",
  question: "Which object method is used to merge two or more objects?",
  options: ["Object.merge()", "Object.assign()", "Object.combine()", "Object.concat()"],
  correctAnswer: 1,
  explanation: "Object.assign() copies values from one or more source objects to a target object.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-18",
  question: "Which statement is used to handle errors in JavaScript?",
  options: ["catch-try", "error handling", "try-catch", "throw-catch"],
  correctAnswer: 2,
  explanation: "The try...catch statement is used to handle exceptions in JavaScript.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
{
  id: "js-19",
  question: "Which method is used to schedule a function to run after a delay?",
  options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
  correctAnswer: 1,
  explanation: "The setTimeout() method executes a function after a specified number of milliseconds.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["javascript"]
},
{
  id: "js-20",
  question: "What will console.log(typeof NaN) output?",
  options: ["'NaN'", "'number'", "'undefined'", "'object'"],
  correctAnswer: 1,
  explanation: "In JavaScript, NaN (Not-a-Number) is still considered a number type.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["javascript"]
},
// Git Questions
{
  id: "git-1",
  question: "What command is used to initialize a new Git repository?",
  options: ["git start", "git init", "git create", "git new"],
  correctAnswer: 1,
  explanation: "The 'git init' command creates a new Git repository in the current directory.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["git"]
},
{
  id: "git-2",
  question: "Which command is used to stage files for commit?",
  options: ["git stage", "git commit", "git add", "git push"],
  correctAnswer: 2,
  explanation: "The 'git add' command stages changes in the working directory for the next commit.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["git"]
},
{
  id: "git-3",
  question: "What does 'git clone' do?",
  options: [
    "Creates a copy of a local repository",
    "Downloads a repository from a remote source",
    "Merges two branches",
    "Deletes a repository"
  ],
  correctAnswer: 1,
  explanation: "The 'git clone' command creates a local copy of a remote repository, including all its history and branches.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["git"]
},
{
  id: "git-4",
  question: "How do you create a new branch in Git?",
  options: [
    "git new branch-name",
    "git branch branch-name",
    "git create branch-name",
    "git checkout branch-name"
  ],
  correctAnswer: 1,
  explanation: "The 'git branch branch-name' command creates a new branch. You can also use 'git checkout -b branch-name' to create and switch to it.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["git"]
},
{
  id: "git-5",
  question: "What is the purpose of a merge conflict?",
  options: [
    "To delete conflicting files",
    "To indicate that Git needs help resolving differences",
    "To create a backup of files",
    "To merge branches automatically"
  ],
  correctAnswer: 1,
  explanation: "Merge conflicts occur when Git can't automatically resolve differences between two commits and needs manual intervention.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["git"]
},
{
  id: "git-6",
  question: "Which command shows the commit history?",
  options: ["git history", "git log", "git status", "git commits"],
  correctAnswer: 1,
  explanation: "The 'git log' command shows the commit history, including author, date, and commit message.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["git"]
},
{
  id: "git-7",
  question: "What does 'git pull' do?",
  options: [
    "Uploads local commits to a remote repository",
    "Downloads changes from a remote and merges them",
    "Shows the status of the working directory",
    "Creates a new branch"
  ],
  correctAnswer: 1,
  explanation: "The 'git pull' command fetches changes from a remote repository and merges them into the current branch.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["git"]
},
{
  id: "git-8",
  question: "What is the difference between 'git fetch' and 'git pull'?",
  options: [
    "'git fetch' only downloads updates, 'git pull' downloads and merges them",
    "No difference, both are the same",
    "'git pull' is faster than 'git fetch'",
    "'git fetch' deletes local changes"
  ],
  correctAnswer: 0,
  explanation: "'git fetch' only downloads commits and updates remote tracking branches, while 'git pull' fetches and merges them into the current branch.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["git"]
},
{
  id: "git-9",
  question: "Which command is used to check the current status of the working directory?",
  options: ["git check", "git log", "git status", "git branch"],
  correctAnswer: 2,
  explanation: "The 'git status' command shows staged, unstaged, and untracked changes in the working directory.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["git"]
},
{
  id: "git-10",
  question: "What does 'git reset --hard' do?",
  options: [
    "Resets the branch to a specific commit, discarding all changes",
    "Deletes the repository",
    "Stages all files",
    "Only resets the staging area but keeps changes"
  ],
  correctAnswer: 0,
  explanation: "'git reset --hard' resets the branch to a specified commit and discards all working directory and staging area changes. Use with caution.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["git"]
},
  // React Questions
{
  id: "react-1",
  question: "What is JSX in React?",
  options: [
    "A JavaScript library",
    "A syntax extension for JavaScript",
    "A CSS framework",
    "A database query language"
  ],
  correctAnswer: 1,
  explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["react"]
},
{
  id: "react-2",
  question: "Which hook is used to manage state in functional components?",
  options: ["useEffect", "useState", "useContext", "useReducer"],
  correctAnswer: 1,
  explanation: "The useState hook is used to add state to functional components in React.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["react"]
},
{
  id: "react-3",
  question: "What is the purpose of the useEffect hook?",
  options: [
    "To manage component state",
    "To handle side effects in components",
    "To create context",
    "To render components"
  ],
  correctAnswer: 1,
  explanation: "The useEffect hook lets you perform side effects in functional components, such as data fetching, subscriptions, or DOM manipulation.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["react"]
},
{
  id: "react-4",
  question: "What is the virtual DOM in React?",
  options: [
    "The actual DOM in the browser",
    "A JavaScript representation of the DOM",
    "A CSS framework",
    "A database"
  ],
  correctAnswer: 1,
  explanation: "The virtual DOM is a JavaScript representation of the actual DOM that React uses to optimize rendering performance.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["react"]
},
{
  id: "react-5",
  question: "How do you pass data from a parent component to a child component?",
  options: ["Using state", "Using props", "Using useContext", "Using events"],
  correctAnswer: 1,
  explanation: "Props are used to pass data from parent to child components in React.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["react"]
},
{
  id: "react-6",
  question: "What is the purpose of React Router?",
  options: [
    "To manage state",
    "To add styling",
    "To enable navigation between views",
    "To connect to APIs"
  ],
  correctAnswer: 2,
  explanation: "React Router is used for navigation and routing in React applications.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["react"]
},
{
  id: "react-7",
  question: "What does lifting state up mean in React?",
  options: [
    "Sharing state between sibling components by moving it to a common parent",
    "Moving state to a database",
    "Storing state in local storage",
    "Using context instead of props"
  ],
  correctAnswer: 0,
  explanation: "Lifting state up means moving shared state to the closest common ancestor so sibling components can access it.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["react"]
},
{
  id: "react-8",
  question: "What is the difference between controlled and uncontrolled components?",
  options: [
    "Controlled components are managed by React state, uncontrolled by the DOM",
    "Uncontrolled components are faster",
    "Controlled components do not use state",
    "There is no difference"
  ],
  correctAnswer: 0,
  explanation: "Controlled components rely on React state as the single source of truth, while uncontrolled components store their own state in the DOM.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["react"]
},
{
  id: "react-9",
  question: "Which hook is used for performance optimization by memoizing values?",
  options: ["useState", "useEffect", "useMemo", "useReducer"],
  correctAnswer: 2,
  explanation: "The useMemo hook memoizes expensive calculations so they are not re-computed on every render.",
  category: "coding",
  difficulty: "Advanced",
  tags: ["react"]
},
{
  id: "react-10",
  question: "What is React Context used for?",
  options: [
    "To handle API requests",
    "To pass data deeply without props drilling",
    "To style components",
    "To create state in components"
  ],
  correctAnswer: 1,
  explanation: "React Context provides a way to share values across the component tree without having to pass props manually at every level.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["react"]
},
// MySQL Questions
{
  id: "mysql-1",
  question: "What does SQL stand for?",
  options: [
    "Structured Query Language",
    "Simple Query Language",
    "Sequential Query Language",
    "Standard Question Language"
  ],
  correctAnswer: 0,
  explanation: "SQL stands for Structured Query Language, which is used to manage and manipulate relational databases.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["mysql"]
},
{
  id: "mysql-2",
  question: "Which command is used to create a new database in MySQL?",
  options: ["CREATE DATABASE db_name;", "NEW DATABASE db_name;", "MAKE DATABASE db_name;", "INIT DATABASE db_name;"],
  correctAnswer: 0,
  explanation: "The CREATE DATABASE command is used to create a new database in MySQL.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["mysql"]
},
{
  id: "mysql-3",
  question: "Which command is used to remove a table from a database?",
  options: ["REMOVE TABLE table_name;", "DELETE TABLE table_name;", "DROP TABLE table_name;", "ERASE TABLE table_name;"],
  correctAnswer: 2,
  explanation: "The DROP TABLE command deletes the table structure and its data permanently.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["mysql"]
},
{
  id: "mysql-4",
  question: "Which clause is used to filter records in a SELECT query?",
  options: ["WHERE", "FILTER", "SELECT", "ORDER BY"],
  correctAnswer: 0,
  explanation: "The WHERE clause is used to filter records based on specified conditions.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["mysql"]
},
{
  id: "mysql-5",
  question: "What is the default primary key constraint in MySQL?",
  options: ["UNIQUE", "NOT NULL", "PRIMARY KEY", "FOREIGN KEY"],
  correctAnswer: 2,
  explanation: "The PRIMARY KEY constraint uniquely identifies each record in a table.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["mysql"]
},
{
  id: "mysql-6",
  question: "Which command is used to insert a new record into a table?",
  options: ["INSERT INTO table_name VALUES(...);", "ADD INTO table_name (...);", "INSERT RECORD table_name;", "UPDATE table_name SET ...;"],
  correctAnswer: 0,
  explanation: "The INSERT INTO command is used to add new records into a table.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["mysql"]
},
{
  id: "mysql-7",
  question: "Which keyword is used to retrieve unique values from a column?",
  options: ["DISTINCT", "UNIQUE", "GROUP BY", "ONLY"],
  correctAnswer: 0,
  explanation: "The DISTINCT keyword returns only distinct (unique) values from a column.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["mysql"]
},
{
  id: "mysql-8",
  question: "Which function returns the total number of rows in a table?",
  options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
  correctAnswer: 1,
  explanation: "The COUNT() function returns the number of rows that match a specified condition or all rows if no condition is given.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["mysql"]
},
{
  id: "mysql-9",
  question: "Which clause is used to sort the result set of a query?",
  options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
  correctAnswer: 1,
  explanation: "The ORDER BY clause is used to sort the results in ascending (ASC) or descending (DESC) order.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["mysql"]
},
{
  id: "mysql-10",
  question: "What is a foreign key in MySQL?",
  options: [
    "A column that uniquely identifies each row in the same table",
    "A column that links one table to another table",
    "A key used for encrypting the database",
    "A temporary key for queries"
  ],
  correctAnswer: 1,
  explanation: "A foreign key is a column that creates a relationship between two tables, referencing the primary key of another table.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["mysql"]
},
// Networking / HTTP / WebSockets Questions
{
  id: "net-1",
  question: "What does HTTP stand for?",
  options: [
    "HyperText Transfer Protocol",
    "Hyperlink Transfer Protocol",
    "HyperText Transmission Process",
    "Hyperlink Transmission Protocol"
  ],
  correctAnswer: 0,
  explanation: "HTTP stands for HyperText Transfer Protocol. It's the foundation of data communication for the web.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-2",
  question: "Which HTTP method is used to retrieve data from a server?",
  options: ["GET", "POST", "PUT", "DELETE"],
  correctAnswer: 0,
  explanation: "The GET method requests data from a specified resource on the server.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-3",
  question: "Which HTTP method is used to send data to a server to create or update a resource?",
  options: ["GET", "POST", "OPTIONS", "CONNECT"],
  correctAnswer: 1,
  explanation: "The POST method sends data to the server, often used for creating or updating resources.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-4",
  question: "What is the default port number for HTTPS?",
  options: ["80", "443", "21", "8080"],
  correctAnswer: 1,
  explanation: "HTTPS uses port 443 by default, while HTTP uses port 80.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-5",
  question: "What does a WebSocket provide that HTTP does not?",
  options: [
    "Request-response communication",
    "Persistent, full-duplex communication",
    "Faster GET requests",
    "Automatic encryption"
  ],
  correctAnswer: 1,
  explanation: "WebSockets allow persistent, bidirectional communication between client and server, unlike the stateless HTTP protocol.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["networking"]
},
{
  id: "net-6",
  question: "Which status code indicates that a request was successful?",
  options: ["200", "404", "500", "301"],
  correctAnswer: 0,
  explanation: "The HTTP status code 200 means the request was successful.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-7",
  question: "Which status code indicates that the requested resource was not found?",
  options: ["200", "301", "404", "500"],
  correctAnswer: 2,
  explanation: "HTTP 404 means the requested resource was not found on the server.",
  category: "coding",
  difficulty: "Beginner",
  tags: ["networking"]
},
{
  id: "net-8",
  question: "What is the main difference between HTTP/1.1 and HTTP/2?",
  options: [
    "HTTP/2 is only for secure connections",
    "HTTP/2 supports multiplexing multiple requests over a single connection",
    "HTTP/1.1 is faster",
    "HTTP/2 does not support headers"
  ],
  correctAnswer: 1,
  explanation: "HTTP/2 allows multiplexing multiple requests over a single TCP connection, improving performance compared to HTTP/1.1.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["networking"]
},
{
  id: "net-9",
  question: "Which WebSocket method is used to close a connection?",
  options: ["close()", "disconnect()", "end()", "terminate()"],
  correctAnswer: 0,
  explanation: "The close() method is used to close an open WebSocket connection.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["networking"]
},
{
  id: "net-10",
  question: "What is a common use case for WebSockets?",
  options: [
    "Static HTML page rendering",
    "Real-time chat applications",
    "File upload via HTTP",
    "Form submission"
  ],
  correctAnswer: 1,
  explanation: "WebSockets are commonly used in real-time applications such as chat apps, live notifications, and gaming.",
  category: "coding",
  difficulty: "Intermediate",
  tags: ["networking"]
},
// Physics Questions
{
  id: "physics-1",
  question: "What is Newton's second law of motion?",
  options: [
    "Force equals mass times acceleration",
    "Every action has an equal and opposite reaction",
    "Objects remain at rest or in uniform motion",
    "Energy cannot be created or destroyed"
  ],
  correctAnswer: 0,
  explanation: "Newton's second law states that F = ma, where F is force, m is mass, and a is acceleration.",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-2",
  question: "What is the speed of light in vacuum?",
  options: ["3×10^6 m/s", "3×10^8 m/s", "3×10^5 km/s", "3×10^3 m/s"],
  correctAnswer: 1,
  explanation: "The speed of light in vacuum is approximately 3×10^8 meters per second.",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-3",
  question: "What is the unit of electric current?",
  options: ["Volt", "Ampere", "Ohm", "Watt"],
  correctAnswer: 1,
  explanation: "The unit of electric current is the Ampere (A).",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-4",
  question: "What is the law of conservation of energy?",
  options: [
    "Energy can be created but not destroyed",
    "Energy can neither be created nor destroyed, only transformed",
    "Energy always decreases over time",
    "Energy depends on mass only"
  ],
  correctAnswer: 1,
  explanation: "The law of conservation of energy states that energy can only change forms, it cannot be created or destroyed.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["physics"]
},
{
  id: "physics-5",
  question: "Which particle has a negative charge?",
  options: ["Proton", "Neutron", "Electron", "Photon"],
  correctAnswer: 2,
  explanation: "Electrons carry a negative charge.",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-6",
  question: "What is the phenomenon of bending of light called?",
  options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
  correctAnswer: 1,
  explanation: "Refraction is the bending of light when it passes from one medium to another.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["physics"]
},
{
  id: "physics-7",
  question: "What is the unit of frequency?",
  options: ["Hertz", "Newton", "Pascal", "Joule"],
  correctAnswer: 0,
  explanation: "Frequency is measured in Hertz (Hz).",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-8",
  question: "Which law explains why planets orbit the sun?",
  options: ["Newton's first law", "Law of universal gravitation", "Ohm's law", "Hooke's law"],
  correctAnswer: 1,
  explanation: "Newton's law of universal gravitation explains the attraction between two masses, like planets and the sun.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["physics"]
},
{
  id: "physics-9",
  question: "What is the SI unit of work?",
  options: ["Watt", "Newton", "Joule", "Pascal"],
  correctAnswer: 2,
  explanation: "Work is measured in Joules (J).",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-10",
  question: "Which phenomenon demonstrates the wave nature of light?",
  options: ["Photoelectric effect", "Diffraction", "Electrolysis", "Gravitational lensing"],
  correctAnswer: 1,
  explanation: "Diffraction is the bending of waves around obstacles and shows the wave nature of light.",
  category: "science",
  difficulty: "Advanced",
  tags: ["physics"]
},
{
  id: "physics-11",
  question: "What is the principle behind a hydraulic lift?",
  options: ["Pascal's principle", "Archimedes' principle", "Bernoulli's principle", "Newton's second law"],
  correctAnswer: 0,
  explanation: "Pascal's principle states that pressure applied to a confined fluid is transmitted equally in all directions.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["physics"]
},
{
  id: "physics-12",
  question: "What is the energy of a photon proportional to?",
  options: ["Wavelength", "Frequency", "Amplitude", "Speed"],
  correctAnswer: 1,
  explanation: "Photon energy E = h × frequency, where h is Planck's constant.",
  category: "science",
  difficulty: "Advanced",
  tags: ["physics"]
},
{
  id: "physics-13",
  question: "Which type of lens converges light rays to a point?",
  options: ["Concave", "Convex", "Plane", "Cylindrical"],
  correctAnswer: 1,
  explanation: "Convex lenses converge light rays to a focal point.",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-14",
  question: "Which principle explains why a boat floats?",
  options: ["Archimedes' principle", "Pascal's principle", "Bernoulli's principle", "Newton's law"],
  correctAnswer: 0,
  explanation: "Archimedes' principle states that a body immersed in fluid experiences an upward buoyant force equal to the weight of displaced fluid.",
  category: "science",
  difficulty: "Beginner",
  tags: ["physics"]
},
{
  id: "physics-15",
  question: "What is the dual nature of light?",
  options: ["It behaves only as a particle", "It behaves only as a wave", "It behaves as both wave and particle", "It behaves neither as wave nor particle"],
  correctAnswer: 2,
  explanation: "Light exhibits both wave-like and particle-like properties, known as wave-particle duality.",
  category: "science",
  difficulty: "Advanced",
  tags: ["physics"]
},
// Chemistry Questions
{
  id: "chemistry-1",
  question: "What is the chemical symbol for water?",
  options: ["O2", "H2O", "CO2", "HO2"],
  correctAnswer: 1,
  explanation: "Water is represented by the chemical formula H2O, meaning it has two hydrogen atoms and one oxygen atom.",
  category: "science",
  difficulty: "Beginner",
  tags: ["chemistry"]
},
{
  id: "chemistry-2",
  question: "What is the atomic number of carbon?",
  options: ["6", "12", "8", "14"],
  correctAnswer: 0,
  explanation: "The atomic number of carbon is 6, which represents the number of protons in its nucleus.",
  category: "science",
  difficulty: "Beginner",
  tags: ["chemistry"]
},
{
  id: "chemistry-3",
  question: "Which type of bond involves the sharing of electron pairs between atoms?",
  options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
  correctAnswer: 1,
  explanation: "A covalent bond is formed when two atoms share one or more pairs of electrons.",
  category: "science",
  difficulty: "Beginner",
  tags: ["chemistry"]
},
{
  id: "chemistry-4",
  question: "What is the pH value of a neutral solution?",
  options: ["0", "7", "14", "1"],
  correctAnswer: 1,
  explanation: "A neutral solution has a pH of 7.",
  category: "science",
  difficulty: "Beginner",
  tags: ["chemistry"]
},
{
  id: "chemistry-5",
  question: "Which gas is released when an acid reacts with a metal?",
  options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
  correctAnswer: 1,
  explanation: "When acids react with metals, hydrogen gas is released.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-6",
  question: "Which element is known as the 'King of Chemicals'?",
  options: ["Sulfur", "Chlorine", "Sulfuric acid", "Hydrogen"],
  correctAnswer: 2,
  explanation: "Sulfuric acid (H2SO4) is often called the 'King of Chemicals' due to its wide industrial use.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-7",
  question: "What type of reaction is: 2H2 + O2 → 2H2O?",
  options: ["Decomposition", "Combination", "Displacement", "Redox"],
  correctAnswer: 1,
  explanation: "This is a combination (or synthesis) reaction where two reactants form a single product.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-8",
  question: "Which law states that mass is neither created nor destroyed in a chemical reaction?",
  options: ["Law of Conservation of Mass", "Boyle's Law", "Charles's Law", "Avogadro's Law"],
  correctAnswer: 0,
  explanation: "The Law of Conservation of Mass states that the total mass of reactants equals the total mass of products.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-9",
  question: "Which element has the highest electronegativity?",
  options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
  correctAnswer: 1,
  explanation: "Fluorine is the most electronegative element on the periodic table.",
  category: "science",
  difficulty: "Advanced",
  tags: ["chemistry"]
},
{
  id: "chemistry-10",
  question: "What is an isotope?",
  options: [
    "Atoms with the same number of neutrons",
    "Atoms with the same number of protons but different neutrons",
    "Atoms with the same number of electrons",
    "Atoms with different chemical properties"
  ],
  correctAnswer: 1,
  explanation: "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-11",
  question: "Which process separates a mixture based on boiling points?",
  options: ["Filtration", "Distillation", "Evaporation", "Crystallization"],
  correctAnswer: 1,
  explanation: "Distillation separates components of a mixture based on differences in boiling points.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-12",
  question: "Which type of reaction releases energy in the form of heat?",
  options: ["Endothermic", "Exothermic", "Redox", "Neutralization"],
  correctAnswer: 1,
  explanation: "Exothermic reactions release energy, usually as heat or light.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-13",
  question: "What is the main gas responsible for acid rain?",
  options: ["Carbon dioxide", "Sulfur dioxide", "Nitrogen", "Oxygen"],
  correctAnswer: 1,
  explanation: "Sulfur dioxide reacts with water in the atmosphere to produce acid rain.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-14",
  question: "Avogadro's number is?",
  options: ["6.022×10^23", "3.14×10^8", "9.8 m/s²", "1.6×10^-19"],
  correctAnswer: 0,
  explanation: "Avogadro's number (6.022×10^23) represents the number of particles in one mole of a substance.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
{
  id: "chemistry-15",
  question: "Which type of bond is formed by the transfer of electrons?",
  options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
  correctAnswer: 1,
  explanation: "Ionic bonds are formed when electrons are transferred from one atom to another.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["chemistry"]
},
// Biology Questions
{
  id: "biology-1",
  question: "What is the basic unit of life?",
  options: ["Atom", "Molecule", "Cell", "Organ"],
  correctAnswer: 2,
  explanation: "The cell is the basic structural and functional unit of all living organisms.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-2",
  question: "Which organelle is known as the powerhouse of the cell?",
  options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  correctAnswer: 1,
  explanation: "Mitochondria produce energy for the cell in the form of ATP through cellular respiration.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-3",
  question: "Which macromolecule stores genetic information?",
  options: ["Protein", "Carbohydrate", "DNA", "Lipid"],
  correctAnswer: 2,
  explanation: "DNA stores the genetic instructions used in the growth, development, and reproduction of organisms.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-4",
  question: "Which process do plants use to make their food?",
  options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
  correctAnswer: 2,
  explanation: "Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to produce food (glucose) and oxygen.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-5",
  question: "Which blood cells help in fighting infections?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  correctAnswer: 1,
  explanation: "White blood cells (leukocytes) are responsible for defending the body against infections and foreign invaders.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-6",
  question: "Which part of the brain controls balance and coordination?",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  correctAnswer: 1,
  explanation: "The cerebellum is responsible for maintaining balance, posture, and coordination of voluntary movements.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["biology"]
},
{
  id: "biology-7",
  question: "What is the function of ribosomes?",
  options: ["Protein synthesis", "Energy production", "Transport", "Storage"],
  correctAnswer: 0,
  explanation: "Ribosomes are responsible for synthesizing proteins in the cell.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-8",
  question: "Which process produces gametes in animals?",
  options: ["Mitosis", "Meiosis", "Binary fission", "Fertilization"],
  correctAnswer: 1,
  explanation: "Meiosis is a type of cell division that produces haploid gametes (sperm and egg cells).",
  category: "science",
  difficulty: "Intermediate",
  tags: ["biology"]
},
{
  id: "biology-9",
  question: "Which macronutrient is the main source of energy for the body?",
  options: ["Protein", "Carbohydrate", "Lipid", "Vitamin"],
  correctAnswer: 1,
  explanation: "Carbohydrates are the primary source of energy for the body.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-10",
  question: "What is the primary function of hemoglobin?",
  options: [
    "Transport oxygen",
    "Fight infection",
    "Clot blood",
    "Produce energy"
  ],
  correctAnswer: 0,
  explanation: "Hemoglobin is a protein in red blood cells that carries oxygen from the lungs to the rest of the body.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-11",
  question: "Which type of immunity is acquired after vaccination?",
  options: ["Innate immunity", "Active immunity", "Passive immunity", "Natural immunity"],
  correctAnswer: 1,
  explanation: "Active immunity is acquired when the body produces antibodies in response to a vaccine or infection.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["biology"]
},
{
  id: "biology-12",
  question: "Which part of the cell contains the genetic material?",
  options: ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
  correctAnswer: 0,
  explanation: "The nucleus houses DNA, which contains the instructions for all cellular processes.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-13",
  question: "What is the site of protein synthesis in the cell?",
  options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic reticulum"],
  correctAnswer: 1,
  explanation: "Ribosomes are responsible for assembling amino acids into proteins.",
  category: "science",
  difficulty: "Beginner",
  tags: ["biology"]
},
{
  id: "biology-14",
  question: "Which hormone regulates blood sugar levels?",
  options: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
  correctAnswer: 0,
  explanation: "Insulin is a hormone secreted by the pancreas that lowers blood sugar levels.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["biology"]
},
{
  id: "biology-15",
  question: "Which process converts glucose into energy in cells?",
  options: ["Photosynthesis", "Respiration", "Fermentation", "Diffusion"],
  correctAnswer: 1,
  explanation: "Cellular respiration converts glucose into ATP, the energy currency of the cell.",
  category: "science",
  difficulty: "Intermediate",
  tags: ["biology"]
},


  // General Knowledge - History
{
  id: "history-1",
  question: "In which year did World War II end?",
  options: ["1944", "1945", "1946", "1947"],
  correctAnswer: 1,
  explanation: "World War II ended in 1945 with Japan's surrender on September 2, following the atomic bombings and Soviet invasion of Manchuria.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-2",
  question: "Who was the first President of the United States?",
  options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
  correctAnswer: 2,
  explanation: "George Washington became the first President of the United States in 1789.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-3",
  question: "Which empire was ruled by Alexander the Great?",
  options: ["Roman Empire", "Macedonian Empire", "Persian Empire", "Ottoman Empire"],
  correctAnswer: 1,
  explanation: "Alexander the Great ruled the Macedonian Empire and expanded it across three continents.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-4",
  question: "The fall of the Berlin Wall occurred in which year?",
  options: ["1987", "1988", "1989", "1990"],
  correctAnswer: 2,
  explanation: "The Berlin Wall fell on November 9, 1989, marking the end of the Cold War division in Germany.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-5",
  question: "Who was known as the 'Mahatma' in India?",
  options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
  correctAnswer: 1,
  explanation: "Mahatma Gandhi, also called the 'Father of the Nation', led India’s non-violent struggle for independence.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-6",
  question: "Which war was fought between the North and South regions of the United States?",
  options: ["World War I", "American Civil War", "Mexican-American War", "Revolutionary War"],
  correctAnswer: 1,
  explanation: "The American Civil War (1861–1865) was fought between the Northern and Southern states.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-7",
  question: "Who was the first emperor of the Roman Empire?",
  options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
  correctAnswer: 1,
  explanation: "Augustus (formerly Octavian) became the first emperor of Rome in 27 BCE.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-8",
  question: "The Renaissance period began in which country?",
  options: ["France", "England", "Italy", "Germany"],
  correctAnswer: 2,
  explanation: "The Renaissance, a cultural and intellectual revival, began in Italy during the 14th century.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-9",
  question: "Who discovered America in 1492?",
  options: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "Amerigo Vespucci"],
  correctAnswer: 1,
  explanation: "Christopher Columbus, sailing for Spain, reached the Americas in 1492.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-10",
  question: "Which revolution led to the rise of Napoleon Bonaparte?",
  options: ["French Revolution", "Industrial Revolution", "Russian Revolution", "American Revolution"],
  correctAnswer: 0,
  explanation: "The French Revolution (1789–1799) created political upheaval, leading to Napoleon's rise.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-11",
  question: "Which civilization built the pyramids?",
  options: ["Mesopotamian", "Greek", "Egyptian", "Roman"],
  correctAnswer: 2,
  explanation: "The ancient Egyptians built pyramids as tombs for their pharaohs.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-12",
  question: "When did India gain independence from British rule?",
  options: ["1946", "1947", "1948", "1950"],
  correctAnswer: 1,
  explanation: "India became independent on August 15, 1947.",
  category: "general",
  difficulty: "Beginner",
  tags: ["history"]
},
{
  id: "history-13",
  question: "Who was the last emperor of the Mughal dynasty in India?",
  options: ["Akbar", "Aurangzeb", "Bahadur Shah II", "Shah Jahan"],
  correctAnswer: 2,
  explanation: "Bahadur Shah II, also called Bahadur Shah Zafar, was the last Mughal emperor, deposed in 1857.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-14",
  question: "The Great Fire of London happened in which year?",
  options: ["1665", "1666", "1670", "1680"],
  correctAnswer: 1,
  explanation: "The Great Fire of London occurred in September 1666, destroying much of the city.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},
{
  id: "history-15",
  question: "Which treaty ended World War I?",
  options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Utrecht"],
  correctAnswer: 0,
  explanation: "The Treaty of Versailles, signed in 1919, officially ended World War I between Germany and the Allied Powers.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["history"]
},

  // Geography Questions
  // General Knowledge - Geography
{
  id: "geography-1",
  question: "Which is the largest continent by area?",
  options: ["Africa", "Asia", "Europe", "Antarctica"],
  correctAnswer: 1,
  explanation: "Asia is the largest continent, covering about 44.58 million square kilometers.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-2",
  question: "What is the longest river in the world?",
  options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  correctAnswer: 1,
  explanation: "The Nile River, stretching about 6,650 km, is considered the longest river in the world.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-3",
  question: "Which is the highest mountain in the world?",
  options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
  correctAnswer: 2,
  explanation: "Mount Everest, located in the Himalayas, is the highest mountain with an elevation of 8,848 meters.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-4",
  question: "Which country has the largest population in the world?",
  options: ["India", "China", "USA", "Indonesia"],
  correctAnswer: 1,
  explanation: "China has the largest population in the world, with over 1.4 billion people.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-5",
  question: "Which desert is the largest in the world?",
  options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
  correctAnswer: 0,
  explanation: "The Sahara Desert in Africa is the largest hot desert in the world, covering 9.2 million square kilometers.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-6",
  question: "Which ocean is the largest?",
  options: ["Atlantic", "Indian", "Pacific", "Arctic"],
  correctAnswer: 2,
  explanation: "The Pacific Ocean is the largest ocean, covering more than 63 million square miles.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-7",
  question: "Which country is known as the 'Land of the Rising Sun'?",
  options: ["China", "Japan", "Thailand", "South Korea"],
  correctAnswer: 1,
  explanation: "Japan is called the 'Land of the Rising Sun' because it lies to the east of the Asian continent.",
  category: "general",
  difficulty: "Beginner",
  tags: ["geography"]
},
{
  id: "geography-8",
  question: "Which river flows through Paris?",
  options: ["Thames", "Seine", "Danube", "Rhine"],
  correctAnswer: 1,
  explanation: "The Seine River flows through Paris and is an important commercial waterway.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-9",
  question: "Which country has the most natural lakes?",
  options: ["USA", "Canada", "Russia", "Finland"],
  correctAnswer: 1,
  explanation: "Canada has the most natural lakes in the world, with over 31,000 lakes larger than three square kilometers.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-10",
  question: "Which is the smallest country in the world by area?",
  options: ["Monaco", "Malta", "Vatican City", "San Marino"],
  correctAnswer: 2,
  explanation: "Vatican City is the smallest country, covering only 0.44 square kilometers.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-11",
  question: "Which continent has the highest number of countries?",
  options: ["Africa", "Europe", "Asia", "South America"],
  correctAnswer: 0,
  explanation: "Africa has 54 recognized countries, the highest of any continent.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-12",
  question: "Which sea is the saltiest in the world?",
  options: ["Red Sea", "Dead Sea", "Mediterranean Sea", "Black Sea"],
  correctAnswer: 1,
  explanation: "The Dead Sea is the saltiest body of water, with a salinity of over 30%.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-13",
  question: "Which is the largest island in the world?",
  options: ["Greenland", "Madagascar", "Borneo", "New Guinea"],
  correctAnswer: 0,
  explanation: "Greenland is the largest island in the world, covering 2.16 million square kilometers.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-14",
  question: "Which desert is located in China and Mongolia?",
  options: ["Sahara", "Gobi", "Karakum", "Thar"],
  correctAnswer: 1,
  explanation: "The Gobi Desert stretches across northern China and southern Mongolia.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},
{
  id: "geography-15",
  question: "Which mountain range separates Europe from Asia?",
  options: ["Alps", "Himalayas", "Ural Mountains", "Caucasus"],
  correctAnswer: 2,
  explanation: "The Ural Mountains run north to south through western Russia, forming a natural boundary between Europe and Asia.",
  category: "general",
  difficulty: "Intermediate",
  tags: ["geography"]
},

   // Nature Questions (10)
 // Nature Questions - Birds
{
  id: "birds-1",
  question: "Which bird is known for its colorful tail and courtship dance?",
  options: ["Peacock", "Parrot", "Sparrow", "Eagle"],
  correctAnswer: 0,
  explanation: "Peacocks are famous for their colorful feathers and elaborate courtship displays.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["birds"]
},
{
  id: "birds-2",
  question: "Which bird is known for mimicking human speech?",
  options: ["Parrot", "Crow", "Owl", "Swan"],
  correctAnswer: 0,
  explanation: "Parrots have the ability to mimic sounds, including human speech.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["birds"]
},
{
  id: "birds-3",
  question: "Which bird is the fastest in flight?",
  options: ["Eagle", "Falcon", "Hawk", "Sparrow"],
  correctAnswer: 1,
  explanation: "The peregrine falcon can reach speeds over 320 km/h during its hunting dive.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["birds"]
},
{
  id: "birds-4",
  question: "Which bird is known for its nocturnal hunting?",
  options: ["Owl", "Parrot", "Eagle", "Crow"],
  correctAnswer: 0,
  explanation: "Owls are nocturnal predators with excellent night vision and silent flight.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["birds"]
},
{
  id: "birds-5",
  question: "Which bird cannot fly but is an excellent swimmer?",
  options: ["Penguin", "Ostrich", "Peacock", "Swan"],
  correctAnswer: 0,
  explanation: "Penguins are flightless birds adapted for swimming in cold waters.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["birds"]
},
{
  id: "birds-6",
  question: "Which bird is a symbol of peace?",
  options: ["Dove", "Crow", "Eagle", "Parrot"],
  correctAnswer: 0,
  explanation: "Doves are commonly recognized as symbols of peace and harmony.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["birds"]
},
{
  id: "birds-7",
  question: "Which bird migrates thousands of kilometers annually?",
  options: ["Swallow", "Sparrow", "Crow", "Pigeon"],
  correctAnswer: 0,
  explanation: "Swallows are migratory birds, traveling long distances between breeding and wintering grounds.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["birds"]
},
{
  id: "birds-8",
  question: "Which bird builds the largest nest?",
  options: ["Eagle", "Weaverbird", "Ostrich", "Albatross"],
  correctAnswer: 1,
  explanation: "Weaverbirds build intricate large nests using twigs and grasses.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["birds"]
},
{
  id: "birds-9",
  question: "Which bird lays the largest eggs?",
  options: ["Ostrich", "Eagle", "Penguin", "Swan"],
  correctAnswer: 0,
  explanation: "Ostriches lay the largest eggs of any living bird species.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["birds"]
},
{
  id: "birds-10",
  question: "Which bird is famous for its long migrations over the Arctic?",
  options: ["Arctic Tern", "Albatross", "Swan", "Pigeon"],
  correctAnswer: 0,
  explanation: "The Arctic Tern migrates from the Arctic to the Antarctic, covering the longest distance of any bird.",
  category: "nature",
  difficulty: "Advanced",
  tags: ["birds"]
},

// Nature Questions - Animals
{
  id: "animals-1",
  question: "Which is the largest land animal?",
  options: ["Lion", "Elephant", "Rhino", "Giraffe"],
  correctAnswer: 1,
  explanation: "The African elephant is the largest land animal on Earth.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["animals"]
},
{
  id: "animals-2",
  question: "Which animal is known as the 'King of the Jungle'?",
  options: ["Tiger", "Lion", "Elephant", "Leopard"],
  correctAnswer: 1,
  explanation: "The lion is commonly referred to as the 'King of the Jungle' due to its strength and dominance.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["animals"]
},
{
  id: "animals-3",
  question: "Which animal is the fastest land mammal?",
  options: ["Tiger", "Cheetah", "Leopard", "Horse"],
  correctAnswer: 1,
  explanation: "Cheetahs can reach speeds of up to 120 km/h, making them the fastest land animals.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["animals"]
},
{
  id: "animals-4",
  question: "Which animal is known for its ability to change color?",
  options: ["Chameleon", "Octopus", "Cuttlefish", "Frog"],
  correctAnswer: 0,
  explanation: "Chameleons can change color for camouflage, communication, and temperature regulation.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["animals"]
},
{
  id: "animals-5",
  question: "Which mammal is capable of true flight?",
  options: ["Bat", "Flying Squirrel", "Eagle", "Owl"],
  correctAnswer: 0,
  explanation: "Bats are the only mammals capable of sustained flight.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["animals"]
},
{
  id: "animals-6",
  question: "Which animal is known for its slow movement and long lifespan?",
  options: ["Turtle", "Tortoise", "Sloth", "Elephant"],
  correctAnswer: 2,
  explanation: "Sloths are slow-moving mammals known for their long lifespans in the wild.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["animals"]
},
{
  id: "animals-7",
  question: "Which animal is known as the largest predator in the ocean?",
  options: ["Shark", "Orca", "Sperm Whale", "Great White Shark"],
  correctAnswer: 1,
  explanation: "Orcas, also called killer whales, are apex predators in the ocean.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["animals"]
},
{
  id: "animals-8",
  question: "Which animal has a trunk?",
  options: ["Elephant", "Rhino", "Hippo", "Giraffe"],
  correctAnswer: 0,
  explanation: "Elephants are known for their long trunks, used for breathing, grasping, and drinking.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["animals"]
},
{
  id: "animals-9",
  question: "Which animal is known for playing dead as a defense mechanism?",
  options: ["Opossum", "Rabbit", "Fox", "Deer"],
  correctAnswer: 0,
  explanation: "Opossums play dead (thanatosis) to avoid predators.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["animals"]
},
{
  id: "animals-10",
  question: "Which animal can survive without water for months?",
  options: ["Camel", "Elephant", "Kangaroo", "Giraffe"],
  correctAnswer: 0,
  explanation: "Camels can survive long periods without water due to their physiological adaptations.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["animals"]
},

// Nature Questions - Plants
{
  id: "plants-1",
  question: "What is the process by which plants make their own food?",
  options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
  correctAnswer: 1,
  explanation: "Photosynthesis allows plants to convert sunlight, carbon dioxide, and water into glucose and oxygen.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["plants"]
},
{
  id: "plants-2",
  question: "Which plant is known as the 'King of Fruits'?",
  options: ["Mango", "Banana", "Apple", "Papaya"],
  correctAnswer: 0,
  explanation: "Mango is popularly known as the 'King of Fruits' due to its taste and popularity.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["plants"]
},
{
  id: "plants-3",
  question: "Which part of the plant conducts photosynthesis?",
  options: ["Roots", "Stem", "Leaves", "Flowers"],
  correctAnswer: 2,
  explanation: "Leaves contain chlorophyll and are the main site for photosynthesis.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["plants"]
},
{
  id: "plants-4",
  question: "Which plant is used to make paper?",
  options: ["Bamboo", "Coconut", "Oak", "Maple"],
  correctAnswer: 0,
  explanation: "Bamboo fibers are used in papermaking because of their strength and abundance.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["plants"]
},
{
  id: "plants-5",
  question: "Which plant produces seeds without flowers?",
  options: ["Fern", "Moss", "Gymnosperm", "Angiosperm"],
  correctAnswer: 2,
  explanation: "Gymnosperms produce seeds without flowers, often in cones.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["plants"]
},
{
  id: "plants-6",
  question: "Which plant is known for its rapid movement in response to touch?",
  options: ["Sunflower", "Venus Flytrap", "Mimosa Pudica", "Cactus"],
  correctAnswer: 2,
  explanation: "Mimosa Pudica folds its leaves quickly when touched as a defense mechanism.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["plants"]
},
{
  id: "plants-7",
  question: "Which part of the plant absorbs water from soil?",
  options: ["Roots", "Leaves", "Stem", "Flower"],
  correctAnswer: 0,
  explanation: "Roots absorb water and minerals from the soil for the plant's growth.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["plants"]
},
{
  id: "plants-8",
  question: "Which tree produces acorns?",
  options: ["Oak", "Maple", "Pine", "Birch"],
  correctAnswer: 0,
  explanation: "Oak trees produce acorns as their seeds.",
  category: "nature",
  difficulty: "Beginner",
  tags: ["plants"]
},
{
  id: "plants-9",
  question: "Which plant is carnivorous?",
  options: ["Rose", "Venus Flytrap", "Tulip", "Sunflower"],
  correctAnswer: 1,
  explanation: "Venus Flytrap is a carnivorous plant that traps and digests insects.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["plants"]
},
{
  id: "plants-10",
  question: "Which plant is known for its medicinal properties to reduce fever?",
  options: ["Tulsi", "Aloe Vera", "Neem", "Mint"],
  correctAnswer: 0,
  explanation: "Tulsi (Holy Basil) is widely used in traditional medicine for its anti-fever properties.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["plants"]
},

// Nature Questions - Fish
{
  id: "fish-1",
  question: "Which fish is known for its ability to produce light?",
  options: ["Clownfish", "Anglerfish", "Goldfish", "Guppy"],
  correctAnswer: 1,
  explanation: "Anglerfish have bioluminescent lures to attract prey in deep waters.",
  category: "nature",
  difficulty: "Advanced",
  tags: ["fish"]
},
{
  id: "fish-2",
  question: "Which fish is the largest in the ocean?",
  options: ["Shark", "Blue Whale", "Whale Shark", "Giant Manta Ray"],
  correctAnswer: 2,
  explanation: "The Whale Shark is the largest fish species, reaching lengths over 12 meters.",
  category: "nature",
  difficulty: "Advanced",
  tags: ["fish"]
},
{
  id: "fish-3",
  question: "Which fish can survive both in freshwater and saltwater?",
  options: ["Salmon", "Clownfish", "Goldfish", "Tilapia"],
  correctAnswer: 0,
  explanation: "Salmon are anadromous, living in both freshwater and saltwater during their lifecycle.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},
{
  id: "fish-4",
  question: "Which fish is famous for changing its sex?",
  options: ["Clownfish", "Salmon", "Goldfish", "Catfish"],
  correctAnswer: 0,
  explanation: "Clownfish are sequential hermaphrodites and can change sex within their group.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},
{
  id: "fish-5",
  question: "Which fish is known for its venomous spines?",
  options: ["Lionfish", "Clownfish", "Salmon", "Guppy"],
  correctAnswer: 0,
  explanation: "Lionfish have venomous spines that can deliver painful stings.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},
{
  id: "fish-6",
  question: "Which fish is used in sushi and is highly prized?",
  options: ["Tuna", "Salmon", "Clownfish", "Catfish"],
  correctAnswer: 0,
  explanation: "Tuna, especially Bluefin Tuna, is highly prized in sushi cuisine.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},
{
  id: "fish-7",
  question: "Which fish is known for its ability to inflate itself when threatened?",
  options: ["Pufferfish", "Anglerfish", "Lionfish", "Clownfish"],
  correctAnswer: 0,
  explanation: "Pufferfish can inflate its body to scare off predators.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},
{
  id: "fish-8",
  question: "Which fish is considered the fastest swimmer?",
  options: ["Sailfish", "Tuna", "Marlin", "Shark"],
  correctAnswer: 0,
  explanation: "Sailfish can reach speeds up to 110 km/h, making it the fastest fish.",
  category: "nature",
  difficulty: "Advanced",
  tags: ["fish"]
},
{
  id: "fish-9",
  question: "Which fish is known for its distinctive electric shocks?",
  options: ["Electric Eel", "Pufferfish", "Shark", "Clownfish"],
  correctAnswer: 0,
  explanation: "Electric Eels can produce electric shocks to stun prey or defend themselves.",
  category: "nature",
  difficulty: "Advanced",
  tags: ["fish"]
},
{
  id: "fish-10",
  question: "Which fish is famous for its migration upstream to spawn?",
  options: ["Salmon", "Clownfish", "Goldfish", "Catfish"],
  correctAnswer: 0,
  explanation: "Salmon migrate from the ocean back to freshwater rivers to spawn.",
  category: "nature",
  difficulty: "Intermediate",
  tags: ["fish"]
},

  // Human Body Questions (10)
 // Human Body Parts Questions
{
  id: "body-1",
  question: "Which bone is known as the collarbone?",
  options: ["Scapula", "Clavicle", "Humerus", "Sternum"],
  correctAnswer: 1,
  explanation: "The clavicle, or collarbone, connects the shoulder blade to the sternum.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-2",
  question: "Which organ is responsible for pumping oxygenated blood to the body?",
  options: ["Liver", "Heart", "Lungs", "Kidneys"],
  correctAnswer: 1,
  explanation: "The heart pumps oxygenated blood from the lungs to the rest of the body.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-3",
  question: "Which part of the eye detects light and color?",
  options: ["Cornea", "Lens", "Retina", "Iris"],
  correctAnswer: 2,
  explanation: "The retina contains photoreceptor cells that detect light and color.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-4",
  question: "Which part of the brain controls voluntary muscle movements?",
  options: ["Cerebellum", "Cerebrum", "Brainstem", "Medulla"],
  correctAnswer: 1,
  explanation: "The cerebrum controls voluntary movements, sensory perception, and higher mental functions.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-5",
  question: "Which part of the human ear is responsible for balance?",
  options: ["Cochlea", "Outer Ear", "Semicircular Canals", "Eardrum"],
  correctAnswer: 2,
  explanation: "The semicircular canals in the inner ear help maintain balance and spatial orientation.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-6",
  question: "Which part of the respiratory system is commonly called the windpipe?",
  options: ["Trachea", "Bronchi", "Larynx", "Alveoli"],
  correctAnswer: 0,
  explanation: "The trachea, or windpipe, carries air to the lungs from the larynx.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-7",
  question: "Which organ stores bile produced by the liver?",
  options: ["Gallbladder", "Pancreas", "Stomach", "Spleen"],
  correctAnswer: 0,
  explanation: "The gallbladder stores and releases bile to aid in the digestion of fats.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-8",
  question: "Which part of the body is primarily responsible for detoxifying chemicals and metabolizing drugs?",
  options: ["Liver", "Kidney", "Spleen", "Lungs"],
  correctAnswer: 0,
  explanation: "The liver plays a key role in detoxifying harmful substances and metabolizing drugs.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-9",
  question: "Which joint connects the thigh bone to the pelvis?",
  options: ["Knee Joint", "Hip Joint", "Shoulder Joint", "Elbow Joint"],
  correctAnswer: 1,
  explanation: "The hip joint connects the femur (thigh bone) to the pelvis, allowing leg movement.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-10",
  question: "Which organ contains nephrons that filter blood?",
  options: ["Kidneys", "Liver", "Pancreas", "Spleen"],
  correctAnswer: 0,
  explanation: "Nephrons are the functional units of the kidneys that filter blood and produce urine.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-11",
  question: "Which part of the hand has the most bones?",
  options: ["Palm", "Fingers", "Wrist", "Thumb"],
  correctAnswer: 2,
  explanation: "The wrist contains 8 small carpal bones, making it the hand part with the most bones.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-12",
  question: "Which part of the digestive system absorbs most nutrients from food?",
  options: ["Stomach", "Small Intestine", "Large Intestine", "Esophagus"],
  correctAnswer: 1,
  explanation: "The small intestine is the primary site for nutrient absorption from digested food.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},
{
  id: "body-13",
  question: "Which structure connects muscles to bones?",
  options: ["Ligaments", "Tendons", "Cartilage", "Joints"],
  correctAnswer: 1,
  explanation: "Tendons attach muscles to bones and transmit force to facilitate movement.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-14",
  question: "Which part of the skeleton protects the brain?",
  options: ["Rib Cage", "Skull", "Pelvis", "Spine"],
  correctAnswer: 1,
  explanation: "The skull encases and protects the brain from injury.",
  category: "human-body",
  difficulty: "Beginner",
  tags: ["human-body"]
},
{
  id: "body-15",
  question: "Which organ is responsible for detecting sound?",
  options: ["Cochlea", "Eardrum", "Outer Ear", "Semicircular Canals"],
  correctAnswer: 0,
  explanation: "The cochlea in the inner ear converts sound vibrations into nerve signals for hearing.",
  category: "human-body",
  difficulty: "Intermediate",
  tags: ["human-body"]
},


  // Environment Questions (10)
  // Environment Questions
{
  id: "environment-1",
  question: "What is the main cause of air pollution in urban areas?",
  options: ["Industrial emissions", "Vehicle exhaust", "Construction dust", "Agricultural activities"],
  correctAnswer: 1,
  explanation: "Vehicle exhaust is a primary source of air pollution in urban areas, contributing significantly to smog and poor air quality.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-2",
  question: "Which gas is primarily responsible for global warming?",
  options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  correctAnswer: 1,
  explanation: "Carbon dioxide (CO2) is a major greenhouse gas contributing to global warming.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-3",
  question: "What is the term for cutting down large areas of forests?",
  options: ["Deforestation", "Afforestation", "Reforestation", "Desertification"],
  correctAnswer: 0,
  explanation: "Deforestation refers to the removal of large areas of forests, often causing habitat loss and climate impacts.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-4",
  question: "Which layer of the atmosphere protects us from harmful UV rays?",
  options: ["Troposphere", "Stratosphere", "Ozone Layer", "Mesosphere"],
  correctAnswer: 2,
  explanation: "The ozone layer in the stratosphere absorbs most of the sun's harmful ultraviolet radiation.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-5",
  question: "What is the primary cause of acid rain?",
  options: ["Carbon dioxide emissions", "Sulfur dioxide and nitrogen oxides", "Ozone depletion", "Deforestation"],
  correctAnswer: 1,
  explanation: "Sulfur dioxide (SO2) and nitrogen oxides (NOx) react with water to form acid rain, harming ecosystems and structures.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-6",
  question: "Which renewable energy source uses sunlight to generate electricity?",
  options: ["Wind energy", "Solar energy", "Hydropower", "Geothermal energy"],
  correctAnswer: 1,
  explanation: "Solar energy converts sunlight directly into electricity using solar panels.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-7",
  question: "What is the term for the gradual increase in Earth's average temperature?",
  options: ["Climate Change", "Global Warming", "Ozone Depletion", "Acid Rain"],
  correctAnswer: 1,
  explanation: "Global warming refers to the long-term rise in Earth's average surface temperature due to greenhouse gases.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-8",
  question: "Which of the following is a non-renewable energy source?",
  options: ["Solar energy", "Wind energy", "Coal", "Hydropower"],
  correctAnswer: 2,
  explanation: "Coal is a non-renewable fossil fuel, taking millions of years to form and depleting with use.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-9",
  question: "Which practice helps conserve water in agriculture?",
  options: ["Flood irrigation", "Drip irrigation", "Open channel irrigation", "Overwatering"],
  correctAnswer: 1,
  explanation: "Drip irrigation delivers water directly to the plant roots, reducing wastage and conserving water.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-10",
  question: "Which human activity contributes most to soil erosion?",
  options: ["Planting trees", "Deforestation", "Rainfall", "Soil fertilization"],
  correctAnswer: 1,
  explanation: "Deforestation removes trees that hold soil together, increasing soil erosion.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-11",
  question: "Which gas causes the greenhouse effect by trapping heat in the atmosphere?",
  options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
  correctAnswer: 2,
  explanation: "Carbon dioxide traps heat in the atmosphere, contributing to the greenhouse effect.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-12",
  question: "Which type of pollution is caused by excess plastic in oceans?",
  options: ["Air pollution", "Water pollution", "Soil pollution", "Noise pollution"],
  correctAnswer: 1,
  explanation: "Excess plastic and chemicals in water bodies lead to water pollution, harming aquatic life.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-13",
  question: "What is the process of converting waste materials into reusable materials called?",
  options: ["Recycling", "Deforestation", "Composting", "Landfilling"],
  correctAnswer: 0,
  explanation: "Recycling converts waste materials into reusable products, reducing environmental impact.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "environment-14",
  question: "Which phenomenon results in rising sea levels due to melting ice caps?",
  options: ["Earthquake", "Global Warming", "Tsunami", "Deforestation"],
  correctAnswer: 1,
  explanation: "Global warming causes polar ice caps to melt, raising sea levels and threatening coastal areas.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "environment-15",
  question: "Which forest type has the highest biodiversity on Earth?",
  options: ["Temperate Forest", "Boreal Forest", "Rainforest", "Mangrove Forest"],
  correctAnswer: 2,
  explanation: "Tropical rainforests support the highest number of species, making them extremely biodiverse.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
// Environment Protection Questions
{
  id: "protect-1",
  question: "Which of the following helps reduce plastic pollution?",
  options: ["Using reusable bags", "Throwing plastic in rivers", "Buying more plastic products", "Burning plastic waste"],
  correctAnswer: 0,
  explanation: "Using reusable bags reduces the need for single-use plastics, helping to lower plastic pollution.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-2",
  question: "Planting more trees helps the environment by:",
  options: ["Increasing air pollution", "Providing habitats for wildlife", "Reducing oxygen", "Increasing global warming"],
  correctAnswer: 1,
  explanation: "Trees provide habitats, absorb carbon dioxide, and release oxygen, which benefits the environment.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-3",
  question: "Which energy source is environmentally friendly?",
  options: ["Coal", "Oil", "Solar", "Natural Gas"],
  correctAnswer: 2,
  explanation: "Solar energy is renewable and produces no harmful emissions, making it environmentally friendly.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-4",
  question: "What is a simple way to conserve water at home?",
  options: ["Taking long showers", "Fixing leaks", "Washing cars daily", "Leaving taps open"],
  correctAnswer: 1,
  explanation: "Fixing leaks prevents water wastage and conserves this precious resource.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-5",
  question: "Which practice reduces air pollution from vehicles?",
  options: ["Using public transport", "Using diesel generators", "Driving alone", "Idling engines"],
  correctAnswer: 0,
  explanation: "Using public transport reduces the number of vehicles on the road, cutting down air pollution.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-6",
  question: "Recycling helps protect the environment by:",
  options: ["Increasing landfill waste", "Reducing raw material use", "Polluting rivers", "Increasing greenhouse gases"],
  correctAnswer: 1,
  explanation: "Recycling reduces the need for new raw materials, saving energy and lowering environmental impact.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "protect-7",
  question: "Which of the following reduces energy consumption at home?",
  options: ["Turning off lights when not in use", "Keeping appliances on all day", "Using incandescent bulbs", "Overcharging devices"],
  correctAnswer: 0,
  explanation: "Turning off lights and appliances when not needed saves electricity and reduces environmental impact.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-8",
  question: "Composting helps the environment by:",
  options: ["Increasing landfill waste", "Producing organic fertilizer", "Releasing toxic gases", "Using more water"],
  correctAnswer: 1,
  explanation: "Composting converts organic waste into nutrient-rich fertilizer, reducing landfill waste and pollution.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "protect-9",
  question: "How does reducing meat consumption help the environment?",
  options: ["Increases carbon footprint", "Reduces greenhouse gas emissions", "Consumes more water", "Destroys forests"],
  correctAnswer: 1,
  explanation: "Reducing meat consumption lowers demand for livestock farming, which produces significant greenhouse gases.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "protect-10",
  question: "Which practice helps prevent soil erosion?",
  options: ["Planting ground cover", "Deforestation", "Overgrazing", "Excessive tilling"],
  correctAnswer: 0,
  explanation: "Planting ground cover plants protects soil from erosion and retains moisture.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "protect-11",
  question: "Using bicycles instead of cars helps the environment by:",
  options: ["Increasing traffic congestion", "Reducing air pollution", "Using more fossil fuels", "Destroying roads"],
  correctAnswer: 1,
  explanation: "Bicycles do not emit harmful gases, thus reducing air pollution and carbon footprint.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-12",
  question: "Which of the following is an example of sustainable living?",
  options: ["Using solar panels", "Using plastic bottles daily", "Throwing electronic waste in rivers", "Cutting down forests"],
  correctAnswer: 0,
  explanation: "Using renewable energy sources like solar panels is part of sustainable living practices.",
  category: "environment",
  difficulty: "Intermediate",
  tags: ["environment"]
},
{
  id: "protect-13",
  question: "How does reducing single-use plastic protect the environment?",
  options: ["Increases ocean pollution", "Reduces landfill and marine pollution", "Consumes more energy", "Destroys wildlife habitats"],
  correctAnswer: 1,
  explanation: "Reducing single-use plastic decreases waste in landfills and oceans, protecting wildlife and ecosystems.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-14",
  question: "Which activity contributes least to carbon emissions?",
  options: ["Walking", "Driving a car", "Using an airplane", "Using a diesel generator"],
  correctAnswer: 0,
  explanation: "Walking produces no carbon emissions, making it environmentally friendly.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},
{
  id: "protect-15",
  question: "Why is saving energy important for protecting the environment?",
  options: ["It increases pollution", "It reduces fossil fuel consumption", "It destroys forests", "It harms wildlife"],
  correctAnswer: 1,
  explanation: "Saving energy reduces the need for fossil fuels, lowering greenhouse gas emissions and environmental impact.",
  category: "environment",
  difficulty: "Beginner",
  tags: ["environment"]
},

  // Hygiene Questions (10)
  // Hygiene Questions
{
  id: "hygiene-1",
  question: "What is the recommended minimum time for washing hands?",
  options: ["5 seconds", "10 seconds", "20 seconds", "1 minute"],
  correctAnswer: 2,
  explanation: "Health organizations recommend washing hands for at least 20 seconds to effectively remove germs.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-2",
  question: "Which of the following is the most effective way to prevent the spread of germs?",
  options: ["Wearing gloves", "Regular handwashing with soap", "Using perfumes", "Wearing hats"],
  correctAnswer: 1,
  explanation: "Regular handwashing with soap removes germs and prevents infections.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-3",
  question: "How often should you brush your teeth?",
  options: ["Once a day", "Twice a day", "Once a week", "After every meal"],
  correctAnswer: 1,
  explanation: "Brushing twice a day helps prevent cavities, gum disease, and bad breath.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-4",
  question: "Which practice helps maintain personal hygiene in hot weather?",
  options: ["Skipping showers", "Taking regular showers", "Wearing the same clothes", "Avoid drinking water"],
  correctAnswer: 1,
  explanation: "Regular showers help remove sweat, dirt, and bacteria, especially in hot weather.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-5",
  question: "What is the proper way to cover your mouth when sneezing?",
  options: ["With your hands", "With a tissue or elbow", "With your sleeve", "No need to cover"],
  correctAnswer: 1,
  explanation: "Covering with a tissue or elbow prevents germs from spreading to others.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-6",
  question: "Why is it important to keep nails clean?",
  options: ["To look good", "To prevent accumulation of germs under nails", "To avoid nail polish", "No reason"],
  correctAnswer: 1,
  explanation: "Germs can accumulate under unclean nails, causing infections or illness.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-7",
  question: "How often should you wash your hair?",
  options: ["Once a day", "Once a week", "Every 2–3 days or as needed", "Never"],
  correctAnswer: 2,
  explanation: "Hair should be washed regularly based on scalp type and activity level to maintain cleanliness.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-8",
  question: "Which type of soap is recommended for effective hand hygiene?",
  options: ["Antibacterial or regular soap", "Perfumed soap only", "Detergent soap", "No soap, only water"],
  correctAnswer: 0,
  explanation: "Both regular and antibacterial soap effectively remove germs when used properly.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-9",
  question: "Why should you avoid touching your face with unwashed hands?",
  options: ["It spreads germs to eyes, nose, and mouth", "It feels uncomfortable", "It stains skin", "No reason"],
  correctAnswer: 0,
  explanation: "Touching your face with dirty hands increases the risk of infection.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-10",
  question: "Which habit helps prevent body odor?",
  options: ["Daily showers and clean clothes", "Skipping showers", "Eating junk food", "Wearing the same socks"],
  correctAnswer: 0,
  explanation: "Maintaining cleanliness through regular showers and clean clothing prevents body odor.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-11",
  question: "Why is it important to use clean drinking water?",
  options: ["Prevents waterborne diseases", "Tastes better", "Looks clean", "No reason"],
  correctAnswer: 0,
  explanation: "Using clean water reduces the risk of diseases like cholera, typhoid, and diarrhea.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-12",
  question: "How often should you change your undergarments?",
  options: ["Daily", "Once a week", "Once a month", "Never"],
  correctAnswer: 0,
  explanation: "Changing undergarments daily prevents bacterial growth and maintains hygiene.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-13",
  question: "Why is it important to clean kitchen surfaces regularly?",
  options: ["To prevent food contamination", "To look tidy", "To avoid odors", "No reason"],
  correctAnswer: 0,
  explanation: "Cleaning kitchen surfaces prevents bacteria from contaminating food and causing illness.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-14",
  question: "Which of the following helps prevent the spread of germs in public places?",
  options: ["Wearing masks when sick", "Sharing utensils", "Touching railings frequently", "Not washing hands"],
  correctAnswer: 0,
  explanation: "Wearing masks and practicing hygiene reduces the spread of infectious germs in public areas.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},
{
  id: "hygiene-15",
  question: "Why is proper toilet hygiene important?",
  options: ["Prevents infections and diseases", "Smells good", "Keeps it shiny", "No reason"],
  correctAnswer: 0,
  explanation: "Proper toilet hygiene prevents the spread of bacteria and waterborne diseases.",
  category: "hygiene",
  difficulty: "Beginner",
  tags: ["hygiene"]
},

  // First Aid Questions (10)
  // First Aid Questions
{
  id: "first-aid-1",
  question: "What is the first step in treating a minor cut?",
  options: ["Apply antibiotic ointment", "Cover with a bandage", "Apply pressure to stop bleeding", "Clean the wound with water"],
  correctAnswer: 3,
  explanation: "The first step in treating a minor cut is to clean it with running water to remove dirt and debris.",
  category: "first-aid",
  difficulty: "Beginner",
  tags: ["first-aid"]
},
{
  id: "first-aid-2",
  question: "What should you do if someone is choking and cannot breathe?",
  options: ["Give water", "Perform the Heimlich maneuver", "Slap their back repeatedly", "Make them lie down"],
  correctAnswer: 1,
  explanation: "The Heimlich maneuver helps dislodge the object blocking the airway.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-3",
  question: "How should you treat a burn caused by hot water?",
  options: ["Apply ice directly", "Run under cool water", "Put butter on it", "Cover with cotton"],
  correctAnswer: 1,
  explanation: "Running cool (not ice) water over a burn helps reduce pain and prevent further skin damage.",
  category: "first-aid",
  difficulty: "Beginner",
  tags: ["first-aid"]
},
{
  id: "first-aid-4",
  question: "What is the recommended position for someone who is fainted but breathing normally?",
  options: ["Lying flat on back", "Sitting upright", "Lying on their side", "Standing up"],
  correctAnswer: 2,
  explanation: "Lying on the side (recovery position) helps keep the airway clear and prevents choking if vomiting occurs.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-5",
  question: "If a person has a nosebleed, what should you do?",
  options: ["Tilt head back", "Tilt head forward and pinch nose", "Lie down immediately", "Blow the nose forcefully"],
  correctAnswer: 1,
  explanation: "Tilting the head forward and pinching the nose helps control bleeding and prevents blood from entering the throat.",
  category: "first-aid",
  difficulty: "Beginner",
  tags: ["first-aid"]
},
{
  id: "first-aid-6",
  question: "Which step is important when treating a sprained ankle?",
  options: ["Apply heat immediately", "Rest, Ice, Compression, Elevation (RICE)", "Walk on it immediately", "Massage vigorously"],
  correctAnswer: 1,
  explanation: "The RICE method helps reduce swelling and prevent further injury.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-7",
  question: "What is the correct action for a suspected fracture?",
  options: ["Move the limb immediately", "Immobilize the limb and seek medical help", "Apply heat", "Massage the area"],
  correctAnswer: 1,
  explanation: "Immobilizing the limb prevents further injury and reduces pain until professional medical help is available.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-8",
  question: "If someone is having a seizure, you should:",
  options: ["Hold them down", "Place objects in their mouth", "Move dangerous objects away and protect their head", "Give them water"],
  correctAnswer: 2,
  explanation: "Protecting the person from injury is key; never put anything in their mouth.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-9",
  question: "Which of the following is recommended for insect bites?",
  options: ["Scratching vigorously", "Wash the area and apply cold compress", "Apply heat immediately", "Ignore it completely"],
  correctAnswer: 1,
  explanation: "Cleaning the area and using a cold compress reduces swelling and risk of infection.",
  category: "first-aid",
  difficulty: "Beginner",
  tags: ["first-aid"]
},
{
  id: "first-aid-10",
  question: "What is the first aid step for someone with hypothermia?",
  options: ["Give cold water", "Move to warm place and cover with blankets", "Keep them outside", "Exercise vigorously"],
  correctAnswer: 1,
  explanation: "Moving to a warm place and covering with blankets helps raise body temperature safely.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-11",
  question: "Which is the correct method for CPR in adults?",
  options: ["30 chest compressions followed by 2 rescue breaths", "Only mouth-to-mouth", "Only compressions with no breaths", "Shake the person gently"],
  correctAnswer: 0,
  explanation: "The recommended CPR for adults is 30 chest compressions followed by 2 rescue breaths.",
  category: "first-aid",
  difficulty: "Advanced",
  tags: ["first-aid"]
},
{
  id: "first-aid-12",
  question: "What should you do for a person who has ingested a poisonous substance?",
  options: ["Induce vomiting immediately", "Call emergency services and follow instructions", "Give water immediately", "Ignore it"],
  correctAnswer: 1,
  explanation: "Contacting emergency services is crucial; only follow professional instructions for treatment.",
  category: "first-aid",
  difficulty: "Advanced",
  tags: ["first-aid"]
},
{
  id: "first-aid-13",
  question: "What is the correct action for a heat stroke victim?",
  options: ["Keep in sun and give warm fluids", "Move to a cool place and hydrate", "Give alcohol", "Exercise the person"],
  correctAnswer: 1,
  explanation: "Moving to a cool place and giving fluids helps lower body temperature safely.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-14",
  question: "For a deep cut with heavy bleeding, the first aid step is:",
  options: ["Apply direct pressure", "Wash lightly and leave it", "Apply ointment immediately", "Wrap loosely"],
  correctAnswer: 0,
  explanation: "Applying direct pressure helps control severe bleeding until medical help arrives.",
  category: "first-aid",
  difficulty: "Intermediate",
  tags: ["first-aid"]
},
{
  id: "first-aid-15",
  question: "What is the first action if someone is suspected of having a heart attack?",
  options: ["Give water", "Call emergency services immediately", "Make them walk", "Ignore symptoms"],
  correctAnswer: 1,
  explanation: "Calling emergency services immediately is critical for timely treatment during a heart attack.",
  category: "first-aid",
  difficulty: "Advanced",
  tags: ["first-aid"]
},
// Folk Tales Questions
{
  id: "folk-tales-1",
  question: "In the folk tale, what did Jack trade for magic beans?",
  options: ["A cow", "A sheep", "A horse", "A chicken"],
  correctAnswer: 0,
  explanation: "In Jack and the Beanstalk, Jack trades his family's cow for magic beans that grow into a giant beanstalk.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-2",
  question: "What did the gingerbread man say as he ran away?",
  options: ["You can't catch me!", "Run, run as fast as you can!", "Catch me if you can!", "I'm too fast for you!"],
  correctAnswer: 1,
  explanation: "The gingerbread man famously says 'Run, run as fast as you can! You can't catch me, I'm the gingerbread man!'",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-3",
  question: "How many wishes are typically granted by a genie?",
  options: ["One", "Two", "Three", "Unlimited"],
  correctAnswer: 2,
  explanation: "In most folk tales and legends, a genie grants three wishes to whoever releases them.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-4",
  question: "What did Little Red Riding Hood bring to her grandmother?",
  options: ["Soup", "Cake and wine", "Medicine", "Flowers"],
  correctAnswer: 1,
  explanation: "Little Red Riding Hood was taking cake and wine to her sick grandmother in the classic folk tale.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-5",
  question: "What material did the third little pig use to build his house?",
  options: ["Straw", "Sticks", "Bricks", "Stone"],
  correctAnswer: 2,
  explanation: "In The Three Little Pigs, the third pig built his house of bricks, which withstood the wolf's huffing and puffing.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-6",
  question: "What did Rumpelstiltskin want in return for spinning straw into gold?",
  options: ["The queen's firstborn child", "The queen's ring", "The queen's necklace", "The queen's crown"],
  correctAnswer: 0,
  explanation: "Rumpelstiltskin agreed to spin straw into gold in exchange for the queen's firstborn child.",
  category: "folk-tales",
  difficulty: "Intermediate",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-7",
  question: "What vegetable did the giant grow in Jack and the Beanstalk?",
  options: ["Corn", "Peas", "Beans", "Potatoes"],
  correctAnswer: 2,
  explanation: "Jack and the Beanstalk features magic beans that grow into a giant beanstalk reaching the clouds.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-8",
  question: "What did the prince use to find Cinderella after the ball?",
  options: ["A ring", "A shoe", "A glove", "A necklace"],
  correctAnswer: 1,
  explanation: "The prince used the glass slipper that Cinderella left behind to find her after the ball.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-9",
  question: "Who helped Snow White when she was in the forest?",
  options: ["Fairies", "Dwarfs", "Animals", "Elves"],
  correctAnswer: 1,
  explanation: "Snow White was helped by seven dwarfs who let her stay in their cottage in the forest.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-10",
  question: "What was the name of the boy who never grew up?",
  options: ["Peter Pan", "Tom Thumb", "Jack", "Hansel"],
  correctAnswer: 0,
  explanation: "Peter Pan is the boy who never grew up in J.M. Barrie's story, though it's based on earlier folk tale elements.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-11",
  question: "Who turned into a swan in the folk tale 'The Wild Swans'?",
  options: ["The king", "The princess's brothers", "The witch", "The prince"],
  correctAnswer: 1,
  explanation: "In 'The Wild Swans', the princess's brothers are turned into swans by a wicked stepmother.",
  category: "folk-tales",
  difficulty: "Intermediate",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-12",
  question: "What object helps the protagonist escape the evil sorcerer in many folk tales?",
  options: ["Magic carpet", "Invisibility cloak", "Magic wand", "Flying shoes"],
  correctAnswer: 0,
  explanation: "A magic carpet is commonly used in folk tales to help characters escape danger.",
  category: "folk-tales",
  difficulty: "Intermediate",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-13",
  question: "Who helped Hansel and Gretel find their way home?",
  options: ["Birds", "Bread crumbs", "Fairies", "Animals"],
  correctAnswer: 1,
  explanation: "Hansel and Gretel left a trail of breadcrumbs to find their way home, though in some versions the birds eat them.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-14",
  question: "Which animal tricked the farmer in 'The Tortoise and the Hare'?",
  options: ["Hare", "Tortoise", "Fox", "Dog"],
  correctAnswer: 1,
  explanation: "The slow but steady tortoise wins the race against the overconfident hare.",
  category: "folk-tales",
  difficulty: "Beginner",
  tags: ["folk-tales"]
},
{
  id: "folk-tales-15",
  question: "What did the fisherman catch in 'The Fisherman and His Wife' that granted wishes?",
  options: ["A goldfish", "A turtle", "A magical frog", "A dolphin"],
  correctAnswer: 0,
  explanation: "In 'The Fisherman and His Wife', the fisherman catches a goldfish that grants wishes.",
  category: "folk-tales",
  difficulty: "Intermediate",
  tags: ["folk-tales"]
}
];

export const quizzes: Quiz[] = [
  {
    id: "html-basics-quiz",
    title: "HTML Fundamentals Quiz",
    description: "Test your knowledge of basic HTML concepts and elements",
    category: "coding",
    difficulty: "Beginner",
    duration: 10,
    questions: quizQuestions.filter(q => q.tags.includes("html"))
  },
  {
    id: "css-basics-quiz", 
    title: "CSS Fundamentals Quiz",
    description: "Evaluate your understanding of CSS properties and selectors",
    category: "coding",
    difficulty: "Beginner",
    duration: 10,
    questions: quizQuestions.filter(q => q.tags.includes("css"))
  },
  {
    id: "js-basics-quiz",
    title: "JavaScript Fundamentals Quiz", 
    description: "Test your JavaScript programming knowledge",
    category: "coding",
    difficulty: "Intermediate",
    duration: 15,
    questions: quizQuestions.filter(q => q.tags.includes("javascript"))
  },
  {
    id: "git-basics-quiz",
    title: "Git Version Control Quiz",
    description: "Assess your Git and version control skills",
    category: "coding", 
    difficulty: "Intermediate",
    duration: 10,
    questions: quizQuestions.filter(q => q.tags.includes("git"))
  },
  {
    id: "react-basics-quiz",
    title: "React Fundamentals Quiz",
    description: "Test your React library knowledge",
    category: "coding",
    difficulty: "Intermediate", 
    duration: 12,
    questions: quizQuestions.filter(q => q.tags.includes("react"))
  },
  {
    id: "quantum-physics-quiz",
    title: "Quantum Physics Quiz",
    description: "Challenge your understanding of quantum mechanics",
    category: "science",
    difficulty: "Advanced",
    duration: 15,
    questions: quizQuestions.filter(q => q.tags.includes("quantum"))
  },
  {
    id: "world-history-quiz",
    title: "World History Quiz",
    description: "Test your knowledge of major historical events",
    category: "general",
    difficulty: "Intermediate",
    duration: 12,
    questions: quizQuestions.filter(q => q.tags.includes("history"))
  },
  {
    id: "geography-quiz",
    title: "World Geography Quiz", 
    description: "Explore your knowledge of world geography",
    category: "general",
    difficulty: "Beginner",
    duration: 8,
    questions: quizQuestions.filter(q => q.tags.includes("geography"))
  },
  {
    id: "coding-mixed-quiz",
    title: "Mixed Coding Quiz",
    description: "A comprehensive quiz covering HTML, CSS, JavaScript, and Git",
    category: "coding",
    difficulty: "Intermediate",
    duration: 20,
    questions: quizQuestions.filter(q => 
      q.category === "coding" && 
      (q.tags.includes("html") || q.tags.includes("css") || q.tags.includes("javascript") || q.tags.includes("git"))
    ).slice(0, 15)
  }
];

export const getQuiz = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

export const getQuizzesByCategory = (category: string): Quiz[] => {
  if (category === "all") return quizzes;
  return quizzes.filter(quiz => quiz.category === category);
};

export const getRandomQuestions = (category: string, count: number): QuizQuestion[] => {
  let availableQuestions = quizQuestions;
  
  if (category !== "all") {
    availableQuestions = quizQuestions.filter(q => q.category === category);
  }
  
  // Shuffle and take the requested number
  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
