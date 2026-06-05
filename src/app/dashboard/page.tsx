"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { petsData, Pet } from "@/lib/data";
import { Plus, ArrowRight, ArrowRightLeft } from "lucide-react";
import { Dog, Cat, ShieldAlert, Sparkles, Check, Send, Heart, Calendar } from "lucide-react";

interface AdoptionRequest {
  id: number;
  petName: string;
  petImg: string;
  adopterName: string;
  details: string;
  date: string;
  status: "New" | "In Conversation" | "Approved" | "Rejected";
}

export default function Dashboard() {
  // New Pet Registration State
  const [pets, setPets] = useState<Pet[]>(petsData);
  const [newPetName, setNewPetName] = useState("");
  const [newPetSpecies, setNewPetSpecies] = useState("Cães");
  const [newPetSize, setNewPetSize] = useState("Médio");
  const [newPetAge, setNewPetAge] = useState("Adulto");
  const [newPetCity, setNewPetCity] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Adoption Requests State
  const [requests, setRequests] = useState<AdoptionRequest[]>([
    {
      id: 1,
      petName: "Buddy",
      petImg: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=100",
      adopterName: "Sarah Jenkins",
      details: "Apartment, 2 Dogs present",
      date: "Oct 24, 2026",
      status: "New",
    },
    {
      id: 2,
      petName: "Luna",
      petImg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=100",
      adopterName: "Marc Peterson",
      details: "House, Garden, No pets",
      date: "Oct 22, 2026",
      status: "In Conversation",
    },
    {
      id: 3,
      petName: "Oliver",
      petImg: "https://images.unsplash.com/photo-1533733508377-386c62423b41?auto=format&fit=crop&q=80&w=100",
      adopterName: "Emily Watson",
      details: "Experienced owner, Farm",
      date: "Oct 20, 2026",
      status: "Approved",
    },
  ]);

  const [activeRequest, setActiveRequest] = useState<AdoptionRequest | null>(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleRegisterPet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPetName || !newPetCity) return;

    const newPet: Pet = {
      id: pets.length + 1,
      name: newPetName,
      species: newPetSpecies,
      size: newPetSize,
      age: newPetAge,
      city: newPetCity,
      tag: "Novo",
      img: newPetSpecies === "Cães" 
        ? "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
        : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
      alt: `Novo pet ${newPetName}`,
      gender: "Macho",
      daysActive: 0,
    };

    setPets([newPet, ...pets]);
    setNewPetName("");
    setNewPetCity("");
    setIsRegisterOpen(false);
  };

  const handleUpdateStatus = (id: number, newStatus: "New" | "In Conversation" | "Approved" | "Rejected") => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
    setActiveRequest(null);
    setResponseMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="max-w-[1200px] w-full mx-auto px-6 md:px-10 py-10 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-6">
          <div className="bg-muted/40 p-6 rounded-[24px] border border-border/50 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-lg text-primary">Filters</h3>
                <p className="text-xs text-muted-foreground">Narrow your search</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-3 p-3 bg-secondary/10 text-secondary font-semibold rounded-xl transition-all">
                <Dog className="w-5 h-5" />
                <span>Species</span>
              </button>
              <button className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-muted/50 rounded-xl transition-all">
                <Sparkles className="w-5 h-5" />
                <span>Size</span>
              </button>
            </div>
            <Button className="w-full bg-secondary text-white py-5 rounded-xl font-semibold">
              Apply Filters
            </Button>
          </div>

          {/* Quick Registration Button in Sidebar */}
          <div className="bg-primary/5 p-6 rounded-[24px] border border-primary/10 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Management</h4>
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger render={
                <Button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white py-6 rounded-xl font-semibold transition-all shadow-sm">
                  <Plus className="w-5 h-5" />
                  Register New Pet
                </Button>
              } />
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Pet</DialogTitle>
                  <DialogDescription>
                    Insira as informações do novo animal para disponibilizá-lo para adoção.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRegisterPet} className="space-y-4 py-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Nome</label>
                    <Input
                      required
                      value={newPetName}
                      onChange={(e) => setNewPetName(e.target.value)}
                      placeholder="Ex: Rex"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Espécie</label>
                    <Select value={newPetSpecies} onValueChange={(val) => setNewPetSpecies(val || "Cães")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Espécie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cães">Cão</SelectItem>
                        <SelectItem value="Gatos">Gato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Porte</label>
                    <Select value={newPetSize} onValueChange={(val) => setNewPetSize(val || "Médio")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Porte" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pequeno">Pequeno</SelectItem>
                        <SelectItem value="Médio">Médio</SelectItem>
                        <SelectItem value="Grande">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Idade</label>
                    <Select value={newPetAge} onValueChange={(val) => setNewPetAge(val || "Adulto")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Idade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Filhote">Filhote</SelectItem>
                        <SelectItem value="Adulto">Adulto</SelectItem>
                        <SelectItem value="Idoso">Idoso</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold">Cidade</label>
                    <Input
                      required
                      value={newPetCity}
                      onChange={(e) => setNewPetCity(e.target.value)}
                      placeholder="Ex: São Paulo"
                    />
                  </div>
                  <DialogFooter className="pt-4">
                    <Button type="submit" className="w-full bg-secondary text-white py-4 rounded-xl">
                      Cadastrar Pet
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-grow flex flex-col gap-8">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card p-5 rounded-[20px] border border-border shadow-sm flex flex-col gap-1">
              <span className="text-sm text-muted-foreground font-medium">Active Pets</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-primary">{pets.length + 116}</span>
                <span className="bg-success/15 text-success text-xs font-bold px-2 py-0.5 rounded-full">+4%</span>
              </div>
            </div>
            <div className="bg-card p-5 rounded-[20px] border border-border shadow-sm flex flex-col gap-1">
              <span className="text-sm text-muted-foreground font-medium">Pending Requests</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-primary">{requests.filter(r => r.status === "New").length + 35}</span>
                <span className="bg-warning/15 text-warning text-xs font-bold px-2 py-0.5 rounded-full">New</span>
              </div>
            </div>
            <div className="bg-card p-5 rounded-[20px] border border-border shadow-sm flex flex-col gap-1">
              <span className="text-sm text-muted-foreground font-medium">Monthly Adoptions</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-primary">52</span>
                <span className="bg-success/15 text-success text-xs font-bold px-2 py-0.5 rounded-full">+12%</span>
              </div>
            </div>
            <div className="bg-card p-5 rounded-[20px] border border-border shadow-sm flex flex-col gap-1">
              <span className="text-sm text-muted-foreground font-medium">Response Rate</span>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-primary">94%</span>
                <span className="bg-info/15 text-info text-xs font-bold px-2 py-0.5 rounded-full">High</span>
              </div>
            </div>
          </div>

          {/* Chart & Attention List */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="xl:col-span-2 bg-card p-6 rounded-[24px] border border-border shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-text-primary">Adoption Trends</h3>
                <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-lg">
                  Last 6 Months
                </span>
              </div>
              <div className="h-60 flex items-end justify-between gap-3 pt-4 border-b border-border/50 pb-2">
                {[
                  { month: "Jan", val: "45%" },
                  { month: "Feb", val: "60%" },
                  { month: "Mar", val: "85%", highlight: true },
                  { month: "Apr", val: "55%" },
                  { month: "May", val: "70%" },
                  { month: "Jun", val: "90%" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        item.highlight
                          ? "bg-secondary hover:bg-secondary/90"
                          : "bg-muted-foreground/20 hover:bg-secondary/40"
                      }`}
                      style={{ height: item.val }}
                    ></div>
                    <span
                      className={`text-xs text-muted-foreground ${
                        item.highlight ? "font-bold text-primary" : ""
                      }`}
                    >
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Pets / Needs Attention */}
            <div className="bg-card p-6 rounded-[24px] border border-border shadow-sm flex flex-col">
              <h3 className="font-bold text-lg text-text-primary mb-4">Active Pets</h3>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[250px] pr-1">
                {pets.slice(0, 3).map((activePet, idx) => (
                  <div
                    key={activePet.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      idx === 0 
                        ? "border-warning/30 bg-warning/5"
                        : "border-transparent hover:bg-muted/30"
                    }`}
                  >
                    <img
                      src={activePet.img}
                      alt={activePet.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold text-sm text-text-primary">{activePet.name}</p>
                      <p className={`text-xs font-bold ${idx === 0 ? "text-warning" : "text-muted-foreground"}`}>
                        {idx === 0 ? "42 days waiting" : `${activePet.daysActive || 5} days active`}
                      </p>
                    </div>
                    <Link href={`/pets/${activePet.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Adoption Requests Table */}
          <div className="bg-card rounded-[24px] border border-border shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-muted/20 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-lg text-text-primary">Adoption Requests</h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {requests.filter(r => r.status === "New").length} New
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Pet & Adopter</TableHead>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req) => (
                    <TableRow key={req.id} className="hover:bg-muted/10">
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <img
                            alt={req.petName}
                            className="w-10 h-10 rounded-lg object-cover ring-2 ring-primary/10"
                            src={req.petImg}
                          />
                          <div>
                            <p className="font-semibold text-sm text-text-primary">
                              {req.petName} <span className="font-normal text-muted-foreground">by</span> {req.adopterName}
                            </p>
                            <p className="text-xs text-muted-foreground">{req.details}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">{req.date}</TableCell>
                      <TableCell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            req.status === "New"
                              ? "bg-info/15 text-info"
                              : req.status === "In Conversation"
                              ? "bg-warning/15 text-warning"
                              : req.status === "Approved"
                              ? "bg-success/15 text-success"
                              : "bg-destructive/15 text-destructive"
                          }`}
                        >
                          {req.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger render={
                            <Button
                              onClick={() => {
                                setActiveRequest(req);
                                setResponseMessage("");
                              }}
                              className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl text-xs"
                            >
                              Respond
                            </Button>
                          } />
                          {activeRequest && activeRequest.id === req.id && (
                            <DialogContent className="sm:max-w-[500px]">
                              <DialogHeader>
                                <DialogTitle>Responder Solicitação - {activeRequest.petName}</DialogTitle>
                                <DialogDescription>
                                  Avalie a solicitação de {activeRequest.adopterName} para adotar {activeRequest.petName}.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-3">
                                <div className="bg-muted/30 p-4 rounded-xl space-y-1">
                                  <p className="text-xs font-bold text-muted-foreground">DETALHES DO ADOTANTE</p>
                                  <p className="font-semibold text-sm">{activeRequest.adopterName}</p>
                                  <p className="text-xs text-muted-foreground">{activeRequest.details}</p>
                                </div>

                                <div className="space-y-1">
                                  <label className="text-xs font-semibold">Mensagem para o adotante</label>
                                  <textarea
                                    className="w-full min-h-[100px] bg-background border border-border rounded-xl p-3 text-sm focus:ring-primary focus:border-primary"
                                    placeholder="Escreva sua resposta..."
                                    value={responseMessage}
                                    onChange={(e) => setResponseMessage(e.target.value)}
                                  />
                                </div>
                              </div>
                              <DialogFooter className="flex sm:justify-between gap-2">
                                <Button
                                  onClick={() => handleUpdateStatus(activeRequest.id, "Rejected")}
                                  variant="outline"
                                  className="border-destructive text-destructive hover:bg-destructive/10 rounded-xl"
                                >
                                  Recusar
                                </Button>
                                <div className="flex gap-2">
                                  <Button
                                    onClick={() => handleUpdateStatus(activeRequest.id, "In Conversation")}
                                    className="bg-warning text-white hover:bg-warning/90 rounded-xl"
                                  >
                                    Conversar
                                  </Button>
                                  <Button
                                    onClick={() => handleUpdateStatus(activeRequest.id, "Approved")}
                                    className="bg-success text-white hover:bg-success/90 rounded-xl"
                                  >
                                    Aprovar
                                  </Button>
                                </div>
                              </DialogFooter>
                            </DialogContent>
                          )}
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="p-4 bg-muted/10 flex justify-center border-t border-border/50">
              <button className="text-primary font-bold hover:underline flex items-center gap-1 text-sm">
                View All Requests <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
