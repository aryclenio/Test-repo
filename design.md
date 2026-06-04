# Adopet Design System

Este documento define a identidade visual e o design system do **Adopet**, uma plataforma voltada para a adoção de animais. O objetivo principal do design é transmitir **acolhimento, confiança e leveza**, sem parecer infantilizado. A paleta de cores foi projetada especificamente para harmonizar com fotos de pets, que constituem o conteúdo visual principal da aplicação.

---

## 🎨 Paleta de Cores (Tokens de Cor)

Para evitar o clichê "azul royal e verde limão" de sites de pets genéricos, utilizamos uma paleta rica em **tons terrosos e quentes**, remetendo à natureza, calor humano e aconchego.

### 🟤 Cores Principais e Destaque

| Categoria | Nome do Token | Valor Hex | Visual | Função / Uso Sugerido |
| :--- | :--- | :--- | :---: | :--- |
| **Primary** | `--color-brand-primary` | `#8C4F3E` | <span style="background-color:#8C4F3E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Terracota Principal. Usado para títulos importantes, elementos estruturais de destaque e branding. |
| **Primary Light** | `--color-brand-primary-light` | `#A66F5E` | <span style="background-color:#A66F5E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Variação mais clara para interações (hover). |
| **Accent / Highlight** | `--color-brand-accent` | `#D96B43` | <span style="background-color:#D96B43; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Cobre Quente / Sunset. Cor de destaque para ações primárias críticas, como botões de **"Adotar"** e **"Favoritar"** (corações). |
| **Accent Hover** | `--color-brand-accent-hover` | `#C2562E` | <span style="background-color:#C2562E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Estado hover do botão de destaque. |

### ⚪ Neutros (Light Mode)

| Nome do Token | Valor Hex | Visual | Função / Uso Sugerido |
| :--- | :--- | :---: | :--- |
| `--color-neutral-bg` | `#FAF7F2` | <span style="background-color:#FAF7F2; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Off-white quente. Fundo principal da aplicação (evita o branco puro estéril). |
| `--color-neutral-surface` | `#FFFFFF` | <span style="background-color:#FFFFFF; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Branco puro. Fundo de cards, caixas de diálogo e elementos flutuantes. |
| `--color-neutral-text` | `#2C2523` | <span style="background-color:#2C2523; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Café Escuro. Texto principal (contraste suave e legível, menos agressivo que `#000000`). |
| `--color-neutral-text-muted` | `#70625E` | <span style="background-color:#70625E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Marrom acinzentado. Texto secundário, legendas e rótulos de formulário. |
| `--color-neutral-border` | `#EBE5DF` | <span style="background-color:#EBE5DF; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Borda clara. Divisórias, bordas de inputs e contornos sutis. |

### 🟢 Cores de Feedback (Semânticas)

Para manter a harmonia terrosa, os tons de feedback são dessaturados e ligeiramente aquecidos, evitando tons de neon berrantes.

| Nome do Token | Valor Hex | Visual | Função / Uso Sugerido |
| :--- | :--- | :---: | :--- |
| `--color-feedback-success` | `#4E8A64` | <span style="background-color:#4E8A64; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Verde Floresta. Sucesso em ações, aprovações e status positivo. |
| `--color-feedback-error` | `#C94A4A` | <span style="background-color:#C94A4A; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Vermelho Terracota. Erros de formulário, falhas em ações e status crítico. |
| `--color-feedback-warning` | `#D19E2B` | <span style="background-color:#D19E2B; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Ouro/Mostarda. Alertas de atenção, carregamento ou estados pendentes. |

### 🌗 Cores (Dark Mode Opcional)

Se o dark mode for ativado futuramente, estes valores substituirão os neutros correspondentes para manter a harmonia quente:

| Nome do Token | Valor Hex | Visual | Função / Uso Sugerido |
| :--- | :--- | :---: | :--- |
| `--color-neutral-bg` | `#1A1615` | <span style="background-color:#1A1615; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Fundo escuro quente. |
| `--color-neutral-surface` | `#26201E` | <span style="background-color:#26201E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Fundo de cards escuro. |
| `--color-neutral-text` | `#F5EFEA` | <span style="background-color:#F5EFEA; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Texto claro creme. |
| `--color-neutral-border` | `#3B312E` | <span style="background-color:#3B312E; display:inline-block; width:40px; height:20px; border-radius:4px; border:1px solid #ccc;"></span> | Borda escura. |

---

## 🔤 Tipografia

A tipografia escolhida é a **Plus Jakarta Sans** (Google Fonts). É uma sans-serif geométrica moderna que traz um ar amigável (curvas suaves) e ao mesmo tempo transmite alta legibilidade, profissionalismo e confiança.

### Configuração de Importação
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Escala Tipográfica

| Elemento | Tamanho (rem/px) | Peso (Weight) | Altura de Linha (Line-height) |
| :--- | :--- | :--- | :--- |
| **Heading 1 (`h1`)** | `2.25rem` (36px) | Bold (700) | 1.2 |
| **Heading 2 (`h2`)** | `1.75rem` (28px) | SemiBold (600) | 1.3 |
| **Heading 3 (`h3`)** | `1.25rem` (20px) | SemiBold (600) | 1.4 |
| **Body Large** | `1.125rem` (18px) | Regular (400) / Medium (500) | 1.5 |
| **Body Regular** | `1.00rem` (16px) | Regular (400) | 1.5 |
| **Body Small / Captions**| `0.875rem` (14px) | Medium (500) / Regular (400) | 1.4 |

