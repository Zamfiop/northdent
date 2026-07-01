// Servicii oferite de North Dent.
// NOTĂ: NU includem implant dentar și NU includem ortodonție (nu sunt oferite).
//
// Conținutul este redactat în română, calm, empatic și accesibil, fără
// promisiuni medicale absolute și fără date inventate (aparatură, certificări,
// durate exacte, prețuri). Formulările generale ("de obicei", "în funcție de caz")
// sunt intenționate. Optimizează punctual per pagină dacă apar informații noi.

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Nume scurt pentru carduri și navigație */
  name: string;
  /** H1 al paginii, include localitatea pentru SEO local */
  h1: string;
  /** SEO title unic */
  title: string;
  /** Meta description unică, naturală, orientată spre pacient */
  description: string;
  /** Introducere scurtă afișată sub H1 */
  intro: string;
  /** Proză unică per pagină (paragrafe), randată în ServiceLayout */
  body: string[];
  /** Rezumat scurt pentru cardul din grilă */
  cardSummary: string;
  /** Se afișează în secțiunea "servicii principale" de pe homepage */
  featured: boolean;
  whenRecommended: string[];
  howItWorks: string[];
  whatToExpect: string[];
  faqs: ServiceFaq[];
  /** Sluguri de servicii conexe pentru internal linking */
  related: string[];
  /** Imagine opțională în hero (dreapta pe desktop). Dacă lipsește, hero-ul rămâne doar text. */
  image?: {
    src: string;
    alt: string;
  };
}

