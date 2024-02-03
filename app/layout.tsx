import "./globals.css";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Blog from "./Blog/page";

export default function RootLayout() {
  return (
    <html lang="en">
        <Header/>
        <Hero/>
        <Blog/>
    </html>   
  );   
}   
   