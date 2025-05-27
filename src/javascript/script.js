// Sidebar toggle
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Accordion expansion logic
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isVisible = content.style.display === "block";

        // Fecha todas as caixas antes de abrir outra
        document.querySelectorAll(".accordion-content").forEach(box => {
            box.style.display = "none";
        });

        // Abre ou fecha a clicada
        content.style.display = isVisible ? "none" : "block";
    });
});


//Tab

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.getAttribute('tab-group');
    const tabId = button.getAttribute('data-tab');

    // Toggle active tab buttons
    document.querySelectorAll(`.tab[tab-group="${group}"]`).forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Toggle active content
    document.querySelectorAll(`.tab-content[tab-group="${group}"]`).forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
  });
});

//calc

function calcularPena() {
  const ferramentas = parseInt(document.getElementById("ferramentas").value) || 0;
  const entorpecentes = parseInt(document.getElementById("entorpecentes").value) || 0;
  const municao = parseInt(document.getElementById("municao").value) || 0;
  const dinheiro = parseInt(document.getElementById("dinheiro").value) || 0;
  const produtos = parseInt(document.getElementById("produtos").value) || 0;
  const multas = parseInt(document.getElementById("multas").value) || 0;

  let total = 0;
  let detalhes = [];

  if (ferramentas > 0) {
    const pena = 10 + (ferramentas * 10);
    total += pena;
    detalhes.push({ nome: "Posse de Ferramentas Ilícitas", valor: pena });
  }

  if (entorpecentes > 0) {
    const pena = 15 + (entorpecentes / 2);
    total += pena;
    detalhes.push({ nome: "Tráfico de Entorpecentes", valor: pena });
  }

  if (municao > 0) {
    const pena = 15 + Math.floor(municao / 20) * 5;
    total += pena;
    detalhes.push({ nome: "Posse de Munição Ilegal", valor: pena });
  }

  if (dinheiro > 0) {
    const pena = 10 + Math.floor(dinheiro / 1000);
    total += pena;
    detalhes.push({ nome: "Posse de Dinheiro Ilícito", valor: pena });
  }

  if (produtos > 0) {
    const pena = 10 + (produtos * 2);
    total += pena;
    detalhes.push({ nome: "Receptação de Produtos Roubados", valor: pena });
  }

  if (multas > 0) {
    const pena = 10 + Math.floor(multas / 1000);
    total += pena;
    detalhes.push({ nome: "Multas Pendentes", valor: pena });
  }

  // Exibir resultado
  const itensCalculo = document.getElementById("itens-calculo");
  const totalSpan = document.getElementById("pena-total");
  const resultadoDiv = document.getElementById("resultado-detalhado");

  itensCalculo.innerHTML = detalhes.map(item =>
    `<div class="linha">
       <span>${item.nome}:</span>
       <span>${item.valor.toFixed(1)} meses</span>
     </div>`).join("");

  totalSpan.innerHTML = `<span class="destaque">${total.toFixed(1)} meses</span>`;
  resultadoDiv.style.display = "block";
}

//creditos
function toggleCredits() {
  const box = document.getElementById('creditsBox');
  box.classList.toggle('visible');
}

/*-------------------*/

