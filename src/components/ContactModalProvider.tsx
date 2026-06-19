'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react';

interface ContactModalContextValue {
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xlgkqljv';

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }
  return context;
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const openModal = useCallback(() => {
    setFormState({ status: 'idle', message: '' });
    setIsOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(() => setIsOpen(false), 280);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeModal]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!FORMSPREE_FORM_ID) {
      setFormState({
        status: 'error',
        message: 'Form is not configured yet. Please add your Formspree form ID.',
      });
      return;
    }

    setFormState({ status: 'submitting', message: '' });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send message.');
      }

      setFormState({
        status: 'success',
        message: 'Thank you — your message has been sent. Michael will be in touch soon.',
      });
      event.currentTarget.reset();
    } catch {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again or email directly.',
      });
    }
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            className={`modal-backdrop absolute inset-0 bg-black/45 backdrop-blur-[2px] ${
              isVisible ? 'modal-backdrop-open' : ''
            }`}
            onClick={closeModal}
            aria-label="Close contact form"
          />

          <div
            className={`modal-panel relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-gray-200 ${
              isVisible ? 'modal-panel-open' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-gray-500 font-medium mb-2">
                  Get in Touch
                </p>
                <h2
                  id="contact-modal-title"
                  className="font-serif text-2xl font-semibold text-black tracking-tight"
                >
                  Send a Message
                </h2>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Share a few details and Michael will follow up with you shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-black transition-colors p-1 -mr-1"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {formState.status === 'success' ? (
              <div className="px-6 py-10 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{formState.message}</p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy-light transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="form-label">
                      Name <span className="text-navy">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      Email <span className="text-navy">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="form-label">
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="form-input"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="text-navy">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project, timeline, or how I can help..."
                  />
                </div>

                {formState.status === 'error' && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-md px-4 py-3">
                    {formState.message}
                  </p>
                )}

                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-1">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formState.status === 'submitting'}
                    className="inline-flex items-center justify-center bg-navy text-white font-semibold px-7 py-3 rounded-md hover:bg-navy-light transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState.status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
