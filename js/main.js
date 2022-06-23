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
/* =============== INPUT ANIMATION ======================= */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc(){
  let parent = this.parentNode;
  if(this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc)
}) 



/* =============== SCROLL SECTIONS ACTIVE LINK ======================= */

//get all sections that have an id defined
const sections = document.querySelectorAll("section[id");

//add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, to and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");
    /* If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove ir
    - To know which link needs on active class, we use sectionId variable we are getting while looping through section as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
    {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}