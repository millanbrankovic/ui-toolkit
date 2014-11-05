# UIToolKity


## A Little Responsive UI ToolKit for starting a new project


A collection of small, responsive SCSS modular-based elements for use on any web project. It's a mobile first and Sass & Compass based UI ToolKit, semantically oriented - no classes such as `.row`, `.col`, `.columns`, `.large-4` or `.sm-4` etc.


**UIToolKity** includes some of the [CORE](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/core) styles that are necessary for a consistent layout such as grid system, media queries, mixins, variables and functions, then some of the [UI COMPONENTS](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/components) (buttons, forms, alerts, drop-down menu), and some of the [BASE](https://github.com/millanbrankovic/UIToolKit/tree/master/sass/base) styles.


### How to use

**UIToolKity** is a static project so in order to use it the only requirement is to have Sass & Compass already installed on machine.


#### Grid
Use the `row()` and `col()` mixins and `%row` and `%col` placeholders to create rows and columns with semantic markup, like so:

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

Basic variables are:

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
    @include col(12);
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
Use the `%btn` placeholder and the `btn()` mixin to create buttons with semantic markup.
Some basic variables are already defined.

**Usage example**

###### html
```html
<button type="button" value="Button Submit"></button>
<input type="submit" value="Input Submit">
```

###### scss
```scss
button {
    @extend %btn;
    @include btn($btn-padding: $btn-med, $btn-font-size: $btn-med-font-size, $btn-bg: $brand-primary);
}

input[type="submit"] {
    @extend %btn;
    @include btn($btn-padding: $btn-med, $btn-font-size: $btn-med-font-size, $btn-bg: $btn-default-color);
}
```

#### Alerts
`%alert` placeholder is used to extend any element in order to create alert message box and can be found [here](https://github.com/millanbrankovic/UIToolKit/blob/master/sass/components/_alerts.scss)

**Basic usage**

###### html
```html
<div data-alert class="custom-success-box">
    <!-- Your content goes here -->
    <span class="close">&times;</span>
</div>
```

###### scss
```scss
.custom-success-box {
    @extend %alert-success;
}
```
