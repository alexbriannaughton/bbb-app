puts "seeding bathrooms..."

# User seed
guest = User.create(username: "guest", password: "hello")
mason = User.create(username: "mason", password: "bbathroomb")

# Bathroom seeds
# template
# ___ = Bathroom.create(
#     location: "",
#     description: "",
#     public: (boolean),
#     image_url: ""
# )


deluxe = Bathroom.create(location: "625 Broadway E, Seattle, WA 98102", description: "bathrooms at an old bar and grill in Capitol Hill", public: false, image_url: "https://www.google.com/maps/place/Deluxe+Bar+%26+Grill/@47.6249558,-122.3212863,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOi11Ls_k1vC7tb_wpeiZCUdO0oU3N3KFVPhSKv!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOi11Ls_k1vC7tb_wpeiZCUdO0oU3N3KFVPhSKv%3Dw203-h152-k-no!7i4032!8i3024!4m5!3m4!1s0x5490152ef0bfaeb5:0x9062ad33ca77a98f!8m2!3d47.6250332!4d-122.3212677#")
baitshop = Bathroom.create(location: "606 Broadway E, Seattle, WA 98102", description: "bathrooms at a lively hangout in nautical surroundings in Capitol Hill", public: false, image_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets3.thrillist.com%2Fv1%2Fimage%2F657851%2F1200x600%2Fscale%3B&imgrefurl=https%3A%2F%2Fwww.thrillist.com%2Fdrink%2Fseattle%2Fwa%2F98102%2Fcapitol-hill-%2Fbait-shop_bar-food_great-cocktails_feature%2Foccasion&tbnid=gYfCnjbncGEEnM&vet=12ahUKEwiR1M6M9dv7AhUVADQIHdb_CvwQMygBegUIARC4AQ..i&docid=xGdqYDJEloULxM&w=900&h=600&q=bait%20shop%20seattle&ved=2ahUKEwiR1M6M9dv7AhUVADQIHdb_CvwQMygBegUIARC4AQ")

# Review seeds
# template
# Review.create(
#     user_id: ,
#     bathroom_id: ,
#     date: YYYYMMDD,
#     description: "",
#     cleanliness: "",
#     cleanliness_rating: ,
#     function: "",
#     function_rating: ,
#     style: "",
#     style_rating:
# )
Review.create(user_id: 2, bathroom_id: 1, date: 20160815, description: "", cleanliness: "Chalk walls and metal by the toilet have the potential to be pretty visually unappealing, but these were clean and actually kinda worked well together. The rest of the bathroom was nice, with a urinal and a toilet for those of us who can’t lift the seat, and a hands-free paper towel dispenser.", cleanliness_rating: 8, function: "Everything worked, though the TP was a little low. I couldn’t find the chalk, but then I thought about the hands of people who previously used the chalk.", function_rating: 7, style: "Doesn’t really match the vibe of the bar, but the chalk wall and bright lighting bring out an element of warmth and openness.", style_rating: 7)

# Review.create(
#     user_id: 2,
#     bathroom_id: 2,
#     date: YYYYMMDD,
#     description: "",
#     cleanliness: "",
#     cleanliness_rating: ,
#     function: "",
#     function_rating: ,
#     style: "",
#     style_rating:
# )

puts "bathrooms are seeded!"