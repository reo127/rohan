# JavaScript Fundamentals - Student Reference Guide

This document serves as your complete reference for core JavaScript concepts. Each topic includes simple explanations, real-world analogies, and plenty of examples to help you understand and practice.

---

## 1. Variables 📦

Think of variables as **labeled boxes** where you can store different items (data). Just like you might have a box labeled "Books" or "Clothes", variables have names and store values.

### Why do we need variables?
- Store information we want to use later
- Make our code more readable and organized
- Avoid repeating the same values multiple times

### Types of Variable Declarations

| Keyword | When to Use | Can Change Value? | Example Use Case |
|---------|-------------|-------------------|------------------|
| `let` | When the value might change | ✅ Yes | Counter, user input, temporary data |
| `const` | When the value stays the same | ❌ No | Pi value, college name, student ID |
| `var` | **Avoid using** (old way) | ✅ Yes | Legacy code only |

### Simple Examples

```javascript
// Using let - values that can change
let studentName = "Priya Sharma";
let currentGrade = "A";
let attendanceCount = 15;

// Later, we can change these values
studentName = "Priya S. Sharma";  // Updated name
currentGrade = "A+";              // Grade improved!
attendanceCount = 16;             // Attended one more class

console.log(studentName);         // Output: Priya S. Sharma
console.log(currentGrade);        // Output: A+

// Using const - values that never change
const studentId = "2024CSE001";
const collegeName = "KLE College";
const maxMarks = 100;

console.log(studentId);           // Output: 2024CSE001
console.log(collegeName);         // Output: KLE College

// This would cause an error because const cannot be changed:
// collegeName = "Different College"; // ❌ Error!
```

### Practical Example

```javascript
// Student information
let studentAge = 19;
let courseName = "Computer Science";
let isPresent = true;

// Shopping example
let itemPrice = 299;
let quantity = 2;
let totalCost = itemPrice * quantity;

console.log("Item price: ₹" + itemPrice);
console.log("Quantity: " + quantity);
console.log("Total cost: ₹" + totalCost);
// Output: 
// Item price: ₹299
// Quantity: 2
// Total cost: ₹598
```

---

## 2. Data Types 🏷️

Data types tell JavaScript what kind of information we're working with. Just like we categorize things in real life (books, numbers, yes/no questions), JavaScript categorizes data.

### String 📝 - Text Data
Strings represent text. Always wrap them in quotes!

```javascript
// Different ways to create strings
let studentName = "Rahul Verma";
let courseName = 'JavaScript Fundamentals';
let message = `Welcome to KLE College!`;

// Examples
let emailAddress = "rahul@klecollege.edu";
let phoneNumber = "9876543210";
let city = "Belagavi";

console.log(studentName);    // Output: Rahul Verma
console.log(emailAddress);   // Output: rahul@klecollege.edu

// Joining strings together
let firstName = "Priya";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName);       // Output: Priya Sharma

// Using template literals (backticks)
let greeting = `Hello, my name is ${firstName}`;
console.log(greeting);       // Output: Hello, my name is Priya
```

### Number 🔢 - Numeric Data
JavaScript uses one type for all numbers.

```javascript
// Different types of numbers
let age = 19;                    // Whole number
let cgpa = 8.75;                // Decimal number
let temperature = -5;           // Negative number
let population = 1400000000;    // Large number

// Examples
let mathMarks = 85;
let physicsMarks = 78;
let totalMarks = mathMarks + physicsMarks;
let averageMarks = totalMarks / 2;

console.log("Math marks: " + mathMarks);           // Output: Math marks: 85
console.log("Physics marks: " + physicsMarks);     // Output: Physics marks: 78
console.log("Total marks: " + totalMarks);         // Output: Total marks: 163
console.log("Average marks: " + averageMarks);     // Output: Average marks: 81.5
```

### Boolean ✅❌ - True/False Values
Booleans represent yes/no, true/false conditions.

```javascript
// Simple boolean values
let isLoggedIn = true;
let hasSubmittedAssignment = false;
let isWeekend = false;

console.log(isLoggedIn);              // Output: true
console.log(hasSubmittedAssignment);  // Output: false

// Booleans from comparisons
let age = 19;
let isAdult = age >= 18;        // true
let canVote = age >= 18;        // true

console.log("Is adult: " + isAdult);  // Output: Is adult: true
console.log("Can vote: " + canVote);  // Output: Can vote: true

// Practical example
let attendance = 75;
let minimumAttendance = 70;
let isEligibleForExam = attendance >= minimumAttendance;
console.log("Eligible for exam: " + isEligibleForExam); // Output: Eligible for exam: true
```

### undefined 🤷‍♀️ - No Value Assigned
When a variable is declared but not given a value.

```javascript
let studentGrade;  // Declared but no value assigned
console.log(studentGrade); // Output: undefined

// This often happens when waiting for user input
let userAge;
console.log(userAge);      // Output: undefined
// Later, after getting input...
userAge = 20;
console.log(userAge);      // Output: 20
```

### null 🗑️ - Intentionally Empty
When you deliberately want to show "no value" or "empty".

```javascript
let selectedCourse = null;  // No course selected yet
let profilePicture = null;  // No picture uploaded

console.log(selectedCourse);  // Output: null

// Later...
selectedCourse = "JavaScript";  // Now has a value
console.log(selectedCourse);    // Output: JavaScript
```

### Checking Data Types with typeof

```javascript
let name = "Rahul";
let age = 20;
let isStudent = true;
let grade;

console.log(typeof name);      // Output: string
console.log(typeof age);       // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof grade);     // Output: undefined
```

---

## 3. Operators ⚡

Operators are like **tools** that help you perform different operations on your data.

### Arithmetic Operators 🧮

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.33...
console.log(a % b);  // Modulus (remainder): 1

// Real example: Grade calculation
let totalMarks = 450;
let subjects = 5;
let averageMarks = totalMarks / subjects;
console.log("Average marks: " + averageMarks); // Output: Average marks: 90

// Checking if a number is even or odd using modulus
let number = 15;
let remainder = number % 2;
console.log("15 divided by 2, remainder: " + remainder); // Output: 15 divided by 2, remainder: 1
// If remainder is 0, number is even. If remainder is 1, number is odd.
```

### Assignment Operators 📝

```javascript
let score = 50;

// Basic assignment
score = 75;          // score is now 75
console.log(score);  // Output: 75

// Compound assignments (shortcuts)
score += 10;         // Same as: score = score + 10 (now 85)
console.log(score);  // Output: 85

score -= 5;          // Same as: score = score - 5 (now 80)
console.log(score);  // Output: 80

