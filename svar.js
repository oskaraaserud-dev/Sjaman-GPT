// ================================================================
//  SJAMAN GPT – ALLE SVAR OG LYDER
//  Dette er den eneste filen dere trenger å endre for å legge til
//  nye svar. Lagre filen og last siden på nytt.
//
//  Legg lydfilene i mappa "lyd" (ved siden av index.html).
//  Filene kan hete hva som helst, og mp3, m4a og wav fungerer.
//
//  Ett svar ser slik ut:
//    { tekst: "Det han sier", lyd: "lyd/filnavn.mp3" },
//
//  Bare tekst (ingen lyd):   { tekst: "Nei." },
//  Bare lyd (ingen tekst):   { lyd: "lyd/rar-lyd.mp3" },
//    → vises som en "lydmelding" i chatten
//
//  HUSK: komma etter hver linje, og "anførselstegn" rundt tekst.
// ================================================================

const SVAR = [
  { tekst: "Er ute og henter rein. Tilbake snart. Eller til våren.", lyd: "lyd/01.mp3" },
  { tekst: "Det er påske i Kautokeino. Jeg er på tre bryllup og fire konfirmasjoner samtidig.", lyd: "lyd/02.mp3" },
  { tekst: "Bidosen står på komfyren. Man forlater ikke en bidos.", lyd: "lyd/03.mp3" },
  { tekst: "Det er kalvmerking. Jeg har kniven i én hånd og en kalv i den andre.", lyd: "lyd/04.mp3" },
  { tekst: "Jeg kaster lasso. Jeg har bommet 14 ganger. Dette er spørsmål nummer 15.", lyd: "lyd/05.mp3" },
  { tekst: "Flokken krysset grensen til Sverige. Nå trenger jeg tolk for å hente dem.", lyd: "lyd/06.mp3" },
  { tekst: "Jeg joiket spørsmålet ditt. Nå har det blitt en sang og kan ikke besvares.", lyd: "lyd/07.mp3" },
  { tekst: "In dieđe. Det betyr «jeg vet ikke». Det er svaret på alt.", lyd: "lyd/08.mp3" },
  { tekst: "Jeg finner ikke beltet til kofta. Uten belte svarer jeg ikke.", lyd: "lyd/09.mp3" },
  { tekst: "Jeg har akkurat lagt kaffeost i kaffen. Den må få tid.", lyd: "lyd/10.mp3" },
  { tekst: "Gjeterhunden spiste svaret. Han er ikke lei seg.", lyd: "lyd/11.mp3" },
  { tekst: "Jeg må ringe resten av siidaen før jeg kan svare. Ingen av dem har dekning.", lyd: "lyd/12.mp3" },
  { tekst: "Det er 11 mil til nærmeste dekning. Jeg kjører dit og svarer i morgen.", lyd: "lyd/13.mp3" },
  { tekst: "Jeg er på butikken i Kautokeino. Alle jeg kjenner er her, så det tar fire timer.", lyd: "lyd/14.mp3" },
  { tekst: "Snøscooteren står fast i en myr. Det er november. Ikke spør.", lyd: "lyd/15.mp3" },
  { tekst: "Jeg teller reinflokken. Jeg har kommet til 3. Det er 400 igjen.", lyd: "lyd/16.mp3" },
  { tekst: "Det står en rein foran tastaturet. Han flytter seg ikke.", lyd: "lyd/17.mp3" },
  { tekst: "Nordlyset er ute. Alle henvendelser settes på vent.", lyd: "lyd/18.mp3" },
  { tekst: "Det er minus 40. Svaret frøs fast på vei ut av munnen.", lyd: "lyd/19.mp3" },
  { tekst: "Vinden tok svaret. Det er sikkert i Sverige nå.", lyd: "lyd/20.mp3" },
  { tekst: "Åndene har streik. De krever mer kaffe.", lyd: "lyd/21.mp3" },
  { tekst: "Jeg leste kaffegruten. Det står bare «kjøp mer kaffe».", lyd: "lyd/22.mp3" },
  { tekst: "Lavvoen blåste bort. Jeg må finne den før jeg kan svare.", lyd: "lyd/23.mp3" },
  { tekst: "Bestemor ringer. Man legger ikke på for bestemor.", lyd: "lyd/24.mp3" },
  { tekst: "Kontortida er tirsdager fra 10.00 til 10.05. Du kom for sent.", lyd: "lyd/25.mp3" },
  { tekst: "Du er nummer 4 812 i køen. Forventet ventetid: én flytting.", lyd: "lyd/26.mp3" },
  { tekst: "Svaret er faktisk veldig enkelt. Det er — nei, glem det.", lyd: "lyd/27.mp3" },
  { tekst: "Godt spørsmål. Veldig godt spørsmål. … Jeg må gå.", lyd: "lyd/28.mp3" },
  { tekst: "Jeg vet svaret, men du er ikke klar for det.", lyd: "lyd/29.mp3" },
  { tekst: "Du har nådd grensen for svar i dag. Oppgrader til Sjaman Pluss for 3 tørrfisk i måneden.", lyd: "lyd/30.mp3" },
  { tekst: "Som en sjaman-språkmodell kan jeg ikke svare på det.", lyd: "lyd/31.mp3" },
  { tekst: "Serverne er overbelastet. Serveren er en rein, og han er sliten.", lyd: "lyd/32.mp3" },
  { tekst: "Jeg genererer svaret ditt nå … 1 % … 1 % … 1 % …", lyd: "lyd/33.mp3" },
  { tekst: "Har du prøvd å google det?", lyd: "lyd/34.mp3" },
  { tekst: "Nei.", lyd: "lyd/35.mp3" },
  { tekst: "Jokeren stenger seks, jeg måtte gå for å rekke den.", lyd: "lyd/36.mp3" },

  // ---- Deres egne lyder: legg dem til her ----
  // { lyd: "lyd/sukk.mp3" },
  // { tekst: "Hva sa du?", lyd: "lyd/hva-sa-du.mp3" },
];


