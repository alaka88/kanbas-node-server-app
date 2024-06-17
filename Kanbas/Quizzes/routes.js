import * as dao from "./dao.js";
export default function QuizRoutes(app) {
app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findAllQuizzes(cid);
    res.json(quizzes);
});
app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
        res.json(status);
    });

app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
    };
    const status = await dao.createQuiz(newQuiz)
        res.json(status);
  });
 
  app.put("/api/quizzes/:qid", async (req, res) => {
      const { qid } = req.params;
      const quiz = req.body;
      const status = await dao.updateQuiz(qid, quiz);
      res.json(status);
    });  

app.get("/api/quizzes/:cid", async (req, res) => {
    const quizzes = await dao.findQuizzesByCourseId(req.params.cid);
    res.json(quizzes);
});  
}

