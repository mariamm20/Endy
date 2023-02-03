from tkinter import *
fields = ('Path',)

def final_balance(entries):
   # period rate:
    r = (entries['Path'].get()) 
    print(r)
    path = r

    # taking encryption key as input
    key = 4

    # print path of image file and encryption key that
    # we are using
    print('The path of file : ', path)
    print('Key for encryption : ', key)

    # open file for reading purpose
    fin = open(path, 'rb')

    # storing image data in variable "image"
    image = fin.read()
    fin.close()

    # converting image into byte array to
    # perform encryption easily on numeric data
    image = bytearray(image)

    # performing XOR operation on each value of bytearray
    for index, values in enumerate(image):
        image[index] = values ^ key

    # opening file for writting purpose
    fin = open(path, 'wb')

    # writing encrypted data in image
    fin.write(image)
    fin.close()
    print('Encryption Done...')
    heading =''
    heading = Label(root, text="Encrypted Successfully", bg="red")
    heading.pack()

def decrypt(entries):
    r = (entries['Path'].get()) 
    print(r)
    path = r

    # taking encryption key as input
    key = 4	
	# open file for reading purpose
    fin = open(path, 'rb')
	# storing image data in variable "image"
    image = fin.read()
    fin.close()
	
	# converting image into byte array to perform decryption easily on numeric data
    image = bytearray(image)

	# performing XOR operation on each value of bytearray
    for index, values in enumerate(image):
        image[index] = values ^ key

	# opening file for writting purpose
    fin = open(path, 'wb')
	
	# writing decryption data in image
    fin.write(image)
    fin.close()
    print('Decryption Done...')
    heading= ''
    heading = Label(root, text="Decrypted Successfully", bg="light green")
    heading.pack()


def makeform(root, fields):
   entries = {}
   for field in fields:
      row = Frame(root)
      lab = Label(row, width=10, text=field+": ", anchor='w')
      ent = Entry(row,width=50)
      row.pack(side = TOP, fill = X, padx = 5 , pady = 5)
      lab.pack(side = LEFT)
      ent.pack(side = RIGHT, expand = YES, fill = X)
      entries[field] = ent
   return entries
if __name__ == '__main__':
   root = Tk()
   ents = makeform(root, fields)
   root.bind('<Return>', (lambda event, e = ents: fetch(e)))
   b1 = Button(root, text = 'Encrypt',
      command=(lambda e = ents: final_balance(e)))
   b1.pack(side = LEFT, padx = 5, pady = 5)
   b2 = Button(root, text = 'Decrypt',
      command=(lambda e = ents: decrypt(e)))
   b2.pack(side = LEFT, padx = 5, pady = 5)
   b3 = Button(root, text = 'Quit', command = root.quit)
   b3.pack(side = LEFT, padx = 5, pady = 5)
   root.mainloop()