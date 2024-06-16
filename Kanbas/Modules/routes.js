import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const newModule = {
        ...req.body,
        course: cid,
        };
        const module = await dao.createModule(newModule);
        res.json(module);
        });
        
    app.delete("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
        });

    app.put("/api/modules/:mid", async (req, res) => {
        const { mid } = req.params;
        const module = req.body;
        const status = await dao.updateModule(mid, module);
        res.json(status);
        });
     
app.get("/api/courses/:cid/modules", async (req, res) => {
const { cid } = req.params;
const modules = await dao.findAllModules(cid);
res.json(modules);
});
}