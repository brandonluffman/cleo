const serviceTowns = [
    {
      Id: 0,
      Slug: "bethel",
      Town: "Bethel",
      County: "Fairfield",
      Text: "Bethel is a town located in Fairfield County, Connecticut, United States. It is situated in the western part of the state, about 68 miles northwest of New York City. Bethel has a population of approximately 20,000 people, and it is known for its small-town charm and rural atmosphere. The town is home to several recreational facilities, including two public golf courses, a nature center, and a number of public parks. There are also several cultural and historical sites in Bethel, including the Bethel Historical Society Museum, which houses artifacts and exhibits related to the town&apos;s history.Bethel is a popular destination for outdoor enthusiasts, with its proximity to the Appalachian Trail and other hiking and biking trails. The town is also home to a number of small businesses, including restaurants, boutiques, and art galleries. Overall, Bethel is a welcoming and friendly community that offers a mix of natural beauty, recreational opportunities, and cultural and historical attractions.",
      Image: "/bethel.jpeg"
    },
    {
      Id: 1,
      Slug: "bridgeport",
      Town: "Bridgeport",
      County: "Fairfield",
      Text: "Bridgeport is the largest city in Connecticut, located in Fairfield County on the coast of Long Island Sound. It is a diverse, urban city with a population of around 147,000 people. Bridgeport has a long history dating back to the colonial era, and it is known for its rich cultural heritage and historic landmarks. The city is home to several institutions of higher education, as well as a number of parks and recreational facilities. Bridgeport is also an important economic center, with a thriving port and a diverse range of industries, including manufacturing, healthcare, and education.",
      Image: "/bridgeport.jpeg"
    },
    {
      Id: 2,
      Slug: "brookfield",
      Town: "Brookfield",
      County: "Fairfield",
      Text: "Brookfield is a town located in Fairfield County, Connecticut. It has a population of around 17,000 people and is known for its rural charm and small-town atmosphere. Brookfield is located in the western part of the state, about 30 miles from the city of Bridgeport. The town is home to a number of parks and recreational facilities, including the Brookfield Craft Center and the Brookfield Orchards. Brookfield is also home to a number of small businesses and is a popular residential area for commuters to nearby cities.",
      Image: "/bridgeport.jpeg"
    },
    {
      Id: 3,
      Slug: "danbury",
      Town: "Danbury",
      County: "Fairfield",
      Text: "Danbury is a city located in Fairfield County, Connecticut, with a population of around 84,000 people. It is located in the western part of the state, about 45 miles from the city of Bridgeport. Danbury is known for its rich history and cultural diversity, with a number of historical sites and landmarks, including the Danbury Museum and Historical Society and the Danbury War Memorial. The city is also home to Western Connecticut State University and a number of parks and recreational facilities. Danbury is an important economic center, with a thriving business community and a diverse range of industries, including healthcare, education, and manufacturing.      ",
      Image: "/danbury.jpeg"
    },
    {
      Id: 4,
      Slug: "darien",
      Town: "Darien",
      County: "Fairfield",
      Text: "Darien is a town located in Fairfield County, Connecticut, with a population of around 21,000 people. It is located on the coast of Long Island Sound, about 35 miles from the city of Bridgeport. Darien is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several beaches, parks, and recreational facilities, as well as a number of small businesses and local attractions. Darien is a popular location for commuters to nearby cities, and it is known for its high-quality public schools.      ",
      Image: "/darien.jpeg"
    },
    {
      Id: 5,
      Slug: "easton",
      Town: "Easton",
      County: "Fairfield",
      Text: "Easton is a town located in Fairfield County, Connecticut, with a population of around 8,000 people. It is located in the western part of the state, about 35 miles from the city of Bridgeport. Easton is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Aspetuck Land Trust and the Easton Country Club. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. Easton is known for its high-quality public schools and is a sought-after location for families with children.      ",
      Image: "/easton.jpeg"
    },
    {
      Id: 6,
      Slug: "fairfield",
      Town: "Fairfield",
      County: "Fairfield",
      Text: "Fairfield is a town located in Fairfield County, Connecticut, with a population of around 61,000 people. It is located on the coast of Long Island Sound, about 30 miles from the city of Bridgeport. Fairfield is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several beaches, parks, and recreational facilities, as well as a number of small businesses and local attractions. Fairfield is a popular location for commuters to nearby cities, and it is known for its high-quality public schools."      ,
      Image: "/fairfield.jpeg"
    },
    {
      Id: 7,
      Slug: "greenwich",
      Town: "Greenwich",
      County: "Fairfield",
      Text: "Greenwich is a town located in Fairfield County, Connecticut, with a population of around 63,000 people. It is located on the coast of Long Island Sound, about 25 miles from the city of Bridgeport. Greenwich is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several beaches, parks, and recreational facilities, as well as a number of small businesses and local attractions. Greenwich is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including Greenwich Academy and Sacred Heart University.      ",
      Image: "/greenwich.webp"
    },
    {
      Id: 8,
      Slug: "monroe",
      Town: "Monroe",
      County: "Fairfield",
      Text: "Monroe is a town located in Fairfield County, Connecticut, with a population of around 20,000 people. It is located in the western part of the state, about 40 miles from the city of Bridgeport. Monroe is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Wolfe Park and the Masuk High School Athletic Field. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. Monroe is known for its high-quality public schools and is a sought-after location for families with children.      ",
      Image: "/monroe.jpeg"
    },
    {
      Id: 9,
      Slug: "new-canaan",
      Town: "New Canaan",
      County: "Fairfield",
      Text: "New Canaan is a town located in Fairfield County, Connecticut, with a population of around 20,000 people. It is located on the coast of Long Island Sound, about 40 miles from the city of Bridgeport. New Canaan is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several beaches, parks, and recreational facilities, as well as a number of small businesses and local attractions. New Canaan is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the New Canaan Country School and the Sacred Heart University Stamford Campus.      ",
      Image: "/new-canaan.jpeg"
    },
    {
      Id: 10,
      Slug: "new-fairfield",
      Town: "New Fairfield",
      County: "Fairfield",
      Text: "New Fairfield is a town located in Fairfield County, Connecticut, with a population of around 14,000 people. It is located in the western part of the state, about 40 miles from the city of Bridgeport. New Fairfield is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Squantz Pond State Park and the New Fairfield Town Beach. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. New Fairfield is known for its high-quality public schools and is a sought-after location for families with children.      ",
      Image: "/new-fairfield.jpeg"
    },
    {
      Id: 11,
      Slug: "newtown",
      Town: "Newtown",
      County: "Fairfield",
      Text: "Newtown is a town located in Fairfield County, Connecticut, with a population of around 28,000 people. It is located in the western part of the state, about 45 miles from the city of Bridgeport. Newtown is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Newtown Forest Association and the Newtown Youth Academy. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. Newtown is known for its high-quality public schools and is a sought-after location for families with children. The town is also home to several institutions of higher education, including the Western Connecticut State University and the Housatonic Community College.      ",
      Image: "/newtown.jpeg"
    },
    {
      Id: 12,
      Slug: "norwalk",
      Town: "Norwalk",
      County: "Fairfield",
      Text: "Norwalk is a city located in Fairfield County, Connecticut, with a population of around 88,000 people. It is located on the coast of Long Island Sound, about 25 miles from the city of Bridgeport. Norwalk is a diverse, urban city with a thriving business community and a range of industries, including healthcare, education, and manufacturing. The city is home to several institutions of higher education, as well as a number of parks and recreational facilities. Norwalk is also an important transportation hub, with a busy port and easy access to major highways and public transportation.      ",
      Image: "/norwalk.jpeg"
    },
    {
      Id: 13,
      Slug: "redding",
      Town: "Redding",
      County: "Fairfield",
      Text: "Redding is a town located in Fairfield County, Connecticut, with a population of around 10,000 people. It is located in the western part of the state, about 45 miles from the city of Bridgeport. Redding is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Collis P. Huntington State Park and the Putnam Memorial State Park. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. Redding is known for its high-quality public schools and is a sought-after location for families with children. The town is also home to several institutions of higher education, including the Western Connecticut State University and the Weston Middle School.",
      Image: "/redding.jpeg"
    },
    {
      Id: 14,
      Slug: "ridgefield",
      Town: "Ridgefield",
      County: "Fairfield",
      Text: "Ridgefield is a town located in Fairfield County, Connecticut, with a population of around 25,000 people. It is located in the western part of the state, about 45 miles from the city of Bridgeport. Ridgefield is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several parks and recreational facilities, as well as a number of small businesses and local attractions. Ridgefield is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the Ridgefield High School and the Ridgefield School of Dance.",
      Image: "/ridgefield.jpeg"
    },
    {
      Id: 15,
      Slug: "shelton",
      Town: "Shelton",
      County: "Fairfield",
      Text: "Shelton is a city located in Fairfield County, Connecticut, with a population of around 41,000 people. It is located on the coast of Long Island Sound, about 30 miles from the city of Bridgeport. Shelton is a diverse, urban city with a thriving business community and a range of industries, including healthcare, education, and manufacturing. The city is home to several institutions of higher education, as well as a number of parks and recreational facilities. Shelton is also an important transportation hub, with a busy port and easy access to major highways and public transportation.",
      Image: "/shelton.jpeg"
    },
    {
      Id: 16,
      Slug: "sherman",
      Town: "Sherman",
      County: "Fairfield",
      Text: "Sherman is a town located in Fairfield County, Connecticut, with a population of around 3,600 people. It is located in the western part of the state, about 40 miles from the city of Bridgeport. Sherman is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Sherman Playhouse and the Sherman Historical Society. The town is also home to a number of small businesses and is a popular residential area for commuters to nearby cities. Sherman is known for its high-quality public schools and is a sought-after location for families with children. The town is also home to several institutions of higher education, including the Western Connecticut State University and the Housatonic Community College.",
      Image: "/sherman.jpeg"
    },
    {
      Id: 17,
      Slug: "stamford",
      Town: "Stamford",
      County: "Fairfield",
      Text: "Stamford is a city located in Fairfield County, Connecticut, with a population of around 128,000 people. It is located on the coast of Long Island Sound, about 25 miles from the city of Bridgeport. Stamford is a diverse, urban city with a thriving business community and a range of industries, including healthcare, education, and manufacturing. The city is home to several institutions of higher education, as well as a number of parks and recreational facilities. Stamford is also an important transportation hub, with a busy port and easy access to major highways and public transportation. The city is known for its vibrant arts and culture scene, with a number of museums, galleries, and performing arts centers.",
      Image: "/stamford.webp"
    },
    {
      Id: 18,
      Slug: "stratford",
      Town: "Stratford",
      County: "Fairfield",
      Text: "Stratford is a town located in Fairfield County, Connecticut, with a population of around 51,000 people. It is located on the coast of Long Island Sound, about 30 miles from the city of Bridgeport. Stratford is a diverse, urban town with a thriving business community and a range of industries, including healthcare, education, and manufacturing. The town is home to several institutions of higher education, as well as a number of parks and recreational facilities. Stratford is also an important transportation hub, with a busy port and easy access to major highways and public transportation. The town is known for its vibrant arts and culture scene, with a number of museums, galleries, and performing arts centers.",
      Image: "/stratford.jpeg"
    },
    {
      Id: 19,
      Slug: "trumbull",
      Town: "Trumbull",
      County: "Fairfield",
      Text: "Trumbull is a town located in Fairfield County, Connecticut, with a population of around 37,000 people. It is located in the western part of the state, about 35 miles from the city of Bridgeport. Trumbull is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several parks and recreational facilities, as well as a number of small businesses and local attractions. Trumbull is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the Trumbull High School and the Trumbull Library.",
      Image: "/trumbull.jpeg"
    },
    {
      Id: 20,
      Slug: "weston",
      Town: "Weston",
      County: "Fairfield",
      Text: "Weston is a town located in Fairfield County, Connecticut, with a population of around 10,000 people. It is located in the western part of the state, about 40 miles from the city of Bridgeport. Weston is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several parks and recreational facilities, as well as a number of small businesses and local attractions. Weston is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the Weston High School and the Weston Middle School.",
      Image: "/weston.jpeg"
    },
    {
      Id: 21,
      Slug: "westport",
      Town: "Westport",
      County: "Fairfield",
      Text: "Westport is a town located in Fairfield County, Connecticut, with a population of around 28,000 people. It is located on the coast of Long Island Sound, about 40 miles from the city of Bridgeport. Westport is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several beaches, parks, and recreational facilities, as well as a number of small businesses and local attractions. Westport is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the Westport Country Playhouse and the Westport Public Library.",
      Image: "/westport.jpeg"
    },
    {
      Id: 22,
      Slug: "wilton",
      Town: "Wilton",
      County: "Fairfield",
      Text: "Wilton is a town located in Fairfield County, Connecticut, with a population of around 18,000 people. It is located in the western part of the state, about 40 miles from the city of Bridgeport. Wilton is known for its affluent, residential character and is considered one of the wealthiest towns in the state. The town is home to several parks and recreational facilities, as well as a number of small businesses and local attractions. Wilton is a popular location for commuters to nearby cities, and it is known for its high-quality public schools. The town is also home to several institutions of higher education, including the Wilton High School and the Wilton Library.",
      Image: "/wilton.jpeg"
    },
    {
      Id: 23,
      Slug: "cos-cob",
      Town: "Cos Cob",
      County: "Fairfield",
      Text: "Cos Cob is a picturesque neighborhood nestled along the coast of Greenwich, Connecticut, renowned for its scenic beauty and historical significance. Situated on the banks of the Mianus River, this charming enclave offers a delightful blend of waterfront living and suburban tranquility. The village boasts a rich history, with several well-preserved 18th and 19th-century buildings, including the iconic Cos Cob Railroad Station, which serves as a reminder of its past as a transportation hub. Today, Cos Cob maintains its allure with its tree-lined streets, waterfront parks, and a close-knit community that enjoys a peaceful lifestyle while remaining in proximity to the vibrant cultural and economic opportunities of the greater Greenwich area.",
      Image: "/cos-cob.jpeg"
    },
    {
      Id: 24,
      Slug: "georgetown",
      Town: "Georgetown",
      County: "Fairfield",
      Text: "Georgetown, Connecticut, is a quaint and idyllic New England village located in the town of Wilton. Nestled within the picturesque landscape of Fairfield County, Georgetown is celebrated for its small-town charm and rich historical character. The heart of the village is its iconic four corners, where historic buildings and charming storefronts harken back to a bygone era. Georgetown has a strong sense of community, with locally-owned shops, restaurants, and cultural attractions, making it a beloved destination for both residents and visitors alike. The area's natural beauty is also a draw, with lush forests, scenic parks, and nearby reservoirs offering ample opportunities for outdoor recreation. Georgetown provides a serene escape from the bustle of nearby cities, making it a truly enchanting place to live and explore.",
      Image: "/georgetown.jpeg"
    },
    {
      Id: 25,
      Slug: "hawleyville",
      Town: "Hawleyville",
      County: "Fairfield",
      Text: "Hawleyville, Connecticut, is a charming village situated within the town of Newtown, offering a peaceful and quintessential New England experience. Nestled amidst the rolling hills of Fairfield County, Hawleyville is known for its scenic beauty and tranquil ambiance. The village is characterized by historic architecture, including quaint homes and buildings that reflect its rich heritage. Hawleyville maintains a strong sense of community, with local businesses and residents contributing to its warm and welcoming atmosphere. While providing a serene retreat from the hustle and bustle of larger towns, Hawleyville is conveniently located for those seeking a balance between rural living and easy access to nearby amenities. With its serene landscapes and close-knit community, Hawleyville embodies the quintessential charm of Connecticut's small villages.",
      Image: "/hawleyville.jpeg"
    },
    {
      Id: 26,
      Slug: "old-greenwich",
      Town: "Old Greenwich",
      County: "Fairfield",
      Text: "Old Greenwich, Connecticut, is a picturesque coastal village nestled within the town of Greenwich, offering a unique blend of timeless charm and modern convenience. Located along the Long Island Sound, Old Greenwich is celebrated for its breathtaking waterfront views, sandy beaches, and a relaxed, seaside atmosphere. The village boasts a rich history, evident in its beautifully preserved historic homes and streets that harken back to a bygone era. Old Greenwich Avenue serves as the heart of the community, lined with boutique shops, cafes, and restaurants, creating a vibrant yet cozy atmosphere. Residents and visitors alike can enjoy leisurely strolls along the shoreline, recreational activities at the nearby parks, and a strong sense of community that makes Old Greenwich an inviting place to call home. With its blend of coastal beauty and suburban comfort, Old Greenwich is a true gem on Connecticut's Gold Coast.",
      Image: "/old-greenwich.jpeg"
    },
    {
      Id: 27,
      Slug: "riverside",
      Town: "Riverside",
      County: "Fairfield",
      Text: "Riverside, Connecticut, is an affluent and picturesque neighborhood located within the town of Greenwich, offering a serene and upscale residential experience. Nestled along the banks of the Mianus River and Long Island Sound, Riverside is renowned for its stunning waterfront properties, lush greenery, and a sense of exclusivity. The community exudes an air of sophistication, with beautifully landscaped estates, tree-lined streets, and a pristine shoreline that provides opportunities for water-related activities. Riverside Avenue serves as the village's main thoroughfare, featuring high-end boutiques, fine dining establishments, and top-rated schools. Riverside enjoys a strong sense of community, and residents take pride in their well-maintained homes and active participation in local events and organizations. The natural beauty of Riverside is complemented by its proximity to the bustling cultural and financial centers of Greenwich, making it an ideal location for those seeking a balance between suburban tranquility and easy access to urban amenities. With its upscale lifestyle and scenic surroundings, Riverside, Connecticut, is a sought-after destination for those looking to embrace the best of both worlds.",
      Image: "/riverside.jpeg"
    },
    {
      Id: 28,
      Slug: "FairfieldCounty",
      Town: "Fairfield County",
      County: "Fairfield",
      Text: "Fairfield County, located in southwestern Connecticut, is a region of remarkable diversity and beauty. Renowned for its picturesque coastal towns like Greenwich and Westport, as well as its vibrant urban centers like Stamford and Norwalk, Fairfield County offers a unique blend of natural charm and economic vitality. With its proximity to New York City, it serves as a desirable suburban enclave for commuters while maintaining its own distinct character. This county boasts excellent schools, a rich cultural scene, and a robust economy. Its scenic landscapes include Long Island Sound's coastline, lush forests, and rolling hills, making it a haven for outdoor enthusiasts. Fairfield County is a dynamic, well-balanced area that effortlessly combines the best of both city and country living, making it a sought-after destination for residents and visitors alike.",
      Image: "/fairfield.jpeg"
    },
  ];
    
