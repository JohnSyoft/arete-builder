import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import { Plus } from "lucide-react";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";

interface NavigationItemProps {
  id?: string;
  label?: string;
  href?: string;
  childItems?: NavigationItemProps[];
  isParent?: boolean;
}

export function NavigationItem({
  id = "",
  label = "Menu Item", 
  href = "#",
  childItems = [],
  isParent = false,
  ...props
}: NavigationItemProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id: nodeId,
    label: currentLabel,
    href: currentHref,
    childItems: currentChildItems,
    isParent: currentIsParent,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
    label: state.data.props.label,
    href: state.data.props.href,
    childItems: state.data.props.childItems,
    isParent: state.data.props.isParent,
  }));

  const { openPanel } = usePropertiesPanelStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleShowProperties = () => {
    openPanel(
      "navigation",
      {
        id: id || nodeId,
        label: currentLabel,
        href: currentHref,
        childItems: currentChildItems,
        isParent: currentIsParent,
      },
      nodeId,
      (newProps) => {
        console.log({newProps})
        Object.keys(newProps).forEach((key) => {
          setProp((props: NavigationItemProps) => {
            if (key === "childItems") {
              props.childItems = newProps[key];
              props.isParent = newProps[key] && newProps[key].length > 0;
            } else {
              (props as any)[key] = newProps[key];
            }
          });
        });
      }
    );
  };

  const handleAddChild = () => {
    const newChild: NavigationItemProps = {
      id: `${nodeId}-child-${Date.now()}`,
      label: "New Child",
      href: "#",
      childItems: [],
      isParent: false,
    };

    setProp((props: NavigationItemProps) => {
      props.childItems = [...(props.childItems || []), newChild];
      props.isParent = true;
    });
  };

  const hasChildren = currentChildItems && currentChildItems.length > 0;

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`p-2 relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Element
        id={`navigationItem-${id}`}
        is="div"
        className={`group relative ${hasChildren ? "nav-dropdown" : ""}`}
        canvas={false}
      >
        <div className="flex items-center">
          {isEditing ? (
            <input
              type="text"
              value={currentLabel}
              onChange={(e) => {
                setProp((props: NavigationItemProps) => {
                  props.label = e.target.value;
                });
              }}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsEditing(false);
                }
              }}
              className="px-2 py-1 text-sm border rounded"
              autoFocus
            />
          ) : (
            <a
              href={currentHref}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors flex items-center"
              onClick={(e) => e.preventDefault()} // Prevent navigation in editor
            >
              {currentLabel}
              {hasChildren && (
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </a>
          )}
        </div>

        {/* Dropdown Menu for Children */}
        {hasChildren && (
          <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              {currentChildItems.map((child) => (
                <a
                  key={child.id}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(e) => e.preventDefault()}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Element>

      {/* Floating Toolbar */}
      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50 flex gap-1">
          <FloatingToolbar
            elementType="navigation"
            onEdit={() => setIsEditing(true)}
            onSettings={handleShowProperties}
            onDelete={() => {}}
            onMove={() => {}}
            onLink={() => {}}
            position={{ x: 0, y: 0 }}
          />
          {/* Add Child Button */}
          <button
            onClick={handleAddChild}
            className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs flex items-center gap-1"
            title="Add Child Item"
          >
            <Plus className="w-3 h-3" />
            Child
          </button>
        </div>
      )}

      {/* Selection Indicator */}
      {selected && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 py-0.5 rounded z-40">
          Nav Item
        </div>
      )}
    </div>
  );
}

NavigationItem.craft = {
  displayName: "Navigation Item",
  props: {
    id: "",
    label: "Menu Item",
    href: "#",
    childItems: [],
    isParent: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
