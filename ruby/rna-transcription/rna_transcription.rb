class RnaTranscription

  def self.of_dna(dna)
    hash = {'G'=>'C', 'C'=>'G', 'T'=>'A', 'A'=>'U'}
    arr = dna.split(//)

   arr.map do |dna_code|
    hash[dna_code]
   end.join
  end
end