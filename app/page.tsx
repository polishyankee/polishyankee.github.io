import { SectionTitle } from 'components/SectionTitle';
import { ProjectsList } from 'components/Index/ProjectsList';
import { Achievements } from 'components/Index/Achievements';
import { PracticeAccordion } from 'components/Index/PracticeAccordion';
import { TechStack } from 'components/Index/TechStack';
import { Industries } from 'components/Index/Industries';
import { AboutMe } from 'components/Index/AboutMe';
import { RecentWork } from 'components/Index/RecentWork';
import { DeliveryMap, PipelineIntro } from 'components/Index/PipelineDemo';
import { containerClasses, linkClasses, sectionBodyClasses } from 'components/styles';

const panelClasses = 'portfolio-panel';
const availabilityNotes = [
  'Platform engineering, DevSecOps and production Kubernetes.',
  'High availability, GitOps migrations and delivery for regulated environments.'
];

export default function Home() {
  return (
    <main className="portfolio">
      <PipelineIntro />
      <a className="portfolio-skip" href="#hero-heading">Skip to content</a>
      <div className="portfolio-intro">
        <header className="portfolio-shell portfolio-header">
          <a className="portfolio-brand" href="#top"><span aria-hidden="true">~/</span> Kamil Stasica</a>
          <nav aria-label="Main navigation">
            <a href="#vms">VMS</a>
            <a href="#experience">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <section className="portfolio-shell portfolio-hero" id="top" aria-labelledby="hero-heading">
          <div className="portfolio-copy">
            <p className="portfolio-role">DevOps &amp; platform engineer</p>
            <h1 id="hero-heading" tabIndex={-1}>I engineer the path to production.</h1>
            <p>I design and build Linux-first delivery platforms for financial systems. Security checks and release decisions live in the pipeline, with evidence attached to every build.</p>
            <div className="portfolio-actions">
              <a className="portfolio-button" href="#vms">Explore VMS</a>
              <a className="portfolio-secondary" href="#projects">Selected work</a>
            </div>
            <p className="portfolio-aside">Linux is home. Windows can keep its updates.</p>
          </div>
          <DeliveryMap />
        </section>
      </div>

      <section id="vms" className="portfolio-shell portfolio-product" aria-labelledby="vms-heading">
        <div>
          <p className="portfolio-role">Software development / DevSecOps</p>
          <h2 id="vms-heading">Vulnerability<br />Management System</h2>
          <p>I designed and built VMS to turn scan results into work teams can own. It tracks findings by product and engagement, records risk acceptance, and follows remediation through closure.</p>
        </div>
        <ol aria-label="Finding lifecycle">
          <li><strong>Ingest</strong><span>Trivy, Semgrep, SonarQube, Gitleaks, ZAP and pentest evidence.</span></li>
          <li><strong>Decide</strong><span>Assign owners, set severity-based SLAs and record approvals.</span></li>
          <li><strong>Track</strong><span>Follow remediation, ASVS coverage, CycloneDX components and technology lifecycle.</span></li>
        </ol>
      </section>
			<section className={`${containerClasses} relative z-10`} id="about">
				<AboutMe />
			</section>

			<section className={`${containerClasses} relative z-10`} id="recent">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big>
							Recent Work
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								What I&apos;ve been building lately: a vulnerability management product, the pipelines that
								feed it, and the delivery plumbing that keeps releases boring.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<RecentWork />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="experience">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big>
							Work Experience
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								I design and operate production-grade DevSecOps and Kubernetes platforms for
								critical financial services, supporting environments used by commercial banks,
								cooperative banks, and SKOK credit unions.
							</p>
							<p>
								My work spans infrastructure, platform, and application delivery layers with a
								focus on high availability, security-by-default, and deterministic automation.
							</p>
						</div>

						<div className="mt-10 lg:mt-12">
							<PracticeAccordion />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="stack">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big>
							Stack
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Every project on this page ships through this stack — infrastructure, delivery,
								security, and observability, wired together end to end.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<TechStack />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`}>
				<div className="mt-12 lg:mt-16">
					<Industries />
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="projects">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big>
							Selected Projects
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Examples of the delivery platforms, migration programs, and operational controls
								I&apos;ve built across cloud, Kubernetes, and regulated environments.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<ProjectsList />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="achievements">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative">
						<SectionTitle big>
							Certifications
						</SectionTitle>
						<div className={sectionBodyClasses}>
							<p>
								Formal validation of the areas I work in most: Kubernetes, DevSecOps, and secure
								cloud-native delivery.
							</p>
						</div>
						<div className="mt-10 lg:mt-12">
							<Achievements />
						</div>
					</div>
				</div>
			</section>

			<section className={`${containerClasses} relative z-10`} id="contact">
				<div className={`${panelClasses} mt-12 lg:mt-16`}>
					<div className="relative grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(280px,0.52fr)]">
						<div>
							<SectionTitle big>
								Let&apos;s build something reliable
							</SectionTitle>
							<div className={sectionBodyClasses}>
								<p>
									I&apos;m interested in platform engineering, DevSecOps, cloud automation, and
									production-grade Kubernetes work. If you want to talk about infrastructure that
									needs to scale cleanly and fail gracefully, reach out.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="mailto:stasicakamil@hotmail.com"
									className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-ink-950 transition-colors hover:bg-accent/90"
								>
									stasicakamil@hotmail.com
								</a>
								<a
									className="inline-flex items-center justify-center border border-white/15 bg-transparent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-slate-100 transition-colors hover:border-accent/50 hover:text-accent"
									href="https://www.linkedin.com/in/kamil-stasica/"
									target="_blank"
								>
									LinkedIn
								</a>
							</div>
						</div>

						<div className="border border-white/10 bg-ink-950/40 p-6">
							<p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent">
								Availability
							</p>
							<div className="mt-5 space-y-4">
								{availabilityNotes.map((note) => (
									<div key={note} className="border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-slate-300/80">
										{note}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className={`${containerClasses} relative z-10 pb-10 pt-8 md:pb-16`}>
				<div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
					<p>Copyright {new Date().getFullYear()} Kamil Stasica.</p>
					<p>
						Built with <a className={linkClasses} href="https://nextjs.org/" target="_blank">Next.js</a>{' '}
						and{' '}
						<a className={linkClasses} href="https://tailwindcss.com/" target="_blank">
							Tailwind CSS
						</a>
						. Source on{' '}
						<a
							className={linkClasses}
							href="https://github.com/polishyankee/polishyankee.github.io"
							target="_blank"
						>
							GitHub
						</a>
						.
					</p>
				</div>
			</footer>
		</main>
	);
}
