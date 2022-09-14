const nome = "Arian Weslley";
const funcao = "Estudante";
const empresa = "Senac";
const idade = 20;

function apresentacao(cor) {
  if (cor === "vermelho") {
    console.log(
      "Olá, " +
        nome +
        ". Sua função na empresa " +
        empresa +
        " é: " +
        funcao +
        "."
    );
  } else {
    console.log("Eu não te conheco!");
  }
}

apresentacao("azul");
apresentacao("vermelho");
