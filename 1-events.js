// nel foglio JS descriveremo le funzioni che collegheremo agli eventi della pagina

const firstButtonClick = function (e) {
  console.log('CLICCATO PRIMO BOTTONE!', e)
  // il parametro "e" è un oggetto, l'evento che si è scatenato grazie al mio click!
  // contiene un sacco di informazioni (+ o -) utili riguardo cosa sia successo
  // nella pagina, e come mai questa funzione sia stata invocata
}

const testFunction = function (e) {
  console.log('Questa è una funzione scritta separatamente!', e)
}

// per il 2° metodo, devo prima di tutto CREARE un bottone dal nulla e appenderlo nella pagina
// procediamo:
// a) creo il bottone
const newButton = document.createElement('button') // <button></button>
// b) inserisco l'etichetta del botton
newButton.innerText = 'CLICK!'
// c) come lo inserisco nella pagina? devo prima di tutto trovare SUO PADRE
const parentDiv = document.getElementById('second-button-area')
// metodi alternativi
// const parentDiv = document.querySelectorAll('section div')[1]
// const parentDiv = document.querySelector('section div:nth-of-type(2)')
console.log(parentDiv)

// d) aggiungo l'event listener al bottone
newButton.onclick = function (e) {
  console.log('CLICCATO SECONDO BOTTONE', e)
  // l'evento qua è già disponibile "in automatico", basta prevederlo nella funzione
}

// nuova sovrascrittura nell'onclick
newButton.onclick = testFunction
// in testFunction NON CI VANNO LE PARENTESI! se ci fossero, la riga 33 sarebbe
// un'INVOCAZIONE di funzione (e verrebbe eseguita automaticamente all'avvio!)
// NON inserendo le parentesi invece noi semplicemente definiamo un "collegamento",
// diamo un riferimento su quale sia la funzione da lanciare al click del bottone

// e) appendo il newButton dentro parentDiv
parentDiv.appendChild(newButton)
newButton.on

// per il 3° metodo (che è una variante del 2°) utilizzeremo NON le proprietà "onclick",
// "onscroll", "onsubmit" degli elementi ma un generico metodo chiamato "addEventListener"
// rifaccio i passaggi per creare un bottone
const newButton2 = document.createElement('button') // <button></button>
newButton2.innerText = 'CLICK!'
const parentDiv2 = document.getElementById('third-button-area')

// NON utilizzo onclick ma addEventListener
// il primo parametro è il tipo di evento, ovvero l'event listener senza la particella "on"
newButton2.addEventListener('click', testFunction)
// newButton2.addEventListener('click', function (e) {
//   console.log(e)
// })
newButton2.addEventListener('dblclick', function () {
  console.log('QUESTO ERA UN DOPPIO CLICK')
})

// appendo l'ultimo bottone
parentDiv2.appendChild(newButton2)

// consiglio spassionato: utilizzate i metodi 1) se avete già il tag in HTML, 3) se non ce l'avete

// inseriamo anche un evento di mouseover
// recuperiamo un riferimento all'h1
const h1 = document.getElementsByTagName('h1')[0]
h1.addEventListener('mouseover', function (e) {
  h1.style.color = 'red'
  alert('sorpresa!')
})

h1.addEventListener('mouseleave', function (e) {
  h1.style.color = 'black'
})
