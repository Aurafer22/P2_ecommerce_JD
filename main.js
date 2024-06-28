import './style.css'
import { products } from './public/products/products.js'

// Menu responsive

const openResponsive = document.querySelector('#openResponsive')
const closeResponsive = document.querySelector('#closeResponsive')
const logoResponsive = document.querySelector('#logo')
const menuResponsive = document.querySelector('#menuResponsive')
const navResponsive = document.querySelector('#navResponsive')
const ulResponsive = document.querySelector('#ulResponsive')
const liResponsive = document.querySelector('#ulResponsive > li')
const loginResponsive = document.querySelector('#login')

openResponsive.addEventListener('click', () => {
  logoResponsive.classList.add('responsive')
  menuResponsive.classList.add('menu-responsive')
  navResponsive.classList.remove('nav')
  navResponsive.classList.add('nav-responsive')
  ulResponsive.classList.add('ul-responsive')
  liResponsive.classList.add('li-responsive')
  loginResponsive.classList.add('responsive')
  closeResponsive.classList.add('close-responsive')
  closeResponsive.classList.add('responsive')
  closeResponsive.classList.remove('nav')
  if (!logoResponsive) {
    navResponsive.classList.remove('nav-responsive')
  }
})

closeResponsive.addEventListener('click', () => {
  logoResponsive.classList.remove('responsive')
  menuResponsive.classList.remove('menu-responsive')
  navResponsive.classList.remove('nav-responsive')
  navResponsive.classList.add('nav')
  ulResponsive.classList.remove('ul-responsive')
  liResponsive.classList.remove('li-responsive')
  loginResponsive.classList.remove('responsive')
  closeResponsive.classList.remove('responsive')
  closeResponsive.classList.add('nav')
})

// Listado de productos
const main = document.querySelector('main')
main.classList = 'flex-container'

function printSelection() {
  const resultsContainer = document.querySelector('main')
  resultsContainer.innerHTML = ''
  for (const product of products) {
    const artProduct = document.createElement('article')
    artProduct.classList.add('artProduct')
    const divImgProduct = document.createElement('div')
    const imgProduct = document.createElement('img')
    divImgProduct.classList.add('image-container')
    imgProduct.src = product.image
    imgProduct.classList.add('imgClass')
    divImgProduct.append(imgProduct)
    artProduct.append(divImgProduct)
    const divInfoProduct = document.createElement('div')
    divInfoProduct.classList = 'divInfoProduct flex-container'
    const brandProduct = document.createElement('h4')
    brandProduct.textContent = product.brand
    divInfoProduct.append(brandProduct)
    const divPrice = document.createElement('div')
    divPrice.classList = 'flex-container divPrice'
    const nameProduct = document.createElement('h3')
    nameProduct.textContent = product.name
    divPrice.append(nameProduct)
    const priceProduct = document.createElement('h3')
    priceProduct.textContent = product.price.toFixed([2]) + ' €'
    divPrice.append(priceProduct)
    divInfoProduct.append(divPrice)
    const buttonComprar = document.createElement('button')
    buttonComprar.classList.add('button')
    buttonComprar.textContent = 'Comprar'
    divInfoProduct.append(buttonComprar)
    artProduct.append(divInfoProduct)
    resultsContainer.append(artProduct)
  }
}
printSelection(products)

// Filros de productos

const form = document.createElement('form')
form.classList.add('flex-container')
form.classList.add('form')
form.id = 'form'
const divInputs = document.createElement('div')
divInputs.classList.add('divInputs')
const brandInput = document.createElement('input')
brandInput.id = 'brandInput'
brandInput.placeholder = 'Todas las marcas'
brandInput.classList.add('inputClass')
divInputs.append(brandInput)
const priceInput = document.createElement('input')
priceInput.id = 'priceInput'
priceInput.placeholder = 'Precio Máximo'
priceInput.classList.add('inputClass')
priceInput.type = 'number'
divInputs.append(priceInput)
form.append(divInputs)
const divButtons = document.createElement('div')
divButtons.classList.add('divButtons')
const filterButton = document.createElement('button')
filterButton.type = 'submit'
filterButton.textContent = 'Filtrar'
filterButton.classList.add('filterButton')
divButtons.append(filterButton)

const cleanButton = document.createElement('button')
cleanButton.textContent = 'Limpiar'
cleanButton.type = 'button'
cleanButton.classList.add('filterButton')
divButtons.append(cleanButton)
form.append(divButtons)

const filterContainer = document.querySelector('#filterContainer')
const referenceElement = document.querySelector('#background-arrow')

filterContainer.insertBefore(form, referenceElement)

// Mostrar filtros
const openFilter = document.querySelector('.arrow_downward')
const fieldsFilter = document.querySelector('.form')
const filterIcon = document.querySelector('#filter-icon')
function getOpenFilter() {
  fieldsFilter.classList.add('filterON')
  openFilter.classList.add('rotateArrow')
}
function getCloseFilter() {
  fieldsFilter.classList.remove('filterON')
  openFilter.classList.remove('rotateArrow')
  openFilter.classList.add('arrow_downward')
}
openFilter.addEventListener('click', () => {
  if (fieldsFilter.classList.contains('filterON')) {
    getCloseFilter()
  } else {
    getOpenFilter()
  }
})

filterIcon.addEventListener('click', getOpenFilter)

// Selector de productos

// function getFiltered(e) {
//   e.preventDefault()
//   const selection = []
//   for (const product of products) {
//     const userBrand = product.brand
//     const userPrice = product.price
//     if (userBrand.toLowerCase().includes(brandInput.value.toLowerCase())) {
//       selection.push(product)
//     }
//   }
//   printSelection(selection)
// }
// form.addEventListener('submit', getFiltered)

function getFiltered(e) {
  e.preventDefault()
  const selection = []
  const brandValue = brandInput.value.toLowerCase() || ''
  const priceValue = parseInt(priceInput.value)

  for (const product of products) {
    const productBrand = product.brand.toLowerCase()
    if (
      productBrand.includes(brandValue) &&
      (isNaN(priceValue) || product.price <= priceValue)
    ) {
      selection.push(product)
    }
  }
  console.log(selection)
  printSelection(selection)
}

form.addEventListener('submit', getFiltered)

cleanButton.addEventListener('click', () => {
  brandInput.value = ''
  priceInput.value = ''
  printSelection(products)
})
