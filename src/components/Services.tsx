import { Globe, Smartphone, Bot, BrainCircuit } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';
import PillCard from './PillCard';

import PremiumFeatureCard from './PremiumFeatureCard';

const services = [
  { image:"src/assets/website.jpg", label: 'Web', title: 'Modern Web Solutions', description: 'We craft fast, modern websites designed to deliver exceptional user experiences.', href: '/services/development' },
  { image:"src/assets/mobile-dev.webp", label: 'Mobile', title: 'Mobile App Solutions', description: 'We create scalable, high-performance mobile apps with beautiful interfaces.', href: '/services/development' },
  { image:"src/assets/ai-automation.jpg", label: 'Automation', title: 'Smart AI Automation', description: 'Smart AI-Powered Task Automation', href: '#' },
  { image:"src/assets/ai-agent.png", label: 'Intelligence', title: 'Custom AI Agents', description: 'Autonomous AI Assistants', href: '#' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-40 bg-[#050505]">
      <div className="section-container">
        <AnimatedSection>
          <AnimatedItem>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-4">Our Services</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white leading-tight">
                Thoughtful Digital <span className="text-primary">Strategies</span>
              </h2>
              <p className="mt-4 text-base text-[#a1a1aa] max-w-2xl mx-auto">
                We build secure, reliable, and scalable digital solutions for small and large businesses, powered by modern software engineering and intelligent automation.
              </p>
            </div>
          </AnimatedItem>
        
         
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
         
         <div className="col-span-1 sm:col-span-2 lg:col-span-4 w-full">
         {services.map((service, index) => (
            <AnimatedItem key={index}>
              <GlassCard
                 title={service.title}
                 description={service.description}
                 image={service.image}
              />
            </AnimatedItem> ))}
         </div>
      </div> */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

  {services.map((service, index) => {

    const isFullWidth = index < 2;

    return (
      <div
        key={index}
        className={isFullWidth ? "sm:col-span-2" : ""}
      >
        <PremiumFeatureCard
  title={service.title}
  description={service.description}
  image={service.image}
  href={service.href}
  variant={isFullWidth ? "full" : "half"}
/>

      </div>
    );

  })}

</div>



        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedItem key={index}>
                <PillCard
                  icon={service.icon}
                  label={service.label}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </AnimatedItem>
            ))}
          </div> */}

        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
