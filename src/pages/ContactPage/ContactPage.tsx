import React from "react";
import { Appbar, Button, Input, ResponsivePage, TextArea } from "components";
import { email } from "services";

import "./ContactPage.css";

const ContactPage = () => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    email
      .send({ name: form.name, email: form.email, message: form.message })
      .then(
        () => {
          setLoading(false);
          alert("Message sent !");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong ...");
        }
      );
  };
  return (
    <>
      <Appbar />
      <ResponsivePage className="ContactPage">
        <form className="ContactFormCard" onSubmit={handleSubmit}>
          <h2>Contact me !</h2>
          <Input
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
          />
          <TextArea
            name="message"
            rows={10}
            placeholder="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            disabled={loading}
            className="ContactFormSendButton"
            type="submit"
          >
            {loading ? "Sending ..." : "Send"}
          </Button>
        </form>
        <div className="ContactRight"></div>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;
