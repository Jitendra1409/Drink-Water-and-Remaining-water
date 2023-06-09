const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cups, idx) => {
  cups.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }

  smallCups.forEach((cups, idx2) => {
    if (idx2 <= idx) {
      cups.classList.add('full');
    } else {
      cups.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  console.log(totalCups);

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 200}px`;
    percentage.innerText = `${fullCups / totalCups * 100}`
  }

  if(fullCups === totalCups){
    remained.style.visibility='hidden'
    remained.style.height = 0
} else {

    remained.style.visibility='hidden'
    remained.style.height = `${250 * fullCups / 1000}`
}
}