score *= 2;          // Same as: score = score * 2 (now 160)
console.log(score);  // Output: 160

score /= 4;          // Same as: score = score / 4 (now 40)
console.log(score);  // Output: 40

// Practical example: Shopping cart
let cartTotal = 0;
cartTotal += 299;    // Added item worth ₹299
cartTotal += 499;    // Added item worth ₹499
cartTotal -= 100;    // Applied discount of ₹100
console.log("Cart total: ₹" + cartTotal); // Output: Cart total: ₹698
```

### Comparison Operators 🔍

```javascript
let studentAge = 19;
let minimumAge = 18;

// Basic comparisons
console.log(studentAge > minimumAge);   // true (19 is greater than 18)
console.log(studentAge < minimumAge);   // false (19 is not less than 18)
console.log(studentAge >= 18);          // true (19 is greater than or equal to 18)
console.log(studentAge <= 25);          // true (19 is less than or equal to 25)

// Equality comparisons (IMPORTANT!)
console.log(5 == "5");    // true (converts types, so number 5 equals string "5")
console.log(5 === "5");   // false (strict comparison - different types)
console.log(5 != "6");    // true (5 is not equal to "6")
console.log(5 !== "5");   // true (5 is not strictly equal to "5" - different types)

// Real example: Age verification
let userAge = 17;
let canAccessContent = userAge >= 18;
console.log("Can access 18+ content: " + canAccessContent); // Output: Can access 18+ content: false

// Password checking
let enteredPassword = "mypassword123";
let storedPassword = "mypassword123";
let isPasswordCorrect = enteredPassword === storedPassword;
console.log("Login successful: " + isPasswordCorrect); // Output: Login successful: true
```

### Logical Operators 🧠

```javascript
let hasValidId = true;
let hasGoodGrades = true;
let hasFeePaid = false;

// AND operator (&&) - ALL conditions must be true
let canEnroll = hasValidId && hasGoodGrades && hasFeePaid;
console.log("Can enroll: " + canEnroll); // Output: Can enroll: false (because hasFeePaid is false)

// OR operator (||) - AT LEAST ONE condition must be true
let canGetScholarship = hasGoodGrades || hasValidId;
console.log("Eligible for scholarship: " + canGetScholarship); // Output: Eligible for scholarship: true

// NOT operator (!) - Reverses the boolean value
let isIneligible = !canEnroll;
console.log("Is ineligible: " + isIneligible); // Output: Is ineligible: true

// More examples
let isRaining = false;
let haveBrightSun = true;
let canGoOutside = !isRaining && haveBrightSun;
console.log("Can go outside: " + canGoOutside); // Output: Can go outside: true

let hasInternet = true;
let hasElectricity = false;
let canWorkOnLaptop = hasInternet || hasElectricity;
console.log("Can work on laptop: " + canWorkOnLaptop); // Output: Can work on laptop: true
```

---

## 4. Arrays 📚

Arrays are like **ordered lists**. Think of them as a row of lockers in school, where each locker has a number (starting from 0) and can store something inside.

### Creating Arrays

```javascript
// Different ways to create arrays
let students = ["Aarav", "Priya", "Rohit", "Sneha"];
let marks = [85, 92, 78, 96, 88];
let mixedData = ["John", 20, true, "Computer Science"];

// Empty array
let newStudents = [];

console.log(students);    // Output: ["Aarav", "Priya", "Rohit", "Sneha"]
console.log(marks);       // Output: [85, 92, 78, 96, 88]
```

### Accessing Array Elements

```javascript
let courses = ["Math", "Physics", "Chemistry", "Biology", "English"];

// Accessing elements (remember: arrays start at index 0!)
console.log(courses[0]);  // Output: Math (first element)
console.log(courses[1]);  // Output: Physics (second element)
console.log(courses[4]);  // Output: English (last element)

// Getting array length
console.log(courses.length); // Output: 5

// Accessing last element using length
console.log(courses[courses.length - 1]); // Output: English

// What happens with invalid index?
console.log(courses[10]); // Output: undefined
```

### Real-World Examples

```javascript
// Student names in a class
let classStudents = ["Amit", "Priya", "Rajesh", "Sunita"];
console.log("Total students: " + classStudents.length);    // Output: Total students: 4
console.log("First student: " + classStudents[0]);         // Output: First student: Amit
console.log("Last student: " + classStudents[3]);          // Output: Last student: Sunita

// Test scores
let testScores = [85, 92, 78, 96, 88];
console.log("First test score: " + testScores[0]);         // Output: First test score: 85
console.log("Highest visible score: " + testScores[3]);    // Output: Highest visible score: 96
console.log("Total tests taken: " + testScores.length);    // Output: Total tests taken: 5

// Shopping list
let shoppingList = ["Notebook", "Pen", "Eraser", "Scale"];
console.log("Need to buy " + shoppingList.length + " items");  // Output: Need to buy 4 items
console.log("First item to buy: " + shoppingList[0]);          // Output: First item to buy: Notebook

// Mixed data about a student
let studentInfo = ["Priya Sharma", 19, "Computer Science", true, 8.5];
console.log("Student name: " + studentInfo[0]);        // Output: Student name: Priya Sharma
console.log("Student age: " + studentInfo[1]);         // Output: Student age: 19
console.log("Course: " + studentInfo[2]);              // Output: Course: Computer Science
console.log("Is active: " + studentInfo[3]);           // Output: Is active: true
console.log("CGPA: " + studentInfo[4]);                // Output: CGPA: 8.5
```

---

## 5. Objects 🏠

Objects are like **information cards** or **profile sheets**. Think of an object as a student ID card that has different pieces of information like name, photo, course, etc., each with a label.

### Creating Objects

```javascript
// Object with student information
let student = {
    name: "Priya Sharma",
    age: 19,
    course: "Computer Science",
    cgpa: 8.5,
    isActive: true
};

// Empty object
let newStudent = {};

console.log(student); // Shows the entire object
```

### Accessing Object Properties

```javascript
let student = {
    name: "Rahul Verma",
    age: 20,
    course: "Mechanical Engineering",
    cgpa: 7.8,
    isActive: true
};

// Dot notation (most common way)
console.log(student.name);        // Output: Rahul Verma
console.log(student.age);         // Output: 20
console.log(student.course);      // Output: Mechanical Engineering
console.log(student.cgpa);        // Output: 7.8

// Bracket notation
console.log(student["name"]);     // Output: Rahul Verma
console.log(student["course"]);   // Output: Mechanical Engineering

