"use client";

import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import PetCard from "../components/PetCard";

export default function Home() {
  const { pets, isLoaded } = useApp();
  const [species, setSpecies] = useState(null);
  const [porte, setPorte] = useState(null);
  const [idade, setIdade] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSpeciesToggle = (value) => {
    setSpecies((prev) => (prev === value ? null : value));
  };

  const handlePorteToggle = (value) => {
    setPorte((prev) => (prev === value ? null : value));
  };

  const handleIdadeToggle = (value) => {
    setIdade((prev) => (prev === value ? null : value));
  };

  const resetFilters = () => {
    setSpecies(null);
    setPorte(null);
    setIdade(null);
    setSearchQuery("");
  };

  // Filter logic
  const filteredPets = pets.filter((pet) => {
    const matchesSpecies = !species || pet.species === species;
    const matchesPorte = !porte || pet.size === porte;
    const matchesIdade = !idade || pet.age === idade;
    const matchesSearch =
      !searchQuery ||
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecies && matchesPorte && matchesIdade && matchesSearch;
  });

  return (
    <div className="bg-background text-on-surface font-body-reg min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-lg pt-xxl pb-xl text-center flex flex-col items-center gap-sm">
        <h1 className="font-h1 text-h1-mobile md:text-h1 text-primary">
          Encontre seu novo melhor amigo
        </h1>
        <div className="inline-flex items-center bg-secondary-container text-on-secondary px-lg py-xs rounded-full font-bold shadow-sm animate-pulse">
          <span className="material-symbols-outlined mr-xs">pets</span>
          <span id="pet-counter" className="mr-xs">
            {isLoaded ? filteredPets.length : "..."}
          </span>{" "}
          pets aguardando uma família
        </div>

        {/* Mobile Search Bar */}
        <div className="relative mt-md w-full max-w-md md:hidden px-lg">
          <input
            className="bg-surface border-2 border-border-light rounded-full px-lg py-sm text-body-sm w-full focus:ring-2 focus:ring-primary"
            placeholder="Pesquisar por nome ou cidade..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-lg pb-xxl flex flex-col md:flex-row gap-lg">
        {/* Sidebar: Filters */}
        <aside className="w-full md:w-64 p-md space-y-sm bg-surface-container-low rounded-xl h-fit sticky top-24 shadow-sm flex flex-col gap-sm">
          <div className="flex items-center gap-sm mb-md">
            <div 
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary"
              style={{ color: "var(--color-brand-primary)" }}
            >
              <span className="material-symbols-outlined">tune</span>
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-primary leading-tight">Filtros</h3>
              <p className="text-body-sm text-on-surface-variant">Encontre seu parceiro ideal</p>
            </div>
          </div>

          {/* Search Input in Sidebar for Desktop */}
          <div className="hidden md:block mb-sm">
            <p className="text-[12px] font-bold uppercase tracking-wider text-outline px-xs mb-xs">Pesquisa</p>
            <input
              className="bg-surface border border-border-light rounded-lg px-sm py-xs text-body-sm w-full"
              placeholder="Nome ou cidade..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: "1px solid var(--color-neutral-border)", borderRadius: "var(--radius-md)" }}
            />
          </div>

          {/* Espécie */}
          <div className="space-y-xs flex flex-col gap-xs">
            <p className="text-[12px] font-bold uppercase tracking-wider text-outline px-xs">Espécie</p>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                species === "Cao" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handleSpeciesToggle("Cao")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">pets</span>
              <span className="font-body-sm text-body-sm">Cão</span>
            </button>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                species === "Gato" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handleSpeciesToggle("Gato")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">pets</span>
              <span className="font-body-sm text-body-sm">Gato</span>
            </button>
          </div>

          {/* Porte */}
          <div className="space-y-xs flex flex-col gap-xs pt-sm">
            <p className="text-[12px] font-bold uppercase tracking-wider text-outline px-xs">Porte</p>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                porte === "Pequeno" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handlePorteToggle("Pequeno")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">straighten</span>
              <span className="font-body-sm text-body-sm">Pequeno</span>
            </button>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                porte === "Medio" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handlePorteToggle("Medio")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">straighten</span>
              <span className="font-body-sm text-body-sm">Médio</span>
            </button>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                porte === "Grande" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handlePorteToggle("Grande")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">straighten</span>
              <span className="font-body-sm text-body-sm">Grande</span>
            </button>
          </div>

          {/* Idade */}
          <div className="space-y-xs flex flex-col gap-xs pt-sm">
            <p className="text-[12px] font-bold uppercase tracking-wider text-outline px-xs">Idade</p>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                idade === "Filhote" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handleIdadeToggle("Filhote")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">calendar_today</span>
              <span className="font-body-sm text-body-sm">Filhote</span>
            </button>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                idade === "Adulto" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handleIdadeToggle("Adulto")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">calendar_today</span>
              <span className="font-body-sm text-body-sm">Adulto</span>
            </button>
            <button
              className={`filter-btn w-full flex items-center gap-sm p-sm text-left rounded-lg transition-colors group ${
                idade === "Idoso" ? "active" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => handleIdadeToggle("Idoso")}
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">calendar_today</span>
              <span className="font-body-sm text-body-sm">Idoso</span>
            </button>
          </div>

          {/* Clear Filters */}
          <div className="pt-md">
            <button
              className="w-full bg-primary text-on-primary py-sm rounded-lg font-bold hover:bg-accent-hover transition-colors shadow-sm active:scale-95"
              onClick={resetFilters}
            >
              Limpar Filtros
            </button>
          </div>
        </aside>

        {/* Pet Listing Grid */}
        <section className="flex-1">
          {!isLoaded ? (
            <div className="flex justify-center items-center py-xxl text-primary-light">
              <span className="material-symbols-outlined animate-spin text-5xl">sync</span>
            </div>
          ) : filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md animate-in">
              {filteredPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-xxl text-center animate-in">
              <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center text-primary-light mb-md">
                <span className="material-symbols-outlined text-5xl">search_off</span>
              </div>
              <h3 className="font-h2 text-primary">Nenhum pet encontrado</h3>
              <p className="text-body-reg text-on-surface-variant max-w-sm mt-xs mx-auto">
                Tente ajustar seus filtros ou busca para encontrar outros amigos disponíveis para adoção.
              </p>
              <button
                className="mt-lg text-primary font-bold hover:underline"
                onClick={resetFilters}
              >
                Ver todos os pets
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
