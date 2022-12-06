# react-text-gradients

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/antondevv/react-text-gradients/CI?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/antondevv/react-text-gradients?style=flat-square)
![Coveralls](https://img.shields.io/coverallsCoverage/github/antondevv/react-text-gradients?style=flat-square)
![GitHub](https://img.shields.io/github/license/antondevv/react-text-gradients?label=license&style=flat-square)

A React library that provides two components for applying **linear** and **radial** gradients to text in React applications 🚀

### ⭐ Features

- 🔥 **Written 100% in TypeScript**
- 💅 **Fully customizable colors through props**
- 💥 **Linear & Radial gradient component**
- 🥷 **Supports ESM, CJS & UMD**
- ⚙️ **Supports tree shaking**
- ⚡ **Lightweight ~ 500 bytes/component**
- 🧩 **Built using 0 dependencies**

### 🔥 Live demo

<p align="center">
  <a href="https://react-text-gradients.vercel.app">
    <img src="https://user-images.githubusercontent.com/53121683/206046350-a57d7f40-53cf-4e7e-9c9d-d30cd06416dc.png" alt="Demo"  />
  </a>
</p>

# Usage

To use `react-text-gradients` in your React application, import the `LinearGradient` or `RadialGradient` component:

## LinearGradient

```javascript
import { LinearGradient } from 'react-text-gradients'
```

The `LinearGradient` component can be used to apply a linear gradient to text. It should be used inside a HTML text element, such as an h1 tag.

```javascript
<h1>
  <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
    My text with a linear gradient
  </LinearGradient>
</h1>
```

### Props

| Prop          | Type                          | Description                                         | Required |
| ------------- | ----------------------------- | --------------------------------------------------- | -------- |
| gradient      | Array of direction and colors | Specifies the direction and colors for the gradient | `true`   |
| fallbackColor | string                        | Fallback color if the browser is not compatible     | `false`  |
| children      | ReactNode                     | Text to be applied with the gradient                | `true`   |

**gradient** prop

The `gradient` prop is where you specify the direction and colors for the `LinearGradient` component. It has the following type:

```
[<direction>, <colors>]
```

`direction` is a string that can be any of the following values:

- `to left`
- `to top left`
- `to bottom left`
- `to right`
- `to top right`
- `to bottom right`
- `to top`
- `to bottom`

`colors` is a string containing any valid values of [linear-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#formal_syntax) such as `"red, blue"` or `"#ff0000, #0000ff"`.

Here is an example of using the `gradient` prop:

```javascript
gradient={["to left", "#17acff ,#ff68f0"]}
```

**fallbackColor** prop

Both components also accept an optional `fallbackColor` prop, which specifies a fallback color to use if the gradient is not supported by the browser. If the fallbackColor prop is not specified, no fallback color will be used.

```javascript
<h1>
  <LinearGradient
    gradient={['to left', '#17acff ,#ff68f0']}
    fallbackColor="black"
  >
    My text with a linear gradient and a fallback color
  </LinearGradient>
</h1>
```

## RadialGradient

```javascript
import { RadialGradient } from 'react-text-gradients'
```

The `RadialGradient` component can be used to apply a radial gradient to text. It should be used inside a HTML text element, such as an h1 tag. It accepts the same props as the LinearGradient component, except that the `gradient` prop should `not` contain any `direction`.

```javascript
<h1>
  <RadialGradient gradient={['red, blue']}>
    My text with a radial gradient
  </RadialGradient>
</h1>
```

### Props

| Prop          | Type         | Description                                         | Required |
| ------------- | ------------ | --------------------------------------------------- | -------- |
| gradient      | Array colors | Specifies the direction and colors for the gradient | `true`   |
| fallbackColor | string       | Fallback color if the browser is not compatible     | `false`  |
| children      | ReactNode    | Text to be applied with the gradient                | `true`   |

**gradient** Prop

The `gradient` prop is where you specify the colors for the `RadialGradient` component. It has the following type:

```
[<colors>]
```

**colors** is a string containing any valid values of [radial-gradient()](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#formal_syntax)

Here is an example of using the `gradient` prop:

```javascript
gradient={["#17acff ,#ff68f0"]}
```

**fallbackColor** Prop

Both components also accept an optional `fallbackColor` prop, which specifies a fallback color to use if the gradient is not supported by the browser. If the fallbackColor prop is not specified, no fallback color will be used.

```javascript
<h1>
  <RadialGradient gradient={['#17acff ,#ff68f0']} fallbackColor="black">
    My text with a radial gradient and a fallback color
  </RadialGradient>
</h1>
```

# Examples

## Basic gradients

```javascript
import { LinearGradient, RadialGradient } from 'react-text-gradients'

function App() {
  return (
    <div className="app">
      <h1 className="h1">
        <LinearGradient gradient={['to right', 'red, blue']}>
          My text with a linear gradient
        </LinearGradient>
      </h1>
      <h1 className="h1">
        <RadialGradient gradient={['red, blue']}>
          My text with a radial gradient
        </RadialGradient>
      </h1>
    </div>
  )
}
```

## Complex gradients

```javascript
import { LinearGradient, RadialGradient } from 'react-text-gradients'

const App = () => {
  return (
    <div className="app">
      <h1 className="h1">
        <LinearGradient
          gradient={[
            'to left',
            '90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%',
          ]}
        >
          My text with a linear gradient
        </LinearGradient>
      </h1>

      <h1 className="h1">
        <RadialGradient
          gradient={[
            'circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%',
          ]}
        >
          My text with a radial gradient
        </RadialGradient>
      </h1>
    </div>
  )
}
```

## Passing ref & other props

```javascript
import { LinearGradient } from 'react-text-gradients'

const App = () => {
  const ref = useRef(null)
  return (
    <div className="app">
      <h1 className="h1">
        <LinearGradient
          gradient={['to left', '#17acff ,#ff68f0']}
          ref={ref}
          className="gradient-title"
          data-testid="gradient-title-element"
        >
          Text
        </LinearGradient>
      </h1>
    </div>
  )
}
```

## CDN usage

```javascript
  <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react-text-gradients@latest/lib/umd/react-text-gradients.umd.min.js"></script>
    <script type="text/babel">
      const { LinearGradient } = ReactTextGradients
      const { createRoot } = ReactDOM
      const container = document.getElementById("root")
      const root = createRoot(container)

      root.render(
        <LinearGradient
          style={{ fontSize: "50px" }}
          gradient={[
            "to left",
            "#17acff 23.45%, #ff68f0 73.52%, rgba(201, 68, 100, 0.7) 120.73%",
          ]}
        >
          Linear Gradient
        </LinearGradient>
      )
    </script>
```

# How it works

The `LinearGradient` & `RadialGradient` component returns a `span` element with a style` attribute applied to it with valid CSS.

For example, given this code:

```javascript
<h1>
  <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
    Text
  </LinearGradient>
</h1>
```

This is what will be generated:

```javascript
<h1>
  <span style="-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;background-image:linear-gradient(to left, #17acff ,#ff68f0)">
    Text
  </span>
</h1>
```

## Caviats

### 1. Hot reload

Some browsers might have trouble rendering inline gradient styles when using hot reload. If you change the gradient colors and save it, a solid background color may appear. To fix this, simply do a hard refresh and the solid color should disappear.

### 2. Browser compatability

This component is compatible with `Google Chrome 25+, Mozilla Firefox 16+, Opera 15+, Safari 6.1+, IE 10+, iOS 7+, and Android 4.4+`. If you want to define a fallback color to use in case of compatibility issues, you can pass a fallbackColor prop.

## Contributing

Contributions are always welcome! Please feel free to submit a pull request or to open any issue.

To learn how to set up the development environment, please visit [CONTRIBUTE.MD](https://github.com/antondevv/react-text-gradients/blob/master/CONTRIBUTE.MD)
