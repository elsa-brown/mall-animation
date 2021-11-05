const paths = document.querySelectorAll('path');
let idxA = -1;
let idxB = paths.length + 1;
let count = 0;
 
const fillPath = () => {
   count++;
   idxB--;
   const currPathB = paths[idxB];
 
   if (currPathB) {
       if (idxB % 2) {
       currPathB.setAttribute('style', `fill:#fff;`);
       } else {
       currPathB.setAttribute('style', `fill:#000`);
       }
   }
 
   if (count >= 200) {
       idxA++;
       const currPathA = paths[idxA];
      
       if (currPathA) {
       if (idxA % 2) {
           currPathA.setAttribute('style', `fill:#fff`);
       } else {
           currPathA.setAttribute('style', `fill:#000`);
       }
   }
};
 
   window.requestAnimationFrame(fillPath);
 
};
 
window.requestAnimationFrame(fillPath);

