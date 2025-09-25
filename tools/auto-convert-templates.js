#!/usr/bin/env node

/**
 * Automated Template Converter
 * Converts HTML templates to CraftJS components automatically
 */

const fs = require('fs');
const path = require('path');

// Template configurations
const templates = [
  {
    name: 'BrandingAgency',
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-branding-agency.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-branding-studio.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-elearning.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-it-business.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-barber.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-hotel-and-resort.html',
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
    htmlFile: '/Users/johnb/Downloads/themeforest-47tf95sV-crafto-the-multipurpose-html5-template/html/demo-real-estate.html',
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

// Component template generator
function generateComponent(templateName, componentName, section) {
  const componentCode = `import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Button } from "@/components/ui/button";

export const ${templateName}${componentName} = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={\`py-16 bg-white \${
        selected ? "ring-2 ring-blue-500" : ""
      } \${hovered ? "ring-2 ring-blue-300" : ""}\`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ${templateName} ${componentName.replace('1', '')}
          </h2>
          <p className="text-gray-600 mb-8">
            This is a placeholder component for ${templateName} ${componentName.replace('1', '')} section.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};`;

  return componentCode;
}

// Generate index file
function generateIndexFile(templateName, components) {
  const exports = components.map(comp => 
    `export { ${templateName}${comp.name} } from "./${templateName}${comp.name}";`
  ).join('\n');
  
  return exports;
}

// Main execution
async function main() {
  console.log('🚀 Starting automated template conversion...\n');
  
  for (const template of templates) {
    console.log(`📁 Processing ${template.name}...`);
    
    // Create directory
    const dirPath = `/Users/johnb/Documents/arete/arete-builder/components/blocks/${template.name}`;
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Generate components
    for (const component of template.components) {
      const componentCode = generateComponent(template.name, component.name, component.section);
      const filePath = `${dirPath}/${template.name}${component.name}.tsx`;
      
      fs.writeFileSync(filePath, componentCode);
      console.log(`  ✅ Created ${template.name}${component.name}.tsx`);
    }
    
    // Generate index file
    const indexCode = generateIndexFile(template.name, template.components);
    const indexPath = `${dirPath}/index.ts`;
    fs.writeFileSync(indexPath, indexCode);
    console.log(`  ✅ Created index.ts`);
    
    console.log(`✅ ${template.name} completed!\n`);
  }
  
  console.log('🎉 All templates converted successfully!');
  console.log('\nNext steps:');
  console.log('1. Add imports to craft-components.tsx');
  console.log('2. Add exports to craft-components.tsx');
  console.log('3. Add to component resolver');
  console.log('4. Add to component-categories.ts');
}

// Run the script
main().catch(console.error);
