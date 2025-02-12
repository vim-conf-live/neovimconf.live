const createSegments = millisecondsUntilTarget => {
  const secondsUntilTarget = Math.floor(millisecondsUntilTarget / 1000)
  return [
    Math.floor(secondsUntilTarget / 86400),
    Math.floor(secondsUntilTarget / 3600) % 24,
    Math.floor(secondsUntilTarget / 60) % 60,
    Math.floor(secondsUntilTarget % 60),
    Math.floor((millisecondsUntilTarget % 1000) / 10),
  ]
}

class CountDown extends HTMLElement {
  static observedAttributes = ['time-left']

  #interval
  #startDate
  #frequency

  constructor() {
    super()
    this.#startDate = new Date(this.getAttribute('start-date'))
    console.log(this.#startDate)
    this.#frequency = Number(this.getAttribute('frequency'))
  }

  connectedCallback() {
    this.#interval = setInterval(() => this.tick(), this.#frequency)
  }

  disconnectedCallback() {
    clearInterval(this.#interval)
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'time-left') {
      this.timeLeft = Number(newValue)
      if (this.timeLeft <= 0) {
        clearInterval(this.#interval)
      }
    }

    this.render()
  }

  tick() {
    this.setAttribute('time-left', this.msLeft())
  }

  msLeft() {
    return this.#startDate.getTime() - new Date().getTime()
  }

  render() {
    if (this.timeLeft <= 0) {
      return void this.renderLive()
    }

    this.renderTimeLeft()
  }

  renderTimeLeft() {
    const segments = createSegments(this.timeLeft)
    const time = segments
      .map(segment => segment.toString().padStart(2, '0'))
      .join(':')
    this.innerText = `in ${time}`
  }

  renderLive() {
    this.innerHTML = `
      <a href="https://www.twitch.tv/theprimeagen" class="bg-purple-500 text-white hover:text-purple-500 hover:bg-bg outline outline-purple-500 outline-4">NOW LIVE ON TWITCH!</a>
    `
  }
}

customElements.define('count-down', CountDown)
