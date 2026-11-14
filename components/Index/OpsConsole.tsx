'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const lines = [
	{
		command: 'git push origin feat/accept-across-engagements',
		status: 'pipeline triggered: build → test → scan → policy gate'
	},
	{
		command: 'trivy image vms-api:3.2.1 --format cyclonedx',
		status: 'SBOM uploaded to VMS, 0 critical findings'
	},
	{
		command: 'conftest test chart/ --policy policy/',
		status: 'all policies passed, release unblocked'
	},
	{
		command: 'argocd app sync vms',
		status: 'desired state applied, no direct kubectl apply -f'
	},
	{
		command: 'flux get kustomizations',
		status: 'ready — drift = 0 across all clusters'
	},
	{
		command: 'ansible-playbook cluster.yml --check',
		status: 'cluster lifecycle reconciled, zero manual changes'
	}
];

const VISIBLE = 3;
const TYPE_MS = 32;
const STATUS_DELAY_MS = 450;
const HOLD_MS = 2400;

export const OpsConsole = () => {
	const reduceMotion = useReducedMotion();
	const [start, setStart] = useState(0);
	const [typed, setTyped] = useState(0);
	const [showStatus, setShowStatus] = useState(false);

	const typingIndex = (start + VISIBLE - 1) % lines.length;
	const typingCommand = lines[typingIndex].command;

	useEffect(() => {
		if (reduceMotion) return;
		let timer: ReturnType<typeof setTimeout>;
		if (typed < typingCommand.length) {
			timer = setTimeout(() => setTyped((t) => t + 1), TYPE_MS);
		} else if (!showStatus) {
			timer = setTimeout(() => setShowStatus(true), STATUS_DELAY_MS);
		} else {
			timer = setTimeout(() => {
				setStart((s) => (s + 1) % lines.length);
				setTyped(0);
				setShowStatus(false);
			}, HOLD_MS);
		}
		return () => clearTimeout(timer);
	}, [typed, showStatus, typingCommand, reduceMotion]);

	const visible = Array.from({ length: VISIBLE }, (_, i) => (start + i) % lines.length);

	return (
		<div className="mt-5 space-y-4" aria-label="Example platform commands">
			{visible.map((lineIndex, slot) => {
				const { command, status } = lines[lineIndex];
				const isTyping = !reduceMotion && slot === VISIBLE - 1;
				const shownCommand = isTyping ? command.slice(0, typed) : command;
				const statusVisible = !isTyping || showStatus;
				return (
					<div key={lineIndex} className="border border-white/10 bg-white/[0.02] p-4 motion-safe:animate-fade-up">
						<div className="overflow-hidden whitespace-nowrap font-mono text-sm text-accent">
							$ {shownCommand}
							{isTyping && !showStatus && (
								<span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent motion-safe:animate-pulse"></span>
							)}
						</div>
						<div
							className={`mt-2 min-h-[1.5rem] text-sm leading-6 transition-opacity duration-300 ${
								statusVisible ? 'text-slate-400 opacity-100' : 'opacity-0'
							}`}
						>
							{statusVisible && <span className="text-accent/80">✓ </span>}
							{status}
						</div>
					</div>
				);
			})}
		</div>
	);
};
