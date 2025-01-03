 
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-8 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#ff4500]">Aye</span>sha <span className="text-[#ff4500]">Naz</span>eer
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-[#ff4500] transition-colors">
            Home
          </Link>
          <Link href="/product" className="hover:text-[#ff4500] transition-colors">
            product
          </Link>
          <Link href="/add Card" className="hover:text-[#ff4500] transition-colors">
            add Card
          </Link>
          <Link href="/contact" className="hover:text-[#ff4500] transition-colors">
            Contact
          </Link>
        </div>
      </div>

       {/* Mobile Navigation Menu (Static Placeholder) */}
      <div className="md:hidden mt-4 space-y-4">
        <Link href="/" className="block hover:text-[#ff4500] transition-colors">
          Home
        </Link>
        <Link href="/product" className="block hover:text-[#ff4500] transition-colors">
        Products
        </Link>
        <Link href="/add Card" className="block hover:text-[#ff4500] transition-colors">
          add Card
        </Link>
        <Link href="/contact" className="block hover:text-[#ff4500] transition-colors">
          Contact
        </Link> 
       </div> 
    </nav>
  )
}
