# UIToolKity


## A Little Responsive UI ToolKit for starting a new project


A collection of small, responsive SCSS modular-based elements for use on any web project. It's a mobile first and Sass & Compass based UI ToolKit, semantically oriented - no classes such as `.row` or `.col` or `.columns` or `.large-4` or `.sm-4` etc.

UIToolKity includes some of the <a href="https://github.com/millanbrankovic/UIToolKit/tree/master/sass/core">CORE</a> styles that are necessary for a consistent layout such as grid system, media queries, mixins, variables and functions, then some of the <a href="https://github.com/millanbrankovic/UIToolKit/tree/master/sass/components">UI COMPONENTS</a> (buttons, forms, alerts, drop-down menu), and some of the <a href="https://github.com/millanbrankovic/UIToolKit/tree/master/sass/base">BASE</a> styles.


## How to use

UIToolKity is a static project so in order to use it the only requirement is to have Sass & Compass already installed on machine.


#### Grid
Use the `row()` and `col()` mixins and `%row` and `%col` placeholders to create rows and columns with semantic markup, like so:

##### HTML
```html
<div class="custom-row-class-name">
    <div class="custom-column-class-name">
        <!-- Content goes here -->
    </div>
</div>
```

##### SCSS
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
