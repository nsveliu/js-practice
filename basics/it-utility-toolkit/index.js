// Variables Practice

const companyName = "Artmotion";
let clientCount = 1500;

console.log(companyName);
console.log(clientCount);

// IP Address Classifier

function classifyIP(ip) {
    if (typeof ip !== 'string') return "Invalid IP";

    const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!ipv4Regex.test(ip)) {
        return "Invalid IP";
    }

    const firstDot = ip.indexOf('.');
    const secondDot = ip.indexOf('.', firstDot + 1);
    const thirdDot = ip.indexOf('.', secondDot + 1);

    const octet1 = Number(ip.substring(0, firstDot));
    const octet2 = Number(ip.substring(firstDot + 1, secondDot));

    // 192.168.x.x
    if (octet1 === 192 && octet2 === 168) {
        return "Private Network";
    }
    // 10.x.x.x
    if (octet1 === 10) {
        return "Private Network";
    }
    // 172.16.x.x through 172.31.x.x
    if (octet1 === 172 && octet2 >= 16 && octet2 <= 31) {
        return "Private Network";
    }

    return "Public Network";
}

console.log("--- IP Classifier Tests ---");
console.log(classifyIP("192.168.1.1")); // Private Network
console.log(classifyIP("10.0.0.5"));    // Private Network
console.log(classifyIP("172.20.55.4")); // Private Network
console.log(classifyIP("8.8.8.8"));      // Public Network
console.log(classifyIP("256.1.2.3"));    // Invalid IP
console.log(classifyIP("not-an-ip"));   // Invalid IP

// Temperature Converter

function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number' || isNaN(celsius)) return "Invalid Input";
    const fahrenheit = (celsius * 9/5) + 32;
    return `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
}

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) return "Invalid Input";
    const celsius = (fahrenheit - 32) * 5/9;
    return `${fahrenheit.toFixed(2)}°F = ${celsius.toFixed(2)}°C`;
}

console.log("\n--- Temperature Converter Tests ---");
console.log(celsiusToFahrenheit(30));     // 30.00°C = 86.00°F
console.log(fahrenheitToCelsius(86));     // 86.00°F = 30.00°C
console.log(celsiusToFahrenheit(22.555)); // 22.56°C = 72.60°F

// Bandwidth Calculator

function mbpsToMBps(mbps) {
    if (typeof mbps !== 'number' || isNaN(mbps) || mbps < 0) {
        return "Invalid Input (Must be a positive number)";
    }
    const mBps = mbps / 8;
    return `${mbps.toFixed(2)} Mbps = ${mBps.toFixed(2)} MB/s`;
}

console.log("\n--- Bandwidth Calculator Tests ---");
console.log(mbpsToMBps(50));    // 50.00 Mbps = 6.25 MB/s
console.log(mbpsToMBps(100));   // 100.00 Mbps = 12.50 MB/s
console.log(mbpsToMBps(55.555));// 55.56 Mbps = 6.94 MB/s
console.log(mbpsToMBps(-10));   // Invalid Input...

// Uptime Calculator

function calculateDowntime(uptime) {
    if (typeof uptime !== 'number' || isNaN(uptime) || uptime < 0 || uptime > 100) {
        return "Invalid Uptime Percentage";
    }

    const monthlyMinutes = 43200;
    const yearlyMinutes = monthlyMinutes * 12;

    const monthlyDowntime = monthlyMinutes * ((100 - uptime) / 100);
    const yearlyDowntime = yearlyMinutes * ((100 - uptime) / 100);

    return {
        monthly: `${monthlyDowntime.toFixed(2)} minutes downtime/month`,
        yearly: `${yearlyDowntime.toFixed(2)} minutes downtime/year`
    };
}

console.log("\n--- Uptime Calculator Tests ---");
console.log(calculateDowntime(99.9)); 
// Output: { monthly: '43.20 minutes downtime/month', yearly: '518.40 minutes downtime/year' }
console.log(calculateDowntime(99.99)); 
// Output: { monthly: '4.32 minutes downtime/month', yearly: '51.84 minutes downtime/year' }