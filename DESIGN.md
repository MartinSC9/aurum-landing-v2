# Sistema de Diseno - Daniel Segura Portfolio

## Identidad Visual

### Filosofia de Diseno
**Editorial brutalism meets luxury.** No es una landing de SaaS ni un template de coaching generico. Es una pieza editorial — como abrir una revista GQ o la pagina de un fotografo de moda. Cada seccion debe sentirse como una **composicion intencionalmente disenada**, no como bloques apilados.

**Principios clave:**
1. **Asimetria deliberada** — Nada perfectamente centrado por default. Los grids se rompen, los textos se desplazan, los espacios negativos son protagonistas.
2. **Tipografia como arte** — El texto no solo comunica, es el elemento visual principal. Tamanios extremos, mezcla de pesos, letras que se cortan o salen del viewport.
3. **Ritmo impredecible** — Las secciones no siguen el mismo patron. Una puede ser una sola frase gigante, la siguiente un grid denso, la otra una imagen full-bleed.
4. **Menos es drama** — Pocos elementos, mucho espacio negativo, maxima intencion en cada pixel.
5. **Movimiento con proposito** — No animar por animar. Transiciones lentas, cinematicas. Nada de "bounce" o "pop".
6. **Fotografia dominante** — Las imagenes no son decoracion. Son el 60% de la experiencia. Grandes, cinematicas, con tratamiento de color consistente.

### Anti-patrones (lo que hace que algo se vea "IA")
- Secciones identicas: eyebrow -> h2 -> lede -> grid de 3 cards (PROHIBIDO repetir este patron)
- Hover translateY(-4px) en todas las cards (predecible, generico)
- Texto siempre centrado en section heads
- Grids simetricos de 3 columnas iguales
- Iconos genericos de react-icons como decoracion
- Stats con numeros animados alineados horizontalmente (muy "startup landing")
- Cada seccion con el mismo padding vertical
- Testimonios con quote icon + blockquote (cliche)
- "Eyebrow + H2 + Lede" como formula repetida en CADA seccion

---

## Paleta de Colores

### Colores Principales
| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#0c0e14` | Fondo principal — deep blue-black, NO negro puro |
| `--bg-elev` | `#13151d` | Superficies elevadas |
| `--bg-card` | `#181b25` | Cards, elementos interactivos |
| `--accent` | `#b8926a` | Acento principal — warm bronze |
| `--accent-light` | `#d4ad82` | Hover/active del acento |
| `--accent-soft` | `#a07d56` | Acento apagado |

### Colores de Texto
| Token | Valor | Uso |
|-------|-------|-----|
| `--ink` | `#ece8e1` | Texto principal — warm cream, NO blanco puro |
| `--ink-muted` | `#918b83` | Texto secundario |
| `--ink-dim` | `#5a5650` | Labels, metadata |

### Colores de Linea
| Token | Valor | Uso |
|-------|-------|-----|
| `--line` | `rgba(255,255,255,0.07)` | Bordes sutiles |
| `--line-soft` | `rgba(255,255,255,0.04)` | Separadores casi invisibles |
| `--accent-glow` | `rgba(184,146,106,0.08)` | Glow sutil |
| `--accent-glow-md` | `rgba(184,146,106,0.15)` | Glow medio |

### Regla de oro
- **Nunca** usar `#000000` puro ni `#ffffff` puro
- El acento bronze se usa con moderacion. Si todo es dorado, nada destaca.

---

## Tipografia

### Font Stack
| Variable | Fuentes | Uso |
|----------|---------|-----|
| `--serif` | `'Cormorant Garamond', Georgia, serif` | Display, titulos, numeros grandes |
| `--sans` | `'Manrope', -apple-system, sans-serif` | Body, UI, botones |
| `--mono` | `'JetBrains Mono', 'Menlo', monospace` | Eyebrows, labels, metadata |

