const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')

// Path to the folder containing SVG files
const svgFolderPath = path.join(__dirname, 'src/icons/svgs')

// Path to the output folder (dist)
const distFolderPath = path.join(__dirname, 'src/icons')

// Function to read an SVG file and extract the content inside the <svg> tag
function extractContentFromSvg(svgContent) {
  const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)
  const svgChildren = svgMatch ? svgMatch[1].trim() : ''

  return svgChildren
}

// Function to format the component name
function formatComponentName(fileName) {
  const baseName = path.basename(fileName, '.svg')
  const words = baseName.split('-')

  // Convert to PascalCase
  const pascalCaseName = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return pascalCaseName
}

// Function to read an SVG file and generate the corresponding TSX content
function convertSvgToTsx(svgContent, fileName) {
  const componentName = formatComponentName(fileName)
  const svgChildren = extractContentFromSvg(svgContent)

  // Extract the viewBox from the SVG content
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 512 512'

  // Remove comments from the SVG content
  const cleanSvgChildren = svgChildren.replace(/<!--[\s\S]*?-->/g, '')

  // Use a fragment to create corresponding React elements
  const tsxContent =
    `import React from 'react'\n\n` +
    `import { createIconComponent } from './createIconComponent'\n\n` +
    `export const ${componentName}Icon = createIconComponent({\n` +
    `  content: <>\n` +
    `    ${cleanSvgChildren.trim()}\n` +
    `  </>,\n` +
    `  viewBox: '${viewBox}',\n` +
    `})\n\n`

  return tsxContent
}

// Ensure that the output folder (dist) exists
fse.ensureDirSync(distFolderPath)

// List all files in the SVG folder
const svgFiles = fs.readdirSync(svgFolderPath)

// Loop through each SVG file
svgFiles.forEach(svgFile => {
  // Full path to the SVG file
  const svgFilePath = path.join(svgFolderPath, svgFile)

  // Read the content of the SVG file
  const svgContent = fs.readFileSync(svgFilePath, 'utf-8')

  // Generate the corresponding TSX content
  const tsxContent = convertSvgToTsx(svgContent, svgFile)

  // Full path to the output TSX file
  const tsxFilePath = path.join(
    distFolderPath,
    formatComponentName(svgFile) + '.tsx',
  )

  // Write the content to the output TSX file
  fs.writeFileSync(tsxFilePath, tsxContent, 'utf-8')

  console.log(`File ${tsxFilePath} created successfully.`)
})

console.log('Conversion completed.')
