"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "../../context/AppContext";
import PetCard from "../../components/PetCard";

export default function Favorites() {
  const { pets, favorites, isLoaded } = useApp();

  const favoritedPets = pets.filter((pet) => favorites.includes(pet.id));

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center py-xxl text-primary-light min-h-screen">
        <span className="material-symbols-outlined animate-spin text-5xl">sync</span>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-lg pt-xl pb-xxl animate-in mt-12">
      <div className="mb-xl">
        <h1 className="font-h1 text-h1 text-primary mb-xxs">Meus Favoritos</h1>
        <p className="text-text-muted font-body-lg text-body-lg">
          Aqui estão os companheiros que você favoritou durante a busca.
        </p>
      </div>

      {favoritedPets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
          {favoritedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-xxl text-center">
          <div 
            className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md"
            style={{ color: "var(--color-brand-accent)" }}
          >
            <span className="material-symbols-outlined text-5xl fill-icon">favorite</span>
          </div>
          <h3 className="font-h2 text-primary">Nenhum pet favoritado</h3>
          <p className="text-body-reg text-on-surface-variant max-w-sm mt-xs mx-auto">
            Explore a lista de animais disponíveis e clique no ícone de coração para salvá-los aqui.
          </p>
          <Link
            href="/"
            className="mt-lg bg-secondary text-white px-lg py-sm rounded-full font-bold hover:bg-accent-hover transition-colors shadow-sm active:scale-95 inline-block"
          >
            Descobrir Pets
          </Link>
        </div>
      )}
    </main>
  );
}
