
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-primary transition-colors">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-semibold">1. Introduction</h3>
              <p className="text-foreground/80 mt-2">
                Welcome to GrowthMagnet.ai ("Company," "we," "our," or "us"). Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (growthmagnet.ai) and use our services, including Content Creation, LinkedIn + Email Automation, and AI Voice Agent.
              </p>
              <p className="text-foreground/80 mt-2">
                By accessing or using our website and services, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Information We Collect</h3>
              <p className="text-foreground/80 mt-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 mt-2 text-foreground/80 space-y-1">
                <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, LinkedIn profile data, and other details you provide when using our services.</li>
                <li><span className="font-medium">Usage Data:</span> Information about your interactions with our website, including IP address, browser type, and device information.</li>
                <li><span className="font-medium">Third-Party Data:</span> Information from LinkedIn and email platforms necessary for automation and content creation.</li>
                <li><span className="font-medium">AI Voice Agent Data:</span> Recordings and transcripts of AI interactions for service improvement.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. How We Use Your Information</h3>
              <p className="text-foreground/80 mt-2">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-5 mt-2 text-foreground/80 space-y-1">
                <li>Provide and improve our content creation, LinkedIn + email automation, and AI voice agent services.</li>
                <li>Personalize user experience and offer tailored recommendations.</li>
                <li>Process transactions and provide customer support.</li>
                <li>Ensure compliance with LinkedIn's policies and other applicable regulations.</li>
                <li>Protect against fraud, unauthorized access, and abuse.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Data Sharing & Disclosure</h3>
              <p className="text-foreground/80 mt-2">
                We do not sell or rent your personal information. However, we may share data with:
              </p>
              <ul className="list-disc pl-5 mt-2 text-foreground/80 space-y-1">
                <li><span className="font-medium">Service Providers:</span> Third-party partners that assist in providing our services (e.g., hosting, analytics, AI processing, automation tools).</li>
                <li><span className="font-medium">LinkedIn & Email Services:</span> To facilitate automation and content distribution as per user requests.</li>
                <li><span className="font-medium">Legal Authorities:</span> If required to comply with legal obligations or protect our rights.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Data Security</h3>
              <p className="text-foreground/80 mt-2">
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. User Choices & Rights</h3>
              <p className="text-foreground/80 mt-2">
                You have the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 text-foreground/80 space-y-1">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing emails and data processing for automation purposes.</li>
                <li>Request data portability or restriction of data usage.</li>
              </ul>
              <p className="text-foreground/80 mt-2">
                For any requests, contact us at <span className="font-medium">bhavesh@growthmagnet.ai</span>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">7. Third-Party Links & Integrations</h3>
              <p className="text-foreground/80 mt-2">
                Our website may contain links to third-party services, including LinkedIn and email platforms. We are not responsible for their privacy policies, and we encourage you to review their terms before using their services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">8. Cookies & Tracking Technologies</h3>
              <p className="text-foreground/80 mt-2">
                We use cookies and similar technologies to enhance user experience and track website performance. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">9. Changes to This Privacy Policy</h3>
              <p className="text-foreground/80 mt-2">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">10. Contact Us</h3>
              <p className="text-foreground/80 mt-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground/80 mt-2">
                GrowthMagnet.ai<br />
                Email: <span className="font-medium">bhavesh@growthmagnet.ai</span><br />
                Website: <span className="font-medium">growthmagnet.ai</span>
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
