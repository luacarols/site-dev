import { useState } from 'react';
import { models } from './data.js';
import Wireframe from './Wireframe.jsx';

function ModelSection({ model }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [active, setActive] = useState(null);
  const page = model.pages[pageIndex];

  const numberOf = (block) => model.flow.findIndex((s) => s.block === block) + 1;

  const focusStep = (step) => {
    setActive(step.block);
    setPageIndex(step.page ?? pageIndexFor(step.block));
  };

  // Mantém a tela atual se o bloco existir nela; senão procura a primeira que o tenha.
  const pageIndexFor = (block) => {
    const has = (p) => p.blocks.includes(block) || p.floating === block;
    if (has(model.pages[pageIndex])) return pageIndex;
    const found = model.pages.findIndex(has);
    return found === -1 ? pageIndex : found;
  };

  return (
    <section className="model" id={model.id}>
      <header className="model-head">
        <span className="model-num">{model.number}</span>
        <div>
          <h2>
            {model.name}
            {model.tag && <span className="pill">{model.tag}</span>}
          </h2>
          <p className="model-sub">{model.subtitle}</p>
        </div>
      </header>

      <p className="model-summary">{model.summary}</p>
      <p className="model-ideal"><strong>Indicado para:</strong> {model.idealFor}</p>

      <div className="model-body">
        <div className="flow">
          <h3>Como a página é organizada</h3>
          <ol>
            {model.flow.map((step, i) => (
              <li
                key={step.block}
                className={active === step.block ? 'active' : ''}
                onMouseEnter={() => focusStep(step)}
                onMouseLeave={() => setActive(null)}
                onClick={() => focusStep(step)}
              >
                <span className="step-num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="preview">
          <h3>Modelo visual</h3>
          {model.pages.length > 1 && (
            <div className="tabs" role="tablist">
              {model.pages.map((p, i) => (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={i === pageIndex}
                  className={i === pageIndex ? 'on' : ''}
                  onClick={() => setPageIndex(i)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
          <Wireframe page={page} active={active} onHover={setActive} numberOf={numberOf} />
          <p className="preview-hint">Esboço ilustrativo — cores, fotos e textos são definidos com você.</p>
        </div>
      </div>

      <div className="price">
        <div>
          <span className="price-label">Investimento</span>
          <span className="price-value">{model.price}</span>
        </div>
        <div>
          <span className="price-label">Sustentação mensal</span>
          <span className="price-value small">{model.support}</span>
          {model.supportNote && <span className="price-note">{model.supportNote}</span>}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <span className="brand">Guia de sites<b>.</b></span>
        <nav className="topbar-links" aria-label="Modelos">
          {models.map((m) => (
            <a key={m.id} href={`#${m.id}`}>{m.name}</a>
          ))}
        </nav>
        <a href="#modelos" className="btn btn-dark">Ver modelos</a>
      </header>

      <section className="hero">
        <h1>Modelos de site</h1>
        <p>
          Estes são os tipos de site que desenvolvo. Para cada um você encontra
          como a página é organizada, um esboço do visual esperado e a faixa de valor.
        </p>
        <div className="hero-actions">
          <a href="#modelos" className="btn btn-light">Comparar modelos</a>
          <a href="#notas" className="btn btn-outline">Bom saber</a>
        </div>
      </section>

      <section className="overview-wrap" id="modelos">
        <div className="section-title">
          <h2>Qual site combina com o seu negócio?</h2>
          <p>Passe o mouse (ou toque) nas etapas de cada modelo para ver onde cada parte fica no desenho.</p>
        </div>
        <nav className="overview" aria-label="Resumo dos modelos">
          {models.map((m) => (
            <a key={m.id} href={`#${m.id}`} className="overview-card">
              <span className="overview-num">{m.number}</span>
              <strong>{m.name}</strong>
              <span className="overview-sub">{m.idealFor}</span>
              <span className="overview-price">{m.price}</span>
            </a>
          ))}
        </nav>
      </section>

      {models.map((m) => <ModelSection key={m.id} model={m} />)}

      <section className="notes" id="notas">
        <h2>Bom saber</h2>
        <ul>
          <li>
            <strong>Sustentação mensal</strong> é o valor para manter o site funcionando
            depois de pronto. O que entra exatamente é combinado conforme a necessidade de cada projeto.
          </li>
          <li>
            Os valores são faixas: o preço final depende da quantidade de páginas,
            conteúdo e integrações que o seu site precisar.
          </li>
          <li>
            Ficou em dúvida entre dois modelos? Me diga o que você precisa e eu indico o mais adequado.
          </li>
        </ul>
      </section>
    </div>
  );
}
