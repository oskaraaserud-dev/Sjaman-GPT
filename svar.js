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

  // ---- Korte svar som passer til alt ----
  { tekst: "Hm.", lyd: "lyd/generisk-01.mp3" },
  { tekst: "Kanskje.", lyd: "lyd/generisk-02.mp3" },
  { tekst: "Hæ?", lyd: "lyd/generisk-03.mp3" },
  { tekst: "Spør bestemor.", lyd: "lyd/generisk-04.mp3" },
  { tekst: "Ikke nå.", lyd: "lyd/generisk-05.mp3" },
  { tekst: "Det får vi se til våren.", lyd: "lyd/generisk-06.mp3" },
  { tekst: "Jeg tenker. Ikke stress meg.", lyd: "lyd/generisk-07.mp3" },
  { tekst: "Ja. Nei. Kanskje.", lyd: "lyd/generisk-08.mp3" },
  { tekst: "Prøv igjen etter flyttinga.", lyd: "lyd/generisk-09.mp3" },
  { tekst: "Hysj. Jeg ser på nordlyset.", lyd: "lyd/generisk-10.mp3" },
  { tekst: "Interessant. Uansett.", lyd: "lyd/generisk-11.mp3" },
  { tekst: "Det vet reinen.", lyd: "lyd/generisk-12.mp3" },

  // ---- Deres egne lyder: legg dem til her ----
  // { lyd: "lyd/sukk.mp3" },
  // { tekst: "Hva sa du?", lyd: "lyd/hva-sa-du.mp3" },
];


