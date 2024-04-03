async function query(file) {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer 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"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Échec de la requête à l'API Hugging Face. Statut: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erreur lors de la requête à l'API Hugging Face:", error);
    throw error;
  }
}

export default query;
