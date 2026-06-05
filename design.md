# Design System - Adopet

Este documento define a identidade visual e as especificações de design para a plataforma **Adopet**. O objetivo principal é transmitir sentimentos de **acolhimento, confiança e leveza**, mantendo um tom moderno, amigável e profissional.

---

## 🎨 Paleta de Cores (Tokens de Cores)

A paleta de cores do Adopet é composta por tons quentes, terrosos e naturais, ideais para complementar fotos de animais reais. Evitamos cores saturadas e frias (como o clássico azul e verde-limão de petshops tradicionais).

### 1. Cores Principais e de Ação
* **Cor Primária (Terracota):** `#C87A53` (HSL: 20°, 52%, 55%)
  * *Uso:* Identidade da marca, cabeçalhos, destaques e branding. Representa aconchego e argila/terra.
* **Cor de Destaque / Action (Dourado Quente):** `#E8A857` (HSL: 33°, 76%, 63%)
  * *Uso:* Chamadas para ação principal (ex: botões "Adotar", "Favoritar", links importantes).

### 2. Tons Neutros (Fundo, Superfícies e Texto)
* **Background (Fundo Quente):** `#FDFBF7` (HSL: 40°, 40%, 98%) - Um off-white levemente amarelado para maior conforto visual.
* **Surface (Superfície):** `#FFFFFF` (HSL: 0°, 0%, 100%) - Para cards, modais e containers.
* **Border/Divider (Borda Suave):** `#EBE5DC` (HSL: 36°, 21%, 89%) - Divisores discretos e bordas de inputs.
* **Text Primary (Marrom Escuro):** `#2D2522` (HSL: 15°, 14%, 15%) - Excelente legibilidade com menor contraste agressivo do que o preto puro (`#000000`).
* **Text Secondary (Marrom Muted):** `#6B5E59` (HSL: 18°, 9%, 39%) - Subtítulos, metadados e textos de suporte.

### 3. Cores de Feedback (Estados do Sistema)
* **Success (Verde Sálvia):** `#5F8D76` (HSL: 150°, 20%, 46%)
* **Warning (Mostarda Escuro):** `#DF9F28` (HSL: 39°, 76%, 51%)
* **Error (Ferrugem):** `#C95A49` (HSL: 8°, 54%, 54%)
* **Info (Azul Aço):** `#5D8AA8` (HSL: 204°, 29%, 51%)

---

## font-family: 'Outfit', sans-serif; 📝 Tipografia

Utilizamos a fonte **Outfit** (do Google Fonts), uma sans-serif geométrica com cantos ligeiramente arredondados, que traz um aspecto amigável e altamente legível.

### Escala Tipográfica
* **Heading 1:** `2.25rem` (36px) | Bold (700) | Line-height: 1.2
* **Heading 2:** `1.75rem` (28px) | SemiBold (600) | Line-height: 1.25
* **Heading 3:** `1.25rem` (20px) | Medium (500) | Line-height: 1.3
* **Body Large / Lead:** `1.125rem` (18px) | Regular (400) | Line-height: 1.5
* **Body Regular:** `1rem` (16px) | Regular (400) | Line-height: 1.5
* **Body Small / Captions:** `0.875rem` (14px) | Regular (400) | Line-height: 1.4
* **Buttons & Actions:** `1rem` (16px) | SemiBold (600) | Letter-spacing: 0.02em

---

## 📐 Espaçamento (Scale)

Baseado em um grid de 4px/8px para garantir consistência visual:

* **xs:** `4px` (`0.25rem`)
* **sm:** `8px` (`0.5rem`)
* **md:** `16px` (`1rem`)
* **lg:** `24px` (`1.5rem`)
* **xl:** `32px` (`2rem`)
* **xxl:** `48px` (`3rem`)

---

## 🔲 Bordas e Sombras (Border Radius & Shadows)

Para passar a sensação de leveza e amabilidade, priorizamos cantos arredondados generosos.

### Border Radius
* **Pequeno (inputs, badges):** `8px` (`0.5rem`)
* **Médio (botões, cards compactos):** `12px` (`0.75rem`)
* **Grande (cards de pets, modais):** `20px` (`1.25rem`)
* **Circular (avatar/badges):** `9999px`

### Sombras (Shadows)
* **Soft Shadow (padrão para cards):**
  `0 4px 20px -2px rgba(45, 37, 34, 0.06), 0 2px 6px -1px rgba(45, 37, 34, 0.03)`
* **Hover/Active Shadow (efeito flutuante):**
  `0 12px 30px -4px rgba(45, 37, 34, 0.12), 0 4px 12px -2px rgba(45, 37, 34, 0.06)`
