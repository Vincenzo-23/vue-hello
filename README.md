## Vue Introduction

Vue è un framework JavaScript che ci aiuta nella creazione di interfacce web, coprendo un po' tutte le funzionalità di cui abbiamo bisogno per lo sviluppo frontend.

Grazie ad una sinstassi particolare, usata in HTML, ci permette di inserire logica all'interno delle nostre pagine ed è in grado di aggiornare il DOM ogniqualvolta avvengono dei cambiamenti nel nostro JavaScript.

In molti progetti in cui viene utilizzato Vue, vengono creati componenti in un formato simile all'HTML, chiamato SFC (Single-File Component). Un file SFC incorpora in un singolo file la logica (JavaScript), il template (HTML) e lo stile (CSS) del componente.


## Template Syntax

Vue usa un modello di sintassi basato sull'HTML. Utilizza questo modello per trasformarlo in quello che poi sarà codice JavaScript e la conseguente logica.

La forma più basilare è la text interpolation usando le doppie parentesi graffe, dove dentro inseriremo il nome della rispettiva proprietà che avremo salvato in JS ed il contenuto verrà quindi rimpiazzato.
Tutto ciò all'interno delle doppie parentesi graffe verrà interpretato con testo normale e non HTML. Per produrre quindi vero HTML avremo bisogno della direttiva v-html.

Abbiamo diversi tipi di direttive, oltre la v-html, con a loro volta diversi utilizzi:

- v-bind che ci permette di inserire una variabile all'interno di un attributo di un tag. Se si ha un oggetto in JS che rappresenta attributi multipli, possiamo bindarli in un singolo elemento con questa sintassi: v-bind="nomeOggettoProprieta". Così facendo daremo più attributi insieme, come ad esempio id e class.
È possibile anche utilizzare un metodo sulla variabile richiamata;

- v-if/elseif/else;

- v-on è la direttiva con la quale possiamo ascoltare gli eventi su un elemento del DOM;

- v-model serve in un certo senso ad identificare la value dell'input;

- v-for;

- v-show;