const button = document.querySelector(".button");
const answer = document.querySelector(".otvet");
const root = document.documentElement;

const scales = 100;
let valueBack;

button.addEventListener("click", () => {
  let tableText = document.querySelector(".textarea").value;

  tableText = tableText
    .replace(/[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9]/gi, '')
    .replace(/[^0-9]/g, '')
    .replace(/\s/g, '').replace(/(.{1})/g, "$1+")

  tableText = eval(tableText + 0);

  answer.innerHTML = `${tableText}`;

  valueBack = tableText / scales * 100 + '%';
  
  console.log(valueBack)
  root.style.setProperty('--percent', valueBack);

});

