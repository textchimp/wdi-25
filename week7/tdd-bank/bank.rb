class Bank

  # attr_accessor :name
  # ...would give us a getter (b.name)
  # AND a setter (b.name = 'new name')

  attr_reader :name
  attr_reader :accounts  # b.accounts['name']

  def accounts
    @accounts
  end

  def initialize( name )
    @name = name
    @accounts = {}
  end

  def create_account( name, balance )
    return if balance < 0
    @accounts[name] = balance
  end


  def deposit( name, amount )
    @accounts[name] += amount
  end

  def withdraw( name, amount )
    return if amount > @accounts[name]
    @accounts[name] -= amount
  end

  def balance( name )
    @accounts[name]
  end

end
