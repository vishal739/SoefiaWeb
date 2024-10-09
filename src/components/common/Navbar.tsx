"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { X, List } from "@phosphor-icons/react"; // Icons for mobile menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-[5%] z-20 py-4 fixed top-0 left-0 right-0 text-[#3A5F8F] shadow-md">
      <div className="flex items-center justify-between">
        
        <Link href="/ ">
        <div className="flex items-center gap-2">
          <Image src="/soeifa.svg" height={40} width={40} alt="logo" />
          <h1 className="font-bold text-xl">Soefia Education</h1>
        </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 items-center text-gray-700 text-xl">
          <Link href="/">Home</Link>
          <Link href="/about-us">Company</Link>
          <Link href="/product">Product</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm items-center text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>Company</Link>
          <Link href="/product" onClick={() => setMenuOpen(false)}>Product</Link>
        </div>
      )}
    </nav>
  );
}
