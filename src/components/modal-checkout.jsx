import "../styles/modal.scss";
import { Modal, Button, Stack } from "react-bootstrap";
import ChecklistIcon from "../assets/icon/simple-line-icons_check.svg";

const ModalCheckout = ({ isShowing, handleClose }) => {
	return (
		<Modal show={isShowing} onHide={handleClose}>
			<Modal.Header>
				<Stack direction='vertical' as={"div"} className='align-items-center'>
					<img src={ChecklistIcon} alt='checklist-icon' />
					<h4>Membuat Pesanan</h4>
					<p>
						Pastikan data akun dan produk yang kamu pilih <br /> sudah sesuai.
					</p>
				</Stack>
			</Modal.Header>
			<Modal.Body>
				<table>
					<tbody>
						<tr>
							<td className='table__title'>Username</td>
							<td>: Nuraa no cafune</td>
						</tr>
						<tr>
							<td className='table__title'>ID</td>
							<td>: 517948763</td>
						</tr>
						<tr>
							<td className='table__title'>Server</td>
							<td>: 8085</td>
						</tr>
						<tr>
							<td className='table__title'>Item</td>
							<td>: 5 (5+0) Diamonds</td>
						</tr>
						<tr>
							<td className='table__title'>Produk</td>
							<td>: Mobile Legends</td>
						</tr>
						<tr>
							<td className='table__title'>Pembayaran</td>
							<td>: Qris</td>
						</tr>
					</tbody>
				</table>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					className='btn-cancel'
					onClick={handleClose}>
					BATAL
				</Button>
				<Button variant='primary' className='btn-payment' onClick={handleClose}>
					BAYAR SEKARANG
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalCheckout;
