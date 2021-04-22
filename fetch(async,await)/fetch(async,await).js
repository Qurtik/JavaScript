const delay = ms => {
	return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// delay(2000).then(() => console.log('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos'

// fetch - нативная функция браузера, которая возвращает промис
function fetchTodos(){
	console.log('Fetch todo started...');

	return delay(2000)
		.then(() => fetch(url))
		.then(response => response.json())

	// return delay(2000).then(() => {
	// 	//fetch(url).then(response => response.json())
	// 	return fetch(url);
	// }).then(response => response.json())
}

fetchTodos().then(data => {
	console.log('Data: ', data);
})
.catch(e => console.error(e));

/****************************************************************************************************************************************************/

/******************************************************* АНАЛОГ НА ASYNC & AWAIT ********************************************************************/

// async - делает функцию асинхронной. Для использования функции await, необходимо, что вырхнеуровневая функция была асинхронной.
async function fetchAsyncTodos() {
	// await - равносильно тому, что и обработка промиса.
	// функция не перейдет дальше await, пока данный промис не получит resolve. Т.е. пока она не выполнится.
	await delay(2000);
	const response = await fetch(url);
	const data = await response.json();
	console.log('Data: ',data)

	// Для бработки ошибок используется конструкция try...catch
	// Просто оборачиваем блок, где есть await в try...catch

	// try{
	// 	await delay(2000);
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log('Data: ',data)
	// }
	// catch(e){
	// 	console.error(e);
	// }
	// finally {}
}

fetchAsyncTodos();

/****************************************************************************************************************************************************/