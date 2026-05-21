Here's the complete rewritten brief:

---

# Rohit Contracting — Warm Rhythm Redesign
## Phase 1: Color System + Card System Overhaul

---

# THE CORE CHANGE

Replace the current inconsistent background system with a deliberate warm rhythm. Two dark anchors (Hero, CTA) bookend a flowing warm sequence. No pure white, no cool grays, no glassmorphism anywhere.

---

# STEP 1 — CSS CUSTOM PROPERTIES

Replace all existing color tokens with this system. Add to `globals.css` `:root`:

```css
:root {
  /* Dark anchors */
  --bg-dark:      #0a0a0a;
  --bg-dark-cta:  #2C1F14;

  /* Warm rhythm */
  --bg-cream:     #FAF7F2;
  --bg-beige:     #F0E6D6;
  --bg-earth:     #E8DCC8;

  /* Cards on warm backgrounds */
  --card-cream:   #FDF8F3;
  --card-beige:   #FAF7F2;
  --card-earth:   #F5EDE0;

  /* Text on warm backgrounds */
  --text-heading: #1C1A17;
  --text-body:    #5C5047;
  --text-muted:   #7A6250;

  /* Borders on warm backgrounds */
  --border-warm:  #E8DDD0;
  --border-earth: #D8C7B5;

  /* Accent — unchanged */
  --color-accent:       #D85A30;
  --color-accent-light: #FF8C42;
  --color-accent-dark:  #B84A20;
}
```

---

# STEP 2 — SECTION BACKGROUND MAP

Apply exactly these backgrounds, no deviations:

```
Hero          →  --bg-dark       (#0a0a0a)       keep as-is
About         →  --bg-cream      (#FAF7F2)
Services      →  --bg-beige      (#F0E6D6)
Projects      →  --bg-cream      (#FAF7F2)
WhyChooseUs   →  --bg-earth      (#E8DCC8)
Materials     →  --bg-cream      (#FAF7F2)
CTA           →  --bg-dark-cta   (#2C1F14)       keep as-is
Footer        →  --bg-earth      (#E8DCC8)
```

**Rhythm decoded:**
```
Dark → Cream → Beige → Cream → Earth → Cream → Dark → Earth
```

---

# STEP 3 — REMOVE ALL GLASSMORPHISM

Remove `backdrop-filter`, `blur()`, and translucent backgrounds from every card, badge, and surface across all warm sections.

Replace with solid warm cards:

**Cards on `--bg-cream` sections (About, Projects, Materials):**
```css
background:    var(--card-cream);
border:        1px solid var(--border-warm);
border-radius: 16px;
box-shadow:    0 2px 12px rgba(92, 80, 71, 0.08);
```

**Cards on `--bg-beige` sections (Services):**
```css
background:    var(--card-beige);
border:        1px solid var(--border-warm);
border-radius: 16px;
box-shadow:    0 2px 12px rgba(92, 80, 71, 0.08);
```

**Cards on `--bg-earth` sections (WhyChooseUs, Footer):**
```css
background:    var(--card-earth);
border:        1px solid var(--border-earth);
border-radius: 16px;
box-shadow:    0 2px 16px rgba(92, 80, 71, 0.1);
```

**Cards on dark sections (Hero overlays, CTA):**
```css
background:    rgba(255, 255, 255, 0.04);
border:        1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px;
```

These are the only four card styles permitted. No other card treatments.

---

# STEP 4 — TYPOGRAPHY ON WARM SECTIONS

Every warm section (About, Services, Projects, WhyChooseUs, Materials, Footer) must use:

```css
/* Headings */
color: var(--text-heading);   /* #1C1A17 */

/* Body / descriptions */
color: var(--text-body);      /* #5C5047 */

/* Muted / captions */
color: var(--text-muted);     /* #7A6250 */

/* Accent highlights */
color: var(--color-accent);   /* #D85A30 */
```

No pure black (`#000` or `#0a0a0a`) text on warm backgrounds. No cool grays (`#666`, `#999`) anywhere on warm sections.

Dark sections (Hero, CTA) keep white text as-is.

---

# STEP 5 — NAVBAR SCROLLED STATE

Current `#F5F0E8` navbar background is an orphan color — not in the system. Replace with:

```css
.navbar-scrolled {
  background:    rgba(250, 247, 242, 0.92);
  border-bottom: 1px solid rgba(232, 221, 208, 0.4);
  box-shadow:    0 1px 16px rgba(92, 80, 71, 0.06);
}
```

No `backdrop-filter` on the navbar either. Solid warm translucent is enough.

---

# STEP 6 — PROJECTS SECTION SPECIFIC FIX

Projects cards currently use dark glass. On `--bg-cream` this looks wrong.

Replace with:
```css
background:    var(--card-cream);
border:        1px solid var(--border-warm);
box-shadow:    0 2px 12px rgba(92, 80, 71, 0.08);
```

The blueprint-shimmer hover animation can stay — it reads as elegant on a light background. Just ensure the shimmer gradient uses warm tones:

```css
/* Shimmer on warm cards */
background: linear-gradient(
  105deg,
  transparent 40%,
  rgba(216, 199, 181, 0.4) 50%,
  transparent 60%
);
```

---

# WHAT NOT TO TOUCH

```
Hero layout and animations        — do not touch
Hero background image             — do not touch
CTA section layout                — do not touch
Orange accent color               — do not touch
Cormorant + Jakarta Sans fonts    — do not touch
WhatsApp button                   — do not touch
ScrollProgress bar                — do not touch
Navbar transparent/hero state     — do not touch
All entrance animations           — do not touch
```

---

# HARDCODED HEX CLEANUP

After applying the above, do a full search for these hardcoded values and replace with their token equivalents:

```
#FDF8F5  →  var(--bg-cream)
#EDE0CE  →  var(--bg-earth)
#F2E8DB  →  var(--card-earth)
#1C1A17  →  var(--text-heading)
#5C5047  →  var(--text-body)
#D85A30  →  var(--color-accent)
#F5F0E8  →  var(--bg-cream)
```

---

# EXECUTION ORDER

Do these in order. Do not combine steps.

```
1. Add CSS custom properties to globals.css
2. Apply section backgrounds
3. Remove all glassmorphism — replace with solid cards
4. Fix typography colors on warm sections
5. Fix navbar scrolled state
6. Fix Projects cards and shimmer
7. Replace hardcoded hex values
```

Verify full scroll after each step before proceeding.

---
