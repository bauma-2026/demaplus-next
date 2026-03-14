export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  excerpt?: string;
  featuredImage?: string | null;
  contentHtml?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "novogradnja-objekta-vila-rozna-dolina-condominium",
    title: "Vila Rožna dolina",
    subtitle: "novogradnja večstanovanjskega objekta",
    date: "2023-06-13",
    excerpt:
      "Nizkoenergijski večstanovanjski objekt v Rožni dolini z devetimi stanovanji, leseno konstrukcijo in urejeno zunanjo ureditvijo.",
    featuredImage:
      "/reference/novogradnja-objekta-vila-rozna-dolina-condominium/hero.webp",
    contentHtml: `
      <p>Projekt obsega novogradnjo nizkoenergijskega večstanovanjskega objekta z devetimi stanovanji v ljubljanski Rožni dolini. Objekt vključuje klet, pritličje, dve nadstropji in terasno etažo ter je zasnovan z jasnim poudarkom na kakovosti bivanja in učinkoviti organizaciji prostora.</p>

      <p>V kletni etaži so urejena parkirna mesta, kolesarnica, shrambe, hodniki ter osebno in avtomobilsko dvigalo. Skupno je predvidenih 15 parkirnih mest v kleti, dve parkirni mesti za obiskovalce in eno kratkotrajno parkirno mesto na nivoju terena.</p>

      <p>Objekt je temeljen na betonskih pilotih in temeljni plošči. Stene ter plošča nad kletjo so armiranobetonske izvedbe, preostali nosilni del objekta pa je zasnovan v leseni konstrukciji, tako v stenah kot v stropnih ploščah. Fasada je predvidena v kontaktni izvedbi.</p>

      <p>Dostop do objekta je urejen preko asfaltiranega prometnega priključka, zunanja ureditev pa vključuje tlakovane poti, zelenice, pritlične terase in otroško igrišče.</p>
    `,
  },
  {
    slug: "salon-pohistva-in-hotel-nox",
    title: "Hotel Nox Ljubljana",
    subtitle: "novogradnja hotela in salona pohištva",
    date: "2023-06-13",
    excerpt:
      "Sodoben poslovno-hotelski objekt v Ljubljani z razstavnim salonom pohištva v pritličju in hotelskimi sobami v nadstropjih.",
    featuredImage: "/reference/salon-pohistva-in-hotel-nox/hero.webp",
    contentHtml: `
      <p>Objekt Hotel Nox je zasnovan kot sodoben poslovno-hotelski objekt z razstavnim salonom pohištva v pritličju in hotelskimi sobami v nadstropjih. Etažnost objekta je K + P + 2N, zasnova pa temelji na kompaktnem pravokotnem volumnu z dobrim izkoristkom prostora in ugodnimi energetskimi lastnostmi.</p>

      <p>Klet je namenjena parkiranju in tehničnim prostorom, pritličje razstavnemu salonu pohištva in recepciji hotela, nadstropja pa hotelskim sobam in spremljevalnemu programu. Programska zasnova omogoča jasno ločitev javnega, poslovnega in nastanitvenega dela objekta.</p>

      <p>Nosilna konstrukcija objekta je armiranobetonska skeletna konstrukcija na kvadratnih stebrih. Temeljenje je izvedeno s kombinacijo točkovnih in pasovnih temeljev ter temeljno ploščo pod jaškom dvigala.</p>

      <p>Nadstrešnica in konstrukcija izložbenega prostora sta izvedeni iz jeklenih elementov, pritrjenih na armiranobetonsko konstrukcijo objekta, kar dodatno poudari sodoben arhitekturni izraz stavbe.</p>
    `,
  },
  {
    slug: "hotel-cubo",
    title: "Hotel Cubo",
    subtitle: "rekonstrukcija butičnega hotela v Ljubljani",
    date: "2023-06-13",
    excerpt:
      "Prenova spomeniško zaščitenega objekta v središču Ljubljane v sodoben butični hotel z restavracijo in kavarno.",
    featuredImage: "/reference/hotel-cubo/hero.webp",
    contentHtml: `
      <p>Projekt Hotel Cubo obsega rekonstrukcijo in prenovo objekta v središču Ljubljane v sodoben butični hotel višjega standarda. Projekt je bil zasnovan kot manjši hotel s štirimi zvezdicami, ki poleg nastanitvenega programa vključuje tudi restavracijo in kavarno.</p>

      <p>Objekt stoji na vogalu Slovenske in Erjavčeve ceste in je bil v preteklosti poznan kot hiša dr. F. Luckmanna. Ker gre za spomeniško zaščiten objekt iz leta 1932, je bila pri prenovi posebej pomembna uskladitev sodobnih tehničnih zahtev z varovanjem stavbne dediščine.</p>

      <p>Obstoječa stavba je bila zidana s polno opeko, posamezni konstrukcijski sklopi pa so bili v okviru rekonstrukcije nadomeščeni z novimi jeklenimi in armiranobetonskimi elementi, s čimer je bil objekt prilagojen novi hotelski funkciji in sodobnim standardom uporabe.</p>

      <p>Prenova je omogočila vzpostavitev kakovostnega butičnega hotela v strogem mestnem središču, pri čemer je bila ohranjena identiteta objekta in nadgrajena njegova funkcionalna vrednost.</p>
    `,
  },
  {
    slug: "vila-madeleine",
    title: "Vila Madeleine",
    subtitle: "rekonstrukcija in dozidava stanovanjske vile",
    date: "2023-06-13",
    excerpt:
      "Rekonstrukcija historičnega objekta iz leta 1902 v sodobno večstanovanjsko vilo z osmimi nadstandardnimi stanovanjskimi enotami.",
    featuredImage: "/reference/vila-madeleine/hero.webp",
    contentHtml: `
      <p>Projekt Vila Madeleine obsega rekonstrukcijo in dozidavo historičnega objekta iz leta 1902, ki je bil preoblikovan v sodobno večstanovanjsko vilo z osmimi nadstandardnimi stanovanjskimi enotami.</p>

      <p>Pri zasnovi projekta je bil poudarek na usklajevanju obstoječe arhitekturne identitete objekta s sodobnimi bivalnimi standardi, funkcionalno organizacijo tlorisov in kakovostjo izvedbe.</p>

      <p>Poseg združuje prenovo obstoječega objekta in dozidavo novih površin, s čimer je bila vzpostavljena celovita stanovanjska zasnova višjega standarda.</p>

      <p>Projekt predstavlja primer premišljene nadgradnje obstoječe vile, pri kateri se ohranja značaj stavbe, hkrati pa se objekt prilagodi sodobni uporabi in zahtevam urbanega bivanja.</p>
    `,
  },
  {
    slug: "izvedba-obnove-stavbe-vila-zlatica-v-ljubljani",
    title: "Vila Zlatica",
    subtitle: "obnova historičnega objekta v Ljubljani",
    date: "2023-06-13",
    excerpt:
      "Izvedba GOI del pri obnovi stavbe Vila Zlatica v Ljubljani v skladu s konservatorskimi smernicami in zahtevami varstva kulturne dediščine.",
    featuredImage:
      "/reference/izvedba-obnove-stavbe-vila-zlatica-v-ljubljani/hero.webp",
    contentHtml: `
      <p>Projekt obsega izvedbo gradbeno-obrtniških in inštalacijskih del pri obnovi stavbe Vila Zlatica v Ljubljani, izvedenih v skladu s smernicami konservatorskega načrta.</p>

      <p>Ker gre za objekt kulturne dediščine, je bila pri izvedbi ključna natančna uskladitev vseh posegov z zahtevami varovanja historičnih elementov in arhitekturne identitete stavbe.</p>

      <p>Obnova je bila usmerjena v tehnično prenovo objekta ter v vzpostavitev pogojev za njegovo dolgoročno kakovostno uporabo, ob hkratnem spoštovanju spomeniškovarstvenih zahtev.</p>

      <p>Projekt predstavlja primer odgovorne prenove historičnega objekta, kjer sta strokovna izvedba in občutljiv odnos do dediščine enako pomembna.</p>
    `,
  },
  {
    slug: "izvedba-gradbeno-obrtniskih-in-instalacijskih-del-ter-zunanje-ureditve-pri-gradnji-objekta-na-stolbi-8-v-ljubljani",
    title: "Stolba",
    subtitle: "gradnja objekta in zunanja ureditev v Ljubljani",
    date: "2023-06-13",
    excerpt:
      "Izvedba gradbeno-obrtniških in inštalacijskih del ter zunanje ureditve pri gradnji objekta Na Stolbi 8 v Ljubljani, vključno z dobavo in montažo opreme.",
    featuredImage:
      "/reference/izvedba-gradbeno-obrtniskih-in-instalacijskih-del-ter-zunanje-ureditve-pri-gradnji-objekta-na-stolbi-8-v-ljubljani/hero.webp",
    contentHtml: `
      <p>Projekt obsega izvedbo gradbeno-obrtniških in inštalacijskih del ter zunanje ureditve pri gradnji objekta Na Stolbi 8 v Ljubljani. V sklop projekta sta bili vključeni tudi dobava in montaža opreme objekta.</p>

      <p>Izvedba je zahtevala usklajeno vodenje različnih gradbenih in inštalacijskih faz, pri čemer je bil poudarek na kakovostni izvedbi objekta in njegovi funkcionalni zaključitvi.</p>

      <p>Poleg same gradnje objekta je pomemben del projekta predstavljala tudi zunanja ureditev, ki zaključuje prostorski okvir stavbe in izboljšuje uporabniško izkušnjo objekta.</p>

      <p>Projekt predstavlja celovito izvedbo objekta, kjer so gradbena dela, tehnične rešitve in oprema povezani v enoten in funkcionalen rezultat.</p>
    `,
  },
  {
    slug: "center-obala-debeli-rtic",
    title: "Center Obala Debeli rtič",
    subtitle: "novogradnja centra za bivanje in varstvo",
    date: "2023-06-13",
    excerpt:
      "Novogradnja centra za bivanje in varstvo oseb z motnjami v duševnem razvoju z nastanitvenimi, zdravstvenimi, upravnimi in delovnimi prostori.",
    featuredImage: "/reference/center-obala-debeli-rtic/hero.webp",
    contentHtml: `
      <p>Center Obala Debeli rtič je namenjen bivanju in varstvu oseb z zmerno, težjo in težko motnjo v duševnem razvoju. V novozgrajenem centru je zagotovljen prostor za bivanje 24 odraslih varovancev.</p>

      <p>Objekt je zasnovan v treh etažah, pri čemer klet vključuje servisne in tehnične prostore ter prostore za zdravstveno varstvo, pritličje dnevni center z vzgojno-izobraževalnim in upravnim programom, nadstropje pa bivalne skupine in delovno enoto.</p>

      <p>Tlorisna zasnova objekta je amforne oblike, kar prispeva k prepoznavni arhitekturni identiteti in funkcionalni organizaciji programa. Objekt je v konstrukcijskem smislu zasnovan kot armiranobetonska troetažna konstrukcija.</p>

      <p>Projekt predstavlja pomembno socialno in infrastrukturno investicijo, namenjeno ustvarjanju kakovostnega, varnega in prilagojenega okolja za uporabnike centra.</p>
    `,
  },
  {
    slug: "pionirski-dom-art-center",
    title: "Pionirski dom Art center",
    subtitle: "obnova vile Komenskega 9",
    date: "2023-06-13",
    excerpt:
      "Obnova vile Komenskega 9 v Ljubljani za potrebe sodobno urejenega Art centra, namenjenega ustvarjalnim, izobraževalnim in razstavnim dejavnostim.",
    featuredImage: "/reference/pionirski-dom-art-center/hero.webp",
    contentHtml: `
      <p>Projekt je obsegal obnovo vile Komenskega 9 v Ljubljani, v kateri danes deluje Art center Pionirskega doma. Objekt je bil prenovljen za izvajanje dejavnosti spodbujanja ustvarjalnosti otrok, mladih in odraslih na različnih umetniških področjih.</p>

      <p>Program centra vključuje likovne, kiparske, grafične, glasbene, filmske, literarne in uprizoritvene dejavnosti, prostor pa je namenjen tudi predstavitvi likovnega ustvarjanja otrok iz vrtcev in osnovnih šol.</p>

      <p>Prenova je bila usmerjena v funkcionalno ureditev objekta za sodobne ustvarjalne in izobraževalne vsebine, ob hkratnem ohranjanju značaja obstoječe vile.</p>

      <p>Projekt predstavlja primer kakovostne prilagoditve obstoječega objekta novemu javnemu in kulturnemu programu.</p>
    `,
  },
  {
    slug: "svicarija",
    title: "Švicarija",
    subtitle: "prenova objekta za umetniški center",
    date: "2022-06-13",
    excerpt:
      "Prenova nekdanjega hotela Švicarija v umetniški center z ateljeji, umetniškimi rezidencami in javnim programom v Ljubljani.",
    featuredImage: "/reference/svicarija/hero.webp",
    contentHtml: `
      <p>Mestna občina Ljubljana je s prenovo nekdanjega hotela Švicarija pridobila več kot 2.200 m² obnovljenih površin za potrebe umetniškega centra.</p>

      <p>V prenovljenem objektu so urejeni kiparski in slikarski ateljeji, ateljeji za mlade umetnike ter umetniške rezidence za mednarodno izmenjavo. Celotno pritličje je namenjeno javnemu programu, razstavam, prireditvam in izobraževalnim vsebinam.</p>

      <p>Projekt je združil prenovo historičnega objekta in vzpostavitev sodobnega kulturnega programa, ki pomembno dopolnjuje umetniško infrastrukturo mesta.</p>

      <p>Švicarija danes predstavlja prepoznaven primer prenove stavbne dediščine za potrebe sodobne kulturne in ustvarjalne rabe.</p>
    `,
  },
  {
    slug: "izvedba-goi-del-ter-zu-za-objekt-cetrtne-skupnosti-golovec-v-ljubljani",
    title: "Center Četrtne skupnosti Golovec",
    subtitle: "GOI dela in zunanja ureditev",
    date: "2022-03-04",
    excerpt:
      "Izvedba gradbeno-obrtniških in inštalacijskih del ter zunanje ureditve za objekt Centra Četrtne skupnosti Golovec v Ljubljani.",
    featuredImage:
      "/reference/izvedba-goi-del-ter-zu-za-objekt-cetrtne-skupnosti-golovec-v-ljubljani/hero.webp",
    contentHtml: `
      <p>Projekt obsega izvedbo gradbeno-obrtniških in inštalacijskih del ter zunanje ureditve za objekt Centra Četrtne skupnosti Golovec v Ljubljani.</p>

      <p>Izvedba je bila usmerjena v kakovostno tehnično realizacijo objekta, ki služi lokalni skupnosti in omogoča izvajanje različnih družbenih, organizacijskih in javnih dejavnosti.</p>

      <p>Pomemben del projekta je predstavljala tudi zunanja ureditev, ki dopolnjuje funkcionalnost objekta in njegovo vključitev v širši prostorski kontekst.</p>

      <p>Gre za primer javnega objekta, kjer sta natančna izvedba in usklajenost različnih del ključni za končni rezultat.</p>
    `,
  },
  {
    slug: "hisa-soncek-vincarjeva",
    title: "Hiša Sonček",
    subtitle: "bivalni objekt za osebe z oviranostmi",
    date: "2022-03-04",
    excerpt:
      "Nizkoenergijski bivalni objekt za osebe z oviranostmi, zasnovan v sodelovanju z organizacijo Sonček in prilagojen posebni rabi.",
    featuredImage: "/reference/hisa-soncek-vincarjeva/hero.webp",
    contentHtml: `
      <p>Hiša Sonček je bila zasnovana kot bivalni objekt za osebe z oviranostmi v sodelovanju z Zvezo društev za cerebralno paralizo – Sonček. Objekt omogoča bivanje 14 uporabnikom in je prilagojen njihovim vsakodnevnim potrebam.</p>

      <p>Stavba je zgrajena po sistemu ISORAST in dosega standarde nizkoenergijske gradnje. Posebna pozornost je bila namenjena funkcionalni zasnovi prostora ter dostopnosti in udobju uporabnikov.</p>

      <p>Ob objektu je urejen tudi zunanji vrt, prilagojen osebam z oviranostmi, kar dodatno izboljšuje kakovost bivanja in uporabo zunanjega prostora.</p>
    `,
  },
  {
    slug: "gradnja-vrtca-v-bohinjski-bistrici",
    title: "Vrtec Bohinjska Bistrica",
    subtitle: "gradnja lesenega montažnega vrtca",
    date: "2022-03-04",
    excerpt:
      "Nov lesen montažni vrtec v Bohinjski Bistrici z enajstimi oddelki, večnamenskim prostorom in urejeno zunanjo ureditvijo.",
    featuredImage: "/reference/gradnja-vrtca-v-bohinjski-bistrici/hero.webp",
    contentHtml: `
      <p>Projekt obsega gradnjo lesenega montažnega vrtca v Bohinjski Bistrici. Novi enajstoddelčni vrtec je zasnovan v obliki treh med seboj povezanih objektov, ki omogočajo jasno funkcionalno organizacijo programa.</p>

      <p>V objektu so urejene igralnice za prvo in drugo starostno obdobje, večnamenski prostor, servisni prostori in kuhinja. Zasnova omogoča kakovostno uporabo prostora tako za otroke kot za zaposlene.</p>

      <p>Ob stavbi so urejeni tudi trata, igrišče, pokrita učilnica na prostem in parkirišče, kar projekt dopolnjuje v celovito vzgojno okolje.</p>
    `,
  },
  {
    slug: "projektiranje-in-gradnja-montaznega-vrtca-grgar",
    title: "Vrtec Grgar",
    subtitle: "projektiranje in izgradnja montažnega vrtca",
    date: "2022-03-04",
    excerpt:
      "Projektiranje in izvedba montažnega vrtca z vso zahtevano opremo ter pridobitvijo upravnih dovoljenj za predajo objekta naročniku.",
    featuredImage:
      "/reference/projektiranje-in-gradnja-montaznega-vrtca-grgar/hero.webp",
    contentHtml: `
      <p>Projekt obsega projektiranje in izvedbo vseh potrebnih gradbeno-obrtniških del za izgradnjo montažnega vrtca v Grgarju.</p>

      <p>V sklopu izvedbe je bila vključena tudi dobava vse zahtevane opreme ter pridobitev vseh potrebnih upravnih dovoljenj za predajo objekta naročniku.</p>

      <p>Gre za celovito realizacijo vzgojnega objekta, pri kateri so bili načrtovanje, izvedba in zaključna priprava objekta povezani v enoten projektni proces.</p>
    `,
  },
  {
  slug: "projektiranje-in-izgradnja-montaznega-lesenega-stanovanjsko-poslovnega-kompleksa-polje-iv",
  title: "Polje IV",
  subtitle: "montažni stanovanjsko-poslovni kompleks",
  date: "2022-03-04",
  excerpt:
    "Večstanovanjski lesen kompleks s 48 stanovanji, 16 bivalnimi enotami ter knjižnico in lekarno v pritličju.",
  featuredImage:
    "/reference/projektiranje-in-izgradnja-montaznega-lesenega-stanovanjsko-poslovnega-kompleksa-polje-iv/hero.webp",
  contentHtml: `
    <p>Projekt obsega projektiranje in izgradnjo montažnega lesenega stanovanjsko-poslovnega kompleksa Polje IV. Objekt združuje večstanovanjski program z javnimi vsebinami v pritličju, kjer sta predvideni knjižnica in lekarna.</p>

    <p>V dveh ločenih stanovanjskih lamelah je nad pritličjem predvidenih 48 stanovanj in 16 bivalnih enot, razporejenih v več etažah. Zasnova je usmerjena v racionalno organizacijo programa, kakovost bivanja in učinkovito umeščanje skupnih zunanjih površin.</p>

    <p>Konstrukcijski sistem temelji na kombinaciji armiranobetonske kleti ter prefabriciranih lesenih križno lepljenih stenskih in stropnih elementov v nadzemnem delu objekta. Projekt predstavlja primer sodobne večstanovanjske gradnje z izrazitim poudarkom na leseni montažni izvedbi.</p>
  `,
},
{
  slug: "zmajev-brlog-na-ljubljanskem-gradu",
  title: "Zmajev brlog",
  subtitle: "prenova prostora na Ljubljanskem gradu",
  date: "2022-03-04",
  excerpt:
    "Prenova historičnega grajskega prostora v ustvarjalno in pedagoško okolje za otroške delavnice in javni program.",
  featuredImage:
    "/reference/zmajev-brlog-na-ljubljanskem-gradu/hero.webp",
  contentHtml: `
    <p>Projekt obsega prenovo dela Ljubljanskega gradu, imenovanega Zmajev brlog, v sodoben prostor za ustvarjalne, pedagoške in počitniške dejavnosti. Gre za historičen grajski prostor, ki do prenove še ni bil celovito obnovljen.</p>

    <p>Pri zasnovi je bil poudarek na spoštljivem odnosu do obstoječe stavbne substance ter na prilagoditvi prostora sodobni javni rabi. Obnovljeni ambient omogoča izvajanje ustvarjalnih delavnic, praznovanj, vzgojno-izobraževalnih programov in spremljevalnih vsebin ob razstavah.</p>

    <p>Projekt predstavlja primer kakovostne prenove kulturne dediščine, kjer se historičen prostor preoblikuje v funkcionalno, privlačno in vsebinsko bogato okolje za mlajše obiskovalce.</p>
  `,
},
{
  slug: "hribarjeva-dvorana-na-ljubljanskem-gradu",
  title: "Hribarjeva dvorana",
  subtitle: "prenova večnamenske dvorane na Ljubljanskem gradu",
  date: "2022-03-04",
  excerpt:
    "Prenovljena večnamenska dvorana za kulturne dogodke, sprejeme, predavanja in druge reprezentančne programe.",
  featuredImage:
    "/reference/hribarjeva-dvorana-na-ljubljanskem-gradu/hero.webp",
  contentHtml: `
    <p>Projekt obsega prenovo Hribarjeve dvorane na Ljubljanskem gradu, namenjene različnim kulturnim, protokolarnim in javnim dogodkom. Prostor je zasnovan kot prilagodljiva večnamenska dvorana z možnostjo različnih postavitev.</p>

    <p>Dvorana je opremljena s premičnimi dvižnimi odri, ki omogočajo sestavo tribune ali različnih odrskih konfiguracij. Zaradi svoje prostorske zasnove je primerna za predavanja, simpozije, predstavitve, modne revije, novinarske konference in druge dogodke.</p>

    <p>Projekt predstavlja premišljeno nadgradnjo historičnega prostora z novimi funkcionalnimi elementi, ki omogočajo sodobno uporabo brez izgube reprezentančnega značaja ambienta.</p>
  `,
},
{
  slug: "muzej-in-prezentacija-lutk-na-ljubljanskem-gradu",
  title: "Muzej lutk",
  subtitle: "muzej in prezentacija lutk na Ljubljanskem gradu",
  date: "2022-03-04",
  excerpt:
    "Muzejski projekt na Ljubljanskem gradu, posvečen predstavitvi slovenske lutkovne dediščine.",
  featuredImage:
    "/reference/muzej-in-prezentacija-lutk-na-ljubljanskem-gradu/hero.webp",
  contentHtml: `
    <p>Projekt obsega ureditev Muzeja lutk na Ljubljanskem gradu, namenjenega predstavitvi slovenske lutkovne dediščine. Muzej združuje razstavno funkcijo in širši kulturni pomen sistemskega ohranjanja lutkovne umetnosti.</p>

    <p>Prostorska zasnova je prilagojena muzejski predstavitvi eksponatov ter obiskovalcem omogoča pregledno in vsebinsko bogato doživetje razstave. Projekt povezuje historično okolje gradu s sodobno muzejsko interpretacijo kulturne vsebine.</p>

    <p>Gre za večplasten kulturni projekt, ki nadgrajuje javni program Ljubljanskega gradu in prispeva k ohranjanju ter prezentaciji pomembnega dela slovenske umetniške dediščine.</p>
  `,
},
{
  slug: "porocne-dvorane-na-ljubljanskem-gradu",
  title: "Poročne dvorane",
  subtitle: "obnova poročnih dvoran na Ljubljanskem gradu",
  date: "2022-03-04",
  excerpt:
    "Obnova reprezentančnih poročnih prostorov na Ljubljanskem gradu z ohranitvijo njihovega zgodovinskega značaja.",
  featuredImage:
    "/reference/porocne-dvorane-na-ljubljanskem-gradu/hero.webp",
  contentHtml: `
    <p>Projekt obsega obnovo poročnih dvoran na Ljubljanskem gradu, ki sodijo med pomembne reprezentančne prostore za civilne poroke in protokolarne dogodke. Prenova je bila usmerjena v ohranjanje dostojanstvenega značaja prostora ter izboljšanje njegove funkcionalnosti.</p>

    <p>Posegi so zajemali obnovo dotrajanih elementov in prilagoditve, potrebne za kakovostno nadaljnjo uporabo dvoran. Pri projektu je bil ključen uravnotežen pristop med tehnično posodobitvijo in spoštovanjem obstoječe arhitekturne identitete.</p>

    <p>Projekt predstavlja primer občutljive prenove historičnega ambienta, namenjenega javni in ceremonialni uporabi.</p>
  `,
},
{
  slug: "pokrito-igrisce-druzinski-center-mala-ulica",
  title: "Mala ulica",
  subtitle: "prenova pokritega otroškega igrišča",
  date: "2022-03-04",
  excerpt:
    "Prenova historičnih prostorov v Ljubljani v sodobno pokrito otroško igrišče in družinski center.",
  featuredImage:
    "/reference/pokrito-igrisce-druzinski-center-mala-ulica/hero.webp",
  contentHtml: `
    <p>Projekt obsega prenovo historičnih prostorov na Mali ulici v Ljubljani v sodoben družinski center s pokritim otroškim igriščem. Prostor je bil preoblikovan v igrivo, večnamensko in vsebinsko bogato notranje okolje za otroke in družine.</p>

    <p>Prenova je potekala pod nadzorom služb za varstvo kulturne dediščine, zato je bil pomemben del projekta usklajevanje sodobnih vsebin z obstoječim historičnim ambientom. Nova prostorska ureditev vključuje igralne, izobraževalne in spremljevalne družinske vsebine.</p>

    <p>Projekt predstavlja uspešno preobrazbo nekdanjega mestnega prostora v kakovosten javni program za najmlajše uporabnike in njihove spremljevalce.</p>
  `,
},
{
  slug: "solski-hotel-astoria-bled",
  title: "Hotel Astoria Bled",
  subtitle: "prenova šolskega hotela",
  date: "2022-03-04",
  excerpt:
    "Prenova hotelskega in kuhinjskega dela šolskega hotela Astoria za sodobne nastanitvene in izobraževalne potrebe.",
  featuredImage:
    "/reference/solski-hotel-astoria-bled/hero.webp",
  contentHtml: `
    <p>Projekt obsega fazno prenovo Šolskega hotela Astoria Bled, pri kateri je bil predmet del predvsem hotelski sobni del ter kuhinjski sklop s spremljevalnimi prostori. Namen prenove je bil izboljšati funkcionalnost in kakovost hotelskega programa.</p>

    <p>Prenova je bila izvedena v skladu s potrebami sodobnega hotelskega standarda ter izobraževalnega programa, ki poteka v okviru ustanove. Posegi so zajemali rekonstrukcijo dela obstoječega objekta in izvedbo novega prizidka.</p>

    <p>Projekt predstavlja nadgradnjo obstoječega hotelskega objekta z jasnim poudarkom na uporabnosti, tehnični posodobitvi in kakovosti bivanja.</p>
  `,
},
{
  slug: "siritev-pokopalisca-vic-goi-dela",
  title: "Pokopališče Vič",
  subtitle: "širitev pokopališča in GOI dela",
  date: "2022-03-04",
  excerpt:
    "Širitev pokopališkega kompleksa z novim poslovilnim objektom, ploščadjo, grobnimi polji in zunanjo ureditvijo.",
  featuredImage:
    "/reference/siritev-pokopalisca-vic-goi-dela/hero.webp",
  contentHtml: `
    <p>Projekt obsega širitev pokopališča Vič z izvedbo gradbeno-obrtniških in inštalacijskih del ter celovite zunanje ureditve. V sklopu investicije je bil zgrajen nov poslovilni objekt in urejena poslovilna ploščad.</p>

    <p>Projekt vključuje tudi ureditev novih grobnih polj, žarnih niš, parkirnih mest ter spremljajoče prometne in krajinske ureditve. Posegi so bili načrtovani z namenom funkcionalne razširitve obstoječega pokopališkega prostora in izboljšanja uporabniške izkušnje obiskovalcev.</p>

    <p>Gre za javni infrastrukturni projekt, pri katerem so bili prostorska urejenost, dostojanstven značaj ambienta in tehnična kakovost izvedbe enako pomembni.</p>
  `,
},
{
  slug: "zdravstveni-dom-slovenska-bistrica",
  title: "Zdravstveni dom Slovenska Bistrica",
  subtitle: "energetska sanacija zdravstvenega doma",
  date: "2022-03-04",
  excerpt:
    "Celovita energetska sanacija zdravstvenega kompleksa z obnovo ovoja stavb in prenovo strojnih inštalacij.",
  featuredImage:
    "/reference/zdravstveni-dom-slovenska-bistrica/hero.webp",
  contentHtml: `
    <p>Projekt obsega energetsko sanacijo Zdravstvenega doma Slovenska Bistrica, ki je vključevala obnovo fasadnega ovoja, prenovo strojnih inštalacij ter druga spremljajoča gradbeno-obrtniška dela. Objekt sestavlja več medsebojno povezanih stavb v enotnem zdravstvenem kompleksu.</p>

    <p>Namen projekta je bil zmanjšati energetske izgube, izboljšati pogoje uporabe ter povečati učinkovitost delovanja objekta. Posegi so zajemali toplotno zaščito stavbnega ovoja, zamenjavo stavbnega pohištva in posodobitev tehničnih sistemov.</p>

    <p>Projekt predstavlja primer celovite energetske prenove javnega objekta z jasnim poudarkom na dolgoročni učinkovitosti in kakovosti notranjega okolja.</p>
  `,
},
{
  slug: "dso-ljubljana-bezigrad",
  title: "DSO Ljubljana Bežigrad",
  subtitle: "adaptacija bivalnih prostorov doma starejših",
  date: "2022-03-04",
  excerpt:
    "Adaptacija prostorov doma starejših z izboljšanjem funkcionalnosti, prenovo sanitarij in nadgradnjo bivalnega standarda.",
  featuredImage: "/reference/dso-ljubljana-bezigrad/hero.webp",
  contentHtml: `
    <p>Projekt obsega adaptacijo prostorov tretjega in četrtega nadstropja DSO Ljubljana Bežigrad. Posegi so bili usmerjeni v izboljšanje funkcionalnosti prostorov in kakovosti bivanja stanovalcev, pri čemer je dom med izvedbo del normalno obratoval.</p>

    <p>V okviru projekta so bile prenovljene sanitarije, zamenjane talne obloge, izboljšani skupni prostori bivalnih enot ter izvedene prilagoditve za doseganje zahtevanih tehničnih standardov socialnovarstvenih storitev.</p>

    <p>Pomemben del prenove je obsegal tudi zagotavljanje požarnih sektorjev, zamenjavo in razširitev notranjih vrat ter obnovo opreme, kar je prispevalo k večji varnosti in boljši uporabniški izkušnji objekta.</p>

    <p>Projekt predstavlja premišljeno prenovo obstoječega institucionalnega objekta, usmerjeno v boljše pogoje bivanja in sodobnejšo organizacijo prostora.</p>
  `,
},
{
  slug: "dso-ljubljana-vic-rudnik-enota-bokalce",
  title: "DSO Ljubljana Vič-Rudnik – Enota Bokalce",
  subtitle: "energetska prenova in preureditev doma starejših",
  date: "2022-03-04",
  excerpt:
    "Energetska prenova objekta doma starejših s preureditvijo bivalnih prostorov, sanitarij in tehničnih sistemov.",
  featuredImage: "/reference/dso-ljubljana-vic-rudnik-enota-bokalce/hero.webp",
  contentHtml: `
    <p>Projekt obsega energetsko prenovo objekta DSO Ljubljana Vič-Rudnik, enota Bokalce, ter preureditev bivalnih in sanitarnih prostorov. Posegi so bili usmerjeni v izboljšanje bivalnega standarda, energetske učinkovitosti in tehnične posodobitve objekta.</p>

    <p>V okviru prenove so bile izvedene izolacija fasade, zamenjava stavbnega pohištva, izolacija podstrešja, sanacija tal in ureditev prezračevanja sob. Posodobljeni so bili tudi sistemi razsvetljave, regulacije in upravljanja z energijo.</p>

    <p>Objekt depandanse je bil zgrajen leta 1984 in je konstrukcijsko zasnovan z armiranobetonskimi slopi in stebri ter zidanimi nosilnimi stenami. Projekt je obstoječo stavbo nadgradil z novimi energetskimi in funkcionalnimi rešitvami brez spremembe njenega osnovnega značaja.</p>

    <p>Gre za primer celovite prenove institucionalnega objekta, kjer se energetska učinkovitost povezuje z boljšimi pogoji bivanja uporabnikov.</p>
  `,
},
{
  slug: "os-nove-fuzine",
  title: "OŠ Nove Fužine",
  subtitle: "prenova in nadgradnja šolskega objekta",
  date: "2022-03-04",
  excerpt:
    "Prenova obstoječega šolskega objekta z nadgradnjo prostorskih in tehničnih rešitev za sodobnejše izvajanje pouka.",
  featuredImage: "/reference/os-nove-fuzine/hero.webp",
  contentHtml: `
    <p>Projekt OŠ Nove Fužine obsega prenovo in nadgradnjo šolskega objekta z namenom izboljšanja funkcionalnosti, prostorskih pogojev in tehnične kakovosti stavbe. Posegi so usmerjeni v prilagoditev objekta sodobnim zahtevam šolskega programa.</p>

    <p>Šolski objekt je bil zasnovan kot razgibana celota več medsebojno povezanih sklopov, zato je bila pri prenovi ključna uskladitev različnih prostorskih in konstrukcijskih značilnosti obstoječe stavbe.</p>

    <p>Projekt vključuje izboljšave učnih, skupnih in spremljevalnih prostorov ter nadgradnjo posameznih tehničnih in funkcionalnih sklopov, pomembnih za kakovostno uporabo objekta.</p>

    <p>Gre za poseg, ki obstoječo šolsko infrastrukturo nadgrajuje v bolj sodoben, učinkovit in uporabnikom prijaznejši prostor.</p>
  `,
},
{
  slug: "vrtec-laporje",
  title: "Vrtec Laporje",
  subtitle: "gradnja sodobnega atrijskega vrtca",
  date: "2022-03-04",
  excerpt:
    "Atrijsko zasnovan vrtec s štirimi oddelki, večnamenskim prostorom, upravo in urejeno zunanjo ureditvijo.",
  featuredImage: "/reference/vrtec-laporje/hero.webp",
  contentHtml: `
    <p>Projekt obsega gradnjo vrtca Laporje, zasnovanega kot sodoben atrijski objekt s štirimi oddelki in vsemi pripadajočimi spremljevalnimi prostori. Objekt je organiziran v več funkcionalnih sklopih, prilagojenih različnim starostnim obdobjem otrok.</p>

    <p>Vzhodni del je namenjen mlajšim otrokom, južni starejšim, osrednji prostor pa večnamenskemu programu. V objektu so urejeni tudi gospodarski prostori, uprava, prostori za zaposlene ter spremljevalna infrastruktura za vsakodnevno delovanje vrtca.</p>

    <p>Zunanja ureditev vključuje parkirna mesta in igralne površine, ki omogočajo raznolike dejavnosti, socialne stike in kakovostno uporabo odprtega prostora v skladu s programom vrtca.</p>

    <p>Projekt predstavlja uravnoteženo zasnovo sodobnega vzgojnega objekta, v katerem so funkcionalnost, prostorska preglednost in prijetno okolje za otroke enakovredno poudarjeni.</p>
  `,
},
{
  slug: "izgradnja-sportnega-centra-luce",
  title: "Športni center Luče",
  subtitle: "izgradnja večnamenskega športnega centra",
  date: "2022-03-04",
  excerpt:
    "Nov športni center z več kot 1000 m² pokritih športnih in večnamenskih površin za potrebe lokalne skupnosti.",
  featuredImage: "/reference/izgradnja-sportnega-centra-luce/hero.webp",
  contentHtml: `
    <p>Projekt obsega izgradnjo novega športnega centra v Lučah, s katerim je občina pridobila več kot 1000 kvadratnih metrov novih pokritih športnih in večnamenskih površin. Objekt je zasnovan kot dvoetažen volumen za športne in spremljevalne dejavnosti.</p>

    <p>Programsko je center namenjen športnim aktivnostim, rekreaciji in dogodkom lokalne skupnosti. Prostorska zasnova omogoča jasno organizacijo glavne dvorane in spremljevalnih servisnih prostorov.</p>

    <p>Konstrukcija športne dvorane je sestavljena iz armiranobetonskih sten in lesene strešne konstrukcije z lepljenimi nosilci, kar objektu daje kombinacijo robustnosti in sodobnega arhitekturnega izraza.</p>

    <p>Projekt predstavlja pomembno javno investicijo v športno infrastrukturo in kakovostno dopolnitev prostora za skupnostno rabo.</p>
  `,
},
{
  slug: "sportna-dvorana-podmezakla",
  title: "Športna dvorana Podmežakla",
  subtitle: "obnova in posodobitev športne dvorane",
  date: "2022-03-04",
  excerpt:
    "Obnova športne dvorane z nadgradnjo pogojev za različne športne dejavnosti in večja tekmovanja.",
  featuredImage: "/reference/sportna-dvorana-podmezakla/hero.webp",
  contentHtml: `
    <p>Projekt obsega drugo fazo investicije v Športno dvorano Podmežakla, usmerjeno v obnovo dotrajanih delov objekta in njegovo posodobitev za sodobno športno rabo. Cilj prenove je bil izboljšati funkcionalnost dvorane ter omogočiti uporabo za različne športne panoge in večje prireditve.</p>

    <p>Posegi so bili načrtovani tako, da dvorana lahko gosti uporabnike vseh starostnih skupin in različnih ravni športne dejavnosti, vključno z mednarodnimi tekmovanji. Projekt je prispeval tudi k večji večnamenskosti športnega prostora.</p>

    <p>Prenova je pomembno nadgradila obstoječo športno infrastrukturo in izboljšala pogoje za izvajanje športnih, rekreativnih in organizacijskih programov.</p>

    <p>Gre za projekt, ki je obstoječi objekt prenovil v sodobnejši in zmogljivejši športni center širšega pomena.</p>
  `,
},
{
  slug: "sportni-park-kodeljevo",
  title: "Športni park Kodeljevo",
  subtitle: "energetska sanacija športnega objekta",
  date: "2022-03-04",
  excerpt:
    "Energetska sanacija športnega objekta z obnovo ovoja stavbe, zamenjavo stavbnega pohištva in tehnično posodobitvijo.",
  featuredImage: "/reference/sportni-park-kodeljevo/hero.webp",
  contentHtml: `
    <p>Projekt obsega energetsko sanacijo objekta v Športnem parku Kodeljevo. Obstoječa stavba je bila deloma zidana, deloma montažna z jekleno konstrukcijo, zato je bila prenova usmerjena v izboljšanje energetskih lastnosti brez poseganja v osnovne gabarite objekta.</p>

    <p>V okviru projekta so bili zamenjani elementi stavbnega pohištva, izvedena nova fasadna obloga, dodatna toplotna izolacija strehe ter drugi ukrepi za zmanjšanje toplotnih izgub in izboljšanje obratovalne učinkovitosti stavbe.</p>

    <p>Pomemben del investicije je bila tudi tehnična posodobitev zunanjega ovoja, s katero se je izboljšala trajnost, funkcionalnost in vizualna podoba športnega objekta.</p>

    <p>Projekt predstavlja primer celovite energetske nadgradnje obstoječe športne infrastrukture v urbanem okolju.</p>
  `,
},
{
  slug: "vecnamenska-dvorana-os-koroski-jeklarji-podruznica-kotlje",
  title: "Večnamenska dvorana Kotlje",
  subtitle: "novogradnja večnamenske dvorane ob šoli",
  date: "2022-03-04",
  excerpt:
    "Nova večnamenska dvorana za športne, kulturne in družabne dejavnosti ob osnovni šoli in vrtcu v Kotljah.",
  featuredImage:
    "/reference/vecnamenska-dvorana-os-koroski-jeklarji-podruznica-kotlje/hero.webp",
  contentHtml: `
    <p>Projekt obsega novogradnjo večnamenske dvorane ob Osnovni šoli Kotlje in Vrtcu Kotlje. Dvorana je namenjena športnim, kulturnim, družabnim in medgeneracijskim dejavnostim ter predstavlja pomembno dopolnitev lokalne javne infrastrukture.</p>

    <p>V objektu so urejeni športni del z glavno dvorano in spremljevalnimi garderobami ter sanitarijami, kulturni del z odrom in družabnimi prostori ter dodatni prostori za klubske in organizacijske dejavnosti. Zasnova omogoča prilagodljivo uporabo za različne programe.</p>

    <p>Objekt je zasnovan z izrazitim poudarkom na leseni konstrukciji in uporabi naravnih materialov, kar prispeva k njegovi energetski učinkovitosti in prostorski kakovosti.</p>

    <p>Projekt predstavlja sodobno večnamensko javno stavbo, ki povezuje šport, kulturo in skupnostno življenje v enem prostoru.</p>
  `,
},
{
  slug: "dvorana-za-kulturne-druzbene-in-sportne-aktivnosti-gorenja-vas",
  title: "Dvorana Gorenja vas",
  subtitle: "večnamenska dvorana za kulturne in športne aktivnosti",
  date: "2022-03-04",
  excerpt:
    "Nova večnamenska dvorana s tribunami in spremljevalnimi prostori za športne, kulturne in družbene programe.",
  featuredImage:
    "/reference/dvorana-za-kulturne-druzbene-in-sportne-aktivnosti-gorenja-vas/hero.webp",
  contentHtml: `
    <p>Projekt obsega izgradnjo večnamenske dvorane v Gorenji vasi na mestu obstoječe telovadnice pri osnovni šoli. Objekt je zasnovan kot sodobna dvorana za športne, kulturne in družbene aktivnosti z vsemi potrebnimi spremljevalnimi prostori.</p>

    <p>Zasnova vključuje tribune, garderobe, sanitarije, fizioterapevtske in spremljevalne prostore ter prostorsko organizacijo, ki omogoča prilagodljivo uporabo za različne dogodke in programe.</p>

    <p>Stavba je grajena pretežno iz lesenih konstrukcijskih materialov, z lesenim zunanjim stavbnim pohištvom in leseno masivno fasadno oblogo. Projekt poudarja trajnostni pristop ter uporabo naravnih in obnovljivih materialov.</p>

    <p>Gre za pomembno javno investicijo, ki lokalni skupnosti zagotavlja kakovosten prostor za šport, kulturo in druženje.</p>
  `,
},
{
  slug: "telovadnica-v-os-branik",
  title: "Telovadnica OŠ Branik",
  subtitle: "energetska sanacija šolske telovadnice",
  date: "2022-03-04",
  excerpt:
    "Energetska sanacija telovadnice z obnovo fasade, zamenjavo stavbnega pohištva in posodobitvijo ovoja objekta.",
  featuredImage: "/reference/telovadnica-v-os-branik/hero.webp",
  contentHtml: `
    <p>Projekt obsega energetsko sanacijo telovadnice Osnovne šole Branik. Obstoječi objekt je bil zgrajen kot montažna armiranobetonska konstrukcija, zato je bila prenova usmerjena predvsem v izboljšanje energetskih lastnosti stavbnega ovoja.</p>

    <p>Posegi so zajemali demontažo in ponovno montažo kleparskih elementov, zamenjavo stavbnega pohištva ter izvedbo nove kontaktne termoizolativne fasadne obloge. S tem so se bistveno izboljšali toplotni pogoji in trajnost objekta.</p>

    <p>Projekt ni posegal v osnovno konstrukcijo stavbe, temveč jo je nadgradil s sodobnimi rešitvami za učinkovitejše in kakovostnejše delovanje objekta.</p>

    <p>Gre za primer racionalne in učinkovite prenove šolske športne infrastrukture.</p>
  `,
},
{
  slug: "telovadnica-os-maksa-pecarja",
  title: "Telovadnica OŠ Maksa Pečarja",
  subtitle: "novogradnja šolske telovadnice",
  date: "2022-03-04",
  excerpt:
    "Nova telovadnica za potrebe osnovne šole, športnih klubov in lokalne skupnosti z velikim večnamenskim programom.",
  featuredImage: "/reference/telovadnica-os-maksa-pecarja/hero.webp",
  contentHtml: `
    <p>Projekt obsega gradnjo nove telovadnice Osnovne šole Maksa Pečarja, namenjene šolskemu programu, športnim dejavnostim in uporabi širše lokalne skupnosti. Objekt dopolnjuje obstoječo šolsko infrastrukturo z večjim in sodobnejšim športnim programom.</p>

    <p>V telovadnici so urejene glavna dvorana, dodatni vadbeni prostori, spremljevalni prostori za garderobe, sanitarije, pisarne in druge servisne funkcije. Objekt vključuje tudi zunanjo ureditev in športno igrišče.</p>

    <p>Konstrukcija stavbe združuje armiranobetonske elemente in lesene lepljene nosilce, kar omogoča velike razpone in kakovostno prostorsko organizacijo športnega programa.</p>

    <p>Projekt predstavlja sodobno šolsko športno infrastrukturo z visoko stopnjo funkcionalnosti, energetske učinkovitosti in prostorske kakovosti.</p>
  `,
},
  {
    slug: "os-kolezija-celovita-sanacija-objekta-na-splitski-12",
    title: "OŠ Kolezija",
    subtitle: "celovita sanacija šolskega objekta",
    date: "2022-03-04",
    excerpt:
      "Celovita sanacija objekta osnovne šole z izboljšanjem funkcionalnosti, varnosti in energetske učinkovitosti.",
    featuredImage:
      "/reference/os-kolezija-celovita-sanacija-objekta-na-splitski-12/hero.webp",
    contentHtml: `
      <p>Projekt obsega celovito sanacijo objekta Osnovne šole Kolezija na Splitski ulici v Ljubljani. Poseg je bil zasnovan z namenom izboljšanja prostorskih pogojev, povečanja funkcionalnosti šole ter nadgradnje tehnične in energetske kakovosti objekta.</p>

      <p>Predvidena je bila odstranitev manjšega obstoječega objekta, dozidava in celovita prenova glavnega šolskega sklopa. Posegi so vključevali statično, požarno, funkcionalno in energetsko sanacijo obstoječih prostorov, ob tem pa ohranili logiko delovanja šolskega programa.</p>

      <p>Projekt predstavlja obsežno prenovo izobraževalnega objekta, pri kateri so bili gradbeni, tehnični in organizacijski vidiki povezani v celovito nadgradnjo šolskega okolja.</p>
    `,
  },
  {
    slug: "celovita-sanacija-in-nadgradnja-os-nove-fuzine",
    title: "OŠ Nove Fužine",
    subtitle: "celovita sanacija in nadgradnja šole",
    date: "2022-03-03",
    excerpt:
      "Celovita prenova in nadzidava obstoječega šolskega objekta z izboljšanjem funkcionalnosti, požarne varnosti in energetske učinkovitosti.",
    featuredImage:
      "/reference/celovita-sanacija-in-nadgradnja-os-nove-fuzine/hero.webp",
    contentHtml: `
      <p>Projekt obsega celovito sanacijo in nadgradnjo Osnovne šole Nove Fužine. Obstoječi objekt je prostorsko zelo razgiban in sestavljen iz več medsebojno povezanih sklopov, zato je bila prenova zasnovana kot premišljena nadgradnja kompleksne šolske strukture.</p>

      <p>Predvideni posegi so zajemali celovito sanacijo prostorov, nadzidavo osrednjega dela objekta ter izboljšanje toplotnega ovoja stavbe. Projekt je vključeval tudi zamenjavo stavbnega pohištva, prenovo tlakov, notranjih vrat, tehničnih stropov, svetil in instalacijskih sistemov.</p>

      <p>Pomemben del prenove je bila tudi izboljšava požarne varnosti ter splošne funkcionalnosti šolskega prostora, s čimer je objekt pridobil sodobnejše pogoje za izvajanje vzgojno-izobraževalnega programa.</p>
    `,
  },
  {
    slug: "glasbena-sola-slovenj-gradec",
    title: "Glasbena šola Slovenj Gradec",
    subtitle: "gradnja izobraževalnega objekta",
    date: "2022-03-03",
    excerpt:
      "Gradnja objekta glasbene šole v sistemu Velox z dobrimi toplotnimi in zvočnimi lastnostmi.",
    featuredImage: "/reference/glasbena-sola-slovenj-gradec/hero.webp",
    contentHtml: `
      <p>Projekt obsega izgradnjo objekta Glasbene šole Slovenj Gradec. Objekt je bil načrtovan v izvedbi s sistemi Velox, ki združujejo armiranobetonsko konstrukcijo z opažnimi elementi iz lesenih drobljencev, vezanih s cementom.</p>

      <p>Tak sistem gradnje omogoča dobro toplotno in zvočno izolativnost, kar je za objekt glasbene šole še posebej pomembno. Fasadni plašč stavbe je zasnovan kot kombinacija kontaktne fasade in zastekljenih površin, kar objektu daje sodoben in prepoznaven izraz.</p>

      <p>Projekt predstavlja funkcionalno in tehnično premišljeno izvedbo izobraževalnega objekta, prilagojenega specifičnim zahtevam glasbenega programa.</p>
    `,
  },
  {
    slug: "osnovna-sola-vide-pregarc",
    title: "Osnovna šola Vide Pregarc",
    subtitle: "prizidek in prenova šolskega objekta",
    date: "2022-03-03",
    excerpt:
      "Prenova in prizidava osnovne šole z novo telovadno dvorano, prostori za prvo triado in izboljšano potresno ter požarno varnostjo.",
    featuredImage: "/reference/osnovna-sola-vide-pregarc/hero.webp",
    contentHtml: `
      <p>Projekt obsega prizidek in reorganizacijo Osnovne šole Vide Pregarc z namenom zmanjšanja prostorskega primanjkljaja in izboljšanja pogojev za izvajanje šolskega programa. Obstoječa stavba ni več ustrezala normativom za sodobno osnovno šolo, zato je bila potrebna celovita nadgradnja.</p>

      <p>Projekt je vključeval izgradnjo novega prizidka s prostori za prvo triado, dodatno telovadno dvorano in podzemnim zakloniščem. Ob tem je bilo treba obstoječi objekt statično ojačati ter izboljšati požarno varnost, dostopnost in povezavo med starim in novim delom šole.</p>

      <p>Rezultat posega je sodobnejši in prostorsko bolje organiziran šolski kompleks, ki omogoča kakovostnejše izvajanje pouka in boljše pogoje za uporabnike.</p>
    `,
  },
  {
    slug: "osnovna-sola-cirila-kosmaca",
    title: "Osnovna šola Cirila Kosmača",
    subtitle: "energetska sanacija šolskega objekta",
    date: "2022-03-03",
    excerpt:
      "Izvedba gradbeno-obrtniških in inštalacijskih del v sklopu energetske sanacije osnovne šole.",
    featuredImage: "/reference/osnovna-sola-cirila-kosmaca/hero.webp",
    contentHtml: `
      <p>Projekt obsega izvedbo gradbeno-obrtniških in inštalacijskih del v okviru energetske sanacije Osnovne šole Cirila Kosmača. Poseg je bil usmerjen v izboljšanje energetske učinkovitosti objekta ter kakovosti notranjega okolja.</p>

      <p>Z izvedenimi ukrepi je bil šolski objekt tehnično posodobljen in prilagojen sodobnejšim zahtevam uporabe, ob hkratnem izboljšanju stavbnega ovoja in delovanja posameznih sistemov.</p>

      <p>Projekt predstavlja racionalno in funkcionalno nadgradnjo obstoječe šolske infrastrukture.</p>
    `,
  },
  {
    slug: "solski-center-ljubljana-askerceva",
    title: "Šolski center Ljubljana",
    subtitle: "sanacija objekta na Aškerčevi",
    date: "2022-03-03",
    excerpt:
      "Sanacija fasade, notranjih ometov in stavbnega pohištva na kulturno zaščitenem šolskem objektu.",
    featuredImage: "/reference/solski-center-ljubljana-askerceva/hero.webp",
    contentHtml: `
      <p>Projekt obsega sanacijo dela objekta Šolskega centra Ljubljana na Aškerčevi. Posegi so zajemali sanacijo fasade na telovadnici, prenovo notranjih ometov ter zamenjavo stavbnega pohištva.</p>

      <p>Ker objekt spada med kulturno zaščitene stavbe, je bila izvedba prilagojena zahtevam Zavoda za varstvo kulturne dediščine Slovenije. Projekt je zato zahteval natančno usklajevanje tehničnih rešitev s pogoji varovanja obstoječega arhitekturnega značaja.</p>

      <p>Rezultat je kakovostno obnovljen šolski objekt, ki ohranja svojo identiteto in hkrati izpolnjuje sodobnejše zahteve uporabe.</p>
    `,
  },
  {
    slug: "osnovna-sola-cerkno",
    title: "Osnovna šola Cerkno",
    subtitle: "energetska prenova šolskega objekta",
    date: "2022-03-03",
    excerpt:
      "Energetska prenova osnovne šole z zmanjšanjem toplotnih izgub, zamenjavo stavbnega pohištva in obnovo fasade.",
    featuredImage: "/reference/osnovna-sola-cerkno/hero.webp",
    contentHtml: `
      <p>Projekt obsega energetsko prenovo Osnovne šole Cerkno, katere glavni cilj je bil zmanjšanje toplotnih izgub, izboljšanje bivalnih in delovnih pogojev ter zmanjšanje vplivov na okolje. Objekt pred prenovo ni bil deležen obsežnejših vzdrževalnih del, zato je bila celovita nadgradnja nujna.</p>

      <p>V okviru prenove so bili izvedeni ukrepi na fasadnem ovoju, stavbnem pohištvu in strehi. Objekt je po izvedbi postal energetsko učinkovitejši, hkrati pa je pridobil tudi prenovljeno zunanjo podobo.</p>

      <p>Projekt predstavlja primer učinkovite energetske sanacije javnega izobraževalnega objekta, pri kateri so bili tehnični, funkcionalni in estetski vidiki povezani v celoto.</p>
    `,
  },
  {
    slug: "osnovna-sola-maksa-pecarja",
    title: "Osnovna šola Maksa Pečarja",
    subtitle: "energetska sanacija in konstrukcijska prenova",
    date: "2022-03-03",
    excerpt:
      "Obsežna prenova šolskega objekta z energetsko sanacijo, zamenjavo strehe, nove fasade in konstrukcijsko nadgradnjo osrednjega dela stavbe.",
    featuredImage: "/reference/osnovna-sola-maksa-pecarja/hero.webp",
    contentHtml: `
      <p>Projekt obsega energetsko sanacijo Osnovne šole Maksa Pečarja, ki je vključevala zamenjavo strešne kritine, novo stavbno pohištvo, izvedbo toplotno izolacijske fasade ter zunanjo in hortikulturno ureditev.</p>

      <p>Poleg energetskih ukrepov je projekt zajemal tudi pomembno konstrukcijsko prenovo dela objekta, kjer so bili odstranjeni posamezni notranji nosilni elementi, nato pa vzpostavljena nova armiranobetonska konstrukcija za izboljšano statično in funkcionalno delovanje stavbe.</p>

      <p>Poseg predstavlja kombinacijo energetske nadgradnje in konstrukcijske prenove, s katero je obstoječi šolski objekt pridobil sodobnejše tehnične in prostorske lastnosti.</p>
    `,
  },
  {
    slug: "celovita-prenova-objekt-vrtec-sentvid-enota-sapramiska",
    title: "Vrtec Šentvid – enota Sapramiška",
    subtitle: "celovita prenova vrtca",
    date: "2022-03-03",
    excerpt:
      "Celovita prenova in delna predelava obstoječega vrtca z nadgradnjo kletnih prostorov in izboljšanjem funkcionalnosti objekta.",
    featuredImage:
      "/reference/celovita-prenova-objekt-vrtec-sentvid-enota-sapramiska/hero.webp",
    contentHtml: `
      <p>Projekt obsega celovito prenovo vrtca Šentvid, enota Sapramiška. Obstoječi vrtec je zasnovan kot večji dvoetažni objekt s petnajstimi igralnicami in atrijskimi enotami, zato je prenova zahtevala celovit in funkcionalno natančen pristop.</p>

      <p>Predmet posega je bilo povečanje in predelava kletnih prostorov ter celovita obnova objekta. Projekt je vključeval tudi izboljšanje notranje organizacije prostorov, dostopov in spremljevalnih servisnih vsebin.</p>

      <p>Rezultat je sodobneje urejen vrtec, prilagojen učinkovitejšemu delovanju in kakovostnejšemu vsakodnevnemu programu za otroke in zaposlene.</p>
    `,
  },
  {
    slug: "vrtec-otona-zupancica-enota-cebelica",
    title: "Vrtec Otona Župančiča – enota Čebelica",
    subtitle: "novogradnja lesenega vrtca",
    date: "2022-03-03",
    excerpt:
      "Nov petoddelčni vrtec v leseni montažni izvedbi z zeleno streho in urejeno zunanjo ureditvijo.",
    featuredImage:
      "/reference/vrtec-otona-zupancica-enota-cebelica/hero.webp",
    contentHtml: `
      <p>Projekt obsega rušitev neustreznega obstoječega vrtca in izgradnjo nove enote Čebelica za potrebe Vrtca Otona Župančiča. Novi objekt je zasnovan kot petoddelčni vrtec v dveh etažah, s sodobno konstrukcijsko in funkcionalno zasnovo.</p>

      <p>Pritlični del objekta je izveden v montažni leseni gradnji s križno lepljenimi ploščami. Les je uporabljen tako pri fasadi kot tudi pri notranjih nosilnih konstrukcijah, poseben poudarek pa daje objektu tudi zelena streha.</p>

      <p>Projekt predstavlja sodobno, trajnostno in prostorsko kakovostno rešitev za vzgojni objekt, namenjen najmlajšim uporabnikom.</p>
    `,
  },
  {
    slug: "vrtec-dornberk",
    title: "Vrtec Dornberk",
    subtitle: "energetska sanacija vrtca",
    date: "2022-03-03",
    excerpt:
      "Prenova vrtca z izboljšanjem funkcionalne sheme, izvedbo toplotne izolacije in prenovo notranjih površin.",
    featuredImage: "/reference/vrtec-dornberk/hero.webp",
    contentHtml: `
      <p>Projekt obsega energetsko sanacijo vrtca Dornberk. Obstoječi pritlični objekt je ohranil osnovni program, spremenjena pa je bila funkcionalna shema posameznih prostorov in izboljšana tehnična kakovost stavbe.</p>

      <p>Posegi so zajemali izvedbo toplotne izolacije fasadnega ovoja, zamenjavo tlakov v večjem delu vrtca ter prenovo notranjih sten in stropov. Prenova je tako izboljšala energetsko učinkovitost objekta in pogoje njegove uporabe.</p>

      <p>Projekt predstavlja premišljeno nadgradnjo obstoječega vzgojnega objekta z jasnim poudarkom na funkcionalnosti in energetski sanaciji.</p>
    `,
  },
  {
    slug: "gradnja-podruznicne-sole-in-vrtca-turjak",
    title: "POŠ in vrtec Turjak",
    subtitle: "gradnja podružnične šole in vrtca",
    date: "2022-03-03",
    excerpt:
      "Novogradnja podružnične šole in vrtca v Turjaku z vsemi spremljevalnimi prostori, opremo in zunanjo ureditvijo.",
    featuredImage:
      "/reference/gradnja-podruznicne-sole-in-vrtca-turjak/hero.webp",
    contentHtml: `
      <p>Projekt obsega gradnjo podružnične osnovne šole in vrtca v Turjaku. V sklopu investicije so bila izvedena gradbena, obrtniška in instalacijska dela ter zunanja ureditev za nov objekt z vsemi potrebnimi spremljevalnimi prostori.</p>

      <p>Objekt združuje program šole od prvega do četrtega razreda ter štiri enote vrtca, dopolnjene z vso potrebno opremo za delovanje izobraževalnega in vzgojnega programa.</p>

      <p>Gre za celovito izvedbo javnega objekta, ki pomembno izboljšuje lokalno infrastrukturo za otroke in družine.</p>
    `,
  },
  {
    slug: "vrtec-sentjernej",
    title: "Vrtec Šentjernej",
    subtitle: "novogradnja lesenega vrtca",
    date: "2022-03-03",
    excerpt:
      "Fazna izgradnja sodobnega lesenega vrtca z več oddelki, naravnimi materiali in celovito prostorsko zasnovo.",
    featuredImage: "/reference/vrtec-sentjernej/hero.webp",
    contentHtml: `
      <p>Projekt obsega fazno gradnjo novega vrtca v Šentjerneju. Na lokaciji obstoječega vrtca in šole je bil najprej zgrajen nov desetoddelčni vrtec, nato pa po rušitvi starega objekta še nov osemoddelčni vrtec, skupaj zasnovana kot enotna funkcionalna celota.</p>

      <p>Objekta sta zasnovana kot montažni leseni stavbi na armiranobetonski temeljni plošči, z dodatnimi jeklenimi ojačitvami na mestih večjih razponov. Fasada je oblikovana v svetlih naravnih tonih z lesenim opažem in pločevinastimi zaključki.</p>

      <p>Projekt predstavlja kakovostno in sodobno rešitev za vzgojno infrastrukturo, kjer so trajnostni materiali, funkcionalnost in kakovost prostora združeni v usklajeno arhitekturno celoto.</p>
    `,
  },
];

