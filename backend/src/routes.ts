import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";

import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;

/* {
	"name": "Lar das meninas",
	"latitude": -27.2104339,
	"longitude": -47.6291111,
	"about": "Sobre o orfanato",
	"instructions": "Venha visitar",
	"opening_hours": "De 8h as 18h",
	"open_on_weekends": true
   }
*/