// Промисы - обертка над ассинхроностью.

console.log('Request data...');

// setTimeout(() => {
// 	console.log('Preparing data...');
// 	const backendData = {
// 		server: 'aws',
// 		port: 2000,
// 		status: 'working'
// 	};
// 	setTimeout(() =>{
// 		backendData.modified = true;
// 		console.log('Data received', backendData)
// 	},2000);
// }, 2000);

// resolve - функция вызывается тогда, когда закончена асинхронная операция (закончена успешно)
const p = new Promise(function(resolve, reject){
	setTimeout(() => {
		console.log('Preparing data...');
		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		};
		//resolve(); // Вызов данной функции здесь говорит промису, что он завершил тут свое выполнение
		// Что бы получить доступ к backendData, передаем ее в функцию resolve.
		resolve(backendData); // данный параметр будет получен в data. Например -> .then(data)
		// reject - Вызывается при ошибке.
		//reject(backendData);
	},2000);
});

// Методы промисов
// then - когда. Т.е. когда выполнится промис.
p.then((data) => { // data = backendData
	console.log('Promise resolved');
})
.catch( err => console.error('Error: ', err))
.finally(() => console.log('Finally'))







p.then((data) => {
	//const p2 = new Promise((resolve, reject) => {)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			resolve(data);
		}, 2000);
	});
	// p2.then(clientData => {
	// 	console.log('Data received', clientData);
	// });
}).then((clientData) => {
	console.log('Data received', clientData);
	clientData.fromPromise = true;
	return clientData;
})//.then(data => {
//	console.log('Modified', data);
//});



const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
};
// Promise.all - ждет пока выполнятся ВСЕ промисы, которые переданы в массив
Promise.all([sleep(2000), sleep(5000)])
.then(() => {
	console.log('All promises DONE');
});

// Promise.race - выполнится, когда выполнится первый промис.
Promise.race([sleep(2000), sleep(5000)])
.then(() => {
	console.log('Race promises DONE');
});