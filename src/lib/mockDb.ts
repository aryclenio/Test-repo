export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'other';
  breed: string;
  age: 'Filhote' | 'Adulto' | 'Idoso';
  size: 'Pequeno' | 'Médio' | 'Grande';
  gender: 'Macho' | 'Fêmea';
  location: string;
  isFavorite?: boolean;
  tag?: string; // e.g. "Resgate recente", "Idoso", "Precisa de atenção"
  daysOnline: number;
  image: string;
  gallery?: string[];
  story?: string;
  personality?: string;
  care?: string;
  vaccinated?: boolean;
  neutered?: boolean;
  dewormed?: boolean;
  friendlyWithCats?: boolean;
}

export interface AdoptionRequest {
  id: string;
  petId: string;
  petName: string;
  petImage: string;
  petBreedAge: string;
  adopterName: string;
  location: string;
  date: string;
  status: 'Nova' | 'Em conversa' | 'Aprovada';
}

const INITIAL_PETS: Pet[] = [
  {
    id: 'buddy',
    name: 'Buddy',
    type: 'dog',
    breed: 'Beagle',
    age: 'Adulto',
    size: 'Médio',
    gender: 'Macho',
    location: 'São Paulo',
    isFavorite: false,
    tag: 'Resgate recente',
    daysOnline: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC5rrszM-FnXO6I3quIqMUbLYXDoMAu8CHqCZsORhsnDBTV_gFiz-SalZMHqlf2VilgufJopu50TbQljEYRYAazOA-0tIvdlXXMrUz_1VNi4YVOSWGkfNuFvfBvBRstYtAjjG4WCw1uW1nD36pWiPjr5ZmOOCGjYL7Nqx3faG2d44xkmHGvZmMSKrDiH18Y3jp1WgU6s8u7QGhWshKNXkJ7ZVZ7k96WEs0QgwIeET6xNPA11IjgFqXmmJazxRYB2dMW4tZPX9yvgoS',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZFaypwiVxOhi4tlUpGhiXZveNgU5CkEocowkurJGDtaxcGjpUGmbD3i6fZaGlw_r1Rrivsh0_zucmcReGnCAIPgesKA2aSYGfm07_ZgcLCY7zNsmQDa8bYO9-IJjOys03D3y-Klb0KMuTwTxfXECGeQjywAIGcNmS-maMMauiKDZCUmQP147hXogfkEcsaYEgLQTWm2Eua_lQ7HqLNH9TZy8c-AKig-2L6ufHDiA1wlBeG4gDnClUXJCJm_1pciPeXQUVaGxdG0TB',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD55gq-pIGasL_x21ALR9U2WLtcb-W8ETdPYQcZwUExTaHBoJ1_yEkH1Xmh95hfG_mxkzKTejRPGKHQvwl_nkAHU0gV8dWZ_xcXaIu0tNmkS0HCTL89zVC1JLsS1t_Dat2u4EIUoUjpV3LJ5VWtr5V5RdForDwRLVXwj1ViBZ1aoe3-hMvGGFv16MB6IK3Z3ZoPGA4IaivnfNI-TVyRix4gJF7brfZLAXN_7ihoFM7bodrn0-idxuJK7Fq0JfJ0NOKh9t1abEIgA6aw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyg-vR_9DyotjVRAAVPzD2cZL9VLXsHSdvPaTt4xDcK4z8kgtWEHnNCH-jhT7hwxEHYNDhay-1Earcp7VZsEqLSAqu1sCbTpA_3XEyP2IFPbSzv6fJXzcbbyUOW6XYL1JTPa-mfYgWgDeBeyBDfWB6ZEXrOdY1A1hyNWrRY9hUIRoghsjWjMadD1hy3jiuY7eqN9roTwHhJVPKLTlj-paOXGcFuF1FZhm3GrpIL8__XlJfgHJOc6vbQE6svBzeURmW2X5U3ccC5Kle',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCULMT4SGoJLGYnQ8QdEQXIxOwTpSfBd6cMkhGdoWIpL01mDBE6pXnIyO3HO1ppCV-iFjZtTiDNXP-izlhj_srwxe8u0On3UxO--ozKW41FkTFPYbVE7zR0v5U0fpicyAhfojG654HFog0uWiUTI8znKRGM2xNr5U4lLCw6RVfdVoiuNL4xCbir49OuOntTmYbkQfEeSiAgYGZQHb75wPnNJPh_GeVXQUMVyns1hsEVG23r010EUIAmnyV0MjE2pJNGr0be88h5IuqB',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfsAL_myK41ewWIxS1NjEb1BVfAl2jx3aU1lWj2wmNbvXsIJVvfBrCo8Cpx3tGnaYohrHzw_9qX7YxRRcSc2XnNZ1IENQKyt6yj930RDcSEW5H0xxrkIh8Og9dz8hJdvx-65DBgdBxpPFuvF3RX6CP8YixF8r7VOALFkscn2j36u3grLq7J7OfCeWrP6fpKzxaqwAq8wR2w-ewymIJLg-3n0ZXDN0_V5An-wVAUqYsNqokxTRufbA8b3KKzswAlmCucYDZYFoixZg_'
    ],
    story: 'Buddy foi encontrado vagando próximo a uma rodovia, visivelmente confuso, mas sua cauda nunca parou de abanar ao ver os socorristas. Ele é a personificação da resiliência e do otimismo. Apesar do susto, Buddy está com a saúde perfeita e demonstra um temperamento excepcionalmente calmo para um Beagle. Ele adora longas caminhadas, farejar novidades no jardim e, acima de tudo, se aninhar nos pés de quem ele confia.',
    personality: 'Leal, curioso e extremamente dócil. Possui energia moderada e se adapta bem a apartamentos.',
    care: 'Alimentação balanceada e check-ups anuais. Requer atenção especial com a limpeza das orelhas longas.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'luna',
    name: 'Luna',
    type: 'cat',
    breed: 'Calico',
    age: 'Filhote',
    size: 'Pequeno',
    gender: 'Fêmea',
    location: 'São Caetano',
    isFavorite: false,
    daysOnline: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsmntzdd5IMLK8iTXGoCl1ffrEBwlP7inSExzbWBBUradbYeidrdCJ8i9ILXEHtjDeYihU_M0TXAFh3sbRVUxXL9eCZqNr8tRI7kkqJp1PJdRXWVvVZgYl3ZA1dgJc3-WLzu_VZg3IHVx2uvAEm2lhTulvSnQO-oLahURiFFpEcYl9-LvwXTqhvOuuMwgyA0ZyIZSU6KLWh-4AgHXQGKOHebvRpBwboK555gRRWRXskOw-1e6o52vDyOR9IQ4kJ2GrVObcEUyUBagq',
    story: 'Luna é uma gatinha calico brincalhona e super curiosa. Ela foi resgatada de uma garagem vazia e agora passa os dias correndo atrás de bolinhas de papel e procurando cantinhos quentes para dormir. Ela tem olhos verdes expressivos e um miado bem baixinho.',
    personality: 'Ativa, independente e sociável. Gosta de brincadeiras interativas e carinho na cabeça.',
    care: 'Limpeza diária da caixa de areia, escovação semanal e brinquedos para gastar energia.',
    vaccinated: true,
    neutered: false,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'thor',
    name: 'Thor',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 'Filhote',
    size: 'Médio',
    gender: 'Macho',
    location: 'Santos',
    isFavorite: false,
    daysOnline: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5UHbOueAG71G2Bcul4OqF9rt_-rOAWN0po4UFXlhyd3nVsxOnlgLp14_RYKgEXcYWbEjsQXJD5np_wTtUJKfxdZn7NF6YN2xGhttPVpDLzAo2y5XtfLCLxVZ4zNBwYRiE1Zf0CF5s2lFRloOwpOLRpigA9tAnLbLTusBjuOddhnT7VaWGno3mMjnaTEBtlwCNpcXq5ScJRRjSjAR3WzxZXm9MaXMp1tOuBMaTYB7mVD3mDvVwIx85U4kdDH4I9f8hvrtHz2ZwP0fV',
    story: 'Thor é um filhote de Golden Retriever cheio de vida e energia. Ele adora nadar, correr atrás de galhos e receber todas as visitas com muita alegria. Ele precisa de uma família ativa que tenha tempo para brincar e passear bastante.',
    personality: 'Extremamente dócil, ativo e inteligente. Perfeito para famílias com crianças.',
    care: 'Passeios diários longos, escovação diária dos pelos para evitar nós e ração de boa qualidade.',
    vaccinated: true,
    neutered: false,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'oliver',
    name: 'Oliver',
    type: 'cat',
    breed: 'SRD Cinza',
    age: 'Idoso',
    size: 'Médio',
    gender: 'Macho',
    location: 'Campinas',
    isFavorite: false,
    tag: 'Idoso',
    daysOnline: 25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVF-0zhMbPpjRPClyxmP6dWmVO6rGohj0BFNVgK4dw5vhR6KLU1dwIzLUHFglWK5r22JYRPT1UycHOamDBxTTlQHx4T9TUO24BfglYG8Hi3TukIEXzHyaQ4ShQk0mxJVuRWJvqlQT3znPjURzDhl37aIiPrMkE_3UU8lzYjO3KW--cqhfZGkT_6I62GxjayqGmJ_Xtx0NGqAqRNc0onSTd_0s_H9GJNTKLEJ2rDFmpdKlX_ZPnKugIwt26zbHei-nbjIODtmidEykG',
    story: 'Oliver é um gato idoso muito calmo e carinhoso. Ele passou a maior parte da vida em um lar e acabou no abrigo após seu tutor falecer. Ele passa o dia observando o movimento da janela e dormindo em cobertas fofas.',
    personality: 'Tranquilo, tímido no início, mas extremamente apegado e companheiro.',
    care: 'Ambiente calmo sem ruídos excessivos, acompanhamento veterinário para gatos seniores e ração sênior.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'pipoca',
    name: 'Pipoca',
    type: 'dog',
    breed: 'Terrier',
    age: 'Adulto',
    size: 'Pequeno',
    gender: 'Fêmea',
    location: 'Guarulhos',
    isFavorite: false,
    tag: 'Precisa de atenção',
    daysOnline: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkWZ5s51yU4Z05QKMODQVWknqbxxpLAViyUkmHcXgucrF9MkDYTPyJkx1pd8EFeUNAl3-IKhj-RqSCEKsvOD9pg8Z8gdArNgiR40Ubxz4SSKi3RpxAmZrmMrqBjr-1BdD81Wx-DLRGkuSRWPbuTb90sS_fTI8c8pfRdvD8GyM2NDjHbZRC_dcHCPXX72DtCKKl1rCQW_-F0tKxDrfJJf7GYEzSI_JT14FCse7ZESD5phcv-aER8qAid-vPjVxA8e4fiM390IqvI8cE',
    story: 'Pipoca é uma cadelinha de pequeno porte muito enérgica e esperta. Por ter ficado bastante tempo sob cuidados da ONG, ela precisa de uma família paciente para ajudá-la na transição de volta ao convívio de um lar.',
    personality: 'Protetora, brincalhona e atenta. Gosta de ser o centro das atenções.',
    care: 'Exercícios moderados, adestramento básico para ansiedade de separação e muito carinho.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: false
  },
  {
    id: 'salem',
    name: 'Salem',
    type: 'cat',
    breed: 'Siamês Misto',
    age: 'Adulto',
    size: 'Médio',
    gender: 'Macho',
    location: 'Sorocaba',
    isFavorite: false,
    daysOnline: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsW4WLJNU308xI17qrbiPAQJYgDm3wmRaT-ET1X0bs0MOl_UEV6dbRPO2_kPMvRz6jCsKqnA5nYPLdddRls22liAQJCeIP7ssjC5rPKdMlj43bse1aSmGnJWi2fordVu4225FJ0DTTaeMbf0aOGgEHhIvvkX13LIt5zPK9o8dPFRxeQW1oiDej8Aw2svzwKyZOwdQTRuhGFwuCtkRM6hSueG2YT8B0CN9IcZiqsYjxEI_fmNwD7XXq_pmc7AWR76ZC30PpRsneQaR4',
    story: 'Salem é um gato preto majestoso com expressivos olhos dourados. Ele é muito elegante e adora ficar deitado em cima do sofá acompanhando a leitura ou TV. É dócil e convive bem com outros gatos.',
    personality: 'Independente, calmo e carinhoso nos seus próprios termos.',
    care: 'Escovação semanal, arranhadores pela casa e consultas veterinárias de rotina.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'bento',
    name: 'Bento',
    type: 'dog',
    breed: 'Great Dane',
    age: 'Adulto',
    size: 'Grande',
    gender: 'Macho',
    location: 'Jundiaí',
    isFavorite: false,
    daysOnline: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSUZlNTMGV3OujTMzSeg7Xo1oisJIleFjkGlFRhB9K1yHgIYdptYsf0TUfR-pISdutEwAVZgkgSLdUrFnSwnQGRL4A_hgGNQGO7w8TZMKRvn0Sa_sYxigodyROYLO7Yye7FRRhSTUB9KU8NuC3PnUsA-02FusQWvMpyRfKq0Gi0vWepoz2iWyQn7KZVt3RlDmUPIO4G8bEUAiFlh8mf7BBlYVx8KkBRiH-dRNSkyiHVp_m6KQxhHvcvGftU4Ce-cWKHtNtcG-k2kxt',
    story: 'Bento é um gigante gentil. Apesar de seu tamanho impressionante, ele é extremamente sensível, dócil e silencioso. Adora deitar no seu colchão especial e receber carinho de todos.',
    personality: 'Calmo, protetor, dócil e muito apegado à família humana.',
    care: 'Espaço adequado para circular, alimentação controlada para evitar torção gástrica, exercícios leves.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: false
  },
  {
    id: 'simba',
    name: 'Simba',
    type: 'cat',
    breed: 'Tabby Amarelo',
    age: 'Filhote',
    size: 'Pequeno',
    gender: 'Macho',
    location: 'Osasco',
    isFavorite: false,
    tag: 'Resgate recente',
    daysOnline: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNmD3_3XQLw7TD0jXZhC1K6ZdzVhP-o06ltdW9X_H4Si_B2jRbr3WpUv2OOdot30KVUktCwg1DSc6EKTbyTK2Ze88iCsNikXBhbr8qv3b8ZfZJnp8nnJjXGB9FL3N7zxesgHXGHxQoG8lehDSo6XaZ6-lSYV_-_-A8HjxkiMAAzyf0c5y-k_pbLvJrTIguYXxFSLmEK-MAAUMJ8_XJwGHb5s2ivCYm-r6o9b-D3AUzcmjD16QaVN2VQnav6w2sN8iai9kh3cAMlDH5',
    story: 'Simba é um filhotinho travesso e dorminhoco. Ele foi encontrado sozinho perto de um mercado e agora está sob cuidados especiais, esperando um lar definitivo e cheio de amor.',
    personality: 'Muito brincalhão, ronronador profissional e dependente de afeto.',
    care: 'Alimentação para filhotes, vacinação em andamento e enriquecimento ambiental vertical.',
    vaccinated: false,
    neutered: false,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'mimi',
    name: 'Mimi',
    type: 'cat',
    breed: 'Persa Branco',
    age: 'Adulto',
    size: 'Pequeno',
    gender: 'Fêmea',
    location: 'São Paulo',
    isFavorite: false,
    daysOnline: 12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_KX6weiVxhmXANXqGakh5czMC7r2zKVnxRvnqeCOp-yEHCGxGj-nmSGRQRvCqUA3KshhwEd8V4MnFWRonr5gdRhcCexJVNOEhDZv4OuDgBzGVo1Wls9T5SQkoXhv8L0AVMvgmJEYAxBSylMfvtC31t4mFXi2w1lejgAbBJjEQwCuC_1X_Gzyvh2czLRv-g03orPsJa4VBqxfQQ8TBtI7CK1va0QYAS2qUp45Bag8--y4KJjVKtaJ2SE1d4RQlssYwR1uSvF0PUW-9',
    story: 'Mimi é uma gatinha persa resgatada de criadores clandestinos. Ela é muito silenciosa, adora dormir em superfícies macias e precisa de cuidados especiais com a pelagem longa.',
    personality: 'Calma, um pouco reservada, mas muito carinhosa quando ganha confiança.',
    care: 'Escovação diária dos pelos, limpeza frequente da região dos olhos, ração premium.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'bob',
    name: 'Bob',
    type: 'dog',
    breed: 'Jack Russell',
    age: 'Adulto',
    size: 'Médio',
    gender: 'Macho',
    location: 'Campinas',
    isFavorite: false,
    daysOnline: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHUdLxOaLTyLNhb8MWuzWHp9213bYYju18RQK3srFMNfrJ_5l6KSv8mHo1yJC_YQKdMV7D3vS37aVRBy1DeKoXLgo06aBQQTTi0IsW5f_idnKgRjEaqYfCEujfmefGuDdnd5L8-62GODnBGjBsVzSgUGpk_zllBzQoCFX4jYVRU7CTH_geuaFFb5iL9B7sA2XAMzVIAsyC8LSY01SgOxQXOPU-VgmReeV-850kJ0cYzBkR1cDCn5jZ3b9h0CPl3EvnM5BqOOGSH_f',
    story: 'Bob é o típico Jack Russell: incansável, inteligente e sempre focado em alguma brincadeira. Ele precisa de uma rotina com bastantes desafios físicos e mentais.',
    personality: 'Extremamente ativo, brincalhão, muito inteligente e obstinado.',
    care: 'Treino de adestramento diário, caminhadas vigorosas e brinquedos recheáveis.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: false
  },
  {
    id: 'toby',
    name: 'Toby',
    type: 'dog',
    breed: 'Pug',
    age: 'Filhote',
    size: 'Pequeno',
    gender: 'Macho',
    location: 'São Paulo',
    isFavorite: false,
    daysOnline: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDuRua8X4vQRBH3CU4Of6FKCoIgPlZC7VncxcZ2ih6ErfaLwBiOskEPUMB11utUj-HdTKzTAMkMjFyszQ8W3wEs0qAtNN8sqamz2OaLdjZ_uRPzeVbJCNrDle3WgHBBpk2dgEjz9m4Fn25hAlUTGhilvNdcaU8CgPF3R5hgSeWedhR-505-K_T6h2ka25pWjU44zoPkqQyqyfUnBnctNqburKuBXck1JhDQngGUIjiCLruBbx5M0_5kGRlQI1CaJIRZ0E7oGZyXX0l',
    story: 'Toby é um pugzinho simpático e brincalhão que adora dormir roncando no colo alheio. Ele ama petiscos e é muito companheiro para todas as horas.',
    personality: 'Dócil, brincalhão, apegado e bastante carente.',
    care: 'Atenção com calor excessivo (raça braquicefálica), controle de peso e limpeza das dobrinhas.',
    vaccinated: true,
    neutered: false,
    dewormed: true,
    friendlyWithCats: true
  },
  {
    id: 'zeca',
    name: 'Zeca',
    type: 'dog',
    breed: 'SRD',
    age: 'Idoso',
    size: 'Pequeno',
    gender: 'Macho',
    location: 'São Paulo',
    isFavorite: false,
    tag: 'Precisa de atenção',
    daysOnline: 102,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM75qhOlCqm6cVf96AZR-1UM6hlHm1vBxyDyRXZUOseAYm8bghSFA6BBF4_s5jNCidHIZbAc-W8N3PpRSpKfZ2F5cHUPb9bLXL2xebOKGVr60p4AqV3E6qpgUG_lH7AMTHBVgLPXM5DRokYBbYoA6H_mfs1_7zK9EQm3W5umMAN7iEVgUMsFTzouxS68PIIy0wA0HGOxWeQbUpEhxo3yeAHzplw6SF95cnn3avrEy8SmV_Cf2hnfrCXNPXXSAGWTf1BOtbgJkaXjuz',
    story: 'Zeca e seu companheiro foram deixados na porta da ONG após o falecimento do antigo dono. Zeca é um cachorrinho idoso muito carente e que adora descansar quietinho na sua cama.',
    personality: 'Pacífico, afetuoso, sossegado e muito apegado a rotinas simples.',
    care: 'Caminha macia em local abrigado do frio, exames periódicos de articulações.',
    vaccinated: true,
    neutered: true,
    dewormed: true,
    friendlyWithCats: true
  }
];

