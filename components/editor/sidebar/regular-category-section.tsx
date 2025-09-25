import { BlockItem } from "./block-item";
import { NoResults } from "./no-results";

interface ComponentItem {
  component: any;
  name: string;
  description: string;
  image: string;
  props?: any;
}

interface RegularCategorySectionProps {
  items: ComponentItem[];
  searchQuery: string;
  onClearSearch: () => void;
}

export const RegularCategorySection = ({ items, searchQuery, onClearSearch }: RegularCategorySectionProps) => {
  const filterComponents = (components: ComponentItem[]) => {
    if (!searchQuery.trim()) return components;
    
    const query = searchQuery.toLowerCase();
    return components.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  };

  const filteredItems = filterComponents(items);

  if (searchQuery.trim() && filteredItems.length === 0) {
    return (
      <NoResults
        searchQuery={searchQuery}
        onClearSearch={onClearSearch}
        message={`No items found for "${searchQuery}"`}
      />
    );
  }

  return (
    <>
      {filteredItems.map((item, index) => (
        <BlockItem
          key={index}
          component={item.component}
          name={item.name}
          description={item.description}
          image={item.image}
          props={item.props}
        />
      ))}
    </>
  );
};
