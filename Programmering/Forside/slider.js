let currentIndex1 = 0;
const slides1 = document.querySelectorAll('.carousel-item1');
const carouselWrapper1 = document.getElementById('carouselWrapper1');

function showSlide1(index) {
  if (index < 0) {
    index = slides1.length - 1;
  } else if (index >= slides1.length) {
    index = 0;
  }
  currentIndex1 = index;
  const offset = -currentIndex1 * 100 + '%';
  carouselWrapper1.style.transform = `translateX(${offset})`;
}

function prevSlide1() {
  showSlide1(currentIndex1 - 1);
}

function nextSlide1() {
  showSlide1(currentIndex1 + 1);
}

//slider 2

let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.carousel-item2');
const carouselWrapper2 = document.getElementById('carouselWrapper2');

function showSlide2(index) {
  if (index < 0) {
    index = slides2.length - 1;
  } else if (index >= slides2.length) {
    index = 0;
  }
  currentIndex2 = index;
  const offset = -currentIndex2 * 100 + '%';
  carouselWrapper2.style.transform = `translateX(${offset})`;
}

function prevSlide2() {
  showSlide2(currentIndex2 - 1);
}

function nextSlide2() {
  showSlide2(currentIndex2 + 1);
}

//slider 3

let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.carousel-item3');
const carouselWrapper3 = document.getElementById('carouselWrapper3');

function showSlide3(index) {
  if (index < 0) {
    index = slides3.length - 1;
  } else if (index >= slides3.length) {
    index = 0;
  }
  currentIndex3 = index;
  const offset = -currentIndex3 * 100 + '%';
  carouselWrapper3.style.transform = `translateX(${offset})`;
}

function prevSlide3() {
  showSlide3(currentIndex3 - 1);
}

function nextSlide3() {
  showSlide3(currentIndex3 + 1);
}

//slider 4

let currentIndex4 = 0;
const slides4 = document.querySelectorAll('.carousel-item4');
const carouselWrapper4 = document.getElementById('carouselWrapper4');

function showSlide4(index) {
  if (index < 0) {
    index = slides4.length - 1;
  } else if (index >= slides4.length) {
    index = 0;
  }
  currentIndex4 = index;
  const offset = -currentIndex4 * 100 + '%';
  carouselWrapper4.style.transform = `translateX(${offset})`;
}

function prevSlide4() {
  showSlide4(currentIndex4 - 1);
}

function nextSlide4() {
  showSlide4(currentIndex4 + 1);
}