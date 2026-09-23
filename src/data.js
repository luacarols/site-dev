// Cada modelo tem páginas (telas do wireframe) e as etapas do fluxo visual.
// O campo `block` liga a etapa ao bloco correspondente no wireframe.

export const models = [
  {
    id: 'cartao',
    number: 1,
    name: 'Cartão de visita digital',
    subtitle: 'Portfólio simples',
    summary:
      'Página única, direto ao ponto. Ideal para quem só precisa "existir" na internet.',
    idealFor: 'Profissionais autônomos que precisam de um link para mandar aos clientes.',
    price: 'R$ 400 – R$ 800',
    support: 'R$ 50 – R$ 100/mês',
    supportNote: 'A combinar conforme o que o site precisar depois de pronto.',
    pages: [
      {
        name: 'Página única',
        blocks: ['nav-mini', 'hero-photo', 'about', 'list', 'contact', 'footer'],
      },
    ],
    flow: [
      { block: 'nav-mini', title: 'Barra de navegação', text: 'Geralmente nem existe, ou só tem 2–3 links internos (ex.: "Sobre" e "Contato").' },
      { block: 'hero-photo', title: 'Banner', text: 'Foto profissional grande + nome e profissão em destaque.' },
      { block: 'about', title: 'Apresentação', text: 'Um parágrafo curto contando quem é a pessoa e o que ela faz.' },
      { block: 'list', title: 'Lista de serviços', text: 'Tópicos simples, sem muito detalhe.' },
      { block: 'contact', title: 'Contato', text: 'Telefone, e-mail e ícones das redes sociais.' },
      { block: 'footer', title: 'Rodapé', text: 'Nome do negócio + ano.' },
    ],
  },
  {
    id: 'vitrine',
    number: 2,
    name: 'Site vitrine',
    subtitle: 'Com integração de canais',
    tag: 'Mais pedido',
    summary:
      'Passa credibilidade e ainda permite falar direto com o cliente pelo WhatsApp/Instagram.',
    idealFor: 'Pequenos negócios e prestadores de serviço que atendem pelo WhatsApp.',
    price: 'R$ 800 – R$ 1.800',
    support: 'R$ 80 – R$ 150/mês',
    pages: [
      {
        name: 'Home',
        blocks: ['nav', 'hero-cta', 'about', 'cards', 'features', 'testimonials', 'footer-full'],
        floating: 'whatsapp',
      },
    ],
    flow: [
      { block: 'nav', title: 'Barra de navegação', text: 'Home, Sobre, Serviços, Contato.' },
      { block: 'hero-cta', title: 'Banner', text: 'Imagem ou vídeo de destaque + uma frase forte + botão de ação (ex.: "Fale Comigo").' },
      { block: 'about', title: 'Apresentação', text: 'Quem é o negócio e por que confiar nele.' },
      { block: 'cards', title: 'Cards de serviços/produtos', text: 'Cada um com foto, título e descrição curta.' },
      { block: 'features', title: 'Diferenciais', text: '"Por que me escolher" em tópicos ou ícones.' },
      { block: 'testimonials', title: 'Depoimentos', text: 'O que clientes já disseram.' },
      { block: 'whatsapp', title: 'Botão flutuante', text: 'Ícone do WhatsApp fixo no canto da tela, sempre visível.' },
      { block: 'footer-full', title: 'Rodapé', text: 'Contato completo + redes sociais.' },
    ],
  },
  {
    id: 'institucional',
    number: 3,
    name: 'Institucional',
    subtitle: 'Com catálogo/serviços detalhados',
    summary:
      'Para quem tem vários serviços ou produtos e quer uma página exclusiva para cada um.',
    idealFor: 'Empresas com vários serviços que querem aparecer no Google.',
    price: 'R$ 1.800 – R$ 3.500',
    support: 'R$ 150 – R$ 250/mês',
    pages: [
      {
        name: 'Home',
        blocks: ['nav-sub', 'hero-rich', 'about', 'cards', 'testimonials', 'footer-full'],
      },
      {
        name: 'Página de serviço',
        blocks: ['nav-sub', 'service-page', 'footer-full'],
      },
      {
        name: 'Blog',
        blocks: ['nav-sub', 'blog', 'footer-full'],
      },
    ],
    flow: [
      { block: 'nav-sub', title: 'Barra de navegação', text: 'Home, Sobre, Serviços (com submenu, um item por serviço), Blog, Contato.' },
      { block: 'hero-rich', title: 'Banner', text: 'Igual ao modelo vitrine, mas geralmente com mais elementos visuais.' },
      { block: 'about', title: 'Apresentação', text: 'A história e a proposta de valor do negócio.' },
      { block: 'service-page', title: 'Páginas internas', text: 'Uma para cada serviço, com fotos, descrição completa e valores (se quiser mostrar).', page: 1 },
      { block: 'blog', title: 'Blog', text: 'Espaço para postar textos que ajudam a aparecer no Google.', page: 2 },
      { block: 'testimonials', title: 'Depoimentos', text: 'O que clientes já disseram.' },
      { block: 'footer-full', title: 'Rodapé completo', text: 'Contato, endereço, redes sociais e links para todas as páginas.' },
    ],
  },
  {
    id: 'landing',
    number: 4,
    name: 'Landing page',
    subtitle: 'De conversão',
    summary:
      'Página enxuta, feita para um objetivo único: vender um produto, captar contatos para uma promoção etc. Não é para "navegar", é para convencer e fazer a pessoa agir.',
    idealFor: 'Lançamentos, promoções e campanhas com prazo.',
    price: 'R$ 1.200 – R$ 2.500',
    support: 'Combinada à parte',
    supportNote: 'Costuma acompanhar a duração da campanha.',
    pages: [
      {
        name: 'Página única',
        blocks: ['no-nav', 'hero-impact', 'pain', 'solution', 'benefits', 'proof', 'faq', 'cta-final'],
      },
    ],
    flow: [
      { block: 'no-nav', title: 'Sem barra de navegação', text: 'De propósito, para não distrair o visitante.' },
      { block: 'hero-impact', title: 'Banner', text: 'A frase de maior impacto da página + botão de ação bem visível.' },
      { block: 'pain', title: 'A dor do cliente', text: '"Você já passou por isso?"' },
      { block: 'solution', title: 'A solução', text: 'Como o produto/serviço resolve.' },
      { block: 'benefits', title: 'Benefícios', text: 'Em tópicos, o que a pessoa ganha.' },
      { block: 'proof', title: 'Prova social', text: 'Depoimentos, números, resultados.' },
      { block: 'faq', title: 'Perguntas frequentes', text: 'Respostas para as dúvidas que impedem a compra.' },
      { block: 'cta-final', title: 'Botão de ação final', text: 'Repetido, para quem rolou a página toda.' },
    ],
  },
];
