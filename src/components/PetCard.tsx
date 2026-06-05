import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface Pet {
  id: string;
  name: string;
  species: "Cão" | "Gato" | "Outros";
  age?: "Filhote" | "Adulto" | "Idoso";
  size: "Pequeno" | "Médio" | "Grande";
  city: string;
  state: string;
  image?: string;
  badge?: string;
  badgeType?: "active" | "recent" | "old";
}

interface PetCardProps {
  pet: Pet;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export default function PetCard({ pet, isFavorite, onToggleFavorite }: PetCardProps) {
  return (
    <Link
      href={`/pet/${pet.id}`}
      className="group bg-white rounded-[20px] shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-surface-container"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        {pet.image ? (
          <Image
            src={pet.image}
            alt={pet.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container text-on-surface-variant gap-sm">
            <span className="material-symbols-outlined text-[48px]">pets</span>
            <span className="text-[12px] font-medium">Sem foto disponível</span>
          </div>
        )}
        
        <button
          onClick={(e) => onToggleFavorite(pet.id, e)}
          aria-label={`Favoritar ${pet.name}`}
          className={`absolute top-md right-md w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md transition-colors cursor-pointer ${
            isFavorite
              ? "bg-white text-error-brick"
              : "bg-white/80 text-primary-container hover:bg-white"
          }`}
        >
          <span className={`material-symbols-outlined ${isFavorite ? "filled-icon" : ""}`}>
            favorite
          </span>
        </button>
        
        {pet.badge && (
          <div className="absolute bottom-md left-md flex gap-xs">
            <span
              data-testid="pet-badge"
              className={`text-[11px] font-bold px-sm py-[2px] rounded-full uppercase tracking-wider shadow-sm ${
                pet.badgeType === "active"
                  ? "bg-secondary-container text-on-secondary-container"
                  : pet.badgeType === "recent"
                  ? "bg-primary-container text-white"
                  : "bg-surface-container-highest text-on-surface-variant"
              }`}
            >
              {pet.badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-lg flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-sm">
          <h3 className="font-headline-sm text-headline-sm text-text-dark">{pet.name}</h3>
          <span
            className={`font-bold text-label-md ${
              pet.species === "Cão" ? "text-success-sage" : "text-warning-ochre"
            }`}
          >
            {pet.species}
          </span>
        </div>
        
        <div className="space-y-xs mb-lg flex-1">
          {pet.age && (
            <div className="flex items-center gap-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">event</span>
              <span className="font-body-md text-body-md">{pet.age}</span>
            </div>
          )}
          <div className="flex items-center gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">straighten</span>
            <span className="font-body-md text-body-md">{pet.size}</span>
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span className="font-body-md text-body-md">
              {pet.city}, {pet.state}
            </span>
          </div>
        </div>

        <span className="w-full text-center bg-primary-container text-white font-button text-button py-md rounded-xl hover:bg-primary transition-colors shadow-sm cursor-pointer group-hover:scale-[1.02] active:scale-[0.98] transition-all">
          Ver Perfil
        </span>
      </div>
    </Link>
  );
}