const INITIAL_REQUESTS: AdoptionRequest[] = [
  {
    id: 'req-1',
    petId: 'max',
    petName: 'Max',
    petBreedAge: 'Beagle • 2 anos',
    petImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmOk3H_9xohRw1Adqp3lqV-MtbhzqHNJ-262VfdZoeiMNf7jRYBaVsJVOyQ_qUTRxpXqKUTrq7OQUIXx73Z5g4yN3WEybSubjX0EjKkWy_61IP7-xvm-Ms0ciRK2I4C7Tg3utyqfxwPsott3dDITYg-gD70czustfFSHoEGBdwjw2FN3gbBv2U-aVGD-bmryz2yEZ8IjA2Pe5icGc1QgwppFKMRTJv6FaKZf9hsKPUQQ3WE53xiRSjIA2etraTf3SCSHKiPrTyDLmQ',
    adopterName: 'Ana Clara Silva',
    location: 'São Paulo, SP',
    date: '12 Out',
    status: 'Nova'
  },
  {
    id: 'req-2',
    petId: 'luna',
    petName: 'Luna',
    petBreedAge: 'Siamês • 1 ano',
    petImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDaVXFdA5OWP_3BYGFP1vZszUrA93BuGXwO6Y_-BXuWHTFFPNBb16NmQklLJNj2kGqvplHKHBVpZtxC3DnpUPycHr_wyq91AKVp64a4rh0Vl-XCY92GeNcZVB1uBEwBoo-hbS1hWdxchSyIJQaD9hhYIqvpvpFwLTvu-WrZzO_P4Qp44Oxd_WwqtbLmSnA2g6OjyuqI8hoHPisrhNkeg3943-f_XZTFv0NL85apXf6Wc9LJlwi2kGxdOx11FJDllZrbhIljBzzitdW',
    adopterName: 'Ricardo Mendonça',
    location: 'Campinas, SP',
    date: '10 Out',
    status: 'Em conversa'
  },
  {
    id: 'req-3',
    petId: 'thor',
    petName: 'Thor',
    petBreedAge: 'SRD • 4 anos',
    petImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqCK7-peP8wKIVe1uSSaQedSAIbKy--JCY3LaM-vflwdVhH96ce3bBtQHW5ivI693D8jj0X-1mvTyT2pI8MtMgO7WCXCFroAAcYPakO1DL5J5jw2OGr3q8Qb3yTW2WvT4xL_6E9XBiM0ecRZa3RxUEM5hby_rD5Edr2N_w4-MXDxcIKDB7NbUjxDYxwsYJ3Ymhme_PcEZ01UvInEvjhDvTNxqELkhTbN1ESaukkCipBKd7DoV7rULjFVUwkRgYdBUlamTiY9wU1QSg',
    adopterName: 'Juliana Pires',
    location: 'São Paulo, SP',
    date: '08 Out',
    status: 'Aprovada'
  }
];