export default serviceTowns;



// {
//   Id: 23,
//   Slug: "kent",
//   Town: "Kent",
//   County: "Litchfield",
//   Text: "Kent is a town located in Litchfield County, Connecticut, with a population of around 2,600 people. It is located in the western part of the state, about 90 miles from the city of Bridgeport. Kent is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Kent Falls State Park and the Macedonia Brook State Park. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Kent Art Association and the Kent Quilt Show. Kent is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/kent.jpeg"
// },
// {
//   Id: 24,
//   Slug: "warren",
//   Town: "Warren",
//   County: "Litchfield",
//   Text: "Warren is a town located in Litchfield County, Connecticut, with a population of around 1,500 people. It is located in the western part of the state, about 85 miles from the city of Bridgeport. Warren is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Warren Town Beach and the Warren Land Trust. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Warren Town Hall and the Warren Congregational Church. Warren is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/warren.jpeg"
// },
// {
//   Id: 25,
//   Slug: "litchfield",
//   Town: "Litchfield",
//   County: "Litchfield",
//   Text: "Litchfield is a town located in Litchfield County, Connecticut, with a population of around 8,000 people. It is located in the western part of the state, about 85 miles from the city of Bridgeport. Litchfield is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the White Memorial Conservation Center and the Litchfield Hills Road Race. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Litchfield Historical Society and the Litchfield Jazz Festival. Litchfield is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/litchfield.jpeg"
// },
// {
//   Id: 26,
//   Slug: "watertown",
//   Town: "Watertown",
//   County: "Litchfield",
//   Text: "Watertown is a town located in Litchfield County, Connecticut, with a population of around 22,000 people. It is located in the western part of the state, about 85 miles from the city of Bridgeport. Watertown is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Watertown Town Beach and the Watertown Historical Society. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Whittemore Glen State Park and the Watertown Ice Rink. Watertown is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/watertown.jpeg"
// },
// {
//   Id: 27,
//   Slug: "bethlehem",
//   Town: "Bethlehem",
//   County: "Litchfield",
//   Text: "Bethlehem is a town located in Litchfield County, Connecticut, United States. It is situated in the western part of the state, about 80 miles northwest of New York City. Bethlehem has a population of approximately 3,000 people, and it is known for its rural atmosphere and small-town charm. The town is home to several recreational facilities, including several public parks, a golf course, and a community center. Bethlehem is also home to a number of small businesses, including restaurants, cafes, and art galleries. Bethlehem is a popular destination for outdoor enthusiasts, with its proximity to the Appalachian Trail and other hiking and biking trails. The town is also home to several cultural and historical sites, including the Bethlehem Fair, which has been held annually since 1797 and features agricultural exhibits, live music, and food vendors. Overall, Bethlehem is a peaceful and welcoming community that offers a mix of natural beauty, recreational opportunities, and cultural and historical attractions.",
//   Image: "/bethlehem.jpeg"
// },
// {
//   Id: 28,
//   Slug: "morris",
//   Town: "Morris",
//   County: "Litchfield",
//   Text: "Morris is a town located in Litchfield County, Connecticut, with a population of around 2,400 people. It is located in the western part of the state, about 85 miles from the city of Bridgeport. Morris is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the White Memorial Conservation Center and the Morris Town Beach. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Morris Town Library and the Morris Inn. Morris is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/morris.jpeg"
// },
// {
//   Id: 29,
//   Slug: "washingtonn",
//   Town: "Washington",
//   County: "Litchfield",
//   Text: "Washington is a town located in Litchfield County, Connecticut, with a population of around 3,000 people. It is located in the western part of the state, about 90 miles from the city of Bridgeport. Washington is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Steep Rock Preserve and the Washington Town Beach. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Washington Art Association and the Institute for American Indian Studies. Washington is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/washington.jpeg"
// },
// {
//   Id: 30,
//   Slug: "roxbury",
//   Town: "Roxbury",
//   County: "Litchfield",
//   Text: "Roxbury is a town located in Litchfield County, Connecticut, with a population of around 3,600 people. It is located in the western part of the state, about 85 miles from the city of Bridgeport. Roxbury is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Roxbury Land Trust and the Roxbury School Forest. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Roxbury Arts Center and the Roxbury Center Historic District. Roxbury is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/roxbury.jpeg"
// },
// {
//   Id: 31,
//   Slug: "woodbury",
//   Town: "Woodbury",
//   County: "Litchfield",
//   Text: "Woodbury is a town located in Litchfield County, Connecticut, with a population of around 9,500 people. It is located in the western part of the state, about 80 miles from the city of Bridgeport. Woodbury is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Woodbury Town Beach and the Woodbury Land Trust. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the Flanders Nature Center and the Woodbury Antiques Dealers Association. Woodbury is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/woodbury.jpeg"
// },
// {
//   Id: 32,
//   Slug: "new-milford",
//   Town: "New Milford",
//   County: "Litchfield",
//   Text: "New Milford is a town located in Litchfield County, Connecticut, with a population of around 28,000 people. It is located in the western part of the state, about 75 miles from the city of Bridgeport. New Milford is known for its rural character and small-town atmosphere, with a number of parks and recreational facilities, including the Harrybrooke Park and the New Milford Recreation Center. The town is also home to a number of small businesses and is a popular destination for tourists, with a number of local attractions, such as the New Milford Historical Society and the New Milford Green. New Milford is a sought-after location for its natural beauty and is known for its high-quality public schools.",
//   Image: "/new-milford.jpeg"
// },
// {
//   Id: 33,
//   Slug: "bridgewater",
//   Town: "Bridgewater",
//   County: "Litchfield",
//   Text: "Can't have dirty garbage!",
//   Image: "/bridgewater.jpeg"
// },
// {
//   Id: 34,
//   Slug: "LitchfieldCounty",
//   Town: "Litchfield County",
//   County: "Litchfield",
//   Text: "Can't have dirty garbage!",
//   Image: "/litchfield.jpeg"
// },