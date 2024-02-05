function Footer() {
  return (
    <div className="flex flex-col py-10 gap-4 justify-center items-center">
      <div>
        Made by{" "}
        <a
          className="link"
          href="https://twitter.com/khan_mohsin07"
          target="_blank"
          rel="noreferrer"
        >
          Mohsin Khan
        </a>
      </div>
      <div>
        Check out the{" "}
        <a
          className="link"
          href="https://github.com/mohsin-khan07/chain-surge"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Footer;
