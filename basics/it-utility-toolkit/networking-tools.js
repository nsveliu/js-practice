function hostCount(cidr) {
    return Math.pow(2, 32 - cidr) - 2;
}

function subnetMask(cidr) {
    const masks = {
        24: "255.255.255.0",
        25: "255.255.255.128",
        26: "255.255.255.192",
        27: "255.255.255.224",
        28: "255.255.255.240",
        29: "255.255.255.248",
        30: "255.255.255.252"
    };

    return masks[cidr] || "Unknown";
}

console.log("Hosts:", hostCount(24));
console.log("Mask:", subnetMask(24));