// variaveis globais
let estadoCheckbox = false;
let valueValidate = false;
// Pegando os itens
const number = document.getElementById("number");
const range = document.getElementById("range");
const rangeEnd = document.getElementById("range-end");
const form = document.querySelector("form");
const checkbox = document.getElementById("repeat-number");

// Fazendo com que pegue o input, tire o que for de letra e caractere e se for maior que value.lentgh vai ficar vermelho
number.addEventListener("input", () => {
  number.value = number.value.replace(/\D/g, ""); // mantém apenas números

  if (number.value.length > 1) {
    number.value = number.value.slice(0, 1); // limita 1 caractere
    number.style.border = "2px solid red";
    setTimeout(() => {
      number.style.border = "";
    }, 1000);
  }

  if (number.value !== "" && Number(number.value) > 4) {
    alert("Só é possivel gerar até 4 numeros, tente novamente!");
    number.value = "";
    number.style.border = "2px solid red";
    setTimeout(() => {
      number.style.border = "";
    }, 1000);
  }
});

// Fazendo com que pegue o input, tire o que for de letra e caractere e se for maior que value.lentgh vai ficar vermelho
range.addEventListener("input", () => {
  range.value = range.value.replace(/\D/g, ""); // mantém apenas números

  if (range.value.length > 4) {
    range.value = range.value.slice(0, 4);
    range.style.border = "2px solid red";
    setTimeout(() => {
      range.style.border = "";
    }, 1000);
  }
});

// Fazendo com que pegue o input, tire o que for de letra e caractere e se for maior que value.lentgh vai ficar vermelho
rangeEnd.addEventListener("input", () => {
  rangeEnd.value = rangeEnd.value.replace(/\D/g, ""); // mantém apenas números
  if (range.value.length > 4) {
    range.value = range.value.slice(0, 4);
    range.style.border = "2px solid red";
    setTimeout(() => {
      range.style.border = "";
    }, 1000);
  }
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  try {
    if (number.value !== "") {
      draw();
    } else {
      throw new Error("Nao pode ser vazio");
    }
  } catch (error) {
    alert("Erro ao enviar dado, tente novamente");
  }
});

function verifyTrue() {
  checkbox.addEventListener("click", () => {
    estadoCheckbox = checkbox.checked; // agora funciona como interruptor real
    console.log(estadoCheckbox);
  });
}

// Validação para ver se numero nao é maior ou menor que o outro
function validateValue() {
  const inicio = Number(range.value);
  const fim = Number(rangeEnd.value);

  if (fim < inicio && range.value !== "") {
    alert("Numero final nao pode ser menor que o numero inicial");
    rangeEnd.style.border = "2px solid red";
    setTimeout(() => {
      rangeEnd.style.border = "";
    }, 1000);
    rangeEnd.value = "";
    valueValidate = true;
  } else if (inicio > fim && range.value !== "") {
    alert("Numero inicial nao pode ser maior que o numero final");
    range.style.border = "2px solid red";
    setTimeout(() => {
      range.style.border = "";
    }, 1000);
    range.value = "";
    valueValidate = true;
  } else {
    valueValidate = false;
  }
}

function draw() {
  if (number.value !== "" && range.value !== "" && rangeEnd.value !== "") {
    validateValue();
    if (valueValidate === false) {
      verifyTrue();
      console.log(estadoCheckbox);
    }
  }
}
