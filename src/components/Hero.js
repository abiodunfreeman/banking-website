import "./hero.css";
export default function Hero() {
  return (
    <div id="hero-container">
      <div className="" id="hero-desc">
        <h1>
          Next generation <br />
          digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account <br /> willbe a
          one-stop shop for spending, saving, <br /> budgeting, investing, and
          much more.
        </p>
        <button className="req-btn">Request Invite</button>
      </div>
      <div className="" id="hero-img-container">
        {/* <img id="hero-phones" src="./images/image-mockups.png" alt="image of"/> */}
      </div>
    </div>
  );
}
