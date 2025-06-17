import { IconContainer } from "@/components/ui/icon-container"

export default function CafeHoursLocationSection() {
  return (
    <section id="hours" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Öffnungszeiten & Standort</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <IconContainer size="sm" variant="primary" className="mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </IconContainer>
                <div>
                  <h3 className="text-xl font-medium mb-2">Öffnungszeiten</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Mo-Di-Mi & Do:</span>
                      <span>09:00 - 17:00 Uhr</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sa & So:</span>
                      <span>09:00 - 18:00 Uhr</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm">
                    An Feiertagen gelten besondere Öffnungszeiten. Bitte informieren Sie sich auf unseren
                    Social-Media-Kanälen.
                  </p>
                </div>
              </div>

              <div id="contact" className="flex items-start">
                <IconContainer size="sm" variant="primary" className="mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </IconContainer>
                <div>
                  <h3 className="text-xl font-medium mb-2">Adresse</h3>
                  <address className="not-italic text-muted-foreground">
                    <strong>Café & Catering</strong>
                    <br />
                    Petersilienstrasse 33-35a
                    <br />
                    38640 Goslar
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <IconContainer size="sm" variant="primary" className="mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </IconContainer>
                <div>
                  <h3 className="text-xl font-medium mb-2">Kontakt</h3>
                  <p className="text-muted-foreground">E-Mail: auszeit.goslar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <IconContainer size="sm" variant="primary" className="mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </IconContainer>
                <div>
                  <h3 className="text-xl font-medium mb-2">Social Media</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://www.instagram.com/cafe_auszeit_goslar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Instagram: @cafe_auszeit_goslar
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-1">
                    <a
                      href="https://www.tiktok.com/@cafe_auszeit_goslar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      TikTok: @cafe_auszeit_goslar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.0978378024!2d10.425521376889761!3d51.90879997196882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5409a13d355a3%3A0x6602bc733d5ab622!2sPetersilienstra%C3%9Fe%2033-35A%2C%2038640%20Goslar%2C%20Germany!5e0!3m2!1sen!2sus!4v1713799845123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort von Auszeit Café & Catering"
              aria-label="Google Maps Standort von Auszeit Café & Catering"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
