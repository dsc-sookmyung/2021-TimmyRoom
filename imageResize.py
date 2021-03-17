import os
import glob
from PIL import Image

files = glob.glob('/Users/siyeon/Desktop/DSC/timmyRoom/2021-TimmyRoom/Image/image_crop/crop_pocari/*.jpg') # 각자 로컬에 맞게 변경

print(files)

count = 0
for f in files:
    img = Image.open(f)
    img = img.convert("RGB")
    img_resize = img.resize((512, 512), Image.ANTIALIAS)

    img_resize.save('/Users/siyeon/Desktop/DSC/timmyRoom/2021-TimmyRoom/Image/resize_512/pocari/'+str(count)+'.jpg')
    count += 1
    
