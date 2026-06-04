"use client";

import React, { useState } from "react";
import { useApp } from "../../context/AppContext";

export default function Dashboard() {
  const { pets, requests, addPet, updateRequestStatus, isLoaded } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    species: "Cao",
    size: "Medio",
    age: "Adulto",
    ageString: "",
    location: "São Paulo, SP",
    image: "",
    description: "",
    temperament: "",
    specialCare: "",
    vaccinated: true,
    neutered: true,
    dewormed: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Generates a mock image if not provided
    const petImage = formData.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuCkeo7QwDdJkbjg_hLrM8WALfTfHKAkBjyEejgCWI0tWVBZL10_GJcLy5I2CeABLMSdOOmmIfgLBuAnN1ED8yb96ZNbucQiG2KVRpD58X_hOGEV0Zf87hvIo6vw7HrtoVGE0NnDuqLckW2-K0P-XuqDMIqDgNhmfS1mqv3WzVvs_TLQCUfVZqDHvyvzfsqpxVO6ATPvjbYEXXctpcDlbYAWOhTVabe136GyDb1UfQBMoVFrUsXNKRpbG1jPy-hIGrkn3nsExxz3vPk";

    const newPet = {
      id: `${formData.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      name: formData.name,
      species: formData.species,
      size: formData.size,
      age: formData.age,
      ageString: formData.ageString || "Idade Indefinida",
      location: formData.location,
      image: petImage,
      gallery: [petImage],
      description: formData.description,
      temperament: formData.temperament,
      specialCare: formData.specialCare,
      vaccinated: formData.vaccinated,
      neutered: formData.neutered,
      dewormed: formData.dewormed,
      recentRescue: true,
      activeTime: "Recém adicionado",
      ownerName: "ONG Amigos do Peito",
      ownerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgNaU-vrKGjpgRrmlzbVmJDUG-j_dVMdtIueA3Ii1wXbqP6MdEfpJYTJPuowyljmCUXkHAyfO2MBEECVMagHcIqQsMUJM_qta6rbjKTGS64p-FyUkp9-sjVdCWqKUdCzXmuOiA6N2t3ZylXs5YvGgMt9MdpjHxEwrdfJkQXup1SOEPlBYQ7FKog9OC63hFo30FkTxIeU5qBjSyybZ5htYBr1Qg-g-SuvOBy21naWfpCKW_2VEBmkRm-SgX99_Ut3Kw5Xrv5mrL5ac"
    };

    addPet(newPet);
    
    // Reset form and close modal
    setFormData({
      name: "",
      species: "Cao",
      size: "Medio",
      age: "Adulto",
      ageString: "",
      location: "São Paulo, SP",
      image: "",
      description: "",
      temperament: "",
      specialCare: "",
      vaccinated: true,
      neutered: true,
      dewormed: true
    });
    setIsModalOpen(false);
  };

  const handleStatusToggle = (reqId, currentStatus) => {
    const nextStatus = currentStatus === "Pendente" ? "Entrevista" : currentStatus === "Entrevista" ? "Aprovado" : "Pendente";
    updateRequestStatus(reqId, nextStatus);
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center py-xxl text-primary-light min-h-screen">
        <span className="material-symbols-outlined animate-spin text-5xl">sync</span>
      </div>
    );
  }

  const pendingRequests = requests.filter(r => r.status === "Pendente").length;
  const interviewRequests = requests.filter(r => r.status === "Entrevista").length;

  return (
    <main className="max-w-7xl mx-auto px-lg py-xl animate-in mt-12">
      {/* Header Section */}
      <div className="mb-xxl flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <h1 className="font-h1 text-h1 text-primary mb-xxs">Painel de Gestão</h1>
          <p className="text-text-muted font-body-lg text-body-lg">
            Bem-vindo de volta! Aqui está o resumo das suas atividades hoje.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary hover:bg-accent-hover text-on-secondary px-lg py-md rounded-xl font-bold flex items-center justify-center gap-xs transition-all active:scale-95 shadow-lg"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Cadastrar novo pet
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xxl">
        {/* Active Pets */}
        <div className="bg-surface p-lg rounded-xl metric-card-shadow border border-border-light flex flex-col gap-xs group hover:border-primary-light transition-colors">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-primary text-3xl p-xs bg-surface-container rounded-lg">
              pets
            </span>
            <span className="text-success text-[12px] font-bold">+2 esta semana</span>
          </div>
          <div>
            <span className="text-text-muted text-body-sm block">Pets Ativos</span>
            <span className="text-primary font-h1 text-h1">{pets.length}</span>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-surface p-lg rounded-xl metric-card-shadow border border-border-light flex flex-col gap-xs group hover:border-primary-light transition-colors">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-secondary text-3xl p-xs bg-surface-container-low rounded-lg">
              pending_actions
            </span>
            {pendingRequests > 0 && <span className="text-warning text-[12px] font-bold">Urgente</span>}
          </div>
          <div>
            <span className="text-text-muted text-body-sm block">Solicitações Pendentes</span>
            <span className="text-secondary font-h1 text-h1">{pendingRequests}</span>
          </div>
        </div>

        {/* Adopted Month */}
        <div className="bg-surface p-lg rounded-xl metric-card-shadow border border-border-light flex flex-col gap-xs group hover:border-primary-light transition-colors">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-tertiary text-3xl p-xs bg-tertiary-fixed rounded-lg">
              volunteer_activism
            </span>
            <span className="text-success text-[12px] font-bold">Meta: 8</span>
          </div>
          <div>
            <span className="text-text-muted text-body-sm block">Adoções no Mês</span>
            <span className="text-primary font-h1 text-h1">05</span>
          </div>
        </div>

        {/* Response Rate */}
        <div className="bg-surface p-lg rounded-xl metric-card-shadow border border-border-light flex flex-col gap-xs group hover:border-primary-light transition-colors">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-primary-light text-3xl p-xs bg-surface-container-highest rounded-lg">
              speed
            </span>
            <span className="text-primary text-[12px] font-bold">Excelente</span>
          </div>
          <div>
            <span className="text-text-muted text-body-sm block">Taxa de Resposta</span>
            <span className="text-primary font-h1 text-h1">92%</span>
          </div>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl mb-xxl">
        {/* Left: Requests List */}
        <section className="lg:col-span-8 flex flex-col gap-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-h2 text-h2 text-primary flex items-center gap-xs">
              <span className="material-symbols-outlined">inbox</span>
              Solicitações Recentes
            </h2>
          </div>
          <div className="space-y-md flex flex-col gap-sm">
            {requests.length > 0 ? (
              requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-surface p-md rounded-xl border border-border-light flex flex-col sm:flex-row items-center gap-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-md flex-1 w-full">
                    <div className="relative" style={{ minWidth: "4rem" }}>
                      <img
                        className="w-16 h-16 rounded-lg object-cover"
                        src={req.petImage}
                        alt={`Foto de ${req.petName}`}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full border border-border-light">
                        <span className="material-symbols-outlined text-secondary text-xs fill-icon">favorite</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-h3 text-h3 text-primary">{req.petName}</h4>
                      <p className="text-body-sm text-text-muted">
                        Interesse de <span className="text-on-surface font-bold">{req.userName}</span>
                      </p>
                      <p className="text-[12px] text-text-muted uppercase tracking-tight">
                        Recebido em {req.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-lg justify-between w-full sm:w-auto">
                    <span 
                      className={`px-sm py-xs rounded-full text-xs font-bold uppercase ${
                        req.status === "Pendente" 
                          ? "bg-warning/10 text-warning" 
                          : req.status === "Entrevista" 
                            ? "bg-primary-container text-primary" 
                            : "bg-success/10 text-success"
                      }`}
                    >
                      {req.status}
                    </span>
                    <button 
                      onClick={() => handleStatusToggle(req.id, req.status)}
                      className="bg-primary-container text-on-primary-container px-lg py-xs rounded-lg font-bold text-body-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      {req.status === "Pendente" ? "Entrevistar" : req.status === "Entrevista" ? "Aprovar" : "Resetar"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-surface p-xl rounded-xl border border-border-light text-center">
                <p className="text-text-muted text-body-reg">Nenhuma solicitação de adoção no momento.</p>
              </div>
            )}
          </div>
        </section>

        {/* Right: Chart Analytics */}
        <section className="lg:col-span-4 bg-surface p-lg rounded-xl border border-border-light flex flex-col gap-lg shadow-sm">
          <div>
            <h2 className="font-h3 text-h3 text-primary">Adoções Concluídas</h2>
            <p className="text-body-sm text-text-muted">Últimos 6 meses</p>
          </div>
          <div className="flex-1 flex items-end justify-between gap-xs h-48 pb-md">
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-surface-container rounded-t-lg transition-all hover:bg-primary-light" style={{ height: "40%" }}></div>
              <span className="text-[10px] font-bold text-text-muted uppercase">Mai</span>
            </div>
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-surface-container rounded-t-lg transition-all hover:bg-primary-light" style={{ height: "65%" }}></div>
              <span className="text-[10px] font-bold text-text-muted uppercase">Jun</span>
            </div>
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-surface-container rounded-t-lg transition-all hover:bg-primary-light" style={{ height: "50%" }}></div>
              <span className="text-[10px] font-bold text-text-muted uppercase">Jul</span>
            </div>
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-surface-container rounded-t-lg transition-all hover:bg-primary-light" style={{ height: "85%" }}></div>
              <span className="text-[10px] font-bold text-text-muted uppercase">Ago</span>
            </div>
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-secondary-container rounded-t-lg transition-all" style={{ height: "95%" }}></div>
              <span className="text-[10px] font-bold text-primary uppercase">Set</span>
            </div>
            <div className="w-full flex flex-col items-center gap-xs">
              <div className="w-full bg-surface-container rounded-t-lg transition-all hover:bg-primary-light" style={{ height: "30%" }}></div>
              <span className="text-[10px] font-bold text-text-muted uppercase">Out</span>
            </div>
          </div>
          <div className="p-md bg-bg-warm rounded-lg border border-border-light">
            <p className="text-body-sm text-text-main flex items-center gap-xs">
              <span className="material-symbols-outlined text-success text-sm">trending_up</span>
              Crescimento de <span className="font-bold">12%</span> em relação ao semestre anterior.
            </p>
          </div>
        </section>
      </div>

      {/* My Pets Active List */}
      <section className="flex flex-col gap-lg">
        <div className="flex items-center justify-between">
          <h2 className="font-h2 text-h2 text-primary flex items-center gap-xs">
            <span className="material-symbols-outlined">pets</span>
            Meus Pets Ativos
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {pets.slice(0, 8).map((activePet) => (
            <div 
              key={activePet.id}
              className="bg-surface rounded-xl overflow-hidden border border-border-light group hover:shadow-xl transition-all relative flex flex-col"
            >
              {activePet.recentRescue && (
                <div className="absolute top-md right-md z-10">
                  <span className="bg-primary text-on-primary px-sm py-xxs rounded-full text-[10px] font-bold uppercase shadow-sm">
                    Precisa de Atenção
                  </span>
                </div>
              )}
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={activePet.image} 
                  alt={activePet.name}
                />
              </div>
              <div className="p-lg flex-1 flex flex-col justify-between">
                <div className="mb-md">
                  <div className="flex justify-between items-start mb-xxs">
                    <h3 className="font-h3 text-h3 text-primary">{activePet.name}</h3>
                    <span className="text-body-sm text-text-muted font-bold">{activePet.activeTime || "Ativo"}</span>
                  </div>
                  <p className="text-body-sm text-text-muted">
                    {activePet.species === "Cao" ? "Cão" : "Gato"} • {activePet.size}
                  </p>
                </div>
                <div className="flex gap-xs">
                  <button className="flex-1 border border-primary text-primary py-xs rounded-lg font-bold text-body-sm hover:bg-primary hover:text-on-primary transition-colors">
                    Editar
                  </button>
                  <button className="p-xs bg-surface-container text-primary rounded-lg hover:bg-primary-container transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Pet Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-sm" 
          style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        >
          <div className="bg-surface max-w-xl w-full p-xl rounded-xl custom-shadow border border-border-light relative animate-in max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-sm right-sm text-on-surface-variant hover:text-primary transition-colors p-xs"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <h2 className="font-h2 text-h2 text-primary mb-md flex items-center gap-xs">
              <span className="material-symbols-outlined">pets</span>
              Cadastrar Novo Pet
            </h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-md">
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Nome do Pet</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Espécie</label>
                  <select
                    name="species"
                    value={formData.species}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  >
                    <option value="Cao">Cão</option>
                    <option value="Gato">Gato</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-xs">
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Porte</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  >
                    <option value="Pequeno">Pequeno</option>
                    <option value="Medio">Médio</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Idade (Filtro)</label>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  >
                    <option value="Filhote">Filhote</option>
                    <option value="Adulto">Adulto</option>
                    <option value="Idoso">Idoso</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Idade (Texto)</label>
                  <input
                    required
                    placeholder="Ex: 2 anos, 4 meses"
                    type="text"
                    name="ageString"
                    value={formData.ageString}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Localização</label>
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">URL da Imagem (Opcional)</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://exemplo.com/foto.jpg"
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xxs">
                <label className="text-[12px] font-bold uppercase text-text-muted">Descrição</label>
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Temperamento</label>
                  <input
                    type="text"
                    name="temperament"
                    placeholder="Ex: Manso, amigável"
                    value={formData.temperament}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
                <div className="flex flex-col gap-xxs">
                  <label className="text-[12px] font-bold uppercase text-text-muted">Cuidados Especiais</label>
                  <input
                    type="text"
                    name="specialCare"
                    placeholder="Ex: Exercícios diários"
                    value={formData.specialCare}
                    onChange={handleInputChange}
                    className="border border-border-light rounded-lg p-sm w-full bg-bg-warm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-md py-xs border-t border-b border-border-light">
                <label className="flex items-center gap-xs text-body-sm font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    name="vaccinated"
                    checked={formData.vaccinated}
                    onChange={handleInputChange}
                    className="rounded text-primary focus:ring-primary"
                  />
                  Vacinado
                </label>
                <label className="flex items-center gap-xs text-body-sm font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    name="neutered"
                    checked={formData.neutered}
                    onChange={handleInputChange}
                    className="rounded text-primary focus:ring-primary"
                  />
                  Castrado
                </label>
                <label className="flex items-center gap-xs text-body-sm font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    name="dewormed"
                    checked={formData.dewormed}
                    onChange={handleInputChange}
                    className="rounded text-primary focus:ring-primary"
                  />
                  Vermifugado
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-md rounded-full font-bold font-body-reg hover:bg-accent-hover transition-colors shadow-sm active:scale-95 text-center mt-sm"
              >
                Salvar Cadastro
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
