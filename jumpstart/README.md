# Angular Overview - Jumpstart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## What is Angular ?

## Angular Js Vs Angular

## Angular First App

## Angular Data Binding
In Angular, Data Binding determines how data will flow in between component class and component template.

Angular provides us following types of data binding:
1. Interpolation
1. Property Binding
1. Event Binding

## 1. Interpolation :
It represents one-way data binding. Basically it is used to fetch data from component class to the template where this data will be displayed.

*Syntax of Interpolation:*
```html
<div> {{title}} </div>
<div> {{description}} </div>

<!-- Here 'title' and 'description' are the property of a component class  --/>
```

## 2. Property Binding
Basically, property binding is used to set the property of html element dynamically. It is used to to set the properties of html elements like id, name, value, class and etc. The syntax of property binding is using [].

```typescript
isDisabled = true;
elementId = "input1";
className = "text-primary";
width = 100;
```

Example. 
```HTML
<input [disable] = "isDisable" />
<input [id] = "elementId">
<input [class] = "className">
<input [style.width.px] = "width">
```

Note:- some property binding can be achieved by using interpolation as well but interpolation doesn't work for some type of property binding of html elements.

Exaple: * **disabled** property of html element can not be binded using interpolation.*







---

Default Guidlines

---

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