// Using variables to access properties
let propertyName = "age";
console.log(student[propertyName]); // Output: 20
```

### Objects with Arrays

```javascript
let student = {
    name: "Anjali Singh",
    age: 18,
    course: "Electronics",
    subjects: ["Math", "Physics", "Electronics", "Programming"],
    grades: [85, 92, 78, 96]
};

// Accessing arrays inside objects
console.log(student.subjects);        // Output: ["Math", "Physics", "Electronics", "Programming"]
console.log(student.subjects[0]);     // Output: Math
console.log(student.subjects[1]);     // Output: Physics

console.log(student.grades);          // Output: [85, 92, 78, 96]
console.log(student.grades[3]);       // Output: 96

// Getting lengths
console.log("Total subjects: " + student.subjects.length);  // Output: Total subjects: 4
console.log("Total grades: " + student.grades.length);      // Output: Total grades: 4
```

### Nested Objects

```javascript
let student = {
    name: "Kiran Patel",
    age: 19,
    course: "Computer Science",
    contact: {
        email: "kiran@example.com",
        phone: "9876543210",
        address: "Belagavi, Karnataka"
    },
    academics: {
        semester: 4,
        cgpa: 8.2,
        attendance: 85
    }
};

// Accessing nested object properties
console.log(student.contact.email);           // Output: kiran@example.com
console.log(student.contact.phone);           // Output: 9876543210
console.log(student.academics.cgpa);          // Output: 8.2
console.log(student.academics.semester);      // Output: 4

// Using bracket notation for nested objects
console.log(student["contact"]["address"]);   // Output: Belagavi, Karnataka
console.log(student["academics"]["attendance"]); // Output: 85
```

### Real-World Object Examples

```javascript
// Library book object
let book = {
    title: "JavaScript for Beginners",
    author: "John Doe",
    pages: 300,
    isAvailable: true,
    borrowedBy: null
};

console.log("Book title: " + book.title);              // Output: Book title: JavaScript for Beginners
console.log("Total pages: " + book.pages);             // Output: Total pages: 300
console.log("Is available: " + book.isAvailable);      // Output: Is available: true

// College information
let college = {
    name: "KLE College",
    location: "Belagavi",
    established: 1947,
    courses: ["Engineering", "Medicine", "Arts", "Commerce"],
    totalStudents: 5000
};

console.log(college.name + " is located in " + college.location);  
// Output: KLE College is located in Belagavi

console.log("College offers " + college.courses.length + " main courses");
// Output: College offers 4 main courses

console.log("First course offered: " + college.courses[0]);
// Output: First course offered: Engineering
```

---

## 6. Functions 🔧

Functions are like **recipes** or **instruction sets**. Just like a recipe tells you how to make a dish step by step, a function tells the computer how to do a specific task.

### Why Use Functions?
- **Reusability**: Write once, use many times
- **Organization**: Keep code neat and organized
- **Avoid repetition**: Don't write the same code again and again

### Basic Function Structure

```javascript
// Creating a function
function functionName() {
    // Code to execute goes here
}

// Using (calling) the function
functionName();
```

### Simple Functions

```javascript
// Function without parameters
function sayHello() {
    console.log("Hello, KLE College students!");
}

// Call the function
sayHello(); // Output: Hello, KLE College students!
sayHello(); // Output: Hello, KLE College students! (can call multiple times)

// Another simple function
function showWelcomeMessage() {
    console.log("Welcome to JavaScript class!");
    console.log("Let's learn programming!");
}

showWelcomeMessage();
// Output: 
// Welcome to JavaScript class!
// Let's learn programming!
```

### Functions with Parameters

```javascript
// Function that takes input (parameters)
function greetStudent(studentName) {
    console.log("Hello " + studentName + "!");
}

// Call with different names
greetStudent("Priya");    // Output: Hello Priya!
greetStudent("Rahul");    // Output: Hello Rahul!
greetStudent("Anjali");   // Output: Hello Anjali!

// Function with multiple parameters
function showStudentInfo(name, course, semester) {
    console.log("Student Name: " + name);
    console.log("Course: " + course);
    console.log("Semester: " + semester);
}

showStudentInfo("Amit Sharma", "Computer Science", 4);
// Output:
// Student Name: Amit Sharma
// Course: Computer Science
// Semester: 4

showStudentInfo("Priya Patel", "Electronics", 2);
// Output:
// Student Name: Priya Patel
// Course: Electronics
// Semester: 2
```

### Functions with Return Values

```javascript
// Function that returns a value
function addTwoNumbers(a, b) {
    let result = a + b;
    return result;
}

// Using the returned value
let sum = addTwoNumbers(10, 5);
console.log("Sum is: " + sum); // Output: Sum is: 15

let anotherSum = addTwoNumbers(25, 30);
console.log("Another sum: " + anotherSum); // Output: Another sum: 55

// Function to calculate percentage
function calculatePercentage(marksObtained, totalMarks) {
    let percentage = (marksObtained / totalMarks) * 100;
    return percentage;
}

let myPercentage = calculatePercentage(425, 500);
console.log("Your percentage: " + myPercentage + "%"); // Output: Your percentage: 85%

let friendPercentage = calculatePercentage(380, 500);
console.log("Friend's percentage: " + friendPercentage + "%"); // Output: Friend's percentage: 76%
```

### Functions with Default Parameters

```javascript
// Function with default values
function createGreeting(name, course = "General") {
    return "Hello " + name + ", welcome to " + course + " course!";
}

// Using with both parameters
let greeting1 = createGreeting("Priya", "Computer Science");
console.log(greeting1); // Output: Hello Priya, welcome to Computer Science course!

// Using with default parameter
let greeting2 = createGreeting("Rahul");
console.log(greeting2); // Output: Hello Rahul, welcome to General course!

// Another example
function calculateArea(length, width = 1) {
    return length * width;
}

console.log(calculateArea(5, 3));  // Output: 15 (5 * 3)
console.log(calculateArea(7));     // Output: 7 (7 * 1, using default width)
```

### Real-World Function Examples

```javascript
// Function to check if student passes
function checkResult(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(65));  // Output: Pass
console.log(checkResult(35));  // Output: Fail

// Function to calculate total marks
function calculateTotal(subject1, subject2, subject3) {
    let total = subject1 + subject2 + subject3;
    return total;
}

let studentTotal = calculateTotal(85, 78, 92);
console.log("Total marks: " + studentTotal); // Output: Total marks: 255

// Function to create student ID
function generateStudentId(year, course, rollNumber) {
    let studentId = year + course + rollNumber;
    return studentId;
}

