import React from "react";
import ReactDOM from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import App from "./App.jsx";
import "./index.scss";
import "swiper/css";
import "react-photo-view/dist/react-photo-view.css";
import Layout from "./components/layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<PhotoProvider bannerVisible={false}>
			<Layout>
				<App />
			</Layout>
		</PhotoProvider>
	</React.StrictMode>
);
