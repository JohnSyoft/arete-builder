import { useNode, useEditor, Element } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

interface RowProps {
  rowCount?: number;
  gap?: string;
  alignment?: "start" | "center" | "end" | "stretch";
  minHeight?: string;
  padding?: string;
  margin?: string;
}

export function Row({
  rowCount = 2,
  gap = "gap-4",
  alignment = "stretch",
  minHeight = "min-h-[100px]",
  padding = "p-4",
  margin = "my-4",
}: RowProps) {
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
    openPanel(
      "row",
      {
        rowCount,
        gap,
        alignment,
        minHeight,
        padding,
        margin,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: RowProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getItemsClass = (align: string) => {
    switch (align) {
      case "start":
        return "items-start";
      case "center":
        return "items-center";
      case "end":
        return "items-end";
      case "stretch":
        return "items-stretch";
      default:
        return "items-stretch";
    }
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative group ${padding} ${margin} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className={`flex flex-col ${gap} ${getItemsClass(alignment)}`}>
        {Array.from({ length: rowCount }, (_, index) => (
          <Element
            key={index}
            id={`row-${index}`}
            is="div"
            canvas
            className={`border-2 border-dashed border-gray-300 rounded-lg p-4 ${minHeight} bg-gray-50/50`}
          >
            <div className="text-center text-gray-500 text-sm">
              Row {index + 1}
              <br />
              <span className="text-xs">Drop components here</span>
            </div>
          </Element>
        ))}
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
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
          Rows ({rowCount})
        </div>
      )}
    </div>
  );
}

Row.craft = {
  displayName: "Row",
  props: {
    rowCount: 2,
    gap: "gap-4",
    alignment: "stretch",
    minHeight: "min-h-[100px]",
    padding: "p-4",
    margin: "my-4",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
