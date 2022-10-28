import React from 'react'

const Part2 = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
    };

    let studentdDummyData = [
        {
            name: "Arman",
            age: 25,
            subject: 'Javascript'
        },
        {
            name: "Bikash",
            age: 29,
            subject: 'Python'
        },
        {
            name: "Dwayne",
            age: 28,
            subject: 'MongoDB'
        },
        {
            name: "Chris",
            age: 25,
            subject: 'Web Development'
        },
    ]
  return (
      <div>
              {studentdDummyData.length === 0 ? 'No data to Display' :
                  studentdDummyData.map(ele => <div style={styles}>
                    Student Name: &ensp; {ele.name} <br />
                    Student Age: &ensp; {ele.age} <br />
                    Student Subject: &ensp; {ele.subject} <br />
                      <br /><br /><br />
                  </div>)
              }
    </div>
  )
}

export default Part2