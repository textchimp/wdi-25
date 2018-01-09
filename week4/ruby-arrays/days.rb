# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday # Tuesday # Wednesday # Thursday # Friday # Saturday # Sunday
# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically

# days = ['Monday', ]


days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }



# 2.

# Move Sunday around using an extra variable
moving_day = days.pop
days.unshift( moving_day )

# or, less readable but one line:
days.unshift( days.pop )

# fancy way:
days.rotate -1

# 3.

# re-initialise our array
days = %w{ Monday Tuesday Wednesday Thursday Friday Saturday Sunday }

# use ranges as array indexes to retrieve sub-arrays
week_days    = days[0..4]
weekend_days = days[5..6]

# construct a new array from our new parts
week_parts = [ week_days, weekend_days ]

# less readable one-liner:
week_parts = [ days[0..4], days[5..6] ]

# 4.

# just use .pop to remove the weekends from our two-part array
week_parts.pop

# 5.

# Note that week_parts.sort won't work! You need to dig into week_parts first to get the 0th element:
sorted_days = week_parts[0].sort

# debugger!
require 'pry'; binding.pry
