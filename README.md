
### ESERCIZIO: Biglietto Treno

---
### **CONSEGNA:**

**_Il programma dovrà chiedere all'utente il numero di chilometri che vuole_** **_percorrere e l'età del passeggero._**
**_Sulla base di queste informazioni dovrà calcolare il prezzo totale del_** **_viaggio, secondo queste regole:_**
**_il prezzo del biglietto è definito in base ai km (0.21 € al km)_**
**_va applicato uno sconto del 20% per i minorenni_**
**_va applicato uno sconto del 40% per gli over 65._**
**_L'output del prezzo finale va messo fuori in forma umana (con massimo due_** **_decimali, per indicare centesimi sul prezzo)_**

---
### **Raccolta dei dati**
1. Chiedere al utente il numero di chilometri che vuole percorrere
2. Chiedere al utente la sua eta'
3. Il prezzo del biglietto e' definito in base ai km (0.21 al km)
4. Applicare uno sconto del 20% se il passeggero e' minorenne 
5. Applicare uno sconto del 40% se il passeggero ha un eta' > di 65 anni
6. Disporre il prezzo finale

---
### Logica del programma
1. Chiedo al utente quanti km vuole percorrere
2. Chiedo al utente quanti anni ha
3. In base ai km che vuole percorre l'utente calcolo il prezzo del viaggo 0.21 al km
4. SE la sua eta'e'< di 18 anni
   ALLORA prepar il mesaggio "E' minorenne" e applico il 20% di sconto sul prezzo del biglietto
   ALTRIMENTI SE La sua eta' e' > 65
   ALLORA preparo il mesaggio "Ha un eta' over 65" e applico il 40% di sconto sul prezzo del biglietto
5. Preparo il mesaggio del prezzo finale con massimo 2 cifre decimali per definire anche i centesimi nel prezzo.
   
---
### Output 
**Stampo il prezzo finale**

