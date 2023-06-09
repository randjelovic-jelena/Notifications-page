'use strict';

const markAsRead=document.querySelector('.mark-as-read');
const notificationBox=document.querySelector('.notifications');
let notifications=document.querySelectorAll('.notification');
let notificationNumber=document.querySelector('.notification-number');


//mark all as read
markAsRead.addEventListener('click',()=>{
	notifications.forEach((elem)=>{
		if(elem.classList.contains('marked')){
			elem.classList.remove('marked');
			elem.querySelector('.not-read').innerText='';
			notificationNumber.innerText='0';
		}
	})
});


//mark single notification
notificationBox.addEventListener('click',(e)=>{
	let target=e.target;
	
	if(target.closest('.notification').classList.contains('marked')){
		target.closest('.notification').classList.remove('marked');
		let currentNumber=Number(notificationNumber.innerText);
		currentNumber--;
		notificationNumber.innerText=currentNumber;
		target.closest('.notification').querySelector('.not-read').innerText='';
	}
	
});