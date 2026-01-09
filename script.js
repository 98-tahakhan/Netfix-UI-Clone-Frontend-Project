const questions = document.querySelectorAll(".ques");

questions.forEach((question) =>{
    question.addEventListener("click", () =>{
    
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".fa-plus");
    const isOpen = answer.classList.contains("active");
        
        
    questions.forEach((q) => {
      q.nextElementSibling.classList.remove("active");
      q.querySelector(".fa-plus").classList.remove("rotate-45");
      q.setAttribute("aria-expanded", "false");
    });

        
    if (!isOpen) {
      answer.classList.add("active");
      icon.classList.add("rotate-45");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

const cards = document.querySelector(".cards");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

const scrollAmount = 1000;

function updateBtns(){
    const maxScroll = cards.scrollWidth - cards.clientWidth;

    if(cards.scrollLeft <= 0){
        leftBtn.classList.add("slider-hidden");
        leftBtn.classList.remove("slider-visible");
    
    }else{

        leftBtn.classList.remove("slider-hidden");
        leftBtn.classList.add("slider-visible");

    }

    if(cards.scrollLeft >= maxScroll - 5){
        rightBtn.classList.add("slider-hidden")
        rightBtn.classList.remove("slider-visible")
    
    }else{
        rightBtn.classList.remove("slider-hidden")
        rightBtn.classList.add("slider-visible")
    }
}

rightBtn.addEventListener("click", () =>{
    cards.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});


leftBtn.addEventListener("click", () =>{
    cards.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

cards.addEventListener("scroll", updateBtns);
window.addEventListener("resize", updateBtns);

updateBtns();

questions.forEach((question) =>{
    question.addEventListener("keydown", (e) =>{
        if (e.key === "Enter" || e.key === " "){
            e.preventDefault();
            question.click();
        }
    });
});
