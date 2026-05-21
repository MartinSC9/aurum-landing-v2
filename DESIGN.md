# Sistema de Diseno - Aurum Team Prototypes

## Identidad Visual

### Filosofia de Diseno
Estetica **dark luxury / coaching premium**. Inspirada en marcas de alto valor para hombres: negro profundo como base, dorado como acento de poder y exclusividad. El diseno debe transmitir **confianza, masculinidad, transformacion y resultados**. Es visualmente intenso: usa fotografias reales de lifestyle (eventos, personas atractivas, situaciones sociales), videos de fondo, y tipografia bold con alto contraste. Nada minimalista ni corporativo — es aspiracional, emocional y directo.

Referencia visual: canal YouTube "Aurum" (@teoriadepoder), Instagram @danielseguraf. Banner con fotos de Daniel + Natalia + logo triangulo dorado + mujeres atractivas. Estilo similar a coaches de alto ticket como Tai Lopez, Alex Hormozi adaptado al nicho hispano.

### Reglas visuales clave
1. **Siempre fotos reales** — nunca placeholders grises ni iconos genericos solos. Usar imagenes de Unsplash/Pexels que encajen (hombres confiados, parejas, lifestyle, eventos, ciudades de noche).
2. **Fondos con profundidad** — overlays oscuros sobre fotos, gradientes radiales dorados sutiles, video backgrounds en hero.
3. **Texto sobre imagen** — siempre con overlay oscuro (min 60% opacidad) para legibilidad.
4. **Dorado con moderacion** — solo en CTAs, acentos, numeros destacados y el logo. Nunca como fondo solido de seccion.
5. **Sensacion de movimiento** — transiciones suaves, hover effects con lift, scroll reveals.

---

### Paleta de Colores

#### Colores Principales
| Token | Valor | Uso |
|-------|-------|-----|
| `--gold` | `#c9a84c` | Dorado principal — CTAs, iconos, acentos |
| `--gold-light` | `#d4af37` | Dorado medio — hover states, bordes activos |
| `--gold-bright` | `#f0d060` | Dorado claro — gradientes, highlights |
| `--gold-gradient` | `linear-gradient(135deg, #c9a84c, #f0d060, #c9a84c)` | Gradiente dorado — botones primarios, numeros, texto destacado |

#### Colores Neutrales (Dark Theme)
| Token | Valor | Uso |
|-------|-------|-----|
| `--black` | `#0a0a0a` | Fondo principal del body |
| `--black-light` | `#141414` | Fondo alternativo de secciones |
| `--black-card` | `#1a1a1a` | Fondo de cards, modales, inputs |
| `--black-border` | `#2a2a2a` | Bordes, separadores, dividers |
| `--white` | `#ffffff` | Texto principal, titulos |
| `--white-muted` | `#b0b0b0` | Texto secundario, descripciones |
| `--gray` | `#888888` | Texto terciario, labels, captions |

#### Colores Semanticos
| Token | Valor | Uso |
|-------|-------|-----|
| `--green-accent` | `#2ecc71` | Exito, checks positivos, "es para vos" |
| `--red-accent` | `#e74c3c` | Error, checks negativos, "no es para vos", warnings |

#### Overlays y Transparencias
| Token | Valor | Uso |
|-------|-------|-----|
| `--overlay-dark` | `rgba(10, 10, 10, 0.7)` | Overlay sobre fotos/videos para legibilidad |
| `--overlay-darker` | `rgba(10, 10, 10, 0.85)` | Overlay mas fuerte para texto critico |
| `--gold-glow` | `rgba(201, 168, 76, 0.08)` | Radial glow sutil en heroes/CTAs |
| `--gold-glow-md` | `rgba(201, 168, 76, 0.15)` | Glow mas visible para featured items |
| `--gold-shadow` | `rgba(201, 168, 76, 0.3)` | Box-shadow en hover de botones dorados |

---

### Tipografia

**Google Fonts cargadas:**
```
Inter:wght@300;400;500;600;700;800
Playfair Display:wght@400;600;700
```

