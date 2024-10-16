// comincio trovando il riferimento al form, e interagendo con il suo evento di submit

const contactForm = document.getElementById('new-contact')
// andiamo a lavorare sul suo evento di submit
contactForm.addEventListener('submit', function (e) {
  e.preventDefault() // <-- PRIMA RIGA
  // ora possiamo inserire la nostra logica
  // recupero i 4 riferimenti ai campi
  const firstNameInput = document.getElementById('firstname')
  const lastNameInput = document.getElementById('lastname')
  const phoneInput = document.getElementById('phone')
  const emailInput = document.getElementById('email')

  // sapendo che le proprietà .value dei riferimenti appena trovati sono i VALORI del form, li accorpo in un oggetto

  const newContact = {
    firstName: firstNameInput.value, // es. "Mario"
    lastName: lastNameInput.value, // es. "Rossi"
    phone: phoneInput.value, // es. "123123"
    email: emailInput.value, // es. "mariorossi@gmail.com"
  }

  console.log('NEWCONTACT', newContact)
  // recupero dati completato :)

  // a questo punto cosa facciamo? ora creeremo delle sezioni NUOVE in JS

  // creo un article vuoto
  const card = document.createElement('article')
  // <article></article>
  // assegno una classe CSS alla card
  card.classList.add('contact-card')
  // <article class="contact-card"></article>
  // ora l'article è completo ma PRIVO di dati
  // lo riempio con i dati raccolti nel form,
  // con le proprietà dell'oggetto newContact

  //   const name = document.createElement('p')
  //   name.innerText = newContact.firstName // 'Mario'
  //   card.appendChild(name)

  //   const surname = document.createElement('p')
  //   surname.innerText = newContact.lastName // 'Rossi'
  //   card.appendChild(surname)

  //   const phone = document.createElement('p')
  //   phone.innerText = newContact.phone // 'Rossi'
  //   card.appendChild(phone)

  //   const email = document.createElement('p')
  //   email.innerText = newContact.email // 'Rossi'
  //   card.appendChild(email)

  // PRO VERSION CON TEMPLATE LITERAL
  card.innerHTML = `
        <p>${newContact.firstName}</p>
        <p>${newContact.lastName}</p>
        <p>${newContact.phone}</p>
        <p>${newContact.email}</p>
      `

  // appendiamo la card alla sezione saved-contacts
  const savedSection = document.getElementById('saved-contacts')
  savedSection.appendChild(card)

  // ora che la card è completa ed è stata inserita nella
  // pagina, posso AZZERARE il form!
  contactForm.reset()
})