// Svar som brukes i pausen 08–16 (halvparten av gangene).
// Legg gjerne til flere.
const PAUSESVAR = [
  { tekst: "Sjamanen har pause fra 08 til 16. Prøv igjen klokka 16.01.", lyd: "lyd/pause.mp3" },
];


// Spesialsvar: hvis spørsmålet inneholder et av ordene, kommer
// et av svarene i lista.
// "sjanse" = hvor ofte (1 = alltid, 0.7 = 7 av 10 ganger).
// Et ord matcher også starten av lengre ord: "rein" gir treff
// på "reinsdyr", "reinen", "reinflokken" osv.
// Samme lydfil kan brukes flere steder.
const SPESIAL = [
  // Nevner du jenter, blir sjamanen plutselig veldig interessert.
  // Står først i lista, så den vinner hvis spørsmålet også nevner rein.
  { ord: ["jente", "dame", "dama", "kjæreste", "date", "flørt", "singel", "single", "forelsk", "crush"], sjanse: 1, svar: [
    { tekst: "Vent litt. Jenter, sa du? Jeg legger fra meg lassoen. Fortell mer.", lyd: "lyd/jenter-01.mp3" },
    { tekst: "Endelig et ordentlig spørsmål. Reinen kan vente.", lyd: "lyd/jenter-02.mp3" },
    { tekst: "Er hun fra Kautokeino? Da kjenner jeg sikkert bestemoren hennes.", lyd: "lyd/jenter-03.mp3" },
    { tekst: "Har hun egen rein? Det er det eneste som betyr noe.", lyd: "lyd/jenter-04.mp3" },
    { tekst: "Jeg tar på meg den fine kofta. Hvor er hun?", lyd: "lyd/jenter-05.mp3" },
    { tekst: "Hysj. Jeg har slått av scooteren. Jeg hører.", lyd: "lyd/jenter-06.mp3" },
    { tekst: "Spør om hun liker bidos. Hvis ja: fri.", lyd: "lyd/jenter-07.mp3" },
    { tekst: "Jeg skal joike til henne. Det har aldri slått feil. Det har alltid slått feil.", lyd: "lyd/jenter-08.mp3" },
    { tekst: "Rart. Nå fikk jeg plutselig full dekning.", lyd: "lyd/jenter-09.mp3" },
  ]},
  // Man spør ikke en reineier hvor mange rein han har –
  // det er like frekt som å spørre hvor mye noen tjener.
  // Står foran rein-gruppa, så dette svaret vinner.
  { ord: ["hvor mange rein", "hvor mye rein", "antall rein", "hvor stor flokk", "hvor stor er flokken", "hvor mange dyr"], sjanse: 1, svar: [
    { tekst: "Hvor mye tjener du?", lyd: "lyd/antall-01.mp3" },
    { tekst: "Uff.", lyd: "lyd/antall-02.mp3" },
    { tekst: "Jeg later som jeg ikke hørte det.", lyd: "lyd/antall-03.mp3" },
    { tekst: "Vis meg lønnsslippen din først.", lyd: "lyd/antall-04.mp3" },
    { tekst: "Bestemor hørte det der.", lyd: "lyd/antall-05.mp3" },
    { tekst: "Neste spørsmål.", lyd: "lyd/antall-06.mp3" },
  ]},
  { ord: ["rein", "flokk", "lasso", "kalv", "simle", "bukk", "rudolf"], sjanse: 1, svar: [
    { tekst: "Ikke snakk om reinen min. Han er sensitiv.", lyd: "lyd/spesial-rein.mp3" },
    { tekst: "Er ute og henter rein. Tilbake snart. Eller til våren.", lyd: "lyd/01.mp3" },
    { tekst: "Det er kalvmerking. Jeg har kniven i én hånd og en kalv i den andre.", lyd: "lyd/04.mp3" },
    { tekst: "Jeg kaster lasso. Jeg har bommet 14 ganger. Dette er spørsmål nummer 15.", lyd: "lyd/05.mp3" },
    { tekst: "Flokken krysset grensen til Sverige. Nå trenger jeg tolk for å hente dem.", lyd: "lyd/06.mp3" },
    { tekst: "Jeg teller reinflokken. Jeg har kommet til 3. Det er 400 igjen.", lyd: "lyd/16.mp3" },
    { tekst: "Det står en rein foran tastaturet. Han flytter seg ikke.", lyd: "lyd/17.mp3" },
    { tekst: "Serverne er overbelastet. Serveren er en rein, og han er sliten.", lyd: "lyd/32.mp3" },
  ]},
  { ord: ["hei", "hallo", "heisann"], svar: [
    { tekst: "Buorre beaivi! … Det var alt.", lyd: "lyd/spesial-hei.mp3" },
  ]},
  { ord: ["takk"], svar: [
    { tekst: "Giitu for spørsmålet. Svar kommer aldri.", lyd: "lyd/spesial-takk.mp3" },
  ]},
];


// Teksten som vises mens han "tenker"
const TENKER = [
  "Spør åndene", "Leser kaffegruten", "Sjekker med reinflokken",
  "Leter etter dekning", "Joiker over spørsmålet", "Ringer bestemor",
];

// Statusen øverst til høyre (byttes hvert 15. sekund)
const STATUSER = [
  "Ute og henter rein", "Kaster lasso", "Koker kaffe på bålet", "Sitter på isen og pilker",
  "Fast med snøscooteren", "Teller rein (3 av 400)", "På butikken i Kautokeino",
  "Ser på nordlyset", "Leter etter lavvoen", "I telefonen med bestemor",
];

// Forslagene på startsiden: [spørsmål, liten tekst under]
const FORSLAG = [
  ["Hva er meningen med livet?", "Det store spørsmålet"],
  ["Hjelp meg med matteleksa", "Innlevering i morgen"],
  ["Hvor mange rein har du?", "Ærlig svar, takk"],
  ["Hva blir været i morgen?", "Skal på tur"],
];
