import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white/10 p-4">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href="/">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-white/20 px-3 py-2 text-white hover:border-white/40 hover:text-white"></button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div
          className="text-sm
            lg:flex-grow"
        >
          <Link href="/" target="_blank">
            First Steps
          </Link>
          <Link href="/" target="_blank">
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
}
