import { Response, NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';

export const AuthVerify = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.jwt_sec as string, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.body.user = decoded;
    next();
  });
};
