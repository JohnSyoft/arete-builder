import { useNode } from "@craftjs/core";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { useCollections } from "@/hooks/useCollections";
import { Resizer } from "../Resizer";

interface CMSFieldProps {
  fieldId: string;
  fieldType: string;
  placeholder?: string;
  defaultValue?: any;
}

export const CMSField = ({
  fieldId,
  fieldType,
  placeholder,
  defaultValue,
}: CMSFieldProps) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const { currentCollectionId } = useCMSContextStore();
  const { data: collectionsResponse } = useCollections(
    currentCollectionId || ""
  );

  const collections = collectionsResponse?.collections || [];
  const currentCollection = collections.find(
    (c) => c._id === currentCollectionId
  );
  const field = currentCollection?.fields?.find((f) => f.id === fieldId);

  const renderField = () => {
    switch (fieldType) {
      case "title":
      case "plainText":
        return (
          <div className="w-full p-2 border border-gray-200 bg-white rounded">
            <div className="text-sm text-gray-500 mb-1">
              {field?.name || "CMS Field"}
            </div>
            <div className="text-gray-800">
              {placeholder || `{${field?.name || "field_value"}}`}
            </div>
          </div>
        );
      case "content":
      case "formattedText":
        return (
          <div className="w-full p-2 border border-gray-200 bg-white rounded">
            <div className="text-sm text-gray-500 mb-1">
              {field?.name || "CMS Content"}
            </div>
            <div className="text-gray-800 min-h-[60px]">
              {placeholder || `{${field?.name || "formatted_content"}}`}
            </div>
          </div>
        );
      case "image":
        return (
          <div className="w-full p-2 border border-gray-200 bg-white rounded">
            <div className="text-sm text-gray-500 mb-1">
              {field?.name || "CMS Image"}
            </div>
            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500">{`{${
                field?.name || "image_url"
              }}`}</span>
            </div>
          </div>
        );
      case "date":
        return (
          <div className="w-full p-2 border border-gray-200 bg-white rounded">
            <div className="text-sm text-gray-500 mb-1">
              {field?.name || "CMS Date"}
            </div>
            <div className="text-gray-800">
              {placeholder || `{${field?.name || "date_value"}}`}
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full p-2 border border-gray-200 bg-white rounded">
            <div className="text-sm text-gray-500 mb-1">
              {field?.name || "CMS Field"}
            </div>
            <div className="text-gray-800">
              {placeholder || `{${field?.name || "field_value"}}`}
            </div>
          </div>
        );
    }
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <div className="cms-field">{renderField()}</div>
    </Resizer>
  );
};

CMSField.craft = {
  displayName: "CMS Field",
  props: {
    fieldId: "",
    fieldType: "plainText",
    placeholder: "",
    defaultValue: "",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

// Navigation components
export const CMSPrevNext = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <div className="cms-nav flex justify-between p-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          ← Previous
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Next →
        </button>
      </div>
    </Resizer>
  );
};

CMSPrevNext.craft = {
  displayName: "Previous/Next Navigation",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

export const CMSPrevButton = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <button className="cms-prev px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
        ← Previous Item
      </button>
    </Resizer>
  );
};

CMSPrevButton.craft = {
  displayName: "Previous Button",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

export const CMSNextButton = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <button className="cms-next px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
        Next Item →
      </button>
    </Resizer>
  );
};

CMSNextButton.craft = {
  displayName: "Next Button",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
