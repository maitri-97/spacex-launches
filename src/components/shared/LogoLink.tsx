import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/logo.svg";
import { styleHeaderLogo } from "../../assets/css/styles";

const LogoLink = () => {
  return (
    <Link to={"/"} className={styleHeaderLogo}>
      <img src={Logo} alt="Logo" />
    </Link>
  );
};

export default LogoLink;
