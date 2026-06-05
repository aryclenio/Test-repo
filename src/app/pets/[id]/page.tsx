"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { petsData, Pet } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Heart, Share2, MapPin, ArrowLeft, ArrowRight } from "lucide-react";

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [isFavorited, setIsFavorited] = useState(false);
  const [similarPets, setSimilarPets] = useState<Pet[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Adoption Form Fields
  const [adopterName, setAdopterName] = useState("");
  const [adopterEmail, setAdopterEmail] = useState("");
  const [adopterPhone, setAdopterPhone] = useState("");

  useEffect(() => {
    if (!id) return;
    const petId = parseInt(Array.isArray(id) ? id[0] : id);
    const foundPet = petsData.find((p) => p.id === petId) || petsData[0];
    setPet(foundPet);
    setActiveImage(foundPet.img);
    
    // Find similar pets (same species or random ones other than current)
    const similar = petsData
      .filter((p) => p.id !== foundPet.id)
      .slice(0, 3);
    setSimilarPets(similar);
  }, [id]);

  if (!pet) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-muted-foreground animate-pulse">Carregando...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAdoptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adopterName || !adopterEmail || !adopterPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="max-w-[1200px] w-full mx-auto px-6 md:px-10 py-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a busca
        </Link>

        {/* Gallery & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Gallery */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="rounded-[24px] overflow-hidden border border-border shadow-sm h-[400px] md:h-[550px] relative bg-muted">
              <img
                className="w-full h-full object-cover transition-all duration-300"
                src={activeImage}
                alt={pet.alt}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button
                onClick={() => setActiveImage(pet.img)}
                className={`rounded-xl overflow-hidden h-20 md:h-28 cursor-pointer transition-all border-2 ${
                  activeImage === pet.img ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img className="w-full h-full object-cover" src={pet.img} alt="Thumbnail 1" />
              </button>
              <button
                onClick={() => setActiveImage("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600")}
                className={`rounded-xl overflow-hidden h-20 md:h-28 cursor-pointer transition-all border-2 ${
                  activeImage === "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600" ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600" alt="Thumbnail 2" />
              </button>
              <button
                onClick={() => setActiveImage("https://images.unsplash.com/photo-1537151608828-ea2b117b62e4?auto=format&fit=crop&q=80&w=600")}
                className={`rounded-xl overflow-hidden h-20 md:h-28 cursor-pointer transition-all border-2 ${
                  activeImage === "https://images.unsplash.com/photo-1537151608828-ea2b117b62e4?auto=format&fit=crop&q=80&w=600" ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537151608828-ea2b117b62e4?auto=format&fit=crop&q=80&w=600" alt="Thumbnail 3" />
              </button>
              <div className="rounded-xl overflow-hidden h-20 md:h-28 bg-muted flex items-center justify-center text-muted-foreground font-semibold">
                +4 fotos
              </div>
            </div>
          </div>

          {/* Quick Info & Action Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Header / Titles */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-1">{pet.name}</h1>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  {pet.city}, SP
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted/50 transition-colors ${
                    isFavorited ? "bg-primary text-white" : "text-primary bg-background"
                  }`}
                  title="Favorite"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                </button>
                <button
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted/50 text-primary bg-background transition-colors"
                  title="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid of quick details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/40 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  Id
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Age</p>
                  <p className="font-semibold text-text-primary">{pet.age}</p>
                </div>
              </div>
              <div className="bg-muted/40 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  Sz
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Size</p>
                  <p className="font-semibold text-text-primary">{pet.size}</p>
                </div>
              </div>
              <div className="bg-muted/40 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  Gn
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Gender</p>
                  <p className="font-semibold text-text-primary">{pet.gender}</p>
                </div>
              </div>
              <div className="bg-muted/40 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  Sp
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Species</p>
                  <p className="font-semibold text-text-primary">{pet.species}</p>
                </div>
              </div>
            </div>

            {/* Sticky Adoption Card */}
            <div className="bg-card p-6 rounded-[24px] border border-border shadow-md sticky top-24 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-primary">Pronto para adotar?</h3>
              <div className="flex items-center gap-4 py-2 border-b border-border/50">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200"
                  alt="Shelter staff"
                />
                <div>
                  <p className="font-bold text-sm text-text-primary">{pet.shelter || "Amigos do Totó ONG"}</p>
                  <p className="text-xs text-muted-foreground">Responsável pelo Resgate</p>
                </div>
              </div>

              <Dialog>
                <DialogTrigger render={
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 rounded-xl transition-all shadow-sm">
                    Quero Adotar
                  </Button>
                } />
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Formulário de Interesse</DialogTitle>
                    <DialogDescription>
                      Insira seus dados para entrar em contato com a ONG responsável pelo {pet.name}.
                    </DialogDescription>
                  </DialogHeader>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-6 gap-3">
                      <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center text-success">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-lg text-primary">Interesse enviado!</h4>
                      <p className="text-sm text-muted-foreground">
                        A equipe da ONG retornará o contato no seu email ou telefone cadastrado. Obrigado!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleAdoptionSubmit} className="space-y-4 py-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold">Nome Completo</label>
                        <Input
                          required
                          value={adopterName}
                          onChange={(e) => setAdopterName(e.target.value)}
                          placeholder="Ex: Ana Maria"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold">E-mail</label>
                        <Input
                          required
                          type="email"
                          value={adopterEmail}
                          onChange={(e) => setAdopterEmail(e.target.value)}
                          placeholder="Ex: ana@exemplo.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold">Telefone / WhatsApp</label>
                        <Input
                          required
                          value={adopterPhone}
                          onChange={(e) => setAdopterPhone(e.target.value)}
                          placeholder="Ex: (11) 98765-4321"
                        />
                      </div>
                      <DialogFooter className="pt-4">
                        <Button type="submit" className="w-full bg-secondary text-white py-4 rounded-xl">
                          Confirmar Interesse
                        </Button>
                      </DialogFooter>
                    </form>
                  )}
                </DialogContent>
              </Dialog>

              <button className="w-full border border-primary text-primary font-semibold py-3 rounded-xl hover:bg-muted/30 transition-colors">
                Fazer uma Pergunta
              </button>
              <p className="text-xs text-center text-muted-foreground italic">
                {pet.name} está atualmente em {pet.city}, SP
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Sobre o {pet.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {pet.description || "Sem descrição adicional disponível."}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Saúde & Cuidados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  <CheckCircle2 className="text-success w-5 h-5" />
                  <span className="font-medium">Totalmente Vacinado</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  {pet.neutered ? (
                    <CheckCircle2 className="text-success w-5 h-5" />
                  ) : (
                    <AlertCircle className="text-warning w-5 h-5" />
                  )}
                  <span className="font-medium">{pet.neutered ? "Castrado" : "Não castrado"}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  {pet.microchipped ? (
                    <CheckCircle2 className="text-success w-5 h-5" />
                  ) : (
                    <AlertCircle className="text-warning w-5 h-5" />
                  )}
                  <span className="font-medium">{pet.microchipped ? "Microchipado" : "Sem microchip"}</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                  <AlertCircle className="text-info w-5 h-5" />
                  <span className="font-medium">Dieta: {pet.diet || "Sem restrições"}</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Similar Pets Section */}
        <section className="border-t border-border pt-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-1">Pets Semelhantes</h2>
              <p className="text-muted-foreground">Outros amigos procurando por um lar definitivo</p>
            </div>
            <Link
              href="/"
              className="text-secondary font-bold flex items-center gap-1 hover:underline"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarPets.map((simPet) => (
              <Link
                key={simPet.id}
                href={`/pets/${simPet.id}`}
                className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden bg-muted">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={simPet.img}
                    alt={simPet.alt}
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-primary">{simPet.name}</h3>
                    <span className="text-[10px] bg-success/15 text-success px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {simPet.age}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {simPet.city}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                      {simPet.size}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                      {simPet.gender}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
