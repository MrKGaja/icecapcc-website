export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 flex flex-col items-center justify-center bg-[#020202] z-20 relative">
      <div className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase font-light">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a 
          href="https://koushikgaja.top" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white font-medium hover:text-white/70 transition-colors"
        >
          Koushik Gaja
        </a>
      </div>
      <div className="mt-4 flex gap-6 text-white/40 text-xs tracking-wider">
        <a href="/privacy-policy" className="hover:text-white/70 transition-colors">
          Privacy Policy
        </a>
        <a href="/terms-and-conditions" className="hover:text-white/70 transition-colors">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}
