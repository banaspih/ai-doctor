import json
with open("db.json", "r") as json_file: 
    data = json.load(json_file) 

print(data)

print("------------------------------")

bill_list = data["projects"]
# dict = bill_list[1]
# id = dict['id']
# print(id)

# for i in range():
#     dict = bill_list[i]
#     print(dict)    

i = -1



while True:
   
   
    
    i += 1  
    count = len(bill_list)
    if i >= count-1:

        dict=bill_list[i]
        id = dict['id']
   
    if id > 10+i :
        with open("data.json", "w") as f:
            f.write(json.dumps(data, indent=2))

# with open("data.json", "w") as f:
#     # f.write(json.dumps(data, indent=2))
#     id = data["id"]
#     print(id)
#     while True: 
#         if id > 9:
#             f.write(json.dumps(data, indent=2))


