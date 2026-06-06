# Adopet - Sistema de Design (Identidade Visual)

Este documento define e documenta os tokens de design para a plataforma Adopet, com o objetivo de transmitir acolhimento, confiança e leveza, sem infantilização. A paleta foi planejada para harmonizar perfeitamente com fotos de animais domésticos.

---

## 🎨 Paleta de Cores (Tokens de Cores)

A paleta de cores utiliza tons terrosos e quentes, evitando a paleta genérica e berrante de pet shops convencionais (como azul royal e verde limão).

### Cores Principais e de Ação
| Nome do Token | Valor Hex | HSL | Aplicação Recomendada |
| :--- | :--- | :--- | :--- |
| `--color-primary` (Terracota) | `#B85B44` | `hsl(12, 45%, 49%)` | Identidade da marca, cabeçalhos, destaques sutis. |
| `--color-accent` (Amber) | `#D97736` | `hsl(24, 69%, 53%)` | Ações primárias de conversão ("Adotar", "Favoritar", botões de ação). |

### Tons Neutros
| Nome do Token | Valor Hex | HSL | Aplicação Recomendada |
| :--- | :--- | :--- | :--- |
| `--color-neutral-light` | `#FAF8F5` | `hsl(36, 20%, 98%)` | Fundo principal da página (Light Mode). |
| `--color-neutral-medium`| `#EFEBE4` | `hsl(38, 17%, 92%)` | Fundo de cards, bordas, divisores e inputs. |
| `--color-neutral-dark`  | `#2B2725` | `hsl(15, 8%, 15%)`  | Texto principal, títulos e elementos de alto contraste. |

### Estados de Feedback
| Nome do Token | Valor Hex | HSL | Aplicação Recomendada |
| :--- | :--- | :--- | :--- |
| `--color-success` (Sage) | `#6B8E70` | `hsl(128, 16%, 49%)`| Confirmações, sucesso no envio de formulários. |
| `--color-error` (Rust)   | `#B84A39` | `hsl(8, 53%, 47%)`  | Mensagens de erro, validação inválida. |
| `--color-alert` (Ochre)   | `#D4A373` | `hsl(30, 52%, 64%)`  | Alertas, avisos e estados intermediários. |

---

## ✍️ Tipografia

Para alinhar a sensação de acolhimento e modernidade, adotamos a fonte **Plus Jakarta Sans** (Google Fonts). Ela possui curvas suaves e amigáveis, mantendo excelente legibilidade em qualquer dispositivo.

### Carregamento da Fonte (Google Fonts)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
```

### Escala Tipográfica
| Token CSS | Tamanho | Peso | Line-Height | Uso |
| :--- | :--- | :--- | :--- | :--- |
| `--font-h1` | `2.25rem` (36px) | `700` (Bold) | `1.2` | Título principal da página |
| `--font-h2` | `1.75rem` (28px) | `600` (SemiBold) | `1.3` | Títulos de seções principais |
| `--font-h3` | `1.25rem` (20px) | `600` (SemiBold) | `1.4` | Títulos de cards, subtítulos |
| `--font-body`| `1.00rem` (16px) | `400` (Regular) | `1.5` | Texto corrido, parágrafos |
| `--font-sm`  | `0.875rem` (14px)| `500` (Medium) | `1.4` | Legendas, metadados, botões menores |

---

## 📏 Espaçamento e Grid

Utilizamos uma escala baseada em múltiplos de **4px** para garantir consistência e alinhamento visual.

| Token CSS | Valor (px) | Uso Sugerido |
| :--- | :--- | :--- |
| `--spacing-xs` | `4px` | Pequenos os locais, padding de tags |
| `--spacing-sm` | `8px` | Espaço entre elementos relacionados (ex: título e subtítulo) |
| `--spacing-md` | `12px` | Padding interno pequeno, lacunas em grids |
| `--spacing-lg` | `16px` | Padding padrão de cards e botões |
| `--spacing-xl` | `24px` | Espaçamento entre seções de cards, padding de containers |
| `--spacing-2xl`| `32px` | Margem superior de páginas, grandes divisões |
| `--spacing-3xl`| `48px` | Seções principais na landing page |

---

## 🔲 Bordas e Sombras (Border Radius & Shadows)

Bordas arredondadas e sombras suaves ajudam a criar uma interface leve e acolhedora.

### Border Radius
* `--radius-sm`: `8px` (`0.5rem`) - Usado em botões, campos de texto (inputs) e badges.
* `--radius-md`: `16px` (`1.0rem`) - Usado em cards, modais e containers secundários.
* `--radius-lg`: `24px` (`1.5rem`) - Usado em banners e seções arredondadas.
* `--radius-round`: `9999px` - Usado para avatares circulares e tags do tipo "pills".

### Sombras (Shadows)
As sombras utilizam uma tonalidade escura e quente baseada em `--color-neutral-dark` para manter a naturalidade.
* `--shadow-sm`: `0 1px 3px rgba(43, 39, 37, 0.05), 0 1px 2px rgba(43, 39, 37, 0.1)`
* `--shadow-md`: `0 4px 6px -1px rgba(43, 39, 37, 0.08), 0 2px 4px -1px rgba(43, 39, 37, 0.04)`
* `--shadow-lg`: `0 10px 15px -3px rgba(43, 39, 37, 0.08), 0 4px 6px -2px rgba(43, 39, 37, 0.03)`

---

## 💻 Implementação Técnica (Variáveis CSS)

Cole este código no seu arquivo CSS global (ex: `index.css` ou `variables.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  /* Cores */
  --color-primary: #B85B44;
  --color-accent: #D97736;
  
  --color-neutral-light: #FAF8F5;
  --color-neutral-medium: #EFEBE4;
  --color-neutral-dark: #2B2725;
  
  --color-success: #6B8E70;
  --color-error: #B84A39;
  --color-alert: #D4A373;

  /* Tipografia */
  --font-family: 'Plus Jakarta Sans', sans-serif;
  
  --font-h1: bold 2.25rem/1.2 var(--font-family);
  --font-h2: 600 1.75rem/1.3 var(--font-family);
  --font-h3: 600 1.25rem/1.4 var(--font-family);
  --font-body: 400 1rem/1.5 var(--font-family);
  --font-sm: 500 0.875rem/1.4 var(--font-family);

  /* Espaçamento */
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 0.75rem;  /* 12px */
  --spacing-lg: 1rem;     /* 16px */
  --spacing-xl: 1.5rem;   /* 24px */
  --spacing-2xl: 2rem;    /* 32px */
  --spacing-3xl: 3rem;    /* 48px */

  /* Arredondamento */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-round: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(43, 39, 37, 0.05), 0 1px 2px rgba(43, 39, 37, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(43, 39, 37, 0.08), 0 2px 4px -1px rgba(43, 39, 37, 0.04);
  --shadow-lg: 0 10px 15px -3px rgba(43, 39, 37, 0.08), 0 4px 6px -2px rgba(43, 39, 37, 0.03);
}

/* Reset básico ou regras de escopo */
body {
  font-family: var(--font-family);
  background-color: var(--color-neutral-light);
  color: var(--color-neutral-dark);
  margin: 0;
  padding: 0;
}
```
