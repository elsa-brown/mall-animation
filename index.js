const paths = document.querySelectorAll('path');
const svg = document.querySelector('svg');
const pathLength = 14072;

let idxA = 0;
let idxB = paths.length + 1;
let count = 0;
let offset = 0;
let filterBlur = 0;
let reverseBlur = false;

const fillPath = () => {
  count++;

  idxB--;
  const currPathB = paths[idxB];
  if (count >= 150) {
    if (currPathB) {
      if (idxB % 2) {
        currPathB.setAttribute('style', `fill:#fff;`);
      } else {
        currPathB.setAttribute('style', `fill:#000`);
      }
    }
  }

  idxA++;
  const currPathA = paths[idxA];
  if (currPathA) {
    if (idxA % 2) {
      currPathA.setAttribute('style', `fill:#fff`);
    } else {
      currPathA.setAttribute('style', `fill:#000`);
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
  }

  window.requestAnimationFrame(fillPath);
};
 
window.requestAnimationFrame(fillPath);