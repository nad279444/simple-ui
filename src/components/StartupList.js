import React from "react";
import { FaCheck } from "react-icons/fa";
import { BsTrash,BsPen } from "react-icons/bs";

const StartupList = () => {
  return (
    <div className="background">
      <div className="details">
        <h4>All Startups</h4>
      </div>
      <div className="filter">
          <small>Filter Startups</small>
      </div>
      <div className="list bg">
          <span className="company">Company</span>
          <span>Market/Industry</span>
          <span>Location</span>
          <span>Joined</span>
          <span>Approved</span>
          <span>Action</span>
      </div>
      <div className="info">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
      <div className="info bg">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
      <div className="info">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
      <div className="info bg">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
      <div className="info">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
      <div className="info bg">
          <span className="company"><small>Company Name</small></span>
          <span><small>Real Estate</small></span>
          <span><small>Lagos</small></span>
          <span><small>Dec 12,2016</small></span>
          <span className="green"><FaCheck color="white"/></span>
          <span className="blue"><BsPen color="white"/></span><span className="red"><BsTrash color="white" /></span>
      </div>
    </div>
  );
};

export default StartupList;
