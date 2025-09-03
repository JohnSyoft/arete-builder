import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { MapPin, Navigation } from "lucide-react";

interface MapProps {
  address?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  width?: string;
  height?: string;
  mapType?: "roadmap" | "satellite" | "hybrid" | "terrain";
  showMarker?: boolean;
  margin?: string;
  padding?: string;
  borderRadius?: string;
}

export function Map({
  address = "",
  lat = 40.7128,
  lng = -74.006,
  zoom = 15,
  width = "w-full",
  height = "h-64",
  mapType = "roadmap",
  showMarker = true,
  margin = "my-4",
  padding = "p-0",
  borderRadius = "rounded-lg",
}: MapProps) {
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
    console.log("Map handleShowProperties called", {
      address,
      lat,
      lng,
      zoom,
      width,
      height,
      mapType,
      showMarker,
      margin,
      padding,
      borderRadius,
      id,
    });
    openPanel(
      "map",
      {
        address,
        lat,
        lng,
        zoom,
        width,
        height,
        mapType,
        showMarker,
        margin,
        padding,
        borderRadius,
      },
      id,
      (newProps) => {
        console.log("Map props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          setProp((props: MapProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleAddressClick = () => {
    handleShowProperties();
  };

  const getGoogleMapsEmbedUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed/v1/place";
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with actual API key

    if (address) {
      return `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(
        address
      )}&zoom=${zoom}&maptype=${mapType}`;
    } else {
      return `${baseUrl}?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}&maptype=${mapType}`;
    }
  };

  const renderMapContent = () => {
    if (!address && lat === 40.7128 && lng === -74.006) {
      return (
        <div
          className={`${width} ${height} ${borderRadius} bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors`}
          onClick={handleAddressClick}
        >
          <MapPin className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm text-center">
            Click to add location
          </p>
          <p className="text-gray-400 text-xs text-center mt-1">
            Enter address or coordinates
          </p>
        </div>
      );
    }

    // For demo purposes, show a static placeholder
    // In production, you'd use Google Maps Embed API or another mapping service
    return (
      <div
        className={`${width} ${height} ${borderRadius} bg-gradient-to-br from-blue-200 to-green-200 flex flex-col items-center justify-center relative overflow-hidden`}
        style={{
          backgroundImage: `linear-gradient(45deg, #e3f2fd 25%, transparent 25%), 
                           linear-gradient(-45deg, #e3f2fd 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, #e3f2fd 75%), 
                           linear-gradient(-45deg, transparent 75%, #e3f2fd 75%)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      >
        <div className="absolute inset-0 bg-blue-100/50"></div>
        <div className="relative z-10 text-center">
          <Navigation className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
          <p className="text-blue-800 text-sm font-medium">
            {address || `${lat}, ${lng}`}
          </p>
          <p className="text-blue-600 text-xs mt-1">Zoom: {zoom}x</p>
        </div>
        {showMarker && (
          <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-red-500" />
        )}
      </div>
    );
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative group ${margin} ${padding} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      {renderMapContent()}

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="map"
            onEdit={handleAddressClick}
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
          Map
        </div>
      )}
    </div>
  );
}

Map.craft = {
  displayName: "Map",
  props: {
    address: "",
    lat: 40.7128,
    lng: -74.006,
    zoom: 15,
    width: "w-full",
    height: "h-64",
    mapType: "roadmap",
    showMarker: true,
    margin: "my-4",
    padding: "p-0",
    borderRadius: "rounded-lg",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
