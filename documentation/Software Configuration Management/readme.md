# Software Configuration Management @mattcolo01
Per la gestione della configurazione, quindi sia codice che documentazione, abbiamo utilizzato una repository GitHub condivisa con tutto il team.

## Organizzazione del repository
All'interno del repository troviamo direttamente nella radice i file essenziali (licenza, readme, script per installazione) e 3 directory principali:
- `frontend`: contiene il codice del mero sito web lato client
- `backend`: contiene il codice del programma lato server invocato dal sito web
- `documentation`: tutta la documentazione prodotta va qui

## Gestione delle modifiche
La baseline del progetto si trova nel branch "main". Si possono apportare modifiche solo in branch diversi dal main: ogni membro del team ne ha uno su cui lavora e che tiene costantemente aggiornato dal main, ma possono esserne creati altri ad hoc per problemi specifici, ad esempio partendo da un issue.
Le modifiche presenti su branch secondari possono essere trasferite nel main solo mediante la seguente procedura:
1. Chi sta lavorando sul branch crea una pull request, richiedendo una review
2. Il reviewer, prestabilito, può approvare il lavoro svolto o richiedere delle modifiche
3. Se la pull request è stata approvata viene effettuato il merge del branch nel main, altrimenti si apportano le modifiche richieste e si riparte dal punto 1

## Assegnazione dei compiti
Un membro del team può trovare i suoi compiti nella sezione `Projects` di GitHub. All'avvio del progetto è stata stilata la lista delle funzionalità da implementare, che può essere aggiornata anche in seguito. Questa lista si trova sotto la voce "Product Backlog". All'inizio di ogni sprint si scelgono le funzionalità che verranno implementate e si spostano sotto la voce "Sprint Backlog". Se queste funzionalità sono grandi e quindi assegnate a più di una persona, è facoltà delle persone assegnate aprire delle issue per suddividersi le sotto-funzionalità. Alla fine di ogni sprint le funzionalità completamente implementate vengono spostate sotto la voce "Done".

Per bugs, problemi di altro genere e checklists si aprono issues apposite assegnando il membro designato.