# Better Bathroom Bureau(BBB)

## Project Pitch

Better Bathroom Bureau is an organization dedicated to helping residents and visitors of Seattle access bathroom facilities around the city. Our web app catalogues bathrooms that users of the site submit, along with user reviews and ratings for each facility. Our goal is to share insight into available bathrooms and collect first-hand accounts of user experiences, in order to help users have a better bathroom experience.

## User Stories

- Users will be able to login, in order to access their reviews (stretch: and save favorite bathrooms)
- Users will be able to see a list of all of the bathrooms, and also a map of all of the bathrooms (Google Places API)
- Click on a bathroom and see:
  - the location (probably address but maybe Google Places API thing?)
  - A picture, either of the bathroom or the location in general
  - some description or additional info (optional)
  - something that shows if it’s public (no need to show if it’s not)
  - where it is on a map
  - the cumulative rating (average of all of the reviews) (show Best Bathroom if it’s BB),
  - then all of the individual reviews (maybe like 10 at a time)
- Uers should be able to submit a bathroom with an attached review
- Users should be able to submit a review for an existing bathroom on the existing bathroom page:
- (username inherited from user_id when logged in)
- Date of bathroom visit
- Overall description (optional if other descriptions are filled out)
- Describe cleanliness (w/number)
- Describe function (w/number)
- Describe style (w/number)

## DB Schema
### User
- Username
- Password_digest
### Bathroom
- Location (probably an address)
- Description (maybe call it something better) (optional)
- A picture? (might be a stock picture for user submit)
- Public (boolean)
### Review
- User_id (1 if guest?)
- Bathroom_id
- Date
- Overall description
- Cleanliness (description)
- Function (description)
- Style (description)
- Cleanliness (rating)
- Function (rating)
- Style (rating)
### Favorites
(is a join table for Users and Bathrooms, no additional info needed)

## Wireframes
![IMG_5619](https://user-images.githubusercontent.com/109716310/205367081-beea4524-6af9-49d6-9a4b-262cd69b515a.jpg)
![IMG_5620](https://user-images.githubusercontent.com/109716310/205367031-2a636629-d89e-47f4-8146-5b6db2ddf83b.jpg)
