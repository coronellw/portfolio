import { Link } from 'react-router-dom';
import { personalInfo, skillCategories, experiences } from '../data/portfolio';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-mesh relative overflow-hidden border-b border-outline-variant py-20 md:py-32"
        aria-label="Introduction"
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex flex-col items-start gap-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-xs uppercase tracking-wider"
              role="status"
            >
              <span
                className="material-symbols-outlined text-sm"
                aria-hidden="true"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              Available for new projects
            </div>

            <h1 className="text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] tracking-[-0.02em] text-on-background max-w-2xl">
              Architecting Scalable{' '}
              <span className="text-primary">Digital Solutions</span> with
              Precision
            </h1>

            <p className="text-[18px] leading-[28px] text-on-surface-variant max-w-xl">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to="/projects"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 group"
                aria-label="View my project portfolio"
              >
                View My Work
                <span
                  className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline text-on-surface px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all active:scale-95"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Code Card Decorator */}
          <div className="md:col-span-5 relative hidden md:block">
            <div className="glass-card rounded-xl p-6 border border-outline-variant relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-4">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-secondary-container" />
                <div className="w-3 h-3 rounded-full bg-primary-container" />
                <span className="ml-auto font-label-md text-xs text-outline">
                  developer.ts
                </span>
              </div>
              <pre className="font-label-md text-sm text-on-surface leading-relaxed whitespace-pre-wrap">
                <code>{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  passions: ["Clean Code", "UX"],
  status: "Building..."
};

// High-performance architecture
function renderSolution() {
  return developer.role.excellent();
}`}</code>
              </pre>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-container rounded-xl -z-0 opacity-20" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-16 py-16" aria-labelledby="skills-heading">
        <div className="flex flex-col gap-2 mb-8">
          <h2
            id="skills-heading"
            className="text-[24px] leading-[32px] font-semibold text-on-background flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-primary" aria-hidden="true">
              analytics
            </span>
            Technical Expertise
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            A curated selection of the tools and technologies I use to bring
            complex ideas to life with high utility and technical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <article
              key={category.name}
              className="border border-outline-variant p-6 rounded-xl flex flex-col gap-4 hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
                <span
                  className="material-symbols-outlined text-primary group-hover:text-on-primary-container"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-container/10 text-primary rounded-full font-label-md text-xs border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="bg-surface-container-low py-16"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-16">
          <h2
            id="experience-heading"
            className="text-[24px] leading-[32px] font-semibold text-on-background flex items-center gap-2 mb-8"
          >
            <span className="material-symbols-outlined text-primary" aria-hidden="true">
              work_history
            </span>
            Work Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[18px] font-semibold text-on-background">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company} &mdash; {exp.location}
                    </p>
                  </div>
                  <span className="font-label-md text-sm text-on-surface-variant whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2" role="list">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-on-surface-variant text-sm leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0" aria-hidden="true">
                        &rsaquo;
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-16 py-16" aria-labelledby="education-heading">
        <h2
          id="education-heading"
          className="text-[24px] leading-[32px] font-semibold text-on-background flex items-center gap-2 mb-6"
        >
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            school
          </span>
          Education
        </h2>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                auto_stories
              </span>
            </div>
            <div>
              <h3 className="font-semibold">{personalInfo.education.degree}</h3>
              <p className="text-on-surface-variant text-sm">
                {personalInfo.education.university} &mdash;{' '}
                {personalInfo.education.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mx-auto max-w-[1200px] px-5 md:px-16 pb-16" aria-labelledby="languages-heading">
        <h2
          id="languages-heading"
          className="text-[24px] leading-[32px] font-semibold text-on-background flex items-center gap-2 mb-6"
        >
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            translate
          </span>
          Languages
        </h2>
        <div className="flex flex-wrap gap-3">
          {personalInfo.languages.map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 bg-surface-container border border-outline-variant rounded-full font-label-md text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}