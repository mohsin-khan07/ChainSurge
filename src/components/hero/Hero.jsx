import Logo from "./Logo";
import SearchQuery from "./SearchQuery";

function Hero() {
  return (
    <div className="flex flex-col gap-8 bg-secondary py-12 px-5 txns:px-8 md:px-14 lg:px-24 justify-center items-center">
      <Logo />
      <SearchQuery />
    </div>
  );
}

export default Hero;
