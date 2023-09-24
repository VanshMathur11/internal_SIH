let Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));



const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "student_id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "student_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "course_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "start_date",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "end_data",
        type: "string",
      },
    ],
    name: "on_successful_transaction",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "s_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "s_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "c_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "s_date",
        type: "string",
      },
      {
        internalType: "string",
        name: "e_date",
        type: "string",
      },
    ],
    name: "AddStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Address = "0x199144afFFeB5FDb0dCAC312db38F195eFd008F7";

const contract = new web3.eth.Contract(ABI, Address);


const addStudent = async (studentID , studentName , courseName, startDate , endDate) => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  const tx = await contract.methods
    .AddStudent(studentID , studentName , courseName, startDate , endDate)
    .send({ from: accounts[0], gas: 500000 });

  return tx;
};


var v;

const retrieveData=async (value) => {
  console.log(value.transactionHash);
  var t = await web3.eth.getTransaction(value.transactionHash);

  let input_data = "0x" + t.input.slice(10);

  var values = web3.eth.abi.decodeParameters(
    ["string", "string", "string", "string", "string"],
    input_data
  );
  console.log(values);
};

