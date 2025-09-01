import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Film } from "lucide-react";
import { Resizer } from "../Resizer";

interface VideoProps {
  src?: string;
  poster?: string;
  width?: string;
  height?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

export function Video({
  src = "",
  poster = "",
  width = "w-full",
  height = "h-64",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  margin = "my-4",
  padding = "p-0",
  borderRadius = "rounded-lg",
}: VideoProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { actions } = useEditor();

  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    console.log("Video handleShowProperties called", {
      src,
      poster,
      width,
      height,
      autoplay,
      controls,
      loop,
      muted,
      margin,
      padding,
      borderRadius,
      id,
    });
    openPanel(
      "video",
      {
        src,
        poster,
        width,
        height,
        autoplay,
        controls,
        loop,
        muted,
        margin,
        padding,
        borderRadius,
      },
      id,
      (newProps) => {
        console.log("Video props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          setProp((props: VideoProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleVideoClick = () => {
    handleShowProperties();
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const isVimeoUrl = (url: string) => {
    return url.includes("vimeo.com");
  };

  const getEmbedUrl = (url: string) => {
    if (isYouTubeUrl(url)) {
      // Convert YouTube URL to embed format
      const videoId = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
      )?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (isVimeoUrl(url)) {
      // Convert Vimeo URL to embed format
      const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
    return url;
  };

  const renderVideoContent = () => {
    if (!src) {
      return (
        <div
          style={{ width: "100%", height: "100%" }}
          className={`${borderRadius} bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors`}
          onClick={handleVideoClick}
        >
          <Film className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm text-center">
            Click to add video
          </p>
          <p className="text-gray-400 text-xs text-center mt-1">
            Supports MP4, YouTube, Vimeo
          </p>
        </div>
      );
    }

    if (isYouTubeUrl(src) || isVimeoUrl(src)) {
      return (
        <iframe
          src={getEmbedUrl(src)}
          style={{ width: "100%", height: "100%" }}
          className={`${borderRadius}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <video
        src={src}
        poster={poster}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        muted={muted}
        style={{ width: "100%", height: "100%" }}
        className={`${borderRadius} object-cover`}
        onClick={(e) => e.preventDefault()} // Prevent video play in editor
      />
    );
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={{
        margin: margin,
        padding: padding,
      }}
    >
      {renderVideoContent()}

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="video"
            onEdit={handleVideoClick}
            onGenerateAI={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Video
        </div>
      )}
    </Resizer>
  );
}

Video.craft = {
  displayName: "Video",
  props: {
    src: "",
    poster: "",
    width: "w-full",
    height: "h-64",
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    margin: "my-4",
    padding: "p-0",
    borderRadius: "rounded-lg",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
