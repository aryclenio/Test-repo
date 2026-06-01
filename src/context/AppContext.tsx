"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Pet {
  id: number;
  name: string;
  species: "Cão" | "Gato";
  size: "Pequeno" | "Médio" | "Grande";
  age: "Filhote" | "Adulto" | "Idoso";
  gender: "Macho" | "Fêmea";
  city: string;
  tags: string[];
  img: string;
  alt: string;
  description: string;
  temperament: string[];
  publishedDays: number;
  needsAttention?: boolean;
  verifiedNGO?: boolean;
  responseTime?: string;
  publishedTimeAgo?: string;
  ngoName?: string;
  ngoAvatar?: string;
}

export interface AdoptionRequest {
  id: string;
  petId: number;
  petName: string;
  petImg: string;
  adopterName: string;
  date: string;
  status: "Nova" | "Em Conversa" | "Aprovada" | "Recusada";
}

interface AppContextType {
  pets: Pet[];
  favorites: number[];
  adoptionRequests: AdoptionRequest[];
  toggleFavorite: (id: number) => void;
  addPet: (pet: Omit<Pet, "id" | "publishedDays" | "publishedTimeAgo">) => void;
  addAdoptionRequest: (petId: number, adopterName: string) => void;
  updateRequestStatus: (requestId: string, status: AdoptionRequest["status"]) => void;
}

