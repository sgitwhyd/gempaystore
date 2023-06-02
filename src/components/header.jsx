import { Stack } from "react-bootstrap";
import logo from "../assets/logo.png";

const route = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/cek-transaksi",
		name: "Cek Transaksi",
	},
	{
		path: "/daftar-harga",
		name: "Daftar Harga",
	},
];

const Header = () => {
	return (
		<header>
			<Stack
				as='nav'
				direction='horizontal'
				className='justify-content-between align-items-center'>
				<Stack as={"div"} direction='horizontal' gap={1}>
					<img src={logo} alt='logo' />
					<Stack
						as='div'
						direction='horizontal'
						className='justify-content-between align-items-center'>
						<Stack as='ul' direction='horizontal' className='navlinks__wrapper'>
							{route.map((item, index) => (
								<li key={index}>
									<a
										href={item.path}
										className={`${index % 2 === 0 ? "active" : null}`}>
										{item.name}
									</a>
								</li>
							))}
						</Stack>
					</Stack>
				</Stack>
				<Stack
					as={"div"}
					direction='horizontal'
					gap={5}
					className='navbutton__wrapper'>
					<a href='#'>Daftar</a>
					<button className='btn'>Masuk</button>
				</Stack>
			</Stack>
		</header>
	);
};

export default Header;
