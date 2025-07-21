
# HTML for Beginners

This document will walk you through the fundamentals of HTML, using the provided examples as a guide. By the end of this, you should be able to recreate the HTML files you see in this project.

## 1. The Basic Structure of an HTML Document

Every HTML file has a basic structure that tells the browser how to read it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <!-- Your content goes here! -->
</body>
</html>
```

*   `<!DOCTYPE html>`: This is always the first line. It tells the browser that the document is an HTML5 file.
*   `<html>`: This is the root element of the page. Everything else goes inside of it.
*   `<head>`: This section contains meta-information about the page, like the title, character set, and links to stylesheets. This information is not displayed on the page itself.
    *   `<title>`: The text you put here will appear in the browser tab.
*   `<body>`: This is where all the visible content of your webpage goes: text, images, videos, etc.

---

## 2. Basic Text Formatting

HTML provides several tags for formatting text.

*   `<h1>` to `<h6>`: These are heading tags. `<h1>` is the most important (and largest), and `<h6>` is the least important (and smallest).
*   `<p>`: This is a paragraph tag. Use it for blocks of text.
*   `<b>` or `<strong>`: These tags make text **bold**. `<strong>` is preferred as it also conveys semantic importance.
*   `<i>`: This tag makes text *italic*.
*   `<u>`: This tag adds an underline to text.
*   `<del>`: This tag shows text with a line through it, as if it has been <del>deleted</del>.
*   `<pre>`: This tag preserves whitespace and line breaks, showing the text exactly as it is typed in the editor.

### Example (`index.html`):

```html
<p>Hello
 world!</p>
<h1>h1</h1>
<b>bold</b>
<i>italic</i>
<pre>
    hello 
    world!
</pre>
<strong>bold</strong>
<u>I will have an underline</u>
599<del>399</del>
```

---

## 3. Links and Images

### Links (`<a>`)

The `<a>` tag (anchor tag) creates a hyperlink to another webpage or a location within the same page.

*   `href`: This attribute specifies the URL the link goes to.
*   `target="_blank"`: This is an important attribute that tells the browser to open the link in a new tab.

### Example (`index.html`):

```html
<a href="https://aroha.co.in/" target="_blank">Aroha tech</a>
```

### Images (`<img>`)

The `<img>` tag embeds an image on the page.

*   `src`: This attribute is the path to the image file. It can be a local file or a URL.
*   `alt`: This attribute provides alternate text for the image. This text is shown if the image fails to load and is also important for screen readers and accessibility.
*   `width` and `height`: These attributes control the dimensions of the image.

### Example (`index.html`):

```html
<img src="hellodog.jpg" alt="A picture of a dog" width="300" height="300">
```

---

## 4. Lists

HTML offers two main types of lists: ordered and unordered.

### Ordered Lists (`<ol>`)

An ordered list is a numbered list. The `<li>` (list item) tag is used for each item in the list.

*   `type`: You can change the numbering style with the `type` attribute (e.g., "1", "A", "a", "I", "i").

### Example (`list.html`):

```html
<ol type="I">
   <li>Item One</li>
   <li>Item Two</li>
</ol>
```

### Unordered Lists (`<ul>`)

An unordered list is a bulleted list.

*   `type`: You can change the bullet style with the `type` attribute (e.g., "disc", "circle", "square").

### Example (`list.html`):

```html
<ul type="square">
   <li>Item One</li>
   <li>Item Two</li>
</ul>
```

---

## 5. Tables

Tables are used to display data in rows and columns.

*   `<table>`: The main container for the table.
*   `<tr>`: Defines a table row.
*   `<th>`: Defines a table header cell. Text inside is bold and centered by default.
*   `<td>`: Defines a table data cell.

### Example (`table.html`):

```html
<table border="2">
    <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>Subject</th>
    </tr>
    <tr>
        <td>Komal</td>
        <td>1</td>
        <td>Math</td>
    </tr>
    <tr>
        <td>Aish</td>
        <td>2</td>
        <td><img src="hellodog.jpg" width="100"></td>
    </tr>
</table>
```

---

## 6. Forms

Forms are used to collect user input.

*   `<form>`: The container for the form elements.
    *   `action`: The URL where the form data will be sent.
    *   `method`: The HTTP method to use (e.g., "GET" or "POST").
*   `<input>`: The most common form element.
    *   `type`: Specifies the type of input (e.g., "text", "email", "password", "submit").
    *   `name`: A name for the input field, which is sent to the server with the value.
*   `<button>`: A clickable button.

### Example (`form.html`):

```html
<form action="htpps://somen.com" method="POST" >
    <div>
        name: <input type="text" name="myname">
    </div>
    <div>
        email: <input type="email" name="myemail">
    </div>
    <div>
        password: <input type="password" name="mypassword">
    </div>
    <button>Submit</button>
</form>
```

---

## 7. Multimedia

You can embed video and audio directly into your pages.

### Video (`<video>`)

*   `src`: The path to the video file.
*   `controls`: This attribute adds video controls, like play, pause, and volume.
*   `width`: Sets the width of the video player.

### Audio (`<audio>`)

*   `src`: The path to the audio file.
*   `controls`: Adds audio controls.

### Embedding from other sites (`<iframe>`)

An `<iframe>` is used to embed content from another website, like a YouTube video.

### Example (`file.html`):

```html
<!-- Local Video -->
<video src="./6982055-hd_1920_1080_30fps.mp4" controls width="400"></video>

<!-- Local Audio -->
<audio src="./WinterSports.mp3" controls></audio>

<!-- YouTube Video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/t0Q2otsqC4I?si=_Wpcoc_oCArrrrpb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

---

## 8. Block vs. Inline Elements

Elements in HTML are generally either "block-level" or "inline".

*   **Block-level elements** (`<p>`, `<h1>`, `<div>`): These elements start on a new line and take up the full width available.
*   **Inline elements** (`<span>`, `<a>`, `<img>`): These elements do not start on a new line and only take up as much width as necessary.

### Example (`inlineblock.html`):

```html
<!-- Paragraphs are block-level, so they appear on separate lines -->
<p>hello</p>
<p>world</p>

<!-- Spans are inline, so they appear on the same line -->
<span>hello</span>
<span>world</span>
```

---

## 9. Semantic HTML

Semantic HTML means using HTML tags that give meaning to the content, not just for presentation. This helps search engines and screen readers understand your content.

*   `<details>` and `<summary>`: A simple way to create an interactive widget that the user can open and close. The `<summary>` is always visible, and the rest of the content is shown or hidden.

### Example (`semantic.html`):

```html
<details>
    <summary>hello how are you</summary>
    <p>i am fine</p>
</details>
```

Now, try to use this guide to create your own versions of the HTML files in this project!
