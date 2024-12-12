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
        alertDiv.style.width = "90%";
        alertDiv.style.maxWidth = "900px";
        alertDiv.style.padding = "30px";
        alertDiv.style.backgroundColor = "#012970";
        alertDiv.style.color = "#ffffff";
        alertDiv.style.border = "2px solid #012970";
        alertDiv.style.borderRadius = "15px";
        alertDiv.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
        alertDiv.style.zIndex = "1000";
        alertDiv.style.overflow = "hidden"; 
        alertDiv.style.overflowX = "auto"; 

        alertDiv.innerHTML = `
            <strong style="display: block; text-align: center; margin-bottom: 20px; font-size: 1.5em;">Dados do END ID: ${endId}</strong>
            <table style="margin-top: 10px; width: 100%; background-color: #01447e; color: #ffffff; border-collapse: collapse; text-align: left; font-size: 1em;">
                <thead>
                    <tr style="background-color: #012970; color: #ffffff;">
                        <th style="padding: 10px; border: 1px solid #ffffff;">Site ID</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Demanda</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Detentora</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">ID Detentora</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Operadora Cedente</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">ID Operadora</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Logradouro</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Número</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Bairro</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Município</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Estado</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">CEP</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Latitude</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Longitude</th>
                        <th style="padding: 10px; border: 1px solid #ffffff;">Observações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="color: #ffffff;">
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">SITE01</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Expansão</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Empresa B</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">001</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Vivo</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">001</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Rua Vinte</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">20</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Bairro Vinte</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">Vinte</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">SP</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">0800081</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">-1240</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">8158</td>
                        <td style="padding: 10px; border: 1px solid #ffffff; color: #ffffff !important;">sem observações</td>
                    </tr>
                </tbody>
            </table>
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

        document.addEventListener("scroll", () => {
            closeButton.style.top = window.scrollY + alertDiv.offsetHeight + 10 + "px";
        });

        alertDiv.appendChild(closeButton);
        document.body.appendChild(alertDiv);

        window.scrollTo(0, alertDiv.getBoundingClientRect().top + window.scrollY - 100);
    });
});
