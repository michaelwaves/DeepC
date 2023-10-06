from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer, LTChar, LTTextBoxHorizontal, LTTextLineHorizontal, LTTextBox
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter, A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from m2m100 import translate

class PDFTranslator:
    
    def __init__(self, filename):
        self.filename = filename
    
    def get_text_and_bbox(filename):
        text_and_bbox = []
        for page_layout in extract_pages(filename):
            for element in page_layout:
                if isinstance(element, LTTextContainer):
                    for text_line in element:
                        if isinstance(text_line, LTTextContainer):
                            text = text_line.get_text()
                            if not text.startswith("(cid:"):
                                data={
                                    "text":text, 
                                    "bbox":text_line.bbox, 
                                    "x":text_line.bbox[0],
                                    "y":text_line.bbox[1], 
                                    "page":page_layout.pageid
                                }
                                text_and_bbox.append(data)
        return text_and_bbox
                            

    def save_to_file(self, filename):
        data = self.get_text_and_bbox(self.filename)
        c =  canvas.Canvas(filename, pagesize=letter)
        pdfmetrics.registerFont(TTFont('NotoSansChinese', 'fonts/Noto_Sans_TC/NotoSansTC-VariableFont_wght.ttf'))
        c.setFont('NotoSansChinese', 9)
        current_page = 1
        for i in data:
            x,y,text=i["x"],i["y"],i["text"].strip()
            text = translate(text)
            c.drawString(x, y, text)
            if current_page != i["page"]:
                c.showPage()
                current_page = i["page"]
                c.setFont('NotoSansChinese', 9)
        c.save()