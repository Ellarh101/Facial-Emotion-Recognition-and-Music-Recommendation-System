from fastapi import FastAPI, File, UploadFile
from app.preprocessing import preprocess_image_bytes
from app.model_loader import predict

app = FastAPI(title="Emotion Recognition Inference API")

@app.get("/")
def health_check():
    return {"status": "ok"}

@app.post("/predict")
async def predict_emotion(file: UploadFile = File(...)):
    image_bytes = await file.read()
    preprocessed = preprocess_image_bytes(image_bytes)
    result = predict(preprocessed)
    return result