import { useState } from "react";
import Job from "./Job";
interface Props {
  jobs: Job[];
}
interface Job {
  name: string;
  id: number;
  status: boolean;
}
export default function Jobs(props: Props) {
  const [jobs, setJobs] = useState<Job[]>(props.jobs);
  const [completedCount, setCompletedCount] = useState<number>(
    props.jobs.filter((job) => job.status).length 
  );

  const handleJobStatusChange = (status: boolean) => {
    setCompletedCount((prevCount) => prevCount + (status ? 1 : -1));
  };
  const handleDelete = (id: number) => {
    const updatedJobs = jobs.filter((job) => job.id !== id); 
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  return (
    <>
      <div>
        {jobs.map((job) => (
          <Job
            key={job.id}
            job={job}
            onJobStatusChange={handleJobStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <h4>Công việc đã hoàn thành: {completedCount}</h4>
    </>
  );
}
