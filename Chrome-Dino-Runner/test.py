from neurosity import NeurositySDK
from dotenv import load_dotenv
# from pong import neurosity_move_up, neurosity_move_down, neurosity_stop
# from appscript import app, k
import os

load_dotenv()

neurosity = NeurositySDK({
    "device_id": os.getenv("NEUROSITY_DEVICE_ID")
})

neurosity.login({
    "email": os.getenv("NEUROSITY_EMAIL"),
    "password": os.getenv("NEUROSITY_PASSWORD")
})