export const services: Service[] = [
  {
    slug: "consultatie-stomatologica",
    name: "Consultație stomatologică",
    h1: "Consultație stomatologică în Râmnicu Vâlcea",
    title: "Consultație stomatologică în Râmnicu Vâlcea | North Dent",
    description:
      "Consultație stomatologică calmă și completă la North Dent, în Zona Nord din Râmnicu Vâlcea. Evaluăm sănătatea orală și stabilim împreună planul de tratament.",
    intro:
      "Consultația este primul pas: evaluăm starea dinților și a gingiilor și discutăm împreună opțiunile potrivite pentru tine.",
    body: [
      "La North Dent, în Râmnicu Vâlcea, consultația nu înseamnă doar o verificare rapidă. Ne rezervăm timp să înțelegem ce te aduce la cabinet, care sunt așteptările tale și dacă ai avut experiențe neplăcute în trecut. Pe baza examinării, îți explicăm ce am observat și ce opțiuni ai, fără termeni complicați.",
      "Scopul este să pleci de la cabinet cu o imagine clară asupra situației tale și cu un plan de tratament pe care îl înțelegi și cu care ești de acord. Nimic nu se face în grabă, iar deciziile le luăm împreună.",
    ],
    cardSummary: "Evaluare completă și plan de tratament personalizat.",
    featured: true,
    whenRecommended: [
      "La primul contact cu cabinetul",
      "Când apar disconfort, sensibilitate sau durere",
      "Pentru un control periodic de rutină",
      "Înainte de a începe un tratament estetic sau o lucrare dentară",
    ],
    howItWorks: [
      "Discutăm despre istoricul tău medical și despre ce te aduce la cabinet",
      "Examinăm dinții, gingiile și țesuturile din cavitatea bucală",
      "Îți explicăm ce am observat, pe înțelesul tău",
      "Stabilim împreună un plan de tratament clar, cu pași și priorități",
    ],
    whatToExpect: [
      "O discuție relaxată, fără grabă",
      "Explicații clare, fără termeni complicați",
      "Recomandări adaptate nevoilor și preferințelor tale",
    ],
    faqs: [
      {
        question: "Ce presupune o consultație stomatologică?",
        answer:
          "Discutăm despre istoricul tău, examinăm dinții și gingiile și stabilim împreună un plan de tratament. La final știi exact care este situația și ce pași urmează.",
      },
      {
        question: "Trebuie să vin cu o programare?",
        answer:
          "Recomandăm o programare rapidă pe WhatsApp, ca să îți rezervăm un interval potrivit și să evităm așteptarea.",
      },
      {
        question: "Cât de des ar trebui să fac un control?",
        answer:
          "În general, un control la 6 luni ajută la depistarea din timp a problemelor. Recomandarea se personalizează după consultație.",
      },
    ],
    related: ["igienizare-profesionala", "tratament-carii", "estetica-dentara"],
  },
  {
    slug: "igienizare-profesionala",
    name: "Igienizare profesională",
    h1: "Igienizare profesională în Râmnicu Vâlcea",
    title: "Igienizare profesională în Râmnicu Vâlcea | North Dent",
    description:
      "Igienizare dentară profesională la North Dent în Râmnicu Vâlcea: detartraj, periaj profesional și Airflow pentru dinți curați și gingii sănătoase.",
    intro:
      "Igienizarea profesională îndepărtează placa și tartrul pe care periajul zilnic nu le poate elimina complet.",
    body: [
      "Chiar și cu o igienă corectă acasă, în timp se depun placă bacteriană și tartru în zonele greu accesibile. Igienizarea profesională de la North Dent, în Râmnicu Vâlcea, combină detartrajul, periajul profesional și, acolo unde este util, tratamentul Airflow, pentru a curăța temeinic suprafața dinților și marginea gingiei.",
      "Pe lângă aspectul mai curat și senzația de prospețime, igienizarea periodică ajută la menținerea sănătății gingiilor și la prevenirea problemelor mai serioase. La final, îți dăm recomandări simple pentru igiena de acasă.",
    ],
    cardSummary: "Detartraj, periaj profesional și Airflow într-o singură vizită.",
    featured: true,
    whenRecommended: [
      "Periodic, pentru menținerea sănătății orale",
      "Când observi tartru, placă sau pete pe dinți",
      "La sângerări ușoare ale gingiilor",
      "Înainte de tratamente estetice, cum ar fi albirea",
    ],
    howItWorks: [
      "Evaluăm nivelul de placă și tartru",
      "Realizăm detartrajul, îndepărtând depunerile întărite",
      "Continuăm cu periajul profesional",
      "Finalizăm cu Airflow acolo unde este util",
    ],
    whatToExpect: [
      "Senzație de curățenie și prospețime",
      "O procedură blândă, explicată pe parcurs",
      "Sfaturi personalizate pentru igiena de acasă",
    ],
    faqs: [
      {
        question: "Cât de des ar trebui făcută igienizarea?",
        answer:
          "De obicei o dată la 6 luni, dar frecvența se personalizează în funcție de situația ta, după consultație.",
      },
      {
        question: "Igienizarea profesională doare?",
        answer:
          "În general este bine tolerată. Dacă ai gingii sensibile, spune-ne și adaptăm procedura pentru confortul tău.",
      },
      {
        question: "Ce include o igienizare completă?",
        answer:
          "De regulă detartraj, periaj profesional și, atunci când este util, Airflow. Stabilim împreună ce este potrivit pentru tine.",
      },
    ],
    related: ["detartraj", "airflow", "consultatie-stomatologica"],
  },
  {
    slug: "detartraj",
    name: "Detartraj",
    h1: "Detartraj în Râmnicu Vâlcea",
    title: "Detartraj în Râmnicu Vâlcea | North Dent",
    description:
      "Detartraj profesional la North Dent, Zona Nord din Râmnicu Vâlcea. Îndepărtăm tartrul blând și îngrijim sănătatea gingiilor.",
    intro:
      "Detartrajul îndepărtează tartrul întărit de pe suprafața dinților și de la nivelul marginii gingivale.",
    body: [
      "Tartrul se formează atunci când placa bacteriană se întărește și nu mai poate fi îndepărtată prin periaj. Netratat, poate contribui la inflamația și sângerarea gingiilor. La North Dent, în Râmnicu Vâlcea, realizăm detartrajul blând, cu aparatură cu ultrasunete, pentru a curăța suprafața dinților și zona din apropierea gingiei.",
      "Detartrajul este un pas de bază în menținerea sănătății orale și se completează adesea cu periaj profesional și Airflow. Îți explicăm pe parcurs ce facem și mergem în ritmul tău.",
    ],
    cardSummary: "Îndepărtarea tartrului pentru gingii sănătoase.",
    featured: true,
    whenRecommended: [
      "Când s-a depus tartru vizibil",
      "La sângerări ușoare ale gingiilor",
      "Ca parte din igienizarea periodică",
      "Când simți depuneri aspre pe suprafața dinților",
    ],
    howItWorks: [
      "Evaluăm depunerile de tartru și starea gingiilor",
      "Îndepărtăm tartrul cu aparatură cu ultrasunete",
      "Verificăm zonele dintre dinți și marginea gingivală",
      "Recomandăm pașii următori de îngrijire",
    ],
    whatToExpect: [
      "O procedură rapidă și blândă",
      "Gingii mai sănătoase în timp",
      "Explicații clare pe parcurs",
    ],
    faqs: [
      {
        question: "Detartrajul doare?",
        answer:
          "În general este bine tolerat. Îți explicăm fiecare pas și, dacă apar sensibilități, adaptăm procedura.",
      },
      {
        question: "Detartrajul slăbește dinții?",
        answer:
          "Nu. Detartrajul îndepărtează tartrul, nu structura dintelui. Senzația de spațiu apare pentru că se curăță depunerile care acopereau dinții.",
      },
      {
        question: "Cât de des am nevoie de detartraj?",
        answer:
          "De obicei la fiecare 6 luni, dar frecvența depinde de cât de repede se depune tartrul în cazul tău.",
      },
    ],
    related: ["igienizare-profesionala", "airflow", "consultatie-stomatologica"],
  },
  {
    slug: "airflow",
    name: "Airflow",
    h1: "Airflow dentar în Râmnicu Vâlcea",
    title: "Airflow dentar în Râmnicu Vâlcea | North Dent",
    description:
      "Tratament Airflow la North Dent în Râmnicu Vâlcea: curățare fină cu jet de aer, apă și pudră pentru îndepărtarea petelor și a plăcii.",
    intro:
      "Airflow folosește un jet fin de aer, apă și pulbere pentru a îndepărta petele și placa de pe suprafața dinților.",
    body: [
      "Airflow este o metodă blândă de curățare care completează detartrajul. Jetul fin de aer, apă și pulbere ajunge inclusiv în zonele mai greu accesibile și îndepărtează placa și petele superficiale lăsate de cafea, ceai sau tutun. Rezultatul este o suprafață netedă și dinți vizibil mai curați.",
      "La North Dent, în Râmnicu Vâlcea, folosim adesea Airflow ca finalizare a igienizării profesionale sau ca pregătire înainte de albirea dentară, pentru un rezultat mai uniform.",
    ],
    cardSummary: "Curățare fină pentru dinți mai luminoși.",
    featured: true,
    whenRecommended: [
      "Pentru îndepărtarea petelor de cafea, ceai sau tutun",
      "Ca finalizare a igienizării profesionale",
      "Înainte de albirea dentară",
      "Pentru o curățare fină, în completarea detartrajului",
    ],
    howItWorks: [
      "Evaluăm suprafața dinților și petele existente",
      "Aplicăm jetul fin de aer, apă și pulbere",
      "Îndepărtăm placa și petele superficiale",
      "Verificăm rezultatul împreună",
    ],
    whatToExpect: [
      "Dinți vizibil mai curați",
      "O procedură confortabilă",
      "Senzație de prospețime și suprafață netedă",
    ],
    faqs: [
      {
        question: "Airflow înlocuiește detartrajul?",
        answer:
          "Nu, cele două se completează. Detartrajul îndepărtează tartrul întărit, iar Airflow curăță fin suprafața și petele superficiale.",
      },
      {
        question: "Airflow albește dinții?",
        answer:
          "Airflow îndepărtează petele superficiale și redă nuanța naturală a dinților, dar nu este un tratament de albire. Pentru o nuanță mai deschisă, discutăm despre albirea dentară.",
      },
      {
        question: "Procedura este neplăcută?",
        answer:
          "De obicei este bine tolerată. Dacă ai sensibilități, spune-ne și adaptăm intensitatea.",
      },
    ],
    related: ["igienizare-profesionala", "detartraj", "albire-dentara"],
  },
  {
    slug: "tratament-carii",
    name: "Tratament carii",
    h1: "Tratament carii în Râmnicu Vâlcea",
    title: "Tratament carii în Râmnicu Vâlcea | North Dent",
    description:
      "Tratament carii la North Dent în Râmnicu Vâlcea. Îndepărtăm caria și refacem dintele cu obturații fizionomice, calm și cu grijă.",
    intro:
      "Tratăm caria din timp pentru a opri evoluția ei și pentru a păstra cât mai mult din dintele natural.",
    body: [
      "Caria apare atunci când bacteriile afectează treptat structura dintelui. Cu cât este tratată mai devreme, cu atât intervenția este mai simplă. La North Dent, în Râmnicu Vâlcea, îndepărtăm țesutul afectat și refacem dintele cu materiale fizionomice, care se integrează natural cu restul dinților.",
      "Atunci când este nevoie, folosim anestezie locală pentru confortul tău, iar pe parcurs îți explicăm ce facem. Tratarea la timp a cariilor ajută la evitarea unor probleme mai serioase, cum ar fi afectarea nervului dintelui.",
    ],
    cardSummary: "Obturații fizionomice pentru dinți refăcuți natural.",
    featured: true,
    whenRecommended: [
      "La sensibilitate la dulce, cald sau rece",
      "Când observi o pată închisă la culoare sau o cavitate pe dinte",
      "În urma unui control de rutină",
      "Când simți asprime sau o margine neregulată pe un dinte",
    ],
    howItWorks: [
      "Evaluăm dintele afectat",
      "Îndepărtăm țesutul afectat de carie",
      "Curățăm și pregătim zona",
      "Refacem dintele cu material fizionomic",
    ],
    whatToExpect: [
      "Un dinte refăcut, cu aspect natural",
      "Reducerea sensibilității",
      "O procedură explicată pas cu pas",
    ],
    faqs: [
      {
        question: "Tratamentul cariei doare?",
        answer:
          "Urmărim confortul tău pe tot parcursul. Atunci când este nevoie, folosim anestezie locală, iar tu ne spui oricând dacă ai nevoie de o pauză.",
      },
      {
        question: "Cât durează un tratament de carie?",
        answer:
          "De obicei se rezolvă într-o singură ședință, în funcție de dimensiunea și localizarea cariei.",
      },
      {
        question: "Ce se întâmplă dacă amân tratamentul?",
        answer:
          "Caria avansează în timp și poate ajunge la nervul dintelui, ceea ce complică tratamentul. De aceea recomandăm rezolvarea din timp.",
      },
    ],
    related: ["endodontie", "consultatie-stomatologica", "coroane-dentare"],
  },
  {
    slug: "endodontie",
    name: "Endodonție",
    h1: "Tratament de canal în Râmnicu Vâlcea",
    title: "Tratament de canal (endodonție) în Râmnicu Vâlcea | North Dent",
    description:
      "Endodonție și tratament de canal la North Dent în Râmnicu Vâlcea. Salvăm dintele afectat, cu grijă pentru confortul tău.",
    intro:
      "Tratamentul de canal (endodonția) tratează infecția din interiorul dintelui și ajută la păstrarea lui.",
    body: [
      "Atunci când caria avansează sau dintele este afectat profund, infecția poate ajunge la nervul din interior. Tratamentul de canal presupune îndepărtarea țesutului afectat, curățarea și dezinfectarea canalelor, apoi sigilarea lor. Astfel, în multe cazuri, dintele natural poate fi păstrat.",
      "La North Dent, în Râmnicu Vâlcea, tratăm endodonția cu răbdare și atenție la confortul tău. După tratamentul de canal, dintele are adesea nevoie de o coroană pentru protecție, iar noi îți explicăm din timp pașii care urmează.",
    ],
    cardSummary: "Tratament de canal pentru salvarea dintelui.",
    featured: false,
    whenRecommended: [
      "La durere puternică, spontană sau pulsatilă",
      "Când caria a ajuns la nervul dintelui",
      "În caz de infecție la nivelul rădăcinii",
      "La sensibilitate prelungită la cald",
    ],
    howItWorks: [
      "Evaluăm dintele și, la nevoie, recomandăm o radiografie",
      "Îndepărtăm țesutul infectat din canale",
      "Curățăm și dezinfectăm canalele",
      "Sigilăm dintele pentru protecție",
    ],
    whatToExpect: [
      "Ameliorarea durerii",
      "Păstrarea dintelui natural",
      "Explicații clare despre pașii următori",
    ],
    faqs: [
      {
        question: "Tratamentul de canal doare?",
        answer:
          "Lucrăm pentru confortul tău pe tot parcursul și, atunci când este nevoie, folosim anestezie locală. Îți explicăm fiecare etapă înainte de a începe.",
      },
      {
        question: "Câte ședințe sunt necesare?",
        answer:
          "Depinde de situația clinică. Uneori este suficientă o ședință, alteori sunt necesare mai multe. Îți spunem din timp la ce să te aștepți.",
      },
      {
        question: "De ce am nevoie de coroană după tratamentul de canal?",
        answer:
          "Un dinte tratat endodontic devine mai fragil. O coroană îl protejează și îi reface rezistența pe termen lung.",
      },
    ],
    related: ["tratament-carii", "coroane-dentare", "consultatie-stomatologica"],
  },
  {
    slug: "estetica-dentara",
    name: "Estetică dentară",
    h1: "Estetică dentară în Râmnicu Vâlcea",
    title: "Estetică dentară în Râmnicu Vâlcea | North Dent",
    description:
      "Estetică dentară la North Dent în Râmnicu Vâlcea: albire, fațete și soluții pentru un zâmbet natural și armonios.",
    intro:
      "Estetica dentară reunește soluțiile care îmbunătățesc aspectul zâmbetului, păstrând un rezultat natural.",
    body: [
      "Un zâmbet cu care te simți bine îți poate crește încrederea în fiecare zi. Estetica dentară cuprinde mai multe soluții — de la albire până la fațete și coroane — alese în funcție de situația ta și de rezultatul pe care ți-l dorești. La North Dent, în Râmnicu Vâlcea, punem accent pe un rezultat natural, care să ți se potrivească.",
      "Totul pornește de la o discuție sinceră: analizăm situația, îți prezentăm opțiunile realiste și stabilim împreună un plan. Nu promitem rezultate identice pentru toată lumea, ci soluții adaptate ție.",
    ],
    cardSummary: "Soluții pentru un zâmbet natural și armonios.",
    featured: false,
    whenRecommended: [
      "Când îți dorești un zâmbet mai luminos",
      "Pentru corectarea formei sau a culorii dinților",
      "La spații mici între dinții frontali",
      "Ca parte dintr-un plan de tratament personalizat",
    ],
    howItWorks: [
      "Discutăm despre rezultatul pe care ți-l dorești",
      "Evaluăm sănătatea dinților și a gingiilor",
      "Îți prezentăm opțiunile potrivite pentru tine",
      "Stabilim împreună un plan estetic clar",
    ],
    whatToExpect: [
      "Un plan adaptat zâmbetului tău",
      "Rezultate cu aspect natural",
      "Recomandări sincere și clare",
    ],
    faqs: [
      {
        question: "Ce soluții estetice există?",
        answer:
          "De la albire dentară până la fațete și coroane. Alegem împreună soluția potrivită, după o consultație.",
      },
      {
        question: "Rezultatul va arăta natural?",
        answer:
          "Ne dorim un rezultat cât mai natural, adaptat trăsăturilor tale. Discutăm despre așteptări încă de la început.",
      },
      {
        question: "De unde încep?",
        answer:
          "Cu o consultație, în care evaluăm situația și stabilim ce opțiuni ți se potrivesc.",
      },
    ],
    related: ["albire-dentara", "fatete-dentare", "coroane-dentare"],
  },
  {
    slug: "albire-dentara",
    name: "Albire dentară",
    h1: "Albire dentară în Râmnicu Vâlcea",
    title: "Albire dentară în Râmnicu Vâlcea | North Dent",
    description:
      "Albire dentară profesională la North Dent în Râmnicu Vâlcea, pentru un zâmbet mai luminos. Procedură blândă, explicată pas cu pas.",
    intro:
      "Albirea dentară deschide nuanța dinților, oferind un zâmbet mai luminos, cu un rezultat natural.",
    body: [
      "În timp, dinții își pot pierde din luminozitate din cauza cafelei, ceaiului, tutunului sau pur și simplu a vârstei. Albirea dentară profesională deschide nuanța dinților într-un mod controlat, sub supravegherea medicului, pentru un rezultat uniform și natural.",
      "La North Dent, în Râmnicu Vâlcea, evaluăm mai întâi sănătatea dinților și a gingiilor și, dacă este nevoie, recomandăm o igienizare în prealabil. Rezultatul depinde de la o persoană la alta, iar noi îți dăm recomandări clare pentru a-l menține cât mai mult.",
    ],
    cardSummary: "Un zâmbet mai luminos, cu rezultat natural.",
    featured: true,
    whenRecommended: [
      "Când dinții și-au pierdut din luminozitate",
      "Înainte de un eveniment important",
      "După o igienizare profesională",
      "Când îți dorești un zâmbet mai deschis la culoare",
    ],
    howItWorks: [
      "Evaluăm sănătatea dinților și a gingiilor",
      "Recomandăm igienizarea în prealabil dacă este nevoie",
      "Aplicăm procedura de albire adaptată ție",
      "Îți dăm recomandări pentru menținerea rezultatului",
    ],
    whatToExpect: [
      "Un zâmbet mai luminos",
      "O procedură confortabilă",
      "Recomandări pentru menținerea rezultatului",
    ],
    faqs: [
      {
        question: "Cât rezistă albirea?",
        answer:
          "Depinde de obiceiuri (cafea, ceai, tutun) și de igiena de acasă. Îți dăm recomandări pentru a păstra rezultatul cât mai mult.",
      },
      {
        question: "Albirea afectează dinții?",
        answer:
          "Realizată sub supravegherea medicului, după o evaluare prealabilă, albirea este o procedură controlată. Poate apărea o sensibilitate temporară, care în general trece.",
      },
      {
        question: "Este potrivită pentru mine?",
        answer:
          "Stabilim asta la consultație, după ce evaluăm sănătatea dinților și a gingiilor și nuanța actuală.",
      },
    ],
    related: ["airflow", "estetica-dentara", "igienizare-profesionala"],
    image: {
      src: "/images/galerie/albire-profesionala-valcea.webp",
      alt: "Albire dentară profesională la North Dent, Râmnicu Vâlcea",
    },
  },
  {
    slug: "fatete-dentare",
    name: "Fațete dentare",
    h1: "Fațete dentare în Râmnicu Vâlcea",
    title: "Fațete dentare în Râmnicu Vâlcea | North Dent",
    description:
      "Fațete dentare la North Dent în Râmnicu Vâlcea pentru un zâmbet armonios. Planul se stabilește după o consultație atentă.",
    intro:
      "Fațetele dentare sunt învelișuri fine aplicate pe suprafața dinților pentru a îmbunătăți forma și culoarea.",
    body: [
      "Fațetele sunt o soluție estetică pentru dinții frontali, folosită pentru a corecta forma, culoarea sau spațiile mici dintre dinți. Fiind subțiri, se integrează natural cu restul zâmbetului atunci când sunt planificate cu atenție.",
      "La North Dent, în Râmnicu Vâlcea, fațetele nu se aplică fără o evaluare atentă. Discutăm despre rezultatul dorit, verificăm dacă sunt potrivite pentru situația ta și îți explicăm sincer avantajele și limitele acestei soluții.",
    ],
    cardSummary: "Corectarea formei și culorii pentru un zâmbet armonios.",
    featured: false,
    whenRecommended: [
      "Pentru corectarea formei sau a culorii dinților frontali",
      "La spații mici între dinți",
      "Când albirea nu este suficientă pentru rezultatul dorit",
      "Ca parte dintr-un plan estetic",
    ],
    howItWorks: [
      "Discutăm despre rezultatul dorit și evaluăm dinții",
      "Pregătim planul și luăm amprentele",
      "Realizăm fațetele adaptate zâmbetului tău",
      "Aplicăm fațetele și verificăm rezultatul",
    ],
    whatToExpect: [
      "Un zâmbet mai armonios",
      "Un rezultat cu aspect natural",
      "Recomandări de îngrijire",
    ],
    faqs: [
      {
        question: "Fațetele sunt potrivite pentru mine?",
        answer:
          "Depinde de situația clinică. Stabilim împreună la consultație dacă fațetele sunt o soluție potrivită pentru tine.",
      },
      {
        question: "Cât durează realizarea fațetelor?",
        answer:
          "De obicei sunt necesare câteva ședințe. Îți explicăm etapele și intervalele după evaluarea inițială.",
      },
      {
        question: "Cum îngrijesc fațetele?",
        answer:
          "Printr-o igienă corectă și controale periodice. Îți dăm recomandări concrete pentru a le păstra în stare bună.",
      },
    ],
    related: ["estetica-dentara", "coroane-dentare", "albire-dentara"],
  },
  {
    slug: "coroane-dentare",
    name: "Coroane dentare",
    h1: "Coroane dentare în Râmnicu Vâlcea",
    title: "Coroane dentare în Râmnicu Vâlcea | North Dent",
    description:
      "Coroane dentare la North Dent în Râmnicu Vâlcea pentru protejarea și refacerea dinților afectați. Soluții durabile, cu aspect natural.",
    intro:
      "Coroana dentară acoperă și protejează un dinte afectat, refăcându-i forma și funcția.",
    body: [
      "Coroana dentară este o soluție pentru dinții puternic deteriorați sau tratați endodontic, care au nevoie de protecție. Ea acoperă dintele în întregime, refăcându-i forma, rezistența și aspectul, astfel încât să poți mesteca și zâmbi în siguranță.",
      "La North Dent, în Râmnicu Vâlcea, alegem împreună soluția potrivită și îți explicăm etapele — de la pregătirea dintelui și amprentă, până la fixarea coroanei. Punem accent pe un rezultat funcțional și cu aspect natural.",
    ],
    cardSummary: "Protejarea și refacerea dinților afectați.",
    featured: true,
    whenRecommended: [
      "După un tratament de canal",
      "La dinți puternic deteriorați sau fisurați",
      "Pentru refacerea formei și a rezistenței",
      "Ca element de sprijin pentru o punte dentară",
    ],
    howItWorks: [
      "Evaluăm dintele și discutăm opțiunile",
      "Pregătim dintele și luăm amprenta",
      "Realizăm coroana adaptată dintelui",
      "Fixăm coroana și verificăm potrivirea",
    ],
    whatToExpect: [
      "Un dinte refăcut și protejat",
      "Aspect natural",
      "Funcție masticatorie restabilită",
    ],
    faqs: [
      {
        question: "Cât durează realizarea unei coroane?",
        answer:
          "De obicei sunt necesare câteva ședințe, între care se realizează coroana. Îți explicăm etapele după consultație.",
      },
      {
        question: "Coroana se vede că nu e dinte natural?",
        answer:
          "Urmărim un rezultat cât mai natural, potrivit ca formă și culoare cu restul dinților.",
      },
      {
        question: "Cât rezistă o coroană?",
        answer:
          "Cu o igienă corectă și controale periodice, o coroană poate rezista mulți ani. Durata depinde de îngrijire și de situația fiecărui pacient.",
      },
    ],
    related: ["punti-dentare", "endodontie", "fatete-dentare"],
  },
  {
    slug: "punti-dentare",
    name: "Punți dentare",
    h1: "Punți dentare în Râmnicu Vâlcea",
    title: "Punți dentare în Râmnicu Vâlcea | North Dent",
    description:
      "Punți dentare la North Dent în Râmnicu Vâlcea pentru înlocuirea dinților lipsă. Redăm zâmbetul și funcția masticatorie.",
    intro:
      "Puntea dentară înlocuiește unul sau mai mulți dinți lipsă, sprijinindu-se pe dinții vecini.",
    body: [
      "Când lipsesc unul sau mai mulți dinți, spațiul liber poate afecta masticația și poziția dinților vecini. Puntea dentară înlocuiește dinții lipsă, sprijinindu-se pe dinții alăturați, și redă atât aspectul zâmbetului, cât și funcția de masticație.",
      "La North Dent, în Râmnicu Vâlcea, evaluăm dacă puntea este soluția potrivită pentru tine și îți explicăm alternativele, cum ar fi proteza dentară. Alegem împreună, în funcție de situația clinică și de ceea ce ți se potrivește.",
    ],
    cardSummary: "Înlocuirea dinților lipsă pentru un zâmbet complet.",
    featured: false,
    whenRecommended: [
      "Când lipsesc unul sau mai mulți dinți alăturați",
      "Pentru refacerea funcției masticatorii",
      "Ca alternativă la proteza mobilă",
      "Când dinții vecini pot susține puntea",
    ],
    howItWorks: [
      "Evaluăm dinții de sprijin și spațiul edentat",
      "Pregătim dinții și luăm amprenta",
      "Realizăm puntea adaptată situației tale",
      "Fixăm puntea și verificăm potrivirea",
    ],
    whatToExpect: [
      "Un zâmbet complet",
      "Masticație mai bună",
      "Un rezultat cu aspect natural",
    ],
    faqs: [
      {
        question: "Puntea sau proteza — ce se potrivește?",
        answer:
          "Depinde de numărul dinților lipsă și de starea dinților vecini. Discutăm opțiunile împreună după consultație.",
      },
      {
        question: "Cât durează realizarea unei punți?",
        answer:
          "De obicei sunt necesare câteva ședințe. Îți explicăm etapele și intervalele după evaluare.",
      },
      {
        question: "Cum îngrijesc o punte dentară?",
        answer:
          "Printr-o igienă atentă, inclusiv a zonei de sub punte, și prin controale periodice. Îți arătăm cum să o cureți corect.",
      },
    ],
    related: ["coroane-dentare", "proteze-dentare", "consultatie-stomatologica"],
  },
  {
    slug: "stomatologie-copii",
    name: "Stomatologie copii",
    h1: "Stomatologie copii în Râmnicu Vâlcea",
    title: "Stomatologie pentru copii în Râmnicu Vâlcea | North Dent",
    description:
      "Stomatologie pentru copii (pedodonție) la North Dent în Râmnicu Vâlcea. Abordare blândă și răbdătoare pentru cei mici.",
    intro:
      "Ne dorim ca fiecare copil să aibă o experiență calmă și pozitivă la cabinet.",
    body: [
      "Primele experiențe la dentist contează mult pentru relația de mai târziu a copilului cu îngrijirea dentară. La North Dent, în Râmnicu Vâlcea, ne apropiem de cei mici cu răbdare și blândețe, îi facem să se simtă în largul lor și le explicăm totul pe înțelesul vârstei lor.",
      "Ne ocupăm de controale, de prevenție și de tratamentul cariilor la dinții de lapte, mergând mereu în ritmul copilului. Le oferim și părinților sfaturi practice pentru îngrijirea dentară acasă.",
    ],
    cardSummary: "Abordare blândă și răbdătoare pentru cei mici.",
    featured: true,
    whenRecommended: [
      "Pentru primul control al copilului",
      "La apariția cariilor la dinții de lapte",
      "Pentru formarea unor obiceiuri sănătoase de îngrijire",
      "Pentru controale periodice de rutină",
    ],
    howItWorks: [
      "Facem cunoștință cu cel mic într-un mod prietenos",
      "Explicăm totul pe înțelesul lui",
      "Realizăm controlul sau tratamentul în ritmul copilului",
      "Oferim sfaturi părinților pentru îngrijirea de acasă",
    ],
    whatToExpect: [
      "O atmosferă calmă și prietenoasă",
      "Răbdare și blândețe",
      "Sfaturi utile pentru părinți",
    ],
    faqs: [
      {
        question: "La ce vârstă e bun primul control?",
        answer:
          "Recomandăm un prim control din primii ani de viață, pentru a obișnui copilul cu mediul cabinetului și pentru prevenție.",
      },
      {
        question: "Trebuie tratate cariile la dinții de lapte?",
        answer:
          "Da. Chiar dacă dinții de lapte se schimbă, cariile netratate pot provoca durere și pot afecta dinții permanenți.",
      },
      {
        question: "Cum ajut copilul să nu îi fie frică?",
        answer:
          "Contează o abordare calmă acasă și la cabinet. Noi mergem în ritmul copilului și transformăm vizita într-o experiență cât mai plăcută.",
      },
    ],
    related: ["consultatie-stomatologica", "tratament-carii", "igienizare-profesionala"],
  },
  {
    slug: "proteze-dentare",
    name: "Proteze dentare",
    h1: "Proteze dentare în Râmnicu Vâlcea",
    title: "Proteze dentare în Râmnicu Vâlcea | North Dent",
    description:
      "Proteze dentare la North Dent în Râmnicu Vâlcea pentru înlocuirea dinților lipsă. Soluții adaptate confortului tău.",
    intro:
      "Protezele dentare înlocuiesc mai mulți dinți lipsă, redând funcția masticatorie și aspectul zâmbetului.",
    body: [
      "Atunci când lipsesc mai mulți dinți, proteza dentară poate reda funcția de masticație și aspectul zâmbetului. Există mai multe tipuri de proteze, iar alegerea depinde de situația clinică și de preferințele tale.",
      "La North Dent, în Râmnicu Vâlcea, evaluăm situația, îți explicăm opțiunile disponibile și te însoțim în perioada de acomodare. Ne dorim ca proteza să fie cât mai confortabilă și adaptată nevoilor tale.",
    ],
    cardSummary: "Soluții pentru înlocuirea mai multor dinți lipsă.",
    featured: false,
    whenRecommended: [
      "Când lipsesc mai mulți dinți",
      "Ca alternativă sau completare la punți",
      "Pentru refacerea zâmbetului și a masticației",
      "Când alte soluții nu sunt potrivite pentru situația ta",
    ],
    howItWorks: [
      "Evaluăm situația clinică",
      "Îți prezentăm tipurile de proteză potrivite",
      "Luăm amprentele și pregătim proteza",
      "Adaptăm proteza pentru confort",
    ],
    whatToExpect: [
      "Un zâmbet refăcut",
      "Masticație îmbunătățită",
      "Recomandări de îngrijire și adaptare",
    ],
    faqs: [
      {
        question: "Cât durează adaptarea la proteză?",
        answer:
          "Perioada de acomodare diferă de la o persoană la alta. Te însoțim pe parcurs și facem ajustările necesare pentru confort.",
      },
      {
        question: "Cum îngrijesc proteza dentară?",
        answer:
          "Prin curățare zilnică și controale periodice. Îți explicăm exact cum să o întreții pentru a rezista în timp.",
      },
      {
        question: "Ce tip de proteză este potrivit pentru mine?",
        answer:
          "Depinde de numărul dinților lipsă și de situația clinică. Stabilim împreună la consultație.",
      },
    ],
    related: ["punti-dentare", "coroane-dentare", "consultatie-stomatologica"],
  },
  {
    slug: "gutiere-bruxism",
    name: "Gutiere bruxism",
    h1: "Gutiere pentru bruxism în Râmnicu Vâlcea",
    title: "Gutiere pentru bruxism în Râmnicu Vâlcea | North Dent",
    description:
      "Gutiere pentru bruxism la North Dent în Râmnicu Vâlcea. Protejează dinții împotriva scrâșnitului și a încleștării.",
    intro:
      "Gutiera de bruxism protejează dinții de uzura cauzată de scrâșnit sau încleștare, mai ales în timpul nopții.",
    body: [
      "Bruxismul — scrâșnitul sau încleștarea dinților, adesea în timpul somnului — poate duce în timp la uzura dinților, sensibilitate și dureri la nivelul maxilarului. Gutiera de bruxism este o soluție simplă care protejează dinții, preluând o parte din presiune.",
      "La North Dent, în Râmnicu Vâlcea, evaluăm semnele de bruxism, luăm amprenta și realizăm o gutieră adaptată ție, confortabilă la purtare. Îți explicăm cum să o folosești și cum să o întreții.",
    ],
    cardSummary: "Protecție împotriva scrâșnitului și încleștării dinților.",
    featured: false,
    whenRecommended: [
      "La scrâșnitul dinților, mai ales noaptea",
      "Când simți încordare sau durere la nivelul maxilarului",
      "În caz de uzură vizibilă a dinților",
      "La dureri de cap dimineața asociate încleștării",
    ],
    howItWorks: [
      "Evaluăm semnele de bruxism și starea dinților",
      "Luăm amprenta pentru gutieră",
      "Realizăm gutiera adaptată ție",
      "Adaptăm gutiera pentru confort și îți explicăm folosirea",
    ],
    whatToExpect: [
      "Protecția dinților în timpul nopții",
      "Reducerea uzurii dentare",
      "O gutieră adaptată ție",
    ],
    faqs: [
      {
        question: "Cum știu dacă am bruxism?",
        answer:
          "Semnele includ scrâșnitul, durerea de maxilar, uzura dinților sau durerile de cap dimineața. Le evaluăm la consultație.",
      },
      {
        question: "Gutiera se poartă toată noaptea?",
        answer:
          "De obicei se poartă în timpul somnului, atunci când apare cel mai des încleștarea. Îți dăm recomandări clare de folosire.",
      },
      {
        question: "Cum întrețin gutiera?",
        answer:
          "Prin curățare regulată și păstrare corectă. Îți explicăm exact cum, ca să reziste cât mai mult.",
      },
    ],
    related: ["consultatie-stomatologica", "coroane-dentare", "estetica-dentara"],
  },
];

const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceBySlug.get(slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => serviceBySlug.get(slug))
    .filter((s): s is Service => Boolean(s));
}
