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


deluxe = Bathroom.create(lat: 47.62521, lng: -122.32126, location: "625 Broadway E, Seattle, WA 98102", description: "bathrooms at an old bar and grill in Capitol Hill", public: false, image_url: "https://www.google.com/maps/place/Deluxe+Bar+%26+Grill/@47.6249558,-122.3212863,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOi11Ls_k1vC7tb_wpeiZCUdO0oU3N3KFVPhSKv!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOi11Ls_k1vC7tb_wpeiZCUdO0oU3N3KFVPhSKv%3Dw203-h152-k-no!7i4032!8i3024!4m5!3m4!1s0x5490152ef0bfaeb5:0x9062ad33ca77a98f!8m2!3d47.6250332!4d-122.3212677#")
baitshop = Bathroom.create(lat: 47.62476, lng: -122.32078, location: "606 Broadway E, Seattle, WA 98102", description: "bathrooms at a lively hangout in nautical surroundings in Capitol Hill", public: false, image_url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets3.thrillist.com%2Fv1%2Fimage%2F657851%2F1200x600%2Fscale%3B&imgrefurl=https%3A%2F%2Fwww.thrillist.com%2Fdrink%2Fseattle%2Fwa%2F98102%2Fcapitol-hill-%2Fbait-shop_bar-food_great-cocktails_feature%2Foccasion&tbnid=gYfCnjbncGEEnM&vet=12ahUKEwiR1M6M9dv7AhUVADQIHdb_CvwQMygBegUIARC4AQ..i&docid=xGdqYDJEloULxM&w=900&h=600&q=bait%20shop%20seattle&ved=2ahUKEwiR1M6M9dv7AhUVADQIHdb_CvwQMygBegUIARC4AQ")
kangaroo = Bathroom.create(lat: 47.66909, lng: -122.38340, location: "2026 NW Market St, Seattle, WA 98107", description: "Bare-bones tavern for Australian sports, beverages & foods.", public: false, image_url: "http://3.bp.blogspot.com/-4wHjpBpsDAg/UqPfAflMTaI/AAAAAAAALm4/Su4oPm2aMk0/s1600/kangarooandkiwi-20131207-001.jpg")
albatross = Bathroom.create(lat: 47.66867, lng: -122.38719, location: "2319 NW Market St, Seattle, WA 98107", description: "Trendy cocktail lounge with a bar program featuring tiki-inspired drinks & an eclectic menu.", public: false, image_url: "https://images.squarespace-cdn.com/content/v1/55563d96e4b0c104f822379d/1627509905813-NZG3GUHQQZNNWO6W124S/9b4ebbf5b0fd0dca3c9edc429cd0a6ab_-united-states-washington-king-county-seattle-hotel-albatross-206-566-6181htm.jpg?format=1000w")
bitterroot = Bathroom.create(lat: 47.66636, lng: -122.38333, location: "5239 Ballard Ave NW, Seattle, WA 98107", description: "Rustic BBQ joint with back bar offering house-smoked meats paired with sides such as cheesy grits.", public: false, image_url: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1066,w_1600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/Bitterroot2_yuu7wa.jpg")
brouwers = Bathroom.create(lat: 47.65178, lng: -122.35421, location: "400 N 35th St, Seattle, WA 98103", description: "Hip pub offering Belgian-style grub, hundreds of beers & over 50 scotches in a former warehouse.", public: false, image_url: "https://i.pinimg.com/736x/81/b4/18/81b418d7ac38dadd60c39ea26bad7395--food-porn-vancouver.jpg")
chipotleslu = Bathroom.create(lat: 47.62051, lng: -122.33810, location: "212 Westlake Ave N, Seattle, WA 98109", description: "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.", public: false, image_url: "https://komonews.com/resources/media/c8c2854f-b03d-4aa8-941f-bf4546098bd9-151109_chipotle_lg.jpg?1449792359100")
beths = Bathroom.create(lat: 47.68230, lng: -122.34471, location: "7311 Aurora Ave N, Seattle, WA 98103", description: "Iconic, no-frills spot serving American fare including breakfast items, sandwiches & hot dogs.", public: false, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Beth%27s_Cafe_%28Seattle%2C_Washington%29.jpg/1500px-Beth%27s_Cafe_%28Seattle%2C_Washington%29.jpg?20120928004900")
athina = Bathroom.create(lat: 47.62425, lng: -122.35557, location: "528 Queen Anne Ave N, Seattle, WA 98109", description: "Easygoing taverna serving traditional Greek cuisine including gyros, lamb burgers & fries.", public: false, image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/JdhLarcczr1PzfzobczD4A/348s.jpg")
paseo = Bathroom.create(lat: 47.65864, lng: -122.35030, location: "4225 Fremont Ave N, Seattle, WA 98103", description: "Counter-serve Caribbean joint offering sandwiches & entrees in a simple setting.", public: false, image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Outside_Paseo_Fremont_%289540579794%29.jpg/500px-Outside_Paseo_Fremont_%289540579794%29.jpg")
lostlake = Bathroom.create(lat: 47.61452, lng: -122.31966, location: "1505 10th Ave, Seattle, WA 98122", description: "brunch and late night drinks - open for a long time!", public: false, image_url: "https://lh3.googleusercontent.com/p/AF1QipNuEp5Xuoz3qe9cyFFP9sqICujxeLFqndTnc_Vi=s1360-w1360-h1020")
nachoborracho = Bathroom.create(lat: 47.62037, lng: -122.32120, location: "209 Broadway E, Seattle, WA 98102", description: "Festive cantina attracting late-night crowds with its frozen cocktails, tacos & DJ nights.", public: false, image_url: "https://lh3.googleusercontent.com/p/AF1QipM35U2P8SvIFzZZ-SS8HJHBoRme-bcUthQ10qpD=s1360-w1360-h1020")
pikeplace = Bathroom.create(lat: 47.6092, lng: -122.34086, location: "1514 Pike Pl, Seattle, WA 98101", description: "A public restroom inside Pike Place Market", public: true, image_url: "https://lh3.googleusercontent.com/p/AF1QipPouoWLmAwwdeMsRDdhjaBJnfqqUBysU_xVPcSO=s1360-w1360-h1020")
cafemox = Bathroom.create(lat: 47.67697, lng: -122.38294, location: "5105 Leary Ave NW, Seattle, WA 98107", description: "Games store with a bar-cafe offering classic & new board & card products, plus rentals.", public: false, image_url: "https://lh3.googleusercontent.com/p/AF1QipPA2xMoiPW2sRXG1p-hpo6V9AEsuQ3hT535Tywm=s1360-w1360-h1020")
splcentral = Bathroom.create(lat: 47.60734, lng: -122.33242, location: "1000 4th Ave, Seattle, WA 98104", description: "facilities accessible inside the central Seattle Public Library", public: true, image_url: "https://www.spl.org/Seattle-Public-Library/images/using-the-lib/booking-requests/cen-meeting-rooms/1-18_NorcliffeFoundationLivingRoom_4.jpg")
splgreenwood = Bathroom.create(lat: 47.68762, lng: -122.35508, location: "8016 Greenwood Ave N, Seattle, WA 98103", description: "facilities accessible inside the Greenwood Seattle Public Library", public: true, image_url: "https://www.spl.org/Seattle-Public-Library/images/locations/gwd/GWD%20Highlights/1-18_exterior-view-entry_gwd.jpg")
spldt = Bathroom.create(lat: 47.60201, lng: -122.30167, location: "2300 E Yesler Way, Seattle, WA 98122", description: "facilities accessible inside the Douglass Truth Seattle Public Library", public: true, image_url: "https://seattlemedium.com/wp-content/uploads/2021/11/Graphic_SoulPole_830x580.jpg")
splbeacon = Bathroom.create(lat: 47.57819, lng: -122.31140, location: "2821 Beacon Ave S, Seattle, WA 98144", description: "facilities accessible inside the Beacon Hill Seattle Public Library", public: true, image_url: "https://www.spl.org/Seattle-Public-Library/images/locations/bea/BEA%20slideshow/1-18_exterior-view_bea.jpg")
woodland = Bathroom.create(lat: 47.67610, lng: -122.36396, location: "608 NW 65th St, Seattle, WA 98117", description: "an old theatre turned into a DIY music & arts practice space and venue", public: false, image_url: "http://photos.cinematreasures.org/production/photos/102770/1402943037/large.JPG?1402943037")
spllakecity = Bathroom.create(lat: 47.71989, lng: -122.29809, location: "12501 28th Ave NE, Seattle, WA 98125", description: "facilities accessible inside the Lake City Seattle Public Library", public: true, image_url: "https://www.spl.org/Seattle-Public-Library/images/locations/lcy/LCY%20Highlights/1-18_iron-gates-entry_lcy.jpg")


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
Review.create(user_id: 2, bathroom_id: 1, date: 20160815, description: "bathrooms in a classic bar & grill in Capitol Hill", cleanliness: "Chalk walls and metal by the toilet have the potential to be pretty visually unappealing, but these were clean and actually kinda worked well together. The rest of the bathroom was nice, with a urinal and a toilet for those of us who can’t lift the seat, and a hands-free paper towel dispenser.", cleanliness_rating: 4, function: "Everything worked, though the TP was a little low. I couldn’t find the chalk, but then I thought about the hands of people who previously used the chalk.", function_rating: 3, style: "Doesn’t really match the vibe of the bar, but the chalk wall and bright lighting bring out an element of warmth and openness.", style_rating: 4)
Review.create(user_id: 2, bathroom_id: 2, date: 20160815, description: "The third stop of another night of drinks after work. I was tired, and full, and drunk, and content.", cleanliness: "Everything was clean and well-maintained, except maybe the life ring.", cleanliness_rating: 4, function: "When you feel how I felt, at the end of the night, it’s nice to have a place like this for yourself. And I didn’t have to worry about anyone else in the room, which is always a plus. Everything worked.", function_rating: 4, style: "The decor was nothing special, though it was nice that it seemed like it matched the vibe of the rest of the bar. I didn’t look very hard.", style_rating: 3)
Review.create(user_id: 2, bathroom_id: 3, date: 20160815, description: "The bathroom is a pretty weird shape, and I’m not really sure how it ended up this way. The building used to be a library, and I wonder maybe if they were limited to the library’s previous layout?", cleanliness: "You open the door and walk right into a person peeing or washing their hands. Nothing looked too unusual, for a bar bathroom.", cleanliness_rating: 3, function: "Everything worked, but I have to talk about design some more in this section. There’s a big space at the end of the urinal part, but to get from the far urinal to the sink you have to get really close to the close urinal, too close for comfort.", function_rating: 2, style: "Not much going on for style in this space, besides a big beer label, a picture frame with nothing in it, and graffiti on a urinal.", style_rating: 2)
Review.create(user_id: 2, bathroom_id: 4, date: 20160814, description: "Drinks with Molly and some friends after Round 1 at Kangaroo and Kiwi. We got the Volcano Bowl and it was about what I expected.", cleanliness: "The lighting may hide a little bit, but overall the bathroom looked pretty clean and organized. No gross wet spots anywhere or even general disarray. Plenty of extra TP if you went a little overboard with the totchos.", cleanliness_rating: 4, function: "Everything worked, nothing special. ", function_rating: 3, style: "I’ve been on hiatus but I didn’t forget that bathrooms, though designed for one function, don’t all have to feel the same. Do you need to perfectly see how you truly look or what color everything is at a bar? Sometimes it’s better if you don’t. Hotel Albatross sticks with a simple idea and executes it well. You can see enough, but not too much. And the red isn’t annoying, it’s kinda like you’re looking through thermal-imaging goggles.", style_rating: 4)
Review.create(user_id: 2, bathroom_id: 5, date: 20150317, description: "I had a pretty serious BBQ craving last week, and I went to Bitterroot based on a recommendation from a friend. If you go during happy hour, you can get a dank pulled pork sandwich for five bucks, and feel less guilty about getting a little day drunk.", cleanliness: "Very simple bathroom, not much to clean, and it was all clean. Nothing to hide, and nothing was hidden.", cleanliness_rating: 4, function: "No frills about the function either. Classic sink with classic soap and the old stand-by paper towels. One large flush button to press, hard to miss.", function_rating: 4, style: "A lot going on here stylistically. The first thing that struck me was the window that was mostly covered up, but not all the way, for the little part of all of us that gets a kick out of shitting in the woods; Enough open window to inspire that feeling, but not enough to let other people outside actually watch you in the middle of your post-BBQ troubles. I believe the very light blue matches the restaurant’s interior, but what about the linoleum that creeps up the walls? Is it because it’s easy to clean? It’s like you’re in a world where the floor isn’t separated from the wall, it’s just a continuous thing. The plants were cool though, and so was the hand lettering on the door.", style_rating: 4)
Review.create(user_id: 2, bathroom_id: 6, date: 20150305, description: "Went to Brouwer’s for my birthday, though it wasn’t the first time I had visited. I like Brouwer’s for the scotch. The food is pretty good too.", cleanliness: "It seemed pretty clean, nothing looked especially off-putting or unsightly. I feel a little worse about dark bathrooms compared to lighter bathrooms, but I don’t think anything gross was lurking in the darkness. The urinal is a little too close to the sink though.", cleanliness_rating: 3, function: "No complaints about function. The water came out of the faucet a little close to the front of the sink, but it got really hot, so I guess that balances out.", function_rating: 3, style: "Again, dark bathrooms feel like they’re hiding something (to me anyways), but the darkness definitely matched the vibe of the bar. The rock behind the sink was pretty cool too.", style_rating: 4)
Review.create(user_id: 2, bathroom_id: 7, date: 20150303, description: "The restroom is the only certainty for Chipotle customers. One visit it’s a chicken burrito and the next it’s sofritas tacos, but you always load up on the hot sauce, and on that front, your tastebuds do not agree with your stomach. Some day you’ll learn to just hold off a little bit on the hot sauce. Today is not that day. Fortunately for the over-eaters and over-heaters among us, this Chipotle’s restroom is a sort of oasis. There is a very peaceful and sterile vibe about the place, hidden away in a hallway behind the restaurant. Even though it seems this restroom is shared with another business, you shouldn’t worry about hiding anything, because there doesn’t seem to be much traffic in the bathroom or the restaurant.", cleanliness: "Both the toilet and the urinal were clean, as well as the mirror and sink. Aside from the paper towels all over the floor, you couldn’t ask for much more.", cleanliness_rating: 4, function: "All of the facilities functioned exactly as they should. The supply of the soap and the paper towels appeared to be limitless. I should acknowledge the stall door, which worked very well, and I appreciated the placement of the urinal.", function_rating: 5, style: "Very simple and minimal style, and I would guess that the place very easy to clean. Not very impressive on this front, though it is nice that they provided an instructional diagram outlining proper hand washing technique. ", style_rating: 3)
Review.create(user_id: 2, bathroom_id: 8, date: 20150307, description: "The bathroom’s aesthetic united elements of the café’s long history and the culture of its customers and staff. The café itself hides the message that you wouldn’t want to work at Beth’s in various signs and memes around the dining area, visible to even the only slightly curious. When entering the bathroom, it becomes apparent that you wouldn’t want to do your most serious business here either.", cleanliness: "The bathroom was lined with pale and sticky-looking linoleum, showing the style of Beth’s of the past. Scrawled on the linoleum, as well as the mirror and the sink, were messages from its many customers, feeling rebellious or merely passing time. With scraps of paper on the floor, lukewarm sink water, and a weird step up to the toilet, this bathroom doesn’t seem like the cleanest or most comfortable place to make yourself more comfortable.", cleanliness_rating: 2, function: "Despite the mess and older style, they did have all of the necessary supplies, though the hot water didn’t get very hot.", function_rating: 4, style: "The graffiti etchings and doodles don’t really improve upon the linoleum on the walls. You might look around and wish the bathroom walls were lined in drawings like the rest of the café, but you’ll probably rethink that when you consider the sanitary implications. ", style_rating: 2)
Review.create(user_id: 2, bathroom_id: 9, date: 20150227, description: "I don’t remember how I ended up here. I think I was driving around one day looking for food when I realized I had so many options and I was overwhelmed, so I just stopped at the closest place and went there. It turned out to be a great choice; I had a tasty gyro and fries for pretty cheap.", cleanliness: "This bathroom was cleaner than expected, with no visible stains, debris, or general uncleanliness.", cleanliness_rating: 4, function: "Sink and toilet worked just as expected, with hot water, good smelling soap, and paper towels.", function_rating: 4, style: "I liked the simple color palette, and I thought it was kinda cool how the white trim complemented the black and white print on the wall.", style_rating: 4)
Review.create(user_id: 2, bathroom_id: 10, date: 20150314, description: "Paseo is back and most people are very excited that it didn’t stay closed for long. I wasn’t lucky enough to go before it closed, and some (food) reviewers have said that it isn’t quite the same as it was before, but I still had a pretty amazing, albeit messy, Caribbean roast, and it kept me full for a very long time.", cleanliness: " Just like the rest of the place, this bathroom is small, if you have to sit down, it can get a little cramped. Once you throw in a wet floor and an off-putting toilet, things start to get downright uncomfortable. ", cleanliness_rating: 1, function: "Everything worked, but not quite as it should. The toilet was a little tricky to flush, the hot water left me expecting more, and the water fell from the faucet in way that you had to touch the sink a lot to get your hands wet. I know it sounds strange, but that’s one of my biggest pet peeves.", function_rating: 2, style: "The floor matched the rest of the restaurant, but didn’t go too well with the very green door, which didn’t go well with the design of the sink, which was oddly close to the toilet. Plenty of clashing going on.", style_rating: 2)
Review.create(user_id: 2, bathroom_id: 11, date: 20150217, description: "Lost Lake is a little bit of a dive. They have good, heavy food but when you really look at it, it’s kinda dingy and the food is a little expensive for what it is. My friends try to sell the Twin Peaks-iness of it and I kind of get it but it doesn’t really work for me. I most recently went on a Friday night; it was packed, loud, and a little uncomfortable", cleanliness: "The bathroom was mostly black, with some red and a little bit of white. It might be cool if it was pretty obviously sparkling clean, but it didn’t really look that way. It didn’t look especially gross, but the toilets were black, and you can’t trust a black toilet in a black room.", cleanliness_rating: 2, function: "Everything worked. The sink got pretty hot, they had soap, things flushed. They didn’t have paper towels, and that is always a bummer.", function_rating: 3, style: "It has some kind of look and I guess if we’re still thinking about Twin Peaks it was kind of like the Black Lodge? It was pretty strikingly different than the rest of the place.", style_rating: 3)
Review.create(user_id: 2, bathroom_id: 12, date: 20150202, description: "If I had to guess, I would probably guess that bar bathrooms are used by a higher percentage of guests than restaurants (especially if the bar also serves Mexican food). So I don’t ever really get excited about bathrooms at bars.", cleanliness: "As you can tell from the pictures, the first thing you notice when you walk in is the graffiti; it wouldn’t be a bathroom at a bar without graffiti. But aside from the graffiti, the bathroom was a little cleaner and nicer than expected. ", cleanliness_rating: 3, function: "The toilet was okay, the floors were clean, the walls weren’t gross, they had all the regular bathroom supplies. ", function_rating: 3, style: "Nacho Borracho is a little less than a year old, and that probably explains why the bathroom isn’t quite as gnarly as most bar bathrooms. I think if you took away the graffiti and the few stickers around, it would be a nice bathroom in just about any other place.", style_rating: 3)
Review.create(user_id: 2, bathroom_id: 13, date: 20150125, description: "I don’t have to tell you what the deal is with most public bathrooms. Nobody wants to use a public restroom. I wish I could say this was different.", cleanliness: "The seat was a little weird, but they had toilet paper, at least. The place looked generally off and it could use a pretty serious mopping.", cleanliness_rating: 2, function: "Everything worked, and they had an air dryer instead of paper towels. No frills.", function_rating: 3, style: "As you walk up to it, you could start to feel hopeful. The tiling is kind of interesting, the genders are labeled “XX” or “XY” in tiles and they have some tile stick figures, I think. When you walk inside, you lose all of your hope. The men’s bathroom is split into two parts; when I walked in one part, there was one empty stall with a really short door. If I stood up, you could see me. So I tried the other part of the bathroom, and there were two stalls with the same short doors, except I could see the people inside the stalls. Ugh.", style_rating: 1)
Review.create(user_id: 2, bathroom_id: 14, date: 20150125, description: "You'll be excited to find that the toilet is in its own little room with a real door instead of a wall.", cleanliness: "Everything was clean, from the floor to the toilet pretty much everything else except the water around the sink.", cleanliness_rating: 4, function: "They had extra tp and paper towels and seat covers and pretty much anything you need.", function_rating: 5, style: "The style was a little tacky but kinda seemed to match the rest of the place.", style_rating: 3)

puts "bathrooms are seeded!"