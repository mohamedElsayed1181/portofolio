export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Mohamed Elsayed Farid. All rights reserved.</p>
            {/* <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/mohamed-elsayed-b846a221a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-foreground transition-colors tracking-wide">LinkedIn</a>
                <a href="https://github.com/mohamedElsayed1181" className="hover:text-foreground transition-colors tracking-wide">GitHub</a>
            </div> */}
        </div>
    </footer>
  );
}
