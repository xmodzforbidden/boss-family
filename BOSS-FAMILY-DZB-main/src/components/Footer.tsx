const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BOSS FAMILY</h3>
            <p className="text-muted-foreground">
              Premium gaming tools and cheats for the elite gaming community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground">Home</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-foreground">Benefits</a></li>
              <li><a href="#cheats" className="text-muted-foreground hover:text-foreground">Cheats</a></li>
              <li><a href="#status" className="text-muted-foreground hover:text-foreground">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">License Agreement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BOSS FAMILY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;