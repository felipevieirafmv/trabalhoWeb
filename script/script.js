const changeTheme = document.getElementById("darkMode");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
}

changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme = "dark";
    } else {
        theme = "light";
    }

    window.localStorage.setItem("theme", theme);
});

var elementos = document.getElementsByTagName('img');
var count = 0;

function contar ()
{
    for (var i = 0; i < elementos.length; i++) {
        count++;
    }
    const escrever = document.getElementById("quant");
    escrever.innerHTML = `<p id="quant">Quantidade de carros disponíveis: ${count - 2}</p>`; 
    //Uma imagem é a logo e a outra é a lupa de search
}

contar();