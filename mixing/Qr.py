import qrcode
from PIL import Image

#Logo_link = input('dali.png1646569801373.png')

logo = Image.open('logo.png')
basewidth = 75 #int(input('Please Enter the Base Width [Default=75]: ') or '75')
wpercent = (basewidth/float(logo.size[0]))
hsize = int((float(logo.size[1])*float(wpercent)))
logo = logo.resize((basewidth,hsize), Image.ANTIALIAS)
qr_big = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H
)
#url=input('https://www.youtube.com/watch?v=WSLSRrhFD6U&ab_channel=SATSifaction')
qr_big.add_data('http://localhost:3000/upload/1647373486423James_Brown_-_I_Feel_Good_(2).mp3')
qr_big.make()
#qr_color = input('What Color Would You like Your QR Code to be? [Default=Black]: ' or 'Black')
img_qr_big = qr_big.make_image(fill_color='#FF6347', back_color="white").convert('RGB')
pos = ((img_qr_big.size[0] - logo.size[0]) // 2, (img_qr_big.size[1] - logo.size[1]) // 2)
img_qr_big.paste(logo, pos)
#save_path = input('qrcodetest.jpg')
img_qr_big.save('upload/test.jpg')
