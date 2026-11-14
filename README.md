# DevOps Portfolio — Kamil Stasica

One-pager (Next.js 14 static export + Tailwind + framer-motion): hero z animowaną konsolą i pipeline'em
delivery, Recent Work (VMS), Experience, Stack, Projects, Certifications, Contact.

## Lokalnie
```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # statyczny eksport do out/
```

`middleware.ts` blokuje `output: 'export'` – workflow usuwa go przed buildem. Lokalny `npm run build`
wymaga jego tymczasowego przeniesienia.

## Deploy na GitHub Pages
Workflow `.github/workflows/deploy.yml` buduje i publikuje stronę przy każdym pushu na `main`
(Settings → Pages → Source: **GitHub Actions**).

Base path ustawia się sam (`actions/configure-pages` → `PAGES_BASE_PATH`):

| Adres | base path |
| --- | --- |
| `https://polishyankee.github.io/devops-portfolio/` | `/devops-portfolio` |
| własna domena, np. `https://portfolio.example.com/` | brak |

## Własna domena
1. DNS u rejestratora:
   - subdomena (np. `portfolio.example.com` lub `www.example.com`): rekord `CNAME` → `polishyankee.github.io`
   - domena główna (`example.com`): rekordy `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` (opcjonalnie `AAAA` → `2606:50c0:8000::153` … `2606:50c0:8003::153`)
2. GitHub → profil → Settings → Pages → **Verified domains**: zweryfikuj domenę (rekord TXT), żeby nikt
   inny nie mógł jej podpiąć.
3. Repo → Settings → Pages → **Custom domain**: wpisz domenę, poczekaj na DNS check, włącz **Enforce HTTPS**.
4. Uruchom ponownie workflow (Actions → Deploy to GitHub Pages → Run workflow), żeby zbudować stronę
   bez base path. Stary adres `*.github.io/devops-portfolio/` będzie przekierowywał na nową domenę.

Plik `CNAME` w repo nie jest potrzebny – przy deployu przez Actions domenę trzyma ustawienie Pages.
