import Stack from "react-bootstrap/Stack";
import ML from "../assets/images/ml.png";
import Banner from "../assets/images/banner-slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import ButtonNextIcon from "../assets/icon/button-next-icon.svg";
import ButtonPrevIcon from "../assets/icon/button-prev-icon.svg";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const topupRoute = [
	{
		path: "#",
		name: "Top up",
	},
	{
		path: "#",
		name: "Voucher",
	},
	{
		path: "#",
		name: "Pulsa & Data",
	},
	{
		path: "#",
		name: "E-wallet",
	},
	{
		path: "#",
		name: "Live Apps",
	},
	{
		path: "#",
		name: "Tagihan",
	},
	{
		path: "#",
		name: "Jasa Joki",
	},
];

const popularData = Array.from({ length: 6 }).map((_, index) => ({
	id: index,
	brand: "Moonton",
	name: "Mobile Legends",
	image: ML,
}));

const topupData = Array.from({ length: 12 }).map((_, index) => ({
	id: index,
	brand: "Moonton",
	name: "Mobile Legends",
	image: ML,
}));

const bannerSlides = Array.from({ length: 3 }).map((_, index) => ({
	id: index,
	image: Banner,
}));

const Home = () => {
	return (
		<>
			<section id='banner'>
				<div className='button-prev'>
					<img src={ButtonPrevIcon} alt='' />
				</div>
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: ".button-next",
						prevEl: ".button-prev",
					}}
					slidesPerView={1}
					loop={true}
					autoplay={true}
					spaceBetween={100}>
					{bannerSlides.map((item, index) => (
						<SwiperSlide key={index}>
							<div className='slides-item'>
								<PhotoView src={item.image}>
									<img src={item.image} alt='' />
								</PhotoView>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='button-next'>
					<img src={ButtonNextIcon} alt='' />
				</div>
			</section>
			<section id='main-content'>
				<div className='search'>
					<span className='fa fa-search'></span>
					<input placeholder='Cari Layanan...' />
				</div>
				<section id='popular' className='container'>
					<h2>Popular</h2>
					<Stack
						as={"div"}
						direction='horizontal'
						className='item__card__wrapper'>
						{popularData.map((item, index) => (
							<Link key={index} to='/checkout'>
								<Stack as={"div"} className='item' direction='vertical'>
									<img
										src={item.image}
										className='img-fluid'
										alt='sample image'
									/>
									<Stack
										as={"div"}
										direction='vertical'
										className='img-text text-center'>
										<span className='brand'>{item.brand}</span>
										<span className='name'>{item.name}</span>
									</Stack>
								</Stack>
							</Link>
						))}
					</Stack>
				</section>

				<section id='navigate-topup'>
					<Stack as={"ul"} direction='horizontal'>
						{topupRoute.map((item, index) => (
							<li key={index}>
								<a href='#' className={`${index % 2 === 0 ? "active" : null}`}>
									{item.name}
								</a>
							</li>
						))}
					</Stack>
					<Stack
						as={"div"}
						direction='horizontal'
						className='item__card__wrapper'>
						{topupData.map((item, index) => (
							<Stack
								as={"div"}
								className='item'
								direction='vertical'
								key={index}>
								<img
									src={item.image}
									className='img-fluid'
									alt='sample image'
								/>
								<Stack
									as={"div"}
									direction='vertical'
									className='img-text text-center'>
									<span className='brand'>{item.brand}</span>
									<span className='name'>{item.name}</span>
								</Stack>
							</Stack>
						))}
					</Stack>
				</section>
			</section>
		</>
	);
};

export default Home;
