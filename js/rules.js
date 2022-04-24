showmodal=document.querySelector(".rules-modal");
modalcontainer=document.querySelector(".modal-container");
showmodal.addEventListener('click', () => {
	modalcontainer.classList.add('modal-active');
	document.body.style.overflow = 'hidden';
});