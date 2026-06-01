---
name: Adopet
colors:
  surface: '#FAF6F0'
  surface-dim: '#E5DDD4'
  surface-bright: '#FAF6F0'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#FDFBF8'
  surface-container: '#F7F2EB'
  surface-container-high: '#EFEBE2'
  surface-container-highest: '#E7E2D9'
  on-surface: '#2C2523'
  on-surface-variant: '#5C524F'
  inverse-surface: '#3E3431'
  inverse-on-surface: '#FAF0EB'
  outline: '#8F827E'
  outline-variant: '#D5C8C4'
  surface-tint: '#9E4F39'
  primary: '#9E4F39'
  on-primary: '#FFFFFF'
  primary-container: '#F6D3C8'
  on-primary-container: '#3E1207'
  inverse-primary: '#F0A18C'
  secondary: '#E58F65'
  on-secondary: '#FFFFFF'
  secondary-container: '#FCE8DE'
  on-secondary-container: '#52220B'
  tertiary: '#D68C45'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#F9EADB'
  on-tertiary-container: '#4B2A08'
  error: '#AE4444'
  on-error: '#FFFFFF'
  error-container: '#F9E0E0'
  on-error-container: '#4A1212'
  primary-fixed: '#F6D3C8'
  primary-fixed-dim: '#ECC2B6'
  on-primary-fixed: '#3E1207'
  on-primary-fixed-variant: '#9E4F39'
  secondary-fixed: '#FCE8DE'
  secondary-fixed-dim: '#F4CEBC'
  on-secondary-fixed: '#52220B'
  on-secondary-fixed-variant: '#E58F65'
  tertiary-fixed: '#F9EADB'
  tertiary-fixed-dim: '#F2D3B6'
  on-tertiary-fixed: '#4B2A08'
  on-tertiary-fixed-variant: '#D68C45'
  background: '#FAF6F0'
  on-background: '#2C2523'
  surface-variant: '#EFE7DE'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-mobile: 16px
  container-margin-desktop: 48px
  gutter: 24px
  section-gap: 64px
---

# Acolher & Adotar - Design System

Este Design System foi criado para a plataforma **Adopet**, visando transmitir sentimentos de acolhimento, confiança, leveza e proximidade. O visual foi cuidadosamente planejado para valorizar as fotos dos animais (conteúdo central da aplicação) e evitar tons berrantes ou infantis.

## 🎨 Cores (Paleta de Cores)

Nossa paleta de cores inspira-se em tons de terra e elementos naturais quentes, ideais para destacar fotos de cães, gatos e outros pets.

- **Primary (Terracota Quente - `#9E4F39`):** Representa o aconchego do lar e o calor do acolhimento. Usado de forma comedida para dar personalidade a elementos estruturais.
- **Secondary / Highlight (Sunset Peach - `#E58F65`):** A nossa cor de destaque. É vibrante o suficiente para atrair o olhar, mas mantém-se na família dos tons terrosos. Usada para ações críticas e primárias da plataforma, como os botões **"Adotar"** e **"Favoritar"**.
- **Neutras (Earthy & Cozy Neutrals):**
  - **Background (`#FAF6F0`):** Um tom off-white/creme quente que reduz a fadiga visual e traz uma atmosfera aconchegante, diferenciando o app de interfaces frias ou genéricas.
  - **Surface Variant (`#EFE7DE`):** Um tom de areia suave para delimitar cartões, seções ou campos de busca.
  - **On-Surface / Text (`#2C2523`):** Um grafite/marrom escuro muito quente. Garante excelente legibilidade sem o contraste rígido do preto puro.
  - **Outline / Muted (`#8F827E`):** Um taupe suave para bordas secundárias, ícones desabilitados e textos de apoio.
- **Feedback (Estados de Sistema):**
  - **Success (`#52796F`):** Verde sálvia suave para estados de sucesso e confirmações de adoção.
  - **Error (`#AE4444`):** Vermelho terracota para mensagens de erro ou alertas de saúde.
  - **Warning (`#D68C45`):** Amarelo mostarda quente para estados de atenção.

## ✍️ Tipografia

A tipografia combina uma fonte display com alta personalidade e uma sans-serif extremamente limpa para o corpo de texto:

1. **Outfit (Headings):** Uma sans-serif geométrica moderna com cantos levemente arredondados que expressam amigabilidade sem parecer infantil. Utiliza-se com maior peso (Bold/Semi-Bold) para criar uma hierarquia clara.
2. **Plus Jakarta Sans (Body & Labels):** Uma fonte super legível e moderna, excelente para as descrições de comportamento dos animais e formulários de adoção.

## 📐 Espaçamento e Grelha

Adota uma escala baseada em múltiplos de **8px** para manter a consistência visual:
- **Espaçamento base:** `8px`
- **Margem do container (Mobile):** `16px`
- **Margem do container (Desktop):** `48px` para dar bastante respiro às fotos dos pets.
- **Gutter (Canaleta):** `24px` entre cartões da lista.
- **Section Gap (Espaço entre seções):** `64px` para criar divisões visuais limpas e evitar poluição.

## 🪟 Arredondamento (Border Radius)

Formas orgânicas e suaves reforçam a simpatia da marca:
- **Padrão (Botoes/Inputs):** `8px` (`rounded-default`)
- **Cartões de Pets (Cards):** `16px` (`rounded-lg`) para dar uma presença suave e sofisticada às fotos dos animais.
- **Avatares e Tags:** `9999px` (`rounded-full`)

## 🌫️ Sombras e Profundidade

Para manter a interface leve e limpa, evitamos sombras pretas e pesadas. Usamos sombras sutis, difusas e com tons marrons muito claros para dar uma leve elevação:
- **Elevação Baixa (Cards):** `0px 4px 12px rgba(44, 37, 35, 0.04)`
- **Elevação Média (Modais/Menus suspensos):** `0px 10px 24px rgba(44, 37, 35, 0.08)`
