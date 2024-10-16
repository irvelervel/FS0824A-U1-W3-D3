const kittensButton = document.getElementById('kittens')
kittensButton.addEventListener('click', function () {
  location.assign('https://placecats.com/300/200')
  // apre la pagina https://placecats.com/300/200
})

// LAVORIAMO CON IL FORM
// il tag <form> include un comportamento di default per il suo invio, che purtroppo
// oggi nel 202+ non è più "moderno" e va "soppresso".
// abbiamo bisogno di prevenire questo comportamento di default del form (aggiornare la pagina, inserire un "?" nella barra degli indirizzi, etc.)

// per intercettare l'invio del form lavoriamo SUL FORM STESSO (non sul bottone "invia")
// recupero un riferimento DEL FORM
const form = document.getElementById('main-form')
form.addEventListener('submit', function (e) {
  // qui dentro finisco in TUTTI i casi di submit: pressione del tasto invia, tasto enter
  // sulla tastiera etc. etc.

  // --!! WARNING !!--
  // la PRIMA cosa da fare è PREVENIRE il comportamento di default del form (del browser)
  e.preventDefault() // <-- NEUTRALIZZO il comportamento di default!
  // --!! WARNING !!--

  console.log('INVIO DEL FORM', e)
  // ora possiamo cominciare a inserire le nostre istruzioni :)
  // raccogliamo i valori dei tre campi:
  // 1) Marca
  // recupero il riferimento DOM dell'input "brand"
  const brandInput = document.getElementById('brand') // <input id="brand" />
  // estrapolo il contenuto dall'input (con la proprietà .value)
  const brandValue = brandInput.value // il CONTENUTO del campo <input id="brand" /> es. "Apple"

  // 2) Modello
  // recupero il riferimento DOM dell'input "model"
  const modelInput = document.getElementById('model') // <input id="model" />
  // estrapolo il contenuto dall'input (con la proprietà .value)
  const modelValue = modelInput.value // il CONTENUTO del campo <input id="model" /> es. "iPhone 19"

  // 3) Prezzo
  // recupero il riferimento DOM dell'input "price"
  const priceInput = document.getElementById('price') // <input id="price" />
  // estrapolo il contenuto dall'input (con la proprietà .value)
  const priceValue = priceInput.value // il CONTENUTO del campo <input id="price" /> es. "1000"

  // abbiamo recuperato i valori dei campi marca, modello e prezzo! vediamoli in console
  console.log('MARCA', brandValue)
  console.log('MODELLO', modelValue)
  console.log('PREZZO', priceValue)

  // dati recuperati, informiamo l'utente con un messaggio!
  const newH3 = document.createElement('h3')
  newH3.innerText = 'Grazie! Prodotto registrato correttamente.'
  // trovo il padre...
  const main = document.getElementsByTagName('main')[0]
  main.appendChild(newH3)

  // fatto! svuotiamo il form per rassicurare l'utente
  brandInput.value = '' // azzerate il campo
  modelInput.value = '' // azzerate il campo
  priceInput.value = '' // azzerate il campo

  // potete anche fare un
  form.reset() // azzera tutti i campi del form in un colpo solo
})
