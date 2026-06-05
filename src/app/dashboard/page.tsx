"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AdoptionRequest {
  id: number;
  petName: string;
  petImage: string;
  applicant: string;
  date: string;
  status: "Nova" | "Em conversa" | "Aprovada";
}

interface MyPet {
  id: string;
  name: string;
  image: string;
  days: number;
  alert?: boolean;
}

const REQUESTS_DATA: AdoptionRequest[] = [
  {
    id: 1,
    petName: "Casper",
    petImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZxVBrMi4CqiuXNaWR5gSByR5tBa0Uvo9KuEpJGoNx-72tdWqkKGwDmAx-QW5Xmnl-0l0Nlsr_t2DckXkRHknvaxlTOK-oloFD_CBpPse1xbFDIyLSDVaSJ470stdBdUjAtJI52Gn-ppvLKai5u39g67oPo5DL0gfr93qXDxU8pRrO_PW3-xcxuHUWnaQKTPOkJoOZ8a3a-sqNLgL9uEuWvw-BVVAPNkMeB2sRzOJ7fXymBnSmm_D-QCQPlYh-T0iJAllmvkMLGvbp",
    applicant: "Mariana Silva",
    date: "12 Out, 2023",
    status: "Nova"
  },
  {
    id: 2,
    petName: "Vovô",
    petImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHOLITq9CbZxh4fkPP6QA-uevBnc3TX92koe5CLwC2Biihfzxo22MXD1w6S9ulKF5e4N1k_e4bN_3R4FsqobF6javc-f-mlZDivORtus_DxkBEspfS0_b5pZBw_k-W3TtOn0_HKioAfyo2tfXMIuJbKAT0HM1kYPiYBln40IaWEeQtVDx2-EZVbiFw7ruNMjNL9TqvmZFaGHnwX1eI8ZFLX96EndAYKJi3cOHVmapkC0iQYjhoc4vJ6iLmbFhPbPXj9Qt7RCY819oG",
    applicant: "Roberto Oliveira",
    date: "10 Out, 2023",
    status: "Em conversa"
  },
  {
    id: 3,
    petName: "Luna",
    petImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQf2J8fY62treBm4IYSqyK5jSDynXwn1hR64LK294JOUeNTrQtLtkMB4RCHUTGJx-9dEmlSiuyGzLWkyw0zqjVchBqUNWes6ngKITL_w5yeA0ZyZea7kgfggYiaJMtK8iguh-o7zSAhXEUmuMs_yUul-xV6TM0L9o-YHKAtcEEnKfUjlz1w50PPrd7WJIIROFWaRdtV-czOZuoXy-WL1RcK4rCaRmW9h3XNb5J6J-AfFlrWUHv3P5XIjqFLKT_GXQ1nbQMPLUqNp0s",
    applicant: "Carla Mendes",
    date: "08 Out, 2023",
    status: "Aprovada"
  }
];

const MY_PETS_DATA: MyPet[] = [
  {
    id: "bento",
    name: "Bento",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAY6dGUdySOBF5OD-527LARECr6HhuSLHBY2l67Vj-KWZ023CByFG1feCokSl0kuFVMxHgaiJJll868wODl7BtW7QRlVJqnhd3fcv8ZphQ1ZDPBBV7NS9CqTrcqULm7jCngvZo_FkiH3JpiNSFZB-zA93hmHAABrykzHb42yuSEWysKeuKfd0vEeh0skTpl2IJ4FneCRhc6NNCRuOPUdT-RnifKflFR_eseDf5KDaPk-M8TwrH8aVdY_o8b5Oxb9B2VsaUUqexRfGx",
    days: 72,
    alert: true
  },
  {
    id: "mia",
    name: "Mia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIG0ChGMgCE_eO-Lx-JmBI02bAZRunqnuyUoIMYdx_AdFcwa-mvD5_6aFoGa17VqzztSBR5ZMJD0jZvEKNZCMnvTjo95padYzS4A9e00uKE4V8SH29axfQf3Yjkw8Ma0xB242hZu_OYZb-1I776CzuvRQekjOljGq-8XtPBYIAdx_3o_vlK6XybhQiYy_QrELxrfjTxiNKtduWHt9svWWrnauKW0nXeoI_YV2uCwRkBvKjMddNIUeKvdGQsRHJvUxAI0CycIi-6hTq",
    days: 15
  },
  {
    id: "tobby",
    name: "Tobby",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoy4CTL4JxMu62Tfw6jKTODx13y2wHoA9zGR7vfgDdDv3wIHI05OJey6YWLt4vgtJ8eO3RDp2tBgjTDf4Tu1jL7zpswbMWoe0whhZXRj0w37Ct_L3Gxp70LkWDrEdXQi5BDaz_JR0YiBzSLnb2hkyxx99X4K3yBi56vZyYmDEc12-fCeIN9_IA84JlcwBHIW3QfEUoQTQNjtaMpj6n_Tou7jm-ZgobYzbiK-0BepPO92NzqlE21YlitnC37F0-_FGq0fugp9J1pkc-",
    days: 5
  },
  {
    id: "pipoca",
    name: "Pipoca",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcOc8ts-SCdX3llyzX92MWqedKERTSO2VKJRW-ttcnmUwu-CGPIhjMgpCR44e61-9mR_NpT9iP59u-nL8yxwau2l_oSsX5Mu8ouXvXnNvIkSbsQl3PNaLrN1k7LLa29PBjplMTpAPUPUIcv0WmyUG7WOt80E08I31iq4Jx0hBKHoOf2omvGqwliSiNEvC5i0PuWE3k16j86VWrWXM-2Y1VuKKgDb3UIGnVSAEYjRHR3TaSC8GpuCr0xUS9_Z7kM4_qUmfZ0o--1-gZ",
    days: 22
  }
];

