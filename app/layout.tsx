import "./globals.css";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Blog from "./Blog/page";

export default function RootLayout() {
  return (
    <html lang="en">
      <div className="w-full h-auto fixed top-0 left-0 right-0 flex items-center justify-center">
        <Header/>
        </div>

        <div > 
        <Hero/>
        <Blog/>
        </div>
    </html>   
  );   
}   
   