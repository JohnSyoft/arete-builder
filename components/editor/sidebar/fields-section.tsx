import { BlockItem } from "./block-item";
import { NoResults } from "./no-results";

interface ComponentItem {
  component: any;
  name: string;
  description: string;
  image: string;
  fieldType?: string;
  props?: any;
}

interface FieldsSectionProps {
  items: ComponentItem[];
  searchQuery: string;
  onClearSearch: () => void;
}

export const FieldsSection = ({ items, searchQuery, onClearSearch }: FieldsSectionProps) => {
  const filteredItems = items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  if (searchQuery.trim() && filteredItems.length === 0) {
    return (
      <NoResults
        searchQuery={searchQuery}
        onClearSearch={onClearSearch}
        message={`No fields found for "${searchQuery}"`}
      />
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-sm text-muted-foreground px-2 mb-4">
        Drag these fields to display data from your collection
      </div>
      {filteredItems.map((item, index) => (
        <div key={index} className="space-y-1">
          {item.fieldType && (
            <div className="text-xs text-muted-foreground px-2 capitalize">
              {item.fieldType} Field
            </div>
          )}
          <BlockItem
            component={item.component}
            name={item.name}
            description={item.description}
            image={item.image}
            props={item.props}
          />
        </div>
      ))}
    </div>
  );
};
