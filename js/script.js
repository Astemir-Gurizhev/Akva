$(function () {
   $(window).scroll(function () {
     if ($(this).scrollTop() != 0) {
       $("#top").fadeIn();
     } else {
       $("#top").fadeOut();
     }
   });
   $("#top").click(function () {
     $("body,html").animate({ scrollTop: 0 }, 0);
   });
 });

 new Swiper ('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	watchOverflow: true,
	initialSlide: 0,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	}
});

// Отправка данных на сервер
function send(event, php){
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); 
			 console.log(json);
			 if (json.result == "success") {
				 alert("Сообщение отправлено");
			 } else {
				 alert("Ошибка. Сообщение не отправлено");
			 }
		 } else {alert("Ошибка сервера. Номер: "+req.status);}
	}; 
	
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
}

/* Form Validation */

const inputName = document.querySelector("#form-username")
const inputPhone = document.querySelector("#form-userphone")
const btn = document.querySelector('.form__btn')
const form = document.getElementById('form')

btn.addEventListener("click", formSend)

function formSend(event) {
	//Border или Color по умолчанию, если введено правильно 
	if (phoneTest(inputPhone)) {
		inputPhone.style.border = "1px solid #240202"
	}
	if (loginTest(inputName)) {
		inputName.style.border = "1px solid #240202"
	}
	//Валидация
	if (phoneTest(inputPhone) && loginTest(inputName) && !(inputName.value === '') && !(inputPhone.value === '')) {
	} else
	if (!phoneTest(inputPhone) || (inputPhone.value === '')) {
		event.preventDefault()
		inputPhone.style.border = "1px solid #DF2030"
	}
	if (!loginTest(inputName) || (inputName.value === '')) {
		event.preventDefault()
		inputName.style.border = "1px solid #DF2030"
	}
}
 
 function loginTest(input) {
	return /^[a-zA-zа-яА-я<<>>""]{1}[a-zA-Zа-яА-Я<<>>""]{3,20}$/.test(input.value)
 }
 function phoneTest(input) {
	return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
 }

 document.addEventListener("click", function (event) {
	if (event.target.closest(".header__burger")) {
	  document.querySelector(".header__menu").classList.toggle("header__menu-active");
	  document.querySelector(".header__burger").classList.toggle("active");
	  $("body").toggleClass("lock");
	}
	if (event.target.closest(".header__menu-link")) {
	  document.querySelector(".header__menu").classList.remove("header__menu-active");
	  document.querySelector(".header__burger").classList.remove("active");
	  document.querySelector("body").classList.remove("lock");
	}
 })
