const mensagensBiscoitoDaSorte = [
  "A persistência é o caminho do êxito.",
  "Seja a mudança que você deseja ver no mundo.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e tudo será possível.",
  "O importante não é vencer todos os dias, mas lutar sempre.",
  "A sorte favorece a mente bem preparada.",
  "O verdadeiro segredo para a juventude é o otimismo e o bom humor.",
  "A maior aventura que você pode ter é viver a vida dos seus sonhos.",
  "Nada acontece a menos que sonhemos antes.",
  "A felicidade não está em viver, mas em saber viver."
];

let random = Math.floor(Math.random() * 10);

const biscoito = document.querySelector("#biscoito");
const mensagem = document.querySelector("#mensagem");

const biscoitoBox = document.querySelector("#biscoitoBox");
const biscoitoAbertoBox = document.querySelector("#biscoitoAbertoBox");

const button = document.querySelector("button");

function toggleBiscoito() {
  biscoitoBox.classList.toggle("hidden");
  biscoitoAbertoBox.classList.toggle("hidden");
  biscoitoAbertoBox.querySelector("h1").innerText = mensagensBiscoitoDaSorte[random];
  random = Math.floor(Math.random() * 10);
}

biscoito.addEventListener("click", toggleBiscoito);
button.addEventListener("click", toggleBiscoito);