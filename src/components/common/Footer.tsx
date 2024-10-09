"use client";
import {
  LinkedinLogo
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending")
    const formData = new FormData(e.target as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
    });

    if (res.ok) {
      setStatus("Message Sent");
    } else {
      setStatus("Failed to send message");
    }
  };

  return (
    <footer className="bg-bg text-white py-[4%] px-[5%] border-t border-white border-opacity-20">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

            <form method="post" className="form" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <input
                  type="text"
                  id="name"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your message"
                  
                />
              </div>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                disabled={status=="Message Sent"}
              >
                {status}
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
              
              >
                Close
              </button>
              {/* {status && <span>{status}</span>} */}
            </form>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © 2024 Soefia Education Inc.
        </div>

        <div className="flex lg:flex-row flex-col gap-3 space-x-4 mb-4 md:mb-0 items-center">
          <Link href="/privacy">
            <span className="hover:text-blue-400">Privacy Policy</span>
          </Link>
          <Link href="/compliance">
            <span className="hover:text-blue-400">Compliance</span>
          </Link>
          {/* <Link href="/product">
            <span className="hover:text-blue-400">About Us</span>
          </Link> */}
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Contact Us
          </button>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/company/soefia-education-inc/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>

      {/* Contact Us Form */}
    </footer>
  );
}
