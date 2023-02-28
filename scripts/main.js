const burgerBtn = document.querySelector(".burger-btn");
const navMenu = document.querySelector("nav");
const navItems = document.querySelectorAll(".nav-item");

// открытие меню по клику

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("lock");
});

//	закрытие меню по клику на раздел
navItems.forEach(navItems =>{
  navItems.addEventListener('click', function () {
    burgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("lock");
  })
})


const age = document.querySelector('.age')

const date = new Date()
// console.log(age)

function countAge (year){
  const yearNow = date.getFullYear()
  const fulAge = yearNow - year
  age.textContent = fulAge
} 

countAge(1986)