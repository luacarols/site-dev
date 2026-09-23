# Modelos de site

Página simples para enviar a clientes em potencial, mostrando os 5 tipos de site, como cada um é organizado, um esboço do visual e a faixa de valor.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar versão para publicar

```bash
npm run build
```

A pasta `dist/` pode ser publicada em qualquer hospedagem estática (Netlify, Vercel, GitHub Pages).

## Editar conteúdo

Textos, etapas e valores ficam em `src/data.js`. Os desenhos (wireframes) de cada bloco ficam em `src/Wireframe.jsx`.

## Publicar na Vercel

1. Crie uma conta em https://vercel.com usando **Continue with GitHub**.
2. Clique em **Add New… → Project** e importe o repositório `site-dev` (autorize o acesso ao repositório se for pedido).
3. A Vercel detecta **Vite** sozinha. Confira: Build Command `npm run build`, Output Directory `dist`.
4. Em **Branch**, o deploy de produção usa a branch padrão (`main`). Faça o merge desta branch na `main` antes, ou troque a branch em *Settings → Git → Production Branch*.
5. Clique em **Deploy**. Em ~1 minuto você recebe um link `nome-do-projeto.vercel.app`.
6. (Opcional) Domínio próprio: *Settings → Domains → Add* e siga as instruções de DNS.

Cada novo `git push` na branch de produção publica a nova versão automaticamente.
