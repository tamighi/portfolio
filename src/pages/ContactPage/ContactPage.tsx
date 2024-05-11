import React from "react";
import { Appbar, Button, Input, ResponsivePage, TextArea } from "components";
import { email } from "services";

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
      <ResponsivePage className="grid grid-cols-1 xl:grid-cols-2">
        <form
          className="flex flex-col gap-3 min-w-[75%] rounded-lg bg-[#2c2c4f] self-center justify-self-center p-8"
          onSubmit={handleSubmit}
        >
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
          <Button disabled={loading} className="self-start" type="submit">
            {loading ? "Sending ..." : "Send"}
          </Button>
        </form>
        <div className="hidden xl:block rounded-2xl bg-gradient-to-r from-gray-800 to-indigo-900"></div>
      </ResponsivePage>
    </>
  );
};

export default ContactPage;
