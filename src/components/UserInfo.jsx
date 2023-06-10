import React, { useState, useRef } from 'react';
import logo from './Picture1.png';
import './UserInfo.css';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function UserInfo() {
  const userInfo = {
    name: "",
    postName: "",
    dateOfApplication: "",
    subject: "",
    section: "",
    dob: "",
    age: "",
    gender: "",
    address: "",
    phone_landline: "",
    mobileNo: "",
    email: "",
    maritalStatus: "",
    marriageDate: "",
    Fathers_spouseName: "",
    occupation: "",
    organization: "",
    noOfChildren: "",
    childrenAge: "",
    collegeName: "",
  }
  const navigate=useNavigate();
  const [user, setUser] = useState(userInfo);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    setUser((currentUser) => {
      return {
        ...currentUser,
        [id]: value,
      }
    })
  }
  console.log(user);
  const sendData = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.mobileNo) {
      alert("Enter all details");
    }
    const { name,
      postName,
      dateOfApplication,
      subject,
      section,
      dob,
      age,
      gender,
      address,
      phone_landline,
      mobileNo,
      email,
      maritalStatus,
      marriageDate,
      Fathers_spouseName,
      occupation,
      organization,
      noOfChildren,
      childrenAge,
      collegeName } = user
    const res = await fetch("/api/student", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        postName,
        dateOfApplication,
        subject,
        section,
        dob,
        age,
        gender,
        address,
        phone_landline,
        mobileNo,
        email,
        maritalStatus,
        marriageDate,
        Fathers_spouseName,
        occupation,
        organization,
        noOfChildren,
        childrenAge,
        collegeName
      })
    })
    const data=await res.json();
    
    if(data.status===400 || !data){
      alert("Invalid Registration")
    }
    else{
      alert("Registration Successful");
      navigate("/users");
    }
  }

  return (
    <div className='container'>
      <div className='userInfo'>
        <div className='userDetails text-center'>
          <form method="POST">
            <div className='logo_photo mt-3'>
              <img src={logo} alt='img' />
              <span>
                {selectedImage ? (
                  <img src={selectedImage} alt="uploaded" className="uploaded-image" />
                ) : (
                  <p onClick={handleUploadClick} >Click here to upload Picture</p>
                )}
                <input
                  type="file"
                  id="myFile"
                  name="myFile"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </span>
            </div>
            <h4 className='mt-3'>APPLICATION FOR EMPLOYMENT</h4>
            <div className='userInputFields'>
              <div>Name of the Candidate:</div>
              <input type="text" className='userInput col-md-8 col-sm-12' id="name" value={user.name} onChange={handleChange} />
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3 col-md-5 col-sm-12'>
                <div className=''>Post Applied For:</div>
                <input type="text" className='userInput col-md-6 col-sm-12' id="postName" value={user.postName} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Date Of Application:</div>
                <input type="date" className='userInput col-md-4 col-sm-12' id="dateOfApplication" value={user.dateOfApplication} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-md-5 col-sm-12'>
                <div className=''>Subject:</div>
                <input type="text" className='userInput col-md-6 col-sm-12' id="subject" value={user.subject} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Section:</div>
                <input type="text" className='userInput col-md-8 col-sm-12' id="section" value={user.section} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-md-4 col-sm-12'>
                <div className=''>Date Of Birth:</div>
                <input type="date" className='userInput col-md-6 col-sm-12' id="dob" value={user.dob} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-3 col-sm-12'>
                <div>Age:</div>
                <input type="number" className='userInput col-md-8 col-sm-12' id="age" value={user.age} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-3 col-sm-12'>
                <div>Gender:</div>
                <input type="text" className='userInput col-md-6 col-sm-12' id="gender" value={user.gender} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-lg-11 col-md-4 col-sm-12'>
                <div className=''>Address:</div>
                <input type="text" className='userInput col-lg-11 col-md-6 col-sm-12' id="address" value={user.address} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3 col-md-5 col-sm-12'>
                <div className=''>Phone(Land Line):</div>
                <input type="number" className='userInput col-md-6 col-sm-12' id="phone_landline" value={user.phone_landline} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Mobile No:</div>
                <input type="number" className='userInput col-md-8 col-sm-12' min="10" id="mobileNo" value={user.mobileNo} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-lg-11 col-md-4 col-sm-12'>
                <div>Email:</div>
                <input type="email" className='userInput col-lg-11 col-md-6 col-sm-12' id="email" value={user.email} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3 col-md-5 col-sm-12'>
                <div className=''>Marital Status:</div>
                <input type="text" className='userInput col-md-6 col-sm-12' id="maritalStatus" value={user.maritalStatus} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Marriage Date:</div>
                <input type="date" className='userInput col-md-6 col-sm-12' min="10" id="marriageDate" value={user.marriageDate} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-lg-11 col-md-4 col-sm-12'>
                <div>Father’s/ Spouse’s Name:</div>
                <input type="text" className='userInput col-lg-8 col-md-6 col-sm-12' id="Fathers_spouseName" value={user.Fathers_spouseName} onChange={handleChange} />
              </div>
            </div>
            <div className="userInputFields">
              <div className='application_details mt-3 col-md-5 col-sm-12'>
                <div className=''>Occupation:</div>
                <input type="text" className='userInput col-md-8 col-sm-12' id="occupation" value={user.occupation} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Organization:</div>
                <input type="text" className='userInput col-md-8 col-sm-12' id="organization" value={user.organization} onChange={handleChange} />
              </div>
            </div>
            <div className="userInputFields">
              <div className='application_details mt-3 col-md-5 col-sm-12'>
                <div className=''>No.of(your) children:</div>
                <input type="number" className='userInput col-md-4 col-sm-12' id="noOfChildren" value={user.noOfChildren} onChange={handleChange} />
              </div>
              <div className='application_details mt-3 col-md-6 col-sm-12'>
                <div>Age:</div>
                <input type="number" className='userInput col-md-8 col-sm-12' min="10" id="childrenAge" value={user.childrenAge} onChange={handleChange} />
              </div>
            </div>
            <div className='userInputFields'>
              <div className='application_details mt-3  col-lg-11 col-md-4 col-sm-12'>
                <div>Schoo/College they study in:</div>
                <input type="email" className='userInput col-lg-6 col-md-6 col-sm-12' id="collegeName" value={user.collegeName} onChange={handleChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Education />
      <WorkExperience />
      <div className="buttons mb-3" >
        <Button variant="primary" onClick={sendData}>Submit</Button>
      </div>
    </div>
  );
}

export default UserInfo;
