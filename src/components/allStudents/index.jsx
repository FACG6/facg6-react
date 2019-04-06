import React, { Component } from "react";

import Student from "./student";
import "./style.css";

export class index extends Component {
  state = {
    students: [
      { id: 1, username: "AbdallahAmmar96" },
      { id: 2, username: "AhmedAl-Almi" },
      { id: 3, username: "ahmedisam99" },
      { id: 4, username: "alaabadra" },
      { id: 5, username: "aminalakhsham" },
      { id: 6, username: "Angham116" },
      { id: 7, username: "Anies12" },
      { id: 8, username: "AymanAlqoqa" },
      { id: 9, username: "engshorouq" },
      { id: 10, username: "IsraaSulaiman" },
      { id: 11, username: "Jamalat-shamallakh" },
      { id: 12, username: "mohammedmh" },
      { id: 13, username: "naremanhilles" },
      { id: 14, username: "Fatmasiam" },
      { id: 15, username: "denaHS" },
      { id: 16, username: "KhaderMurtaja" }
    ]
  };
  render() {
    return (
      <main className='main'>
        {this.state.students.map(student => (
          <Student key={student.id} username={student.username} />
        ))}
      </main>
    );
  }
}

export default index;