| Nivel | Font | Size (desktop) | Size (mobile) | Weight | Line Height | Uso |
|-------|------|---------------|---------------|--------|-------------|-----|
| Hero H1 | Playfair Display | 3.5rem | 2rem | 700 | 1.15 | Titulo principal del hero |
| Section H2 | Playfair Display | 2.5rem | 1.8rem | 700 | 1.2 | Titulos de seccion |
| Card H3 | Inter | 1.3rem | 1.1rem | 700 | 1.3 | Titulos de cards |
| Subtitle | Inter | 1.15rem | 1rem | 400 | 1.7 | Subtitulos bajo H1/H2 |
| Body | Inter | 0.95rem | 0.9rem | 400 | 1.6 | Texto general, descripciones |
| Small | Inter | 0.85rem | 0.8rem | 500 | 1.5 | Labels, notas, form labels |
| Caption | Inter | 0.75-0.8rem | 0.75rem | 600 | 1.4 | Footer, badges, timestamps |
| Stat Number | Inter | 2.2rem | 1.6rem | 800 | 1 | Numeros destacados (stats, countdown) |
| Badge | Inter | 0.8rem | 0.75rem | 600 | 1 | letter-spacing: 2px, uppercase |
| Nav Link | Inter | 0.9rem | — | 500 | 1 | Links de navegacion |
| Button | Inter | 1rem | 0.9rem | 700 | 1 | letter-spacing: 0.5px, uppercase |

**Reglas tipograficas:**
- **Playfair Display** solo para H1 y H2 (titulos principales). Nunca para body text ni botones.
- **Inter** para todo lo demas.
- Texto dorado con gradient clip (`gold-text` class) solo en palabras clave dentro de titulos, nunca parrafos enteros.
- `letter-spacing: 2px` en badges, logos y labels en uppercase.

---

### Espaciado

Sistema base: `8px`

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | `4px` | Gaps minimos, inner padding icons |
| `--space-sm` | `8px` | Gap entre elementos inline, padding label |
| `--space-md` | `16px` | Padding interno cards, gap entre items |
| `--space-lg` | `24px` | Gap entre cards en grid, padding contenedor |
| `--space-xl` | `32px` | Gap entre secciones de una misma area |
| `--space-2xl` | `48px` | Gap entre columnas en grids grandes |
| `--space-section` | `80px` | Padding vertical de secciones (40px en mobile) |
| `--container-max` | `1100px` | Ancho maximo del contenedor principal |
| `--container-padding` | `24px` | Padding lateral del contenedor (16px en mobile) |

---

### Bordes y Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `8px` | Botones, inputs, elementos pequenos |
| `--radius-md` | `10-12px` | Countdown items, time slots, icon containers |
| `--radius-lg` | `14-16px` | Cards, calendario, video containers |
| `--radius-full` | `50px` | Badges, avatares, pills |
| `--border-default` | `1px solid var(--black-border)` | Bordes de cards, inputs, separadores |
| `--border-gold` | `1px solid var(--gold)` | Borde activo, selected state, featured |
| `--border-gold-thick` | `2px solid var(--gold)` | Video containers, outline buttons |
| `--shadow-gold-sm` | `0 4px 20px rgba(201, 168, 76, 0.1)` | Hover sutil en cards |
| `--shadow-gold-md` | `0 8px 30px rgba(201, 168, 76, 0.3)` | Hover fuerte en CTAs principales |
| `--shadow-gold-lg` | `0 12px 40px rgba(201, 168, 76, 0.2)` | Elementos hero, featured sections |

---

### Transiciones y Animaciones

| Token | Valor | Uso |
|-------|-------|-----|
| `--transition` | `0.3s ease` | Default para hovers, bordes, colores |
| `--transition-fast` | `0.15s ease` | Toggles, checkboxes, micro-interactions |
| `--transition-slow` | `0.5s ease` | Scroll reveals, page transitions |

**Efectos hover estandar:**
- **Cards:** `transform: translateY(-4px)` + `border-color: var(--gold)`
- **Botones gold:** `transform: translateY(-2px)` + `box-shadow: var(--shadow-gold-md)`
- **Botones outline:** `background: rgba(201, 168, 76, 0.1)` + `translateY(-2px)`
- **Links:** color cambia a `var(--gold)`
- **Flechas/arrows:** `transform: translateX(4px)`
- **Social icons:** `color: var(--gold)` + `scale(1.1)`

