from os import write
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import time

while True:
    import json
    with open("db.json", "r") as json_file: 
        data = json.load(json_file) 
    bill_list = data["projects"]
    dict = bill_list[0]
    symptoms = dict["symptom"]

    df= pd.read_csv("symptom2(1).csv")
    for i in range(len(symptoms)):
        df.iat[0,i+1] = symptoms[i]

    features = ['Symptom_1','Symptom_2','Symptom_3','Symptom_4','Symptom_5','Symptom_6','Symptom_7','Symptom_8','Symptom_9','Symptom_10','Symptom_11','Symptom_12','Symptom_13','Symptom_14','Symptom_15','Symptom_16','Symptom_17']

    for feature in features:
        df[feature] = df[feature].fillna("")

    df['combined_features'] = df.Symptom_1 +' ' + df.Symptom_2 +' '+ df.Symptom_3 +' ' + df.Symptom_4 +' ' + df.Symptom_5 +' ' + df.Symptom_6 +' '+ df.Symptom_7 +' '+ df.Symptom_8 + ' '+ df.Symptom_9 + ' '+ df.Symptom_10 + ' '+ df.Symptom_11 + ' '+ df.Symptom_12 + ' '+ df.Symptom_13 + ' '+ df.Symptom_14 + ' '+ df.Symptom_15 + ' '+ df.Symptom_16 + ' '+ df.Symptom_17

    cv = CountVectorizer()
    count_matrix = cv.fit_transform(df.combined_features)
    cosine_sim = cosine_similarity(count_matrix)

    user_choice = 'ImportSymptom'
    ref_index = df[df.Disease.str.contains(user_choice, case=False)].index[0]
    ref_index2 = df[df.Disease.str.contains(user_choice, case=False)]

    similar_Disease = list(enumerate(cosine_sim[ref_index]))
    sorted_similar_Disease = sorted(similar_Disease,key=lambda x:x[1],reverse=True)[1:]

    print('The Disease is [' + user_choice +']')
    print(ref_index2)
    array = []
    for i,element in enumerate(sorted_similar_Disease):
            similar_symptom = element[0]
            similar_symptom_Disease = df.Disease.iloc[similar_symptom]
            s_score = element[1]
            print('{:30}  -> {:.3f}'. format(similar_symptom_Disease, s_score))
         
            array.append(similar_symptom_Disease)
            print("---------------")
    
    
    # updatejson = open("db.json", "w+")
    # updatejson.write(json.dumps(array))
    # updatejson.close()
    # jj = json.dumps(array)
    
            if i>4:
                break

    print(array)


    

    print("----------")

    # for obj in data["projects"]:
    #     data.append({'diagnose': array})
    data.update({'diagnose': array})
    print(data)
    # json.dumps(data)
    # print("-------------------")
    # print(data)

    import sys
    print("Command")
    sys.stdout.flush()
    time.sleep(6)

json.dumps(data)


# with open("db.json","w") as f:
#     f.write(json.dumps(data, indent= 5))

# updatedata= data.append(array)
# print(updatedata)
# print(type(ref_index2))
# arr = ref_index2.to_numpy()
# print(arr)
# print(type(similar_symptom_Disease))
# print(similar_symptom_Disease)



# with open("db.json","w") as json_file:
    