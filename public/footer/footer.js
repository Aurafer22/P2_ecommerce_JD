const footer = document.querySelector('#footer')
footer.classList.add('flex-container')
const navFooter = document.createElement('nav')
navFooter.classList.add('flex-container')
const ulFooter1 = document.createElement('ul')
ulFooter1.classList.add('flex-container')
ulFooter1.classList.add('ul-footer')
const liFooter1_1 = document.createElement('li')
const liFooter1_2 = document.createElement('li')
const liFooter1_3 = document.createElement('li')
const liFooter1_4 = document.createElement('li')
const liFooter1_5 = document.createElement('li')
const liFooter1_6 = document.createElement('li')
const liFooter1_7 = document.createElement('li')
const ancorFooter1_1 = document.createElement('a')
ancorFooter1_1.textContent = 'Compra con JD'
const ancorFooter1_2 = document.createElement('a')
ancorFooter1_2.textContent = 'Guia de tallas'
const ancorFooter1_3 = document.createElement('a')
ancorFooter1_3.textContent = 'Buscador de tallas'
const ancorFooter1_4 = document.createElement('a')
ancorFooter1_4.textContent = 'Descuento estudiantes'
const ancorFooter1_5 = document.createElement('a')
ancorFooter1_5.textContent = 'Calendario lanzamientos'
const ancorFooter1_6 = document.createElement('a')
ancorFooter1_6.textContent = 'Incribite a JDX'
const ancorFooter1_7 = document.createElement('a')
ancorFooter1_7.textContent = 'JD Blog'
const ulFooter2 = document.createElement('ul')
ulFooter2.classList.add('flex-container')
ulFooter2.classList.add('ul-footer')
const liFooter2_1 = document.createElement('li')
const liFooter2_2 = document.createElement('li')
const liFooter2_3 = document.createElement('li')
const liFooter2_4 = document.createElement('li')
const liFooter2_5 = document.createElement('li')
const ancorFooter2_1 = document.createElement('a')
ancorFooter2_1.textContent = 'Atención al cliente'
const ancorFooter2_2 = document.createElement('a')
ancorFooter2_2.textContent = 'Preguntas frecuentes'
const ancorFooter2_3 = document.createElement('a')
ancorFooter2_3.textContent = 'Envíos y devoluciones'
const ancorFooter2_4 = document.createElement('a')
ancorFooter2_4.textContent = 'Seguimiento de envío'
const ancorFooter2_5 = document.createElement('a')
ancorFooter2_5.textContent = 'Contacto'
const ulFooter3 = document.createElement('ul')
ulFooter3.classList.add('flex-container')
ulFooter3.classList.add('ul-footer')
const liFooter3_1 = document.createElement('li')
const liFooter3_2 = document.createElement('li')
const liFooter3_3 = document.createElement('li')
const liFooter3_4 = document.createElement('li')
const liFooter3_5 = document.createElement('li')
const liFooter3_6 = document.createElement('li')
const liFooter3_7 = document.createElement('li')
const ancorFooter3_1 = document.createElement('a')
ancorFooter3_1.textContent = 'Aviso legal'
const ancorFooter3_2 = document.createElement('a')
ancorFooter3_2.textContent = 'Términos y condiciones'
const ancorFooter3_3 = document.createElement('a')
ancorFooter3_3.textContent = 'Promociones y condiciones'
const ancorFooter3_4 = document.createElement('a')
ancorFooter3_4.textContent = 'Política de privacidad'
const ancorFooter3_5 = document.createElement('a')
ancorFooter3_5.textContent = 'Política de Cookies'
const ancorFooter3_6 = document.createElement('a')
ancorFooter3_6.textContent = 'Ajustes de Cookies'
const ancorFooter3_7 = document.createElement('a')
ancorFooter3_7.textContent = 'Accesibilidad'

liFooter1_1.append(ancorFooter1_1)
liFooter1_2.append(ancorFooter1_2)
liFooter1_3.append(ancorFooter1_3)
liFooter1_4.append(ancorFooter1_4)
liFooter1_5.append(ancorFooter1_5)
liFooter1_6.append(ancorFooter1_6)
liFooter1_7.append(ancorFooter1_7)

ulFooter1.append(
  liFooter1_1,
  liFooter1_2,
  liFooter1_3,
  liFooter1_4,
  liFooter1_5,
  liFooter1_6,
  liFooter1_7
)
liFooter2_1.append(ancorFooter2_1)
liFooter2_2.append(ancorFooter2_2)
liFooter2_3.append(ancorFooter2_3)
liFooter2_4.append(ancorFooter2_4)
liFooter2_5.append(ancorFooter2_5)

ulFooter2.append(
  liFooter2_1,
  liFooter2_2,
  liFooter2_3,
  liFooter2_4,
  liFooter2_5
)
liFooter3_1.append(ancorFooter3_1)
liFooter3_2.append(ancorFooter3_2)
liFooter3_3.append(ancorFooter3_3)
liFooter3_4.append(ancorFooter3_4)
liFooter3_5.append(ancorFooter3_5)
liFooter3_6.append(ancorFooter3_6)
liFooter3_7.append(ancorFooter3_7)
ulFooter3.append(
  liFooter3_1,
  liFooter3_2,
  liFooter3_3,
  liFooter3_4,
  liFooter3_5,
  liFooter3_6,
  liFooter3_7
)
navFooter.append(ulFooter1, ulFooter2, ulFooter3)
footer.append(navFooter)
