export default function Header() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
      <nav className="flex w-full items-center justify-between flex-wrap p-6 bg-slate-100">
        <div className="flex items-center flex-shrink-0 text-gray mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="12" height="18" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="m216 23.86c0-23.8-30.65-32.77-44.15-13.04-123.85 181.03 52.15 189.18 52.15 277.18 0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5-26.77 28.12-54.57 76.29-54.57 134.96 0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" /></svg>
          <span className="font-semibold text-xl tracking-tight">Devcamp Products</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded border-gray-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="products" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">
              Products
            </a>
            <a href="about" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">
              About us
            </a>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray border-gray hover:border-transparent hover:text-gray-300 hover:bg-white mt-4 lg:mt-0">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}