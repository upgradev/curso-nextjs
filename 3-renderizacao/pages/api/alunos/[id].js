export default function handler(req, res) {
  const id = +req.query.id;

  res.status(200).json({
    id: id,
    nome: `João almeida ${id}`,
    email: `jjjjasasas${id}@gmail.com`,
  });
}
