import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PetDetailsData {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  size: string;
  city: string;
  state: string;
  image: string;
  badge: string;
  about: string;
  about2: string;
  personality: { icon: string; label: string }[];
  health: string[];
  ngoName: string;
  ngoRating: string;
  ngoFounderImg: string;
  ngoFounded: string;
  ngoDescription: string;
}

const PETS_DB: Record<string, PetDetailsData> = {
  bethoven: {
    id: "bethoven",
    name: "Bethoven (Casper)",
    species: "Cão",
    breed: "Samoieda",
    age: "2 anos",
    size: "Grande",
    city: "São Paulo",
    state: "SP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPj3bK2km7ZRlPiqCKpsmQSASOYIBj6d1RyCBFpq5HCCDyq3AD3t6PXtEPKtNiDt-S7ZbHH-LcSSW0I4k84eoBzrQRU9kfhSTkdGPX9Xyoynn5TambwRemY41sWdhQEVH-9rrrh2opf043fzB5I-SSShcfouJRoS1WFF9SMfQGWawWUTr7sRl0LM0xdbqZWhdN96R-laZ4JffjmEYbWRP02-ful6C7mPY7dd_A_A5lHaPyD23Ichg19i_HoBpz06TWDgmrD7akwtKZ",
    badge: "Disponível",
    about: "Bethoven (também conhecido como Casper) é uma alma gentil que foi resgatada de um canteiro de obras movimentado. Apesar de seus começos um tanto solitários, ele floresceu em um companheiro alegre e afetuoso. Ele é conhecido por seu 'sorriso' característico e sua pelagem macia de nuvem que ele adora escovar.",
    about2: "Ele é altamente socializado com outros cães e demonstrou grande paciência com crianças. Está procurando um lar onde possa fazer muitos exercícios ao ar livre e ter um lugar macio para tirar uma soneca à tarde. Sua lealdade é inigualável e ele seguirá você de sala em sala apenas para estar perto de sua família.",
    personality: [
      { icon: "cruelty_free", label: "Dócil" },
      { icon: "psychology", label: "Inteligente" },
      { icon: "fitness_center", label: "Ativo" }
    ],
    health: [
      "Totalmente vacinado e com as vacinas em dia.",
      "Castrado e microchipado.",
      "Check-up de saúde regular concluído recentemente."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta necessidade."
  },
  casper: {
    id: "casper",
    name: "Casper",
    species: "Cão",
    breed: "Samoieda",
    age: "2 anos",
    size: "Grande",
    city: "São Paulo",
    state: "SP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPj3bK2km7ZRlPiqCKpsmQSASOYIBj6d1RyCBFpq5HCCDyq3AD3t6PXtEPKtNiDt-S7ZbHH-LcSSW0I4k84eoBzrQRU9kfhSTkdGPX9Xyoynn5TambwRemY41sWdhQEVH-9rrrh2opf043fzB5I-SSShcfouJRoS1WFF9SMfQGWawWUTr7sRl0LM0xdbqZWhdN96R-laZ4JffjmEYbWRP02-ful6C7mPY7dd_A_A5lHaPyD23Ichg19i_HoBpz06TWDgmrD7akwtKZ",
    badge: "Disponível",
    about: "Casper é uma alma gentil que foi resgatado de um canteiro de obras movimentado. Apesar de seus começos um tanto solitários, ele floresceu em um companheiro alegre e afetuoso. Ele é conhecido por seu 'sorriso' característico e sua pelagem macia de nuvem que ele adora escovar.",
    about2: "Ele é altamente socializado com outros cães e demonstrou grande paciência com crianças. Casper está procurando um lar onde possa obter bastante exercício ao ar livre e um lugar macio para tirar uma soneca à tarde. Sua lealdade é incomparável, e ele o seguirá de sala em sala apenas para estar perto de sua família.",
    personality: [
      { icon: "cruelty_free", label: "Gentil" },
      { icon: "psychology", label: "Inteligente" },
      { icon: "fitness_center", label: "Ativo" }
    ],
    health: [
      "Totalmente vacinado e com as vacinas em dia.",
      "Castrado e microchipado.",
      "Check-up de saúde de rotina concluído em junho de 2024."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta complexidade."
  },
  mimo: {
    id: "mimo",
    name: "Mimo",
    species: "Gato",
    breed: "SRD - Laranja",
    age: "3 meses",
    size: "Pequeno",
    city: "Curitiba",
    state: "PR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGFnvXBnz3kWydNsHG1IwYjbWGd0Q_GhecHFyt3k3vYZt--8J0AFJWcDsn9f0tULf8tVSuY7LD0eHh9WH43CqRRVgwfBS0sHpeFqgSVEAjhduDoLn1-zgnaBdh8qSrDEU-DEv5Za5bU-sS-rLdSTd7tdpGKMvrwzf7MCSCCMJGHa-eFDkoQOPRCbIXUfoqlMi5srZXq5MP8uiFa4dUr4f0P_ecldQZevQ_2z0KKxZD2grRisx9VXVAak_Qciss7cfxktohpGnJoMah",
    badge: "Disponível",
    about: "Mimo é um gatinho laranja extremamente brincalhão e enérgico. Ele foi resgatado recentemente após ser encontrado sozinho em um jardim. Ele adora correr atrás de bolinhas de papel e escalar pequenos arranhadores.",
    about2: "Muito afetuoso, ele adora dormir no colo e ronronar alto para mostrar sua gratidão. É ideal para famílias ou apartamentos onde receberá bastante carinho.",
    personality: [
      { icon: "celebrity", label: "Brincalhão" },
      { icon: "mood", label: "Carinhoso" },
      { icon: "bolt", label: "Enérgico" }
    ],
    health: [
      "Primeira dose das vacinas essenciais aplicada.",
      "Desparasitado e vermifugado.",
      "Castração garantida e custeada pela ONG quando atingir a idade adequada."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta necessidade."
  },
  sombra: {
    id: "sombra",
    name: "Sombra",
    species: "Gato",
    breed: "Tabby Cinza",
    age: "1.5 anos",
    size: "Médio",
    city: "Porto Alegre",
    state: "RS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG7amGZmrCaVXvEjnYVx_TjTgdFpRikCf1c0JAHPXs68S95F3sqnHuLWpDWRs3po2FbcNgUWZwh1MmRl39AbCejnctkwNqAgHX017V9ZbcOK4xyNBa59SHJ33h2y4DE7wTvYWhljCGJTQeqNFTrnbWuBTbY-isXAgivLSWioEJNAK0OdWN7v1JdQ5Zk_mzztKfcNLB0TTaKPd9UMH-n-BPsY3ozglTlO0ehhgNYxw8Z-s5d0wbJAQSTWl5v3_3EE3xl8wEN75dJ7Dx",
    badge: "Disponível",
    about: "Sombra é um gato cinza malhado muito calmo e observador. Ele gosta de passar o tempo perto da janela observando o movimento e adora um ambiente tranquilo e silencioso.",
    about2: "Apesar de ser um pouco tímido no começo, ele se torna muito apegado aos seus tutores depois de ganhar confiança. Ele convive bem com outros gatos mansos.",
    personality: [
      { icon: "spa", label: "Calmo" },
      { icon: "visibility", label: "Observador" },
      { icon: "home", label: "Independente" }
    ],
    health: [
      "Totalmente vacinado contra V4 e Raiva.",
      "Castrado e microchipado.",
      "Testado negativo para FIV/FeLV."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta necessidade."
  },
  vovo: {
    id: "vovo",
    name: "Vovô",
    species: "Cão",
    breed: "Labrador Preto",
    age: "10 anos",
    size: "Grande",
    city: "São Paulo",
    state: "SP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPp5CMEoFGG7oXtGcPg90eBbwubiOU0hxZsz67L3OgNwS0KEOwSTeVG8CFo3y1zup7uURmzwTp8bXNGOz9wm-0geWkk6Sx4997ZAeJJhvJbl9wdTg7mU9UMlW91LRU4TVW3z0MqKBOyCGJe4uRx7WS0wT2KfWOnKIqt4Ui05FjHf50gFYE6G4qcuNZZFPwkPJnffmIG2ngadx8eE428nBIwofTlG2X0iqmcgESsRvZ5iVkbrUUEnIQ5cdJescICdUKg09hez_S7Bac",
    badge: "Disponível",
    about: "Vovô é um labrador preto idoso que exala sabedoria e serenidade. Ele passou a maior parte de sua vida nas ruas e foi resgatado com bastante cansaço, mas agora está totalmente recuperado e pronto para receber amor em seus anos dourados.",
    about2: "Muito companheiro, ele adora caminhadas curtas e lentas, deitar ao sol e receber carinho atrás das orelhas. Tem um temperamento extremamente dócil com crianças e outros animais.",
    personality: [
      { icon: "workspace_premium", label: "Sábio" },
      { icon: "child_care", label: "Pacífico" },
      { icon: "bedroom_parent", label: "Dorminhoco" }
    ],
    health: [
      "Vacinado e desverminado.",
      "Castrado.",
      "Faz uso de suplementação preventiva para articulações."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta necessidade."
  },
  faisca: {
    id: "faisca",
    name: "Faísca",
    species: "Cão",
    breed: "Terrier Mix",
    age: "3 anos",
    size: "Pequeno",
    city: "Belo Horizonte",
    state: "MG",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdC5XKtTyLjlSW3C7gyl1iwvXS9texE1yQr6qyFwpCU3p5IlmE24RThKKctD5rDE3I87AUEu71UTABy-vLXFFv3CfMYLhuigDf7gVxvU1rbff0NrqXr8x78d27nYrkTSJH5tZ5ercBiOqA05wXJDfv3TF4_dVtCr4qRpL2FzRm7O-9jVsbJg4Us3GC2ygmI30v-hCk9TxsUixE5m9iCn6e9KmUdEbLfR1_keNtSW9cegXxQ6f5U7625pQ5tBR-b9BcVJ-X7VTgjy0v",
    badge: "Disponível",
    about: "Faísca é um cachorrinho do tipo Terrier muito veloz, alegre e companheiro. Ele adora correr no parque, pegar brinquedos e correr de volta para entregá-los na mão.",
    about2: "Excelente cão de alerta e muito ligado aos donos. Ele se adapta muito bem a casas com quintal médio ou famílias ativas que gostam de passear.",
    personality: [
      { icon: "bolt", label: "Elétrico" },
      { icon: "toys", label: "Brincalhão" },
      { icon: "security", label: "Alerta" }
    ],
    health: [
      "Com o ciclo vacinal completo contra V10 e Raiva.",
      "Castrado, vermifugado e microchipado.",
      "Exame de leishmaniose negativo."
    ],
    ngoName: "Anjos de Pata",
    ngoRating: "4.9 ★",
    ngoFounderImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QOJ4pSnU_qGUsMYfU3DbfS7hMwA1ylHTaKbdeGPSCvxMpA7Padj6Q5BM8_MgJVEbubNkSVMHbPu4YFzTuxIDZ9OhmKaf5conthGhY-dHsIvZRWFg4NgcsKpZIM8hKlymAAOaY_XfcdpQ86fzA6rfaAHfQm13wfePLpMrqcCjQng7vTvYeJ1140J0NFgMGwHVmjNp8zXA_V5hbpSq9SDfdBIFrxErF9l4KvMJeNEeUfcifU6YJ_C49xk3qITq3gw8HFpKTvhZyQXt",
    ngoFounded: "2015",
    ngoDescription: "Fundada em 2015, a Anjos de Pata já resgatou mais de 500 animais na região de São Paulo. Eles se especializam em reabilitações de alta necessidade."
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PetDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const pet = PETS_DB[id.toLowerCase()];

  if (!pet) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-custom text-text-dark pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1200px] w-full mx-auto px-margin md:px-lg py-xl flex-grow">
        {/* Back Navigation */}
        <Link 
          href="/" 
          className="flex items-center gap-xs text-on-surface-variant mb-xl hover:text-primary transition-colors group w-fit"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="font-label-md text-label-md">Voltar para a busca</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Hero & Image Gallery Column */}
          <div className="lg:col-span-7 flex flex-col gap-lg">
            <div className="relative overflow-hidden rounded-[20px] shadow-lg group bg-surface-container-low aspect-square md:aspect-[4/3]">
              <Image 
                src={pet.image} 
                alt={pet.name}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-md right-md flex gap-sm">
                <button className="bg-white/90 backdrop-blur-md p-sm rounded-full text-primary shadow-md hover:bg-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="bg-white/90 backdrop-blur-md p-sm rounded-full text-on-surface-variant shadow-md hover:bg-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
              <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-xs">
                <div className="w-6 h-1 rounded-full bg-white"></div>
                <div className="w-2 h-1 rounded-full bg-white/40"></div>
                <div className="w-2 h-1 rounded-full bg-white/40"></div>
              </div>
            </div>

            {/* Descriptive Section */}
            <div className="flex flex-col gap-xl">
              <div className="flex flex-col gap-md">
                <h2 className="font-headline-md text-headline-md text-text-dark">Sobre {pet.name}</h2>
                <p className="text-on-surface-variant leading-relaxed font-body-md">
                  {pet.about}
                </p>
                <p className="text-on-surface-variant leading-relaxed font-body-md">
                  {pet.about2}
                </p>
              </div>

              {/* Personality Bento Grid */}
              <div className="grid grid-cols-3 gap-md">
                {pet.personality.map((trait, idx) => (
                  <div key={idx} className="bg-surface-container-low p-md rounded-xl flex flex-col items-center text-center gap-xs border border-surface-container">
                    <span className="material-symbols-outlined text-primary text-[32px]">
                      {trait.icon}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                      {trait.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Health Section */}
              <div className="bg-white p-lg rounded-[20px] shadow-sm border border-surface-container-highest">
                <div className="flex items-center gap-sm mb-md">
                  <span className="material-symbols-outlined text-success-sage">verified_user</span>
                  <h3 className="font-headline-sm text-headline-sm">Saúde & Bem-Estar</h3>
                </div>
                <ul className="space-y-sm text-on-surface-variant">
                  {pet.health.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-sm font-body-md">
                      <span className="material-symbols-outlined text-[18px] text-success-sage">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Info & NGO Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-lg lg:sticky lg:top-[100px] h-fit">
            {/* Main Header Info Card */}
            <div className="bg-white p-xl rounded-[20px] shadow-md flex flex-col gap-lg border border-surface-container">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-text-dark">{pet.name}</h1>
                  <div className="flex items-center gap-xs text-on-surface-variant mt-xs">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span className="font-body-md text-body-md">{pet.city}, {pet.state}</span>
                  </div>
                </div>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-md py-xs rounded-full font-label-md text-label-md font-bold">
                  {pet.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-md">
                <div className="flex-1 min-w-[100px] bg-surface-container-low p-md rounded-xl border border-surface-container">
                  <div className="text-on-surface-variant font-label-md text-label-md opacity-70">Idade</div>
                  <div className="font-headline-sm text-headline-sm text-text-dark">{pet.age}</div>
                </div>
                <div className="flex-1 min-w-[100px] bg-surface-container-low p-md rounded-xl border border-surface-container">
                  <div className="text-on-surface-variant font-label-md text-label-md opacity-70">Raça</div>
                  <div className="font-headline-sm text-headline-sm text-text-dark truncate">{pet.breed}</div>
                </div>
                <div className="flex-1 min-w-[100px] bg-surface-container-low p-md rounded-xl border border-surface-container">
                  <div className="text-on-surface-variant font-label-md text-label-md opacity-70">Porte</div>
                  <div className="font-headline-sm text-headline-sm text-text-dark">{pet.size}</div>
                </div>
              </div>

              <div className="flex flex-col gap-md">
                <button className="w-full bg-primary-container text-white py-lg rounded-[12px] font-button text-button shadow-lg shadow-primary-container/20 hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-sm cursor-pointer">
                  <span className="material-symbols-outlined">pets</span>
                  Solicitar Adoção
                </button>
                <button className="w-full border-2 border-primary-container text-primary-container py-lg rounded-[12px] font-button text-button hover:bg-primary-container/5 active:scale-[0.98] transition-all flex justify-center items-center gap-sm cursor-pointer">
                  <span className="material-symbols-outlined">favorite</span>
                  Favoritar
                </button>
              </div>
            </div>

            {/* NGO Info Card */}
            <div className="bg-surface-container-high p-lg rounded-[20px] shadow-sm flex flex-col gap-md border border-surface-container">
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant font-bold">Responsabilidade</h3>
              <div className="flex items-center gap-md">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white relative">
                  <Image 
                    src={pet.ngoFounderImg} 
                    alt="Fundadora da ONG"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-text-dark">{pet.ngoName}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant">{pet.ngoRating} • ONG Verificada</div>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm font-body-md">
                {pet.ngoDescription}
              </p>
              <button className="text-primary-container font-button text-sm flex items-center gap-xs hover:underline mt-sm cursor-pointer w-fit">
                Ver perfil da organização
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-md p-md opacity-70">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface-variant">verified</span>
                <span className="text-[10px] font-bold uppercase mt-xs text-center">Pet Verificado</span>
              </div>
              <div className="w-px h-8 bg-on-surface-variant/20"></div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface-variant">security</span>
                <span className="text-[10px] font-bold uppercase mt-xs text-center">Adoção Segura</span>
              </div>
              <div className="w-px h-8 bg-on-surface-variant/20"></div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface-variant">volunteer_activism</span>
                <span className="text-[10px] font-bold uppercase mt-xs text-center">Parceiro ONG</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 px-lg py-md flex justify-around items-center border-t border-surface-container">
        <Link href="/" className="flex flex-col items-center gap-xs text-primary-container font-bold">
          <span className="material-symbols-outlined filled-icon">explore</span>
          <span className="text-[10px]">Descobrir</span>
        </Link>
        <button className="flex flex-col items-center gap-xs text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px]">Favoritos</span>
        </button>
        <button className="flex flex-col items-center gap-xs text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px]">Mensagens</span>
        </button>
        <Link href="/dashboard" className="flex flex-col items-center gap-xs text-on-surface-variant">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px]">Painel</span>
        </Link>
      </div>
    </div>
  );
}