let newId = generateStudentId("2024", "CSE", "001");
console.log("Student ID: " + newId); // Output: Student ID: 2024CSE001
```

---

## 7. Rest and Spread Operators (...) 🔄

The three dots (`...`) are like a **magic tool** that can collect multiple items or spread them out.

### Rest Parameter (...) - Collecting Multiple Values

The **rest parameter** collects multiple values into an array. Think of it as gathering scattered items into a basket.

```javascript
// Function that can take any number of arguments
function addAllNumbers(...numbers) {
    console.log(numbers); // This will be an array of all the numbers passed
    
    let total = 0;
    // Simple way to add all numbers
    total += numbers[0] || 0;  // Add first number (or 0 if doesn't exist)
    total += numbers[1] || 0;  // Add second number (or 0 if doesn't exist)
    total += numbers[2] || 0;  // Add third number (or 0 if doesn't exist)
    total += numbers[3] || 0;  // Add fourth number (or 0 if doesn't exist)
    total += numbers[4] || 0;  // Add fifth number (or 0 if doesn't exist)
    
    return total;
}

// Can pass different numbers of arguments
console.log(addAllNumbers(10, 20, 30));           // Output: 60
console.log(addAllNumbers(5, 15, 25, 35));        // Output: 80
console.log(addAllNumbers(100));                  // Output: 100
console.log(addAllNumbers(2, 4, 6, 8, 10));       // Output: 30
```

### Rest Parameter with Other Parameters

```javascript
// Rest parameter must be the last parameter
function createStudentInfo(name, course, ...subjects) {
    console.log("Student Name: " + name);
    console.log("Course: " + course);
    console.log("Subjects: " + subjects);
    console.log("Total subjects: " + subjects.length);
}

createStudentInfo("Priya", "CSE", "Math", "Physics", "Programming");
// Output:
// Student Name: Priya
// Course: CSE
// Subjects: Math,Physics,Programming
// Total subjects: 3

createStudentInfo("Rahul", "ECE", "Electronics", "Signals", "Control Systems", "VLSI");
// Output:
// Student Name: Rahul
// Course: ECE
// Subjects: Electronics,Signals,Control Systems,VLSI
// Total subjects: 4
```

### Spread Operator (...) - Expanding Arrays

The **spread operator** expands an array into individual elements. Think of it as unpacking a box and laying out all items.

```javascript
// Using spread to pass array elements as separate arguments
function showThreeNames(name1, name2, name3) {
    console.log("First: " + name1);
    console.log("Second: " + name2);
    console.log("Third: " + name3);
}

let students = ["Priya", "Rahul", "Anjali"];

// Without spread (this won't work as expected)
showThreeNames(students); 
// Output: 
// First: Priya,Rahul,Anjali
// Second: undefined  
// Third: undefined

// With spread (this works correctly)
showThreeNames(...students);
// Output:
// First: Priya
// Second: Rahul
// Third: Anjali
```

### Combining Arrays with Spread

```javascript
let group1 = ["Amit", "Priya"];
let group2 = ["Rahul", "Sneha"];
let group3 = ["Vikram", "Pooja"];

// Combining arrays using spread
let allStudents = [...group1, ...group2, ...group3];
console.log(allStudents); 
// Output: ["Amit", "Priya", "Rahul", "Sneha", "Vikram", "Pooja"]

// Adding individual elements while spreading
let cseStudents = ["Alice", "Bob"];
let allStudents2 = ["John", ...cseStudents, "Charlie"];
console.log(allStudents2); 
// Output: ["John", "Alice", "Bob", "Charlie"]

// Another example
let mathScores = [85, 92];
let physicsScores = [78, 88];
let allScores = [...mathScores, ...physicsScores, 95, 87];
console.log(allScores); 
// Output: [85, 92, 78, 88, 95, 87]
```

### Copying Arrays with Spread

```javascript
let originalScores = [85, 92, 78, 96];

// Creating a copy using spread
let scoresCopy = [...originalScores];

console.log("Original:", originalScores);  // Output: Original: [85, 92, 78, 96]
console.log("Copy:", scoresCopy);          // Output: Copy: [85, 92, 78, 96]

// The copy is independent - changing it doesn't affect the original
originalScores[0] = 100;
console.log("Original after change:", originalScores);  // Output: Original after change: [100, 92, 78, 96]
console.log("Copy after original changed:", scoresCopy); // Output: Copy after original changed: [85, 92, 78, 96]
```

### Real-World Examples

```javascript
// 1. Function to find maximum marks
function findHighestScore(...scores) {
    let highest = scores[0];
    
    // Check each score manually
    if (scores[1] > highest) highest = scores[1];
    if (scores[2] > highest) highest = scores[2];
    if (scores[3] > highest) highest = scores[3];
    if (scores[4] > highest) highest = scores[4];
    
    return highest;
}

console.log(findHighestScore(85, 92, 78, 96, 88)); // Output: 96
console.log(findHighestScore(75, 82, 90));         // Output: 90

// 2. Combining class lists
let morningBatch = ["Priya", "Rahul"];
let eveningBatch = ["Anjali", "Vikram"];
let weekendBatch = ["Amit", "Sneha"];

let allStudents = [...morningBatch, ...eveningBatch, ...weekendBatch];
console.log("All students:", allStudents);
// Output: All students: ["Priya", "Rahul", "Anjali", "Vikram", "Amit", "Sneha"]

// 3. Creating student record with flexible subjects
function createStudentRecord(name, course, ...subjects) {
    let student = {
        studentName: name,
        courseName: course,
        subjectList: subjects,
        totalSubjects: subjects.length
    };
    return student;
}

let student1 = createStudentRecord("Priya", "CSE", "Math", "Physics", "Programming", "Database");
console.log(student1);
// Output: {studentName: "Priya", courseName: "CSE", subjectList: ["Math", "Physics", "Programming", "Database"], totalSubjects: 4}
---

## 8. Control Flow Statements 🚦

Control flow statements allow you to make decisions in your code. They control which lines of code are executed and when, based on certain conditions. Think of them as a traffic signal that directs the flow of traffic.

### `if...else` Statement

The `if...else` statement executes a block of code if a condition is true, and another block if the condition is false. It's like making a simple choice: "If it's raining, take an umbrella; otherwise, wear sunglasses."

```javascript
// Example: Age verification for driving
let age = 15;

if (age >= 18) {
    console.log("You can drive a car.");
} else {
    console.log("You cannot drive a car.");
}
// Output: You cannot drive a car.

let anotherAge = 20;
if (anotherAge >= 18) {
    console.log("You can drive a car."); // This block runs
} else {
    console.log("You cannot drive a car.");
}
// Output: You can drive a car.
```

