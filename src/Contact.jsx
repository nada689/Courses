import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_id' , 'template_id' ,
    //  e.target , public_key)
    emailjs
      .sendForm(
        "service_4xz67ya",
        "template_8zwh1yk",
        e.target,
        "K2rNbzGbR8yL4Y0e0"
      )
      .then(
        () => {
          alert("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="my-5 w-50 container mx-atuo">
        <h1>Contact Component</h1>

        <form action="" onSubmit={sendEmail}>
          <div className="form-group my-2">
            <label htmlFor="email" hidden></label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group my-2">
            <label htmlFor="message" hidden></label>
            <textarea name="message" id="message"></textarea>
          </div>
          <input type="submit" value="Send Email" />
        </form>
      </div>
    </>
  );
}
