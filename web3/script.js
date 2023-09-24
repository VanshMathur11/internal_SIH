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

const Address = "0xFbEeAe122C04929E32DACE5ACE7ceDcD48370187";

const contract = new web3.eth.Contract(ABI, Address);


const addStudent = async (currentStudent) => {
  
  // const { studentID, studentName, courseName, startDate, endDate } = currentStudent;
  
  // console.log(currentStudent.studentID);
  // console.log(studentID, studentName, courseName, startDate, endDate);
  
  console.log(currentStudent)

  
  const { val1, ...val2 } = currentStudent;
  console.log(val1);

  const studentID = currentStudent["studentId"];
  const studentName = currentStudent.studentName;
  const courseName = currentStudent.courseName;
  const startDate = currentStudent.startDate;
  const endDate = currentStudent.endDate;


  console.log(studentID, studentName, courseName, startDate, endDate)


    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
  const tx = await contract.methods
    .AddStudent(studentID , studentName , courseName, startDate , endDate)
    .send({ from: accounts[0], gas: 500000 });

  console.log(tx.transactionHash)
  return tx.transactionHash;
};


var v;

const retrieveData=async (value) => {
  console.log(value);
  var t = await web3.eth.getTransaction(value);

  let input_data = "0x" + t.input.slice(10);

  var values = web3.eth.abi.decodeParameters(
    ["string", "string", "string", "string", "string"],
    input_data
  );
  console.log(values);
  return values
};


module.exports = {
  addStudent,
  retrieveData,
};
