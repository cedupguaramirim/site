let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if(count > 8){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}


let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

let data = new Date();
let diaNumero = data.getDay();
let dia = data.getDate();
let mes = mes[data.getMonth()];
let ano = data.getFullYear();

let ativo= document.querySelector(".semana li:nth-child("+diaNumero+")")
ativo.classList.add('atual'); 

let h1 = document.createElement('h1');
h1.innerHTML = dia;
ativo.appendChild(h1);

let h5 = document.createElement('h5');
h1.innerHTML = mes;
ativo.appendChild(h5);

let h3 = document.createElement('h3');
h1.innerHTML = ano;
ativo.appendChild(h3);

const tabs = document.querySelectorAll('.dropbtn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);