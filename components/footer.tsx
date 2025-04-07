import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">KAGAZ</h5>
            <p>
              Transforming textile waste into innovative, eco-friendly chart papers and exam PADs for students, teachers, and
              professionals.
            </p>
           <div className="social-links mt-4 flex gap-4">
              <a
              href="https://www.instagram.com/kagaz_save_soil/?igsh=Y2J2OGtnazFwMTUx#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              >
               <img
                src="insta logo.png"
                alt="Instagram"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src="linkedin-logo.png"
              alt="LinkedIn"
              width={25}
              height={25}
              className="hover:scale-110 transition-transform duration-200"
            />
           </a>
          </div>

          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-light">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/process" className="text-decoration-none text-light">
                  Process
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/products" className="text-decoration-none text-light">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/impact" className="text-decoration-none text-light">
                  Impact
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-2">
                <i className="bi bi-geo-alt"></i> Krishnan kovil, Srivilliputtur, India
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope"></i> 
                <a href="mailto:team.kagazofficial@gmail.com" className="text-decoration-none">
                  team.kagazofficial@gmail.com
                  </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-phone"></i> +1 411 066 7987
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">&copy; {currentYear} KAGAZ. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

