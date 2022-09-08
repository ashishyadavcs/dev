export default async function handler(req, res) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/order`);
  const result = await data.json();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json({
      error: {
        message: "Internal server error",
        status: 500,
      },
    });
  }
}
