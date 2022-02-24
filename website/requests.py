from flask import Blueprint, request, render_template
from google.cloud import storage
from PIL import Image
import datetime
import os

BUCKET_NAME = "plural-storage"
storage_client = storage.Client()

requests = Blueprint('requests', __name__)

@requests.route('/upload', methods=['POST'])
def upload():
    """Process a file upload"""
    if request.files["image"].filename != '':

        image = request.files["image"]
        image_name = datetime.datetime.now().strftime("%d%m%Y_%H%M%S") + ".jpg"

        # save as tmp image
        image.save('./tmp/{}'.format(image_name))

        # upload to gcs from tmp
        bucket = storage_client.bucket(BUCKET_NAME)
        blob = bucket.blob("to_process/" + image_name)
        blob.upload_from_filename('./tmp/{}'.format(image_name))

        # clear tmp file
        for file in os.listdir('./tmp'):
            if (file.endswith('.png')) | (file.endswith('.jpg')):
                print(file)
                os.remove('./tmp/' + file)

    return render_template("wineReader.html", url_img = "https://storage.googleapis.com/plural-storage/to_process/" + image_name)