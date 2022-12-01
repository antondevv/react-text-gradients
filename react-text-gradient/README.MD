# react-text-gradient

A React component for easily making gradient texts in React 🚀

### ⭐ Features

- 🔥 **Written 100% in TypeScript**
- 💅 **Fully customize colors by props**
- 🥷 **Supports esm, cjs & umd**
- ⚙️ **Supports tree shaking**
- ⚡ **Lightweight ~ 500 bytes/component**
- 🧩 **Build using 0 dependencies**

### 🔥 Live demo

![react-text-gradient](https://user-images.githubusercontent.com/53121683/204915241-2b63e5f4-365a-4eba-a238-ee01d6bef92d.jpg)

### Installation

Using npm:

```
npm install --save react-text-gradient
```

using yarn:

```
yarn add react-text-gradient
```

using pnpm:

```
pnpm add react-text-gradient
```

# Usage

There are 2 components you can import from `react-text-gradient`.

Let's go over how each one works:

## LinearGradient

### Import component

```javascript
import { LinearGradient } from "react-text-gradient"
```

### Usage

```javascript
<h1>
  <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
    Gradient Text here
  </LinearGradient>
</h1>
```

### Props

| Prop          | Type                     | Description                                     | Required |
| ------------- | ------------------------ | ----------------------------------------------- | -------- |
| gradient      | Array<direction, colors> | `direction` and `colors` for the gradient       | `true`   |
| fallbackColor | string                   | fallback color if the browser is not compatable | `false`  |

#### <ins>gradient</ins>

The `gradient` prop is where you specify the `direction` and `colors` for the `LinearGradient` component.

It has the type of: `[<direction>, <colors>]`

Where `<direction>` is: `"to left" | "to top left" | "to bottom left" | "to right" | "to top right" | "to bottom right" | "to top" | "to bottom"`

Where `<colors>` is: A `string` that contains any valid values of [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#formal_syntax)

Example usage of `gradient` prop: `gradient={["to left", "#17acff ,#ff68f0"]}`

#### <ins>fallbackColor </ins>

If the browser is incompatible with linear-gradient(), a fallback color can be specified in the `fallbackColor` prop.

## RadialGradient

### Import component

```javascript
import { RadialGradient } from "react-text-gradient"
```

### Usage

```javascript
<h1>
  <RadialGradient gradient={["to left", "#17acff ,#ff68f0"]}>
    Gradient Text here
  </RadialGradient>
</h1>
```

### Props

| Prop          | Type           | Description                                     | Required |
| ------------- | -------------- | ----------------------------------------------- | -------- |
| gradient      | Array< colors> | `colors` for the gradient                       | `true`   |
| fallbackColor | string         | fallback color if the browser is not compatable | `false`  |

#### <ins>gradient</ins>

The `gradient` prop is where you specify the `colors` for the `RadialGradient` component.

It has the type of: `[<colors>]`

Where `<colors>` is: A `string` that contains any valid values of [`radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#formal_syntax)

Example usage of `gradient` prop: `gradient={["#17acff ,#ff68f0"]}`

#### <ins>fallbackColor</ins>

If the browser is incompatible with radial-gradient(), a fallback color can be specified in the `fallbackColor` prop.

# Examples

## Basic usage

```javascript
import { LinearGradient as Lg, RadialGradient as Rg } from "react-text-gradient"

const App = () => {
  return (
    <div className="app">
      <h1 className="h1">
        <Lg gradient={["to left", "#17acff ,#ff68f0"]}>Hey i'm a linear!</Lg>
      </h1>

      <h1 className="h1">
        <Rg gradient={["#17acff ,#ff68f0"]}>Hey i'm a radial!</Rg>
      </h1>
    </div>
  )
}
```

## Complex gradients

```javascript
import { LinearGradient as Lg, RadialGradient as Rg } from "react-text-gradient"

const App = () => {
  return (
    <div className="app">
      <h1 className="h1">
        <Lg
          gradient={[
            "to left",
            "90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%",
          ]}
        >
          Hey i'm a linear!
        </Lg>
      </h1>

      <h1 className="h1">
        <Rg
          gradient={[
            "circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%",
          ]}
        >
          Hey i'm a radial!
        </Rg>
      </h1>
    </div>
  )
}
```

## Passing ref & other props

```javascript
import { LinearGradient as Lg } from "react-text-gradient"

const App = () => {
  return (
    <div className="app">
      <h1 className="h1">
        <Lg
          gradient={["to left", "#17acff ,#ff68f0"]}
          ref={ref}
          className="gradient-title"
          data-testid="gradient-title-element"
        >
          Hey i'm a linear!
        </Lg>
      </h1>
    </div>
  )
}
```

## Caviats

### 1. Hot reload

For some reason, a few browsers have trouble with the way react renders inline gradient styles. As a result, if you alter the gradient colors, for example, and save it, a solid background color will appear. Simply make a hard refresh if this occurs to you, and it will disappear.

### 2. Browser compatability

This is compatible with "Google Chrome 25+, Mozilla Firefox 16+, Opera 15+, Safari 6.1+, IE 10+, iOS 7+, and Android 4.4+" right out of the gate. If you want to define a color that will be used as a fallback if there are compatibility problems, pass a `fallbackColor` prop.

## Under the hood

If you wonder how this works, it's quite straight forward.

It returns a `span` element, and applies a `style` attribute on it with valid css.
