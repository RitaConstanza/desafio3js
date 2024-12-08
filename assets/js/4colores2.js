const cajas = document.getElementById('cajas');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cajas.style.backgroundColor = "#ea899a";
    } else if (event.key === 's') {
        cajas.style.backgroundColor = "#ff9100";
    } else if (event.key === 'd') {
        cajas.style.backgroundColor = "#90c8eb";
    }
    
});

const crearDiv = (color) => {
    const box = document.createElement('div');
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.border = '2px solid black';
    box.style.margin = '1rem';
    box.style.backgroundColor = color;

    document.body.appendChild(box);
}


document.addEventListener("keydown", function (event) {
    if (event.key === "q") {
        crearDiv('#720b98'); 
    } else if (event.key === "w") {
        crearDiv('#525252'); 
    } else if (event.key === "e") {
        crearDiv('#563f25');  
   }
})