### `else if` Statement

Used for checking multiple conditions. It's like having a list of choices. "If it's morning, say 'Good Morning'. If it's afternoon, say 'Good Afternoon'. Otherwise, say 'Hello'."

```javascript
// Example: Greeting based on time of day
let time = "afternoon";

if (time === "morning") {
    console.log("Good Morning");
} else if (time === "afternoon") {
    console.log("Good Afternoon");
} else if (time === "evening") {
    console.log("Good Evening");
} else {
    console.log("Hello!");
}
// Output: Good Afternoon
```

### Nested `if...else`

You can put an `if...else` statement inside another one. This is useful for checking a condition that depends on another condition. "To get a passport, first, do you have an Aadhaar card? If yes, then do you also have a PAN card?"

```javascript
// Example: Passport eligibility
let hasAadhaar = true;
let hasPanCard = false;

if (hasAadhaar === true) {
    // Outer condition is true, check inner condition
    if (hasPanCard === true) {
        console.log("You can get your passport.");
    } else {
        console.log("You have Aadhaar but need a PAN card to get a passport.");
    }
} else {
    console.log("You need an Aadhaar card first.");
}
// Output: You have Aadhaar but need a PAN card to get a passport.
```

### Ternary Operator (`? :`)

A shortcut for the `if...else` statement. It's a clean way to write a simple condition in one line.

**Syntax:** `condition ? value_if_true : value_if_false`

```javascript
// Example: Driving age check with ternary operator
let userAge = 15;

let message = userAge >= 18 ? "You can drive." : "You cannot drive.";
console.log(message); // Output: You cannot drive.

let anotherUserAge = 21;
let anotherMessage = anotherUserAge >= 18 ? "You can drive." : "You cannot drive.";
console.log(anotherMessage); // Output: You can drive.
```

### `switch` Statement

The `switch` statement is used to perform different actions based on different conditions. It's like a menu at a restaurant where you choose an option (1 for pizza, 2 for a burger, etc.).

```javascript
// Example: Customer feedback rating
let rating = 3;

switch (rating) {
    case 1:
        console.log("Poor");
        break; // 'break' stops the execution
    case 2:
        console.log("Average");
        break;
    case 3:
        console.log("Good");
        break;
    case 4:
        console.log("Excellent");
        break;
    default: // 'default' runs if no case matches
        console.log("Invalid rating");
}
// Output: Good
```

### Practical Example: Calculating Grades

This function uses `if...else if...else` to determine a student's grade based on their percentage.

```javascript
function calculateGrade(m1, m2, m3, m4, m5) {
    let totalMarks = m1 + m2 + m3 + m4 + m5;
    let percentage = (totalMarks / 500) * 100;

    console.log("Your percentage is: " + percentage + "%");

    if (percentage >= 90) {
        return "Grade A";
    } else if (percentage >= 70 && percentage < 90) {
        return "Grade B";
    } else if (percentage >= 50 && percentage < 70) {
        return "Grade C";
    } else {
        return "Fail";
    }
}

let myGrade = calculateGrade(85, 78, 92, 88, 75); // Percentage = 83.6%
console.log(myGrade); // Output: Grade B

let friendGrade = calculateGrade(95, 98, 90, 92, 91); // Percentage = 93.2%
console.log(friendGrade); // Output: Grade A
```

---

## 9. Arrow Functions (=>) 🏹

Arrow functions are a shorter, more modern way to write functions in JavaScript. They are very popular and make the code cleaner.

### Basic Arrow Function Syntax

```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => {
    return a + b;
};

// If the function has only one line of code and it's a return statement,
// you can make it even shorter!
const subtract = (a, b) => a - b;

console.log(add(5, 10));          // Output: 15
console.log(addArrow(5, 10));     // Output: 15
console.log(subtract(10, 4));     // Output: 6
```

### Arrow Functions with One Parameter

If you have only one parameter, you can even remove the parentheses `()`.

```javascript
// Regular function
function double(num) {
    return num * 2;
}

// Arrow function equivalent
const doubleArrow = num => num * 2;

console.log(double(8));       // Output: 16
console.log(doubleArrow(8));  // Output: 16
```

---

## 10. Loops 🔄

Loops are used to run the same block of code over and over again, as long as a certain condition is true. This is extremely useful for working with arrays or repeating any task.

### The `for` Loop

The `for` loop is the most common type of loop. It's perfect when you know exactly how many times you want to repeat the code.

It has three parts:
1.  **Initialization**: A counter variable is created (e.g., `let i = 0`).
2.  **Condition**: The loop continues as long as this is true (e.g., `i < 5`).
3.  **Increment**: The counter is updated after each loop run (e.g., `i++`).

```javascript
// A simple for loop that counts from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}
// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
```

### Using a `for` Loop with an Array

This is a very common use case. You can loop through an array to access each element.

```javascript
let courses = ["Math", "Physics", "Chemistry", "Biology"];

// Loop through the courses array
for (let i = 0; i < courses.length; i++) {
    console.log("Course " + (i + 1) + ": " + courses[i]);
}
// Output:
// Course 1: Math
// Course 2: Physics
// Course 3: Chemistry
// Course 4: Biology
```

### The `while` Loop

The `while` loop repeats a block of code as long as a condition is true. It's useful when you don't know in advance how many times the loop should run.

```javascript
// A simple while loop
let count = 0;
while (count < 3) {
    console.log("Count is " + count);
    count++; // Important: Don't forget to increment the counter!
}
// Output:
// Count is 0
// Count is 1
// Count is 2
```

### Real-World Loop Example

Let's calculate the total of marks in an array.

```javascript
let marks = [85, 92, 78, 96, 88];
let total = 0;

// Using a for loop to add up all the marks
for (let i = 0; i < marks.length; i++) {
    total += marks[i]; // total = total + marks[i]
}

console.log("The total marks are: " + total); // Output: The total marks are: 439
```

---

## 11. DOM Manipulation 🌳

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of objects; think of it as a family tree for your HTML elements.

DOM manipulation is the process of using JavaScript to add, remove, or change HTML elements on a web page.

### Selecting HTML Elements

To manipulate an element, you first need to select it.

**HTML for Examples:**
```html
<div id="main-container">
    <h1 class="heading">Welcome, Students!</h1>
    <p>This is a paragraph about our college.</p>
    <ul>
        <li>Computer Science</li>
        <li>Electronics</li>
        <li>Mechanical</li>
    </ul>
    <button id="change-btn">Click Me</button>
</div>
```