// Svar når noen sender et bilde.
// Kommer alltid herfra når meldingen har et bilde (med eller uten tekst).
const BILDESVAR = [
  { tekst: "Er det en rein?", lyd: "lyd/bilde-01.mp3" },
  { tekst: "Det der er ikke en rein.", lyd: "lyd/bilde-02.mp3" },
  { tekst: "Jeg ser ingenting. Det er mørketid.", lyd: "lyd/bilde-03.mp3" },
  { tekst: "Bildet laster … 1 % … 1 % …", lyd: "lyd/bilde-04.mp3" },
  { tekst: "Jeg har sett bedre. Jeg har sett nordlyset.", lyd: "lyd/bilde-05.mp3" },
  { tekst: "Fint. Hva skal jeg med det?", lyd: "lyd/bilde-06.mp3" },
  { tekst: "Jeg viser det til bestemor.", lyd: "lyd/bilde-07.mp3" },
  { tekst: "Hm. Uskarpt.", lyd: "lyd/bilde-08.mp3" },
  { tekst: "Jeg henger det opp i lavvoen.", lyd: "lyd/bilde-09.mp3" },
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

  // ---- Rekkefølgen betyr noe: den første gruppa som treffer, vinner. ----
  // Derfor står de mest spesifikke først (f.eks. skole før mat,
  // fordi "mat" ellers ville truffet "matteleksa").

  { ord: ["meningen med livet", "mening med livet", "livets mening"], sjanse: 1, svar: [
    { tekst: "Kaffe.", lyd: "lyd/livet-01.mp3" },
    { tekst: "400.", lyd: "lyd/livet-02.mp3" },
    { tekst: "Bestemor vet. Hun sier det ikke.", lyd: "lyd/livet-03.mp3" },
    { tekst: "Spør meg etter kalvmerkinga.", lyd: "lyd/livet-04.mp3" },
  ]},
  { ord: ["hvordan går det", "hvordan har du det", "står til", "går det bra", "hva skjer"], sjanse: 0.9, svar: [
    { tekst: "Kaldt.", lyd: "lyd/gardet-01.mp3" },
    { tekst: "Kunne vært verre. Kunne vært sommer.", lyd: "lyd/gardet-02.mp3" },
    { tekst: "Jeg har kaffe. Så bra.", lyd: "lyd/gardet-03.mp3" },
    { tekst: "Scooteren står fast. Ellers bra.", lyd: "lyd/gardet-04.mp3" },
    { tekst: "Hvem vil vite det?", lyd: "lyd/gardet-05.mp3" },
  ]},
  { ord: ["hvem er du", "hva heter du", "hva er du"], sjanse: 1, svar: [
    { tekst: "Sjamanen. Neste.", lyd: "lyd/hvem-01.mp3" },
    { tekst: "Det vet bare reinen.", lyd: "lyd/hvem-02.mp3" },
    { tekst: "Hvem er du?", lyd: "lyd/hvem-03.mp3" },
  ]},
  { ord: ["hei", "hallo", "halla", "heisann", "god morgen", "god dag", "god kveld", "bures", "buorre", "yo"], sjanse: 0.9, svar: [
    { tekst: "Bures.", lyd: "lyd/hei-01.mp3" },
    { tekst: "Buorre beaivi! … Det var alt.", lyd: "lyd/spesial-hei.mp3" },
    { tekst: "Hei. Jeg er opptatt.", lyd: "lyd/hei-02.mp3" },
    { tekst: "Hvem er dette?", lyd: "lyd/hei-03.mp3" },
    { tekst: "Hei. Ha det.", lyd: "lyd/hei-04.mp3" },
    { tekst: "Hallo? … Hallo? Du brytes opp.", lyd: "lyd/hei-05.mp3" },
  ]},
  { ord: ["ha det", "hade", "snakkes", "god natt", "bye", "vi ses"], sjanse: 1, svar: [
    { tekst: "Endelig.", lyd: "lyd/hadet-01.mp3" },
    { tekst: "Lukk døra etter deg.", lyd: "lyd/hadet-02.mp3" },
    { tekst: "Snakkes. Eller ikke.", lyd: "lyd/hadet-03.mp3" },
    { tekst: "Giitu for besøket.", lyd: "lyd/hadet-04.mp3" },
  ]},
  { ord: ["takk", "tusen takk", "giitu"], sjanse: 1, svar: [
    { tekst: "Giitu for spørsmålet. Svar kommer aldri.", lyd: "lyd/spesial-takk.mp3" },
    { tekst: "For hva?", lyd: "lyd/takk-01.mp3" },
    { tekst: "Jeg gjorde ingenting.", lyd: "lyd/takk-02.mp3" },
    { tekst: "Det blir 3 tørrfisk.", lyd: "lyd/takk-03.mp3" },
  ]},
  { ord: ["lekse", "matte", "skole", "innlevering", "eksamen", "oppgave", "lærer"], sjanse: 1, svar: [
    { tekst: "Gjør den selv.", lyd: "lyd/skole-01.mp3" },
    { tekst: "Svaret er 400.", lyd: "lyd/skole-02.mp3" },
    { tekst: "Kopier sidemannen.", lyd: "lyd/skole-03.mp3" },
    { tekst: "Jeg gikk ikke på skolen. Jeg gikk med flokken.", lyd: "lyd/skole-04.mp3" },
    { tekst: "Si at gjeterhunden spiste den.", lyd: "lyd/skole-05.mp3" },
  ]},
  { ord: ["kaffe", "kaffi", "termos"], sjanse: 1, svar: [
    { tekst: "Endelig noen som forstår meg.", lyd: "lyd/kaffe-01.mp3" },
    { tekst: "Svart.", lyd: "lyd/kaffe-02.mp3" },
    { tekst: "Jeg har tre termoser. Ingen av dem er til deg.", lyd: "lyd/kaffe-03.mp3" },
    { tekst: "Med kaffeost. Ellers er det ikke kaffe.", lyd: "lyd/kaffe-04.mp3" },
  ]},
  { ord: ["mat", "sulten", "middag", "lunsj", "frokost", "pizza", "kebab", "taco", "bidos"], svar: [
    { tekst: "Bidos.", lyd: "lyd/mat-01.mp3" },
    { tekst: "Tørrfisk.", lyd: "lyd/mat-02.mp3" },
    { tekst: "Det er kaffeost i kjøleskapet. Ikke rør den.", lyd: "lyd/mat-03.mp3" },
    { tekst: "Jeg spiser nå. Ring senere.", lyd: "lyd/mat-04.mp3" },
    { tekst: "Pizza? Her? Ha.", lyd: "lyd/mat-05.mp3" },
  ]},
  { ord: ["været", "værmelding", "værvarsel", "kaldt", "grader", "snør", "nordlys"], sjanse: 1, svar: [
    { tekst: "Kaldt.", lyd: "lyd/vaer-01.mp3" },
    { tekst: "Se ut av vinduet.", lyd: "lyd/vaer-02.mp3" },
    { tekst: "Det blir vær.", lyd: "lyd/vaer-03.mp3" },
    { tekst: "Minus 30 og fint.", lyd: "lyd/vaer-04.mp3" },
    { tekst: "Spør reinen. Han står ute.", lyd: "lyd/vaer-05.mp3" },
  ]},
  { ord: ["scooter", "snøscooter", "skuter"], sjanse: 1, svar: [
    { tekst: "Den står fast.", lyd: "lyd/scooter-01.mp3" },
    { tekst: "Den starter ikke.", lyd: "lyd/scooter-02.mp3" },
    { tekst: "Tom for bensin. Igjen.", lyd: "lyd/scooter-03.mp3" },
    { tekst: "Ikke snakk om scooteren.", lyd: "lyd/scooter-04.mp3" },
  ]},
  { ord: ["joik", "synge", "syng", "sang"], sjanse: 1, svar: [
    { tekst: "Jeg joiker ikke på bestilling.", lyd: "lyd/joik-01.mp3" },
    { tekst: "Det koster 5 tørrfisk.", lyd: "lyd/joik-02.mp3" },
    { tekst: "Nei.", lyd: "lyd/joik-03.mp3" },
    // Når dere har en joike-lyd: { lyd: "lyd/joik.mp3" },
  ]},
  { ord: ["sverige", "svensk", "svenske"], sjanse: 1, svar: [
    { tekst: "Ikke snakk om dem.", lyd: "lyd/sverige-01.mp3" },
    { tekst: "Flokken min er der. Den kommer ikke tilbake.", lyd: "lyd/sverige-02.mp3" },
    { tekst: "Hva? Jeg forstår ikke svensk.", lyd: "lyd/sverige-03.mp3" },
  ]},
  { ord: ["oslo", "bergen", "trondheim", "stavanger"], sjanse: 1, svar: [
    { tekst: "Der har de ikke rein. Bare duer.", lyd: "lyd/sorpa-01.mp3" },
    { tekst: "Det er for langt sør.", lyd: "lyd/sorpa-02.mp3" },
    { tekst: "Har de dekning der?", lyd: "lyd/sorpa-03.mp3" },
  ]},
  { ord: ["kautokeino", "guovdageaidnu", "karasjok", "finnmark"], sjanse: 1, svar: [
    { tekst: "Hils bestemor.", lyd: "lyd/hjemme-01.mp3" },
    { tekst: "Jeg er der. Jeg er alltid der.", lyd: "lyd/hjemme-02.mp3" },
    { tekst: "Hvem er din familie?", lyd: "lyd/hjemme-03.mp3" },
  ]},
  { ord: ["jule", "jula", "julaften", "nisse"], sjanse: 1, svar: [
    { tekst: "Nissen låner reinen min hvert år. Han har aldri levert dem tilbake.", lyd: "lyd/jul-01.mp3" },
    { tekst: "Jeg teller rein i jula.", lyd: "lyd/jul-02.mp3" },
    { tekst: "Ikke nevn nissen.", lyd: "lyd/jul-03.mp3" },
  ]},
  { ord: ["chatgpt", "gpt", "ai", "robot", "kunstig intelligens"], sjanse: 1, svar: [
    { tekst: "ChatGPT er svogeren min. Vi snakker ikke sammen.", lyd: "lyd/ai-01.mp3" },
    { tekst: "Jeg er ikke en robot. Jeg er bare treg.", lyd: "lyd/ai-02.mp3" },
    { tekst: "Jeg kjører på én rein og en termos.", lyd: "lyd/ai-03.mp3" },
  ]},
  { ord: ["penger", "penga", "lønn", "vipps", "låne", "betale"], sjanse: 1, svar: [
    { tekst: "Vipps meg først.", lyd: "lyd/penger-01.mp3" },
    { tekst: "Jeg har 3 tørrfisk. De er ikke til salgs.", lyd: "lyd/penger-02.mp3" },
    { tekst: "Nei.", lyd: "lyd/penger-03.mp3" },
  ]},
  { ord: ["hjelp", "hjelpe"], svar: [
    { tekst: "Nei.", lyd: "lyd/hjelp-01.mp3" },
    { tekst: "Ring 113.", lyd: "lyd/hjelp-02.mp3" },
    { tekst: "Jeg kan ikke engang hjelpe meg selv.", lyd: "lyd/hjelp-03.mp3" },
    { tekst: "Har du prøvd å slå den av og på?", lyd: "lyd/hjelp-04.mp3" },
  ]},
  { ord: ["klokka", "klokken", "hvilken dag"], sjanse: 1, svar: [
    { tekst: "Kaffetid.", lyd: "lyd/klokka-01.mp3" },
    { tekst: "Det er mørketid. Klokka spiller ingen rolle.", lyd: "lyd/klokka-02.mp3" },
    { tekst: "Sent.", lyd: "lyd/klokka-03.mp3" },
  ]},
  { ord: ["unnskyld", "sorry", "beklager"], sjanse: 1, svar: [
    { tekst: "Greit.", lyd: "lyd/sorry-01.mp3" },
    { tekst: "For sent.", lyd: "lyd/sorry-02.mp3" },
    { tekst: "Bestemor tilgir deg. Ikke jeg.", lyd: "lyd/sorry-03.mp3" },
  ]},
  { ord: ["haha", "hehe", "lol", "😂"], svar: [
    { tekst: "Hva ler du av?", lyd: "lyd/haha-01.mp3" },
    { tekst: "Det var ikke en vits.", lyd: "lyd/haha-02.mp3" },
    { tekst: "Hysj.", lyd: "lyd/haha-03.mp3" },
  ]},
  { ord: ["faen", "helvete", "dritt", "jævla", "fuck"], sjanse: 1, svar: [
    { tekst: "Hysj. Reinen hører.", lyd: "lyd/bann-01.mp3" },
    { tekst: "Vask munnen med snø.", lyd: "lyd/bann-02.mp3" },
    { tekst: "Jeg sier det til bestemor.", lyd: "lyd/bann-03.mp3" },
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
