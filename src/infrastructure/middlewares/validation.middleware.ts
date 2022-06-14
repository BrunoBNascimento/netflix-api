import { NextFunction, Request, Response } from "express"
import { Schema } from "joi"

export default function(schema: Schema) {
    return async function(req: Request, res: Response, next: NextFunction) {
        try {
            const validated = await schema.validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            if (err) res.status(400).json({ validation: true })

            next(new Error())
        }
    }
}
