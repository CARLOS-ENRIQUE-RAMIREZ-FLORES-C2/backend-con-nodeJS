const os =  require('os');

console.log('CPU => ', os.cpus());
console.log('IP ADDRESS => ', os.networkInterfaces().en0.map( i => i.address));
console.log('RAM FREE => ', os.freemem());
console.log('type => ', os.type());
console.log('usr info => ', os.userInfo());