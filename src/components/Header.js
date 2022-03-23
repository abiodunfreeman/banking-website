import "./header.css";
export default function Header() {
  return (
    <header>
      <img id="logo" src="./images/logo.svg" />

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </nav>
      <button className="req-btn">Request Invite</button>
    </header>
  );
}
