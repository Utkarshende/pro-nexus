import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProjectGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.length === 0 ? (
          <p className="text-slate-500 italic">No projects found. Add your first one!</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-800">{project.title}</h4>
                  <p className="text-sm text-slate-500">{project.clientName}</p>
                </div>
                <span className="text-emerald-600 font-bold">${project.budget}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-semibold">
                  {project.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ProjectGrid