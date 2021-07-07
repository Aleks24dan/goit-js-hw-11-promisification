const delay = ms => {
    const DELAY = 2000;
    const isSuccess = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve(ms);
            } else {
                reject("Error! Error passed to reject function");
            }
        }, DELAY);
    });

};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms



