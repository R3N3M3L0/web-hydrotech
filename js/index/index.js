function abrirMenu() {
    document.getElementById("iconoMenu").style.display="none";
    document.getElementById("iconoMenuCerrado").style.display="block";
    document.getElementById("navTop").style.animation="backInDown";
    document.getElementById("navTop").style.animationDuration="800ms";
    document.getElementById("navTop").style.display="block";
}
function cerrarMenu() {
    document.getElementById("iconoMenu").style.display="block";
    document.getElementById("iconoMenuCerrado").style.display="none";
    document.getElementById("navTop").style.display="none";
}