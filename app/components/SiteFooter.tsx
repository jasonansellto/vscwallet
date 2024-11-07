import Link from "next/link";

const SiteFooter = () => (
  <footer className="bg-black text-center py-5" style={{ bottom: 0 }}>
    <div className="container px-5">
      <div className="text-white-50 small">
        <div className="mb-2" id="legal">
          © Cryptomask {new Date().getFullYear()}. All Rights Reserved.
        </div>
        <Link href="/privacy">Privacy</Link>
        <span className="mx-1">&middot;</span>
        <Link href="/terms">Terms</Link>
        <span className="mx-1">&middot;</span>
        <a href="/faq">FAQ</a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
