// Dados que aparecem em mais de uma página. Altere aqui e o site inteiro acompanha.

export const site = {
  dominio: 'https://lucasreumatologista.com',
  nome: 'Lucas Santana',
  especialidade: 'Reumatologista',
  crm: 'CRM-DF 27.545',
  rqeReumatologia: 'RQE 22.478',
  rqeClinicaMedica: 'RQE 24.766',

  whatsapp: {
    numero: '5561999190211',
    exibicao: '(61) 99919-0211',
    secretaria: 'Scheila',
    mensagem:
      'Olá! Encontrei o Dr. Lucas Santana pelo site e gostaria de informações para agendar uma consulta particular de Reumatologia.',
  },

  email: 'lucasreumato@gmail.com',

  instagram: {
    usuario: '@lucasreumato',
    url: 'https://www.instagram.com/lucasreumato/',
  },

  // Link "ver todas as avaliações" do Perfil da Empresa no Google. Vazio = link oculto.
  googlePerfil: '',

  clinica: {
    nome: 'Clínica Mirindiba Especialidades Médicas',
    predio: 'Golden Office Corporate',
    logradouro: 'SGAN 915, Módulo G — Bloco C, Sala 211',
    bairro: 'Asa Norte',
    cidade: 'Brasília',
    uf: 'DF',
    cep: '70790-157',
    // Coordenadas aproximadas do SGAN 915 (conferir com o pino do Perfil do Google).
    latitude: -15.7621,
    longitude: -47.9017,
  },

  convenios: [
    'Hospital Brasília — Unidade Águas Claras',
    'Hospital Brasília — Unidade Ceilândia',
    'Espaço Saúde Unimed Brasília',
  ],

  // IDs de medição. Vazio = o script não é carregado.
  analytics: {
    umamiId: '',
    umamiSrc: 'https://cloud.umami.is/script.js',
    googleAnalyticsId: 'G-XHMZ32YD9F',
  },
};

// Avaliações do Google (Res. CFM 2.336/2023): 3 a 5, sóbrias, só primeiro nome ou iniciais.
// Lista vazia = seção oculta.
export const avaliacoes: { texto: string; autor: string }[] = [];

export const whatsappUrl = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(site.whatsapp.mensagem)}`;

const enderecoBusca = `${site.clinica.nome}, ${site.clinica.logradouro}, ${site.clinica.bairro}, ${site.clinica.cidade} - ${site.clinica.uf}, ${site.clinica.cep}`;
export const comoChegarUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoBusca)}`;
export const mapaEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(enderecoBusca)}&output=embed`;

/** Caminho interno respeitando o base do Astro (GitHub Pages em subpasta). */
export function link(caminho: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${caminho}`;
}
