export const mapTrashType = (trashType) => {
   if (trashType === "GENERAL") return {textCro: "Generalni otpad", color: "green"}
   if (trashType === "GLASS" || trashType === "PLASTIC_METAL") return {textCro: "Plastika", color: "yellow"}
   if (trashType === "BIO") return {textCro: "Biootpad", color: "brown"}
   if (trashType === "PAPER" || trashType === "PAPER") return {textCro: "Papir", color: "blue"}
}