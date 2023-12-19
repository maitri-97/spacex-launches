import SearchButton from "./components/SearchButton";
import LogoLink from "./components/LogoLink";
import Container from "../container";

const Header = () => {
  return (
    <>
      <header className="app-header bg-transparent fixed top-0 start-0 w-full z-[4] sm:py-2 py-4">
        <Container>
          <div className="relative flex items-center justify-between">
            <div className="logo-wrap inline-block leading-[0]">
              <LogoLink />
            </div>
            <SearchButton />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
