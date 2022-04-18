export default (tableData, headers) => {
  let string = '';

  if (headers) {
    headers.forEach((header) => {
      string += `${header}\t`;
    });
    string += "\n";
  }

  if (tableData && tableData[0]) {

    let data = [];

    if (Array.isArray(tableData[0])) {
      data = tableData;
    } else if (typeof tableData[0] === 'object') {
      tableData.forEach((obj, index) => {
        data[index] = Object.values(obj);
      });
    } 

    data.forEach((row) => {
      row.forEach((cell) => {
        let newCell = cell;

        if (typeof newCell === 'string') {
          if (newCell.includes('\t')) {
            newCell = cell.replaceAll('\t', '');
          }
          if (newCell.includes('\n')) {
            newCell = cell.replaceAll('\n', '');
          }
        }

        string += `${newCell}\t`;
      });
      string += "\n";
    });
  }

  navigator.clipboard.writeText(string).catch((error) => {
    console.log(error);
  });

  return string;

}