import Logo from "./Logo";
import SearchQuery from "./SearchQuery";

function Hero() {
  return (
    <div className="grid gap-8 bg-secondary py-12 justify-center">
      <Logo />
      <SearchQuery />
    </div>
  );
}

export default Hero;
