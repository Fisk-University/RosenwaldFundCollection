# RosenwaldFundCollection Theme

## Overview
RosenwaldFundCollection is an Omeka S theme designed for digital collections, providing a clean and modern layout tailored for historical archives and cultural heritage projects. This theme includes customizable navigation, responsive design, and enhanced search functionality to improve user experience.

## Installation
For basic out-of-the-box use of the theme, follow the [Omeka S User Manual instructions for installing theme](https://omeka.org/s/docs/user-manual/sites/site_theme/#installing-themes).

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with NodeJS (0.12 or greater). Navigate to your theme directory and run npm install.

## Features
### Stylesheets
The theme provides a structured and responsive design. Custom styles can be applied via:
- **CSS Overrides**: Use the CSS Editor module for quick style changes.
- **Sass Customization**: Modify `sass/` files and compile using NodeJS.

### Navigation
- Supports both **horizontal top bar navigation** and **left vertical column navigation**.
- Child pages can be toggled within the main navigation.
- Configurable navigation depth.

### Custom Branding
- **Logo**: Upload a custom logo to replace the default site title.
- **Banner**: Set a custom banner image with configurable height, width, and positioning.
- **Accent Colors**: Adjust color settings to match your branding.

### Page Layouts
- **Browse Views**: Choose between grid and list layouts for browsing collections.
- **Metadata Display**: Show resource metadata as either stacked or inline with headings.
- **Media Display**: Options to display media within metadata, next to metadata, or in a full-width gallery view.

### Enhanced Search
- **Search Bar Design**: Features an expandable search bar with smooth animations.
- **Mobile Optimization**: Adjusts search layout for better usability on smaller screens.

## Customization
For advanced users, the theme includes Sass support for easy styling:

### Compiling Styles
Run these commands in the theme's root directory:
- `npm install`: Installs dependencies.
- `npm start`: Watches Sass files and compiles CSS automatically.
- `gulp css`: One-time compilation of Sass files.

### Sass File Structure
- `_globals-default.scss`: Contains default variables from ZURB Foundation.
- `_globals-rosenwald.scss`: Overrides default styles for the theme.
- `_settings.scss`: Core styling settings.
- `_foundation-core.scss`: Base styles from Foundation.
- `_omeka.scss`: Omeka S-specific styling.

## Page and Block Templates
Supports Omeka S block templates for flexible page layouts:
- **Grid and List Views** for browsing pages.
- **Metadata Layouts**: Options for arranging item descriptions and images.
- **Custom Footers**: Add custom HTML content to the footer.

## Copyright
The Corporation for Digital Scholarship distributes the Omeka source code under the GNU General Public License, version 3 (GPLv3). The full text of this license is given in the license file.

The Omeka name is a registered trademark of the Corporation for Digital Scholarship.

Third-party copyright in this distribution is noted where applicable.

All rights not expressly granted are reserved.


