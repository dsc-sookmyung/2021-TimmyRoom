import os
import glob
from PIL import Image

files = glob.glob('/Users/siyeon/Desktop/DSC/timmyRoom/2021-TimmyRoom/image/데자와/*.jpg') # 각자 로컬에 맞게 변경

print(files)
>>>>>>> 87b77e57de62de46fc640aa3e4f3e72097c82d1e
for f in files:
    img = Image.open(f)
    img = img.convert("RGB")
    img_resize = img.resize((150, 150), Image.ANTIALIAS)
    
    
    title, ext = os.path.splitext(f)
    img_resize.save(title + '_change' + ext)
