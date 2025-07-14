import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://localhost:8000/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Message sent successfully! ✅");
        e.target.reset();
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Failed to send. Please try again later.");
    }
  };

  return (
    <section id="contact" className="mt-20">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2">
        📬 Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-gray-800 border border-gray-700 p-3 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-gray-800 border border-gray-700 p-3 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full bg-gray-800 border border-gray-700 p-3 rounded text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded font-semibold"
        >
          Send Message
        </button>

        {status && <p className="text-sm mt-2 text-gray-300">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
