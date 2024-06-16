import * as dao from "./dao.js";
const createCourse = async (req, res) => {
const course = await dao.createCourse(req.body);
res.json(course);
};
const deleteCourse = async (req, res) => {
const { id } = req.params;
const status = await dao.deleteCourse(id);
res.json(status);
};
const findAllCourses = async (req, res) => {
const courses = await dao.findAllCourses();
res.json(courses);
};
const updateCourse = async (req, res) => {
const { id } = req.params;
const course = req.body;
const status = await dao.updateCourse(id, course);
res.json(status);
};
export default function CourseRoutes(app) {
app.post("/api/courses", createCourse);
app.delete("/api/courses/:id", deleteCourse);
app.put("/api/courses/:id", updateCourse);
app.get("/api/courses", findAllCourses);
}

