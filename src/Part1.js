import React, { useState } from 'react'


const Part1 = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
    };

    let [name, setName] = useState('')
    let [gender, setGender] = useState('')
    let [region, setRegion] = useState('Asia')
    let [isShow, setIsShow] = useState(false)


    let handleNameChange = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }

    let handleGenderChange = (event) => {
        // console.log(event.target)
        setGender(event.target.value)
    }

    let handleLocChange = (event) => {
        // console.log(event.target);
        setRegion(event.target.value)
    }


    let handleSubmit = (event) => {
        setIsShow(true)
        event.preventDefault()
    }

    return (

        <div>
            <div style={styles}>
                <form onSubmit={handleSubmit}>
                    <label>Enter your name: &ensp;</label>
                    <input type="text" name="username" value={name} onChange={handleNameChange} />
                    <br /><br />

                    <label>Select Your Gender:</label> <br />

                    <input type="radio" name="gender" value="Male" onChange={handleGenderChange} /> Male
                    <br />
                    <input type="radio" name="gender" value="Female" onChange={handleGenderChange} /> Female
                    <br />
                    <input type="radio" name="gender" value="Other" onChange={handleGenderChange} /> Other
                    <br />
                    <br />


                    <label>Choose Your Location</label>
                    <select onChange={handleLocChange}>
                        <option value='Asian'>Asian</option>
                        <option value='American'>American</option>
                        <option value='European'>European</option>
                        <option value='Middle East'>Middle East</option>
                        <option value='African'>African</option>
                        <option value='Any Other'>Any Other</option>
                    </select>
                    <br /><br />


                    <button type="submit">Submit form</button>
                </form>
            </div>

            <br /><br />

            <br /><br />

            <br /><br />
            <div style={styles}>
                {isShow === false ? '' :
                    <div>
                        <h1>Your Submited Information</h1>
                        <h3>Name</h3> {name}
                        <h3>Gender</h3> {gender}
                        <h3>Region</h3> {region}
                    </div>}
            </div>

        </div>
    )
}

export default Part1