import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn import svm
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle
import os


dataset = pd.read_csv("./Data/heart.csv")
predictors = dataset.drop("target",axis=1)
target = dataset["target"]
X_train,X_test,Y_train,Y_test = train_test_split(predictors,target,test_size=0.20,random_state=0)

#logesticRegresssion

lr = LogisticRegression(max_iter=90)
lr.fit(X_train,Y_train)
Y_pred_lr = lr.predict(X_test)
pickle.dump(lr, open("./Models/LogisticRegression.sav", 'wb'))

#Naive Bayes


nb = GaussianNB()
nb.fit(X_train,Y_train)
Y_pred_nb = nb.predict(X_test)
pickle.dump(nb, open("./Models/GaussianNB.sav", 'wb'))
#SVM


sv = svm.SVC(kernel='linear')
sv.fit(X_train, Y_train)
Y_pred_svm = sv.predict(X_test)
pickle.dump(sv,open("./Models/SVM.sav","wb"))

#knn


knn = KNeighborsClassifier(n_neighbors=7)
knn.fit(X_train,Y_train)
Y_pred_knn=knn.predict(X_test)
pickle.dump(knn,open("./Models/KNN.sav","wb"))

#Decision Tree

dt = DecisionTreeClassifier()
dt.fit(X_train,Y_train)
Y_pred_dt = dt.predict(X_test)
pickle.dump(dt , open("./Models/Decison.sav","wb"))

#Random Forset

rf = RandomForestClassifier()
rf.fit(X_train,Y_train)
Y_pred_rf = rf.predict(X_test)

pickle.dump(rf , open("./Models/Random.sav","wb"))