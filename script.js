const images = document.querySelectorAll('.gallery__img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');
const btnAdelanta = document.querySelector('.bx.bx-right-arrow');
const btnRetrocede = document.querySelector('.bx.bx-left-arrow');
let indiceImagen = 0;
let indiceTexto = 0;


images.forEach(image =>{
	image.addEventListener('click', ()=>{
		addImage(image.getAttribute('src'), image.getAttribute('alt'));
	});
});


const addImage = (srcImage, altImage) =>{
	containerImage.classList.toggle('move');
	imageContainer.classList.toggle('show');
	imageContainer.src = srcImage; 
	copy.innerHTML = altImage;
}


closeModal.addEventListener('click', () =>{
	containerImage.classList.toggle('move');
	imageContainer.classList.toggle('show');
});


const adelantaImagen = () =>{
	if(indiceImagen === images.length -1){
		indiceImagen = -1;
		indiceTexto = -1;
	}
	imageContainer.src = images[indiceImagen + 1].src;
	copy.innerHTML = images[indiceTexto + 1].alt;
	indiceImagen++;
	indiceTexto++;
};
btnAdelanta.addEventListener('click', adelantaImagen);


const retrocedeImagen = () =>{
	if(indiceImagen === 0){
	indiceImagen = images.length; 
	}
	imageContainer.src = images[indiceImagen -1].src;
	indiceImagen--;
}
btnRetrocede.addEventListener('click', retrocedeImagen);


const retrocedeTexto = () =>{
	if(indiceTexto === 0){
	indiceTexto = images.length; 
	}
	copy.innerHTML = images[indiceTexto - 1].alt;
	indiceTexto--;
}
btnRetrocede.addEventListener('click', retrocedeTexto);


