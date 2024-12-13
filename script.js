let userImg = document.querySelector(".user-img")
let userName = document.querySelector("#userName")
let profile = document.querySelector(".profile");
let menu = document.querySelector("#menu");
let main = document.querySelector(".main");
let sidebar = document.querySelector(".sidebar");
let searchIcon = document.querySelector(".search-icon");
let input = document.querySelector(".input");
let noticeIcon = document.querySelector(".notice-icon");
let notice = document.querySelector(".notice");


searchIcon.addEventListener("click",()=>{
    input.classList.toggle("active");
})

userImg.addEventListener("click",()=>{
    profile.classList.add("show")

    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "IMG" && e.target != !userImg && e.target.tagName != "H6"){
            profile.classList.remove("show")
        }
    })
})
userName.addEventListener("click",()=>{
    profile.classList.add("show")
    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "H6" && e.target != !userName && e.target.tagName != "IMG"){
            profile.classList.remove("show")
        }
    })
})

noticeIcon.addEventListener("click",()=>{
    notice.classList.add("show")
    document.addEventListener("click",(e)=>{
        if(e.target.tagName != "I" && e.target != !noticeIcon){
            notice.classList.remove("show")
        }
    })
})


menu.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
})

let navbarBrand = document.querySelector(".navbar-brand");

navbarBrand.addEventListener("click", (e) => {
    e.preventDefault(); 
    location.reload(); 
});

document.querySelectorAll(".end-id").forEach(button => {
    button.addEventListener("click", (event) => {
        const endId = event.target.getAttribute("data-id");
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert-container";
        
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "50%";
        alertDiv.style.left = "50%";
        alertDiv.style.transform = "translate(-50%, -50%)";
        alertDiv.style.width = "86%"; /* 7% em cada lado */
        alertDiv.style.maxWidth = "900px";
        alertDiv.style.padding = "30px";
        alertDiv.style.backgroundColor = "#012970";
        alertDiv.style.color = "#ffffff";
        alertDiv.style.border = "2px solid #012970";
        alertDiv.style.borderRadius = "15px";
        alertDiv.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
        alertDiv.style.zIndex = "1000";
        alertDiv.style.overflow = "hidden";

        alertDiv.innerHTML = `
            <strong style="display: block; text-align: center; margin-bottom: 20px; font-size: 1.5em;">Detalhes do Projeto: ${endId}</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <ul style="flex: 1; padding-left: 20px; font-size: 1em; list-style: none;">
                    <li><strong>Nome do Projeto:</strong> Projeto Exemplo</li>
                    <li><strong>Cliente:</strong> Empresa A</li>
                    <li><strong>Data Início:</strong> 01/01/2024</li>
                    <li><strong>Data Fim:</strong> 31/12/2024</li>
                    <li><strong>Status:</strong> Em Andamento</li>
                    <li><strong>Descrição:</strong> Este é um projeto de exemplo para fins demonstrativos.</li>
                </ul>
                <ul style="flex: 1; padding-right: 20px; font-size: 1em; list-style: none;">
                    <li><strong>Endereço:</strong> Rua Vinte, 20, Bairro Vinte, Vinte - SP, CEP: 0800081</li>
                    <li><strong>Latitude:</strong> -1240</li>
                    <li><strong>Longitude:</strong> 8158</li>
                    <li><strong>Observações:</strong> sem observações adicionais</li>
                </ul>
            </div>
        `;

        const closeButton = document.createElement("button");
        closeButton.innerText = "Fechar";
        closeButton.style.marginTop = "20px";
        closeButton.style.padding = "12px 20px";
        closeButton.style.backgroundColor = "#ffffff";
        closeButton.style.border = "2px solid #ffffff";
        closeButton.style.color = "#012970";
        closeButton.style.cursor = "pointer";
        closeButton.style.borderRadius = "10px";
        closeButton.style.display = "block";
        closeButton.style.marginLeft = "auto";
        closeButton.style.marginRight = "auto";

        closeButton.addEventListener("click", () => {
            alertDiv.remove();
        });

        alertDiv.appendChild(closeButton);
        document.body.appendChild(alertDiv);

        window.scrollTo(0, alertDiv.getBoundingClientRect().top + window.scrollY - 100);
    });
});

document.querySelectorAll(".btn-outline-primary").forEach(button => {
    button.addEventListener("click", (event) => {
        const endId = event.target.closest("tr").querySelector(".end-id").getAttribute("data-id");
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert-container";
        
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "50%";
        alertDiv.style.left = "50%";
        alertDiv.style.transform = "translate(-50%, -50%)";
        alertDiv.style.width = "86%"; /* 7% em cada lado */
        alertDiv.style.maxWidth = "900px";
        alertDiv.style.padding = "30px";
        alertDiv.style.backgroundColor = "#012970";
        alertDiv.style.color = "#ffffff";
        alertDiv.style.border = "2px solid #012970";
        alertDiv.style.borderRadius = "15px";
        alertDiv.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
        alertDiv.style.zIndex = "1000";
        alertDiv.style.overflow = "hidden";

        alertDiv.innerHTML = `
            <strong style="display: block; text-align: center; margin-bottom: 20px; font-size: 1.5em;">Informações de ligação do projeto: ${endId}</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <ul style="flex: 1; padding-left: 20px; font-size: 1em; list-style: none;">
                    <li><strong>Status Ligação:</strong> qualquer resposta</li>
                    <li><strong>Concessionária:</strong> qualquer resposta</li>
                    <li><strong>Previsão de Ligação:</strong> qualquer resposta</li>
                    <li><strong>Número Medidor:</strong> qualquer resposta</li>
                    <li><strong>Número Instalação:</strong> qualquer resposta</li>
                    <li><strong>Número de Fases:</strong> qualquer resposta</li>
                </ul>
                <ul style="flex: 1; padding-right: 20px; font-size: 1em; list-style: none;">
                    <li><strong>Leitura Inicial:</strong> qualquer resposta</li>
                    <li><strong>Data Ligação:</strong> qualquer resposta</li>
                    <li><strong>Endereço:</strong> Rua Vinte, 20, Bairro Vinte, Vinte - SP</li>
                    <li><strong>Latitude:</strong> -1240</li>
                    <li><strong>Longitude:</strong> 8158</li>
                    <li><strong>Observações:</strong> sem observações adicionais</li>
                </ul>
            </div>
        `;

        const closeButton = document.createElement("button");
        closeButton.innerText = "Fechar";
        closeButton.style.marginTop = "20px";
        closeButton.style.padding = "12px 20px";
        closeButton.style.backgroundColor = "#ffffff";
        closeButton.style.border = "2px solid #ffffff";
        closeButton.style.color = "#012970";
        closeButton.style.cursor = "pointer";
        closeButton.style.borderRadius = "10px";
        closeButton.style.display = "block";
        closeButton.style.marginLeft = "auto";
        closeButton.style.marginRight = "auto";

        closeButton.addEventListener("click", () => {
            alertDiv.remove();
        });

        alertDiv.appendChild(closeButton);
        document.body.appendChild(alertDiv);

        window.scrollTo(0, alertDiv.getBoundingClientRect().top + window.scrollY - 100);
    });
});




