# Requirement engineering @CamillaMazzoleni
L' ingegneria dei requisiti è una fase importante di un progetto software.
L' obbiettivo che ci siamo posti è stato quello di ottenere una descrizione completa del problema da risolvere. Il riultato di questa fase è la specifica dei requisiti, in cui sono descritti i requisiti principali della piattaforma, ordinati in base alla priorità.

mindmap
  root((Ingegneria dei requisiti))
    id[Specification]
    Elicitation
    Negotiation
    Validation



# Specifica dei requisiti
## 1. Introduzione
### Propositi
Il proposito di questo documento è quello di specificare i requisiti del sistema software per facilitarne la realizzazione. A tal proposito rispettiamo le line guida IEEE830
### Obbiettivi
Si vuole realizzare una piattaforma per il trading algoritmico. L' utente può caricare dei fondi da investire. Il sistema invia notifiche all' utente se investire o vendere, in base all' andamento del mercato. Con un semplice click l' utente può approvare le transazioni suggerite dalla piattaforma. L' obbiettivo del progetto è quindi la gestione automatica dei portafogli dell' utente, in particolare delle notifiche di vendita/ acquisto di azioni in base ai trend.
### Definizioni, acronimi ed abbreviazioni 
STOCK= valore dell' azione
STOCK_NAME= nome dell' azienda
STOCK_CLOSE= valore dell' azione alla chiusura del mercato.

## 2. Descrizione generale
### Funzionalità del prodotto

- Registrazione e creazione del profilo

- Login/logout

- Aggiunta di fondi

- Prelevamento dei fondi

- Update del profilo

- Autorizzazione per compravendita

- Analisi investimento e portafoglio

### Caratteristiche utente
Il sistema software è risvolto ad una utenza con discreta conoscenza nell' ambito informatico, anche se non è richiesta alcuna conoscenza in ambito finanziario e di trading: si presuppone però un' utenza che sia consapevole riguardo a finanza personale e gestione dei soldi.

### Vincoli gernerali

## 3. Requisiti specifici
### Interfaccia utente+
Il sistema software deve essere dotato di un' interfaccia intuitiva, semplice e chiara.
### Interfaccia hardware
Il sistema non deve interfacciarsi con nessun sistema hardware

## Requisiti funzionali
A tal proposito dividiamo i requisiti in base alla priorità, sulla base di due schemi
- MOSCOW Model
![Moscow](https://github.com/andrearoota/SoftwareEngineeringProject/blob/main/documentation/Engineering%20requirements/moscow.png)


- Kano Model
    - Deve essere: 
        - registrazione utente
        - deve permettere la gesione del portafoglio
        - deve permettere la gestione dell' account
        - deve inviare notifiche riguardo le compravendite
    - Attraente:
        - possibilità di vedere statistiche su investimenti e mercato
    - Unidimensionale:
        - interfaccia grafica intuitiva e semplice

## Requisiti non funzionali
- MOSCOW Model
    - Must have
        - password sicura
        - invio email di conferma per l' associazione con conto corrente
        - almeno 5 notifiche di compravendita al giorno
    - Should have
        - tempi di risposta inferiore al secondo per il login nella pagina
    - Won't have
        - generazione di codice OTP per l' associazione con il conto corrente

