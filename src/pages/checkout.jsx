import Hero from "../assets/images/checkout-hero.png";
import { Col, Row, Stack } from "react-bootstrap";
import ArrowRightLight from "../assets/icon/arrow-right-light.svg";
import ItemSpecial from "../assets/images/item-special-img.png";
import DiamondImg from "../assets/images/diamond-img.png";
import ModalCheckout from "../components/modal-checkout";
import { useState } from "react";
import CartIcon from "../assets/icon/cart-icon.svg";
import {
	AccordionComponent,
	AccordionContent,
	AccordionFooter,
} from "../components/accordion";
import { Accordion } from "react-bootstrap";
import ovo from "..//assets/images/ovo.png";
import dana from "../assets/images/dana.png";
import qris from "../assets/images/qris.png";
import spay from "../assets/images/shopee.png";
import bca from "../assets/images/bca.png";
import mandiri from "../assets/images/mandiri.png";
import bni from "../assets/images/bni.png";
import bri from "../assets/images/bri.png";
import danamon from "../assets/images/danamon.png";
import sinarmas from "../assets/images/sinarmas.png";
import cimb from "../assets/images/cimb.png";
import neo from "../assets/images/neo.png";

const EwalletAccordionProductImg = [dana, spay, ovo, qris];
const EwalletAccordionData = [
	{
		title: "Dana",
		info: "Cek Otomatis",
		price: "Rp 23.000",
		img: dana,
	},
	{
		title: "Shopee Pay",
		info: "Cek Otomatis",
		price: "Rp 23.000",
		img: spay,
	},
	{
		title: "Ovo",
		info: "Cek Otomatis",
		price: "Rp 23.000",
		img: ovo,
	},
	{
		title: "Qris",
		info: "Cek Otomatis",
		price: "Rp 23.000",
		img: qris,
	},
];

const TransferAccordionProductImg = [bca];
const VaAccordionProductImg = [mandiri, bni, bri, neo, danamon, sinarmas, cimb];

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
	const [isShowing, setIsShowing] = useState(false);

	const handleShow = () => setIsShowing(true);
	const handleClose = () => setIsShowing(false);

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
								<div className='box__logo'>3</div>
								<h4>Jumlah Akun</h4>
							</Stack>
							<div className='box__content'>
								<Row>
									<Col md={10}>
										<h4>Quantity</h4>
										<input type='number' placeholder='1' />
									</Col>
									<Col md={2} className='d-flex align-items-end'>
										<Stack
											as={"div"}
											gap={2}
											direction='horizontal'
											className='align-items-end'>
											<button className='btn-increment'>+</button>
											<button className='btn-decrement'>-</button>
										</Stack>
									</Col>
								</Row>
							</div>
						</div>
						<div className='box'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>4</div>
								<h4>Pilih Metode Pembayaran</h4>
							</Stack>
							<div className='box__content'>
								<Accordion>
									<AccordionComponent eventKey={0} accordionTitle='E-wallet'>
										<AccordionContent>
											<Stack as={"div"} direction='horizontal' gap={3}>
												{EwalletAccordionData.map((item, index) => (
													<div key={index} className='accordion-item'>
														<h5>{item.title}</h5>
														<div className='item-info'>{item.info}</div>
														<Stack
															as={"div"}
															direction='horizontal'
															className='justify-content-between'>
															<div className='price'>Rp 23.000</div>
															<img src={item.img} alt={item.title} />
														</Stack>
													</div>
												))}
											</Stack>
										</AccordionContent>
										{/* footer */}
										<AccordionFooter>
											<Stack
												as={"div"}
												direction='horizontal'
												gap={3}
												className='justify-content-end'>
												{EwalletAccordionProductImg.map((item, index) => (
													<img key={index} src={item} alt='' />
												))}
											</Stack>
										</AccordionFooter>
									</AccordionComponent>
									<AccordionComponent
										eventKey={1}
										accordionTitle='
								Transfer Bank'>
										<AccordionContent></AccordionContent>
										{/* footer */}
										<AccordionFooter>
											<Stack
												as={"div"}
												direction='horizontal'
												gap={3}
												className='justify-content-end'>
												{TransferAccordionProductImg.map((item, index) => (
													<img key={index} src={item} alt='' />
												))}
											</Stack>
										</AccordionFooter>
									</AccordionComponent>
									<AccordionComponent
										eventKey={2}
										accordionTitle='
								Virtual Account'>
										<AccordionContent></AccordionContent>
										{/* footer */}
										<AccordionFooter>
											<Stack
												as={"div"}
												direction='horizontal'
												gap={3}
												className='justify-content-end'>
												{VaAccordionProductImg.map((item, index) => (
													<img key={index} src={item} alt='' />
												))}
											</Stack>
										</AccordionFooter>
									</AccordionComponent>
									<AccordionComponent
										eventKey={3}
										accordionTitle='
								Convenience Store'>
										<AccordionContent></AccordionContent>
										{/* footer */}
										<AccordionFooter></AccordionFooter>
									</AccordionComponent>
								</Accordion>
							</div>
						</div>
						<div className='box'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>5</div>
								<h4>Masukan Kode Promo (jika Ada)</h4>
							</Stack>
							<div className='box__content'>
								<Row>
									<Col md={10}>
										<h4>Kode Promo</h4>
										<input type='text' placeholder='Masukan Kode...' />
									</Col>
									<Col md={2} className='d-flex align-items-end'>
										<button className='btn-apply'>Apply</button>
									</Col>
								</Row>
							</div>
						</div>

						<div className='box'>
							<Stack as={"div"} direction='horizontal' className='box__header'>
								<div className='box__logo'>6</div>
								<h4>No. Whatsapp</h4>
							</Stack>
							<div className='box__content'>
								<Row>
									<Col md={10}>
										<h4>No. Whatsapp</h4>
										<input type='number' placeholder='08xxxx...' />
										<p>Nomor Ini Akan Menerima Status Pesanan Kamu</p>
									</Col>
								</Row>
							</div>
						</div>

						<div className='box'>
							<div className='box__content'>
								<button className='btn-checkout' onClick={handleShow}>
									<img src={CartIcon} className='me-2' alt='cart-icon' />
									Beli Sekarang
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</section>
			<ModalCheckout isShowing={isShowing} handleClose={handleClose} />
		</>
	);
};

export default Checkout;
