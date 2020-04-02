const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5)
            resolve("hello world")
        else
            reject(new Error("hello error "));
    }, 2000);
})

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("MAYUSCULAS => ", msg))
    .catch(err => console.error("Esto es el error => ", err))
