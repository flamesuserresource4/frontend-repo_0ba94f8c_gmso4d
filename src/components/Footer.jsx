export default function Footer(){
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} — Crafted with care.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Dribbble</a>
          <a href="#" className="hover:text-gray-900">Behance</a>
          <a href="#" className="hover:text-gray-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
