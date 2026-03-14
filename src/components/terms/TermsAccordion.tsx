import React from "react";

type Item = {
  id: string;
  title: string;
  contentHtml: string;
};


const ITEMS: Item[] = [
  {
    id: "2",
    title: "NAČIN OBRAČUNA IN PLAČILA POGODBENIH DEL",
    contentHtml: `
<p>Izvajalec enkrat mesečno izstavlja situacije, in sicer najkasneje do 5. dne v mesecu za izvedena dela v preteklem mesecu. Končno situacijo izvajalec izstavi šele po uspešni primopredaji del naročniku (ko so odpravljene vse pomanjkljivosti ugotovljene na tehničnem pregledu).</p>

<p>Izvajalec je dolžan posredovati situacije v fizični obliki na naslov naročnika: DEMA PLUS d.o.o., Tbilisijska ulica 59, 1000 Ljubljana. Na situaciji mora biti zavedena številka pogodbe ali naročilnice, sicer lahko naročnik situacijo zavrne kot nepopolno.</p>

<p>Osnova za izdelavo posameznih situacij je s strani nadzornega organa pregledana in podpisana Knjiga obračunskih izmer, in služi za potrebe začasnega obračuna in gradbeni dnevnik, ki zajema izvedena dela do 30. dne v obračunskem mesecu.</p>

<p>Naročnik je dolžan v nadaljnjih petnajstih dneh od prejema situacije, le-to pregledati, nesporni del situacije potrditi, morebitni sporni del situacije pa v okviru tega roka pisno prerekati, sicer se šteje, da je situacija potrjena.</p>

<p>Naročnik plačuje mesečne situacije z valuto 30 dni, pri čemer valuta začne teči z dnem potrditve situacije s strani naročnikovega nadzora. Če zadnji dan plačilnega roka sovpada z dnem, ko je po zakonu dela prost dan, se za zadnji dan roka šteje naslednji delavnik.</p>

<p>V primeru zamude s plačilom začasnih in končne situacije je naročnik izvajalcu dolžan na njegovo zahtevo plačati zakonite zamudne obresti. Izvajalec lahko zahteva plačilo do dneva poplačila.</p>
`,
  },

{
  id: "3",
  title: "OBLIKE PLAČIL",
  contentHtml: `
<p>Naročnik pri svojem poslovanju priznava in uporablja sledeče načine plačil:</p>
<ul>
  <li>nominacija za neposredna plačila po 94. členu ZJN-3 (v primeru sklenitve pogodbe in takšnega določila v pogodbi),</li>
  <li>asignacijske pogodbe med izvajalcem, naročnikom in investitorjem,</li>
  <li>direktna plačila naročnika na izvajalčev TRR.</li>
</ul>
`,
},

  {
    id: "4",
    title: "POGOJI ZA ZADRŽEVANJE IZPLAČILA SITUACIJE",
    contentHtml: `
<p>V primeru reklamacije izvedbe del se plačilo dela ali celotne situacije zadrži do odprave vzrokov reklamacije. Naročnik mora pisno obvestiti izvajalca o višini in razlogih za zadržanje sredstev, ki so zapadla v izplačilo. Zadržana sredstva se ne obrestujejo in zapadejo v izplačilo, ko naročnik in izvajalec ugotovita, da so za izplačilo zadržanih sredstev izpolnjeni pogoji oziroma odpravljeni razlogi za njihovo zadržanje, kar se uredi z zapisnikom.</p>
`,
  },

  {
    id: "5",
    title: "DOLOČITEV CENE POGODBENIH DEL",
    contentHtml: `
<p>Vrednost pogodbe ali naročilnice vsebuje vse elemente cene, vključno z manipulativnimi stroški, taksami, carino idr. in je ni možno povečati na nobeni osnovi, razen na zakonski. Izvajalec v zvezi s tem nima pravice zaračunavati nobenih dodatnih stroškov.</p>
`,
  },

  {
    id: "6",
    title: "ZAVAROVANJA",
    contentHtml: `
<p>Izvajalec je odgovoren za kvaliteto izvršenih del in sicer je splošni garancijski rok 5 let od datuma prevzema objekta ter 10 let za solidnost in stabilnost objekta.</p>

<p>Za vgrajene naprave in opremo veljajo garancijski roki proizvajalcev, najmanj pa 3 leta.</p>
`,
  },

  {
    id: "7",
    title: "FINANČNA ZAVAROVANJA – DOBRA IZVEDBA POGODBENIH OBVEZNOSTI",
    contentHtml: `
<p>Izvajalec se zavezuje v roku 5 dni od sklenitve pogodbe/izdaje naročilnice, naročniku predložiti dogovorjeno finančno zavarovanje za dobro izvedbo pogodbenih obveznosti v višini 10% pogodbene vrednosti brez DDV.</p>

<p>Naročnik priznava sledeče oblike finančnega zavarovanja za dobro izvedbo pogodbenih obveznosti:</p>

<table>
  <thead>
    <tr>
      <th>Oblika zavarovanja</th>
      <th>Vrednost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bianco menica z menično izjavo</td>
      <td>Za vrednosti do 10.000,00 EUR</td>
    </tr>
    <tr>
      <td>Overjena izvršnica</td>
      <td>Za vrednosti od 10.000,00 EUR do 50.000,00 EUR</td>
    </tr>
    <tr>
      <td>Bančna garancija ali kavcijsko zavarovanje</td>
      <td>Za vrednosti nad 50.000,00 EUR</td>
    </tr>
  </tbody>
</table>

<p>Veljavnost predloženega finančnega zavarovanja mora biti vsaj 180 dni daljša od roka za dokončanje vseh del na predmetnem objektu oz. mora veljati vsaj do predaje finančnega zavarovanja za odpravo napak v garancijski dobi.</p>

<p>Če se med trajanjem izvedbe del spremeni rok za izvedbo del, mora izvajalec v roku 5 dni po pozivu, naročniku predložiti novo finančno zavarovanje za dobro izvedbo pogodbenih obveznosti, z novim rokom veljavnosti, v skladu s spremembo roka za izvedbo del.</p>

<p>Pravočasna predložitev finančnega zavarovanja za dobro izvedbo pogodbenih obveznosti je pogoj za za izplačila situacij po pogodbi oz. naročilnici.</p>

<p>Če izvajalec pred iztekom veljavnosti finančnega zavarovanja za dobro in pravočasno izvedbo del ne nadomesti z dogovorjenim finančnim zavarovanjem za garancijsko dobo, se izvajalec izrecno strinja, da mu bo naročnik unovčil finančno zavarovanje za dobro in pravočasno izvedbo del.</p>

<p>Naročnik lahko unovči finančno zavarovanje za dobro izvedbo del, če izvajalec svoje obveznosti ne bo izpolnil v dogovorjeni kakovosti, količini in rokih in na način, opredeljen v pogodbi oz. naročilnici. Naročnik lahko finančno zavarovanje unovči tudi v primeru, če izvajalec delno ne izpolni pogodbenih določb.</p>
`,
  },

  {
    id: "8",
    title: "FINANČNA ZAVAROVANJA – ODPRAVA NAPAK V GARANCIJSKI DOBI",
    contentHtml: `
<p>Izvajalec mora po končanju pogodbeno dogovorjenih del/del iz naročilnice, to je ob podpisu primopredajnega zapisnika, naročniku predložiti dogovorjeno finančno zavarovanje za odpravo napak v garancijski dobi v višini 5% končne pogodbene vrednosti brez DDV.</p>

<p>Naročnik priznava sledeče oblike finančnega zavarovanja za odpravo napak v garancijski dobi:</p>

<table>
  <thead>
    <tr>
      <th>Oblika zavarovanja</th>
      <th>Vrednost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bianco menica z menično izjavo</td>
      <td>Za vrednosti do 10.000,00 EUR</td>
    </tr>
    <tr>
      <td>Overjena izvršnica</td>
      <td>Za vrednosti od 10.000,00 EUR do 50.000,00 EUR</td>
    </tr>
    <tr>
      <td>Bančna garancija ali kavcijsko zavarovanje</td>
      <td>Za vrednosti nad 50.000,00 EUR</td>
    </tr>
  </tbody>
</table>

<p>Veljavnost predloženega finančnega zavarovanja mora biti vsaj 60 dni daljša od garancijskega roka iz teh splošnih pogojev.</p>

<p>Zavarovanje za odpravo napak lahko naročnik unovči za vse primere kršitev obveznosti izvajalca, vezanih na odpravo napak, pri čemer v zvezi z višino unovčitve upošteva naravo in obseg kršitve obveznosti. Prav tako lahko naročnik, v primeru, da izvajalec ne poravna svojih obveznosti iz naslova zaračunane pogodbene kazni zaradi zamude (ob končnem obračunu), le te poplača iz naslova predloženega finančnega zavarovanja za odpravo napak v garancijski dobi.</p>
`,
  },

  {
    id: "9",
    title: "POGODBENA KAZEN",
    contentHtml: `
<p>Kadar se izvajalec po svoji krivdi pri izvedbi del ne drži s pogodbo oz. naročilnico dogovorjenih rokov izvedbe del, sme naročnik za vsak dan zamude zahtevati plačilo pogodbene kazni v višini 0,5% pogodbene vrednosti, pri čemer znesek pogodbene kazni za zamudo ne sme preseči 10% pogodbene vrednosti del.</p>

<p>Naročnik je upravičen obračunati pogodbeno kazen v višini 10% pogodbene vrednosti v naslednjih primerih:</p>
<ul>
  <li>če mu izvajalec ni pravočasno predložil finančnega zavarovanja za dobro izvedbo pogodbenih obveznosti.</li>
  <li>če mu izvajalec ni pravočasno predložil finančnega zavarovanja za odpravo napak v garancijski dobi,</li>
</ul>

<p>Naročnik je upravičen obračunati pogodbeno kazen v višini 300 EUR za vsakokratno kršitev v naslednjih primerih:</p>
<ul>
  <li>zaradi nespoštovanja varnostnega načrta na gradbišču in kršitve določil Uredbe o zagotavljanju varnosti in zdravja pri delu na začasnih in premičnih gradbiščih,</li>
  <li>zamude pri predložitvi potrebne dokumentacije o kvaliteti izvedenih del (ateste, poročila pregledov, certifikate, garancijske liste) in tehnično dokumentacijo proizvajalcev, iz katere izhaja, da uporabljeni gradbeni proizvodi izpolnjujejo naročnikove temeljne zahteve s področja graditve objektov.</li>
</ul>
`,
  },

  {
    id: "10",
    title: "ODŠKODNINSKA ODGOVORNOST IZVAJALCA",
    contentHtml: `
<p>V primeru, da naročniku zaradi zamude izvajalca z izvedbo del nastane škoda, ki presega vrednost pogodbene kazni, ima naročnik pravico tudi do povrnitve vse nastale škode nad zneskom pogodbene kazni.</p>

<p>Povračilo tako nastale škode bo naročnik uveljavljal po splošnih načelih odškodninske odgovornosti, neodvisno od uveljavljanja pogodbene kazni.</p>

<p>Ne glede na obveznosti izvajalca, je izvajalec izključno odgovoren in oškoduje naročnika glede vseh terjatev tretjih oseb za materialno škodo ali telesne poškodbe, ki izhajajo iz izvedbe gradbenih del s strani izvajalca, njegovih podizvajalcev in zaposlenih v zvezi z deli po tej pogodbi.</p>
`,
  },

  {
    id: "11",
    title: "ROK IZVEDBE",
    contentHtml: `
<p>Rok za izvedbo del, ki ga pogodbeni stranki opredelita v pogodbi oz. naročilnici se šteje za bistveno sestavino.</p>

<p>Izvajalec se obvezuje, da bo po potrebi, da bi se ujel predvideni rok izvedbe, izvajal dela tudi izven normalnega delovnega časa (poznopopoldanske ure, sobote, nedelje (24/7)), ne da bi zato zahteval dodatna plačila. Izvajalec je dolžan ves čas izvedbe pogodbeno dogovorjenih del zagotavljati zadostno število delavcev, da bodo dela opravljena skladno s potrjenim terminskim planom.</p>

<p>Izvajalec se obvezuje, da kakršna koli dodatna dela, več dela in manj dela niso razlog za podaljšanje roka izvedbe del.</p>

<p>Izvajalec jamči, da bo v dogovorjenem oz. določenem roku v celoti izvedel vsa pogodbena dela/dela ki so predmet naročilnice in je seznanjen s tem, da se rok za izvedbo naročila ne bo podaljšal, razen v primeru, da za to obstajajo utemeljeni in opravičljivi razlogi in pod pogojem, da zamuda ni nastala po krivdi izvajalca, kar bosta naročnik in izvajalec dogovorila pisno in s tem rok za izvedbo naročila podaljšala.</p>

<p>V primeru slabih vremenskih pogojev, ki ne dopuščajo dela v intenziteti terminskega plana, morata predstavnika naročnika in izvajalca z vpisom v gradbeni dnevnik prekiniti dela za dogovorjeni čas. S tem vpisom se mora strinjati vodja projekta investitorja, v nasprotnem primeru je vpis neveljaven. V tem času mora izvajalec poskrbeti, da se zaradi prekinitve del ne povzroča materialna škoda na objektu, ki je predmet pogodbe.</p>

<p>V primeru takšne prekinitve del izvajalec nima pravice do povišanja cen oziroma kakšnega drugega finančnega nadomestila.</p>

<p>Izvajalec ima, v primeru iz prejšnjega odstavka, pravico od naročnika zahtevati podaljšanje roka za dokončanje del, najdlje za čas, za katerega so bila dela, v skladu s prejšnjim odstavkom, prekinjena.</p>
`,
  },

  {
    id: "12",
    title: "OBVEZNOSTI IZVAJALCA",
    contentHtml: `
<p>Izvajalec se s podpisom pogodbe z naročnikom zavezuje:</p>
<ul>
  <li>da bo naročnika pisno obvestil o pričetku in dokončanju del;</li>
  <li>izvajati dela v o dogovorjenem roku, v skladu s projektno dokumentacijo, v visoki kvaliteti, v skladu z veljavnimi predpisi, standardi, gradbenimi normativi, pravili gradbene stroke, ter v skladu s pravilniki in normativi s področja varstva pred požarom;</li>
  <li>da bo dela izvedel strokovno, pravilno in z materialom in opremo, ki mora ustrezati zahtevam standardov ter vrstam, določenih v projektih, kvaliteti in količinam, določenih v popisih del in predračunu;</li>
  <li>da bo ves čas gradnje vodil knjigo obračunskih izmer;</li>
  <li>da bo opozoril naročnika na morebitne pomanjkljivosti ali nepravilnosti, ki je kot strokovno usposobljen izvajalec odkril pri izvajanju pogodbenih del;</li>
  <li>da bo pravočasno pisno obvestil naročnika o vseh spremembah, ki bi imele za posledico drugačen način izvedbe ali povečanje količin ter spremembo pogodbeno dogovorjenih rokov;</li>
  <li>v primeru zamujanja rokov, nedoseganja ustrezne kvalitete ali neizpolnjevanja drugih svojih obveznosti po tej pogodbi, na svoje stroške storiti vse potrebno, da se nadomesti zamujeno ali vzpostavi zahtevana kvaliteta. V nasprotnem primeru je naročnik upravičen na stroške izvajalca angažirati drugega izvajalca ali razdreti pogodbo in od izvajalca izterjati vso škodo, ki bi s tem nastala;</li>
  <li>da bo upošteval strokovne ocene in pripombe nadzornika glede kvalitete izvedenih del in že tekom izvajanja pogodbenih obveznosti, sproti odpravil napake in pomanjkljivosti, na katere ga opozori nadzornik;</li>
  <li>da se mu zaračunajo splošni stroški za ureditev gradbišča v višini 2,3% od vrednosti del in zajemajo izdelavo projekta ureditve gradbišča, izdelavo načrtov začasnih komunalnih priključkov, postavitev gradbiščne table, ureditev dovozne gradbiščne poti vključno s priključkom na javno cesto, ureditev osnovnih komunikacij po gradbišču, postavitev zaščitne ograje gradbišča in vhoda, ureditev začasnih napeljav vode, kanalizacije elektrike ter postavitev sanitarnih objektov; le ti stroški se poračunavajo sprotno, z vsako mesečno situacijo;</li>
  <li>da mu gredo tekoči stroški porabe virov (elektrike, vode, sanitarni objekti, morebitno ogrevanje objektov, odvoz in deponiranje smeti, idr.) v času od začetka del do funkcionalne primopredaje objekta v breme izvajalca po ključu vrednosti del za posamezni sklop del; le ti stroški se poračunavajo sprotno, z vsako mesečno situacijo;</li>
  <li>da se mu zaračuna sorazmerni strošek zavarovanja za objekt ter odgovornosti in sicer v višini 1,0% od vrednosti pogodbenih del, ki se poračunavajo sprotno z vsako mesečno situacijo;</li>
  <li>naročniku predložiti izpolnjen evidenčni list izvajalca, ki je priloga in sestavni del pogodbe/naročilnice, s katerim izvajalec jamči, da imajo njegovi delavci veljavno zdravniško potrdilo in opravljen izpit iz varnosti pri delu;</li>
  <li>da bo pred vgradnjo oziroma najkasneje v roku 3 dni po pozivu s strani naročnika izročil naročniku originale potrebne dokumentacije o kvaliteti izvedenih del (ateste, poročila pregledov, certifikate, garancijske liste ipd.) in tehnično dokumentacijo proizvajalcev, iz katere izhaja, da uporabljeni gradbeni proizvodi izpolnjujejo naročnikove temeljne zahteve, določene v razpisni dokumentaciji ter zahteve s področja graditve objektov;</li>
  <li>zagotoviti vso potrebno delovno in ostalo opremo potrebno za varnost svojih delavcev na gradbišču;</li>
  <li>da bo aktivno sodeloval pri izvedbi tehničnega pregleda in da bo odpravil vse pripombe, ki zadržijo izdajo uporabnega dovoljenja.</li>
</ul>
`,
  },

  {
    id: "13",
    title: "PRIMOPREDAJNI ZAPISNIK OB ZAKLJUČKU POGODBENIH DEL",
    contentHtml: `
<p>O dokončanju in prevzemu del pri investiciji, ki je predmet pogodbe/naročilnice, sestavijo pooblaščeni predstavniki obeh pogodbenih strank primopredajni zapisnik, v katerem natančno ugotovijo predvsem:</p>
<ul>
  <li>navedbo pristojnih pooblaščenih predstavnikov izvajalca, naročnika in nadzornega organa;</li>
  <li>ali izvedena dela ustrezajo določilom te pogodbe/naročilnice, veljavnim zakonskim predpisom in pravilom stroke;</li>
  <li>ali so bili dobavljeni ustrezni materiali in oprema, skladno z zahtevami naročnika;</li>
  <li>ali so bili dobavljeni materiali in oprema ustrezno in kvalitetno vgrajeni;</li>
  <li>datume začetka in končanja del;</li>
  <li>dnevni prekoračitve pogodbenega roka in uveljavljanje pogodbene kazni in škode;</li>
  <li>kakovost izvedenih del in pripombe naročnika v zvezi z njo;</li>
  <li>rok za odpravo pomanjkljivosti in ugotovljenih napak;</li>
  <li>morebitna odprta, med predstavniki pogodbenih strank sporna vprašanja tehnične narave;</li>
  <li>splošne pripombe.</li>
</ul>

<p>V primeru, da se naročnik v roku 8 dni ne odzove pisnemu pozivu izvajalca naj prevzame dela, ko so izpolnjeni vsi zgoraj citirani pogoji, lahko sam sestavi prevzemni zapisnik in ga posreduje naročniku.</p>

<p>Z dnem izročitve zapisnika naročniku nastopijo pravne posledice povezane v izročitvijo in prevzemom del.</p>
`,
  },

  {
    id: "14",
    title: "DODATNA IN NEPREDVIDENA DELA",
    contentHtml: `
<p>Dodatnih del, ki niso opredeljena v pogodbi/naročilnici, izvajalec ne sme začeti izvajati brez predhodnega pisnega soglasja naročnika.</p>

<p>Podlaga za določitev vrednosti več del so cene na enoto iz pogodbe skupaj s popustom, ki ga dodatno ponuja izvajalec. Cene za dodatna dela se določijo v okviru pogajanj med naročnikom in izvajalcem in ne smejo presegati cen na trgu za istovrstna dela, blago in opremo, upoštevaje pogoje, ki so vezani na njihovo naročilo.</p>
`,
  },

  {
    id: "15",
    title: "PREPOVED PRENOSA TERJATEV",
    contentHtml: `
<p>Pogodbeni stranki se v skladu s 417. členom Obligacijskega zakonika izrecno dogovorita, da izvajalec ne sme prenesti na drugega nobenih svojih obstoječih in/ali bodočih terjatev do naročnika, ki jih bo pridobil na podlagi te naročilnice/pogodbe ali kateregakoli dodatka, ki bo v prihodnosti sklenjen k njej. Prepoved prenosa obstoječih in/ali bodočih terjatev na drugega zajema vse primere oziroma oblike odstopa terjatev, vključno z odstopom namesto izpolnitve, odstopom v izterjavo in odstopom v zavarovanje.</p>

<p>Pogodbeni stranki se dogovorita, da za namene te pogodbe/naročilnice bodoča terjatev iz prvega odstavka tega člena pomeni vsako terjatev, ki v trenutku prenosa na drugega še ni nastala, pri čemer se šteje, da terjatev izvajalca do naročnika nastane takrat, ko je izvajalec dela opravil, jih naročniku obračunal z izstavitvijo situacije ter je naročnik izstavljeno situacijo potrdil.</p>

<p>V primeru, da bi izvajalec kljub dogovoru o prepovedi prenosa bodočih terjatev iz prvega odstavka tega člena prenesel katerokoli svojo obstoječo in/ali bodočo terjatev do naročnika na drugega, lahko naročnik s pisno izjavo, ki jo priporočeno po pošti pošlje izvajalcu, s takojšnjim učinkom (brez odpovednega roka) odpove to naročilnico/pogodbo, vključno z vsemi k njej sklenjenimi dodatki.</p>

<p>V primeru, da bi izvajalec kljub dogovoru o prepovedi prenosa obstoječih in/ali bodočih terjatev iz prvega odstavka tega člena prenesel katerokoli svojo obstoječo in/ali bodočo terjatev do naročnika na drugega, je dolžan naročniku plačati pogodbeno kazen v višini celotne pogodbene vrednosti del. Naročnik ima pravico zahtevati plačilo pogodbene kazni ne glede na to, ali je uveljavil pravico do odpovedi pogodbe/naročilnice iz tretjega odstavka tega člena ali ne. Naročnik ima pravico zahtevati pogodbeno kazen tudi, če presega škodo, ki mu je nastala, ali če mu ni nastala nobena škoda.</p>

<p>V primeru, da bi izvajalec kljub dogovoru o prepovedi prenosa obstoječih in/ali bodočih terjatev iz prvega odstavka tega člena prenesel katerokoli svojo obstoječo in/ali bodočo terjatev do naročnika na drugega, je dolžan naročniku v vsakem primeru in ne glede na uveljavitev naročnikovih pravic iz tretjega in četrtega odstavka tega člena povrniti škodo, ki je naročniku nastala zaradi kršitve prepovedi prenosa obstoječih in/ali bodočih terjatev s strani izvajalca. Škoda vključuje tudi (a ne izključno) vse zneske, ki bi jih moral naročnik plačati kateremukoli subjektu (vključno s podizvajalci in prevzemniki terjatev) in bi presegali njegove obveznosti po tej pogodbi in dodatkih, sklenjenih k njej, oziroma zneske, ki bi jih moral naročnik plačati dvakrat, ker bi bila prvotna izpolnitev enemu od subjektov nepravilna, vključno z zakonskimi zamudnimi obrestmi, ki bi jih moral naročnik plačati kateremukoli subjektu. Izvajalec soglaša s tem, da naročnik ni odgovoren za morebitno svojo nepravilno izpolnitev, do katere bi prišlo v primeru kršitve prepovedi prenosa obstoječih in/ali bodočih terjatev s strani izvajalca, zato se izvajalec izrecno obvezuje, da bo naročniku povrnil škodo, ki mu bo nastala v posledici naročnikove nepravilne izpolnitve, ter se odpoveduje vsem ugovorom v zvezi z nepravilno izpolnitvijo naročnika. Če bi bila škoda, ki je naročniku nastala, večja od pogodbene kazni, ima naročnik pravico zahtevati razliko do popolne odškodnine.</p>

<p>Določilo glede prepovedi prenosa obstoječih terjatev ne velja le v primeru izrecnega pisnega soglasja naročnika k prenosu terjatev.</p>

<p>Pogodbeni stranki soglašata s tem, da izvajalec ne odgovarja naročniku in slednji proti njemu ne more uveljaviti sankcij iz tretjega do petega odstavka tega člena v primeru, da bi izvajalčevi podizvajalci odstopili drugemu svoje terjatve do naročnika ali izvajalca.</p>

<p>Pogodbeni stranki ugotavljata, da naročnik ni seznanjen s tem, da bi izvajalec katerakoli dela po tej pogodbi/naročilnici izvedel s podizvajalci, razen za dela, za katera je s to pogodbo izrecno dogovorjeno, da bodo izvedena s podizvajalci. Izvajalec se izrecno zavezuje, da bo sam pravočasno poplačal vse terjatve svojih podizvajalcev, ki se nanašajo na katerakoli dela, za katere s to pogodbo ali z dodatki, ki bodo sklenjeni k tej pogodbi, ni dogovorjeno, da jih bodo izvedli podizvajalci.</p>
`,
  },

  {
    id: "16",
    title: "VARNOST PRI DELU",
    contentHtml: `
<h4>Varnost pri delu</h4>

<p>Izvajalec se je pred uvedbo v delo dolžan seznaniti z varnostnim načrtom, ga upoštevati in spoštovati dogovor o skupnih varnostnih ukrepih na skupnem delovišču ter izvajati pogodbeno dogovorjena dela izključno v skladu z varnostnim načrtom.</p>

<p>Izvajalec je dolžan upoštevati navodila koordinatorja za varnosti in zdravje pri delu in elaborat varnostnega načrta. V nasprotnem primeru vse posledice ravnanj oziroma opustitve ravnanj v zvezi z zdravjem in varnostjo pri delu na gradbišču, ki so v nasprotju z navodili odgovorne osebe za zdravje in varnost pri delu bremenijo izključno izvajalca.</p>

`,
  },
  {
    id: "17",
    title: "ODSTOP OD POGODBE-NAROČILNICE",
    contentHtml: `



  <p><strong>Stranki sta sporazumni, da lahko naročnik odstopi od pogodbe/naročilnice:</strong></p>
  <ul>
    <li>če je naročnik seznanjen, da je pristojni državni organ ali sodišče s pravnomočno odločitvijo ugotovilo kršitev delovne, okoljske ali socialne zakonodaje s strani izvajalca ali njegovega podizvajalca,</li>
    <li>če izvajalec pravočasno ne predloži finančnega zavarovanja za dobro izvedbo pogodbenih obveznosti,</li>
    <li>če izvajalec po pisnem pozivu naročnika in naknadnem, največ 7 dnevnem roku, z deli ne začne ali jih ob morebitni prekinitvi daljši od 10 dni ne nadaljuje,</li>
    <li>če izvajalec po svoji krivdi zamuja z deli več kot 10 dni,</li>
    <li>nastalih zamud po krivdi izvajalca, ki imajo za posledico večjo materialno škodo,</li>
    <li>če jih nadzorni organ že tekom investicije opozori, da izvajalec izvaja dela nestrokovno in vgrajuje materiale, opremo in naprave, ki niso skladni z dokumentacijo ali potrjenimi vzorci ali dela izvaja v nasprotju s pravili stroke in dobro prakso ter s tem ogroža varnost delavcev, mimoidočih, stabilnost objekta ali namerno povzroča škodo na objektu ali drugi infrastrukturi,</li>
    <li>če izven pogodbeno dogovorjenih pogojev in brez soglasja naročnika prepusti izvedbo vseh ali pretežnega dela del podizvajalcem,</li>
    <li>če tekoče ne odpravlja in rešuje odškodninskih zahtevkov, zaradi posegov na tuja zemljišča, povzročeno škodo zaradi nestrokovnega izvajanja del, ali namerno in malomarnosti povzročeno škodo; Izvajalec mora odškodninske zahteve reševati tekoče in sporazumno in o tem tudi redno obveščati nadzor in naročnika,</li>
    <li>če izvajalec ne spoštuje določil pogodbe ali splošnih pogojev naročnika.</li>
  </ul>
  <p>V zgoraj navedenih primerih je izvajalec dolžan plačati pogodbeno kazen v višini deset odstotkov (10 %) pogodbene vrednosti/vrednosti naročilnice.</p>
  <p>Izvajalec je prost odgovornosti, če dokaže, da je prišlo do prekinitve dela ali celo do razdrtja pogodbe/naročilnice zaradi vzrokov, ki jih ni bilo mogoče pričakovati, se jim izogniti ali jih odvrniti (višja sila).</p>
  <p>V primeru da pride do prekinitve del ali celo do razdrtja pogodbe/naročilnice po krivdi ene od pogodbenih strank, nosi nastale stroške tista stranka, ki je povzročila prekinitev dela ali razdrtje.</p>
  <p><strong>Izvajalec sme odstopiti od pogodbe/naročilnice:</strong></p>
  <ul>
    <li>če naročnik ne izpolnjuje svojih obveznosti,</li>
    <li>če mu naročnik, tudi po naknadno postavljenem roku, ki ne more biti krajši od 8 (osem) delovnih dni, ne posreduje navodil v zvezi z njegovimi vprašanji, ki so bistvena za izvedbo del,</li>
    <li>če pride izvajalec v položaj, da ni sposoben opraviti pogodbenih oz. naročenih del.</li>
  </ul>
  <p>Odpoved razmerja mora biti v vsakem primeru pisna. V odpovedi mora biti točno navedeno, na podlagi česa se razmerje iz pogodbe/naročilnice prekinja.</p>


`,
  },
];

