# PostCSS Display-inline-block

[PostCSS] PostCSS plugin to add hacker for IE8.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
.display_inline_block {
  display: inline-block;
}
```

```css
/* Output example */
.display_inline_block {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
```
or 

```css
/* Input example */
.display_inline_block {
  display: inline-block;
  *zoom:1;
}
```

```css
/* Output example */
.display_inline_block {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
```

or

```css
/* Input example */
.display_inline_block {
  display: inline-block;
  *display: inline;
}
```

```css
/* Output example */
.display_inline_block {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
```


## license

MIT
