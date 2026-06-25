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
