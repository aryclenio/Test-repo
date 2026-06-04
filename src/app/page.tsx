"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";

export default function Home() {
  const { pets, favorites, toggleFavorite } = useApp();
  
  // Local state for filters
  const [species, setSpecies] = useState<string>("all");
  const [size, setSize] = useState<string>("all");
  const [age, setAge] = useState<string>("all");
  const [city, setCity] = useState<string>("all");

  // Reset all filters
  const handleResetFilters = () => {
    setSpecies("all");
    setSize("all");
    setAge("all");
    setCity("all");
  };

  // Filter logic
  const filteredPets = pets.filter((pet) => {
    return (
      (species === "all" || pet.species === species) &&
      (size === "all" || pet.size === size) &&
      (age === "all" || pet.age === age) &&
      (city === "all" || pet.city.toLowerCase() === city.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto flex-1 w-full">
        {/* Hero Section */}
        <section className="mb-12 mt-4">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground font-extrabold tracking-tight mb-4">
            Encontre seu novo melhor amigo
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            Centenas de animais resgatados estão à espera de um lar cheio de amor. 
            Use os filtros abaixo para encontrar o companheiro ideal para sua rotina.
          </p>
        </section>

        {/* Filters Section */}
        <section className="bg-surface-variant/40 backdrop-blur-sm p-6 rounded-2xl mb-12 border border-border/20 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="space-y-2">
              <label htmlFor="species" className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Espécie
              </label>
              <select
                id="species"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                className="w-full bg-background border border-border/50 rounded-xl p-3 font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
              >
                <option value="all">Todas as espécies</option>
                <option value="Cão">Cães</option>
                <option value="Gato">Gatos</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="size" className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Porte
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-background border border-border/50 rounded-xl p-3 font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
              >
                <option value="all">Qualquer porte</option>
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="age" className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Idade
              </label>
              <select
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-background border border-border/50 rounded-xl p-3 font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
              >
                <option value="all">Qualquer idade</option>
                <option value="Filhote">Filhote</option>
                <option value="Adulto">Adulto</option>
                <option value="Idoso">Idoso</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Cidade
              </label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-background border border-border/50 rounded-xl p-3 font-medium text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all cursor-pointer"
              >
                <option value="all">Todas as cidades</option>
                <option value="campo grande">Campo Grande</option>
                <option value="são paulo">São Paulo</option>
                <option value="rio de janeiro">Rio de Janeiro</option>
                <option value="curitiba">Curitiba</option>
              </select>
            </div>

            <div>
              {(species !== "all" || size !== "all" || age !== "all" || city !== "all") ? (
                <button
                  onClick={handleResetFilters}
                  className="w-full bg-muted text-muted-foreground hover:bg-muted/80 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border border-border/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                  Limpar Filtros
                </button>
              ) : (
                <button
                  disabled
                  className="w-full bg-secondary/40 text-white/70 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">search</span>
                  Filtros Ativos
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Pet Grid */}
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPets.map((pet) => {
              const isFav = favorites.includes(pet.id);
              
              return (
                <div
                  key={pet.id}
                  className="bg-card overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/30 flex flex-col group relative"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={pet.img}
                      alt={pet.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(pet.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:bg-background transition-all duration-200 cursor-pointer active:scale-90"
                    >
                      <span
                        className={cn(
                          "material-symbols-outlined transition-all text-2xl",
                          isFav ? "text-error fill-current scale-110" : "text-primary"
                        )}
                        style={{
                          fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0"
                        }}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Needs Attention Badge / Special Tags */}
                    {pet.needsAttention && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-warning text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                          Precisa de Atenção
                        </span>
                      </div>
                    )}
                    
                    {pet.tags && pet.tags.length > 0 && !pet.needsAttention && (
                      <div className="absolute bottom-4 left-4 flex gap-1">
                        {pet.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl text-foreground font-semibold">
                        {pet.name}
                      </h3>
                      <span className="text-secondary font-bold text-sm bg-secondary/10 px-2.5 py-0.5 rounded-full">
                        {pet.species}
                      </span>
                    </div>

                    <div className="space-y-2 mb-6 text-muted-foreground text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        <span>{pet.age}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">straighten</span>
                        <span>Porte {pet.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                        <span>{pet.city}</span>
                      </div>
                    </div>

                    <Link
                      href={`/pet/${pet.id}`}
                      className="w-full bg-muted text-foreground hover:bg-secondary hover:text-white py-3 rounded-xl font-bold text-sm text-center transition-all mt-auto flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      Conhecer mais
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-3xl border border-border/30 p-8 max-w-md mx-auto">
            <div className="bg-muted p-6 rounded-full mb-6">
              <span className="material-symbols-outlined text-5xl text-muted-foreground">search_off</span>
            </div>
            <h3 className="font-heading text-2xl text-foreground font-bold mb-2">
              Nenhum pet encontrado
            </h3>
            <p className="text-muted-foreground max-w-xs mb-6">
              Não encontramos nenhum amigo com esses critérios. Tente mudar os filtros para ver outras fofuras!
            </p>
            <button
              onClick={handleResetFilters}
              className="text-secondary font-bold text-base border-b-2 border-secondary pb-0.5 hover:opacity-80 transition-all cursor-pointer"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 bg-muted/50 border-t border-border/30 mt-auto">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading text-2xl text-primary font-bold">Adopet</span>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Adopet - Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}
