# Project Plan
## 1. Introduzione @camillamazzoleni
Lo scopo del progetto è creare una piattaforma di trading algoritmico per la gestione automatizzata di portafogli di investimento di privati.

L'utente, nella fase di registrazione crea un profilo, in cui specifica la fascia di rischio di investimento (basso, medio o alto). Quando l'utente carica dei soldi, il software di trading entra in gioco: l'algoritmo monitora costantemente il mercato e invia una notifica all'utente ogni volta che trova un investimento o una vendita vantaggiosa: l'utente con un semplice click può autorizzare o negare la transazione.

L'utente può monitorare l'andamento del suo portafoglio grazie ad un'interfaccia grafica semplice e intuitiva; può anche decidere di cambiare profilo di rischio, fare l'upgrade a una versione premium che da accesso a maggiori garanzie, oppure vendere tutto e prelevare i fondi.

Il software di trading ha quindi due funzionalità principali: una di previsione e una di analisi del rischio. Per la previsione implementeremo un'analisi di serie storiche. Utilizzando modelli regressivi, mobile average (MA) ed ARMA sarà possibile determinare il trend, e quindi determinare quando conviene comprare e quando vendere. L'analisi di rischio è necessaria per determinare in quale fascia di rischio rientrerebbe l'investimento. In questo modo, per semplicità, il software categorizza gli investimenti in 3 categorie (basso rischio, medio rischio, alto rischio) in modo da scegliere l'investimento più adatto all'utente, in base al suo profilo.

## 2. Modello di processo @andrearoota
Il modello di processo agile selezionato per sviluppare il progetto è il framework SCRUM.
Lo sprint dura 7 giorni e lo Scrum Master viene ricoperto da ciascun membro del team a rotazione per permetterci di apprendere il ruolo.
La compilazione del Product Backlog, dello Sprint Backlog e delle fasi successive viene gestita attraverso lo strumento Projects di GitHub.

## 3. Organizzazione dl progetto @mattcolo01
Il team è composto da quattro persone:
1. Colombo Matteo
2. Mazzoleni Camilla
3. Rota Andrea
4. Sorgiovanni Pier Francesco
Il team è suddiviso tra chi si occupa di frontend (Colombo, Mazzoleni) e chi di backend (Rota, Sorgiovanni). Per ogni sotto-team è presente un reviewer (Colombo, Rota) che revisiona il codice della sua area di progetto.
Il gruppo si incontra ogni sabato mattina in aula B-103 dell'Università degli Studi di Bergamo, mentre ogni sotto team si aggiorna quotidinamente attraverso video-call.
GitHub è lo strumento prescelto sia per la condivisione del codice, la gestione delle versioni e le richieste di modifica, sia per la gestione della documentazione.

## 4. Standard, linee guida, procedure @andrearoota
Il software verrà implementato con un'architettura client-server:
1. Client, sviluppato con il framework [React](https://reactjs.org/);
2. Server, sviluppato con lo stack [Apache](https://httpd.apache.org/) - [Laravel](https://laravel.com/) - [PostgreSQL](https://www.postgresql.org/).


## 5. Attività di gestione @camillamazzoleni

## 6. Rischi @camillamazzoleni
Il rischio maggiore è mancare la consegna finale del progetto causa impegni universitari e lavorativi di ciascun membro del team.
-non riuscire a sviluppare un algoritmo abbastanza sofisticato che quindi non può essere utilizzato
-possibili problemi per ottenere datasets sull'andamento dello stock exchange
-possibili problemi per ottenere autorizzazione dalle banche per le transazioni

## 7. Personale @camillamazzoleni
Il team è composto da quattro persone:
1. Colombo Matteo (frontend e tester)
2. Mazzoleni Camilla (frontend e reviewer)
3. Rota Andrea (backend, reviewer, progettista database)
4. Sorgiovanni Pier Francesco (backend, project manager, tester)
Lo Scrum Master verrà fatto a rotazione per coinvolgere e far apprendere il ruolo a tutti i membri del team.

## 8. Metodi e tecniche @pierGit7
Per modellare il programma e avere una visione più ampia sulle funzionalità del progetto useremo diversi tipi di diagrammi grazie ad UML.
Per identificare i casi d'uso il project-manager e il product owner dovranno incontrarsi, per definire le specifiche richieste da inserire anche nel product backlog. Una volta identificati i casi d'uso e gli attori inseriremo tutto nello USE CASE DIAGRAM.
 La modellazione delle classi
e la comunicazione tra di esse verrà implementata grazie al UML CLASS DIAGRAM, questo diagramma 
ci permetterà di identificare attributi e metodi da inserire nelle classi.
Inoltre possiamo vedere ogni operazione come un insieme di messaggi che vengono scambiati tra classi. Per fare ciò useremo il SEQUENCE DIAGRAM che fornendoci una modellazione sequenziale riuscirà a dare un ordine di esecuzione ad ogni operazione.
Per modellare i dati da salvare nel nostro db, utilizzeremo un ER CLASS DIAGRAM dove 
definiremo le varie tabelle da memorizzare e le relazioni (con le diverse cardinalità).

## 9. Garanzia di qualità @mattcolo01
iso 9001
//aiuto cosa devo dire sulla iso 9001

## 10. Pacchetti di lavoro @andrearoota
Il progetto viene suddiviso in diversi macro componenti:
1. Database relazione in PostgreSQL 
2. Backend sviluppato con il framework Laravel (PHP)
3. Frontend sviluppato con il framework React (JS)
4. Modelli statistici di previsione sviluppato in linguaggio R

Ogni membro del team partecipa attivamente allo sviluppo dei vari componenti.

## 11. Risorse @pierGit7
Per la realizzazione di questo progetto abbiamo usufruito di diverse risorse:
-Il team , formato da 4 sviluppatori, nei quali è compreso un projetct-manager  ed uno scrum master che cambierà ogni settimana
-dispositivi, ogni sviluppatore avrà a disposizione pc e tablet
-applicazioni e siti  di diverso genere, come app per la comunicazione , GitHub per condividere il progetto e gestire le modifiche, IDE per la stesura del codice e UML per i diagrammi 
-ambienti di lavoro, il team si riuonirà in aula b-103 
## 12. Budget @mattcolo01
Essendo un progetto universitario la risorsa più importante è il tempo: stimiamo che ogni membro lavorerà 50h, per un totale di 200h. Queste verranno impiegate a grandi linee nel seguente modo:
- 150 ore di progettazione
- 50 ore di sviluppo
Il compenso non sarà monetario bensì un bel voto, per cui il team mette a disposizione un budget di 100€ che sarà impiegato per benzina e caffè.

## 13. Cambiamenti @pierGit7
Ogni cambiamento sarà attentamente discusso con ogni membro. Essendo una 
squadra agile avremo una forte comunicazione grazie alle comuni app di 
messagistica, ed usfruiremo anche del "daily scrum" o "weekly scrum" dato
che ci riuniremo ogni settimana. Il passo finale spetta al project-manager 
che dovrà accettare le issues su GitHub.

## 14. Consegna @andrearoota
La consegna finale avverrà entro il 31/12/2022, con possibile manutenzione fino al 05/01/2023.