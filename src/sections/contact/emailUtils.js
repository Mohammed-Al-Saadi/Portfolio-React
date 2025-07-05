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
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
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
