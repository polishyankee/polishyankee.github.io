'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const stages = [
	{ key: 'commit', label: 'Commit', detail: 'signed, reviewed' },
	{ key: 'build', label: 'Build', detail: 'image + SBOM' },
	{ key: 'test', label: 'Test', detail: 'unit / e2e' },
	{ key: 'scan', label: 'Scan', detail: 'SAST · SCA · IaC' },
	{ key: 'gate', label: 'Policy', detail: 'Rego / Kyverno' },
	{ key: 'sync', label: 'GitOps sync', detail: 'Argo CD / Flux' },
	{ key: 'observe', label: 'Observe', detail: 'SLO + alerts' }
];

const commits = [
	{ sha: 'a3f9c1e', message: 'feat(findings): accept a finding across engagements' },
	{ sha: '7b21d04', message: 'feat(chart): one chart shape for Rancher and OpenShift' },
	{ sha: 'e58c3aa', message: 'fix(discovery): read app server version from Dockerfile ARG' },
	{ sha: '19d0f7b', message: 'feat(report): SonarQube security report as PDF' },
	{ sha: 'c4e8812', message: 'chore(helm): flyway hook safe for first Argo CD sync' },
	{ sha: '0d6a5f9', message: 'feat(radar): lifecycle decisions per product version' }
];

const STEP_MS = 850;
const HOLD_MS = 1600;

export const DeliveryPipeline = () => {
	const reduceMotion = useReducedMotion();
	// -1 = idle before a new commit enters, stages.length = released
	const [step, setStep] = useState(0);
	const [commitIndex, setCommitIndex] = useState(0);
	const [releases, setReleases] = useState(1284);

	useEffect(() => {
		if (reduceMotion) return;
		const released = step >= stages.length;
		const timer = setTimeout(
			() => {
				if (released) {
					setCommitIndex((i) => (i + 1) % commits.length);
					setStep(0);
				} else {
					if (step === stages.length - 1) setReleases((n) => n + 1);
					setStep((s) => s + 1);
				}
			},
			released ? HOLD_MS : STEP_MS
		);
		return () => clearTimeout(timer);
	}, [step, reduceMotion]);

	const current = reduceMotion ? stages.length : step;
	const released = current >= stages.length;
	const commit = commits[commitIndex];
	const progress = Math.min(current + (released ? 0 : 0.5), stages.length) / stages.length;

	return (
		<div className="relative overflow-hidden border border-white/10 bg-ink-950/50">
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3 sm:px-6">
				<div className="flex items-center gap-3">
					<span className="relative flex h-2.5 w-2.5">
						<span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping"></span>
						<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
					</span>
					<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
						Delivery pipeline
					</p>
				</div>
				<div className="flex items-center gap-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">
					<span>
						Releases <span className="tabular-nums text-slate-200">{releases.toLocaleString('en-US')}</span>
					</span>
					<span className="hidden sm:inline">
						Manual steps <span className="text-accent">0</span>
					</span>
				</div>
			</div>

			<div className="px-5 pb-5 pt-6 sm:px-6">
				<div className="relative h-1 bg-white/10" aria-hidden="true">
					<div
						className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
						style={{ width: `${progress * 100}%` }}
					></div>
					<div
						className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(182,255,46,0.45)] transition-[left] duration-700 ease-out"
						style={{ left: `${progress * 100}%` }}
					></div>
				</div>

				<ol className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">
					{stages.map((stage, index) => {
						const done = index < current;
						const active = index === current;
						return (
							<li
								key={stage.key}
								className={`border px-2.5 py-2.5 transition-colors duration-500 ${
									active
										? 'border-accent/60 bg-accent/10'
										: done
										? 'border-accent/25 bg-white/[0.02]'
										: 'border-white/10 bg-transparent'
								}`}
							>
								<div className="flex items-center gap-2">
									<span
										className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
											done || active ? 'bg-accent' : 'bg-slate-600'
										} ${active ? 'motion-safe:animate-pulse' : ''}`}
									></span>
									<span
										className={`truncate font-mono text-[0.62rem] uppercase tracking-[0.16em] transition-colors duration-500 ${
											done || active ? 'text-slate-100' : 'text-slate-500'
										}`}
									>
										{stage.label}
									</span>
								</div>
								<p className="mt-1.5 hidden truncate text-[0.7rem] text-slate-500 md:block">{stage.detail}</p>
							</li>
						);
					})}
				</ol>

				<div className="mt-5 flex min-w-0 items-center gap-3 font-mono text-xs" aria-live="off">
					<span className="shrink-0 text-accent">{commit.sha}</span>
					<span className="min-w-0 truncate text-slate-400">{commit.message}</span>
					<span
						className={`ml-auto shrink-0 uppercase tracking-[0.2em] transition-colors duration-300 ${
							released ? 'text-accent' : 'text-slate-500'
						}`}
					>
						{released ? 'deployed ✓' : `${stages[current].label}…`}
					</span>
				</div>
			</div>
		</div>
	);
};
