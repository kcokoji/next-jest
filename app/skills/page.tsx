import React from "react";
import Skills from "../components/skills";
import Users from "../components/users";

export default function SkillsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <Users />
      <Skills Skills={["CSS", "HTML"]} />
    </div>
  );
}
