namespace :twitter do

  desc "Remove all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  desc "Get stats about current user and tweet count"
  task :stats => :environment do
    puts "Current users: #{ User.count }"
    puts "Current tweets: #{ Tweet.count }"
  end

  desc "Create a bunch of users in the DB"
  task :create_users, [:user_count] => :environment do |t, args|
    # Rake::Task['twitter:clear'].invoke
    count = args[:user_count].to_i > 0 ? args[:user_count].to_i : 100
    puts "count: #{ count }"
    count.times do
      User.create({
        email: Faker::Internet.email,
        name: Faker::Name.name,
        job: Faker::Job.title,
        interests: Faker::Hipster.sentence
      })
    end
    Rake::Task['twitter:stats'].invoke
  end

  desc "Retrieve a bunch of tweets"
  task :get_tweets => :environment do

  end

  desc "Retrieve a number of tweets to associate with each user"
  task :add_tweets_to_users, [:min, :max] => :environment do  |t, args|
    # invoke like so: rails twitter:add_tweets_to_users[10,100]
    # NO SPACES BETWEEN ARGUMENTS IN THE SQUARE BRACKETS

    # Twitter client setup
    
    puts args
    User.each do |u|
      # get N tweets and associate them with user 'u'
    end

  end




end
