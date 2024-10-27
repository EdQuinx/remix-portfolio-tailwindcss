import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const NavItems = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/about", text: "About me" },
  { id: 3, href: "/services", text: "Services" },
  { id: 4, href: "/skills", text: "Skills" },
  { id: 5, href: "/portfolio", text: "Portfolio" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#fff9ec]">
      <section className="container mx-auto py-4">
        <nav className="flex justify-between px-5 items-center flex-[inherit]">
          <a href='#' className="">
            <h4 className="text-[var(--dark-color)] text-xl font-bold">Ed<span className="text-[var(--primary-color)]">Quinx</span></h4>
          </a>
          <div className="basis-auto hidden lg:flex justify-end items-center flex-grow">
            <ul className="ml-auto mr-auto flex gap-5 uppercase font-semibold text-sm leading-9 tracking-[3px]">
              {NavItems.map((item) => (
                <li key={item.id} className="ed-nav-item">
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:ml-auto lg:block">
            <a href="/" className="inline-block px-5 py-2 text-sm text-white uppercase font-[500] leading-[1.5] tracking-[2px] bg-[var(--primary-color)] border-2 border-[var(--primary-color)] transition-all ease-in-out duration-300 hover:bg-[var(--dark-color)] hover:border-[var(--dark-color)] shadow-contact-normal hover:shadow-contact-hover">Contact now</a>
          </div>
          <div className="block cursor-pointer lg:hidden transition-all ease-in-out duration-300" onClick={() => toggleMenu()}>
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {!isMenuOpen ? <CiMenuBurger size={32} /> : <MdClose size={32} />}
            </div>
          </div>
        </nav>
      </section>
      <div className={`absolute w-full z-50 bg-stone-50 lg:hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? 'border-y-2 max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} border-[var(--dark-color)]`}>
        <ul className="flex flex-col gap-3 uppercase font-semibold text-sm leading-9 tracking-[3px] px-3">
          {NavItems.map((item) => (
            <li key={item.id} className="ed-nav-li-item">
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>)
}

export default Header