function changeMode (){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);   
}
function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}

function changeText(){
    const modoClaro = 'Modo claro';
    const modoEscuro = 'Modo escuro';
    if (body.classList.contains(darkMode)){
        button.innerHTML = modoClaro;
        h1.innerHTML = modoEscuro + ' ligado';
    } else {
        button.innerHTML = modoEscuro;
        h1.innerHTML = modoClaro + ' ligado';
    }
}

const darkMode = 'dark-mode';
const button = document.getElementById('seletor-modo');
const h1 = document.getElementsByTagName('h1')[0];
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click',changeMode);
