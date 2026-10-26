# Landing page Botanique Residence – Josué Oliveira

## Rodar no computador
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Como colocar as imagens
1. Salve o arquivo em `public/images/` (ex.: `public/images/josue.jpg`).
2. Abra `lib/config.ts` e troque o `null` pelo caminho, **sem** a palavra `public`:
   ```ts
   josue: "/images/josue.jpg",
   ```
3. Fotos do lazer: no mesmo arquivo, em `lazer`, preencha o campo `foto` de cada item.

Dicas: use .jpg ou .webp, nomes sem espaço e sem acento, até ~500 KB por foto. O Next.js otimiza o resto.

## Vídeo do corretor
Em `lib/config.ts`, no bloco `video`, troque `url: null` pelo link do YouTube (normal ou Shorts):
`url: "https://youtube.com/shorts/SEU-ID",`
Gravou deitado? Mude `vertical: true` para `false`.

## Central de vendas
Textos e mensagem de agendamento ficam no bloco `central` de `lib/config.ts`.
Para mostrar o endereço com número, preencha `enderecoCompleto`.

## Planilha de leads (Google Sheets)
1. Na planilha: Extensões > Apps Script. Apague o que estiver lá e cole o conteúdo de `google-apps-script.js`.
2. Troque o `TOKEN` por uma senha sua e salve.
3. Implantar > Nova implantação > tipo "App da Web". Executar como: Eu. Quem pode acessar: Qualquer pessoa. Autorize.
4. Copie a URL do app da Web (termina em /exec).
5. Na Vercel, cadastre `SHEETS_WEBHOOK_URL` (a URL) e `SHEETS_TOKEN` (a senha) e faça um novo deploy.

## Pixel do Meta e Google Ads
Cadastre as variáveis do arquivo `.env.example` na Vercel (Settings > Environment Variables) e faça um novo deploy.
Os cliques no WhatsApp e o envio do formulário disparam o evento `Lead` no Meta e a conversão do Google Ads.

## Publicar na Vercel
Suba a pasta para um repositório no GitHub e importe em vercel.com > Add New > Project. Depois conecte seu domínio em Settings > Domains.
