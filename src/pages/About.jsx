import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <Link to="/"> Home </Link>
        <h1>About page</h1>
        <h2>Concepte</h2>
        <p>Woo-hoo, am terminat de parcurs conceptele de bază din React! Și astfel am terminat și cu primul meu proiect.</p>
        <ul>
            <li>
                <strong>Împărțirea unei pagini în componente:</strong>
                <p>În aplicațiile moderne nu mai avem pagini de HTML. O pagină este alcătuită din mai multe componente de JS, iar delimitarea acestora face parte din meseria noastră de developer.</p>
            </li>
            <li>
                <strong>JSX</strong>
                <p>O combinație între HTML și JS, care în spate se transformă într-un obiect de JS.</p>
            </li>
            <li>
                <strong>Props</strong>
                <p>Trebuie să pasezi date între componente? E posibil să ai nevoie de props!</p>
            </li>
            <li>
                <strong>State</strong>
                <p>Ți se va modifica afișarea componentei? E posibil să ai nevoie de state!</p>
            </li>
            <li>
                <strong>Randare condiționată</strong>
                <p>Afișezi o parte a componentei doar dacă e îndeplinită o condiție? Sună a operator ternar...</p>
            </li>
            <li>
                <strong>Randare repetitvă</strong>
                <p>Ai de afișat mai multe elemente dintr-un array? Map e soluția!</p>
            </li>
            <li>
                <strong>Lifecycle methods</strong>
                <p>Oamenii se nasc, se schimbă pe parcursul vieții, iar într-un final mor. La fel și componentele de React, doar că ele se pot și reîncarna!</p>
            </li>
            <li>
                <strong>Request-uri asincrone</strong>
                <p>Vrei să faci un request către un API și vrei să îl faci o singură dată? Sună a componentDidMount.</p>
            </li>
            <li>
                <strong>Formulare</strong>
                <p>Nu sunt foarte mult diferite în React, deci trebuie să aveți cunoștințele fundamentale de HTML și JS!</p>
            </li>
            <li>
                <strong>Transmiterea datelor între componente</strong>
                <p>Vrei să actualizezi state-ul unei componente dintr-o altă componentă? Sună ca și cum ai vrea să pasezi o metodă printr-un prop, folosind arrow function...</p>
            </li>
            <li>
                <strong>setState</strong>
                <p>E asincron. Atenție când actualizăm un câmp al state-ului parțial!</p>
            </li>
        </ul>
        <p>Evident, am mai învățat și alte mici lucruri pe lângă, dar ăsta e un mic rezumat. Bineînțeles, mai am multe de învățat.</p>
        <h2>Funcționalități</h2>
        <p>Hai să trecem în revistă ce știe proiectul nostru să facă:</p>
        <ul>
            <li><strong>Preluare useri din API</strong> - userii noștri sunt aduși în urma unui request asincron către JSON Placeholder</li>
            <li><strong>Listare useri existenți</strong> - userii pe care i-am preluat din API sunt afișați pe ecran</li>
            <li><strong>Adăugare user nou</strong> - completând câmpurile din formular, la submitere userul nou introdus este listat pe ecran</li>
            <li><strong>Schimbare culoare fundal</strong> - dând click pe butonul din subsolul paginii, putem schimba culoarea de fundal a paginii</li>
            <li><strong>Am adăugat două proprietăți noi pentru fiecare user</strong>: salariu și imagine.</li>
            <li><strong>Am adăugat un nou input de tip culoare.</strong> La schimbarea culorii lui, culoarea textului pentru întreaga aplicație se va schimba.</li>
            <li><strong>Creați două componente noi, numite PostList și PostItem.</strong> PostList va fi o listă de componente de tip PostItem. În componenta PostList, atunci când este afișată pe ecran, faceți un request catre endpoint-ul /posts, de pe JSON placeholder, afișând datele preluate. Practic, o singură dată veți face request către url-ul https://jsonplaceholder.typicode.com/posts.</li>
            <li><strong>Creați două butoane:</strong> Afișează useri și Afișează postări. Implicit, vor fi afișați userii. La click pe oricare din cele două butoane, va fi actualizată lista afișată pe ecran. Dacă dăm click pe butonul Afișează useri va fi afișată lista userilor, dacă dăm click pe Afișează postări va fi afișată lista postărilor.</li>
            <li><strong>Adăugați pe fiecare user un buton de ștergere.</strong></li>
            <li><strong>Faceți puțină validare a datelor.</strong> Spre exemplu, să nu poată fi introdus un nume gol, iar emailul să conțină caracterele '@' și '.' .</li>
            <li><strong>Stilizați aplicația, astfel încât să arate mai frumos.</strong></li>
        </ul>
        <br/>
        <h3>Poate nu par multe funcționalități, dar știu că am muncit la ele!</h3>
    </div>
  )
}

export default About