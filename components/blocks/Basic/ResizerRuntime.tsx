import React from "react";

interface ResizerRuntimeProps {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  [key: string]: any;
}

export const ResizerRuntime: React.FC<ResizerRuntimeProps> = ({
  width,
  height,
  children,
  ...props
}) => {
  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};
