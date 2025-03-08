
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { TrendingUp, Clock, Users, CheckCircle } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[30%] w-[40%] h-[40%] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-[30%] h-[30%] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="glass-card rounded-2xl p-2 shadow-xl">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Growth Metrics</h3>
                    <p className="text-white/60 text-sm">Before vs. After Growth Magnet AI</p>
                  </div>
                  
                  {/* Metrics Comparison */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Leads Generated</span>
                        <span className="text-primary">+308%</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-white/30 w-[22%]"></div>
                        <div className="h-full bg-primary animate-pulse-slow w-[78%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Response Rate</span>
                        <span className="text-primary">+267%</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-white/30 w-[24%]"></div>
                        <div className="h-full bg-primary animate-pulse-slow w-[76%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Meetings Booked</span>
                        <span className="text-primary">+425%</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-white/30 w-[16%]"></div>
                        <div className="h-full bg-primary animate-pulse-slow w-[84%]"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Time Saved</span>
                        <span className="text-accent">95%</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent animate-pulse-slow w-[95%]"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <TrendingUp size={20} className="text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">4.2x ROI</div>
                        <div className="text-white/60 text-xs">Average return on investment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              The Growth Advantage
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Focus on Closing Deals, Let AI <span className="gradient-text">Handle the Rest</span>
            </h2>
            
            <p className="text-xl text-foreground/70 mb-8">
              With Growth Magnet AI, you'll experience a transformative shift in how you acquire clients, saving time and multiplying results.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Save 38+ Hours Per Week</h3>
                  <p className="text-foreground/70">Eliminate manual prospecting and follow-ups with fully automated outreach.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">4x More Qualified Meetings</h3>
                  <p className="text-foreground/70">Book more high-quality appointments with decision-makers who need your services.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Consistent Results</h3>
                  <p className="text-foreground/70">Eliminate feast-or-famine cycles with a reliable pipeline of qualified prospects.</p>
                </div>
              </div>
            </div>
            
            <CTAButton size="lg">Experience the Difference</CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
