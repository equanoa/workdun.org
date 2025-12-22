"use client"

import { type ImgHTMLAttributes } from "react"
import Zoom, { type UncontrolledProps } from "react-medium-image-zoom"
import { cn } from "@/lib/utils"

export interface ImageZoomProps extends ImgHTMLAttributes<HTMLImageElement> {
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>
  zoomProps?: UncontrolledProps
  className?: string
  src: string
  alt: string
}

function getImageSrc(src: string): string {
  return src
}

export function ImageZoom({
  zoomInProps,
  zoomProps,
  className,
  children,
  src,
  alt,
  ...props
}: ImageZoomProps) {
  return (
    <Zoom
      classDialog={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      )}
      classOverlay={cn(
        "absolute inset-0 transition-colors bg-background/80",
        "cursor-zoom-out" 
      )}
      closeText="Close" 
      zoomMargin={20}
      wrapElement="span"
      {...zoomProps}
      zoomImg={{
        src: getImageSrc(src),
        sizes: undefined,
        className: cn(
          "image-rendering-high-quality cursor-zoom-out", 
          zoomInProps?.className
        ),
        alt: alt,
        ...zoomInProps,
      }}
    >
      {children ?? (
        <img
          className={cn(
            "cursor-zoom-in rounded-md transition-all",
            className
          )}
          src={src}
          alt={alt}
          {...props}
        />
      )}
    </Zoom>
  )
}

