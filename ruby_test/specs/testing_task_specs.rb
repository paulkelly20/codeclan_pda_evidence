require_relative("../card.rb")
require_relative("../testing_task_2.rb")
require("minitest/autorun")
class TestCard < MiniTest::Test

  def setup()
    @card1 = Card.new( "Club", 5)


    @card2 = Card.new("Heart", 8)

    @game = CardGame.new()

  end

  def test_card_1_name()
    assert_equal("Club", @card1.suit)
  end

  def test_check_for_ace
    assert_equal(false,@game.check_for_ace(@card1) )
  end

  def test_highest_card()
    assert_equal("Heart", @game.highest_card(@card1, @card2))
  end

  def test_cards_total()
    
    assert_equal("You have a total of 13", CardGame.cards_total([@card1,@card2]))

  end

end