export function getPets(): Pet[] {
  if (typeof window === 'undefined') return INITIAL_PETS;
  const stored = localStorage.getItem('adopet_pets');
  if (!stored) {
    localStorage.setItem('adopet_pets', JSON.stringify(INITIAL_PETS));
    return INITIAL_PETS;
  }
  return JSON.parse(stored);
}

export function savePets(pets: Pet[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('adopet_pets', JSON.stringify(pets));
}

export function getRequests(): AdoptionRequest[] {
  if (typeof window === 'undefined') return INITIAL_REQUESTS;
  const stored = localStorage.getItem('adopet_requests');
  if (!stored) {
    localStorage.setItem('adopet_requests', JSON.stringify(INITIAL_REQUESTS));
    return INITIAL_REQUESTS;
  }
  return JSON.parse(stored);
}

export function saveRequests(requests: AdoptionRequest[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('adopet_requests', JSON.stringify(requests));
}

export function addPet(pet: Omit<Pet, 'id' | 'isFavorite' | 'daysOnline'>): Pet {
  const pets = getPets();
  const newPet: Pet = {
    ...pet,
    id: pet.name.toLowerCase().replace(/\s+/g, '-'),
    isFavorite: false,
    daysOnline: 1
  };
  pets.push(newPet);
  savePets(pets);
  return newPet;
}

export function addAdoptionRequest(request: Omit<AdoptionRequest, 'id' | 'date' | 'status'>): AdoptionRequest {
  const requests = getRequests();
  const newRequest: AdoptionRequest = {
    ...request,
    id: `req-${Date.now()}`,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', ''),
    status: 'Nova'
  };
  requests.unshift(newRequest);
  saveRequests(requests);
  return newRequest;
}

export function updateRequestStatus(id: string, status: 'Nova' | 'Em conversa' | 'Aprovada'): void {
  const requests = getRequests();
  const updated = requests.map(req => req.id === id ? { ...req, status } : req);
  saveRequests(updated);
}
