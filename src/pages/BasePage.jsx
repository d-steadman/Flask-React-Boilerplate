import { Link, Outlet } from "react-router-dom";

/* Implements a base page wrapper. */

export default function BasePage() {
  return (
    <main className="min-h-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <div class="navbar bg-primary px-2">
      <div class="flex-1">
        <Logo size="8" />
        <Link className="pl-2 text-2xl text-primary-content font-bold" to="/">
          BubbleSearch
        </Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-primary font-bold" to="trending">
              Trending Tags
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary font-bold" to="generator">
              Tag Generator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer class="footer p-10 bg-primary text-primary-content">
      <aside>
        <Logo size="24" />
        <p className="text-md font-bold">Wil Steadman ©</p>
        <p>Made with Love (2024)</p>
      </aside>
      <nav>
        <h6 class="footer-title">Services</h6>
        <Link class="link link-hover" to="trending">
          Trending Tags
        </Link>
        <Link class="link link-hover" to="generator">
          Tag Generator
        </Link>
        <Link class="link link-hover">Chrome Extension</Link>
      </nav>
      <nav>
        <h6 class="footer-title">More</h6>
        <Link class="link link-hover">About Us</Link>
        <Link class="link link-hover">Contact</Link>
      </nav>
    </footer>
  );
}

function Logo({ size }) {
  return (
    <svg
      className={`fill-primary-content size-${size}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66.35 82.55"
    >
      <defs></defs>
      <path d="M47.03,23.51c0,1.44-.13,2.84-.38,4.2-10.38.19-18.74,8.56-18.94,18.93-1.36.25-2.77.38-4.2.38C10.53,47.02,0,36.5,0,23.51S10.53,0,23.51,0s23.52,10.53,23.52,23.51Z" />
      <path d="M66.35,47.02c0,10.68-8.65,19.33-19.32,19.33s-19.33-8.65-19.33-19.33c0-.13,0-.26.01-.38,9.62-1.73,17.21-9.31,18.94-18.93.13-.01.25-.01.38-.01,10.67,0,19.32,8.65,19.32,19.32Z" />
      <circle cx="20.51" cy="72.69" r="9.86" />
    </svg>
  );
}
