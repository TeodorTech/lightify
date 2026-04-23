export type NeonCategory = "afaceri" | "eveniment" | "casă";

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: NeonCategory;
  imageUrl: string;
  objectFit?: "contain" | "cover";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CATEGORY_LABELS: Record<NeonCategory, string> = {
  afaceri: "Afaceri",
  eveniment: "Evenimente",
  "casă": "Casă",
};

export const CATEGORY_DESCRIPTIONS: Record<NeonCategory, string> = {
  afaceri:
    "Semnele neon personalizate pentru afaceri sunt mai mult decât un simplu element decorativ — sunt o investiție directă în identitatea vizuală a brandului tău. La Lightify realizăm manual fiecare logo neon și fiecare firmă luminoasă în atelierul nostru din București, folosind tehnologie LED neon flex de ultimă generație care combină impactul vizual al neonului tradițional cu eficiența energetică modernă.\n\nUn neon bine gândit pentru un restaurant, cafenea, salon sau magazin crește vizibilitatea locației, atrage atenția de la distanță și transformă o simplă vitrină într-un reper memorabil. Clienții își amintesc locurile iluminate cu semne neon personalizate, iar pe rețelele sociale acestea devin rapid fundal pentru fotografii — publicitate gratuită și autentică pentru afacerea ta.\n\nFiecare proiect începe cu un mockup digital gratuit, pe care ți-l trimitem în 24 de ore de la solicitare. Alegi culoarea, dimensiunea și tipul de montaj (pe perete, suspendat, pe suport acrilic sau integrat în mobilier). Neonul este livrat cu toate accesoriile necesare, gata de instalare, și vine cu garanție completă. Durata de viață depășește 50.000 de ore de utilizare continuă, iar consumul este de până la 10 ori mai mic decât al neonului clasic cu gaz.\n\nIndiferent că ai nevoie de logo neon pentru un sediu, firmă luminoasă pentru un local sau semnalistică interioară pentru un showroom, realizăm semnul tău la comandă, exact după specificațiile brandului — fără compromisuri și livrat în toată țara.",

  eveniment:
    "Un neon personalizat transformă orice eveniment într-o experiență memorabilă — o nuntă, un botez, o petrecere de majorat sau o aniversare corporate prinde dintr-o dată o dimensiune vizuală nouă când în spatele mesei de prezidiu sau al zonei foto apare un semn luminos cu numele sărbătoriților sau cu un mesaj special.\n\nLa Lightify realizăm neoane pentru evenimente în timp record. Creăm semne cu nume, hashtag-uri, date sau fraze scurte care devin punctul central al decorului și, implicit, al fotografiilor din acea seară. Fiecare neon de eveniment este gândit să fie ușor de transportat, ușor de montat și — la cererea clienților — reutilizabil ulterior ca decor pentru casă.\n\nColaborăm frecvent cu organizatori de evenimente, wedding planners și locații din București pentru comenzi urgente. Timpul standard de execuție este de 5-7 zile lucrătoare, dar pentru proiecte simple putem livra și mai repede. Semnul neon vine gata montat pe suport acrilic transparent, cu lanț sau cabluri pentru prindere, în funcție de cum preferi să îl expui.\n\nNeoanele pentru evenimente sunt realizate cu LED neon flex de calitate profesională — sigure la atingere, fără căldură excesivă, și alimentate la tensiune joasă prin adaptor standard. Le poți monta oriunde ai o priză aproape, fără instalații complicate. Culorile sunt alese împreună cu tine, iar designul poate integra orice font, simbol sau logo personal.",

  "casă":
    "Un semn neon decorativ pentru casă este felul cel mai simplu de a transforma un perete obișnuit într-un accent de design. Fie că vorbim despre dormitor, living, biroul de acasă sau o zonă de bar, neoanele personalizate aduc personalitate, culoare și o atmosferă caldă pe care iluminatul clasic pur și simplu nu o poate reproduce.\n\nLa Lightify realizăm neoane pentru casă după ideile tale — un mesaj care îți place, numele tău sau al persoanei dragi, o frază din piesa preferată, un simbol sau o formă abstractă care completează stilul camerei. Lucrăm manual fiecare bucată în atelierul nostru din București, așa încât ce primești este un obiect unic, nu un produs de serie.\n\nTehnologia LED neon flex pe care o folosim este sigură pentru interior: nu se încălzește, consumă foarte puțin curent (aprins toată noaptea nu se simte pe factură), iar durata de viață estimată depășește 50.000 de ore. Neoanele sunt montate pe suport acrilic transparent care se fixează ușor pe perete cu 2-4 șuruburi, iar alimentarea se face printr-un adaptor discret la priză.\n\nLivrăm în toată țara și oferim consultanță gratuită pentru alegerea dimensiunii și a culorii potrivite pentru spațiul tău. Dacă nu ești sigur cum va arăta, îți trimitem gratuit un mockup digital care simulează neonul pe o fotografie a camerei tale — așa vezi exact rezultatul înainte să comanzi.",
};

