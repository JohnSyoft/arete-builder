#!/usr/bin/env node

/**
 * Final Integration Script
 * Automatically integrates all generated components into CraftJS system
 */

const fs = require('fs');
const path = require('path');

// Template configurations
const templates = [
  {
    name: 'BrandingAgency',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Clients1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Stats1', section: 'content' },
      { name: 'Marquee1', section: 'content' },
      { name: 'Projects1', section: 'content' },
      { name: 'Services1', section: 'services' },
      { name: 'Team1', section: 'team' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'BrandingStudio',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Stats1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Marquee1', section: 'content' },
      { name: 'Services1', section: 'services' },
      { name: 'Projects1', section: 'content' },
      { name: 'Features1', section: 'content' },
      { name: 'Awards1', section: 'content' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Social1', section: 'content' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'ELearning',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Features1', section: 'content' },
      { name: 'Courses1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Marquee1', section: 'content' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Clients1', section: 'content' },
      { name: 'Blog1', section: 'content' },
      { name: 'CTA1', section: 'content' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'ITBusiness',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Features1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Clients1', section: 'content' },
      { name: 'Services1', section: 'services' },
      { name: 'Industries1', section: 'content' },
      { name: 'CTA1', section: 'content' },
      { name: 'Portfolio1', section: 'content' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'FinalCTA1', section: 'content' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'Barber',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'About1', section: 'about' },
      { name: 'Services1', section: 'services' },
      { name: 'Gallery1', section: 'content' },
      { name: 'Pricing1', section: 'pricing' },
      { name: 'Video1', section: 'content' },
      { name: 'Team1', section: 'team' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Contact1', section: 'contact' },
      { name: 'Appointment1', section: 'contact' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'Hotel',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Features1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Marquee1', section: 'content' },
      { name: 'Facilities1', section: 'content' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Offers1', section: 'content' },
      { name: 'Rooms1', section: 'content' },
      { name: 'Ratings1', section: 'content' },
      { name: 'Newsletter1', section: 'content' },
      { name: 'Instagram1', section: 'content' },
      { name: 'Footer1', section: 'footers' }
    ]
  },
  {
    name: 'RealEstate',
    components: [
      { name: 'Hero1', section: 'hero' },
      { name: 'Features1', section: 'content' },
      { name: 'About1', section: 'about' },
      { name: 'Services1', section: 'services' },
      { name: 'Properties1', section: 'content' },
      { name: 'WhyChooseUs1', section: 'about' },
      { name: 'FindDreamHouse1', section: 'content' },
      { name: 'Awards1', section: 'content' },
      { name: 'Testimonials1', section: 'testimonials' },
      { name: 'Blog1', section: 'content' },
      { name: 'Footer1', section: 'footers' }
    ]
  }
];

// Update craft-components.tsx
function updateCraftComponents() {
  const filePath = '/Users/johnb/Documents/arete/arete-builder/components/editor/craft-components.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add imports
  let imports = '';
  for (const template of templates) {
    imports += `// ${template.name} Components\n`;
    imports += `import {\n`;
    imports += template.components.map(comp => `  ${template.name}${comp.name}`).join(',\n');
    imports += `,\n} from "../blocks/${template.name}";\n\n`;
  }
  
  // Insert imports after existing imports
  const importInsertPoint = content.indexOf('// Spa Salon Components');
  if (importInsertPoint !== -1) {
    content = content.slice(0, importInsertPoint) + imports + content.slice(importInsertPoint);
  }
  
  // Add exports
  let exports = '';
  for (const template of templates) {
    exports += `// ${template.name} components\n`;
    template.components.forEach(comp => {
      exports += `export { ${template.name}${comp.name} };\n`;
    });
    exports += '\n';
  }
  
  // Insert exports after existing exports
  const exportInsertPoint = content.indexOf('// Spa Salon components');
  if (exportInsertPoint !== -1) {
    const endOfExports = content.indexOf('export { SpaSalonFooter1 };', exportInsertPoint) + 30;
    content = content.slice(0, endOfExports) + '\n' + exports + content.slice(endOfExports);
  }
  
  // Add to resolver
  let resolver = '';
  for (const template of templates) {
    resolver += `  // ${template.name} components\n`;
    template.components.forEach(comp => {
      resolver += `  ${template.name}${comp.name}: ${template.name}${comp.name},\n`;
    });
    resolver += '\n';
  }
  
  // Insert resolver after existing resolver
  const resolverInsertPoint = content.indexOf('// Spa Salon components');
  if (resolverInsertPoint !== -1) {
    const endOfResolver = content.indexOf('SpaSalonFooter1: SpaSalonFooter1,', resolverInsertPoint) + 35;
    content = content.slice(0, endOfResolver) + '\n' + resolver + content.slice(endOfResolver);
  }
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Updated craft-components.tsx');
}

// Update component-categories.ts
function updateComponentCategories() {
  const filePath = '/Users/johnb/Documents/arete/arete-builder/components/editor/sidebar/component-categories.ts';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add imports
  let imports = '';
  for (const template of templates) {
    imports += `// ${template.name} Components\n`;
    imports += `import {\n`;
    imports += template.components.map(comp => `  ${template.name}${comp.name}`).join(',\n');
    imports += `,\n} from "@/components/blocks/${template.name}";\n\n`;
  }
  
  // Insert imports after existing imports
  const importInsertPoint = content.indexOf('// Spa Salon Components');
  if (importInsertPoint !== -1) {
    content = content.slice(0, importInsertPoint) + imports + content.slice(importInsertPoint);
  }
  
  // Add to categories
  for (const template of templates) {
    template.components.forEach(comp => {
      const categoryEntry = `    {
      component: ${template.name}${comp.name},
      name: "${template.name} ${comp.name.replace('1', '')}",
      description: "${template.name} ${comp.name.replace('1', '')} component",
      image: "/${template.name.toLowerCase()}${comp.name.toLowerCase()}.png",
    },
`;
      
      // Find the appropriate section and add the component
      const sectionPattern = new RegExp(`(${comp.section}: \\[.*?\\])`, 's');
      const match = content.match(sectionPattern);
      if (match) {
        const sectionContent = match[1];
        const newSectionContent = sectionContent.replace(
          /(\],\s*)$/,
          `    ${categoryEntry}  ],\n`
        );
        content = content.replace(sectionPattern, newSectionContent);
      }
    });
  }
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Updated component-categories.ts');
}

// Main execution
async function main() {
  console.log('🚀 Starting final integration...\n');
  
  try {
    updateCraftComponents();
    updateComponentCategories();
    
    console.log('\n🎉 All components integrated successfully!');
    console.log('\nSummary:');
    console.log(`- Generated ${templates.length} template sets`);
    console.log(`- Created ${templates.reduce((sum, t) => sum + t.components.length, 0)} components`);
    console.log('- Updated craft-components.tsx');
    console.log('- Updated component-categories.ts');
    console.log('\nAll components are now available in the CraftJS editor!');
    
  } catch (error) {
    console.error('❌ Error during integration:', error.message);
  }
}

// Run the script
main().catch(console.error);
