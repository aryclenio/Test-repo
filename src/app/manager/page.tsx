'use client';

import React, { useEffect, useState } from 'react';
import { getPets, getRequests, addPet, updateRequestStatus, Pet, AdoptionRequest } from '@/lib/mockDb';

export default function ManagerDashboard() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [requests, setRequests] = useState<AdoptionRequest[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form Fields State
  const [name, setName] = useState('');
  const [type, setType] = useState<'dog' | 'cat' | 'other'>('dog');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState<'Filhote' | 'Adulto' | 'Idoso'>('Adulto');
  const [size, setSize] = useState<'Pequeno' | 'Médio' | 'Grande'>('Médio');
  const [gender, setGender] = useState<'Macho' | 'Fêmea'>('Macho');
  const [location, setLocation] = useState('São Paulo');
  const [image, setImage] = useState('');
  const [story, setStory] = useState('');
  const [personality, setPersonality] = useState('');
  const [care, setCare] = useState('');
  const [vaccinated, setVaccinated] = useState(true);
  const [neutered, setNeutered] = useState(true);
  const [dewormed, setDewormed] = useState(true);
  const [friendlyWithCats, setFriendlyWithCats] = useState(true);

  useEffect(() => {
    setPets(getPets());
    setRequests(getRequests());
  }, []);

  const refreshData = () => {
    setPets(getPets());
    setRequests(getRequests());
  };

  const handleStatusTransition = (reqId: string, currentStatus: AdoptionRequest['status']) => {
    let nextStatus: AdoptionRequest['status'] = 'Nova';
    if (currentStatus === 'Nova') nextStatus = 'Em conversa';
    else if (currentStatus === 'Em conversa') nextStatus = 'Aprovada';
    else return; // Approved stays approved

    updateRequestStatus(reqId, nextStatus);
    refreshData();
  };

  const handleRegisterPet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !breed) return;

    // Use default premium Unsplash pictures if no URL is provided
    let finalImage = image;
    if (!finalImage) {
      if (type === 'dog') {
        finalImage = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600';
      } else if (type === 'cat') {
        finalImage = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600';
      } else {
        finalImage = 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=600';
      }
    }

    addPet({
      name,
      type,
      breed,
      age,
      size,
      gender,
      location,
      image: finalImage,
      story,
      personality,
      care,
      vaccinated,
      neutered,
      dewormed,
      friendlyWithCats,
      tag: 'Resgate recente',
    });

    // Reset Form & Close Modal
    setName('');
    setBreed('');
    setImage('');
    setStory('');
    setPersonality('');
    setCare('');
    setShowAddModal(false);
    
    refreshData();
  };

  // Metrics calculation
  const totalActivePets = pets.length;
  const pendingRequests = requests.filter(r => r.status !== 'Aprovada').length;
  const approvedRequests = requests.filter(r => r.status === 'Aprovada').length;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
              Painel de Controle
            </h1>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Bem-vindo de volta, <strong>ONG Patas Amigas</strong>. Aqui está o resumo de hoje.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-adopet-accent text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-adopet-sm hover:shadow-adopet-lg hover:opacity-95 transition-all active:scale-95 flex items-center gap-1.5 self-start md:self-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">add</span>
            Cadastrar novo pet
          </button>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-muted p-6 rounded-2xl shadow-sm flex flex-col gap-1 border-l-4 border-primary">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Pets Ativos</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">{totalActivePets}</span>
              <span className="text-adopet-success text-xs font-bold">+3 este mês</span>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-2xl shadow-sm flex flex-col gap-1 border-l-4 border-adopet-accent">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Solicitações Pendentes</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">{pendingRequests}</span>
              {pendingRequests > 0 && (
                <span className="text-adopet-error-rust text-xs font-bold">Atenção</span>
              )}
            </div>
          </div>
          <div className="bg-muted p-6 rounded-2xl shadow-sm flex flex-col gap-1 border-l-4 border-adopet-success">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Adoções Aprovadas</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">{approvedRequests}</span>
              <span className="text-adopet-success text-xs font-bold">Meta atingida</span>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-2xl shadow-sm flex flex-col gap-1 border-l-4 border-adopet-alert-ochre">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Taxa de Resposta</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">94%</span>
              <span className="text-muted-foreground text-xs font-semibold">Média de 4h</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column Left: Adoption Requests */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Solicitações Recentes</h2>
              <span className="text-xs font-bold text-primary hover:underline cursor-pointer">Ver todas</span>
            </div>
            
            <div className="bg-card rounded-2xl shadow-adopet-md border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider border-b border-border">
                      <th className="px-6 py-4">Pet</th>
                      <th className="px-6 py-4">Adotante</th>
                      <th className="px-6 py-4">Data</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {requests.map(req => (
                      <tr key={req.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img alt={req.petName} className="w-12 h-12 rounded-lg object-cover bg-muted" src={req.petImage} />
                            <div>
                              <p className="text-sm font-bold text-foreground">{req.petName}</p>
                              <p className="text-xs text-muted-foreground">{req.petBreedAge}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-foreground">{req.adopterName}</p>
                          <p className="text-xs text-muted-foreground">{req.location}</p>
                        </td>
                        <td className="px-6 py-4 text-xs font-semibold text-muted-foreground">
                          {req.date}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            req.status === 'Nova' ? 'bg-adopet-accent/10 text-adopet-accent' :
                            req.status === 'Em conversa' ? 'bg-adopet-alert-ochre/15 text-adopet-alert-ochre' :
                            'bg-adopet-success/10 text-adopet-success'
                          }`}>
                            {req.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {req.status !== 'Aprovada' ? (
                            <button
                              onClick={() => handleStatusTransition(req.id, req.status)}
                              className="text-primary font-bold text-xs bg-primary/5 hover:bg-primary/10 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer border border-primary/20"
                            >
                              {req.status === 'Nova' ? 'Iniciar Conversa' : 'Aprovar'}
                            </button>
                          ) : (
                            <span className="text-adopet-success font-bold text-xs flex items-center justify-end gap-1">
                              <span className="material-symbols-outlined text-sm">verified</span>
                              Finalizado
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Column Right: Adoption Evolution Chart */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground">Evolução de Adoções</h2>
            <div className="bg-card p-6 rounded-2xl shadow-adopet-md border border-border h-[380px] flex flex-col justify-between">
              
              {/* Custom interactive CSS-based bar chart */}
              <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-6 border-b border-border">
                {[
                  { month: 'Mai', height: 'h-24' },
                  { month: 'Jun', height: 'h-32' },
                  { month: 'Jul', height: 'h-28' },
                  { month: 'Ago', height: 'h-40' },
                  { month: 'Set', height: 'h-48' },
                  { month: 'Out', height: 'h-60', active: true },
                ].map(bar => (
                  <div key={bar.month} className="w-full flex flex-col items-center gap-2 group">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-300 ${bar.height} ${
                        bar.active
                          ? 'bg-primary shadow-sm'
                          : 'bg-adopet-neutral-medium/70 hover:bg-adopet-neutral-medium group-hover:bg-primary/45'
                      }`}
                    ></div>
                    <span className={`text-[10px] font-bold uppercase ${
                      bar.active ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs font-semibold text-muted-foreground">
                  Aumento de <span className="text-adopet-success font-bold">15%</span> em relação ao mês passado.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Section: My Active Pets */}
        <section className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Meus Pets Ativos</h2>
            <span className="text-xs font-bold text-primary hover:underline cursor-pointer">Ver catálogo completo</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {/* Pet list cards */}
            {pets.map(pet => (
              <div
                key={pet.id}
                className="group relative bg-card rounded-2xl shadow-sm hover:shadow-adopet-md transition-all border border-border overflow-hidden flex flex-col justify-between"
              >
                {pet.daysOnline >= 90 && (
                  <div className="absolute top-2 right-2 z-10 bg-adopet-alert-ochre/90 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider shadow-sm">
                    Precisa de atenção
                  </div>
                )}
                <div className="relative aspect-square w-full bg-muted overflow-hidden">
                  <img
                    alt={pet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    src={pet.image}
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-foreground truncate">{pet.name}</p>
                  <p className="text-xs text-muted-foreground">{pet.daysOnline} dias online</p>
                </div>
              </div>
            ))}

            {/* Add Pet Shortcut Card */}
            <div
              onClick={() => setShowAddModal(true)}
              className="bg-muted rounded-2xl border border-dashed border-primary/45 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/5 hover:border-primary transition-all p-5 aspect-square"
            >
              <span className="material-symbols-outlined text-3xl text-primary animate-pulse">add_circle</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Adicionar Pet</span>
            </div>
          </div>
        </section>

      </main>

      {/* Register Pet Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg rounded-2xl p-6 shadow-adopet-lg border border-border relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <form onSubmit={handleRegisterPet} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
                <h3 className="text-xl font-extrabold text-primary">Cadastrar Novo Pet</h3>
                <p className="text-xs text-muted-foreground">
                  Insira as especificações do animal para listá-lo para adoção na plataforma.
                </p>
              </div>

              {/* Grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Nome</label>
                  <input
                    required
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ex: Rex"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Tipo</label>
                  <select
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={type}
                    onChange={e => setType(e.target.value as any)}
                  >
                    <option value="dog">Cão</option>
                    <option value="cat">Gato</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Raça</label>
                  <input
                    required
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ex: Labrador"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Localização</label>
                  <input
                    required
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ex: São Paulo"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Idade</label>
                  <select
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={age}
                    onChange={e => setAge(e.target.value as any)}
                  >
                    <option value="Filhote">Filhote</option>
                    <option value="Adulto">Adulto</option>
                    <option value="Idoso">Idoso</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Porte</label>
                  <select
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={size}
                    onChange={e => setSize(e.target.value as any)}
                  >
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Gênero</label>
                  <select
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={gender}
                    onChange={e => setGender(e.target.value as any)}
                  >
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">URL da Imagem (Opcional)</label>
                  <input
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Deixe em branco para preencher padrão"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </div>
              </div>

              {/* Text areas */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">História do Pet</label>
                <textarea
                  className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none min-h-[80px]"
                  placeholder="Escreva brevemente de onde ele veio e seu temperamento..."
                  value={story}
                  onChange={e => setStory(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Personalidade</label>
                  <input
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ex: Dócil, muito ativo, adora passeios"
                    value={personality}
                    onChange={e => setPersonality(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">Cuidados Necessários</label>
                  <input
                    type="text"
                    className="px-4 py-2.5 bg-muted border border-border/80 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ex: Limpeza das orelhas, exercícios diários"
                    value={care}
                    onChange={e => setCare(e.target.value)}
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={vaccinated}
                    onChange={e => setVaccinated(e.target.checked)}
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-border/80"
                  />
                  Vacinado
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={neutered}
                    onChange={e => setNeutered(e.target.checked)}
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-border/80"
                  />
                  Castrado
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={dewormed}
                    onChange={e => setDewormed(e.target.checked)}
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-border/80"
                  />
                  Vermifugado
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={friendlyWithCats}
                    onChange={e => setFriendlyWithCats(e.target.checked)}
                    className="rounded text-primary focus:ring-primary w-4 h-4 border-border/80"
                  />
                  Amigável com gatos
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-95 shadow-md active:scale-95 transition-all cursor-pointer text-sm"
              >
                Salvar Registro
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
