const tzOptions = Intl.DateTimeFormat().resolvedOptions()

const convertToLocal = datetime =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: tzOptions.timeZone,
    hour: 'numeric',
    hourCycle: 'h24',
    minute: 'numeric',
    timeZoneName: 'short',
  }).format(datetime)

class LocalTimeElement extends HTMLElement {
  constructor() {
    super()
    const datetime = Date.parse(this.getAttribute('datetime'))
    const local = convertToLocal(datetime)
    const [time, zone] = local.split(' ')

    this.innerHTML = `
      <span class="time">${time}</span>
      <span class="zone">${zone}</span>
    `
  }
}

customElements.define('time-local', LocalTimeElement)