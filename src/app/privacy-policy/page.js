import React from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ICECAPCC',
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#020202] min-h-screen text-white font-sans selection:bg-white/20 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest font-medium group">
          <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Home
        </Link>
        
        <div className="relative">
          {/* Decorative blur */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-16 shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">ICECAPCC Privacy Policy</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase mb-12">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-12 text-white/70 leading-relaxed font-light">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">1. Introduction</h2>
                <div className="space-y-4">
                  <p>Welcome to ICECAPCC ("we," "our," or "us"). We are an innovation studio that designs, develops, and operates a wide range of mobile and web applications (collectively, the "Services" or "Apps").</p>
                  <p>This Privacy Policy applies to all applications developed and operated by ICECAPCC, including but not limited to our Sovereign Intelligence Ecosystems (such as Pico), productivity tools, analytics platforms, and any future applications released under the ICECAPCC brand.</p>
                  <p>We are fundamentally committed to data sovereignty, user privacy, and zero-knowledge architectures. Our philosophy is that your personal data is yours, and our architecture reflects that belief.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">2. Information We Collect</h2>
                <div className="space-y-4">
                  <p>The type of information we collect depends entirely on which ICECAPCC App you are using. Because we deploy a wide range of applications, data collection falls into several distinct categories:</p>
                  
                  <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-medium text-white mb-4">A. Zero-Knowledge & Local-First Apps (e.g., Pico)</h3>
                    <ul className="space-y-3 list-none">
                      <li className="flex gap-3"><span className="text-blue-400">✦</span> <span><strong>No Centralized PII Storage:</strong> We do not collect, store, or have access to your personal psychological profiles, baseline instincts, or private chat logs.</span></li>
                      <li className="flex gap-3"><span className="text-blue-400">✦</span> <span><strong>On-Device Processing:</strong> Audio data, biometrics, and text logs are processed entirely on your local device or via stateless third-party APIs that do not retain your data.</span></li>
                      <li className="flex gap-3"><span className="text-blue-400">✦</span> <span><strong>Swarm Intelligence:</strong> We may facilitate the peer-to-peer transmission of strictly anonymized, generalized biological or behavioral heuristics. This data is completely decoupled from your Personally Identifiable Information (PII).</span></li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-medium text-white mb-4">B. Standard Web & Cloud Applications</h3>
                    <ul className="space-y-3 list-none">
                      <li className="flex gap-3"><span className="text-purple-400">✦</span> <span><strong>Account Data:</strong> Name, email address, and authentication credentials.</span></li>
                      <li className="flex gap-3"><span className="text-purple-400">✦</span> <span><strong>Usage Data:</strong> Diagnostic logs, crash reports, and interaction analytics to improve our Services.</span></li>
                      <li className="flex gap-3"><span className="text-purple-400">✦</span> <span><strong>Device Information:</strong> IP address, browser type, operating system, and unique device identifiers.</span></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">3. How We Use Your Information</h2>
                <div className="space-y-4">
                  <p>We use collected information solely to provide, maintain, and improve our Services, including facilitating End-to-End Encrypted (E2EE) backups to your personal cloud storage, diagnosing crashes, and ensuring platform stability.</p>
                  <p className="font-medium text-white p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">We will never sell your personal data to advertisers or data brokers.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">4. Decentralized and Peer-to-Peer Networks</h2>
                <div className="space-y-4">
                  <p>Some ICECAPCC Apps utilize decentralized mesh networking or WebRTC to bypass centralized corporate servers. When participating in a "Swarm" or local mesh network, your device acts as a node. While payload data is heavily anonymized and encrypted, participating in P2P networks inherently exposes your node's IP address to other peers. By using these features, you consent to this fundamental networking requirement.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">5. Contact Us</h2>
                <div className="space-y-4">
                  <p>If you have any questions or concerns about this Privacy Policy or ICECAPCC's data practices, please contact us at:</p>
                  <div className="flex flex-col gap-2 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-4"><span className="text-white/40 uppercase text-xs tracking-widest w-16">Email</span> <a href="mailto:privacy@icecap.cc" className="text-white hover:text-blue-400 transition-colors">privacy@icecap.cc</a></div>
                    <div className="flex items-center gap-4"><span className="text-white/40 uppercase text-xs tracking-widest w-16">Website</span> <span className="text-white">icecap.cc</span></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
