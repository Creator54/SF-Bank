const customerData = [
  {
    id:2416762345,
    name:'Dipesh',
    email:'dipesh@sfbank.me',
    balance:20650,
  },
  {
    id:2895620186,
    name:'Vibhor',
    email:'vibhor@sfbank.me',
    balance:50600,
  },
  {
    id:1310828395,
    name:'Shyam',
    email:'shyam@sfbank.me',
    balance:20000,
  },
  {
    id:9034238938,
    name:'Dikshit',
    email:'dikshit@sfbank.me',
    balance:10300,
  },
  {
    id:4252051464,
    name:'Parimal',
    email:'parimal@sfbank.me',
    balance:23900,
  },
  {
    id:8759099970,
    name:'Akash',
    email:'akash@sfbank.me',
    balance:12000,
  },
  {
    id:9557798404,
    name:'James',
    email:'james@sfbank.me',
    balance:45000,
  },
  {
    id:6002521064,
    name:'Vishes',
    email:'vishes@sfbank.me',
    balance:78900,
  },
  {
    id:4856276835,
    name:'Tara',
    email:'tara@sfbank.me',
    balance:90200,
  },
  {
    id:2621696647,
    name:'Shruti',
    email:'shruti@sfbank.me',
    balance:123000,
  },
]

const transactionData = [
  {
    to: 'Dipesh',
    from: 'Vishes',
    amount: '2000',
  },
  {
    to: 'Tara',
    from: 'Vishes',
    amount: '1230',
  },
  {
    to: 'Shruti',
    from: 'Dipesh',
    amount: '2800',
  },
  {
    to: 'Parimal',
    from: 'Vishes',
    amount: '1000',
  },
  {
    to: 'Dipesh',
    from: 'Dikshit',
    amount: '200',
  },
]

export {customerData,transactionData}
