const Job = require("../models/job");

const Company = require("../models/company");

const User = require("../models/user");

// create the job controller
const jobController = {
    createJob: async (request, response) => {
        try {
            // get the job details from the request body
            const { title, description, location, type, companyID } = request.body;

            // create a new job
            const newJob = new Job({
                title,
                description,
                location,
                type,
                companyID: companyID,
                createdBy: request.userId
            });

            // save the job to the database
            const savedJob = await newJob.save();

            // send the response
            response.status(201).json({ message: 'Job created successfully', job: savedJob });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getJobs: async (request, response) => {
        try {
            // get the jobs from the database
            const jobs = await Job.find();

            // send the response
            response.status(200).json({ jobs });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getJob: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // get the job details from the database
            const job = await Job.findById(id);

            // send the response
            response.status(200).json({ job });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    updateJob: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // get the job details from the request body
            const { title, description, location, type, status } = request.body;

            // update the job details
            const updatedJob = await Job.findByIdAndUpdate(id, { title, description, location, type, status }, { new: true });

            // send the response
            response.status(200).json({ message: 'Job updated successfully', job: updatedJob });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    deleteJob: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // delete the job from the database
            await Job.findByIdAndDelete(id);

            // send the response
            response.status(200).json({ message: 'Job deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    // apply for a job
    applyJob: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // get the user ID from the request
            const userID = request.userId;

            // get the job details
            const job = await Job.findById(id);

            // check if the user has already applied for the job
            if (job.applicants.includes(userID)) {
                return response.status(400).json({ message: 'You have already applied for this job' });
            }

            // add the user to the applicants list
            job.applicants.push(userID);

            // save the job to the database
            await job.save();

            // send the response
            response.status(200).json({ message: 'You have successfully applied for the job' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    // get the jobs applied by a user
    getAppliedJobs: async (request, response) => {
        try {
            // get the user ID from the request
            const userID = request.userId;

            // get the jobs applied by the user
            const jobs = await Job.find({ applicants: userID });

            // send the response
            response.status(200).json({ jobs });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    // get the applicants for a job
    getApplicants: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // get the job details
            const job = await Job.findById(id);

            // get the applicants for the job
            const applicants = await User.find({ _id: { $in: job.applicants } });

            // send the response
            response.status(200).json({ applicants });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
}

// export the job controller
module.exports = jobController;