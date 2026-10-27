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
    // Mensagem neutra: o WhatsApp atende consulta particular e teleconsulta.
    mensagem: 'Olá, gostaria de agendar uma consulta com o Dr. Lucas Santana.',
  },

  email: 'lucasreumato@gmail.com',

  instagram: {
    usuario: '@lucasreumato',
    url: 'https://www.instagram.com/lucasreumato/',
  },

  // Perfil da Empresa no Google (link "Ver avaliações no Google").
  googlePerfil: 'https://share.google/qqPmSrmZ2p4yHqbbC',
  // Conferir de tempos em tempos no Perfil do Google e atualizar aqui (também vai para o JSON-LD).
  avaliacoesGoogle: { nota: 5, total: 9 },

  // Fatos confirmados pelo Dr. Lucas.
  consulta: {
    valor: 500,
    valorExibicao: 'R$ 500',
    idadeMinima: 18,
  },

  // TODO(confirmar com o cliente): o site diz "SGAN 915", o Perfil do Google diz "SGAN 916".
  // O logradouro abaixo alimenta: endereço da página Onde Atendo, rodapé, capa do mapa, mapa
  // incorporado e link "Como chegar" (via enderecoBusca) e o JSON-LD (Base.astro). A meta
  // description de onde-atendo.astro repete "SGAN 915" à mão. Coordenadas: ver latitude/longitude.
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

  // Atendimento por plano: o site não lista planos; a cobertura é verificada por cada unidade.
  convenios: [
    {
      nome: 'Hospital Brasília — Unidades Águas Claras e Ceilândia',
      central: 'Central de agendamento Rede Américas',
      telefone: '+551140200057',
      telefoneExibicao: '(11) 4020-0057',
      portal: 'https://hac.portaldeagendamento.com.br/',
    },
    // TODO: contato do Espaço Saúde Unimed pendente com o cliente (telefone e/ou link de agendamento).
    { nome: 'Espaço Saúde Unimed Brasília' },
  ] as { nome: string; central?: string; telefone?: string; telefoneExibicao?: string; portal?: string }[],

  // IDs de medição. Vazio = o script não é carregado.
  analytics: {
    umamiId: '',
    umamiSrc: 'https://cloud.umami.is/script.js',
    googleAnalyticsId: 'G-XHMZ32YD9F',
  },
};

export const whatsappUrl = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(site.whatsapp.mensagem)}`;

const enderecoBusca = `${site.clinica.nome}, ${site.clinica.logradouro}, ${site.clinica.bairro}, ${site.clinica.cidade} - ${site.clinica.uf}, ${site.clinica.cep}`;
export const comoChegarUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoBusca)}`;
export const mapaEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(enderecoBusca)}&output=embed`;

/** Caminho interno respeitando o base do Astro (GitHub Pages em subpasta). */
export function link(caminho: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${caminho}`;
}
