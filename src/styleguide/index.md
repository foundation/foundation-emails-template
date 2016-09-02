# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of <div> tags to create vertical columns.

```html
<row>
  <columns small="6" large="3">...</columns>
  <columns small="6" large="9">...</columns>
</div>
```

<row class="display">
  <columns small="6" large="3">6 small 3 large</columns>
  <columns small="6" large="9">6 small 9 large</columns>
</row>

---


## Small Grid

As you've probably noticed in the examples above, you have access to a small and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding arge grid classes.

```html
<row>
  <columns small="2">2</columns>
  <columns small="10">10, last</columns>
</row>
<row>
  <columns small="3">3</columns>
  <columns small="9">9, last</columns>
</row>
```

<row class="display">
  <columns small="2">2</columns>
  <columns small="10">10, last</columns>
</row>
<row class="display">
  <columns small="3">3</columns>
  <columns small="9">9, last</columns>
</row>

# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<row>
  <columns>
    <div class="color-block">
      <span style="background: #2199e8"></span>
      #2199e8
    </div>
  </columns>
  <columns>
    <div class="color-block">
      <span style="background: #3adb76"></span>
      #3adb76
    </div>
  </columns>
  <columns>
    <div class="color-block">
      <span style="background: #ffae00"></span>
      #ffae00
    </div>
  </columns>
  <columns>
    <div class="color-block">
      <span style="background: #ec5840"></span>
      #ec5840
    </div>
  </columns>
  <columns>
    <div class="color-block">
      <span style="background: #0a0a0a"></span>
      #0a0a0a
    </div>
  </columns>
</row>



# Typography

<p class="lead">This design uses Helvetica Neue for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<button href="#" class="primary large">Large button</button>
<button href="#" class="primary">Regular button</button>
<button href="#" class="primary small">Small button</button>
<button href="#" class="primary tiny">Tiny button</button>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<button href="#" class="secondary large">Large button</button>
<button href="#" class="secondary">Regular button</button>
<button href="#" class="secondary small">Small button</button>
<button href="#" class="secondary tiny">Tiny button</button>
```


# New Section

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla.

```html_example
<button href="#" class="button">Button</button>
<button href="#" class="button">Button</button>
<button href="#" class="button">Button</a>
```