export default function DashboardPage() {
  const [chartHeights, setChartHeights] = useState<Record<string, string>>({
    mai: "0%",
    jun: "0%",
    jul: "0%",
    ago: "0%",
    set: "0%",
    out: "0%"
  });

  useEffect(() => {
    // Trigger animated entry for bar charts
    const timer = setTimeout(() => {
      setChartHeights({
        mai: "40%",
        jun: "60%",
        jul: "55%",
        ago: "80%",
        set: "95%",
        out: "70%"
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-custom text-text-dark">
      <Header />

      <main className="max-w-[1200px] w-full mx-auto px-margin md:px-lg py-xl flex-grow">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-text-dark">Dashboard do Gestor</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Bem-vindo de volta! Aqui está o resumo das atividades da sua ONG hoje.
            </p>
          </div>
          <button className="bg-primary-container text-white px-xl py-md rounded-2xl flex items-center gap-sm font-button text-button shadow-md hover:shadow-lg hover:bg-primary transition-all active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined">add</span>
            Cadastrar novo pet
          </button>
        </div>

        {/* KPI Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
          {/* KPI 1 */}
          <div className="bg-white p-lg rounded-2xl shadow-sm border border-surface-container flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <span className="p-sm bg-primary-fixed rounded-xl text-primary font-bold">
                <span className="material-symbols-outlined">pets</span>
              </span>
              <span className="text-success-sage font-label-md text-label-md font-bold">+4 este mês</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md text-on-surface-variant">Pets Ativos</h3>
              <p className="font-headline-md text-headline-md text-text-dark font-bold">24</p>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="bg-white p-lg rounded-2xl shadow-sm border border-surface-container flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <span className="p-sm bg-secondary-fixed rounded-xl text-secondary font-bold">
                <span className="material-symbols-outlined">pending_actions</span>
              </span>
              <span className="text-error-brick font-label-md text-label-md font-bold">Urgente</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md text-on-surface-variant">Solicitações Pendentes</h3>
              <p className="font-headline-md text-headline-md text-text-dark font-bold">8</p>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="bg-white p-lg rounded-2xl shadow-sm border border-surface-container flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <span className="p-sm bg-tertiary-fixed-dim rounded-xl text-tertiary font-bold">
                <span className="material-symbols-outlined">favorite</span>
              </span>
              <span className="text-success-sage font-label-md text-label-md font-bold">Meta: 15</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md text-on-surface-variant">Adoções (Mês)</h3>
              <p className="font-headline-md text-headline-md text-text-dark font-bold">12</p>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="bg-white p-lg rounded-2xl shadow-sm border border-surface-container flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <span className="p-sm bg-surface-container-highest rounded-xl text-on-surface font-bold">
                <span className="material-symbols-outlined">speed</span>
              </span>
              <span className="text-on-surface-variant font-label-md text-label-md font-bold">Excelente</span>
            </div>
            <div>
              <h3 className="font-body-md text-body-md text-on-surface-variant">Taxa de Resposta</h3>
              <p className="font-headline-md text-headline-md text-text-dark font-bold">94%</p>
            </div>
          </div>
        </section>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Adoption Requests & Chart (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-xl">
            {/* Adoption Requests List */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-surface-container">
              <div className="px-lg py-lg border-b border-surface-container flex items-center justify-between">
                <h2 className="font-headline-sm text-headline-sm text-text-dark">Solicitações de Adoção</h2>
                <button className="text-primary-container font-button text-label-md hover:underline cursor-pointer">
                  Ver todas
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-surface-container">
                      <th className="px-lg py-md text-left font-label-md text-on-surface-variant font-bold">Pet</th>
                      <th className="px-lg py-md text-left font-label-md text-on-surface-variant font-bold">Interessado</th>
                      <th className="px-lg py-md text-left font-label-md text-on-surface-variant font-bold">Data</th>
                      <th className="px-lg py-md text-left font-label-md text-on-surface-variant font-bold">Status</th>
                      <th className="px-lg py-md text-right font-label-md text-on-surface-variant font-bold">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {REQUESTS_DATA.map((req) => (
                      <tr key={req.id} className="hover:bg-surface-container-low transition-colors">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-sm bg-surface-container-low">
                              <Image 
                                src={req.petImage} 
                                alt={req.petName}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="font-label-md font-bold text-text-dark">{req.petName}</span>
                          </div>
                        </td>
                        <td className="px-lg py-md font-body-md text-on-surface">{req.applicant}</td>
                        <td className="px-lg py-md font-body-md text-on-surface-variant">{req.date}</td>
                        <td className="px-lg py-md">
                          <span className={`px-sm py-1 rounded-full text-[12px] font-bold ${
                            req.status === "Nova" 
                              ? "bg-secondary-fixed text-on-secondary-fixed" 
                              : req.status === "Em conversa"
                              ? "bg-tertiary-fixed text-on-tertiary-fixed-variant"
                              : "bg-success-sage/20 text-success-sage"
                          }`}>
                            {req.status}
                          </span>
                        </td>
                        <td className="px-lg py-md text-right">
                          {req.status === "Aprovada" ? (
                            <button className="text-primary-container hover:bg-primary-fixed p-sm rounded-lg transition-colors cursor-pointer">
                              <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                          ) : (
                            <button className="bg-primary-container text-white px-md py-sm rounded-xl font-button text-[14px] hover:bg-primary shadow-sm active:scale-95 transition-all cursor-pointer">
                              Responder
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Monthly Adoptions Chart */}
            <div className="bg-white rounded-2xl shadow-md p-lg border border-surface-container">
              <div className="flex items-center justify-between mb-xl">
                <h2 className="font-headline-sm text-headline-sm text-text-dark">Adoções Mensais</h2>
                <div className="flex items-center gap-sm">
                  <span className="flex items-center gap-xs font-label-md text-on-surface-variant">
                    <span className="w-3 h-3 bg-primary rounded-full"></span> 2023
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between h-48 gap-md px-2">
                {[
                  { key: "mai", label: "Mai", colorClass: "bg-primary-fixed-dim" },
                  { key: "jun", label: "Jun", colorClass: "bg-primary-fixed-dim" },
                  { key: "jul", label: "Jul", colorClass: "bg-primary-fixed-dim" },
                  { key: "ago", label: "Ago", colorClass: "bg-primary-fixed-dim" },
                  { key: "set", label: "Set", colorClass: "bg-primary-fixed-dim" },
                  { key: "out", label: "Out", colorClass: "bg-primary-container" }
                ].map((bar) => (
                  <div key={bar.key} className="flex-1 flex flex-col items-center gap-sm h-full justify-end">
                    <div 
                      className={`chart-bar w-full max-w-[40px] rounded-t-lg transition-all duration-1000 ease-out ${bar.colorClass}`}
                      style={{ height: chartHeights[bar.key] }}
                    ></div>
                    <span className={`font-label-md text-[12px] ${bar.key === "out" ? "text-on-surface font-bold" : "text-on-surface-variant"}`}>
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Meus Pets List (Right Column) */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-md p-lg sticky top-32 border border-surface-container">
              <div className="flex items-center justify-between mb-lg">
                <h2 className="font-headline-sm text-headline-sm text-text-dark">Meus Pets</h2>
                <span className="bg-surface-container-highest px-sm py-1 rounded-full text-[12px] font-bold">24 Total</span>
              </div>
              
              <div className="space-y-md">
                {MY_PETS_DATA.map((pet) => (
                  <div 
                    key={pet.id} 
                    className={`group flex items-center gap-md p-sm rounded-xl border transition-all cursor-pointer ${
                      pet.alert 
                        ? "border-warning-ochre/30 bg-warning-ochre/5 hover:bg-warning-ochre/10" 
                        : "border-surface-container hover:bg-surface-container-low"
                    }`}
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden relative bg-surface-container-low">
                        <Image 
                          src={pet.image} 
                          alt={pet.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {pet.alert && (
                        <span className="absolute -top-2 -right-2 bg-warning-ochre text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-[14px]">priority_high</span>
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-label-md font-bold text-text-dark">{pet.name}</h4>
                      <p className="text-[12px] text-on-surface-variant">Há {pet.days} dias na plataforma</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-primary-container">edit</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-lg py-md border-2 border-primary-container text-primary-container rounded-xl font-button text-button hover:bg-primary-container/5 transition-all cursor-pointer">
                Ver inventário completo
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
