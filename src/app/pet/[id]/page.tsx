"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PetPageProps {
  params: Promise<{ id: string }>;
}

export default function PetPage({ params }: PetPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const petId = parseInt(resolvedParams.id, 10);
  
  const { pets, favorites, toggleFavorite, addAdoptionRequest } = useApp();
  
  // Find current pet
  const pet = pets.find((p) => p.id === petId);
  
  // States
  const [selectedImage, setSelectedImage] = useState<string>(pet?.img || "");
  const [isAdoptionDialogOpen, setIsAdoptionDialogOpen] = useState(false);
  const [adopterName, setAdopterName] = useState("");
  
  if (!pet) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-16 px-6 text-center max-w-md mx-auto flex flex-col items-center justify-center flex-1">
          <div className="bg-muted p-6 rounded-full mb-6">
            <span className="material-symbols-outlined text-5xl text-muted-foreground">pets</span>
          </div>
          <h1 className="font-heading text-2xl font-bold mb-2">Pet não encontrado</h1>
          <p className="text-muted-foreground mb-6">O animal solicitado não está cadastrado em nosso portal ou foi adotado.</p>
          <Link href="/" className="bg-primary text-white py-3 px-6 rounded-xl font-bold text-sm">
            Voltar para a vitrine
          </Link>
        </main>
      </>
    );
  }

  // Initialize selectedImage with pet.img if it wasn't set
  if (!selectedImage && pet.img) {
    setSelectedImage(pet.img);
  }

  const isFav = favorites.includes(pet.id);

  // Recommendations: Other pets of the same species (max 4, excluding current pet)
  const recommendations = pets
    .filter((p) => p.species === pet.species && p.id !== pet.id)
    .slice(0, 4);

  // Handle Quero Adotar Submission
  const handleAdoptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adopterName.trim()) {
      toast.error("Por favor, digite seu nome.");
      return;
    }
    
    addAdoptionRequest(pet.id, adopterName);
    setIsAdoptionDialogOpen(false);
    setAdopterName("");
    
    toast.success(`Solicitação de adoção enviada com sucesso para ${pet.name}! A ONG entrará em contato em breve.`);
  };

  // Click handler for recommendations
  const handleRecommendationClick = (id: number) => {
    setSelectedImage("");
    router.push(`/pet/${id}`);
  };

  return (
    <>
      <Navbar />
      
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto flex-1 w-full">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-6 hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Voltar para a vitrine
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Gallery & Info */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery */}
            <section className="space-y-4">
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-muted relative">
                <img 
                  src={selectedImage || pet.img} 
                  alt={pet.alt} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              
              {/* Thumbnails (Simulating multiples using sub-views of the same high quality source or generic variants) */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedImage(pet.img)}
                  className={cn(
                    "w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all",
                    (selectedImage === pet.img || !selectedImage)
                      ? "ring-2 ring-primary ring-offset-2 scale-95" 
                      : "hover:opacity-80"
                  )}
                >
                  <img src={pet.img} className="w-full h-full object-cover" alt="Foto principal" />
                </button>
                
                {/* Secondary shots using closeups of similar style */}
                <button
                  onClick={() => setSelectedImage("https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800")}
                  className={cn(
                    "w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all",
                    selectedImage === "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800"
                      ? "ring-2 ring-primary ring-offset-2 scale-95" 
                      : "hover:opacity-80"
                  )}
                >
                  <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800" className="w-full h-full object-cover" alt="Cena no parque" />
                </button>

                <button
                  onClick={() => setSelectedImage("https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800")}
                  className={cn(
                    "w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all",
                    selectedImage === "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800"
                      ? "ring-2 ring-primary ring-offset-2 scale-95" 
                      : "hover:opacity-80"
                  )}
                >
                  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800" className="w-full h-full object-cover" alt="Close-up" />
                </button>
              </div>
            </section>

            {/* Core Details */}
            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border/30 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="font-heading text-4xl text-foreground font-bold mb-1">
                    {pet.name}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span>{pet.city}, Brasil</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      toggleFavorite(pet.id);
                      toast.info(isFav ? `${pet.name} removido dos favoritos` : `${pet.name} adicionado aos favoritos!`);
                    }}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-full transition-colors cursor-pointer",
                      isFav 
                        ? "bg-error/10 text-error hover:bg-error/20" 
                        : "bg-muted text-primary hover:bg-muted/80"
                    )}
                  >
                    <span 
                      className={cn("material-symbols-outlined text-2xl", isFav && "fill-current")}
                      style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Link do pet copiado para a área de transferência!");
                    }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-2xl">share</span>
                  </button>
                </div>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center text-center border border-border/10">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Idade</span>
                  <span className="font-bold text-primary">{pet.age}</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center text-center border border-border/10">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Porte</span>
                  <span className="font-bold text-primary">{pet.size}</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center text-center border border-border/10">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Espécie</span>
                  <span className="font-bold text-primary">{pet.species}</span>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center text-center border border-border/10">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Sexo</span>
                  <span className="font-bold text-primary">{pet.gender}</span>
                </div>
              </div>

              {/* About description */}
              <div className="space-y-3 pt-4 border-t border-border/30">
                <h2 className="font-heading text-2xl text-foreground font-bold">Sobre mim</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                  {pet.description}
                </p>
              </div>

              {/* Temperament */}
              <div className="space-y-3 pt-4 border-t border-border/30">
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Temperamento</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.temperament.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* NGO info */}
            <div className="bg-card rounded-2xl p-6 border border-border/30 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary/15 flex-shrink-0 border border-border/20">
                  <img 
                    src={pet.ngoAvatar || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=100"} 
                    className="w-full h-full object-cover" 
                    alt={pet.ngoName || "Protetor"} 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">
                    {pet.ngoName || "ONG Patas Amigas"}
                  </h3>
                  <p className="text-xs text-muted-foreground">Publicado {pet.publishedTimeAgo || "há 2 dias"}</p>
                </div>
              </div>

              <button 
                onClick={() => setIsAdoptionDialogOpen(true)}
                className="w-full bg-secondary text-white py-3.5 rounded-xl font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                Quero Adotar
              </button>

              <div className="flex gap-2">
                <button 
                  onClick={() => toast.info("Edição de perfil disponível apenas para a própria ONG.")}
                  className="flex-1 bg-muted hover:bg-muted/80 text-foreground py-2.5 rounded-lg font-bold text-xs transition-all cursor-pointer"
                >
                  Editar Perfil
                </button>
                <button 
                  onClick={() => toast.warning(`Pet ${pet.name} arquivado com sucesso.`)}
                  className="bg-muted text-error hover:bg-error/10 hover:text-error p-2.5 rounded-lg transition-all cursor-pointer"
                  title="Arquivar Pet"
                >
                  <span className="material-symbols-outlined text-lg">archive</span>
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/30 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span>ONG Verificada</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chat_bubble</span>
                  <span>Responde em até {pet.responseTime || "1 hora"}</span>
                </div>
              </div>
            </div>

            {/* Safe adoption tips */}
            <div className="bg-muted/50 p-6 rounded-2xl border border-border/10 space-y-2 shadow-inner">
              <h4 className="font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">info</span>
                Dica de Adoção
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sempre visite o pet presencialmente antes de finalizar o processo. Conhecer a energia do animal é fundamental para uma adoção de sucesso!
              </p>
            </div>
          </aside>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <section className="mt-16 border-t border-border/30 pt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground font-bold">
                Outros pets que você pode gostar
              </h2>
              <Link href="/" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                Ver todos 
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((recPet) => (
                <div 
                  key={recPet.id}
                  onClick={() => handleRecommendationClick(recPet.id)}
                  className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/30 cursor-pointer group"
                >
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <img 
                      src={recPet.img} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt={recPet.name} 
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {recPet.name}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
                      <span>{recPet.gender}</span>
                      <span>•</span>
                      <span>{recPet.age}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Adoption Form Dialog */}
      <Dialog open={isAdoptionDialogOpen} onOpenChange={setIsAdoptionDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-2xl">
          <form onSubmit={handleAdoptSubmit}>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl font-bold">Iniciar Solicitação de Adoção</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Que ótimo que você quer adotar o <strong>{pet.name}</strong>! Preencha seu nome para que a {pet.ngoName || "ONG"} possa entrar em contato com você.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-left font-bold text-sm">
                  Seu Nome Completo
                </Label>
                <Input
                  id="name"
                  value={adopterName}
                  onChange={(e) => setAdopterName(e.target.value)}
                  placeholder="Ex: João Silva"
                  className="col-span-3 rounded-xl focus-visible:ring-secondary focus-visible:border-transparent"
                  autoFocus
                />
              </div>
            </div>
            <DialogFooter className="flex gap-2 sm:gap-0">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsAdoptionDialogOpen(false)}
                className="rounded-xl border-border hover:bg-muted cursor-pointer"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="bg-secondary text-white hover:brightness-110 rounded-xl cursor-pointer"
              >
                Confirmar Interesse
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
