import {Application} from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";


export const applyJob = async(req,res)=>{
    try {
        const userId = req.id;
        const jobId= req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job Id is required",
                success:false
            })
        };

        // check if the user has already apply for this job

        const existingApplication = await Application.findOne({
            job:jobId,applicant:userId});
        if(existingApplication){
            return res.status(400).json({
                message:"you have already applied for this jobs",
                success:false
            });
        }
        // check if the jobs exists
        const job = await Job.findById(jobId);

        if(!job){
return res.status(404).json({
    message:"job not found",
    success:false
})
        }
        // create a new application 
const newApplication = await Application.create({
    job:jobId,
    applicant:userId,
})

job.applications.push(newApplication._id);
await job.save();
return res.status(201).json({
    message:"Job applied successfuly",
    success:true
})
    } catch (error) {
        console.log(error);
    }
};


// get all the applied jobs 

export const getAppliedJobs = async(req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"NO application",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

/// how many users applied for the job 
export const getApplicants = async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant"
            }
        });
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        };

        return res.status(200).json({
            job,
            success:true
        });
    } catch (error) {
        console.log(error)
    }
}

//  

export const updateStatus = async(req,res)=>{
    try {
        const {status} =req.body;
        const applicationId= req.params.id;
        if(!status){
            return res.status(404).json({
                message:"status is required",
                success:false,
            })
        };

        // find the application by application id 
    } catch (error) {
        console.log(error)
    }
}