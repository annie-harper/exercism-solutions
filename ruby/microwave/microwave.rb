class Microwave

  def initialize(time)
    @time = time
  end

  def greater_than_sixty_seconds
    time_array = @time.to_s.split('')
    remove_last = time_array.pop()
    find_seconds = time_array.last.to_i
  end

  def timer
    if @time < 100 || greater_than_sixty_seconds > 6
      less_than_one_hundred
    else
      greater_than_one_hundred
    end  
  end

  def less_than_one_hundred
    minute = @time / 60
    minutes = minute < 10 ? "0#{minute}" : minute
    second = @time % 60
    seconds = second < 10 ? "0#{second}" : second

    "#{minutes}:#{seconds}"
  end

  def greater_than_one_hundred
    minute = @time / 100
    minutes = minute < 10 ? "0#{minute}" : minute
    second = @time % 100
    seconds = second < 10 ? "0#{second}" : second

    "#{minutes}:#{seconds}"
  end

end