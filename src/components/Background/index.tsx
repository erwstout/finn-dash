import React from "react";
import styled from "styled-components";
import bg1 from "./bg1.mp4";

interface BackgroundProps {
  isVideo: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
}

export const Background = ({ isVideo = false }: BackgroundProps) => {
  if (isVideo) {
    return (
      <div className="something">
        <video playsInline muted autoPlay loop className="backgroundVideo">
          <source src={bg1} type="video/mp4" />
        </video>
      </div>
    );
  }
  return <div />;
};
