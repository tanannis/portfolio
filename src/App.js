import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SoftwareDevelopment from "./routes/SoftwareDevelopment";
import ApparelDesign from "./routes/ApparelDesign";
import Footer from "./components/Footer";

const App = () => {
	return (
    <>
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/software-development" element={<SoftwareDevelopment />} />
				<Route path="/apparel-design" element={<ApparelDesign />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
    <Footer />
    </>
	);
};

export default App;
