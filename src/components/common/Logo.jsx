import { logoPath } from "../../constants/common";
const Logo = () => {
  return (
    <>
      <img
        src={logoPath}
        alt="logo"
        height={50}
        width={50}
        className="size-12 sepia"
      />
    </>
  );
};

export default Logo;
