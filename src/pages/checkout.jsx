import Hero from "../assets/images/checkout-hero.png";
import { Col, Row, Stack } from "react-bootstrap";
import ArrowRightLight from "../assets/icon/arrow-right-light.svg";
import ItemSpecial from "../assets/images/item-special-img.png";
import DiamondImg from "../assets/images/diamond-img.png";

const rating = Array.from({ length: 5 }).map((_, index) => ({
	id: index,
}));

const testimonials = Array.from({ length: 5 }).map((_, index) => ({
	id: index,
	name: "John Doe",
	date: "26-05-2023 00:24:28",
	content: "“Proses topup nya cepat dan harga nya murah banget!”",
	rating: rating,
	history: "706 (625+81)",
}));

const diamondDummy = Array.from({ length: 9 }).map((_, index) => ({
	id: index,
	image: DiamondImg,
	title: "86 Diamonds",
	price: "Rp 10.000",
}));

const Checkout = () => {
	return (
		<>
			<div className='top-bg'>
				<img src={Hero} alt='hero' />
			</div>
			<section id='main-content'>
				<Row>
					<Col md={4}>
						<div className='box__procedures'>
							<p>
								Top up diamond Mobile Legends harga paling murah. Cara topup
								MLBB termurah :
							</p>
							<ul>
								<li>Masukan Id & server</li>
								<li>Pilih Nominal</li>
								<li>Masukan Jumlah</li>
								<li>Pilih Pembayaran</li>
								<li>Tulis Kode Promo (jika ada)</li>
								<li>Masukan No Whatsapp</li>
								<li>Klik Order Now & lakukan Pembayaran</li>
								<li>Diamonds otomatis masuk ke akun game</li>
							</ul>
						</div>
						<div className='box__testimonials'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>
									<i className='fa fa-star'></i>
								</div>
								<h4>Testimonials</h4>
							</Stack>
							<div className='box__content__wrapper'>
								{testimonials.map((item) => (
									<div key={item.id} className='box__content'>
										<Stack
											as={"div"}
											direction='horizontal'
											className='justify-content-between'>
											<Stack as={"div"} direction='vertical'>
												<div className='testi__author'>{item.name} </div>
												<p>
													<span>{item.history}</span> Diamonds
												</p>
											</Stack>
											<Stack
												as={"div"}
												direction='vertical'
												className='align-items-end'>
												<Stack
													as={"div"}
													direction='horizontal'
													className='justify-content-end'>
													{item.rating.map((item) => (
														<i key={item.id} className='fa fa-star'></i>
													))}
												</Stack>
												<p>{item.date}</p>
											</Stack>
										</Stack>

										<div className='content'>
											&quot;Proses topup nya cepat dan harga nya murah
											banget!&quot;
										</div>
									</div>
								))}

								<Stack
									as={"div"}
									direction='horizontal'
									className='box__footer'>
									<a href='#'>View All</a>
									<img className='ms-2' src={ArrowRightLight} alt='arrow' />
								</Stack>
							</div>
						</div>
					</Col>
					<Col md={8}>
						<div className='box'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>1</div>
								<h4>Masukan Data Akun</h4>
							</Stack>
							<div className='box__content'>
								<Row>
									<Col md={6}>
										<h4>ID</h4>
										<input type='text' placeholder='Masukan ID...' />
									</Col>
									<Col md={6}>
										<h4>Server</h4>
										<input type='text' placeholder='Masukan Server...' />
									</Col>
								</Row>
								<p>
									Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok
									kiri atas layar dan buka tab Info Umum. Contoh: 12345678
									(1234).
								</p>
							</div>
						</div>
						<div className='box '>
							<Stack
								as={"div"}
								direction='horizontal'
								className='box__header bordered'>
								<div className='box__logo'>2</div>
								<h4>Pilih Item Yang Ingin Diinginkan</h4>
							</Stack>
							<div className='box__content'>
								<h4>Item Spesial</h4>
								<Stack
									direction='horizontal'
									as={"div"}
									className='flex-wrap'
									gap={3}>
									<div className='choice__item'>
										<Stack
											as={"div"}
											direction='horizontal'
											gap={2}
											className='justify-content-between'>
											<div className='item_details'>
												<h5>Weekly Diamond Pass (82)</h5>
												<div>Rp 23.760</div>
											</div>
											<img src={ItemSpecial} alt='' />
										</Stack>
									</div>
								</Stack>

								<div className='content__instant'>
									<h4>Instant Top Up</h4>
									<Stack
										direction='horizontal'
										as={"div"}
										className='flex-wrap'
										gap={4}>
										{diamondDummy.map((item) => (
											<div key={item.id} className='choice__item'>
												<Stack
													as={"div"}
													direction='horizontal'
													className='justify-content-between choice__detail'>
													<div className='item_details'>
														<h5>{item.title}</h5>
														<div>{item.price}</div>
													</div>
													<img src={DiamondImg} alt='diamond' />
												</Stack>
											</div>
										))}
									</Stack>
								</div>
							</div>
						</div>
						<div className='box'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>1</div>
								<h4>Masukan Data Akun</h4>
							</Stack>
							<div className='box__content'>
								<Row>
									<Col md={10}>
										<h4>ID</h4>
										<input type='text' placeholder='Masukan ID...' />
									</Col>
									<Col md={2}>
										<Stack
											as={"div"}
											direction='horizontal'
											className='align-items-end'>
											<button>+</button>
											<button>-</button>
										</Stack>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Checkout;
