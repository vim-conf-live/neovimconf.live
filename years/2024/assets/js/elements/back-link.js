class BackLink extends HTMLElement {
  connectedCallback() {
    const link = this.querySelector('a')
    if (link && history.length > 1) {
      link.addEventListener('click', this.handleClick)
    }
  }

  handleClick(event) {
    event.preventDefault()
    history.back()
  }
}

customElements.define('back-link', BackLink)