---

## Fotografia e Imagenes

### Directrices para imagenes de stock (Unsplash/Pexels)
Buscar terminos como: `confident man suit`, `couple date night`, `men lifestyle luxury`, `conference audience`, `night city`, `man getting ready mirror`, `social gathering bar`, `man confident portrait`.

| Seccion | Tipo de imagen | Tratamiento |
|---------|---------------|-------------|
| Hero | Video loop o foto panoramica (hombre confiado, ciudad de noche, evento) | Overlay `--overlay-dark`, texto centrado encima |
| Metodo cards | Foto cuadrada por pilar (mente, imagen, conexion) | Border-radius 16px, dentro de la card o como fondo |
| Testimonios | Retrato hombre (headshot) | Circular, 40-56px, borde dorado |
| Eventos | Foto multitud/conferencia/auditorio | Aspect-ratio 4:3, border-radius 16px |
| Sobre nosotros | Retratos de Daniel y Natalia | Circular o rectangular con borde dorado |
| CTA final | Foto panoramica (pareja, lifestyle) | Fondo con overlay, texto centrado |
| Link-in-Bio avatar | Foto de perfil de Daniel | Circular con ring dorado (3px gradient border) |

### Videos de fondo
- **Hero principal:** Video en loop (sin audio, autoplay, muted) de lifestyle/ciudad/evento
- Formato: MP4, max 10MB, aspect-ratio 16:9 o fullscreen
- CSS: `object-fit: cover`, `position: absolute`, con overlay encima
- Fallback: imagen estatica para mobile/slow connections

---

## Componentes Base

### Botones

| Variante | Clase | Fondo | Texto | Borde | Uso |
|----------|-------|-------|-------|-------|-----|
| Primary | `.btn-gold` | `var(--gold-gradient)` | `var(--black)` | ninguno | CTA principal, agendar, comprar |
| Outline | `.btn-outline` | transparente | `var(--gold)` | `2px solid var(--gold)` | CTA secundario, WhatsApp |
| Small | `.btn-sm` | hereda | hereda | hereda | Navbar CTA, acciones menores |

**Estados:**
- **Default:** como tabla arriba
- **Hover:** translateY(-2px) + shadow (gold) o background (outline)
- **Active:** translateY(0) + shadow reducido
- **Disabled:** opacity: 0.5, cursor: not-allowed (no implementado aun)
- **Full-width:** `width: 100%` via inline style (mobile o formularios)

**Tamanos:**
- `sm`: padding 10px 24px, font 0.85rem
- `md` (default): padding 16px 40px, font 1rem
- Mobile: padding 14px 28px, font 0.9rem, width 100%

### Inputs y Formularios

```css
/* Input base */
padding: 14px 16px;
background: var(--black-card);
border: 1px solid var(--black-border);
border-radius: 10px;
color: var(--white);
font-family: var(--font-main);
font-size: 0.9rem;

/* Focus */
border-color: var(--gold);
box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
outline: none;

/* Placeholder */
color: var(--gray);
```

### Cards

**Card base (method, testimonial, audience):**
```css
background: var(--black-card);
border: 1px solid var(--black-border);
border-radius: 16px;
padding: 32px; /* o 40px 32px para method cards */
```

**Card featured (bio link featured):**
```css
background: linear-gradient(135deg, rgba(201, 168, 76, 0.15), rgba(201, 168, 76, 0.05));
border-color: rgba(201, 168, 76, 0.4);
```

**Card con imagen de fondo:**
```css
position: relative;
overflow: hidden;
/* Imagen como ::before o <img> con object-fit: cover */
/* Overlay con ::after rgba(10, 10, 10, 0.7) */
/* Contenido con position: relative; z-index: 1 */
```

### Navbar
```css
position: fixed;
background: rgba(10, 10, 10, 0.9);
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--black-border);
z-index: 100;
```

### Layout

