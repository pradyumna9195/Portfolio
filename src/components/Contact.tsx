import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Pradyumna9195@gmail.com",
      href: "mailto:Pradyumna9195@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7498807328",
      href: "tel:+917498807328",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/yourusername",
    },
  ];

  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="heading">Get in Touch</h2>
        <p className="subheading">
          Let's connect and discuss how we can work together on exciting
          projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-navy-50 rounded-lg">
                  <item.icon className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                  <div className="font-semibold text-navy-900">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form
            action="https://formsubmit.co/pradyumna9195@gmail.com"
            method="POST"
            className="card p-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
