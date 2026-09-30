import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

IMG_SIZE = 224

# Load OpenCV's built-in face detector (Haar Cascade, ships with opencv-python)
_face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def _crop_to_face(image_bgr):
    """Detect the largest face in the image and crop to it with some padding.
    Falls back to the full image if no face is detected."""
    gray = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)
    faces = _face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(60, 60))

    if len(faces) == 0:
        return image_bgr  # no face found — fall back to full image rather than failing

    # Pick the largest detected face (in case of multiple faces in frame)
    x, y, w, h = max(faces, key=lambda f: f[2] * f[3])

    # Add ~20% padding around the detected box, matching typical dataset crops
    pad_x, pad_y = int(w * 0.2), int(h * 0.2)
    x1, y1 = max(0, x - pad_x), max(0, y - pad_y)
    x2, y2 = min(image_bgr.shape[1], x + w + pad_x), min(image_bgr.shape[0], y + h + pad_y)

    return image_bgr[y1:y2, x1:x2]

def preprocess_image_bytes(image_bytes):
    """Full pipeline: decode -> detect & crop face -> grayscale-standardize -> resize -> preprocess."""
    # Decode with OpenCV (BGR format) for face detection
    nparr = np.frombuffer(image_bytes, np.uint8)
    image_bgr = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Crop to the detected face
    cropped_bgr = _crop_to_face(image_bgr)

    # Convert to RGB for TensorFlow, then continue the existing pipeline
    cropped_rgb = cv2.cvtColor(cropped_bgr, cv2.COLOR_BGR2RGB)
    img = tf.convert_to_tensor(cropped_rgb, dtype=tf.uint8)

    img = tf.image.rgb_to_grayscale(img)
    img = tf.image.grayscale_to_rgb(img)
    img = tf.image.resize(img, [IMG_SIZE, IMG_SIZE])
    img = tf.expand_dims(img, 0)
    img = preprocess_input(img)
    return img