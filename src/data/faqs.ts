// Întrebări frecvente. Cele de pe homepage sunt marcate cu FAQPage schema
// DOAR pentru întrebările vizibile pe pagină.
//
// Pagina /faq/ grupează întrebările pe categorii (h2) pentru structură semantică
// și citabilitate în motoarele de căutare / răspunsurile AI. JSON-LD FAQPage
// include toate întrebările vizibile, indiferent de categorie.

import { site } from "@/data/site";

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqCategory {
  /** Identificator stabil pentru ancoră (slug) */
  id: string;
  /** Titlu secțiune (h2) */
  title: string;
  /** Intro scurt opțional sub titlul categoriei */
  description?: string;
  faqs: Faq[];
}

const { phoneDisplay, address, doctor } = site;
const area = address.areaLabel;
const locality = address.addressLocality;

/** Text program actual — aliniat cu site.openingHours */
const programText =
  "Luni–vineri suntem deschiși între 09:00 și 20:00. Sâmbătă și duminică cabinetul este închis.";

// FAQ scurt pentru homepage (5 întrebări) — vizibile și marcate cu schema.
export const homepageFaqs: Faq[] = [
  {
    question: "Cum mă programez la North Dent?",
    answer:
      "Cel mai simplu este să ne scrii pe WhatsApp la " +
      phoneDisplay +
      ". Îți răspundem în timp util și îți propunem un interval potrivit programului tău.",
  },
  {
    question: "Unde se află cabinetul stomatologic North Dent?",
    answer:
      "Ne găsești în " +
      area +
      ", pe " +
      address.streetAddress +
      ". Poți deschide locația exactă în Google Maps din pagina de contact.",
  },
  {
    question: "Tratați și copii la cabinetul stomatologic?",
    answer:
      "Da. Oferim stomatologie pentru copii, cu răbdare și o abordare blândă, adaptată vârstei și nivelului de confort al fiecărui copil.",
  },
  {
    question: "Sunt o persoană anxioasă. Cum mă puteți ajuta?",
    answer:
      "Îți explicăm fiecare pas înainte de a începe și mergem în ritmul tău. Ne dorim ca fiecare pacient să se simtă ascultat și în siguranță la cabinet.",
  },
  {
    question: "Faceți implanturi dentare sau ortodonție la North Dent?",
    answer:
      "În prezent nu oferim implanturi dentare sau ortodonție (aparat dentar). Anumite cazuri chirurgicale sau ortodontice pot fi îndrumate discret către cabinete partenere din Râmnicu Vâlcea.",
  },
];

