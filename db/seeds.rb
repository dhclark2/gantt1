Link.create!([
  {source: 1, target: 4, link_type: "0"},
  {source: 4, target: 5, link_type: "0"}
])
Task.create!([
  {text: "Check Property Status", start_date: "2017-01-29 00:00:00", duration: 2, progress: nil, sortorder: nil, parent: nil},
  {text: "Work on App", start_date: "2017-01-31 00:00:00", duration: 3, progress: 1.0, sortorder: 2, parent: nil},
  {text: "Talk to Gavin", start_date: "2017-01-31 00:00:00", duration: 3, progress: 1.0, sortorder: 2, parent: 1},
  {text: "Call dobbs", start_date: "2017-01-31 00:00:00", duration: 3, progress: 1.0, sortorder: 1, parent: 1},
  {text: "Get Medicine", start_date: "2017-02-01 00:00:00", duration: 5, progress: nil, sortorder: nil, parent: 4}
])
