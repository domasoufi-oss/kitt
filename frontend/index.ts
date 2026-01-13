// No fancy imports for a second, just plain logic
console.log("---------------------------------------");
console.log("STARTING THE 32-BIT FRONTEND SERVICE");
console.log("---------------------------------------");

const message: string = "Hello! Your TS code is working.";

// This will print every 10 seconds so you can see it in 'docker logs'
setInterval(() => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${message}`);
}, 10000);