# Mundo Animal — Website institucional premium (versão 2)

Site React + Vite, responsivo, com páginas Início, Produtos, Sobre nós e Contato. Identidade azul-marinho, azul claro e branco. Contém busca e filtro de categorias, WhatsApp, Instagram, Google Maps e navegação com React Router.

## Rodar e publicar

```bash
npm install
npm run dev
npm run build
```

**Cloudflare Pages:** preset `React (Vite)`, build `npm run build`, diretório de saída `dist`, raiz `/`, branch `main`. O arquivo `public/_redirects` fornece fallback para as rotas internas React.

## Atualizar o projeto antigo usando apenas iPhone e a-Shell

1. Baixe o arquivo `mundo-animal-v2-atualizacao.zip` e mova-o pelo app Arquivos para `No Meu iPhone > a-Shell > Documents`.
2. Abra a-Shell e entre na pasta do projeto antigo: `cd mundo-animal` (se estiver em Documents).
3. Descompacte a atualização por cima do projeto, preservando `.git`:
   `python3 -m zipfile -e ../mundo-animal-v2-atualizacao.zip .`
4. Prepare as alterações: `lg2 add .`
5. Registre: `lg2 commit -m "Novo visual Mundo Animal"`
6. Envie: `lg2 push origin master:main` (se a branch local continua `master`, como no procedimento anterior). Se solicitar Password, use um token GitHub com autorização apenas para esse repositório. Não compartilhe o token.
7. Na Cloudflare Pages, a integração com GitHub deve iniciar nova compilação automaticamente. Verifique a aba de implantações. Se não houver projeto na conta Cloudflare atual, identifique o projeto e a conta proprietária antes de criar outro.

## Dados e fotos

A marca visual é provisória, construída em texto/ícone, até receber o logotipo oficial em boa resolução. Fotos animais são ilustrativas e carregadas de URLs externas do Unsplash; antes da entrega comercial, substitua por imagens licenciadas adequadas, preferencialmente fotos autorizadas da loja. Nenhum produto, marca, preço, horário ou atendimento clínico foi inventado. Os produtos são **categorias demonstrativas**, não anúncios de estoque real. O endereço e os contatos foram fornecidos pelo solicitante e confirmados com fontes públicas; confira com o estabelecimento antes de publicar para o cliente.

## Substituições fáceis

- Contatos e categorias: `src/data/site.js`
- Marca provisória: `src/components/Logo.jsx`
- Fotos ilustrativas: `src/data/site.js` (`photos`)
- Páginas: `src/pages`
- Estilos: `src/styles.css`

## Observações

O Google Maps pode solicitar autorização de cookies. Os links `https://wa.me/5522998659299`, `https://www.instagram.com/cra_mundo_animal/` e o link do perfil no Google Maps abrem em nova aba.
