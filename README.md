# UIToolKity


## A Small Responsive UI ToolKit for starting a new project


My collection of small, responsive SCSS modular-based elements for use on any web project. It's a mobile first and Sass & Compass based UI ToolKit - semantically oriented - **NO CLASSES** such as `.row`, `.col`, `.columns`, `.large-4` or `.sm-4`.


**UIToolKity** includes some of the [CORE](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/core) styles that are necessary for a consistent layout such as grid system, media queries, mixins, variables and functions, some of the [UI COMPONENTS](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/components) (buttons, forms, alerts, drop-down menu), and some of the [BASE](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/base) styles.


[Demo](http://millanbrankovic.github.io/UIToolKit) page was created with all the elements that **UIToolKity** contains.


### How to use

**UIToolKity** is a static project so the only requirement for using it is to have [Sass](http://sass-lang.com) & [Compass](http://compass-style.org) already installed on machine.


#### Grid
`%row` and `%col` placeholders, and `row()` and `col()` mixins are here to create rows and columns with the semantic markup, like so:

###### html
```html
<div class="custom-row-class-name">
    <div class="custom-column-class-name">
        <!-- Content goes here -->
    </div>
</div>
```

###### scss
```scss
.custom-row-class-name {
    @extend %row;
    @include row();
    
    .custom-column-class-name {
        @extend %col;
        @include col(6);
    }
}
```


#### Media Queries
Media Queries are defined through variables and mixins. It's also possible to target a specific orientation.

Basic Media Query variables are:

```scss
$small: "max-width: 40rem"; // 640px
$medium: "min-width: 40.06rem"; // 641px
$large: "min-width: 64.06rem"; // 1025px
$xlarge: "min-width: 90.06rem"; // 1441px
$xxlarge: "min-width: 120.1rem"; // 1921px
$portrait: "orientation: portrait" !default;
$landscape: "orientation: landscape" !default;
```

And Media Query Mixin is:

```scss
@mixin screen($breakpoint, $orientation: false) {
    @if $orientation != false {
        @media (#{$breakpoint}) and (#{$orientation}) {
            @content;
        }
    } @else {
        @media ($breakpoint) {
            @content;
        }
    }
}
```

**Usage**

###### scss
```scss
.custom-column-class-name {
    @extend %col;
    background: blue;

    @include screen($medium) {
        @include col(4);
        background: red;
    }

    @include screen($medium, $landscape) {
        @include col(6);
        background: green;
    }
    
    @include screen(large) {
        @include col(2);
        background: yellow;
    }
}
```

#### Buttons
`%btn` placeholder and `btn()` mixin are used to create buttons with the semantic markup.

Some basic variables are already defined.

**Usage example**

###### html
```html
<button type="button" value="Button Submit"></button>
<input type="submit" value="Input Submit">
```

###### scss
```scss
button,
input[type="submit"]{
    @extend %btn;
    @include btn($btn-padding: $btn-med, $btn-font-size: $btn-med-font-size, $btn-bg: $brand-primary);
}
```

#### Alerts
`%alert` placeholder is used to extend any element in order to create alert message box and can be found [here](https://github.com/millanbrankovic/UIToolKit/blob/master/sass/components/_alerts.scss)

**Basic usage**

###### html
```html
<div data-alert class="custom-success-box">
    <!-- Success message goes here -->
    <span class="close">&times;</span>
</div>
```

###### scss
```scss
.custom-success-box {
    @extend %alert-success;
}
```

#### Rem-calc function

A `rem-calc()` function converts pixels to rems.

**Usage**

###### scss

```scss
.container {
    margin: rem-calc(15);
    font-size: rem-calc(16);
}
```

and the output would be:

```scss
.container {
    margin: 0.9375rem;
    font-size: 1rem;
}
```

[Demo](http://millanbrankovic.github.io/UIToolKit) with all the elements that **UIToolKity** contains.
