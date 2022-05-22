class ModalClass {
  constructor(body, modal, target) {
    this.body = body
    this.modal = modal
    this.isOpen = false
    this.target = target
    this.closeModal = modal.querySelectorAll('.modal-close')

    this.addBackdrop()

    this.target.addEventListener('click', () => {
      if (this.isOpen) return this.close()
      this.open()
    })

    this.closeModal.forEach((element) => {
      element.addEventListener('click', () => {
        this.close()
      })
    })

    this.body.addEventListener('keydown', (e) => {
      this.handleKeydownEvent(e)
    })
  }

  addBackdrop() {
    const position = 'afterbegin'
    const htmlBackdrop = `<div class="backdrop-modal" onclick="modal.close()"></div>`
    this.modal.insertAdjacentHTML(position, htmlBackdrop)
  }

  removeBackdrop() {
    this.modal.querySelectorAll('.backdrop-modal').forEach((element) => {
      element.remove()
    })
  }

  open() {
    this.addBackdrop()
    this.modal.classList.add('modal-open')
    this.body.style.overflow = 'hidden'
  }

  close() {
    this.removeBackdrop()
    this.modal.classList.remove('modal-open')
    this.body.style.overflow = 'auto'
  }

  handleKeydownEvent(e) {
    if (e.which === 27) this.close()
  }
}

const elBody = document.body

const elModal = document.querySelector('.modal')

const elTarget = document.querySelector('.modal-target')

const modal = new ModalClass(elBody, elModal, elTarget)
