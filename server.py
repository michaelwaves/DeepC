from fastapi import FastAPI, File, UploadFile
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "zh_en for chinese to english translation, en_zh for english to chinese translation, translate_pdf for pdf translation"}

@app.post("/zh_en")
async def translate_zh_en(text: str):
    tokenizer.src_lang = "zh"
    encoded_zh = tokenizer(text, return_tensors="pt")
    generated_tokens = model.generate(**encoded_zh, forced_bos_token_id=tokenizer.get_lang_id("en"))
    return {"translated_text": tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)}

@app.post("/en_zh")
async def translate_en_zh(text: str):
    tokenizer.src_lang = "en"
    encoded_en = tokenizer(text, return_tensors="pt")
    generated_tokens = model.generate(**encoded_en, forced_bos_token_id=tokenizer.get_lang_id("zh"))
    return {"translated_text": tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)}

@app.post("/translate_pdf")
async def translate_pdf(file: UploadFile = File(...)):
    # Parse the PDF file
    pdf_reader = PyPDF2.PdfReader(file.file)
    text = ""
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        text += page.extract_text()

    # Translate the text
    tokenizer.src_lang = "en"
    encoded_en = tokenizer(text, return_tensors="pt")
    generated_tokens = model.generate(**encoded_en, forced_bos_token_id=tokenizer.get_lang_id("zh"))
    translated_text = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)

    # Create a new PDF file with the translated text
    pdf_writer = PyPDF2.PdfFileWriter()
    page = PyPDF2.pdf.PageObject.createBlankPage(width=612, height=792)
    page.update_contents(translated_text)
    pdf_writer.addPage(page)

    # Return the translated PDF file
    return pdf_writer.getvalue()

#uvicorn server:app --port 8080 --reload
