"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useApp } from "../../../context/AppContext";

export default function PetDetails() {
  const params = useParams();
  const router = useRouter();
  const { pets, favorites, toggleFavorite, addRequest, requests, isLoaded } = useApp();
  
  const [pet, setPet] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      const foundPet = pets.find((p) => p.id === params.id);
      if (foundPet) {
        setPet(foundPet);
        setMainImage(foundPet.image);
      } else {
        // Redireciona para home se pet não for encontrado
        router.push("/");
      }
    }
  }, [params.id, pets, isLoaded, router]);

  if (!isLoaded || !pet) {
    return (
      <div className="flex justify-center items-center py-xxl text-primary-light min-h-screen">
        <span className="material-symbols-outlined animate-spin text-5xl">sync</span>
      </div>
    );
  }

  const isFavorite = favorites.includes(pet.id);

  const handleFavoriteClick = () => {
    toggleFavorite(pet.id);
  };

  const handleInterestClick = () => {
    // Adiciona o request no contexto global
    addRequest(pet.id, pet.name, pet.image, "Marcos Silva");
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
    }, 5000);
  };

  // Get similar pets (same species, excluding current pet, max 4)
  const similarPets = pets
    .filter((p) => p.species === pet.species && p.id !== pet.id)
    .slice(0, 4);

  // Fallback similar pets if none found
  const displayedSimilar = similarPets.length > 0 ? similarPets : pets.filter((p) => p.id !== pet.id).slice(0, 4);

  const hasSubmittedRequest = requests.some((req) => req.petId === pet.id);

  return (
    <main className="max-w-7xl mx-auto px-lg pt-xl pb-xxl mt-12 animate-in">
      {/* Breadcrumb / Back */}
      <div className="mb-lg flex items-center gap-xs text-on-surface-variant">
        <button
          className="flex items-center hover:text-primary transition-colors"
          onClick={() => router.push("/")}
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          <span className="font-body-sm text-body-sm ml-xs">Voltar para busca</span>
        </button>
      </div>

      {requestSent && (
        <div 
          className="mb-lg p-md bg-success/10 text-success rounded-xl flex items-center gap-sm border" 
          style={{ borderColor: "var(--color-feedback-success)" }}
        >
          <span className="material-symbols-outlined">check_circle</span>
          <div>
            <h4 className="font-bold">Interesse Registrado!</h4>
            <p className="text-body-sm">Sua solicitação de adoção foi enviada e já está disponível no Painel de Gestão.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        {/* Left: Gallery & About Section (8 Cols) */}
        <div className="lg:col-span-8 space-y-md flex flex-col gap-md">
          {/* Gallery Main */}
          <div className="relative group overflow-hidden rounded-xl custom-shadow">
            <img
              className="w-full aspect-[4/3] object-cover transition-opacity duration-300"
              id="mainImage"
              src={mainImage}
              alt={`Foto de ${pet.name}`}
            />
            <button
              onClick={handleFavoriteClick}
              className="absolute top-md right-md bg-white p-sm rounded-full custom-shadow text-secondary hover:scale-110 transition-transform flex items-center justify-center"
              style={{ color: isFavorite ? "var(--color-brand-accent)" : "var(--color-neutral-text-muted)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
            </button>
          </div>

          {/* Gallery Thumbnails */}
          {pet.gallery && pet.gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-sm">
              {pet.gallery.map((imgUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    className={`w-full aspect-square object-cover rounded-lg cursor-pointer transition-all ${
                      activeThumb === index ? "border-2 border-primary opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                    src={imgUrl}
                    alt={`Miniatura de ${pet.name}`}
                    onClick={() => {
                      setMainImage(imgUrl);
                      setActiveThumb(index);
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Description Section */}
          <div className="bg-surface p-xl rounded-xl custom-shadow space-y-lg mt-xl flex flex-col gap-md border border-border-light">
            <div className="space-y-sm">
              <h2 className="font-h2 text-h2 text-primary">Sobre o {pet.name}</h2>
              <p className="font-body-reg text-body-reg text-on-surface-variant leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                {pet.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-sm">
              <div className="p-md bg-surface-container-low rounded-lg flex items-start gap-md border border-border-light">
                <span className="material-symbols-outlined text-success text-[24px]">mood</span>
                <div>
                  <h4 className="font-body-reg font-bold text-on-surface">Temperamento</h4>
                  <p className="font-body-sm text-on-surface-variant">{pet.temperament || "Brincalhão, dócil e companheiro."}</p>
                </div>
              </div>
              <div className="p-md bg-surface-container-low rounded-lg flex items-start gap-md border border-border-light">
                <span className="material-symbols-outlined text-warning text-[24px]">medical_services</span>
                <div>
                  <h4 className="font-body-reg font-bold text-on-surface">Cuidados Especiais</h4>
                  <p className="font-body-sm text-on-surface-variant">{pet.specialCare || "Precisa de carinho e atenção diária."}</p>
                </div>
              </div>
            </div>

            <div className="pt-md border-t border-border-light flex flex-col gap-sm">
              <h3 className="font-h3 text-h3 text-primary mb-xs">Saúde e Bem-estar</h3>
              <div className="flex flex-wrap gap-sm">
                <span className={`px-md py-xs rounded-full font-body-sm flex items-center gap-xs ${
                  pet.vaccinated ? "bg-tertiary/10 text-tertiary" : "bg-surface-container-high text-on-surface-variant"
                }`}>
                  <span className="material-symbols-outlined text-[18px]">
                    {pet.vaccinated ? "check_circle" : "cancel"}
                  </span> 
                  Vacinado
                </span>
                <span className={`px-md py-xs rounded-full font-body-sm flex items-center gap-xs ${
                  pet.neutered ? "bg-tertiary/10 text-tertiary" : "bg-surface-container-high text-on-surface-variant"
                }`}>
                  <span className="material-symbols-outlined text-[18px]">
                    {pet.neutered ? "check_circle" : "cancel"}
                  </span> 
                  Castrado
                </span>
                <span className={`px-md py-xs rounded-full font-body-sm flex items-center gap-xs ${
                  pet.dewormed ? "bg-tertiary/10 text-tertiary" : "bg-surface-container-high text-on-surface-variant"
                }`}>
                  <span className="material-symbols-outlined text-[18px]">
                    {pet.dewormed ? "check_circle" : "cancel"}
                  </span> 
                  Vermifugado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info & Actions Sidebar (4 Cols) */}
        <aside className="lg:col-span-4 space-y-lg sticky top-24 flex flex-col gap-md">
          {/* Main Info Card */}
          <div className="bg-surface p-xl rounded-xl custom-shadow border border-border-light space-y-lg flex flex-col gap-sm">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="font-h1 text-h1 text-primary">{pet.name}</h1>
                <span className="bg-primary-fixed text-on-primary-fixed px-sm py-xxs rounded-lg font-body-sm font-bold bg-primary-container">
                  {pet.species === "Cao" ? "Cão" : "Gato"}
                </span>
              </div>
              <div className="flex items-center gap-xs text-on-surface-variant mt-xs text-body-sm">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>{pet.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-sm py-xs">
              <div className="bg-bg-warm p-sm rounded-lg text-center border">
                <p className="text-text-muted font-body-sm">Idade</p>
                <p className="font-bold text-primary">{pet.ageString}</p>
              </div>
              <div className="bg-bg-warm p-sm rounded-lg text-center border">
                <p className="text-text-muted font-body-sm">Porte</p>
                <p className="font-bold text-primary">{pet.size}</p>
              </div>
            </div>

            <div className="space-y-sm flex flex-col gap-xs pt-xs">
              {hasSubmittedRequest ? (
                <div className="w-full bg-surface-container-high text-center py-md rounded-full font-bold font-body-reg border text-primary">
                  Solicitação enviada
                </div>
              ) : (
                <button
                  onClick={handleInterestClick}
                  className="w-full bg-secondary text-white py-md rounded-full font-bold font-body-reg hover:bg-accent-hover transition-colors shadow-sm active:scale-95 duration-150 text-center"
                >
                  Tenho interesse em adotar
                </button>
              )}
              <Link
                href="/dashboard"
                className="w-full bg-surface-container-highest text-on-surface-variant py-md rounded-full font-bold font-body-reg hover:opacity-80 transition-opacity flex items-center justify-center gap-xs border text-center"
              >
                <span className="material-symbols-outlined text-[20px]">edit</span>
                Painel de Gestão
              </Link>
            </div>
          </div>

          {/* Protector Responsibility Card */}
          <div className="bg-surface p-lg rounded-xl custom-shadow border border-border-light flex items-center gap-md">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={pet.ownerImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuAgNaU-vrKGjpgRrmlzbVmJDUG-j_dVMdtIueA3Ii1wXbqP6MdEfpJYTJPuowyljmCUXkHAyfO2MBEECVMagHcIqQsMUJM_qta6rbjKTGS64p-FyUkp9-sjVdCWqKUdCzXmuOiA6N2t3ZylXs5YvGgMt9MdpjHxEwrdfJkQXup1SOEPlBYQ7FKog9OC63hFo30FkTxIeU5qBjSyybZ5htYBr1Qg-g-SuvOBy21naWfpCKW_2VEBmkRm-SgX99_Ut3Kw5Xrv5mrL5ac"}
              alt="Foto de perfil do protetor"
            />
            <div className="flex-1">
              <p className="font-body-sm text-text-muted">Protetor Responsável</p>
              <p className="font-bold text-on-surface">{pet.ownerName || "ONG Amigos do Peito"}</p>
            </div>
            <button className="material-symbols-outlined text-primary hover:bg-primary-container p-xs rounded-full transition-colors">
              chat
            </button>
          </div>

          {/* Map Location Card */}
          <div className="bg-surface-container p-sm rounded-xl overflow-hidden custom-shadow border border-border-light group cursor-pointer flex flex-col">
            <div className="h-32 w-full rounded-lg bg-slate-200 relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB0ONejH5cV-TDy47PQrdJvfkM9rVdVWMtdEakp1-GMXD5wAb3Gfo_946fvJ3cr7UZgFmAZe0D59p5f054Qv0UaKsjjrh-kjMD3tMJ5Q0sxolQtQE9yGYamGa6HVp1Y150Sc9uEuLCR0GwMJakE9PCdlUYh3fMhPxaqYtm_eRwH8QGd7ydFuwoFCXxOrieuQ1VLJa4-yljsaMJIb0Gy1Iqn71OCA9bhidMwCzEm80DZdCQYDnHu2eREM9aq-dAtYCFeOPpG-kONCM"
                alt="Mapa da localização"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-4xl fill-icon">location_on</span>
              </div>
            </div>
            <div className="p-xs text-center pt-xs">
              <p className="font-body-sm font-bold text-primary">Ver localização completa</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Pets Section */}
      <section className="mt-xxl">
        <h3 className="font-h2 text-h2 text-primary mb-xl">Outros companheiros para você</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg">
          {displayedSimilar.map((similarPet) => (
            <div
              key={similarPet.id}
              onClick={() => {
                router.push(`/pet/${similarPet.id}`);
              }}
              className="bg-surface rounded-xl custom-shadow overflow-hidden hover:-translate-y-1 transition-transform border border-border-light cursor-pointer flex flex-col"
            >
              <img className="w-full h-48 object-cover" src={similarPet.image} alt={similarPet.name} />
              <div className="p-md">
                <h4 className="font-bold text-h3 text-on-surface">{similarPet.name}</h4>
                <p className="text-text-muted font-body-sm">
                  {similarPet.species === "Cao" ? "Cão" : "Gato"} • {similarPet.ageString}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
