// Gera public/og-image.png (1200×630) e o apple-touch-icon com fundo off-white.
// Uso: npm run og
import sharp from 'sharp';

const fundo = { r: 247, g: 247, b: 245, alpha: 1 };

const assinatura = await sharp('src/assets/marca/assinatura-vertical-crm-cor.svg', { density: 300 })
  .resize({ height: 430 })
  .png()
  .toBuffer();

const faixa = Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="12"><rect width="1200" height="12" fill="#245A66"/></svg>',
);

await sharp({ create: { width: 1200, height: 630, channels: 4, background: fundo } })
  .composite([
    { input: assinatura, gravity: 'center' },
    { input: faixa, top: 618, left: 0 },
  ])
  .png()
  .toFile('public/og-image.png');

await sharp('src/assets/marca/simbolo-cor.svg', { density: 300 })
  .resize(140, 140)
  .extend({ top: 20, bottom: 20, left: 20, right: 20, background: fundo })
  .flatten({ background: fundo })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('og-image.png e apple-touch-icon.png gerados');
