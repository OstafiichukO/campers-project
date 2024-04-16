# Camper Rental Application

This application is designed for a company offering camper rental services in Ukraine. It consists of three main pages:

1. **Home Page:** Provides a general overview of the services offered by the company. Styling and layout are at your discretion.
2. **Catalog Page:** Displays a catalog of campers with different configurations that users can filter by location, equipment, and type.
3. **Favorites Page:** Shows advertisements added by the user to their favorites.
4. **Advert details:** Modal that shows advertisements details be ID

## Technical Specifications

Based on the provided layout, implement the following features:

- **Advertisement Card:** Implement a card layout for displaying camper rental advertisements.
- **Pagination:** Display 4 advertisements on the first page of the catalog, and load more on click of the "Load more" button.
- **Favorites:** Allow users to add advertisements to their favorites list by clicking on a heart-shaped button. The button's color should change accordingly.
- **Persistence:** Ensure that the user's actions (e.g., adding/removing advertisements from favorites) persist even after page refresh.
- **Modal Window:** Display a modal window with detailed information about a camper advertisement when the "Show more" button is clicked. The modal should close when the close button ("x"), backdrop, or the "Esc" key is pressed.
- **Form:** Include a form in the modal window for booking a camper. The form should have fields for name, email, booking date, and comment. Name, email, and booking date fields are mandatory and should be validated before submission.
- **Price Format:** Display the rental price as a single value (e.g., 8000) and format it with commas (e.g., 8,000) in the UI.

## Backend

Set up a personal backend using the UI service [MockAPI](https://mockapi.io/). Create a resource named `adverts` with the following fields:

- `_id`
- `name`
- `price`
- `rating`
- `location`
- `adults`
- `children`
- `engine`
- `transmission`
- `form`
- `length`
- `width`
- `height`
- `tank`
- `consumption`
- `description`
- `details`

Ensure that the backend contains at least 13 advertisements with different values. [My MockAPI](https://65f75aa5b4f842e80885875b.mockapi.io/api/vehicles)

## Routing with React Router

Implement routing using React Router with the following routes:

- `/`: Home page with a general description of the company's services.
- `/catalog`: Catalog page displaying campers of various configurations.
- `/favorites`: Favorites page showing advertisements added by the user.

Redirect users to the home page if they navigate to a non-existent route.

## Additional Task: Filtering

Add filtering functionality with the following options:

- **Text Input:** Filter advertisements based on the location entered by the user.
- **Checkboxes:** Filter advertisements based on selected equipment.
- **Radio Buttons:** Filter advertisements based on selected camper types.

## Conclusion

This application aims to provide users with a seamless experience in browsing and booking campers for rent. Implementing the specified features and ensuring a user-friendly interface will enhance the overall user satisfaction and engagement. [FIGMA](https://www.figma.com/file/fnMWH0eBB7NnoqdAiiKWsQ/Test?type=design&node-id=25-12952&mode=design&t=k6q9YC4Rqs0Ln3aY-0)