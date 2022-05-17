import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link href="/">
          <a className="d-flex align-items-center mb-2 mb-lg-0 me-2 text-white text-decoration-none">
            <Image width={40} height={40} src="/imgs/logo.png" alt="Logotipo TShape" />
          </a>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  </header>
)
