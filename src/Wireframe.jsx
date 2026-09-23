// Wireframes esquemáticos: formas simples que mostram a estrutura de cada bloco.

const Line = ({ w = '100%', h = 6, strong }) => (
  <span className={`wf-line${strong ? ' strong' : ''}`} style={{ width: w, height: h }} />
);
const Img = ({ h = 40, round, style }) => (
  <span className={`wf-img${round ? ' round' : ''}`} style={{ height: h, ...style }} />
);
const Btn = ({ w = 56, big }) => <span className={`wf-btn${big ? ' big' : ''}`} style={{ width: w }} />;
const Dots = ({ n = 3 }) => (
  <span className="wf-dots">
    {Array.from({ length: n }, (_, i) => <span key={i} />)}
  </span>
);
const Row = ({ children, gap = 6, align, className = '' }) => (
  <div className={`wf-row ${className}`} style={{ gap, alignItems: align }}>{children}</div>
);
const Col = ({ children, gap = 4, style }) => (
  <div className="wf-col" style={{ gap, ...style }}>{children}</div>
);
const Links = ({ items }) => (
  <Row gap={8}>
    {items.map((t) => <span key={t} className="wf-link">{t}</span>)}
  </Row>
);
const Logo = () => <span className="wf-logo" />;

const Card = ({ price }) => (
  <Col gap={4} style={{ flex: 1 }}>
    <Img h={34} />
    <Line w="80%" strong />
    {price ? <Line w="40%" /> : <><Line /><Line w="70%" /></>}
  </Col>
);

const Quote = () => (
  <Col gap={4} style={{ flex: 1 }} >
    <div className="wf-quote">
      <Line /><Line w="80%" />
      <Row gap={4} align="center"><Img h={12} round style={{ width: 12 }} /><Line w="40%" /></Row>
    </div>
  </Col>
);

