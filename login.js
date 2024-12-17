const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Adiciona ou remove a classe "active" para alternar entre telas de login e registro
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Validação do formulário de login
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Chama a função de login
    login(event);
  });

// Função de login
function login(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Seleciona os campos de entrada de email e senha
  const iemail = document.querySelector("#login-email");
  const ipassword = document.querySelector("#login-password");

  // Faz a requisição para o backend (API)
  fetch("https://alfasys-back-production.up.railway.app/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: iemail.value, // Pega o valor do input de email
      senha: ipassword.value, // Pega o valor do input de senha
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao autenticar. Verifique suas credenciais.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // Verifica se o login foi bem-sucedido e se há um token
      if (data.token) {
        const token = data.token;

        // Armazena o token no localStorage
        localStorage.setItem("token", token);

        console.log("Token armazenado no localStorage:", token);

        // Exibe uma mensagem de sucesso no login
        alert("Login realizado com sucesso!");

        window.location.href = "/index.html";
      } else {
        // Exibe uma mensagem de erro se não houver token
        alert("Erro ao realizar o login: Token não encontrado.");
      }
    })
    .catch((error) => {
      // Lida com erros na requisição
      console.error("Erro na requisição:", error);
      alert(error.message || "Erro na requisição. Tente novamente.");
    });
}
