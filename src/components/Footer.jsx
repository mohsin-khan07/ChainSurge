import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        Made by{" "}
        <a
          className="customLink"
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
          className="customLink"
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
