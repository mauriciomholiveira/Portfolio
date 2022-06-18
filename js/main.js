/* =============== SHOW SIDEBAR ======================= */

/* =============== SIDEBAR SHOW ======================= */
/* Validação IF Constante Existente */

/* =============== SIDEBAR HIDDEN ======================= */
/* Validação IF Constante Existente */

/* =============== SKILLS TABS ======================= */
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('skills_active')
    })

    target.classList.add('skills_active')

    tabs.forEach(tab => {
      tab.classList.remove('skills_active')
    })

    tab.classList.add('skills_active')
  })
})
/* =============== MIXITUP FILTER PORTFOLIO ======================= */
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
    target: '.work_card'
  },
  animation: {
    duration: 300
  }
})
/* =============== link active work ======================= */
const linkWork = document.querySelectorAll('.work_item')
function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))
/* =============== Worl Popup ======================= */

/* =============== SERVICE MODAL ======================= */

/* =============== SWIPER TESTIMONIAL ======================= */
