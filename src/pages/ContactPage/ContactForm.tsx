import React from "react";

import { Input, TextArea } from "@/components";
import { email } from "@/services";
import { Button } from "@mui/material";

const ContactForm = () => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          alert("Something went wrong, sorry!");
        },
      );
  };
  return (
    <form
      className="flex flex-col gap-6 rounded-lg bg-secondary
    self-center justify-self-center p-8"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold">You write, I answer</h2>
      <div className="flex flex-col gap-4">
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
      </div>
      <Button
        variant="outlined"
        disabled={loading}
        className="self-end !text-white !border-inherit hover:!bg-blue-900"
        type="submit"
      >
        {loading ? "Sending ..." : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
