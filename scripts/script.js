// variáveis globais
let estadoCheckbox = false;
let valueValidate = false;

// Pegando os itens
const number = document.getElementById("number");
const range = document.getElementById("range");
const rangeEnd = document.getElementById("range-end");
const form = document.querySelector("form");
const checkbox = document.getElementById("repeat-number");

const contentInitial = document.getElementById("content-initial");
const contentSecondary = document.getElementById("content-secondary");

// Agora pegamos apenas UM elemento
const valueSecondary = document.querySelector(".results");

// =============================
// VALIDAÇÃO DO INPUT NUMBER
// =============================
number.addEventListener("input", () => {
  number.value = number.value.replace(/\D/g, ""); // mantém apenas números

  if (number.value.length > 1) {
    number.value = number.value.slice(0, 1);
    number.style.border = "2px solid red";
    setTimeout(() => (number.style.border = ""), 1000);
  }

  if (number.value !== "" && Number(number.value) > 4) {
    alert("Só é possível gerar até 4 números, tente novamente!");
    number.value = "";
    number.style.border = "2px solid red";
    setTimeout(() => (number.style.border = ""), 1000);
  }
});

// =============================
// VALIDAÇÃO DO RANGE INICIAL
// =============================
range.addEventListener("input", () => {
  range.value = range.value.replace(/\D/g, "");

  if (range.value.length > 4) {
    range.value = range.value.slice(0, 4);
    range.style.border = "2px solid red";
    setTimeout(() => (range.style.border = ""), 1000);
  }
});

// =============================
// VALIDAÇÃO DO RANGE FINAL
// =============================
rangeEnd.addEventListener("input", () => {
  rangeEnd.value = rangeEnd.value.replace(/\D/g, "");

  if (rangeEnd.value.length > 4) {
    rangeEnd.value = rangeEnd.value.slice(0, 4);
    rangeEnd.style.border = "2px solid red";
    setTimeout(() => (rangeEnd.style.border = ""), 1000);
  }
});

function verifyTrue() {
  checkbox.addEventListener("click", () => {
    estadoCheckbox = checkbox.checked;
    console.log("Checkbox:", estadoCheckbox);
  });
}

function validateValue() {
  const inicio = Number(range.value);
  const fim = Number(rangeEnd.value);

  if (range.value !== "" && (fim < inicio || fim === inicio)) {
    alert("Número final não pode ser menor ou igual ao número inicial!");
    rangeEnd.style.border = "2px solid red";
    rangeEnd.value = "";
    rangeEnd.focus();
    setTimeout(() => (rangeEnd.style.border = ""), 1000);

    valueValidate = true;
  } else {
    valueValidate = false;
  }
}

function sortearNumero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function numberlottery() {
  valueSecondary.innerHTML = "";

  const total = Number(number.value);

  for (let i = 0; i < total; i++) {
    const numeroSorteado = sortearNumero(
      Number(range.value),
      Number(rangeEnd.value)
    );

    const lotteryNumber = document.createElement("h1");
    lotteryNumber.classList.add("NumberLoterry");
    lotteryNumber.textContent = numeroSorteado;
    valueSecondary.appendChild(lotteryNumber);

    await delay(400);

    lotteryNumber.classList.add("show");
  }
}

function draw() {
  if (number.value !== "" && range.value !== "" && rangeEnd.value !== "") {
    validateValue();

    if (valueValidate === false) {
      verifyTrue();

      const numeroSorteado = numberlottery();
      console.log("Número sorteado:", numeroSorteado);

      contentInitial.style.display = "none";
      contentSecondary.style.display = "flex";
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    if (number.value !== "") {
      draw();
    } else {
      throw new Error("Número vazio");
    }
  } catch (error) {
    alert("Erro ao enviar dados, tente novamente.");
  }
});
