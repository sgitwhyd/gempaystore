import { Row, Col, Stack } from "react-bootstrap";
import FB from "../assets/icon/facebook.png";
import IG from "../assets/icon/instagram.png";
import LINE from "../assets/icon/line.png";
import LogoSingle from "../assets/logo-single.png";

const partnershipLink = [
	{
		path: "#",
		name: "Join Reseller",
	},
	{
		path: "#",
		name: "Dashboard",
	},
	{
		path: "#",
		name: "Deposit",
	},
	{
		path: "#",
		name: "Daftar Harga",
	},
];

const siteMap = [
	{
		path: "#",
		name: "Home",
	},
	{
		path: "#",
		name: "Masuk",
	},
	{
		path: "#",
		name: "Buat Akun",
	},
	{
		path: "#",
		name: "Cek Transaksi",
	},
	{
		path: "#",
		name: "Kontak Kami",
	},
	{
		path: "#",
		name: "Reviews",
	},
];

const support = [
	{
		path: "#",
		name: "Whatsapp",
	},
	{
		path: "#",
		name: "Telegram",
	},
	{
		path: "#",
		name: "Email",
	},
];

const legal = [
	{
		path: "#",
		name: "Privacy Policy",
	},
	{
		path: "#",
		name: "Term & Conditions",
	},
];

const Footer = () => {
	return (
		<footer>
			<Row>
				<Col sm={12} md={4}>
					<Stack as={"div"} direction='vertical'>
						<img src={LogoSingle} alt='logo' className='logo' />
						<p className='my-5 text-white footer-summary'>
							Supplier top up game & voucher terlaris, murah, aman legal 100%
							buka 24 Jam dengan payment terlengkap Indonesia
						</p>
						<Stack as={"div"} direction='horizontal' className='footer__sosmed'>
							<a href='#'>
								<img src={FB} alt='facebook' />
							</a>{" "}
							<a href='#'>
								<img src={IG} alt='instagram' />
							</a>{" "}
							<a href='#'>
								<img src={LINE} alt='line' />
							</a>{" "}
						</Stack>
					</Stack>
				</Col>
				<Col sm={12} md={2}>
					<Stack
						as={"div"}
						direction='vertical'
						className='footer__menu__wrapper'>
						<h5>Partnership</h5>
						<Stack as={"ul"} direction='vertical'>
							{partnershipLink.map((item) => (
								<li key={item.id}>
									<a href='#'>{item.name}</a>
								</li>
							))}
						</Stack>
					</Stack>
				</Col>
				<Col sm={12} md={2}>
					<Stack
						as={"div"}
						direction='vertical'
						className='footer__menu__wrapper'>
						<h5>Site Map</h5>
						<Stack as={"ul"} direction='vertical'>
							{siteMap.map((item) => (
								<li key={item.id}>
									<a href='#'>{item.name}</a>
								</li>
							))}
						</Stack>
					</Stack>
				</Col>
				<Col sm={12} md={2}>
					<Stack
						as={"div"}
						direction='vertical'
						className='footer__menu__wrapper'>
						<h5>Support</h5>
						<Stack as={"ul"} direction='vertical'>
							{support.map((item) => (
								<li key={item.id}>
									<a href='#'>{item.name}</a>
								</li>
							))}
						</Stack>
					</Stack>
				</Col>
				<Col sm={12} md={2}>
					<Stack
						as={"div"}
						direction='vertical'
						className='footer__menu__wrapper'>
						<h5>Legal</h5>
						<Stack as={"ul"} direction='vertical'>
							{legal.map((item) => (
								<li key={item.id}>
									<a href='#'>{item.name}</a>
								</li>
							))}
						</Stack>
					</Stack>
				</Col>
			</Row>
			<hr />
			<p className='footer-copyright'>
				© 2023 PT. Digital Gempay Store All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
