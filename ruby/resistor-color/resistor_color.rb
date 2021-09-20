class ResistorColor
    COLORS = %w[black brown red orange yellow green blue violet grey white].freeze

# input string
# out integer
  def self.color_code(str)
    COLORS.index(str)
  end
end
