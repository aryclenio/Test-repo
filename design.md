# Design System - Adopet

Este documento define e documenta a identidade visual e o design system da plataforma **Adopet**, em conformidade com as diretrizes do ticket **SCRUM-1**. 

O objetivo visual do Adopet é transmitir **acolhimento, confiança e leveza**, evitando uma abordagem infantilizada ou genérica (como a clássica combinação de azul royal com verde limão). A identidade é baseada em tons terrosos, quentes e naturais, que harmonizam perfeitamente com fotografias de animais.

---

## 1. Paleta de Cores (Tokens)

A paleta de cores foi desenvolvida utilizando a escala **HSL** para facilitar o ajuste fino de luminosidade e saturação, garantindo excelente contraste (acessibilidade WCAG AA) e harmonia visual.

### 1.1. Cores de Marca

*   **Primária (Terracotta):** `hsl(20, 60%, 45%)` (#B35433)
    *   *Uso:* Identidade principal, cabeçalhos, botões secundários importantes, links e elementos estruturais de destaque. Transmite robustez, terra, calor e acolhimento.
*   **Destaque / Ação (Warm Amber):** `hsl(38, 90%, 55%)` (#EAA12B)
    *   *Uso:* Ações de conversão primárias como "Adotar", "Favoritar" (corações de favorito), badges especiais e chamadas para ação (CTA).

### 1.2. Cores Neutras (Acolhedoras)

Evitamos pretos puros e cinzas frios para manter a interface com uma sensação de conforto e suavidade.

*   **Neutro Escuro (Texto Principal):** `hsl(20, 20%, 15%)` (#2D2724)
    *   *Uso:* Títulos, textos principais e elementos com alto contraste. Um tom café/carvão quente.
*   **Neutro Médio (Bordas e Elementos Secundários):** `hsl(30, 10%, 80%)` (#D1CCC0)
    *   *Uso:* Bordas de inputs, linhas divisorias e subtextos (quando em variações mais escuras).
*   **Neutro Claro (Fundo Principal):** `hsl(36, 30%, 97%)` (#FAF7F2)
    *   *Uso:* Cor de fundo da aplicação, gerando um contraste suave como papel ou areia clara.
*   **Neutro Branco:** `hsl(0, 0%, 100%)` (#FFFFFF)
    *   *Uso:* Fundo de cartões (cards), inputs e áreas que exigem separação clara do fundo geral.

### 1.3. Estados de Feedback

*   **Sucesso (Sage Green):** `hsl(90, 35%, 42%)` (#5A7D36) - Verde folha/sálvia, natural e suave.
*   **Erro (Brick Red):** `hsl(4, 65%, 48%)` (#C63D2F) - Vermelho terra/tijolo, visível sem ser berrante.
*   **Alerta (Ochre):** `hsl(45, 80%, 45%)` (#C2921D) - Amarelo mostarda quente.

---

## 2. Tipografia

A tipografia escolhida é a **Plus Jakarta Sans**, uma fonte sans-serif moderna, amigável, com formas geométricas limpas e excelente legibilidade em telas de qualquer tamanho.

### 2.1. Configuração de Importação

A fonte deve ser carregada do Google Fonts adicionando o seguinte link ao cabeçalho HTML ou importando no arquivo CSS global:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

body {
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: hsl(20, 20%, 15%);
  background-color: hsl(36, 30%, 97%);
}
```

### 2.2. Escala de Tamanhos e Pesos

*   **Título Principal (H1):** `font-size: 2.25rem` (36px) | `font-weight: 700` (Bold) | `letter-spacing: -0.02em`
*   **Título de Seção (H2):** `font-size: 1.75rem` (28px) | `font-weight: 600` (Semi-Bold) | `letter-spacing: -0.01em`
*   **Subtítulo (H3):** `font-size: 1.25rem` (20px) | `font-weight: 600` (Semi-Bold)
*   **Corpo de Texto (Body):** `font-size: 1rem` (16px) | `font-weight: 400` (Regular) | `line-height: 1.6`
*   **Texto Auxiliar / Legendas:** `font-size: 0.875rem` (14px) | `font-weight: 500` (Medium) | `color: hsl(20, 10%, 45%)`

---

## 3. Espaçamentos, Bordas e Sombras

Para manter a consistência visual da interface, aplicamos uma grade baseada em múltiplos de **4px / 8px**.

### 3.1. Espaçamentos (Spacing Grid)

| Token | Valor | Uso Comum |
| :--- | :--- | :--- |
| `space-1` | 4px | Pequenos ajustes internos, gaps de ícones |
| `space-2` | 8px | Padding de badges, pequenos paddings internos |
| `space-4` | 16px | Padding interno de inputs e botões, gaps médios |
| `space-6` | 24px | Padding padrão de cartões (cards), espaçamento de seções |
| `space-8` | 32px | Margens entre seções maiores da página |

### 3.2. Arredondamento (Border Radius)

Bordas mais arredondadas transmitem simpatia e suavidade:

*   **Pequeno (`radius-sm`):** `6px` (botões menores, badges)
*   **Padrão (`radius-md`):** `12px` (botões principais, inputs, miniaturas de fotos)
*   **Grande (`radius-lg`):** `20px` (cards principais de pets, modais)
*   **Total (`radius-full`):** `9999px` (botões pill-style, avatares circulares)

### 3.3. Sombras (Shadows)

As sombras são suaves, utilizando a cor do texto escuro com alta transparência para parecerem naturais:

*   **Suave (`shadow-sm`):** `0 2px 8px hsla(20, 20%, 15%, 0.04)`
*   **Elevação Standard (`shadow-md`):** `0 4px 16px hsla(20, 20%, 15%, 0.08)`
*   **Modais / Destaques (`shadow-lg`):** `0 8px 32px hsla(20, 20%, 15%, 0.12)`

---

## 4. Guia de Componentes e Estados (Página de Referência)

Abaixo está o exemplo conceitual em HTML/CSS para implementar a página de referência que demonstra visualmente os tokens aplicados.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Adopet - Design Tokens</title>
  <style>
    :root {
      /* Cores */
      --color-primary: hsl(20, 60%, 45%);
      --color-primary-hover: hsl(20, 60%, 40%);
      --color-accent: hsl(38, 90%, 55%);
      --color-accent-hover: hsl(38, 90%, 50%);
      
      --color-bg: hsl(36, 30%, 97%);
      --color-card: hsl(0, 0%, 100%);
      --color-border: hsl(30, 10%, 80%);
      --color-text: hsl(20, 20%, 15%);
      --color-text-muted: hsl(20, 10%, 45%);
      
      --color-success: hsl(90, 35%, 42%);
      --color-error: hsl(4, 65%, 48%);
      --color-warning: hsl(45, 80%, 45%);
      
      /* Espaçamentos */
      --space-2: 8px;
      --space-4: 16px;
      --space-6: 24px;
      
      /* Border Radius */
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 20px;
      
      /* Sombras */
      --shadow-md: 0 4px 16px hsla(20, 20%, 15%, 0.08);
    }

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--color-bg);
      color: var(--color-text);
      margin: 0;
      padding: 40px;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .card {
      background: var(--color-card);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
      box-shadow: var(--shadow-md);
      margin-bottom: var(--space-6);
    }

    .color-swatch {
      display: inline-block;
      width: 120px;
      margin-right: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    .color-box {
      height: 80px;
      border-radius: var(--radius-md);
      margin-bottom: 8px;
      border: 1px solid var(--color-border);
    }

    .btn {
      display: inline-block;
      padding: 12px 24px;
      font-weight: 600;
      border-radius: var(--radius-md);
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 1rem;
    }

    .btn-primary {
      background-color: var(--color-primary);
      color: white;
    }
    .btn-primary:hover {
      background-color: var(--color-primary-hover);
    }

    .btn-accent {
      background-color: var(--color-accent);
      color: white;
    }
    .btn-accent:hover {
      background-color: var(--color-accent-hover);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Guia de Estilos & Tokens - Adopet</h1>
    
    <div class="card">
      <h2>1. Cores</h2>
      <div class="color-swatch">
        <div class="color-box" style="background: var(--color-primary);"></div>
        <strong>Primary</strong>
        <span style="font-size: 12px; display:block;">#B35433</span>
      </div>
      <div class="color-swatch">
        <div class="color-box" style="background: var(--color-accent);"></div>
        <strong>Accent (CTA)</strong>
        <span style="font-size: 12px; display:block;">#EAA12B</span>
      </div>
      <div class="color-swatch">
        <div class="color-box" style="background: var(--color-text);"></div>
        <strong>Text/Dark</strong>
        <span style="font-size: 12px; display:block;">#2D2724</span>
      </div>
      <div class="color-swatch">
        <div class="color-box" style="background: var(--color-bg);"></div>
        <strong>Background</strong>
        <span style="font-size: 12px; display:block;">#FAF7F2</span>
      </div>
    </div>

    <div class="card">
      <h2>2. Botões e Ações</h2>
      <button class="btn btn-primary">Adotar Secundário</button>
      <button class="btn btn-accent">Adotar / Favoritar</button>
    </div>
  </div>
</body>
</html>
```
