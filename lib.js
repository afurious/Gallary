let container = document.querySelector(".container");
let main = document.querySelector("main");
let slides = document.querySelectorAll(".slide");

// create navigation bar

function createNavBar() {
  const navigation = document.createElement("section");
  navigation.setAttribute("class", "navigation");

  for (i = 0; i < slides.length; i++) {
    navigation.innerHTML += "<div></div>";
  }
  main.appendChild(navigation);
}
createNavBar();

// create click slide

let slideBtn = document.querySelectorAll(".navigation div");

slideBtn.forEach((item, i) => {
  item.addEventListener("click", function () {
    container.style.transform = `translateX(-${100 * i}vw)`;
    document.querySelector(".active").removeAttribute("class");
    slideBtn[i].setAttribute("class", "active");
  });
});

// create an autoplay

slideBtn[0].setAttribute("class", "active");

let counter = 0;
function autoSlide() {
  if (counter < slideBtn.length) {
    container.style.transform = `translateX(-${100 * counter}vw)`;
    document.querySelector(".active").removeAttribute("class");
    slideBtn[counter].setAttribute("class", "active");
  }
  if (counter == slideBtn.length - 1) {
    return (counter = 0);
  }
  counter++;
}

setInterval(autoSlide, 3000);
