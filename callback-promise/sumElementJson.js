var bills = [
  {
    refNo: 17,
    billDate: "1-apr-2016",
    dueDate: "30-apr-2016",
    pendingAmount: 4500,
    overdueDays: 28,
  },
  {
    refNo: 20,
    billDate: "15-apr-2016",
    dueDate: "3-may-2016",
    pendingAmount: 56550,
    overdueDays: 15,
  },
];

var res = bills
  .map((bill) => bill.pendingAmount)
  .reduce((acc, bill) => bill + acc);
console.log(res);
