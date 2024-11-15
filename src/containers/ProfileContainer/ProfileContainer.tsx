"use client";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import { motion } from "framer-motion";
import React from "react";

function ProfileContainer() {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 4 }}
      >
        <div className="flex flex-col space-y-3 px-8 pt-40 md:pt-20">
          <h1 className="font-main font-semibold text-[40px] md:text-[61px] text-black">
            Beatriz Calado Gon&ccedil;alves
          </h1>
        </div>

      </motion.div>      

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
        me, it&apos;s fundamental to learn the process behind every 
        <br />
        project so the quality of the final product is the best it can
        <br />
        be. I&apos;m also always looking for an understanding of the 
        <br />
        potentials and limitations in myself and the group so
        <br />
        nothing gets in the way of completing the task. 
      </p>
    </>
  );
}

export default ProfileContainer;
