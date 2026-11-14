'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeUp } from 'components/RevealHeading';

const vmsModules = [
	{ title: 'Findings & triage', detail: 'Trivy, Semgrep, SonarQube, Gitleaks, ZAP and pentest imports in one model' },
	{ title: 'Risk acceptance', detail: 'Ownership, approvals and acceptance across several engagements at once' },
	{ title: 'SLA & notifications', detail: 'Remediation deadlines per severity, alerts and approval actions' },
	{ title: 'OWASP ASVS', detail: 'Requirement-level assessments with compliance progress per product' },
	{ title: 'SBOM & dependencies', detail: 'CycloneDX inventory, Dependency Hub and component risk' },
	{ title: 'Technology radar', detail: 'Lifecycle decisions per product version, recommendations, action queue' }
];

const vmsTags = ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Helm', 'S3 / MinIO', 'OWASP ASVS', 'SBOM'];

const recent = [
	{
		kicker: 'CI/CD · Inventory',
		title: 'Technology discovery in the pipeline',
		description:
			'A dependency-free scanner image for GitLab CI that reads application and deployment repositories, detects runtimes, frameworks, app servers and platform versions from Dockerfiles and Helm charts, and uploads one snapshot per product to VMS. No code, URLs or secrets leave the pipeline.',
		tags: ['GitLab CI', 'Node.js', 'Docker', 'Helm', 'VMS API']
	},
	{
		kicker: 'Kubernetes · OpenShift',
		title: 'One Helm chart shape for Rancher and OpenShift',
		description:
			'Consolidated the charts of a banking application family into one shape that targets both RKE2 and OpenShift (Ingress vs Route), with Flyway migration hooks that survive the first Argo CD sync, drift checks between GitOps values and release packages, and per-client packages built from chart tags with migration guides.',
		tags: ['Helm', 'OpenShift', 'Rancher', 'Argo CD', 'Flyway']
	},
	{
		kicker: 'DevSecOps · Supply chain',
		title: 'Reusable Trivy scanner with SBOM and Rego gates',
		description:
			'A shared scanner image that any GitLab pipeline can call: image and dependency scans, CycloneDX SBOM generation and upload, and Rego policies that decide whether a release may move forward.',
		tags: ['Trivy', 'SBOM', 'CycloneDX', 'Rego', 'GitLab CI']
	}
];

export const RecentWork = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
	const animate = inView ? 'visible' : 'hidden';

	return (
		<div ref={ref}>
			<motion.article
				initial="hidden"
				animate={animate}
				variants={staggerContainer}
				className="relative overflow-hidden border border-accent/30 bg-ink-950/50"
			>
				<div
					className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
					aria-hidden="true"
				></div>

				<div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:p-10">
					<div className="lg:col-span-5">
						<motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
							<span className="bg-accent px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-950">
								Featured
							</span>
							<span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
								Product · designed &amp; built end to end
							</span>
						</motion.div>

						<motion.h3
							variants={fadeUp}
							className="mt-5 text-2xl font-bold uppercase leading-[1.05] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
						>
							VMS — Vulnerability <span className="text-accent">Management</span> System
						</motion.h3>

						<motion.p variants={fadeUp} className="mt-5 text-base leading-7 text-slate-300/85">
							A platform that brings every security signal and decision into one place. Scan results land as
							findings linked to products and engagements, with ownership, SLA and risk acceptance tracked
							until closure — and the same data drives coverage and technology lifecycle views across the
							whole portfolio.
						</motion.p>

						<motion.p variants={fadeUp} className="mt-4 text-sm leading-7 text-slate-400">
							Monorepo with a NestJS + Prisma + PostgreSQL API and a Next.js UI. Ships as versioned images
							with a migration job, deployed with Docker Compose or its own Helm chart; evidence stored in
							S3/MinIO.
						</motion.p>

						<motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
							{vmsTags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent/90"
								>
									{tag}
								</span>
							))}
						</motion.div>
					</div>

					<motion.ul variants={staggerContainer} className="grid content-start gap-3 sm:grid-cols-2 lg:col-span-7">
						{vmsModules.map(({ title, detail }, index) => (
							<motion.li
								key={title}
								variants={fadeUp}
								className="group border border-white/10 bg-white/[0.02] p-4 transition-colors duration-200 hover:border-accent/40 hover:bg-accent/5"
							>
								<div className="flex items-center gap-3">
									<span className="font-mono text-[0.68rem] text-slate-500">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="text-base font-semibold tracking-[-0.01em] text-slate-100 group-hover:text-white">
										{title}
									</span>
								</div>
								<p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</motion.article>

			<motion.div
				initial="hidden"
				animate={animate}
				variants={staggerContainer}
				className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-3 lg:gap-6"
			>
				{recent.map(({ kicker, title, description, tags }) => (
					<motion.article
						key={title}
						variants={fadeUp}
						className="flex h-full flex-col border border-white/10 bg-ink-800/50 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 sm:p-6"
					>
						<p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-accent">{kicker}</p>
						<h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-100 sm:text-xl">{title}</h3>
						<p className="mt-3 flex-1 text-sm leading-7 text-slate-300/75">{description}</p>
						<div className="mt-5 flex flex-wrap gap-2">
							{tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400"
								>
									{tag}
								</span>
							))}
						</div>
					</motion.article>
				))}
			</motion.div>
		</div>
	);
};
