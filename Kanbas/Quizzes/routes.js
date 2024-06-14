import db from "../Database/index.js";
export default function QuizRoutes(app) {
app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = db.quizzes.filter((q) => q.course === cid);
    res.json(quizzes);
});
app.delete("/api/assignments/:qid", (req, res) => {
    const { qid } = req.params;
    db.quizzes = db.quizzes.filter((q) => q._id !== qid);
    res.sendStatus(200);
    });
}