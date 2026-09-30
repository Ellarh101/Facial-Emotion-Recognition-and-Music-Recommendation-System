import json
import tensorflow as tf

MODEL_PATH = r"C:\Users\CBN\Desktop\Downloads\emotion_model_package\exported_model"
LABEL_MAP_PATH = r"C:\Users\CBN\Desktop\Downloads\emotion_model_package\label_mapping.json"

_model = tf.saved_model.load(MODEL_PATH)
_infer = _model.signatures["serving_default"]

with open(LABEL_MAP_PATH) as f:
    idx_to_label = {int(k): v for k, v in json.load(f).items()}

def predict(preprocessed_img):
    result = _infer(preprocessed_img)
    output_key = list(result.keys())[0]
    probs = result[output_key].numpy()[0]
    pred_idx = int(probs.argmax())
    return {
        "emotion": idx_to_label[pred_idx],
        "confidence": float(probs[pred_idx]),
        "all_probabilities": {idx_to_label[i]: float(p) for i, p in enumerate(probs)}
    }