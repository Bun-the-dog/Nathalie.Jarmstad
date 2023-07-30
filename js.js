/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert("🗳️ Takk for din stemme og støtte til kandidat Nr. 23 Nathalie Jarmstad! Avstemningslenken vil være aktiv fra 11. august 2023. Avgi stemmen din via lenken eller besøk www.test.no. Din stemme betyr noe, så la oss gjøre en forskjell sammen! Din aktive deltakelse kan forme fremtiden til vår by.")
})
