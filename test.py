import pickle
import numpy as np
import pandas as pd


testData = pd.Series([63,1,3,145,233,1,0,150,0,2.3,0,0,1])
testData = np.array(testData)
testData = testData.reshape(1,-1)


decisionTree = pickle.load(open("./Models/Decison.sav","rb"))
gaussianModel = pickle.load(open("./Models/GaussianNB.sav","rb"))
knnModel = pickle.load(open("./Models/KNN.sav","rb"))
logisticRegressionModel = pickle.load(open("./Models/LogisticRegression.sav","rb"))
randomModel = pickle.load(open("./Models/Random.sav","rb"))
svmModel = pickle.load(open("./Models/SVM.sav","rb"))

logisPrediction  = logisticRegressionModel.predict(testData)
randomPrediction = randomModel.predict(testData)
decisionPrediction = decisionTree.predict(testData)
gaussianPrediction = gaussianModel.predict(testData)
svmPrediction = svmModel.predict(testData)
knnPrediction = knnModel.predict(testData)