import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        const savedPlayer = await newPlayer.save();
        res.json(savedPlayer);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getPlayers = async (req, res) => {
    try {
        const players = await Player.find({});
        res.json(players);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getPlayerWithID = async (req, res) => {
    try {
        const player = await Player.findById(req.params.PlayerId);
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden' });
        }
        res.json(player);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findOneAndUpdate(
            { _id: req.params.PlayerId },
            req.body,
            { new: true }
        );
        
        if (!player) {
            return res.status(404).json({ message: 'Spieler nicht gefunden' });
        }

        res.json(player);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deletePlayer = async (req, res) => {
    try {
        const result = await Player.deleteOne({ _id: req.params.PlayerId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Spieler nicht gefunden' });
        }

        res.json({ message: 'Spieler erfolgreich gelöscht' });
    } catch (err) {
        res.status(500).send(err);
    }
};



