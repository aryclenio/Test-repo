"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";

interface Pet {
  id: string;
  name: string;
  species: "Cão" | "Gato" | "Outros";
  age: "Filhote" | "Adulto" | "Idoso";
  size: "Pequeno" | "Médio" | "Grande";
  city: string;
  state: string;
  image: string;
  badge?: string;
  badgeType?: "active" | "recent" | "old";
}

const INITIAL_PETS: Pet[] = [
  {
    id: "bethoven",
    name: "Bethoven",
    species: "Cão",
    age: "Adulto",
    size: "Grande",
    city: "São Paulo",
    state: "SP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPj3bK2km7ZRlPiqCKpsmQSASOYIBj6d1RyCBFpq5HCCDyq3AD3t6PXtEPKtNiDt-S7ZbHH-LcSSW0I4k84eoBzrQRU9kfhSTkdGPX9Xyoynn5TambwRemY41sWdhQEVH-9rrrh2opf043fzB5I-SSShcfouJRoS1WFF9SMfQGWawWUTr7sRl0LM0xdbqZWhdN96R-laZ4JffjmEYbWRP02-ful6C7mPY7dd_A_A5lHaPyD23Ichg19i_HoBpz06TWDgmrD7akwtKZ",
    badge: "Ativo",
    badgeType: "active"
  },
  {
    id: "mimo",
    name: "Mimo",
    species: "Gato",
    age: "Filhote",
    size: "Pequeno",
    city: "Curitiba",
    state: "PR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGFnvXBnz3kWydNsHG1IwYjbWGd0Q_GhecHFyt3k3vYZt--8J0AFJWcDsn9f0tULf8tVSuY7LD0eHh9WH43CqRRVgwfBS0sHpeFqgSVEAjhduDoLn1-zgnaBdh8qSrDEU-DEv5Za5bU-sS-rLdSTd7tdpGKMvrwzf7MCSCCMJGHa-eFDkoQOPRCbIXUfoqlMi5srZXq5MP8uiFa4dUr4f0P_ecldQZevQ_2z0KKxZD2grRisx9VXVAak_Qciss7cfxktohpGnJoMah",
    badge: "Resgate Recente",
    badgeType: "recent"
  },
  {
    id: "sombra",
    name: "Sombra",
    species: "Gato",
    age: "Adulto",
    size: "Médio",
    city: "Porto Alegre",
    state: "RS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG7amGZmrCaVXvEjnYVx_TjTgdFpRikCf1c0JAHPXs68S95F3sqnHuLWpDWRs3po2FbcNgUWZwh1MmRl39AbCejnctkwNqAgHX017V9ZbcOK4xyNBa59SHJ33h2y4DE7wTvYWhljCGJTQeqNFTrnbWuBTbY-isXAgivLSWioEJNAK0OdWN7v1JdQ5Zk_mzztKfcNLB0TTaKPd9UMH-n-BPsY3ozglTlO0ehhgNYxw8Z-s5d0wbJAQSTWl5v3_3EE3xl8wEN75dJ7Dx"
  },
  {
    id: "vovo",
    name: "Vovô",
    species: "Cão",
    age: "Idoso",
    size: "Grande",
    city: "São Paulo",
    state: "SP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPp5CMEoFGG7oXtGcPg90eBbwubiOU0hxZsz67L3OgNwS0KEOwSTeVG8CFo3y1zup7uURmzwTp8bXNGOz9wm-0geWkk6Sx4997ZAeJJhvJbl9wdTg7mU9UMlW91LRU4TVW3z0MqKBOyCGJe4uRx7WS0wT2KfWOnKIqt4Ui05FjHf50gFYE6G4qcuNZZFPwkPJnffmIG2ngadx8eE428nBIwofTlG2X0iqmcgESsRvZ5iVkbrUUEnIQ5cdJescICdUKg09hez_S7Bac",
    badge: "Idoso",
    badgeType: "old"
  },
  {
    id: "faisca",
    name: "Faísca",
    species: "Cão",
    age: "Adulto",
    size: "Pequeno",
    city: "Belo Horizonte",
    state: "MG",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdC5XKtTyLjlSW3C7gyl1iwvXS9texE1yQr6qyFwpCU3p5IlmE24RThKKctD5rDE3I87AUEu71UTABy-vLXFFv3CfMYLhuigDf7gVxvU1rbff0NrqXr8x78d27nYrkTSJH5tZ5ercBiOqA05wXJDfv3TF4_dVtCr4qRpL2FzRm7O-9jVsbJg4Us3GC2ygmI30v-hCk9TxsUixE5m9iCn6e9KmUdEbLfR1_keNtSW9cegXxQ6f5U7625pQ5tBR-b9BcVJ-X7VTgjy0v"
  }
];

