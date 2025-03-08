
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Growth Magnet AI transformed our agency. We've increased client meetings by 300% while our team focuses exclusively on closing deals instead of prospecting.",
    author: "Sarah Johnson",
    position: "Founder & CEO",
    company: "Digital Growth Partners"
  },
  {
    quote: "The AI voice agent is remarkable. Prospects can't tell they're talking to AI, and our calendar is now consistently full of qualified appointments.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Elevate Agency"
  },
  {
    quote: "We've tried every outreach tool on the market, but nothing compares to Growth Magnet AI. The ROI is incredible—we made back our investment in the first week.",
    author: "David Rodriguez",
    position: "Head of Sales",
    company: "Zenith Marketing"
  },
  {
    quote: "Our agency struggled with inconsistent lead generation until we found Growth Magnet AI. Now we have a predictable flow of high-quality prospects every single day.",
    author: "Emily Parker",
    position: "Agency Owner",
    company: "Parker Digital"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
    className="glass-card rounded-xl p-6 h-full flex flex-col"
  >
    <div className="mb-6">
      <Quote size={32} className="text-primary/30" />
    </div>
    <p className="text-lg mb-6 flex-1">{testimonial.quote}</p>
    <div>
      <p className="font-semibold">{testimonial.author}</p>
      <p className="text-sm text-foreground/70">{testimonial.position}, {testimonial.company}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-[30%] h-[30%] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm"
          >
            Client Success Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            See What Our <span className="gradient-text">Clients Are Saying</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-foreground/70"
          >
            Agency owners and marketers are achieving remarkable results with our AI-powered client acquisition platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block"
          >
            <div className="glass-card p-1 rounded-full inline-flex items-center">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <div className="px-4 flex items-center font-medium">
                  <span>1</span>
                  <span className="mx-1">/</span>
                  <span className="text-foreground/60">3</span>
                </div>
                <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
