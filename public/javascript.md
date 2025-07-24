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
// Output: {studentName: "Priya", courseName: "CSE", subjectList: ["Math", "Physics", "Programming", "Database"], totalSubjects: