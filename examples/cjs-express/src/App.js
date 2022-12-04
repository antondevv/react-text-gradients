const LinearGradient = require("react-text-gradients").LinearGradient
const RadialGradient = require("react-text-gradients").RadialGradient
const React = require("react")
const App = () => {
  return (
    <div>
      <h1>
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          Hey i'm a linear!
        </LinearGradient>
      </h1>

      <h1>
        <RadialGradient gradient={["#17acff ,#ff68f0"]}>
          Hey i'm a Radial!
        </RadialGradient>
      </h1>
    </div>
  )
}

export default App
