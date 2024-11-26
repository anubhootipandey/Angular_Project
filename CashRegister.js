function checkCashRegister(price, cash, cid) {
  let change = cash - price;

  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  change = Math.round(change * 100) / 100;

  if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === change) {
    return { status: "CLOSED", change: cid };
  }

  let changeArr = [];
  for (let i = currencyUnit.length - 1; i >= 0; i--) {
    const [denomination, value] = currencyUnit[i];
    let available = cid[i][1];
    let amountGiven = 0;

    while (change >= value && available > 0) {
      change -= value;
      available -= value;
      amountGiven += value;
      change = Math.round(change * 100) / 100;
    }

    if (amountGiven > 0) {
      changeArr.push([denomination, amountGiven]);
    }

    cid[i][1] = available;
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let isClosed = true;
  for (let i = 0; i < cid.length; i++) {
    if (cid[i][1] > 0) {
      isClosed = false;
      break;
    }
  }

  if (isClosed) {
    return { status: "CLOSED", change: cid };
  }

  return { status: "OPEN", change: changeArr };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
