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
      console.log("Errrror",response);
      throw new Error("Failed to query Hugging Face API");
    }
    console.log("Good",response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying Hugging Face API:", error);
    throw error;
  }
}

export default query;
