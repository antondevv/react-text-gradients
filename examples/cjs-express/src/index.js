const React = require("react")
const ReactDOM = require("react-dom/client")
const App = require("./App").default

const root = ReactDOM.createRoot(document.querySelector(".app"))
root.render(<App />)
