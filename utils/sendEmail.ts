export async function sendEmail(formData: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Directly use formData
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An error occurred while sending the email",
    };
  }
}