export default function DiscoverPage() {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [citySearch, setCitySearch] = useState("");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetFilters = () => {
    setSelectedSpecies(null);
    setSelectedAge(null);
    setSelectedSize(null);
    setCitySearch("");
  };

  // Filter Logic
  const filteredPets = INITIAL_PETS.filter(pet => {
    if (selectedSpecies && pet.species !== selectedSpecies) return false;
    if (selectedAge && pet.age !== selectedAge) return false;
    if (selectedSize && pet.size !== selectedSize) return false;
    if (citySearch.trim() !== "") {
      const search = citySearch.toLowerCase();
      const petCity = pet.city.toLowerCase();
      const petState = pet.state.toLowerCase();
      if (!petCity.includes(search) && !petState.includes(search)) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background-custom text-text-dark">
      <Header />

      <main className="flex-grow max-w-[1200px] w-full mx-auto px-lg py-xl">
        {/* Hero Counter Section */}
        <section className="mb-xl text-center md:text-left">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-dark mb-base">
            <span className="text-primary-container">{filteredPets.length}</span> pets aguardando uma família
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2">
            Encontre o companheiro perfeito que está esperando por um lar cheio de amor. Filtre por espécie, idade ou porte para facilitar sua busca.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-xl">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white p-lg rounded-2xl shadow-sm space-y-xl sticky top-28 border border-surface-container">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm text-text-dark">Filtros</h2>
                <button 
                  onClick={resetFilters}
                  className="text-label-md font-label-md text-primary-container hover:underline cursor-pointer"
                >
                  Limpar
                </button>
              </div>

              {/* Species */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-md">Espécie</label>
                <div className="grid grid-cols-1 gap-sm">
                  {[
                    { name: "Cão", icon: "potted_plant" },
                    { name: "Gato", icon: "pets" },
                    { name: "Outros", icon: "bubble_chart" }
                  ].map(spec => (
                    <button
                      key={spec.name}
                      onClick={() => setSelectedSpecies(selectedSpecies === spec.name ? null : spec.name)}
                      className={`flex items-center justify-between px-md py-sm rounded-lg font-body-md text-body-md transition-all cursor-pointer ${
                        selectedSpecies === spec.name 
                          ? "bg-primary-container text-white font-bold" 
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                      }`}
                    >
                      <span>{spec.name}</span>
                      <span className="material-symbols-outlined text-[18px]">{spec.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-md">Idade</label>
                <div className="grid grid-cols-1 gap-sm">
                  {["Filhote", "Adulto", "Idoso"].map(age => (
                    <button
                      key={age}
                      onClick={() => setSelectedAge(selectedAge === age ? null : age)}
                      className={`flex items-center justify-between px-md py-sm rounded-lg font-body-md text-body-md transition-all cursor-pointer ${
                        selectedAge === age 
                          ? "bg-primary-container text-white font-bold" 
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-md">Porte</label>
                <div className="grid grid-cols-1 gap-sm">
                  {["Pequeno", "Médio", "Grande"].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`flex items-center justify-between px-md py-sm rounded-lg font-body-md text-body-md transition-all cursor-pointer ${
                        selectedSize === size 
                          ? "bg-primary-container text-white font-bold" 
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-md">Cidade</label>
                <div className="relative">
                  <input 
                    type="text"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                    className="w-full bg-white border border-border-medium rounded-xl py-sm px-md pl-10 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md transition-all outline-none" 
                    placeholder="Ex: São Paulo"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Pet Grid */}
          <div className="flex-grow">
            {filteredPets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-lg">
                {filteredPets.map(pet => (
                  <PetCard
                    key={pet.id}
                    pet={pet}
                    isFavorite={!!favorites[pet.id]}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-[20px] shadow-sm border border-surface-container">
                <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant">
                    search_off
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-dark mb-sm">Nenhum pet encontrado</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                  Tente ajustar seus filtros ou mude a localização para encontrar novos amigos.
                </p>
                <button 
                  onClick={resetFilters}
                  className="bg-primary-container text-white font-button text-button px-xl py-md rounded-xl hover:bg-primary transition-all shadow-md cursor-pointer"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredPets.length > 0 && (
              <div className="mt-xl flex justify-center gap-sm">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface transition-all active:scale-90 cursor-pointer">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-container text-white font-bold cursor-pointer">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant transition-all cursor-pointer">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant transition-all cursor-pointer">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-highest text-on-surface transition-all active:scale-90 cursor-pointer">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
