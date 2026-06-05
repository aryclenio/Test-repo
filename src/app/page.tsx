"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { petsData, Pet } from "@/lib/data";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Search } from "lucide-react";

export default function BrowsePets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Filter States
  const [species, setSpecies] = useState("Todos");
  const [size, setSize] = useState("Todos");
  const [age, setAge] = useState("Todos");
  const [city, setCity] = useState("");

  // Simulated initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setPets(petsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleApplyFilters = () => {
    setLoading(true);
    setTimeout(() => {
      let filtered = petsData;
      if (species !== "Todos") {
        filtered = filtered.filter((pet) => pet.species === species);
      }
      if (size !== "Todos") {
        filtered = filtered.filter((pet) => pet.size === size);
      }
      if (age !== "Todos") {
        filtered = filtered.filter((pet) => pet.age === age);
      }
      if (city.trim() !== "") {
        filtered = filtered.filter((pet) =>
          pet.city.toLowerCase().includes(city.toLowerCase())
        );
      }
      setPets(filtered);
      setLoading(false);
    }, 600);
  };

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow max-w-[1200px] w-full mx-auto px-6 md:px-10 py-10">
        {/* Hero Section */}
        <section className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {petsData.length} pets aguardando uma família
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Encontre o companheiro perfeito que está ansioso por um lar cheio de amor e cuidado. Cada focinho aqui tem uma história esperando por um novo capítulo.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar / Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-muted/40 p-6 rounded-2xl flex flex-col gap-5 sticky top-24 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg text-primary">Filters</h2>
                  <p className="text-xs text-muted-foreground">Narrow your search</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Species */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold flex items-center gap-1.5">
                    Species
                  </label>
                  <Select value={species} onValueChange={(val) => setSpecies(val || "Todos")}>
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Cães">Cães</SelectItem>
                      <SelectItem value="Gatos">Gatos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Size */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold flex items-center gap-1.5">
                    Size
                  </label>
                  <Select value={size} onValueChange={(val) => setSize(val || "Todos")}>
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Pequeno">Pequeno</SelectItem>
                      <SelectItem value="Médio">Médio</SelectItem>
                      <SelectItem value="Grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold flex items-center gap-1.5">
                    Age
                  </label>
                  <Select value={age} onValueChange={(val) => setAge(val || "Todos")}>
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Filhote">Filhote</SelectItem>
                      <SelectItem value="Adulto">Adulto</SelectItem>
                      <SelectItem value="Idoso">Idoso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold flex items-center gap-1.5">
                    City
                  </label>
                  <Input
                    className="w-full bg-background"
                    placeholder="Ex: São Paulo"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <Button
                onClick={handleApplyFilters}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl py-6 transition-all"
              >
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Pet Grid */}
          <div className="flex-grow">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm h-[400px] animate-pulse"
                  >
                    <div className="w-full h-56 bg-muted"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 w-3/4 bg-muted rounded"></div>
                      <div className="flex gap-2">
                        <div className="h-5 w-16 bg-muted rounded-full"></div>
                        <div className="h-5 w-16 bg-muted rounded-full"></div>
                      </div>
                      <div className="h-4 w-1/2 bg-muted rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : pets.length === 0 ? (
              <div className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-3xl">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Nenhum pet encontrado
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tente alterar seus filtros para encontrar outros animais disponíveis.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {pets.map((pet) => (
                  <Link
                    key={pet.id}
                    href={`/pets/${pet.id}`}
                    className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      {pet.tag && (
                        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                          {pet.tag}
                        </span>
                      )}
                      <button
                        onClick={(e) => toggleFavorite(pet.id, e)}
                        className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                          favorites.includes(pet.id)
                            ? "bg-primary text-white"
                            : "bg-white/80 hover:bg-white text-primary"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(pet.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <img
                        src={pet.img}
                        alt={pet.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                      <h3 className="font-semibold text-xl text-text-primary">
                        {pet.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-success/10 text-success text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {pet.size}
                        </span>
                        <span className="bg-info/10 text-info text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {pet.age}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {pet.city}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
