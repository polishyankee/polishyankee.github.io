'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RevealHeading, staggerContainer, fadeUp } from 'components/RevealHeading';

const industries = [
	{
		title: 'Banking Sector',
		description:
			'High-availability platforms for commercial banks, cooperative banks, and SKOK credit unions — GitOps delivery, tested DR runbooks, zero-downtime failover.'
	},
	{
		title: 'Fintech',
		description:
			'CI/CD and Kubernetes foundations built to ship fast without breaking compliance — policy-as-code gates on every release.'
	},
	{
		title: 'Biotech',
		description:
			'Regulated, auditable infrastructure for research and data pipelines — reproducible environments, versioned change, zero manual drift.'
	}
];

export const Industries = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

	return (
		<div ref={ref} className="grid gap-10 rounded-2xl border border-white/10 bg-ink-800 p-8 text-white md:p-10 lg:grid-cols-12 lg:gap-8 lg:p-12">
			<motion.div
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				variants={staggerContainer}
				className="lg:col-span-6"
			>
				<motion.div variants={fadeUp} className="inline-flex items-center gap-3">
					<span className="h-2 w-2 rounded-full bg-ink-950" />
					<p className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-slate-300">Industries</p>
				</motion.div>

				<RevealHeading
					text="Built for sectors where downtime is not an option."
					className="mt-4 max-w-[600px] text-2xl font-bold uppercase leading-[1.1] tracking-[-0.02em] text-accent sm:text-3xl lg:text-4xl"
				/>

				<motion.p variants={fadeUp} className="mt-4 max-w-[480px] text-base leading-7 text-slate-300">
					Financial services, fintech, and biotech all share the same requirement: infrastructure that
					is compliant, auditable, and boring in the best possible way.
				</motion.p>

				<motion.a
					variants={fadeUp}
					href="#contact"
					className="group relative mt-6 inline-flex w-max items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
				>
					Get in touch
					<span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
						→
					</span>
				</motion.a>
			</motion.div>

			<motion.div
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				variants={staggerContainer}
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6"
			>
				{industries.map(({ title, description }) => (
					<motion.div
						key={title}
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="flex flex-col gap-3 border-t-2 border-white/25 pt-5 transition-colors duration-200 hover:border-white/50"
					>
						<span className="text-lg font-semibold tracking-[-0.01em] text-accent">{title}</span>
						<p className="text-sm leading-6 text-accent/75">{description}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
