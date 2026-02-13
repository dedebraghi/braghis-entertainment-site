# Execution

Questa directory contiene gli script Python deterministici che eseguono il lavoro effettivo.

## Convenzioni
- Ogni script deve essere autonomo e testabile
- Le variabili d'ambiente vanno lette da `.env` tramite `python-dotenv`
- Gli script gestiscono: chiamate API, elaborazione dati, operazioni su file, interazioni con database
- I file temporanei vanno salvati in `.tmp/`
- I deliverable vanno inviati ai servizi cloud (Google Sheets, Slides, ecc.)

## Dipendenze
Installare le dipendenze con:
```bash
pip install -r requirements.txt
```
