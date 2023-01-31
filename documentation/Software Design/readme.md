# Software Design @andrearoota

### "DEVE contenere una descrizione del design (mediante i diagrammi UML va bene)"

## PhpMetrics
Per effettuare diversi calcoli di complessità e misurazioni del codice abbiamo optato per utilizzare lo strumento di misurazione [PhpMetrics](https://www.phpmetrics.org/).

I risultati di tali misurazioni e calcoli si trovano nella sotto directory `Report`

## Design pattern
All'interno del framework Laravel sono presenti molteplici design pattern:
- Builder pattern
- Factory pattern
- Strategy pattern
- Provider pattern
- Repository pattern
- Facade pattern

Quelli da noi maggiormente sfruttati sono Factory, per la parte di generazione dei dati, e Facade, per la parte di autenticazione.