export default function Footer() {
  return (
    <footer className="bg-accent text-muted-foreground w-full py-12 mt-auto border-t border-border">
      <div className="flex flex-col items-center justify-center gap-6 px-6 text-center max-w-[1200px] mx-auto">
        <div className="font-semibold text-xl text-primary">Adopet</div>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="text-sm cursor-not-allowed hover:text-secondary transition-colors">Privacy Policy</span>
          <span className="text-sm cursor-not-allowed hover:text-secondary transition-colors">Terms of Service</span>
          <span className="text-sm cursor-not-allowed hover:text-secondary transition-colors">Volunteer</span>
          <span className="text-sm cursor-not-allowed hover:text-secondary transition-colors">Contact</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Adopet. All rights reserved. Together for every paw.
        </p>
      </div>
    </footer>
  );
}
