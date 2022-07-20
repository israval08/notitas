const btn = document.getElementById('btn');
const input2 = document.getElementById('Descripcion');
const input3 = document.getElementById('checkbox')
const notas = document.getElementById('notas');
const btnClose = document.getElementsByClassName('btnEliminar');
const input = document.getElementById('Titulo');

btn.addEventListener("click", function(a) {
    if (input2.value == '') {
        alert('Descripcion obligatoria');
    } else {
        agregarnota();
    }
})

function borrarnota() {
    const eliminar = document.getElementById('nota');
    notas.removeChild(eliminar);
}

function agregarnota() {
    const nota = document.createElement('div');
    const nota1 = document.getElementById('nota');
    nota.id = 'nota';
    nota.className = 'post';
    nota.classList.add('pt-1');
    nota.style.display = 'inline-block';
    notas.insertBefore(nota, nota1);

    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btnEliminar';
    btnEliminar.classList.add('btn-close');
    nota.appendChild(btnEliminar)

    btnEliminar.addEventListener('click', function(a) {
        borrarnota()
    })

    const Titulo = document.createElement('h1');
    Titulo.innerHTML = input.value;
    nota.appendChild(Titulo);

    const Descripcion = document.createElement('p');
    Descripcion.innerHTML = input2.value;
    nota.appendChild(Descripcion);


    if (input3.checked) {
        nota.classList.add('importante');
    }
}