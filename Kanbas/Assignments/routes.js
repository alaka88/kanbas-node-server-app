import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAllAssignments(cid);
    res.json(assignments);
});
app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
    };
    const status = await dao.createAssignment(newAssignment)
        res.json(status);
  });
  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
        res.json(status);
    });
  app.put("/api/assignments/:aid", async (req, res) => {
      const { aid } = req.params;
      const assignment = req.body;
      const status = await dao.updateAssignment(aid, assignment);
      res.json(status);
    });  
}