"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FadeImageProps = ImageProps & {
  wrapperClassName?: string;
  imageClassName?: string;
};

export default function FadeImage({
  wrapperClassName = "",
  imageClassName = "",
  className,
  onLoad,
  ...props
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-100 ${wrapperClassName}`}
    >
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={[
          className,
          imageClassName,
          "transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}