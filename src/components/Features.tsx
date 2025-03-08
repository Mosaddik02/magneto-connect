
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Phone, Globe, Search, Target } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className="glass-card rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Driven Messaging",
      description: "Personalized outreach messages tailored to each prospect's profile, industry, and needs.",
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Low-Latency Voice Agent",
      description: "Human-like voice calls that engage prospects and book meetings in real-time.",
      delay: 0.2
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Seamlessly book qualified appointments directly on your calendar without any manual effort.",
      delay: 0.3
    },
    {
      icon: Search,
      title: "Intelligent Prospecting",
      description: "Advanced algorithms identify and prioritize high-value potential clients for your business.",
      delay: 0.4
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Continuously improving outreach strategies based on interaction data and results.",
      delay: 0.5
    },
    {
      icon: Globe,
      title: "Multi-Channel Approach",
      description: "Reach prospects across email, LinkedIn, phone calls, and more for maximum effectiveness.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-[40%] h-[40%] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm">
            Powerful AI Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Cutting-edge AI Technology <span className="gradient-text">at Your Service</span></h2>
          <p className="text-xl text-foreground/70">Our platform combines sophisticated AI capabilities to transform how you acquire clients and grow your agency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
