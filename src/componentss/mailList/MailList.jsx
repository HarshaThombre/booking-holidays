import "./mailList.css";

export default function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTittle">Save time, save money !!!!</h1>
      <span className="mailDesc">
        Sign up & we'll send the best deal to you
      </span>
      <div className="mailInputContainer">
        <input type = "text" placeholder="your email"/>
        <button>subscribe</button>
      </div>
    </div>
  );
}
