import { useState, type FormEvent } from 'react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  return (
    <section className="mx-auto max-w-[1200px] px-5 md:px-16 py-16" aria-labelledby="contact-heading">
      {/* Hero Text */}
      <div className="mb-10 text-center md:text-left">
        <h1
          id="contact-heading"
          className="text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] tracking-[-0.02em] text-on-background mb-4"
        >
          Let's build something{' '}
          <span className="text-primary">extraordinary</span>.
        </h1>
        <p className="text-[18px] leading-[28px] text-on-surface-variant max-w-2xl">
          Have a technical challenge or a project in mind? I'm available for
          freelance opportunities and engineering collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Form */}
        <div className="md:col-span-7 bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-label-md text-label-md text-on-surface-variant"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="John Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md"
              />
              {errors.name && (
                <p id="name-error" className="text-error font-label-md text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-label-md text-label-md text-on-surface-variant"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="john@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md"
              />
              {errors.email && (
                <p id="email-error" className="text-error font-label-md text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-label-md text-label-md text-on-surface-variant"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full bg-surface border border-outline-variant px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md resize-none"
              />
              {errors.message && (
                <p id="message-error" className="text-error font-label-md text-sm" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-on-primary py-4 px-6 rounded-lg font-semibold text-base hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="material-symbols-outlined animate-spin"
                    aria-hidden="true"
                  >
                    sync
                  </span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span
                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    send
                  </span>
                </>
              )}
            </button>

            {/* Success Message */}
            {isSuccess && (
              <div
                className="bg-secondary-container text-on-secondary-container p-4 rounded-lg flex items-center gap-3"
                role="status"
                aria-live="polite"
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </span>
                <span className="font-label-md">
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}
          </form>
        </div>

        {/* Info & Social Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Location Card */}
          <div className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden min-h-[200px] relative group">
            <div className="absolute top-4 left-4 z-10 bg-surface/90 backdrop-blur px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary text-sm"
                aria-hidden="true"
              >
                location_on
              </span>
              <span className="font-label-md text-label-md font-bold">
                {personalInfo.location}
              </span>
            </div>
            <div
              className="w-full h-full min-h-[200px] bg-cover bg-center bg-surface-container-highest"
              role="img"
              aria-label={`Map showing location: ${personalInfo.location}`}
            />
          </div>

          {/* Connect Card */}
          <div className="bg-surface-container-low border border-outline-variant p-6 rounded-xl flex flex-col gap-6">
            <h2 className="text-[20px] font-semibold text-on-surface">
              Digital Presence
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg hover:border-primary transition-all group"
                aria-label="GitHub profile"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    code
                  </span>
                  <span className="font-label-md font-bold">GitHub</span>
                </div>
                <span
                  className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  open_in_new
                </span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg hover:border-primary transition-all group"
                aria-label="LinkedIn profile"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    work
                  </span>
                  <span className="font-label-md font-bold">LinkedIn</span>
                </div>
                <span
                  className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors"
                  aria-hidden="true"
                >
                  open_in_new
                </span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg hover:border-primary transition-all group"
                aria-label="Send email"
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    mail
                  </span>
                  <span className="font-label-md font-bold">Email</span>
                </div>
                <span className="text-on-surface-variant font-label-md text-sm">
                  {personalInfo.email}
                </span>
              </a>
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <p className="font-label-md text-label-md text-on-surface-variant mb-3">
                Technical Skills & Consulting
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-code-sm text-xs">
                  Cloud Architecture
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-code-sm text-xs">
                  Fullstack Dev
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-code-sm text-xs">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}