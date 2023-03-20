const questions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: [
        'Central Process Unit',
        'Computer Personal Unit',
        'Central Processor Unit',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg', '.gif'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: [
        'Counter Strike: Source',
        'Corrective Style Sheet',
        'Computer Style Sheet',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: [
        'Ice Cream Sandwich',
        'Jelly Bean',
        'Marshmallow',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C', 'Jakarta'],
    },
  ]

 
  let nDomande = 0

  let conteggioRisposte = 0

  function mostraDomande() {
    let domandaCorrente = questions[nDomande];
    let stampaDomande = nDomande + 1;
    let totDomande = questions.length;

    let domanda = document.createElement("h3")
    domanda.innerText = domandaCorrente.question

    let risposte = [domandaCorrente.correct_answer, ...domandaCorrente.incorrect_answers] // i 3 puntini (...) servono a concatenare 2 array
    shuffleArray(risposte)//mette in ordine casuale l'ordine delle array

    let listaRisposte = document.createElement("ul")
    for (const risposta of risposte) {
      let  li = document.createElement("li")
      let radio = document.createElement("input")
      radio.type = "radio"
      radio.name = "risposta"
      radio.value = risposta
      li.appendChild(radio)
      let testoRisposta = document.createElement("span")
      testoRisposta.innerText = risposta
      li.appendChild(testoRisposta)
      listaRisposte.appendChild(li)
      
    }
    let bottone = document.createElement("button")
    bottone.addEventListener("click", clickBottone)
    
    bottone.innerText = "Rispondi"

    let sezioneDomande = document.getElementById("domanda")
    sezioneDomande.innerHTML=""
    sezioneDomande.appendChild(domanda)
    sezioneDomande.appendChild(listaRisposte)
    sezioneDomande.appendChild(bottone)



  }
    function shuffleArray (array) {
      for (let i = array.length -1; i > 0; i--) {
        let x = Math.floor (Math.random() * (i+1)); //ordina in modo randomico gli elementi interni al ciclo
        [array[i], array[x]] = [array[x], array[i]]
      }     
    }

    function clickBottone () {
      let check = document.querySelector("input[name = 'risposta']:checked");
      if (!check){
        alert("Seleziona una risposta");
        return
      }
      let rispScelta = questions[nDomande]
      if (check.value === rispScelta.correct_answer) {
        conteggioRisposte++
      }
      nDomande++
      if (nDomande >= questions.length) {
        mostraRisultato ()
      }else{
        mostraDomande ()
      }
    }

    function mostraRisultato () {
      
      let sezioneRisultato = document.getElementById("domanda");
      let testoRisultato = document.createElement("h3");
      let testo = "Hai risposto correttamente a "+ conteggioRisposte +"  domande su " +questions.length;
      testoRisultato.innerText = testo
      sezioneRisultato.innerHTML = ""
      sezioneRisultato.appendChild(testoRisultato)

    }

  
  
  window.onload = mostraDomande
