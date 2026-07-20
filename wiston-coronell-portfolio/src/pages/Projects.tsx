import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 md:px-16 py-16" aria-labelledby="projects-heading">
      <div className="flex flex-col gap-2 mb-10">
        <h1
          id="projects-heading"
          className="text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] tracking-[-0.02em] text-on-background"
        >
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="text-[18px] leading-[28px] text-on-surface-variant max-w-2xl">
          A selection of engineering challenges I've tackled. Each project reflects
          my commitment to clean architecture, accessibility, and user-centered design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group hover:border-primary transition-all flex flex-col"
          >
            {/* Project icon header */}
            <div className="h-40 bg-surface-container flex items-center justify-center relative overflow-hidden">
              <span
                className="material-symbols-outlined text-6xl text-outline-variant group-hover:text-primary transition-colors"
                aria-hidden="true"
              >
                {project.icon}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/60 to-transparent" />
              <span className="absolute top-3 right-3 px-3 py-1 bg-surface/80 backdrop-blur rounded-full font-label-md text-xs text-on-surface-variant border border-outline-variant">
                {project.category}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-[20px] font-semibold mb-2 text-on-background">
                {project.title}
              </h2>
              <p className="text-sm text-on-surface-variant mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-primary-container/10 text-primary rounded-full font-label-md text-xs border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-0.5 text-on-surface-variant font-label-md text-xs">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Action links */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-outline-variant">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary font-label-md text-sm flex items-center gap-1 hover:underline group/link"
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                  <span
                    className="material-symbols-outlined text-sm group-hover/link:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant font-label-md text-sm hover:text-primary transition-colors"
                    aria-label={`${project.title} source code on GitHub`}
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state if projects array could be empty */}
      {projects.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4" aria-hidden="true">
            construction
          </span>
          <h2 className="text-xl font-semibold mb-2">Projects Coming Soon</h2>
          <p className="text-on-surface-variant">
            I'm currently working on exciting projects. Check back soon!
          </p>
        </div>
      )}
    </section>
  );
}