| Method | Description | Example | 
|---|---|---|
| `getElementById()` | Selects a single element by its unique `id`. | `let main = document.getElementById('main-container');` |
| `querySelector()` | Selects the **first** element that matches a CSS selector. | `let heading = document.querySelector('.heading');` |
| `querySelectorAll()` | Selects **all** elements that match a CSS selector. | `let listItems = document.querySelectorAll('li');` |

```javascript
// Selecting a single element by its ID
const mainContainer = document.getElementById('main-container');

// Selecting the first element matching a CSS selector (e.g., a class)
const heading = document.querySelector('.heading');

// Selecting all elements matching a CSS selector (e.g., all list items)
const listItems = document.querySelectorAll('li');

console.log(mainContainer); // Shows the div element
console.log(heading.innerText); // Output: Welcome, Students!
console.log(listItems.length); // Output: 3
```

### Changing Element Content

Once you select an element, you can change what it displays.

-   `innerText`: Changes the text content of an element.
-   `innerHTML`: Changes the HTML content inside an element.

```javascript
// Select the heading
const pageHeading = document.querySelector('h1');

// Change its text
pageHeading.innerText = "Welcome to KLE College!";

// Select the paragraph
const paragraph = document.querySelector('p');

// Change its HTML content to include bold text
paragraph.innerHTML = "This is an <strong>updated</strong> paragraph.";
```

### Changing Element Styles and Attributes

You can change CSS styles and HTML attributes (like `src` or `href`).

```javascript
// Select the heading
const heading = document.querySelector('h1');

// Change CSS properties using the .style property
heading.style.color = "blue";
heading.style.textAlign = "center";
heading.style.backgroundColor = "#f0f0f0"; // Note: background-color becomes backgroundColor

// Changing an attribute (e.g., if we had an image)
// let logo = document.querySelector('#college-logo');
// logo.src = 'new-logo.png'; // Changes the image source
```

### Adding and Removing CSS Classes

It's often better to change classes than to apply styles directly in JavaScript.

**CSS for Example:**
```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

```javascript
// Select the first list item
const firstListItem = document.querySelector('li');

// Add a class to it
firstListItem.classList.add('highlight');

// Remove the class after 2 seconds
setTimeout(() => {
    firstListItem.classList.remove('highlight');
}, 2000);
```

### Creating and Adding New Elements

You can create new elements from scratch and add them to the page.

```javascript
// 1. Create a new element
const newListItem = document.createElement('li');

// 2. Add content to it
newListItem.innerText = "Civil Engineering";

// 3. Select the parent element (the ul)
const list = document.querySelector('ul');

// 4. Append the new element to the parent
list.appendChild(newListItem);
```

### Handling Events

JavaScript becomes truly interactive when you respond to user actions like clicks, mouse movements, or key presses. The `addEventListener()` method is the modern way to do this.

```javascript
// Select the button
const changeButton = document.getElementById('change-btn');

// Add a 'click' event listener
changeButton.addEventListener('click', () => {
    // This code runs every time the button is clicked
    const container = document.getElementById('main-container');
    container.style.border = "2px solid red";

    const heading = document.querySelector('h1');
    heading.innerText = "Button Clicked!";
});
```

---

## 11. Array Methods 📋

Array methods are like **special tools** that help you work with arrays more easily. Instead of writing loops every time, these methods do the work for you!

### forEach() - Do Something with Each Element

`forEach()` goes through each element in an array and performs an action. It's like visiting each student in a classroom one by one.

```javascript
let students = ["Priya", "Rahul", "Anjali", "Vikram"];

// Using forEach to greet each student
students.forEach(function(student) {
    console.log("Hello " + student + "!");
});
// Output:
// Hello Priya!
// Hello Rahul!
// Hello Anjali!
// Hello Vikram!

// Same thing with arrow function (shorter way)
students.forEach(student => {
    console.log("Welcome " + student);
});

// Real example: Adding attendance
let attendance = [];
students.forEach(student => {
    attendance.push(student + " - Present");
});
console.log(attendance);
// Output: ["Priya - Present", "Rahul - Present", "Anjali - Present", "Vikram - Present"]
```

### map() - Transform Each Element

`map()` creates a **new array** by transforming each element of the original array. It's like taking a list of numbers and converting each one to its double.

```javascript
let marks = [75, 85, 92, 68, 78];

// Create a new array with each mark increased by 5 (bonus marks)
let bonusMarks = marks.map(function(mark) {
    return mark + 5;
});

console.log("Original marks:", marks);        // Output: [75, 85, 92, 68, 78]
console.log("After bonus:", bonusMarks);      // Output: [80, 90, 97, 73, 83]

// Using arrow function (shorter)
let doubledMarks = marks.map(mark => mark * 2);
console.log("Doubled marks:", doubledMarks);  // Output: [150, 170, 184, 136, 156]

// Real example: Converting marks to grades
let grades = marks.map(mark => {
    if (mark >= 90) return "A";
    if (mark >= 80) return "B";
    if (mark >= 70) return "C";
    return "D";
});
console.log("Grades:", grades);               // Output: ["C", "B", "A", "D", "C"]

// Another example: Adding "Mr." to names
let maleStudents = ["Rahul", "Vikram", "Amit"];
let formalNames = maleStudents.map(name => "Mr. " + name);
console.log(formalNames);                     // Output: ["Mr. Rahul", "Mr. Vikram", "Mr. Amit"]
```

### filter() - Select Elements Based on Condition

`filter()` creates a **new array** with only the elements that pass a test. It's like selecting only the students who scored above 80.

```javascript
let allMarks = [75, 85, 92, 68, 78, 95, 82];

// Filter students who scored above 80
let highScorers = allMarks.filter(function(mark) {
    return mark > 80;
});

console.log("All marks:", allMarks);          // Output: [75, 85, 92, 68, 78, 95, 82]
console.log("High scorers:", highScorers);    // Output: [85, 92, 95, 82]

// Using arrow function
let lowScorers = allMarks.filter(mark => mark < 75);
console.log("Low scorers:", lowScorers);      // Output: [68]

// Real example: Filter students by attendance
let studentData = [
    {name: "Priya", attendance: 85},
    {name: "Rahul", attendance: 72},
    {name: "Anjali", attendance: 90},
    {name: "Vikram", attendance: 65}
];

let eligibleStudents = studentData.filter(student => student.attendance >= 75);
console.log("Eligible for exam:", eligibleStudents);
// Output: [{name: "Priya", attendance: 85}, {name: "Anjali", attendance: 90}]

