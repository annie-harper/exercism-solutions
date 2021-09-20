class Pangram
  def self.pangram?(str)
    str.downcase.scan(/[a-zA-Z]/).uniq.length == 26 ? true : false
  end
end