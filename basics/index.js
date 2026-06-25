// Variables Practice

const companyName = "Artmotion";
let clientCount = 1500;

console.log(companyName);
console.log(clientCount);

// IP Address Classifier

function classifyIP(ip) {
    if (ip.startsWith("192.168")) {
        return "Private Network";
    }

    return "Public Network";
}

console.log(classifyIP("192.168.1.1"));
console.log(classifyIP("8.8.8.8"));

// Temperature Converter

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;

    return `${celsius}C = ${fahrenheit}F`;
}

console.log(celsiusToFahrenheit(30));


// Bandwidth Calculator

function mbpsToMBps(mbps) {
    return `${mbps} Mbps = ${mbps / 8} MB/s`;
}

console.log(mbpsToMBps(50));
console.log(mbpsToMBps(100));

