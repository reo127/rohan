# Introduction to CSS

Welcome to the world of CSS! CSS stands for Cascading Style Sheets. It's the language we use to style our HTML documents. Think of HTML as the skeleton of a webpage and CSS as the clothes, colors, and overall look.

There are three ways to add CSS to your HTML:

1.  **Inline CSS:** Directly in the HTML tag. This is good for small, specific changes.
2.  **Internal CSS:** Inside a `<style>` tag in the `<head>` of your HTML file. This is useful for single-page styling.
3.  **External CSS:** In a separate `.css` file, which you link to your HTML. This is the best way to manage styles for a whole website.

## CSS Selectors

Selectors are how we tell CSS which HTML elements to style.

*   **Universal Selector (`*`):** Selects all elements.
*   **Class Selector (`.`):** Selects all elements with a specific class attribute.
*   **ID Selector (`#`):** Selects a single element with a specific ID attribute.
*   **Combined Selector (`,`)**: Selects all the elements and apply same property.
*   **Child Combinator (`>`)**: Selects all the elements that are children of a specified element.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Univercal/root - selector all elements */
        *{
           margin: 0px;
           padding: 0px;
        }
        /* .RJ{
            background-color: pink;
        }
        #tanu{
            background-color: aqua;
        }
       #komal{
        background-color: red;
       } */

       /* Combine selector / multi element selector */
        .amruta, .RJ {
            background-color: brown;
        }

        /* inside and element */
         .classrooom > .komal{
            background-color: red;
         }
    </style>
</head>

<body>
    <h1>hello i a heading</h1>
    <div class="komal"> komal </div>
    <div class="classrooom">
        <div class="komal">Komal</div>
        <div class="RJ">RajLaxmi</div>
        <div id="tanu">Tanishka</div>
        <div class="amruta">Amruta</div>
        <div class="tejashwini">Tejashwini</div>
    </div>
</body>

</html>
```

## The Box Model

Every HTML element is a box. The CSS box model is about how the size of that box is determined. It includes:

*   **Content:** The text, image, or other content in the element.
*   **Padding:** The space between the content and the border.
*   **Border:** A line around the padding and content.
*   **Margin:** The space outside the border, between this element and other elements.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            background-color: royalblue;
            width: 100px;
            height: 100px;
            border: 20px solid palevioletred;
            /* margin: 90px; */
            margin-top: 50px;
            margin-left: 200px;
            padding: 30px;
        } 
    </style>
</head>
<body>
    <div>hello this is my dev</div>
</body>
</html>
```

## Flexbox

Flexbox is a layout model that helps you arrange items in a container. It makes it easy to create flexible and responsive layouts.

*   `display: flex;`: Turns a container into a flex container.
*   `flex-direction`: Sets the direction of the items (row or column).
*   `justify-content`: Aligns items along the main axis.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
        }

        .parent {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            height: 100vh;
        }

        .pragati,
        .amruta,
        .eshwari {
            height: 90px;
            width: 90px;
            background-color: palevioletred;
        }
    </style>
</head>

<body>

    <div class="parent">
        <div class="pragati">pragati</div>
        <div class="amruta">Amruta</div>
        <div class="eshwari"> Eshwari</div>
    </div>

</body>

</html>
```

## Media Queries

Media queries allow you to apply different styles for different devices and screen sizes. This is the key to creating responsive websites that look good on phones, tablets, and desktops.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
        }

        /* For all devices bg will be orange color */
        body {
            background-color: orange;
        }

        /* After screen is grather then 800px bg will be pink */
        @media (min-width:800px) {
            body {
                background-color: pink;
            }
        }

        /* After screen is grather then 1200px bg will be royalblue */
        @media (min-width: 1200px) {
             body {
                background-color: royalblue;
            }
        }
        
    </style>
</head>

<body>

</body>

</html>
```

## CSS Grid

CSS Grid is another powerful layout system. It lets you create complex, two-dimensional layouts with rows and columns.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
        }

        .parent{
            display: grid;
            /* grid-template-columns: 1fr 1fr 1fr; */
            grid-template-columns: repeat(4, 1fr);
        }

        .pragati,
        .amruta,
        .eshwari {
            height: 150px;
            width: 150px;
            background-color: palevioletred;
        }
    </style>
