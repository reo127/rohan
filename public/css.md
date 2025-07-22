
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
<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto; /* Three columns */
        background-color: #2196F3;
        padding: 10px;
    }
    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
    }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

## CSS Position

The `position` property specifies how an element is positioned in a document.

*   `static`: The default value. Elements are positioned according to the normal flow of the page.
*   `relative`: Positioned relative to its normal position.
*   `absolute`: Positioned relative to the nearest positioned ancestor.
*   `fixed`: Positioned relative to the viewport (the browser window). It always stays in the same place, even if the page is scrolled.
*   `sticky`: A mix of `relative` and `fixed`. It's treated as `relative` until it crosses a specified threshold, at which point it becomes `fixed`.

**Example:**

```html
<style>
    .fixed-element {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 300px;
        border: 3px solid #73AD21;
    }
</style>

<div class="fixed-element">
  This div has a fixed position.
</div>
```
