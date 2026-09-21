# Portfólio — Gabriela Godoy

Site de portfólio pessoal em HTML, CSS e JavaScript puro, pronto para publicar gratuitamente no GitHub Pages.

## Novidades desta versão

- **Paleta rosa** no lugar do âmbar/laranja anterior
- **Sua foto** na seção "About" (arquivo `img/profile.jpg`)
- **Seção "My QA team"** com seus dois gatinhos (`img/cat-tabby.jpg` e `img/cat-black.jpg`) — um toque pessoal e bem comum em portfólios de dev
- **Botão de idioma (EN / PT)** no menu, que troca todo o texto do site sem recarregar a página

### Como editar as traduções

Todo o texto que muda de idioma está centralizado no início do arquivo `script.js`, no objeto `translations`. Cada chave tem uma versão `en` e uma `pt`, por exemplo:

```js
'hero.btnPrimary': { en: 'See my work', pt: 'Ver meu trabalho' },
```

Para mudar qualquer texto, edite ali — não precisa mexer no `index.html`. O bloco de código no topo do site (hero) fica sempre em inglês de propósito, porque representa um trecho de código real.

### Sobre as legendas dos gatinhos

Coloquei legendas "de brincadeira" (`Senior Napper` / `Chief Distraction Officer`, e as versões em português) já que não sei os nomes deles — se quiser trocar pelos nomes reais, é só editar `pets.cat1` e `pets.cat2` no `script.js`.

## Favicon

Adicionei um favicon (o iconezinho que aparece na aba do navegador) com um monograma "G" rosa, no mesmo estilo do banner do LinkedIn. Os arquivos ficam na raiz (`favicon.ico`) e dentro de `img/` (várias versões em PNG para diferentes dispositivos, incluindo tela de início de celular). Não precisa fazer nada além de subir os arquivos — já está tudo referenciado no `index.html`.

## Antes de publicar

1. **Troque o e-mail e o GitHub**: abra `index.html` e procure por:
   - `your-email@example.com` → seu e-mail real
   - `your-username` (no link do GitHub) → seu usuário do GitHub

2. **Substitua os projetos placeholder**: na seção `<!-- PROJECTS -->` do `index.html` há 3 cards de exemplo. Troque nome, descrição, tags e links pelos seus projetos reais.

   Ideias de projetos pessoais simples (não dependem da JA Web):
   - Um clone de layout de um site que você admira (ex: recriar a home de uma marca, só de olho, sem copiar código)
   - Uma landing page fictícia (ex: para uma cafeteria, uma academia, um evento)
   - Um site WordPress simples com tema customizado, hospedado em WordPress.com grátis
   - Uma calculadora ou to-do list em JavaScript puro
   - Uma página de currículo/portfólio responsiva (pode até ser uma versão anterior deste mesmo site)

   Cada projeto no GitHub, mesmo pequeno, conta muito mais do que parece para recrutadores — eles mostram código real, histórico de commits e organização.

3. **Confira o texto do "Sobre"** e ajuste se quiser um tom mais pessoal.

## Como publicar no GitHub Pages (grátis)

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver).
2. Crie um novo repositório público. Se quiser que o site fique em `seu-usuario.github.io` diretamente, nomeie o repositório exatamente `seu-usuario.github.io`. Se preferir um nome diferente (ex: `portfolio`), o site ficará em `seu-usuario.github.io/portfolio`.
3. Envie **todos** os arquivos e pastas desta pasta (`index.html`, `style.css`, `script.js`, `README.md` e a pasta `img/` inteira, com as 3 fotos) para o repositório, mantendo a mesma estrutura de pastas. Duas formas:
   - **Pela interface web**: no repositório, clique em "Add file" → "Upload files" e arraste os três arquivos.
   - **Pelo Git** (recomendado, mostra domínio de versionamento):
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio site"
     git branch -M main
     git remote add origin https://github.com/seu-usuario/seu-repositorio.git
     git push -u origin main
     ```
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/root`, depois clique em **Save**.
6. Em alguns minutos, o site estará no ar em `https://seu-usuario.github.io/` (ou `/seu-repositorio/`).

## Domínio próprio (opcional, futuro)

Quando tiver orçamento, dá para apontar um domínio próprio (ex: `gabrielagodoy.dev`) para o GitHub Pages sem trocar de hospedagem — é só configurar um arquivo `CNAME` e o DNS do domínio. Não é urgente: o link gratuito do GitHub Pages já é totalmente profissional para usar no LinkedIn e currículo.

## Estrutura dos arquivos

```
portfolio/
├── index.html                    → estrutura e conteúdo do site
├── style.css                     → todo o visual (cores, tipografia, responsividade)
├── script.js                     → menu mobile, idioma (EN/PT) e pequenas interações
├── favicon.ico                   → ícone da aba do navegador
├── site.webmanifest              → configuração de ícone para celular/PWA
├── README.md                     → este arquivo
└── img/
    ├── profile.jpg                → sua foto (seção About)
    ├── cat-tabby.jpg               → gatinho 1 (seção QA team)
    ├── cat-black.jpg               → gatinho 2 (seção QA team)
    ├── favicon-16x16.png           → favicon pequeno
    ├── favicon-32x32.png           → favicon padrão
    ├── apple-touch-icon.png        → ícone ao salvar o site na tela do iPhone
    ├── android-chrome-192x192.png  → ícone Android
    └── android-chrome-512x512.png  → ícone Android (alta resolução)
```

**Importante ao subir pela interface web do GitHub**: o upload de arquivos do GitHub não recria pastas automaticamente ao arrastar. Para manter a pasta `img/`, arraste a pasta inteira (não os arquivos soltos) na área de upload — a maioria dos navegadores aceita arrastar pastas. Se não funcionar, crie a pasta `assets` direto pelo GitHub (Add file → Create new file → digite `img/profile.jpg` no nome, o GitHub cria a pasta sozinho) e suba cada imagem separadamente.
