"use client";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
//import { motion } from "framer-motion";
import React from "react";

function ProfileContainer() {
  return (
    <>
      <ProfileImage />
      <div className="h-16"></div>
      <p style={{
        textAlign:"right", 
        color:'#4A4A4A', 
        fontWeight:"400", 
        fontSize:"20px",
        paddingLeft:"32px",
        paddingRight:"32px",
        paddingTop:"48px",
        paddingBottom:"80px",
      }} className="font-main">
        Through strategy and research, I intend to collaborate
        <br />
        with the team for the improvement of the business. For 
        <br />
        me, it's fundamental to learn the process behind every 
        <br />
        project so the quality of the final product is the best it can
        <br />
        be. I'm also always looking for an understanding of the 
        <br />
        potentials and limitations in myself and the group so
        <br />
        nothing gets in the way of completing the task. 
      </p>

      {/* <p className="font-main font-regular text-[20px] md:text-[25px] px-8 pt-12 pb-20">
        My mission is, through strategy and
        <br />
        study, to reveal strengths and elevate
        <br />
        the brand, ensuring effective and
        <br />
        unique experiences.
      </p> */}
    </>
  );
}

export default ProfileContainer;
