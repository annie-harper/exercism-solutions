class HighScores

  attr_reader :scores
  attr_reader :sorted_scores

  def initialize(all_scores)
    @scores = all_scores
    @sorted_scores = all_scores.sort
  end

  def latest
    scores.last
  end

  def personal_best
    sorted_scores.last
  end

  def personal_top_three
    sorted_scores.reverse.first(3)
  end

  def latest_is_personal_best?
    personal_best === latest
  end
end
