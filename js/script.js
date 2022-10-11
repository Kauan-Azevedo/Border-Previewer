const applyStyle = () => {
    let border = document.getElementById('border').value
    let radius = document.getElementById('border-radius').value
    let color = document.getElementById('border-color').value

    let box = document.getElementById('box-item')
    box.style.border = border + 'px solid'
    box.style.borderRadius = radius + 'px'
    box.style.borderColor = color
}

const advStyle = () => {
    let box = document.getElementById('box-item')
    let width = document.getElementById('width').value
    let height = document.getElementById('height').value
    let bgColor = document.getElementById('background').value
    let shadow = document.getElementById('box-shadow').value

    box.style.width = width + 'px'
    box.style.height = height + 'px'
    box.style.backgroundColor = bgColor
    box.style.boxShadow = shadow

}

const toggleAdv = () => {
    let toggle = localStorage.getItem('toggle');
    let options = document.getElementById('advOptions');
    if(toggle != undefined){
        if(toggle == 'aberto'){
            options.style.display = 'none';
    
            localStorage.setItem('toggle', 'fechado');
        } else{
            options.style.display = 'flex';

            localStorage.setItem('toggle', 'aberto');
        }
    }else{
        options.style.display = 'flex';

        localStorage.setItem('toggle', 'aberto');
    }
}

localStorage.setItem('toggle', 'fechado');