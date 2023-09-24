let Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

const ABI = [
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
  {
    inputs: [],
    name: "ReturnTransactionHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "stud",
    outputs: [
      {
        internalType: "string",
        name: "student_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "student_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "course_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "start_date",
        type: "string",
      },
      {
        internalType: "string",
        name: "end_date",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// web3.eth.defaultAccount = web3.eth.accounts[0];
// var yourContract = web3.eth.contract(ABI);
const Address = "0x9DE37f2Ac34084b67DF0BD8CB43fDBeA25d0721F";
// var contract = yourContract.at(Address);

// var contract = new Contract(ABI, Address);

const contract = new web3.eth.Contract(ABI, Address);

const account = "0x5E191D9a6f22F50B6616d599c76d4E8048CBB90A";
// console.log(contract);
const addStudent = async () => {
  // const t = await contract.methods;
  // console.log(t);
  const tx = await contract.methods
    .AddStudent("1", "Vansh", "DSA", "12/01/22", "12/02/22")
    .send({ from: account, gas: 500000 });

  return tx;
};

var v;

addStudent().then(async (value) => {
  console.log(value.transactionHash);
  var t = await web3.eth.getTransaction(value.transactionHash);
  // console.log(web3.eth);
  console.log(t);
});

// const retrieveData = async (value) => {
//     var t=await web3.eth.getTransaction({ hash: value });
//     console.log(t);
// };

// retrieveData(v).then()
