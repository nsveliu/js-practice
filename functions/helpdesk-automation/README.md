\# Technical Specifications \& Usage



\## What is this project?

This project is an entry-level technical utility toolkit written in vanilla JavaScript. It delivers fundamental calculations used daily in system administration and network operations, packaging them into reliable, predictable functions.



\## What concepts did you practice?

* String Index Tracking: Locating specific divider tokens inside raw text sequences to slice out meaningful data substrings.
* Input Sanitization: Guarding computation steps against destructive value types like null, undefined, or NaN.
* Data Packaging: Combining multiple distinct numerical outputs into unified structural elements to transfer data cleanly across systems.
* Strict Logical Boundaries: Evaluating precise numerical ranges and strict textual patterns to flag malformed network variables.



\## What functions exist?

1\. getTicketPriority(issueType)

Input: A string representing an issue category (e.g., "network outage").

Behavior: Normalizes the input text and evaluates key phrases.

Output: Returns "High", "Medium", "Low", or "Unknown" based on the category matched.



2\. calculateSLA(priority)

Input: A string representing a ticket's priority level.

Behavior: Maps the priority to a strict SLA timeline using static conditional matching.

Output: Returns "2 hours", "8 hours", "24 hours", or "No SLA available".



3\. assignTechnician(issueType)

Input: A string representing the type of issue.

Behavior: Identifies keywords within the text to assign the ticket to a designated fictional technician.

Output: Returns a technician's name ("Alex", "John", "Sarah", "Mike") or "Unassigned".



4\. generateTicketId()

Input: None.

Behavior: Uses a self-contained counter variable enclosed within a private scope that increments automatically every time the function is invoked.

Output: Returns a unique ticket identifier string (e.g., "HD-1001", "HD-1002").



5\. validateIssue(issue)

Input: A variable representing an issue description.

Behavior: Extensively evaluates the input to ensure it is a valid string that contains actual characters.

Output: Returns false for null, undefined, empty inputs, or strings containing only spaces; returns true for valid descriptions.



6\. generateTicketSummary(ticket)

Input: An object containing ticket properties (id, issue, priority, technician).

Behavior: Extracts data from the object properties and formats them into a clean layout.

Output: Returns a readable, multiline summary block string.



7\. estimateCompletion(priority)

Input: A string representing the ticket priority.

Behavior: Map-matches the priority scale to an immediate operational completion target window.

Output: Returns "Today", "Tomorrow", or "Within three days".



8\. displayDashboard(stats)

Input: An object containing metric counters (openTickets, closedTickets, highPriority, etc.).

Behavior: Extracts metrics, handles missing numerical properties with fallback values, and formats a complete layout.

Output: Prints a formatted, multi-line diagnostic dashboard directly to the console interface.



\## How do you run the project?

1. Verify that a JavaScript runtime environment like Node.js is present on your operating system.

2\. Open your system terminal or command interface.

3\. Switch into the directory holding the target script (e.g., index.js).

4\. Execute the script natively by running:

&#x09;node index.js



\## What improvements could be added later?

* IPv6 Protocol Parsing: Upgrading the parsing engine to parse text blocks divided by colons rather than periods to support modern network schemes.
* Dynamic Time Calculations: Expanding the downtime utility to calculate acceptable service interruptions over custom-defined hours, quarters, or weeks.
* Command Line Interactivity: Replaced hardcoded testing triggers with a runtime prompt interface that accepts user text inputs dynamically.

