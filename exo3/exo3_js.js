// JS

const btn = document.getElementById('Change');
const onglets = document.getElementsByClassName('onglet');
const contents = document.getElementsByClassName('contenu');

// Les onglets

for( let content of contents ){
    content.style.visibility = 'hidden'
}

for( let onglet of onglets ){
    let id = onglet.id.slice(-1);
    onglet.onclick = function(event){
        for( let content of contents ){
            content.style.visibility = 'hidden'
        }
        document.getElementById('contenu'+id).style.visibility = 'visible';
    }
}

// Vertical <-> Horizontal 

btn.onclick = function(event) {
    const value = btn.value;

    if( value === "Vertical" ){
        btn.value = "Horizontal";
        for( let onglet of onglets ){
            onglet.style.float = 'none';
        }

        for( let content of contents ){
            content.classList.remove('contenuH');
            content.classList.add('contenuV');
        }
    }
    else {
        btn.value = "Vertical";
        for( let onglet of onglets ){
            onglet.style.float = 'left';
        }
        for( let content of contents ){
            content.classList.remove('contenuV');
            content.classList.add('contenuH');
        }
    }
}