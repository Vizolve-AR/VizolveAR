import { Target, Shield, Lightbulb, Zap, Users, BarChart3 } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedItem from './animations/AnimatedItem';
import PillCard from './PillCard';
import RectangleCard from './ReactangleCard';
import SquareCard from './SquareCard';

const differentiators = [
  { image: "src/assets/stratigic.jpeg", label: 'Strategy', title: 'Strategic Consulting', description: 'Business aligned IT solutions' },
  { image: "src/assets/secure-scale.jpeg", label: 'Security', title: 'Secure Scaling', description: 'Enterprise grade security' },
  { image: "src/assets/Industry-ready.jpeg", label: 'Expertise', title: 'Industry-Ready', description: 'Cross industry knowledge' },
  { image: "src/assets/AI-card.jpeg", label: 'Innovation', title: 'AI Innovation', description: 'Advanced intelligent automation' },
  { image: "src/assets/delivery.jpeg", label: 'Delivery', title: 'Reliable Delivery', description: 'Consistent timely project delivery' },
  { image: "src/assets/measurable-outcome.jpeg", label: 'Results', title: 'Measurable Outcomes', description: 'Data-driven results' },
  { image: "src/assets/future-ready.jpeg", label: 'Futuristic', title: 'Future Ready', description: 'Modern scalable solutions' },
  { image: "src/assets/client-focus.jpeg", label: 'Collab', title: 'Client Focused', description: 'Transparent client partnership' },
];

const WhyVizolve = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-40 bg-[#050505]">
      <div className="section-container">
        <AnimatedSection>
          <AnimatedItem>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <p className="section-label justify-center mb-4">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white mb-4 sm:mb-6">
                Why Organizations Choose <span className="text-primary">Vizolve</span>
              </h2>
              <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed">
                A trusted technology partner committed to delivering exceptional results.
              </p>
            </div>
          </AnimatedItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <AnimatedItem key={index}>

                {/* <PillCard
                  icon={item.icon}
                  label={item.label}
                  title={item.title}
                  description={item.description}
                /> */}
                {/* <RectangleCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  className="hidden lg:block"
                /> */}
                <SquareCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  className="hidden xl:block"
                />
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyVizolve;
