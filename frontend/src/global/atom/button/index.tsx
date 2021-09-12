import React from "react";
import { CustomButton } from "../../../styles/global/atom/button";

interface PropsButton {
  text: string,
  type: any,
  onClick?: any
}

export const Button = ({ text, type, onClick }: PropsButton) => {
  return (
    <CustomButton
      type={ type }
      onClick={ onClick }
    >
      { text }
    </CustomButton>
  )
}