import Header from "./Header";
import About from "./About";
import Pricing from "./Pricing";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Organizers from "./Organizers";
import Hotel from "./Hotel";
import { Schedule } from "./Schedule";
export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <main>
        <About></About>
        <Testimonials></Testimonials>
        <Schedule></Schedule>
        <Hotel></Hotel>
        <Pricing></Pricing>
        <Faqs></Faqs>
        <Organizers></Organizers>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
