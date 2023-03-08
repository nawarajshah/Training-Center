import React, { useEffect, useMemo, useState } from "react"
import ProjectCard from "../components/ProjectCard";
import projects from "../content/index.yaml"
import './style.css'

export default function Index() {
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [videoAvaliable, setVideoAvaliable] = useState();

  useEffect(() => {
    setSportList(projects);
  }, []);

  function getFilteredList() {
    if (!selectedCategory && !videoAvaliable) {
      return sportList;
    }
    else if(selectedCategory && !videoAvaliable) {
      return sportList.filter((item) => item.status === selectedCategory);
    }
    else if(!selectedCategory && videoAvaliable) {
      return sportList.filter((item) => item.videos !== "");
    }
    else {
      return sportList
            .filter((item) => item.status === selectedCategory)
            .filter((item) => item.videos !== "");
    }
  }

  var filteredList = useMemo(getFilteredList, [videoAvaliable, selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleVideoChange() {
    setVideoAvaliable(!videoAvaliable);
  }

  return(
    <div class="wrapper">
      <div class="sideBar">
        <div className="sideBarContent">
          <div className="filterByStatus">
            <h2>Filter</h2>

            <label>Status:
              <select  
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="stable">stable</option>
              <option value="beta">beta</option>
              <option value="alpha">alpha</option>
              </select>
            </label>
          </div>
          <div className="filterByVideo">
            <label>
              <input 
                type="checkbox" 
                id="video" 
                checked={videoAvaliable}
                value="video"
                onChange={handleVideoChange}
              />
                Video
            </label>

          </div>
        </div>
      </div>
      
      <div class="container">
        {filteredList.map((project, index) => (
          <ProjectCard {...project} key={`project_item_${index}`} />
        ))}
      </div>
    </div>
  )
}
// export default indexPage


