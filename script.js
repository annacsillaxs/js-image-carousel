const imgs = document.querySelector('#imgs');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

const images = document.querySelectorAll('#imgs img');

let idx = 0;
let activeImg = images[idx];

let imgIndex;
let direction;

function interval () {
  setInterval(() => {
    changeIndex('next');
  }, 3000);
} 

function setPosition(idx) {
  images.forEach((image, imgIndex) => {
    let position = 'nextImg';

    if (imgIndex === idx) {
      position = 'activeImg';
    }
    if (imgIndex === idx - 1 || (idx === 0 && imgIndex === images.length - 1)) {
      position = 'lastImg';
    }
    image.className = `${position}`;
  })
}

setPosition(idx);

function changeIndex(direction) {
  if (direction === 'next') {
    idx += 1;
  }
  if (direction === 'prev') {
    idx -= 1;
  }

  checkIndex();
  setPosition(idx);
  return idx;
}

function checkIndex() {
  let lastIndex = images.length - 1;

  if (idx < 0) {
    idx = lastIndex;
  }
  if (idx > images.length - 1) {
    idx = 0;
  }
}

rightBtn.addEventListener('click', () => {
  changeIndex('next');
  clearInterval(interval);
});


leftBtn.addEventListener('click', () => {
  changeIndex('prev');
  clearInterval(interval);
});

interval();
