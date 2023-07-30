# JavaScript Advanced - Proiectul 1

## Rularea proiectului

#### 1. `git clone https://github.com/razvancir96/react-admin-panel.git`

#### 2. `cd react-admin-panel`

#### 3. `npm install` (posibil sa dureze)

#### 4. `npm start`

## Concepte

Woo-hoo, am terminat de parcurs conceptele de bază din React! Și astfel am terminat și cu primul meu proiect. 

#### Împărțirea unei pagini în componente
În aplicațiile moderne nu mai avem pagini de HTML. O pagină este alcătuită din mai multe componente de JS, iar delimitarea acestora face parte din meseria noastră de developer.

#### JSX
O combinație între HTML și JS, care în spate se transformă într-un obiect de JS.

#### Props
Trebuie să pasezi date între componente? E posibil să ai nevoie de props!

#### State
Ți se va modifica afișarea componentei? E posibil să ai nevoie de state!

#### Randare condiționată
Afișezi o parte a componentei doar dacă e îndeplinită o condiție? Sună a operator ternar...

#### Randare repetitvă
Ai de afișat mai multe elemente dintr-un array? Map e soluția!

#### Lifecycle methods
Oamenii se nasc, se schimbă pe parcursul vieții, iar într-un final mor. La fel și componentele de React, doar că ele se pot și reîncarna!

#### Request-uri asincrone
Vrei să faci un request către un API și vrei să îl faci o singură dată? Sună a componentDidMount.

#### Formulare
Nu sunt foarte mult diferite în React, deci trebuie să aveți cunoștințele fundamentale de HTML și JS!

#### Transmiterea datelor între componente
Vrei să actualizezi state-ul unei componente dintr-o altă componentă? Sună ca și cum ai vrea să pasezi o metodă printr-un prop, folosind arrow function...

#### setState
E asincron. Grijă când actualizăm un câmp al state-ului parțial!


Evident, am mai învățat și alte mici lucruri pe lângă, dar ăsta e un mic rezumat. 
Bineînțeles, mai am multe de învățat. 

## Funcționalități

Hai să trecem în revistă ce știe proiectul nostru să facă:

- Preluare useri din API - userii noștri sunt aduși în urma unui request asincron către JSON Placeholder
- Listare useri existenți - userii pe care i-am preluat din API sunt afișați pe ecran
- Adăugare user nou - completând câmpurile din formular, la submitere userul nou introdus este listat pe ecran
- Schimbare culoare fundal - dând click pe butonul din subsolul paginii, putem schimba culoarea de fundal a paginii
- Am adăugat două proprietăți noi pentru fiecare user: salariu și imagine.
- Am adăugat un nou input de tip culoare. La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.
- Creați două componente noi, numite PostList și PostItem. PostList va fi o listă de componente de tip PostItem. În componenta PostList, atunci când este afișată pe ecran, faceți un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate. Practic, o singură dată veți face request către url-ul https://jsonplaceholder.typicode.com/posts.
- Creați două butoane: Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.
- Adăugați pe fiecare user un buton de ștergere.
- Faceți puțină validare a datelor. Spre exemplu, să nu poată fi introdus un nume gol, iar emailul să conțină caracterele '@' și '.' .
- Stilizați aplicația, astfel încât să arate mai frumos.

Poate nu par multe funcționalități, dar noi știu că am muncit la ele!