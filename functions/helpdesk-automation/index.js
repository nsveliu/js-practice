// getTicketPriority(issueType)

function getTicketPriority(issueType) {
  if (!issueType || typeof issueType !== 'string') return "Unknown";
  
  const normalized = issueType.toLowerCase().trim();
  
  if (normalized.includes("network outage") || normalized.includes("server")) {
    return "High";
  } else if (normalized.includes("email") || normalized.includes("software")) {
    return "Medium";
  } else if (normalized.includes("printer") || normalized.includes("password reset")) {
    return "Low";
  } else {
    return "Unknown";
  }
}