"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../context/AppContext";

export default function PetCard({ pet }) {
  const router = useRouter();
  const { favorites, toggleFavorite } = useApp();
  const [scale, setScale] = useState(1);

  const isFavorite = favorites.includes(pet.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(pet.id);
    // Micro-interaction scaling effect
    setScale(1.2);
    setTimeout(() => setScale(1), 200);
  };

  const handleCardClick = () => {
    router.push(`/pet/${pet.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="pet-card group bg-surface rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={pet.name}
          src={pet.image}
          loading="lazy"
        />
        <button
          className="absolute top-sm right-sm w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm z-10 transition-transform"
          onClick={handleFavoriteClick}
          style={{ 
            color: isFavorite ? "var(--color-brand-accent)" : "var(--color-neutral-text-muted)",
            transform: `scale(${scale})`
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
        {pet.recentRescue && (
          <div className="absolute top-sm left-sm bg-warning text-on-background px-sm py-xxs rounded-full text-[10px] font-bold uppercase tracking-tighter">
            Resgate Recente
          </div>
        )}
        {pet.age === "Idoso" && (
          <div className="absolute top-sm left-sm bg-primary-container text-on-primary-container px-sm py-xxs rounded-full text-[10px] font-bold uppercase tracking-tighter">
            Idoso
          </div>
        )}
      </div>
      
      <div className="p-md flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-xxs">
          <h4 className="font-h3 text-primary">{pet.name}</h4>
          <span className="text-body-sm text-outline">{pet.ageString}</span>
        </div>
        
        <div className="text-body-sm text-on-surface-variant flex items-center mb-md">
          <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
          {pet.location}
        </div>
        
        <div className="mt-auto flex gap-xs">
          <span className="px-xs py-[2px] bg-surface-container-high rounded-full text-[11px] text-primary-light font-medium">
            {pet.size}
          </span>
          <span className="px-xs py-[2px] bg-surface-container-high rounded-full text-[11px] text-primary-light font-medium">
            {pet.species === "Cao" ? "Cão" : "Gato"}
          </span>
        </div>
      </div>
    </div>
  );
}