// Another example: Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);    // Output: [2, 4, 6, 8, 10]
```

### Combining Array Methods

You can use multiple array methods together to create powerful data processing chains.

```javascript
let studentMarks = [45, 78, 85, 92, 38, 67, 88, 95];

// 1. Filter passing students (>= 40)
// 2. Add bonus marks (+5)  
// 3. Convert to grades
let finalGrades = studentMarks
    .filter(mark => mark >= 40)           // Keep only passing marks
    .map(mark => mark + 5)                // Add bonus marks
    .map(mark => {                        // Convert to grades
        if (mark >= 90) return "A";
        if (mark >= 80) return "B";
        if (mark >= 70) return "C";
        return "D";
    });

console.log("Original marks:", studentMarks);
console.log("Final grades:", finalGrades);
// Output: Final grades: ["C", "B", "A", "A", "C", "B", "A"]
```

---

## 12. Asynchronous Programming ⏰

**Synchronous vs Asynchronous** - Think of synchronous code like standing in a queue at a bank. You wait for the person in front to finish before you can proceed. Asynchronous code is like ordering food online - you place the order and continue doing other things while waiting for delivery.

### Understanding the Problem

```javascript
// Synchronous code - everything happens in order
console.log("First");
console.log("Second");  
console.log("Third");
// Output: First, Second, Third (always in this order)

// But what if "Second" takes time? Like fetching data from internet?
console.log("First");
// Imagine this takes 3 seconds to get data from server
setTimeout(() => {
    console.log("Data from server");
}, 3000);
console.log("Third");
// Output: First, Third, (3 seconds later) Data from server
```

### setTimeout() - Basic Asynchronous Function

`setTimeout()` runs code after a specified delay. It doesn't block other code from running.

```javascript
console.log("Starting food order...");

setTimeout(() => {
    console.log("Pizza is ready!");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("Continuing with other work...");

// Output:
// Starting food order...
// Continuing with other work...
// (2 seconds later) Pizza is ready!

// Real example: Simulating data loading
console.log("Loading student data...");

setTimeout(() => {
    let studentData = {name: "Priya", marks: 85};
    console.log("Data loaded:", studentData);
}, 1500);

console.log("Preparing UI...");
console.log("UI ready, waiting for data...");

// Output:
// Loading student data...
// Preparing UI...
// UI ready, waiting for data...
// (1.5 seconds later) Data loaded: {name: "Priya", marks: 85}
```

---

## 13. Promises 🤝

A **Promise** is like making a promise to your friend. You promise to return their book tomorrow. Three things can happen:
1. **Pending**: You haven't returned it yet (promise is still being fulfilled)
2. **Fulfilled/Resolved**: You returned the book (promise kept)
3. **Rejected**: You lost the book (promise broken)

### Creating a Basic Promise

```javascript
// Creating a promise that simulates checking if a student passes
let checkResult = new Promise((resolve, reject) => {
    let marks = 75;
    
    // Simulate some processing time
    setTimeout(() => {
        if (marks >= 40) {
            resolve("Student passed with " + marks + " marks!"); // Promise fulfilled
        } else {
            reject("Student failed with " + marks + " marks."); // Promise rejected
        }
    }, 2000);
});

// Using the promise
checkResult
    .then((successMessage) => {
        console.log("Good news: " + successMessage);
    })
    .catch((errorMessage) => {
        console.log("Bad news: " + errorMessage);
    });

// Output (after 2 seconds): Good news: Student passed with 75 marks!
```

### Real-World Promise Example

```javascript
// Simulating fetching student data from a server
function getStudentData(studentId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data for student ID: " + studentId);
        
        // Simulate network delay
        setTimeout(() => {
            // Simulate sometimes the server might be down
            let serverWorking = true;
            
            if (serverWorking) {
                let studentData = {
                    id: studentId,
                    name: "Priya Sharma",
                    course: "Computer Science",
                    semester: 4
                };
                resolve(studentData); // Success!
            } else {
                reject("Server is down. Please try again later."); // Failure!
            }
        }, 1500);
    });
}

// Using the promise
getStudentData("2024CSE001")
    .then((student) => {
        console.log("Student found:");
        console.log("Name: " + student.name);
        console.log("Course: " + student.course);
        console.log("Semester: " + student.semester);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

// Output (after 1.5 seconds):
// Fetching data for student ID: 2024CSE001
// Student found:
// Name: Priya Sharma
// Course: Computer Science
// Semester: 4
```

### Promise Chaining

You can chain multiple promises together. It's like a series of steps that depend on each other.

```javascript
// Simulating a multi-step process: Login → Get Profile → Get Courses
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "student123" && password === "password") {
                resolve({userId: 1, username: username});
            } else {
                reject("Invalid credentials");
            }
        }, 1000);
    });
}

function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                name: "Priya Sharma",
                email: "priya@klecollege.edu"
            });
        }, 800);
    });
}

function getUserCourses(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Math", "Physics", "Programming", "Database"]);
        }, 600);
    });
}

// Chaining promises
loginUser("student123", "password")
    .then((loginData) => {
        console.log("Login successful for: " + loginData.username);
        return getUserProfile(loginData.userId); // Return another promise
    })
    .then((profile) => {
        console.log("Profile loaded for: " + profile.name);
        return getUserCourses(profile.userId); // Return another promise
    })
    .then((courses) => {
        console.log("Courses: " + courses.join(", "));
    })
    .catch((error) => {
        console.log("Something went wrong: " + error);
    });

// Output:
// Login successful for: student123
// Profile loaded for: Priya Sharma
// Courses: Math, Physics, Programming, Database
```

---

## 14. Try-Catch (Error Handling) 🛡️

**Try-catch** is like having a safety net when performing dangerous stunts. If something goes wrong, the safety net catches you and prevents a crash.

### Basic Try-Catch

```javascript
// Code that might cause an error
try {
    // Try to do something that might fail
    let result = 10 / 0; // This works fine in JavaScript
    console.log("Result: " + result); // Output: Result: Infinity
    
    // This will cause an error
    let student = null;
    console.log(student.name); // Error! Cannot read property 'name' of null
    
} catch (error) {
    // This code runs if there's an error
    console.log("Oops! Something went wrong: " + error.message);
}

console.log("Program continues to run...");

// Output:
// Result: Infinity
// Oops! Something went wrong: Cannot read properties of null (reading 'name')
// Program continues to run...
```

### Try-Catch with Real Examples

```javascript
// Example 1: Safe division
function safeDivision(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!"); // Manually throwing an error
        }
        let result = a / b;
        return result;
    } catch (error) {
        console.log("Math error: " + error.message);
        return "Error occurred";
    }
}

