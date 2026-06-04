"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp, Pet, AdoptionRequest } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { pets, adoptionRequests, updateRequestStatus, addPet } = useApp();
  
  // States
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [petForm, setPetForm] = useState({
    name: "",
    species: "Cão" as "Cão" | "Gato",
    size: "Médio" as "Pequeno" | "Médio" | "Grande",
    age: "Adulto" as "Filhote" | "Adulto" | "Idoso",
    gender: "Macho" as "Macho" | "Fêmea",
    city: "São Paulo",
    description: "",
    temperament: "Dócil, Brincalhão, Vacinado",
  });

  // Calculate dynamic metrics
  const activePetsCount = pets.length;
  const pendingRequestsCount = adoptionRequests.filter((r) => r.status === "Nova").length;
  const approvedAdoptionsCount = adoptionRequests.filter((r) => r.status === "Aprovada").length;
  
  // Submit new pet form
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petForm.name.trim()) {
      toast.error("O nome do pet é obrigatório.");
      return;
    }
    if (!petForm.description.trim()) {
      toast.error("A descrição do pet é obrigatória.");
      return;
    }

    // Assign appropriate Unsplash image based on species
    const isDog = petForm.species === "Cão";
    const dogImages = [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800",
      "https://images.unsplash.com/photo-1591160674255-fc34bb0299f4?q=80&w=800",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800"
    ];
    const catImages = [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
      "https://images.unsplash.com/photo-1513245535749-174528dc7e70?q=80&w=800",
      "https://images.unsplash.com/photo-1573865526739-10659fef78a1?q=80&w=800"
    ];

    const randomImgList = isDog ? dogImages : catImages;
    const randomImg = randomImgList[Math.floor(Math.random() * randomImgList.length)];

    const tempTags = petForm.temperament
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    addPet({
      name: petForm.name,
      species: petForm.species,
      size: petForm.size,
      age: petForm.age,
      gender: petForm.gender,
      city: petForm.city,
      tags: tempTags.slice(0, 1), // Take first tag as main tag
      img: randomImg,
      alt: `${petForm.name}, um lindo ${petForm.species.toLowerCase()}`,
      description: petForm.description,
      temperament: tempTags,
      ngoName: "ONG Patas Amigas",
      ngoAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD12dLjrTr_lP98u1Zvdnz3rlQLKdeT7rHlNS87MWI8MNwShPMdoMrqC8liJw6dqYMNw-Z1-ookGre187R3LWUlUfu3GDXfMt6aDvogOkiyrzXEV0mTg5Hr63O-LmZolrg6BioSJ6p5ODibx_sGjPt3HsVKPQ8ovOpHzJ7rVNmdlqiWLEBTZSOtqEg2xbI1VZwSegAAMXPcVIqXbICR0bd4N71yaA3tDQ4-q0GKUHCmD9IJxcudD4jM_qpqaymCfcfeRJjMTzWZKCc"
    });

    setIsRegisterDialogOpen(false);
    // Reset form
    setPetForm({
      name: "",
      species: "Cão",
      size: "Médio",
      age: "Adulto",
      gender: "Macho",
      city: "São Paulo",
      description: "",
      temperament: "Dócil, Brincalhão, Vacinado",
    });

    toast.success(`${petForm.name} cadastrado com sucesso e já está disponível na Vitrine!`);
  };

  // Change request status
  const handleStatusChange = (reqId: string, name: string, status: AdoptionRequest["status"]) => {
    updateRequestStatus(reqId, status);
    toast.success(`Solicitação de ${name} atualizada para "${status}"!`);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col md:flex-row">
      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex flex-col h-screen w-64 bg-card border-r border-border/40 p-4 gap-6 shrink-0 sticky top-0">
        <div className="px-2">
          <Link href="/" className="font-heading text-2xl text-primary font-bold tracking-tight">
            Adopet Manager
          </Link>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mt-1 opacity-70">
            Portal da ONG
          </p>
        </div>

        {/* Dialog Trigger to Register Pet */}
        <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
          <DialogTrigger render={<Button className="w-full bg-secondary hover:brightness-110 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm" />}>
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Cadastrar Pet
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] rounded-2xl">
            <form onSubmit={handleRegisterSubmit}>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl font-bold">Cadastrar Novo Pet</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Insira as informações do animal para exibi-lo na vitrine de adoção.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto px-1">
                <div className="grid gap-2">
                  <Label htmlFor="petName" className="font-bold text-sm">Nome do Pet</Label>
                  <Input
                    id="petName"
                    value={petForm.name}
                    onChange={(e) => setPetForm({ ...petForm, name: e.target.value })}
                    placeholder="Ex: Pipoca"
                    className="rounded-xl focus-visible:ring-secondary focus-visible:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="petSpecies" className="font-bold text-sm">Espécie</Label>
                    <select
                      id="petSpecies"
                      value={petForm.species}
                      onChange={(e) => setPetForm({ ...petForm, species: e.target.value as "Cão" | "Gato" })}
                      className="bg-background border border-border/50 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                    >
                      <option value="Cão">Cão</option>
                      <option value="Gato">Gato</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="petGender" className="font-bold text-sm">Sexo</Label>
                    <select
                      id="petGender"
                      value={petForm.gender}
                      onChange={(e) => setPetForm({ ...petForm, gender: e.target.value as "Macho" | "Fêmea" })}
                      className="bg-background border border-border/50 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                    >
                      <option value="Macho">Macho</option>
                      <option value="Fêmea">Fêmea</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="petSize" className="font-bold text-sm">Porte</Label>
                    <select
                      id="petSize"
                      value={petForm.size}
                      onChange={(e) => setPetForm({ ...petForm, size: e.target.value as "Pequeno" | "Médio" | "Grande" })}
                      className="bg-background border border-border/50 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                    >
                      <option value="Pequeno">Pequeno</option>
                      <option value="Médio">Médio</option>
                      <option value="Grande">Grande</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="petAge" className="font-bold text-sm">Idade</Label>
                    <select
                      id="petAge"
                      value={petForm.age}
                      onChange={(e) => setPetForm({ ...petForm, age: e.target.value as "Filhote" | "Adulto" | "Idoso" })}
                      className="bg-background border border-border/50 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                    >
                      <option value="Filhote">Filhote</option>
                      <option value="Adulto">Adulto</option>
                      <option value="Idoso">Idoso</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="petCity" className="font-bold text-sm">Cidade</Label>
                  <Input
                    id="petCity"
                    value={petForm.city}
                    onChange={(e) => setPetForm({ ...petForm, city: e.target.value })}
                    placeholder="Ex: São Paulo"
                    className="rounded-xl focus-visible:ring-secondary focus-visible:border-transparent"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="petTemp" className="font-bold text-sm">Temperamento (separado por vírgula)</Label>
                  <Input
                    id="petTemp"
                    value={petForm.temperament}
                    onChange={(e) => setPetForm({ ...petForm, temperament: e.target.value })}
                    placeholder="Ex: Dócil, Calmo, Vacinado"
                    className="rounded-xl focus-visible:ring-secondary focus-visible:border-transparent"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="petDesc" className="font-bold text-sm">Sobre o Pet (História e rotina)</Label>
                  <Textarea
                    id="petDesc"
                    value={petForm.description}
                    onChange={(e) => setPetForm({ ...petForm, description: e.target.value })}
                    placeholder="Conte sobre o temperamento dele e como foi resgatado..."
                    className="rounded-xl focus-visible:ring-secondary focus-visible:border-transparent h-24"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsRegisterDialogOpen(false)}
                  className="rounded-xl cursor-pointer"
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="bg-secondary text-white hover:brightness-110 rounded-xl cursor-pointer"
                >
                  Salvar Cadastro
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <nav className="flex flex-col gap-1 overflow-y-auto mt-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-secondary/15 text-primary rounded-xl px-4 py-3 font-bold text-sm transition-all">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              analytics
            </span>
            Métricas
          </Link>
          <Link href="/" className="flex items-center gap-3 text-muted-foreground hover:bg-muted/70 rounded-xl px-4 py-3 font-bold text-sm transition-all">
            <span className="material-symbols-outlined text-xl">pets</span>
            Vitrine
          </Link>
          <a href="#" className="flex items-center gap-3 text-muted-foreground hover:bg-muted/70 rounded-xl px-4 py-3 font-bold text-sm transition-all" onClick={() => toast.info("Funcionalidade em desenvolvimento.")}>
            <span className="material-symbols-outlined text-xl">assignment_ind</span>
            Solicitações
          </a>
          <a href="#" className="flex items-center gap-3 text-muted-foreground hover:bg-muted/70 rounded-xl px-4 py-3 font-bold text-sm transition-all" onClick={() => toast.info("Funcionalidade em desenvolvimento.")}>
            <span className="material-symbols-outlined text-xl">list_alt</span>
            Pets cadastrados
          </a>
          <a href="#" className="flex items-center gap-3 text-muted-foreground hover:bg-muted/70 rounded-xl px-4 py-3 font-bold text-sm transition-all mt-auto" onClick={() => toast.info("Funcionalidade em desenvolvimento.")}>
            <span className="material-symbols-outlined text-xl">settings</span>
            Configurações
          </a>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background pb-20 md:pb-12">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-6 md:px-12 h-20 shrink-0 border-b border-border/20 md:border-none bg-card md:bg-transparent">
          <div className="flex items-center gap-4">
            <Link href="/" className="md:hidden font-heading text-xl text-primary font-bold">
              Adopet
            </Link>
            <h2 className="hidden md:block font-heading text-2xl font-bold text-foreground">
              Painel de Controle
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                search
              </span>
              <input
                className="bg-card border border-border/40 rounded-full pl-10 pr-4 py-2 w-64 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Buscar por pet ou adotante..."
                type="text"
                onChange={() => toast.info("Busca em tempo real será integrada no banco de dados.")}
              />
            </div>
            
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
              onClick={() => toast.info("Você não tem novas notificações.")}
            >
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            
            <div className="w-10 h-10 rounded-full bg-secondary/15 overflow-hidden border-2 border-primary">
              <img
                alt="Coordenadora da ONG"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5sL1CXQLMrCyNj9GqVomfaMFR9ZkuURb6i5Q0M2uwwFFGCi_I8FYGHeAf8w2-_ZJ4Ho88Z-pPFSqncc4MzY_WeH1oSEaw-WrYT0n7qGpgBGlSR0VI2TESCNmBuvciZRxbLXdtxMVzuH1k0GLuw_Zpx37jZINrTXz9KyLkJF2SepMxmBUzpiaxzz44nRS_PBARf17Mni8yiQeGfBj71_yrR2paAJceDld2hPUJ6Ha4JxDUlVR3QXQZdO4ZcLbAwp20rzKQhRf74I"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="px-6 md:px-12 py-6">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-2xl border border-border/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider">Pets Ativos</span>
              <div className="flex justify-between items-end">
                <span className="font-heading text-4xl font-extrabold text-primary">{activePetsCount}</span>
                <span className="text-success font-bold text-xs flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +3
                </span>
              </div>
              <div className="absolute right-2 -bottom-2 opacity-5 text-primary select-none pointer-events-none">
                <span className="material-symbols-outlined text-7xl">pets</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-2xl border border-border/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider">Solicitações Pendentes</span>
              <div className="flex justify-between items-end">
                <span className="font-heading text-4xl font-extrabold text-secondary">{pendingRequestsCount}</span>
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-lg">assignment</span>
                </div>
              </div>
              <div className="absolute right-2 -bottom-2 opacity-5 text-secondary select-none pointer-events-none">
                <span className="material-symbols-outlined text-7xl">assignment</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-6 rounded-2xl border border-border/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider">Adoções Concluídas</span>
              <div className="flex justify-between items-end">
                <span className="font-heading text-4xl font-extrabold text-success">{approvedAdoptionsCount}</span>
                <span className="text-muted-foreground text-xs font-semibold">Total Geral</span>
              </div>
              <div className="absolute right-2 -bottom-2 opacity-5 text-success select-none pointer-events-none">
                <span className="material-symbols-outlined text-7xl">verified</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-card p-6 rounded-2xl border border-border/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
              <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider">Taxa de Resposta</span>
              <div className="flex justify-between items-end">
                <span className="font-heading text-4xl font-extrabold text-foreground">94%</span>
                <span className="text-success font-bold text-xs">Excelente</span>
              </div>
              <div className="absolute right-2 -bottom-2 opacity-5 text-foreground select-none pointer-events-none">
                <span className="material-symbols-outlined text-7xl">chat</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Requests & Analytics / Active list */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Col: Requests and analytics */}
            <div className="xl:col-span-2 space-y-8">
              {/* Adoption Requests */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Solicitações de Adoção Recentes
                  </h3>
                  <button 
                    onClick={() => toast.info("Todas as solicitações históricas já estão sendo exibidas.")}
                    className="text-primary font-bold text-sm hover:underline"
                  >
                    Ver todas
                  </button>
                </div>

                <div className="bg-card rounded-2xl border border-border/30 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-muted text-muted-foreground font-bold text-xs uppercase tracking-wider border-b border-border/30">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">Pet</th>
                          <th className="px-6 py-4 text-left font-semibold">Adotante</th>
                          <th className="px-6 py-4 text-left font-semibold">Data</th>
                          <th className="px-6 py-4 text-left font-semibold">Status</th>
                          <th className="px-6 py-4 text-right font-semibold">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/20 text-sm">
                        {adoptionRequests.map((req) => (
                          <tr key={req.id} className="hover:bg-muted/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-muted">
                                  <img alt={req.petName} className="w-full h-full object-cover" src={req.petImg} />
                                </div>
                                <span className="font-bold text-foreground">{req.petName}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">{req.adopterName}</td>
                            <td className="px-6 py-4 text-muted-foreground">{req.date}</td>
                            <td className="px-6 py-4">
                              <span
                                className={cn(
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm border",
                                  req.status === "Nova" && "bg-primary/10 text-primary border-primary/20",
                                  req.status === "Em Conversa" && "bg-warning/10 text-warning border-warning/20",
                                  req.status === "Aprovada" && "bg-success/10 text-success border-success/20",
                                  req.status === "Recusada" && "bg-muted text-muted-foreground border-border"
                                )}
                              >
                                {req.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="inline-flex gap-2">
                                <select
                                  value={req.status}
                                  onChange={(e) => 
                                    handleStatusChange(req.id, req.adopterName, e.target.value as AdoptionRequest["status"])
                                  }
                                  className="bg-background border border-border/50 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-secondary cursor-pointer"
                                >
                                  <option value="Nova">Nova</option>
                                  <option value="Em Conversa">Em Conversa</option>
                                  <option value="Aprovada">Aprovar</option>
                                  <option value="Recusada">Recusar</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bar Chart Section */}
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/30 shadow-sm space-y-6">
                <h4 className="font-heading text-xl font-bold text-foreground">
                  Adoções Concluídas (Últimos 6 Meses)
                </h4>
                <div className="flex items-end justify-between h-48 gap-4 px-4 pt-4">
                  {/* May */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[40%]">
                      <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">Maio</span>
                  </div>
                  {/* Jun */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[60%]">
                      <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">Jun</span>
                  </div>
                  {/* Jul */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[85%]">
                      <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">Jul</span>
                  </div>
                  {/* Aug */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[55%]">
                      <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">Ago</span>
                  </div>
                  {/* Sep */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[70%]">
                      <div className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-semibold">Set</span>
                  </div>
                  {/* Oct */}
                  <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-muted rounded-t-lg relative group h-[95%]">
                      <div className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all group-hover:brightness-110 h-[100%]"></div>
                    </div>
                    <span className="text-xs text-primary font-bold">Out</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Active pets list & tips */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Pets sob minha tutela
                  </h3>
                  <button 
                    onClick={() => toast.info("Todos os pets da ONG já estão listados.")}
                    className="text-primary font-bold text-sm hover:underline"
                  >
                    Ver todos
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {pets.slice(0, 4).map((pet) => (
                    <Link
                      href={`/pet/${pet.id}`}
                      key={pet.id}
                      className="bg-card p-4 rounded-xl border border-border/30 hover:border-secondary transition-all shadow-sm flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-border/10 bg-muted">
                        <img alt={pet.name} className="w-full h-full object-cover" src={pet.img} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                          {pet.name}
                        </h5>
                        <p className="text-xs text-muted-foreground">{pet.species} • {pet.age}</p>
                        
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <span 
                            className={cn(
                              "inline-block w-2 h-2 rounded-full",
                              pet.needsAttention ? "bg-warning" : "bg-success"
                            )}
                          />
                          <span className="text-[10px] text-muted-foreground">
                            {pet.needsAttention ? "Precisa de Atenção" : "Divulgado na Vitrine"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dica do Adopet card */}
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-xl">lightbulb</span>
                  <h6 className="font-bold text-sm uppercase tracking-wider">Dica do Adopet</h6>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pets com mais de 3 meses na plataforma recebem 20% mais atenção se você atualizar a foto principal. 
                  Que tal tentar um novo ângulo para os pets de longa permanência?
                </p>
                <button 
                  onClick={() => toast.info("Upload de fotos adicionais habilitado na edição de perfil.")}
                  className="text-primary font-bold text-xs text-left hover:brightness-125 transition-all mt-1"
                >
                  Atualizar Galeria
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-card border-t border-border/30 md:hidden rounded-t-2xl shadow-lg">
        <Link href="/dashboard" className="flex flex-col items-center justify-center text-primary px-4 py-1">
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            analytics
          </span>
          <span className="text-[10px] font-bold">Métricas</span>
        </Link>
        
        {/* Mobile Cadastrar Button */}
        <button 
          onClick={() => setIsRegisterDialogOpen(true)}
          className="flex flex-col items-center justify-center text-muted-foreground px-4 py-1 active:scale-95"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          <span className="text-[10px] font-bold">Cadastrar</span>
        </button>

        <Link href="/" className="flex flex-col items-center justify-center text-muted-foreground px-4 py-1">
          <span className="material-symbols-outlined text-lg">pets</span>
          <span className="text-[10px] font-bold">Vitrine</span>
        </Link>
      </nav>
    </div>
  );
}
