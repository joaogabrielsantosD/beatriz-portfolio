"use client";
import BaseboardContainer from '@/containers/BaseboardContainer/BaseboardContainer';
// src/app/page.tsx
import ProfileContainer from '@/containers/ProfileContainer/ProfileContainer';
import React from 'react';

const Page = () => {
  return (
    <>
      <ProfileContainer />
      <BaseboardContainer />
    </>
  );
};

export default Page;