- **Container max-width:** 1100px (1000px para reservas)
- **Grid system:** CSS Grid nativo
- **Breakpoints:**
  - Desktop: > 768px
  - Mobile: <= 768px
- **Grids comunes:**
  - 4 columnas: stats (2 en mobile)
  - 3 columnas: method cards (1 en mobile)
  - 2 columnas: testimonials, audience, events (1 en mobile)
  - Sidebar + content: reservas (360px + 1fr, 1fr en mobile)

### Logo
- Triangulo unicode: `&#9651;` en color `var(--gold)`
- Texto "AURUM" o "AURUM TEAM" con clase `.gold-text` (gradient clip)
- Font-weight: 700, letter-spacing: 2px
- En produccion reemplazar por SVG del logo real (triangulo dorado con "AURUM ACADEMY")

### Avatares
- **Pequeno (32px):** hero proof avatars, gradient background
- **Medio (40-56px):** testimonials, reservas profile
- **Grande (110px):** link-in-bio, con ring dorado de 3px
- Todos circulares (`border-radius: 50%`)
- Placeholder: iniciales o gradient dorado, reemplazar por fotos reales

---

## Paginas y Secciones

### Landing (/)
1. **Hero** — full-width con video/foto de fondo + overlay oscuro. Badge "METODO AURUM 2.0", H1, subtitle, 2 CTAs, social proof.
2. **Stats** — franja con 4 numeros dorados (488K, 2500+, 15+, 4.9). Bordes top/bottom.
3. **Audience** — 2 cards (verde "para vos" / rojo "no para vos") con checks.
4. **Metodo** — 3 cards con numeros grandes dorados (01, 02, 03) + foto de fondo por pilar.
5. **VSL** — video embebido con borde dorado + countdown. Paso 1/Paso 2 como la landing actual.
6. **Testimonials** — grid 2x2 con foto circular, estrellas doradas, texto italico.
7. **Sobre nosotros** — fotos de Daniel y Natalia con descripcion. (pendiente de implementar)
8. **Eventos** — split layout: texto izq + foto grande der.
9. **Beneficios** — 6 items con iconos. (pendiente, actualmente en CONTEXTO.md)
10. **FAQ** — accordion. (pendiente)
11. **CTA final** — fondo con glow dorado, H2 + 2 CTAs.
12. **Footer** — logo + socials + copyright.

### Link-in-Bio (/links)
- Mobile-first, max-width 440px, centrado
- Avatar grande con ring dorado
- Links como cards con icono + texto + flecha
- Featured link con fondo gold semi-transparente
- Mini stats
- Fondo con radial glow dorado sutil

### Reservas (/reservas)
- Header con back + logo
- Grid sidebar (info) + content (calendario/form)
- Calendario con dias clickeables, selected = gold gradient
- Time slots en grid 3 columnas
- Formulario con paso 2 (datos personales)
- Confirmacion con check verde

---

## Reglas para Agentes de IA

1. **NUNCA** inventes colores fuera de la paleta definida arriba. Solo negro, dorado, blanco y los semanticos (verde/rojo).
2. **NUNCA** uses tipografias que no sean Inter o Playfair Display.
3. **NUNCA** dejes secciones con placeholders grises vacios. Siempre usa imagenes de Unsplash (via URL directa como `https://images.unsplash.com/photo-XXXXX?w=800&q=80`) o fotos reales del cliente.
4. **SIEMPRE** usa overlays oscuros sobre fotos para mantener legibilidad del texto.
5. **SIEMPRE** respeta la jerarquia tipografica: Playfair solo para H1/H2, Inter para todo lo demas.
6. **SIEMPRE** usa los tokens de variables CSS definidos, no valores hardcodeados.
7. **SIEMPRE** que agregues una seccion nueva, incluir version responsive (mobile <= 768px).
8. Los componentes nuevos deben seguir los patrones visuales de los existentes (cards con border-radius 16px, bordes sutiles, hover con gold).
9. Si hay conflicto entre este archivo y el codigo, **este archivo manda**.
10. Antes de crear cualquier componente visual, **consultar este archivo primero**.
