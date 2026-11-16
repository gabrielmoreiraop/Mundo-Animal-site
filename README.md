# Mundo Animal — Site institucional

Projeto completo em **React + Vite + Tailwind CSS + Lucide React**.

## Executar localmente

Requer Node.js 18+.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Criar versão de produção

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`. Publicar com fallback de rotas SPA para `/index.html` (Vercel / Netlify / Cloudflare Pages, por exemplo).

## Organização

- `src/pages/` — Início, Produtos, Sobre nós e Contato
- `src/components/` — cabeçalho, rodapé, botões, cards, redes sociais e botão flutuante
- `src/data/site.js` — dados comerciais e categorias demonstrativas
- `src/style.css` e `tailwind.config.js` — identidade e estilos

## Atenção antes de publicar

1. **Logotipo:** como não foi recebido arquivo de logotipo junto a este pedido, foi criada uma assinatura tipográfica provisória com ícone de pata. Para usar o logo real, coloque o arquivo em `public/images/logo-mundo-animal.png` e adapte `src/components/Brand.jsx` para exibi-lo.
2. **Fotografias:** imagens editoriais ilustrativas externas (Unsplash) e não fotos da empresa, do estoque nem postagens reais. Substitua pelas imagens autorizadas antes da publicação final. Dependem de conexão à internet.
3. **Catálogo:** cards demonstram categorias, não produtos efetivamente em estoque. Não foram criados preços, marcas ou medicamentos específicos.
4. **Endereço:** Google Maps usa o endereço fornecido como busca; confirme o pin da loja antes de publicar.
5. **Hospedagem:** não foi contratada hospedagem nem configurado domínio. O código está preparado para build e implantação.
6. **Instagram:** a galeria usa imagens ilustrativas, não integração com feed oficial; link aponta para o perfil informado.
7. **SEO:** título, descrição, Open Graph e idioma pt-BR configurados; uma implementação avançada pode incluir sitemap, domínio canônico e schema.org após definir a URL oficial.

Contato e endereço conforme fornecidos pelo solicitante.
