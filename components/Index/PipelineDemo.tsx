const steps = [
  { stage: 'Checkout', detail: 'Source revision resolved', result: 'Passed' },
  { stage: 'Build', detail: 'Container artifact compiled', result: 'Passed' },
  { stage: 'Scan', detail: 'Dependency policy violation', result: 'Failed' },
  { stage: 'Release', detail: 'Promotion blocked', result: 'Skipped' }
];

export function PipelineIntro() {
  return (
    <div className="boot-overlay" aria-hidden="true">
      <div className="boot-console">
        <div className="boot-header"><strong>./release</strong><span>Pipeline simulation</span></div>
        <ol>
          {steps.map(({stage, detail, result}) => (
            <li key={stage} data-result={result}>
              <strong>{stage}</strong><span>{detail}</span><span>{result}</span>
            </li>
          ))}
        </ol>
        <div className="boot-progress" />
      </div>
    </div>
  );
}

export function DeliveryMap() {
  return (
    <figure className="delivery-map">
      <figcaption>From commit to production</figcaption>
      <ol>
        <li><strong>Build</strong><span>Versioned container artifact</span></li>
        <li><strong>Verify</strong><span>SAST, SCA, SBOM &amp; DAST</span></li>
        <li><strong>Approve</strong><span>Rego policy gates</span></li>
        <li><strong>Promote</strong><span>GitOps release</span></li>
      </ol>
      <a href="#vms">Follow the findings into VMS</a>
    </figure>
  );
}
