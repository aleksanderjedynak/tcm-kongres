import Header from "./components/Headerq";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Organizers from "./components/Organizers";
import Hotel from "./components/Hotel";
import { Schedule } from "./components/Schedule";
export default function Example() {
  return (
    <div className="bg-white">
      <Header></Header>
      <main>
        <About></About>
        <Testimonials></Testimonials>
        <Schedule></Schedule>

        <Timeline></Timeline>
        <Hotel></Hotel>
        <Pricing></Pricing>
        <Organizers></Organizers>
        <Faqs></Faqs>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
