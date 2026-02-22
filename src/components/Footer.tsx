import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import footerLogo from '@/assets/vizolve-logo-footer.webp';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';
import footerbg from '@/assets/footerbg.png';
import { ArrowUpRight } from 'lucide-react';


const footerLinks = {
  services: [
    { label: 'Website Development', href: '/services/development' },
    { label: 'Mobile App Development', href: '/services/development' },
    { label: 'AI Automation', href: '/#services' },
    { label: 'Custom AI Agents', href: '/#services' },
    { label: 'Enterprise Solutions', href: '/#industries' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Leadership', href: '/about' },
    { label: 'Careers', href: '/careers', isRoute: true },
    { label: 'Partnerships', href: '*' },
    { label: 'Press Releases', href: '*' },
  ],
  quickContact: [
    { label: 'Get in touch', href: '/contact', isRoute: true },
    { label: 'Explore careers', href: '/careers', isRoute: true },
    { label: 'Learn about Vizolve', href: '/about' },
  ],
};

const Footer = () => {
  return (
    <footer id="contact" className="relative text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
      <div className="absolute inset-0 bg-black/45"></div>
      </div>


      {/* All Footer Content */}
      <div className="relative z-10">

        {/* CTA Band */}
        <div className="section-container py-16 sm:py-20 lg:py-24">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-start gap-6">

              <AnimatedItem>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-transparent stroke-text">
                  Seeking Help? Let’s Talk
                </h2>
              </AnimatedItem>

              
                {/* <Button
                  asChild
                  className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium px-8 py-6 text-base rounded-[10px] transition-all duration-300 hover:scale-[1.05]"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button> */}
                
                 <AnimatedItem>
                 <Link to="/contact" className="relative group">

                 <div className="relative w-24 h-24 cursor-pointer">

                       {/* Spinning Text */}
                   <div className="absolute inset-0 animate-spin-slow">
                   <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text className="fill-white/70 text-[10px] uppercase tracking-[0.15em]">
            <textPath href="#circlePath">
             • Get In Touch • Get In Touch • v
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

    </div>

  </Link>
</AnimatedItem>

             

            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="section-container">
          <div className="h-px bg-white/20" />
        </div>

        {/* Main Footer */}
        <div className="section-container py-12 sm:py-16 lg:py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Logo + Description */}
            <div className="lg:col-span-2">

              <Link to="/" className="inline-block mb-6">
                <img
                  src={footerLogo}
                  alt="Vizolve"
                  className="h-8 sm:h-9 lg:h-10 w-auto"
                />
              </Link>

              <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
                Enterprise-grade technology services including website and mobile development,
                AI automation, and custom AI agents. Turning vision into solutions.
              </p>

              <div className="flex space-x-4">
                {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">
                Services
              </h3>

              <nav className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">
                Company
              </h3>

              <nav className="space-y-3">
                {footerLinks.company.map((link, index) =>
                  link.isRoute ? (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider">
                Quick Contact
              </h3>

              <nav className="space-y-3">
                {footerLinks.quickContact.map((link, index) =>
                  link.isRoute ? (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-sm text-white/60 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>

            </div>

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="section-container">
          <div className="h-px bg-white/20" />
        </div>

        {/* Bottom Bar */}
        <div className="section-container py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <p className="text-xs text-white/50">
              © 2026 Vizolve. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs text-white/50">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
