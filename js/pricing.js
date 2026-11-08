// מחירון TicketRush
const TICKET_PRICE = 350;      // ₪ לכרטיס
const SERVICE_FEE = 12;        // ₪ עמלת שירות לכל כרטיס
const MEMBER_DISCOUNT = 0.2;   // 20% הנחה לחברות מועדון
const STUDENT_DISCOUNT = 0.15; // 15% הנחה לסטודנטיות
const MAX_TICKETS = 8;         // מקסימום כרטיסים ללקוחה רגילה
const MAX_TICKETS_MEMBER = 4;  // מקסימום כרטיסים לחברת מועדון

function maxTickets(isMember) {
  return isMember ? MAX_TICKETS_MEMBER : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  // כמות לא חוקית: פחות מ-1 או מעל המכסה של אותה לקוחה
  if (qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // ההנחות לא מצטברות – לוקחים את הגדולה מביניהן. העמלה אף פעם לא מוזלת.
  let discount = 0;
  if (isMember) discount = Math.max(discount, MEMBER_DISCOUNT);
  if (isStudent) discount = Math.max(discount, STUDENT_DISCOUNT);
  const ticketPrice = TICKET_PRICE * (1 - discount);
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MEMBER_DISCOUNT, STUDENT_DISCOUNT, MAX_TICKETS, maxTickets, calcTotal };
}
