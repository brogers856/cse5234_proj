import express from 'express';

export function helloWorld(req, res) {
    const hello = 'Hello World!';
    return res.status(200).send(hello);
}