---

## 📐 Espaçamento (8pt Grid)

Usamos um sistema de espaçamento baseado em incrementos de **8px** (e submúltiplo de **4px**) para garantir consistência visual e facilidade no desenvolvimento de layouts responsivos.

| Token | Valor em Rem | Valor em Pixel | Exemplo de Aplicação |
| :--- | :--- | :--- | :--- |
| `--space-xxs` | `0.25rem` | 4px | Espaçamento interno em tags, margens de texto muito próximas |
| `--space-xs` | `0.5rem` | 8px | Gap entre ícone e texto, espaçamento entre itens pequenos |
| `--space-sm` | `0.75rem` | 12px | Padding interno de inputs, pequenos botões |
| `--space-md` | `1.00rem` | 16px | Padding padrão de cards pequenos, distância entre parágrafos |
| `--space-lg` | `1.50rem` | 24px | Padding de cards maiores, espaçamento entre seções |
| `--space-xl` | `2.00rem` | 32px | Distância entre blocos de conteúdo principais |
| `--space-xxl`| `3.00rem` | 48px | Espaçamento superior/inferior de seções (Hero sections) |

---

## 🔲 Bordas e Cantos Arredondados (Border Radius)

Curvas mais acentuadas ajudam a transmitir a sensação de **acolhimento e leveza**, mas sem exagerar para não infantilizar a interface.

| Token | Valor (Pixel) | Aplicação Recomendada |
| :--- | :--- | :--- |
| `--radius-sm` | `4px` | Checkboxes, inputs de formulário pequenos, pequenos badges |
| `--radius-md` | `8px` | Botões padrão, caixas de busca |
| `--radius-lg` | `16px` | Cards de animais, blocos informativos, containers principais |
| `--radius-xl` | `24px` | Grandes banners, popups, modais e layouts de destaque |
| `--radius-full` | `9999px` | Avatares de perfil, botões redondos de "favoritar", tags tipo pill |

---

## 🌫️ Sombras (Shadows)

As sombras devem ser **extremamente suaves e quentes**, misturando uma tonalidade do café escuro (`#2C2523`) ao invés do preto puro para dar um efeito de profundidade natural e confortável.

- **Soft Low (`--shadow-sm`):** `0px 2px 8px rgba(44, 37, 35, 0.04)`
  - *Uso:* Inputs ativos, pequenos cards informativos estáticos.
- **Soft Medium (`--shadow-md`):** `0px 8px 20px rgba(44, 37, 35, 0.08)`
  - *Uso:* Cards de animais (com hover para elevar o card), cabeçalhos flutuantes.
- **Soft High (`--shadow-lg`):** `0px 16px 36px rgba(44, 37, 35, 0.12)`
  - *Uso:* Modais, menus dropdown, gavetas laterais.

---

## 💻 Implementação Técnica (CSS Variables)

Copie e cole este bloco no seu arquivo CSS global (ex: `index.css` ou `variables.css`) para aplicar os tokens definidos neste design system.

```css
:root {
  /* Cores Principais */
  --color-brand-primary: #8c4f3e;
  --color-brand-primary-light: #a66f5e;
  --color-brand-accent: #d96b43;
  --color-brand-accent-hover: #c2562e;

  /* Neutros - Light Mode */
  --color-neutral-bg: #faf7f2;
  --color-neutral-surface: #ffffff;
  --color-neutral-text: #2c2523;
  --color-neutral-text-muted: #70625e;
  --color-neutral-border: #ebe5df;

  /* Feedback */
  --color-feedback-success: #4e8a64;
  --color-feedback-error: #c94a4a;
  --color-feedback-warning: #d19e2b;

  /* Font Family */
  --font-family: 'Plus Jakarta Sans', sans-serif;

  /* Espaçamentos */
  --space-xxs: 0.25rem; /* 4px */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 0.75rem;  /* 12px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-xxl: 3rem;    /* 48px */

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0px 2px 8px rgba(44, 37, 35, 0.04);
  --shadow-md: 0px 8px 20px rgba(44, 37, 35, 0.08);
  --shadow-lg: 0px 16px 36px rgba(44, 37, 35, 0.12);
  
  /* Transições padrão para micro-animações */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  /* Dark Mode Opcional */
  :root.dark-theme {
    --color-neutral-bg: #1a1615;
    --color-neutral-surface: #26201e;
    --color-neutral-text: #f5efea;
    --color-neutral-text-muted: #a69894;
    --color-neutral-border: #3b312e;
    
    --shadow-sm: 0px 2px 8px rgba(0, 0, 0, 0.2);
    --shadow-md: 0px 8px 20px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0px 16px 36px rgba(0, 0, 0, 0.4);
  }
}

body {
  font-family: var(--font-family);
  background-color: var(--color-neutral-bg);
  color: var(--color-neutral-text);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
```

---

## 🐶 Como aplicar em Elementos (Exemplos Práticos)

### 1. Botão Primário ("Adotar")
```css
.btn-primary {
  background-color: var(--color-brand-accent);
  color: var(--color-neutral-surface);
  font-family: var(--font-family);
  font-weight: 600;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--color-brand-accent-hover);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### 2. Card de Animal
```css
.pet-card {
  background-color: var(--color-neutral-surface);
  border: 1px solid var(--color-neutral-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
}

.pet-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}
```
