import { prisma } from "../lib/prisma.js";

export const createNote = async (req, res) => {
    try {
        const { content, subjectId } = req.body;
        const note = await prisma.note.create({
          data: {
            content,
            subjectId,
          },
        });
        res.status(201).json({message: "Nota criada com sucesso!", note});
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a nota' });
      }
};

export const getNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = await prisma.note.findUnique({
          where: {
            id: noteId,
          },
          include: {
            subject: true,
          },
        });
        res.json(note);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter a nota' });
      }
};

export const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const { content } = req.body;
        const updatedNote = await prisma.note.update({
          where: {
            id: noteId,
          },
          data: {
            content,
          },
        });
        res.json(updatedNote);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a nota' });
      }
};

export const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const deletedNote = await prisma.note.delete({
          where: {
            id: noteId,
          },
        });
        res.json(deletedNote);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a nota' });
      }
};





