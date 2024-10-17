// utils/emailUtils.js
import emailjs from "@emailjs/browser";

export const sendEmail = (form, setLoading, setSuccessMessage) => {
  setLoading(true);

  if (
    !form.current.user_name.value ||
    !form.current.user_email.value ||
    !form.current.message.value
  ) {
    setSuccessMessage("Please fill out all fields.");
    setLoading(false);
    return;
  }

  emailjs
    .sendForm(
      "service_zy1oqvf",
      "template_rbmt8va",
      form.current,
      "YwJIiLEPe-Xm3FKSC"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccessMessage("Message sent successfully! 👍");
        form.current.reset();
        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);
      },
      (error) => {
        console.log(error.text);
        setSuccessMessage("Failed to send message. Please try again.");
      }
    )
    .finally(() => setLoading(false));
};
