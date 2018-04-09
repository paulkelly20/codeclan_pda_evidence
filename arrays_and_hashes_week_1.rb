 my_names_array = ["Paul", "Elaine"]

length_array = []

 my_names_array.map {|x| length_array << x.length()}

  length_array

 my_array = ["Paul", 5, 8]
 my_new_array = my_array.map {|x| x}

 my_new_array


my_hash = {name: "Paul", age: 32, height: "5ft7"}

my_hash.map {|k, v| p v}

array_without_height = my_hash.delete(:height)
 p my_hash
