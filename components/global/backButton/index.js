import { BACK_SVG } from "assets/svgs";
import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBackPress = () => router.back();

  return (
    <div className="back_button" onClick={handleBackPress}>
      {BACK_SVG}
      <span>back</span>
    </div>
  );
};

export default BackButton;
