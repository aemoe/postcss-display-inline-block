# PostCSS Display-inline-block

[PostCSS] PostCSS plugin to add hacker for IE7 and IE6.

[PostCSS]: https://github.com/postcss/postcss

**Install from npm**


```js
npm install postcss-display-inline-block 
```

**Use for gulp**

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');


gulp.task('default', function() {
    return gulp.src('src/**/*.css')
        .pipe(postcss([require('postcss-display-block')]))
        .pipe(gulp.dest('build/'));
});

```
**Use for webpack**

```js
module: {
        //加载器配置
        loaders: [{
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src/dist/css/common'),
                loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss?sourceMap=true')
            }
    },
    postcss: function(webpack) {
        return [
            postcssImport({
                addDependencyTo: webpack
            }),
            require('postcss-display-inline-block')
        ];
    }

```

**For example**

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
**or**

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

**or**

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
