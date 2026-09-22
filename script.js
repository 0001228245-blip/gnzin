const respostasCorretas = {
  q1: "A",
  q2: "B",
  q3: "C",
  q4: "B",
  q5: "D"
};

const botao = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {

  let acertos = 0;
  let respondidas = 0;

  for (let pergunta in respostasCorretas) {

    const resposta = document.querySelector(
      `input[name="${pergunta}"]:checked`
    );

    if (resposta) {
      respondidas++;

      if (resposta.value === respostasCorretas[pergunta]) {
        acertos++;
      }
    }
  }

  const total = 5;

  if (respondidas < total) {
    resultado.innerHTML = `
      <h2>⚠️ Atenção!</h2>
      <p>Você precisa responder todas as perguntas.</p>
      <p>Respondidas: ${respondidas}/${total}</p>
    `;

    return;
  }

  const porcentagem = (acertos / total) * 100;

  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p>Você acertou <strong>${acertos}</strong> de <strong>${total}</strong> perguntas.</p>
    <p>Sua pontuação foi: <strong>${porcentagem}%</strong></p>
  `;
});