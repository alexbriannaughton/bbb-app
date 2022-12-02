# Better Bathroom Bureau(BBB)

## Project Pitch

x

## User Stories

- Users should be able to login, in order to access their reviews (stretch: and save favorite bathrooms)
- Users should be able to see a list of all of the bathrooms, and also a map of all of the bathrooms (Google Places API)
- Click on a bathroom and see
1. the location (probably address but maybe Google Places API thing?)
2. A picture, either of the bathroom or the location in general
3. some description or additional info (optional)
4. something that shows if it’s public (no need to show if it’s not)
5. where it is on a map
6. the cumulative rating (average of all of the reviews) (show Best Bathroom if it’s BB),
7. then all of the individual reviews (maybe like 10 at a time)
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
- Password
- Favorites (stretch)
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