// רשימת המתנה לכרטיסים שאזלו
function joinWaitlist(list, email) {
  // נרמול: הסרת רווחים מהקצוות + אותיות קטנות
  var normalized = String(email).trim().toLowerCase();

  // מייל לא תקין: בלי @, או בלי נקודה אחרי ה-@ — הרשימה חוזרת כמו שהיא
  var at = normalized.indexOf('@');
  if (at === -1 || normalized.indexOf('.', at) === -1) {
    return list.slice();
  }

  // מייל שכבר ברשימה: לא מוסיפים שוב
  if (list.indexOf(normalized) !== -1) {
    return list.slice();
  }

  // מחזירה מערך חדש בלי לשנות את המקורי
  return list.concat([normalized]);
}

module.exports = { joinWaitlist };
