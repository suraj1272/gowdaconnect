import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setError("Name, email, and message are required");
        setLoading(false);
        return;
      }

      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Error submitting form. Please check if the server is running.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl font-semibold text-center mb-12">
          Contact Us Here
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT – CONTACT FORM */}
          <div className="bg-gray-100 p-8 rounded">

            <h2 className="text-xl font-semibold mb-6 text-center">
              Fill In The Form to Contact Us
            </h2>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="mb-4">
                <label className="block text-sm mb-1">
                  <span className="text-red-500">*</span> Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label className="block text-sm mb-1">
                  <span className="text-red-500">*</span> Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* PHONE */}
              <div className="mb-4">
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-sm mb-1">
                  <span className="text-red-500">*</span> Enter A Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter A Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm resize-none"
                  required
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3 rounded text-sm font-medium transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT – CONTACT INFO */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
              How Can We Help You?
            </h2>

            <p className="text-sm text-gray-700 mb-4">
              You may contact us using the information below:
            </p>

            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Merchant Legal entity name:</strong> KAPIL ASHUTOSH INGALE
              </p>

              <p>
                <strong>Registered Address:</strong><br />
                623 Urban Flora C Block<br />
                Aecs Layout, Bangalore, Karnataka<br />
                PIN: 560037
              </p>

              <p>
                <strong>Operational Address:</strong><br />
                623 Urban Flora C Block<br />
                Aecs Layout, Bangalore, Karnataka<br />
                PIN: 560037
              </p>

              <p>
                <strong>Telephone No:</strong> 8431932893
              </p>

              <p>
                <strong>E-Mail ID:</strong> ingalekapil@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
