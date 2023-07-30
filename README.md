# JavaScript Advanced - Proiectul 1

## Rularea proiectului

#### 1. `git clone https://github.com/razvancir96/react-admin-panel.git`

#### 2. `cd react-admin-panel`

#### 3. `npm install` (posibil sa dureze)

#### 4. `npm start`

## Concepte

Dar până atunci, hai să recapitulăm ce am învățat:

#### împărțirea unei pagini în componente 
în aplicațiile moderne nu mai avem pagini de HTML. O pagină este alcătuită din mai multe componente de JS, iar delimitarea acestora face parte din meseria noastră de developer. Vom continua să ne îmbunătățima acest skill și în cadrul proiectului 2.
#### JSX
o combinație între HTML și JS, care în spate se transformă într-un obiect de JS
#### props
trebuie să pasezi date între componente? E posibil să ai nevoie de props!
#### state
ți se va modifica afișarea componentei? E posibil să ai nevoie de state!
#### randare condiționată
afișezi o parte a componentei doar dacă e îndeplinită o condiție? Sună a operator ternar...
#### randare repetitvă
ai de afișat mai multe elemente dintr-un array? Map e soluția!
#### lifecycle methods
oamenii se nasc, se schimbă pe parcursușl vieții, iar într-un final mor. La fel și componentele de React, doar că ele se pot și reîncarna!
#### request-uri asincrone
vrei să faci un request către un API și vrei să îl faci o singură dată? Suna a componentDidMount
#### formulare
nu sunt foarte mult diferite în React, deci trebuie să aveți cunoștințele fundamentale de HTML și JS!
#### transmiterea datelor între componente
vrei să actualizezi state-ul unei compoenente dintr-o altă componentă? Sună ca și cum ai vrea să pasezi o metodă printr-un prop, folosind arrow function...
#### setState
e asincron. Grijă când actualizăm un câmp al state-ului parțial!

## Funcționalități

Hai să trecem în revistă ce știe proiectul nostru să facă:

#### Preluare useri din API
userii noștri sunt aduși în urma unui request asincron către JSON Placeholder
#### Listare useri existenți
userii pe care i-am preluat din API sunt afișați pe ecran
#### Adăugare user nou
completând câmpurile din formular, la submitere userul nou introdus este listat pe ecran
#### Schimbare culoare fundal
dând click pe butonul din subsolul paginii, putem schimba culoarea de fundal a paginii