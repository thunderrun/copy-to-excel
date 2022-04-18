# copy-to-excel

Copy table data to clipboard

- can be pasted into Excel in order
- require HTTPS or localhost to work
- new line(\n) and tab(\t) character will be suppressed each cell

## Usage

```bash
npm i 'copy-to-excel'
```

```js
import copyToExcel from 'copy-to-excel';

let headers = ['Name', 'Age', 'Address'];

const tableData = [
  ['John Brown', 32, 'New York No. 1 Lake Park'],
  ['Jim Green\t', 42, 'London No. 1 Lake Park\n'],
  ['Joe Black', 32, 'Sidney No. 1 Lake Park'],
]

copyToExcel(tableData, headers);

/* result
Name	Age	Address	
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/

copyToExcel(tableData);

/* result
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/

const arrayObjectData = [
  {
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

copyToExcel(arrayObjectData, headers);

/* result
Name	Age	Address	
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/

copyToExcel(arrayObjectData);

/* result
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/

// use object keys as headers
copyToExcel(arrayObjectData,  Object.keys(arrayObjectData[0]));

/* result
name	age	address	
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/

// return the string
const string = copyToExcel(arrayObjectData);
/* string =>
John Brown	32	New York No. 1 Lake Park	
Jim Green	42	London No. 1 Lake Park	
Joe Black	32	Sidney No. 1 Lake Park	
*/
```