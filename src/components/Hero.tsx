
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Calendar, MessageCircle, Phone, Zap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <div ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm"
          >
            AI-Powered Client Acquisition
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6"
          >
            <span className="gradient-text">Revolutionize</span> Your Client Acquisition with AI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto"
          >
            Our intelligent AI Agent handles your entire prospecting process—sending personalized messages and booking qualified appointments directly on your calendar.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton size="lg">Start Free Trial</CTAButton>
            <CTAButton variant="outline" size="lg">Book a Demo</CTAButton>
          </motion.div>
        </div>
        
        {/* AI Features Illustration */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-2 md:p-4 shadow-2xl">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden relative">
              {/* Dashboard Visualization */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="w-full max-w-4xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* AI Agent Column */}
                  <div className="animate-reveal delay-300 glass-card bg-black/30 rounded-xl p-4 md:col-span-1 flex flex-col h-full">
                    <div className="text-lg font-semibold mb-3">AI Agent Activity</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                          <MessageCircle size={18} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Personalized Messages</div>
                          <div className="text-white/60 text-xs">128 sent today</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                          <Phone size={18} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">AI Voice Calls</div>
                          <div className="text-white/60 text-xs">24 completed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                          <Calendar size={18} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Meetings Booked</div>
                          <div className="text-white/60 text-xs">12 this week</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                          <Zap size={18} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Growth Rate</div>
                          <div className="text-white/60 text-xs">+38% from last month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Dashboard */}
                  <div className="animate-reveal delay-500 glass-card bg-black/30 rounded-xl p-4 md:col-span-2 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-semibold">Client Acquisition Dashboard</div>
                      <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Live Data</div>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Success Rate</div>
                        <div className="text-2xl font-bold">86%</div>
                        <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full animate-pulse-slow" style={{width: '86%'}}></div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Leads Generated</div>
                        <div className="text-2xl font-bold">1,248</div>
                        <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-accent h-full rounded-full animate-pulse-slow" style={{width: '72%'}}></div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Response Rate</div>
                        <div className="text-2xl font-bold">62%</div>
                        <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full animate-pulse-slow" style={{width: '62%'}}></div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-xs text-white/60 mb-1">Conversion Rate</div>
                        <div className="text-2xl font-bold">42%</div>
                        <div className="mt-2 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-accent h-full rounded-full animate-pulse-slow" style={{width: '42%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/30 rounded-full blur-2xl"></div>
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center animate-reveal">
          <p className="text-sm text-foreground/60 uppercase tracking-wider mb-6">Trusted by innovative agencies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Agency One', 'Creative Studio', 'MarketBoost', 'LeadGenius', 'GrowthLabs'].map((company, i) => (
              <div key={i} className="text-foreground/40 font-semibold text-lg">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
