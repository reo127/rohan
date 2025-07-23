
# Recreating Your First Portfolio Website: A Step-by-Step Guide

Welcome, students! This guide will walk you through creating a clean, modern, and responsive personal portfolio website using just HTML and CSS. By the end of this tutorial, you will have a complete, single-page website that you can customize with your own information.

## Project Overview

We will build a portfolio with the following sections:
1.  **Navigation Bar:** For easy navigation between sections.
2.  **Hero Section:** A main introduction with your name and a picture.
3.  **About Me Section:** A place to write a short bio.
4.  **Skills Section:** To showcase what you can do.
5.  **Contact Section:** To let people know how to reach you.
6.  **Footer:** With your copyright information.

The entire website will be created in a single HTML file. All the styling will be done inside a `<style>` tag in the HTML head, which is known as "Internal CSS".

## Prerequisites

*   A text editor (like VS Code, Sublime Text, or even Notepad).
*   A web browser (like Chrome, Firefox, or Edge).
*   A desire to learn! No prior coding knowledge is required.

## File Structure

Your project will have a very simple structure:

```
/portfolio-project/
|-- index.html         (This is our main website file)
|-- /images/
|   |-- your-photo.webp  (You'll need a profile picture here)
```

For this guide, we'll name the main file `sitetwo.html` to match the project, but `index.html` is the standard name for a homepage.

---

## Step 1: The Basic HTML Structure

Every HTML document starts with a basic "boilerplate". This sets up the document and tells the browser what to expect.

Create a new file named `sitetwo.html` and type the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <!-- We will add our CSS styles here later -->
</head>
<body>
    <!-- We will add our website content here later -->
</body>
</html>
```

*   `<!DOCTYPE html>`: Declares the document type.
*   `<html>`: The root element of an HTML page.
*   `<head>`: Contains meta-information about the page (like the title).
*   `<body>`: Contains the visible content of the page.

---

## Step 2: Styling the Website with CSS

CSS (Cascading Style Sheets) is used to style our HTML content. For this project, we'll put all our CSS inside the `<style>` tag within the `<head>` section.

Copy the entire CSS code block below and paste it inside your `<head>` section, right below the `<title>` tag.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }

        /* Navigation */
        .navbar {
            background-color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            color: #333;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
        }

        .nav-link:hover {
            color: #007bff;
        }

        /* Hero Section */
        .hero {
            background-color: white;
            padding: 4rem 2rem;
            display: flex;
        }

        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 4rem;
        }

        .hero-image {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .hero-content {
            flex: 1;
        }

        .hero-title {
            font-size: 3rem;
            color: #333;
            margin-bottom: 1rem;
            font-weight: bold;
        }

        .hero-text {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 500px;
        }

        .hero-button {
            background-color: #007bff;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }

        .hero-button:hover {
            background-color: #0056b3;
        }

        /* About Section */
        .about {
            padding: 4rem 2rem;
            background-color: #f8f9fa;
        }

        .about-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .section-title {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #333;
        }

        .about-text {
            font-size: 1.1rem;
            color: #666;
            max-width: 800px;
            margin: 0 auto;
        }

        /* Skills Section */
        .skills {
            padding: 4rem 2rem;
            background-color: white;
        }

        .skills-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .skill-card {
            background-color: #f8f9fa;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .skill-card h3 {
            color: #007bff;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .skill-card p {
            color: #666;
        }

        /* Contact Section */
        .contact {
            padding: 4rem 2rem;
            background-color: #007bff;
            color: white;
        }

        .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .contact .section-title {
            color: white;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .contact-item {
            text-align: center;
        }

        .contact-item h4 {
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        .contact-item p {
            font-size: 1rem;
            opacity: 0.9;
        }

        /* Footer */
        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-container {
                flex-direction: column;
                text-align: center;
                gap: 2rem;
            }

            .hero-image {
                width: 250px;
                height: 250px;
            }

            .hero-title {
                font-size: 2.2rem;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .nav-links {
                gap: 1rem;
            }

            .nav-link {
                font-size: 1rem;
            }

            .contact-info {
                flex-direction: column;
                gap: 1.5rem;
            }
        }
    </style>
</head>
```

**What does this CSS do?**
*   It sets a default font, background color, and removes default margins.
*   It styles each section (`.navbar`, `.hero`, `.about`, etc.) with colors, spacing (padding), and layout (using Flexbox and Grid).
*   The `@media (max-width: 768px)` block makes the website **responsive**, meaning it will look good on smaller screens like mobile phones.

---

## Step 3: Building the Website Body (HTML Content)

Now it's time to add the actual content of your website. This code goes inside the `<body>` tag. We will add each section one by one.

### 3.1 Navigation Bar

This code creates the top navigation bar with your logo and links.

