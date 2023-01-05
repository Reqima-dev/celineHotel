let index = 0;
let a = 0;
let sliderNew = document.getElementsByClassName("sliderN");
let line = document.getElementsByClassName("line");

function show(n) {
  for (a = 0; a < sliderNew.length; a++) {
    //slider.lenght=4
    sliderNew[a].style.display = "none";
  }
  for (a = 0; a < line.length; a++) {
    //line.lenght=4
    line[a].className = line[a].className.replace("active");
  }

  sliderNew[n - 1].style.display = "block";
}
auto();
function auto() {
  index++;
  if (index > sliderNew.length) {
    index = 1;
  }
  show(index);
  setTimeout(auto, 4000); //4secondes
}

function plusSlide(n) {
  index += n;
  if (index > sliderNew.length) {
    index = 1;
  }
  if (index < 1) {
    index = sliderNew.length;
  }
  show(index);
}

function currentSlide(n) {
  index = n;
  show(index);
}