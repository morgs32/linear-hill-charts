export default function SplitbeeSidebar() {
  return (
    <nav className="sticky top-0 flex flex-col w-40 h-full max-h-screen p-2 text-sm lg:w-56">
      <div className="grid w-full grid-cols-1 gap-2">
        <div>
          <a
            aria-label="Analytics"
            className="w-full text-sm font-medium rounded flex justify-center md:grid gap-2 transition-all duration-150 items-center text-gray-900 hover:text-gray-900 bg-gray-300 p-2"
            href="/"
            style={{ gridTemplateColumns: '20px 1fr' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="currentColor" className="text-cool-gray-600" style={{ width: 20, height: 20 }}>
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="hidden md:inline-block">All</span>
          </a>
        </div>
        <div>
          <a aria-label="Users" className="w-full text-sm font-medium rounded flex justify-center md:grid gap-2 transition-all duration-150 items-center text-gray-700 hover:text-gray-800 hover:bg-gray-300 bg-transparent p-2" href="/projects/stackshirts.com/users" style={{ gridTemplateColumns: '20px 1fr' }}>
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="currentColor" className="text-gray-500" style={{ width: 20, height: 20 }}>
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <span className="hidden md:inline-block">Active</span>
          </a>
        </div>
        <div>
          <a aria-label="Users" className="w-full text-sm font-medium rounded flex justify-center md:grid gap-2 transition-all duration-150 items-center text-gray-700 hover:text-gray-800 hover:bg-gray-300 bg-transparent p-2" href="/projects/stackshirts.com/users" style={{ gridTemplateColumns: '20px 1fr' }}>
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="currentColor" className="text-gray-500" style={{ width: 20, height: 20 }}>
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <span className="hidden md:inline-block">In planning</span>
          </a>
        </div>
        <div>
          <a aria-label="Users" className="w-full text-sm font-medium rounded flex justify-center md:grid gap-2 transition-all duration-150 items-center text-gray-700 hover:text-gray-800 hover:bg-gray-300 bg-transparent p-2" href="/projects/stackshirts.com/users" style={{ gridTemplateColumns: '20px 1fr' }}>
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="currentColor" className="text-gray-500" style={{ width: 20, height: 20 }}>
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm8 0a3 3 0 11-6 0 3 3 0 016 0zm-4.07 11c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <span className="hidden md:inline-block">Settings</span>
          </a>
        </div>
        
      </div>
    </nav>
  )
}
