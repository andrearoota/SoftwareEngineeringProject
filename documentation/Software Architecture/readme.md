# Software architecture @andrearoota

Il software da noi progettato è basato su un'architettura client-server che utilizza lo stile architetturale [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller):
- **controller e model**, vengono gestiti dal backend che si occupa di astrarre e manipolare i dati presenti nel database e di gestire le richieste HTTP autenticate e non, il tutto funziona grazie ad uno stack composto da [Apache](https://httpd.apache.org/) - [Laravel](https://laravel.com/) - [PostgreSQL](https://www.postgresql.org/).
- **view**, gestita dalla parte di frontend attraverso l'uso del framework js [React](https://reactjs.org/).

L'idea era quella di creare un'architettura a servizi per gestire le varie richieste (autenticazione, calcoli statistici, dati utente, dati stocks, ecc.), ma attualmente risulta maggiormente monolitico in quanto gestito interamente da uno stesso server per questioni di semplicità; il progetto è comunque sviluppato con l'idea di una suddivisione futura in microservizi e tutto ciò rende basso l'accoppiamento tra i vari moduli.

## Sicurezza
Il client, per accedere agli endpoint protetti, deve essere in possesso di un [JSON Web Tokens](https://jwt.io/) fornitogli in fase di autenticazione, esso garantisce che l'utente è chi dice di essere e che abbia i permessi necessari, per maggiori informazioni rimandiamo al documento [RFC 7519](https://tools.ietf.org/html/rfc7519).

![img](./asset/JWT_diagram.png)

Il token viene utilizzato sia lato client che lato server; lato user viene sfruttato per determinare se l'utente ha l'accesso a determinate pagine e/o risorse, mentre lato server viene utilizzato per accettare o rifiutare richieste autenticate e se l'utente ha i permessi di visualizzazione e/o modifica di una certa risorsa.

## Docker
Per un più semplice sviluppo e futuro deploy del software si è deciso di utilizzare i container attraverso il tool [Docker](https://www.docker.com/).

Le specifiche di ogni container sono descritte nel file [docker-compose.yml](../../backend/docker-compose.yml), di seguito forniamo una breve descrizione dei più importanti:
- `sail-8.1/app`, contiene il framework Laravel e PHP 8.1.
- `postgres:15.1-alpine`, contiene PostgreSQL.
- `frontend`, contiene il framework React.

Questa scelta progettuale permette un rilascio semplificato del software, ad esempio su [Amazon Elastic Container Service](https://aws.amazon.com/it/ecs/) o [Azure Container Instances](https://azure.microsoft.com/it-it/products/container-instances) senza dover gestire il server e mantenendo un grado elevato di scalabilità.
