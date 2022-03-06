import activeFilters from "./activeFilterCheck.js";

export default function filterBySearchInput() {
    document.querySelector('#filter-search-input').addEventListener('keyup', () => {
        activeFilters();
    })
}

export function LookForSearchInputValue() {
    const cards = document.querySelectorAll('article');
    const inputValue = document.querySelector('#filter-search-input').value.toUpperCase();

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('article h2');
        let desc = cards[i].querySelector('article p');

        if (document.querySelector('#filter-search-input').value.length >= 3) {
            if (title.textContent.toUpperCase().indexOf(inputValue) > -1 || desc.textContent.toLocaleUpperCase().indexOf(inputValue) > -1) {
                if (cards[i].style.display === "none") return;
                cards[i].style.display = "flex";
            } else {
                cards[i].style.display = "none";
                var todaysDate = new Date();

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}

console.log(convertDate(todaysDate));
            }
        }
    }
}


