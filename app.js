const containerQR = document.getElementById('containerQR');
const form = document.getElementById('form');

const QR = new QRCode(containerQR);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(form.link.value);
});
