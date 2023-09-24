// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SIH
{

    event on_successful_transaction(string student_id,string student_name,string course_name,string start_date,string end_data);

    struct Student{
        // bytes32 _hash;
        string student_id;
        string student_name;
        string course_name;
        string start_date;
        string end_date;
    }

    // mapping(string=>Student) public stud;

    // function ReturnTransactionHash() public{

    // }

    function AddStudent(string memory s_id,string memory s_name,string memory c_name,string memory s_date,string memory e_date) public{
        // stud[s_id]=Student(s_id,s_name,c_name,s_date,e_date);
        
        emit on_successful_transaction(s_id,s_name,c_name,s_date,e_date);
    }

    // function ShowId(bytes32 hash) public view returns(string memory){
    //     return stud[hash].student_id;
    // }
}