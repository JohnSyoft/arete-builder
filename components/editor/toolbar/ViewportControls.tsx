import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Tablet } from "@/components/icons";
import {
  useViewportStore,
  type ViewportType,
} from "@/lib/store/viewport-store";

export function ViewportControls() {
  const { currentViewport, setViewport } = useViewportStore();

  const handleViewportChange = (viewport: ViewportType) => {
    setViewport(viewport);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 ${
          currentViewport === "mobile" ? "bg-white shadow-sm" : ""
        }`}
        onClick={() => handleViewportChange("mobile")}
        title="Mobile View (375px)"
      >
        <Smartphone className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 ${
          currentViewport === "tablet" ? "bg-white shadow-sm" : ""
        }`}
        onClick={() => handleViewportChange("tablet")}
        title="Tablet View (768px)"
      >
        <Tablet className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 w-8 p-0 ${
          currentViewport === "desktop" ? "bg-white shadow-sm" : ""
        }`}
        onClick={() => handleViewportChange("desktop")}
        title="Desktop View (100%)"
      >
        <Monitor className="w-4 h-4" />
      </Button>
    </div>
  );
}
