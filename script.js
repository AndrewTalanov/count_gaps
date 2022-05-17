let button = document.querySelector(".button");

button.addEventListener("click", () => {
  let tableText = document.querySelector(".textarea").value;

  tableText = tableText
    .replace(/[0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9]/gi, '')
    .replace(/[^0-9]/g, '')
    .replace(/\s/g, '').replace(/(.{1})/g, "$1+")

  tableText = eval(tableText + 0);

  let otvet = document.querySelector(".otvet");

  otvet.innerHTML = `${tableText}`;

});

