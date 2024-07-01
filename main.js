import './style.css'
import { products } from './public/products/products.js'

// Menu responsive

const openResponsive = document.querySelector('#openResponsive')
const logoResponsive = document.querySelector('#logo')
const menuResponsive = document.querySelector('#menuResponsive')
const navResponsive = document.querySelector('#navResponsive')
const ulResponsive = document.querySelector('#ulResponsive')
const liResponsive = document.querySelector('#ulResponsive > li')
const loginResponsive = document.querySelector('#login')
const closeResponsive = document.createElement('button')

openResponsive.addEventListener('click', () => {
  logoResponsive.classList.add('responsive')
  menuResponsive.classList.add('menu-responsive')
  navResponsive.classList.remove('nav')
  navResponsive.classList.add('nav-responsive')
  ulResponsive.classList.add('ul-responsive')
  liResponsive.classList.add('li-responsive')
  loginResponsive.classList.add('responsive')
  closeResponsive.textContent = 'X'
  closeResponsive.id = 'close-responsive'
  closeResponsive.classList.add('flex-container')
  closeResponsive.classList.add('close-responsive')
  closeResponsive.classList.add('responsive')
  navResponsive.append(closeResponsive)
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

function printSelection(array) {
  const resultsContainer = document.querySelector('main')
  resultsContainer.innerHTML = ''
  for (const product of array) {
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
const brandInput = document.createElement('select')
brandInput.id = 'brandInput'
brandInput.placeholder = 'Todas las marcas'
brandInput.classList.add('inputClass')
const allBrands = document.createElement('option')
allBrands.value = 'Todas las marcas'
allBrands.textContent = 'Todas las marcas'
brandInput.append(allBrands)
const newBalance = document.createElement('option')
newBalance.value = 'New Balance'
newBalance.textContent = 'New Balance'
brandInput.append(newBalance)
const nike = document.createElement('option')
nike.value = 'Nike Original'
nike.textContent = 'Nike Original'
brandInput.append(nike)
const adidas = document.createElement('option')
adidas.value = 'Adidas Original'
adidas.textContent = 'Adidas Original'
brandInput.append(adidas)
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
function getFiltered(e) {
  e.preventDefault()
  const selection = []
  const sugest = {}
  const priceValue = parseInt(priceInput.value)
  for (const product of products) {
    if (brandInput.value === 'Todas las marcas' && isNaN(priceValue)) {
      printSelection(products)
    }
    if (
      (brandInput.value === product.brand ||
        brandInput.value === 'Todas las marcas') &&
      (isNaN(priceValue) || product.price <= priceValue)
    ) {
      selection.push(product)
    }
    if (
      !sugest[product.brand] ||
      product.price < parseFloat(sugest[product.brand].price)
    ) {
      sugest[product.brand] = product
    }
  }
  if (selection.length === 0) {
    for (const brand in sugest) {
      if (
        (brandInput.value === brand ||
          brandInput.value === 'Todas las marcas') &&
        parseFloat(sugest[brand].price) > priceValue
      ) {
        selection.push(sugest[brand])
      }
    }
  }
  printSelection(selection)
}

form.addEventListener('submit', getFiltered)

cleanButton.addEventListener('click', () => {
  brandInput.value = 'Todas las marcas'
  priceInput.value = ''
  printSelection(products)
})