function Content({ html }: { html: string }) {
  return (
    <div
      className="
        text-sm sm:text-base text-neutral-700 leading-relaxed

        [&_p]:my-3

        [&_ul]:my-3 [&_ul]:pl-6 [&_ul]:list-disc
        [&_ol]:my-3 [&_ol]:pl-6 [&_ol]:list-decimal
        [&_li]:my-1
        [&_li::marker]:text-neutral-400

        [&_h4]:mt-5 [&_h4]:mb-2 [&_h4]:text-sm [&_h4]:tracking-wide [&_h4]:uppercase [&_h4]:text-neutral-900

        [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-neutral-200
        [&_thead_th]:text-left [&_thead_th]:bg-neutral-100 [&_thead_th]:p-3 [&_thead_th]:border [&_thead_th]:border-neutral-200
        [&_td]:p-3 [&_td]:border [&_td]:border-neutral-200
        [&_th]:border [&_th]:border-neutral-200
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function TermsAccordion() {
  return (
    <div className="space-y-3">
      {ITEMS.map((item) => (
        <details
          key={item.id}
          className="group rounded-2xl border border-neutral-200 bg-white px-5 py-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
            <span className="text-sm sm:text-base font-semibold text-neutral-900">
              {item.title}
            </span>

           <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition">
  <span className="absolute h-[1.5px] w-3 bg-current"></span>
  <span className="absolute h-3 w-[1.5px] bg-current transition group-open:scale-y-0"></span>
</span>
          </summary>

          <div className="mt-4">
            <Content html={item.contentHtml} />
          </div>
        </details>
      ))}
    </div>
  );
}
