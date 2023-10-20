import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="tact">
        <p>
          Contact <strong>Toyomo Industrial Supplies Ghana Limited</strong> for
          Mining Support Services Toyomo Industrial Supplies Ghana Limited
          provides comprehensive support services to mining companies of all
          sizes in Ghana. We offer a wide range of services including
          Warehousing,supply chain and logistics management, safety and more. If
          you would like to learn more about how Toyomo Industrial Supplies
          Ghana Limited can meet your mining support services needs, please
          contact us directly at your convenience.
        </p>
      </div>
      <div className="con">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
          <button className="send">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
