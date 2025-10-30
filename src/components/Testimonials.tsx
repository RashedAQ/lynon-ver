
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Lynon Solution's AI integration transformed our business operations. We've seen a 40% reduction in manual tasks and 30% increase in productivity within just two months.",
  author: "Sarah Chen",
  role: "VP of Operations, TechFlow Industries",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Their RPA implementation with UiPath streamlined our entire workflow. What used to take hours now takes minutes, and the accuracy is perfect every time.",
  author: "Michael Rodriguez",
  role: "Director of IT, GlobalTech Solutions",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The custom AI solution they built for our research department has revolutionized our data analysis. We can process complex datasets 10x faster than before.",
  author: "Dr. Amara Patel",
  role: "Lead Data Scientist, BioInnovate Labs",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a growing startup, we needed cost-effective tech solutions. Lynon Solution delivered exactly what we needed - custom software that scales with our business.",
  author: "Jason Lee",
  role: "CEO, StartupFlow Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="pt-8 pb-6 md:py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Our Work</span>
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-8 sm:mb-12 text-left">Digital Masterpieces We've Crafted</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
