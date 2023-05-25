# Project Kasa - OpenClassrooms
## Description
Create a housing platform.

## Objectives
1. Create the project using __create-react-app__.
2. Develop the site routing using __react-router-dom__.
3. Develop the __pages__ and __components__.
4. Display the accommodations from a __JSON file__.
5. Integrate the provided design. Style the site using __SASS__.

## Constraints
- For scrolling through the photos in the gallery (Gallery component):
  - If the user is on the first image and clicks on "previous image", the gallery displays the last image.
  - Conversely, when the displayed image is the last one in the gallery, if the user clicks on "next image", the gallery displays the first image.
  - If there is only one image, the "next" and "previous" buttons, as well as the numbering, do not appear.
- The gallery should always maintain the same height as indicated in the Figma design. Therefore, the images will be cropped and centered within the image frame.
- Collapse: By default, the Collapses are closed when the page is initialized.
- If the Collapse is open, clicking by the user should close it.
  - Conversely, if the Collapse is closed, clicking it should open it.

## View the Project
1. Clone the repository.
2. Open the folder in your code editor.
3. Run the command __npm install__.
4. Run the command __npm start__.
5. Open your browser and paste the following address: __http://localhost:3000/__