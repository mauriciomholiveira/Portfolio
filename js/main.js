/* =============== SHOW SIDEBAR ======================= */

/* =============== SIDEBAR SHOW ======================= */
/* Validação IF Constante Existente */

/* =============== SIDEBAR HIDDEN ======================= */
/* Validação IF Constante Existente */

/* =============== SKILLS TABS ======================= */
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
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
});
/* =============== link active work ======================= */
const linkWork = document.querySelectorAll(".work_item")

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/* =============== Worl Popup ======================= */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work_button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)
  function portfolioItemDetails (portfolioItem) {
  document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
  document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
  document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;

  }
/* =============== SERVICE MODAL ======================= */
const modalViews  = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})


modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/* =============== SWIPER TESTIMONIAL ======================= */
let swiper = new Swiper(".testimonials_container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});