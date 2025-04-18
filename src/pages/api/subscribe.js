import { connectToDB } from "../../lib/mongodb";

export default async function handler(req, res) {
  let err = null;
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const db = await connectToDB();

      // Check if the email already exists
      const existingEmail = await db.collection("emails").findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Insert new email
      await db.collection("emails").insertOne({ email });
      return res.status(201).json({ message: "Subscribed successfully!" });
    } catch (error) {
      err = error
      return res.status(500).json({ error });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`).json({err});
}