export const generalFaqCategories: FaqCategory[] = [
  {
    id: "programari",
    title: "Programări și contact",
    description:
      "Cum ne contactezi, cum funcționează programarea și ce poți face dacă ai nevoie de o vizită cât mai curând.",
    faqs: [
      {
        question: "Care este cea mai rapidă modalitate de programare la North Dent?",
        answer:
          "Cea mai rapidă modalitate este mesajul pe WhatsApp la " +
          phoneDisplay +
          ". Ne spui ce te deranjează sau ce serviciu îți dorești, iar noi îți propunem un interval disponibil. Poți programa și prin telefon sau email, dar WhatsApp rămâne canalul preferat pentru răspuns prompt.",
      },
      {
        question: "Pot programa o consultație stomatologică pentru altcineva (copil, părinte)?",
        answer:
          "Da. Poți scrie pe WhatsApp în numele unui membru al familiei. Te rugăm să ne transmiți numele persoanei, vârsta (dacă e copil) și motivul vizitei, ca să rezervăm timp suficient și să pregătim abordarea potrivită.",
      },
      {
        question: "Cât de repede pot obține o programare la cabinetul din Râmnicu Vâlcea?",
        answer:
          "Încercăm să găsim un interval cât mai apropiat de solicitarea ta, în funcție de programul cabinetului și de tipul vizitei. Pentru disconfort sau durere, menționează acest lucru în mesaj — prioritizăm cazurile care necesită atenție rapidă, în limita orelor de program.",
      },
      {
        question: "Ce fac dacă trebuie să reprogramez sau să anulez vizita?",
        answer:
          "Scrie-ne pe WhatsApp cât mai devreme, cu o zi înainte dacă se poate. Astfel putem oferi locul altui pacient. Nu există o penalitate formală, dar apreciem să ne anunți la timp.",
      },
      {
        question: "Primiți mesaje și în afara programului de lucru?",
        answer:
          "Poți trimite mesaje pe WhatsApp oricând. Le citim în timpul programului cabinetului (" +
          programText.toLowerCase().replace(/\.$/, "") +
          ") și îți răspundem atunci. Pentru urgențe medicale severe în afara orelor de program, contactează serviciile de urgență sau unitățile stomatologice de gardă din oraș.",
      },
      {
        question: "Pot veni fără programare la North Dent?",
        answer:
          "Lucrăm exclusiv pe bază de programare, pentru a-ți acorda timp suficient și a evita așteptarea prelungită. Scrie-ne pe WhatsApp și îți confirmăm rapid un interval.",
      },
    ],
  },
  {
    id: "locatie-program",
    title: "Locație, acces și program",
    description:
      "Unde ne găsești în Zona Nord din Râmnicu Vâlcea, cum ajungi la cabinet și când suntem deschiși.",
    faqs: [
      {
        question: "Unde se află cabinetul stomatologic North Dent în Râmnicu Vâlcea?",
        answer:
          "North Dent este în " +
          area +
          ", la adresa " +
          address.streetAddress +
          ", " +
          locality +
          ". Linkul către Google Maps este disponibil pe pagina de contact — îl poți folosi pentru navigație pas cu pas.",
      },
      {
        question: "Care este programul de lucru al cabinetului?",
        answer: programText,
      },
      {
        question: "Cabinetul este deschis vineri sau în weekend?",
        answer:
          "Da, vineri avem același program: 09:00–20:00. Sâmbătă și duminică cabinetul este închis.",
      },
      {
        question: "Cum ajung la North Dent cu mașina sau cu transportul public?",
        answer:
          "Cabinetul se află pe Str. Henri Coandă, în Zona Nord a municipiului Râmnicu Vâlcea. Pentru traseul exact, folosește butonul de direcții din Google Maps de pe site. Dacă ai nevoie de indicații suplimentare, scrie-ne pe WhatsApp și te ghidăm.",
      },
      {
        question: "Există parcare în apropierea cabinetului stomatologic?",
        answer:
          "În zona Str. Henri Coandă există locuri de parcare în apropiere, însă disponibilitatea variază în funcție de oră. Îți recomandăm să vii cu câteva minute înainte de programare, mai ales la prima vizită.",
      },
    ],
  },
  {
    id: "prima-vizita",
    title: "Prima vizită și consultația stomatologică",
    description:
      "Ce se întâmplă la prima programare, ce documente sau informații sunt utile și cum decurge evaluarea.",
    faqs: [
      {
        question: "Ce presupune prima vizită la un cabinet stomatologic?",
        answer:
          "Prima vizită începe cu o discuție despre ce te aduce la cabinet și despre istoricul tău dentar. " +
          doctor.name +
          " examinează dinții, gingiile și țesuturile din cavitatea bucală, apoi îți explică ce a observat, pe înțelesul tău. La final stabilim împreună un plan de tratament, cu pași clari și priorități.",
      },
      {
        question: "Ce documente sau informații ar trebui să aduc la consultație?",
        answer:
          "Dacă ai radiografii dentare recente sau un plan de tratament de la alt medic, adu-le la consultație — ne ajută să înțelegem contextul. Menționează medicamentele pe care le iei în mod curent și orice alergii cunoscute. Pentru copii, e util să știm dacă au mai fost la dentist și cum au reacționat.",
      },
      {
        question: "Cât durează o consultație stomatologică la North Dent?",
        answer:
          "Durata depinde de complexitatea cazului. O consultație de rutină durează, de obicei, suficient timp pentru examinare și discuție fără grabă. Dacă știi că ai mai multe probleme de evaluat, menționează acest lucru la programare.",
      },
      {
        question: "Primiți pacienți noi care nu au mai fost la North Dent?",
        answer:
          "Da, primim pacienți noi din Râmnicu Vâlcea și din împrejurimi. Prima vizită este consultația stomatologică — punctul de plecare pentru orice plan de tratament.",
      },
      {
        question: "Cât de des ar trebui să merg la control stomatologic?",
        answer:
          "În general, un control la 6–12 luni este recomandat pentru majoritatea adulților, împreună cu igienizarea profesională. Intervalul exact îl stabilim după consultație, în funcție de starea gingiilor, istoricul de carii și obiceiurile tale de igienă orală.",
      },
      {
        question: "Faceți radiografii dentare la cabinet?",
        answer:
          "Radiografiile se realizează când sunt necesare pentru diagnostic, cu acordul tău și după ce îți explicăm de ce sunt utile. Nu recomandăm investigații inutile — decizia se ia împreună, în funcție de situația clinică.",
      },
    ],
  },
  {
    id: "pacienti-copii-anxiosi",
    title: "Pacienți anxioși, copii și familii",
    description:
      "Abordarea noastră pentru cei care se simt neliniștiți, pentru copii și pentru familii care caută un medic stomatolog calm în Râmnicu Vâlcea.",
    faqs: [
      {
        question: "Cum abordați pacienții cu frică de dentist?",
        answer:
          "Pentru pacienții anxioși, explicăm fiecare pas înainte de a începe, răspundem la întrebări și mergem în ritmul tău. Poți cere pauze oricând ai nevoie. Scopul nostru este ca fiecare pacient să se simtă ascultat și în siguranță, nu grăbit sau presat.",
      },
      {
        question: "De la ce vârstă pot aduce copilul la stomatolog?",
        answer:
          "Recomandăm prima vizită de obicei după apariția primilor dinți de lapte sau cel târziu până la vârsta de un an, conform ghidurilor de prevenție. La North Dent adaptăm vizita la vârsta copilului — de la simplă familiarizare cu mediul cabinetului până la controale și tratamente, mereu cu răbdare.",
      },
      {
        question: "Ce servicii stomatologice oferiți pentru copii?",
        answer:
          "Oferim consultații, controale de rutină, tratamentul cariilor la dinții de lapte, sfaturi de prevenție pentru părinți și igienizare adaptată vârstei. Mergem în ritmul copilului și explicăm pe înțelesul lui (și al părinților) ce urmează să facem.",
      },
      {
        question: "Pot rămâne lângă copil în timpul tratamentului?",
        answer:
          "Da, în majoritatea cazurilor părintele poate rămâne aproape. Pentru copiii foarte mici sau anxioși, prezența ta ajută la crearea unui mediu familiar. Discutăm dinainte ce funcționează cel mai bine pentru copilul tău.",
      },
      {
        question: "Tratați mai mulți membri ai familiei la aceeași programare?",
        answer:
          "Putem programa vizite consecutive pentru mai mulți membri ai familiei, în aceeași zi, dacă programul permite. Scrie-ne pe WhatsApp câți pacienți sunt și ce tip de vizită doresc fiecare, iar noi organizăm intervalele.",
      },
      {
        question: "Este stomatologia sigură în timpul sarcinii?",
        answer:
          "Anumite tratamente stomatologice pot fi realizate și în timpul sarcinii, dar planul se stabilește individual, în consultație, ținând cont de trimestru și de recomandările medicului tău obstetrician. Spune-ne dacă ești însărcinată la programare — adaptăm abordarea în consecință.",
      },
    ],
  },
  {
    id: "tratamente-servicii",
    title: "Tratamente și servicii stomatologice",
    description:
      "Ce putem trata la North Dent în Râmnicu Vâlcea și ce informații generale merită să știi înainte de programare.",
    faqs: [
      {
        question: "Ce servicii stomatologice oferă North Dent?",
        answer:
          "Oferim consultații stomatologice, igienizare profesională, detartraj, Airflow, tratament al cariilor, endodonție (tratament de canal), estetică dentară, albire dentară, fațete, lucrări protetice (coroane, punți, proteze), stomatologie pentru copii și gutiere pentru bruxism. Lista completă este pe pagina Servicii.",
      },
      {
        question: "Faceți implanturi dentare sau aparat dentar (ortodonție)?",
        answer:
          "Nu. Implanturile dentare și ortodonția (aparatul dentar) nu sunt în prezent servicii oferite la North Dent. Dacă ai nevoie de aceste tratamente, putem discuta opțiuni de îndrumare către specialiști parteneri din Râmnicu Vâlcea, fără obligație.",
      },
      {
        question: "Care este diferența între igienizare profesională, detartraj și Airflow?",
        answer:
          "Detartrajul îndepărtează tartrul (depunerile întărite) de pe dinți. Airflow folosește pulbere fină și apă pentru a curăța petele superficiale și placa bacteriană. Igienizarea profesională combină, de obicei, aceste proceduri cu periajul profesional, pentru o curățare completă a dinților și a marginii gingiilor.",
      },
      {
        question: "Când este recomandată igienizarea profesională?",
        answer:
          "Igienizarea profesională este recomandată periodic — de obicei la 6–12 luni — chiar dacă te speli corect pe dinți acasă. Ajută la prevenirea inflamației gingiilor, a cariilor și a mirosului neplăcut. Intervalul exact îl stabilim după evaluarea stării tale orale.",
      },
      {
        question: "Cum se tratează o carie la North Dent?",
        answer:
          "După consultație, îți explicăm extinderea cariei și opțiunile de tratament. În funcție de caz, curățăm zona afectată și o restabilim cu material de obturație (plombă), adaptat locului și funcției dintelui. Tratamentul este explicat pas cu pas înainte de a începe.",
      },
      {
        question: "Ce este tratamentul de canal (endodonția) și când este necesar?",
        answer:
          "Endodonția tratează inflamația sau infecția din interiorul dintelui (pulpa). Devine necesară când caria a ajuns adânc, când există durere pulpară sau când dintele a fost traumatizat. Scopul este salvarea dintelui, nu extracția. Planul și numărul de ședințe se stabilesc după evaluare clinică și radiografică.",
      },
      {
        question: "Oferiți albire dentară în Râmnicu Vâlcea? Este sigură?",
        answer:
          "Da, oferim albire dentară realizată în cabinet, sub supravegherea medicului. Înainte de procedură evaluăm dacă ești candidat potrivit — anumite situații (sensibilitate severă, carii netratate, lucrări pe dinții frontali) pot necesita pregătire prealabilă. Rezultatul variază în funcție de culoarea naturală a dinților.",
      },
      {
        question: "Ce sunt fațetele dentare și pentru cine sunt potrivite?",
        answer:
          "Fațetele sunt lucrări subțiri aplicate pe fața vizibilă a dinților frontali, pentru a îmbunătăți forma, culoarea sau alinierea ușoară. Sunt o opțiune de estetică dentară, nu o soluție universală — discutăm în consultație dacă se potrivesc situației tale și ce alternative există.",
      },
      {
        question: "Ce sunt lucrările protetice și ce include protetica dentară?",
        answer:
          "Lucrările protetice refac sau înlocuiesc dinții afectați sau lipsă. La North Dent includ coroane dentare (pentru dinți slăbiți sau tratați endodontic), punți dentare (pentru dinți lipsă alăturați) și proteze dentare (parțiale sau totale). Tipul de lucrare se stabilește după consultație, în funcție de situația clinică și de obiectivele tale.",
      },
      {
        question: "Când am nevoie de o coroană dentară sau de o punte?",
        answer:
          "Coroana protejează un dinte slăbit, fracturat sau tratat endodontic. Puntea înlocuiește unul sau mai mulți dinți lipsă, sprijinită pe dinții vecini. Ambele opțiuni se discută după consultație, când evaluăm structura dinților și nevoile tale funcționale și estetice.",
      },
      {
        question: "Ce sunt gutierele pentru bruxism și cum mă ajută?",
        answer:
          "Gutierele (șele de protecție) se poartă de obicei noaptea și protejează dinții de uzura cauzată de strângerea sau scârțâitul dinți (bruxism). După evaluare, putem realiza o gutieră personalizată. Nu opresc bruxismul în sine, dar reduc riscul de deteriorare dentară.",
      },
      {
        question: "Oferiți proteze dentare? Ce tipuri?",
        answer:
          "Da, realizăm proteze dentare parțiale sau totale, în funcție de câte dinți lipsesc. Proteza trebuie să fie confortabilă și funcțională — de aceea sunt necesare una sau mai multe ședințe pentru amprentare, probe și ajustări.",
      },
    ],
  },
  {
    id: "durere-urgente",
    title: "Durere, urgențe și situații frecvente",
    description:
      "Ce poți face când apare durerea, o sensibilitate sau o situație neașteptată legată de dinți.",
    faqs: [
      {
        question: "Am durere de dinți — ce ar trebui să fac?",
        answer:
          "Scrie-ne pe WhatsApp la " +
          phoneDisplay +
          " și descrie durerea: când a apărut, intensitatea, dacă e continuă sau la rece/cald. Încercăm să te programăm cât mai repede în programul de lucru. Dacă durerea este severă, cu febră sau umflătură mare, contactează urgențele sau unitățile stomatologice de gardă.",
      },
      {
        question: "Tratați urgențe stomatologice în aceeași zi?",
        answer:
          "În limita programului și a disponibilității, prioritizăm pacienții cu durere sau disconfort acut. Nu funcționăm ca serviciu de urgență 24/7 — pentru cazuri severe în afara orelor de program, adresează-te unităților de gardă din Râmnicu Vâlcea.",
      },
      {
        question: "Dintele meu este sensibil la rece sau la dulce. Este grav?",
        answer:
          "Sensibilitatea poate avea mai multe cauze: retracție gingivală, smalț uzat, carie incipientă sau expunere dentinară după o obturație. O consultație ne ajută să identificăm cauza și să propunem tratamentul potrivit — de la schimbări simple de igienă până la obturații sau tratamente specifice.",
      },
      {
        question: "Mi s-a rupt o plombă sau o bucată din dinte. Ce fac?",
        answer:
          "Contactează-ne pe WhatsApp cât mai curând. Evită să mesteci pe partea afectată și clătește ușor cu apă caldă. Vom evalua dintele și vom decide dacă se poate repara cu o nouă obturație sau dacă e nevoie de o coroană ori altă lucrare.",
      },
      {
        question: "Gingiile mele sângerează când mă spăl pe dinți. Trebuie să merg la dentist?",
        answer:
          "Sângerarea gingiilor este, de obicei, un semn de inflamație (gingivită) cauzată de placa bacteriană sau tartru. Nu ignoră acest simptom — o igienizare profesională și îmbunătățirea igienei acasă pot rezolva problema. Dacă sângerarea persistă, programează o consultație.",
      },
      {
        question: "Am umflătură la gingie sau la față. Ce înseamnă?",
        answer:
          "O umflătură poate indica o infecție dentară sau o inflamație care necesită evaluare promptă. Scrie-ne pe WhatsApp pentru o programare prioritară. Dacă umflătura se extinde rapid, ai febră sau dificultăți la înghițire, caută ajutor medical de urgență.",
      },
    ],
  },
  {
    id: "costuri-plata",
    title: "Costuri, plată și plan de tratament",
    description:
      "Cum aflăm costul tratamentului, ce metode de plată acceptăm și cum funcționează planificarea financiară.",
    faqs: [
      {
        question: "Cât costă o consultație stomatologică la North Dent?",
        answer:
          "Nu publicăm o listă de prețuri pe site. În cabinet avem tarife afișate, iar înainte de orice intervenție îți comunicăm costul estimat. Pentru o estimare personalizată, scrie-ne pe WhatsApp sau programează o consultație — planul și costurile se stabilesc după evaluare.",
      },
      {
        question: "Cum aflu costul unui tratament înainte să încep?",
        answer:
          "La consultație primești un plan de tratament cu pași și costuri estimate pentru fiecare etapă. Nimic nu se face fără acordul tău. Dacă ai un buget limitat, spune-ne — putem prioritiza etapele și găsi o abordare etapizată.",
      },
      {
        question: "Pot plăti cu cardul la cabinetul stomatologic?",
        answer:
          "Da. Acceptăm plata cu cardul (POS) și numerar. Plata se face la fiecare ședință, pentru serviciile prestate în acea vizită.",
      },
      {
        question: "Oferiți rate sau plata în mai multe tranșe?",
        answer:
          "Pentru tratamente complexe, putem împărți planul în etape cu plăți separate la fiecare ședință. Nu oferim în prezent credite medicale sau sisteme de finanțare externe — discutăm opțiunile direct în cabinet.",
      },
      {
        question: "Tratamentele stomatologice sunt decontate de CAS sau de asigurări private?",
        answer:
          "North Dent funcționează în regim privat. Decontarea prin Casa de Asigurări de Sănătate sau prin polițe private depinde de tipul contractului tău și de serviciul solicitat. Pentru detalii despre decontare, verifică direct cu asiguratorul tău — noi îți putem elibera documentele necesare după tratament, acolo unde este cazul.",
      },
      {
        question: "Primesc bon fiscal sau factură pentru tratamentele stomatologice?",
        answer:
          "Da, emitem bon fiscal pentru plățile efectuate la cabinet. Dacă ai nevoie de factură pe persoană juridică, anunță-ne înainte de plată.",
      },
    ],
  },
];

/** Listă plată — toate întrebările de pe /faq/, pentru JSON-LD și export simplu */
export const generalFaqs: Faq[] = generalFaqCategories.flatMap((c) => c.faqs);
