'use client'

export default function Footer() {
  return (
	 <footer className="bg-black text-white py-4">
		<div className="container mx-auto text-center">
		  <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
		  <p className="text-sm">Follow us on social media</p>
		  <div className="flex justify-center space-x-4 mt-2">
			 <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
			 <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
			 <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
		  </div>
		</div>
	 </footer>
  )
}
