import Student from "../models/students.js";
const showStudentData = async (req, res) => {
  try {
    const createUser = new Student(req.body);
    const savedData = await createUser.save();
    res.status(201).send(savedData);
  } catch (e) {
    console.log(e); // Add this line to log the error
    res.status(400).send("An error occurred");
  }
};
// get students
const getStudentData = async (req, res) => {
  const getData = await Student.find();
  res.send(getData);
};
// update the student by its id
const updateStudentData = async (req, res) => {
  try {
    const _id = req.params.id; // Corrected line
    console.log(_id+" "+req.body)
    const updateData = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updateData);
    res.send(updateData);
  } catch (e) {
    console.log(e);
    res.status(404).send("User not found");
  }
};
// delete student by id
const deleteStudentById = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!_id) {
      res.status(400).send("user might not present");
    } else {
      res.status(200).send(deleteStudent);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
};

export {
  showStudentData,
  getStudentData,
  updateStudentData,
  deleteStudentById,
};
