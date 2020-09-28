import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '50',
    saturation: '80',
    lightness: '20',
  }
  handleChangeEverything = event => {
    const target = event.target
    const value = target.value

    switch (target.name) {
      case 'hue':
        this.setState({ hue: value })
        break

      case 'saturation':
        this.setState({ saturation: value })
        break

      case 'lightness':
        this.setState({ lightness: value })
        break
    }
  }

  getRndInteger = event => {
    const target = event.target
    var x = Math.floor(Math.random() * 360)
    var y = Math.floor(Math.random() * 100)
    var z = Math.floor(Math.random() * 100)
    // const value = .value
    this.setState({ hue: x })
    this.setState({ saturation: y })
    this.setState({ lightness: z })
  }

  render() {
    const currentColor = `hsl(${this.state.hue},${this.state.saturation}%, ${this.state.lightness}%)`
    return (
      <main>
        <div>
          <figure style={{ backgroundColor: currentColor }}></figure>
          <p>{currentColor}</p>
          <section>
            <p>
              Hue:
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                name="hue"
                onChange={this.handleChangeEverything}
              />
            </p>
            <p>
              Saturation:
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                name="saturation"
                onChange={this.handleChangeEverything}
              />
            </p>
            <p>
              Lightness:
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                name="lightness"
                onChange={this.handleChangeEverything}
              />
            </p>
            <h1>
              Press the button
              <input type="button" onClick={this.getRndInteger} />
            </h1>
          </section>
        </div>
      </main>
    )
  }
}

export default App
