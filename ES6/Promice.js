if (false) {
	/*
	По очереди выводит 1,2,3
	*/
	new Promise(function (resolve, reject) {
		setTimeout(() => resolve(1), 2000);

	}).then((result) => {
		alert(result);
		return result + 1;

	}).then((result) => {
		alert(result);
		return result + 1;

	}).then((result) => {
		alert(result);
		return result + 1;
	}).catch((e) => {
		console.log('error: ', e)
	});
}

if (true) {
	if (false) {
		/**
		 * Эксперимент, когда функция возвращает Promise, у которого уже назначены обработчики.
		 * Работает НЕВЕРНО! Т.е. не так, как можно было бы ожидать.
		 * Кажется, что должны свалиться в 1й catch, а после него во 2й.
		 * А на самом деле попадаем в 1й catch, а затем в .then внешнего обработчика.
		 * Правильное решенние это во внутреннем .catch обрабатывать ошибку и вызывать throw (см. пример ниже).
		 * @returns {Promise<any>}
		 */
		function getTestPromise() {
			let testPromice = new Promise(function (resolve, reject) {
				setTimeout(() => resolve(1), 2000);
			}).then((result) => {
				alert(result);
				return result + 1;
			}).then((result) => {
				throw new Error('Прерываем Promise');
				alert(result);
				return result + 1;
			}).then((result) => {
				alert(result);
				return result + 1;
			}).catch((e) => {
				alert('1й Catch. Ошибка!' + e);
				console.log('1й Catch. Ошибка: ', e);
				return e;
			});
			return testPromice;
		}

		getTestPromise()
			.then((cnrResult) => {
				alert('Итоговое значение счетчика: ' + cnrResult);
			})
			.catch((e) => {
				alert('2й Catch. Ошибка!' + e);
				console.log('2й Catch. Ошибка: ', e)
			});
	}
	if (true) {
		/**
		 * Правильное решенние для примера выше.
		 * Решение - во внутреннем .catch обрабатывать ошибку и вызывать throw.
		 * @returns {Promise<any>}
		 */
		function getTestPromise() {
			let testPromice = new Promise(function (resolve, reject) {
				setTimeout(() => resolve(1), 2000);
			}).then((result) => {
				alert(result);
				return result + 1;
			}).then((result) => {
				throw new Error('Прерываем Promise');
				alert(result);
				return result + 1;
			}).then((result) => {
				alert(result);
				return result + 1;
			}).catch((e) => {
				alert('1й Catch. Ошибка!' + e);
				console.log('1й Catch. Ошибка: ', e)
				throw (e)
			});
			return testPromice;
		}

		getTestPromise()
			.then((cnrResult) => {
				alert('Итоговое значение счетчика: ' + cnrResult);
			})
			.catch((e) => {
				alert('2й Catch. Ошибка!' + e);
				console.log('2й Catch. Ошибка: ', e)
			});
	}
}

if (false) {
	/**
	 * По очереди выводит 0, 1, 2.
	 * Это дикая цепочка Promise. Пока не вкурил правильно так делать или нет.
	 * Вероятно, правильно т.к. внутри .then асинхронные операции setTimeout.
	 * И получается, что иначе нельзя корректно обработать цепочку асинхронных вызовов.
	 **/
	function getTestPromise(cnr) {
		cnr = cnr || 0;
		let firstPromice = new Promise((resolve, reject) => {
			return new Promise(() => {
				alert(cnr);
				setTimeout(() => {
					resolve(++cnr);
				}, 2000)
			});
		}).then((cnr1) => {
			return new Promise((resolve, reject) => {
				alert(cnr1);
				// С вероятностью 50% генерируем ошибку
				if (Math.random() > 0.5) {
					throw new Error('Прерываем Promise');
				}
				setTimeout(() => {
					resolve(++cnr1);
				}, 2000)
			});
		}).then((cnr2) => {
			return new Promise((resolve, reject) => {
				alert(cnr2);
				setTimeout(() => {
					resolve(++cnr2);
				}, 2000)
			});
		});
		return firstPromice;
	}

	getTestPromise(0)
		.then((cnrResult) => {
			alert('Итоговое значение счетчика: ' + cnrResult);
		})
		.catch((e) => {
			console.log('error: ', e)
		})
}

/**
 * @TODO: Разобраться с Promise.all(iterable)
 * @see https://learn.javascript.ru/promise#promise-all-iterable
 * Эта штука принимает массив из элементов Promise и возвращает один Promise,
 * который выполнится когда отработают все дочерние Promise.
 * Удобно использовать, когда нужно выполнить множество параллельных запросов
 * и затем на основании результатов выполнить одно действие.
 **/