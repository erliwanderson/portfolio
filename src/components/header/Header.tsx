
function Header() {
  return (
    <>
      <header className="w-full h-20  bg-gradient-to-tr pl-3 from-black to-blue-900 py-5 px-3">
        <div className="flex justify-between max-w-7xl mx-auto font-bold text-white ">
          <h1 className="text-3xl">Wanderson Erli</h1>
          <nav className="gap-7  text-2xl hidden lg:flex ">
            <a href="#">Sobre</a>
            <a href="#">Projetos</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
