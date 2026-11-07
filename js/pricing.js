// מחירון TicketRush
const TICKET_PRICE = 350;   // ₪ לכרטיס
const SERVICE_FEE = 12;     // ₪ עמלת שירות לכל כרטיס
const MEMBER_DISCOUNT = 0.2; // 20% הנחה לחברות מועדון
const MAX_TICKETS = 8;      // מקסימום כרטיסים ללקוחה רגילה
const MAX_TICKETS_MEMBER = 4; // מקסימום כרטיסים לחברת מועדון

function maxTickets(isMember) {
  return isMember ? MAX_TICKETS_MEMBER : MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  // כמות לא חוקית: פחות מ-1 או מעל המכסה של אותה לקוחה
  if (qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // חברת מועדון: 20% הנחה על מחיר הכרטיס בלבד. העמלה ללא הנחה.
  const ticketPrice = isMember ? TICKET_PRICE * (1 - MEMBER_DISCOUNT) : TICKET_PRICE;
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, maxTickets, calcTotal };
}
