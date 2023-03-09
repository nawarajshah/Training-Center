import React from 'react'

export default function ProjectCard({ name, description, repository, webpage, videos, status }) {

  return(
      <div className={`student 
                      ${status === "beta" ? "beta" : ""} 
                      ${status === "alpha" ? "alpha" : ""}
                      ${(status !== "alpha") && (status !== "beta") ? "stable" : ""}`
                      }>
        <ul>
            <li className="title">
              {name}
            </li>
            {description==='' ? '' : 
              <li>
                {description}
              </li>
            }
            {repository==='' ? '' : 
              <li>
                <a 
                  href={repository} 
                  target="_blank" 
                  rel="noreferrer"
                >Contribute!</a>
              </li>
            }
            {webpage==='' ? '' : 
              <li>
                <a 
                  href={webpage} 
                  target="_blank" 
                  rel="noreferrer"
                >Start learning!</a>
              </li>
            }
            {videos==='' ? '' : 
              <li>
                <a 
                  href={videos} 
                  target="_blank" 
                  rel="noreferrer"
                >Watch videos</a>
              </li>
            }
        </ul>
      </div>
  ) 
}
