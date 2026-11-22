'use client';

import { useEffect, useState } from 'react';

const stages = [
  { name: 'Build', detail: 'Compile and test the application. Package a versioned container image.' },
  { name: 'Scan', detail: 'Run SAST on source, SCA on dependencies and generate a CycloneDX SBOM.' },
  { name: 'Stage', detail: 'Deploy to a test environment and run DAST against the running application.' },
  { name: 'Policy', detail: 'Evaluate release evidence against versioned Rego rules.' },
  { name: 'Release', detail: 'Promote the approved artifact through GitOps.' }
];

type Scenario = 'pass' | 'block';

export function PipelineDemo() {
  const [scenario, setScenario] = useState<Scenario>('pass');
  const [active, setActive] = useState(-1);
  const [running, setRunning] = useState(false);
  const last = scenario === 'block' ? 3 : 4;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      if (active === last) setRunning(false);
      else setActive(active + 1);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [active, last, running]);

  function run(next: Scenario) {
    setScenario(next);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setActive(reduceMotion ? (next === 'block' ? 3 : 4) : 0);
    setRunning(!reduceMotion);
  }

  function status(index: number) {
    if (index > active) return !running && active >= 0 ? 'Skipped' : 'Queued';
    if (index === active && running) return 'Running';
    return scenario === 'block' && index === 3 ? 'Blocked' : 'Passed';
  }

  return (
    <section className="pipeline-demo" aria-labelledby="pipeline-heading">
      <div className="pipeline-top">
        <h2 id="pipeline-heading">Release pipeline</h2>
        <span>Simulation</span>
      </div>
      <ol className="pipeline-stages" aria-label="Pipeline stages">
        {stages.map(({name, detail}, index) => (
          <li key={name} data-state={status(index)}>
            <span className="pipeline-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{name}</strong><p>{detail}</p></div>
            <span className="pipeline-state">{status(index)}</span>
          </li>
        ))}
      </ol>
      <p className="pipeline-result" role="status">
        {running ? `Running ${stages[active].name.toLowerCase()}…` : active < 0
          ? 'Choose a scenario to see what reaches production.'
          : scenario === 'block' ? 'Release blocked by Rego. Review the finding before promotion.'
          : 'Checks passed. The artifact is ready for promotion.'}
      </p>
      <div className="pipeline-controls">
        <button type="button" onClick={() => run('pass')} disabled={running}>Run pipeline</button>
        <button type="button" onClick={() => run('block')} disabled={running}>Simulate policy failure</button>
      </div>
    </section>
  );
}
