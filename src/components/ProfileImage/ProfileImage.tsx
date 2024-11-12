"use client";
import React from "react";
import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <motion.div
      initial={{ padding: "0 0 0 0" }}
      animate={{ padding: "32px 32px 32px 32px" }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 2 }}
      className="relative"
    >
      <motion.img
        initial={{ borderRadius: 0 }}
        animate={{ borderRadius: "24px" }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 2 }}
        src="/Imagens/avatar.jpeg"
        alt="Optimized Logo"
        className="object-cover w-full h-auto"
      />
    </motion.div>
  );
}

export default ProfileImage;
