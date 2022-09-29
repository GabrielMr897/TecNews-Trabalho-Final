function darkMode() {
  document.body.classList.add("darkMode");
}

function lightMode() {
  document.body.classList.remove("darkMode");
}

const contatos = [];

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("envia").addEventListener("click", function (sub) {
    let nome = document.getElementById("nome").value; //Carregamos o valor do campo nome
    let email = document.getElementById("email1").value; //Carregamos o valor do campo e-mail
    let nascimento = document.getElementById("nascimento").value; //Carregamos o valor do campo senha
    let mensagem = document.getElementById("msg").value;
    let validacoes = 0;

    if (nome.length > 10) {
      validacoes++;
    }

    if (email.indexOf("@") > 0 && email.indexOf(".") > 0) {
      validacoes++;
    }

    if (nascimento.length > 7) {
      validacoes++;
    }

    if (mensagem.length > 1) {
      validacoes++;
    }

    if (validacoes != 4) {
      sub.preventDefault();
      alert("Preencha corretamente todos os campos");
    } else {
      localStorage.nome = nome;
      localStorage.email = email;
      localStorage.nascimento = nascimento;
      localStorage.mensagem = mensagem;

      console.log(
        localStorage.nome,
        localStorage.email,
        localStorage.nascimento,
        localStorage.mensagem
      );

      document.getElementById("nome").value = "";
      document.getElementById("email1").value = "";
      document.getElementById("nascimento").value = "";
      document.getElementById("msg").value = "";
    }
  });
});