const blocks = {
  'nav-mini': () => (
    <Row className="spread" align="center"><Logo /><Links items={['Sobre', 'Contato']} /></Row>
  ),
  nav: () => (
    <Row className="spread" align="center"><Logo /><Links items={['Home', 'Sobre', 'Serviços', 'Contato']} /></Row>
  ),
  'nav-sub': () => (
    <Row className="spread" align="center">
      <Logo />
      <Row gap={8} align="flex-start">
        <span className="wf-link">Home</span>
        <span className="wf-link">Sobre</span>
        <span className="wf-link has-sub">
          Serviços ▾
          <span className="wf-submenu"><span>Serviço A</span><span>Serviço B</span><span>Serviço C</span></span>
        </span>
        <span className="wf-link">Blog</span>
        <span className="wf-link">Contato</span>
      </Row>
    </Row>
  ),
  'nav-shop': () => (
    <Row className="spread" align="center">
      <Logo />
      <Links items={['Roupas', 'Acessórios', 'Ofertas']} />
      <span className="wf-cart">🛒<b>2</b></span>
    </Row>
  ),
  'no-nav': () => (
    <Row className="center" align="center"><Logo /><span className="wf-note">sem menu</span></Row>
  ),

  'hero-photo': () => (
    <Row gap={10} align="center">
      <Img h={70} round style={{ width: 70, flex: 'none' }} />
      <Col gap={5} style={{ flex: 1 }}>
        <Line w="70%" h={10} strong />
        <Line w="45%" />
      </Col>
    </Row>
  ),
  'hero-cta': () => (
    <div className="wf-hero">
      <Col gap={6} style={{ alignItems: 'center' }}>
        <Line w="65%" h={10} strong />
        <Line w="45%" />
        <Btn w={70} />
      </Col>
    </div>
  ),
  'hero-rich': () => (
    <div className="wf-hero">
      <Row gap={10} align="center">
        <Col gap={6} style={{ flex: 1.2 }}>
          <Line w="85%" h={10} strong />
          <Line w="60%" />
          <Row gap={6}><Btn w={56} /><span className="wf-btn ghost" style={{ width: 50 }} /></Row>
        </Col>
        <Col gap={4} style={{ flex: 1 }}>
          <Img h={34} />
          <Row gap={4}><Img h={20} style={{ flex: 1 }} /><Img h={20} style={{ flex: 1 }} /></Row>
        </Col>
      </Row>
      <Dots />
    </div>
  ),
  'hero-impact': () => (
    <div className="wf-hero impact">
      <Col gap={7} style={{ alignItems: 'center' }}>
        <Line w="85%" h={13} strong />
        <Line w="55%" />
        <Btn w={110} big />
      </Col>
    </div>
  ),
  'hero-promo': () => (
    <div className="wf-hero promo">
      <Row gap={10} align="center">
        <Col gap={5} style={{ flex: 1 }}>
          <span className="wf-badge">-30%</span>
          <Line w="80%" h={10} strong />
          <Btn w={60} />
        </Col>
        <Img h={56} style={{ flex: 1 }} />
      </Row>
      <Dots />
    </div>
  ),

  about: () => (
    <Col gap={4}>
      <Line w="30%" strong />
      <Line /><Line /><Line w="75%" />
    </Col>
  ),
  list: () => (
    <Col gap={5}>
      <Line w="30%" strong />
      {['60%', '50%', '55%'].map((w, i) => (
        <Row key={i} gap={6} align="center"><span className="wf-bullet" /><Line w={w} /></Row>
      ))}
    </Col>
  ),
  contact: () => (
    <Col gap={5}>
      <Line w="25%" strong />
      <Row gap={6} align="center"><span className="wf-emoji">📞</span><Line w="35%" /></Row>
      <Row gap={6} align="center"><span className="wf-emoji">✉️</span><Line w="45%" /></Row>
      <Row gap={6}>{[0, 1, 2].map((i) => <Img key={i} h={14} round style={{ width: 14 }} />)}</Row>
    </Col>
  ),
  cards: () => (
    <Col gap={6}>
      <Line w="30%" strong />
      <Row gap={8}><Card /><Card /><Card /></Row>
    </Col>
  ),
  features: () => (
    <Col gap={6}>
      <Line w="35%" strong />
      <Row gap={8}>
        {['⭐', '⚡', '🤝', '✅'].map((e) => (
          <Col key={e} gap={4} style={{ flex: 1, alignItems: 'center' }}>
            <span className="wf-icon">{e}</span>
            <Line w="80%" />
          </Col>
        ))}
      </Row>
    </Col>
  ),
  testimonials: () => (
    <Col gap={6}>
      <Line w="30%" strong />
      <Row gap={8}><Quote /><Quote /></Row>
    </Col>
  ),
  footer: () => (
    <Row className="center" align="center"><Line w="35%" /></Row>
  ),
  'footer-full': () => (
    <Row gap={10}>
      {[0, 1, 2].map((i) => (
        <Col key={i} gap={4} style={{ flex: 1 }}>
          <Line w="50%" strong /><Line w="80%" /><Line w="65%" />
        </Col>
      ))}
    </Row>
  ),
  'footer-shop': () => (
    <Row gap={10}>
      {['Trocas', 'Entrega', 'Contato'].map((t) => (
        <Col key={t} gap={4} style={{ flex: 1 }}>
          <span className="wf-label">{t}</span><Line w="80%" /><Line w="60%" />
        </Col>
      ))}
    </Row>
  ),

  'service-page': () => (
    <Col gap={8}>
      <span className="wf-crumb">Serviços › Serviço A</span>
      <Row gap={10}>
        <Col gap={4} style={{ flex: 1 }}>
          <Img h={60} />
          <Row gap={4}><Img h={16} style={{ flex: 1 }} /><Img h={16} style={{ flex: 1 }} /><Img h={16} style={{ flex: 1 }} /></Row>
        </Col>
        <Col gap={5} style={{ flex: 1.2 }}>
          <Line w="70%" h={10} strong />
          <Line /><Line /><Line w="80%" /><Line /><Line w="60%" />
          <span className="wf-price">a partir de R$ ••</span>
        </Col>
      </Row>
    </Col>
  ),
  blog: () => (
    <Col gap={8}>
      <Line w="20%" h={9} strong />
      {[0, 1, 2].map((i) => (
        <Row key={i} gap={8} align="center">
          <Img h={34} style={{ width: 52, flex: 'none' }} />
          <Col gap={4} style={{ flex: 1 }}>
            <Line w="70%" strong /><Line /><Line w="35%" />
          </Col>
        </Row>
      ))}
    </Col>
  ),

  pain: () => (
    <Col gap={5} style={{ alignItems: 'center' }}>
      <span className="wf-label">Você já passou por isso?</span>
      <Line w="70%" /><Line w="55%" />
    </Col>
  ),
  solution: () => (
    <Row gap={10} align="center">
      <Img h={48} style={{ flex: 1 }} />
      <Col gap={4} style={{ flex: 1.3 }}>
        <Line w="60%" strong /><Line /><Line w="80%" />
      </Col>
    </Row>
  ),
  benefits: () => (
    <Col gap={5}>
      <Line w="30%" strong />
      <Row gap={10}>
        {[0, 1].map((c) => (
          <Col key={c} gap={5} style={{ flex: 1 }}>
            {[0, 1].map((i) => (
              <Row key={i} gap={5} align="center"><span className="wf-check">✓</span><Line w="80%" /></Row>
            ))}
          </Col>
        ))}
      </Row>
    </Col>
  ),
  proof: () => (
    <Col gap={6}>
      <Row gap={8}>
        {['+500', '4,9★', '98%'].map((n) => (
          <Col key={n} gap={3} style={{ flex: 1, alignItems: 'center' }}>
            <span className="wf-number">{n}</span><Line w="60%" />
          </Col>
        ))}
      </Row>
      <Row gap={8}><Quote /><Quote /></Row>
    </Col>
  ),
  faq: () => (
    <Col gap={4}>
      <Line w="35%" strong />
      {['80%', '65%', '72%'].map((w, i) => (
        <div key={i} className="wf-faq"><Line w={w} /><span>+</span></div>
      ))}
    </Col>
  ),
  'cta-final': () => (
    <Col gap={6} style={{ alignItems: 'center' }}>
      <Line w="55%" h={9} strong />
      <Btn w={110} big />
    </Col>
  ),

  'product-grid': () => (
    <Col gap={6}>
      <Line w="30%" strong />
      <div className="wf-grid"><Card price /><Card price /><Card price /><Card price /></div>
    </Col>
  ),
  'product-page': () => (
    <Row gap={10}>
      <Col gap={4} style={{ flex: 1 }}>
        <Img h={80} />
        <Row gap={4}><Img h={18} style={{ flex: 1 }} /><Img h={18} style={{ flex: 1 }} /><Img h={18} style={{ flex: 1 }} /></Row>
      </Col>
      <Col gap={6} style={{ flex: 1 }}>
        <Line w="80%" h={10} strong />
        <span className="wf-price">R$ 129,90</span>
        <Line /><Line w="70%" />
        <Row gap={4}>{['P', 'M', 'G'].map((s) => <span key={s} className="wf-size">{s}</span>)}</Row>
        <span className="wf-btn solid">Comprar</span>
      </Col>
    </Row>
  ),
  checkout: () => (
    <Row gap={10}>
      <Col gap={6} style={{ flex: 1.4 }}>
        {[0, 1].map((i) => (
          <Row key={i} gap={6} align="center">
            <Img h={26} style={{ width: 26, flex: 'none' }} />
            <Col gap={3} style={{ flex: 1 }}><Line w="70%" strong /><Line w="30%" /></Col>
          </Row>
        ))}
      </Col>
      <div className="wf-summary">
        <Line w="60%" strong /><Line /><Line w="80%" />
        <Row gap={4}><span className="wf-pay">Pix</span><span className="wf-pay">Cartão</span></Row>
        <span className="wf-btn solid">Finalizar</span>
      </div>
    </Row>
  ),
};

export default function Wireframe({ page, active, onHover, numberOf }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span /><span /><span />
        <div className="browser-url">seusite.com.br</div>
      </div>
      <div className="browser-body">
        {page.blocks.map((id) => {
          const Render = blocks[id];
          return (
            <div
              key={id}
              className={`wf-block${active === id ? ' active' : ''}${id.startsWith('footer') ? ' foot' : ''}${id.startsWith('nav') || id === 'no-nav' ? ' head' : ''}`}
              onMouseEnter={() => onHover(id)}
              onMouseLeave={() => onHover(null)}
            >
              <span className="wf-tag">{numberOf(id)}</span>
              <Render />
            </div>
          );
        })}
        {page.floating === 'whatsapp' && (
          <span
            className={`wf-float${active === 'whatsapp' ? ' active' : ''}`}
            onMouseEnter={() => onHover('whatsapp')}
            onMouseLeave={() => onHover(null)}
            title="Botão flutuante do WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2Z" /></svg>
          </span>
        )}
      </div>
    </div>
  );
}
