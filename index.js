const paths = document.querySelectorAll('path');
const svg = document.querySelector('svg');

let idxA = -1;
let idxB = paths.length + 1;
let count = 0;
let offset = 0;

 
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

    if (count > 4000 && count <= 4080 || 
      count > 5000 && count < 5170 || 
      count > 6000) {
      offset--;
      svg.setAttribute('style', `outline-offset: ${offset}px`);
    }
  }
 
  window.requestAnimationFrame(fillPath);
};
 
window.requestAnimationFrame(fillPath);