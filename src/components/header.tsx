import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex text-center">
      <div className="absolute top-2 right-2 text-white">
        <Link href="#">
          <a>#</a>
        </Link>
      </div>
      <nav className="flex space-x-4 hidden">
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/work">
          <a>work</a>
        </Link>
        <Link href="/can">
          <a>can</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;