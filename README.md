# HowrsePrixCalculateWinner

Tämä on vielä keskeneräinen projekti.

Lyhyesti laskimesta:
Laskimen tarkoitus on laskea kahden hevosen väliltä se, kumpi voittaa kyseisen päivän prix kilpailun, tai millä bonuksilla oma hevonen voittaa viime viikkoisen voittajan.
Kilpailun voittoon vaikuttavat seuraavat asiat:
* Hevosen synnynnäiset taidot
* Hevosen geneettinen potentiaali
* Koulutus, taitojem siirto ja tehtävistä saatavat lisäpisteet
* Bonukset
* Kilpailun painotukset kolmen parhaimman taidon kesken.

Bonuksia on erilaisia ja ne antavat eri määrän pisteitä eri taitoihin ja osaa bonuksista voi käyttää vain toisten tiettyjen bonusten kanssa (muun muassa iriksen värityksen kanssa voi ainoastaan käyttää letityksiä ja klippausta). Nuoruudemvesi taasen ikäännyttää hevosta yhden kuukauden verran (normaalisti hevonen ikääntyy kaksi kuukautta kerralla), jonka avulla tehtävien tekemisestä saa enemmän pisteitä. Lisäksi hevoselle voi laittaa pilvenkappaleita maksimissaan 20 kappaletta, jolloin hevonen nuorenee neljä kuukautta kerralla ja voi tehdä uudestaan tehtäviä.

Aluksi valitaan laji, jossa hevonen kilpailee. Valittavana on klassisen- ja lännenpuolen eri lajeja. Tämän jälkeen laskimeen syötetään kolme parasta taitoa ja hevosen geneettinen potentiaali kolmesta parhaasta taidosta ja yhteisgenestä, jonka jälkeen valitaan bonukset, jotka hevoselle haluaisi laittaa. Sama tehdään vastustajan hepalle. Laskin sitten laskee erotuksen näiden kahden hevosen välille ja ilmoittaa voittajan.

# Valitut ohjelmointikielet
Kyseisessä projektissa käytetään backin puolella C# ja ASP.NET. Nämä valikoituivat back endin puolelle, koska halusin lähteä kehittämään omaa C# ohjelmointitaitoani ja pääsemään paremmin tutuksi ASP.NETin kanssa. Projektissa ei ole tietokantaa, koska listat ovat staattisia, eikä käyttäjä voi tehdä niihin muutoksia. Front endin puolella on React + TypeScript. Nämä olivat itselleni tuttu frameworkki ja ohjelmointikieli, joita haluan ylläpitää.

# Projektista
* Back end
Back endin puolelle on rakennettu yksi BonusCategory, joka kertoo, missä muodossa bonukset on. Tämä luokka käy kaikkiin bonuksiin, koska back endin puolella ei vielä tehdä muutoksia tai rajoituksia bonuksien käytöstä. Back endin puolelta löytyy myös BonusCategoryController (Controllers kansiossa), johon on eroteltu omiksi listoiksi kaikki valittavat bonukset, kuten kustomointibonus, satulat, suitset jne. Tämä listaus voi vielä muuttua.

* Front end
Front end on hieman laajempi kokonaisuus, sillä eri asiat on eroteltu eri komponentteihin ja kansioihin.
Components -kansiosta löytyy tiedostot CalculatingSkills, SelectPrix, ShowPrix, SkillSections ja SkillFormField. Components kansiosta löytyy myös alikansiot Bonus, ClassicPrixes ja WesternPrixes.

Bonus -kansiossa Bonus -tiedosto sisältää muutamia eri interfaceja, joita käytetään useammassa tiedostossa uudestaan. BonusSelector komponentti on yleiskomponentti, jota muut bonustiedostot käyttävät. BridleBonuses, CompanionBonuses, CustomBonuses, EarBonnetBonuses, HorseShoesBonuses, PackBonuses, PoloWrapperBonuses, SaddleBonuses, SaddleClothBonuses ja StylingBonuses -tiedostot kertovat BonusSelectorilla, mitä listaa pitää hakea. Jokaisella on yksilöity tyyppi, jotta käyttäjä saa valittua jokaisesta bonuskategoriasta erikseen valintansa.

ClassicPrixes ja WesternPrixes sisältävät omat lajinsa. Jaottelu on tehty selkeyttämään lajit toisistaan. Kukin laji sisältää oman yksilöidyn sisältönsä, joka avautuu, kun käyttäjä valitsee kyseisen lajin. Jokainen laji käyttää yleiskomponenttia SkillForm -tiedostoa tietojen näyttämiseen. 

CalculatingSkills -tiedostossa tapahtuu itse laskutoimitus, jossa ohjelma laskee taidot ja bonukset yhteen omalta sekä vastustajan hevoselta ja lopuksi vähentää oman hepan kokonaistaidoista vastustajan hevosen kokonaistaidot ja lähettää tiedon SkillsFormFieldiin. 

SelectPrix -tiedostoon on listattu vaihtoehdot valituista prixeistä, joista käyttäjä voi ottaa yhden kerrallaan valituksi.

ShowPrix näyttää SelectPrixin ja valinnan jälkeen se näyttää lisäksi valitun prixin kohdat, jotka tulee täyttää. Tähän tiedostoon on listattu ClassicPrix ja WesternPrix kansioiden sisältö.

SkillFormField on yleinen komponentti prixi lajeille. Siinä on omat osionsa omalle ja vastustajan hevoselle, jotka käyttävät SkillSections -tiedostoa.

SkillSections -tiedosto on yleinen komponentti, joka renderöi taidot, geneettisen potentiaalin, pilville oman kohdan sekä eri bonukset. Tämä kohta on vielä hieman rikki, koska ei näytä mitä tietoa mihinkin kohtaan vaaditaan.
