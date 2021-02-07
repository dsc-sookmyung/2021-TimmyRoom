import PIL.ImageTk
from tkinter import filedialog
from tkinter import *
import webbrowser
import numpy as np
from tensorflow.keras.models import load_model

def loadImage():
    global imageUrl
    global photo

    imageLabel.configure(text="")
    colorName.configure(text="")
    result.configure(text="")
    url1.configure(text="")
    url2.configure(text="")
    url3.configure(text="")

    root.file = filedialog.askopenfile(
        initialdir='path',
        title='select file',
        filetypes=(('png files', '*.png'), ('jpg files', '*.jpg'), ('all files', '*.*'))
    )
    imageUrl = root.file.name

    if imageUrl.split('.')[-1] == "png":
        photo = PhotoImage(file=root.file.name)
    elif imageUrl.split('.')[-1] == "jpg":
        photo = PIL.ImageTk.PhotoImage(file=root.file.name)

    imageLabel.configure(image=photo)
    imageLabel.pack()


def loadModel():
    global catName

    result.configure(text="")

    fp = open(imageUrl, "rb")
    img = PIL.Image.open(fp)
    img = img.convert("RGB")

    x_test = []
    data = np.asarray(img)
    x_test.append(data)
    x_test.append(data)
    x_test = np.array(x_test)
    x_test = x_test.astype(float) / 255
    # print(x_test.shape)

    classNames = ['cider','pocari','dejava', 'cola']

    model = load_model('/Users/siyeon/Desktop/DSC/timmyRoom/first.hdf5', compile=False)
    prediction = model.predict(x_test)
    np.set_printoptions(formatter={'float': lambda x: "{0:0.3f}".format(x)})

    print(prediction[0])
    if classNames[prediction[0].argmax()] == 'cider':
        catName = classNames[prediction[0].argmax()]
        result.configure(text="예측 카테고리는 " + catName + "입니다")
    
    elif classNames[prediction[0].argmax()] == 'pocari':
        catName = classNames[prediction[0].argmax()]
        result.configure(text="예측 카테고리는 " + catName + "입니다")

    elif classNames[prediction[0].argmax()] == 'dejava':
        catName = classNames[prediction[0].argmax()]
        result.configure(text="예측 카테고리는 " + catName + "입니다")

    elif classNames[prediction[0].argmax()] == 'cola':
        catName = classNames[prediction[0].argmax()]
        result.configure(text="예측 카테고리는 " + catName + "입니다")
    


def callback(event):
    webbrowser.open_new(event)


root = Tk()
root.title("Timmy Room")
root.geometry("500x500")

lbl = Label(root, text=" ").pack()

imageBtn = Button(root, text="사진 찾기", command=loadImage)
imageBtn.pack()

lbl = Label(root, text=" ").pack()

modelBtn = Button(root, text="결과 분석", command=loadModel)
modelBtn.pack()

colorName = Label(root, text="")
colorName.pack()

result = Label(root, text="")
result.pack()

url1 = Label(root, text="")
url1.pack()

url2 = Label(root, text="")
url2.pack()

url3 = Label(root, text="")
url3.pack()

imageLabel = Label(root, text="")
imageLabel.pack()

root.mainloop()