const initialPets: Pet[] = [
  {
    id: 1,
    name: "Bento",
    species: "Cão",
    size: "Médio",
    age: "Adulto",
    gender: "Macho",
    city: "São Paulo",
    tags: ["Resgate recente"],
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800",
    alt: "Retrato de Bento, um cão vira-lata marrom e branco super simpático",
    description: "Olá! Eu sou o Bento, um amigão super companheiro que adora longas caminhadas e um bom colo. Fui resgatado em uma tarde de chuva e desde então venho esperando por uma família que me dê tanto amor quanto eu tenho para oferecer. Sou calmo dentro de casa, mas adoro brincar quando estamos ao ar livre.",
    temperament: ["Dócil", "Brincalhão", "Convive com gatos", "Vacinado"],
    publishedDays: 2,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 2 dias",
    ngoName: "ONG Patas Amigas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 2,
    name: "Luna",
    species: "Gato",
    size: "Pequeno",
    age: "Filhote",
    gender: "Fêmea",
    city: "São Paulo",
    tags: [],
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
    alt: "Filhote de gato tricolor sob uma manta suave",
    description: "Luna é uma gatinha tricolor super dócil e brincalhona. Adora dormir enroladinha em mantas macias e receber carinho atrás das orelhas. É ideal para viver em apartamentos e se dá muito bem com outros felinos.",
    temperament: ["Dócil", "Brincalhona", "Sociável", "Castrada"],
    publishedDays: 180,
    needsAttention: true,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 6 meses",
    ngoName: "ONG Patas Amigas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 3,
    name: "Thor",
    species: "Cão",
    size: "Grande",
    age: "Idoso",
    gender: "Macho",
    city: "Curitiba",
    tags: ["Idoso"],
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800",
    alt: "Um Golden Retriever idoso deitado tranquilamente em um parque no outono",
    description: "Thor é um Golden Retriever idoso super sábio e tranquilo. Ele se dá muito bem com outros cães e adora passar as tardes deitado na grama recebendo cafuné. Procura um lar amoroso para sua aposentadoria.",
    temperament: ["Calmo", "Dócil", "Sociável", "Vacinado"],
    publishedDays: 30,
    verifiedNGO: true,
    responseTime: "2 horas",
    publishedTimeAgo: "há 30 dias",
    ngoName: "SOS Patinhas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 4,
    name: "Mia",
    species: "Gato",
    size: "Pequeno",
    age: "Adulto",
    gender: "Fêmea",
    city: "Rio de Janeiro",
    tags: [],
    img: "https://images.unsplash.com/photo-1513245535749-174528dc7e70?q=80&w=800",
    alt: "Gato Russian Blue cinza com olhos verdes vibrantes",
    description: "Mia é uma gata elegante de pelagem cinza e olhos verdes penetrantes. Ela é um pouco tímida no começo, mas depois que confia se torna extremamente apegada e carinhosa. Adora sachê e caixas de papelão.",
    temperament: ["Tímida", "Carinhosa", "Silenciosa", "Castrada"],
    publishedDays: 15,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 15 dias",
    ngoName: "Gatos do Rio",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 5,
    name: "Max",
    species: "Cão",
    size: "Médio",
    age: "Filhote",
    gender: "Macho",
    city: "São Paulo",
    tags: [],
    img: "https://images.unsplash.com/photo-1591160674255-fc34bb0299f4?q=80&w=800",
    alt: "Filhote brincalhão de Golden Retriever correndo no jardim",
    description: "Max é um filhotão ativo e muito alegre. Está sempre pronto para correr e brincar com qualquer brinquedo que encontrar pela frente. Ideal para famílias com crianças e com quintal para gastar energia.",
    temperament: ["Ativo", "Brincalhão", "Curioso", "Vacinado"],
    publishedDays: 5,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 5 dias",
    ngoName: "ONG Patas Amigas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 6,
    name: "Cleo",
    species: "Gato",
    size: "Médio",
    age: "Adulto",
    gender: "Fêmea",
    city: "Campo Grande",
    tags: [],
    img: "https://images.unsplash.com/photo-1573865526739-10659fef78a1?q=80&w=800",
    alt: "Gato deitado confortavelmente em um sofá de veludo azul",
    description: "Cleo é uma gata rajada independente e muito charmosa. Ela adora tirar longos cochilos no sofá e observar o movimento pela janela. Muito tranquila, silenciosa e excelente companheira.",
    temperament: ["Independente", "Calma", "Companheira", "Castrada"],
    publishedDays: 20,
    verifiedNGO: false,
    responseTime: "4 horas",
    publishedTimeAgo: "há 20 dias",
    ngoName: "Lar dos Gatinhos CG",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 7,
    name: "Bolt",
    species: "Cão",
    size: "Médio",
    age: "Adulto",
    gender: "Macho",
    city: "Rio de Janeiro",
    tags: [],
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800",
    alt: "Cão Jack Russell de pé na praia durante o pôr do sol",
    description: "Bolt é um cãozinho cheio de energia e muito aventureiro. Ele adora correr na praia e jogar bolinha. Ótimo companheiro para quem pratica atividades físicas ou gosta de passeios ao ar livre.",
    temperament: ["Ativo", "Sociável", "Brincalhão", "Vacinado"],
    publishedDays: 14,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 2 semanas",
    ngoName: "Acolhe Pet RJ",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 8,
    name: "Algodão",
    species: "Cão",
    size: "Pequeno",
    age: "Filhote",
    gender: "Macho",
    city: "Campo Grande",
    tags: ["Resgate recente"],
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800", // Using Bento-like placeholder or high quality puppy
    alt: "Filhote de cão branco fofinho deitado em um cesto com manta",
    description: "Algodão é um filhotinho resgatado de apenas 4 meses. Ele é extremamente carinhoso, pequenininho, e adora dormir no colo. Procura uma família paciente para ensiná-lo as primeiras regras da casa.",
    temperament: ["Dócil", "Brincalhão", "Necessita paciência", "Vacinado"],
    publishedDays: 12,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 12 dias",
    ngoName: "ONG Patas Amigas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  },
  {
    id: 9,
    name: "Barão",
    species: "Cão",
    size: "Grande",
    age: "Idoso",
    gender: "Macho",
    city: "São Paulo",
    tags: ["Idoso"],
    img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800", // Golden or Labrador-like placeholder
    alt: "Labrador chocolate sênior sentado calmo em uma sala ensolarada",
    description: "Barão é um cão sênior da raça Labrador Chocolate. Ele tem um olhar calmo e sábio. É muito obediente, já sabe fazer as necessidades no local correto e se dá bem com gatos e outros cães. Um verdadeiro lorde.",
    temperament: ["Dócil", "Obediente", "Calmo", "Vacinado"],
    publishedDays: 45,
    verifiedNGO: true,
    responseTime: "1 hora",
    publishedTimeAgo: "há 45 dias",
    ngoName: "ONG Patas Amigas",
    ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
  }
];

const initialRequests: AdoptionRequest[] = [
  {
    id: "req-1",
    petId: 8,
    petName: "Algodão",
    petImg: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800",
    adopterName: "Ricardo Gomes",
    date: "14 Out 2023",
    status: "Nova"
  },
  {
    id: "req-2",
    petId: 2,
    petName: "Luna",
    petImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
    adopterName: "Fernanda Lima",
    date: "12 Out 2023",
    status: "Em Conversa"
  },
  {
    id: "req-3",
    petId: 3,
    petName: "Thor",
    petImg: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800",
    adopterName: "Lucas Silva",
    date: "10 Out 2023",
    status: "Aprovada"
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const [favorites, setFavorites] = useState<number[]>([1, 4]); // Bento and Mia favorited by default
  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>(initialRequests);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const addPet = (petData: Omit<Pet, "id" | "publishedDays" | "publishedTimeAgo">) => {
    const newId = pets.length > 0 ? Math.max(...pets.map((p) => p.id)) + 1 : 1;
    const newPet: Pet = {
      ...petData,
      id: newId,
      publishedDays: 0,
      publishedTimeAgo: "recém-criado",
      verifiedNGO: true,
      ngoName: petData.ngoName || "ONG Patas Amigas",
      ngoAvatar: petData.ngoAvatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
    };
    setPets((prev) => [newPet, ...prev]);
  };

  const addAdoptionRequest = (petId: number, adopterName: string) => {
    const pet = pets.find((p) => p.id === petId);
    if (!pet) return;

    const newRequest: AdoptionRequest = {
      id: `req-${Date.now()}`,
      petId,
      petName: pet.name,
      petImg: pet.img,
      adopterName,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }),
      status: "Nova"
    };
    setAdoptionRequests((prev) => [newRequest, ...prev]);
  };

  const updateRequestStatus = (requestId: string, status: AdoptionRequest["status"]) => {
    setAdoptionRequests((prev) =>
      prev.map((req) => (req.id === requestId ? { ...req, status } : req))
    );
  };

  return (
    <AppContext.Provider
      value={{
        pets,
        favorites,
        adoptionRequests,
        toggleFavorite,
        addPet,
        addAdoptionRequest,
        updateRequestStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