console.log(safeDivision(10, 2)); // Output: 5
console.log(safeDivision(10, 0)); // Output: Math error: Cannot divide by zero! \n Error occurred

// Example 2: Safe JSON parsing
function parseStudentData(jsonString) {
    try {
        let student = JSON.parse(jsonString);
        console.log("Student name: " + student.name);
        console.log("Student course: " + student.course);
        return student;
    } catch (error) {
        console.log("Invalid data format: " + error.message);
        return null;
    }
}

// Valid JSON
let validData = '{"name": "Priya", "course": "CSE"}';
parseStudentData(validData);
// Output: Student name: Priya \n Student course: CSE

// Invalid JSON
let invalidData = '{"name": "Priya", "course":}'; // Missing value
parseStudentData(invalidData);
// Output: Invalid data format: Unexpected token } in JSON at position 26
```

### Try-Catch with Promises

```javascript
// Using try-catch with async operations
function fetchStudentData(studentId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentId === "INVALID") {
                reject(new Error("Student not found"));
            } else {
                resolve({id: studentId, name: "Rahul Verma"});
            }
        }, 1000);
    });
}

// Using try-catch with promises
async function getStudent(studentId) {
    try {
        console.log("Fetching student data...");
        let student = await fetchStudentData(studentId);
        console.log("Student found: " + student.name);
    } catch (error) {
        console.log("Failed to get student: " + error.message);
    }
}

getStudent("2024CSE001"); // Success case
getStudent("INVALID");    // Error case
```

---

## 15. API Handling (GET and POST) 🌐

**API** (Application Programming Interface) is like a waiter in a restaurant. You (your code) tell the waiter (API) what you want, and the waiter brings it from the kitchen (server).

**GET** = Asking for information (like checking your bank balance)
**POST** = Sending information (like transferring money)

### Understanding APIs with Real Examples

```javascript
// What is an API call?
// Imagine you want to get weather information:
// 1. You ask: "What's the weather in Belagavi?"
// 2. API goes to weather server
// 3. API brings back: "Sunny, 28°C"

// In code, it looks like this:
// fetch("https://weather-api.com/belagavi") - This is a GET request
//   .then(response => response.json())
//   .then(data => console.log(data));
```

### GET Request - Fetching Data

```javascript
// Basic GET request using fetch()
// fetch() returns a Promise, so we use .then()

function getStudentList() {
    console.log("Fetching student list...");
    
    // This is a fake API URL for demonstration
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // Check if the request was successful
            if (response.ok) {
                return response.json(); // Convert response to JSON
            } else {
                throw new Error("Failed to fetch students");
            }
        })
        .then(students => {
            // This runs when data is successfully received
            console.log("Students received:");
            students.forEach(student => {
                console.log("- " + student.name + " (" + student.email + ")");
            });
        })
        .catch(error => {
            // This runs if something goes wrong
            console.log("Error: " + error.message);
        });
}

// Call the function
getStudentList();

// Example with a more college-relevant scenario
function getCollegeCourses() {
    console.log("Loading available courses...");
    
    // Simulating a college API
    fetch("https://api.klecollege.edu/courses") // This URL is imaginary
        .then(response => response.json())
        .then(courses => {
            console.log("Available courses:");
            courses.forEach(course => {
                console.log(`${course.name} - ${course.duration} - ₹${course.fees}`);
            });
        })
        .catch(error => {
            console.log("Could not load courses: " + error.message);
        });
}
```

### POST Request - Sending Data

```javascript
// Basic POST request - sending data to server
function submitStudentApplication(studentData) {
    console.log("Submitting application for: " + studentData.name);
    
    fetch("https://api.klecollege.edu/applications", {
        method: "POST", // We're sending data
        headers: {
            "Content-Type": "application/json" // We're sending JSON data
        },
        body: JSON.stringify(studentData) // Convert our data to JSON string
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Application submission failed");
        }
    })
    .then(result => {
        console.log("Application submitted successfully!");
        console.log("Application ID: " + result.applicationId);
        console.log("Status: " + result.status);
    })
    .catch(error => {
        console.log("Submission error: " + error.message);
    });
}

// Example usage
let newApplication = {
    name: "Priya Sharma",
    email: "priya@example.com",
    course: "Computer Science",
    phone: "9876543210",
    address: "Belagavi, Karnataka"
};

submitStudentApplication(newApplication);

// Another POST example - updating student marks
function updateStudentMarks(studentId, marksData) {
    console.log("Updating marks for student: " + studentId);
    
    fetch(`https://api.klecollege.edu/students/${studentId}/marks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer your-auth-token" // Often needed for security
        },
        body: JSON.stringify(marksData)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Marks updated successfully!");
        console.log("New total: " + result.totalMarks);
        console.log("New percentage: " + result.percentage + "%");
    })
    .catch(error => {
        console.log("Failed to update marks: " + error.message);
    });
}

// Example usage
let marksData = {
    subject: "Mathematics",
    marks: 85,
    maxMarks: 100
};

updateStudentMarks("2024CSE001", marksData);
```

### Modern Async/Await Approach

```javascript
// Using async/await makes the code more readable
// It's the modern way to handle promises

async function getStudentData(studentId) {
    try {
        console.log("Fetching student data...");
        
        // GET request
        let response = await fetch(`https://api.klecollege.edu/students/${studentId}`);
        
        if (!response.ok) {
            throw new Error("Student not found");
        }
        
        let student = await response.json();
        
        console.log("Student found:");
        console.log("Name: " + student.name);
        console.log("Course: " + student.course);
        console.log("Semester: " + student.semester);
        
        return student;
        
    } catch (error) {
        console.log("Error getting student data: " + error.message);
        return null;
    }
}

async function createNewStudent(studentInfo) {
    try {
        console.log("Creating new student record...");
        
        // POST request
        let response = await fetch("https://api.klecollege.edu/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentInfo)
        });
        
        if (!response.ok) {
            throw new Error("Failed to create student record");
        }
        
        let result = await response.json();
        
        console.log("Student created successfully!");
        console.log("Student ID: " + result.studentId);
        console.log("Admission Date: " + result.admissionDate);
        
        return result;
        
    } catch (error) {
        console.log("Error creating student: " + error.message);
        return null;
    }
}

// Using the async functions
getStudentData("2024CSE001");

let newStudent = {
    name: "Amit Kumar",
    email: "amit@example.com",
    course: "Electronics",
    phone: "9988776655"
};

createNewStudent(newStudent);
```

---

## 16. DOM Manipulation 🌳
