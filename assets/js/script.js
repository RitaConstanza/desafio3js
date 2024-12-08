const cambiarColor = document.getElementById('ele1')
cambiarColor.style.fontSize = '40px';
cambiarColor.style.backgroundColor = 'green';

cambiarColor.addEventListener('click', () => {
    cambiarColor.style.backgroundColor = 'yellow';
})
