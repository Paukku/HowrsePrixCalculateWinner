# HowrsePrixCalculateWinner

Lyhyesti laskimesta:
Laskimen tarkoitus on laskea kahden hevosen väliltä se, kumpi voittaa kyseisen päivän prix kilpailun, tai millä bonuksilla oma hevonen voittaa viime viikkoisen voittajan.
Kilpailun voittoon vaikuttavat seuraavat asiat:
* Hevosen synnynnäiset taidot
* Hevosen geneettinen potentiaali
* Koulutus, taitojem siirto ja tehtävistä saatavat lisäpisteet
* Bonukset
* Kilpailun painotukset kolmen parhaimman taidon kesken.

Bonuksia on erilaisia ja ne antavat eri määrän pisteitä eri taitoihin ja osaa bonuksista voi käyttää vain toisten tiettyjen bonusten kanssa (muun muassa iriksen värityksen kanssa voi ainoastaan käyttää letityksiä ja klippausta). Nuoruudemvesi taasen ikäännyttää hevosta yhden kuukauden verran (normaalisti hevonen ikääntyy kaksi kuukautta kerralla), jonka avulla tehtävien tekemisestä saa enemmän pisteitä. Lisäksi hevoselle voi laittaa pilvenkappaleita maksimissaan 20 kappaletta, jolloin hevonen nuorenee neljä kuukautta kerralla ja voi tehdä uudestaan tehtäviä.

Laskimeen syötetään kolme parasta taitoa ja hevosen geneettinen potentiaali kolmesta parhaasta taidosta ja yhteisgenestä, tämän jälkeen valitaan bonukset, jotka hevoselle haluaisi laittaa. Sama tehdään vastustajan hepalle. Laskin sitten laskee erotuksen näiden kahden hevosen välille ja ilmoittaa voittajan.

# Valitut ohjelmointikielet
Kyseisessä projektissa käytetään backin puolella C# ja ASP.NET. Nämä valikoituivat backin puolelle, koska halusin lähteä kehittämään omaa C# ohjelmointitaitoani ja pääsemään paremmin tutuksi ASP.NETin kanssa. Projektissa ei ole tietokantaa, koska listat ovat staattisia, eikä käyttäjä voi tehdä niihin muutoksia. Frontin puolella on React + TypeScript. Tämä oli itselleni tuttu frameworkki ja ohjelmointikieli, joita haluan ylläpitää.


#Päivitykset (uusimmasta vanhimpaan):

19.8.24: Backendissä oleva kumppanit -lista siistitty.
18.8.24: Koodia siistitty ja lisätty backendin puolelle listat kumppaneista ja varusteista. Frontendin koodia muutettu niin, että kaikki listat näkyvät yhdessä taulukossa.