</head>

<body>

    <div class="parent">
        <div class="pragati">pragati</div>
        <div class="amruta">Amruta</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
        <div class="eshwari"> Eshwari</div>
    </div>

</body>

</html>
```

## CSS Position

The `position` property specifies how an element is positioned in a document.

In CSS, the `position` property tells the browser **how an element should be placed** on the page. Here are the main types of positions:

---

## 1. `static` (Default Position)

- This is the **default** position.
- The element stays where it normally appears on the page.
- You **can’t move it** using top, bottom, left, or right.

✅ *Example:*  
Like text or images that naturally flow from top to bottom.

---

## 2. `relative`

- The element is placed in its **normal position**, but now you **can move it** using `top`, `bottom`, `left`, or `right`.
- It moves **relative to where it would normally be.**

✅ *Example:*  
Think of a book on a table. You slide it a bit to the right — that’s relative movement.

---

## 3. `absolute`

- The element is taken **out of the normal flow** — it doesn’t affect or get affected by nearby elements.
- It’s positioned based on the **nearest positioned parent** (a parent with `relative`, `absolute`, or `fixed`).

✅ *Example:*  
Imagine putting a sticky note inside a box. You can place it anywhere inside the box.

---

## 4. `fixed`

- The element is positioned based on the **browser window** (viewport), not the parent.
- It **stays in the same place** even when you scroll the page.

✅ *Example:*  
Like a floating chat button that always stays in the corner of your screen.

---

## 5. `sticky`

- Starts like `relative`, so it scrolls with the page.
- But when it reaches a certain point (you set with `top`, `left`, etc.), it **sticks** in place like `fixed`.

✅ *Example:*  
Like a sticky header that scrolls with you, but then stays at the top.

---

## 🎯 Summary Table

| Position | Moves With Scroll? | Based On                   | Can Use Top/Left/Right/Bottom? |
|----------|--------------------|----------------------------|---------------------------------|
| static   | ✅ Yes             | Normal flow                | ❌ No                          |
| relative | ✅ Yes             | Its normal position        | ✅ Yes                         |
| absolute | ❌ No              | Nearest positioned parent  | ✅ Yes                         |
| fixed    | ❌ No              | Browser window             | ✅ Yes                         |
| sticky   | ✅/❌ Mixed        | Scrolls, then sticks       | ✅ Yes                         |

---

**Example:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
        }

        .box {
            width: 200px;
            height: 200px;
            background-color: royalblue;
            margin: 10px;
        }

        .boxtwo {
            /* background-color: red;
           position: sticky;
           top: 20px; */

            position: fixed;
            background-color: red;
            bottom: 72px;
            right: 20px;
            border-radius: 50%;
            text-align: center;
        }

        .parent {
            margin-left: 100px;
            border: 2px solid black;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="box boxone">One</div>
        <div class="box boxtwo">Komal</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
        <div class="box">three</div>
    </div>
</body>

</html>
```

## Hover

The `:hover` pseudo-class is used to apply styles to an element when the user's mouse is over it.

**Example:**

```css
.button:hover {
  background-color: lightgray;
}
```

## More CSS Properties

Here are some other useful CSS properties demonstrated in `moreCSS.html`:

*   `background-image`: Sets a background image for an element.
*   `background-size`: Specifies the size of the background images.
*   `background-repeat`: Sets if/how a background image will be repeated.
*   `font-weight`: Sets how thick or thin characters in text should be displayed.
*   `font-family`: Specifies the font for an element.

**Example from `moreCSS.html`:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .mydogimage {
            background-image: url("images/hellodog.jpg");
            height: 100px;
            width: 100px;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .pragati {
            font-weight: 900;
            margin-left: 200px;
            font-family: sans-serif;
        }
    </style>
</head>

<body>

    <div class="mydogimage"></div>
    <h1 class="pragati">pragati</h1>
    <h1 class="someing">something</h1>

</body>

</html>
```