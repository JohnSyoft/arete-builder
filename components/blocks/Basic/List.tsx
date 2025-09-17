import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface ListItem {
  id: string;
  text: string;
}

interface ListProps {
  type?: "ul" | "ol";
  items?: ListItem[];
  listStyle?:
    | "disc"
    | "circle"
    | "square"
    | "decimal"
    | "decimal-leading-zero"
    | "lower-roman"
    | "upper-roman"
    | "lower-alpha"
    | "upper-alpha"
    | "none";
  spacing?: "tight" | "normal" | "relaxed";
  textAlign?: "left" | "center" | "right";
  fontSize?: string;
  color?: string;
  margin?: string;
  padding?: string;
  indent?: string;
  width?: string;
  height?: string;
}

export function List({
  type = "ul",
  items = [
    { id: "1", text: "First list item" },
    { id: "2", text: "Second list item" },
    { id: "3", text: "Third list item" },
  ],
  listStyle = "disc",
  spacing = "normal",
  textAlign = "left",
  fontSize = "text-base",
  color = "text-gray-900",
  margin = "my-4",
  padding = "",
  indent = "ml-6",
  width = "auto",
  height = "auto",
}: ListProps) {
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
      "list",
      {
        type,
        items,
        listStyle,
        spacing,
        textAlign,
        fontSize,
        color,
        margin,
        padding,
        indent,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: ListProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getSpacingClass = (spacingType: string) => {
    switch (spacingType) {
      case "tight":
        return "space-y-1";
      case "normal":
        return "space-y-2";
      case "relaxed":
        return "space-y-3";
      default:
        return "space-y-2";
    }
  };

  const getTextAlignClass = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const getListStyleClass = (style: string) => {
    switch (style) {
      case "disc":
        return "list-disc";
      case "circle":
        return "list-circle";
      case "square":
        return "list-square";
      case "decimal":
        return "list-decimal";
      case "decimal-leading-zero":
        return "list-decimal-leading-zero";
      case "lower-roman":
        return "list-lower-roman";
      case "upper-roman":
        return "list-upper-roman";
      case "lower-alpha":
        return "list-lower-alpha";
      case "upper-alpha":
        return "list-upper-alpha";
      case "none":
        return "list-none";
      default:
        return "list-disc";
    }
  };

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      text: "New list item",
    };
    setProp((props: ListProps) => {
      props.items = [...(props.items || []), newItem];
    });
  };

  const removeItem = (itemId: string) => {
    setProp((props: ListProps) => {
      props.items = (props.items || []).filter((item) => item.id !== itemId);
    });
  };

  const updateItem = (itemId: string, newText: string) => {
    setProp((props: ListProps) => {
      props.items = (props.items || []).map((item) =>
        item.id === itemId ? { ...item, text: newText } : item
      );
    });
  };

  const ListTag = type as keyof JSX.IntrinsicElements;

  const listClasses = `
    ${getListStyleClass(listStyle)}
    ${getSpacingClass(spacing)}
    ${getTextAlignClass(textAlign)}
    ${fontSize}
    ${color}
    ${margin}
    ${padding}
    ${indent}
  `.trim();

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${
        selected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
      >
        <ListTag className={listClasses}>
          {items.map((item) => (
            <li key={item.id} className="relative group/item">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateItem(item.id, e.target.textContent || "")}
                className="outline-none"
              >
                {item.text}
              </span>
              {selected && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute -right-6 top-0 opacity-0 group-hover/item:opacity-100 text-red-500 hover:text-red-700 text-xs"
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ListTag>

        {selected && (
          <button
            onClick={addItem}
            className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
          >
            + Add Item
          </button>
        )}
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="text"
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
          {type.toUpperCase()} List ({items.length} items)
        </div>
      )}
    </Resizer>
  );
}

List.craft = {
  displayName: "List",
  props: {
    type: "ul",
    items: [
      { id: "1", text: "First list item" },
      { id: "2", text: "Second list item" },
      { id: "3", text: "Third list item" },
    ],
    listStyle: "disc",
    spacing: "normal",
    textAlign: "left",
    fontSize: "text-base",
    color: "text-gray-900",
    margin: "my-4",
    padding: "",
    indent: "ml-6",
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
