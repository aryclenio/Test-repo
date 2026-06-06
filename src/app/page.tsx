'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPets, savePets, Pet } from '@/lib/mockDb';

export default function PetSearchPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedType, setSelectedType] = useState<'all' | 'dog' | 'cat' | 'other'>('all');
  const [selectedSize, setSelectedSize] = useState<string>('Todos');
  const [selectedAge, setSelectedAge] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  useEffect(() => {
    // Load pets from local storage db
    setPets(getPets());
  }, []);

  const handleFavoriteToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isFavorite: !pet.isFavorite };
      }
      return pet;
    });
    setPets(updatedPets);
    savePets(updatedPets);
  };

  // Filter Logic
  const filteredPets = pets.filter(pet => {
    // Type filter
    const matchesType = selectedType === 'all' || pet.type === selectedType;
    
    // Size filter
    const matchesSize = selectedSize === 'Todos' || pet.size === selectedSize;
    
    // Age filter
    const matchesAge = selectedAge === 'Todas' || pet.age === selectedAge;
    
    // Search query filter (matches name or breed)
    const matchesSearch = searchQuery === '' || 
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesSize && matchesAge && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 px-6 md:px-12 text-center border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold mb-4 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span> São Paulo, SP
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-3 tracking-tight">
            Encontre seu novo companheiro
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            {pets.length} pets aguardando uma família em sua região
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 bg-background/80 backdrop-blur-md z-40 py-6 px-6 md:px-12 border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Species Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'dog', label: 'Cão' },
              { id: 'cat', label: 'Gato' },
              { id: 'other', label: 'Outros' },
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedType === type.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-foreground hover:bg-adopet-neutral-medium'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Inline search for mobile */}
            <div className="relative flex-grow sm:flex-grow-0 sm:hidden">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                search
              </span>
              <input
                className="w-full pl-9 pr-4 py-2 bg-muted rounded-lg border-none text-sm outline-none focus:ring-2 focus:ring-primary"
                placeholder="Buscar..."
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Desktop and Tablet searches integration */}
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                search
              </span>
              <input
                className="pl-9 pr-4 py-2 bg-muted rounded-lg border-none text-sm outline-none focus:ring-2 focus:ring-primary w-48 transition-all focus:w-64"
                placeholder="Buscar raça ou nome..."
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="h-6 w-px bg-border hidden sm:block"></div>

            {/* Size Dropdown */}
            <select
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value)}
              className="bg-muted text-foreground border-none rounded-lg text-sm font-bold py-2 px-4 cursor-pointer hover:bg-adopet-neutral-medium transition-colors focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="Todos">Porte: Todos</option>
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>

            {/* Age Dropdown */}
            <select
              value={selectedAge}
              onChange={e => setSelectedAge(e.target.value)}
              className="bg-muted text-foreground border-none rounded-lg text-sm font-bold py-2 px-4 cursor-pointer hover:bg-adopet-neutral-medium transition-colors focus:ring-2 focus:ring-primary outline-none"
            >
              <option value="Todas">Idade: Todas</option>
              <option value="Filhote">Filhote</option>
              <option value="Adulto">Adulto</option>
              <option value="Idoso">Idoso</option>
            </select>
          </div>
        </div>
      </section>

      {/* Pet Grid */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto w-full flex-grow">
        {filteredPets.length === 0 ? (
          <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
            <span className="material-symbols-outlined text-5xl text-muted-foreground/60 mb-4">
              sentiment_dissatisfied
            </span>
            <h3 className="text-lg font-bold text-foreground mb-1">Nenhum pet encontrado</h3>
            <p className="text-sm text-muted-foreground">
              Tente ajustar seus filtros de busca para encontrar outros companheiros.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPets.slice(0, visibleCount).map(pet => (
                <div
                  key={pet.id}
                  className="group bg-card rounded-xl shadow-adopet-md overflow-hidden hover:shadow-adopet-lg transition-all duration-300 transform hover:-translate-y-1 border border-border flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      alt={pet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={pet.image}
                    />
                    <button
                      onClick={(e) => handleFavoriteToggle(pet.id, e)}
                      className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:text-adopet-error-rust transition-colors shadow-sm active:scale-90 cursor-pointer"
                    >
                      <span className={`material-symbols-outlined ${pet.isFavorite ? 'active-heart' : ''}`}>
                        favorite
                      </span>
                    </button>
                    {pet.tag && (
                      <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold text-white rounded shadow-sm ${
                        pet.tag === 'Resgate recente' ? 'bg-secondary' :
                        pet.tag === 'Idoso' ? 'bg-adopet-alert-ochre' :
                        'bg-destructive'
                      }`}>
                        {pet.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{pet.name}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          {pet.age}
                        </span>
                        <span className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          {pet.size}
                        </span>
                        <span className="px-2.5 py-0.5 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          {pet.location}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/pets/${pet.id}`}
                      className="w-full text-center py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all block"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < filteredPets.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-background border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Carregar mais pets
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
