#!/bin/bash

# Build the client-side code
echo "Building the React application..."
npm run build

# Create a directory for the static site
echo "Preparing static files..."
mkdir -p static-site
cp -r dist/public/* static-site/

# Make the site work as a standalone static site
echo "Adjusting for standalone usage..."
cat > static-site/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZebraWell - Wellness for the Rare and Resilient</title>
    <link rel="stylesheet" href="./assets/index.css">
    <script type="module" src="./assets/index.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
</html>
EOF

# Create a zip file of the static build
echo "Creating zip file of the build..."
cd static-site
zip -r ../zebrawell-static.zip .

echo "Done! Your static website is ready in zebrawell-static.zip"
echo "You can download this file and upload it to your WordPress hosting provider."
echo ""
echo "For WordPress:"
echo "1. Create a new page in WordPress"
echo "2. Use a 'Custom HTML' or 'Code' block"
echo "3. Paste the contents of the HTML file"
echo "4. Upload all CSS and JS files to your WordPress Media Library"
echo "5. Update the paths in the HTML to point to your uploaded files"