from fastapi  import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson.objectid import ObjectId

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    alloe__methods=["*"],
    allow_headers=["*"]
)

cliente = MongoClient("mongodb://mongodb:27017/")
db = cliente["eventos_db"]
colection = db["eventos"]

@app.get("/eventos")
async def getEventos():
    eventos = []
    for evento in collections.find():
        evento["_id"] = str(evento["_id"])
        eventos.append(evento)
    return eventos

@app.put("/eventos/{evento_id}")
async def updateEvento(evento_id: str, nombre: str, fecha: str, lugar: str):
    resultadp = colection.update_one(
        {"_id": ObjectId(evento_id)},
        {"$set": {"nombre": nombre, "fecha": fecha, "lugar": lugar}}

    )
    if resultadp.matched_count == 0:
        raise HTTPException(status_code=404, detail="Evento no encontrado")
    return {"mensaje": "Actualizado"}

@app.delete("/eventos/{evento_id}")
async def deleteEvento(evento_id: str):
    resultado = colection.delete_one({"_id": ObjectId(evento_id)})
    if resultado.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Evento no encontrado")
    return {"mensaje": "Eliminado"}

@app.post("/eventos")
async def createEvento(nombre: str, fecha: str, lugar: str):
    evento = {"nombre": nombre, "fecha": fecha, "lugar": lugar}
    resultado = colection.insert_one(evento)
    evento["_id"] = str(resultado.inserted_id)
    return evento