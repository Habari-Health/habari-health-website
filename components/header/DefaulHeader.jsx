import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0 fs-1">
            HABARI HEALTH
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            <Link
              href="/"

              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              {"Contact Us"}
            </Link>
          </div>{" "}
          {/* /.right-widget */}
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
