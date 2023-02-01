const paths = document.querySelectorAll('path');
const svg = document.querySelector('svg');

let idxA = -1;
let idxB = paths.length + 5;
let count = 0;
let offset = 0;
let filterBlur = 0;
let reverseBlur = false;

const fillPath = () => {
  count++;

  idxB--;
  const currPathB = paths[idxB];
  if (count >= 150) {
    if (currPathB && !currPathB.classList.contains('done')) {
      if (idxB % 2) {
        currPathB.setAttribute('style', `fill:#fff;`);
        currPathB.classList.add('done');
      } else {
        currPathB.setAttribute('style', `fill:#000`);
        currPathB.classList.add('done');
      }
    }
  }

  idxA++;
  const currPathA = paths[idxA];
  if (currPathA && !currPathA.classList.contains('done')) {
    if (idxA % 2) {
      currPathA.setAttribute('style', `fill:#fff`);
      currPathA.classList.add('done');
    } else {
      currPathA.setAttribute('style', `fill:#000`);
      currPathA.classList.add('done');
    }
  }

  if (offset > -520) {
    if (count > 1760 && count < 1820) {
      offset += 0.25;
      svg.setAttribute('style', `outline-offset: ${offset}px`);
    }
    if (count > 1900 && count < 1940 ||
      count > 4000 && count <= 4080 ||  
      count > 5600 && count < 5650 ||
      count > 6000) {
      offset--;
      svg.setAttribute('style', `outline-offset: ${offset}px`);
    }
  } else if (filterBlur < 14 && !reverseBlur) {
    filterBlur += 0.10;
    svg.setAttribute('style', `filter: blur(${filterBlur}px); outline-offset: ${offset}px`);
  } else if (filterBlur >= 14 && !reverseBlur) {
    reverseBlur = true;
  } else if (filterBlur > 0 && reverseBlur) {
    filterBlur -= 0.10;
    svg.setAttribute('style', `filter: blur(${filterBlur}px); outline-offset: ${offset}px`);
  }

  if (filterBlur >= 14 && reverseBlur) {
    idxA = 13950;
  }

  window.requestAnimationFrame(fillPath);
};
 
window.requestAnimationFrame(fillPath);