// ---------------------------------------------Header Submenu

function showSubmenu(){
document.getElementsByClassName('header-submenu').style.display = 'block'
}

// -------------------------------------------------------------------------Footer-Play
// --------------------------------------Icono de Favoritos

function showSolid(){
document.getElementById('fav-solid').style.display = 'block',
document.getElementById('fav-border').style.display = 'none'
}

function hideSolid(){
document.getElementById('fav-solid').style.display = 'none',
document.getElementById('fav-border').style.display = 'block'
}

// --------------------------------------Icono de Play-Pause

function showpause(){
document.getElementById('pause').style.display = 'block'
document.getElementById('play').style.display = 'none'
}

function showplay(){
document.getElementById('play').style.display = 'block'
document.getElementById('pause').style.display = 'none'
}
// -------------------------------------------------------------------------Footer-Play
