import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: faEnvelope,
      label: "Email",
      text: "ejimofordanielchukwuebuka@gmail.com",
      link: "mailto:ejimofordanielchukwuebuka@gmail.com",
    },
    {
      id: 2,
      icon: faPhone,
      label: "Phone",
      text: "08103439913",
      link: "tel:+2348103439913",
    },
    {
      id: 3,
      icon: faLinkedin,
      label: "LinkedIn",
      text: "linkedin.com/in/ejimofor-daniel",
      link: "https://www.linkedin.com/in/daniel-ejimofor",
    },
    {
      id: 4,
      icon: faLocationDot,
      label: "Location",
      text: "Nigeria",
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [state, handleSubmit] = useForm("mzdjbkrq");

  if (state.succeeded) {
    alert("Thanks for reaching out, your message has been sent");
  }

  return (
    <div
      style={{ backgroundImage: "url('/images/contactBg.png')" }}
      className="relative min-h-screen w-full overflow-hidden bg-[#050816] bg-cover bg-center px-5 py-8 text-gray-300 xl:px-20 xl:py-12"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#050816]/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-violet-500" />

              <h1 className="text-xl font-bold tracking-wide text-white xl:text-3xl">
                Contact Me
              </h1>
            </div>

            <p className="text-sm text-gray-400 xl:text-base">
              Let's build something impactful together.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
          >
            About Me
          </Link>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

          {/* Contact information */}
          <div className="rounded-2xl border border-white/5 bg-[#0F172A]/90 p-6 shadow-xl backdrop-blur-sm xl:p-8">

            <div className="mb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Get In Touch
              </p>

              <h2 className="mb-4 text-2xl font-bold text-white xl:text-3xl">
                Let's Build Something
              </h2>

              <p className="text-sm leading-7 text-gray-400 xl:text-base">
                I'm a Full-Stack Developer specializing in the MERN stack, with hands-on
                experience building responsive web applications, REST APIs, authentication
                systems, and database-driven features. I'm open to full-stack and frontend
                opportunities where I can contribute to real projects, collaborate with a
                development team, and continue growing as a developer.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <FontAwesomeIcon
                      icon={info.icon}
                      className="text-lg"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                      {info.label}
                    </p>

                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="block truncate text-sm text-gray-300 transition hover:text-violet-400"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-300">
                        {info.text}
                      </span>
                    )}
                  </div>

                  {info.link && info.link.startsWith("http") && (
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xs text-gray-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/5 bg-[#0F172A]/90 p-6 shadow-xl backdrop-blur-sm xl:p-8">

            <div className="mb-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Message Me
              </p>

              <h2 className="text-2xl font-bold text-white xl:text-3xl">
                Send Me a Message
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/60 focus:bg-white/[0.06]"
                />

                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/60 focus:bg-white/[0.06]"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about your project or opportunity..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-36 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500/60 focus:bg-white/[0.06]"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-900/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Send Message"}

                {!state.submitting && (
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            I usually respond as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
