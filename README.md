# Lucas Santana · Reumatologista — site

Site de [lucasreumatologista.com](https://lucasreumatologista.com), feito com [Astro](https://astro.build): gera HTML estático, sem framework no navegador.

Objetivo: levar quem procura um reumatologista em Brasília até o WhatsApp da Scheila para agendar a consulta particular.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (ex.: `http://localhost:4321/`).

## Onde editar

| O quê | Onde |
| --- | --- |
| CRM, RQE, WhatsApp, mensagem do WhatsApp, endereço, convênios, Instagram, e-mail | `src/site.config.ts` |
| ID do Google Analytics (e do Umami, se um dia for usado) | `src/site.config.ts` → `analytics` |
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

Em `src/assets/fotos/`:

| Arquivo | Onde aparece |
| --- | --- |
| `retrato-principal.jpg` | Home (topo) |
| `retrato-sobre.jpg` | Sobre (topo) |

Versões provisórias (853×1280 px, comprimidas). Para trocar por versões melhores, basta substituir o arquivo mantendo o nome; o Astro gera WebP em vários tamanhos no build. O enquadramento é ajustado pela prop `posicao` do componente `Foto` (ex.: `posicao="center 22%"`).

Para uma foto nova numa página:

```astro
---
import foto from '../assets/fotos/nome.jpg';
---
<Foto src={foto} formato="retrato" alt="..." legenda="..." />
```

Ainda faltam (para a próxima sessão): Lucas no consultório / sentado à mesa em situação natural (horizontal 3:2), detalhes do ambiente, simulação de conversa sem paciente identificável. A seção "Antes da especialidade, existe uma história" da Home pode receber a foto do consultório.

## Medição de acessos

- **Google Analytics 4** (ativo, `G-XHMZ32YD9F`): ID em `analytics.googleAnalyticsId`. Ele só carrega depois que a pessoa aceita na barra de cookies (LGPD). Com o ID vazio, a barra não aparece.
- **Umami** (desativado): o código já suporta; para ligar, preencha `analytics.umamiId` e atualize a Política de Privacidade.
- Eventos enviados: `whatsapp`, `como-chegar`, `instagram`, `email` (no GA: `clique_whatsapp` etc., com o parâmetro `origem` dizendo qual botão foi clicado). No GA, marque `clique_whatsapp` como **evento principal** (conversão).

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
