const { calcTotal } = require('../js/pricing');

// חתימה סופית: calcTotal(qty, isMember, isStudent). סטודנטית = הפרמטר השלישי.
test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member+student takes the larger discount (20%)', function () { assertEq(calcTotal(2, true, true), 584); });
