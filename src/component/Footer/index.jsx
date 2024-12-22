import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: "url(/img/Footer.png)",
      }}
    >
      <div className="redes">
        <a href="https://www.facebook.com">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src="/img/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com">
          <img src="/img/Instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/logo.png" alt="Org" />
      <strong>Desarrollo Alura</strong>
    </footer>
  );
}

export default Footer;
