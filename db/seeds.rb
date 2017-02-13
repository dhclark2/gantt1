# Link.create!([
#   {source: 1, target: 3, link_type: "0"},
#
#   {source: 3, target: 4, link_type: "0"},
#   {source: 3, target: 5, link_type: "0"},
#
#   {source: 5, target: 6, link_type: "0"},
#   {source: 5, target: 7, link_type: "0"},
#   {source: 5, target: 8, link_type: "0"},
#
#   {source: 9, target: 10, link_type: "0"},
#   {source: 10, target: 11, link_type: "0"},
#   {source: 11, target: 12, link_type: "0"},
#   {source: 12, target: 13, link_type: "0"},
#   {source: 13, target: 14, link_type: "0"}
# ])
#
#
# Task.create!([
#   {text: "Research Area", start_date: "2017-01-29 00:00:00", duration: 4, progress: nil, sortorder: 1, parent: nil},
#   	{text: "Use Zillow & Realtor.com", start_date: "2017-01-30 00:00:00", duration: 2, progress: nil, sortorder: nil, parent: 1},
#
#   {text: "Desired Property Found", start_date: "2017-02-03 00:00:00", duration: 6, progress: 1.0, sortorder: 2, parent: nil},
#   	{text: "Ensure Buyer has 20% of bid price", start_date: "2017-02-03 00:00:00", duration: 1, progress: 1.0, sortorder: nil, parent: 3},
#  	{text: "Contact Listed Realtor", start_date: "2017-02-04 00:00:00", duration: 2, progress: 1.0, sortorder: nil, parent: 3},
# 		{text: "Request Walkthrough of Property", start_date: "2017-02-06 00:00:00", duration: 1, progress: 1.0, sortorder: 1, parent: 5},
# 		{text: "Ask about previous bids", start_date: "2017-02-06 00:00:00", duration: 1, progress: 1.0, sortorder: 2, parent: 5},
# 		{text: "Decide on Property: contact Realtor", start_date: "2017-02-07 00:00:00", duration: 1, progress: 1.0, sortorder: nil, parent: 7},
#
#   {text: "How to Shower", start_date: "2017-01-31 00:00:00", duration: 6, progress: 1.0, sortorder: 3, parent: nil},
# 	  {text: "Start hot water", start_date: "2017-02-01 00:00:00", duration: 1, progress: 2.0, sortorder: 1, parent: 9},
# 	  {text: "Get in when hot", start_date: "2017-02-02 00:00:00", duration: 1, progress: 3.0, sortorder: 2, parent: 9},
# 	  {text: "Wash Hair", start_date: "2017-02-03 00:00:00", duration: 1, progress: 4.0, sortorder: 3, parent: 9},
# 	  {text: "Wash Body", start_date: "2017-02-04 00:00:00", duration: 1, progress: 5.0, sortorder: 4, parent: 9},
# 	  {text: "Dry Off", start_date: "2017-02-05 00:00:00", duration: 1, progress: 6.0, sortorder: 5, parent: 9}
# ])



# User.create!([
#   {email: "ham@example.com", encrypted_password: "123456", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 1, current_sign_in_at: "2017-02-01 17:27:51", last_sign_in_at: "2017-02-01 17:27:51", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
# ])

Link.create!([
  {source: 1, target: 3, link_type: "0"},
  {source: 3, target: 4, link_type: "0"},
  {source: 3, target: 5, link_type: "0"},
  {source: 5, target: 6, link_type: "0"},
  {source: 5, target: 7, link_type: "0"},
  {source: 5, target: 8, link_type: "0"},
  {source: 10, target: 11, link_type: "0"},
  {source: 11, target: 12, link_type: "0"},
  {source: 12, target: 13, link_type: "0"},
  {source: 13, target: 14, link_type: "0"},
  {source: 9, target: 10, link_type: "1"}
])
Task.create!([
  {text: "Research Area", start_date: "2017-01-29 00:00:00", duration: 4, progress: nil, sortorder: 1, parent: nil},
  {text: "Use Zillow & Realtor.com", start_date: "2017-01-30 00:00:00", duration: 2, progress: nil, sortorder: nil, parent: 1},
  {text: "Desired Property Found", start_date: "2017-02-03 00:00:00", duration: 6, progress: 1.0, sortorder: 2, parent: nil},
  {text: "Ensure Buyer has 20% of bid price", start_date: "2017-02-03 00:00:00", duration: 1, progress: 1.0, sortorder: nil, parent: 3},
  {text: "Contact Listed Realtor", start_date: "2017-02-04 00:00:00", duration: 2, progress: 1.0, sortorder: nil, parent: 3},
  {text: "Request Walkthrough of Property", start_date: "2017-02-06 00:00:00", duration: 1, progress: 1.0, sortorder: 1, parent: 5},
  {text: "Ask about previous bids", start_date: "2017-02-06 00:00:00", duration: 1, progress: 1.0, sortorder: 2, parent: 5},
  {text: "Decide on Property: contact Realtor", start_date: "2017-02-07 00:00:00", duration: 1, progress: 1.0, sortorder: nil, parent: 7},
  {text: "How to Shower", start_date: "2017-01-31 00:00:00", duration: 6, progress: 1.0, sortorder: 3, parent: nil},
  {text: "Start hot water", start_date: "2017-02-01 00:00:00", duration: 1, progress: 2.0, sortorder: 1, parent: 9},
  {text: "Get in when hot", start_date: "2017-02-02 00:00:00", duration: 1, progress: 3.0, sortorder: 2, parent: 9},
  {text: "Wash Hair", start_date: "2017-02-03 00:00:00", duration: 1, progress: 4.0, sortorder: 3, parent: 9},
  {text: "Wash Body", start_date: "2017-02-04 00:00:00", duration: 1, progress: 5.0, sortorder: 4, parent: 9},
  {text: "Dry Off", start_date: "2017-02-05 00:00:00", duration: 1, progress: 6.0, sortorder: 5, parent: 9}
])
