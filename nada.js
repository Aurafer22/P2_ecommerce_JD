
// const getSelection = (e) => {
//   e.preventDefault()
//   const selection = []
//   products.forEach((product) => {
//     if (
//       brandInput.value === product.brand &&
//       parseFloat(priceInput.value) <= parseFloat(product.price)
//     ) {
//       selection.push(product)
//     }
//   })
//   return selection
//   printSelection(selection)
// }

// function getSelection(e) {
//   e.preventDefault()

//   const brandValue = brandInput.value.toLowerCase()
//   const priceValue = parseFloat(priceInput.value)

//   const selection = []

//   for (const product of products) {
//     const matchesBrand = product.brand.toLowerCase().includes(brandValue)
//     const matchesPrice =
//       isNaN(priceValue) || parseFloat(product.price) <= priceValue

//     if (matchesBrand && matchesPrice) {
//       selection.push(product)
//     }
//   }

//   printSelection(selection)
// }

// const getSelection = (e) => {
//   e.preventDefault()
//   const brandValue = brandInput.value.toLowerCase()
//   const priceValue = parseFloat(priceInput.value)
//   const selection = []
//   const sugest = []
//   for (const product of products) {
//     if (
//       (product.brand.toLowerCase().includes(brandValue) &&
//         product.price <= priceValue) ||
//       Infinity
//     ) {
//       selection.push(product)
//       printSelection(selection)
//     }
//   }
//   // const selection = products.filter(
//   //   (product) =>
//   //     product.brand.toLowerCase().includes(brandValue.toLowerCase()) &&
//   //     product.price <= (parseFloat(priceValue) || Infinity)
//   // )
// }

// function getSelection(e) {
//   e.preventDefault()
//   const selection = []
//   const [brandValue, priceValue] = e.target
//   // const brandValue = brandInput.value.trim()
//   // const priceValue = parseInt(priceInput.value)
//   for (const product of products) {
//     if (
//       (product.brand.toLowerCase().includes(brandValue.toLowerCase()) &&
//         product.price <= priceValue) ||
//       Infinity
//     ) {
//       selection.push(product)
//     } else {
//       selection.push(
//         product.brand.toLowerCase().includes(brandValue.toLowerCase())
//       )
//     }
//   }
//   return printSelection(selection)
// }
