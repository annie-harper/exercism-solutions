class ResistorColorDuo

  COLORS = %w[black brown red orange yellow green blue violet grey white].freeze

# input string
# out integer, 2 digits
  def self.value(arr)
    arr.first(2).map { |color| COLORS.index(color) }.join.to_i
  end
end
