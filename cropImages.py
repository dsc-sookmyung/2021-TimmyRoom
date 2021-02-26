import cv2
import glob


files = glob.glob('/Users/siyeon/Desktop/DSC/timmyRoom/2021-TimmyRoom/image_Crawling/사이다/*.jpg')
print(files)

count = -1
for f in files:
    img = cv2.imread(f)
    x,y,w,h	= cv2.selectROI('img', img, False)
    if w and h:
        roi = img[y:y+h, x:x+w]
        cv2.imshow('cropped', roi)  # ROI 지정 영역을 새창으로 표시
        cv2.moveWindow('cropped', 0, 0) # 새창을 화면 좌측 상단에 이동
        count += 1
        cv2.imwrite('./crop/'+str(count)+'.jpg', roi)   # ROI 영역만 파일로 저장

    cv2.waitKey(0)
    cv2.destroyAllWindows()




