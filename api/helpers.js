;(function() {
  const root = {}

  root["fn"] = () => console.log("Function from jikkujose.in")

  root["data"] = {
    message: "This proves we can load from server!",
  }

  const passThrough = item => item

  root["seive"] = (selector, operator = passThrough) =>
    Array.from(document.querySelectorAll(selector)).map(operator)

  window.jj = root
})()
