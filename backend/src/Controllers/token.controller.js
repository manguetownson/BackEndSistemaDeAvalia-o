import { prisma } from "../lib/prisma.js";

export const getAllTokens = async (_, res) => {
    try {
      const tokens = await prisma.token.findMany();
      return res.json(tokens);
    } catch (error) {
      console.error('Error getting tokens:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const createToken = async (req, res) => {
    const { userId, type, expires, blacklisted } = req.body;
  
    try {
      const token = await prisma.token.create({
        data: {
          userId,
          type,
          expires,
          blacklisted,
        },
      });
      return res.status(201).json(token);
    } catch (error) {
      console.error('Error creating token:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const updateToken = async (req, res) => {
    try {
      const tokenId = req.params.id;
      const { blacklisted } = req.body;
      const updatedToken = await prisma.token.update({
        where: {
          id: tokenId,
        },
        data: {
          blacklisted,
        },
      });
      return res.json(updatedToken);
    } catch (error) {
      console.error('Error updating token:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const deleteToken = async (req, res) => {
    try {
      const tokenId = req.params.id;
      const deletedToken = await prisma.token.delete({
        where: {
          id: tokenId,
        },
      });
      return res.json(deletedToken);
    } catch (error) {
      console.error('Error deleting token:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

