
function showContent(year) {
    // Ocultar todos los contenidos
    var allContent = document.getElementsByClassName('year-content');
    for (var i = 0; i < allContent.length; i++) {
        allContent[i].style.display = 'none';
    }

    // Mostrar el contenido del año seleccionado
    document.getElementById(year).style.display = 'block';
}
