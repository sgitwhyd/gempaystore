import Footer from "./footer";
import Header from "./header";
import Flow from "../assets/images/flow.png";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div
				className='mx-auto'
				style={{
					maxWidth: "1600px",
				}}>
				{children}
				<div className='flow__container'>
					<img src={Flow} alt='flow' className='flow' />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
