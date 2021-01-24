import os
import glob
from PIL import Image

files = glob.glob(
    'C:/Users/김승미/Desktop/숙명여자대학교/DSC/timmyRoom/2021-TimmyRoom/image/pocari/*.jpg')  # 각자 로컬에 맞게 변경
print(files)
for f in files:
    img = Image.open(f)
    img = img.convert("RGB")
    img_resize = img.resize((150, 150), Image.ANTIALIAS)

    title, ext = os.path.splitext(f)
    img_resize.save(title + '_change' + ext)
