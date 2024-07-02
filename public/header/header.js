// creación elementos menú

const header = document.querySelector('#header')
header.classList.add('flex-container')
const divMenu = document.createElement('div')
divMenu.classList.add('flex-container')
divMenu.classList.add('menu')
const ancorLogo = document.createElement('a')
ancorLogo.id = 'logo'
const imgLogo = document.createElement('img')
imgLogo.src = './public/header/JD_icon.png'
imgLogo.alt = 'logo JD'
imgLogo.classList.add('logo')
const divResponsive = document.createElement('div')
divResponsive.id = 'menuResponsive'
const navMenu = document.createElement('nav')
navMenu.id = 'navResponsive'
navMenu.classList.add('flex-container')
navMenu.classList.add('nav')
const ulNavMenu = document.createElement('ul')
ulNavMenu.id = 'ulResponsive'
ulNavMenu.classList.add('flex-container')
const liMenuHombre = document.createElement('li')
liMenuHombre.classList.add('menu-nav')
const ancorMenuHombre = document.createElement('a')
ancorMenuHombre.textContent = 'Hombre'
const liMenuMujer = document.createElement('li')
liMenuMujer.classList.add('menu-nav')
const ancorMenuMujer = document.createElement('a')
ancorMenuMujer.textContent = 'Mujer'
const liMenuNiños = document.createElement('li')
liMenuNiños.classList.add('menu-nav')
const ancorMenuNiños = document.createElement('a')
ancorMenuNiños.textContent = 'Hombre'
const liMenuOfertas = document.createElement('li')
liMenuOfertas.classList.add('menu-nav')
const ancorMenuOfertas = document.createElement('a')
ancorMenuOfertas.textContent = 'Hombre'
const ancorMenuResponsive = document.createElement('a')
ancorMenuResponsive.id = 'openResponsive'
const imgMenuResponsive = document.createElement('img')
imgMenuResponsive.src = './public/header/menu.png'
imgMenuResponsive.alt = 'icono menu responsive'
imgMenuResponsive.classList.add('icon-responsive')
const divLogin = document.createElement('div')
divLogin.id = 'login'
divLogin.classList.add('flex-container')
divLogin.classList.add('login')
const ancorFilterIcon = document.createElement('a')
ancorFilterIcon.id = 'filter-icon'
const imgFilterIcon = document.createElement('img')
imgFilterIcon.src = './public/header/icon _filter_.svg'
imgFilterIcon.classList.add('icon-login')
imgFilterIcon.alt = 'icono filtros'
const ancorShoppingIcon = document.createElement('a')
ancorShoppingIcon.id = 'shopping-icon'
const imgShoppingIcon = document.createElement('img')
imgShoppingIcon.src = './public/header/icon _shopping basket_.svg'
imgShoppingIcon.classList.add('icon-login')
imgShoppingIcon.alt = 'icono compras'
const ancorUserIcon = document.createElement('a')
ancorUserIcon.id = 'icon-user'
const imgUserIcon = document.createElement('img')
imgUserIcon.src = './public/header/icon _User avatar_.svg'
imgUserIcon.classList.add('icon-login')
imgUserIcon.alt = 'icono usuario'

ancorLogo.append(imgLogo)
liMenuHombre.append(ancorMenuHombre)
liMenuMujer.append(ancorMenuMujer)
liMenuNiños.append(ancorMenuNiños)
liMenuOfertas.append(ancorMenuOfertas)
ulNavMenu.append(liMenuHombre)
ulNavMenu.append(liMenuMujer)
ulNavMenu.append(liMenuNiños)
ulNavMenu.append(liMenuOfertas)
navMenu.append(ulNavMenu)
ancorMenuResponsive.append(imgMenuResponsive)
ancorFilterIcon.append(imgFilterIcon)
ancorShoppingIcon.append(imgShoppingIcon)
ancorUserIcon.append(imgUserIcon)
divLogin.append(ancorFilterIcon)
divLogin.append(ancorShoppingIcon)
divLogin.append(ancorUserIcon)

divMenu.append(ancorLogo)
divMenu.append(divResponsive)
divMenu.append(navMenu)
divMenu.append(ancorMenuResponsive)
divMenu.append(divLogin)
header.append(divMenu)

// creación imagen portada

const divImgPortada = document.createElement('div')
divImgPortada.id = 'header-img'
const imgPortada = document.createElement('img')
imgPortada.src = './public/header/Cover.png'
imgPortada.alt = 'portada JD'

divImgPortada.append(imgPortada)
header.append(divImgPortada)

// Creación contenedor filtros

const divFiltros = document.createElement('div')
divFiltros.id = 'filterContainer'
divFiltros.classList.add('flex-container')
const divBgFlecha = document.createElement('div')
divBgFlecha.id = 'background-arrow'
const divFlecha = document.createElement('div')
divFlecha.classList.add('arrow_downward')
const ancorFlecha = document.createElement('a')
const imgFlecha = document.createElement('img')
imgFlecha.src = './public/header/icon _arrow ios downward_.png'
imgFlecha.alt = 'desplegable'

ancorFlecha.append(imgFlecha)
divFlecha.append(ancorFlecha)
divFiltros.append(divBgFlecha)
divFiltros.append(divFlecha)
header.append(divFiltros)
