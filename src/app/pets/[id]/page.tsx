'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPets, savePets, addAdoptionRequest, Pet } from '@/lib/mockDb';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PetDetailsPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const petId = resolvedParams.id;

  const [pet, setPet] = useState<Pet | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [showAdoptionModal, setShowAdoptionModal] = useState(false);
  const [adopterName, setAdopterName] = useState('');
  const [adopterLocation, setAdopterLocation] = useState('');
  const [adoptionSubmitted, setAdoptionSubmitted] = useState(false);

  useEffect(() => {
    const pets = getPets();
    const foundPet = pets.find(p => p.id === petId);
    if (foundPet) {
      setPet(foundPet);
      setActiveImage(foundPet.image);
    }
  }, [petId]);

  const handleFavoriteToggle = () => {
    if (!pet) return;
    const updatedPet = { ...pet, isFavorite: !pet.isFavorite };
    setPet(updatedPet);

    const pets = getPets();
    const updatedPets = pets.map(p => p.id === pet.id ? updatedPet : p);
    savePets(updatedPets);
  };

  const handleAdoptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pet || !adopterName || !adopterLocation) return;

    addAdoptionRequest({
      petId: pet.id,
      petName: pet.name,
      petImage: pet.image,
      petBreedAge: `${pet.breed} • ${pet.age}`,
      adopterName: adopterName,
      location: adopterLocation,
    });

    setAdoptionSubmitted(true);
    setTimeout(() => {
      setShowAdoptionModal(false);
      setAdopterName('');
      setAdopterLocation('');
      setAdoptionSubmitted(false);
    }, 2000);
  };

  if (!pet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <span className="material-symbols-outlined text-5xl text-muted-foreground animate-spin">
          sync
        </span>
        <p className="text-muted-foreground font-medium">Carregando detalhes do pet...</p>
      </div>
    );
  }

  // Generate type labels for breadcrumbs
  const typeLabel = pet.type === 'dog' ? 'Cães' : pet.type === 'cat' ? 'Gatos' : 'Outros';

  // Fallback gallery images if none defined
  const gallery = pet.gallery && pet.gallery.length > 0 ? pet.gallery : [pet.image];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-[16px] text-muted-foreground/60">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => {}}>
            {typeLabel}
          </span>
          <span className="material-symbols-outlined text-[16px] text-muted-foreground/60">chevron_right</span>
          <span className="text-primary font-bold">{pet.name}</span>
        </nav>

        {/* Hero & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-adopet-md bg-muted">
              <img
                className="w-full h-full object-cover transition-opacity duration-300"
                src={activeImage}
                alt={pet.name}
              />
              {pet.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-adopet-error-rust text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">emergency_home</span>
                    {pet.tag}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`min-w-[100px] md:min-w-[120px] aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer shadow-sm ${
                      activeImage === img ? 'border-primary' : 'border-transparent hover:border-primary/40'
                    }`}
                  >
                    <img className="w-full h-full object-cover" src={img} alt={`${pet.name} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Info & Action */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-adopet-md flex flex-col gap-6 border border-border">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1 tracking-tight">
                    {pet.name}
                  </h1>
                  <div className="flex items-center gap-1 text-muted-foreground font-semibold">
                    <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                    <span className="text-xs">{pet.location}, SP</span>
                  </div>
                </div>
                <button
                  onClick={handleFavoriteToggle}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-muted text-primary hover:bg-primary/10 transition-all active:scale-90 cursor-pointer shadow-sm"
                >
                  <span className={`material-symbols-outlined ${pet.isFavorite ? 'active-heart' : ''}`}>
                    favorite
                  </span>
                </button>
              </div>

              {/* Badges Info Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-muted rounded-xl py-3.5 border border-border/50">
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">Idade</p>
                  <p className="text-base font-extrabold text-adopet-accent">{pet.age}</p>
                </div>
                <div className="bg-muted rounded-xl py-3.5 border border-border/50">
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">Porte</p>
                  <p className="text-base font-extrabold text-adopet-accent">{pet.size}</p>
                </div>
                <div className="bg-muted rounded-xl py-3.5 border border-border/50">
                  <p className="text-xs font-bold text-muted-foreground mb-1 uppercase tracking-wider">Gênero</p>
                  <p className="text-base font-extrabold text-adopet-accent">{pet.gender}</p>
                </div>
              </div>

              {/* Specific Health Traits */}
              <div className="flex flex-wrap gap-2 pt-2">
                {pet.vaccinated && (
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    Vacinado
                  </span>
                )}
                {pet.neutered && (
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    Castrado
                  </span>
                )}
                {pet.dewormed && (
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    Vermifugado
                  </span>
                )}
                {pet.friendlyWithCats && (
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    Amigável com gatos
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/60">
                <button
                  onClick={() => setShowAdoptionModal(true)}
                  className="w-full bg-adopet-accent text-white font-extrabold py-3.5 rounded-xl shadow-adopet-sm hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">pets</span>
                  Quero adotar o {pet.name}
                </button>
                <button
                  onClick={() => alert('Mensagem enviada com sucesso!')}
                  className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary/10 transition-all active:scale-[0.98] cursor-pointer text-sm"
                >
                  Tirar dúvidas
                </button>
              </div>
            </div>

            {/* Shelter/NGO Card */}
            <div className="bg-muted rounded-2xl p-5 flex items-center gap-4 border border-border shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm overflow-hidden flex-shrink-0 flex items-center justify-center p-2 border border-border/60">
                <img
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqc568Wf5r5CneYZWAub_rM5mdvG8lwM15yhIzxwcYYlNrZqpFfpUOJ1oVrNDNnjZU1j9d8ZTYSMMhd-QL76ZFDocOh5UVMmJrXG5GwrV0wCVsjnpq4nCd1NNrgD4vjVquBXWj0_8SHeoouYd8FZothmQGdgl97FW6pUxHonITs9Cr0xuLV8-LxhFWWgYb8rE2gzl5t8KUV8o1QJlV6h3PAjrWX2AnUFaajQPEGjes1KZxXWyIuhUEXIVuoBP7aPC4ZEtSEuf8-S2M"
                  alt="ONG Patas Amigas"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-bold text-primary">ONG Patas Amigas</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  Dedicados ao resgate e reabilitação de animais abandonados em SP desde 2012.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative / Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-12">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">A história de {pet.name}</h2>
              <div className="h-1 w-20 bg-adopet-accent rounded"></div>
            </div>
            <div className="text-muted-foreground space-y-4 leading-relaxed text-base">
              {pet.story ? (
                pet.story.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{pet.name} está aguardando um novo lar com muita esperança de ser acolhido por uma família amorosa.</p>
              )}
            </div>

            {/* Bento Grid: Personality & Care */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted p-6 rounded-2xl border-l-4 border-adopet-alert-ochre shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-adopet-alert-ochre text-2xl">psychology</span>
                  <h4 className="text-lg font-bold text-foreground">Personalidade</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pet.personality || 'Dócil, brincalhão e muito companheiro.'}
                </p>
              </div>

              <div className="bg-muted p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-primary text-2xl">health_and_safety</span>
                  <h4 className="text-lg font-bold text-foreground">Cuidados</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pet.care || 'Necessita de consultas de rotina e vacinação atualizada.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Adoption Form Dialog / Modal */}
      {showAdoptionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-md rounded-2xl p-6 shadow-adopet-lg border border-border relative">
            <button
              onClick={() => setShowAdoptionModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {adoptionSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <div className="w-16 h-16 rounded-full bg-adopet-success/20 flex items-center justify-center text-adopet-success animate-bounce">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Solicitação Enviada!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Sua manifestação de interesse em adotar o <strong>{pet.name}</strong> foi registrada no painel da ONG.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAdoptionSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-extrabold text-primary">Manifestação de Interesse</h3>
                  <p className="text-xs text-muted-foreground">
                    Preencha seus dados para iniciar o processo de adoção com a ONG.
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-muted p-3 rounded-xl border border-border/60">
                  <img src={pet.image} alt={pet.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Adotando o {pet.name}</h4>
                    <p className="text-xs text-muted-foreground">{pet.breed} • {pet.age}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Seu Nome Completo</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Ex: Ana Clara Silva"
                    value={adopterName}
                    onChange={e => setAdopterName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Sua Cidade / UF</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Ex: São Paulo, SP"
                    value={adopterLocation}
                    onChange={e => setAdopterLocation(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-95 shadow-md active:scale-95 transition-all cursor-pointer text-sm"
                >
                  Enviar Manifestação
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
