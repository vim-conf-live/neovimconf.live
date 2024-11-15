class BackLink extends HTMLElement {
  connectedCallback() {
    const link = this.querySelector('a')
    if (link) {
      link.addEventListener('click', this.handleClick)
    }
  }

  handleClick(event) {
    event.preventDefault()
    history.back()
  }
}

customElements.define('back-link', BackLink)