export const CATEGORY_FAQS: Record<NeonCategory, FAQItem[]> = {
  afaceri: [
    {
      question: "Cât durează realizarea unui neon pentru afacere?",
      answer:
        "În general, 7-14 zile lucrătoare de la aprobarea mockup-ului, în funcție de complexitate și dimensiune. Pentru proiecte urgente putem livra și mai repede.",
    },
    {
      question: "Ce dimensiuni se pot face pentru un logo luminos?",
      answer:
        "Realizăm neoane de la 40 cm lățime până la peste 2 metri. Dimensiunea recomandată depinde de distanța de vizualizare — îți sugerăm mărimea potrivită după ce ne trimiți fotografii ale locației.",
    },
    {
      question: "Cum se montează semnul neon la vitrină sau pe fațadă?",
      answer:
        "Neonul vine montat pe suport acrilic transparent, gata de prindere cu șuruburi sau distanțiere. Pentru exterior folosim suport rezistent la intemperii și conexiuni izolate IP65.",
    },
    {
      question: "Există garanție pentru neoanele de afaceri?",
      answer:
        "Da, oferim 24 de luni garanție pentru LED și componente. Durata de viață estimată a neonului este de peste 50.000 de ore, adică peste 10 ani la utilizare zilnică normală.",
    },
  ],
  eveniment: [
    {
      question: "Cât durează realizarea unui neon pentru eveniment?",
      answer:
        "Standard 5-7 zile lucrătoare. Pentru comenzi urgente (nuntă, botez, aniversare într-un weekend apropiat), încercăm să găsim soluții — sună-ne și discutăm.",
    },
    {
      question: "Pot închiria un neon în loc să îl cumpăr?",
      answer:
        "Nu oferim închirieri. Toate neoanele sunt realizate personalizat pentru tine și rămân ale tale — le poți folosi ulterior ca decor acasă.",
    },
    {
      question: "Ce dimensiuni sunt recomandate pentru un perete de evenimente?",
      answer:
        "Pentru o nuntă sau un majorat cu 100+ invitați, recomandăm dimensiuni între 80 cm și 150 cm lățime. Pentru petreceri mai intime, 50-80 cm este suficient.",
    },
    {
      question: "Cum transport și montez neonul la sala evenimentului?",
      answer:
        "Neonul vine în ambalaj special de transport, cu cablu de alimentare standard și lanț sau cabluri de prindere. Se atârnă ca un tablou — nu necesită echipaj tehnic.",
    },
  ],
  "casă": [
    {
      question: "Este sigur să las neonul pornit toată noaptea?",
      answer:
        "Da, în totalitate. LED neon flex nu se încălzește și consumă doar câțiva wați. Poate rămâne aprins 24/7 fără probleme de siguranță sau de factură.",
    },
    {
      question: "Cum îl montez pe perete?",
      answer:
        "Neonul vine pe suport acrilic transparent cu orificii pentru șuruburi. Îți trimitem un kit de montaj cu diblurile și șuruburile necesare. Instalarea durează 10-15 minute.",
    },
    {
      question: "Pot alege orice text sau formă?",
      answer:
        "Da — numele tău, o frază, un simbol, un logo personal, o siluetă. Începem cu o schiță gratuită a ideii tale înainte de execuție.",
    },
    {
      question: "Ce culori sunt disponibile?",
      answer:
        "Avem peste 10 culori standard (alb cald, alb rece, roz, roșu, albastru, verde, galben, portocaliu, mov, turcoaz) și opțiuni RGB care pot schimba culorile cu telecomandă.",
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "neon-brand-jidvei",
    title: "Neon Brand Jidvei",
    description:
      "Întărește identitatea vizuală a brandului tău cu un logo neon premium, realizat manual pentru un impact vizual maxim.",
    category: "afaceri",
    imageUrl: "/images/jidvei.webp",
  },
  {
    id: 14,
    slug: "neon-hai-la-majorat",
    title: "Neon Hai La Majorat",
    description:
      "Sărbătorește trecerea la majorat cu un decor spectaculos. Un semn neon care devine punctul de atracție al oricărei petreceri de 18 ani.",
    category: "eveniment",
    imageUrl: "/images/majoratWide.webp",
  },
  {
    id: 13,
    slug: "neon-torerro",
    title: "Neon Torerro",
    description:
      "Un design vibrant și plin de pasiune, creat special pentru a adăuga o notă de exclusivitate și energie oricărui club sau local.",
    category: "afaceri",
    imageUrl: "/images/torerro2.webp",
  },
  {
    id: 2,
    slug: "neon-balcan-hr",
    title: "Neon Balcan HR",
    description:
      "Transformă imaginea afacerii tale cu un semn neon vibrant care atrage privirile și creează o identitate memorabilă.",
    category: "afaceri",
    imageUrl: "/images/balcan.jpg",
  },
  {
    id: 3,
    slug: "neon-maria-18-birthday",
    title: "Neon Maria 18 Birthday Party",
    description:
      "Adaugă un strop de magie petrecerii de zi de naștere cu un design neon festiv și plin de culoare.",
    category: "eveniment",
    imageUrl: "/images/maria18.jpeg",
  },
  {
    id: 4,
    slug: "neon-manele-mentolate",
    title: "Neon Manele Mentolate",
    description:
      "Logo-uri neon realizate la comandă pentru branduri care vor să iasă în evidență într-un mod spectaculos.",
    category: "afaceri",
    imageUrl: "/images/maneleMentolate.jpg",
  },
  {
    id: 5,
    slug: "neon-plush-birthday",
    title: "Neon Plush Birthday Party",
    description:
      "Un element central perfect pentru orice aniversare, aducând lumină și bucurie momentelor speciale.",
    category: "eveniment",
    imageUrl: "/images/plushBday.webp",
  },
  {
    id: 6,
    slug: "neon-angels-and-demons",
    title: "Neon Decorative Angels & Demons",
    description:
      "Îmbunătățește atmosfera de lucru cu elemente decorative din neon care inspiră creativitate și profesionalism.",
    category: "casă",
    imageUrl: "/images/hearts.jpeg",
  },
  {
    id: 7,
    slug: "neon-toate-diamantele",
    title: "Neon Toate Diamantele",
    description:
      "Personalizează-ți spațiul personal cu un accent luminos care reflectă stilul și personalitatea ta.",
    category: "casă",
    imageUrl: "/images/diamente.webp",
  },
  {
    id: 8,
    slug: "neon-thunder-strike",
    title: "Neon Thunder Strike",
    description:
      "O explozie de energie capturată în neon, perfectă pentru a adăuga un look electrizant oricărui interior modern.",
    category: "casă",
    imageUrl: "/images/thunder.webp",
  },
  {
    id: 9,
    slug: "neon-scandal",
    title: "Neon Scandal",
    description:
      "Îndrăzneț și provocator, acest semn neon este creat special pentru spații care vor să iasă în evidență prin atitudine.",
    category: "afaceri",
    imageUrl: "/images/scandal.webp",
  },
  {
    id: 10,
    slug: "neon-cloudy-sky",
    title: "Neon Cloudy Sky",
    description:
      "Adu liniștea și magia unui cer înnoptat direct în camera ta cu un design diafan și relaxant.",
    category: "casă",
    imageUrl: "/images/cloud.webp",
  },
  {
    id: 11,
    slug: "neon-buna-dimineata",
    title: "Neon Buna Dimineața",
    description:
      "Adu un zâmbet pe buzele oricui cu un salut luminos și primitor, perfect pentru cafenele sau bucătării moderne.",
    category: "afaceri",
    imageUrl: "/images/buna.webp",
  },
  {
    id: 12,
    slug: "neon-on-air",
    title: "Neon On Air",
    description:
      "Ideal pentru studiouri, vloggeri sau pasionați de broadcasting, acest semn adaugă un aer profesional oricărui setup de streaming.",
    category: "afaceri",
    imageUrl: "/images/on-air.webp",
  },
  {
    id: 15,
    slug: "neon-love-people",
    title: "Neon Love People",
    description:
      "Un mesaj cald și luminos pentru spațiul tău personal, perfect pentru a adăuga căldură și personalitate oricărui colț de acasă.",
    category: "casă",
    imageUrl: "/images/lovePeople.webp",
  },
  {
    id: 16,
    slug: "neon-pull-up",
    title: "Neon Pull Up",
    description:
      "Design îndrăzneț și energic, creat pentru afaceri care vor să transmită forță și dinamism prin identitatea lor vizuală.",
    category: "afaceri",
    imageUrl: "/images/pullUp.webp",
  },
  {
    id: 17,
    slug: "neon-pizza-al-taglio",
    title: "Neon Pizza Al Taglio",
    description:
      "Semn neon cu personalitate pentru restaurante și localuri cu specific italian, care atrage clienți și creează o atmosferă autentică.",
    category: "afaceri",
    imageUrl: "/images/pizzaAlTaglio.webp",
    objectFit: "contain",
  },
];

export const getItemBySlug = (slug: string): PortfolioItem | undefined =>
  portfolioItems.find((item) => item.slug === slug);

export const getSimilarItems = (
  item: PortfolioItem,
  count = 3
): PortfolioItem[] =>
  portfolioItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, count);

export const getLongDescription = (item: PortfolioItem): string =>
  item.longDescription ?? CATEGORY_DESCRIPTIONS[item.category];
