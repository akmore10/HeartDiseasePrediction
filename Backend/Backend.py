from flask import Flask,request,jsonify
from LoadedModel import *
from flask_cors import CORS
import numpy as np
import pandas as pd
import json
app = Flask(__name__)
CORS(app)

@app.route('/resource', methods = ['POST'])

def predict():
    requestData = request.json
    testData = []

    for d in requestData.keys():
        testData.append(requestData[d])

    testData = pd.Series(testData)
    testData = np.array(testData)
    testData = testData.reshape(1,-1)

    logisPrediction  = logisticRegressionModel.predict(testData)
    randomPrediction = randomModel.predict(testData)
    decisionPrediction = decisionTree.predict(testData)
    gaussianPrediction = gaussianModel.predict(testData)
    svmPrediction = svmModel.predict(testData) 
    knnPrediction = knnModel.predict(testData)


    result = {
        "LogisticRegression" : int(logisPrediction[0]),
        "RandomForset" : int(randomPrediction[0]),
        "DecisionTree" : int(decisionPrediction[0]),
        "GaussianNaiveBayes" : int(gaussianPrediction[0]),
        "SVM" : int(svmPrediction[0]),
        "KNN" : int(knnPrediction[0])
    }

    return json.dumps(result)

    

if __name__ == "__main__":
  app.run()