import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";
const Header = () => {
  return (
    <header className=" text-white xl:py-12 py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* nombre */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jairo2santos
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>hire me</Button>
          </Link>
         </div>
          {/* mobile nav */}

          <div className="xl:hidden ">
            <MobileNav/>
          </div>


        
      </div>
    </header>
  );
};
export default Header;
