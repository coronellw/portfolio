import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolio';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="mx-auto max-w-[1200px] px-5 md:px-16 py-24 text-center">
        <span
          className="material-symbols-outlined text-6xl text-outline-variant mb-4"
          aria-hidden="true"
        >
            folder_off
        </span>
        <h1 className="text-[32px] font-bold mb-3">Project Not Found</h1>
        <p className="text-on-surface-variant mb-6">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/projects"
          className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md inline-flex items-center gap-2 hover:opacity-90 transition-all"
          aria-label="Back to projects gallery"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-[1200px] px-5 md:px-16 py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          to="/projects"
          className="text-on-surface-variant font-label-md text-sm flex items-center gap-1 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">
            arrow_back
          </span>
          Back to Projects
        </Link>
      </nav>

      {/* Project Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-primary-container/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
              {project.icon}
            </span>
          </div>
          <div>
            <h1 className="text-[32px] md:text-[40px] font-bold leading-tight text-on-background">
              {project.title}
            </h1>
            <span className="inline-block mt-1 px-3 py-1 bg-primary-container/10 text-primary rounded-full font-label-md text-xs border border-primary/20">
              {project.category}
            </span>
          </div>
        </div>
      </header>

      {/* Description */}
      <div className="max-w-3xl mb-10">
        <p className="text-[18px] leading-[28px] text-on-surface-variant">
          {project.longDescription}
        </p>
      </div>

      {/* Tech Stack */}
      <section className="mb-10" aria-labelledby="tech-stack-heading">
        <h2
          id="tech-stack-heading"
          className="text-[20px] font-semibold mb-4 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary" aria-hidden="true">
            code
          </span>
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-label-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md inline-flex items-center gap-2 hover:opacity-90 transition-all active:scale-95"
            aria-label={`View live ${project.title} demo`}
          >
            View Live Demo
            <span className="material-symbols-outlined" aria-hidden="true">
              open_in_new
            </span>
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline text-on-surface px-8 py-4 rounded-lg font-label-md inline-flex items-center gap-2 hover:bg-surface-container-low transition-all active:scale-95"
            aria-label={`View ${project.title} source code`}
          >
            Source Code
            <span className="material-symbols-outlined" aria-hidden="true">
              code
            </span>
          </a>
        )}
      </div>

      {/* Related Projects */}
      <section aria-labelledby="related-heading">
        <h2
          id="related-heading"
          className="text-[20px] font-semibold mb-6 text-on-background"
        >
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 2)
            .map((related) => (
              <Link
                key={related.id}
                to={`/projects/${related.id}`}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 hover:border-primary transition-all group"
                aria-label={`View ${related.title}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    aria-hidden="true"
                  >
                    {related.icon}
                  </span>
                  <h3 className="font-semibold">{related.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant">
                  {related.description}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}