```html
<!-- Navigation -->
<nav class="navbar">
    <div class="nav-container">
        <img class="logo" src="https://img.freepik.com/free-vector/esport-mascot-logo-vector_9975-9697.jpg" alt="Logo">
        <div class="nav-links">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
    </div>
</nav>
```
*   `<nav>`: A tag for navigation links.
*   `<img>`: The logo image. **Remember to change `src="./images/logo.webp"` to the path of your own image!**
*   `<a>`: Anchor tags for links. The `href="#about"` links to a section on the same page with `id="about"`.

### 3.2 Hero Section

This is the main welcome area.

```html
<!-- Hero Section -->
<section id="home" class="hero">
    <div class="hero-container">
        <img src="https://img.freepik.com/free-vector/esport-mascot-logo-vector_9975-9697.jpg" alt="Profile Picture" class="hero-image">
        <div class="hero-content">
            <h1 class="hero-title">Hello, I'm [Your Name]</h1>
            <p class="hero-text">
                I'm a Computer Science student at [Your College]. I love creating websites, 
                learning new technologies, and solving problems through code. Welcome to my portfolio!
            </p>
            <a href="#about" class="hero-button">Learn More About Me</a>
        </div>
    </div>
</section>
```
*   `<section>`: A tag that defines a section in a document. We give it an `id` so the navigation links can find it.
*   `<h1>`: The main heading. **Change `[Your Name]` to your actual name.**
*   `<p>`: A paragraph. **Customize the text to be about you.**

### 3.3 About Section

A place for your biography.

```html
<!-- About Section -->
<section id="about" class="about">
    <div class="about-container">
        <h2 class="section-title">About Me</h2>
        <p class="about-text">
            I'm currently pursuing my degree in Computer Science at [Your College]. 
            I have a passion for web development and enjoy creating user-friendly websites. 
            In my free time, I like to work on personal projects, read about new technologies, 
            and participate in coding competitions. I'm always eager to learn and take on new challenges.
        </p>
    </div>
</section>
```
*   `<h2>`: A secondary heading.
*   **Remember to customize the text in the `<p>` tag.**

### 3.4 Skills Section

Showcase your skills here.

```html
<!-- Skills Section -->
<section id="skills" class="skills">
    <div class="skills-container">
        <h2 class="section-title">My Skills</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <h3>HTML & CSS</h3>
                <p>Creating clean and responsive web pages with modern design principles.</p>
            </div>
            <div class="skill-card">
                <h3>JavaScript</h3>
                <p>Adding interactivity and dynamic functionality to websites.</p>
            </div>
            <div class="skill-card">
                <h3>Python</h3>
                <p>Problem solving and backend development using Python programming.</p>
            </div>
            <div class="skill-card">
                <h3>Problem Solving</h3>
                <p>Analytical thinking and finding creative solutions to complex challenges.</p>
            </div>
        </div>
    </div>
</section>
```
*   The `.skills-grid` uses CSS Grid to create a nice layout for the skill cards.
*   **Change the `<h3>` (skill title) and `<p>` (skill description) to match your own skills.** You can add or remove `skill-card` divs as needed.

### 3.5 Contact Section

Provide your contact details.

```html
<!-- Contact Section -->
<section id="contact" class="contact">
    <div class="contact-container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-info">
            <div class="contact-item">
                <h4>Email</h4>
                <p>your.email@example.com</p>
            </div>
            <div class="contact-item">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
            </div>
            <div class="contact-item">
                <h4>Location</h4>
                <p>Your City, Your State</p>
            </div>
        </div>
    </div>
</section>
```
*   **Replace the placeholder email, phone number, and location with your own information.**

### 3.6 Footer

The final part of the page.

```html
<!-- Footer -->
<footer class="footer">
    <p>&copy; 2024 [Your Name]. All rights reserved.</p>
</footer>
```
*   `<footer>`: A tag for the footer of a document.
*   **Change `[Your Name]` to your name.** The `&copy;` creates the © copyright symbol.

---

## Step 4: Putting It All Together and Customizing

Your final `sitetwo.html` file should now have the complete HTML structure with the CSS in the head and all the content sections in the body.

**Your main task now is to customize it!**

1.  **Find a Profile Picture:** Get a good, square photo of yourself. You can use an online tool to convert it to `.webp` format (which is great for websites) or just use a `.jpg` or `.png`. Save it in the `images` folder.
2.  **Update Image Paths:** In the HTML, change both instances of `src="./images/logo.webp"` to the correct path and filename of your photo.
3.  **Change All Text:** Go through each section and replace the placeholder text (`[Your Name]`, `[Your College]`, etc.) with your personal information.
4.  **Update Your Skills:** Modify the skills section to reflect what you are learning and what you are good at.

## Conclusion 

Congratulations! You have successfully built and customized your own personal portfolio website from scratch. You've learned about HTML structure, internal CSS for styling, and how to create different content sections. 

Avi party karo, Methai bato 🎉

Save your `sitetwo.html` file, open it in your web browser, and you will see your new portfolio live! You can now share this single file with anyone to show them your work.
