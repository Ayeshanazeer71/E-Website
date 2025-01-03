// import Link from 'next/link'
// import { ShoppingCart, Facebook, Twitter, Instagram } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link href="/" className="hover:text-[#4169E1]">Home</Link></li>
//               <li><Link href="/products" className="hover:text-[#4169E1]">Products</Link></li>
//               <li><Link href="/about" className="hover:text-[#4169E1]">About</Link></li>
//               <li><Link href="/cart" className="hover:text-[#4169E1] flex items-center">
//                 <ShoppingCart size={18} className="mr-1" />
//                 Cart
//               </Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Shop Categories</h3>
//             <ul className="space-y-2">
//               <li><Link href="/products?category=electronics" className="hover:text-[#4169E1]">Electronics</Link></li>
//               <li><Link href="/products?category=jewelry" className="hover:text-[#4169E1]">Jewelry</Link></li>
//               <li><Link href="/products?category=men's clothing" className="hover:text-[#4169E1]">Men's Clothing</Link></li>
//               <li><Link href="/products?category=women's clothing" className="hover:text-[#4169E1]">Women's Clothing</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">About Our Store</h3>
//             <p className="text-sm">We offer a wide range of high-quality products sourced from the Fake Store API. Our goal is to provide an excellent shopping experience with competitive prices and a diverse selection.</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4 mb-4">
//               <Link href="#" className="hover:text-[#4169E1]"><Facebook size={24} /></Link>
//               <Link href="#" className="hover:text-[#4169E1]"><Twitter size={24} /></Link>
//               <Link href="#" className="hover:text-[#4169E1]"><Instagram size={24} /></Link>
//             </div>
//             <p className="text-sm">Follow us on social media for the latest updates, new product arrivals, and special offers!</p>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-200 text-center">
//           <p>&copy; 2025 Your Fake Store E-commerce. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import Link from 'next/link'
import { ShoppingCart, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#4169E1]">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#4169E1]">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#4169E1]">About</Link></li>
              <li><Link href="/cart" className="hover:text-[#4169E1] flex items-center">
                <ShoppingCart size={18} className="mr-1" />
                Cart
              </Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=electronics" className="hover:text-[#4169E1]">Electronics</Link></li>
              <li><Link href="/products?category=jewelry" className="hover:text-[#4169E1]">Jewelry</Link></li>
              <li><Link href="/products?category=men's clothing" className="hover:text-[#4169E1]">Men's Clothing</Link></li>
              <li><Link href="/products?category=women's clothing" className="hover:text-[#4169E1]">Women's Clothing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">We’d love to hear from you! Reach out to us for any queries or support:</p>
            <ul className="space-y-2 mt-4">
              <li>Email: <a href="mailto:support@fakestore.com" className="hover:text-[#4169E1]">support@fakestore.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-[#4169E1]">+1 234-567-890</a></li>
              <li>Address: 123 Fake Street, Cityville, USA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-[#4169E1]"><Facebook size={24} /></Link>
              <Link href="#" className="hover:text-[#4169E1]"><Twitter size={24} /></Link>
              <Link href="#" className="hover:text-[#4169E1]"><Instagram size={24} /></Link>
            </div>
            <p className="text-sm">Follow us on social media for the latest updates, new product arrivals, and special offers!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2025 Your Fake Store E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
