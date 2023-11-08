# FIZZBUZZ

Consegna dell'esercizio:

```
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare.
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
```

---

Oggi abbiamo imparato il ciclo **for** che ci tornerà utile per questo esercizio. Possiamo inizializzare un ciclo che abbiamo un contatore che parte da 1 e arriva a 100 incluso e stamperà il proprio contenuto in console. Successivamente applicheremo delle condizioni per le quali se il contenuto del contatore è divisibile per 3, lo andremo a rinominare con _Fizz_, se per 5 con _Buzz_ e se per entrambi con _FizzBuzz_. A esercizio finito dovremo avere un elenco con tutte le giuste corrispondenze.

Successivamente per completare il bonus andremo ad usare la funzione append() e createElement per creare degli elementi HTML visualizzabili dall'utente, che successivamente andremo a stilizzare con delle regole CSS.