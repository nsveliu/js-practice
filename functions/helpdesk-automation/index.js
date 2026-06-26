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

// calculateSLA(priority)

function calculateSLA(priority) {
  if (!priority || typeof priority !== 'string') return "No SLA available";
  
  switch (priority.trim().toLowerCase()) {
    case 'high':
      return "2 hours";
    case 'medium':
      return "8 hours";
    case 'low':
      return "24 hours";
    default:
      return "No SLA available";
  }
}

// assignTechnician(issueType)

function assignTechnician(issueType) {
  if (!issueType || typeof issueType !== 'string') return "Unassigned";
  
  const normalized = issueType.toLowerCase().trim();
  
  if (normalized.includes("network")) return "Alex";
  if (normalized.includes("hardware")) return "John";
  if (normalized.includes("software")) return "Sarah";
  if (normalized.includes("printer")) return "Mike";
  
  return "Unassigned";
}

// generateTicketId()

const generateTicketId = (() => {
  let nextId = 1001;
  return () => {
    return `HD-${nextId++}`;
  };
})();

// validateIssue(issue)

function validateIssue(issue) {
  if (issue === null || issue === undefined || typeof issue !== 'string') {
    return false;
  }
  return issue.trim().length > 0;
}

// generateTicketSummary(ticket)

function generateTicketSummary(ticket) {
  if (!ticket || typeof ticket !== 'object') return "Invalid Ticket Data";
  
  return `----------------------------------------
TICKET SUMMARY [${ticket.id || 'N/A'}]
----------------------------------------
Issue:      ${ticket.issue || 'N/A'}
Priority:   ${ticket.priority || 'N/A'}
Assignee:   ${ticket.technician || 'Unassigned'}
----------------------------------------`;
}