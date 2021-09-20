class Acronym

  def self.abbreviate(phrase)
    phrase.scan(/\b(\w{1})/).join.upcase
  end
end

