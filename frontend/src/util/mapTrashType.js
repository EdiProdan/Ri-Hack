export const mapTrashType = (trashType) => {
   if (trashType === "GENERAL") return {textCro: "Generalni otpad", color: "gray"}
   if (trashType === "PLASTIC_METAL") return {textCro: "Plastika", color: "yellow"}
   if (trashType === "BIO") return {textCro: "Biootpad", color: "brown"}
   if (trashType === "PAPER") return {textCro: "Papir", color: "blue"}
   if (trashType === "GLASS") return {textCro: "Staklo", color: "green"}
}
