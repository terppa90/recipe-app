# RecipeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## --------------------- Projektin dokumentaatio ---------------------

1. YLEISESITTELY

1.1 Sovelluksen idea/tarkoitus

Sovellus toimii reseptipankkina, johon käyttäjä voi tallentaa omia reseptejä. Data tulee tietokannasta backendistä ja frontendin kautta käsitellään CRUD-toimintoja, joiden avulla käyttäjä voi lisätä/poistaa reseptejä.

1.2 Toiminnallisuus

Sovelluksen käynnistyksen yhteydessä avautuu kirjautumissivu, josta valmiiksi rekisteröitynyt käyttäjä pääsee kirjautumaan sisään käyttäjätunnuksellaan ja salasanallaan. Rekisteröimätön käyttäjä pääsee navigoimaan rekisteröitymissivustolle. Kirjautumisen jälkeen käyttäjä ohjataan etusivulle, jossa näkyy muutamia reseptejä ja reseptinhakukenttä. Navigaatiobarista pääsee navigoimaan varsinaiseen reseptipankkiin, jossa näkyy kaikki reseptit ja linkit yksittäisen reseptin tietoihin. Täällä reseptejä pystyy myös poistamaan x-painikkeesta. Tämän lisäksi navbarista pääsee "Lisää resepti" -kohtaan jossa käyttäjä voi lisätä uusia reseptejä lomakkeen avulla.

2. Kuvaus teknologioista

2.1 Kuvaus eri teknologioiden käyttämisestä työssä

Sovelluksen backendinä toimii Heroku ja frontend on hostattu Firebaseen. Tietokantana on käytetty MongoDB Atlas -pilvitietokantapalvelua. REST API on toteutettu Node.js:n, expressin ja MongoDB Atlas:n avulla. REST-API on suojattu autentikaatiolla (JWT) ja salasanat kryptattu bcryptillä. Tyyleissä käytetty Bootstrapia. Lomakkeessa käytetty validointia. CORS -moduulia käytetty datan kulkemisen sallimiseksi eri osoitteista peräisin olevien sovellusten kesken.

2.2 Komennot, joilla kehitysversion saa GitHubista omalle koneelle toimimaan

Frontend:
git clone https://github.com/terppa90/recipe-app.git

Backend:

git clone https://github.com/terppa90/exp-recipes

Sovellus löytyy julkaistuna osoitteesta:

3. Reflektio ja ajankäyttö

3.1 Miten työ onnistui? Mikä oli helppoa ja mikä vaikeaa?

Työ onnistui omiin taitoihin ja kokemukseen suhteutettuna mielestäni ihan kelvollisesti. Joitain asioita olisi varmasti voinut tehdä huomattavasti paremminkin. Vastoinkäymisiäkin luonnollisesti ilmeni, yksi niistä ja varmasti mieleenpainuvin oli searchbar -hakukentän kanssa ilmenneet ongelmat siirryttäessä käyttämään backendiä. Reseptin haku ei enää hakenutkaan yksittäisiä reseptejä haun perusteella vaan esitti kaikki tietokannasta tulevat reseptit riippumatta siitä mitä hakukenttään kirjoitti. Päädyin lopulta luopumaan tästä hakukenttä -versiosta ja tyydyin pelkistetympään versioon, joka jäi hieman kaivelemaan, koska nyt käytössä ei ollut observableja/subscribejä. Lomakkeen kanssa esiintyi myös hieman päänvaivaa mutta loppuviimein lomake onnistui mielestäni kohtuu hyvin, tosin käyttäjä joutuu laittamaan ID:n itse, mikä ei ole järkevä ratkaisu, mutta runsaasta ajankäytöstä huolimatta en löytänyt tähän jostain syystä toimivaa ratkaisua. Positiivisena yllätyksenä sanottakoon että backendin/REST API:n tekeminen ei ollut ihan niin haastavaa mitä olisin odottanut.

3.2 Kuinka paljon käytit aikaa loppuharjoitustyön tekemiseen?

Aikaa työn tekemiseen kului aika paljon. Ainakin huomattavasti enemmän, mitä 2 op:n edellyttämät 54 tuntia kattaa. Osittain aikaa kului enemmän siksi, että tein harjoitustyötä satunnaisesti, toisinaan pidempien taukojen siivittämänä, joten aika ajoin joutui hieman muistelemaan mitä viimeksi oli tehnyt ja mihin jäänyt että pääsi takaisin "kiinni" työotteeseen.

3.3 mitä tietoja/taitoja sinun tulee vielä kehittää?

Yleisesti ohjelmointilogiikan ymmärtämistä ja sisäistämistä kokonaisuudessaan.

4. Työssä hyödynnetyt tutoriaalit

-Angularin oma tour-of-heroes -tutoriaali

-Angular form tutorial youtubesta:
https://www.youtube.com/watch?v=nGr3C3wbh9c&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi

-Reactive Forms tutoriaali:
https://www.youtube.com/watch?v=DEuTcG8DxUI&list=PLSpHUCKwYm9wyxxDvoXHkTooXCMaQtLAs&index=16

-REST API with Node js & Express -tutoriaali:
https://www.youtube.com/watch?v=pKd0Rpw7O48

-Web-kehittäjä -koulutuksen tunneilta saamat materiaalit ja tehtävät joista esim. autentikaatio tehty
