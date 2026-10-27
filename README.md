# Lucas Santana · Reumatologista — site

Site de [lucasreumatologista.com](https://lucasreumatologista.com), feito com [Astro](https://astro.build): gera HTML estático, sem framework no navegador.

Objetivo: levar quem procura um reumatologista em Brasília até o WhatsApp da Scheila para agendar a consulta particular.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (ex.: `http://localhost:4321/Lucas-santana/`).

## Onde editar

| O quê | Onde |
| --- | --- |
| CRM, RQE, WhatsApp, mensagem do WhatsApp, endereço, convênios, Instagram, e-mail | `src/site.config.ts` |
| IDs do Umami e do Google Analytics | `src/site.config.ts` → `analytics` |
| Avaliações do Google (3 a 5) e link do Perfil | `src/site.config.ts` → `avaliacoes` e `googlePerfil` |
| Textos de cada página | `src/pages/*.astro` (o texto está escrito direto no HTML) |
| Cabeçalho, rodapé, fechamento, botões fixos | `src/components/` |
| Cores, fontes, espaçamentos | `src/styles/global.css` (tokens no topo) |
| Logos | `src/assets/marca/` (cópias do pacote oficial da marca) |

Os textos vieram da Tabela de Textos do Notion (importação única, outubro/2026). A partir daqui, **o código é a fonte de verdade**.

### Páginas

| URL | Arquivo |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/sobre/` | `src/pages/sobre.astro` |
| `/reumatologista-brasilia/` | `src/pages/reumatologista-brasilia.astro` |
| `/consulta/` | `src/pages/consulta.astro` |
| `/onde-atendo/` | `src/pages/onde-atendo.astro` |
| `/duvidas-frequentes/` | `src/pages/duvidas-frequentes.astro` |
| `/contato/` | `src/pages/contato.astro` |
| `/privacidade/` | `src/pages/privacidade.astro` (**rascunho, revisar**) |

## Fotos

Hoje o site mostra placeholders no formato final. Para trocar, coloque a foto em `src/assets/fotos/`, importe na página e passe para o componente `Foto`:

```astro
---
import retrato from '../assets/fotos/retrato.jpg';
---
<Foto src={retrato} formato="retrato" alt="..." legenda="..." />
```

O Astro gera as versões otimizadas (WebP, vários tamanhos) no build.

Fotos necessárias para a sessão:

1. Retrato principal, olhando para a câmera ou levemente fora dela, expressão tranquila (vertical 4:5) — Home
2. Retrato mais próximo (vertical 4:5) — Sobre
3. Lucas no consultório / sentado à mesa em situação natural (horizontal 3:2) — Home
4. Extras: detalhes do ambiente, simulação de conversa sem paciente identificável

## Medição de acessos

- **Umami** (sem cookies): crie o site em [cloud.umami.is](https://cloud.umami.is), copie o *Website ID* para `analytics.umamiId`. Só conta acessos em `lucasreumatologista.com`.
- **Google Analytics 4**: crie uma propriedade, copie o ID `G-XXXXXXXXXX` para `analytics.googleAnalyticsId`. Ele só carrega depois que a pessoa aceita na barra de cookies (LGPD). Com o ID vazio, a barra não aparece.
- Eventos enviados aos dois: `whatsapp`, `como-chegar`, `instagram`, `email` (no GA: `clique_whatsapp` etc., com o parâmetro `origem` dizendo qual botão foi clicado). No GA, marque `clique_whatsapp` como **evento principal** (conversão).

## Publicação (GitHub Pages)

Cada `push` na branch `main` publica o site automaticamente (`.github/workflows/deploy.yml`).

Na primeira vez: no GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Sem domínio próprio, o site fica em `https://raimedeiros.github.io/Lucas-santana/` (com `noindex`, para o Google não indexar a prévia).

### Quando comprar o domínio `lucasreumatologista.com`

1. No registrador, crie os registros DNS:
   - `A` para `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` para `www` → `raimedeiros.github.io`
2. Crie o arquivo `public/CNAME` contendo só `lucasreumatologista.com` e faça push. Isso muda o site para a raiz do domínio e remove o `noindex`.
3. Em **Settings → Pages**, informe o domínio e marque **Enforce HTTPS** quando liberar.
4. Cadastre o domínio no Google Search Console e envie `https://lucasreumatologista.com/sitemap-index.xml`.
5. Atualize o link no Instagram e no Perfil da Empresa no Google.

## Outros

- `npm run og` regenera `public/og-image.png` (imagem de compartilhamento) e o `apple-touch-icon.png` a partir dos SVGs da marca.
- Coordenadas do mapa no JSON-LD (`clinica.latitude/longitude`) são aproximadas: conferir com o pino do Perfil do Google.
