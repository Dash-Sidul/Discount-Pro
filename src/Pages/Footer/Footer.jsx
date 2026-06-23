import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary">
              Discount Pro
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} Discount Pro. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 font-medium">
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
            <a href="/brands" className="hover:text-primary transition">
              Brands
            </a>
            <a href="/profile" className="hover:text-primary transition">
              My Profile
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/your-facebook"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center mt-8 border-t pt-4 text-sm text-gray-500">
          Designed & Developed by{" "}
          <a
            href="https://github.com/Dash-Sidul"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Sidul Dash
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;