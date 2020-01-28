export const generateMapTableData = (data) => {
  if (!data) {
    return [];
  }

  const tableData = data.map((p) => {
    const {
      confirmedCount,
      suspectedCount,
      // curedCount,
      deadCount,
      provinceShortName
    } = p;
    const summaryList = [];

    confirmedCount && summaryList.push(`確診 ${confirmedCount} 例`);
    suspectedCount && summaryList.push(`疑似 ${suspectedCount} 例`);
    deadCount && summaryList.push(`死亡 ${deadCount} 例`);
    // curedCount && summaryList.push(`治癒 ${curedCount} 例`);

    return [provinceShortName, summaryList.join('，')];
  });

  return tableData;
};

export const generateOverseasTableData = (data) => {
  if (!data) {
    return [];
  }

  const tableData = data.map((p) => {
    const {
      provinceName,
      confirmedCount,
      curedCount,
      deadCount
    } = p;

    return [
      provinceName,
      confirmedCount,
      curedCount,
      deadCount
    ];
  });

  return tableData;
};

export const generateHistoricalTableData = (data) => {
  if (!data) {
    return [];
  }

  const tableData = data.map((d) => {
    const {
      date,
      confirm,
      suspect,
      heal,
      dead
    } = d;

    // Format date
    const datePart = date.split('.');
    const formattedDate = datePart.length === 2
      ? `${parseInt(datePart[0], 10)} 月 ${parseInt(datePart[1], 10)} 日`
      : date;

    return [
      formattedDate,
      confirm,
      suspect,
      heal,
      dead
    ];
  });

  return tableData;
};
