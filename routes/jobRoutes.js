const express = require('express');
const jobRouter = express.Router();
const auth = require('../middleware/auth');
const jobController = require('../controllers/jobController');

// define the routes
jobRouter.post('/', auth.checkAuth, auth.isAdmin, jobController.createJob);
jobRouter.get('/', jobController.getJobs);
jobRouter.get('/applied', auth.checkAuth, jobController.getAppliedJobs);
jobRouter.get('/applied/:id', auth.checkAuth, auth.isAdmin, jobController.getApplicants);
jobRouter.get('/:id', jobController.getJob);
jobRouter.put('/:id', auth.checkAuth, auth.isAdmin, jobController.updateJob);
jobRouter.delete('/:id', auth.checkAuth, auth.isAdmin, jobController.deleteJob);
jobRouter.post('/:id/apply', auth.checkAuth, jobController.applyJob);

// export the router
module.exports = jobRouter;