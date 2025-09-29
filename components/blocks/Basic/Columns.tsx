import { useNode, useEditor, Element } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface ColumnsProps {
  columns?: number;
  columnCount?: number;
  gap?: string;
  alignment?: "start" | "center" | "end" | "stretch";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
  minHeight?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  display?: "grid" | "flex" | "block" | "inline-block";
  gridTemplateColumns?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  boxShadow?: string;
  opacity?: number;
  visibility?: "visible" | "hidden" | "collapse";
  smColumns?: number;
  mdColumns?: number;
  lgColumns?: number;
  xlColumns?: number;
  ariaLabel?: string;
  role?: string;
  className?: string;
}

export function Columns({
  columns = 2,
  columnCount = 2,
  gap = "gap-4",
  alignment = "stretch",
  alignItems = "stretch",
  justifyContent = "start",
  minHeight = "min-h-[200px]",
  padding = "p-4",
  margin = "my-4",
  width = "100%",
  height = "auto",
  display = "grid",
  gridTemplateColumns,
  backgroundColor = "transparent",
  borderColor = "transparent",
  borderWidth,
  borderRadius,
  boxShadow,
  opacity = 1,
  visibility = "visible",
  smColumns = 1,
  mdColumns = 2,
  lgColumns = 3,
  xlColumns = 4,
  ariaLabel,
  role = "region",
  className = "",
}: ColumnsProps) {
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
    console.log("Columns handleShowProperties called", {
      columnCount,
      gap,
      alignment,
      minHeight,
      padding,
      margin,
      id,
    });
    openPanel(
      "columns",
      {
        columnCount,
        gap,
        alignment,
        minHeight,
        padding,
        margin,
      },
      id,
      (newProps) => {
        console.log("Columns props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          setProp((props: ColumnsProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getGridColsClass = (count: number) => {
    switch (count) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      case 7:
        return "grid-cols-7";
      case 8:
        return "grid-cols-8";
      case 9:
        return "grid-cols-9";
      case 10:
        return "grid-cols-10";
      case 11:
        return "grid-cols-11";
      case 12:
        return "grid-cols-12";
      default:
        return "grid-cols-2";
    }
  };

  const getResponsiveGridCols = () => {
    const sm = smColumns ? `sm:${getGridColsClass(smColumns).replace('grid-cols-', 'grid-cols-')}` : '';
    const md = mdColumns ? `md:${getGridColsClass(mdColumns).replace('grid-cols-', 'grid-cols-')}` : '';
    const lg = lgColumns ? `lg:${getGridColsClass(lgColumns).replace('grid-cols-', 'grid-cols-')}` : '';
    const xl = xlColumns ? `xl:${getGridColsClass(xlColumns).replace('grid-cols-', 'grid-cols-')}` : '';
    return `${getGridColsClass(columns || columnCount)} ${sm} ${md} ${lg} ${xl}`.trim();
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

  const containerStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius,
    boxShadow,
    opacity,
    visibility,
    width,
    height,
    ...(gridTemplateColumns && { gridTemplateColumns }),
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${padding} ${margin} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""} ${className}`}
      style={containerStyle}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        role={role}
        aria-label={ariaLabel}
      >
        <div
          className={`${display} ${getResponsiveGridCols()} ${gap} ${getItemsClass(alignment)} ${minHeight}`}
          style={{
            alignItems: display === 'flex' ? alignItems : undefined,
            justifyContent: display === 'flex' ? justifyContent : undefined,
          }}
        >
          {Array.from({ length: columns || columnCount }, (_, index) => (
            <Element
              key={index}
              id={`column-${index}`}
              is="div"
              canvas
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[150px] bg-gray-50/50"
            >
              <div className="text-center text-gray-500 text-sm">
                Column {index + 1}
                <br />
                <span className="text-xs">Drop components here</span>
              </div>
            </Element>
          ))}
        </div>
      </div>

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="columns"
            onEdit={() => {}}
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
          Columns ({columnCount})
        </div>
      )}
    </Resizer>
  );
}

Columns.craft = {
  displayName: "Columns",
  props: {
    columns: 2,
    columnCount: 2,
    gap: "gap-4",
    alignment: "stretch",
    alignItems: "stretch",
    justifyContent: "start",
    minHeight: "min-h-[200px]",
    padding: "p-4",
    margin: "my-4",
    width: "100%",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: "",
    borderRadius: "",
    boxShadow: "",
    opacity: 1,
    visibility: "visible",
    smColumns: 1,
    mdColumns: 2,
    lgColumns: 3,
    xlColumns: 4,
    ariaLabel: "",
    role: "region",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