### Escala Tipografica
| Nivel | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| Display XL | serif | `clamp(72px, 12vw, 160px)` | 300 | 0.85 |
| Display | serif | `clamp(56px, 9vw, 120px)` | 300 | 0.95 |
| H2 | serif | `clamp(36px, 4vw, 56px)` | 300 | 1.1 |
| H3 | serif | `clamp(22px, 2.5vw, 30px)` | 400 | 1.2 |
| Body L | sans | `clamp(16px, 1.4vw, 19px)` | 400 | 1.65 |
| Body | sans | `16px` | 400 | 1.75 |
| Eyebrow | mono | `11px` | 400 | 1 |

### Reglas tipograficas
- `em` dentro de headings = italica + color acento (firma visual)
- Letter-spacing negativo en display sizes (`-0.03em` a `-0.05em`)
- Letter-spacing positivo en eyebrows (`0.2em+`)
- `text-transform: uppercase` SOLO en eyebrows, nunca en titulos

---

## Layout

- Max width: `1200px` (`--max`)
- Gutter: `clamp(20px, 4vw, 56px)` (`--gutter`)
- El contenido puede salir del contenedor (full-bleed images, text overflow)

### Grid: variar siempre
- `0.8fr 1.2fr` o `1.3fr 1fr` (asimetrico)
- Full-width con max-width interno variable
- Grid de 4 columnas con items que span 2
- **Nunca** dos secciones consecutivas con el mismo layout

### Breakpoints
| Desktop | `> 1100px` |
| Tablet | `860px - 1100px` |
| Mobile | `< 860px` |

---

## Bordes y Sombras

- Border standard: `1px solid var(--line)`
- **Sin border-radius** en cards, imagenes, contenedores — sharp, editorial
- Radius `4px` solo en botones primary
- Radius `50%` solo en avatares
- **No drop-shadows.** Profundidad con bordes y color de fondo.

---

## Transiciones

| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Rapida | `0.3s` — hovers de links |
| Media | `0.5s var(--ease)` — cards, bordes |
| Lenta | `0.8s var(--ease)` — reveals |
| Cinematica | `1.2s var(--ease)` — hero elements |

### Hover: variar por elemento
- Imagenes: `scale(1.03)` + filter change (sutil)
- Links: underline animado o cambio de color
- Cards: cambio de `border-color` — NO translateY
- Botones: `translateY(-2px)` + shadow (solo botones)

---

## Composicion de Secciones

### Regla de variacion
Nunca dos secciones consecutivas con el mismo layout. Alternar entre:
1. **Full-bleed** — imagen/video de borde a borde
2. **Asimetrico** — dos columnas desiguales
3. **Statement** — una sola frase gigante
4. **Grid denso** — gaps minimos (2-4px)
5. **Marquee/horizontal** — elementos que se mueven o scrollean
6. **Split** — mitad oscura, mitad imagen
7. **Texto editorial** — columna estrecha

### Ritmo de padding vertical
Variar. No todas las secciones 160px. Ejemplo:
- Hero: 100vh
- About: 160px top, 120px bottom
- Statement: 80px (compacto)
- Full-bleed image: 0
- CTA: 200px

---

## Fotografia

- Lifestyle masculino premium, NO stock corporate
- Desaturacion: `saturate(0.7-0.85)`, `brightness(0.65-0.9)`
- Overlays con gradiente para legibilidad
- Unsplash con `w=800&q=80` minimo
- NUNCA fotos sin tratamiento de color

---

## Reglas para Agentes de IA

1. **NUNCA** inventes colores fuera de la paleta.
2. **NUNCA** uses tipografias que no esten aqui.
3. **NUNCA** repitas el mismo patron de layout en dos secciones consecutivas.
4. **NUNCA** centres todo por default. Alineacion izquierda como default.
5. **NUNCA** pongas 3 items en grid simetrico — si hay 3, haz que uno sea mas grande.
6. **SIEMPRE** varia el ritmo visual entre secciones.
7. **SIEMPRE** prioriza la fotografia como protagonista visual.
8. Si hay conflicto entre este archivo y el codigo, **este archivo manda**.
9. **PREGUNTA** antes de agregar elementos no definidos aqui.
