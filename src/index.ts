import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import crypto from "crypto";
import config from "./config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// const { secret_key, secret_iv, ecnryption_method } = config

// if (!secret_key || !secret_iv || !ecnryption_method) {
//   throw new Error('secretKey, secretIV, and ecnryptionMethod are required')
// }

app.get("/", (req: Request, res: Response) => {
    // const algorithm = 'aes-256-cbc';
    // const key = crypto.randomBytes(32);
    // const iv = crypto.randomBytes(16);

    // const cipher = crypto.createCipheriv(algorithm, key, iv);
    // let encrypted = cipher.update('Hello World', 'utf8', 'hex');
    // encrypted += cipher.final('hex');

    function encryptData(data: string) {
        const cipher = crypto.createCipheriv("aes-256-cbc", key, encryptionIV)
        return Buffer.from(
            cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
        ).toString('base64') // Encrypts data and converts to hex and base64
    }
    
    const key = crypto
        .createHash('sha512')
        .update("test-jigo")
        .digest('hex')
        .substring(0, 32)
    const encryptionIV = crypto
        .createHash('sha512')
        .update("secretIV")
        .digest('hex')
        .substring(0, 16);

    const encrypted = encryptData("jigo goyani")
    res.json({
        data: encrypted,
        status: 200
    });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
