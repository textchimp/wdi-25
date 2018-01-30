
require_relative '../bank'

describe Bank do

  let(:bank) {  Bank.new 'TDD Bank'  }

  describe '.new' do

    it 'creates a new bank object' do
      # bank = Bank.new 'TDD Bank'
      # expect( bank ).to_not eq nil
      expect( bank ).to be_a Bank
    end

    it 'assigns the bank a name' do
      expect( bank.name ).to eq 'TDD Bank'
    end

  end  # .new

  describe '#create_account' do
    it 'creates an account for some particular person' do
      bank.create_account 'Craigsy', 200
      expect( bank.accounts['Craigsy'] ).to eq 200
    end
    it 'does not create an account with a negative initial balance' do
      bank.create_account 'Craigsy', -200
      expect( bank.accounts['Craigsy'] ).to be nil
    end
  end

  describe '#deposit' do
    it 'deposits an amount into a customer\'s account' do
      bank.create_account 'Deirdre', 100
      bank.deposit 'Deirdre', 100
      expect( bank.accounts['Deirdre'] ).to eq 200
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a customer\'s account' do
      bank.create_account 'Bazza', 100
      bank.withdraw 'Bazza', 50
      expect( bank.accounts['Bazza'] ).to eq 50
    end
    it 'ignores withdrawals that exceed the balance' do
      bank.create_account 'Tezza', 100
      bank.withdraw 'Tezza', 1_000_000
      expect( bank.accounts['Tezza'] ).to eq 100
    end
  end

  describe '#balance' do
    it 'returns the balance fort a specific customer\'s account' do
      bank.create_account 'Mad Robby', 100
      expect( bank.balance('Mad Robby') ).to eq 100
    end
  end


end
