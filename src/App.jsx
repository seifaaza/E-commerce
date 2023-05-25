
import Landing from "./pages/home/Home";
import "./App.css";
import "./App.scss";
import Navbar from "./navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Contactez from "./pages/contactez/Contactez";
import Footer from "./footer/Footer";
import Blog from "./pages/blog/Blog";
import Error from "./error/Error";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import Confirmer from "./pages/confirmer/Confimer";
import Diagnostic from "./pages/diagnostic/Diagnostic";
import Market from "./pages/market/Market";

function App() {
  // arrow up button

  // const [showArrowUp, setShowArrowUp] = useState(false);
  // const show = () => {
  //   window.scrollY >= 1000 ? setShowArrowUp(true) : setShowArrowUp(false);
  // };
  // window.addEventListener("scroll", show);
  // const arrowUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="relative bg-slate-50 dark:bg-dark overflow-hidden">
      <Navbar />
      <div className="relative main-container py-16 z-10">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/market" element={<Market />} />
          <Route path="/demander-un-service" element={<Confirmer />} />
          <Route path="/confirmer" element={<Confirmer />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/contactez-nous" element={<Contactez />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-1 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-2 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-3 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-4 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-5 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-6 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-7 dark:opacity-5"
      />
      <img
        src="assets/shapes/blur.png"
        alt=""
        className="blur-shape blur-8 dark:opacity-5"
      />
      {/* <img
        src="/assets/shapes/arrow-up.svg"
        className={`${
          showArrowUp ? "" : "block"
        }fixed right-5 bottom-10 w-10 z-40 opacity-50 hover:mb-2 hover:opacity-100 duration-700 ease-in-out cursor-pointer tablet:w-12 laptop:right-10 desktop:w-16 desktop:right-16`}
        onClick={arrowUp}
        alt="arrow-up"
      /> */}
    </div>
  );
}

export default App;
