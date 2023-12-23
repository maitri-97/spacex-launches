import { useEffect, useState } from "react";
import Container from "./shared/Container";
import LogoLink from "./shared/LogoLink";

const Header = () => {
  const [activeBg, setActiveBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setActiveBg(true) : setActiveBg(false);
    });
  }, []);

  return (
    <>
      <header
        className={`app-header ${
          activeBg ? "bg-black" : "bg-transparent"
        } fixed top-0 start-0 w-full z-[4] sm:py-2 py-4 transition-[background]`}
      >
        <Container>
          <div className="relative flex items-center justify-between">
            <div className="logo-wrap inline-block leading-[0]">
              <LogoLink />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
