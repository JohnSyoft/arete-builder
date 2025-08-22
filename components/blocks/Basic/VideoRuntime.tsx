import React from "react"

interface VideoProps {
  src?: string
  poster?: string
  width?: string
  height?: string
  autoplay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  margin?: string
  borderRadius?: string
}

export function VideoRuntime({
  src = "",
  poster = "",
  width = "w-full",
  height = "h-auto",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  margin = "my-4",
  borderRadius = "rounded-lg"
}: VideoProps) {
  if (!src) {
    return (
      <div className={`${margin} ${width} ${height} min-h-64`}>
        <div className={`${width} ${height} min-h-64 ${borderRadius} bg-gray-200 flex items-center justify-center`}>
          <div className="text-gray-500 text-center">
            <div className="text-lg font-semibold">Video Player</div>
            <div className="text-sm">No video source provided</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${margin} ${width}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        muted={muted}
        className={`${width} ${height} ${borderRadius}`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
