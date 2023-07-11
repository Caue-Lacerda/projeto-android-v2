function clickMenu() {
    if (burguer.style.display == 'block') {
        burguer.style.display = 'none'
    } else {
        burguer.style.display = 'block'
    }
}

function telaAjustavel() {
    if (window.innerWidth >= 768) {
        burguer.style.display = 'block';
    } else {
        burguer.style.display = 'none';
    }
}

    
