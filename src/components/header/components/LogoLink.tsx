import { Link } from "react-router-dom";
import Logo from "../../../assets/images/svg/logo.svg";

const LogoLink = () => {
  return (
    <Link to={"/"} className="inline-block sm:h-[22px] sm:w-[165px] h-[27px] w-[210px] leading-[0]">
      <img src={Logo} alt="Logo" />
    </Link>
  );
};

export default LogoLink;
